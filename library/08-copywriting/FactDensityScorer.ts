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
    re: unit('%|px|ms|мс|сек|сек\\.|мин|ч|ч\\.|часа|часов|час|дн|дн\\.|дня|день|дней|сут|сутки|недел|месяц|лет|год|года|годов|руб|₽|\\$|€|mb|gb|tb|rps|fps|кбит|мб|процентов|°C|℃|градусов'),
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
    re: new RegExp(`${num}\\s*(?:клиент|проект|сервер|пользовател|наград|мест|микросервис|устройств|объект|заявк|смен|выезд|агрегат|единиц|случа|ошибо|замечани|возражен|паузн|пау|погруз|цикл|подъём|операци)[\\p{L}]*`, 'giu'),
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

    // Мусорные «цифры»: версии, координаты, времена 08:00, ИНН и телефоны — это не факты
    // оффера. Раньше standalone-проход ловил «.02», «:00», «032» и надувал метрику.
    const isRealFact = (value: string, index: number): boolean => {
      const digits = value.match(/\d/g);
      if (!digits || digits.length === 0) return false;
      // ИНН/КПП/ID — сплошной ряд цифр. «3 000 000 ₽» разрядным тире не является
      const longestRun = (value.match(/\d+/g) ?? []).reduce((max, run) => Math.max(max, run.length), 0);
      if (longestRun >= 7) return false;
      const before = source.slice(Math.max(0, index - 16), index);
      const after = source.slice(index + value.length, index + value.length + 16);
      const near = before + value + after;
      if ((near.match(/\d/g) ?? []).length >= 9 && !/[₽$€%]|руб|км|мин|сек|ч(?![\p{L}])/u.test(near)) return false;
      // Дробь/координата/время: «55.678», «08:00», «v1.02» — не факты.
      // Но «за 2 часа, на 4-й день» нормальна, поэтому отбрасываем только
      // пунктуацию, за которой сразу идёт цифра, или цифру после разделителя.
      if (/^\s*[.,:]\s*\d/u.test(after)) return false;
      if (/\d\s*[.,]\s*$/u.test(before) && !/[\p{L}]/u.test(value)) return false;
      if (/^\s*[:.]\s*\d/u.test(after) && /[\p{L}]/u.test(value)) return false;
      return true;
    };

    const addFrom = (re: RegExp, name: string) => {
      let m: RegExpExecArray | null;
      const scan = new RegExp(re.source, re.flags.includes('g') ? re.flags : `${re.flags}g`);
      let hits = 0;
      while ((m = scan.exec(source))) {
        // Ключ факта — без обрамляющей пунктуации, иначе «:00» и «00» считаются разными фактами
        const value = m[0].replace(/^[^\p{L}\p{N}]+/gu, '').replace(/[^\p{L}\p{N}%°₽$€]+$/gu, '');
        if (!isRealFact(value, m.index)) continue;
        hits += 1;
        factsFound.push(value);
      }
      if (hits) hitNames.add(name);
    };

    FACT_PATTERNS.forEach(({ name, re }) => addFrom(re, name));

    // Одиночные числа >= 2 знаков вне паттернов — тоже факт, если проходят валидацию
    const standalone = /(^|[^\p{L}\p{N}])\d{2,}(?=$|[^\p{L}\p{N}])/gu;
    let sm: RegExpExecArray | null;
    while ((sm = standalone.exec(source))) {
      const value = sm[0].replace(/^[^\p{L}\p{N}]+/gu, '').replace(/[^\p{L}\p{N}%°₽$€]+$/gu, '');
      const at = sm.index + sm[0].indexOf(value);
      if (!isRealFact(value, at)) continue;
      // Уже учтён внутри более длинного факта («100» внутри «16–100 т») — не дублируем
      if (factsFound.some((f) => f.includes(value))) continue;
      factsFound.push(value);
    }

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
