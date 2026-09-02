import type { PageSEOContract } from '@library/06-seo/seo.contracts';

// SYS-06. Контракт читает `studio audit` (реальный импорт, а не копия) — цифры обязаны быть клиентскими.
export const pageSEO: PageSEOContract = {
  title: 'ВЫЛЕТ — заполните title 30-70 символов',
  description:
    'Опишите услугу цифрами: парк, вылет, сроки подачи, цена за смену, радиус выезда. Норма 70-165 символов для этого описания.',
  canonical: 'https://example.com/',
  robots: 'index, follow',
  lang: 'ru-RU',
  h1: 'ВЫЛЕТ: заголовок одной строкой, до 90 символов',
  breadcrumbs: [
    { name: 'Главная', url: 'https://example.com/' },
    { name: 'Техника', url: 'https://example.com/#fleet' }
  ],
  openGraph: {
    title: 'ВЫЛЕТ',
    description: 'Оффер одной строкой',
    type: 'website',
    image: { url: 'https://example.com/og.png', width: 1200, height: 630, alt: 'Техника на объекте' },
    locale: 'ru_RU'
  }
};
