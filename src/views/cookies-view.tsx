import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';

export const metadata: Metadata = {
  title: 'Cookie policy',
  description:
    'Which cookies and similar technologies KDS Offshore uses on this website, why we use them, and how you can manage your preferences.',
  alternates: { canonical: '/cookies/' },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = '5 May 2026';

const SECTION_LABEL: React.CSSProperties = {
  fontSize: 11,
  color: 'var(--ink-faint)',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  marginBottom: 24,
  marginTop: 56,
};

const PROSE: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.75,
  color: 'var(--ink-dim)',
  maxWidth: 760,
  margin: 0,
};

const H2: React.CSSProperties = {
  fontSize: 32,
  fontWeight: 400,
  letterSpacing: '-0.01em',
  margin: '0 0 24px',
  color: 'var(--ink)',
};

const TABLE: React.CSSProperties = {
  width: '100%',
  maxWidth: 760,
  borderCollapse: 'collapse',
  marginTop: 24,
  fontSize: 14,
};

const TH: React.CSSProperties = {
  textAlign: 'left',
  padding: '12px 16px',
  borderBottom: '1px solid var(--line-2)',
  fontFamily: 'var(--font-jetbrains)',
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--ink-faint)',
};

const TD: React.CSSProperties = {
  padding: '14px 16px',
  borderBottom: '1px solid var(--line)',
  color: 'var(--ink-dim)',
  verticalAlign: 'top',
};

