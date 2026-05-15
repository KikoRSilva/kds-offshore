import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { fontVariables } from '@/lib/fonts';
import { buildOrgJsonLd } from '@/lib/org-jsonld';
import { routing, LOCALE_BCP47, LOCALE_OG, type Locale } from '@/i18n/routing';
import { SiteProvider } from '@/contexts/site-context';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import '../globals.css';

const SITE_URL = 'https://kdsoffshore.pt';

const SITE_TITLE: Record<Locale, string> = {
  en: 'KDS Offshore — Naval Architecture & Offshore Engineering for Decarbonisation & Digitalisation',
  pt: 'KDS Offshore — Arquitetura Naval & Engenharia Offshore para Descarbonização e Digitalização',
};

const SITE_DESCRIPTION: Record<Locale, string> = {
  en: 'KDS Offshore designs vessels, offshore structures, and energy systems, with a focus on maritime decarbonisation and digitalisation. Naval architecture, offshore engineering, hydrodynamics, mooring, and digital-twin consultancy from Lisbon, Portugal.',
  pt: 'A KDS Offshore projeta navios, estruturas offshore e sistemas de energia, com foco em descarbonização e digitalização marítima. Arquitetura naval, engenharia offshore, hidrodinâmica, amarração e consultoria de gémeo digital, a partir de Lisboa, Portugal.',
};

const SITE_OG_ALT: Record<Locale, string> = {
  en: 'KDS Offshore — Naval architecture and offshore engineering for decarbonisation and digitalisation.',
  pt: 'KDS Offshore — Arquitetura naval e engenharia offshore para descarbonização e digitalização.',
};

const SITE_KEYWORDS: Record<Locale, string[]> = {
  en: [
    'naval architecture',
    'offshore engineering',
    'maritime decarbonisation',
    'maritime digitalisation',
    'ship digitalisation',
    'digital twin',
    'smart shipping',
    'hydrodynamics',
    'CFD',
    'manoeuvrability',
    'mooring',
    'energy transition',
    'blue economy',
    'Portugal',
    'Lisbon',
  ],
  pt: [
    'arquitetura naval',
    'engenharia offshore',
    'descarbonização marítima',
    'digitalização marítima',
    'gémeo digital',
    'hidrodinâmica',
    'CFD',
    'manobrabilidade',
    'amarração',
    'transição energética',
    'economia azul',
    'Portugal',
    'Lisboa',
  ],
};

// Exclude the default locale — it's served by app/(default)/ at root.
// This prevents Next from generating duplicate /pt/ routes.
export function generateStaticParams() {
  return routing.locales
    .filter((locale) => locale !== routing.defaultLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;

  const canonicalPath = `/${locale}`;
  const alternateOg = locale === 'pt' ? LOCALE_OG.en : LOCALE_OG.pt;

  return {
    metadataBase: new URL(SITE_URL),
    title: { template: '%s · KDS Offshore', default: SITE_TITLE[locale] },
    description: SITE_DESCRIPTION[locale],
    keywords: SITE_KEYWORDS[locale],
    authors: [{ name: 'KDS Offshore' }],
    creator: 'KDS Offshore',
    publisher: 'KDS Offshore, Lda.',
    alternates: {
      canonical: canonicalPath,
      languages: {
        'pt-PT': '/',
        'en-GB': '/en',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: LOCALE_OG[locale],
      alternateLocale: alternateOg,
      siteName: 'KDS Offshore',
      url: `${SITE_URL}${canonicalPath}/`,
      title: SITE_TITLE[locale],
      description: SITE_DESCRIPTION[locale],
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: SITE_OG_ALT[locale],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_TITLE[locale],
      description: SITE_DESCRIPTION[locale],
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  const locale = raw as Locale;

  setRequestLocale(locale);
  const messages = await getMessages({ locale });
  const orgJsonLd = buildOrgJsonLd(locale);

  return (
    <html
      lang={LOCALE_BCP47[locale]}
      data-theme="dark"
      className={fontVariables}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SiteProvider>
            <Nav />
            <main>{children}</main>
            <Footer />
          </SiteProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
