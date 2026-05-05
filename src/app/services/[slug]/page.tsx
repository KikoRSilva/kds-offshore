import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES, SERVICES_BY_SLUG, SERVICE_SLUGS } from '@/content/services-detail';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';

const SITE_URL = 'https://kdsoffshore.pt';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_BY_SLUG[slug];
  if (!service) return {};

  const title = `${service.name}`;
  const description = service.description;

  return {
    title,
    description,
    alternates: { canonical: `/services/${slug}/` },
    openGraph: {
      title: `${service.name} — KDS Offshore`,
      description,
      url: `${SITE_URL}/services/${slug}/`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} — KDS Offshore`,
      description,
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

const H3: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 500,
  margin: '0 0 8px',
  color: 'var(--ink)',
};

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_BY_SLUG[slug];
  if (!service) notFound();

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${slug}/#service`,
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    category: service.serviceType,
    url: `${SITE_URL}/services/${slug}/`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [
      { '@type': 'Country', name: 'Portugal' },
      { '@type': 'Country', name: 'Spain' },
      { '@type': 'Country', name: 'Ireland' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Place', name: 'Atlantic façade' },
    ],
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Shipowners, port authorities, offshore developers, R&D institutes',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} — deliverables`,
      itemListElement: service.whatWeDeliver.map((d) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: d },
      })),
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/services/${slug}/#faq`,
    mainEntity: service.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
          { name: service.name, path: `/services/${slug}/` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section
        className="sonar-bg"
        style={{ padding: '100px 48px 60px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
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
            <Link href="/services/" style={{ color: 'var(--ink-dim)' }}>
              Services
            </Link>
            <span style={{ margin: '0 12px' }}>·</span>
            <span>{service.shortName}</span>
          </nav>
          <div className="kds-mono" style={SECTION_LABEL}>
            Capability · {service.number} / 07 · {service.serviceType}
          </div>
          <h1
            className="kds-display"
            aria-label={service.name}
            style={{
              fontSize: 'clamp(48px, 6vw, 96px)',
              margin: 0,
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: '-0.015em',
            }}
          >
            {service.name}
          </h1>
          <p
            className="kds-display"
            style={{
              fontSize: 'clamp(22px, 2.4vw, 32px)',
              color: 'var(--accent)',
              margin: '32px 0 0',
              fontWeight: 300,
              fontStyle: 'italic',
              maxWidth: 720,
            }}
          >
            {service.tagline}
          </p>
          <div
            className="kds-mono"
            style={{
              ...SECTION_LABEL,
              marginTop: 40,
              marginBottom: 0,
              display: 'flex',
              gap: 32,
              flexWrap: 'wrap',
            }}
          >
            <span>Lead time · {service.leadTime}</span>
            <span>·</span>
            <span>Fixed-fee, fixed-scope</span>
            <span>·</span>
            <span>Principal-led</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ padding: '60px 48px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <article style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              01 · Overview
            </div>
            <h2 className="kds-display" style={H2}>
              What this service is
            </h2>
            {service.overview.map((p, i) => (
              <p key={i} className="kds-sans" style={PROSE}>
                {p}
              </p>
            ))}
          </article>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section style={{ padding: '60px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              02 · Deliverables
            </div>
            <h2 className="kds-display" style={H2}>
              What you get
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 0,
              borderTop: '1px solid var(--line)',
              borderLeft: '1px solid var(--line)',
            }}
          >
            {service.whatWeDeliver.map((d, i) => (
              <div
                key={i}
                style={{
                  padding: '28px 24px',
                  borderRight: '1px solid var(--line)',
                  borderBottom: '1px solid var(--line)',
                  minHeight: 100,
                }}
              >
                <div
                  className="kds-mono"
                  style={{
                    fontSize: 10,
                    color: 'var(--ink-faint)',
                    letterSpacing: '0.2em',
                    marginBottom: 12,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="kds-display" style={{ fontSize: 18, color: 'var(--ink)' }}>
                  {d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              03 · Methodology
            </div>
            <h2 className="kds-display" style={H2}>
              How we run a project
            </h2>
          </div>
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              borderTop: '1px solid var(--line)',
            }}
          >
            {service.methodology.map((step, i) => (
              <li
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 240px 1fr',
                  gap: 32,
                  padding: '28px 0',
                  borderBottom: '1px solid var(--line)',
                  alignItems: 'baseline',
                }}
              >
                <span
                  className="kds-mono"
                  style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.2em' }}
                >
                  {String(i + 1).padStart(2, '0')} / {String(service.methodology.length).padStart(2, '0')}
                </span>
                <h3 className="kds-display" style={{ ...H3, fontSize: 22, fontWeight: 400 }}>
                  {step.t}
                </h3>
                <p
                  className="kds-sans"
                  style={{ fontSize: 16, color: 'var(--ink-dim)', lineHeight: 1.7, margin: 0 }}
                >
                  {step.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TOOLS */}
      <section style={{ padding: '60px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              04 · Tools & methods
            </div>
            <h2 className="kds-display" style={H2}>
              Software stack we use
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
            {service.tools.map((t) => (
              <li
                key={t}
                className="kds-mono"
                style={{
                  fontSize: 12,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-dim)',
                  padding: '12px 20px',
                  border: '1px solid var(--line-2)',
                  borderRadius: 999,
                  background: 'var(--bg)',
                }}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CASE STUDIES */}
      {service.cases.length > 0 && (
        <section style={{ padding: '80px 48px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ maxWidth: 760 }}>
              <div className="kds-mono" style={SECTION_LABEL}>
                05 · Selected work
              </div>
              <h2 className="kds-display" style={H2}>
                Where this discipline was used
              </h2>
            </div>
            <div style={{ borderTop: '1px solid var(--line)' }}>
              {service.cases.map((c, i) => (
                <Link
                  key={i}
                  href="/work/"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr 240px 100px 60px',
                    gap: 24,
                    alignItems: 'center',
                    padding: '24px 0',
                    borderBottom: '1px solid var(--line)',
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
                  <span className="kds-display" style={{ fontSize: 19, fontWeight: 400 }}>
                    {c.title}
                  </span>
                  <span className="kds-sans" style={{ fontSize: 13, color: 'var(--ink-dim)' }}>
                    {c.client}
                  </span>
                  <span
                    className="kds-mono"
                    style={{ fontSize: 11, color: 'var(--ink-faint)' }}
                  >
                    {c.year}
                  </span>
                  <span style={{ color: 'var(--ink-dim)', textAlign: 'right' }}>↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              06 · Common questions
            </div>
            <h2 className="kds-display" style={H2}>
              FAQ
            </h2>
          </div>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {service.faq.map((f, i) => (
              <details
                key={i}
                style={{
                  padding: '28px 0',
                  borderBottom: '1px solid var(--line)',
                  maxWidth: 880,
                }}
              >
                <summary
                  className="kds-display"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    cursor: 'pointer',
                    color: 'var(--ink)',
                    listStyle: 'none',
                  }}
                >
                  {f.q}
                </summary>
                <p
                  className="kds-sans"
                  style={{
                    fontSize: 16,
                    color: 'var(--ink-dim)',
                    lineHeight: 1.7,
                    marginTop: 16,
                    maxWidth: 720,
                  }}
                >
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              07 · Other capabilities
            </div>
            <h2 className="kds-display" style={H2}>
              Six other disciplines, one studio
            </h2>
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 0,
              borderTop: '1px solid var(--line)',
              borderLeft: '1px solid var(--line)',
            }}
          >
            {otherServices.map((s) => (
              <li
                key={s.slug}
                style={{
                  borderRight: '1px solid var(--line)',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <Link
                  href={`/services/${s.slug}/`}
                  style={{
                    display: 'block',
                    padding: '28px 24px',
                    minHeight: 140,
                  }}
                >
                  <div
                    className="kds-mono"
                    style={{
                      fontSize: 10,
                      color: 'var(--ink-faint)',
                      letterSpacing: '0.2em',
                      marginBottom: 14,
                    }}
                  >
                    {s.number} / 07
                  </div>
                  <div
                    className="kds-display"
                    style={{
                      fontSize: 19,
                      color: 'var(--ink)',
                      fontWeight: 400,
                      marginBottom: 8,
                      lineHeight: 1.2,
                    }}
                  >
                    {s.shortName}
                  </div>
                  <div
                    className="kds-mono"
                    style={{
                      fontSize: 10,
                      color: 'var(--ink-dim)',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Read brief →
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
            ✦ Brief this service
          </div>
          <h2
            className="kds-display"
            style={{
              fontSize: 'clamp(40px, 5vw, 72px)',
              margin: '0 0 24px',
              fontWeight: 300,
            }}
          >
            Tell us about the vessel.
          </h2>
          <p
            className="kds-sans"
            style={{
              fontSize: 17,
              color: 'var(--ink-dim)',
              maxWidth: 540,
              margin: '0 auto 40px',
              lineHeight: 1.6,
            }}
          >
            A 30-minute call with a principal. No deck, no sales engineer. Two engineers, your
            problem, an honest answer about whether KDS is the right firm.
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
