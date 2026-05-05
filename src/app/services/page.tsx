'use client';

import { PageHero } from '@/components/page-hero';
import { ServiceCTA } from '@/components/service-cta';
import { KDSImage } from '@/components/kds-image';
import { Reveal } from '@/components/reveal';
import { useSite } from '@/contexts/site-context';
import { en } from '@/content/en';
import { pt } from '@/content/pt';

const IMG_MAP = [
  'https://kdsoffshore.pt/wp-content/uploads/2024/04/6bd13929-f7b6-4daa-b526-6905edaa1283.webp',
  'https://kdsoffshore.pt/wp-content/uploads/2024/04/DALL%C2%B7E-2024-04-18-18.28.35-An-engineering-design-studio-with-a-team-of-naval-architects-and-offshore-engineers-working-on-computer-aided-design-systems.-The-office-is-equipped-w.webp',
  'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80',
  'https://kdsoffshore.pt/wp-content/uploads/2024/05/maneuvrability.webp',
  'https://kdsoffshore.pt/wp-content/uploads/2024/05/mooring.webp',
  'https://kdsoffshore.pt/wp-content/uploads/2024/05/convertion.webp',
  'https://kdsoffshore.pt/wp-content/uploads/2024/05/Supervision.webp',
];

export default function ServicesPage() {
  const { lang } = useSite();
  const t = lang === 'pt' ? pt : en;
  const p = lang === 'pt' ? pt.pages.services : en.pages.services;

  return (
    <>
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
                  <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 16 }}>
                    <a
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
                    </a>
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
                ? <>Cotamos honorários fixos para âmbitos fixos. Sem tarifas horárias, sem surpresas. <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Se o briefing muda, a proposta também muda, por escrito.</span></>
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
