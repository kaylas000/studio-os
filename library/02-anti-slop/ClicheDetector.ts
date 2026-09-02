// library/02-anti-slop/ClicheDetector.ts
// SYS-02 ANTI-SLOP: детектор AI-клише и канцелярита.
// Работает в браузере (Vite) и в Node (CLI `studio audit` через type-stripping).
// Словарь можно переопределить/дополнить externally — CLI подгружает dictionaries/ai-phrases-ru.json.

export interface ClichePhraseSet {
  critical: string[];
  medium: string[];
  structural: string[];
  /** Термины отрасли, которые детектор обязан пропускать: маскируются до поиска. */
  whitelist?: string[];
}

export type ClicheIssueType =
  | 'CRITICAL_AI_CLICHE'
  | 'BUZZWORD_OVERUSE'
  | 'STRUCTURAL_PATTERN'
  | 'EM_DASH_OVERUSE'
  | 'HEADLINE_SYNTAX'
  | 'PUNCTUATION_TIC';

export interface ClicheIssue {
  type: ClicheIssueType;
  phrase: string;
  count: number;
  penalty: number;
  lines?: number[];
  hint?: string;
}

export interface ClicheAnalysisResult {
  score: number; // 0-100 (Originality: 100 = чисто)
  verdict: string;
  issues: ClicheIssue[];
  words: number;
  hitsPer100Words: number;
}

export interface SourceFragment {
  file: string;
  text: string;
  /** строка файла для каждого куска прозы: без неё отчёт показывает номера строк внутри выжимки */
  proseLines?: number[];
}

export interface FileFinding extends ClicheIssue {
  file: string;
}

// Базовый словарь. Внешний JSON (dictionaries/*) добавляется сверху, а не заменяет его.
export const BUILTIN_PHRASES: ClichePhraseSet = {
  critical: [
    'в современном цифровом мире',
    'в современном мире',
    'раскройте потенциал',
    'погрузитесь в мир',
    'уникальный опыт взаимодействия',
    'передовые технологии будущего',
    'команда профессионалов своего дела',
    'команда профессионалов',
    'индивидуальный подход к каждому клиенту',
    'мы не просто',
    'воплощаем ваши идеи в жизнь',
    'на стыке технологий и креатива',
    'unlock the power of',
    'revolutionize your business',
    'широкий спектр услуг',
    'полный комплекс услуг',
    'полный спектр работ',
    'индивидуальные решения для каждого',
    'демократичные цены',
    'лучшие цены в городе',
    'гибкая система скидок',
    'динамично развивающаяся компания',
    'более 10 лет на рынке'
  ],
  medium: [
    'инновацион',
    'уникальн',
    'качественн',
    'профессиональн',
    'индивидуальн',
    'эксклюзивн',
    'современн',
    'передов',
    'оптимизац',
    'трансформ',
    'масштабн',
    'фундаментальн',
    'мы предлагаем',
    'мы обеспечиваем',
    'наши специалисты',
    'незабываем',
    'беспрецедентн',
    ' Cutting-edge',
    'seamless',
    'game-changer',
    'leverage',
    'holistic'
  ],
  structural: [
    // Шаблоны, которые выдаёт LLM-текст. X/Y — произвольные куски фразы.
    'не просто {X}, а {Y}',
    'это не только {X}, но и {Y}',
    'будь то {X} или {Y}',
    'как {X}, так и {Y}',
    'от {X} до {Y}',
    'где {X} встречает {Y}'
  ]
};

// Слот обязан начинаться с 2+ букв: иначе «от 12 до 28 м» (диапазон характеристик)
// считался бы AI-шаблоном «от X до Y».
const STRUCTURAL_SLOT = '(?:[а-яёa-z]{2}[а-яёa-z0-9 .·-]{0,40}?)';

