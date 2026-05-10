import type { MetadataRoute } from 'next';
import { SERVICE_SLUGS } from '@/content/services-detail';
import { TEAM_SLUGS } from '@/content/team-detail';
import { ARTICLES } from '@/content/journal-detail';
import { CASE_SLUGS } from '@/content/cases-detail';

export const dynamic = 'force-static';

const BASE_URL = 'https://kdsoffshore.pt';

// `priority` and `changeFrequency` are ignored by Google but still consumed by
// Bing, Baidu, and several AI crawlers — kept for correctness.
// `lastModified` is emitted as ISO 8601 with timezone via Date.toISOString().
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

  return routes.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}/`,
    lastModified: lastModified ?? now,
    changeFrequency,
    priority,
  }));
}
