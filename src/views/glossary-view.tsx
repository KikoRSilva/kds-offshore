import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';

const SITE_URL = 'https://kdsoffshore.pt';

export const metadata: Metadata = {
  title: 'Glossary',
  description:
    'Plain-English definitions of the naval architecture, hydrodynamics, manoeuvrability, mooring, and decarbonisation terms KDS Offshore uses across the office.',
  alternates: { canonical: '/glossary/' },
  openGraph: {
    title: 'Glossary — KDS Offshore',
    description:
      'Naval architecture, hydrodynamics, manoeuvrability, mooring, and decarbonisation terms — defined the way we use them.',
    url: `${SITE_URL}/glossary/`,
    type: 'article',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KDS Offshore — Engineering the working ocean.',
      },
    ],
  },
};

interface Term {
  id: string;
  term: string;
  shortDefinition: string;
  longDefinition: string;
  alsoCalled?: string[];
  relatedTerms?: string[];
  whyItMatters?: string;
  category: 'Hydrodynamics' | 'Naval architecture' | 'Manoeuvrability' | 'Mooring' | 'Decarbonisation' | 'Standards';
}

const TERMS: Term[] = [
  {
    id: 'parametric-rolling',
    term: 'Parametric rolling',
    category: 'Hydrodynamics',
    shortDefinition:
      'A non-linear roll instability where a ship in head or following seas develops large roll angles even with small wave excitation, because the restoring moment changes between wave crest and trough.',
    longDefinition:
      'Parametric rolling occurs when the metacentric height varies cyclically as a wave passes — restoring moment is high in a trough (wide waterplane) and low at a crest (narrow waterplane). When the ship\'s natural roll frequency is roughly half the encounter frequency, energy pumps into the roll mode and amplitude grows non-linearly. Container ships with fine bow flare and wide flat sterns are particularly vulnerable. Mitigation requires either avoiding the resonance (operational), increasing roll damping (passive U-tubes, anti-roll fins, bilge keels), or both.',
    alsoCalled: ['Parametric resonance', 'Mathieu instability'],
    relatedTerms: ['Roll damping', 'Restoring moment', 'Time-domain seakeeping'],
    whyItMatters:
      'Has caused major container losses (e.g. APL China, 1998). IMO and class-society second-generation intact stability criteria now address it explicitly.',
  },
  {
    id: 'ops-cold-ironing',
    term: 'OPS / Cold ironing',
    category: 'Decarbonisation',
    shortDefinition:
      'Onshore Power Supply: feeding a berthed vessel from the local electrical grid so its diesel auxiliaries can be shut down, eliminating in-port emissions.',
    longDefinition:
      'OPS, also called shore power or cold ironing, replaces the auxiliary diesel generators that ships normally run while at berth with a high-voltage shore-side connection. Frequency conversion is often required (60 Hz US ships against 50 Hz European grids). The decarbonisation gain is large where the local grid is clean — and small where it is not. Capital cost is high because of the medium-voltage infrastructure, fast-acting switchgear, and reefer-load shore boxes; payback economics are sensitive to call frequency, port-tariff structure, and air-quality regulation.',
    alsoCalled: ['Shore power', 'AMP (Alternative Marine Power)', 'HVSC (High-Voltage Shore Connection)'],
    relatedTerms: ['CII', 'EU ETS Maritime', 'FuelEU Maritime'],
    whyItMatters:
      'Mandatory for many EU ports of call from 2030 under the FuelEU Maritime regulation. KDS designed the OPS retrofit for the APRAM port-authority fleet in Madeira.',
  },
  {
    id: 'manoeuvrability-prediction',
    term: 'Manoeuvrability prediction',
    category: 'Manoeuvrability',
    shortDefinition:
      'Numerical estimation of how a vessel will respond to rudder, thrusters, wind, current, and waves — typically through a time-domain six-degree-of-freedom hull model.',
    longDefinition:
      'A manoeuvrability prediction couples a hull model (with its hydrodynamic derivative coefficients), a rudder model, a propulsion model, and external force fields (wind, current, waves) in time domain. The output is a trajectory: how the vessel turns, decelerates, holds station. The accuracy lives in the coefficient set; for high-stakes assignments these are determined by CFD or sea-trial calibration, not generic regression. Probabilistic operability assessments wrap the deterministic simulator inside a metocean joint distribution to answer "how often per year can the vessel do X."',
    alsoCalled: ['Manoeuvring simulation', 'Operability assessment'],
    relatedTerms: ['Hydrodynamic derivatives', 'Probabilistic operability', '3D panel method'],
    whyItMatters:
      'Drives thruster sizing, rudder selection, port-design margins, and autonomous-berthing assessments. KDS has run probabilistic studies for the Corvo and Silver Mary container ships at Vila do Porto.',
  },
  {
    id: 'cii',
    term: 'CII (Carbon Intensity Indicator)',
    category: 'Decarbonisation',
    shortDefinition:
      "An IMO-mandated metric, in force from 2023, that grades ships A-E on grams of CO2 per cargo-carrying-tonne-mile — a vessel's annual operational carbon intensity.",
    longDefinition:
      'CII is calculated from a ship\'s actual fuel use and transport work over a calendar year. The IMO sets reference lines per ship type and size; vessels are graded A (best) through E (worst). A ship rated D for three consecutive years, or E in any single year, must submit a corrective action plan. The metric is operational, not design-based — it covers what the ship actually does, not what it was built to do — so weather routing, slow steaming, and shore-side downtime all matter. Targets tighten through 2030.',
    alsoCalled: ['Operational Carbon Intensity Indicator'],
    relatedTerms: ['EEXI', 'EEDI', 'FuelEU Maritime', 'EU ETS Maritime'],
    whyItMatters:
      'A poor CII grade can affect charter rates, port acceptance, and insurance. Decarbonisation retrofits we design (hull optimisation, OPS, hybrid propulsion) typically have a CII improvement target attached.',
  },
  {
    id: 'cfd',
    term: 'CFD (Computational Fluid Dynamics)',
    category: 'Hydrodynamics',
    shortDefinition:
      'Numerical solution of the Navier-Stokes equations on a meshed hull or structure, predicting resistance, propulsion, wakes, pressures, and flow separation.',
    longDefinition:
      'For naval architecture, CFD typically means Reynolds-Averaged Navier-Stokes (RANS) solutions in commercial codes (STAR-CCM+, OpenFOAM) for resistance and propulsion, and 3D panel methods (WAMIT) for linear seakeeping. Mesh independence, turbulence modelling (k-omega SST, k-epsilon), and free-surface treatment (VOF) are the main accuracy levers. CFD is not a substitute for towing-tank work but a complement: tank tests anchor the calibration; CFD lets you sweep parameter space cheaply.',
    relatedTerms: ['RANS', 'Mesh independence', 'WAMIT', 'OpenFOAM', '3D panel method'],
    whyItMatters:
      'Drives every hydrodynamic optimisation we run. A typical hull-form refinement cycle runs hundreds of CFD cases — impossible at tank scale.',
  },
  {
    id: 'wamit',
    term: 'WAMIT',
    category: 'Hydrodynamics',
    shortDefinition:
      'A 3D panel-method linear-potential-flow code, developed at MIT, that computes wave-body interactions for offshore and ship hydrodynamics.',
    longDefinition:
      'WAMIT solves the linearised wave-body interaction problem in the frequency domain using a 3D boundary-element (panel) method. It returns added mass, radiation damping, exciting-force RAOs, and motion RAOs for arbitrary geometries. Its strength is mature, well-documented physics for offshore platforms, semi-submersibles, FPSOs, and ships in the linear range. Its limit is the linearity assumption — for parametric rolling, large amplitude motions, and viscous effects, you need a non-linear time-domain follow-on (in-house Ship@Sea, OrcaFlex, etc.).',
    relatedTerms: ['3D panel method', 'RAO', 'Diffraction-radiation theory', 'Ship@Sea'],
    whyItMatters:
      'Backbone of our seakeeping and mooring work. Used on the GRS Power Platform parametric-rolling assessment and many vessel seakeeping studies.',
  },
  {
    id: 'stability-book',
    term: 'Stability book (Trim & Stability booklet)',
    category: 'Naval architecture',
    shortDefinition:
      "The class-approved document a ship's master uses to verify the vessel meets intact and damage stability criteria for any planned loading condition.",
    longDefinition:
      'A stability book contains hydrostatic data (KMT, BM, GMT curves), cross-curves of stability, freeboard and tonnage calculations, intact stability criteria checks, damage stability cases, a flooded-compartment plan, and worked examples showing the master how to compute GZ and check against the rule. It is approved by the class society and the flag state; copies live on the bridge and ashore. A bad stability book is unusable on day one; a good one survives crew turnover, refits, and conversions for decades.',
    alsoCalled: ['Trim & Stability booklet', 'Intact and Damage Stability booklet'],
    relatedTerms: ['Damage stability', 'Intact stability', 'GZ curve', 'Class approval'],
    whyItMatters:
      'Required for any ship over 24 m and for all SOLAS-class vessels. We rebuild stability books on every conversion or capacity uplift we engineer.',
  },
  {
    id: 'fea',
    term: 'FEA (Finite Element Analysis)',
    category: 'Naval architecture',
    shortDefinition:
      'Numerical structural analysis where a ship hull or offshore structure is meshed into elements and stresses, deflections, and fatigue lives are computed under load.',
    longDefinition:
      'For naval architecture, FEA covers global hull-girder strength, local panel and frame analysis, fatigue assessment to S-N curves at hot-spot locations, and ultimate-strength assessment. Class societies (DNV, BV, RINA, LR) prescribe load cases, mesh refinement standards, and acceptance criteria. The work splits into linear elastic analysis (most production work) and non-linear ultimate-strength or collapse analysis (special cases, often offshore). Results feed directly into scantling decisions.',
    relatedTerms: ['Hot-spot stress', 'S-N curve', 'Ultimate strength', 'SESAM'],
    whyItMatters:
      'Underpins every structural deliverable from KDS — scantling justification, retrofit reinforcement, fatigue life of mooring and offshore structures.',
  },
  {
    id: 'mooring-spread',
    term: 'Spread mooring',
    category: 'Mooring',
    shortDefinition:
      'A multi-leg mooring configuration where lines fan out from a floating structure to anchors arranged around it — the most common mooring pattern for FPSOs and semi-subs.',
    longDefinition:
      'A spread mooring distributes environmental loads across many lines (typically 8 to 16) running in groups to anchor points on the seabed. Compared with a single-point mooring, it has a larger footprint but a smaller motion envelope; compared with dynamic positioning, it has zero fuel cost but no heading control. Catenary, taut-leg, or hybrid configurations differ in line tension, anchor type, and motion behaviour. Fatigue assessment is critical: the number of cycles over a 25-year design life can be in the hundreds of millions per line.',
    relatedTerms: ['Catenary mooring', 'Taut-leg mooring', 'Single-point mooring', 'OrcaFlex', 'ARIANE-3D'],
    whyItMatters:
      'KDS has designed mooring systems for floating wave-energy concepts (GRS Power Platform) and reviews mooring designs as part of broader offshore-engineering assignments.',
  },
  {
    id: 'class-society',
    term: 'Class society',
    category: 'Standards',
    shortDefinition:
      'Independent, non-governmental organisations that develop and apply technical standards (rules) for ship and offshore-structure design, construction, and survey.',
    longDefinition:
      'The major class societies — DNV, Lloyd\'s Register (LR), Bureau Veritas (BV), RINA, Germanischer Lloyd (now part of DNV), ABS, ClassNK, China Classification Society — each publish rule sets that a ship must comply with to receive their class notation. Class certificates are required by underwriters and most flag administrations. Designers liaise with class throughout the project: rule interpretation at the start, plan-approval submissions during design, surveys during construction, and periodic surveys in service.',
    relatedTerms: ['DNV', "Lloyd's Register", 'Bureau Veritas', 'RINA', 'Flag state'],
    whyItMatters:
      'Every KDS structural deliverable is class-society-ready. We have active liaison files with DNV, LR, BV, and RINA.',
  },
  {
    id: 'rao',
    term: 'RAO (Response Amplitude Operator)',
    category: 'Hydrodynamics',
    shortDefinition:
      'A frequency-domain transfer function describing how a floating body responds to unit-amplitude waves — the fundamental output of a linear seakeeping analysis.',
    longDefinition:
      'For each wave frequency and heading, the RAO gives the steady-state amplitude (and phase) of each motion mode (heave, pitch, roll, etc.) per unit wave amplitude. RAOs are linear: they decompose an irregular sea into wave components, apply the RAO to each component, and superpose the results. They underpin operability calculations (significant motion in a given sea state), wave-induced load assessments, and mooring analyses. Their limit is amplitude — large motions invalidate the linear assumption and require time-domain non-linear analysis.',
    relatedTerms: ['WAMIT', 'Linear seakeeping', '3D panel method', 'Significant amplitude'],
    whyItMatters:
      "An RAO set is the calling card of any seakeeping study; we deliver them validated against benchmarks in every job's report.",
  },
  {
    id: 'eu-ets-maritime',
    term: 'EU ETS Maritime',
    category: 'Decarbonisation',
    shortDefinition:
      'The extension of the EU Emissions Trading System to shipping (in force from 2024) that requires shipowners to surrender allowances for CO2 emissions from voyages to and from EU ports.',
    longDefinition:
      'From 1 January 2024, the EU ETS covers all ships above 5,000 GT calling at EU ports. The owner must surrender allowances equal to a phased percentage of CO2 emissions: 40% in 2024, 70% in 2025, 100% from 2026. Methane and nitrous oxide are added from 2026. Coverage is 100% for intra-EU voyages and 50% for voyages to/from non-EU ports. The cost lands somewhere on the freight rate; how it splits between owner, operator, and charterer depends on the BIMCO-style ETS clauses inserted into time charters.',
    alsoCalled: ['Maritime ETS'],
    relatedTerms: ['CII', 'FuelEU Maritime', 'EU MRV'],
    whyItMatters:
      'Materially changes the economics of decarbonisation retrofits. We factor ETS exposure into the payback calculation on any post-2024 retrofit feasibility we run.',
  },
];

