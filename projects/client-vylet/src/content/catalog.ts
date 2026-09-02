// ДАННЫЕ-ЗАГЛУШКА (см. README.md): модель, единицы и цены обязан подтвердить менеджер парка.
// Аудит не проверяет достоверность — только то, что цифра стоит рядом с каждым обещанием.

export type Category = 'aerial' | 'crane' | 'manipulator' | 'earth';

export const CATEGORIES: Array<{ id: Category; name: string; short: string; note: string }> = [
  { id: 'aerial', name: 'Автовышки', short: 'АГП', note: 'Люлька 2 мест, допуск к работам на высоте' },
  { id: 'crane', name: 'Автокраны', short: 'КВ', note: 'РР на стрелу, приборы безопасности' },
  { id: 'manipulator', name: 'Манипуляторы', short: 'ХАБ', note: 'Гидрозахват, коники, трал по запросу' },
  { id: 'earth', name: 'Земтехника', short: 'ЕКБ', note: 'Гидромолот и планировочный ковш' }
];

export interface Unit {
  id: string;
  category: Category;
  model: string;
  maker: string;
  year: number;
  /** главный вылет/высота, м */
  reach: number;
  /** грузоподъёмность, т */
  capacity: number;
  /** смена 11 ч, руб */
  shift: number;
  /** час сверх смены, руб */
  extraHour: number;
  /** минимальный заказ, смены */
  minOrder: number;
  /** наработка, м/ч */
  hours: number;
  outreach: string;
  ground: string;
  crew: number;
  photo: string;
  available: number;
  total: number;
}

export const FLEET: Unit[] = [
  { id: 'agp-12', category: 'aerial', model: 'АГП-12.02 на ГАЗон Next', maker: 'Клинцы', year: 2021, reach: 12, capacity: 0.3, shift: 13200, extraHour: 1150, minOrder: 1, hours: 1840, outreach: 'Вылет люльки 5,4 м', ground: 'Аутригеры: 4,2 × 4,8 м', crew: 1, photo: 'aerial-12', available: 4, total: 5 },
  { id: 'agp-22', category: 'aerial', model: 'АГП-22.02 на Урал 4320', maker: 'Клинцы', year: 2020, reach: 22, capacity: 0.3, shift: 16800, extraHour: 1350, minOrder: 1, hours: 2960, outreach: 'Вылет 8,1 м, люлька 2,4 м', ground: 'Полный привод, бездорожье', crew: 1, photo: 'aerial-22', available: 3, total: 4 },
  { id: 'agp-34', category: 'aerial', model: 'AeroStol 34 VR на КАМАЗ', maker: 'Аэростол', year: 2022, reach: 34, capacity: 0.4, shift: 24500, extraHour: 1800, minOrder: 1, hours: 980, outreach: 'Поворотная часть 360°', ground: 'Город, проезды 3,5 м', crew: 1, photo: 'aerial-34', available: 2, total: 2 },
  { id: 'agp-44', category: 'aerial', model: 'УМ-341 44 м на МАЗ', maker: 'Урбан', year: 2019, reach: 44, capacity: 0.25, shift: 31000, extraHour: 2200, minOrder: 1, hours: 4120, outreach: 'Вертикальный подъём 44 м', ground: 'Площадка 6 × 8 м', crew: 2, photo: 'aerial-44', available: 1, total: 2 },
  { id: 'kv-25', category: 'crane', model: 'Галичанин КС-4572А 25 т', maker: 'КЗ «Галичанин»', year: 2018, reach: 21, capacity: 25, shift: 21500, extraHour: 1700, minOrder: 1, hours: 5240, outreach: 'Стрела 9–21 м + гусёк 9 м', ground: 'Опорный контур 5,6 × 6,4 м', crew: 1, photo: 'crane-25', available: 3, total: 5 },
  { id: 'kv-40', category: 'crane', model: 'Челябинец КС-55713 40 т', maker: 'ЧMZ', year: 2020, reach: 27, capacity: 40, shift: 27800, extraHour: 2050, minOrder: 1, hours: 3110, outreach: 'Вылет 3,4–22 м с грузом', ground: 'Работа с ограничением 2,7 м', crew: 1, photo: 'crane-40', available: 2, total: 3 },
  { id: 'kv-100', category: 'crane', model: 'XCMG XCT100 100 т', maker: 'XCMG', year: 2023, reach: 50, capacity: 100, shift: 62000, extraHour: 4200, minOrder: 2, hours: 640, outreach: 'Пять секций, 12–50 м', ground: 'Нужен проект производства работ', crew: 2, photo: 'crane-100', available: 1, total: 1 },
  { id: 'hiab-32', category: 'manipulator', model: 'Hiab 032 на ГАЗель Next', maker: 'Hiab', year: 2021, reach: 9, capacity: 3.2, shift: 12400, extraHour: 1050, minOrder: 1, hours: 1520, outreach: 'Крано-манипуляторная установка', ground: 'Заезд во двор 2,6 м', crew: 1, photo: 'manipulator-32', available: 5, total: 6 },
  { id: 'hiab-70', category: 'manipulator', model: 'Palfinger E74 на КАМАЗ', maker: 'PALFINGER', year: 2022, reach: 14, capacity: 7, shift: 18900, extraHour: 1450, minOrder: 1, hours: 870, outreach: 'Гидрозахват + коники 6 м', ground: 'Платформа 6,2 м, 12 т', crew: 1, photo: 'manipulator-70', available: 2, total: 3 },
  { id: 'mtz', category: 'earth', model: 'Беларус МТЗ-82.1 + ковш', maker: 'МТЗ', year: 2017, reach: 0, capacity: 3.5, shift: 11800, extraHour: 950, minOrder: 1, hours: 6940, outreach: 'Планировка, корчевание', ground: 'Грунты I–IV, промерзание', crew: 1, photo: 'tractor-mtz', available: 3, total: 4 },
  { id: 'jcb-3cx', category: 'earth', model: 'JCB 3CX Backhoe', maker: 'JCB', year: 2021, reach: 5, capacity: 5, shift: 15600, extraHour: 1250, minOrder: 1, hours: 2280, outreach: 'Ковш 0,28 м³, траншея до 3,6 м', ground: 'Отсыпка, обратная засыпка', crew: 1, photo: 'excavator-jcb', available: 2, total: 3 },
  { id: 'ekb-20', category: 'earth', model: 'Komatsu PC200-8 + гидромолот', maker: 'Komatsu', year: 2019, reach: 6, capacity: 20, shift: 19400, extraHour: 1550, minOrder: 1, hours: 5120, outreach: 'Молот 1 200 Дж, рыхление', ground: 'Бетон, мёрзлый грунт, скала', crew: 1, photo: 'excavator-20', available: 2, total: 3 }
];

