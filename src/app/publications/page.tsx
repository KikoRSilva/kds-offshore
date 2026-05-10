import type { Metadata } from 'next';
import Link from 'next/link';
import { TEAM } from '@/content/team-detail';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';

const SITE_URL = 'https://kdsoffshore.pt';
const PAGE_TITLE = 'Publications';
const PAGE_DESCRIPTION =
  'Peer-reviewed publications by KDS Offshore principals across naval architecture, parametric rolling, time-domain seakeeping, wave-energy converters, ship manoeuvrability, and maritime decarbonisation. Most recent: EWTEC 2025 (Funchal), IMDC 2024 (Amsterdam), ICCAS 2024.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/publications/' },
  openGraph: {
    title: `${PAGE_TITLE} — KDS Offshore`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/publications/`,
    type: 'article',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KDS Offshore — Engineering the working ocean.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PAGE_TITLE} — KDS Offshore`,
    description: PAGE_DESCRIPTION,
    images: ['/og-image.png'],
  },
};

const SECTION_LABEL: React.CSSProperties = {
  fontSize: 11,
  color: 'var(--ink-faint)',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  marginBottom: 24,
};

interface FlatPublication {
  authorName: string;
  authorSlug: string;
  authorIndexInList: number;
  title: string;
  year: number;
  venue: string;
  citations?: number;
  url?: string;
}

const PUBLICATIONS: FlatPublication[] = TEAM.flatMap((m) =>
  m.publications.map((pub, i) => ({
    authorName: m.name,
    authorSlug: m.slug,
    authorIndexInList: i,
    title: pub.title,
    year: pub.year,
    venue: pub.venue,
    citations: pub.citations,
    url: pub.url,
  })),
).sort((a, b) => b.year - a.year);

const TOTAL_CITATIONS = TEAM.reduce(
  (s, m) => s + (m.publicationStats?.totalCitations ?? 0),
  0,
);
const PRIMARY_AUTHOR = TEAM[0];
const YEAR_MIN = Math.min(...PUBLICATIONS.map((p) => p.year));
const YEAR_MAX = Math.max(...PUBLICATIONS.map((p) => p.year));

function extractDoi(url: string | undefined): string | undefined {
  if (!url) return undefined;
  const match = url.match(/doi\.org\/(.+)$/);
  return match ? match[1] : undefined;
}

const COLLECTION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${SITE_URL}/publications/#collection`,
  url: `${SITE_URL}/publications/`,
  name: `${PAGE_TITLE} — KDS Offshore`,
  description: PAGE_DESCRIPTION,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
  mainEntity: {
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: PUBLICATIONS.length,
    itemListElement: PUBLICATIONS.map((pub, i) => {
      const doi = extractDoi(pub.url);
      return {
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'ScholarlyArticle',
          // Same canonical @id as on the team slug page so AI engines and
          // structured-data crawlers recognise it as the same entity.
          '@id': `${SITE_URL}/team/${pub.authorSlug}/#publication-${pub.authorIndexInList + 1}`,
          name: pub.title,
          headline: pub.title,
          datePublished: String(pub.year),
          isPartOf: { '@type': 'CreativeWork', name: pub.venue },
          author: { '@id': `${SITE_URL}/team/${pub.authorSlug}/#person` },
          inLanguage: 'en',
          ...(pub.url ? { url: pub.url } : {}),
          ...(doi
            ? {
                identifier: {
                  '@type': 'PropertyValue',
                  propertyID: 'doi',
                  value: doi,
                },
              }
            : {}),
        },
      };
    }),
  },
};

