// showcase-site/src/cinema/ScrollytellingAct.tsx
import React from 'react';
import { Sparkles, ShieldAlert, Palette, ShieldCheck, Download, Sliders, ArrowRight } from 'lucide-react';
import { soundEngine } from '../audio/WebAudioEngine';

interface ScrollytellingActProps {
  scrollProgress: number;
  onOpenDownload: () => void;
  onOpenOrder: () => void;
  onOpenVault: () => void;
  onSelectArchetype: (arch: string) => void;
  currentArchetype: string;
}

export const ScrollytellingAct: React.FC<ScrollytellingActProps> = ({
  scrollProgress,
  onOpenDownload,
  onOpenOrder,
  onOpenVault,
  onSelectArchetype,
  currentArchetype
}) => {
  return (
    <div className="scrollytelling-container">
      {/* HUD Telemetry Overlay Bar */}
      <div className="scrolly-telemetry-hud">
        <div className="hud-metric">
          <span>TIMELINE PROGRESS:</span>
          <strong>{Math.round(scrollProgress * 100)}%</strong>
        </div>
        <div className="hud-metric">
          <span>CAMERA VECTOR:</span>
          <strong>Z:{(20 - scrollProgress * 7).toFixed(1)}m</strong>
        </div>
        <div className="hud-metric">
          <span>ARCHETYPE MATRIX:</span>
          <strong>{currentArchetype.toUpperCase()}</strong>
        </div>
      </div>

      {/* Act 1: 3D Monolith & Motion Production */}
      <section className="scrolly-act-section" id="act-1">
        <div className="act-content-card">
          <div className="act-header">
            <span className="act-num">01</span>
            <div>
              <span className="act-tagline">[SYSTEM 01 // MOTION PRODUCTION]</span>
              <h2 className="act-title">ГОЛЛИВУДСКИЕ 3D-ЗАСТАВКИ И ТАЙМЛАЙНЫ</h2>
            </div>
          </div>

          <p className="act-desc">
            Никакого спагетти-кода из setTimeout. Длинная веб-анимация строится как единый Master Timeline, 
            синхронизированный со скроллом через ScrollTrigger и Lenis с инерцией 1.2s.
          </p>

          <div className="act-features-chips">
            <span className="chip">Three.js WebGL Core</span>
            <span className="chip">Sub-bass Web Audio Synth</span>
            <span className="chip">Apple Image-Sequence Scrubbing</span>
            <span className="chip">60 FPS Guaranteed</span>
          </div>

          <div className="act-actions-row">
            <button 
              className="btn-studio-primary" 
              onClick={() => { soundEngine.playClick(600); onOpenOrder(); }}
            >
              <Sparkles size={16} />
              <span>Заказать сайт студии</span>
            </button>
            <button 
              className="btn-studio-secondary" 
              onClick={() => { soundEngine.playClick(500); onOpenDownload(); }}
            >
              <Download size={16} />
              <span>Скачать модуль 3D</span>
            </button>
          </div>
        </div>
      </section>

      {/* Act 2: Anti-Slop AI Defense Matrix */}
      <section className="scrolly-act-section" id="act-2">
        <div className="act-content-card">
          <div className="act-header">
            <span className="act-num">02</span>
            <div>
              <span className="act-tagline">[SYSTEM 02 // ANTI-SLOP DEFENSE]</span>
              <h2 className="act-title">ФИЛЬТРАЦИЯ AI-ШАБЛОННОСТИ И КЛИШЕ</h2>
            </div>
          </div>

          <p className="act-desc">
            Автоматические детекторы блокируют заезженные фразы («в современном мире»), фиолетово-синие градиенты 
            и дефолтные шрифты. Минимальный порог оригинальности проекта — 75/100.
          </p>

          <div className="slop-visual-meter">
            <div className="meter-label">
              <span>Brand DNA Originality Score:</span>
              <strong style={{ color: '#00ff88' }}>94 / 100 (HIGH AUTHENTICITY)</strong>
            </div>
            <div className="meter-track">
              <div className="meter-fill" style={{ width: '94%' }} />
            </div>
          </div>

          <div className="act-actions-row">
            <button 
              className="btn-studio-secondary" 
              onClick={() => { soundEngine.playClick(500); onOpenDownload(); }}
            >
              <Download size={16} />
              <span>Скачать Anti-Slop линтеры (ZIP)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Act 3: 5 Polymorphic Archetypes */}
      <section className="scrolly-act-section" id="act-3">
        <div className="act-content-card">
          <div className="act-header">
            <span className="act-num">03</span>
            <div>
              <span className="act-tagline">[SYSTEM 07 // 5 DESIGN ARCHETYPES]</span>
              <h2 className="act-title">МНОГОСЛОЙНАЯ ВАРИАТИВНОСТЬ ДИЗАЙНОВ</h2>
            </div>
          </div>

          <p className="act-desc">
            Макет и бизнес-логика умеют за 1 секунду мутировать между 5 фундаментальными стилями 
            с автоматическим контролем математической контрастности APCA (WCAG AAA).
          </p>

          {/* Quick Archetype Switcher */}
          <div className="act-arch-switcher">
            {[
              { id: 'luxury-noir', name: 'Luxury Noir', color: '#d4af37' },
              { id: 'neo-brutalism', name: 'Neo-Brutalism', color: '#ff3e00' },
              { id: 'cyber-tech', name: 'Cyber-Tech', color: '#00ff88' },
              { id: 'editorial-swiss', name: 'Editorial Swiss', color: '#0044ff' },
              { id: 'clean-minimal', name: 'Clean Minimal', color: '#6366f1' }
            ].map(a => (
              <button
                key={a.id}
                className={`btn-arch-pill ${currentArchetype === a.id ? 'active' : ''}`}
                onClick={() => {
                  soundEngine.playClick(450);
                  onSelectArchetype(a.id);
                }}
              >
                <span className="dot" style={{ background: a.color }} />
                <span>{a.name}</span>
              </button>
            ))}
          </div>

          <div className="act-actions-row">
            <button 
              className="btn-studio-secondary" 
              onClick={() => { soundEngine.playClick(500); onOpenDownload(); }}
            >
              <Download size={16} />
              <span>Скачать 5 Архетипов (JSON/CSS)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Act 4: Production Core & Monorepo */}
      <section className="scrolly-act-section" id="act-4">
        <div className="act-content-card">
          <div className="act-header">
            <span className="act-num">04</span>
            <div>
              <span className="act-tagline">[SYSTEM 09 // ZERO-BUG QUALITY]</span>
              <h2 className="act-title">ЕДИНЫЙ ПРОИЗВОДСТВЕННЫЙ МОНОРЕПОЗИТОРИЙ</h2>
            </div>
          </div>

          <p className="act-desc">
            В корне системы агент создает проекты через `studio new`, принудительно подключает 9 стандартов, 
            а удачные блоки собирает через `studio harvest` в общую библиотеку.
          </p>

          <div className="monorepo-stats-grid">
            <div className="stat-card">
              <strong>9 СИСТЕМ</strong>
              <span>В едином ядре</span>
            </div>
            <div className="stat-card">
              <strong>60 FPS</strong>
              <span>Стабильный фреймрейт</span>
            </div>
            <div className="stat-card">
              <strong>0.00 CLS</strong>
              <span>Zero Layout Shift</span>
            </div>
            <div className="stat-card">
              <strong>WCAG AAA</strong>
              <span>100% Доступность</span>
            </div>
          </div>

          <div className="act-actions-row">
            <button 
              className="btn-studio-primary" 
              onClick={() => { soundEngine.playClick(650); onOpenOrder(); }}
            >
              <Sparkles size={16} />
              <span>Запустить проект в STUDIO OS</span>
            </button>
            <button 
              className="btn-studio-secondary" 
              onClick={() => { soundEngine.playClick(520); onOpenVault(); }}
            >
              <span>Загрузить ассеты с ПК</span>
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .scrollytelling-container {
          position: relative;
          z-index: 10;
          padding: 60px 0 100px;
          display: flex;
          flex-direction: column;
          gap: clamp(80px, 12vw, 150px);
        }
        .scrolly-telemetry-hud {
          position: sticky;
          top: 75px;
          z-index: 50;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 18px;
          background: rgba(8, 10, 14, 0.8);
          backdrop-filter: blur(16px);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .hud-metric strong {
          color: var(--accent);
          margin-left: 6px;
        }
        .scrolly-act-section {
          min-height: 75vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .act-content-card {
          max-width: 680px;
          background: var(--bg-card);
          border: var(--border-width) solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: clamp(24px, 4vw, 44px);
          box-shadow: var(--shadow-card);
          backdrop-filter: blur(20px);
        }
        .act-header {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 18px;
        }
        .act-num {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1;
          color: var(--accent);
          opacity: 0.9;
        }
        .act-tagline {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent);
          letter-spacing: 0.15em;
          margin-bottom: 6px;
        }
        .act-title {
          font-size: clamp(1.4rem, 2.5vw, 2.2rem);
          line-height: 1.15;
        }
        .act-desc {
          font-size: clamp(0.95rem, 1vw, 1.1rem);
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .act-features-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }
        .chip {
          padding: 6px 12px;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-primary);
        }
        .act-actions-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .slop-visual-meter {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 16px;
          margin-bottom: 24px;
        }
        .meter-label {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }
        .meter-track {
          width: 100%;
          height: 6px;
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
          overflow: hidden;
        }
        .meter-fill {
          height: 100%;
          background: #00ff88;
          box-shadow: 0 0 12px #00ff88;
        }
        .act-arch-switcher {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .btn-arch-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          min-height: 44px;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          cursor: pointer;
        }
        .btn-arch-pill .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .btn-arch-pill.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .monorepo-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 10px;
          margin-bottom: 24px;
        }
        .stat-card {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px;
          text-align: center;
        }
        .stat-card strong {
          display: block;
          font-family: var(--font-mono);
          font-size: 1.1rem;
          color: var(--accent);
          margin-bottom: 2px;
        }
        .stat-card span {
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
};