export interface Extra {
  id: string;
  name: string;
  price: number;
  per: 'смена' | 'час' | 'выезд';
  hint: string;
}

export const EXTRAS: Extra[] = [
  { id: 'escort', name: 'Машина сопровождения', price: 6400, per: 'выезд', hint: 'Нужна при ширине груза свыше 3,2 м и проезде по МКАД' },
  { id: 'night', name: 'Ночная смена (22:00–06:00)', price: 0.25, per: 'смена', hint: 'Наценка 25% и согласование со заказчиком по шуму' },
  { id: 'soil', name: 'Вывоз грунта, 12 м³', price: 9800, per: 'выезд', hint: 'С талоном на полигон и актом утилизации' },
  { id: 'winch', name: 'Лебёдка / доп. оснастка', price: 2600, per: 'смена', hint: 'Для монтажа плит и труб в стеснённых условиях' }
];

export const SERVICES_FROM = Math.min(...FLEET.map((u) => u.shift));

export const SHIFTS = { hours: 11, graceHours: 2, overtimeRate: 'по прайсу часа' };

export const AREAS = [
  { name: 'Одинцово', radius: 12, eta: 'от 90 мин', note: 'база: Транспортный пр-д, 4' },
  { name: 'Кубинка · Звенигород', radius: 34, eta: 'от 3 ч', note: 'выезд по трассе А-100' },
  { name: 'МО до Малого кольца', radius: 45, eta: 'от 3,5 ч', note: 'без платных участков' },
  { name: 'Москва внутри МКАД', radius: 65, eta: 'ночью, с 22:00', note: 'нужен пропуск и схема стоянки' },
  { name: 'Дальше 65 км', radius: 120, eta: 'сутки', note: 'проживание экипажа за счёт заказа' }
];

export function fleetByCategory(id: Category | 'all'): Unit[] {
  return id === 'all' ? FLEET : FLEET.filter((u) => u.category === id);
}
