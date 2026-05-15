import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ServiceDetailView, {
  SERVICE_SLUGS,
  buildServiceMetadata,
} from '@/views/services-detail-view';
import { routing, type Locale } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales
    .filter((l) => l !== routing.defaultLocale)
    .flatMap((locale) => SERVICE_SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildServiceMetadata(slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw as Locale);
  return <ServiceDetailView slug={slug} />;
}
