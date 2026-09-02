// library/02-anti-slop/GradientSlopDetector.ts
// SYS-02: детектор «AI-градиентов» и визуального слопа в CSS.
// сверка по CIE76 ΔE с заезженными палитрами + структурные признаки генерации.

export interface SlopGradientMatch {
  name: string;
  colors: [string, string];
  similarity: number; // 1 - ΔE/100
}

export interface StylesheetViolation {
  rule: string;
  detail: string;
  line: number;
  snippet: string;
  penalty: number;
}

export interface StylesheetReport {
  ok: boolean;
  score: number;
  violations: StylesheetViolation[];
  gradients: number;
}

interface KnownSlop {
  name: string;
  colors: [string, string];
}

export class GradientSlopDetector {
  private knownSlop: KnownSlop[] = [
    { name: 'AI Purple-Blue (Overused)', colors: ['#667eea', '#764ba2'] },
    { name: 'AI Pink-Red Gradient', colors: ['#f093fb', '#f5576c'] },
    { name: 'AI Cyan-Blue Gradient', colors: ['#4facfe', '#00f2fe'] },
    { name: 'AI Sunset Orange', colors: ['#fa709a', '#fee140'] },
    { name: 'Tailwind Indigo→Fuchsia default', colors: ['#6366f1', '#d946ef'] },
    { name: 'Startup Teal-Mint', colors: ['#11998e', '#38ef7d'] },
    { name: 'Blueprint Blue (SaaS hero)', colors: ['#1e3c72', '#2a5298'] },
    { name: 'Vaporwave Pink-Cyan', colors: ['#ff6ec7', '#7873f5'] }
  ];

  // ── колориметрия ────────────────────────────────────────────────────────
  public static hexToRgb(hex: string): [number, number, number] | null {
    let h = hex.trim().replace('#', '');
    if (/^[0-9a-f]{3}$/i.test(h)) h = h.split('').map((c) => c + c).join('');
    if (!/^[0-9a-f]{6}$/i.test(h)) return null;
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }

  private static toLab(rgb: [number, number, number]): [number, number, number] {
    const lin = rgb.map((v) => {
      const s = v / 255;
      return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    }) as [number, number, number];

    let x = (lin[0] * 0.4124 + lin[1] * 0.3576 + lin[2] * 0.1805) / 0.95047;
    let y = lin[0] * 0.2126 + lin[1] * 0.7152 + lin[2] * 0.0722;
    let z = (lin[0] * 0.0193 + lin[1] * 0.1192 + lin[2] * 0.9505) / 1.08883;

    const f = (t: number) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
    x = f(x); y = f(y); z = f(z);
    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
  }

  public static deltaE(hex1: string, hex2: string): number {
    const a = GradientSlopDetector.hexToRgb(hex1);
    const b = GradientSlopDetector.hexToRgb(hex2);
    if (!a || !b) return 999;
    const [l1, a1, b1] = GradientSlopDetector.toLab(a);
    const [l2, a2, b2] = GradientSlopDetector.toLab(b);
    return Math.sqrt((l1 - l2) ** 2 + (a1 - a2) ** 2 + (b1 - b2) ** 2);
  }

  // ── публичный API (обратная совместимость со старыми тестами) ──────────
  public checkGradient(
    color1: string,
    color2: string,
    options: { tolerance?: number } = {}
  ): { isSlop: boolean; matchedName?: string; similarity?: number; recommendation: string } {
    const tolerance = options.tolerance ?? 12; // ΔE, ниже — «тот же самый» градиент
    const c1 = color1.toLowerCase().trim();
    const c2 = color2.toLowerCase().trim();

    for (const slop of this.knownSlop) {
      const exact =
        (c1 === slop.colors[0] && c2 === slop.colors[1]) ||
        (c1 === slop.colors[1] && c2 === slop.colors[0]);
      const near =
        GradientSlopDetector.deltaE(c1, slop.colors[0]) <= tolerance &&
        GradientSlopDetector.deltaE(c2, slop.colors[1]) <= tolerance;
      const nearSwapped =
        GradientSlopDetector.deltaE(c1, slop.colors[1]) <= tolerance &&
        GradientSlopDetector.deltaE(c2, slop.colors[0]) <= tolerance;

      if (exact || near || nearSwapped) {
        const d1 = GradientSlopDetector.deltaE(c1, slop.colors[0]);
        const d2 = GradientSlopDetector.deltaE(c2, slop.colors[1]);
        return {
          isSlop: true,
          matchedName: slop.name,
          similarity: Math.round((1 - Math.max(d1, d2) / 100) * 100) / 100,
          recommendation:
            'Заменить на монохромную плашку с зерном либо на пару из Brand DNA. Если нужен «ход света» — два близко сидячих тона одного hue (ΔE < 10) вместо радуги.'
        };
      }
    }

    return { isSlop: false, similarity: 0, recommendation: '✅ Градиент / цветовая пара не совпадает с известным AI-слопом.' };
  }

