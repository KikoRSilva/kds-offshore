'use client';

import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { KDSImage } from '@/components/kds-image';
import { Reveal } from '@/components/reveal';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';
import { useLocale, useMessages } from 'next-intl';

const SITE_URL = 'https://kdsoffshore.pt';

const FOUNDER_PERSON_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/about/#sergio-ribeiro-e-silva`,
  name: 'Sérgio Ribeiro e Silva',
  givenName: 'Sérgio',
  familyName: 'Ribeiro e Silva',
  honorificPrefix: 'Dr.',
  honorificSuffix: 'PhD',
  jobTitle: 'CEO & Founder · Principal Naval Architect',
  description:
    'Founder of KDS Offshore. Naval architect, hydrodynamicist, and author of the Ship@Sea time-domain simulation code.',
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Instituto Superior Técnico, University of Lisbon',
      url: 'https://tecnico.ulisboa.pt/',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'University College London',
      url: 'https://www.ucl.ac.uk/',
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      educationalLevel: 'Doctorate (PhD)',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Instituto Superior Técnico, University of Lisbon' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      educationalLevel: 'MSc Naval Architecture',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: 'University College London' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      educationalLevel: 'MSc Mechanical Engineering',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Instituto Superior Técnico, University of Lisbon' },
    },
  ],
  worksFor: { '@id': `${SITE_URL}/#organization` },
  knowsAbout: [
    'Naval architecture',
    'Offshore engineering',
    'Hydrodynamics',
    'Computational fluid dynamics',
    'Ship manoeuvrability prediction',
    'Mooring system design',
    'Parametric rolling',
    'Time-domain seakeeping simulation',
    'Maritime decarbonisation',
  ],
  knowsLanguage: ['en', 'pt'],
  nationality: { '@type': 'Country', name: 'Portugal' },
  workLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Ernesto Veiga de Oliveira, nº 22, lote 8, R/C Esq.',
      postalCode: '2780-052',
      addressLocality: 'Oeiras',
      addressCountry: 'PT',
    },
  },
  sameAs: [
    'https://www.linkedin.com/in/sergio-ribeiro-e-silva-39110322/',
    'https://scholar.google.pt/citations?user=K6-RZXQAAAAJ&hl=en',
    'http://www.maretec.org/en/about-us/team/SergioSilva',
  ],
  url: `${SITE_URL}/team/sergio-ribeiro-e-silva/`,
};

const PORTRAITS = [
  '/images/kds/portrait-sergio.webp',
  '/images/kds/studio-engineering-team.webp',
  '/images/stock/vessel-ocean.jpg',
  '/images/stock/port-cranes.jpg',
  '/images/kds/studio-rd-lab.webp',
  '/images/stock/team-collab.jpg',
];

export default function AboutView() {
  const lang = useLocale();
  const p = useMessages().pages.about;

  return (
    <>
      <BreadcrumbJsonLd
        locale={lang}
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about/' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FOUNDER_PERSON_JSONLD) }}
      />
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
              src="/images/kds/studio-eco-office.webp"
              aspect="21/9"
              alt="KDS Offshore studio"
              parallax
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
              <span>Rua Ernesto Veiga de Oliveira, nº 22 · Oeiras</span>
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
                {lang === 'pt' ? 'Uma equipa de ' : 'A team of '}
                <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                  {lang === 'pt' ? 'quatro a oito' : 'four to eight'}
                </span>
                {lang === 'pt' ? '.' : '.'}
              </h2>
              <span
                className="kds-mono"
                style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.22em', textTransform: 'uppercase' }}
              >
                {lang === 'pt' ? '4 sócios · até 4 colaboradores' : '4 principals · up to 4 collaborators'}
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
            {p.team.map((m, i) => {
              const isFounder = i === 0;
              return (
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
                    {isFounder && (
                      <Link
                        href="/team/sergio-ribeiro-e-silva/"
                        className="kds-mono"
                        style={{
                          display: 'inline-block',
                          marginTop: 20,
                          fontSize: 10,
                          letterSpacing: '0.22em',
                          textTransform: 'uppercase',
                          color: 'var(--accent)',
                        }}
                      >
                        Read full profile →
                      </Link>
                    )}
                  </div>
                </Reveal>
              );
            })}
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
            {/* Studio epigraph — the line that runs across every internal
                document and every public deck since 2016. Kept as a quiet
                colophon at the bottom of /about, not a marketing tagline. */}
            <div
              style={{
                marginTop: 80,
                paddingTop: 32,
                borderTop: '1px solid var(--line)',
                textAlign: 'center',
              }}
            >
              <p
                className="kds-display"
                style={{
                  fontSize: 'clamp(18px, 1.6vw, 22px)',
                  color: 'var(--ink-dim)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  margin: 0,
                  lineHeight: 1.5,
                  letterSpacing: '0.01em',
                }}
              >
                {lang === 'pt'
                  ? 'Combinar experiência, inovação e tecnologia para corresponder às exigências mais rigorosas dos nossos clientes.'
                  : 'Combining experience, innovation, and technology to meet customer exacting requirements.'}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
