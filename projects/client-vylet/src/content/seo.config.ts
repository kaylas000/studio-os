// SYS-06 · SEO-контракт проекта. Его читает `studio audit` и gen-seo.mjs.
// Заполнить клиентскими данными: телефон, адрес, ИНН, реальные цены из catalog.ts.

// Только тип: Node (gen-seo.mjs, studio audit) стирает эту строку, Vite использует её для проверки.
import type { PageSEOContract } from '../../../../library/06-seo/seo.contracts.ts';
import { AERIAL_RANGE, CRANE_RANGE, AREAS, SERVICES_FROM, SHIFTS, fleetLabel, shiftFromCategory, shiftOf } from './catalog.ts';

const BASE = 'https://vylet.example';

export const pageSEO: PageSEOContract = {
  title: 'Автовышки, краны и земтехника на смену — ВЫЛЕТ, Одинцово',
  description:
    `Парк ${fleetLabel()} в Одинцово: автовышки ${AERIAL_RANGE} — от компактной с проездом 2,8 м, автокраны ${CRANE_RANGE}, манипуляторы, экскаваторы. От 2 часов, смена, сутки, 24/7`,
  canonical: `${BASE}/`,
  robots: 'index, follow, max-image-preview:large',
  lang: 'ru-RU',
  h1: 'Автовышки, краны и земтехника на смену',
  themeColor: '#05070c',
  breadcrumbs: [
    { name: 'Парк техники', url: `${BASE}/#fleet` },
    { name: 'Услуги', url: `${BASE}/#services` },
    { name: 'Заявка', url: `${BASE}/#order` }
  ],
  openGraph: {
    title: 'ВЫЛЕТ · спецтехника на смену',
    description: `${fleetLabel()} в Одинцово. Подача от 90 минут.`,
    type: 'website',
    image: { url: `${BASE}/og.jpg`, width: 1200, height: 630, alt: 'Автовышка АГП-22.02 на объекте в Одинцово' },
    locale: 'ru_RU'
  },
  faq: [
    {
      question: 'Кто управляет машиной?',
      answer: 'Только наш аттестованный машинист с удостоверением и журналом осмотра. Свой оператор допускается по доверенности после инструктажа на площадке.'
    },
    {
      question: 'Что входит в смену 11 часов?',
      answer: 'Рабочее время на площадке, перерывы машиниста, перестановки в пределах объекта и заправка в баке. Дорога и ожидание разгрузки свыше 2 часов считаются отдельно.'
    },
    {
      question: 'Как быстро приедет техника?',
      answer: 'В Одинцово — от 90 минут после подтверждения, по Московской области — от 3 часов. Для Москвы внутри МКАД окно подачи с 22:00.'
    }
  ],
  business: {
    legalName: 'ООО «Вылет»',
    displayName: 'ВЫЛЕТ · спецтехника',
    url: BASE,
    logo: `${BASE}/logo.svg`,
    image: `${BASE}/og.jpg`,
    description:
      'Аренда и заказ спецтехники в Одинцово: автовышки, автокраны, крано-манипуляторные установки, экскаваторы и тракторы с экипажем. Собственный сервисный участок.',
    phone: '+7 498 000-11-24',
    email: 'dispatch@vylet.example',
    address: {
      street: 'Транспортный проезд, 4',
      city: 'Одинцово',
      region: 'Московская область',
      postalCode: '143003',
      country: 'RU'
    },
    geo: { lat: 55.678, lng: 37.263 },
    openingHours: ['Mo-Su 00:00-23:59'],
    areaServed: AREAS.map((a) => a.name),
    priceRange: `от ${SERVICES_FROM.toLocaleString('ru-RU')} ₽ за смену`,
    foundingDate: '2016',
    services: [
      { name: 'Компактная автовышка 16 м: проезд 2,8 м', description: 'Покраска коттеджа, мойка окон, купола и колокола, спил и кронирование; от 2 часов, подача 24/7', price: shiftOf('agp-16'), priceUnit: 'смена', audience: 'Частные дома, коттеджи, срубы' },
      { name: `Автовышки ${AERIAL_RANGE}`, description: 'Люлька на 2 человека, поворот 360°, работа по наряду-допуску и ППР', price: shiftFromCategory('aerial'), priceUnit: 'смена', audience: 'Фасадные и кровельные подрядчики' },
      { name: `Автокраны ${CRANE_RANGE} с монтажной схемой`, description: 'Гусёк 9 м, ограничитель нагрузки, ППР готовим сами', price: shiftFromCategory('crane'), priceUnit: 'смена' },
      { name: 'Земляные работы: от мини-экскаватора до 20 т', description: 'Траншея до 3,6 м, планировка под плиту, обратная засыпка с трамбовкой', price: shiftFromCategory('earth'), priceUnit: 'смена' },
      { name: 'Наружная реклама: вывески, баннеры, подсветка', description: 'Монтаж и демонтаж вывесок и баннерных линий с люльки, до 70 м', price: shiftFromCategory('aerial'), priceUnit: 'смена', audience: 'Рекламные производства и сети' },
      { name: 'Кондиционеры и приточка на фасаде', description: 'Вынос и крепление наружных блоков, кронштейны, трасса; компактная АГП-16 проходит в арку 2,8 м', price: shiftOf('agp-16'), priceUnit: 'смена' },
      { name: 'Водосток, жесть и СИП на высоте', description: 'Жёлоб, отливы, парапеты, СИП по фасаду и опоре, прожекторы', price: shiftOf('agp-14'), priceUnit: 'смена' }
    ],
    sameAs: ['https://vk.com/vylet.example', 'https://t.me/vylet_example']
  }
};
