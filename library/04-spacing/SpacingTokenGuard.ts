// library/04-spacing/SpacingTokenGuard.ts
// SYS-04: статическая проверка отступов на дизайн-токены.
// Используется в браузере (оверлей-радар) и в CLI (`studio audit` блокирует билд).

export type SpacingProperty = 'padding' | 'margin' | 'gap' | 'row-gap' | 'column-gap' | 'inset';

export interface SpacingViolation {
  file: string;
  line: number;
  property: string;
  value: string;
  px: number;
  nearest: number;
  delta: number;
  severity: 'block' | 'warn';
}

export interface SpacingReport {
  ok: boolean;
  checked: number;
  violations: SpacingViolation[];
  tokenUsage: number; // доля объявленных отступов, пришедших из токенов
}

export const APPROVED_SCALE_PX = [0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 240, 320];

// fluid-значения (clamp/vw) и calc() не считаются «хардкодом», но проверяются на токен в базе
const TOKEN_FN = /var\(\s*--(spacing|space|fluid|fs|gap)[^)]*\)|clamp\(|calc\(|\b0px\b/;

function nearestToken(px: number): number {
  return APPROVED_SCALE_PX.reduce((best, t) => (Math.abs(t - px) < Math.abs(best - px) ? t : best), 0);
}

export class SpacingTokenGuard {
  private scale: number[];

  constructor(scale: number[] = APPROVED_SCALE_PX) {
    this.scale = scale;
  }

  public static isOnScale(px: number, scale: number[] = APPROVED_SCALE_PX): boolean {
    return scale.some((t) => Math.abs(t - px) < 0.5);
  }

  public scanSource(code: string, file: string, opts: { unit?: 'css' | 'tsx' } = {}): SpacingReport {
    const violations: SpacingViolation[] = [];
    const unit = opts.unit ?? (file.endsWith('.css') ? 'css' : 'tsx');
    let checked = 0;
    let tokenized = 0;

    const lines = code.split('\n');
    lines.forEach((raw, i) => {
      const line = raw.trim();
      if (!line || line.startsWith('/*') || line.startsWith('//') || line.startsWith('*')) return;

      // 1. CSS-объявления: padding: 13px / margin: 0 auto 27px
      // Считаем слотами (по одному на каждое значение), иначе shorthand
      // `padding: var(--space-24) var(--space-32)` даёт «1 объявление + 2 px» и
      // доля токенов падает на треть без всякой вины вёрстки.
      const splitSlots = (value: string): string[] => {
        const out: string[] = [];
        let depth = 0;
        let cur = '';
        for (const ch of value) {
          if (ch === '(') depth++;
          if (ch === ')') depth--;
          if (/\s/.test(ch) && depth === 0) {
            if (cur) out.push(cur);
            cur = '';
            continue;
          }
          cur += ch;
        }
        if (cur) out.push(cur);
        return out;
      };
      const declRe = /(--[\w-]+|padding|margin|gap|row-gap|column-gap|inset)(?:-(top|right|bottom|left))?\s*:\s*([^;}]+)/gi;
      let m: RegExpExecArray | null;
      while ((m = declRe.exec(line))) {
        const prop = m[1];
        const value = m[3].trim();
        if (!/padding|margin|gap|inset/i.test(prop)) continue;

        for (const slot of splitSlots(value)) {
          if (/^(auto|inherit|initial|unset|revert|none|100%|50%)$/i.test(slot)) continue;
          // Нулевой отступ — вопрос не шкалы, а сброса: токен не нужен.
          if (/^0(ap)?$/i.test(slot)) {
            checked++;
            tokenized++;
            continue;
          }
          checked++;
          if (TOKEN_FN.test(slot)) {
            tokenized++;
            // clamp()/calc() валидируем по числам внутри: off-scale px внутри clamp → warn
            for (const px of slot.matchAll(/(-?\d+(?:\.\d+)?)px/g)) {
              const num = Math.abs(parseFloat(px[1]));
              if (num === 0 || SpacingTokenGuard.isOnScale(num, this.scale)) continue;
              violations.push({
                file,
                line: i + 1,
                property: prop,
                value: `${prop}: ${value}`,
                px: num,
                nearest: nearestToken(num),
                delta: Math.round((num - nearestToken(num)) * 10) / 10,
                severity: 'warn'
              });
            }
            continue;
          }
          const numMatch = slot.match(/^(-?\d+(?:\.\d+)?)(px|rem|em)$/i);
          if (!numMatch) {
            tokenized++; // переменная, калькуляция, ключевое слово — не хардкод
            continue;
          }
          const num = Math.abs(parseFloat(numMatch[1]));
          const scale = numMatch[2].toLowerCase() === 'px' ? num : parseFloat(numMatch[1]) * 16;
          if (SpacingTokenGuard.isOnScale(Math.round(scale), this.scale)) continue; // на шкале, но не токен
          violations.push({
            file,
            line: i + 1,
            property: prop,
            value: `${prop}: ${value}`,
            px: Math.round(scale * 10) / 10,
            nearest: nearestToken(scale),
            delta: Math.round((scale - nearestToken(scale)) * 10) / 10,
            severity: Math.round(scale) >= 8 ? 'block' : 'warn'
          });
        }
      }

      // 2. JSX-inline и Tailwind-arbitrary: style={{ padding: 13 }}, className="p-[13px]"
      if (unit === 'tsx') {
        for (const arbitrary of line.matchAll(/\b(?:p|m|gap|px|py|my|mt|mb|ml|mr|pt|pb)(?:-\w+)?-\[(\d+(?:\.\d+)?)px\]/g)) {
          const num = parseFloat(arbitrary[1]);
          checked++;
          if (SpacingTokenGuard.isOnScale(num, this.scale)) {
            tokenized++;
            continue;
          }
          violations.push({
            file,
            line: i + 1,
            property: 'tailwind-arbitrary',
            value: arbitrary[0],
            px: num,
            nearest: nearestToken(num),
            delta: Math.round((num - nearestToken(num)) * 10) / 10,
            severity: 'block'
          });
        }
        for (const inline of line.matchAll(/\b(?:padding|margin|gap|paddingTop|paddingBottom|marginTop|marginBottom)\s*:\s*(\d+(?:\.\d+)?)(?!['"]px)/g)) {
          const num = parseFloat(inline[1]);
          if (num === 0) continue;
          checked++;
          if (SpacingTokenGuard.isOnScale(num, this.scale)) {
            tokenized++;
            continue;
          }
          violations.push({
            file,
            line: i + 1,
            property: 'inline-style',
            value: inline[0],
            px: num,
            nearest: nearestToken(num),
            delta: Math.round((num - nearestToken(num)) * 10) / 10,
            severity: 'block'
          });
        }
      }
    });

    return {
      ok: !violations.some((v) => v.severity === 'block'),
      checked,
      violations,
      tokenUsage: checked ? Math.round((tokenized / checked) * 100) : 100
    };
  }

  public aggregate(reports: SpacingReport[]): SpacingReport {
    const violations = reports.flatMap((r) => r.violations);
    const checked = reports.reduce((s, r) => s + r.checked, 0);
    const tokenized = reports.reduce((s, r) => s + (r.tokenUsage / 100) * r.checked, 0);
    return {
      ok: violations.every((v) => v.severity !== 'block'),
      checked,
      violations,
      tokenUsage: checked ? Math.round((tokenized / checked) * 100) : 100
    };
  }
}
