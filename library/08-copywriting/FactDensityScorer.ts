// library/08-copywriting/FactDensityScorer.ts

export class FactDensityScorer {
  public static calculate(text: string): { score: number; factsCount: number; factsFound: string[] } {
    const factRegexes = [
      /\b\d+([.,]\d+)?\s*(%|px|ms|сек|мин|ч|дн|руб|₽|\$|€|k|M|GB|TB|RPS|FPS)\b/gi,
      /\b(20\d{2}|19\d{2})\s*(год|г\.)\b/gi,
      /\b\d+\s*(клиент|проект|сервер|пользовател|наград|мест)/gi
    ];

    const words = text.split(/\s+/).filter(w => w.length > 0);
    const factsFound: string[] = [];

    factRegexes.forEach(regex => {
      const matches = text.match(regex);
      if (matches) factsFound.push(...matches);
    });

    const factRatio = (factsFound.length / Math.max(1, words.length / 25));
    const score = Math.min(100, Math.round(factRatio * 50));

    return {
      score,
      factsCount: factsFound.length,
      factsFound
    };
  }
}
