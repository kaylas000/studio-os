// SYS-05 · WebGL-слой: ферма стрелы и «пыль на объекте». Никаких фотографий-стоков,
// только линии и точки. Обязан корректно освобождать контекст (SYS-09).
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MotionGuard } from '@library/01-animations/MotionGuard';

interface BoomRigProps {
  density?: number;
  interactive?: boolean;
}

export function BoomRig({ density = 1400, interactive = true }: BoomRigProps) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = host.current;
    if (!container) return;

    const budget = MotionGuard.budget();
    if (!budget.allowWebGL) {
      container.dataset.fallback = 'true';
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070c, 0.021);

    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 220);
    camera.position.set(-16, 9, 30);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: budget.tier === 'full', alpha: true, powerPreference: 'high-performance' });
      if (!renderer.getContext()) throw new Error('no context');
    } catch (error) {
      // Нет GPU / контекст заблокирован — оставляем только CSS-слой героя
      container.dataset.fallback = 'true';
      console.warn('[STUDIO OS · SYS-05] WebGL-ферма пропущена:', (error as Error).message);
      return;
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, budget.tier === 'reduced' ? 1 : 2));
    container.appendChild(renderer.domElement);

    const accent = new THREE.Color('#ffb020');
    const telemetry = new THREE.Color('#00f2fe');

    // ── стрела: решётчатый ферменный профиль, собранный из сегментов ──
    const boomGroup = new THREE.Group();
    const chordMat = new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.92 });
    const latticeMat = new THREE.LineBasicMaterial({ color: telemetry, transparent: true, opacity: 0.42 });

    const segments = 9;
    const boomGeo: THREE.BufferGeometry[] = [];

    for (let i = 0; i < segments; i++) {
      const t0 = i / segments;
      const t1 = (i + 1) / segments;
      const y0 = 2.4 + t0 * 9.2;
      const y1 = 2.4 + t1 * 9.2;
      const x0 = -14 + t0 * 30;
      const x1 = -14 + t1 * 30;
      const half = 1.5 * (1 - t0 * 0.45);

      const rail = new Float32Array([x0, y0 - half, -half, x1, y1 - half, -half, x0, y0 + half, half, x1, y1 + half, half]);
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(rail, 3));
      boomGeo.push(g);
      boomGroup.add(new THREE.LineSegments(g, chordMat));

      const brace = new Float32Array([x0, y0 - half, -half, x1, y1 + half, half, x0, y0 + half, half, x1, y1 - half, -half]);
      const bg = new THREE.BufferGeometry();
      bg.setAttribute('position', new THREE.BufferAttribute(brace, 3));
      boomGeo.push(bg);
      boomGroup.add(new THREE.LineSegments(bg, latticeMat));
    }

    // люлька на конце стрелы
    const basketGeo = new THREE.BoxGeometry(2.6, 1.3, 1.6);
    const basketEdges = new THREE.EdgesGeometry(basketGeo);
    const basket = new THREE.LineSegments(basketEdges, chordMat);
    basket.position.set(17, 13.2, 0);
    boomGroup.add(basket);

    // опорный контур + земляная сетка
    const outiggerGeo = new THREE.BufferGeometry();
    const o = 9;
    outiggerGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute([-o, 0, -o, o, 0, -o, o, 0, o, -o, 0, o, -o, 0, -o, 0, 0, 0, o, 0, 0, -o, 0, 0, 0, 0, -o], 3)
    );
    const outiggerMat = new THREE.LineBasicMaterial({ color: telemetry, transparent: true, opacity: 0.3 });
    boomGroup.add(new THREE.LineSegments(outiggerGeo, outiggerMat));

    const grid = new THREE.GridHelper(120, 40, 0x183048, 0x0e1b2a);
    grid.position.y = -0.02;
    scene.add(grid);
    scene.add(boomGroup);

    // ── пыль/дым от выхлопа: инстансы точек, плотность × бюджет ──
    const count = MotionGuard.scale(density, 300);
    const dust = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      dust[i * 3] = (Math.random() - 0.5) * 74;
      dust[i * 3 + 1] = Math.random() * 26;
      dust[i * 3 + 2] = (Math.random() - 0.5) * 46;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dust, 3));
    const dustMat = new THREE.PointsMaterial({ size: 0.16, color: telemetry, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
    const points = new THREE.Points(dustGeo, dustMat);
    scene.add(points);

    let pointer = { x: 0, y: 0 };
    const onPointer = (event: PointerEvent) => {
      pointer = { x: (event.clientX / window.innerWidth - 0.5) * 2, y: (event.clientY / window.innerHeight - 0.5) * 2 };
    };
    if (interactive && budget.allowParallax) window.addEventListener('pointermove', onPointer, { passive: true });

    let raf = 0;
    let frames = 0;
    let mark = performance.now();
    let alive = true;

    const loop = (now: number) => {
      if (!alive) return;
      const t = now / 1000;
      boomGroup.rotation.y = -0.42 + Math.sin(t * 0.18) * 0.12 + pointer.x * 0.14;
      boomGroup.rotation.z = 0.04 + pointer.y * 0.05;
      points.rotation.y = t * 0.03;
      renderer.render(scene, camera);

      frames++;
      if (now - mark > 1000) {
        const fps = (frames * 1000) / (now - mark);
        frames = 0;
        mark = now;
        // Холостой ход: если WebGL роняет кадр ниже 24 FPS — выключаем слой совсем
        if (fps < 24) {
          alive = false;
          cancelAnimationFrame(raf);
          container.dataset.throttled = 'true';
        }
      }
      if (alive) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }, 180);
    };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      if (interactive) window.removeEventListener('pointermove', onPointer);

      boomGeo.forEach((g) => g.dispose());
      basketGeo.dispose();
      basketEdges.dispose();
      outiggerGeo.dispose();
      dustGeo.dispose();
      grid.geometry.dispose();
      (grid.material as THREE.Material).dispose();
      chordMat.dispose();
      latticeMat.dispose();
      outiggerMat.dispose();
      dustMat.dispose();

      scene.remove(boomGroup, grid, points);
      scene.clear();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, [density, interactive]);

  return <div className="hero__rig" ref={host} aria-hidden="true" />;
}
