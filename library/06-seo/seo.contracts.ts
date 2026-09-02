// library/06-seo/seo.contracts.ts
// SYS-06: SEO по контракту. Валидация мета-контракта + генерация JSON-LD графа
// + статический аудит HTML (один h1, alt, width/height, lazy, hreflang).
// Валидатор написан вручную (без Zod) — ядро студии не тянет рантайм-зависимостей.

export interface OpenGraphMetadata {
  title: string;
  description: string;
  type: 'website' | 'article' | 'product' | 'profile';
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  locale: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SeoService {
  name: string;
  description: string;
  /** руб. за единицу (смена/час/сутки) */
  price: number;
  priceUnit: 'смена' | 'час' | 'сутки' | 'проект';
  audience?: string;
}

export interface LocalBusinessSeed {
  legalName: string;
  displayName: string;
  url: string;
  logo: string;
  image?: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  geo?: { lat: number; lng: number };
  openingHours: string[]; // ['Mo-Fr 08:00-20:00', 'Sa 09:00-18:00']
  areaServed: string[];
  priceRange: string;
  services: SeoService[];
  sameAs?: string[];
  foundingDate?: string;
  vat?: string;
  ogrn?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PageSEOContract {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  openGraph: OpenGraphMetadata;
  breadcrumbs: BreadcrumbItem[];
  lang?: string;
  h1: string;
  themeColor?: string;
  faq?: FaqItem[];
  business?: LocalBusinessSeed;
  schemaGraph?: Record<string, unknown>[];
}

export interface SeoValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  lengths: { title: number; description: number; h1: number };
}

const TITLE_MIN = 30;
const TITLE_MAX = 70;
const DESC_MIN = 70;
const DESC_MAX = 165;

export function validateSEOContract(contract: PageSEOContract): SeoValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  const title = contract.title ?? '';
  const description = contract.description ?? '';

  if (!title || title.length < TITLE_MIN || title.length > TITLE_MAX) {
    errors.push(`Неоптимальная длина title: ${title.length} симв. (нужно ${TITLE_MIN}-${TITLE_MAX})`);
  }
  if (!description || description.length < DESC_MIN || description.length > DESC_MAX) {
    errors.push(`Неоптимальная длина description: ${description.length} симв. (нужно ${DESC_MIN}-${DESC_MAX})`);
  }
  if (!contract.canonical || !/^https?:\/\/[^\s]+$/.test(contract.canonical)) {
    errors.push('Canonical URL обязан быть абсолютным валидным URL');
  }
  if (!contract.openGraph?.image?.url) {
    errors.push('Отсутствует OG Image URL');
  } else {
    const { width, height } = contract.openGraph.image;
    if (width !== 1200 || height !== 630) {
      warnings.push(`OG Image ${width}x${height}: превью в Telegram/VK/Viber режется — канон студии 1200x630`);
    }
    if (!contract.openGraph.image.alt) warnings.push('OG Image без alt');
  }
  if (!contract.h1 || contract.h1.trim().length < 3) {
    errors.push('PageSEOContract.h1 обязателен: SPA без текста в первом ответе индексируется плохо');
  } else if (contract.h1.length > 90) {
    warnings.push(`h1 длинный (${contract.h1.length} симв.) — оставить до 90`);
  }
  if (!contract.robots || !/index/.test(contract.robots)) {
    warnings.push(`robots = "${contract.robots}" — проверить, что страница действительно индексируется`);
  }
  if (!contract.breadcrumbs?.length) {
    errors.push('Пустой breadcrumbs: нечему строить BreadcrumbList');
  }
  if (contract.business && !/^\+?[78][\s(-]?\d{3}/.test(contract.business.phone)) {
    warnings.push('Телефон не в формате +7 — Schema.org ContactPoint его не примет');
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    lengths: { title: title.length, description: description.length, h1: contract.h1?.length ?? 0 }
  };
}

// ── генерация JSON-LD ─────────────────────────────────────────────────────
export function buildSchemaGraph(contract: PageSEOContract): Record<string, unknown>[] {
  const graph: Record<string, unknown>[] = [];
  const b = contract.business;

  if (b) {
    graph.push({
      '@type': 'LocalBusiness',
      '@id': `${b.url.replace(/\/$$/, '')}/#business`,
      name: b.displayName,
      legalName: b.legalName,
      description: b.description,
      url: b.url,
      logo: b.logo,
      image: b.image ?? b.logo,
      telephone: b.phone,
      email: b.email,
      priceRange: b.priceRange,
      foundingDate: b.foundingDate,
      vatID: b.vat,
      address: {
        '@type': 'PostalAddress',
        streetAddress: b.address.street,
        addressLocality: b.address.city,
        addressRegion: b.address.region,
        postalCode: b.address.postalCode,
        addressCountry: b.address.country
      },
      geo: b.geo ? { '@type': 'GeoCoordinates', latitude: b.geo.lat, longitude: b.geo.lng } : undefined,
      openingHoursSpecification: b.openingHours.map((rule) => {
        const [days, time] = rule.split(' ');
        const [from, to] = (time ?? '').split('-');
        return {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: days.split('-'),
          opens: from,
          closes: to
        };
      }),
      areaServed: b.areaServed.map((name) => ({ '@type': 'City', name })),
      sameAs: b.sameAs ?? [],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Парк и услуги',
        itemListElement: b.services.map((service, i) => ({
          '@type': 'Offer',
          position: i + 1,
          priceCurrency: 'RUB',
          price: service.price,
          itemOffered: {
            '@type': 'Service',
            '@id': `${b.url}/#service-${i + 1}`,
            name: service.name,
            description: service.description,
            areaServed: b.areaServed,
            ...(service.audience ? { serviceAudience: { '@type': 'Audience', name: service.audience } } : {})
          }
        }))
      }
    });
  }

