// showcase-site/src/sections/02-AnimationPipelineSection.tsx
import React from 'react';
import { Film, Eye, Download, Sparkles, Layers, Sliders } from 'lucide-react';
import { AppleSequenceScrubber } from '../components/AppleSequenceScrubber';

export const AnimationPipelineSection: React.FC<{ onDownload: () => void }> = ({ onDownload }) => {
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
          {/* Apple Image Sequence Scrubber Canvas */}
          <div className="anim-viewport-card">
            <AppleSequenceScrubber onDownload={onDownload} />
          </div>

          {/* Post-Processing Controls & Architecture */}
          <div className="anim-controls-card">
            <h3>🎛️ Архитектура кинематографичного кадра</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
              80% кинематографичного ощущения создается постобработкой: мягким свечением линз, пленочным зерном и цветокоррекцией.
            </p>

            <div className="architecture-box">
              <div className="arch-layer">
                <span className="layer-tag">Слой 1</span>
                <div>
                  <strong>Baked 3D Sequence / Video</strong>
                  <p>Фотореалистичный контент из Blender/C4D с честным motion blur</p>
                </div>
              </div>

              <div className="arch-layer">
                <span className="layer-tag">Слой 2</span>
                <div>
                  <strong>Живой WebGL поверх</strong>
                  <p>Частицы, курсор-эффекты и шейдерные волны (mix-blend-mode: screen)</p>
                </div>
              </div>

              <div className="arch-layer">
                <span className="layer-tag">Слой 3</span>
                <div>
                  <strong>DOM + CSS типографика</strong>
                  <p>Доступность, SEO, читаемость с GSAP SplitText анимацией</p>
                </div>
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
          padding: clamp(16px, 3vw, 24px);
        }
        .architecture-box {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 16px;
        }
        .arch-layer {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 14px;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
        }
        .layer-tag {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--accent);
          background: rgba(212, 175, 55, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
          white-space: nowrap;
        }
        .arch-layer strong {
          font-size: 0.85rem;
          display: block;
        }
        .arch-layer p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .code-snippet-box {
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
          overflow-x: auto;
        }
      `}</style>
    </section>
  );
};
