// library/02-anti-slop/GradientSlopDetector.ts

export interface SlopGradientMatch {
  name: string;
  colors: [string, string];
  similarity: number;
}

export class GradientSlopDetector {
  private knownSlop = [
    { name: 'AI Purple-Blue (Overused)', colors: ['#667eea', '#764ba2'] },
    { name: 'AI Pink-Red Gradient', colors: ['#f093fb', '#f5576c'] },
    { name: 'AI Cyan-Blue Gradient', colors: ['#4facfe', '#00f2fe'] },
    { name: 'AI Sunset Orange', colors: ['#fa709a', '#fee140'] }
  ];

  public checkGradient(color1: string, color2: string): { isSlop: boolean; matchedName?: string; recommendation: string } {
    const c1 = color1.toLowerCase().trim();
    const c2 = color2.toLowerCase().trim();

    for (const slop of this.knownSlop) {
      if (
        (c1 === slop.colors[0].toLowerCase() && c2 === slop.colors[1].toLowerCase()) ||
        (c1 === slop.colors[1].toLowerCase() && c2 === slop.colors[0].toLowerCase())
      ) {
        return {
          isSlop: true,
          matchedName: slop.name,
          recommendation: 'Замените градиент на монохромную плашку с шумом или нестандартную пару из Brand DNA.'
        };
      }
    }

    return {
      isSlop: false,
      recommendation: '✅ Градиент / цветовая пара уникальна.'
    };
  }
}
