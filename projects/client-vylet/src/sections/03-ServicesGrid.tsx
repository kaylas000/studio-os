import { SERVICES } from '../content/copy';
import { scrollToId } from '../engine/useMotion';

const rub = (value: number) => `${value.toLocaleString('ru-RU')} ₽`;

export function ServicesGrid() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="wrap grid9">
        <header className="section-head">
          <p className="kicker">Работы · 6 направлений</p>
          <h2 id="services-title" data-reveal>
            Техника с работой, а не «просто подали машину»
          </h2>
          <p className="lede" data-reveal>
            Каждый пункт — с ценой за смену и списком того, что в неё не входит. Так смету не придётся пересобирать на
            объекте.
          </p>
        </header>
        <p className="section-index mono">цена = смена 11 ч, экипаж и ГСМ внутри</p>

        <div style={{ gridColumn: '1 / -1' }} className="services" data-reveal>
          {SERVICES.map((service) => (
            <article className="service" key={service.id} id={`service-${service.id}`}>
              <p className="service__problem">{service.problem}</p>
              <h3 className="h3">{service.title}</h3>
              <p style={{ color: 'var(--studio-text-muted)' }}>{service.body}</p>
              <p className="service__price">
                <span>от</span>
                <b>{rub(service.from)}</b>
                <span>/ {service.unit}</span>
              </p>
              <button type="button" className="btn btn--outline" onClick={() => scrollToId(`service-${service.id}`)}>
                Уточнить по грунту и высотам
              </button>
              <p className="service__excluded">{service.excluded}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
