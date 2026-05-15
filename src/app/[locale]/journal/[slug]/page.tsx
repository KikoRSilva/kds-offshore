import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import JournalArticleView, {
  ARTICLE_SLUGS,
  buildArticleMetadata,
} from '@/views/journal-detail-view';
import { routing, type Locale } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales
    .filter((l) => l !== routing.defaultLocale)
    .flatMap((locale) => ARTICLE_SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  return buildArticleMetadata(slug, raw as Locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw as Locale);
  return <JournalArticleView slug={slug} locale={raw as Locale} />;
}