const SECTION_LABEL: React.CSSProperties = {
  fontSize: 11,
  color: 'var(--ink-faint)',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  marginBottom: 24,
};

export default function GlossaryView() {
  const lang = useLocale();
  const definedTermSetJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${SITE_URL}/glossary/#termset`,
    name: 'KDS Offshore — Naval architecture and offshore engineering glossary',
    description:
      'Plain-English definitions of the naval architecture, hydrodynamics, manoeuvrability, mooring, and decarbonisation terms used at KDS Offshore.',
    inLanguage: 'en-GB',
    publisher: { '@id': `${SITE_URL}/#organization` },
    hasDefinedTerm: TERMS.map((t) => ({
      '@type': 'DefinedTerm',
      '@id': `${SITE_URL}/glossary/#${t.id}`,
      name: t.term,
      description: t.shortDefinition,
      inDefinedTermSet: `${SITE_URL}/glossary/#termset`,
      url: `${SITE_URL}/glossary/#${t.id}`,
      ...(t.alsoCalled ? { alternateName: t.alsoCalled } : {}),
      termCode: t.id,
    })),
  };

  const categories = Array.from(new Set(TERMS.map((t) => t.category)));

  return (
    <>
      <BreadcrumbJsonLd
        locale={lang}
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Glossary', path: '/glossary/' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetJsonLd) }}
      />

      {/* HERO */}
      <section
        className="sonar-bg"
        style={{ padding: '100px 48px 60px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="kds-mono" style={SECTION_LABEL}>
            Reference · Glossary
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
            Glossary.
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
            Plain-English definitions of the naval architecture, hydrodynamics, manoeuvrability,
            mooring, and decarbonisation terms we use across the office. Every entry is written the
            way we use the term — not the dictionary version.
          </p>

          {/* Anchor index */}
          <div
            style={{
              marginTop: 56,
              paddingTop: 32,
              borderTop: '1px solid var(--line)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            {TERMS.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="kds-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-dim)',
                  padding: '8px 14px',
                  border: '1px solid var(--line-2)',
                  borderRadius: 999,
                }}
              >
                {t.term}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DEFINITIONS */}
      <section style={{ padding: '60px 48px 120px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {categories.map((cat) => (
            <div key={cat} style={{ marginBottom: 80 }}>
              <div
                className="kds-mono"
                style={{
                  fontSize: 11,
                  color: 'var(--accent)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  marginBottom: 32,
                  paddingBottom: 16,
                  borderBottom: '1px solid var(--line)',
                }}
              >
                {cat}
              </div>
              {TERMS.filter((t) => t.category === cat).map((t) => (
                <article
                  key={t.id}
                  id={t.id}
                  style={{
                    padding: '40px 0',
                    borderBottom: '1px solid var(--line)',
                    scrollMarginTop: 80,
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '240px 1fr',
                      gap: 56,
                    }}
                  >
                    <div>
                      <h2
                        className="kds-display"
                        style={{
                          fontSize: 28,
                          fontWeight: 400,
                          letterSpacing: '-0.01em',
                          margin: '0 0 12px',
                          color: 'var(--ink)',
                          lineHeight: 1.15,
                        }}
                      >
                        {t.term}
                      </h2>
                      {t.alsoCalled && (
                        <div
                          className="kds-mono"
                          style={{
                            fontSize: 10,
                            color: 'var(--ink-faint)',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            lineHeight: 1.5,
                          }}
                        >
                          Also: {t.alsoCalled.join(' · ')}
                        </div>
                      )}
                    </div>
                    <div style={{ maxWidth: 720 }}>
                      <p
                        className="kds-sans"
                        style={{
                          fontSize: 17,
                          lineHeight: 1.6,
                          color: 'var(--ink)',
                          margin: 0,
                          fontWeight: 500,
                        }}
                      >
                        {t.shortDefinition}
                      </p>
                      <p
                        className="kds-sans"
                        style={{
                          fontSize: 16,
                          lineHeight: 1.7,
                          color: 'var(--ink-dim)',
                          marginTop: 16,
                          marginBottom: 0,
                        }}
                      >
                        {t.longDefinition}
                      </p>
                      {t.whyItMatters && (
                        <div
                          style={{
                            marginTop: 24,
                            padding: '16px 20px',
                            background: 'var(--bg-2)',
                            borderLeft: '3px solid var(--accent)',
                            borderRadius: '0 4px 4px 0',
                          }}
                        >
                          <div
                            className="kds-mono"
                            style={{
                              fontSize: 10,
                              color: 'var(--ink-faint)',
                              letterSpacing: '0.2em',
                              textTransform: 'uppercase',
                              marginBottom: 6,
                            }}
                          >
                            Why it matters
                          </div>
                          <div
                            className="kds-sans"
                            style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.6 }}
                          >
                            {t.whyItMatters}
                          </div>
                        </div>
                      )}
                      {t.relatedTerms && (
                        <div
                          className="kds-mono"
                          style={{
                            marginTop: 20,
                            fontSize: 10,
                            color: 'var(--ink-faint)',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                          }}
                        >
                          Related: {t.relatedTerms.join(' · ')}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}

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
              href="/methods/"
              className="kds-mono"
              style={{
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--ink-dim)',
              }}
            >
              How we work →
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
              href="/journal/"
              className="kds-mono"
              style={{
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--ink-dim)',
              }}
            >
              Journal →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
