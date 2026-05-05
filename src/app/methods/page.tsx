import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';

const SITE_URL = 'https://kdsoffshore.pt';

export const metadata: Metadata = {
  title: 'Methods',
  description:
    'How KDS Offshore runs CFD, FEA, mooring, and seakeeping work — meshing standards, validation protocols, class-society liaison, documentation rules.',
  alternates: { canonical: '/methods/' },
  openGraph: {
    title: 'Methods — KDS Offshore',
    description:
      'How we run CFD, FEA, mooring, and seakeeping work. Meshing standards, validation protocols, documentation rules.',
    url: `${SITE_URL}/methods/`,
    type: 'article',
  },
};

const SECTION_LABEL: React.CSSProperties = {
  fontSize: 11,
  color: 'var(--ink-faint)',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  marginBottom: 24,
};

const PROSE: React.CSSProperties = {
  fontSize: 17,
  lineHeight: 1.75,
  color: 'var(--ink-dim)',
  maxWidth: 760,
  margin: '0 0 22px',
};

const H2: React.CSSProperties = {
  fontSize: 'clamp(28px, 3vw, 44px)',
  fontWeight: 300,
  letterSpacing: '-0.01em',
  margin: '0 0 32px',
  color: 'var(--ink)',
  lineHeight: 1.05,
};

const H3: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 500,
  margin: '40px 0 16px',
  color: 'var(--ink)',
};

