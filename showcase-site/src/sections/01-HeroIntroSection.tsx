// showcase-site/src/sections/01-HeroIntroSection.tsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Download, Play, FolderDown, ShieldCheck, Terminal } from 'lucide-react';

interface HeroIntroProps {
  onOpenDownload: () => void;
  onOpenOrder: () => void;
  onOpenVault: () => void;
}

export const HeroIntroSection: React.FC<HeroIntroProps> = ({
  onOpenDownload,
  onOpenOrder,
  onOpenVault
}) => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [activePreset, setActivePreset] = useState<'particles' | 'rays' | 'cyber'>('particles');

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Particle cloud
    const count = 3500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 12 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      colors[i * 3] = 0.8 + Math.random() * 0.2;
      colors[i * 3 + 1] = 0.7 + Math.random() * 0.3;
      colors[i * 3 + 2] = 0.2 + Math.random() * 0.6;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let animId = 0;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      points.rotation.y = elapsed * 0.15;
      points.rotation.x = Math.sin(elapsed * 0.1) * 0.15;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [activePreset]);

  return (
    <section className="hero-intro-section" id="hero-intro">
      {/* 3D WebGL Background Canvas */}
      <div className="hero-webgl-canvas" ref={canvasContainerRef} />

      <div className="hero-overlay">
        <div className="container hero-content">
          <div className="badge-pill">
            <Sparkles size={14} />
            <span>STUDIO OS v2.0 • Living Showcase & Library</span>
          </div>

          <h1 className="hero-headline">
            ПРОИЗВОДСТВЕННАЯ СИСТЕМА <br />
            <span className="gradient-text">ВЕБ-СТУДИИ НОВОГО ПОКОЛЕНИЯ</span>
          </h1>

          <p className="hero-subheadline">
            Единая монолитная среда, где каждый проект создается на базе 9 кинематографичных стандартов: 
            от голливудских 3D-заставок и анти-слоп фильтрации до сквозного SEO и Zero-Bug валидации.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions-row">
            <button className="btn-studio-primary" onClick={onOpenOrder}>
              <Sparkles size={18} />
              <span>Заказать разработку сайта</span>
            </button>

            <button className="btn-studio-secondary" onClick={onOpenDownload}>
              <Download size={18} />
              <span>Скачать систему (ZIP)</span>
            </button>

            <button className="btn-studio-secondary" onClick={onOpenVault}>
              <FolderDown size={18} />
              <span>Загрузить файлы с ПК</span>
            </button>
          </div>

          {/* Preset Switcher Bar */}
          <div className="intro-preset-bar">
            <span className="preset-lbl"><Terminal size={14} /> Живое 3D-интро:</span>
            <button 
              className={`preset-pill ${activePreset === 'particles' ? 'active' : ''}`}
              onClick={() => setActivePreset('particles')}
            >
              Marvel Particles (Three.js)
            </button>
            <button 
              className={`preset-pill ${activePreset === 'rays' ? 'active' : ''}`}
              onClick={() => setActivePreset('rays')}
            >
              Universal Light Reveal
            </button>
            <button 
              className={`preset-pill ${activePreset === 'cyber' ? 'active' : ''}`}
              onClick={() => setActivePreset('cyber')}
            >
              Glitch Cyberpunk
            </button>
          </div>

          {/* 9 Systems Fast Indicator Grid */}
          <div className="systems-ticker-grid">
            {[
              '01. Timeline & Scrollytelling',
              '02. Anti-Slop AI Defense',
              '03. Mobile-Perfect 44px',
              '04. Strict Spacing Tokens',
              '05. Hollywood 3D Intros',
              '06. SEO-by-Design Zod',
              '07. 5 Dynamic Archetypes',
              '08. Fact-First Copywriting',
              '09. Zero-Bug QA Matrix'
            ].map((sys, idx) => (
              <div key={idx} className="sys-pill">
                <ShieldCheck size={13} color="var(--accent)" />
                <span>{sys}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-intro-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 90px;
          padding-bottom: 60px;
          overflow: hidden;
        }
        .hero-webgl-canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }
        .hero-overlay {
          position: relative;
          z-index: 2;
          width: 100%;
          text-align: center;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-headline {
          font-size: var(--fs-hero);
          margin-top: 16px;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }
        .gradient-text {
          color: var(--accent);
          text-shadow: 0 0 35px var(--accent-glow);
        }
        .hero-subheadline {
          font-size: var(--fs-lg);
          color: var(--text-secondary);
          max-width: 860px;
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .hero-actions-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-bottom: 36px;
        }
        .intro-preset-bar {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 16px;
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-lg);
          margin-bottom: 36px;
        }
        .preset-lbl {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
          margin-right: 6px;
        }
        .preset-pill {
          padding: 4px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-family: var(--font-mono);
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          color: var(--text-secondary);
          cursor: pointer;
        }
        .preset-pill.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .systems-ticker-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          max-width: 1000px;
        }
        .sys-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.03);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
};
