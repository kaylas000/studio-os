// showcase-site/src/sections/07-SEOCrawlerSection.tsx
import React, { useState } from 'react';
import { Search, Code2, CheckCircle2, Download } from 'lucide-react';
import { soundEngine } from '../audio/WebAudioEngine';

export const SEOCrawlerSection: React.FC<{ onDownload: () => void }> = ({ onDownload }) => {
  const [activeTab, setActiveTab] = useState<'jsonld' | 'meta' | 'rules'>('jsonld');

  const sampleJSONLD = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        'name': 'STUDIO OS Production',
        'url': 'https://studio-os.com',
        'logo': 'https://studio-os.com/logo.png',
        'sameAs': ['https://t.me/studio_os', 'https://github.com/studio-os']
      },
      {
        '@type': 'WebSite',
        'name': 'STUDIO OS Portal',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://studio-os.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://studio-os.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Библиотека систем', 'item': 'https://studio-os.com#systems' }
        ]
      }
    ]
  };

  return (
    <section className="section" id="seo">
      <div className="container">
        <div className="section-tagline">
          <Search size={14} />
          <span>Система 06: Сквозная SEO-инъекция (SEO-by-Design)</span>
        </div>

        <h2 className="section-title">SEO НЕ ПОСЛЕ СДАЧИ, А В КАЖДОМ КОММИТЕ</h2>
        <p className="section-desc">
          Zod-схемы метаданных, автоматическая генерация графа Schema.org JSON-LD, AST-инъекция `alt` и `loading="lazy"` 
          при компиляции и headless-краулер Playwright, проверяющий статус-коды и каноникалы в CI/CD.
        </p>

        <div className="seo-showcase-grid">
          <div className="seo-inspector-card">
            <div className="seo-tabs-bar">
              <button 
                className={`seo-tab-btn ${activeTab === 'jsonld' ? 'active' : ''}`}
                onClick={() => { soundEngine.playClick(450); setActiveTab('jsonld'); }}
              >
                <Code2 size={14} />
                <span>JSON-LD Schema Graph</span>
              </button>
              <button 
                className={`seo-tab-btn ${activeTab === 'meta' ? 'active' : ''}`}
                onClick={() => { soundEngine.playClick(480); setActiveTab('meta'); }}
              >
                <span>Google Snippet & Meta</span>
              </button>
              <button 
                className={`seo-tab-btn ${activeTab === 'rules' ? 'active' : ''}`}
                onClick={() => { soundEngine.playClick(510); setActiveTab('rules'); }}
              >
                <span>ESLint AST Rules</span>
              </button>
            </div>

            <div className="tab-render-box">
              {activeTab === 'jsonld' && (
                <pre className="code-block-seo">
                  {JSON.stringify(sampleJSONLD, null, 2)}
                </pre>
              )}

              {activeTab === 'meta' && (
                <div className="meta-preview-card">
                  <div className="google-serp-card">
                    <span className="g-url">https://studio-os.com › systems</span>
                    <h4 className="g-title">STUDIO OS — Мета-система и Живой Портал Веб-Студии</h4>
                    <p className="g-desc">
                      Единая производственная операционная система веб-студии: 9 монолитных стандартов, живая библиотека модулей и голливудские заставки.
                    </p>
                  </div>

                  <div className="meta-stats-chips">
                    <span>Title: <strong>58 симв. (Оптимально 30-65)</strong></span>
                    <span>Description: <strong>146 симв. (Оптимально 70-160)</strong></span>
                    <span>H1 Count: <strong>Ровно 1 тег</strong></span>
                  </div>
                </div>
              )}

              {activeTab === 'rules' && (
                <div className="rules-checklist">
                  <div className="rule-card">
                    <CheckCircle2 size={15} color="#00ff88" />
                    <div>
                      <strong>enforce-heading-hierarchy.js</strong>
                      <p>Запрещает больше одного `h1` и пропуски уровней (`h1` → `h3` запрещено)</p>
                    </div>
                  </div>
                  <div className="rule-card">
                    <CheckCircle2 size={15} color="#00ff88" />
                    <div>
                      <strong>require-image-seo-attrs.js</strong>
                      <p>AST-плагин компилятора сам вычисляет `width/height` картинок для CLS=0</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="seo-summary-card">
            <h3>🤖 Автоматизация поискового краулинга</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
              Встроенный Playwright SEOCrawler сканирует каждую страницу перед мержем в main.
            </p>

            <div className="crawler-kpi-grid">
              <div className="kpi-box">
                <span className="kpi-num">100%</span>
                <span className="kpi-lbl">Rich Snippets</span>
              </div>
              <div className="kpi-box">
                <span className="kpi-num">0.00</span>
                <span className="kpi-lbl">CLS Shift</span>
              </div>
              <div className="kpi-box">
                <span className="kpi-num">0</span>
                <span className="kpi-lbl">Broken Links</span>
              </div>
            </div>

            <button className="btn-studio-secondary" onClick={onDownload} style={{ width: '100%', marginTop: '20px' }}>
              <Download size={15} />
              <span>Скачать SEO-модуль и Zod-контракты (ZIP)</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .seo-showcase-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 24px;
        }
        @media (max-width: 960px) {
          .seo-showcase-grid { grid-template-columns: 1fr; }
        }
        .seo-inspector-card, .seo-summary-card {
          background: var(--bg-surface);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(18px, 3vw, 28px);
        }
        .seo-tabs-bar {
          display: flex;
          gap: 8px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 12px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .seo-tab-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          cursor: pointer;
        }
        .seo-tab-btn.active {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--bg-card);
        }
        .code-block-seo {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 14px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #00ff88;
          max-height: 260px;
          overflow-y: auto;
        }
        .meta-preview-card {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 16px;
        }
        .google-serp-card {
          background: #ffffff;
          color: #202124;
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 14px;
          font-family: Arial, sans-serif;
        }
        .g-url { font-size: 0.75rem; color: #202124; display: block; margin-bottom: 4px; }
        .g-title { font-size: 1.05rem; color: #1a0dab; margin-bottom: 4px; font-weight: normal; }
        .g-desc { font-size: 0.82rem; color: #4d5156; line-height: 1.4; }
        .meta-stats-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
        .rules-checklist {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .rule-card {
          display: flex;
          gap: 10px;
          background: var(--bg-primary);
          padding: 12px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
        }
        .rule-card p { font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px; }
        .crawler-kpi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          background: var(--bg-primary);
          padding: 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
        }
        .kpi-box { text-align: center; }
        .kpi-num { display: block; font-family: var(--font-mono); font-size: 1.35rem; font-weight: bold; color: var(--accent); }
        .kpi-lbl { font-size: 0.68rem; color: var(--text-secondary); }
      `}</style>
    </section>
  );
};
