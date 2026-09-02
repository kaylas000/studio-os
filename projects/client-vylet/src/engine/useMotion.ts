// SYS-01: единый хук движения. Lenis + GSAP + ScrollTrigger, всё с учётом бюджета устройства,
// и обязательно с отменой rAF/ScrollTrigger в cleanup (SYS-09 не пропустит утечку).
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { MotionGuard, type MotionBudget } from '@library/01-animations/MotionGuard';

gsap.registerPlugin(ScrollTrigger);

export function useMotion() {
  const [budget, setBudget] = useState<MotionBudget>(() => MotionGuard.budget());

  useEffect(() => MotionGuard.onChange(setBudget), []);

  useEffect(() => {
    if (budget.tier === 'static') return;

    const lenis = new Lenis({ duration: budget.tier === 'reduced' ? 0.55 : 1.15, wheelMultiplier: 1 });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    (window as Window & { __lenis?: Lenis }).__lenis = lenis;

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete (window as Window & { __lenis?: Lenis }).__lenis;
    };
  }, [budget.tier]);

  useEffect(() => {
    const nodes = gsap.utils.toArray<HTMLElement>('[data-reveal]');
    if (!nodes.length) return;

    if (budget.tier === 'static') {
      gsap.set(nodes, { autoAlpha: 1, y: 0, clearProps: 'transform' });
      return;
    }

    // Стартовая точка задаётся здесь, а не в CSS: если скрипт не поднялся,
    // текст обязан остаться читаемым (и поисковик, и человек его увидят).
    gsap.set(nodes, { autoAlpha: 0, y: 24 });

    const triggers = nodes.map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () =>
          gsap.to(el, {
            autoAlpha: 1,
            y: 0,
            duration: MotionGuard.duration(900) / 1000,
            ease: 'expo.out',
            overwrite: 'auto'
          })
      })
    );

    ScrollTrigger.refresh();
    return () => triggers.forEach((t) => t.kill());
  }, [budget.tier]);

  return budget;
}

export function scrollToId(id: string) {
  const lenis = (window as Window & { __lenis?: Lenis }).__lenis;
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { duration: 1.1 });
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
