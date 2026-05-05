import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description:
    'How KDS Offshore, Lda. (Oeiras, Portugal) collects, uses, retains, and protects personal data under the GDPR and Portuguese Lei 58/2019.',
  alternates: { canonical: '/privacy/' },
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

const H3: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 500,
  margin: '32px 0 12px',
  color: 'var(--ink)',
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Privacy policy', path: '/privacy/' },
        ]}
      />
      <section
        className="sonar-bg"
        style={{ padding: '100px 48px 60px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="kds-mono" style={SECTION_LABEL}>
            Legal · Data protection
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
            Privacy policy.
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
            How we collect, use, retain, and protect personal data when you contact KDS Offshore or
            visit this website. Written to comply with the EU General Data Protection Regulation
            (Regulation 2016/679) and Portuguese Law 58/2019.
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
              01 · Controller
            </div>
            <h2 className="kds-display" style={H2}>
              Who is responsible for your data
            </h2>
            <p className="kds-sans" style={PROSE}>
              The data controller is <strong>KDS Offshore, Lda.</strong>, a private company registered
              in Portugal under NIPC <strong>514 248 091</strong>, with its registered office at Rua
              Ernesto Veiga de Oliveira, Oeiras, Portugal. You can reach us at{' '}
              <a href="mailto:geral@kdsoffshore.pt" style={{ color: 'var(--accent)' }}>
                geral@kdsoffshore.pt
              </a>{' '}
              or +351 213 854 212. Given the size of the studio and the limited scope of personal
              data we process, we have not formally appointed a Data Protection Officer; data
              protection enquiries should be addressed to the email above.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              02 · What we collect
            </div>
            <h2 className="kds-display" style={H2}>
              Categories of personal data
            </h2>
            <p className="kds-sans" style={PROSE}>
              We process the following personal data:
            </p>
            <h3 className="kds-display" style={H3}>
              From the contact form
            </h3>
            <p className="kds-sans" style={PROSE}>
              Name (required), company (required), role (optional), email (required), phone
              (optional), project type, indicative budget, a free-text description of the project,
              and an optional NDA flag. You provide this information directly when you submit the
              form.
            </p>
            <h3 className="kds-display" style={H3}>
              From email and phone correspondence
            </h3>
            <p className="kds-sans" style={PROSE}>
              The contents of any messages you send to <code>geral@kdsoffshore.pt</code> and the
              metadata of phone calls you initiate.
            </p>
            <h3 className="kds-display" style={H3}>
              Server logs and technical data
            </h3>
            <p className="kds-sans" style={PROSE}>
              Standard web server logs (IP address, user agent, requested URL, timestamp, referrer)
              recorded by our hosting provider. These logs are kept transiently for security and
              diagnostic purposes.
            </p>
            <p className="kds-sans" style={PROSE}>
              We do not knowingly collect special-category data (Article 9 GDPR) and we do not
              process data of children under 16.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              03 · Why we process it
            </div>
            <h2 className="kds-display" style={H2}>
              Purposes and legal basis
            </h2>
            <p className="kds-sans" style={PROSE}>
              We process personal data for the following purposes, on the legal bases shown:
            </p>
            <ul className="kds-sans" style={{ ...PROSE, paddingLeft: 24 }}>
              <li>
                <strong>Responding to your enquiry and assessing whether we can take on your
                project</strong> — Article 6(1)(b) GDPR (steps prior to entering a contract).
              </li>
              <li>
                <strong>Performing a contract for engineering services and managing the engagement</strong> —
                Article 6(1)(b) GDPR.
              </li>
              <li>
                <strong>Issuing invoices and meeting our legal accounting and tax obligations</strong> —
                Article 6(1)(c) GDPR (compliance with Portuguese tax law).
              </li>
              <li>
                <strong>Maintaining the security of the website and our systems</strong> — Article
                6(1)(f) GDPR (legitimate interests in protecting our infrastructure, balanced against
                the limited intrusion on you).
              </li>
              <li>
                <strong>Sending occasional studio updates if you have specifically subscribed</strong> —
                Article 6(1)(a) GDPR (consent), which you can withdraw at any time.
              </li>
            </ul>

            <div className="kds-mono" style={SECTION_LABEL}>
              04 · Who we share with
            </div>
            <h2 className="kds-display" style={H2}>
              Recipients and processors
            </h2>
            <p className="kds-sans" style={PROSE}>
              We do not sell personal data. We share it only with carefully selected processors who
              act on our instructions under written agreements that comply with Article 28 GDPR:
            </p>
            <ul className="kds-sans" style={{ ...PROSE, paddingLeft: 24 }}>
              <li>
                <strong>Hosting and database</strong> — our website and contact-form storage are
                operated on infrastructure provided by Supabase, Inc. (with EU-region storage where
                available) and our website host.
              </li>
              <li>
                <strong>Email</strong> — our business email is provided by a standard EU or
                EU-adequate email provider.
              </li>
              <li>
                <strong>Accounting</strong> — invoicing data is shared with our accountants and the
                Portuguese tax authority (Autoridade Tributária e Aduaneira) as required by law.
              </li>
              <li>
                <strong>Professional advisers</strong> — lawyers, auditors, or insurers, only when
                strictly necessary and under duties of confidentiality.
              </li>
            </ul>
            <p className="kds-sans" style={PROSE}>
              We disclose data to public authorities only where we are legally compelled to do so
              and only to the extent required.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              05 · International transfers
            </div>
            <h2 className="kds-display" style={H2}>
              Transfers outside the EEA
            </h2>
            <p className="kds-sans" style={PROSE}>
              Where a processor (for example, a US-headquartered provider) transfers personal data
              outside the European Economic Area, the transfer is protected by an adequacy decision
              of the European Commission, by Standard Contractual Clauses, or by another lawful
              transfer mechanism under Chapter V of the GDPR. You can request a copy of the
              safeguards in place by writing to us.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              06 · How long we keep it
            </div>
            <h2 className="kds-display" style={H2}>
              Retention periods
            </h2>
            <ul className="kds-sans" style={{ ...PROSE, paddingLeft: 24 }}>
              <li>
                <strong>Enquiries that do not lead to an engagement</strong> — up to 24 months after
                the last contact, then deleted.
              </li>
              <li>
                <strong>Engagement records and project deliverables</strong> — for the duration of
                the engagement plus 10 years, in line with the limitation periods that apply to
                engineering professional liability and to commercial obligations under Portuguese
                law.
              </li>
              <li>
                <strong>Invoicing and tax records</strong> — 10 years, as required by Article 123
                of the Portuguese Corporate Income Tax Code (CIRC) and the Portuguese General Tax
                Law.
              </li>
              <li>
                <strong>Server logs</strong> — typically retained for less than 30 days.
              </li>
            </ul>

            <div className="kds-mono" style={SECTION_LABEL}>
              07 · Your rights
            </div>
            <h2 className="kds-display" style={H2}>
              Your rights under the GDPR
            </h2>
            <p className="kds-sans" style={PROSE}>
              You have the right to:
            </p>
            <ul className="kds-sans" style={{ ...PROSE, paddingLeft: 24 }}>
              <li>access your personal data and obtain a copy (Article 15);</li>
              <li>have inaccurate or incomplete data corrected (Article 16);</li>
              <li>have your data erased where the legal grounds apply (Article 17);</li>
              <li>restrict the processing of your data (Article 18);</li>
              <li>receive your data in a portable machine-readable format (Article 20);</li>
              <li>object to processing based on legitimate interests (Article 21);</li>
              <li>
                withdraw consent at any time where processing is based on consent (Article 7(3));
              </li>
              <li>
                not be subject to a decision based solely on automated processing that produces legal
                effects (Article 22) — KDS Offshore does not carry out such automated
                decision-making.
              </li>
            </ul>
            <p className="kds-sans" style={PROSE}>
              To exercise any of these rights, write to{' '}
              <a href="mailto:geral@kdsoffshore.pt" style={{ color: 'var(--accent)' }}>
                geral@kdsoffshore.pt
              </a>
              . We will respond within one month, extendable by a further two months for complex
              requests, in accordance with Article 12 GDPR.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              08 · Complaints
            </div>
            <h2 className="kds-display" style={H2}>
              Lodging a complaint with the supervisory authority
            </h2>
            <p className="kds-sans" style={PROSE}>
              You have the right to lodge a complaint with the Portuguese supervisory authority,{' '}
              <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong>, Av. D. Carlos I, n.º
              134, 1.º, 1200-651 Lisboa,{' '}
              <a
                href="https://www.cnpd.pt/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent)' }}
              >
                cnpd.pt
              </a>
              . You may also lodge a complaint with the supervisory authority of your usual place of
              residence or place of work in the EEA.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              09 · Provision of data
            </div>
            <h2 className="kds-display" style={H2}>
              Whether the provision of data is mandatory
            </h2>
            <p className="kds-sans" style={PROSE}>
              The fields marked as required on our contact form are necessary for us to identify
              you, reply to you, and assess your enquiry. If you choose not to provide them, we will
              not be able to respond. Optional fields can be left blank without consequence.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              10 · Updates
            </div>
            <h2 className="kds-display" style={H2}>
              Changes to this policy
            </h2>
            <p className="kds-sans" style={PROSE}>
              We may update this policy from time to time to reflect changes in our practices or in
              the law. The "Last updated" date at the top of the page indicates when the most recent
              change was made. Material changes will be communicated through this page; for material
              changes that affect ongoing engagements, we will also notify affected clients
              directly.
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
                href="/cookies/"
                className="kds-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-dim)',
                }}
              >
                Cookie policy →
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
