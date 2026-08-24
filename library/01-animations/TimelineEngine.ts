// library/01-animations/TimelineEngine.ts
import gsap from 'gsap';

export interface TimelineSceneConfig {
  id: string;
  duration?: number;
  gap?: string | number;
}

export class MasterTimelineEngine {
  private master: gsap.core.Timeline;
  private scenes: Map<string, gsap.core.Timeline> = new Map();

  constructor(options: { paused?: boolean } = {}) {
    this.master = gsap.timeline({ paused: options.paused ?? true });
  }

  public createScene(id: string): gsap.core.Timeline {
    const scene = gsap.timeline();
    this.scenes.set(id, scene);
    return scene;
  }

  public assemble(sequence: TimelineSceneConfig[]): gsap.core.Timeline {
    sequence.forEach((item, index) => {
      const scene = this.scenes.get(item.id);
      if (scene) {
        const position = item.gap !== undefined ? item.gap : (index === 0 ? 0 : '+=0.2');
        this.master.add(scene, position);
      }
    });
    return this.master;
  }

  public getMaster(): gsap.core.Timeline {
    return this.master;
  }

  public scrubTo(progress: number): void {
    this.master.progress(Math.max(0, Math.min(1, progress)));
  }

  public destroy(): void {
    this.master.kill();
    this.scenes.clear();
  }
}
