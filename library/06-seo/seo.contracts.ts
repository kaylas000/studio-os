// library/06-seo/seo.contracts.ts

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

export interface PageSEOContract {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  openGraph: OpenGraphMetadata;
  breadcrumbs: BreadcrumbItem[];
  schemaGraph?: Record<string, any>[];
}

export function validateSEOContract(contract: PageSEOContract): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!contract.title || contract.title.length < 30 || contract.title.length > 70) {
    errors.push(`Неоптимальная длина title: ${contract.title?.length || 0} симв. (нужно 30-70)`);
  }

  if (!contract.description || contract.description.length < 70 || contract.description.length > 165) {
    errors.push(`Неоптимальная длина description: ${contract.description?.length || 0} симв. (нужно 70-165)`);
  }

  if (!contract.canonical || !contract.canonical.startsWith('http')) {
    errors.push('Canonical URL обязан быть абсолютным валидным URL');
  }

  if (!contract.openGraph?.image?.url) {
    errors.push('Отсутствует OG Image URL');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
