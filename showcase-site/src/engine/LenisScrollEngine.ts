// showcase-site/src/engine/LenisScrollEngine.ts
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class LenisScrollEngine {
  private lenis: Lenis | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this._init();
    }
  }

  private _init() {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5
    });

    this.lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time: number) => {
      this.lenis?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  public destroy() {
    this.lenis?.destroy();
  }

  public getLenis(): Lenis | null {
    return this.lenis;
  }
}
