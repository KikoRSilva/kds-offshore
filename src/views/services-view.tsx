'use client';

import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { ServiceCTA } from '@/components/service-cta';
import { KDSImage } from '@/components/kds-image';
import { Reveal } from '@/components/reveal';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';
import { useLocale, useMessages } from 'next-intl';
import { SERVICES, SERVICE_SLUGS } from '@/content/services-detail';

const SITE_URL = 'https://kdsoffshore.pt';

const SERVICES_ITEMLIST_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${SITE_URL}/services/#list`,
  name: 'KDS Offshore — capabilities',
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${SITE_URL}/services/${s.slug}/`,
    name: s.name,
  })),
};

// Topic-specific image per service, in the same order as `t.services.items`.
// All entries are real stock photos from Unsplash (free for commercial use,
// no attribution required) — kept stylistically consistent so the index
// reads as a single editorial spread, not a mix of photos and renders.
// When a new service is added, append the matching image here too.
const IMG_MAP = [
  '/images/services/3d-modelling-architect-draft.jpg',       // 01 · 3D modelling (architect with pencil + ruler — Daniel McCullough)
  '/images/services/naval-architecture-shipyard.jpg',        // 02 · Naval architecture (vessel + cranes, Admiralty shipyard — Viktor Solomonik)
  '/images/services/hydrodynamic-cargo-ocean.jpg',           // 03 · Hydrodynamic optimisation (cargo + Table Mountain — Hennie Stander)
  '/images/services/manoeuvrability-tug-container.jpg',      // 04 · Manoeuvrability (tug pulling container ship — Mika Baumeister)
  '/images/services/mooring-ship-deck-ropes.jpg',            // 05 · Mooring (ship deck with ropes & mooring equipment — Frederick Wallace)
  '/images/services/conversion-red-ship-drydock.jpg',        // 06 · Conversion (red ship in drydock for repairs)
  '/images/services/supervision-welding-vigor-marine.jpg',   // 07 · Supervision (welding at Vigor Marine, Portland — Pete Wright)
  '/images/services/decarbonisation-offshore-wind.jpg',      // 08 · Decarbonisation (Burbo Bank offshore wind farm — James Whately)
  '/images/services/digitalisation-bridge-control.jpg',      // 09 · Digitalisation (ship bridge control room with screens — Rohan Dixit)
];

export default function ServicesView() {
  const lang = useLocale();
  const t = useMessages();
  const p = t.pages.services;

  return (
    <>
      <BreadcrumbJsonLd
        locale={lang}
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_ITEMLIST_JSONLD) }}
      />
      <PageHero
        eyebrow={p.eyebrow}
        lines={[
          { text: p.title1 },
          { text: p.title2, indent: true, italic: true, accent: true },
          { text: `${p.title3} ${p.title4}` },
        ]}
        lede={p.lede}
      />

      <section style={{ padding: '100px 48px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          {t.services.items.map((s, i) => (
            <Reveal key={s.n} delay={0.05}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr 1.2fr',
                  gap: 56,
                  padding: '56px 0',
                  borderTop: '1px solid var(--line)',
                  borderBottom: i === t.services.items.length - 1 ? '1px solid var(--line)' : 'none',
                  alignItems: 'start',
                }}
              >
                <div
                  className="kds-mono"
                  style={{ fontSize: 12, color: 'var(--ink-faint)', letterSpacing: '0.22em' }}
                >
                  {s.n} / {String(t.services.items.length).padStart(2, '0')}
                </div>
                <div>
                  <KDSImage
                    src={IMG_MAP[i]}
                    aspect="4/3"
                    alt={s.t}
                    style={{ borderRadius: 4, marginBottom: 28 }}
                  />
                  <h3
                    className="kds-display"
                    style={{
                      fontSize: 'clamp(32px, 3.2vw, 48px)',
                      margin: 0,
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.05,
                    }}
                  >
                    {s.t}
                  </h3>
                  <p
                    className="kds-sans"
                    style={{ fontSize: 17, color: 'var(--ink-dim)', lineHeight: 1.6, marginTop: 20, maxWidth: 480 }}
                  >
                    {s.d}
                  </p>
                </div>
                <div>
                  <div
                    className="kds-mono"
                    style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 16 }}
                  >
                    {lang === 'pt' ? 'O que entregamos' : 'What we deliver'}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {p.deliverables[i]?.map((d, j) => (
                      <li
                        key={j}
                        className="kds-sans"
                        style={{
                          fontSize: 14,
                          color: 'var(--ink)',
                          padding: '10px 0',
                          borderBottom: '1px solid var(--line)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span>{d}</span>
                        <span style={{ color: 'var(--ink-faint)' }} className="kds-mono">·</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                    <Link
                      href={`/services/${SERVICE_SLUGS[i]}/`}
                      className="kds-sans"
                      style={{
                        padding: '12px 20px',
                        background: 'var(--ink)',
                        color: 'var(--bg)',
                        borderRadius: 999,
                        fontSize: 13,
                        fontWeight: 500,
                      }}
                    >
                      {lang === 'pt' ? 'Ler briefing' : 'Read brief'} →
                    </Link>
                    <Link
                      href="/contact/"
                      className="kds-sans"
                      style={{
                        padding: '12px 20px',
                        border: '1px solid var(--line-2)',
                        borderRadius: 999,
                        color: 'var(--ink)',
                        fontSize: 13,
                      }}
                    >
                      {lang === 'pt' ? 'Solicitar proposta' : 'Brief this service'} →
                    </Link>
                    <span
                      className="kds-mono"
                      style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.18em', textTransform: 'uppercase' }}
                    >
                      {p.leadTimes[i]} {lang === 'pt' ? 'prazo' : 'lead time'}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: '100px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, marginBottom: 72, alignItems: 'baseline' }}>
              <div
                className="kds-mono"
                style={{ fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.22em', textTransform: 'uppercase' }}
              >
                {p.methodology.label} · 04 {lang === 'pt' ? 'passos' : 'steps'}
              </div>
              <h2
                className="kds-display"
                style={{ fontSize: 'clamp(48px, 5vw, 88px)', margin: 0, fontWeight: 300 }}
              >
                {p.methodology.title.replace('.', '')}
                <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>.</span>
              </h2>
            </div>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              borderTop: '1px solid var(--line)',
            }}
          >
            {p.methodology.steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div
                  style={{
                    padding: '40px 28px 48px',
                    borderRight: i < 3 ? '1px solid var(--line)' : 'none',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <div
                    className="kds-mono"
                    style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.22em', marginBottom: 32 }}
                  >
                    STEP {s.n}
                  </div>
                  <h4
                    className="kds-display"
                    style={{ fontSize: 24, fontWeight: 400, margin: '0 0 16px', letterSpacing: '-0.01em' }}
                  >
                    {s.t}
                  </h4>
                  <p
                    className="kds-sans"
                    style={{ fontSize: 14, color: 'var(--ink-dim)', lineHeight: 1.6, margin: 0 }}
                  >
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <Reveal>
            <div
              className="kds-mono"
              style={{ fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 32 }}
            >
              {p.tools.label}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {p.tools.items.map((tool, i) => (
                <span
                  key={i}
                  className="kds-mono"
                  style={{
                    padding: '12px 20px',
                    border: '1px solid var(--line-2)',
                    borderRadius: 999,
                    fontSize: 12,
                    color: 'var(--ink-dim)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '100px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Reveal>
            <div
              className="kds-mono"
              style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 24 }}
            >
              ✦ {lang === 'pt' ? 'Sobre preços' : 'On pricing'}
            </div>
            <h2
              className="kds-display"
              style={{ fontSize: 'clamp(36px, 4vw, 64px)', margin: 0, fontWeight: 300, lineHeight: 1.1 }}
            >
              {lang === 'pt'
                ? <>Cotamos honorários fixos para âmbitos fixos. Sem tarifas horárias, sem surpresas. <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Se o âmbito se altera, a proposta também se altera, tudo por escrito.</span></>
                : <>We quote fixed fees against fixed scopes. No hourly rates, no surprises. <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>If the brief changes, the proposal does too, in writing.</span></>
              }
            </h2>
          </Reveal>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
