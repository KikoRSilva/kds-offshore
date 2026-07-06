import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  description:
    'The page you asked for is not on our charts. Return to the KDS Offshore office via the links below.',
  robots: { index: false, follow: false },
};

const DESTINATIONS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Work', href: '/work/' },
  { label: 'Journal', href: '/journal/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export default function NotFoundView() {
  return (
    <section
      className="sonar-bg"
      style={{
        minHeight: '78vh',
        padding: '120px 48px 100px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}
      >
        <div
          className="kds-mono"
          style={{
            fontSize: 11,
            color: 'var(--ink-dim)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: 40,
          }}
        >
          Error · 404 · Page not found
        </div>

        <h1
          className="kds-display"
          aria-label="Past the chart edge."
          style={{
            fontSize: 'clamp(64px, 8.5vw, 156px)',
            margin: 0,
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
          }}
        >
          Past the chart{' '}
          <br />
          <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>edge.</span>
        </h1>

        <p
          className="kds-sans"
          style={{
            fontSize: 18,
            color: 'var(--ink-dim)',
            lineHeight: 1.6,
            maxWidth: 620,
            marginTop: 48,
          }}
        >
          The page you asked for is not on our charts. It may have been moved,
          renamed, or never existed — most often it was a stale link. The
          destinations below will bring you back inside the basin.
        </p>

        <div
          role="navigation"
          aria-label="Primary destinations"
          style={{
            marginTop: 64,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            borderTop: '1px solid var(--line)',
          }}
        >
          {DESTINATIONS.map(({ label, href }, i) => (
            <Link
              key={href}
              href={href}
              className="kds-mono"
              style={{
                padding: '24px 0',
                fontSize: 13,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--ink-dim)',
                borderBottom: '1px solid var(--line)',
                borderRight:
                  (i + 1) % 3 === 0
                    ? 'none'
                    : '1px solid var(--line)',
                paddingLeft: 20,
              }}
            >
              {label} →
            </Link>
          ))}
        </div>

        <div
          className="kds-mono"
          style={{
            marginTop: 64,
            fontSize: 10,
            color: 'var(--ink-faint)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          ✦ If a link from elsewhere brought you here, write to{' '}
          <a
            href="mailto:geral@kdsoffshore.pt"
            style={{ color: 'var(--accent)' }}
          >
            geral@kdsoffshore.pt
          </a>{' '}
          and we will fix it.
        </div>
      </div>
    </section>
  );
}
