// showcase-site/src/sections/05-SpacingRadarSection.tsx
import React, { useState } from 'react';
import { Eye, EyeOff, LayoutGrid, Ruler, CheckCircle2, Download } from 'lucide-react';

interface SpacingRadarProps {
  isOverlayActive: boolean;
  onToggleOverlay: () => void;
  onDownload: () => void;
}

export const SpacingRadarSection: React.FC<SpacingRadarProps> = ({
  isOverlayActive,
  onToggleOverlay,
  onDownload
}) => {
  const [selectedToken, setSelectedToken] = useState('16px (var(--spacing-4))');

  const TOKENS_SCALE = [
    { name: '--spacing-0-5', val: '2px', use: 'Микро-отступы бейджей' },
    { name: '--spacing-1', val: '4px', use: 'Иконки и мелкие кнопки' },
    { name: '--spacing-2', val: '8px', use: 'Базовая модульная единица' },
    { name: '--spacing-3', val: '12px', use: 'Внутренние паддинги инпутов' },
    { name: '--spacing-4', val: '16px', use: 'Стандартный зазор элементов' },
    { name: '--spacing-6', val: '24px', use: 'Отступы внутри карточек' },
    { name: '--spacing-8', val: '32px', use: 'Зазоры между карточками' },
    { name: '--spacing-12', val: '48px', use: 'Зазоры заголовков' },
    { name: '--spacing-16', val: '64px', use: 'Планшетные отступы секций' },
    { name: '--spacing-24', val: '96px', use: 'Десктопные отступы секций' }
  ];

  return (
    <section className="section-block" id="spacing-radar">
      <div className="container">
        <div className="section-tagline">
          <Ruler size={14} />
          <span>Система 04: Система контроля отступов и зазоров</span>
        </div>

        <h2 className="section-title">АППАРАТНЫЙ КОНТРОЛЬ ГЕОМЕТРИИ И ОТСТУПОВ</h2>
        <p className="section-desc">
          Полный запрет хаотичных пикселей (13px, 19px, 22px). Только строгая модульная шкала токенов, 
          примитивы `&lt;Box&gt;` и `&lt;Stack&gt;`, а также Stylelint-правила, блокирующие произвольный CSS.
        </p>

        <div className="spacing-grid-layout">
          {/* Live Overlay Toggle & Box Model Viewer */}
          <div className="spacing-card">
            <div className="spacing-card__head">
              <h3>📡 Радар отступов (Live Spacing Overlay)</h3>
              <button 
                className={`btn-studio-primary ${isOverlayActive ? 'active-pulse' : ''}`}
                onClick={onToggleOverlay}
              >
                {isOverlayActive ? <EyeOff size={16} /> : <Eye size={16} />}
                <span>{isOverlayActive ? 'Отключить радар' : 'Включить подсветку всех отступов'}</span>
              </button>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
              При активации каждый отступ на странице подсвечивается цветной маркерной сеткой со значением в пикселях.
            </p>

            {/* Simulated Component with Spacing Markers */}
            <div className="box-model-demo">
              <div className="margin-indicator">
                <span>MARGIN: 24px (var(--spacing-6))</span>
                <div className="padding-indicator">
                  <span>PADDING: 20px (var(--spacing-5))</span>
                  <div className="content-indicator">
                    <strong>Внутренний контент компонента</strong>
                    <p>GAP: 12px между дочерними элементами</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="status-note">
              <CheckCircle2 size={15} color="#00ff88" />
              <span>Stylelint AST Enforcer: 0 нарушений геометрии в кодовой базе</span>
            </div>
          </div>

          {/* Token Scale Matrix */}
          <div className="spacing-card">
            <div className="spacing-card__head">
              <h3>📐 Шкала дизайн-токенов (Design Tokens)</h3>
              <span className="badge-pill">8px Modular</span>
            </div>

            <div className="tokens-table-wrap">
              <table className="tokens-table">
                <thead>
                  <tr>
                    <th>CSS Токен</th>
                    <th>Значение</th>
                    <th>Назначение</th>
                  </tr>
                </thead>
                <tbody>
                  {TOKENS_SCALE.map((token, i) => (
                    <tr 
                      key={i} 
                      className={selectedToken.includes(token.val) ? 'selected-row' : ''}
                      onClick={() => setSelectedToken(`${token.val} (${token.name})`)}
                    >
                      <td><code>{token.name}</code></td>
                      <td><strong>{token.val}</strong></td>
                      <td>{token.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="btn-studio-secondary" onClick={onDownload} style={{ width: '100%', marginTop: '16px' }}>
              <Download size={15} />
              <span>Скачать токены и Stylelint плагин (ZIP)</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .spacing-grid-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 24px;
        }
        @media (max-width: 900px) {
          .spacing-grid-layout { grid-template-columns: 1fr; }
        }
        .spacing-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .spacing-card__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
          flex-wrap: wrap;
          gap: 10px;
        }
        .box-model-demo {
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          padding: 20px;
          margin-bottom: 16px;
        }
        .margin-indicator {
          background: rgba(255, 100, 0, 0.15);
          border: 1px dashed rgba(255, 100, 0, 0.6);
          padding: 18px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #ffaa55;
          text-align: center;
        }
        .padding-indicator {
          background: rgba(0, 200, 100, 0.15);
          border: 1px dashed rgba(0, 200, 100, 0.6);
          padding: 16px;
          margin-top: 8px;
          color: #00ff88;
        }
        .content-indicator {
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 14px;
          margin-top: 8px;
          color: var(--text-primary);
        }
        .status-note {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .tokens-table-wrap {
          max-height: 280px;
          overflow-y: auto;
        }
        .tokens-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8rem;
          font-family: var(--font-mono);
        }
        .tokens-table th, .tokens-table td {
          padding: 8px 10px;
          text-align: left;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .tokens-table th {
          color: var(--text-secondary);
          font-size: 0.72rem;
          text-transform: uppercase;
        }
        .tokens-table tr {
          cursor: pointer;
        }
        .tokens-table tr:hover, .selected-row {
          background: rgba(255,255,255,0.05);
        }
        .selected-row td {
          color: var(--accent);
        }
      `}</style>
    </section>
  );
};
