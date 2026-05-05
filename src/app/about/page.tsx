'use client';

import { PageHero } from '@/components/page-hero';
import { KDSImage } from '@/components/kds-image';
import { Reveal } from '@/components/reveal';
import { useSite } from '@/contexts/site-context';
import { en } from '@/content/en';
import { pt } from '@/content/pt';

const PORTRAITS = [
  'https://kdsoffshore.pt/wp-content/uploads/2024/04/WhatsApp-Image-2024-03-30-at-23.13.14-jpeg-e1712096005962.webp',
  'https://kdsoffshore.pt/wp-content/uploads/2024/04/DALL%C2%B7E-2024-04-18-18.28.35-An-engineering-design-studio-with-a-team-of-naval-architects-and-offshore-engineers-working-on-computer-aided-design-systems.-The-office-is-equipped-w.webp',
  'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1495556650867-99590cea3657?auto=format&fit=crop&w=800&q=80',
  'https://kdsoffshore.pt/wp-content/uploads/2024/04/DALL%C2%B7E-2024-04-18-18.28.39-A-high-tech-research-and-development-facility-focused-on-marine-technology-featuring-advanced-computational-tools-and-experimental-setups.-The-lab-is.webp',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
];

export default function AboutPage() {
  const { lang } = useSite();
  const p = lang === 'pt' ? pt.pages.about : en.pages.about;

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        lines={[
          { text: p.title1 },
          { text: p.title2, italic: true, accent: true, indent: true },
          { text: `${p.title3} ${p.title4}` },
        ]}
        lede={p.lede}
      />

      <section style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <Reveal>
            <KDSImage
              src="https://kdsoffshore.pt/wp-content/uploads/2024/04/DALL%C2%B7E-2024-04-18-18.28.18-A-modern-corporate-office-with-a-focus-on-environmental-sustainability-featuring-eco-friendly-designs-and-technologies.-The-setting-includes-green-pl.webp"
              aspect="21/9"
              alt="KDS Offshore studio"
              style={{ borderRadius: 4 }}
            />
            <div
              className="kds-mono"
              style={{
                marginTop: 16,
                fontSize: 11,
                color: 'var(--ink-faint)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>fig. 01, {lang === 'pt' ? 'O estúdio, a olhar para sul' : 'The studio, looking south'}</span>
              <span>Rua Ernesto Veiga de Oliveira</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '100px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <Reveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: 80,
                marginBottom: 64,
                alignItems: 'baseline',
              }}
            >
              <div
                className="kds-mono"
                style={{ fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.22em', textTransform: 'uppercase' }}
              >
                {lang === 'pt' ? 'Princípios · 04' : 'Principles · 04'}
              </div>
              <h2
                className="kds-display"
                style={{ fontSize: 'clamp(48px, 5vw, 88px)', margin: 0, fontWeight: 300 }}
              >
                {lang === 'pt' ? 'Como nos comportamos' : 'How we behave'}
                <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>.</span>
              </h2>
            </div>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              borderTop: '1px solid var(--line)',
            }}
          >
            {p.principles.map((pr, i) => (
              <Reveal key={pr.n} delay={i * 0.08}>
                <div
                  style={{
                    padding: '48px 40px 56px',
                    borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <div
                    className="kds-mono"
                    style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.22em', marginBottom: 24 }}
                  >
                    NO. {pr.n}
                  </div>
                  <h4
                    className="kds-display"
                    style={{ fontSize: 32, fontWeight: 400, margin: '0 0 20px', letterSpacing: '-0.015em', lineHeight: 1.15 }}
                  >
                    {pr.t}
                  </h4>
                  <p
                    className="kds-sans"
                    style={{ fontSize: 15, color: 'var(--ink-dim)', lineHeight: 1.65, margin: 0, maxWidth: 480 }}
                  >
                    {pr.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 48px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <Reveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: 64,
                paddingBottom: 24,
                borderBottom: '1px solid var(--line)',
              }}
            >
              <h2 className="kds-display" style={{ fontSize: 'clamp(48px, 5vw, 88px)', margin: 0, fontWeight: 300 }}>
                {lang === 'pt' ? 'Dez anos' : 'Ten years'}
                <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>.</span>
              </h2>
              <span
                className="kds-mono"
                style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.22em', textTransform: 'uppercase' }}
              >
                2016 → 2026
              </span>
            </div>
          </Reveal>

          <div>
            {p.story.map((s, i) => (
              <Reveal key={s.y} delay={i * 0.06}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 280px 1fr 60px',
                    gap: 32,
                    alignItems: 'baseline',
                    padding: '36px 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <span
                    className="kds-display"
                    style={{ fontSize: 36, fontWeight: 300, color: 'var(--accent)', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {s.y}
                  </span>
                  <span
                    className="kds-display"
                    style={{ fontSize: 22, fontWeight: 400, letterSpacing: '-0.01em' }}
                  >
                    {s.t}
                  </span>
                  <span
                    className="kds-sans"
                    style={{ fontSize: 15, color: 'var(--ink-dim)', lineHeight: 1.55 }}
                  >
                    {s.d}
                  </span>
                  <span
                    className="kds-mono"
                    style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.18em', textAlign: 'right' }}
                  >
                    ·{String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <Reveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: 56,
              }}
            >
              <h2 className="kds-display" style={{ fontSize: 'clamp(48px, 5vw, 88px)', margin: 0, fontWeight: 300 }}>
                {lang === 'pt' ? 'Os ' : 'The '}<span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{lang === 'pt' ? 'seis' : 'six'}</span>{lang === 'pt' ? ' de nós.' : ' of us.'}
              </h2>
              <span
                className="kds-mono"
                style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.22em', textTransform: 'uppercase' }}
              >
                {lang === 'pt' ? 'Engenheiros · 06' : 'Engineers · 06'}
              </span>
            </div>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderTop: '1px solid var(--line)',
            }}
          >
            {p.team.map((m, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div
                  style={{
                    padding: '32px 28px 40px',
                    borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--line)' : 'none',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <KDSImage
                    src={PORTRAITS[i]}
                    aspect="4/5"
                    alt={m.name}
                    style={{ marginBottom: 24, borderRadius: 4 }}
                  />
                  <div
                    className="kds-mono"
                    style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}
                  >
                    {m.role}
                  </div>
                  <h4
                    className="kds-display"
                    style={{ fontSize: 22, fontWeight: 400, margin: '0 0 12px', letterSpacing: '-0.01em' }}
                  >
                    {m.name}
                  </h4>
                  <p
                    className="kds-sans"
                    style={{ fontSize: 13, color: 'var(--ink-dim)', lineHeight: 1.6, margin: 0 }}
                  >
                    {m.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Reveal>
            <div
              className="kds-mono"
              style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 32 }}
            >
              ✦ {lang === 'pt' ? 'Sócio fundador' : 'Founding partner'}
            </div>
            <blockquote
              className="kds-display"
              style={{
                fontSize: 'clamp(28px, 3vw, 44px)',
                margin: 0,
                fontWeight: 300,
                lineHeight: 1.3,
                fontStyle: 'italic',
              }}
            >
              {lang === 'pt'
                ? '"Saímos do IST com uma tese: que a engenharia cuidadosa, aplicada com calma, pode fazer uma diferença mensurável. Dez anos e mais de cem projetos depois, ainda acreditamos nisso, e os dados confirmam."'
                : '"We came out of IST with a thesis: that careful engineering, calmly applied, can make a measurable difference. Ten years and one hundred-plus projects later, we still believe it, and the data backs us up."'
              }
            </blockquote>
            <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--line)' }}>
              <div className="kds-sans" style={{ fontSize: 14 }}>Sérgio Ribeiro e Silva</div>
              <div
                className="kds-mono"
                style={{ fontSize: 11, color: 'var(--ink-dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
              >
                {lang === 'pt' ? 'Sócio fundador · Arquitetura naval' : 'Founding partner · Naval architecture'}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
