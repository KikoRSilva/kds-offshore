import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  SERVICES_BY_SLUG,
  SERVICE_SLUGS,
  getServicesByLocale,
  getServiceBySlug,
} from '@/content/services-detail';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';
import type { Locale } from '@/i18n/routing';

const SITE_URL = 'https://kdsoffshore.pt';
const SERVICE_CONTENT_REVIEWED = '2026-05-23';

export { SERVICE_SLUGS };

export async function buildServiceMetadata(slug: string, locale: Locale): Promise<Metadata> {
  const service = getServiceBySlug(slug, locale) ?? SERVICES_BY_SLUG[slug];
  if (!service) return {};

  const localePath = locale === 'en' ? '/en' : '';
  const isPT = locale === 'pt';

  // Search-snippet-tuned title: "<Name> — <Tagline> | KDS Offshore, Lisbon"
  // Keeps the brand+location anchor (helps GEO entity recognition) and
  // surfaces the tagline as the value proposition for CTR.
  const taglineForTitle = service.tagline.replace(/\.$/, '');
  const title = `${service.name} — ${taglineForTitle} | KDS Offshore, ${
    isPT ? 'Lisboa' : 'Lisbon'
  }`;

  // Meta description = description + lead time + principal-led trust marker.
  const trustMarker = isPT
    ? `Liderado por sócio · honorário fixo · prazo ${service.leadTime}.`
    : `Principal-led · fixed fee · ${service.leadTime} lead time.`;
  const description = `${service.description} ${trustMarker}`;

  const canonicalPath = `${localePath}/services/${slug}/`;
  const languageAlternates = {
    'pt-PT': `${SITE_URL}/services/${slug}/`,
    'en-GB': `${SITE_URL}/en/services/${slug}/`,
    'x-default': `${SITE_URL}/services/${slug}/`,
  };

  return {
    title,
    description,
    keywords: [
      service.name,
      service.shortName,
      service.serviceType,
      'KDS Offshore',
      isPT ? 'arquitetura naval' : 'naval architecture',
      isPT ? 'engenharia offshore' : 'offshore engineering',
      isPT ? 'Lisboa Portugal' : 'Lisbon Portugal',
    ],
    alternates: { canonical: canonicalPath, languages: languageAlternates },
    openGraph: {
      title: `${service.name} — KDS Offshore`,
      description,
      url: `${SITE_URL}${canonicalPath}`,
      siteName: 'KDS Offshore',
      type: 'article',
      locale: isPT ? 'pt_PT' : 'en_GB',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${service.name} — KDS Offshore`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} — KDS Offshore`,
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

const H3: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 500,
  margin: '0 0 8px',
  color: 'var(--ink)',
};

// UI strings localised per page. Keeping them inline (small surface area)
// rather than dragging them into messages/*.json — they only appear on the
// service-detail template.
const ui = (locale: Locale) =>
  locale === 'pt'
    ? {
        breadcrumbHome: 'Início',
        breadcrumbServices: 'Serviços',
        capability: 'Capacidade',
        leadTime: 'Prazo',
        fixedFee: 'Honorário fixo, âmbito fixo',
        principalLed: 'Liderado por sócio',
        author: 'Autor',
        lastReviewed: 'Última revisão',
        sectionTldr: 'Em breve',
        tldrTitle: 'Em poucas palavras',
        sectionOverview: 'Visão geral',
        overviewTitle: 'O que é este serviço',
        sectionOutcomes: 'Resultados',
        outcomesTitle: 'Números que esperamos defender',
        sectionDeliverables: 'Entregáveis',
        deliverablesTitle: 'O que recebe',
        sectionFit: 'Adequação',
        fitTitle: 'Quando faz sentido',
        whenToUse: 'Quando usar',
        whenNotToUse: 'Quando não usar',
        sectionMethodology: 'Metodologia',
        methodologyTitle: 'Como conduzimos um projeto',
        sectionTools: 'Ferramentas e métodos',
        toolsTitle: 'Stack de software que usamos',
        sectionRegulatory: 'Contexto regulatório',
        regulatoryTitle: 'Quadros que ajudamos a cumprir',
        sectionVesselTypes: 'Tipos de embarcação',
        vesselTypesTitle: 'Onde esta disciplina se aplica',
        sectionCases: 'Trabalhos selecionados',
        casesTitle: 'Onde esta disciplina foi usada',
        sectionFaq: 'Perguntas frequentes',
        faqTitle: 'Dúvidas comuns',
        sectionPublications: 'Investigação',
        publicationsTitle: 'Publicações de referência',
        ctaLabel: 'Solicitar este serviço',
        ctaTitle: 'Conte-nos sobre a embarcação.',
        ctaBody:
          'Uma chamada de 30 minutos com um sócio. Sem apresentação, sem comercial. Dois engenheiros, o vosso problema, e uma resposta honesta sobre se a KDS é a empresa certa.',
        ctaButton: 'Iniciar conversa',
        readBrief: 'Ler briefing →',
        deepDiveMethods: 'Os nossos métodos →',
        otherCapabilities: 'Outras capacidades',
        otherDisciplinesPrefix: 'outras disciplinas, um estúdio',
      }
    : {
        breadcrumbHome: 'Home',
        breadcrumbServices: 'Services',
        capability: 'Capability',
        leadTime: 'Lead time',
        fixedFee: 'Fixed-fee, fixed-scope',
        principalLed: 'Principal-led',
        author: 'Author',
        lastReviewed: 'Last reviewed',
        sectionTldr: 'TL;DR',
        tldrTitle: 'In a sentence',
        sectionOverview: 'Overview',
        overviewTitle: 'What this service is',
        sectionOutcomes: 'Outcomes',
        outcomesTitle: 'Numbers we expect to defend',
        sectionDeliverables: 'Deliverables',
        deliverablesTitle: 'What you get',
        sectionFit: 'Fit',
        fitTitle: 'When this is the right call',
        whenToUse: 'When to use',
        whenNotToUse: 'When not to use',
        sectionMethodology: 'Methodology',
        methodologyTitle: 'How we run a project',
        sectionTools: 'Tools & methods',
        toolsTitle: 'Software stack we use',
        sectionRegulatory: 'Regulatory context',
        regulatoryTitle: 'Frameworks we help you satisfy',
        sectionVesselTypes: 'Vessel types',
        vesselTypesTitle: 'Where this discipline applies',
        sectionCases: 'Selected work',
        casesTitle: 'Where this discipline was used',
        sectionFaq: 'Common questions',
        faqTitle: 'FAQ',
        sectionPublications: 'Research',
        publicationsTitle: 'Reference publications',
        ctaLabel: 'Brief this service',
        ctaTitle: 'Tell us about the vessel.',
        ctaBody:
          'A 30-minute call with a principal. No deck, no sales engineer. Two engineers, your problem, an honest answer about whether KDS is the right firm.',
        ctaButton: 'Start the conversation',
        readBrief: 'Read brief →',
        deepDiveMethods: 'See our methods →',
        otherCapabilities: 'Other capabilities',
        otherDisciplinesPrefix: 'other disciplines, one studio',
      };

const ordinalWord = (n: number, locale: Locale) => {
  const en: Record<number, string> = { 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine' };
  const pt: Record<number, string> = { 6: 'Seis', 7: 'Sete', 8: 'Oito', 9: 'Nove' };
  const table = locale === 'pt' ? pt : en;
  return table[n] ?? String(n);
};

export default function ServiceDetailView({ slug, locale }: { slug: string; locale: Locale }) {
  const service = getServiceBySlug(slug, locale);
  if (!service) notFound();
  const allServices = getServicesByLocale(locale);
  const otherServices = allServices.filter((s) => s.slug !== slug);
  const totalServices = allServices.length;
  const localePath = locale === 'en' ? '/en' : '';
  const canonicalUrl = `${SITE_URL}${localePath}/services/${slug}/`;
  const t = ui(locale);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    category: service.serviceType,
    url: canonicalUrl,
    provider: { '@id': `${SITE_URL}/#organization` },
    // Recency signal for AI systems that weight freshness.
    datePublished: '2025-09-01',
    dateModified: SERVICE_CONTENT_REVIEWED,
    // Author = the named principal who signs the discipline — boosts citation
    // (Princeton GEO: +25–30% when expertise is attributed).
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/en/about/#sergio-ribeiro-e-silva`,
      name: 'Sérgio Ribeiro e Silva',
      honorificSuffix: 'PhD',
      jobTitle: 'Founder & Principal Naval Architect',
    },
    areaServed: [
      { '@type': 'Country', name: 'Portugal' },
      { '@type': 'Country', name: 'Spain' },
      { '@type': 'Country', name: 'Ireland' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Place', name: 'Atlantic façade' },
    ],
    audience: {
      '@type': 'BusinessAudience',
      audienceType:
        'Shipowners, port authorities, shipyards, offshore developers, R&D institutes',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} — deliverables`,
      itemListElement: service.whatWeDeliver.map((d) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: d },
      })),
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        // Fixed-fee, fixed-scope is core positioning — schema reflects it.
        description: 'Fixed-fee, fixed-scope. Quoted on a per-project basis after a free 30-minute discovery call.',
      },
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    mainEntity: service.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        crumbs={[
          { name: t.breadcrumbHome, path: '/' },
          { name: t.breadcrumbServices, path: '/services/' },
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
              {t.breadcrumbHome}
            </Link>
            <span style={{ margin: '0 12px' }}>·</span>
            <Link href="/services/" style={{ color: 'var(--ink-dim)' }}>
              {t.breadcrumbServices}
            </Link>
            <span style={{ margin: '0 12px' }}>·</span>
            <span>{service.shortName}</span>
          </nav>
          <div className="kds-mono" style={SECTION_LABEL}>
            {t.capability} · {service.number} / {String(totalServices).padStart(2, '0')} · {service.serviceType}
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
              alignItems: 'center',
            }}
          >
            <span>{t.leadTime} · {service.leadTime}</span>
            <span aria-hidden>·</span>
            <span>{t.fixedFee}</span>
            <span aria-hidden>·</span>
            <span>{t.principalLed}</span>
            <span aria-hidden>·</span>
            {/* Author byline — E-E-A-T signal for AI systems (+25–30% citation
                uplift per Princeton GEO research). Links to the founder's
                team profile page. */}
            <span>
              {t.author} ·{' '}
              <Link
                href="/team/sergio-ribeiro-e-silva/"
                style={{ color: 'var(--accent)' }}
              >
                Sérgio Ribeiro e Silva, PhD
              </Link>
            </span>
            <span aria-hidden>·</span>
            <span>
              {t.lastReviewed} ·{' '}
              <time dateTime={SERVICE_CONTENT_REVIEWED}>{SERVICE_CONTENT_REVIEWED}</time>
            </span>
          </div>
        </div>
      </section>

      {/* TL;DR — self-contained 40–60 word definition block at the top of the
          page, sized for AI snippet extraction. Rendered only when the service
          supplies one. */}
      {service.tldr && (
        <section style={{ padding: '40px 48px 0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div
              style={{
                maxWidth: 880,
                padding: '32px 36px',
                borderLeft: '3px solid var(--accent)',
                background: 'var(--surface)',
                borderRadius: 4,
              }}
            >
              <div
                className="kds-mono"
                style={{
                  fontSize: 10,
                  color: 'var(--accent)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}
              >
                ✦ {t.sectionTldr}
              </div>
              <p
                className="kds-sans"
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: 'var(--ink)',
                  margin: 0,
                }}
              >
                {service.tldr}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* OVERVIEW */}
      <section style={{ padding: '60px 48px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <article style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              {t.sectionOverview}
            </div>
            <h2 className="kds-display" style={H2}>
              {t.overviewTitle}
            </h2>
            {service.overview.map((p, i) => (
              <p key={i} className="kds-sans" style={PROSE}>
                {p}
              </p>
            ))}
            {/* Internal link to /methods — increases authority graph and gives
                AI systems a path to the deeper technical content. */}
            <p style={{ margin: '8px 0 0' }}>
              <Link
                href="/methods/"
                className="kds-mono"
                style={{
                  fontSize: 11,
                  color: 'var(--accent)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                }}
              >
                {t.deepDiveMethods}
              </Link>
            </p>
          </article>
        </div>
      </section>

      {/* OUTCOMES — stats-rich metric block. Princeton GEO research:
          statistics with traceable context drive ~+37% citation uplift. */}
      {service.outcomes && service.outcomes.length > 0 && (
        <section style={{ padding: '60px 48px', background: 'var(--bg-2)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ maxWidth: 760 }}>
              <div className="kds-mono" style={SECTION_LABEL}>
                {t.sectionOutcomes}
              </div>
              <h2 className="kds-display" style={H2}>
                {t.outcomesTitle}
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 0,
                borderTop: '1px solid var(--line)',
                borderLeft: '1px solid var(--line)',
              }}
            >
              {service.outcomes.map((o, i) => (
                <div
                  key={i}
                  style={{
                    padding: '32px 28px',
                    borderRight: '1px solid var(--line)',
                    borderBottom: '1px solid var(--line)',
                    minHeight: 180,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      className="kds-display"
                      style={{
                        fontSize: 'clamp(30px, 3.2vw, 44px)',
                        fontWeight: 400,
                        color: 'var(--ink)',
                        marginBottom: 10,
                        letterSpacing: '-0.01em',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {o.metric}
                    </div>
                    <div
                      className="kds-sans"
                      style={{
                        fontSize: 14,
                        color: 'var(--ink)',
                        lineHeight: 1.4,
                        marginBottom: 12,
                      }}
                    >
                      {o.label}
                    </div>
                  </div>
                  {o.context && (
                    <div
                      className="kds-mono"
                      style={{
                        fontSize: 10,
                        color: 'var(--ink-faint)',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        lineHeight: 1.5,
                      }}
                    >
                      {o.context}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHAT WE DELIVER */}
      <section style={{ padding: '60px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              {t.sectionDeliverables}
            </div>
            <h2 className="kds-display" style={H2}>
              {t.deliverablesTitle}
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

      {/* FIT — When to use / When not to use. Comparison content is the
          single most-cited format on AI search platforms (~33% share). */}
      {(service.whenToUse || service.whenNotToUse) && (
        <section style={{ padding: '80px 48px', background: 'var(--bg-2)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ maxWidth: 760 }}>
              <div className="kds-mono" style={SECTION_LABEL}>
                {t.sectionFit}
              </div>
              <h2 className="kds-display" style={H2}>
                {t.fitTitle}
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: 32,
              }}
            >
              {service.whenToUse && service.whenToUse.length > 0 && (
                <div
                  style={{
                    padding: '32px 28px',
                    border: '1px solid var(--line)',
                    borderRadius: 4,
                    background: 'var(--bg)',
                  }}
                >
                  <div
                    className="kds-mono"
                    style={{
                      fontSize: 11,
                      color: 'var(--accent)',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      marginBottom: 20,
                    }}
                  >
                    ✓ {t.whenToUse}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.whenToUse.map((w, i) => (
                      <li
                        key={i}
                        className="kds-sans"
                        style={{
                          fontSize: 15,
                          color: 'var(--ink)',
                          lineHeight: 1.6,
                          padding: '14px 0',
                          borderBottom:
                            i < service.whenToUse!.length - 1
                              ? '1px solid var(--line)'
                              : 'none',
                        }}
                      >
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {service.whenNotToUse && service.whenNotToUse.length > 0 && (
                <div
                  style={{
                    padding: '32px 28px',
                    border: '1px solid var(--line)',
                    borderRadius: 4,
                    background: 'var(--bg)',
                  }}
                >
                  <div
                    className="kds-mono"
                    style={{
                      fontSize: 11,
                      color: 'var(--ink-faint)',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      marginBottom: 20,
                    }}
                  >
                    ✗ {t.whenNotToUse}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.whenNotToUse.map((w, i) => (
                      <li
                        key={i}
                        className="kds-sans"
                        style={{
                          fontSize: 15,
                          color: 'var(--ink-dim)',
                          lineHeight: 1.6,
                          padding: '14px 0',
                          borderBottom:
                            i < service.whenNotToUse!.length - 1
                              ? '1px solid var(--line)'
                              : 'none',
                        }}
                      >
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* METHODOLOGY */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              {t.sectionMethodology}
            </div>
            <h2 className="kds-display" style={H2}>
              {t.methodologyTitle}
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
              {t.sectionTools}
            </div>
            <h2 className="kds-display" style={H2}>
              {t.toolsTitle}
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
            {service.tools.map((tool) => (
              <li
                key={tool}
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
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REGULATORY CONTEXT — frameworks the service helps satisfy. Anchors
          the page to topical authority and tail queries like
          "FuelEU Maritime compliance" or "IMO MSC.137(76) manoeuvring". */}
      {service.regulatoryContext && service.regulatoryContext.length > 0 && (
        <section style={{ padding: '80px 48px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ maxWidth: 760 }}>
              <div className="kds-mono" style={SECTION_LABEL}>
                {t.sectionRegulatory}
              </div>
              <h2 className="kds-display" style={H2}>
                {t.regulatoryTitle}
              </h2>
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                borderTop: '1px solid var(--line)',
              }}
            >
              {service.regulatoryContext.map((r, i) => (
                <li
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(220px, 280px) 1fr',
                    gap: 32,
                    padding: '22px 0',
                    borderBottom: '1px solid var(--line)',
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    className="kds-display"
                    style={{ fontSize: 18, fontWeight: 500, color: 'var(--ink)' }}
                  >
                    {r.url ? (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--ink)' }}
                      >
                        {r.name} ↗
                      </a>
                    ) : (
                      r.name
                    )}
                  </span>
                  {r.note && (
                    <span
                      className="kds-sans"
                      style={{
                        fontSize: 14,
                        color: 'var(--ink-dim)',
                        lineHeight: 1.6,
                      }}
                    >
                      {r.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* VESSEL TYPES — tail-search surface area ("mooring design FPSO",
          "manoeuvrability container ship"). Compact tag list. */}
      {service.vesselTypes && service.vesselTypes.length > 0 && (
        <section style={{ padding: '60px 48px', background: 'var(--bg-2)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ maxWidth: 760 }}>
              <div className="kds-mono" style={SECTION_LABEL}>
                {t.sectionVesselTypes}
              </div>
              <h2 className="kds-display" style={H2}>
                {t.vesselTypesTitle}
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
              {service.vesselTypes.map((v, i) => (
                <li
                  key={i}
                  style={{
                    padding: '20px 24px',
                    borderRight: '1px solid var(--line)',
                    borderBottom: '1px solid var(--line)',
                    fontSize: 15,
                    color: 'var(--ink)',
                    lineHeight: 1.5,
                    background: 'var(--bg)',
                  }}
                  className="kds-sans"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CASE STUDIES */}
      {service.cases.length > 0 && (
        <section style={{ padding: '80px 48px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ maxWidth: 760 }}>
              <div className="kds-mono" style={SECTION_LABEL}>
                {t.sectionCases}
              </div>
              <h2 className="kds-display" style={H2}>
                {t.casesTitle}
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
              {t.sectionFaq}
            </div>
            <h2 className="kds-display" style={H2}>
              {t.faqTitle}
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

      {/* PUBLICATIONS — only rendered when the service has peer-reviewed
          work backing the methodology. Authority signal that AI systems
          and sophisticated clients both weight. */}
      {service.publications && service.publications.length > 0 && (
        <section style={{ padding: '80px 48px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ maxWidth: 760 }}>
              <div className="kds-mono" style={SECTION_LABEL}>
                {t.sectionPublications}
              </div>
              <h2 className="kds-display" style={H2}>
                {t.publicationsTitle}
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
              {service.publications.map((p, i) => (
                <li
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '40px 1fr',
                    gap: 24,
                    padding: '20px 0',
                    borderBottom: '1px solid var(--line)',
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    className="kds-mono"
                    style={{
                      fontSize: 11,
                      color: 'var(--ink-faint)',
                      letterSpacing: '0.2em',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    [{i + 1}]
                  </span>
                  <span
                    className="kds-sans"
                    style={{
                      fontSize: 14,
                      color: 'var(--ink-dim)',
                      lineHeight: 1.65,
                    }}
                  >
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--ink-dim)' }}
                      >
                        {p.label} ↗
                      </a>
                    ) : (
                      p.label
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* OTHER SERVICES */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              {t.otherCapabilities}
            </div>
            <h2 className="kds-display" style={H2}>
              {ordinalWord(otherServices.length, locale)} {t.otherDisciplinesPrefix}
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
                  background: 'var(--bg)',
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
                    {s.number} / {String(totalServices).padStart(2, '0')}
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
                    {t.readBrief}
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
            ✦ {t.ctaLabel} · {service.shortName}
          </div>
          <h2
            className="kds-display"
            style={{
              fontSize: 'clamp(40px, 5vw, 72px)',
              margin: '0 0 24px',
              fontWeight: 300,
            }}
          >
            {t.ctaTitle}
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
            {t.ctaBody}
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
            {t.ctaButton}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
