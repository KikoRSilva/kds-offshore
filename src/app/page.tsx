'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/reveal';
import { KDSImage } from '@/components/kds-image';
import { useSite } from '@/contexts/site-context';
import { en } from '@/content/en';
import { pt } from '@/content/pt';

const IMG = {
  port: '/images/stock/port-aerial.jpg',
};

export default function HomePage() {
  const { lang } = useSite();
  const t = lang === 'pt' ? pt : en;
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const testimonial = t.proof.testimonials[testimonialIdx];

  return (
    <>
      {/* HERO */}
      <section
        className="sonar-bg"
        style={{ position: 'relative', minHeight: 920, padding: '120px 48px 100px', overflow: 'hidden' }}
      >
        <div style={{ maxWidth: 1440, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <Reveal delay={0.05}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 80 }}>
              <div
                className="kds-mono"
                style={{ fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.22em', textTransform: 'uppercase', maxWidth: 320, lineHeight: 1.6 }}
              >
                {t.hero.eyebrow}
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="kds-mono" style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>
                  Lat 38.6979° N · Lon 9.3088° W
                </div>
                <div className="kds-mono" style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  {t.hero.established}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h1
              className="kds-display"
              aria-label={`${t.hero.title1} ${t.hero.title2} ${t.hero.title3}`}
              style={{ fontSize: 'clamp(72px, 9.5vw, 168px)', margin: 0, fontWeight: 300 }}
            >
              {t.hero.title1}{' '}
              <br />
              <span style={{ paddingLeft: '12%' }}>{t.hero.title2} </span>
              <br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 300 }}>
                {t.hero.title3}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 80,
                marginTop: 80,
                alignItems: 'end',
              }}
            >
              <p
                className="kds-sans"
                style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--ink-dim)', maxWidth: 560, margin: 0 }}
              >
                {t.hero.lede}
              </p>
              <div style={{ display: 'flex', gap: 16, justifySelf: 'end', flexWrap: 'wrap' }}>
                <Link
                  href="/contact/"
                  className="kds-sans"
                  style={{
                    padding: '18px 28px',
                    background: 'var(--ink)',
                    color: 'var(--bg)',
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 500,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  {t.hero.cta1}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
                <a
                  href="#"
                  className="kds-sans"
                  style={{
                    padding: '18px 28px',
                    border: '1px solid var(--line-2)',
                    color: 'var(--ink)',
                    borderRadius: 999,
                    fontSize: 14,
                  }}
                >
                  {t.hero.cta2}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div
              style={{
                marginTop: 100,
                padding: '24px 0',
                borderTop: '1px solid var(--line)',
                borderBottom: '1px solid var(--line)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span className="status-dot" aria-hidden />
                <span
                  className="kds-mono"
                  style={{ fontSize: 12, color: 'var(--ink-dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  {t.hero.status}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 48 }}>
                {[
                  { n: '120+', l: lang === 'pt' ? 'projetos' : 'projects' },
                  { n: '14', l: lang === 'pt' ? 'ativos' : 'active' },
                  { n: '09y', l: lang === 'pt' ? 'no estúdio' : 'in studio' },
                ].map((s) => (
                  <div key={s.l} style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span
                      className="kds-display"
                      style={{ fontSize: 28, fontVariantNumeric: 'tabular-nums' }}
                    >
                      {s.n}
                    </span>
                    <span
                      className="kds-mono"
                      style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.2em', textTransform: 'uppercase' }}
                    >
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div style={{ position: 'absolute', right: '14%', top: '38%', zIndex: 1 }} aria-hidden>
          <div className="ping-dot" />
        </div>
      </section>

      {/* FEATURED ENGAGEMENT */}
      <section style={{ padding: '100px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'end', marginBottom: 60 }}>
              <div
                className="kds-mono"
                style={{ fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.22em', textTransform: 'uppercase' }}
              >
                ↓ {lang === 'pt' ? 'Projeto em destaque' : 'Featured engagement'}
                <br />
                <span style={{ color: 'var(--ink-faint)' }}>2024, 087 / SP</span>
              </div>
              <h2
                className="kds-display"
                style={{ fontSize: 'clamp(40px, 4vw, 72px)', margin: 0, fontWeight: 300 }}
              >
                {lang === 'pt' ? (
                  <>Casco de lancha-piloto refinado até <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>0,6 nós</span> do ótimo teórico.</>
                ) : (
                  <>Pilot boat hull, refined to within <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>0.6 knots</span> of theoretical optimum.</>
                )}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 32, alignItems: 'start' }}>
              <div
                className="cfd-plot ph"
                style={{ aspectRatio: '5/3', borderRadius: 4, position: 'relative' }}
                role="img"
                aria-label="CFD pressure field plot — SeaPower 12m pilot boat"
              >
                <div style={{ position: 'absolute', left: 16, bottom: 16, color: 'rgba(255,255,255,0.85)' }} className="kds-mono">
                  <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>CFD · pressure field</div>
                  <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>SeaPower / 12 m pilot · Fr 0.42</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <KDSImage
                  src={IMG.port}
                  aspect="5/3"
                  alt="Vessel photograph"
                  parallax
                  style={{ borderRadius: 4 }}
                />
                <div
                  style={{
                    padding: 28,
                    border: '1px solid var(--line)',
                    borderRadius: 4,
                    background: 'var(--surface)',
                  }}
                >
                  <div
                    className="kds-mono"
                    style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 18 }}
                  >
                    {lang === 'pt' ? 'Resultado' : 'Outcome'}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    {[
                      { n: '−18%', l: lang === 'pt' ? 'consumo de comb.' : 'fuel burn at cruise' },
                      { n: '+4°', l: lang === 'pt' ? 'margem de estab.' : 'roll stability margin' },
                      { n: '0.6', l: lang === 'pt' ? 'nós do ótimo' : 'kn from optimum' },
                      { n: 'DNV', l: 'class compliant' },
                    ].map((s) => (
                      <div key={s.l}>
                        <div className="kds-display" style={{ fontSize: 32, fontWeight: 400 }}>{s.n}</div>
                        <div
                          className="kds-mono"
                          style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 4 }}
                        >
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: '100px 48px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <Reveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginBottom: 80,
                borderBottom: '1px solid var(--line)',
                paddingBottom: 28,
              }}
            >
              <h2
                className="kds-display"
                style={{ fontSize: 'clamp(48px, 5vw, 96px)', margin: 0, fontWeight: 300, lineHeight: 0.95 }}
              >
                {t.services.title.replace('.', '')}
                <span style={{ color: 'var(--accent)' }}>.</span>
              </h2>
              <div
                className="kds-mono"
                style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-dim)' }}
              >
                {t.services.label} / 07
              </div>
            </div>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderTop: '1px solid var(--line)',
            }}
          >
            {t.services.items.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div
                  style={{
                    padding: '40px 32px 64px',
                    borderBottom: '1px solid var(--line)',
                    borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--line)' : 'none',
                    position: 'relative',
                    minHeight: 280,
                  }}
                >
                  <div
                    className="kds-mono"
                    style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.2em', marginBottom: 32 }}
                  >
                    {s.n} / {String(t.services.items.length).padStart(2, '0')}
                  </div>
                  <h3
                    className="kds-display"
                    style={{ fontSize: 28, margin: '0 0 20px', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.1 }}
                  >
                    {s.t}
                  </h3>
                  <p
                    className="kds-sans"
                    style={{ fontSize: 14, color: 'var(--ink-dim)', lineHeight: 1.6, margin: 0 }}
                  >
                    {s.d}
                  </p>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 28,
                      left: 32,
                      right: 32,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Link
                      href="/services/"
                      className="kds-mono"
                      style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.18em', textTransform: 'uppercase' }}
                    >
                      {lang === 'pt' ? 'ver serviço' : 'read brief'}
                    </Link>
                    <span style={{ color: 'var(--ink-dim)' }}>↗</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ padding: '120px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Reveal>
            <div
              className="kds-mono"
              style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 40 }}
            >
              ✦ {lang === 'pt' ? 'Confiado por operadores' : 'Trusted by operators'}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.blockquote
              key={testimonialIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="kds-display"
              style={{
                fontSize: 'clamp(28px, 3vw, 44px)',
                margin: 0,
                fontWeight: 300,
                lineHeight: 1.25,
                fontStyle: 'italic',
                color: 'var(--ink)',
              }}
            >
              &ldquo;{testimonial.q}&rdquo;
            </motion.blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <div
              style={{
                marginTop: 40,
                paddingTop: 24,
                borderTop: '1px solid var(--line)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div className="kds-sans" style={{ fontSize: 14 }}>{testimonial.who}</div>
                <div
                  className="kds-mono"
                  style={{ fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  {testimonial.role}
                </div>
              </div>
              <button
                onClick={() => setTestimonialIdx((i) => (i + 1) % t.proof.testimonials.length)}
                className="kds-mono"
                aria-label="Next testimonial"
                style={{
                  fontSize: 11,
                  color: 'var(--ink-faint)',
                  letterSpacing: '0.2em',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  border: '1px solid var(--line)',
                  borderRadius: 999,
                }}
              >
                {String(testimonialIdx + 1).padStart(2, '0')} / {String(t.proof.testimonials.length).padStart(2, '0')} →
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section style={{ padding: '100px 48px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <Reveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: 48,
              }}
            >
              <h2 className="kds-display" style={{ fontSize: 56, margin: 0, fontWeight: 300 }}>
                {t.cases.label}
              </h2>
              <Link
                href="/work/"
                className="kds-mono"
                style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-dim)' }}
              >
                {lang === 'pt' ? 'ver arquivo' : 'view archive'} →
              </Link>
            </div>
          </Reveal>

          <div style={{ borderTop: '1px solid var(--line)' }}>
            {t.cases.items.map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <Link
                  href="/work/"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 180px 1fr 200px 100px 60px',
                    gap: 24,
                    alignItems: 'center',
                    padding: '28px 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <span className="kds-mono" style={{ fontSize: 11, color: 'var(--ink-faint)', fontVariantNumeric: 'tabular-nums' }}>
                    ·{String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="kds-mono"
                    style={{ fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.16em', textTransform: 'uppercase' }}
                  >
                    {c.tag}
                  </span>
                  <span className="kds-display" style={{ fontSize: 22, fontWeight: 400 }}>{c.t}</span>
                  <span className="kds-sans" style={{ fontSize: 13, color: 'var(--ink-dim)' }}>{c.client}</span>
                  <span className="kds-mono" style={{ fontSize: 11, color: 'var(--ink-faint)', fontVariantNumeric: 'tabular-nums' }}>{c.year}</span>
                  <span style={{ color: 'var(--ink-dim)', textAlign: 'right' }}>↗</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF / STATS */}
      <section style={{ padding: '80px 48px', background: 'var(--bg-2)', borderTop: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
              {t.proof.stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: '32px 0',
                    borderRight: i < 3 ? '1px solid var(--line)' : 'none',
                    paddingLeft: i > 0 ? 40 : 0,
                  }}
                >
                  <div
                    className="kds-display"
                    style={{
                      fontSize: 'clamp(28px, 3vw, 48px)',
                      fontWeight: 400,
                      marginBottom: 8,
                      color: 'var(--ink)',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    className="kds-mono"
                    style={{ fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.16em', textTransform: 'uppercase' }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section
        style={{
          padding: '32px 0',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          overflow: 'hidden',
        }}
        aria-label="Partner organisations"
      >
        <div className="marquee-track" aria-hidden>
          {[
            'WavEC', 'Vera Navis', 'TecnoVeritas', 'Concept', 'SVA', 'Blue Oasis', 'Euroshide',
            'HPMS', 'idD', 'IH Cantabria', 'Marine', 'Ace', 'Nautiber', 'SeaPower', 'OneOcean',
            'Future Proman', 'Blue Geo Lighthouse', 'APRAM',
            'WavEC', 'Vera Navis', 'TecnoVeritas', 'Concept', 'SVA', 'Blue Oasis', 'Euroshide',
            'HPMS', 'idD', 'IH Cantabria', 'Marine', 'Ace', 'Nautiber', 'SeaPower', 'OneOcean',
            'Future Proman', 'Blue Geo Lighthouse', 'APRAM',
          ].map((p, i) => (
            <span
              key={i}
              className="kds-mono"
              style={{
                fontSize: 11,
                color: 'var(--ink-faint)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                padding: '0 36px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {p}
              <span style={{ marginLeft: 36, color: 'var(--line-2)' }}>·</span>
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="sonar-bg"
        style={{ padding: '140px 48px', position: 'relative' }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Reveal>
            <div
              className="kds-mono"
              style={{ fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 32 }}
            >
              ✦ {t.cta.label}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="kds-display"
              style={{ fontSize: 'clamp(56px, 7vw, 120px)', margin: 0, fontWeight: 300, marginBottom: 32 }}
            >
              {t.cta.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                {t.cta.title.split(' ').slice(-1)[0]}
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="kds-sans"
              style={{ fontSize: 18, color: 'var(--ink-dim)', maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.6 }}
            >
              {t.cta.sub}
            </p>
            <Link
              href="/contact/"
              className="kds-sans"
              style={{
                padding: '20px 36px',
                background: 'var(--ink)',
                color: 'var(--bg)',
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              {t.cta.btn}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
            <div
              className="kds-mono"
              style={{
                marginTop: 56,
                fontSize: 12,
                color: 'var(--ink-faint)',
                letterSpacing: '0.18em',
                display: 'flex',
                justifyContent: 'center',
                gap: 40,
              }}
            >
              <a href={`mailto:${t.cta.mail}`}>{t.cta.mail}</a>
              <span>·</span>
              <a href={`tel:${t.cta.tel.replace(/\s/g, '')}`}>{t.cta.tel}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
