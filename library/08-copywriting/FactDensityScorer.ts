// library/08-copywriting/FactDensityScorer.ts

export class FactDensityScorer {
  public static calculate(text: string): { score: number; factsCount: number; factsFound: string[] } {
    const factRegexes = [
      /\b\d+([.,]\d+)?\s*(%|px|ms|мс|сек|мин|ч|дн|дней|дня|день|руб|₽|\$|€|k|M|GB|TB|RPS|FPS)\b/gi,
      /\b(20\d{2}|19\d{2})\s*(год|года|году|г\.)\b/gi,
      /\d+\s*(клиент|проект|сервер|пользовател|наград|мест|микросервис|устройств)/gi
    ];

    const words = text.split(/\s+/).filter(w => w.length > 0);
    const factsFound: string[] = [];

    factRegexes.forEach(regex => {
      const matches = text.match(regex);
      if (matches) factsFound.push(...matches);
    });

    // Also match standalone numbers > 10
    const standaloneNumbers = text.match(/(^|\s)\d{2,}(\s|[.,!?:;]|$)/g);
    if (standaloneNumbers) {
      standaloneNumbers.forEach(n => {
        const trimmed = n.trim();
        if (!factsFound.some(f => f.includes(trimmed))) {
          factsFound.push(trimmed);
        }
      });
    }

    const factRatio = (factsFound.length / Math.max(1, words.length / 20));
    const score = Math.min(100, Math.round(factRatio * 45));

    return {
      score,
      factsCount: factsFound.length,
      factsFound
    };
  }
}
