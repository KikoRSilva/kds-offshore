import type { Metadata } from 'next';
import { Spectral, JetBrains_Mono, Inter_Tight } from 'next/font/google';
import './globals.css';
import { SiteProvider } from '@/contexts/site-context';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spectral',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://kdsoffshore.pt';
const SITE_TITLE =
  'KDS Offshore — Naval Architecture & Offshore Engineering for Decarbonisation & Digitalisation';
const SITE_DESCRIPTION =
  'KDS Offshore designs vessels, offshore structures, and energy systems, with a focus on maritime decarbonisation and digitalisation. Naval architecture, offshore engineering, hydrodynamics, mooring, and digital-twin consultancy from Lisbon, Portugal.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s · KDS Offshore',
    default: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  keywords: [
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
  authors: [{ name: 'KDS Offshore' }],
  creator: 'KDS Offshore',
  publisher: 'KDS Offshore, Lda.',
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: 'pt_PT',
    siteName: 'KDS Offshore',
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KDS Offshore — Naval architecture and offshore engineering for decarbonisation and digitalisation.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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

const ORGANIZATION_JSONLD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${SITE_URL}/#organization`,
      name: 'KDS Offshore',
      legalName: 'KDS Offshore, Lda.',
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        '@id': `${SITE_URL}/#logo`,
        url: `${SITE_URL}/logo.png`,
        contentUrl: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
        caption: 'KDS Offshore',
      },
      image: { '@id': `${SITE_URL}/#logo` },
      description: SITE_DESCRIPTION,
      slogan: 'Naval architecture and offshore engineering for decarbonisation and digitalisation.',
      foundingDate: '2016',
      foundingLocation: {
        '@type': 'Place',
        name: 'Lisbon, Portugal',
      },
      founder: {
        '@type': 'Person',
        '@id': `${SITE_URL}/about/#sergio-ribeiro-e-silva`,
        name: 'Sérgio Ribeiro e Silva',
        jobTitle: 'Principal Naval Architect',
        alumniOf: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'Instituto Superior Técnico',
            url: 'https://tecnico.ulisboa.pt/',
          },
          {
            '@type': 'CollegeOrUniversity',
            name: 'University College London',
            url: 'https://www.ucl.ac.uk/',
          },
        ],
        knowsAbout: [
          'Naval architecture',
          'Offshore engineering',
          'Maritime decarbonisation',
          'Maritime digitalisation',
          'Digital twin',
          'Hydrodynamics',
          'CFD',
          'Ship manoeuvrability',
          'Mooring system design',
        ],
      },
      taxID: '514248091',
      vatID: 'PT514248091',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Ernesto Veiga de Oliveira',
        addressLocality: 'Oeiras',
        addressRegion: 'Lisboa',
        addressCountry: 'PT',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 38.6979,
        longitude: -9.3088,
      },
      areaServed: [
        { '@type': 'Country', name: 'Portugal' },
        { '@type': 'Country', name: 'Spain' },
        { '@type': 'Country', name: 'Ireland' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Place', name: 'Atlantic façade' },
      ],
      telephone: '+351-21-385-4212',
      email: 'geral@kdsoffshore.pt',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: '+351-21-385-4212',
          email: 'geral@kdsoffshore.pt',
          areaServed: ['PT', 'ES', 'IE', 'GB'],
          availableLanguage: ['en', 'pt'],
        },
      ],
      sameAs: ['https://www.linkedin.com/company/kds-offshore'],
      knowsAbout: [
        'Naval architecture',
        'Offshore engineering',
        'Maritime decarbonisation',
        'Maritime digitalisation',
        'Ship digitalisation',
        'Digital twin',
        'Smart shipping',
        'Energy transition',
        'Hydrodynamic optimisation',
        'Ship manoeuvrability prediction',
        'Mooring system design',
        'Vessel conversion engineering',
        'CFD',
        '3D geometrical modelling',
        'Supervision of new constructions',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Engineering services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Naval Architecture & Offshore Engineering Design',
              serviceType: 'Naval architecture',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Maritime Decarbonisation Consultancy',
              serviceType: 'Decarbonisation',
              description:
                'Pathways to GHG reduction for vessels and offshore assets, including alternative fuels, energy efficiency, and FuelEU Maritime/IMO compliance.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Maritime Digitalisation & Digital Twin',
              serviceType: 'Digitalisation',
              description:
                'Digital-twin development, data-driven performance monitoring, and digitalisation strategy for vessels, fleets, and offshore operations.',
            },
          },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hydrodynamic Optimisation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ship Manoeuvrability Prediction' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mooring System Design' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vessel Conversion Engineering' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3D Geometrical Modelling' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supervision of New Constructions' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'KDS Offshore',
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: ['en-GB', 'pt-PT'],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      data-theme="dark"
      className={`${spectral.variable} ${jetbrainsMono.variable} ${interTight.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
        />
      </head>
      <body>
        <SiteProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
