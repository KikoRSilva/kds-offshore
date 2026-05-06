import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  CASES,
  CASES_BY_SLUG,
  CASE_SLUGS,
  type CaseDetail,
} from '@/content/cases-detail';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';
import { ParallaxImageFrame } from '@/components/parallax-image-frame';
import { KDSImage } from '@/components/kds-image';

const SITE_URL = 'https://kdsoffshore.pt';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES_BY_SLUG[slug];
  if (!c) return {};

  const title = c.title;
  const description = c.description;

  return {
    title,
    description,
    alternates: { canonical: `/work/${slug}/` },
    openGraph: {
      title: `${c.title} — KDS Offshore`,
      description,
      url: `${SITE_URL}/work/${slug}/`,
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
      title: `${c.title} — KDS Offshore`,
      description,
      images: ['/og-image.png'],
    },
  };
}

const SECTION_LABEL: React.CSSProperties = {
  fontSize: 11,
  color: 'var(--ink-faint)',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  marginBottom: 24,
};

const PROSE: React.CSSProperties = {
  fontSize: 17,
  lineHeight: 1.7,
  color: 'var(--ink-dim)',
  maxWidth: 760,
  margin: '0 0 20px',
};

const H2: React.CSSProperties = {
  fontSize: 'clamp(28px, 3vw, 44px)',
  fontWeight: 300,
  letterSpacing: '-0.01em',
  margin: '0 0 32px',
  color: 'var(--ink)',
  lineHeight: 1.05,
};

const PENDING_NOTE: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains), monospace',
  fontSize: 12,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--ink-faint)',
  border: '1px dashed var(--line-2)',
  borderRadius: 4,
  padding: '16px 20px',
  maxWidth: 760,
  background: 'var(--bg-2)',
};

function PendingStub({ note }: { note: string }) {
  return (
    <div className="kds-mono" style={PENDING_NOTE} role="note">
      ✦ Pending — {note}
    </div>
  );
}

function buildJsonLd(c: CaseDetail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${SITE_URL}/work/${c.slug}/#case`,
    name: c.title,
    description: c.description,
    url: `${SITE_URL}/work/${c.slug}/`,
    dateCreated: c.year,
    keywords: c.tag,
    about: c.category,
    sourceOrganization: { '@id': `${SITE_URL}/#organization` },
    locationCreated: { '@type': 'Place', name: c.location },
    mentions: [{ '@type': 'Organization', name: c.client }],
    isPartOf: { '@id': `${SITE_URL}/work/#collection` },
  };
}

