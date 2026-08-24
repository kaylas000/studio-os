// library/05-hollywood-intros/IntroEngine.ts
import * as THREE from 'three';

export interface IntroOptions {
  container: HTMLElement;
  preset: 'particleAssembly' | 'lightReveal' | 'glitchCyber';
  title?: string;
  onComplete?: () => void;
  accentColor?: string;
}

export class IntroEngine {
  private container: HTMLElement;
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private animFrameId: number = 0;
  private isDestroyed: boolean = false;
  private startTime: number = Date.now();

  constructor(options: IntroOptions) {
    this.container = options.container;
    this._initThree(options);
  }

  private _initThree(options: IntroOptions) {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    this.camera.position.z = 30;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);

    // Добавляем частицы / геометрию пресета
    const particleCount = options.preset === 'particleAssembly' ? 4000 : 2000;
    const geometry = new THREE.BufferGeometry();
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
    this.scene.add(points);

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

      if (elapsed > 4.0 && options.onComplete) {
        options.onComplete();
        options.onComplete = undefined;
      }
    };

    animate();
  }

  public destroy() {
    this.isDestroyed = true;
    cancelAnimationFrame(this.animFrameId);
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.domElement.remove();
    }
    if (this.scene) {
      this.scene.clear();
    }
  }
}