export default function CookiesView() {
  const lang = useLocale();
  return (
    <>
      <BreadcrumbJsonLd
        locale={lang}
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Cookie policy', path: '/cookies/' },
        ]}
      />
      <section
        className="sonar-bg"
        style={{ padding: '100px 48px 60px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="kds-mono" style={SECTION_LABEL}>
            Legal · Cookies
          </div>
          <h1
            className="kds-display"
            style={{
              fontSize: 'clamp(56px, 7vw, 112px)',
              margin: 0,
              fontWeight: 300,
              lineHeight: 0.95,
            }}
          >
            Cookie policy.
          </h1>
          <p
            className="kds-sans"
            style={{
              fontSize: 18,
              color: 'var(--ink-dim)',
              maxWidth: 720,
              marginTop: 40,
              lineHeight: 1.6,
            }}
          >
            We try to use as few cookies as possible. This page lists every cookie and similar
            technology that may be set when you visit kdsoffshore.pt, why it exists, and how you can
            switch it off. Written to comply with the ePrivacy Directive 2002/58/EC, the GDPR, and
            current EDPB and CNPD guidance.
          </p>
          <div className="kds-mono" style={{ ...SECTION_LABEL, marginTop: 32, marginBottom: 0 }}>
            Last updated · {LAST_UPDATED}
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 48px 120px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <article style={{ maxWidth: 760 }}>
            <div className="kds-mono" style={SECTION_LABEL}>
              01 · What is a cookie
            </div>
            <h2 className="kds-display" style={H2}>
              The basics
            </h2>
            <p className="kds-sans" style={PROSE}>
              A cookie is a small text file that a website places on your device to remember
              something about you between page loads or visits. Similar technologies — such as
              browser local storage, session storage, and pixel tags — work differently but raise
              the same questions about consent and tracking, and we treat them under this policy in
              the same way.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              02 · The categories we recognise
            </div>
            <h2 className="kds-display" style={H2}>
              Strictly necessary, functional, analytics, marketing
            </h2>
            <p className="kds-sans" style={PROSE}>
              We classify cookies into four categories:
            </p>
            <ul className="kds-sans" style={{ ...PROSE, paddingLeft: 24 }}>
              <li>
                <strong>Strictly necessary</strong> — required for the website to function (for
                example, to remember your language choice during a single visit). These do not
                require consent.
              </li>
              <li>
                <strong>Functional</strong> — improve usability without tracking you across sites.
                These are set only after you give consent.
              </li>
              <li>
                <strong>Analytics</strong> — help us understand which pages are read and where
                visitors come from. These are set only after you give consent.
              </li>
              <li>
                <strong>Marketing / advertising</strong> — used to build profiles for advertising.
                We do not currently use any cookies in this category.
              </li>
            </ul>

            <div className="kds-mono" style={SECTION_LABEL}>
              03 · The current inventory
            </div>
            <h2 className="kds-display" style={H2}>
              Cookies actually used on kdsoffshore.pt
            </h2>
            <p className="kds-sans" style={PROSE}>
              The list below is the complete inventory at the date of last update. We re-audit it
              whenever we change the website.
            </p>
            <div style={{ overflowX: 'auto', marginTop: 16 }}>
              <table className="kds-sans" style={TABLE}>
                <thead>
                  <tr>
                    <th style={TH}>Name</th>
                    <th style={TH}>Category</th>
                    <th style={TH}>Purpose</th>
                    <th style={TH}>Provider</th>
                    <th style={TH}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={TD}>
                      <code>kds-lang</code>
                    </td>
                    <td style={TD}>Strictly necessary</td>
                    <td style={TD}>
                      Remembers your choice of language (English or Portuguese) during your visit.
                    </td>
                    <td style={TD}>KDS Offshore (first party)</td>
                    <td style={TD}>Session</td>
                  </tr>
                  <tr>
                    <td style={TD}>
                      <code>kds-theme</code>
                    </td>
                    <td style={TD}>Strictly necessary</td>
                    <td style={TD}>Remembers your light/dark theme preference.</td>
                    <td style={TD}>KDS Offshore (first party)</td>
                    <td style={TD}>Up to 12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="kds-sans" style={{ ...PROSE, marginTop: 16, fontSize: 14 }}>
              We currently do not run third-party analytics or advertising cookies. If we add any in
              the future, this table will be updated and we will request your consent through a
              banner before they fire for the first time.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              04 · How consent works on this site
            </div>
            <h2 className="kds-display" style={H2}>
              Consent before non-essential cookies
            </h2>
            <p className="kds-sans" style={PROSE}>
              Strictly necessary cookies are placed automatically because the website cannot
              function without them. For any non-essential cookie, we obtain your prior, freely
              given, specific, informed, and unambiguous consent through a banner that:
            </p>
            <ul className="kds-sans" style={{ ...PROSE, paddingLeft: 24 }}>
              <li>blocks all non-essential cookies until you accept them;</li>
              <li>
                presents <em>Accept all</em>, <em>Reject all</em>, and <em>Manage preferences</em>{' '}
                buttons with equal visual prominence;
              </li>
              <li>does not use pre-ticked boxes or other dark patterns;</li>
              <li>lets you grant consent on a per-category basis; and</li>
              <li>lets you change or withdraw your consent at any time.</li>
            </ul>

            <div className="kds-mono" style={SECTION_LABEL}>
              05 · Managing your preferences
            </div>
            <h2 className="kds-display" style={H2}>
              How to change or withdraw consent
            </h2>
            <p className="kds-sans" style={PROSE}>
              You can:
            </p>
            <ul className="kds-sans" style={{ ...PROSE, paddingLeft: 24 }}>
              <li>
                Re-open the consent banner from the link in the footer (when one is shown) and
                update your choices.
              </li>
              <li>
                Block or delete cookies through your browser. The exact path depends on the browser
                — see the help pages for{' '}
                <a
                  href="https://support.google.com/accounts/answer/61416"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                >
                  Chrome
                </a>
                ,{' '}
                <a
                  href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                >
                  Firefox
                </a>
                ,{' '}
                <a
                  href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                >
                  Safari
                </a>
                , and{' '}
                <a
                  href="https://support.microsoft.com/en-gb/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                >
                  Edge
                </a>
                .
              </li>
              <li>
                Set your browser to send a Global Privacy Control (GPC) signal — we honour it as a
                request to reject non-essential cookies and to opt out of any data sharing.
              </li>
            </ul>
            <p className="kds-sans" style={PROSE}>
              Blocking strictly necessary cookies may break the site. Blocking non-essential cookies
              has no impact on the functionality of the site.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              06 · More information
            </div>
            <h2 className="kds-display" style={H2}>
              Where this fits with our privacy policy
            </h2>
            <p className="kds-sans" style={PROSE}>
              This cookie policy explains the technical mechanisms; our{' '}
              <Link href="/privacy/" style={{ color: 'var(--accent)' }}>
                privacy policy
              </Link>{' '}
              explains what we do with the personal data those mechanisms collect, your rights, and
              how to contact us.
            </p>

            <div
              style={{
                marginTop: 80,
                paddingTop: 32,
                borderTop: '1px solid var(--line)',
                display: 'flex',
                gap: 24,
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/privacy/"
                className="kds-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-dim)',
                }}
              >
                Privacy policy →
              </Link>
              <Link
                href="/legal/"
                className="kds-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-dim)',
                }}
              >
                Legal notice →
              </Link>
              <Link
                href="/contact/"
                className="kds-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-dim)',
                }}
              >
                Contact us →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