  // ── статический аудит stylesheet-строки ────────────────────────────────
  public scanStylesheet(css: string, fileName = '(inline)'): StylesheetReport {
    const violations: StylesheetViolation[] = [];
    const lines = css.split('\n');
    const lineOf = (index: number) => css.slice(0, index).split('\n').length;
    const snippetAt = (line: number) => (lines[line - 1] ?? '').trim().slice(0, 110);

    // 1. Любой linear/radial/conic-gradient сверяется со списком slop-пар.
    const gradRe = /(?:linear|radial|conic)-gradient\(([^)]*)\)/gi;
    let gradients = 0;
    let m: RegExpExecArray | null;
    while ((m = gradRe.exec(css))) {
      gradients++;
      const colors = (m[1].match(/#[0-9a-f]{3,8}\b|rgba?\([^)]*\)/gi) ?? []).filter(
        (c) => c.startsWith('#')
      );
      for (let i = 0; i + 1 < colors.length; i++) {
        const short = colors[i].replace(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/, '#$1$1$2$2$3$3');
        const pair = this.checkGradient(short, colors[i + 1]);
        if (pair.isSlop) {
          const line = lineOf(m.index);
          violations.push({
            rule: 'GRADIENT_SLOP',
            detail: `${pair.matchedName}: ${colors[i]} → ${colors[i + 1]}`,
            line,
            snippet: snippetAt(line),
            penalty: 14
          });
        }
      }
    }

    // 2. Радужный градиент текста — визитная карточка генеративного лендинга.
    if (/background-clip\s*:\s*text/i.test(css) && /linear-gradient/i.test(css)) {
      const at = css.search(/background-clip\s*:\s*text/i);
      violations.push({
        rule: 'GRADIENT_TEXT',
        detail: 'background-clip: text поверх градиента',
        line: lineOf(at),
        snippet: snippetAt(lineOf(at)),
        penalty: 12
      });
    }

    // 3. Glassmorphism-эпидемия: backdrop-filter на каждой плашке.
    const blurs = (css.match(/backdrop-filter\s*:/gi) ?? []).length;
    if (blurs >= 4) {
      violations.push({
        rule: 'GLASS_OVERUSE',
        detail: `backdrop-filter используется ${blurs} раз — «стекло» должно быть акцентом, а не фоном`,
        line: lineOf(css.search(/backdrop-filter\s*:/i)),
        snippet: snippetAt(lineOf(css.search(/backdrop-filter\s*:/i))),
        penalty: Math.min(12, blurs)
      });
    }

    // 4. Неоновое свечение на всём подряд.
    const glows = (css.match(/box-shadow\s*:[^;]*rgba?\([^)]*,\s*0\.[2-9][^;]*;/gi) ?? []).length;
    if (glows >= 6) {
      violations.push({
        rule: 'NEON_GLOW_SPAM',
        detail: `${glows} светящихся теней — оставить 1-2 точки акцента`,
        line: 1,
        snippet: fileName,
        penalty: 8
      });
    }

    // 5. Дефолтные шрифты без модификации.
    const defaultFont = css.match(/font-family\s*:\s*[^;]*(Inter|Poppins|Roboto|Montserrat|Arial)[^;]*/i);
    if (defaultFont && !/--font|'[A-Z][a-z]+ (One|Text|Sans Display)'/i.test(css)) {
      violations.push({
        rule: 'DEFAULT_FONT_STACK',
        detail: `Шрифт по умолчанию из AI-прайса: ${defaultFont[0].trim().slice(0, 60)}`,
        line: lineOf(css.search(/font-family\s*:\s*[^;]*(Inter|Poppins|Roboto|Montserrat|Arial)[^;]*/i)),
        snippet: snippetAt(lineOf(css.search(/font-family\s*:[^;]*(Inter|Poppins|Roboto|Montserrat|Arial)[^;]*/i))),
        penalty: 10
      });
    }

    const score = Math.max(0, 100 - violations.reduce((s, v) => s + v.penalty, 0));
    return { ok: score >= 75, score, violations, gradients };
  }

  public listKnownSlop(): KnownSlop[] {
    return this.knownSlop;
  }
}