function escapeRegExp(raw: string): string {
  return raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function structuralToRegExp(template: string): RegExp | null {
  if (!template.includes('{X}')) return null;
  const body = escapeRegExp(template)
    .replace('\\{X\\}', STRUCTURAL_SLOT)
    .replace('\\{Y\\}', STRUCTURAL_SLOT);
  try {
    return new RegExp(`(^|[^а-яёa-z0-9])${body}`, 'gi');
  } catch {
    return null;
  }
}

function lineNumbersOf(text: string, needle: string, limit = 6): number[] {
  const lines: number[] = [];
  let from = 0;
  for (;;) {
    const at = text.indexOf(needle, from);
    if (at === -1 || lines.length >= limit) break;
    lines.push(text.slice(0, at).split('\n').length);
    from = at + needle.length;
  }
  return lines;
}

export class ClicheDetector {
  private criticalCliches: string[];
  private mediumBuzzwords: string[];
  private structuralPatterns: RegExp[];
  private structuralNames: string[];
  private whitelist: string[];

  constructor(phrases?: Partial<ClichePhraseSet>) {
    this.whitelist = (phrases?.whitelist ?? []).map((w) => w.trim().toLowerCase()).filter(Boolean);
    this.criticalCliches = dedupe([...BUILTIN_PHRASES.critical, ...(phrases?.critical ?? [])]);
    this.mediumBuzzwords = dedupe([...BUILTIN_PHRASES.medium, ...(phrases?.medium ?? [])]);

    this.structuralPatterns = [];
    this.structuralNames = [];
    for (const tpl of [...BUILTIN_PHRASES.structural, ...(phrases?.structural ?? [])]) {
      const re = structuralToRegExp(tpl);
      if (re) {
        this.structuralPatterns.push(re);
        this.structuralNames.push(tpl);
      }
    }
  }

  /**
   * Маскирует легальные отраслевые термины («ответственный за производство работ»)
   * символами той же длины — чтобы смещение строк и остальные поиски не съехали.
   */
  private maskWhitelist(text: string): string {
    if (!this.whitelist.length) return text;
    let out = text;
    for (const term of this.whitelist) {
      const re = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      out = out.replace(re, (hit) => 'Q'.repeat(hit.length));
    }
    return out;
  }

  public analyze(text: string, opts: { reportLines?: boolean } = {}): ClicheAnalysisResult {
    const raw = String(text ?? '');
    const source = this.maskWhitelist(raw);
    let score = 100;
    const issues: ClicheIssue[] = [];
    const reportLines = opts.reportLines ?? false;

    const push = (issue: ClicheIssue, probe: string) => {
      score -= issue.penalty;
      if (reportLines) issue.lines = lineNumbersOf(source, probe);
      issues.push(issue);
    };

    // 1. Критические клише — штраф 20 за вхождение.
    for (const phrase of this.criticalCliches) {
      const re = new RegExp(escapeRegExp(phrase), 'gi');
      const matches = source.match(re);
      if (!matches?.length) continue;
      push(
        {
          type: 'CRITICAL_AI_CLICHE',
          phrase: matches[0],
          count: matches.length,
          penalty: matches.length * 20,
          hint: 'Переписать конкретикой: цифра, объект, срок, техника в работе.'
        },
        matches[0]
      );
    }

    // 2. Buzzword-окончания: штраф 10 за вхождение.
    for (const word of this.mediumBuzzwords) {
      const stem = word.trim().toLowerCase();
      const re = new RegExp(`(^|[^а-яёa-z0-9])${escapeRegExp(stem)}[а-яёa-z0-9]*`, 'gi');
      const matches = source.match(re);
      if (!matches?.length) continue;
      const penalty = matches.length * 10;
      push(
        {
          type: 'BUZZWORD_OVERUSE',
          phrase: stem,
          count: matches.length,
          penalty,
          hint: 'Заменить оценочное слово фактом: чем именно «качественное» измеряется.'
        },
        matches[0].trim()
      );
    }

    // 3. Структурные AI-шаблоны: штраф 12 за вхождение.
    this.structuralPatterns.forEach((re, i) => {
      const matches = source.match(re);
      if (!matches?.length) return;
      push(
        {
          type: 'STRUCTURAL_PATTERN',
          phrase: this.structuralNames[i],
          count: matches.length,
          penalty: matches.length * 12,
          hint: 'Разорвать симметричную конструкцию, начать с подлежащего и числа.'
        },
        matches[0].trim()
      );
    });

    // 4. Тире-тик и «заголовочный» слоп.
    // Русская тире-типографика легальна: реагируем на плотность, а не на количество.
    const emDashCount = (source.match(/—/g) ?? []).length;
    const wordsBeforeDash = (source.match(/[\p{L}\p{N}]+/gu) ?? []).length;
    if (emDashCount > Math.max(8, wordsBeforeDash / 45)) {
      push({ type: 'EM_DASH_OVERUSE', phrase: '—', count: emDashCount, penalty: 6, hint: 'Тире в каждой строке — признаком генерации. Оставить в определениях.' }, '—');
    }

    const titleCaseHeadings = (source.match(/^[\t ]*(?:<h[123][^>]*>|##\s)([А-ЯЁA-Z][^<\n]{4,60})$/gm) ?? [])
      .filter((h) => /[А-ЯЁA-Z]{2,}\s*[А-ЯЁA-Z]{2,}\s*[А-ЯЁA-Z]{2,}/.test(h))
      .filter((h) => !/\d/.test(h));
    if (titleCaseHeadings.length >= 2) {
      push(
        {
          type: 'HEADLINE_SYNTAX',
          phrase: titleCaseHeadings[0].trim(),
          count: titleCaseHeadings.length,
          penalty: 8,
          hint: 'Заголовки КАК В ЭТОМ СТИЛЕ — признак шаблонной генерации. Пишать строчными.'
        },
        titleCaseHeadings[0].trim()
      );
    }

    const words = (source.match(/[а-яёa-z0-9]+/gi) ?? []).length;
    const hits = issues.reduce((s, i) => s + i.count, 0);

    const finalScore = Math.max(0, Math.min(100, Math.round(score)));
    let verdict = '🏆 Высокая оригинальность (без AI-клише)';
    if (finalScore < 50) verdict = '❌ Обнаружен критический AI-слоп';
    else if (finalScore < 75) verdict = '⚠️ Требуется доработка и конкретизация';
    else if (finalScore < 100) verdict = '🟢 Проходит порог студии (≥ 75)';

    return {
      score: finalScore,
      verdict,
      issues,
      words,
      hitsPer100Words: words ? Math.round((hits / words) * 100 * 10) / 10 : hits
    };
  }

  // Пакетный прогон по исходникам (используется core-engine/lib/audit.js).
  public analyzeSources(fragments: SourceFragment[]): {
    score: number;
    issues: FileFinding[];
    mean: number;
    worst: number;
    perFile: Array<{ file: string; score: number; issues: ClicheIssue[] }>;
  } {
    const perFile: Array<{ file: string; score: number; issues: ClicheIssue[] }> = [];
    const issues: FileFinding[] = [];

    for (const frag of fragments) {
      const res = this.analyze(frag.text, { reportLines: true });
      if (frag.proseLines?.length) {
        for (const issue of res.issues) {
          if (issue.lines?.length) {
            issue.lines = issue.lines.map((n) => frag.proseLines?.[n - 1] ?? n);
          }
        }
      }
      perFile.push({ file: frag.file, score: res.score, issues: res.issues });
      for (const issue of res.issues) {
        issues.push({ ...issue, file: frag.file });
      }
    }

    const worst = perFile.length ? Math.min(...perFile.map((p) => p.score)) : 100;
    const totalWords = fragments.reduce((s, f) => s + (f.text.match(/[\p{L}\p{N}]+/gu) ?? []).length, 0);
    const mean = perFile.length
      ? perFile.reduce((acc, p) => acc + p.score * Math.max(1, (fragments.find((f) => f.file === p.file)?.text.match(/[\p{L}\p{N}]+/gu) ?? []).length), 0) /
        Math.max(1, perFile.reduce((acc, p) => acc + Math.max(1, (fragments.find((f) => f.file === p.file)?.text.match(/[\p{L}\p{N}]+/gu) ?? []).length), 0))
      : 100;
    // Взвешивание по объёму текста + штраф за наихудший блок: «в среднем чисто» не спасает.
    const score = perFile.length ? Math.max(0, Math.min(100, Math.round(mean * 0.55 + worst * 0.45))) : 100;

    return { score, issues, perFile, mean: Math.round(mean), worst };
  }

  /**
   * Из исходника достаёт только человекочитаемую прозу: строковые литералы копирования,
   * JSX-текст между тегами и содержимое md/html. Идентификаторы, классы и пути в замер
   * не попадают — иначе факт-плотность и Flesch считаются по коду.
   */
  /**
   * То же, что extractProse, но с картой «строка прозы → строка файла».
   * Сканируем построчно: один апостроф в JSX-тексте ("can't", «"кавычки"») иначе
   * съедает полфайла как «строку», и весь копирайнт между ними уходит из анализа.
   */
  public static extractProseWithLines(code: string): Array<{ text: string; line: number }> {
    const chunks: Array<{ text: string; line: number }> = [];
    const looksLikeCode = (raw: string) =>
      /[{};=<>|`\\]|\bpx\b|#[0-9a-f]{3,8}|[\w.-]+\.(ts|tsx|css|scss|png|jpg|jpeg|svg|json|webp)/i.test(raw);
    const looksLikeProse = (raw: string) => /[\p{L}]{3,}\s+[\p{L}]{3,}/u.test(raw);
    const push = (raw: string, line: number) => {
      const clean = raw
        .replace(/\\n/g, ' ')
        .replace(/\$\{[^}]*\}/g, ' ')
        .replace(/[ \t]+/g, ' ')
        .trim();
      if (clean.length < 12 || looksLikeCode(clean) || !looksLikeProse(clean)) return;
      chunks.push({ text: clean, line });
    };

    const lines = String(code ?? '').split('\n');
    const single = /(['"])((?:\\.|(?!\1)[^'"\\\n]){12,}?)\1/g;
    lines.forEach((line, i) => {
      single.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = single.exec(line))) push(m[2], i + 1);

      const jsxText = />\s*([^<>{}\n]{18,}?)\s*</g;
      let j: RegExpExecArray | null;
      while ((j = jsxText.exec(line))) push(j[1], i + 1);
    });

    // Многострочные шаблонные литералы: «сырой» текст между ` бэктиками
    const template = /`([^`\\]{12,}?)`/g;
    let t: RegExpExecArray | null;
    while ((t = template.exec(code))) {
      const line = code.slice(0, t.index).split('\n').length;
      push(t[1].replace(/\n\s*/g, ' '), line);
    }

    const seen = new Set<string>();
    return chunks.filter((c) => {
      if (seen.has(c.text)) return false;
      seen.add(c.text);
      return true;
    });
  }

  public static extractProse(code: string): string {
    return ClicheDetector.extractProseWithLines(code).map((c) => c.text).join('\n');
  }

  // Устаревшее имя: оставлено для совместимости showcase-страниц.
  // Вытаскивает «читаемый» текст из исходника, чтобы аудит не ругался на код.
  public static extractVisibleText(code: string, kind: 'tsx' | 'md' | 'json' | 'css' = 'tsx'): string {
    if (kind === 'json') {
      try {
        const parsed = JSON.parse(code);
        const out: string[] = [];
        const walk = (node: unknown) => {
          if (typeof node === 'string') out.push(node);
          else if (Array.isArray(node)) node.forEach(walk);
          else if (node && typeof node === 'object') Object.values(node).forEach(walk);
        };
        walk(parsed);
        return out.join('\n');
      } catch {
        return code;
      }
    }

    if (kind === 'css') return '';

    let s = code
      .replace(/\/\*[\s\S]*?\*\//g, ' ')
      .replace(/(^|[^:])\/\/[^\n]*/g, '$1 ')
      .replace(/^\s*import[\s\S]*?from\s+['"][^'"]+['"];?$/gm, ' ')
      .replace(/^\s*export\s+(type|interface)\b[\s\S]*?$/gm, ' ');

    if (kind === 'tsx') {
      s = s
        .replace(/<[A-Za-z/][^>]*>/g, ' ')
        .replace(/\{[^{}]*\}/g, ' ')
        .replace(/`[^`]*`/g, ' ');
    }

    return s
      .replace(/&[a-z]+;/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
}

function dedupe(list: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const item of list) {
    const key = item.trim().toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(item.trim());
  }
  return out;
}
