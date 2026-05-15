import type { Metadata } from 'next';
import WorkCaseView, { CASE_SLUGS, buildCaseMetadata } from '@/views/work-detail-view';
import { routing } from '@/i18n/routing';

const LOCALE = routing.defaultLocale;

export function generateStaticParams() {
  return CASE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildCaseMetadata(slug, LOCALE);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <WorkCaseView slug={slug} locale={LOCALE} />;
}
