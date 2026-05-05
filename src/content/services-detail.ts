// Per-service detail content for /services/[slug]/ pages.
// Slugs mirror the live kdsoffshore.pt URLs so any existing inbound links keep
// resolving when this build replaces production.

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceCaseRef {
  title: string;
  client: string;
  year: string;
}

export interface ServiceDetail {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  overview: string[];
  whatWeDeliver: string[];
  methodology: { t: string; d: string }[];
  tools: string[];
  cases: ServiceCaseRef[];
  faq: ServiceFaq[];
  leadTime: string;
  serviceType: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: '3d-geometric-modelling',
    number: '01',
    name: '3D Geometrical Modelling',
    shortName: '3D modelling',
    tagline: 'Watertight surfaces, ready for class.',
    description:
      'Production-grade CAD geometry for structural, hydrodynamic, and visualisation downstream. Watertight surfaces ready for class-society review.',
    overview: [
      'Every project we run starts from a single source of truth: the geometry. We build watertight, parametric surface models that downstream FEA, CFD, mooring, and class-society reviews can all read without re-meshing.',
      'Our models follow Simulation-Based Design and Virtual Prototyping (SBDVP) principles, including the HLA conventions defined by STANAG 4684 ("On Virtual Ships") so that the same geometry can drive a stability calculation in Maxsurf, a CFD run in STAR-CCM+ or OpenFOAM, and a class-society submission to DNV, BV, RINA, or Lloyd\'s Register.',
      'We deliver clean topology, frame and section exports, and visualisation-ready renders. The model is yours; we hand over the file, not just the answer.',
    ],
    whatWeDeliver: [
      'Production-grade CAD model',
      'Watertight surface model',
      'Frames & sections export',
      'Class-society-ready files',
      'Visualisation renders',
      'Documented topology and parameters',
    ],
    methodology: [
      {
        t: 'Geometry brief',
        d: 'Lines plan, principal particulars, intended downstream use (CFD, FEA, classification, marketing), and target tolerances.',
      },
      {
        t: 'Surface build',
        d: 'Parametric surface model in Rhino + Grasshopper, with named control sections, watertight checks, and version control.',
      },
      {
        t: 'Downstream sanity checks',
        d: 'Quick CFD or stability run to verify the model behaves before we hand it over.',
      },
      {
        t: 'Handover',
        d: 'Native + STEP/IGES + section exports, with a one-page README explaining the parametric controls.',
      },
    ],
    tools: [
      'Rhino + Grasshopper',
      'Maxsurf',
      'AutoCAD',
      'STEP / IGES interchange',
      'STAR-CCM+ (downstream CFD)',
      'OpenFOAM (downstream CFD)',
    ],
    cases: [
      { title: 'OneOcean working boat', client: 'OneOcean', year: '2021' },
      { title: 'SeaPower 12 m pilot boat', client: 'SeaPower', year: '2022' },
    ],
    faq: [
      {
        q: 'What does "watertight" actually mean in your deliverable?',
        a: 'Closed surface, no boundary edges, manifold topology, suitable for downstream CFD meshing or FEA without manual repair. We run an automated check before handover and document any tolerances.',
      },
      {
        q: 'Will the model survive a class-society review?',
        a: 'Yes. We build to the geometry conventions DNV, BV, RINA, and Lloyd\'s Register expect, and we have a track record of submissions that pass without geometry rework.',
      },
      {
        q: 'Do you keep the model alive after delivery?',
        a: 'On request. Most clients return six months later with a "what if we move the deckhouse aft?" question, and the parametric model lets us answer in days, not weeks.',
      },
    ],
    leadTime: '2–4 weeks',
    serviceType: 'Naval architecture',
  },
  {
    slug: 'naval-architecture-and-offshore-engineering-design',
    number: '02',
    name: 'Naval Architecture & Offshore Engineering Design',
    shortName: 'Naval architecture',
    tagline: 'From small craft to major offshore installations.',
    description:
      'Stability, structural and intact/damage analysis to international standards.',
    overview: [
      'The classical naval-architecture work — stability books, structural FEA, intact and damage analyses, GA and profile drawings — done by the principals, signed by the principals, defended by the principals in front of the class society.',
      'We work across cargo ships, passenger vessels, offshore platforms, and renewable-energy installations. The discipline does not change with the vessel; the standard does, and we calibrate the package to the flag and the class.',
      'When the design is wrong, we say so. When the budget cannot pay for what the standard requires, we say so. The reputation we are building is worth more than any single fee.',
    ],
    whatWeDeliver: [
      'Stability book (intact and damage)',
      'Structural FEA report',
      'GA & profile drawings',
      'Class-society liaison package',
      'Hydrostatic and damage curves',
      'Tonnage and freeboard calculations',
    ],
    methodology: [
      {
        t: '01 · Discovery & scoping',
        d: 'A 30-minute call to understand the vessel, the operator, and the constraint that triggered the project. We tell you up-front whether we are the right firm.',
      },
      {
        t: '02 · Technical proposal',
        d: 'A fixed-fee, fixed-scope proposal with named principals, deliverables, classification path, and risks. Within five working days.',
      },
      {
        t: '03 · Engineering',
        d: 'Weekly working sessions with the operator. Stability books, structural FEA, GA drawings, and class-society liaison delivered against a published Gantt.',
      },
      {
        t: '04 · Handover & support',
        d: 'Final report, documented model, and 90 days of post-handover support included.',
      },
    ],
    tools: [
      'Maxsurf · stability',
      'Ansys Aqwa · seakeeping',
      'AUTOHYDRO',
      'SESAM · structural analysis',
      'STAR-CCM+ · CFD validation',
      'DNV · class liaison',
      "Lloyd's Register",
      'Bureau Veritas',
      'RINA',
    ],
    cases: [
      { title: 'Belize I remotorisation & capacity uplift', client: 'Nautiber', year: '2023' },
      { title: 'Libries scientific-tourism conversion', client: 'Blue Geo Lighthouse', year: '2022' },
    ],
    faq: [
      {
        q: 'Which class societies do you work with regularly?',
        a: 'DNV, Lloyd\'s Register, Bureau Veritas, RINA, and GL. We have active liaison files with each and we know their reviewers.',
      },
      {
        q: 'Do you sign deliverables as chartered engineers?',
        a: 'Yes. KDS principals are members of the Ordem dos Engenheiros (Portugal) and provide chartered-engineer signatures on deliverables that require them, in compliance with the Ordem\'s rules.',
      },
      {
        q: 'How do you handle damage stability for a vessel that is being modified?',
        a: 'We rebuild the damage cases from the original lines and the new internal subdivision, then run a probabilistic damage stability assessment to the relevant SOLAS or class rule. The output is a damage-control plan that the operator can use on board.',
      },
    ],
    leadTime: '8–16 weeks',
    serviceType: 'Naval architecture',
  },
  {
    slug: 'hydrodynamic-optimization',
    number: '03',
    name: 'Hydrodynamic Optimisation',
    shortName: 'CFD & hydrodynamics',
    tagline: 'CFD-driven hull and propulsor refinement.',
    description:
      'Reducing fuel burn and emissions in real operating conditions, not idealised tank tests.',
    overview: [
      'Hydrodynamic performance is what most operators feel as a fuel bill. We use potential-flow theory for fast scans and full Reynolds-Averaged CFD for the cases that matter, validated against model-test campaigns when one exists.',
      'Wave, current, and wind loads on offshore structures are evaluated with the Morison approach and three-dimensional panel methods. The output is a numerical wind-and-current load coefficient set the designer can defend.',
      'Typical outcomes: 10–20% reduction in fuel burn at cruise, measurable improvement in roll stability margin, and a CFD report (~80 pages) the class society and the operator can both read.',
    ],
    whatWeDeliver: [
      'CFD report (~80 pp)',
      'Hull form recommendations',
      'Resistance & propulsion curves',
      'Wake & pressure plots',
      'Wind & current load coefficients',
      'Documented solver setup (reproducible)',
    ],
    methodology: [
      {
        t: 'Baseline assessment',
        d: 'Existing geometry, performance data, and the operating profile. The operating profile is the most important input — most fuel is burned at one or two speeds, not across the whole envelope.',
      },
      {
        t: 'Simulation campaign',
        d: 'STAR-CCM+ or OpenFOAM at the relevant Froude numbers. Validation against towing-tank or sea-trial data wherever it exists.',
      },
      {
        t: 'Design modifications',
        d: 'Hull, appendage, and propulsor refinements proposed and quantified. Each change comes with a fuel-saving estimate and a confidence interval.',
      },
      {
        t: 'Validation & handover',
        d: 'Final solver setup, mesh, and post-processing scripts handed over. The model is yours after the project.',
      },
    ],
    tools: [
      'STAR-CCM+',
      'OpenFOAM',
      'WAMIT (potential flow / panel method)',
      'Ansys Aqwa',
      'AUTOHYDRO',
      'Maxsurf',
      'Ship@Sea (KDS proprietary)',
    ],
    cases: [
      {
        title: 'SeaPower 12 m pilot boat — −18% fuel burn at cruise',
        client: 'SeaPower',
        year: '2022',
      },
      { title: 'OneOcean working boat preliminary CFD', client: 'OneOcean', year: '2021' },
    ],
    faq: [
      {
        q: 'When is CFD better than a towing-tank test?',
        a: 'When the parametric space is large (you are exploring 20 hull variants, not validating one), when the Reynolds number cannot be reproduced at model scale, or when the budget for tank time is gone. CFD is not always cheaper, but it is always faster to iterate on.',
      },
      {
        q: 'How accurate is your CFD compared to sea trials?',
        a: 'For resistance, typically within 3–5% on a validated mesh. For propulsion, 5–8% depending on propeller modelling. We publish the residuals in every report.',
      },
      {
        q: 'Do you cover seakeeping as well as resistance?',
        a: 'Yes — Ansys Aqwa for linear seakeeping, Ship@Sea (our in-house code) for non-linear time-domain simulation when the response is large.',
      },
    ],
    leadTime: '6–10 weeks',
    serviceType: 'Hydrodynamics',
  },
  {
    slug: 'ship-manoeuvrability-prediction',
    number: '04',
    name: 'Ship Manoeuvrability Prediction',
    shortName: 'Manoeuvrability',
    tagline: 'Time-domain simulation. Probabilistic answers.',
    description:
      'Forecast vessel behaviour and assess autonomous-manoeuvring envelopes inside ports.',
    overview: [
      'A manoeuvring study has to answer a question the operator can act on: how often per year can my vessel berth without tug assistance? How much margin do I have for crosswinds? Where does a second stern thruster change the answer?',
      'We answer those questions with a time-domain MatLab/Simulink model coupling hull, rudder (with flap, where relevant), and bow/stern thrusters, fed by a year of metocean data and a 3D-panel-method seakeeping core for the wave forces.',
      'Our reference projects are the probabilistic operability assessments of the 610 TEU container ships *Corvo* and *Silver Mary* inside the harbour basin of Vila do Porto (Açores). We do these in close collaboration with the port authority and the operator.',
    ],
    whatWeDeliver: [
      'Manoeuvrability simulation (time-domain)',
      'Operability % per year',
      'Thruster & rudder sizing recommendations',
      'Port-basin envelopes',
      'Time-domain trajectories with confidence intervals',
      'Hydrodynamic and aerodynamic coefficient set',
    ],
    methodology: [
      {
        t: 'Coefficient determination',
        d: 'Hull resistance, drift, yaw and aerodynamic load coefficients from CFD plus available trial data. The accuracy of the whole study depends on this step.',
      },
      {
        t: 'Numerical model',
        d: 'In-house MatLab/Simulink platform coupling hull, rudder, propellers, and thrusters in time domain.',
      },
      {
        t: 'Metocean integration',
        d: 'A full year of wind, wave, and current data at the operating site — not a worst-case scenario, the actual distribution.',
      },
      {
        t: 'Probabilistic analysis',
        d: 'Thousands of simulated berthings sampled from the metocean distribution. The output is a confidence interval, not a single number.',
      },
    ],
    tools: [
      'MatLab / Simulink (in-house)',
      'STAR-CCM+ (coefficient determination)',
      'WAMIT (3D panel method, wave diffraction)',
      'Ship@Sea',
      'Metocean datasets (Copernicus, port authorities)',
    ],
    cases: [
      {
        title: '"Corvo" autonomous manoeuvring assessment, Vila do Porto',
        client: 'Mutualista, Grupo Bensaúde',
        year: '2024',
      },
      {
        title: '"Silver Mary" operability analysis, Vila do Porto',
        client: 'Mutualista, Grupo Bensaúde',
        year: '2024',
      },
    ],
    faq: [
      {
        q: 'Why probabilistic instead of worst-case?',
        a: 'Because the operator does not pay for worst-case days — they pay for the median day. Worst-case sets a safety envelope; probabilistic sets the operating envelope. Both are needed; we deliver both.',
      },
      {
        q: 'Can the model be re-run when the vessel changes?',
        a: 'Yes. The coefficient set and the simulator are handed over. A draft change, a thruster upgrade, or a different port can be tested in days.',
      },
      {
        q: 'Do you cover autonomous / unmanned vessels?',
        a: 'Yes. The same simulator answers the question of how much sensor and control authority an unmanned vessel needs to stay inside the operating envelope.',
      },
    ],
    leadTime: '6–12 weeks',
    serviceType: 'Hydrodynamics',
  },
  {
    slug: 'mooring-systems-design',
    number: '05',
    name: 'Mooring System Design',
    shortName: 'Mooring',
    tagline: 'From environmental loads to anchor sizing.',
    description:
      'Catenary, taut-leg, and hybrid systems for floating renewables, aquaculture, and offshore platforms.',
    overview: [
      'Mooring is the discipline that turns a metocean dataset into a steel bill of materials. We design spread, single-point, and dynamic-positioning support systems for FPSOs, floating wind, wave-energy converters, aquaculture, and offshore platforms — permanent or temporary.',
      'Quasi-static screening with ARIANE-3D, then dynamic analysis in OrcaFlex or MOSES, then fatigue assessment to the relevant DNV / API rule. The output is a line-tension envelope, an anchor-sizing table, and an installation procedure the operator can hand to the contractor.',
      'We have run this discipline since the GRS Power Platform parametric-rolling assessment with WavEC at Belmullet in 2015. The hard-won lessons live in the assumptions log of every job we run.',
    ],
    whatWeDeliver: [
      'Mooring analysis report (quasi-static & dynamic)',
      'Line tension envelopes',
      'Anchor sizing & holding-capacity calculations',
      'Fatigue life assessment',
      'Installation procedure',
      'Operations & inspection manual',
    ],
    methodology: [
      {
        t: 'Site assessment',
        d: 'Metocean (current, wind, wave) at the deployment site. Soil characterisation for anchor design.',
      },
      {
        t: 'Configuration screening',
        d: 'Quasi-static analysis in ARIANE-3D across candidate configurations (spread, taut-leg, single-point).',
      },
      {
        t: 'Dynamic analysis',
        d: 'Time-domain simulation in OrcaFlex or MOSES, including line dynamics and hydrodynamic coupling.',
      },
      {
        t: 'Fatigue and certification',
        d: 'Rainflow counting, S-N curves to DNV / API, and a class-society-ready package.',
      },
    ],
    tools: [
      'OrcaFlex',
      'MOSES',
      'ARIANE-3D',
      'WAMIT',
      'Ansys Aqwa',
      'Ship@Sea',
      'DNV / API rule sets',
    ],
    cases: [
      {
        title: 'GRS Power Platform — parametric rolling assessment',
        client: 'WavEC Offshore Renewables',
        year: '2015',
      },
    ],
    faq: [
      {
        q: 'Spread vs taut-leg — how do you choose?',
        a: 'Water depth, motion budget, footprint allowed by neighbours, and anchor cost. A taut-leg system gives you a tighter motion envelope but pays for it in anchor pretension. We screen both before recommending one.',
      },
      {
        q: 'Do you cover floating-wind moorings?',
        a: 'Yes. Floating-wind couples mooring, controller, and aerodynamics — we coordinate the mooring side with the wind-side analyst (or run the coupled model in-house) so the controller and the mooring agree on what the rotor is doing.',
      },
      {
        q: 'How do you handle uncertainty in the metocean dataset?',
        a: 'Hindcast plus measured data where available, sensitivity studies on the worst directions, and a documented uncertainty band in every line-tension envelope. We do not hide it inside a "safety factor."',
      },
    ],
    leadTime: '4–8 weeks',
    serviceType: 'Offshore engineering',
  },
  {
    slug: 'vessel-conversion-engineering',
    number: '06',
    name: 'Vessel Conversion Engineering',
    shortName: 'Conversion',
    tagline: 'Remotorisation, repurposing, capacity uplift.',
    description:
      'From minor modifications to full conversions, in compliance with current regulations.',
    overview: [
      'A conversion is a different problem from a new build: the geometry is given, the structure has a history, and the budget has to compete with replacement. We do conversions where the engineering case actually closes — not because we want the project, because the operator does.',
      'Typical jobs: remotorisation (the gearbox usually wins), capacity uplift, hybrid-propulsion retrofit, accommodation upgrade, scientific-research conversion. We handle the stability re-issue, the structural reinforcements, the class- and flag-state liaison, and the yard tender support.',
      'Our reference jobs are the Belize I remotorisation for Nautiber (2023, delivered on schedule) and the Libries motor-sailer conversion for Blue Geo Lighthouse (2022, on-time, on-spec).',
    ],
    whatWeDeliver: [
      'Conversion design package',
      'Re-engining feasibility',
      'Updated stability book',
      'Structural reinforcement design',
      'Class & flag-state liaison',
      'Yard tender support',
    ],
    methodology: [
      {
        t: 'Feasibility',
        d: 'A short, fixed-fee study answering one question: does the conversion close on engineering, schedule, and budget? Most projects either move or stop here.',
      },
      {
        t: 'Design',
        d: 'Updated stability book, structural reinforcement, GA, system updates, and a yard-ready specification.',
      },
      {
        t: 'Tender support',
        d: 'We help the operator put the work out to yards, evaluate the responses, and brief the winner.',
      },
      {
        t: 'Site supervision',
        d: 'Optional. Inspection, gate reviews, sea trials, and acceptance testing.',
      },
    ],
    tools: [
      'Maxsurf · stability',
      'AUTOHYDRO',
      'SESAM · FEA',
      'Ansys',
      'STAR-CCM+ (when hydrodynamics change)',
      'Class-society liaison: DNV, BV, RINA, LR',
    ],
    cases: [
      { title: '"Belize I" remotorisation & capacity uplift', client: 'Nautiber', year: '2023' },
      { title: '"Libries" scientific-tourism conversion', client: 'Blue Geo Lighthouse', year: '2022' },
    ],
    faq: [
      {
        q: 'When is conversion the wrong answer?',
        a: 'When the new role asks for a hull that the existing vessel cannot give you within structural and stability limits. We say so in the feasibility, not after the steel is being cut.',
      },
      {
        q: 'How do you handle hybrid-propulsion retrofits?',
        a: 'Energy audit of the operating profile first — if the duty cycle does not have meaningful low-load hours, hybrid does not pay back. When it does, we size the battery and the genset around the actual load profile, not a generic one.',
      },
      {
        q: 'Do you handle the flag-state side as well as class?',
        a: 'Yes. For Portugal-flagged conversions we liaise directly with the Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos (DGRM); for foreign flags we work with the operator\'s flag-state representative.',
      },
    ],
    leadTime: '4–10 weeks (design)',
    serviceType: 'Naval architecture',
  },
  {
    slug: 'supervision-of-new-constructions',
    number: '07',
    name: 'Supervision of New Constructions',
    shortName: 'Supervision',
    tagline: "Independent owner's-engineer oversight.",
    description:
      'Quality control, technical compliance, and acceptance testing through delivery.',
    overview: [
      'Independent supervision is the work an operator pays for so that the yard cannot quietly redefine the specification. We sit on the owner\'s side, with no commercial relationship to the yard, and we carry a written authority to stop work when something is wrong.',
      'Our remit covers material procurement audits, gate reviews before each construction phase, inspection logs against the approved drawings, sea trials, and acceptance testing. We work internationally, and we travel.',
      'The deliverable on day one is the inspection plan: which inspections, at which gates, against which acceptance criteria. The deliverable on the last day is the final delivery report. Everything in between is documented.',
    ],
    whatWeDeliver: [
      'Inspection & QA plan',
      'Specification audit',
      'Gate reviews and inspection logs',
      'Non-conformance reports',
      'Acceptance testing protocol & results',
      'Final delivery report',
    ],
    methodology: [
      {
        t: 'Inspection plan',
        d: 'Phases, gates, hold-points, acceptance criteria. Issued before steel is cut.',
      },
      {
        t: 'On-site supervision',
        d: 'Resident or visiting principal at each gate. Real-time issue resolution; documented decisions.',
      },
      {
        t: 'Sea trials',
        d: 'Manoeuvring, speed, and noise trials witnessed against the contract. Discrepancies reported with corrective actions.',
      },
      {
        t: 'Final delivery',
        d: 'Acceptance test results, outstanding items list, and a final delivery report the operator can hand to the insurer.',
      },
    ],
    tools: [
      'Class rule sets (DNV, BV, RINA, LR, GL)',
      'IMO / SOLAS / MARPOL compliance frameworks',
      'Inspection software & digital logs',
      'Sea-trial instrumentation coordination',
    ],
    cases: [
      { title: 'OneOcean working boat (build phase)', client: 'OneOcean', year: '2021' },
    ],
    faq: [
      {
        q: 'Is your supervisor on site full-time?',
        a: 'Depends on the project. For high-tempo phases (block assembly, outfitting), yes. For longer phases with well-defined hold-points, we attend the gates. The plan is set at project start, not negotiated mid-build.',
      },
      {
        q: 'Do you carry authority to stop work?',
        a: 'Yes — written, by the owner. We use it sparingly. Most disputes are resolved by a non-conformance report and a 24-hour clock.',
      },
      {
        q: 'Do you cover offshore-structure construction as well as ships?',
        a: 'Yes. The discipline transfers: gate reviews, hold-points, acceptance criteria. The class rule changes; the rigour does not.',
      },
    ],
    leadTime: 'Project span',
    serviceType: 'Project supervision',
  },
];

export const SERVICES_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
