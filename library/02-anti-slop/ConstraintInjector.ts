// library/02-anti-slop/ConstraintInjector.ts
// SYS-02: генератор принудительных ограничений. Детерминированный по seed —
// один и тот же проект всегда получает один и тот же набор рамок.

export type ConstraintCategory = 'layout' | 'color' | 'typography' | 'interaction' | 'content';

export interface CreativeConstraint {
  category: ConstraintCategory;
  rule: string;
  check?: string; // маркер для аудит-скрипта
}

export class ConstraintInjector {
  private pool: Record<ConstraintCategory, string[]> = {
    layout: [
      'Hero-секция НЕ может быть по центру экрана (только асимметрия: 5/7 или 4/8 колонок)',
      'Запрещена стандартная 12-колоночная сетка (использовать 7 или 9 колонок)',
      'Минимум одна секция обязана ломать вертикальный ритм макета',
      'Карточки каталога — плотная таблица, а не 3-в-ряд с одинаковой высотой',
      'Никаких «равных рядов из четырёх иконок» подряд больше двух раз'
    ],
    color: [
      'Запрещено использовать больше 2 цветов помимо черного и белого',
      'Основной цвет берется из редкой части спектра (оливковый, терракота, охра)',
      'Никаких мягких градиентов — только жесткие плашки или текстуры',
      'Акцентный цвет обязан встречаться ≤ 3 раз на экран'
    ],
    typography: [
      'Заголовки набраны редким акцидентным шрифтом (не Inter/Roboto/Montserrat)',
      'Размер заголовка h1 обязан превышать 80px на десктопе',
      'Только строчные заголовки: никаких Two Word Capitalization и CAPS в длинных фразах',
      'Цифры и характеристики — моноширинным шрифтом, таблицей, а не абзацем'
    ],
    interaction: [
      'Обязательна микро-анимация скролла с физикой демпфирования',
      'Курсор имеет интерактивную зону реакции при наведении на медиа',
      'Каждое число в интерфейсе появляется счётчиком с reduced-motion фолбэком',
      'Hover-состояние карточки не должно двигать соседние элементы (только внутренний слой)'
    ],
    content: [
      'В каждом тексте минимум одна твёрдая цифра на 25 слов',
      'Запрещены слова-паразиты оценки («качественно», «надёжно») без измеряемого аргумента',
      'Каждая услуга обязана называть срок, цену единицы и ограничение (что НЕ входит)',
      'Никаких обещаний «24/7» без графика диспетчерской и окна подачи заявки'
    ]
  };

  private byArchetype: Record<string, string[]> = {
    'cyber-tech': [
      'HUD-слой допустим максимум на 2 секциях: рамки-уголки, scanline, телеметрия',
      'Ни один блок не светится: неон только у активного состояния, не у дефолта',
      'Табличные данные выровнены по правой моноширинной линейке'
    ],
    'neo-brutalism': [
      'Толстая рамка 2-3px без скруглений; тень только смещением на 6px',
      'Плашки перекрывают соседний блок минимум на 16px (нахлёст как приём)'
    ],
    'editorial-swiss': [
      'Сетка 8pt, ноль теней, единственный разделитель — линейка 1px',
      'Заголонок не больше 7 слов, подзаголонок — ровно одна строка'
    ],
    'luxury-noir': [
      'Медленный тайминг: вход блока ≥ 900ms, easing expo-out',
      'Не более 3 текстовых блоков на экран, воздух ≥ 96px между секциями'
    ],
    'clean-minimal': [
      'Один акцент на экран, никаких рамок — только фоновые поверхности'
    ]
  };

  public generate(seed: string = 'studio-project', count: number = 3, archetype?: string): CreativeConstraint[] {
    const categories = Object.keys(this.pool) as ConstraintCategory[];
    const selected: CreativeConstraint[] = [];
    const extra = archetype ? this.byArchetype[archetype] ?? [] : [];

    let hash = 0;
    for (let i = 0; i < seed.length; i++) hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
    const shift = Math.abs(hash);

    const all: Array<{ category: ConstraintCategory; rule: string }> = [];
    categories.forEach((cat) => this.pool[cat].forEach((rule) => all.push({ category: cat, rule })));
    extra.forEach((rule) => all.push({ category: 'layout', rule }));

    const step = Math.max(1, Math.floor(all.length / Math.max(1, count)));
    for (let i = 0; i < count; i++) {
      const item = all[(shift + i * step) % all.length];
      if (selected.some((s) => s.rule === item.rule)) continue;
      selected.push({ category: item.category, rule: item.rule, check: 'manual' });
    }

    return selected;
  }

  public all(): Array<{ category: ConstraintCategory; rule: string }> {
    const out: Array<{ category: ConstraintCategory; rule: string }> = [];
    (Object.keys(this.pool) as ConstraintCategory[]).forEach((cat) =>
      this.pool[cat].forEach((rule) => out.push({ category: cat, rule }))
    );
    return out;
  }
}
