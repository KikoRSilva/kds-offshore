import type { MetadataRoute } from 'next';
import { SERVICE_SLUGS } from '@/content/services-detail';
import { TEAM_SLUGS } from '@/content/team-detail';
import { ARTICLES } from '@/content/journal-detail';
import { CASE_SLUGS } from '@/content/cases-detail';
import { routing, LOCALE_BCP47, type Locale } from '@/i18n/routing';

export const dynamic = 'force-static';

const BASE_URL = 'https://kdsoffshore.pt';

// `priority` and `changeFrequency` are ignored by Google but still consumed by
// Bing, Baidu, and several AI crawlers — kept for correctness.
// `lastModified` is emitted as ISO 8601 with timezone via Date.toISOString().
//
// Each canonical route is emitted once per locale. Every entry carries an
// `alternates.languages` map covering every locale + `x-default` so search
// engines can reconcile the bilingual graph.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  type Entry = {
    path: string;
    lastModified?: Date;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
  };

  const serviceRoutes: Entry[] = SERVICE_SLUGS.map((slug) => ({
    path: `/services/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const teamRoutes: Entry[] = TEAM_SLUGS.map((slug) => ({
    path: `/team/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const articleRoutes: Entry[] = ARTICLES.map((a) => ({
    path: `/journal/${a.slug}`,
    lastModified: new Date(a.dateModified),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const caseRoutes: Entry[] = CASE_SLUGS.map((slug) => ({
    path: `/work/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const routes: Entry[] = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    ...serviceRoutes,
    { path: '/work', changeFrequency: 'monthly', priority: 0.9 },
    ...caseRoutes,
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    ...teamRoutes,
    { path: '/journal', changeFrequency: 'weekly', priority: 0.8 },
    ...articleRoutes,
    { path: '/methods', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/glossary', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/publications', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/cookies', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/legal', changeFrequency: 'yearly', priority: 0.3 },
  ];

  return routes.flatMap((entry) => expandEntry(entry, now));
}

function expandEntry(
  { path, lastModified, changeFrequency, priority }: {
    path: string;
    lastModified?: Date;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
  },
  now: Date,
): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    routing.locales.map((loc) => [LOCALE_BCP47[loc], localeUrl(loc, path)]),
  );
  // x-default points to the canonical default-locale URL.
  const xDefault = localeUrl(routing.defaultLocale, path);

  return routing.locales.map((loc) => ({
    url: localeUrl(loc, path),
    lastModified: lastModified ?? now,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        ...languages,
        'x-default': xDefault,
      },
    },
  }));
}

function localeUrl(locale: Locale, path: string): string {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  return `${BASE_URL}${prefix}${path}/`;
}
