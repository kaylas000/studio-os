import { CASES } from '../content/copy';
import { PhotoSlot } from '../components/PhotoSlot';

export function ObjectCases() {
  return (
    <section className="section" id="cases" aria-labelledby="cases-title">
      <div className="wrap grid9">
        <header className="section-head">
          <p className="kicker">{CASES.index} · объекты</p>
          <h2 id="cases-title" data-reveal>
            {CASES.h2}
          </h2>
        </header>
        <p className="section-index mono">фото площадки — в src/assets/photos/</p>

        <div className="cases" style={{ gridColumn: '1 / -1', marginTop: 'var(--space-48)' }}>
          {CASES.items.map((item) => (
            <article className="case" key={item.title} data-reveal>
              <div className="case__media">
                <PhotoSlot name={item.photo} alt={`${item.title}: ${item.unit} в работе`} caption={item.photo} ratio={item.photoRatio ?? '3/2'} />
              </div>
              <div className="stack-16">
                <p className="kicker">{item.unit}</p>
                <h3 className="h2">{item.title}</h3>
                <p style={{ color: 'var(--studio-text-muted)' }}>{item.body}</p>
                <div className="case__meta">
                  {item.metrics.map((metric) => (
                    <div className="case__metric" key={metric.label}>
                      <b>{metric.value}</b>
                      <span className="mono" style={{ fontSize: 'var(--fs-xs)', color: 'var(--studio-text-muted)' }}>
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
