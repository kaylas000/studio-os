// showcase-site/src/sections/02-AnimationPipelineSection.tsx
import React, { useState } from 'react';
import { Film, Eye, Download, Sparkles, Layers, Sliders } from 'lucide-react';
import { ImageSequenceCanvas } from '../components/ImageSequenceCanvas';
import { soundEngine } from '../audio/WebAudioEngine';

export const AnimationPipelineSection: React.FC<{ onDownload: () => void }> = ({ onDownload }) => {
  const [scrollProgress, setScrollProgress] = useState(42);
  const [bloomEnabled, setBloomEnabled] = useState(true);
  const [grainEnabled, setGrainEnabled] = useState(true);
  const [vignetteEnabled, setVignetteEnabled] = useState(true);

  const toggleBloom = () => {
    soundEngine.playClick(520);
    setBloomEnabled(!bloomEnabled);
  };

  const toggleGrain = () => {
    soundEngine.playClick(460);
    setGrainEnabled(!grainEnabled);
  };

  const toggleVignette = () => {
    soundEngine.playClick(400);
    setVignetteEnabled(!vignetteEnabled);
  };

  return (
    <section className="section-block" id="animations">
      <div className="container">
        <div className="section-tagline">
          <Film size={14} />
          <span>Система 01: Кинематографичные веб-анимации и скраббинг</span>
        </div>

        <h2 className="section-title">АНИМАЦИИ УРОВНЯ ВИДЕОПРОДАКШЕНА</h2>
        <p className="section-desc">
          Отказ от сотен разрозненных `setTimeout`. Master Timeline + ScrollTrigger, метод покадрового скраббинга 
          Image Sequence (как у Apple) и WebGL постобработка (Bloom, Depth of Field, Film Grain).
        </p>

        <div className="anim-showcase-grid">
          {/* Real CGI Image Sequence Canvas Scrubber */}
          <div className="anim-viewport-card">
            <ImageSequenceCanvas
              progress={scrollProgress}
              bloom={bloomEnabled}
              grain={grainEnabled}
              vignette={vignetteEnabled}
            />

            <div className="timeline-hud-meta">
              <span>Слой 1: <strong>Baked 3D Sequence</strong></span>
              <span>Слой 2: <strong>WebGL Shader Displacement</strong></span>
              <span>Слой 3: <strong>DOM Typography</strong></span>
            </div>
          </div>

          {/* Post-Processing Controls & Architecture */}
          <div className="anim-controls-card">
            <h3>🎛️ Постобработка кадра (Post-Processing)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
              80% кинематографичного ощущения создается постобработкой: мягким свечением линз, пленочным зерном и цветокоррекцией.
            </p>

            <div className="toggle-list">
              <div className="toggle-item">
                <div>
                  <strong>UnrealBloomPass (Свечение)</strong>
                  <p>Эмуляция переотражений в оптике кинокамеры</p>
                </div>
                <button 
                  className={`btn-toggle ${bloomEnabled ? 'on' : ''}`}
                  onClick={toggleBloom}
                >
                  {bloomEnabled ? 'ON' : 'OFF'}
                </button>
              </div>

              <div className="toggle-item">
                <div>
                  <strong>Film Grain (Пленочное зерно)</strong>
                  <p>Убирает цифровую стерильность и искусственность CGI</p>
                </div>
                <button 
                  className={`btn-toggle ${grainEnabled ? 'on' : ''}`}
                  onClick={toggleGrain}
                >
                  {grainEnabled ? 'ON' : 'OFF'}
                </button>
              </div>

              <div className="toggle-item">
                <div>
                  <strong>Vignette & Color Grading</strong>
                  <p>Фокусировка внимания зрителя к центру экрана</p>
                </div>
                <button 
                  className={`btn-toggle ${vignetteEnabled ? 'on' : ''}`}
                  onClick={toggleVignette}
                >
                  {vignetteEnabled ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>

            <div className="code-snippet-box">
              <code>{`// Master Timeline + ScrollTrigger Setup (Apple Method)
const master = gsap.timeline({
  scrollTrigger: {
    trigger: '#hero-canvas',
    scrub: 1.2, // Кинематографичная инерция с демпфированием
    pin: true,
    end: '+=5000'
  }
});
master.to(imageSeq, { frame: 150, snap: 'frame', onUpdate: render });`}</code>
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
        .timeline-hud-meta {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 8px;
          margin-top: 14px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
        .timeline-hud-meta strong {
          color: var(--accent);
        }
        .toggle-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
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
          padding: 6px 14px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: bold;
          border-radius: 4px;
          background: #252830;
          color: #888;
          cursor: pointer;
          min-width: 50px;
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
