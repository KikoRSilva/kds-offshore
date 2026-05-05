'use client';

import Link from 'next/link';
import { useSite } from '@/contexts/site-context';
import { en } from '@/content/en';
import { pt } from '@/content/pt';

export function ServiceCTA() {
  const { lang } = useSite();
  const t = lang === 'pt' ? pt : en;

  return (
    <section
      className="sonar-bg"
      style={{ padding: '120px 48px', position: 'relative' }}
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
          ✦ Begin
        </div>
        <h2
          className="kds-display"
          style={{ fontSize: 'clamp(48px, 6vw, 96px)', margin: 0, fontWeight: 300 }}
        >
          {lang === 'pt' ? (
            <>
              Vamos falar sobre{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                a sua embarcação.
              </span>
            </>
          ) : (
            <>
              {"Let's talk about "}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>your vessel.</span>
            </>
          )}
        </h2>
        <Link
          href="/contact/"
          className="kds-sans"
          style={{
            marginTop: 48,
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
      </div>
    </section>
  );
}
