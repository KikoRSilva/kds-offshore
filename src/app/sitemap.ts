import type { MetadataRoute } from 'next';
import { SERVICE_SLUGS } from '@/content/services-detail';

export const dynamic = 'force-static';

const BASE_URL = 'https://kdsoffshore.pt';

// `priority` and `changeFrequency` are ignored by Google but still consumed by
// Bing, Baidu, and several AI crawlers — kept for correctness.
// `lastModified` is emitted as ISO 8601 with timezone via Date.toISOString().
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const serviceRoutes = SERVICE_SLUGS.map((slug) => ({
    path: `/services/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
  }> = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    ...serviceRoutes,
    { path: '/work', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/journal', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/cookies', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/legal', changeFrequency: 'yearly', priority: 0.3 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}/`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
