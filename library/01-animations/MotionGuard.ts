// library/01-animations/MotionGuard.ts
// SYS-01: движение разрешено только если устройство и пользователь его хотят.
// Один источник правды для GSAP/Three-слоя: reduced-motion, экономия батареи,
// слабая GPU-подсветка, «мягкий» режим для слабых телефонов.

export type MotionTier = 'full' | 'reduced' | 'static';

export interface MotionBudget {
  tier: MotionTier;
  /** контекст WebGL не создаётся вообще — 3D-слой обязан не монтироваться */
  noWebGL: boolean;
  particleMultiplier: number;
  allowWebGL: boolean;
  allowParallax: boolean;
  allowAutoplayAudio: boolean;
  reasons: string[];
}

function prefersReduced(): boolean {
  return typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function dataSaver(): boolean {
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  return Boolean(conn?.saveData);
}

/** Создаётся ли контекст в принципе (false → 3D не монтируем никогда). */
export function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = (canvas.getContext('webgl2') ?? canvas.getContext('webgl')) as WebGLRenderingContext | null;
    return Boolean(gl);
  } catch {
    return false;
  }
}

function weakGpu(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = (canvas.getContext('webgl2') ?? canvas.getContext('webgl')) as WebGLRenderingContext | null;
    if (!gl) return true;
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const renderer = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : '';
    //Software-рендер и старые мобильные Adreno/Mali <= 5xx
    if (/swiftshader|llvmpipe|software/i.test(renderer)) return true;
    const cores = navigator.hardwareConcurrency ?? 8;
    if (cores <= 4 && /adreno\s*[1-5]\d{2}|mali-?t?[1-7]\d{2}/i.test(renderer)) return true;
    return false;
  } catch {
    return true;
  }
}

export class MotionGuard {
  public static budget(): MotionBudget {
    const reasons: string[] = [];
    const noWebGL = !hasWebGL();
    if (noWebGL) reasons.push('WebGL-контекст недоступен');
    if (prefersReduced()) reasons.push('prefers-reduced-motion: reduce');
    if (dataSaver()) reasons.push('Data Saver в браузере');
    if (!noWebGL && weakGpu()) reasons.push('слабый/программный WebGL');
    if (typeof window !== 'undefined' && window.innerWidth < 420) reasons.push('узкий вьюпорт — параллакс убираем');

    const hard = (t: MotionTier, mult: number, allowGL: boolean): MotionBudget => ({
      tier: t,
      noWebGL,
      particleMultiplier: mult,
      allowWebGL: allowGL,
      allowParallax: false,
      allowAutoplayAudio: false,
      reasons
    });

    if (noWebGL || reasons.includes('prefers-reduced-motion: reduce')) return hard('static', 0, false);
    if (reasons.length >= 2) return hard('static', 0, false);
    if (reasons.length === 1) return { ...hard('reduced', 0.35, true), allowParallax: false };
    return { tier: 'full', noWebGL, particleMultiplier: 1, allowWebGL: true, allowAutoplayAudio: false, allowParallax: true, reasons };
  }

  /** Battery-aware уточнение (getBattery не в Safari/Firefox — тогда без изменений). */
  public static async budgetAsync(): Promise<MotionBudget> {
    const base = MotionGuard.budget();
    const api = (navigator as Navigator & { getBattery?: () => Promise<BatteryLike> }).getBattery;
    if (!api) return base;
    try {
      const battery: BatteryLike = await api.call(navigator);
      if (battery.level < 0.2 && !battery.charging) {
        return {
          ...base,
          tier: base.tier === 'full' ? 'reduced' : 'static',
          particleMultiplier: Math.min(base.particleMultiplier, 0.25),
          allowParallax: false,
          reasons: [...base.reasons, `заряд ${Math.round(battery.level * 100)}% — экономим GPU`]
        };
      }
    } catch {
      /* getBattery недоступен */
    }
    return base;
  }

  /** Подписка на изменения: вызывает cb при переключении системной настройки. */
  public static onChange(cb: (budget: MotionBudget) => void): () => void {
    if (typeof matchMedia !== 'function') return () => {};
    const mq = matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => cb(MotionGuard.budget());
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }

  /** Число частиц/объектов под текущий бюджет. */
  public static scale(base: number, min = 200): number {
    const mult = MotionGuard.budget().particleMultiplier;
    return mult === 0 ? 0 : Math.max(min, Math.round(base * mult));
  }

  /** Длительность твина под бюджет (full — как задумано, reduced — короче, static — 0). */
  public static duration(ms: number): number {
    const { tier } = MotionGuard.budget();
    if (tier === 'static') return 0;
    if (tier === 'reduced') return Math.max(120, Math.round(ms * 0.5));
    return ms;
  }
}

interface BatteryLike {
  level: number;
  charging: boolean;
}
