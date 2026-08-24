// showcase-site/src/cinema/CinemaWebGLCanvas.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CinemaCanvasProps {
  scrollProgress: number; // 0 to 1
  activeArchetype: string;
  bloom?: boolean;
  grain?: boolean;
  vignette?: boolean;
}

export const CinemaWebGLCanvas: React.FC<CinemaCanvasProps> = ({
  scrollProgress,
  activeArchetype,
  bloom = true,
  grain = true,
  vignette = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    scroll: scrollProgress,
    targetScroll: scrollProgress,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    archetype: activeArchetype
  });

  stateRef.current.targetScroll = scrollProgress;
  stateRef.current.archetype = activeArchetype;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050608, 0.025);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // 1. Central 3D Monolith (PBR Metallic Core)
    const monolithGeo = new THREE.IcosahedronGeometry(4.5, 2);
    const monolithMat = new THREE.MeshStandardMaterial({
      color: 0x111318,
      metalness: 0.95,
      roughness: 0.15,
      wireframe: false,
      flatShading: true
    });
    const monolith = new THREE.Mesh(monolithGeo, monolithMat);
    scene.add(monolith);

    // Outer Wireframe Cage
    const cageGeo = new THREE.IcosahedronGeometry(5.2, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const cage = new THREE.Mesh(cageGeo, cageMat);
    scene.add(cage);

    // 2. Volumetric Particle Starfield
    const starCount = 4500;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const radius = 15 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      starPos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = radius * Math.cos(phi);

      const isGold = Math.random() > 0.6;
      starColors[i * 3] = isGold ? 0.95 : 0.4;
      starColors[i * 3 + 1] = isGold ? 0.8 : 0.6;
      starColors[i * 3 + 2] = isGold ? 0.3 : 0.9;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 3. Orbiting Geometric Rings (Gyroscope)
    const ringGroup = new THREE.Group();
    for (let r = 0; r < 3; r++) {
      const ringGeo = new THREE.TorusGeometry(6.5 + r * 1.8, 0.04, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: r === 0 ? 0xd4af37 : r === 1 ? 0x00f2fe : 0xff3e00,
        transparent: true,
        opacity: 0.45
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = (r * Math.PI) / 3;
      ring.rotation.y = (r * Math.PI) / 4;
      ringGroup.add(ring);
    }
    scene.add(ringGroup);

    // 4. Studio Cinematic Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xd4af37, 3.5);
    keyLight.position.set(10, 15, 12);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x00f2fe, 4.0, 50);
    fillLight.position.set(-15, -10, 10);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xff3e00, 3.0, 40);
    rimLight.position.set(0, -15, -10);
    scene.add(rimLight);

    // Mouse / Touch Interaction
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      stateRef.current.targetMouseX = (clientX / window.innerWidth - 0.5) * 2;
      stateRef.current.targetMouseY = (clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Render Animation Loop
    let animId = 0;
    let clock = new THREE.Clock();

    const render = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth Lerp for Scroll & Mouse Damping
      stateRef.current.scroll += (stateRef.current.targetScroll - stateRef.current.scroll) * 0.08;
      stateRef.current.mouseX += (stateRef.current.targetMouseX - stateRef.current.mouseX) * 0.05;
      stateRef.current.mouseY += (stateRef.current.targetMouseY - stateRef.current.mouseY) * 0.05;

      const p = stateRef.current.scroll;
      const mx = stateRef.current.mouseX;
      const my = stateRef.current.mouseY;

      // Update Colors based on active archetype
      const arch = stateRef.current.archetype;
      if (arch === 'luxury-noir') {
        keyLight.color.set('#d4af37');
        cageMat.color.set('#d4af37');
        monolithMat.color.set('#101216');
      } else if (arch === 'neo-brutalism') {
        keyLight.color.set('#ff3e00');
        cageMat.color.set('#000000');
        monolithMat.color.set('#ffffff');
      } else if (arch === 'cyber-tech') {
        keyLight.color.set('#00ff88');
        cageMat.color.set('#00f2fe');
        monolithMat.color.set('#040812');
      } else if (arch === 'editorial-swiss') {
        keyLight.color.set('#0044ff');
        cageMat.color.set('#111111');
        monolithMat.color.set('#f0f2f5');
      } else {
        keyLight.color.set('#6366f1');
        cageMat.color.set('#a5b4fc');
        monolithMat.color.set('#14171d');
      }

      // Camera Travelling based on Scroll Progress
      camera.position.z = 18 - p * 6 + my * 2;
      camera.position.x = mx * 3;
      camera.position.y = -my * 2 + Math.sin(p * Math.PI) * 2;
      camera.lookAt(0, 0, 0);

      // Monolith Rotation & Morph
      monolith.rotation.y = elapsed * 0.25 + p * Math.PI * 2;
      monolith.rotation.x = elapsed * 0.15 + my * 0.5;
      cage.rotation.y = -elapsed * 0.2 - p * Math.PI * 2;
      cage.rotation.z = elapsed * 0.1;

      // Ring Gyroscope Rotation
      ringGroup.children.forEach((ring, idx) => {
        ring.rotation.x += delta * (0.4 + idx * 0.2);
        ring.rotation.y += delta * (0.3 + idx * 0.15);
      });

      // Starfield Rotation
      starField.rotation.y = elapsed * 0.03;
      starField.rotation.x = -elapsed * 0.02;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      renderer.dispose();
      monolithGeo.dispose();
      monolithMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, []);

  return (
    <div className="cinema-canvas-fixed-wrap">
      <canvas ref={canvasRef} className="cinema-canvas" />

      {/* Screen Effects Layer: Film Grain & Vignette */}
      <div className={`cinema-film-grain ${grain ? 'active' : ''}`} />
      <div className={`cinema-vignette ${vignette ? 'active' : ''}`} />

      <style>{`
        .cinema-canvas-fixed-wrap {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100dvh;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }
        .cinema-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
        }
        .cinema-film-grain.active {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          pointer-events: none;
          mix-blend-mode: overlay;
          z-index: 2;
        }
        .cinema-vignette.active {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.85) 100%);
          pointer-events: none;
          z-index: 3;
        }
      `}</style>
    </div>
  );
};
