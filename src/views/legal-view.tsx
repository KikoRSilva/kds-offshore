import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';

export const metadata: Metadata = {
  title: 'Legal notice',
  description:
    'Legal notice for KDS Offshore, Lda., Oeiras, Portugal — company identification, supervisory bodies, and terms of website use under Decreto-Lei 7/2004.',
  alternates: { canonical: '/legal/' },
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

const DEF_LIST: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  gap: '12px 32px',
  margin: '24px 0',
  fontSize: 15,
  lineHeight: 1.6,
  color: 'var(--ink-dim)',
};

const DT: React.CSSProperties = {
  fontFamily: 'var(--font-jetbrains)',
  fontSize: 11,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--ink-faint)',
  paddingTop: 4,
};

export default function LegalView() {
  const lang = useLocale();
  return (
    <>
      <BreadcrumbJsonLd
        locale={lang}
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Legal notice', path: '/legal/' },
        ]}
      />
      <section
        className="sonar-bg"
        style={{ padding: '100px 48px 60px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="kds-mono" style={SECTION_LABEL}>
            Legal · Notice
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
            Legal notice.
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
            Mandatory disclosures about the operator of this website under Article 10 of Portuguese
            Decreto-Lei 7/2004 (transposing EU Directive 2000/31/EC on electronic commerce), and the
            terms that govern your use of the site.
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
              01 · Operator
            </div>
            <h2 className="kds-display" style={H2}>
              Who operates this website
            </h2>
            <p className="kds-sans" style={PROSE}>
              This website is operated by:
            </p>
            <dl style={DEF_LIST}>
              <dt style={DT}>Legal name</dt>
              <dd style={{ margin: 0 }}>KDS Offshore, Lda.</dd>

              <dt style={DT}>Registered office</dt>
              <dd style={{ margin: 0 }}>Rua Ernesto Veiga de Oliveira, nº 22, lote 8, R/C Esq., 2780-052 Oeiras, Portugal</dd>

              <dt style={DT}>Email</dt>
              <dd style={{ margin: 0 }}>
                <a href="mailto:geral@kdsoffshore.pt" style={{ color: 'var(--accent)' }}>
                  geral@kdsoffshore.pt
                </a>
              </dd>

              <dt style={DT}>Telephone</dt>
              <dd style={{ margin: 0 }}>
                <a href="tel:+351929111655" style={{ color: 'var(--accent)' }}>
                  +351 929 111 655
                </a>
              </dd>

              <dt style={DT}>NIPC / VAT</dt>
              <dd style={{ margin: 0 }}>514 248 091 (PT 514 248 091)</dd>

              <dt style={DT}>Commercial registry</dt>
              <dd style={{ margin: 0 }}>
                Conservatória do Registo Comercial — registry number identical to NIPC
              </dd>

              <dt style={DT}>Share capital</dt>
              <dd style={{ margin: 0 }}>Available on request</dd>

              <dt style={DT}>Founded</dt>
              <dd style={{ margin: 0 }}>2016, in Oeiras, Portugal</dd>
            </dl>

            <div className="kds-mono" style={SECTION_LABEL}>
              02 · Regulated activity
            </div>
            <h2 className="kds-display" style={H2}>
              Professional regulation
            </h2>
            <p className="kds-sans" style={PROSE}>
              Engineering work in Portugal is a regulated profession. KDS Offshore engineers
              registered with the <strong>Ordem dos Engenheiros</strong> (Portuguese Engineers'
              Association,{' '}
              <a
                href="https://www.ordemengenheiros.pt/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent)' }}
              >
                ordemengenheiros.pt
              </a>
              ) practise under that body's professional and ethical rules. Where a deliverable
              requires the formal signature of a chartered engineer, that signature is provided in
              accordance with the Ordem's regulations.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              03 · Supervisory authorities
            </div>
            <h2 className="kds-display" style={H2}>
              Bodies that supervise our online activity
            </h2>
            <p className="kds-sans" style={PROSE}>
              Two Portuguese authorities supervise different aspects of our online activity:
            </p>
            <ul className="kds-sans" style={{ ...PROSE, paddingLeft: 24 }}>
              <li>
                <strong>ICP-ANACOM</strong> (Autoridade Nacional de Comunicações,{' '}
                <a
                  href="https://www.anacom.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                >
                  anacom.pt
                </a>
                ) — central supervisory entity for information-society and electronic-commerce
                services under Decreto-Lei 7/2004.
              </li>
              <li>
                <strong>Comissão Nacional de Proteção de Dados</strong> (CNPD,{' '}
                <a
                  href="https://www.cnpd.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent)' }}
                >
                  cnpd.pt
                </a>
                ) — Portuguese data protection supervisory authority for the GDPR and Lei 58/2019.
              </li>
            </ul>

            <div className="kds-mono" style={SECTION_LABEL}>
              04 · Purpose of this website
            </div>
            <h2 className="kds-display" style={H2}>
              What this site is for
            </h2>
            <p className="kds-sans" style={PROSE}>
              kdsoffshore.pt is an editorial and informational website. It describes our practice,
              services, and selected projects, and it allows prospective clients to make initial
              contact. It is not a transactional or e-commerce platform: no goods or services are
              sold, ordered, or delivered through this site. Engineering engagements are governed
              by separate written contracts negotiated outside the website.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              05 · Use of this website
            </div>
            <h2 className="kds-display" style={H2}>
              Terms of use
            </h2>
            <p className="kds-sans" style={PROSE}>
              By using this website you agree that:
            </p>
            <ul className="kds-sans" style={{ ...PROSE, paddingLeft: 24 }}>
              <li>
                You will not use the site or its contact form to transmit content that is unlawful,
                infringing, harmful, or misleading.
              </li>
              <li>
                You will not attempt to compromise the security or availability of the site, or to
                access areas that are not made publicly available.
              </li>
              <li>
                You are responsible for the accuracy of any information you submit through the
                contact form. You confirm that you are entitled to submit it.
              </li>
              <li>
                The site is provided "as is". We work to keep the information accurate and current,
                but we make no warranty of any kind, express or implied, about its completeness,
                reliability, or fitness for any particular purpose.
              </li>
            </ul>

            <div className="kds-mono" style={SECTION_LABEL}>
              06 · Intellectual property
            </div>
            <h2 className="kds-display" style={H2}>
              Ownership of content
            </h2>
            <p className="kds-sans" style={PROSE}>
              All content on this website — including text, images, graphics, layout, design,
              software, the KDS Offshore name, and the KDS Offshore mark — is owned by KDS Offshore,
              Lda. or its licensors and is protected by Portuguese, EU, and international
              intellectual-property law. You may share short excerpts and links to our pages with
              appropriate attribution. Any other use, including reproduction, redistribution,
              adaptation, or use of our marks, requires our prior written consent. Project names,
              vessel names, and client names mentioned on the site belong to their respective
              owners and appear with permission where confidentiality applies.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              07 · Liability
            </div>
            <h2 className="kds-display" style={H2}>
              Limits of liability for the website
            </h2>
            <p className="kds-sans" style={PROSE}>
              To the fullest extent permitted by Portuguese law, KDS Offshore is not liable for
              indirect, incidental, or consequential losses arising from your use of, or inability
              to use, this website. Nothing in this notice limits or excludes liability that cannot
              be limited or excluded by law (including liability for death or personal injury caused
              by negligence, fraud, or any other liability that cannot be excluded under Portuguese
              consumer-protection or professional-liability law). The professional liability
              attaching to specific engineering deliverables is governed by the engagement contract
              and by the Ordem dos Engenheiros' rules, not by this website notice.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              08 · External links
            </div>
            <h2 className="kds-display" style={H2}>
              Linked third-party sites
            </h2>
            <p className="kds-sans" style={PROSE}>
              This website contains links to sites operated by third parties (for example, partner
              organisations, regulators, and academic institutions). We are not responsible for the
              content, privacy practices, or availability of those sites. A link from us to another
              site is not an endorsement.
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              09 · Out-of-court dispute resolution
            </div>
            <h2 className="kds-display" style={H2}>
              How to escalate a complaint
            </h2>
            <p className="kds-sans" style={PROSE}>
              If you have a complaint about this website or our online activity, please first
              contact us at{' '}
              <a href="mailto:geral@kdsoffshore.pt" style={{ color: 'var(--accent)' }}>
                geral@kdsoffshore.pt
              </a>
              . If a consumer dispute remains unresolved, EU consumers may use the European
              Commission's online dispute-resolution platform at{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent)' }}
              >
                ec.europa.eu/consumers/odr
              </a>
              . Portuguese consumers may also contact the relevant alternative dispute resolution
              entity listed by the Direção-Geral do Consumidor (
              <a
                href="https://www.consumidor.gov.pt/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent)' }}
              >
                consumidor.gov.pt
              </a>
              ).
            </p>

            <div className="kds-mono" style={SECTION_LABEL}>
              10 · Governing law and jurisdiction
            </div>
            <h2 className="kds-display" style={H2}>
              Applicable law
            </h2>
            <p className="kds-sans" style={PROSE}>
              This notice and your use of this website are governed by Portuguese law. The courts of
              Lisbon have exclusive jurisdiction to resolve any dispute, save where mandatory rules
              of consumer-protection law confer jurisdiction on the courts of the consumer's place
              of residence.
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
