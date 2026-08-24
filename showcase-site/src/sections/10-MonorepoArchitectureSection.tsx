// showcase-site/src/sections/10-MonorepoArchitectureSection.tsx
import React from 'react';
import { FolderTree, Sparkles, Download, FolderDown } from 'lucide-react';
import { soundEngine } from '../audio/WebAudioEngine';

interface MonorepoProps {
  onOpenDownload: () => void;
  onOpenOrder: () => void;
  onOpenVault: () => void;
}

export const MonorepoArchitectureSection: React.FC<MonorepoProps> = ({
  onOpenDownload,
  onOpenOrder,
  onOpenVault
}) => {
  const TREE_STRUCTURE = [
    { name: '.studio/', type: 'folder', desc: 'Правила ИИ-агента, библиотека промптов и скилов' },
    { name: 'core-engine/bin/studio.js', type: 'file', desc: 'CLI оркестратор: studio new, studio harvest, studio audit' },
    { name: 'library/01-animations/', type: 'folder', desc: 'Master Timeline, Lenis, WebCodecs, Post-processing' },
    { name: 'library/02-anti-slop/', type: 'folder', desc: 'Словари AI-клише, детекторы градиентов, хэши лейаутов' },
    { name: 'library/03-mobile/', type: 'folder', desc: 'Fluid clamp(), safe-area, TouchTargetValidator (48px)' },
    { name: 'library/04-spacing/', type: 'folder', desc: 'Шкала дизайн-токенов, Box/Stack, SpacingOverlay' },
    { name: 'library/05-hollywood-intros/', type: 'folder', desc: 'Three.js 3D-заставки (Universal, Particles, Glitch)' },
    { name: 'library/06-seo/', type: 'folder', desc: 'Zod контракты, AST image-seo, JSON-LD Schema граф' },
    { name: 'library/07-archetypes/', type: 'folder', desc: '5 дизайн-архетипов: Noir, Brutalism, Cyber, Swiss, Minimal' },
    { name: 'library/08-copywriting/', type: 'folder', desc: 'VoiceMatrix, FactDensityScorer, Flesch Readability' },
    { name: 'library/09-quality/', type: 'folder', desc: 'ESLint reflow AST правила, Playwright матрица, CDP тесты' },
    { name: 'library/assets-vault/', type: 'folder', desc: 'Хранилище сырых ассетов с ПК (3D модели, звуки, шейдеры)' },
    { name: 'showcase-site/', type: 'folder', desc: 'Живой портал и сайт-шоукейс студии (React 18 + Vite)' },
    { name: 'projects/', type: 'folder', desc: 'Папка создаваемых клиентских проектов со встроенными стандартами' }
  ];

  return (
    <section className="section" id="vault-section">
      <div className="container">
        <div className="section-tagline">
          <FolderTree size={14} />
          <span>Архитектура STUDIO OS: Монорепозиторий и Библиотека</span>
        </div>

        <h2 className="section-title">ЕДИНЫЙ ПРОИЗВОДСТВЕННЫЙ МОНОРЕПОЗИТОРИЙ</h2>
        <p className="section-desc">
          В корне системы агент создает проекты и принудительно наследует все 9 стандартов студии. 
          Каждый удачный блок собирается харвестером и навсегда обогащает общую библиотеку.
        </p>

        <div className="tree-layout-grid">
          <div className="tree-explorer-card">
            <div className="tree-card-header">
              <span className="tree-root-lbl">📂 studio-os/ (Monorepo Root)</span>
              <button 
                className="btn-studio-primary" 
                onClick={() => { soundEngine.playClick(500); onOpenDownload(); }}
                style={{ padding: '8px 16px', fontSize: '0.78rem', minHeight: '38px' }}
              >
                <Download size={14} />
                <span>Скачать репозиторий (ZIP)</span>
              </button>
            </div>

            <div className="tree-list-scroll">
              {TREE_STRUCTURE.map((item, idx) => (
                <div key={idx} className="tree-row-item">
                  <span className="tree-name-code">
                    {item.type === 'folder' ? '📁' : '📄'} <code>{item.name}</code>
                  </span>
                  <span className="tree-desc-text">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cli-callout-card">
            <h3>💻 Консольные команды ИИ-агента</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
              Управление проектами и библиотекой через встроенный CLI-движок:
            </p>

            <div className="cli-commands-group">
              <div className="cmd-snippet-box">
                <code>npx studio new client-luxury luxury-noir</code>
                <span>Создать проект со всеми 9 стандартами и выбранным архетипом</span>
              </div>
              <div className="cmd-snippet-box">
                <code>npx studio harvest hero-cyber components</code>
                <span>Сохранить удачный блок в общую библиотеку студии</span>
              </div>
              <div className="cmd-snippet-box">
                <code>npx studio audit</code>
                <span>Прогнать аудит Anti-Slop, SEO, Spacing и 60 FPS</span>
              </div>
            </div>

            <div className="cta-dual-row">
              <button 
                className="btn-studio-secondary" 
                onClick={() => { soundEngine.playClick(520); onOpenVault(); }} 
                style={{ flex: 1 }}
              >
                <FolderDown size={15} />
                <span>Загрузить ассеты с ПК</span>
              </button>
              <button 
                className="btn-studio-primary" 
                onClick={() => { soundEngine.playClick(600); onOpenOrder(); }} 
                style={{ flex: 1 }}
              >
                <Sparkles size={15} />
                <span>Заказать сайт</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .tree-layout-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .tree-layout-grid { grid-template-columns: 1fr; }
        }
        .tree-explorer-card, .cli-callout-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(18px, 3vw, 28px);
        }
        .tree-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 12px;
          flex-wrap: wrap;
          gap: 10px;
        }
        .tree-root-lbl {
          font-family: var(--font-mono);
          font-weight: bold;
          color: var(--accent);
          font-size: 0.95rem;
        }
        .tree-list-scroll {
          display: flex;
          flex-direction: column;
          gap: 6px;
          max-height: 380px;
          overflow-y: auto;
        }
        .tree-row-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background: var(--bg-primary);
          border-radius: 4px;
          font-size: 0.78rem;
          gap: 12px;
        }
        .tree-name-code {
          font-family: var(--font-mono);
          color: var(--text-primary);
          white-space: nowrap;
        }
        .tree-desc-text {
          color: var(--text-secondary);
          font-size: 0.72rem;
          text-align: right;
        }
        .cli-commands-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        .cmd-snippet-box {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px;
        }
        .cmd-snippet-box code {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--accent);
          margin-bottom: 4px;
        }
        .cmd-snippet-box span {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .cta-dual-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
};
