'use client';

import { useState } from 'react';
import { PageHero } from '@/components/page-hero';
import { ServiceCTA } from '@/components/service-cta';
import { KDSImage } from '@/components/kds-image';
import { Reveal } from '@/components/reveal';
import { useSite } from '@/contexts/site-context';
import { en } from '@/content/en';
import { pt } from '@/content/pt';

const CASE_IMGS = [
  'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1495556650867-99590cea3657?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1595503240812-7286dafaddc1?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1599580546666-c8f5cccd2cb1?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1500627964684-141351970a7f?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?auto=format&fit=crop&w=1600&q=80',
];

export default function WorkPage() {
  const { lang } = useSite();
  const p = en.pages.cases;
  const pp = lang === 'pt' ? pt.pages.cases : en.pages.cases;
  const [filter, setFilter] = useState('All');

  const enFilters = p.filters;
  const ptFilters = ['Todos', 'Arquitetura naval', 'Manobrabilidade & CFD', 'Descarbonização', 'Amarração & offshore', 'I&D'];
  const filters = lang === 'pt' ? ptFilters : enFilters;

  const activeAll = filter === 'All' || filter === 'Todos';
  const getEnglishFilter = (f: string) => {
    const idx = ptFilters.indexOf(f);
    return idx > 0 ? enFilters[idx] : f;
  };

  return (
    <>
      <PageHero
        eyebrow={pp.eyebrow}
        lines={[
          { text: pp.title1 },
          { text: pp.title2, italic: true, accent: true, indent: true },
        ]}
        lede={pp.lede}
      />

      <section style={{ padding: '40px 48px 0' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <span
            className="kds-mono"
            style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.22em', textTransform: 'uppercase', marginRight: 12 }}
          >
            {lang === 'pt' ? 'Filtrar:' : 'Filter:'}
          </span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="kds-mono"
              style={{
                padding: '10px 18px',
                border: `1px solid ${filter === f ? 'var(--ink)' : 'var(--line-2)'}`,
                borderRadius: 999,
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: filter === f ? 'var(--ink)' : 'var(--ink-dim)',
                background: filter === f ? 'var(--bg-2)' : 'none',
                cursor: 'pointer',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 48px 100px' }}>
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 32,
          }}
        >
          {p.items
            .filter((c) => activeAll || c.category === getEnglishFilter(filter))
            .map((c, i) => {
              const colSpan = c.span === 'wide' ? 8 : c.span === 'tall' ? 4 : 6;
              const aspect = c.span === 'wide' ? '16/9' : c.span === 'tall' ? '3/4' : '5/4';
              const titleSize = c.span === 'wide' ? 32 : 24;

              return (
                <Reveal key={i} delay={i * 0.06}>
                  <a
                    href="#"
                    style={{
                      gridColumn: `span ${colSpan}`,
                      display: 'block',
                      marginTop: i === 2 ? 56 : 0,
                    }}
                  >
                    <KDSImage
                      src={CASE_IMGS[i]}
                      aspect={aspect}
                      alt={c.t}
                      style={{ marginBottom: 20, borderRadius: 4 }}
                      overlay={
                        <div
                          className="kds-mono"
                          style={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            fontSize: 10,
                            color: '#fff',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            background: 'rgba(0,0,0,0.55)',
                            backdropFilter: 'blur(8px)',
                            padding: '6px 12px',
                            border: '1px solid rgba(255,255,255,0.2)',
                          }}
                        >
                          {c.stat}
                        </div>
                      }
                    />
                    <div
                      className="kds-mono"
                      style={{
                        fontSize: 11,
                        color: 'var(--accent)',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        marginBottom: 10,
                      }}
                    >
                      {c.tag}
                    </div>
                    <h3
                      className="kds-display"
                      style={{ fontSize: titleSize, fontWeight: 400, margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.15 }}
                    >
                      {c.t}
                    </h3>
                    <p
                      className="kds-sans"
                      style={{
                        fontSize: 14,
                        color: 'var(--ink-dim)',
                        lineHeight: 1.6,
                        margin: '0 0 16px',
                        maxWidth: c.span === 'wide' ? 720 : 480,
                      }}
                    >
                      {c.detail}
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        paddingTop: 12,
                        borderTop: '1px solid var(--line)',
                      }}
                    >
                      <span className="kds-sans" style={{ fontSize: 13, color: 'var(--ink-dim)' }}>
                        {c.client}{' '}
                        <span style={{ color: 'var(--ink-faint)' }}>· {c.loc}</span>
                      </span>
                      <span
                        className="kds-mono"
                        style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.16em', fontVariantNumeric: 'tabular-nums' }}
                      >
                        {c.year}
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
        </div>
      </section>

      <section style={{ padding: '60px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <div
              className="kds-mono"
              style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 20 }}
            >
              ✦ {lang === 'pt' ? 'Uma nota sobre confidencialidade' : 'A note on confidentiality'}
            </div>
            <p
              className="kds-display"
              style={{
                fontSize: 'clamp(24px, 2.4vw, 36px)',
                margin: 0,
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.4,
                color: 'var(--ink-dim)',
              }}
            >
              {lang === 'pt'
                ? <>A maioria do que fazemos nunca aparece nesta página. Defesa, óleo & gás e muitos clientes comerciais preferem assim. <span style={{ color: 'var(--ink)', fontStyle: 'normal' }}>Referências disponíveis a pedido.</span></>
                : <>Most of what we do never appears on this page. Defence, oil &amp; gas, and a number of commercial clients prefer it that way. <span style={{ color: 'var(--ink)', fontStyle: 'normal' }}>References available on request.</span></>
              }
            </p>
          </Reveal>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
