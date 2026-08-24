// showcase-site/src/sections/02-AnimationPipelineSection.tsx
import React, { useState } from 'react';
import { Play, Sliders, Film, Eye, Download } from 'lucide-react';

export const AnimationPipelineSection: React.FC<{ onDownload: () => void }> = ({ onDownload }) => {
  const [scrollProgress, setScrollProgress] = useState(35);
  const [bloomEnabled, setBloomEnabled] = useState(true);
  const [grainEnabled, setGrainEnabled] = useState(true);
  const [vignetteEnabled, setVignetteEnabled] = useState(true);

  // Вычисляем угол поворота и масштаб в зависимости от прогресса скролла
  const rotationY = (scrollProgress / 100) * 360;
  const scale = 0.8 + (scrollProgress / 100) * 0.4;
  const currentFrame = Math.round((scrollProgress / 100) * 150);

  return (
    <section className="section-block" id="animations">
      <div className="container">
        <div className="section-tagline">
          <Film size={14} />
          <span>Система 01: Кинематографичные анимации</span>
        </div>

        <h2 className="section-title">АНИМАЦИИ УРОВНЯ ВИДЕОПРОДАКШЕНА</h2>
        <p className="section-desc">
          Отказ от сотен разрозненных `setTimeout`. Master Timeline + ScrollTrigger, метод покадрового скраббинга 
          Image Sequence (как у Apple) и WebGL постобработка (Bloom, Depth of Field, Film Grain).
        </p>

        <div className="anim-showcase-grid">
          {/* Visual Interactive Viewport */}
          <div className="anim-viewport-card">
            <div className={`viewport-render-area ${grainEnabled ? 'with-grain' : ''} ${vignetteEnabled ? 'with-vignette' : ''}`}>
              <div 
                className={`product-3d-box ${bloomEnabled ? 'with-bloom' : ''}`}
                style={{
                  transform: `scale(${scale}) rotateY(${rotationY}deg) rotateX(${scrollProgress * 0.2}deg)`
                }}
              >
                <div className="product-face front">STUDIO OS</div>
                <div className="product-face back">60 FPS</div>
                <div className="product-face left">TIMELINE</div>
                <div className="product-face right">SHADERS</div>
                <div className="product-face top">APPLE SEQ</div>
                <div className="product-face bottom">POST-FX</div>
              </div>

              {/* Scrubber HUD Info */}
              <div className="hud-overlay">
                <div>Frame: <strong>{currentFrame} / 150</strong> (WebP Seq)</div>
                <div>Timeline Progress: <strong>{scrollProgress}%</strong></div>
                <div>Lenis Inertia: <strong>1.2s Smooth</strong></div>
              </div>
            </div>

            {/* Interactive Timeline Scrubber Slider */}
            <div className="scrubber-bar-container">
              <label>
                <Sliders size={14} />
                <span>Эмуляция ScrollTrigger Scrub (0px → 5000px):</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={scrollProgress} 
                onChange={e => setScrollProgress(Number(e.target.value))}
                className="range-scrubber"
              />
            </div>
          </div>

          {/* Post-Processing Controls & Code */}
          <div className="anim-controls-card">
            <h3>🎛️ Панель постобработки (Post-Processing)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
              80% кинематографичного ощущения создается постобработкой, а не простым движением.
            </p>

            <div className="toggle-list">
              <div className="toggle-item">
                <div>
                  <strong>UnrealBloomPass (Свечение)</strong>
                  <p>Эмуляция переотражений в линзе камеры</p>
                </div>
                <button 
                  className={`btn-toggle ${bloomEnabled ? 'on' : ''}`}
                  onClick={() => setBloomEnabled(!bloomEnabled)}
                >
                  {bloomEnabled ? 'ON' : 'OFF'}
                </button>
              </div>

              <div className="toggle-item">
                <div>
                  <strong>Film Grain (Пленочное зерно)</strong>
                  <p>Убирает стерильность и искусственность CGI</p>
                </div>
                <button 
                  className={`btn-toggle ${grainEnabled ? 'on' : ''}`}
                  onClick={() => setGrainEnabled(!grainEnabled)}
                >
                  {grainEnabled ? 'ON' : 'OFF'}
                </button>
              </div>

              <div className="toggle-item">
                <div>
                  <strong>Vignette & Color Grading</strong>
                  <p>Фокусировка внимания зрителя к центру</p>
                </div>
                <button 
                  className={`btn-toggle ${vignetteEnabled ? 'on' : ''}`}
                  onClick={() => setVignetteEnabled(!vignetteEnabled)}
                >
                  {vignetteEnabled ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>

            <div className="code-snippet-box">
              <code>{`// Master Timeline + ScrollTrigger Setup
const master = gsap.timeline({
  scrollTrigger: {
    trigger: '#hero-canvas',
    scrub: 1.2, // Кинематографичная инерция
    pin: true,
    end: '+=5000'
  }
});
master.to(imageSeq, { frame: 150, snap: 'frame' });`}</code>
            </div>

            <button className="btn-studio-secondary" onClick={onDownload} style={{ width: '100%', marginTop: '16px' }}>
              <Download size={15} />
              <span>Скачать модуль анимаций (ZIP)</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .anim-showcase-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .anim-showcase-grid { grid-template-columns: 1fr; }
        }
        .anim-viewport-card, .anim-controls-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
        }
        .viewport-render-area {
          height: 380px;
          background: radial-gradient(circle at center, #181c24 0%, #080a0e 100%);
          border-radius: var(--radius-sm);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .with-grain::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .with-vignette::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, transparent 50%, rgba(0,0,0,0.8) 100%);
          pointer-events: none;
          z-index: 2;
        }
        .product-3d-box {
          width: 140px;
          height: 140px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.1s linear;
        }
        .product-face {
          position: absolute;
          width: 140px;
          height: 140px;
          border: 2px solid var(--accent);
          background: rgba(10, 15, 25, 0.85);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: bold;
          font-size: 0.85rem;
          box-shadow: inset 0 0 20px var(--accent-glow);
        }
        .front  { transform: translateZ(70px); }
        .back   { transform: rotateY(180deg) translateZ(70px); }
        .left   { transform: rotateY(-90deg) translateZ(70px); }
        .right  { transform: rotateY(90deg) translateZ(70px); }
        .top    { transform: rotateX(90deg) translateZ(70px); }
        .bottom { transform: rotateX(-90deg) translateZ(70px); }
        
        .with-bloom {
          filter: drop-shadow(0 0 25px var(--accent));
        }
        .hud-overlay {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
          background: rgba(0,0,0,0.6);
          padding: 6px 12px;
          border-radius: 4px;
          backdrop-filter: blur(8px);
          z-index: 3;
        }
        .scrubber-bar-container label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }
        .range-scrubber {
          width: 100%;
          accent-color: var(--accent);
          cursor: pointer;
        }
        .toggle-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }
        .toggle-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
        }
        .toggle-item strong {
          font-size: 0.88rem;
        }
        .toggle-item p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .btn-toggle {
          padding: 4px 12px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: bold;
          border-radius: 4px;
          background: #333;
          color: #aaa;
          cursor: pointer;
        }
        .btn-toggle.on {
          background: var(--accent);
          color: #000;
        }
        .code-snippet-box {
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          overflow-x: auto;
        }
      `}</style>
    </section>
  );
};
