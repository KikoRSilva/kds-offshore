'use client';

import Link from 'next/link';
import { KDSMark } from './kds-mark';
import { useSite } from '@/contexts/site-context';
import { en } from '@/content/en';
import { pt } from '@/content/pt';

function FootCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div
        className="kds-mono"
        style={{
          fontSize: 10,
          color: 'var(--ink-faint)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

function FootItem({
  href,
  target,
  rel,
  children,
}: {
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}) {
  const style: React.CSSProperties = {
    fontSize: 13,
    color: 'var(--ink-dim)',
    marginBottom: 8,
    display: 'block',
  };
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="kds-sans" style={style}>
        {children}
      </a>
    );
  }
  return (
    <span className="kds-sans" style={style}>
      {children}
    </span>
  );
}

export function Footer() {
  const { lang } = useSite();
  const t = lang === 'pt' ? pt : en;

  return (
    <footer
      style={{
        padding: '60px 48px 32px',
        borderTop: '1px solid var(--line)',
        background: 'var(--bg)',
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48,
        }}
      >
        <div>
          <Link href="/" aria-label="KDS Offshore – home">
            <KDSMark color="var(--ink)" />
          </Link>
          <p
            className="kds-sans"
            style={{
              fontSize: 13,
              color: 'var(--ink-dim)',
              maxWidth: 320,
              marginTop: 20,
              lineHeight: 1.6,
            }}
          >
            Naval architecture, offshore engineering, and decarbonisation consultancy. Independent,
            since 2016.
          </p>
        </div>

        <FootCol title="Studio">
          <FootItem>{t.foot.addr}</FootItem>
          <FootItem>{t.foot.city}</FootItem>
          <FootItem>{t.foot.hours}</FootItem>
        </FootCol>

        <FootCol title="Contact">
          <FootItem href={`mailto:${t.cta.mail}`}>{t.cta.mail}</FootItem>
          <FootItem href={`tel:${t.cta.tel.replace(/\s/g, '')}`}>{t.cta.tel}</FootItem>
          <FootItem href="https://www.linkedin.com/company/kds-offshore" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </FootItem>
        </FootCol>

        <FootCol title="Legal">
          <FootItem>Privacy</FootItem>
          <FootItem>Cookies</FootItem>
          <FootItem>GDPR · LGPD</FootItem>
        </FootCol>
      </div>

      <div
        style={{
          maxWidth: 1440,
          margin: '64px auto 0',
          paddingTop: 24,
          borderTop: '1px solid var(--line)',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span
          className="kds-mono"
          style={{
            fontSize: 10,
            color: 'var(--ink-faint)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          © 2026 KDS Offshore, Lda.
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
          Designed in Oeiras · NIPC 514 248 091
        </span>
      </div>
    </footer>
  );
}
