// showcase-site/src/sections/03-AntiSlopScannerSection.tsx
import React, { useState } from 'react';
import { ShieldAlert, Sparkles, CheckCircle2, AlertTriangle, Download } from 'lucide-react';
import { ClicheDetector } from '@library/02-anti-slop/ClicheDetector';
import { GradientSlopDetector } from '@library/02-anti-slop/GradientSlopDetector';

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

  return (
    <section className="section-block" id="anti-slop">
      <div className="container">
        <div className="section-tagline">
          <ShieldAlert size={14} />
          <span>Система 02: Анти-слоп защита от шаблонности</span>
        </div>

        <h2 className="section-title">ЗАЩИТА ОТ AI-ШАБЛОННОСТИ И ШТАМПОВ</h2>
        <p className="section-desc">
          Автоматические фильтры ловят узнаваемый "усреднённый AI-слоп": заезженные фразы, фиолетово-синие градиенты 
          и типовые шаблоны hero-блоков на этапе коммита.
        </p>

        <div className="slop-scanner-grid">
          {/* Live Copy Cliche Scanner */}
          <div className="slop-card">
            <div className="slop-card__head">
              <h3>✍️ Живой сканер AI-клише в копирайтинге</h3>
              <div className={`score-badge ${analysis.score >= 75 ? 'good' : 'bad'}`}>
                {analysis.score}/100 Score
              </div>
            </div>

            <textarea 
              className="slop-textarea"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder="Введите текст для проверки на AI-клише..."
              rows={4}
            />

            <div className="analysis-summary">
              <div className="verdict-line">
                <strong>Вердикт:</strong> <span>{analysis.verdict}</span>
              </div>

              {analysis.issues.length > 0 ? (
                <div className="issues-tags">
                  {analysis.issues.map((issue, idx) => (
                    <span key={idx} className="issue-chip">
                      <AlertTriangle size={12} />
                      {issue.phrase} (-{issue.penalty} pts)
                    </span>
                  ))}
                </div>
              ) : (
                <div className="clean-badge">
                  <CheckCircle2 size={14} color="#00ff88" />
                  <span>Текст чист от клише и шаблонных фраз</span>
                </div>
              )}
            </div>

            <div className="preset-buttons">
              <span>Быстрый тест:</span>
              <button 
                onClick={() => setInputText('В современном цифровом мире мы предлагаем уникальный опыт и инновации.')}
                className="btn-quick-sample"
              >
                AI-Slop Пример
              </button>
              <button 
                onClick={() => setInputText('За 14 дней сокращаем время холодного старта API с 1200мс до 180мс с гарантией по договору.')}
                className="btn-quick-sample"
              >
                Fact-First Пример
              </button>
            </div>
          </div>

          {/* Live Gradient Slop Scanner */}
          <div className="slop-card">
            <div className="slop-card__head">
              <h3>🎨 Детектор клишированных градиентов</h3>
              <div className={`score-badge ${!gradientCheck.isSlop ? 'good' : 'bad'}`}>
                {gradientCheck.isSlop ? 'AI SLOP' : 'ORIGINAL'}
              </div>
            </div>

            <div 
              className="gradient-preview-box"
              style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}
            >
              <span>{color1} → {color2}</span>
            </div>

            <div className="color-inputs-row">
              <div>
                <label>Цвет 1:</label>
                <input type="color" value={color1} onChange={e => setColor1(e.target.value)} />
                <span>{color1}</span>
              </div>
              <div>
                <label>Цвет 2:</label>
                <input type="color" value={color2} onChange={e => setColor2(e.target.value)} />
                <span>{color2}</span>
              </div>
            </div>

            <div className="gradient-verdict">
              <p>{gradientCheck.recommendation}</p>
              {gradientCheck.matchedName && (
                <small style={{ color: '#ff4444' }}>Совпадение: {gradientCheck.matchedName}</small>
              )}
            </div>

            <button className="btn-studio-secondary" onClick={onDownload} style={{ width: '100%', marginTop: '16px' }}>
              <Download size={15} />
              <span>Скачать модуль Anti-Slop (ZIP)</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .slop-scanner-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 900px) {
          .slop-scanner-grid { grid-template-columns: 1fr; }
        }
        .slop-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .slop-card__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .score-badge {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: bold;
          padding: 4px 10px;
          border-radius: 4px;
        }
        .score-badge.good { background: rgba(0,255,136,0.15); color: #00ff88; border: 1px solid rgba(0,255,136,0.4); }
        .score-badge.bad { background: rgba(255,50,50,0.15); color: #ff5555; border: 1px solid rgba(255,50,50,0.4); }
        
        .slop-textarea {
          width: 100%;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          padding: 12px;
          font-family: inherit;
          font-size: 0.9rem;
          resize: vertical;
          outline: none;
          margin-bottom: 14px;
        }
        .slop-textarea:focus { border-color: var(--accent); }
        
        .analysis-summary {
          background: var(--bg-primary);
          padding: 12px;
          border-radius: var(--radius-sm);
          margin-bottom: 14px;
        }
        .verdict-line {
          font-size: 0.85rem;
          margin-bottom: 8px;
        }
        .issues-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .issue-chip {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(255,50,50,0.1);
          color: #ff6666;
          border: 1px solid rgba(255,50,50,0.25);
          border-radius: 4px;
          padding: 2px 8px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }
        .clean-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: #00ff88;
        }
        .preset-buttons {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--text-secondary);
        }
        .btn-quick-sample {
          padding: 4px 8px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-primary);
          border-radius: 4px;
          font-size: 0.75rem;
          cursor: pointer;
        }
        .btn-quick-sample:hover { border-color: var(--accent); }
        
        .gradient-preview-box {
          height: 120px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: bold;
          color: #fff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8);
          margin-bottom: 14px;
        }
        .color-inputs-row {
          display: flex;
          gap: 20px;
          margin-bottom: 14px;
        }
        .color-inputs-row div {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }
        .color-inputs-row input[type="color"] {
          width: 32px;
          height: 32px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .gradient-verdict {
          font-size: 0.82rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
};
