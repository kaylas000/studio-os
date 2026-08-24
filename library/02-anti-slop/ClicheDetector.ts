// library/02-anti-slop/ClicheDetector.ts

export interface ClicheIssue {
  type: string;
  phrase: string;
  count: number;
  penalty: number;
}

export interface ClicheAnalysisResult {
  score: number; // 0-100
  verdict: string;
  issues: ClicheIssue[];
}

export class ClicheDetector {
  private criticalCliches: string[] = [
    "в современном цифровом мире",
    "раскройте потенциал",
    "revolutionize your business",
    "погрузитесь в мир",
    "уникальный опыт взаимодействия",
    "передовые технологии будущего",
    "команда профессионалов своего дела",
    "индивидуальный подход к каждому клиенту",
    "мы не просто",
    "воплощаем ваши идеи в жизнь",
    "на стыке технологий и креатива",
    "unlock the power of"
  ];

  private mediumBuzzwords: string[] = [
    "инновационн",
    "уникальн",
    "качественн",
    "профессиональн",
    "индивидуальн",
    "эксклюзивн",
    "seamless",
    "cutting-edge",
    "game-changer"
  ];

  public analyze(text: string): ClicheAnalysisResult {
    let score = 100;
    const issues: ClicheIssue[] = [];

    // 1. Critical cliches
    this.criticalCliches.forEach(phrase => {
      const regex = new RegExp(phrase, 'gi');
      const matches = text.match(regex);
      if (matches) {
        const penalty = matches.length * 20;
        score -= penalty;
        issues.push({
          type: 'CRITICAL_AI_CLICHE',
          phrase: matches[0],
          count: matches.length,
          penalty
        });
      }
    });

    // 2. Medium buzzwords
    this.mediumBuzzwords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\w*`, 'gi');
      const matches = text.match(regex);
      if (matches && matches.length > 1) {
        const penalty = (matches.length - 1) * 8;
        score -= penalty;
        issues.push({
          type: 'BUZZWORD_OVERUSE',
          phrase: word,
          count: matches.length,
          penalty
        });
      }
    });

    // 3. Excessive em-dash check
    const emDashCount = (text.match(/—/g) || []).length;
    if (emDashCount > 3) {
      score -= 10;
      issues.push({
        type: 'EM_DASH_OVERUSE',
        phrase: '—',
        count: emDashCount,
        penalty: 10
      });
    }

    const finalScore = Math.max(0, Math.min(100, score));

    let verdict = '🏆 Высокая оригинальность (без AI-клише)';
    if (finalScore < 50) verdict = '❌ Обнаружен критический AI-слоп';
    else if (finalScore < 75) verdict = '⚠️ Требуется доработка и конкретизация';

    return {
      score: finalScore,
      verdict,
      issues
    };
  }
}
