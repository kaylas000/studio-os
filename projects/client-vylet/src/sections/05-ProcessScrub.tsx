import { PROCESS } from '../content/copy';
import { useActiveIndex } from '../engine/useActiveIndex';

export function ProcessScrub() {
  const ids = PROCESS.steps.map((_, i) => `step-${i + 1}`);
  const active = useActiveIndex(ids);

  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="wrap grid9">
        <header className="section-head">
          <p className="kicker">{PROCESS.index} · регламент</p>
          <h2 id="process-title" data-reveal>
            {PROCESS.h2}
          </h2>
        </header>
        <p className="section-index mono">
          шаг {String(active + 1).padStart(2, '0')} / {PROCESS.steps.length}
        </p>

        <div className="process" style={{ gridColumn: '1 / -1', marginTop: 'var(--space-48)' }}>
          <nav className="process__nav" aria-label="Этапы заказа">
            {PROCESS.steps.map((step, i) => (
              <a key={step.n} href={`#${ids[i]}`} data-active={i === active}>
                <span className="mono">{step.n}</span>
                <span>{step.title}</span>
              </a>
            ))}
          </nav>

          <div>
            {PROCESS.steps.map((step, i) => (
              <article className="step" id={ids[i]} key={step.n} data-reveal>
                <span className="step__n">{step.n}</span>
                <div className="step__body">
                  <h3 className="h3">{step.title}</h3>
                  <p style={{ color: 'var(--studio-text-muted)' }}>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
