import { DOCS } from '../content/copy';

export function DocsVault() {
  return (
    <section className="section" id="docs" aria-labelledby="docs-title">
      <div className="wrap grid9">
        <header className="section-head">
          <p className="kicker">{DOCS.index} · допуски</p>
          <h2 id="docs-title" data-reveal>
            {DOCS.h2}
          </h2>
        </header>
        <p className="section-index mono">пакет уходит письмом до выезда техники</p>

        <div className="docs" style={{ gridColumn: '1 / -1', marginTop: 'var(--space-48)' }} data-reveal>
          {DOCS.items.map((doc, i) => (
            <article className="doc" key={doc.title}>
              <span className="mono" style={{ color: 'var(--studio-telemetry)', fontSize: 'var(--fs-xs)' }}>
                {String(i + 1).padStart(2, '0')} / {String(DOCS.items.length).padStart(2, '0')}
              </span>
              <h3>{doc.title}</h3>
              <p style={{ color: 'var(--studio-text-muted)' }}>{doc.body}</p>
            </article>
          ))}
        </div>

        <p className="photo__hint" style={{ gridColumn: '1 / -1' }} data-reveal>
          {DOCS.note}
        </p>

        <div style={{ gridColumn: '1 / -1' }} data-reveal>
          <p className="warn">
            <span aria-hidden="true" className="mono" style={{ color: 'var(--studio-alert)' }}>
              !
            </span>
            <span>{DOCS.warning}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