  if (contract.breadcrumbs?.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${contract.canonical}/#breadcrumbs`,
      itemListElement: contract.breadcrumbs.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: crumb.url
      }))
    });
  }

  if (contract.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${contract.canonical}/#faq`,
      mainEntity: contract.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer }
      }))
    });
  }

  const origin = (() => {
    try {
      return new URL(contract.canonical).origin;
    } catch {
      return contract.canonical;
    }
  })();

  graph.unshift({
    '@type': 'WebPage',
    '@id': contract.canonical,
    url: contract.canonical,
    name: contract.title,
    description: contract.description,
    inLanguage: contract.lang ?? 'ru-RU',
    isPartOf: { '@type': 'WebSite', '@id': `${new URL(contract.canonical).origin}/#website`, url: new URL(contract.canonical).origin },
    primaryImageOfPage: contract.openGraph?.image?.url
      ? { '@type': 'ImageObject', url: contract.openGraph.image.url, width: contract.openGraph.image.width, height: contract.openGraph.image.height }
      : undefined,
    breadcrumb: { '@id': `${contract.canonical}/#breadcrumbs` }
  });

  return graph.filter((node) => Object.values(node).some((v) => v !== undefined));
}

export function schemaGraphScript(contract: PageSEOContract): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': buildSchemaGraph(contract) }, null, 2);
}

// ── статический аудит собранного HTML ────────────────────────────────────
export interface HtmlAuditReport {
  ok: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    h1: number;
    images: number;
    imagesWithAlt: number;
    imagesWithDimensions: number;
    lazyBelowFold: number;
    internalLinks: number;
    words: number;
  };
}

export function auditHtml(html: string): HtmlAuditReport {
  const errors: string[] = [];
  const warnings: string[] = [];

  const count = (re: RegExp) => (html.match(re) ?? []).length;
  const h1 = count(/<h1[\s>]/gi);
  if (h1 !== 1) errors.push(`<h1> найдено ${h1} — по стандарту студии ровно один`);

  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)];
  const withAlt = imgs.filter((m) => /alt="[^"]{4,}"/.test(m[0])).length;
  const withDims = imgs.filter((m) => /width="\d+"[^>]*height="\d+"|height="\d+"[^>]*width="\d+"/.test(m[0])).length;
  if (imgs.length) {
    if (withAlt < imgs.length) errors.push(`${imgs.length - withAlt} картинок без содержательного alt (или alt < 4 симв.)`);
    if (withDims < imgs.length) errors.push(`${imgs.length - withDims} картинок без width/height → CLS`);
  }

  const firstImg = imgs[0]?.[0] ?? '';
  if (/loading="lazy"/.test(firstImg)) warnings.push('LCP-картинка (первая <img>) помечена loading="lazy" — превью в поиске задержит загрузку');

  const lazy = count(/loading="lazy"/gi);
  if (imgs.length && lazy === 0) warnings.push('Ни одного loading="lazy" ниже первого экрана');

  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() ?? '';
  if (!title) errors.push('В HTML нет <title>');
  else if (title.length < TITLE_MIN || title.length > TITLE_MAX) errors.push(`<title> ${title.length} симв. — вне коридора ${TITLE_MIN}-${TITLE_MAX}`);

  const metaDesc = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ?? '';
  if (!metaDesc) errors.push('Нет <meta name="description">');
  else if (metaDesc.length < DESC_MIN || metaDesc.length > DESC_MAX) errors.push(`description ${metaDesc.length} симв. — вне коридора ${DESC_MIN}-${DESC_MAX}`);

  if (!/<meta\s+property="og:image"/i.test(html)) errors.push('Нет og:image');
  if (!/<link\s+rel="canonical"/i.test(html)) errors.push('Нет <link rel="canonical">');
  if (!/<meta\s+name="viewport"[^>]*viewport-fit=cover/i.test(html)) warnings.push('viewport без viewport-fit=cover — safe-area не сработает');

  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  if (!jsonLd.length) errors.push('Нет JSON-LD графа');
  for (const block of jsonLd) {
    try {
      const parsed = JSON.parse(block[1]);
      const types = JSON.stringify(parsed);
      for (const need of ['WebPage', 'BreadcrumbList', 'LocalBusiness']) {
        if (!types.includes(need)) warnings.push(`В JSON-LD нет узла «${need}»`);
      }
    } catch {
      errors.push('JSON-LD не парсится — поисковик выбросит весь граф');
    }
  }

  const words = (html.replace(/<[^>]+>/g, ' ').match(/[\p{L}\p{N}]+/gu) ?? []).length;
  if (words < 180) warnings.push(`Видимого текста ${words} слов — для коммерческой страницы мало (нужно 400+)`);

  const internalLinks = count(/<a\b[^>]*href="\/(?!\/)/gi);
  if (internalLinks === 0) warnings.push('Нет ни одной внутренней ссылки на абсолютных путях');

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    stats: {
      h1,
      images: imgs.length,
      imagesWithAlt: withAlt,
      imagesWithDimensions: withDims,
      lazyBelowFold: lazy,
      internalLinks,
      words
    }
  };
}