export default async function WorkCasePage({ params }: PageProps) {
  const { slug } = await params;
  const c = CASES_BY_SLUG[slug];
  if (!c) notFound();

  const jsonLd = buildJsonLd(c);

  // Build a "next case" suggestion (wraps to first when at the end).
  const idx = CASES.findIndex((x) => x.slug === slug);
  const next = CASES[(idx + 1) % CASES.length];

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work/' },
          { name: c.title, path: `/work/${c.slug}/` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        {/* Hero */}
        <section
          className="sonar-bg"
          style={{
            padding: '100px 48px 60px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div
              className="kds-mono"
              style={{
                fontSize: 11,
                color: 'var(--ink-dim)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}
            >
              <Link href="/" style={{ color: 'var(--ink-dim)' }}>
                Home
              </Link>{' '}
              ·{' '}
              <Link href="/work/" style={{ color: 'var(--ink-dim)' }}>
                Work
              </Link>{' '}
              · {c.tag}
            </div>
            <h1
              className="kds-display"
              style={{
                fontSize: 'clamp(40px, 5vw, 76px)',
                margin: 0,
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
              }}
            >
              {c.title}
            </h1>
            {c.subtitle && (
              <p
                className="kds-sans"
                style={{
                  fontSize: 19,
                  color: 'var(--ink-dim)',
                  lineHeight: 1.55,
                  marginTop: 28,
                  maxWidth: 760,
                }}
              >
                {c.subtitle}
              </p>
            )}
            <div
              className="kds-mono"
              style={{
                marginTop: 36,
                paddingTop: 20,
                borderTop: '1px solid var(--line)',
                display: 'flex',
                gap: 28,
                flexWrap: 'wrap',
                fontSize: 12,
                color: 'var(--ink-dim)',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
              }}
            >
              <span>
                Client ·{' '}
                <span style={{ color: 'var(--ink)' }}>{c.client}</span>
              </span>
              <span>
                Year ·{' '}
                <span style={{ color: 'var(--ink)' }}>{c.year}</span>
              </span>
              <span>
                Location ·{' '}
                <span style={{ color: 'var(--ink)' }}>{c.location}</span>
              </span>
              <span>
                Note ·{' '}
                <span style={{ color: 'var(--accent)' }}>{c.stat}</span>
              </span>
            </div>
          </div>
        </section>

        {/* Hero image with parallax */}
        <section style={{ padding: '0 48px', marginTop: 16 }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <ParallaxImageFrame aspect="21/9" style={{ borderRadius: 4 }}>
              <KDSImage
                src={c.heroSrc}
                alt={c.heroAlt}
                aspect="21/9"
                priority
                zoom={false}
              />
            </ParallaxImageFrame>
          </div>
        </section>

        {/* Lede / description */}
        <section style={{ padding: '60px 48px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              ✦ At a glance
            </div>
            <p className="kds-sans" style={PROSE}>
              {c.description}
            </p>
          </div>
        </section>

        {/* The brief */}
        <section style={{ padding: '60px 48px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              01 · The brief
            </div>
            <h2 className="kds-display" style={H2}>
              What the client asked.
            </h2>
            {c.brief ? (
              <p className="kds-sans" style={PROSE}>
                {c.brief}
              </p>
            ) : (
              <PendingStub note="brief copy to be supplied by KDS." />
            )}
          </div>
        </section>

        {/* Constraints */}
        {(c.constraints || !c.brief) && (
          <section style={{ padding: '60px 48px 0' }}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <div className="kds-mono" style={SECTION_LABEL}>
                02 · Constraints
              </div>
              <h2 className="kds-display" style={H2}>
                What shaped the work.
              </h2>
              {c.constraints && c.constraints.length > 0 ? (
                <ul
                  className="kds-sans"
                  style={{
                    ...PROSE,
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {c.constraints.map((line, i) => (
                    <li
                      key={i}
                      style={{
                        padding: '14px 0',
                        borderTop: '1px solid var(--line)',
                      }}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <PendingStub note="constraints (vessel / site / regulatory) to be added." />
              )}
            </div>
          </section>
        )}

        {/* Approach */}
        <section style={{ padding: '60px 48px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              03 · Approach
            </div>
            <h2 className="kds-display" style={H2}>
              How we tackled it.
            </h2>
            {c.approach && c.approach.length > 0 ? (
              <ol
                className="kds-sans"
                style={{
                  ...PROSE,
                  paddingLeft: 22,
                  margin: 0,
                }}
              >
                {c.approach.map((step, i) => (
                  <li key={i} style={{ marginBottom: 14 }}>
                    {step}
                  </li>
                ))}
              </ol>
            ) : (
              <PendingStub note="approach / methodology steps to be added." />
            )}
          </div>
        </section>

        {/* Deliverables */}
        <section style={{ padding: '60px 48px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              04 · What we delivered
            </div>
            <h2 className="kds-display" style={H2}>
              The package.
            </h2>
            {c.deliverables && c.deliverables.length > 0 ? (
              <ul
                className="kds-sans"
                style={{
                  ...PROSE,
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}
              >
                {c.deliverables.map((d, i) => (
                  <li
                    key={i}
                    style={{
                      padding: '14px 0',
                      borderTop: '1px solid var(--line)',
                    }}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            ) : (
              <PendingStub note="deliverables list to be added." />
            )}
          </div>
        </section>

        {/* Outcomes */}
        <section style={{ padding: '60px 48px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              05 · Outcome
            </div>
            <h2 className="kds-display" style={H2}>
              What it produced.
            </h2>
            {c.outcomes && c.outcomes.length > 0 ? (
              <div style={{ display: 'grid', gap: 24, maxWidth: 760 }}>
                {c.outcomes.map((o, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '20px 24px',
                      border: '1px solid var(--line)',
                      borderRadius: 4,
                      background: 'var(--surface)',
                    }}
                  >
                    <div
                      className="kds-display"
                      style={{
                        fontSize: 28,
                        fontWeight: 400,
                        color: 'var(--accent)',
                        margin: 0,
                        lineHeight: 1.1,
                      }}
                    >
                      {o.headline}
                    </div>
                    {o.detail && (
                      <p
                        className="kds-sans"
                        style={{
                          fontSize: 15,
                          color: 'var(--ink-dim)',
                          lineHeight: 1.6,
                          marginTop: 12,
                          marginBottom: 0,
                        }}
                      >
                        {o.detail}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <PendingStub note="outcome metrics / headline numbers to be added." />
            )}
          </div>
        </section>

        {/* Lessons */}
        {(c.lessons || !c.outcomes) && (
          <section style={{ padding: '60px 48px 0' }}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <div className="kds-mono" style={SECTION_LABEL}>
                06 · Lessons
              </div>
              <h2 className="kds-display" style={H2}>
                What we took away.
              </h2>
              {c.lessons ? (
                <p className="kds-sans" style={PROSE}>
                  {c.lessons}
                </p>
              ) : (
                <PendingStub note="lessons / commentary to be added." />
              )}
            </div>
          </section>
        )}

        {/* References */}
        {c.references && c.references.length > 0 && (
          <section style={{ padding: '60px 48px 0' }}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <div className="kds-mono" style={SECTION_LABEL}>
                07 · References
              </div>
              <h2 className="kds-display" style={H2}>
                Further reading.
              </h2>
              <ul
                className="kds-sans"
                style={{
                  ...PROSE,
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}
              >
                {c.references.map((r, i) => (
                  <li
                    key={i}
                    style={{
                      padding: '14px 0',
                      borderTop: '1px solid var(--line)',
                    }}
                  >
                    {r.url ? (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--accent)' }}
                      >
                        {r.label}
                      </a>
                    ) : (
                      r.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Confidentiality / CTA */}
        <section
          style={{
            padding: '80px 48px 100px',
            marginTop: 80,
            borderTop: '1px solid var(--line)',
          }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              ✦ A note on confidentiality
            </div>
            <p
              className="kds-display"
              style={{
                fontSize: 'clamp(22px, 2.2vw, 32px)',
                margin: 0,
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.4,
                color: 'var(--ink-dim)',
              }}
            >
              Most of what we do never appears on this page. References,
              technical drawings, and full reports are{' '}
              <span style={{ color: 'var(--ink)', fontStyle: 'normal' }}>
                available on request,
              </span>{' '}
              under NDA where required.
            </p>
            <div
              style={{
                marginTop: 40,
                display: 'flex',
                gap: 16,
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/contact/"
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
                Brief a similar engagement →
              </Link>
              <Link
                href={`/work/${next.slug}/`}
                className="kds-sans"
                style={{
                  padding: '14px 24px',
                  border: '1px solid var(--line-2)',
                  borderRadius: 999,
                  fontSize: 14,
                  color: 'var(--ink)',
                }}
              >
                Next case → {next.title}
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
