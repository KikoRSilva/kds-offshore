import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { getLlmsTxt } from '@/lib/llms-txt';
import { routing, type Locale } from '@/i18n/routing';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return routing.locales
    .filter((l) => l !== routing.defaultLocale)
    .map((locale) => ({ locale }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();

  return new Response(getLlmsTxt(raw as Locale), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
