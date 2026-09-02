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
      const declRe = /(--[\w-]+|padding|margin|gap|row-gap|column-gap|inset)(?:-(top|right|bottom|left))?\s*:\s*([^;}]+)/gi;
      let m: RegExpExecArray | null;
      while ((m = declRe.exec(line))) {
        const prop = m[1];
        const value = m[3].trim();
        if (!/padding|margin|gap|inset/i.test(prop)) continue;
        checked++;
        if (TOKEN_FN.test(value)) {
          tokenized++;
          // clamp()/var() валидируем по числам внутри: есть off-scale px в clamp → warn
          for (const px of value.matchAll(/(\d+(?:\.\d+)?)px/g)) {
            const num = parseFloat(px[1]);
            if (num === 0 || SpacingTokenGuard.isOnScale(num, this.scale)) continue;
            violations.push({
              file,
              line: i + 1,
              property: prop,
              value,
              px: num,
              nearest: nearestToken(num),
              delta: Math.round((num - nearestToken(num)) * 10) / 10,
              severity: 'warn'
            });
          }
          continue;
        }

        const pxMatches = [...value.matchAll(/(-?\d+(?:\.\d+)?)px/g)];
        if (!pxMatches.length) {
          // 8px-сетка пропущена только если значение в rem/em и кратно 0.25rem
          const rem = [...value.matchAll(/(-?\d+(?:\.\d+)?)rem/g)];
          if (rem.length && rem.every((r) => Math.abs((parseFloat(r[1]) * 16) % 4) < 0.01 || Math.abs(parseFloat(r[1]) * 16 % 2) < 0.01)) {
            tokenized++;
          }
          continue;
        }

        for (const px of pxMatches) {
          const num = Math.abs(parseFloat(px[1]));
          checked++;
          if (SpacingTokenGuard.isOnScale(num, this.scale)) {
            tokenized++;
            continue;
          }
          violations.push({
            file,
            line: i + 1,
            property: prop,
            value: `${prop}: ${value}`,
            px: num,
            nearest: nearestToken(num),
            delta: Math.round((num - nearestToken(num)) * 10) / 10,
            severity: num >= 8 ? 'block' : 'warn'
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
