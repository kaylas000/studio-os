// showcase-site/src/sections/08-TextEngineeringSection.tsx
import React, { useState } from 'react';
import { Type, Sparkles, CheckCircle2, TrendingUp, Download } from 'lucide-react';
import { FactDensityScorer } from '@library/08-copywriting/FactDensityScorer';
import { ReadabilityAnalyzer } from '@library/08-copywriting/ReadabilityAnalyzer';

export const TextEngineeringSection: React.FC<{ onDownload: () => void }> = ({ onDownload }) => {
  const [copyText, setCopyText] = useState(
    'За 14 рабочих дней перевели 85 микросервисов клиента на Kubernetes. Среднее время ответа сократилось с 420мс до 68мс, а расходы на сервера упали на 34% (экономия 450,000 ₽/мес).'
  );

  const factReport = FactDensityScorer.calculate(copyText);
  const readReport = ReadabilityAnalyzer.analyze(copyText);

  return (
    <section className="section-block" id="copywriting">
      <div className="container">
        <div className="section-tagline">
          <Type size={14} />
          <span>Система 08: Инженерный копирайтинг (Fact-First)</span>
        </div>

        <h2 className="section-title">ТЕКСТ КАК ИНЖЕНЕРНЫЙ КАРКАС КОНВЕРСИИ</h2>
        <p className="section-desc">
          Отказ от водянистых текстов в пользу точных метрик, артефактов и сроков. 
          Алгоритмический контроль плотности фактов (минимум 1 цифра на 25 слов) и естественного веб-ритма.
        </p>

        <div className="copy-showcase-grid">
          {/* Live Copy Analyzer Box */}
          <div className="copy-editor-card">
            <div className="copy-editor-head">
              <h3>✍️ Живой анализатор фактуры и читаемости текста</h3>
              <span className="badge-pill">NLP Score Engine</span>
            </div>

            <textarea
              className="copy-textarea"
              value={copyText}
              onChange={e => setCopyText(e.target.value)}
              rows={4}
            />

            {/* Metrics HUD */}
            <div className="copy-metrics-bar">
              <div className="metric-box">
                <span className="m-val">{factReport.score}/100</span>
                <span className="m-lbl">Плотность фактов</span>
              </div>
              <div className="metric-box">
                <span className="m-val">{factReport.factsCount}</span>
                <span className="m-lbl">Фактов найдено</span>
              </div>
              <div className="metric-box">
                <span className="m-val">{readReport.score}/100</span>
                <span className="m-lbl">Читаемость Flesch</span>
              </div>
              <div className="metric-box">
                <span className="m-val">{readReport.avgWordsPerSentence}</span>
                <span className="m-lbl">Слов в предложении</span>
              </div>
            </div>

            {/* Facts Extracted Chips */}
            {factReport.factsFound.length > 0 && (
              <div className="extracted-facts-wrap">
                <span className="ef-title">Твёрдые доказательства (Facts):</span>
                <div className="ef-chips">
                  {factReport.factsFound.map((f, i) => (
                    <span key={i} className="fact-chip">✓ {f}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tone of Voice Matrix & Zod Contracts Card */}
          <div className="tov-card">
            <h3>🎭 Калибровка Tone of Voice (ToV)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '14px' }}>
              Текст автоматически синхронизируется с выбранным визуальным архетипом.
            </p>

            <div className="tov-rules-box">
              <div className="tov-item">
                <strong>Luxury Noir ToV:</strong>
                <span>Сдержанный, лаконичный, без восклицательных знаков и капса</span>
              </div>
              <div className="tov-item">
                <strong>Neo-Brutalism ToV:</strong>
                <span>Прямой, честный, разговорный, с четкими глаголами</span>
              </div>
              <div className="tov-item">
                <strong>Cyber-Tech ToV:</strong>
                <span>Инженерный, с таймингами, протоколами и версиями</span>
              </div>
            </div>

            <button className="btn-studio-secondary" onClick={onDownload} style={{ width: '100%', marginTop: '16px' }}>
              <Download size={15} />
              <span>Скачать модуль копирайтинга (ZIP)</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .copy-showcase-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .copy-showcase-grid { grid-template-columns: 1fr; }
        }
        .copy-editor-card, .tov-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
        }
        .copy-editor-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .copy-textarea {
          width: 100%;
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          padding: 14px;
          font-family: inherit;
          font-size: 0.95rem;
          line-height: 1.6;
          resize: vertical;
          outline: none;
          margin-bottom: 16px;
        }
        .copy-textarea:focus { border-color: var(--accent); }
        .copy-metrics-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          background: var(--bg-primary);
          padding: 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          margin-bottom: 14px;
        }
        .metric-box { text-align: center; }
        .metric-box .m-val { display: block; font-family: var(--font-mono); font-size: 1.25rem; font-weight: bold; color: var(--accent); }
        .metric-box .m-lbl { font-size: 0.68rem; color: var(--text-secondary); }
        .extracted-facts-wrap {
          background: var(--bg-primary);
          padding: 12px;
          border-radius: var(--radius-sm);
        }
        .ef-title { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-secondary); display: block; margin-bottom: 6px; }
        .ef-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .fact-chip {
          display: inline-flex;
          align-items: center;
          background: rgba(0, 255, 136, 0.1);
          color: #00ff88;
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 4px;
          padding: 2px 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }
        .tov-rules-box {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .tov-item {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          padding: 12px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
        }
        .tov-item strong { display: block; font-family: var(--font-mono); color: var(--accent); margin-bottom: 2px; }
        .tov-item span { color: var(--text-secondary); font-size: 0.78rem; }
      `}</style>
    </section>
  );
};