export default function MethodsPage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${SITE_URL}/methods/#article`,
    mainEntityOfPage: `${SITE_URL}/methods/`,
    headline: 'How we work — methods at KDS Offshore',
    description:
      'How KDS Offshore runs CFD, FEA, mooring, and seakeeping work — meshing standards, validation protocols, class-society liaison, documentation rules.',
    articleSection: 'Methodology',
    inLanguage: 'en-GB',
    datePublished: '2026-05-05',
    dateModified: '2026-05-05',
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    proficiencyLevel: 'Expert',
    about: [
      'Computational fluid dynamics',
      'Finite element analysis',
      'Mooring analysis',
      'Time-domain seakeeping simulation',
      'Class-society liaison',
    ],
  };

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Methods', path: '/methods/' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* HERO */}
      <section
        className="sonar-bg"
        style={{ padding: '100px 48px 60px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="kds-mono" style={SECTION_LABEL}>
            Reference · Methodology
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
            How we work.
          </h1>
          <p
            className="kds-sans"
            style={{
              fontSize: 19,
              color: 'var(--ink-dim)',
              maxWidth: 720,
              marginTop: 40,
              lineHeight: 1.6,
            }}
          >
            Specifics, not slogans. The settings, standards, and conventions our engineers actually
            use on every CFD run, every FEA model, every mooring analysis, every seakeeping report.
            Documented here so a client can read it before signing — and so the next engineer at
            KDS reads the same standards on the next job.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 48px 120px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <article style={{ maxWidth: 800 }}>

            {/* CFD */}
            <div className="kds-mono" style={SECTION_LABEL}>
              01 · CFD
            </div>
            <h2 className="kds-display" style={H2}>
              Computational fluid dynamics
            </h2>
            <h3 className="kds-display" style={H3}>
              Solver selection
            </h3>
            <p className="kds-sans" style={PROSE}>
              We use STAR-CCM+ for production resistance and propulsion work where mesh control,
              overset grids, and free-surface VOF are the priority. We use OpenFOAM where the model
              has to be open, reproducible, and shipped to the client at the end of the project. We
              use WAMIT for linear potential-flow seakeeping and offshore-structure
              diffraction-radiation. The choice is project-driven, not preference-driven.
            </p>

            <h3 className="kds-display" style={H3}>
              Meshing standards
            </h3>
            <p className="kds-sans" style={PROSE}>
              Hull meshes use a wall-normal first-cell y+ in the range 30–100 for wall-function
              turbulence treatment, or below 1 for low-Reynolds models on appendages and propellers.
              Free-surface refinement is targeted at 80–120 cells per wavelength in the wave-making
              region. Refinement zones are defined parametrically — a coarse, medium, and fine mesh
              are run on every project so we have a documented mesh-independence assessment in the
              report. Cell-count is whatever the physics requires; we do not run small meshes for
              speed when the result is the deliverable.
            </p>

            <h3 className="kds-display" style={H3}>
              Turbulence and physics
            </h3>
            <p className="kds-sans" style={PROSE}>
              Default turbulence model: k-omega SST for resistance and external aero. k-epsilon
              realizable when modelling internal flows or where SST has known weaknesses.
              Free-surface treatment: VOF with HRIC for sharp interfaces; level-set when the
              interface tangle becomes significant. Compressibility is treated explicitly when Mach
              number exceeds 0.3, which in the marine context means propeller tip vortices and air
              entrainment studies — almost never the global hull problem.
            </p>

            <h3 className="kds-display" style={H3}>
              Validation
            </h3>
            <p className="kds-sans" style={PROSE}>
              Every CFD report includes a validation section. Where towing-tank data exists for the
              vessel or a near-sister, we calibrate against it and report the residual. Where it
              does not, we calibrate against ITTC benchmark hulls (KCS, KVLCC2, Wigley) at
              comparable Froude numbers and report the residual against published data. A study
              with no validation reference is flagged as such; we do not bury that fact in the
              executive summary.
            </p>

            {/* FEA */}
            <div className="kds-mono" style={{ ...SECTION_LABEL, marginTop: 80 }}>
              02 · Structural FEA
            </div>
            <h2 className="kds-display" style={H2}>
              Finite element analysis
            </h2>

            <h3 className="kds-display" style={H3}>
              Software and rule sets
            </h3>
            <p className="kds-sans" style={PROSE}>
              SESAM (DNV) is our default for offshore structures and hull-girder analyses;
              Ansys is used where coupled phenomena (thermal, fluid-structure interaction)
              dominate. Class rule sets in active use: DNV-RP-C203 for fatigue, DNV-OS-C101 for
              offshore steel structures, and the Common Structural Rules (CSR) for tankers and
              bulkers in IACS class.
            </p>

            <h3 className="kds-display" style={H3}>
              Mesh and element selection
            </h3>
            <p className="kds-sans" style={PROSE}>
              Shell elements (4-node quadrilateral) for plating and webs in global models; 20-node
              hexahedral solids for hot-spot stress analysis at fatigue-critical details. Mesh
              refinement at hot-spots follows DNV-RP-C203 conventions: t × t element size at the
              hot spot, with surface-extrapolated stress reported. Coarser mesh sizes are
              acceptable for global response provided the local hot-spot mesh exists and is
              referenced in the report.
            </p>

            <h3 className="kds-display" style={H3}>
              Load cases
            </h3>
            <p className="kds-sans" style={PROSE}>
              We start from the rule load cases the relevant class society prescribes, then add
              project-specific cases — a transit weather case for a delivery voyage, a
              site-specific 100-year storm for an offshore deployment, a damage-stability case
              with the corresponding global-bending response. Load-case lists are agreed in the
              technical proposal and locked at kick-off; mid-project additions go through a change
              order with named consequences.
            </p>

            <h3 className="kds-display" style={H3}>
              Fatigue
            </h3>
            <p className="kds-sans" style={PROSE}>
              Rainflow counting on stress histories from time-domain seakeeping; S-N curves per
              DNV-RP-C203 (D-curve for as-welded details, others where applicable); Miner sum to
              demonstrate fatigue lives meet or exceed the design life with the relevant safety
              factor. Where fatigue is a binding constraint we report damage per detail rather
              than just an overall pass/fail.
            </p>

            {/* MOORING */}
            <div className="kds-mono" style={{ ...SECTION_LABEL, marginTop: 80 }}>
              03 · Mooring
            </div>
            <h2 className="kds-display" style={H2}>
              Mooring analysis
            </h2>

            <h3 className="kds-display" style={H3}>
              Workflow
            </h3>
            <p className="kds-sans" style={PROSE}>
              Quasi-static screening in ARIANE-3D across candidate configurations — spread,
              taut-leg, single-point — before committing to a design. The screening uses simplified
              vessel hydrodynamics and the metocean intensity curves; output is a candidate-shortlist
              with line tensions and footprint envelopes. The shortlisted configuration then goes
              into time-domain analysis in OrcaFlex or MOSES with full 6-DoF vessel hydrodynamics
              and line dynamics.
            </p>

            <h3 className="kds-display" style={H3}>
              Design environment
            </h3>
            <p className="kds-sans" style={PROSE}>
              Operational, survival, and ULS / ALS conditions per DNV-OS-E301 or API RP 2SK,
              depending on the rule set the operator commits to. Metocean inputs come from
              site-specific hindcast plus measurements where available; uncertainty bands are
              propagated through to line-tension envelopes rather than absorbed into a safety
              factor.
            </p>

            <h3 className="kds-display" style={H3}>
              Anchor design
            </h3>
            <p className="kds-sans" style={PROSE}>
              Anchor type follows from soil characterisation and required holding capacity — drag
              embedment for soft cohesive soils, suction caissons for deep cohesive layers, gravity
              or pile anchors for hard sites. Holding-capacity calculations follow API RP 2SK or
              DNV-OS-E301. Installation analysis is included in the deliverable when a contractor
              has not been pre-selected.
            </p>

            {/* SEAKEEPING */}
            <div className="kds-mono" style={{ ...SECTION_LABEL, marginTop: 80 }}>
              04 · Seakeeping & manoeuvrability
            </div>
            <h2 className="kds-display" style={H2}>
              Time-domain dynamics
            </h2>

            <h3 className="kds-display" style={H3}>
              Linear core
            </h3>
            <p className="kds-sans" style={PROSE}>
              WAMIT for the linear seakeeping problem — added mass, radiation damping, exciting
              forces, motion RAOs. Mesh density on the wetted hull at 5–8 panels per shortest
              wavelength of interest. Output is RAOs per heading and frequency, validated against
              published benchmarks where they exist (Wigley, S-175, SR108) and against tank data
              where the project commissions or accesses it.
            </p>

            <h3 className="kds-display" style={H3}>
              Non-linear time domain
            </h3>
            <p className="kds-sans" style={PROSE}>
              Where roll motion is large, where parametric excitation is suspected, where the
              linear assumption breaks — we move to Ship@Sea, our in-house six-degree-of-freedom
              non-linear simulator that has evolved from the principal\'s 2005 PhD work and
              continues to be maintained and validated [Silva and Guedes Soares, 2005, 2013]. It
              couples non-linear restoring (instantaneous wetted surface integration), Froude-Krylov
              forces on the exact-wetted surface, and roll damping from a viscous correction
              calibrated against decay tests. It is our reference tool for parametric rolling and
              for any seakeeping result where roll exceeds 5–8°.
            </p>

            <h3 className="kds-display" style={H3}>
              Manoeuvring
            </h3>
            <p className="kds-sans" style={PROSE}>
              Manoeuvring is run in MatLab/Simulink, using a hydrodynamic-derivative model
              calibrated against CFD or sea-trial data. Standard manoeuvres (turning circle, zigzag,
              spiral, crash-stop) are validated against IMO Resolution MSC.137(76) acceptance
              criteria. Probabilistic operability assessments (e.g. the Corvo and Silver Mary
              studies in Vila do Porto) wrap the deterministic simulator inside a metocean
              joint-probability distribution to estimate days-per-year operability with credible
              intervals — see the <Link href="/journal/corvo-without-tugs/" style={{ color: 'var(--accent)' }}>Corvo case note</Link> for a worked example.
            </p>

            {/* DOCUMENTATION */}
            <div className="kds-mono" style={{ ...SECTION_LABEL, marginTop: 80 }}>
              05 · Documentation
            </div>
            <h2 className="kds-display" style={H2}>
              Write everything down
            </h2>
            <p className="kds-sans" style={PROSE}>
              Every assumption, every input, every result is documented in the project file. Six
              months later, when the operator has a new question, we can answer it because the
              model is still alive and the assumptions are findable. This is one of our four
              founding principles, and it is the discipline that distinguishes consulting work that
              ages from work that decays.
            </p>
            <p className="kds-sans" style={PROSE}>
              Reports follow a standard structure: scope, methodology, inputs, validation,
              results, sensitivity, limitations, conclusions. Every numerical claim has a traceable
              run reference; every figure has a caption with units and conditions; every assumption
              that affects the result is named in the limitations section, not buried.
            </p>

            {/* CLASS LIAISON */}
            <div className="kds-mono" style={{ ...SECTION_LABEL, marginTop: 80 }}>
              06 · Class-society liaison
            </div>
            <h2 className="kds-display" style={H2}>
              How we work with class
            </h2>
            <p className="kds-sans" style={PROSE}>
              Class engagement starts at the technical proposal: we name the rule set, the
              expected approval path, and the known interpretation risks. During design we hold
              regular working sessions with the class reviewer rather than waiting for formal
              comments — most disagreements are easier to resolve in conversation. During
              construction we attend the surveys; during sea trials we witness against the class
              criteria, not just against the contract. Active liaison files: DNV, Lloyd\'s
              Register, Bureau Veritas, RINA.
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
                href="/glossary/"
                className="kds-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-dim)',
                }}
              >
                ← Glossary
              </Link>
              <Link
                href="/services/"
                className="kds-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-dim)',
                }}
              >
                Services →
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
                Brief a project →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
