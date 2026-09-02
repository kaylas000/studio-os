// library/05-hollywood-intros/IntroEngine.ts
import * as THREE from 'three';
import { MotionGuard } from '../01-animations/MotionGuard.ts';

export interface IntroOptions {
  container: HTMLElement;
  preset: 'particleAssembly' | 'lightReveal' | 'glitchCyber';
  title?: string;
  onComplete?: () => void;
  accentColor?: string;
  /** мс до автозавершения; 0 = ждать клика Skip */
  durationMs?: number;
  /** пропуск по клавише Esc/Space и клику — обязательно для доступности */
  allowSkip?: boolean;
  onTelemetry?: (t: { fps: number; particles: number; tier: string }) => void;
}

export class IntroEngine {
  private container: HTMLElement;
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private animFrameId: number = 0;
  private isDestroyed: boolean = false;
  private startTime: number = Date.now();
  private geometry: THREE.BufferGeometry | null = null;
  private material: THREE.PointsMaterial | null = null;
  private skipHandler: ((e: KeyboardEvent) => void) | null = null;
  private finished = false;
  private frames = 0;
  private fpsMark = Date.now();
  private lastFps = 0;
  private particleCount = 0;
  private onComplete?: () => void;

  constructor(options: IntroOptions) {
    this.container = options.container;
    this.onComplete = options.onComplete;
    const budget = MotionGuard.budget();
    // Статический режим: ни одного WebGL-контекста, сразу onComplete
    if (!budget.allowWebGL || budget.particleMultiplier === 0) {
      this.isDestroyed = true;
      this.container.setAttribute('data-intro', 'static-fallback');
      requestAnimationFrame(() => this.finish());
      return;
    }
    try {
      this._initThree(options, budget.particleMultiplier);
    } catch (error) {
      // Создание контекста может отвалиться (блокировка GPU, headless, старый драйвер).
      // Интро не имеет права ронять страницу: уходим в статику и отпускаем пользователя.
      // eslint-disable-next-line no-console
      console.warn('[STUDIO OS · SYS-05] WebGL-интро отключено:', (error as Error)?.message ?? error);
      this.isDestroyed = true;
      this.container.setAttribute('data-intro', 'webgl-fallback');
      this.container.dataset.reason = String((error as Error)?.message ?? 'webgl-unavailable').slice(0, 120);
      this.renderer = null;
      requestAnimationFrame(() => this.finish());
    }
  }

  private finish() {
    if (this.finished) return;
    this.finished = true;
    this.onComplete?.();
  }

  private _initThree(options: IntroOptions, motionScale: number) {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    this.camera.position.z = 30;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'default' });
    if (!this.renderer.getContext()) throw new Error('WebGL context unavailable');
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);

    // Частицы: базовая плотность × бюджет устройства (reduced-motion / слабый GPU / батарея)
    const particleCount = Math.max(
      120,
      Math.round((options.preset === 'particleAssembly' ? 4000 : 2000) * motionScale)
    );
    this.particleCount = particleCount;
    const geometry = new THREE.BufferGeometry();
    this.geometry = geometry;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const baseColor = new THREE.Color(options.accentColor || '#00ff88');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      colors[i * 3] = baseColor.r + (Math.random() - 0.5) * 0.2;
      colors[i * 3 + 1] = baseColor.g + (Math.random() - 0.5) * 0.2;
      colors[i * 3 + 2] = baseColor.b + (Math.random() - 0.5) * 0.2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geometry, material);
    this.material = material;
    this.scene.add(points);

    if (options.allowSkip !== false) {
      this.skipHandler = (e: KeyboardEvent) => {
        if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          this.finish();
          this.destroy();
        }
      };
      window.addEventListener('keydown', this.skipHandler);
    }
    this.container.addEventListener('click', () => {
      this.finish();
      this.destroy();
    }, { once: true });

    const animate = () => {
      if (this.isDestroyed) return;
      const elapsed = (Date.now() - this.startTime) / 1000;

      points.rotation.y = elapsed * 0.3;
      points.rotation.x = Math.sin(elapsed * 0.2) * 0.2;

      // Схождение частиц к центру (эффект сборки логотипа)
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        const factor = Math.min(1, elapsed / 2.5);
        posAttr.setY(i, posAttr.getY(i) * (1 - factor * 0.01));
      }
      posAttr.needsUpdate = true;

      this.renderer?.render(this.scene!, this.camera!);
      this.animFrameId = requestAnimationFrame(animate);

      // FPS-телеметрия: студия не принимает интро, роняющее кадр
      this.frames++;
      if (Date.now() - this.fpsMark >= 500) {
        this.lastFps = Math.round((this.frames * 1000) / (Date.now() - this.fpsMark));
        this.frames = 0;
        this.fpsMark = Date.now();
        options.onTelemetry?.({ fps: this.lastFps, particles: particleCount, tier: motionScale >= 1 ? 'full' : 'reduced' });
        if (this.lastFps < 30) this.destroy(); // слабое железо — не мучить пользователя
      }

      if (elapsed > (options.durationMs ?? 4000) / 1000) this.finish();
    };

    animate();
  }

  public destroy() {
    if (this.isDestroyed && !this.renderer) return;
    this.isDestroyed = true;
    cancelAnimationFrame(this.animFrameId);
    if (this.skipHandler) window.removeEventListener('keydown', this.skipHandler);

    if (this.scene) {
      // Каждый geometry/material обязан быть освобождён: один неизгубленный контекст
      // съедает ~200 МБ на мобильной GPU и вешает вкладку через 3-4 перехода.
      this.scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((mm) => mm.dispose());
        else mat?.dispose();
      });
      this.scene.clear();
    }
    this.geometry?.dispose();
    this.material?.dispose();
    this.geometry = null;
    this.material = null;

    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.forceContextLoss?.();
      this.renderer.domElement.remove();
      this.renderer = null;
    }
    this.finish();
  }

  public get fps(): number {
    return this.lastFps;
  }
}
