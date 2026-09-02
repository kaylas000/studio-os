// library/08-copywriting/ReadabilityAnalyzer.ts
// SYS-08: читаемость. Flesch Reading Ease, адаптированный под русскую морфологию:
// в русском средняя длина слога заметно больше, поэтому классический коэффициент
// 84.6 обнуляет любой осмысленный технический текст. Калибровка: 45.0.
// Порог студии: score >= 70.

export interface ReadabilityResult {
  score: number;
  rawFlesch: number;
  verdict: string;
  avgWordsPerSentence: number;
  avgSyllablesPerWord: number;
  sentences: number;
  words: number;
  longestSentence: number;
  passiveHits: number;
  officeCacheHits: number; // канцелярит: «осуществляется», «в целях», «наличие возможности»
}

const VOWELS = /[аеёиоуыэюя]/giu;
// `\b` не работает с кириллицей — границы слов заданы явно через \p{L}.
const OFFICE_WORDS =
  /(?<![\p{L}\p{N}])(осуществля[\p{L}]*|явля[\p{L}]*|наличи[\p{L}]*\s+возможности|в\s+целях|в\s+рамках|по\s+мере\s+возможности|на\s+данный\s+момент|необходимост[ии]|следует\s+отм[её]тить|стоит\s+подчеркнуть|что\s+немаловажно)(?![\p{L}\p{N}])/giu;
const PASSIVE =
  /(?<![\p{L}\p{N}])(был[иоа]?\s+произвед[\p{L}]*|будет\s+выполнено|осуществляется|проводится|реализуется|внедряется|обеспечивается|выполняется\s+комплекс)(?![\p{L}\p{N}])/giu;

function syllables(word: string): number {
  const groups = word.toLocaleLowerCase('ru').match(VOWELS);
  return Math.max(1, groups ? groups.length : 1);
}

function tokens(text: string): string[] {
  return text.split(/\s+/u).map((w) => w.replace(/[^\p{L}\p{N}'-]/gu, '')).filter(Boolean);
}

export class ReadabilityAnalyzer {
  public static analyze(text: string): ReadabilityResult {
    const source = String(text ?? '').replace(/\s+/g, ' ').trim();
    const empty = {
      score: 100,
      rawFlesch: 100,
      verdict: 'Пустой текст',
      avgWordsPerSentence: 0,
      avgSyllablesPerWord: 0,
      sentences: 0,
      words: 0,
      longestSentence: 0,
      passiveHits: 0,
      officeCacheHits: 0
    } as ReadabilityResult;

    if (!source) return empty;

    const sentences = source.split(/(?<=[.!?…])\s+/u).filter((s) => s.trim().length > 1);
    const words = tokens(source);
    if (!sentences.length || !words.length) return empty;

    const syllableTotal = words.reduce((sum, w) => sum + syllables(w), 0);
    const asl = words.length / sentences.length;
    const asw = syllableTotal / words.length;

    const rawFlesch = 206.835 - 1.015 * asl - 84.6 * asw; // эталонная формула — для справки
    const adapted = 206.835 - 1.015 * asl - 45.0 * asw; // калибровка под русский

    const longestSentence = Math.max(
      0,
      ...sentences.map((s) => tokens(s).length)
    );
    const passiveHits = (source.match(PASSIVE) ?? []).length;
    const officeCacheHits = (source.match(OFFICE_WORDS) ?? []).length;

    let score = Math.max(0, Math.min(100, Math.round(adapted)));
    score -= Math.min(15, passiveHits * 5);
    score -= Math.min(20, officeCacheHits * 6);
    if (longestSentence > 34) score -= 8;
    if (longestSentence > 45) score -= 8;
    score = Math.max(0, Math.min(100, score));

    let verdict = '✅ Легко воспринимается, идеальный веб-ритм';
    if (score < 50) verdict = '❌ Перегруженный синтаксис (канцелярит)';
    else if (score < 70) verdict = '⚠️ Средняя сложность — порог студии 70 не пройден';

    return {
      score,
      rawFlesch: Math.round(rawFlesch * 10) / 10,
      verdict,
      avgWordsPerSentence: Math.round(asl * 10) / 10,
      avgSyllablesPerWord: Math.round(asw * 100) / 100,
      sentences: sentences.length,
      words: words.length,
      longestSentence,
      passiveHits,
      officeCacheHits
    };
  }
}
