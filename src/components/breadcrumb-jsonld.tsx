// Server component — emits BreadcrumbList JSON-LD inline so AI crawlers (which
// do not run JS) see it in the SSR HTML. Pass an ordered list of crumbs from
// root to current page; absolute URLs are computed against SITE_URL.

const SITE_URL = 'https://kdsoffshore.pt';

export interface Crumb {
  name: string;
  /** Path relative to the site root, e.g. "/services/" or "/". */
  path: string;
}

interface Props {
  crumbs: Crumb[];
}

export function BreadcrumbJsonLd({ crumbs }: Props) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
