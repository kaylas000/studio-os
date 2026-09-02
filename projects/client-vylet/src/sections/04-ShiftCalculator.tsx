import { useEffect, useMemo, useState } from 'react';
import { EXTRAS, FLEET, SHIFTS } from '../content/catalog';
import { CALC_COPY } from '../content/copy';
import { NumberTicker } from '../components/NumberTicker';
import { scrollToId } from '../engine/useMotion';

const rub = (value: number) => `${value.toLocaleString('ru-RU')} ₽`;
const KM_RATE = 46; // ₽/км плеча сверх 12 км — черновик, править в catalog.ts

// Пресеты ровно те, о которых говорит парк: 2 часа, смена, сутки.
const PRESETS: Array<{ label: string; hours: number }> = [
  { label: `минимум`, hours: 2 },
  { label: `смена ${SHIFTS.hours} ч`, hours: SHIFTS.hours },
  { label: 'сутки', hours: 24 },
  { label: 'двое суток', hours: 48 }
];

/**
 * Цена времени: до смены — по прайсу часа, дальше смена целиком + часы сверх неё.
 * Так «сутки» не превращаются в 24 одинаковых часа, а переработка остаётся видимой.
 */
export function timeCost(hours: number, unit: (typeof FLEET)[number]) {
  const shiftPrice = unit.shift;
  if (hours >= SHIFTS.hours) {
    const full = Math.floor(hours / SHIFTS.hours);
    const rest = hours - full * SHIFTS.hours;
    return { base: shiftPrice * full + rest * unit.extraHour, full, rest };
  }
  return { base: hours * unit.extraHour, full: 0, rest: hours };
}

export function ShiftCalculator() {
  const [unitId, setUnitId] = useState(FLEET.some((u) => u.id === 'agp-16') ? 'agp-16' : FLEET[0].id);
  const unit = useMemo(() => FLEET.find((u) => u.id === unitId) ?? FLEET[0], [unitId]);
  const minHours = unit.minHours ?? SHIFTS.hours;
  const [hours, setHours] = useState(minHours);
  const [night, setNight] = useState(false);
  const [km, setKm] = useState(18);
  const [extras, setExtras] = useState<string[]>(['winch']);

  // смена единицы не должна оставлять клиента с 2 часами там, где минимум — смена
  useEffect(() => {
    setHours((prev) => Math.max(unit.minHours ?? SHIFTS.hours, prev));
  }, [unit]);

  const lines = useMemo(() => {
    const { base, full, rest } = timeCost(hours, unit);
    // плечо и «за выезд» считаются раз в сутки: 24 ч на объекте — одна доставка
    const days = Math.max(1, Math.ceil(hours / 24));
    const nightUp = night ? Math.round(base * 0.25) : 0;
    const mileage = Math.max(0, km - 12) * KM_RATE * days;
    const extraRows = EXTRAS.filter((e) => extras.includes(e.id)).map((e) => ({
      label: e.name,
      value: e.per === 'смена' ? Math.round(base * e.price) : e.per === 'час' ? e.price * hours : e.price * days
    }));
    const total = base + nightUp + mileage + extraRows.reduce((sum, row) => sum + row.value, 0);
    return { base, full, rest, nightUp, mileage, extraRows, total, days };
  }, [unit, hours, night, km, extras]);

  const toggle = (id: string) => setExtras((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <section className="section" id="calc" aria-labelledby="calc-title">
      <div className="wrap grid9">
        <header className="section-head">
          <p className="kicker">{CALC_COPY.index} · смета, а не «от»</p>
          <h2 id="calc-title" data-reveal>
            {CALC_COPY.h2}
          </h2>
          <p className="lede" data-reveal>{CALC_COPY.lede}</p>
        </header>
        <p className="section-index mono">расчёт предварительный, фиксируется менеджером</p>

        <div style={{ gridColumn: '1 / span 5' }}>
          <div className="calc" style={{ gridTemplateColumns: '1fr' }}>
            <label className="field">
              <span className="field__label">Единица парка</span>
              <select value={unitId} onChange={(e) => setUnitId(e.target.value)}>
                {FLEET.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.model} — {rub(u.shift)}/смена
                    {u.minHours ? `, от ${u.minHours} ч` : ''}
                  </option>
                ))}
              </select>
            </label>

            <div className="chips" role="group" aria-label="Готовые варианты времени">
              {PRESETS.filter((p) => p.hours >= minHours).map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  className="chip"
                  onClick={() => setHours(preset.hours)}
                  aria-pressed={hours === preset.hours}
                >
                  {preset.label === 'минимум' ? `минимум ${preset.hours} ч` : preset.label}
                </button>
              ))}
            </div>

            <label className="field">
              <span className="field__label">
                Часов на объекте: {hours} {lines.full > 0 ? `· ${lines.full} смена${lines.full > 1 ? 'ы' : ''}${lines.rest ? ` + ${lines.rest} ч` : ''}` : `· по прайсу часа ${rub(unit.extraHour)}`}
              </span>
              <input
                type="range"
                min={minHours}
                max={48}
                step={1}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                aria-label="Часы на объекте"
              />
            </label>

            <label className="field">
              <span className="field__label">Плечо выезда: {km} км · {KM_RATE} ₽/км сверх 12 км</span>
              <input
                type="range"
                min={0}
                max={120}
                step={2}
                value={km}
                onChange={(e) => setKm(Number(e.target.value))}
                aria-label="Километраж до объекта"
              />
            </label>

            <div className="checks">
              <label className="check">
                <input type="checkbox" checked={night} onChange={(e) => setNight(e.target.checked)} />
                <span>
                  Ночная смена 22:00–06:00 <small>наценка 25% и согласование по шуму</small>
                </span>
              </label>
              {EXTRAS.filter((e) => e.id !== 'night').map((extra) => (
                <label className="check" key={extra.id}>
                  <input type="checkbox" checked={extras.includes(extra.id)} onChange={() => toggle(extra.id)} />
                  <span>
                    {extra.name}{' '}
                    <small>
                      {extra.per === 'смена' ? `+${Math.round(extra.price * 100)}% к смене` : `${rub(extra.price)} / ${extra.per}`} · {extra.hint}
                    </small>
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <aside style={{ gridColumn: '7 / span 3' }} data-reveal>
          <div className="panel scanlines total">
            <p className="kicker">Итого по парку</p>
            <p className="total__sum">
              <NumberTicker value={lines.total} suffix=" ₽" />
            </p>
            <div className="total__rows">
              <div className="total__row">
                <span>Время на объекте: {hours} ч</span>
                <b>{rub(lines.base)}</b>
              </div>
              {night ? (
                <div className="total__row">
                  <span>Ночная наценка</span>
                  <b>{rub(lines.nightUp)}</b>
                </div>
              ) : null}
              <div className="total__row">
                <span>Плечо {km} км</span>
                <b>{rub(lines.mileage)}</b>
              </div>
              {lines.extraRows.map((row) => (
                <div className="total__row" key={row.label}>
                  <span>{row.label}</span>
                  <b>{row.value ? rub(row.value) : '—'}</b>
                </div>
              ))}
              <div className="total__row">
                <span>Час сверх смены и простой свыше {SHIFTS.graceHours} ч</span>
                <b>{rub(unit.extraHour)}/ч</b>
              </div>
            </div>
            <ul className="limits">
              {CALC_COPY.limits.map((limit) => (
                <li key={limit}>{limit}</li>
              ))}
            </ul>
            <button type="button" className="btn" onClick={() => scrollToId('order')}>
              Зафиксировать расчёт
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
