import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { fontVariables } from '@/lib/fonts';
import { buildOrgJsonLd } from '@/lib/org-jsonld';
import { LOCALE_BCP47, LOCALE_OG } from '@/i18n/routing';
import { SiteProvider } from '@/contexts/site-context';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import '../globals.css';

const LOCALE = 'pt' as const;
const SITE_URL = 'https://kdsoffshore.pt';

const SITE_TITLE_PT =
  'KDS Offshore — Arquitetura Naval & Engenharia Offshore para Descarbonização e Digitalização';
const SITE_DESCRIPTION_PT =
  'A KDS Offshore projeta navios, estruturas offshore e sistemas de energia, com foco em descarbonização e digitalização marítima. Arquitetura naval, engenharia offshore, hidrodinâmica, amarração e consultoria de gémeo digital, a partir de Lisboa, Portugal.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { template: '%s · KDS Offshore', default: SITE_TITLE_PT },
  description: SITE_DESCRIPTION_PT,
  keywords: [
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
  authors: [{ name: 'KDS Offshore' }],
  creator: 'KDS Offshore',
  publisher: 'KDS Offshore, Lda.',
  alternates: {
    canonical: '/',
    languages: {
      'pt-PT': '/',
      'en-GB': '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: LOCALE_OG[LOCALE],
    alternateLocale: LOCALE_OG.en,
    siteName: 'KDS Offshore',
    url: SITE_URL,
    title: SITE_TITLE_PT,
    description: SITE_DESCRIPTION_PT,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KDS Offshore — Arquitetura naval e engenharia offshore para descarbonização e digitalização.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE_PT,
    description: SITE_DESCRIPTION_PT,
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

export default async function DefaultLayout({ children }: { children: React.ReactNode }) {
  setRequestLocale(LOCALE);
  const messages = await getMessages({ locale: LOCALE });
  const orgJsonLd = buildOrgJsonLd(LOCALE);

  return (
    <html
      lang={LOCALE_BCP47[LOCALE]}
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
        <NextIntlClientProvider locale={LOCALE} messages={messages}>
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
