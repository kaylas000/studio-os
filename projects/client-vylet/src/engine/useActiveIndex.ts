// Активный шаг/строка по скроллу через IntersectionObserver: ноль layout-thrashing,
// потому что геометрию читаем из entries, а не из getBoundingClientRect в цикле.
import { useEffect, useState } from 'react';

export function useActiveIndex(ids: string[], rootMargin = '-45% 0px -45% 0px'): number {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!ids.length || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        const index = ids.indexOf(visible[0].target.id);
        if (index >= 0) setActive(index);
      },
      { rootMargin, threshold: 0 }
    );
    const nodes = ids.map((id) => document.getElementById(id)).filter((n): n is HTMLElement => Boolean(n));
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [ids.join('|'), rootMargin]);

  return active;
}

/** Счётчик значения: 0 → value за ms, с reduced-motion фолбэком (SYS-01). */
export function useTicker(target: number, ms = 900, active = true): number {
  const [value, setValue] = useState(active ? 0 : target);

  useEffect(() => {
    if (!active) return;
    if (typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, ms, active]);

  return value;
}
