// library/02-anti-slop/ConstraintInjector.ts

export interface CreativeConstraint {
  category: 'layout' | 'color' | 'typography' | 'interaction';
  rule: string;
}

export class ConstraintInjector {
  private pool: Record<string, string[]> = {
    layout: [
      'Hero-секция НЕ может быть по центру экрана (только асимметрия)',
      'Запрещена стандартная 12-колоночная сетка (использовать 7 или 9 колонок)',
      'Минимум одна секция обязана ломать вертикальный ритм макета'
    ],
    color: [
      'Запрещено использовать больше 2 цветов помимо черного и белого',
      'Основной цвет берется из редкой части спектра (оливковый, терракота, охра)',
      'Никаких мягких градиентов — только жесткие плашки или текстуры'
    ],
    typography: [
      'Заголовки набраны редким акцидентным шрифтом (не Inter/Roboto/Montserrat)',
      'Размер заголовка h1 обязан превышать 80px на десктопе'
    ],
    interaction: [
      'Обязательна микро-анимация скролла с физикой демпфирования',
      'Курсор имеет интерактивную зону реакции при наведении на медиа'
    ]
  };

  public generate(seed: string = 'studio-project', count: number = 3): CreativeConstraint[] {
    const categories = Object.keys(this.pool);
    const selected: CreativeConstraint[] = [];

    let hash = 0;
    for (let i = 0; i < seed.length; i++) hash = ((hash << 5) - hash) + seed.charCodeAt(i);

    for (let i = 0; i < count; i++) {
      const cat = categories[(Math.abs(hash) + i) % categories.length] as CreativeConstraint['category'];
      const options = this.pool[cat];
      const rule = options[(Math.abs(hash) + i * 3) % options.length];
      selected.push({ category: cat, rule });
    }

    return selected;
  }
}
