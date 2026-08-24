// library/08-copywriting/ReadabilityAnalyzer.ts

export class ReadabilityAnalyzer {
  public static analyze(text: string): { score: number; verdict: string; avgWordsPerSentence: number } {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = text.split(/\s+/).filter(w => w.length > 0);

    if (sentences.length === 0 || words.length === 0) {
      return { score: 100, verdict: 'Пустой текст', avgWordsPerSentence: 0 };
    }

    const avgWords = words.length / sentences.length;
    // Flesch reading score simulation
    const score = Math.max(20, Math.min(100, Math.round(110 - avgWords * 2.5)));

    let verdict = '✅ Легко воспринимается, идеальный веб-ритм';
    if (score < 50) verdict = '❌ Перегруженный синтаксис (канцелярит)';
    else if (score < 70) verdict = '⚠️ Средняя сложность';

    return {
      score,
      verdict,
      avgWordsPerSentence: Math.round(avgWords)
    };
  }
}
