// library/03-mobile/ViewportMatrix.ts
// SYS-03: матрица вьюпортов + статическая проверка stylesheet-а на мобильную готовность.
// Runtime-часть (горизонтальный скролл, touch-target) живёт в соседних модулях.

export interface ViewportPreset {
  label: string;
  width: number;
  height: number;
  dpr: number;
  device: string;
}

export interface MobileStyleReport {
  ok: boolean;
  score: number;
  violations: Array<{ rule: string; detail: string; fix: string; severity: 'block' | 'warn' }>;
  stats: { clampRules: number; mediaQueries: number; fixedWidths: number; safeAreaRules: number };
}

export const VIEWPORT_MATRIX: ViewportPreset[] = [
  { label: 'iPhone SE / 3rd', width: 320, height: 568, dpr: 2, device: 'ios-small' },
  { label: 'iPhone 12 mini', width: 375, height: 812, dpr: 3, device: 'ios' },
  { label: 'iPhone 13/14/15', width: 390, height: 844, dpr: 3, device: 'ios' },
  { label: 'iPhone 14 Pro Max', width: 430, height: 932, dpr: 3, device: 'ios-max' },
  { label: 'iPad mini 6', width: 744, height: 1133, dpr: 2, device: 'ipad' },
  { label: 'iPad 10.9', width: 820, height: 1180, dpr: 2, device: 'ipad' },
  { label: 'iPad Pro 11', width: 834, height: 1194, dpr: 2, device: 'ipad-pro' },
  { label: 'Galaxy S8', width: 360, height: 740, dpr: 3, device: 'android' },
  { label: 'Pixel 7', width: 412, height: 915, dpr: 2.6, device: 'android' },
  { label: 'Xiaomi 13', width: 393, height: 851, dpr: 2.75, device: 'android' },
  { label: 'Surface Duo (сложен)', width: 540, height: 720, dpr: 2, device: 'fold' },
  { label: 'Galaxy Z Fold inner', width: 673, height: 832, dpr: 2.6, device: 'fold' },
  { label: 'Huawei MatePad', width: 1000, height: 1520, dpr: 2, device: 'android-tablet' },
  { label: 'Лэптоп 1368', width: 1368, height: 768, dpr: 1, device: 'desktop-low' },
  { label: 'Лэптоп 1440', width: 1440, height: 900, dpr: 2, device: 'desktop' },
  { label: 'FHD 1920', width: 1920, height: 1080, dpr: 1, device: 'desktop' },
  { label: '2K 2560', width: 2560, height: 1440, dpr: 1, device: 'desktop-wide' },
  { label: 'Ultrawide 3440', width: 3440, height: 1440, dpr: 1, device: 'ultrawide' },
  { label: '4K 3840', width: 3840, height: 2160, dpr: 2, device: 'desktop-4k' }
];

export const CRITICAL_WIDTHS = [320, 360, 375, 390, 412, 430, 768, 1024, 1366, 1920];

export class ViewportMatrix {
  public static presets(filter?: 'mobile' | 'all'): ViewportPreset[] {
    if (filter === 'mobile') return VIEWPORT_MATRIX.filter((v) => v.width < 700);
    return VIEWPORT_MATRIX;
  }

  /** Проверка CSS на «не сломается ли на 320px» без запуска браузера. */
  public static auditStylesheet(css: string, file = '(inline)'): MobileStyleReport {
    const violations: MobileStyleReport['violations'] = [];
    const clampRules = (css.match(/clamp\(/g) ?? []).length;
    const mediaQueries = (css.match(/@media/g) ?? []).length;
    const safeAreaRules = (css.match(/env\(\s*safe-area-inset/g) ?? []).length;
    const fixedWidths = [...css.matchAll(/(?:^|[^-\w])width\s*:\s*(\d{3,4})px/g)].filter((m) => Number(m[1]) > 420);

    if (fixedWidths.length) {
      violations.push({
        rule: 'FIXED_WIDTH_OVERFLOW',
        detail: `${file}: фиксированные ширины ${fixedWidths.map((m) => m[1] + 'px').join(', ')} — на 320px это гарантированный горизонтальный скролл`,
        fix: 'max-width: 100%, либо width: min(100%, 520px).',
        severity: 'block'
      });
    }

    if (!clampRules) {
      violations.push({
        rule: 'NO_FLUID_TYPE',
        detail: `${file}: ни одного clamp() — типографика не масштабируется между 320 и 1920`,
        fix: 'Подключить library/03-mobile/fluid-system.css и набрать заголовки через --fs-*.',
        severity: 'block'
      });
    }

    if (!safeAreaRules && /position\s*:\s*(fixed|sticky)/i.test(css)) {
      violations.push({
        rule: 'NO_SAFE_AREA',
        detail: `${file}: fixed/sticky-панели без safe-area-inset — на iPhone с чёлкой залезут под индикатор жеста`,
        fix: 'padding-bottom: calc(var(--space-4) + env(safe-area-inset-bottom)).',
        severity: 'warn'
      });
    }

    if (/overflow-x\s*:\s*hidden/i.test(css) && !/overflow-x\s*:\s*clip/i.test(css)) {
      violations.push({
        rule: 'HORIZONTAL_SCROLL_MASKED',
        detail: `${file}: overflow-x: hidden только маскирует переполнение, а не лечит его (скролл остаётся в JS-замерах)`,
        fix: 'Найти причина через HorizontalScrollDetector, затем max-width/overflow-wrap. `overflow-x: clip` допустим как страховка.',
        severity: 'warn'
      });
    }

    const hardMin = [...css.matchAll(/(?:^|[^-\w])min-width\s*:\s*(1[0-9]{3}|[6-9]\d{2})px/gi)].filter((mm) => {
      const before = css.slice(Math.max(0, (mm.index ?? 0) - 90), mm.index);
      return !/@media[^{]*$/.test(before.replace(/\s+$/, ''));
    });
    if (hardMin.length) {
      violations.push({
        rule: 'HARD_MIN_WIDTH',
        detail: `${file}: min-width: ${hardMin.map((x) => x[1] + 'px').join(', ')} вне @media ломает 320–428px`,
        fix: 'Перенести на @media (min-width: …) или min(…px, 100%).',
        severity: 'block'
      });
    }

    if (!mediaQueries) {
      violations.push({
        rule: 'NO_MEDIA_QUERIES',
        detail: `${file}: нет ни одного @media — адаптация только на fluid-шрифтах, сетка не перестроится`,
        fix: 'Минимум 2 брейкпоинта: 720px (планшет) и 1080px (десктоп-сетка).',
        severity: 'warn'
      });
    }

    const penalty = violations.reduce((s, v) => s + (v.severity === 'block' ? 18 : 7), 0);
    return {
      ok: !violations.some((v) => v.severity === 'block'),
      score: Math.max(0, 100 - penalty),
      violations,
      stats: { clampRules, mediaQueries, fixedWidths: fixedWidths.length, safeAreaRules }
    };
  }

  /** Runtime-замер: вернуть список вьюпортов, на которых контент не влезает. */
  public static async measureOverflow(setViewport: (w: number, h: number) => Promise<void>, check: () => Promise<number>, presets = CRITICAL_WIDTHS): Promise<Record<number, number>> {
    const out: Record<number, number> = {};
    for (const width of presets) {
      await setViewport(width, Math.round(width * 1.9));
      out[width] = await check();
    }
    return out;
  }
}
