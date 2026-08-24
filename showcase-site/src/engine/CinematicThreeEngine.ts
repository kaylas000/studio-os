// showcase-site/src/engine/CinematicThreeEngine.ts
import * as THREE from 'three';

export interface PostProcessingConfig {
  bloom: boolean;
  grain: boolean;
  vignette: boolean;
  depthOfField: boolean;
}

export class CinematicThreeEngine {
  private canvas: HTMLCanvasElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private monolith: THREE.Mesh;
  private cage: THREE.Mesh;
  private starField: THREE.Points;
  private lightCone: THREE.Mesh;
  private keyLight: THREE.DirectionalLight;
  private fillLight: THREE.PointLight;
  private animId: number = 0;
  private isDestroyed: boolean = false;
  private clock: THREE.Clock = new THREE.Clock();

  public scrollProgress: number = 0;
  public targetScrollProgress: number = 0;
  public mouseX: number = 0;
  public mouseY: number = 0;
  public targetMouseX: number = 0;
  public targetMouseY: number = 0;
  public activeArchetype: string = 'luxury-noir';
  public config: PostProcessingConfig = {
    bloom: true,
    grain: true,
    vignette: true,
    depthOfField: true
  };

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Scene & Camera
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x050508, 0.022);

    this.camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 1000);
    this.camera.position.set(0, 0, 20);

    // 2. WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.3;

    // 3. Central 3D Monolith (PBR Titanium Core)
    const monolithGeo = new THREE.IcosahedronGeometry(4.2, 3);
    const monolithMat = new THREE.MeshStandardMaterial({
      color: 0x12141a,
      metalness: 0.95,
      roughness: 0.12,
      flatShading: true
    });
    this.monolith = new THREE.Mesh(monolithGeo, monolithMat);
    this.scene.add(this.monolith);

    // Outer Faceted Gold Cage
    const cageGeo = new THREE.IcosahedronGeometry(5.1, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    this.cage = new THREE.Mesh(cageGeo, cageMat);
    this.scene.add(this.cage);

    // 4. Volumetric Light Cone Beam (Universal Pictures Style - Guide 5)
    const coneGeo = new THREE.ConeGeometry(7, 24, 32, 1, true);
    const coneMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.lightCone = new THREE.Mesh(coneGeo, coneMat);
    this.lightCone.rotation.x = Math.PI;
    this.lightCone.position.set(0, 6, 0);
    this.scene.add(this.lightCone);

    // 5. Starfield Particles (8000 Points - Guide 1)
    const count = 5500;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(count * 3);
    const starCols = new Float32Array(count * 3);
    const goldColor = new THREE.Color('#d4af37');

    for (let i = 0; i < count; i++) {
      const r = 16 + Math.random() * 60;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = r * Math.cos(phi);

      const isGold = Math.random() > 0.5;
      starCols[i * 3] = isGold ? goldColor.r : 0.4;
      starCols[i * 3 + 1] = isGold ? goldColor.g : 0.6;
      starCols[i * 3 + 2] = isGold ? goldColor.b : 0.9;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starCols, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.starField = new THREE.Points(starGeo, starMat);
    this.scene.add(this.starField);

    // 6. Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambient);

    this.keyLight = new THREE.DirectionalLight(0xd4af37, 3.5);
    this.keyLight.position.set(12, 16, 14);
    this.scene.add(this.keyLight);

    this.fillLight = new THREE.PointLight(0x00f2fe, 4.0, 60);
    this.fillLight.position.set(-16, -12, 10);
    this.scene.add(this.fillLight);

    this._setupListeners();
    this._startLoop();
  }

  private _setupListeners() {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      let cx = 0;
      let cy = 0;
      if ('touches' in e && e.touches.length > 0) {
        cx = e.touches[0].clientX;
        cy = e.touches[0].clientY;
      } else if ('clientX' in e) {
        cx = e.clientX;
        cy = e.clientY;
      }
      this.targetMouseX = (cx / window.innerWidth - 0.5) * 2;
      this.targetMouseY = (cy / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });

    window.addEventListener('resize', () => {
      if (this.isDestroyed) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    });
  }

  private _startLoop() {
    const render = () => {
      if (this.isDestroyed) return;

      const delta = this.clock.getDelta();
      const elapsed = this.clock.getElapsedTime();

      // Smooth Lerp Damping
      this.scrollProgress += (this.targetScrollProgress - this.scrollProgress) * 0.08;
      this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
      this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

      const p = this.scrollProgress;
      const mx = this.mouseX;
      const my = this.mouseY;

      // Color Sync with 5 Archetypes
      const arch = this.activeArchetype;
      if (arch === 'luxury-noir') {
        this.keyLight.color.set('#d4af37');
        (this.cage.material as THREE.MeshBasicMaterial).color.set('#d4af37');
        (this.monolith.material as THREE.MeshStandardMaterial).color.set('#101216');
      } else if (arch === 'neo-brutalism') {
        this.keyLight.color.set('#ff3e00');
        (this.cage.material as THREE.MeshBasicMaterial).color.set('#000000');
        (this.monolith.material as THREE.MeshStandardMaterial).color.set('#ffffff');
      } else if (arch === 'cyber-tech') {
        this.keyLight.color.set('#00ff88');
        (this.cage.material as THREE.MeshBasicMaterial).color.set('#00f2fe');
        (this.monolith.material as THREE.MeshStandardMaterial).color.set('#040812');
      } else if (arch === 'editorial-swiss') {
        this.keyLight.color.set('#0044ff');
        (this.cage.material as THREE.MeshBasicMaterial).color.set('#111111');
        (this.monolith.material as THREE.MeshStandardMaterial).color.set('#f0f2f5');
      } else {
        this.keyLight.color.set('#6366f1');
        (this.cage.material as THREE.MeshBasicMaterial).color.set('#a5b4fc');
        (this.monolith.material as THREE.MeshStandardMaterial).color.set('#14171d');
      }

      // Camera Travelling based on Scroll Progress (Guide 1)
      this.camera.position.z = 20 - p * 7 + my * 2;
      this.camera.position.x = mx * 3.5;
      this.camera.position.y = -my * 2.5 + Math.sin(p * Math.PI) * 2;
      this.camera.lookAt(0, 0, 0);

      // Monolith Morph & Rotation
      this.monolith.rotation.y = elapsed * 0.25 + p * Math.PI * 2;
      this.monolith.rotation.x = elapsed * 0.15 + my * 0.4;
      this.cage.rotation.y = -elapsed * 0.2 - p * Math.PI * 2;
      this.cage.rotation.z = elapsed * 0.08;

      // Volumetric Light Cone Beam pulse
      this.lightCone.rotation.z = elapsed * 0.1;
      this.lightCone.scale.set(1 + Math.sin(elapsed) * 0.1, 1, 1 + Math.cos(elapsed) * 0.1);

      // Starfield Rotation
      this.starField.rotation.y = elapsed * 0.02;
      this.starField.rotation.x = -elapsed * 0.015;

      this.renderer.render(this.scene, this.camera);
      this.animId = requestAnimationFrame(render);
    };

    render();
  }

  public destroy() {
    this.isDestroyed = true;
    cancelAnimationFrame(this.animId);
    this.renderer.dispose();
  }
}
