// library/08-copywriting/StructureScanner.ts
// SYS-08: проверка структуры продающего текста (PAS / BAB) и VoiceMatrix-калибровка тона.
// Студия не принимает тексты, где «боль» и «доказательство» разведены по разным секциям.

export type Formula = 'PAS' | 'BAB';

export interface SectionVoice {
  /** 0 = «бумага», 1 = «прораб на объекте» */
  directness: number;
  /** доля предложений с подлежащим-действующим, а не отглагольным существительным */
  agency: number;
  /** плотность первых/вторых лиц («вы», «ваш») на 100 слов */
  addressDensity: number;
  /** сколько «мы» вместо цифр */
  weRatio: number;
}

export interface StructureReport {
  formula: Formula;
  covered: Array<'problem' | 'agitation' | 'solution' | 'before' | 'after' | 'bridge'>;
  missing: Array<'problem' | 'agitation' | 'solution' | 'before' | 'after' | 'bridge'>;
  score: number;
  voice: SectionVoice;
  notes: string[];
}

const PROBLEM = /(?<![\p{L}])(проблем|не получается|не выходит|простой|простаива|отказ|поломк|штраф|задержк|не хватает|не найден|не приедет|сорван|неудобно|дорог[оой] обходится|переплата)([\p{L}]*)?(?![\p{L}])/giu;
const AGITATION =
  /(?<![\p{L}])(в результат|из-за это|каждый (?:час|день|сутки) стои|каждый день|потеря|убыток|простои|простоя|простой|простой|сдвиг|риску|останавли|блокиру|простаива|съе[хш]т|съе[хш]ал|жд[её]т|жд[ёе]м|ждал[иа]?|задержк|штраф|пен[ею]|недоимк|сорв[аё]н|срыв|опоздани|замер[лы]|встал[аи]?|заморожен|прибавит|добав(?:ил[иао]?|яет)|отдал[иао]? \d|недополуч|простоявш|заминк|протечк|аварийн)([\p{L}]*)?(?![\p{L}])/giu;
const SOLUTION = /(?<![\p{L}])(решени|подключа|пода[ё]м|привозим|выводим|закрываем|выделяем|предоставляем|аренд|наряд|смена|выходит на объект|закрываем смену|бер[её]м на себя)([\p{L}]*)?(?![\p{L}])/giu;
const BEFORE = /(?<![\p{L}])(раньше|до это|было|прежн|до запуск|до сделк)([\p{L}]*)?(?![\p{L}])/giu;
const AFTER = /(?<![\p{L}])(сейчас|тепер|после|стало|итог|в результат[еа] )(?![\p{L}])([\p{L}]*)(?![\p{L}])/giu;
const BRIDGE = /(?<![\p{L}])(поэтомо|поэтому|благодаря этому|за счёт этог|если нужен|оставьт|позвоните|заявк|расчёт|рассчитаем|пришлите|пишите)([\p{L}]*)?(?![\p{L}])/giu;

export class StructureScanner {
  public static scan(text: string, formula: Formula = 'PAS'): StructureReport {
    const source = String(text ?? '');
    const notes: string[] = [];
    const covered: StructureReport['covered'] = [];
    const need = formula === 'PAS'
      ? (['problem', 'agitation', 'solution'] as const)
      : (['before', 'after', 'bridge'] as const);

    const probe = (re: RegExp, label: StructureReport['covered'][number]) => {
      const hits = source.match(re) ?? [];
      if (hits.length) covered.push(label);
      return hits;
    };

    if (formula === 'PAS') {
      probe(PROBLEM, 'problem');
      probe(AGITATION, 'agitation');
      probe(SOLUTION, 'solution');
    } else {
      probe(BEFORE, 'before');
      probe(AFTER, 'after');
      probe(BRIDGE, 'bridge');
    }

    const missing = need.filter((n) => !covered.includes(n)) as StructureReport['missing'];

    // VoiceMatrix: тон «инженер, а не маркетолог»
    const sentences = source.split(/(?<=[.!?…])\s+/u).filter((s) => s.trim().length > 1);
    const wordCount = Math.max(1, (source.match(/[\p{L}\p{N}]+/gu) ?? []).length);

    const agencySentences = sentences.filter((s) => /^[^.,;—-]{0,48}?\s(делает|подаёт|вывозит|кранует|работает|выезжает|меняет|монтирует|крутит|льёт)(?![\p{L}])|^[^.,;]{0,48}\s(бригад|крановщик|оператор|механик|смена|парк)[\p{L}]*(?![\p{L}])/iu.test(s));
    const agency = sentences.length ? agencySentences.length / sentences.length : 0;

    const addressHits = (source.match(/(?<![\p{L}])(вы|вам|вас|ваш[и]?[\p{L}]*)(?![\p{L}\p{N}])/giu) ?? []).length;
    const weHits = (source.match(/(?<![\p{L}])(мы|нам|нас|наш[и]?[\p{L}]*)(?![\p{L}\p{N}])/giu) ?? []).length;

    const nounHeavy = (source.match(/(ение|ности|циям|ую щ|ающие|аемо)/giu) ?? []).length;
    const directness = Math.max(0, Math.min(1, 1 - nounHeavy / Math.max(1, sentences.length * 1.5)));
    const addressDensity = Math.round((addressHits / wordCount) * 100 * 10) / 10;
    const weRatio = Math.round((weHits / Math.max(1, addressHits + weHits)) * 100) / 100;

    if (weRatio > 0.7) notes.push(`VoiceMatrix: ${(weRatio * 100).toFixed(0)}% местоимений — «мы» вместо «вы». Развернуть на клиента.`);
    if (directness < 0.55) notes.push('VoiceMatrix: много отглагольных существительных («осуществление», «обеспечение») — заменить глаголами.');
    if (missing.length) notes.push(`Формула ${formula}: не найден блок «${missing.join('», «')}».`);

    const base = 100 - missing.length * 34;
    const voicePenalty = Math.round((1 - directness) * 18 + Math.max(0, weRatio - 0.5) * 24);
    const score = Math.max(0, Math.min(100, base - voicePenalty));

    return {
      formula,
      covered,
      missing,
      score,
      voice: {
        directness: Math.round(directness * 100) / 100,
        agency: Math.round(agency * 100) / 100,
        addressDensity,
        weRatio
      },
      notes
    };
  }
}
