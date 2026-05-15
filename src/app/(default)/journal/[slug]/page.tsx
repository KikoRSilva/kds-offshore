import type { Metadata } from 'next';
import JournalArticleView, {
  ARTICLE_SLUGS,
  buildArticleMetadata,
} from '@/views/journal-detail-view';
import { routing } from '@/i18n/routing';

const LOCALE = routing.defaultLocale;

export function generateStaticParams() {
  return ARTICLE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildArticleMetadata(slug, LOCALE);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <JournalArticleView slug={slug} locale={LOCALE} />;
}
