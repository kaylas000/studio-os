// showcase-site/src/sections/04-ArchetypeSandboxSection.tsx
import React from 'react';
import { Palette, Check, Sparkles, Download, Layers } from 'lucide-react';
import { ARCHETYPES } from '@library/07-archetypes/TokenEngine';

interface ArchetypeSandboxProps {
  currentArchetype: string;
  onSelectArchetype: (archetype: string) => void;
  onDownload: () => void;
}

export const ArchetypeSandboxSection: React.FC<ArchetypeSandboxProps> = ({
  currentArchetype,
  onSelectArchetype,
  onDownload
}) => {
  return (
    <section className="section-block" id="archetypes">
      <div className="container">
        <div className="section-tagline">
          <Palette size={14} />
          <span>Система 07: Полиморфная вариативность дизайнов</span>
        </div>

        <h2 className="section-title">5 ДИЗАЙН-АРХЕТИПОВ В ОДНОМ САЙТЕ</h2>
        <p className="section-desc">
          Один и тот же макет и бизнес-логика умеют за 1 клик трансформироваться в 5 фундаментальных визуальных миров: 
          от утонченного Noir до сырого Neo-Brutalism без перезагрузки и спагетти-кода.
        </p>

        {/* 5 Archetypes Switcher Cards */}
        <div className="archetypes-selector-grid">
          {Object.values(ARCHETYPES).map(arch => {
            const isActive = currentArchetype === arch.id;

            return (
              <div 
                key={arch.id}
                className={`arch-card ${isActive ? 'active-arch' : ''}`}
                onClick={() => onSelectArchetype(arch.id)}
              >
                <div className="arch-card__head">
                  <span className="arch-dot" style={{ background: arch.colors.accent }} />
                  <h4>{arch.name}</h4>
                  {isActive && <span className="active-badge"><Check size={12} /> Активен</span>}
                </div>

                <p className="arch-desc">{arch.tagline}</p>

                <div className="arch-swatches">
                  <div className="swatch" style={{ background: arch.colors.bgPrimary }} title="Background" />
                  <div className="swatch" style={{ background: arch.colors.bgSurface }} title="Surface" />
                  <div className="swatch" style={{ background: arch.colors.accent }} title="Accent" />
                  <div className="swatch" style={{ background: arch.colors.textPrimary }} title="Text" />
                </div>

                <div className="arch-details-meta">
                  <span>Шрифт: {arch.typography.fontHeading.split(',')[0].replace(/'/g, '')}</span>
                  <span>Радиус: {arch.geometry.radiusMd}</span>
                </div>

                <button className={`btn-apply-arch ${isActive ? 'applied' : ''}`}>
                  {isActive ? 'Стиль сайта активирован' : 'Примерить этот архетип →'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Real-time Demo Box inside the current archetype */}
        <div className="sandbox-preview-box">
          <div className="sandbox-header">
            <div>
              <h3>Живая демонстрация текущего стиля: <strong>{ARCHETYPES[currentArchetype]?.name}</strong></h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                Все блоки, карточки, шрифты и кнопки на этой странице сейчас динамически отрендерены через токен-движок.
              </p>
            </div>
            <button className="btn-studio-secondary" onClick={onDownload}>
              <Download size={14} />
              <span>Скачать токены (JSON)</span>
            </button>
          </div>

          <div className="sandbox-demo-content">
            <div className="demo-card">
              <span className="demo-badge">PREVIEW CARD</span>
              <h4>Интерактивный UI-компонент</h4>
              <p>Тестирование радиусов, обводок, теней и типографической иерархии в реальном времени.</p>
              <button className="btn-studio-primary" style={{ marginTop: '12px' }}>
                Кнопка действия
              </button>
            </div>
            <div className="demo-card">
              <span className="demo-badge">APCA CONTRAST</span>
              <h4>Математический контроль</h4>
              <p>Контрастность вычисляется алгоритмически, гарантируя соблюдение стандартов доступности WCAG AAA.</p>
              <div className="contrast-stat">
                <span>Contrast Ratio: <strong>14.2:1 (AAA)</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .archetypes-selector-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 16px;
          margin-bottom: 30px;
        }
        .arch-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 20px;
          cursor: pointer;
          transition: all 0.25s;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .arch-card:hover {
          border-color: var(--accent);
          transform: translateY(-3px);
        }
        .arch-card.active-arch {
          border-color: var(--accent);
          box-shadow: 0 0 25px var(--accent-glow);
          background: var(--bg-card);
        }
        .arch-card__head {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .arch-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .arch-card__head h4 {
          font-size: 1rem;
          margin: 0;
        }
        .active-badge {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #00ff88;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .arch-desc {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-bottom: 14px;
          line-height: 1.4;
        }
        .arch-swatches {
          display: flex;
          gap: 6px;
          margin-bottom: 12px;
        }
        .swatch {
          width: 22px;
          height: 22px;
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .arch-details-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-secondary);
          margin-bottom: 14px;
        }
        .btn-apply-arch {
          width: 100%;
          padding: 8px;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          font-weight: bold;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          background: var(--bg-primary);
          color: var(--text-primary);
          cursor: pointer;
        }
        .btn-apply-arch.applied {
          background: var(--accent);
          color: #000;
          border-color: var(--accent);
        }
        .sandbox-preview-box {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
        }
        .sandbox-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .sandbox-demo-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 768px) {
          .sandbox-demo-content { grid-template-columns: 1fr; }
        }
        .demo-card {
          background: var(--bg-card);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 20px;
          box-shadow: var(--shadow-card);
        }
        .demo-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--accent);
          margin-bottom: 8px;
        }
        .contrast-stat {
          margin-top: 14px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          padding: 6px 12px;
          background: rgba(0,255,136,0.1);
          border: 1px solid rgba(0,255,136,0.3);
          border-radius: 4px;
          color: #00ff88;
        }
      `}</style>
    </section>
  );
};
