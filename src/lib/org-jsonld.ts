import type { Locale } from '@/i18n/routing';
import { LOCALE_BCP47 } from '@/i18n/routing';

const SITE_URL = 'https://kdsoffshore.pt';

const SITE_DESCRIPTIONS: Record<Locale, string> = {
  en: 'KDS Offshore designs vessels, offshore structures, and energy systems, with a focus on maritime decarbonisation and digitalisation. Naval architecture, offshore engineering, hydrodynamics, mooring, and digital-twin consultancy from Lisbon, Portugal.',
  pt: 'A KDS Offshore projeta navios, estruturas offshore e sistemas de energia, com foco em descarbonização e digitalização marítima. Arquitetura naval, engenharia offshore, hidrodinâmica, amarração e consultoria de gémeo digital, a partir de Lisboa, Portugal.',
};

const SITE_SLOGANS: Record<Locale, string> = {
  en: 'Naval architecture and offshore engineering for decarbonisation and digitalisation.',
  pt: 'Arquitetura naval e engenharia offshore para descarbonização e digitalização.',
};

export function buildOrgJsonLd(locale: Locale) {
  const localeUrl = locale === 'pt' ? `${SITE_URL}/` : `${SITE_URL}/${locale}/`;

  return {
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
        description: SITE_DESCRIPTIONS[locale],
        slogan: SITE_SLOGANS[locale],
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
          streetAddress: 'Rua Ernesto Veiga de Oliveira, nº 22, lote 8, R/C Esq.',
          postalCode: '2780-052',
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
        telephone: '+351-929-111-655',
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
            telephone: '+351-929-111-655',
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
        '@id': `${localeUrl}#website`,
        url: localeUrl,
        name: 'KDS Offshore',
        description: SITE_DESCRIPTIONS[locale],
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: LOCALE_BCP47[locale],
      },
    ],
  };
}
