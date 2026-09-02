// library/08-copywriting/FactDensityScorer.ts
// SYS-08: факт-плотность. Норма студии: минимум 1 твёрдая цифра/метрика на 25 слов.
// Расширено отраслевыми единицами спецтехники (м, т, т/ч, л.с., смен, ед., м³, га, бар).

export interface FactDensityResult {
  score: number;
  factsCount: number;
  factsFound: string[];
  words: number;
  wordsPerFact: number;
  meetsThreshold: boolean; // <= 25 слов на факт
  missing: string[]; // подсказки, какие типы фактов отсутствуют
}

// ВАЖНО: \b и \w в JS — ASCII. Для кириллицы используются lookaround'ы
// с \p{L} и флаг `u`, иначе «350 000 руб» и «14 дней» не матчатся вовсе.
const WORD = '[\\p{L}\\p{N}_]';
// «350 000» (неразрывный разряд) и «350,000» — оба варианта числа
const num = `(?<!${WORD})(?:\\d{1,3}(?:[\\s\\u00A0]\\d{3})+|\\d+(?:[.,]\\d+)?)`;
const unit = (list: string) => new RegExp(`${num}\\s*(?:${list})(?![\\p{L}])`, 'giu');

const FACT_PATTERNS: Array<{ name: string; re: RegExp; hint: string }> = [
  {
    name: 'metric',
    re: unit('%|px|ms|мс|сек|сек\\.|мин|ч|ч\\.|часа|часов|час|дн|дн\\.|дня|день|дней|сут|сутки|руб|₽|\\$|€|mb|gb|tb|rps|fps|кбит|мб|процентов'),
    hint: 'добавить измеримую величину (срок, скорость, объём)'
  },
  {
    name: 'industry',
    re: unit('м|м\\.|мм|см|м²|м\\*2|м3|куб\\.?м|га|т|тн|т/ч|л\\.?с\\.?|кВт|кН|бар|атм|ед\\.|шт\\.|смен|смены|смену|выездов|единиц|машин|объектов|агрегатов|циклов|км/ч|м/ч|н·м'),
    hint: 'добавить технику/объём работ в единицах отрасли'
  },
  {
    name: 'year',
    re: new RegExp(`(?<!${WORD})(20\\d{2}|19\\d{2})(?:\\s*(?:год|года|году|г\\.))?(?![\\p{L}\\p{N}])`, 'giu'),
    hint: 'указать год модели, выпуска, парка или начала работ'
  },
  {
    name: 'count',
    re: new RegExp(`${num}\\s*(?:клиент|проект|сервер|пользовател|наград|мест|микросервис|устройств|объект|заявк|смен|выезд|агрегат|единиц)[\\p{L}]*`, 'giu'),
    hint: 'посчитать, сколько раз/объектов/клиентов'
  },
  {
    name: 'range',
    re: new RegExp(`${num}\\s*[–—-]\\s*\\d+(?:[.,]\\d+)?\\s*[\\p{L}]{0,4}`, 'giu'),
    hint: 'дать диапазон (вылет стрелы 14–28 м, смена 7–11 ч)'
  },
  {
    name: 'geo',
    re: unit('км/ч|км'),
    hint: 'указать радиус выезда в километрах'
  }
];

export class FactDensityScorer {
  public static calculate(text: string): FactDensityResult {
    const source = String(text ?? '');
    const words = source.split(/\s+/).filter((w) => w.length > 0);
    const factsFound: string[] = [];
    const hitNames = new Set<string>();

    FACT_PATTERNS.forEach(({ name, re }) => {
      const matches = source.match(re);
      if (!matches) return;
      hitNames.add(name);
      factsFound.push(...matches.map((m) => m.trim()));
    });

    // Одиночные числа >= 2 знаков, которые не попали ни в один паттерн
    const standalone = source.match(/(^|[^\p{L}\p{N}])\d{2,}(?=$|[^\p{L}\p{N}])/gu) ?? [];
    standalone.forEach((raw) => {
      const trimmed = raw.trim();
      if (!factsFound.some((f) => f.includes(trimmed))) factsFound.push(trimmed);
    });

    const unique = Array.from(new Set(factsFound));
    // Шкала привязана к нормативу студии: 1 цифра на 25 слов = 100 баллов,
    // 1 цифра на 100 слов и хуже = 0. Линейно между ними.
    const wordsPerFact = unique.length ? Math.round(words.length / unique.length) : 9999;
    const score = Math.max(0, Math.min(100, Math.round(((100 - Math.min(100, wordsPerFact)) / 75) * 100)));

    return {
      score,
      factsCount: unique.length,
      factsFound: unique,
      words: words.length,
      wordsPerFact,
      meetsThreshold: wordsPerFact <= 25,
      missing: FACT_PATTERNS.filter((p) => !hitNames.has(p.name)).map((p) => p.hint)
    };
  }
}
