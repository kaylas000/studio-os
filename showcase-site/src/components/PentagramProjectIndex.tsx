// showcase-site/src/components/PentagramProjectIndex.tsx
import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Layers, ShieldCheck, Download } from 'lucide-react';
import { soundEngine } from '../audio/WebAudioEngine';

interface ProjectEntry {
  id: string;
  code: string;
  client: string;
  archetype: string;
  metric: string;
  year: string;
  techniques: string[];
}

const PROJECTS_INDEX: ProjectEntry[] = [
  {
    id: 'PRJ-01',
    code: 'AURUM-NOIR',
    client: 'Aurum Haute Horlogerie',
    archetype: 'Luxury Noir',
    metric: '+340% Время на сайте',
    year: '2026',
    techniques: ['3D WebGL Monolith', 'Image Sequence Scrubbing', 'PBR Gold Shaders']
  },
  {
    id: 'PRJ-02',
    code: 'STREET-BRUTAL',
    client: 'KINETIC STREETWEAR',
    archetype: 'Neo-Brutalism',
    metric: '4.8% Конверсия в заказ',
    year: '2026',
    techniques: ['3px Black Borders', 'Zero-Ease Instant Physics', 'Raw Monospace Typo']
  },
  {
    id: 'PRJ-03',
    code: 'CYBER-NODE',
    client: 'Quantum Cloud Infrastructure',
    archetype: 'Cyber-Tech',
    metric: '68ms Ответ сервера',
    year: '2026',
    techniques: ['Chamfered Polygon Grid', 'Terminal Scanlines', 'Neon Glow Matrix']
  },
  {
    id: 'PRJ-04',
    code: 'SWISS-ARCHIVE',
    client: 'Zurich Architecture Forum',
    archetype: 'Editorial Swiss',
    metric: '100% WCAG AAA Score',
    year: '2026',
    techniques: ['Asymmetric Editorial Grid', 'Neue Typographic Hierarchy', '0px Radii']
  }
];

export const PentagramProjectIndex: React.FC<{ onOpenOrder: () => void }> = ({ onOpenOrder }) => {
  const [activeProject, setActiveProject] = useState<string>(PROJECTS_INDEX[0].id);

  return (
    <section className="section" id="projects-index">
      <div className="container">
        <div className="section-tagline">
          <span>[PENTAGRAM & READMYAG BENCHMARK // EDITORIAL INDEX]</span>
        </div>

        <h2 className="section-title">РЕЕСТР БОЕВЫХ ПРОЕКТОВ СТУДИИ</h2>
        <p className="section-desc">
          Проект — это строка плотного редакционного индекса, а не банальная карточка. 
          Каждый проект создан строго по 9 монолитным стандартам качества STUDIO OS.
        </p>

        {/* Dense Ledger Index Rows (Pentagram.com Benchmark) */}
        <div className="ledger-index-table">
          <div className="ledger-header-row">
            <span>КОД</span>
            <span>КЛИЕНТ & ПРОЕКТ</span>
            <span>АРХЕТИП</span>
            <span>РЕЗУЛЬТАТ</span>
            <span>ГОД</span>
          </div>

          {PROJECTS_INDEX.map((prj) => {
            const isHovered = activeProject === prj.id;

            return (
              <div 
                key={prj.id}
                className={`ledger-row-item ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => {
                  soundEngine.playClick(440);
                  setActiveProject(prj.id);
                }}
                onClick={onOpenOrder}
              >
                <div className="cell-code">
                  <span className="code-badge">{prj.code}</span>
                </div>

                <div className="cell-client">
                  <h3>{prj.client}</h3>
                  <div className="techniques-tags">
                    {prj.techniques.map((t, i) => (
                      <span key={i}>• {t}</span>
                    ))}
                  </div>
                </div>

                <div className="cell-arch">
                  <span className="arch-label">{prj.archetype}</span>
                </div>

                <div className="cell-metric">
                  <strong>{prj.metric}</strong>
                </div>

                <div className="cell-year">
                  <span>{prj.year}</span>
                  <ArrowUpRight size={16} className="arrow-icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .ledger-index-table {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border-strong);
          margin-top: 24px;
        }
        .ledger-header-row {
          display: grid;
          grid-template-columns: 120px 1.8fr 1.2fr 1.2fr 90px;
          gap: 16px;
          padding: 12px 16px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--border);
        }
        @media (max-width: 860px) {
          .ledger-header-row { display: none; }
        }
        .ledger-row-item {
          display: grid;
          grid-template-columns: 120px 1.8fr 1.2fr 1.2fr 90px;
          gap: 16px;
          align-items: center;
          padding: clamp(16px, 3vw, 24px) 16px;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          background: transparent;
        }
        @media (max-width: 860px) {
          .ledger-row-item {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 18px 12px;
          }
        }
        .ledger-row-item:hover, .ledger-row-item.hovered {
          background: var(--bg-card);
          border-bottom-color: var(--accent);
          padding-left: 24px;
        }
        .code-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent);
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid var(--border);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }
        .cell-client h3 {
          font-size: clamp(1.1rem, 1rem + 0.5vw, 1.4rem);
          margin-bottom: 4px;
        }
        .techniques-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
        .arch-label {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .cell-metric strong {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: #00ff88;
        }
        .cell-year {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .arrow-icon {
          transition: transform 0.2s;
        }
        .ledger-row-item:hover .arrow-icon {
          transform: translate(2px, -2px);
          color: var(--accent);
        }
      `}</style>
    </section>
  );
};
