import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { TEAM, TEAM_BY_SLUG, TEAM_SLUGS, pickTeamView } from '@/content/team-detail';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';
import { ParallaxImageFrame } from '@/components/parallax-image-frame';

const SITE_URL = 'https://kdsoffshore.pt';

export { TEAM_SLUGS };

export async function buildTeamMetadata(slug: string, locale: 'en' | 'pt'): Promise<Metadata> {
  const raw = TEAM_BY_SLUG[slug];
  if (!raw) return {};
  const m = pickTeamView(raw, locale);
  const canonical = locale === 'pt' ? `/team/${slug}/` : `/en/team/${slug}/`;
  const url = locale === 'pt' ? `${SITE_URL}/team/${slug}/` : `${SITE_URL}/en/team/${slug}/`;

  return {
    title: `${m.name} — ${m.jobTitle}`,
    description: m.shortBio,
    alternates: { canonical },
    openGraph: {
      title: `${m.name} — KDS Offshore`,
      description: m.shortBio,
      url,
      type: 'profile',
      images: [{ url: m.photoSrc, alt: m.photoAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${m.name} — KDS Offshore`,
      description: m.shortBio,
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
  lineHeight: 1.75,
  color: 'var(--ink-dim)',
  maxWidth: 720,
  margin: '0 0 22px',
};

const H2: React.CSSProperties = {
  fontSize: 'clamp(28px, 3vw, 44px)',
  fontWeight: 300,
  letterSpacing: '-0.01em',
  margin: '0 0 32px',
  color: 'var(--ink)',
  lineHeight: 1.05,
};

export default function TeamMemberView({ slug, locale }: { slug: string; locale: 'en' | 'pt' }) {
  const raw = TEAM_BY_SLUG[slug];
  if (!raw) notFound();
  const m = pickTeamView(raw, locale);

  // If the publication URL is a DOI link, surface the DOI as a structured
  // identifier (PropertyValue propertyID: 'doi') so AI engines can resolve
  // it against CrossRef / OpenAlex / Scopus.
  const extractDoi = (url: string | undefined): string | undefined => {
    if (!url) return undefined;
    const match = url.match(/doi\.org\/(.+)$/);
    return match ? match[1] : undefined;
  };

  const personEntity = {
    '@type': 'Person',
    '@id': `${SITE_URL}/team/${slug}/#person`,
    mainEntityOfPage: `${SITE_URL}/team/${slug}/`,
    name: m.name,
    givenName: m.givenName,
    familyName: m.familyName,
    honorificPrefix: m.honorificPrefix,
    honorificSuffix: m.honorificSuffix,
    jobTitle: m.jobTitle,
    description: m.shortBio,
    image: `${SITE_URL}${m.photoSrc}`,
    worksFor: { '@id': `${SITE_URL}/#organization` },
    alumniOf: m.alumniOf.map((a) => ({
      '@type': 'CollegeOrUniversity',
      name: a.name,
      url: a.url,
    })),
    affiliation: m.affiliations.map((a) => ({
      '@type': 'Organization',
      name: a.name,
      ...(a.url ? { url: a.url } : {}),
    })),
    knowsAbout: m.knowsAbout,
    knowsLanguage: m.knowsLanguage,
    sameAs: m.sameAs,
    hasCredential: m.credentials.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: c.split(',')[0],
      name: c,
    })),
    subjectOf: m.publications.map((_, i) => ({
      '@id': `${SITE_URL}/team/${slug}/#publication-${i + 1}`,
    })),
  };

  const articleEntities = m.publications.map((pub, i) => {
    const doi = extractDoi(pub.url);
    return {
      '@type': 'ScholarlyArticle',
      '@id': `${SITE_URL}/team/${slug}/#publication-${i + 1}`,
      name: pub.title,
      headline: pub.title,
      datePublished: String(pub.year),
      isPartOf: { '@type': 'CreativeWork', name: pub.venue },
      author: { '@id': `${SITE_URL}/team/${slug}/#person` },
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
    };
  });

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [personEntity, ...articleEntities],
  };

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about/' },
          { name: m.name, path: `/team/${slug}/` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* HERO */}
      <section
        className="sonar-bg"
        style={{ padding: '100px 48px 60px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <nav
            className="kds-mono"
            aria-label="Breadcrumb"
            style={{
              fontSize: 11,
              color: 'var(--ink-faint)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: 32,
            }}
          >
            <Link href="/" style={{ color: 'var(--ink-dim)' }}>
              Home
            </Link>
            <span style={{ margin: '0 12px' }}>·</span>
            <Link href="/about/" style={{ color: 'var(--ink-dim)' }}>
              About
            </Link>
            <span style={{ margin: '0 12px' }}>·</span>
            <span>Team</span>
          </nav>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '320px 1fr',
              gap: 56,
              alignItems: 'start',
            }}
          >
            <ParallaxImageFrame
              aspect="4/5"
              style={{ borderRadius: 4, background: 'var(--bg-2)' }}
            >
              <Image
                src={m.photoSrc}
                alt={m.photoAlt}
                fill
                priority
                sizes="320px"
                style={{ objectFit: 'cover' }}
              />
            </ParallaxImageFrame>
            <div>
              <div className="kds-mono" style={SECTION_LABEL}>
                Team · Founder
              </div>
              <h1
                className="kds-display"
                aria-label={m.name}
                style={{
                  fontSize: 'clamp(40px, 5vw, 80px)',
                  margin: 0,
                  fontWeight: 300,
                  lineHeight: 1.0,
                  letterSpacing: '-0.015em',
                }}
              >
                {m.name}
              </h1>
              <p
                className="kds-display"
                style={{
                  fontSize: 'clamp(18px, 2vw, 26px)',
                  color: 'var(--accent)',
                  margin: '24px 0 32px',
                  fontWeight: 300,
                  fontStyle: 'italic',
                }}
              >
                {m.jobTitle}
              </p>
              <p className="kds-sans" style={{ ...PROSE, fontSize: 18 }}>
                {m.shortBio}
              </p>
              <div
                className="kds-mono"
                style={{
                  marginTop: 32,
                  display: 'flex',
                  gap: 16,
                  flexWrap: 'wrap',
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                {m.sameAs.map((url) => {
                  const label = url.includes('linkedin') ? 'LinkedIn'
                    : url.includes('scholar.google') ? 'Google Scholar'
                    : url.includes('maretec') ? 'MARETEC'
                    : url.includes('tecnico.ulisboa') ? 'Instituto Superior Técnico'
                    : url.includes('orcid') ? 'ORCID'
                    : url.includes('researchgate') ? 'ResearchGate'
                    : new URL(url).hostname.replace(/^www\./, '');
                  return (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer me"
                      style={{
                        padding: '10px 18px',
                        border: '1px solid var(--line-2)',
                        borderRadius: 999,
                        color: 'var(--ink-dim)',
                      }}
                    >
                      {label} ↗
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section style={{ padding: '60px 48px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <article style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              01 · Bio
            </div>
            <h2 className="kds-display" style={H2}>
              About {m.givenName}
            </h2>
            {m.longBio.map((p, i) => (
              <p key={i} className="kds-sans" style={PROSE}>
                {p}
              </p>
            ))}
          </article>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section style={{ padding: '60px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              02 · Credentials
            </div>
            <h2 className="kds-display" style={H2}>
              Education and experience
            </h2>
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              borderTop: '1px solid var(--line)',
              maxWidth: 880,
            }}
          >
            {m.credentials.map((c, i) => (
              <li
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr',
                  gap: 24,
                  padding: '20px 0',
                  borderBottom: '1px solid var(--line)',
                  alignItems: 'baseline',
                }}
              >
                <span
                  className="kds-mono"
                  style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.2em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="kds-sans" style={{ fontSize: 16, color: 'var(--ink)' }}>
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AFFILIATIONS */}
      <section style={{ padding: '60px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              03 · Affiliations
            </div>
            <h2 className="kds-display" style={H2}>
              Where {m.givenName} works
            </h2>
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 0,
              borderTop: '1px solid var(--line)',
              borderLeft: '1px solid var(--line)',
            }}
          >
            {m.affiliations.map((a) => (
              <li
                key={a.name}
                style={{
                  padding: '28px 24px',
                  borderRight: '1px solid var(--line)',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <div
                  className="kds-display"
                  style={{ fontSize: 19, fontWeight: 400, color: 'var(--ink)', marginBottom: 8 }}
                >
                  {a.url ? (
                    <a href={a.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                      {a.name} ↗
                    </a>
                  ) : (
                    a.name
                  )}
                </div>
                <div
                  className="kds-mono"
                  style={{
                    fontSize: 11,
                    color: 'var(--ink-dim)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  {a.role}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section style={{ padding: '60px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              04 · Research areas
            </div>
            <h2 className="kds-display" style={H2}>
              What {m.givenName} works on
            </h2>
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            {m.knowsAbout.map((k) => (
              <li
                key={k}
                className="kds-mono"
                style={{
                  fontSize: 12,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-dim)',
                  padding: '12px 20px',
                  border: '1px solid var(--line-2)',
                  borderRadius: 999,
                  background: 'var(--bg)',
                }}
              >
                {k}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PUBLICATIONS */}
      {m.publications.length > 0 && (
        <section style={{ padding: '80px 48px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ maxWidth: 760 }}>
              <div className="kds-mono" style={SECTION_LABEL}>
                05 · Selected publications
              </div>
              <h2 className="kds-display" style={H2}>
                Peer-reviewed work
              </h2>
              {m.publicationStats && (
                <div
                  style={{
                    display: 'flex',
                    gap: 48,
                    flexWrap: 'wrap',
                    marginBottom: 40,
                    paddingBottom: 28,
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  {[
                    { n: m.publicationStats.totalCitations, l: 'Total citations' },
                    { n: m.publicationStats.hIndex, l: 'h-index' },
                    { n: m.publicationStats.i10Index, l: 'i10-index' },
                  ].map((s) => (
                    <div key={s.l} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                      <span
                        className="kds-display"
                        style={{ fontSize: 32, fontVariantNumeric: 'tabular-nums', fontWeight: 400 }}
                      >
                        {s.n}
                      </span>
                      <span
                        className="kds-mono"
                        style={{
                          fontSize: 10,
                          color: 'var(--ink-faint)',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {s.l}
                      </span>
                    </div>
                  ))}
                  <a
                    href="https://scholar.google.pt/citations?user=K6-RZXQAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kds-mono"
                    style={{
                      fontSize: 11,
                      color: 'var(--accent)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      alignSelf: 'center',
                    }}
                  >
                    Google Scholar profile ↗
                  </a>
                </div>
              )}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: 16,
              }}
            >
              <Link
                href="/publications/"
                className="kds-mono"
                style={{
                  fontSize: 11,
                  color: 'var(--accent)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                }}
              >
                View all publications →
              </Link>
            </div>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {m.publications.map((pub, i) => (
                <li
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr 80px 80px',
                    gap: 24,
                    padding: '24px 0',
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
                    <div className="kds-display" style={{ fontSize: 17, fontWeight: 400, color: 'var(--ink)' }}>
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
                      style={{ fontSize: 14, color: 'var(--ink-dim)', marginTop: 4 }}
                    >
                      {pub.venue}
                    </div>
                  </div>
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
      )}

      {/* CTA */}
      <section
        className="sonar-bg"
        style={{ padding: '100px 48px', position: 'relative' }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div className="kds-mono" style={{ ...SECTION_LABEL, marginBottom: 24 }}>
            ✦ Work with {m.givenName} directly
          </div>
          <h2
            className="kds-display"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', margin: '0 0 24px', fontWeight: 300 }}
          >
            Tell us about the vessel.
          </h2>
          <p
            className="kds-sans"
            style={{
              fontSize: 17,
              color: 'var(--ink-dim)',
              maxWidth: 520,
              margin: '0 auto 40px',
              lineHeight: 1.6,
            }}
          >
            Engagements led by {m.givenName} typically begin with a 30-minute call. No deck. No
            sales engineer.
          </p>
          <Link
            href="/contact/"
            className="kds-sans"
            style={{
              padding: '18px 32px',
              background: 'var(--ink)',
              color: 'var(--bg)',
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            Start the conversation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
