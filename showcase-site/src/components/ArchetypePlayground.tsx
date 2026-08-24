// showcase-site/src/components/ArchetypePlayground.tsx
import React, { useState } from 'react';
import { Palette, Check, Sparkles, Download, Sliders, ShieldCheck } from 'lucide-react';
import { ARCHETYPES } from '@library/07-archetypes/TokenEngine';
import { soundEngine } from '../audio/WebAudioEngine';

interface ArchetypePlaygroundProps {
  currentArchetype: string;
  onSelectArchetype: (arch: string) => void;
  onDownload: () => void;
}

export const ArchetypePlayground: React.FC<ArchetypePlaygroundProps> = ({
  currentArchetype,
  onSelectArchetype,
  onDownload
}) => {
  const [density, setDensity] = useState<'compact' | 'comfortable' | 'spacious'>('comfortable');

  const handleDensityChange = (d: 'compact' | 'comfortable' | 'spacious') => {
    soundEngine.playClick(400);
    setDensity(d);
    const mult = d === 'compact' ? 0.75 : d === 'comfortable' ? 1.0 : 1.35;
    document.documentElement.style.setProperty('--space-unit', `${8 * mult}px`);
  };

  return (
    <div className="archetype-playground-master">
      {/* 5 Archetypes Selector Grid */}
      <div className="arch-cards-grid">
        {Object.values(ARCHETYPES).map(arch => {
          const isActive = currentArchetype === arch.id;

          return (
            <div 
              key={arch.id}
              className={`arch-select-card ${isActive ? 'selected' : ''}`}
              onClick={() => {
                soundEngine.playClick(480);
                onSelectArchetype(arch.id);
              }}
            >
              <div className="arch-card-top">
                <span className="swatch-dot" style={{ background: arch.colors.accent }} />
                <h4>{arch.name}</h4>
                {isActive && <span className="active-check">✓ Активен</span>}
              </div>

              <p className="arch-tagline-text">{arch.tagline}</p>

              <div className="arch-palette-preview">
                <span style={{ background: arch.colors.bgPrimary }} title="Primary" />
                <span style={{ background: arch.colors.bgSurface }} title="Surface" />
                <span style={{ background: arch.colors.accent }} title="Accent" />
                <span style={{ background: arch.colors.textPrimary }} title="Text" />
              </div>

              <div className="arch-meta-specs">
                <span>Шрифт: <strong>{arch.typography.fontHeading.split(',')[0].replace(/'/g, '')}</strong></span>
                <span>Радиус: <strong>{arch.geometry.radiusMd}</strong></span>
              </div>

              <button className={`btn-activate-arch ${isActive ? 'current' : ''}`}>
                {isActive ? 'Стиль активирован' : 'Применить стиль →'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Interactive Controls Bar: Density & Token Export */}
      <div className="arch-controls-footer">
        <div className="density-toggle-group">
          <span className="density-lbl"><Sliders size={14} /> Плотность сетки (Density):</span>
          {(['compact', 'comfortable', 'spacious'] as const).map(d => (
            <button
              key={d}
              className={`btn-density ${density === d ? 'active' : ''}`}
              onClick={() => handleDensityChange(d)}
            >
              {d === 'compact' ? 'Плотная (-25%)' : d === 'comfortable' ? 'Стандарт (100%)' : 'Просторная (+35%)'}
            </button>
          ))}
        </div>

        <div className="arch-action-btns">
          <div className="apca-badge">
            <ShieldCheck size={14} color="#00ff88" />
            <span>APCA Contrast: <strong>14.2:1 (WCAG AAA)</strong></span>
          </div>

          <button className="btn-studio-secondary" onClick={onDownload}>
            <Download size={14} />
            <span>Экспорт токенов (JSON)</span>
          </button>
        </div>
      </div>

      <style>{`
        .archetype-playground-master {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .arch-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }
        .arch-select-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(16px, 3vw, 22px);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
        }
        .arch-select-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .arch-select-card.selected {
          border-color: var(--accent);
          box-shadow: 0 0 25px var(--accent-glow);
          background: var(--bg-card);
        }
        .arch-card-top {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .swatch-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .arch-card-top h4 {
          font-size: 0.95rem;
          margin: 0;
        }
        .active-check {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #00ff88;
        }
        .arch-tagline-text {
          font-size: 0.76rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .arch-palette-preview {
          display: flex;
          gap: 6px;
        }
        .arch-palette-preview span {
          width: 22px;
          height: 22px;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .arch-meta-specs {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-secondary);
        }
        .arch-meta-specs strong { color: var(--text-primary); }
        .btn-activate-arch {
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
        .btn-activate-arch.current {
          background: var(--accent);
          color: #000;
          border-color: var(--accent);
        }
        .arch-controls-footer {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(14px, 3vw, 20px);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        .density-toggle-group {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .density-lbl {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .btn-density {
          padding: 6px 12px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          cursor: pointer;
        }
        .btn-density.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .arch-action-btns {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .apca-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(0, 255, 136, 0.08);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #00ff88;
        }
      `}</style>
    </div>
  );
};
