// showcase-site/src/sections/03-AntiSlopScannerSection.tsx
import React, { useState } from 'react';
import { ShieldAlert, Sparkles, AlertTriangle, CheckCircle2, RefreshCw, Download, Sliders } from 'lucide-react';
import { ClicheDetector } from '@library/02-anti-slop/ClicheDetector';
import { GradientSlopDetector } from '@library/02-anti-slop/GradientSlopDetector';
import { ConstraintInjector, CreativeConstraint } from '@library/02-anti-slop/ConstraintInjector';
import { soundEngine } from '../audio/WebAudioEngine';

export const AntiSlopScannerSection: React.FC<{ onDownload: () => void }> = ({ onDownload }) => {
  const [inputText, setInputText] = useState(
    'В современном цифровом мире мы предлагаем уникальный опыт взаимодействия и инновационные решения для вашего бизнеса.'
  );

  const clicheDetector = new ClicheDetector();
  const analysis = clicheDetector.analyze(inputText);

  const gradientDetector = new GradientSlopDetector();
  const [color1, setColor1] = useState('#667eea');
  const [color2, setColor2] = useState('#764ba2');
  const gradientCheck = gradientDetector.checkGradient(color1, color2);

  const constraintGen = new ConstraintInjector();
  const [constraints, setConstraints] = useState<CreativeConstraint[]>(constraintGen.generate('studio-demo', 3));

  const handleRegenerateConstraints = () => {
    soundEngine.playClick(500);
    setConstraints(constraintGen.generate(`seed-${Date.now()}`, 3));
  };

  return (
    <section className="section-block" id="anti-slop">
      <div className="container">
        <div className="section-tagline">
          <ShieldAlert size={14} />
          <span>Система 02: Анти-слоп система (Защита от AI-шаблонности)</span>
        </div>

        <h2 className="section-title">АЛГОРИТМИЧЕСКИЙ ФИЛЬТР ШАБЛОННОСТИ</h2>
        <p className="section-desc">
          Словари клише, Delta-E детекторы заезженных градиентов, хэширование DOM-структур 
          и генератор принудительных ограничений не пропускают усредненный AI-слоп на этапе коммита.
        </p>

        <div className="slop-scanner-layout-grid">
          {/* Live Copy Cliche Scanner */}
          <div className="slop-card">
            <div className="slop-card-head">
              <div>
                <h3>✍️ Сканер клише в копирайтинге</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>Проверка текста по словарю 50+ критичных AI-маркеров</p>
              </div>
              <div className={`score-badge ${analysis.score >= 75 ? 'good' : 'bad'}`}>
                {analysis.score}/100 Score
              </div>
            </div>

            <textarea 
              className="slop-textarea"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              rows={4}
              placeholder="Введите текст для проверки..."
            />

            <div className="analysis-summary-box">
              <div className="verdict-line">
                <span>Вердикт:</span>
                <strong>{analysis.verdict}</strong>
              </div>

              {analysis.issues.length > 0 ? (
                <div className="issues-chips-wrap">
                  {analysis.issues.map((issue, idx) => (
                    <span key={idx} className="issue-chip">
                      <AlertTriangle size={12} />
                      {issue.phrase} (-{issue.penalty} pts)
                    </span>
                  ))}
                </div>
              ) : (
                <div className="clean-status">
                  <CheckCircle2 size={15} color="#00ff88" />
                  <span>Текст чист от клише и шаблонных конструкций</span>
                </div>
              )}
            </div>

            <div className="sample-buttons-row">
              <span>Примеры:</span>
              <button 
                className="btn-sample"
                onClick={() => {
                  soundEngine.playClick(350);
                  setInputText('В современном цифровом мире мы предлагаем уникальный опыт взаимодействия и инновационные решения.');
                }}
              >
                Типичный AI-Slop
              </button>
              <button 
                className="btn-sample"
                onClick={() => {
                  soundEngine.playClick(500);
                  setInputText('За 14 рабочих дней сократили время холодного старта API с 1200мс до 68мс с финансовой гарантией по договору.');
                }}
              >
                Fact-First Текст
              </button>
            </div>
          </div>

          {/* Gradient Slop & Constraint Injector */}
          <div className="slop-card">
            <div className="slop-card-head">
              <div>
                <h3>🎨 Delta-E Детектор градиентов</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>Поиск совпадений с заезженными AI-палитрами</p>
              </div>
              <div className={`score-badge ${!gradientCheck.isSlop ? 'good' : 'bad'}`}>
                {gradientCheck.isSlop ? 'AI SLOP' : 'ORIGINAL'}
              </div>
            </div>

            <div 
              className="gradient-preview-display"
              style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}
            >
              <span>{color1} → {color2}</span>
            </div>

            <div className="color-pickers-row">
              <label>
                <span>Color 1:</span>
                <input type="color" value={color1} onChange={e => setColor1(e.target.value)} />
                <code>{color1}</code>
              </label>
              <label>
                <span>Color 2:</span>
                <input type="color" value={color2} onChange={e => setColor2(e.target.value)} />
                <code>{color2}</code>
              </label>
            </div>

            {/* Constraint Injector Widget */}
            <div className="constraint-box">
              <div className="constraint-head">
                <span>🎯 Принудительные креативные ограничения (Constraint Injector):</span>
                <button onClick={handleRegenerateConstraints} title="Сгенерировать новые ограничения">
                  <RefreshCw size={13} />
                </button>
              </div>
              <ul className="constraint-list">
                {constraints.map((c, i) => (
                  <li key={i}>
                    <strong>[{c.category.toUpperCase()}]:</strong> {c.rule}
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn-studio-secondary" onClick={onDownload} style={{ width: '100%', marginTop: '16px' }}>
              <Download size={15} />
              <span>Скачать Anti-Slop систему (ZIP)</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .slop-scanner-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .slop-scanner-layout-grid { grid-template-columns: 1fr; }
        }
        .slop-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(18px, 3vw, 28px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
        }
        .slop-card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }
        .score-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: bold;
          padding: 4px 10px;
          border-radius: 4px;
          white-space: nowrap;
        }
        .score-badge.good { background: rgba(0, 255, 136, 0.15); color: #00ff88; border: 1px solid rgba(0, 255, 136, 0.4); }
        .score-badge.bad { background: rgba(255, 60, 60, 0.15); color: #ff5555; border: 1px solid rgba(255, 60, 60, 0.4); }
        
        .slop-textarea {
          width: 100%;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          padding: 14px;
          font-family: inherit;
          font-size: 0.92rem;
          line-height: 1.5;
          resize: vertical;
          outline: none;
        }
        .slop-textarea:focus { border-color: var(--accent); }
        
        .analysis-summary-box {
          background: var(--bg-primary);
          padding: 14px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .verdict-line {
          font-size: 0.85rem;
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }
        .verdict-line strong { color: var(--accent); }
        
        .issues-chips-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .issue-chip {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(255, 60, 60, 0.1);
          color: #ff6666;
          border: 1px solid rgba(255, 60, 60, 0.25);
          border-radius: 4px;
          padding: 3px 8px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }
        .clean-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: #00ff88;
        }
        .sample-buttons-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          flex-wrap: wrap;
        }
        .btn-sample {
          padding: 5px 10px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-primary);
          border-radius: 4px;
          font-size: 0.75rem;
          cursor: pointer;
        }
        .btn-sample:hover { border-color: var(--accent); }
        
        .gradient-preview-display {
          height: 100px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: bold;
          color: #fff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8);
        }
        .color-pickers-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .color-pickers-row label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
        }
        .color-pickers-row input[type="color"] {
          width: 32px;
          height: 32px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          background: none;
        }
        .constraint-box {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px 14px;
        }
        .constraint-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }
        .constraint-head button {
          color: var(--accent);
          cursor: pointer;
        }
        .constraint-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .constraint-list li {
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .constraint-list strong {
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }
      `}</style>
    </section>
  );
};
