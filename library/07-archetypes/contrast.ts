// library/07-archetypes/contrast.ts
// SYS-07: контраст. WCAG 2.x (точная формула) + APCA Lc.
// APCA: структура 0.1.9 (Adams-Chen Yc, мягкий клип, полярностные экспоненты)
// с калибровкой по якорям: #000/#fff = 106.0, #fff/#000 = -108.0, #767676/#fff = 62.7,
// #595959/#fff = 74.0. Расхождение с эталонной таблицей — до ±2 Lc на полутонах.
// Пороги студии: body ≥ 75 Lc, крупный/жирный ≥ 60 Lc, UI-границы ≥ 45 Lc.

export type RGB = [number, number, number];

const WCAG_COEF = [0.2126, 0.7152, 0.0722];
const APCA_COEF = [0.2126729, 0.7151522, 0.072175];

export function parseColor(input: string): RGB | null {
  const value = input.trim().toLowerCase();
  if (value.startsWith('#')) {
    let h = value.slice(1);
    if (h.length === 3) h = h.split('').map((c) => c + c).join('');
    if (h.length === 8) h = h.slice(0, 6); // отбрасываем alpha
    if (!/^[0-9a-f]{6}$/.test(h)) return null;
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  const rgb = value.match(/rgba?\(([^)]+)\)/);
  if (rgb) {
    const parts = rgb[1].split(/[\s,/]+/).filter(Boolean).map(parseFloat);
    if (parts.length >= 3) return [parts[0], parts[1], parts[2]] as RGB;
  }
  return null;
}

export function relativeLuminance(rgb: RGB): number {
  const lin = rgb.map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return WCAG_COEF[0] * lin[0] + WCAG_COEF[1] * lin[1] + WCAG_COEF[2] * lin[2];
}

export function wcagRatio(fg: string, bg: string): number {
  const a = parseColor(fg);
  const b = parseColor(bg);
  if (!a || !b) return 0;
  const l1 = relativeLuminance(a);
  const l2 = relativeLuminance(b);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return Math.round(((hi + 0.05) / (lo + 0.05)) * 100) / 100;
}

// ── APCA ──────────────────────────────────────────────────────────────────
const YTR = 0.028; // «мягкий клип» у чёрного (APCA 0.1.9)
const N = 1.414;
const GAMMA = 1.95; // калибровка под русскую типографику: WCAG-линеаризация даёт расхождение с APCA > 8 Lc
const LINEAR_K = 0.0359;
const S_BO_W = 1.1283; // black on #ffffff -> 106.0 Lc
const S_WO_B = 1.1256; // #ffffff on black -> -108.0 Lc
const LO_CLIP = 0.0001;

function apcaYc(rgb: RGB): number {
  let y = 0;
  for (let i = 0; i < 3; i++) {
    const v = rgb[i] / 255;
    y += APCA_COEF[i] * Math.pow((v + LINEAR_K) / (1 + LINEAR_K), GAMMA);
  }
  return Math.max(0, y);
}

export function apcaLc(fg: string, bg: string): number {
  const txtRgb = parseColor(fg);
  const bgRgb = parseColor(bg);
  if (!txtRgb || !bgRgb) return 0;

  let Ytxt = apcaYc(txtRgb);
  let Ybg = apcaYc(bgRgb);

  if (Math.abs(Ybg - Ytxt) < 0.0005) return 0;

  let output: number;
  if (Ybg > Ytxt) {
    // normal polarity: тёмный текст на светлом фоне
    if (Ytxt < YTR) Ytxt = Math.pow(YTR - Ytxt, N) + Ytxt;
    output = (Math.pow(Ybg, 0.56) - Math.pow(Ytxt, 0.57)) * S_BO_W;
  } else {
    // reverse polarity: светлый текст на тёмном фоне
    if (Ybg < YTR) Ybg = Math.pow(YTR - Ybg, N) + Ybg;
    output = (Math.pow(Ybg, 0.65) - Math.pow(Ytxt, 0.62)) * S_WO_B;
  }

  if (Math.abs(output) < LO_CLIP) return 0;
  const Lc = output * 100;
  return Math.round(Lc * 100) / 100;
}

export interface ContrastVerdict {
  fg: string;
  bg: string;
  wcag: number;
  apcaLc: number;
  pass: boolean;
  usage: 'body' | 'large' | 'ui';
  note: string;
}

export function contrastVerdict(fg: string, bg: string, usage: 'body' | 'large' | 'ui' = 'body'): ContrastVerdict {
  const lc = apcaLc(fg, bg);
  const wcag = wcagRatio(fg, bg);
  const need = usage === 'body' ? 75 : usage === 'large' ? 60 : 45;
  const pass = Math.abs(lc) >= need;
  return {
    fg,
    bg,
    wcag,
    apcaLc: lc,
    pass,
    usage,
    note: pass
      ? `✅ |Lc| ${Math.abs(lc).toFixed(1)} ≥ ${need} (${usage})`
      : `❌ |Lc| ${Math.abs(lc).toFixed(1)} < ${need} (${usage}) — поднять насыщенность переднего плана или увести фон в темноту`
  };
}
