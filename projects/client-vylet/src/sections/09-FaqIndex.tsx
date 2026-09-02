import { FAQ } from '../content/copy';

export function FaqIndex() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="wrap grid9">
        <header className="section-head">
          <p className="kicker">{FAQ.index} · вопросы на объект</p>
          <h2 id="faq-title" data-reveal>
            {FAQ.h2}
          </h2>
        </header>
        <p className="section-index mono">{FAQ.items.length} ответов, продублированы в JSON-LD</p>

        <div className="faq" style={{ gridColumn: '1 / -1', marginTop: 'var(--space-32)' }} data-reveal>
          {FAQ.items.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>
                <span>{item.q}</span>
              </summary>
              <p className="faq__answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
