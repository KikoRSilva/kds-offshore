// Server component — emits BreadcrumbList JSON-LD inline so AI crawlers (which
// do not run JS) see it in the SSR HTML. Pass an ordered list of crumbs from
// root to current page; absolute URLs are computed against SITE_URL with the
// locale prefix applied automatically (default locale at root, others under
// /<locale>/).

import { routing, type Locale } from '@/i18n/routing';

const SITE_URL = 'https://kdsoffshore.pt';

export interface Crumb {
  name: string;
  /** Path relative to the site root, e.g. "/services/" or "/". */
  path: string;
}

interface Props {
  crumbs: Crumb[];
  /**
   * Locale of the current page. Accepts the raw string from `useLocale()`;
   * unrecognised values fall back to the default locale.
   */
  locale?: string;
}

function resolveLocale(raw: string | undefined): Locale {
  return routing.locales.includes(raw as Locale) ? (raw as Locale) : routing.defaultLocale;
}

function localeUrl(locale: Locale, path: string): string {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  // Path is expected to start with "/". Avoid double slashes when path === "/".
  if (path === '/') return `${SITE_URL}${prefix}/`;
  return `${SITE_URL}${prefix}${path}`;
}

export function BreadcrumbJsonLd({ crumbs, locale }: Props) {
  const resolved = resolveLocale(locale);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: localeUrl(resolved, c.path),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