export default function PublicationsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Publications', path: '/publications/' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(COLLECTION_JSONLD) }}
      />

      {/* HERO */}
      <section
        className="sonar-bg"
        style={{
          padding: '100px 48px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div className="kds-mono" style={SECTION_LABEL}>
            Publications · {YEAR_MIN}–{YEAR_MAX}
          </div>
          <h1
            className="kds-display"
            aria-label="Peer-reviewed work."
            style={{
              fontSize: 'clamp(56px, 8vw, 144px)',
              margin: 0,
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
            }}
          >
            Peer-reviewed{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              work.
            </span>
          </h1>
          <p
            className="kds-sans"
            style={{
              fontSize: 19,
              color: 'var(--ink-dim)',
              lineHeight: 1.55,
              marginTop: 40,
              maxWidth: 760,
            }}
          >
            Selected publications by KDS Offshore principals across naval
            architecture, time-domain seakeeping, parametric rolling, wave-energy
            converters, ship manoeuvrability, and maritime decarbonisation. The
            full list and current citation counts are on{' '}
            <a
              href="https://scholar.google.pt/citations?user=K6-RZXQAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}
            >
              Google Scholar
            </a>
            .
          </p>

          {PRIMARY_AUTHOR.publicationStats && (
            <div
              style={{
                marginTop: 56,
                paddingTop: 32,
                borderTop: '1px solid var(--line)',
                display: 'flex',
                gap: 56,
                flexWrap: 'wrap',
              }}
            >
              {[
                { n: PUBLICATIONS.length, l: 'Selected publications' },
                { n: TOTAL_CITATIONS, l: 'Total citations' },
                {
                  n: PRIMARY_AUTHOR.publicationStats.hIndex,
                  l: 'h-index',
                },
                {
                  n: PRIMARY_AUTHOR.publicationStats.i10Index,
                  l: 'i10-index',
                },
              ].map((s) => (
                <div
                  key={s.l}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 12,
                  }}
                >
                  <span
                    className="kds-display"
                    style={{
                      fontSize: 36,
                      fontVariantNumeric: 'tabular-nums',
                      fontWeight: 400,
                    }}
                  >
                    {s.n}
                  </span>
                  <span
                    className="kds-mono"
                    style={{
                      fontSize: 11,
                      color: 'var(--ink-faint)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIST */}
      <section style={{ padding: '80px 48px 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="kds-mono" style={SECTION_LABEL}>
            Sorted · newest first
          </div>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {PUBLICATIONS.map((pub, i) => (
              <li
                key={`${pub.authorSlug}-${pub.authorIndexInList}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr 200px 80px 80px',
                  gap: 24,
                  padding: '26px 0',
                  borderBottom: '1px solid var(--line)',
                  alignItems: 'baseline',
                }}
              >
                <span
                  className="kds-mono"
                  style={{
                    fontSize: 11,
                    color: 'var(--ink-faint)',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  ·{String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div
                    className="kds-display"
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      color: 'var(--ink)',
                      lineHeight: 1.3,
                    }}
                  >
                    {pub.url ? (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'inherit',
                          textDecoration: 'none',
                          borderBottom: '1px solid var(--line-2)',
                          paddingBottom: 2,
                        }}
                      >
                        {pub.title}{' '}
                        <span
                          className="kds-mono"
                          style={{ color: 'var(--accent)', fontSize: 13 }}
                        >
                          ↗
                        </span>
                      </a>
                    ) : (
                      pub.title
                    )}
                  </div>
                  <div
                    className="kds-sans"
                    style={{
                      fontSize: 14,
                      color: 'var(--ink-dim)',
                      marginTop: 6,
                      lineHeight: 1.4,
                    }}
                  >
                    {pub.venue}
                  </div>
                </div>
                <Link
                  href={`/team/${pub.authorSlug}/`}
                  className="kds-mono"
                  style={{
                    fontSize: 12,
                    color: 'var(--ink-dim)',
                    letterSpacing: '0.12em',
                  }}
                >
                  {pub.authorName}
                </Link>
                <span
                  className="kds-mono"
                  style={{
                    fontSize: 11,
                    color: 'var(--ink-faint)',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {pub.year}
                </span>
                <span
                  className="kds-mono"
                  style={{
                    fontSize: 11,
                    color: 'var(--ink-dim)',
                    fontVariantNumeric: 'tabular-nums',
                    textAlign: 'right',
                  }}
                >
                  {pub.citations ? `${pub.citations} cites` : ''}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* NOTE / CTA */}
      <section
        style={{
          padding: '60px 48px 100px',
          background: 'var(--bg-2)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="kds-mono" style={SECTION_LABEL}>
            ✦ A note on this list
          </div>
          <p
            className="kds-sans"
            style={{
              fontSize: 17,
              color: 'var(--ink-dim)',
              lineHeight: 1.7,
              maxWidth: 720,
              margin: '0 0 24px',
            }}
          >
            This page lists a curated subset of peer-reviewed work, ordered by
            year. Citation counts come from Google Scholar at the most recent
            snapshot; the current number is always{' '}
            <a
              href="https://scholar.google.pt/citations?user=K6-RZXQAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}
            >
              one click away on Scholar
            </a>
            . For preprints, datasets, or simulation code referenced in a paper,
            write to us — we are happy to share materials under the appropriate
            licence.
          </p>
          <div
            style={{
              marginTop: 32,
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <Link
              href={`/team/${PRIMARY_AUTHOR.slug}/`}
              className="kds-sans"
              style={{
                padding: '14px 24px',
                background: 'var(--ink)',
                color: 'var(--bg)',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              About the founder →
            </Link>
            <Link
              href="/contact/"
              className="kds-sans"
              style={{
                padding: '14px 24px',
                border: '1px solid var(--line-2)',
                borderRadius: 999,
                fontSize: 14,
                color: 'var(--ink)',
              }}
            >
              Request a paper or model
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
