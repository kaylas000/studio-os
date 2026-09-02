import { useState } from 'react';
import { ORDER } from '../content/copy';
import { CATEGORIES, FLEET } from '../content/catalog';

interface Form {
  object: string;
  phone: string;
  date: string;
  unit: string;
  reach: string;
  comment: string;
}

const EMPTY: Form = { object: '', phone: '', date: '', unit: FLEET[1].id, reach: '', comment: '' };

export function OrderForm() {
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [payload, setPayload] = useState<string | null>(null);

  const set = (key: keyof Form) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: Partial<Record<keyof Form, string>> = {};
    if (form.object.trim().length < 5) next.object = 'Нужен адрес или ориентир площадки';
    if (!/^[+8]?[\s(-]*\d{3}[\s)-]*\d{3}[-\s]?\d{2}[-\s]?\d{2}$/.test(form.phone.trim())) next.phone = 'Телефон в формате +7 498 000-11-24';
    if (!form.date) next.date = 'Укажите дату начала работ';
    if (form.reach && !/^\d{1,3}([.,]\d{1,2})?([-\s]*\d{1,3}([.,]\d{1,2})?)?$/.test(form.reach.trim())) next.reach = 'Высота или вылет: число, например 22 или 14-18';
    setErrors(next);
    if (Object.keys(next).length) return;

    const unit = FLEET.find((u) => u.id === form.unit);
    const summary = [
      `Объект: ${form.object}`,
      `Телефон: ${form.phone}`,
      `Начало: ${form.date}`,
      `Техника: ${unit?.model ?? form.unit}`,
      form.reach ? `Высота / вылет: ${form.reach} м` : '',
      form.comment ? `Ограничения: ${form.comment}` : '',
      `Предварительно: ${unit ? unit.shift.toLocaleString('ru-RU') : '—'} ₽ за смену`
    ]
      .filter(Boolean)
      .join('\n');
    setPayload(summary);
  };

  const mailto = payload
    ? `mailto:dispatch@vylet.example?subject=${encodeURIComponent('Заявка на смену — ВЫЛЕТ')}&body=${encodeURIComponent(payload)}`
    : '#';

  return (
    <section className="section" id="order" aria-labelledby="order-title">
      <div className="wrap grid9">
        <header className="section-head">
          <p className="kicker">{ORDER.index} · заявка</p>
          <h2 id="order-title" data-reveal>
            {ORDER.h2}
          </h2>
          <p className="lede" data-reveal>{ORDER.lede}</p>
          <p className="mono" style={{ color: 'var(--studio-text-muted)', fontSize: 'var(--fs-xs)' }}>
            {ORDER.consent}
          </p>
        </header>
        <p className="section-index mono">Круглосуточно, без выходных · +7 498 000-11-24</p>

        <div style={{ gridColumn: '1 / -1' }}>
          {payload ? (
            <div className="sent" data-reveal>
              <p className="kicker">Заявка собрана</p>
              <pre className="mono" style={{ whiteSpace: 'pre-wrap', fontSize: 'var(--fs-sm)', margin: 0 }}>
                {payload}
              </pre>
              <div className="row-12">
                <a className="btn" href={mailto}>
                  Отправить письмом диспетчеру
                </a>
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => navigator.clipboard?.writeText(payload)}
                >
                  Скопировать в буфер
                </button>
                <button type="button" className="btn btn--outline" onClick={() => setPayload(null)}>
                  Изменить
                </button>
              </div>
              <p className="photo__hint">
                Форма собирает письмо на стороне браузера. Бэкенд подключается одним fetch в submit — контракт
                payload уже стабилен.
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={submit} noValidate>
              <label className="field field--full">
                <span className="field__label">{ORDER.fields.object}</span>
                <input type="text" value={form.object} onChange={set('object')} placeholder="МО, Одинцово, Можайское ш., 42" />
                {errors.object ? <span className="error">{errors.object}</span> : null}
              </label>

              <label className="field">
                <span className="field__label">{ORDER.fields.phone}</span>
                <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+7 ___ ___-__-__" inputMode="tel" autoComplete="tel" />
                {errors.phone ? <span className="error">{errors.phone}</span> : null}
              </label>

              <label className="field">
                <span className="field__label">{ORDER.fields.date}</span>
                <input type="date" value={form.date} onChange={set('date')} />
                {errors.date ? <span className="error">{errors.date}</span> : null}
              </label>

              <label className="field">
                <span className="field__label">{ORDER.fields.category}</span>
                <select value={form.unit} onChange={set('unit')}>
                  {CATEGORIES.map((cat) => (
                    <optgroup key={cat.id} label={cat.name}>
                      {FLEET.filter((u) => u.category === cat.id).map((u) => (
                        <option key={u.id} value={u.id}>
                          {u.model}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </label>

              <label className="field">
                <span className="field__label">{ORDER.fields.reach}</span>
                <input type="text" value={form.reach} onChange={set('reach')} placeholder="22" inputMode="decimal" />
                {errors.reach ? <span className="error">{errors.reach}</span> : null}
              </label>

              <label className="field field--full">
                <span className="field__label">{ORDER.fields.comment}</span>
                <textarea value={form.comment} onChange={set('comment')} rows={4} placeholder={ORDER.placeholders.comment} />
              </label>

              <div className="field--full row-16">
                <button type="submit" className="btn">
                  {ORDER.submit}
                </button>
                <a className="btn btn--outline" href="tel:+74980001124">
                  Позвонить диспетчеру
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
