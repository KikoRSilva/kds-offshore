import type { ServiceDetail } from './services-detail';

export const SERVICES_EN: ServiceDetail[] = [
  {
    slug: '3d-geometric-modelling',
    number: '01',
    name: '3D Geometrical Modelling',
    shortName: '3D modelling',
    tagline: 'Watertight surfaces, ready for class.',
    description:
      'Production-grade CAD geometry for structural, hydrodynamic, and visualisation downstream. Watertight surfaces ready for class-society review.',
    tldr:
      '3D geometrical modelling is the production of watertight, parametric CAD surfaces that feed every downstream marine engineering task — structural FEA, CFD, mooring analysis, and class-society review — from a single source of truth. KDS Offshore builds models in Rhino + Grasshopper compliant with STANAG 4684 conventions, then hands over native, STEP, IGES, and section exports.',
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
    outcomes: [
      { metric: '100%', label: 'watertight on handover', context: 'automated manifold-check on every delivery' },
      { metric: '0', label: 'geometry rework after class review', context: 'SeaPower 12 m pilot boat, OneOcean working boat' },
      { metric: '2–4 wk', label: 'turnaround on a typical 15–30 m hull', context: 'from lines plan to handover' },
      { metric: 'STANAG 4684', label: 'compliant by default', context: 'HLA conventions on every parametric model' },
    ],
    whenToUse: [
      'A new hull, novel concept, or unusual deckhouse where no existing geometry is reliable.',
      'Multiple downstream uses planned: CFD + FEA + stability + visualisation — one model serves all.',
      'A class submission is on the critical path and the geometry must pass DNV / BV / RINA / LR review without rework.',
      'You expect to iterate (move the deckhouse aft, change the appendage, re-distribute tankage) over the next 12 months.',
    ],
    whenNotToUse: [
      'A solid IGES already exists, has been through class, and no further parametric variation is planned.',
      'A 2D plan is sufficient (single drawing for permitting), with no downstream analysis attached.',
    ],
    regulatoryContext: [
      { name: 'STANAG 4684', note: 'NATO standard for virtual ships; HLA conventions adopted throughout.' },
      { name: 'DNV class-society geometry conventions', note: 'Watertight, manifold, named control sections.' },
      { name: 'Bureau Veritas Marine NR467', note: 'Hull-form definition requirements for steel-ship submissions.' },
      { name: 'RINA — Rules for the Classification of Ships', note: 'Geometric inputs to scantling and stability rule checks.' },
      { name: "Lloyd's Register — Rules for the Classification of Ships", note: 'Compatible parametric topology, named sections.' },
    ],
    vesselTypes: [
      'Pilot boats, fast craft, RIBs',
      'Working boats and supply vessels',
      'Offshore platforms, semisubmersibles, FPSO topsides',
      'Wave-energy converters, floating wind sub-structures',
      'Patrol and naval craft',
      'Yachts and tourism vessels',
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
    tldr:
      'Naval architecture and offshore engineering design is the classical discipline of turning a vessel concept into a buildable, certifiable package — stability books, structural FEA, intact and damage analyses, GA drawings, and class-society liaison. KDS Offshore delivers it principal-led, fixed-fee, and signed by a chartered engineer registered with the Ordem dos Engenheiros.',
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
    outcomes: [
      { metric: '5', label: 'class societies in active liaison', context: 'DNV, Lloyd\'s Register, Bureau Veritas, RINA, GL' },
      { metric: '50+', label: 'stability books delivered', context: 'across cargo, passenger, offshore, and renewables (2016–2026)' },
      { metric: '90 days', label: 'post-handover support included', context: 'standard on every engagement' },
      { metric: '8–16 wk', label: 'typical lead time for a full package', context: 'GA, stability, FEA, class liaison' },
    ],
    whenToUse: [
      'A new build, capacity uplift, or conversion that requires a fresh stability book and class submission.',
      'A damage-stability rebuild after structural modification or compartmentation change.',
      'Probabilistic damage stability assessment to SOLAS Chapter II-1 for new or modified vessels.',
      'Owner-side engineering signature required (chartered engineer, Ordem dos Engenheiros).',
    ],
    whenNotToUse: [
      'A pure dock-supervision job with no design work — use Supervision of New Constructions instead.',
      'A CFD-only study with no structural or stability scope — use Hydrodynamic Optimisation instead.',
    ],
    regulatoryContext: [
      { name: 'SOLAS Chapter II-1', note: 'Subdivision, intact and damage stability, watertight integrity.' },
      { name: 'MARPOL', note: 'Pollution-prevention design requirements (oil, NLS, sewage, garbage, air).' },
      { name: 'IACS Common Structural Rules', note: 'Structural scantlings for tankers and bulkers in IACS class.' },
      { name: 'DNV-OS-C101', note: 'Design of offshore steel structures (general).' },
      { name: 'International Load Line Convention 1966 / 1988 Protocol', note: 'Freeboard and reserve buoyancy.' },
      { name: 'Decreto-Lei 96/2017 (Portugal)', note: 'Portuguese maritime safety transposition; DGRM liaison for PT-flagged vessels.' },
    ],
    vesselTypes: [
      'Cargo: container, bulk, multi-purpose',
      'Passenger: ferries, cruise, RoPax',
      'Offshore: FPSO, platforms, supply vessels',
      'Renewables: floating wind sub-structures, wave-energy converters',
      'Specialist: tugs, dredgers, pilot, working boats',
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
      'NASTRAN · structural FEA, noise & vibration',
      'SESAM · GeniE · structural modelling',
      'SESAM · HydroD · hydrodynamic loads',
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
    tldr:
      'Hydrodynamic optimisation is the CFD-driven refinement of a hull, appendages, and propulsor to reduce resistance, fuel burn, and emissions across the real operating profile — not a single design speed. KDS Offshore uses STAR-CCM+, OpenFOAM, and WAMIT, validated against towing-tank or sea-trial data, and reports residuals in every job.',
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
    outcomes: [
      { metric: '−18%', label: 'fuel burn at cruise', context: 'SeaPower 12 m pilot boat, 2022 (CFD-validated)' },
      { metric: '8–9%', label: 'voyage fuel saved on a synthetic Atlantic case', context: 'SOOS programme, published at IMDC 2024 and ICCAS 2024' },
      { metric: '3–5%', label: 'typical residual vs sea-trial data', context: 'validated mesh on resistance prediction' },
      { metric: '~80 pp', label: 'CFD report per study', context: 'class-society-ready, with documented solver setup' },
    ],
    whenToUse: [
      'A parametric study with 10+ hull variants to screen quickly (CFD beats tank time by orders of magnitude).',
      'A retrofit fuel-saving brief — the operator wants to know what 1° of trim or 0.5 kn of speed actually costs.',
      'A propulsor design where wake interaction matters and tank data is incomplete.',
      'A class-society submission needing wind/current load coefficients defensible against an external reviewer.',
    ],
    whenNotToUse: [
      'A single validated hull with extensive tank data already in hand — re-running CFD adds little.',
      'Cavitation prediction at full propulsor speed without a dedicated cavitation tunnel campaign.',
    ],
    regulatoryContext: [
      { name: 'EEDI / EEXI (IMO MEPC.328(76))', note: 'CFD-derived hydrodynamic data feeds the design and existing-ship efficiency indices.' },
      { name: 'CII (IMO Carbon Intensity Indicator)', note: 'Operational fuel burn modelled by CFD informs CII forecasting and rating uplift.' },
      { name: 'FuelEU Maritime', note: 'CFD-validated trim and speed advice reduces well-to-wake GHG intensity for compliance.' },
      { name: 'ITTC quality manual', note: 'V&V protocols followed on every CFD report; residuals published, not hidden.' },
    ],
    vesselTypes: [
      'Pilot boats and harbour craft',
      'Working boats, supply vessels, offshore service vessels',
      'Container ships, bulkers, tankers (operational trim/speed work)',
      'Cruise and passenger vessels',
      'Offshore structures (wind/current loading)',
      'Naval and patrol craft',
    ],
    publications: [
      {
        label:
          'Ribeiro e Silva, S., Varela, J. M. (2022). Ship Gyroscopic Roll Stabilisation. 41st International Conference on Ocean, Offshore and Arctic Engineering (OMAE 2022), ASME, Hamburg. Paper OMAE2022-7953.',
      },
      {
        label:
          'Ribeiro e Silva, S., Bento Moreira, M. (2024). An optimisation-based approach to reduce fuel consumption and emissions from shipping navigation. IMDC 2024, Amsterdam.',
        url: 'https://doi.org/10.59490/imdc.2024.832',
      },
      {
        label:
          'Ribeiro e Silva, S., Bento Moreira, M. (2024). An integrated real-time Ship Operation Optimisation System (SOOS). ICCAS 2024, RINA, Genoa.',
      },
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
      'MITCHELL1 · wavemaking resistance (thin-ship theory)',
      'DAWSON0 · wavemaking resistance (linear free-surface)',
      'Ansys Aqwa',
      'AUTOHYDRO',
      'Maxsurf',
      'Ship@Sea (KDS proprietary, FORTRAN)',
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
    tldr:
      'Ship manoeuvrability prediction uses time-domain simulation to forecast how a vessel handles in real conditions — turning circles, zigzags, berthing windows, autonomous-manoeuvring envelopes. KDS Offshore runs probabilistic operability studies (thousands of berthings sampled from a year of metocean data) that answer how often per year a vessel can manoeuvre without tug assistance.',
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
    outcomes: [
      { metric: '610 TEU', label: 'container ship analysed', context: 'Corvo and Silver Mary, Vila do Porto (Açores), 2024' },
      { metric: 'Probabilistic', label: 'operability answer per year', context: 'thousands of metocean-sampled berthings, with confidence intervals' },
      { metric: 'MSC.137(76)', label: 'IMO acceptance criteria validated', context: 'turning, zigzag, spiral, crash-stop' },
      { metric: '6-DoF', label: 'time-domain coupling', context: 'hull, rudder with flap, bow / stern thrusters' },
    ],
    whenToUse: [
      'A harbour where tug assistance is unreliable, expensive, or unavailable — and the operator wants a tug-free berthing window.',
      'An autonomous or unmanned vessel that needs a defensible operating envelope before deployment.',
      'A thruster retrofit where the question is "how much does a second bow thruster actually buy us?".',
      'An IMO MSC.137(76) standard-manoeuvre validation for a new or modified hull.',
    ],
    whenNotToUse: [
      'A deep-sea voyage optimisation problem (use the SOOS / voyage-optimisation programme instead).',
      'A pure resistance / propulsion question without a manoeuvring component (use Hydrodynamic Optimisation).',
    ],
    regulatoryContext: [
      { name: 'IMO MSC.137(76)', note: 'Standard-manoeuvre acceptance criteria (turning circle, zigzag, spiral, crash-stop).' },
      { name: 'IMO MSC-MEPC.2/Circ.12 (autonomous vessels)', note: 'Operability evidence required for MASS trial-and-approval framework.' },
      { name: 'PIANC Harbour Approach Channels (Report 121)', note: 'Manoeuvring-margin and basin-design references for port studies.' },
      { name: 'OCIMF Mooring Equipment Guidelines (MEG4)', note: 'Wind / current load conventions used in the coefficient set.' },
    ],
    vesselTypes: [
      'Container ships and feeders (Corvo, Silver Mary)',
      'Tankers, bulkers, multi-purpose cargo',
      'Cruise and passenger vessels (port manoeuvring)',
      'RoRo and RoPax',
      'Tugs, pilot boats, harbour craft',
      'Autonomous / unmanned surface vessels (MASS)',
    ],
    publications: [
      {
        label:
          'Ribeiro e Silva, S. (2005). Parametrically excited roll in regular and irregular head seas. International Shipbuilding Progress, Vol. 52.',
      },
      {
        label:
          'Ribeiro e Silva, S. et al. (2013). Prediction of parametric rolling in waves with time-domain non-linear strip theory. Ocean Engineering, Vol. 72.',
      },
      {
        label:
          'Ribeiro e Silva, S., Varela, J. M. (2022). Ship Gyroscopic Roll Stabilisation. 41st International Conference on Ocean, Offshore and Arctic Engineering (OMAE 2022), ASME, Hamburg. Paper OMAE2022-7953. BEM with speed corrections + ST methodology for operability-index assessment on small patrol vessels.',
      },
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
      'KDS DemoShip · MatLab/Simulink time-domain manoeuvring',
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
    tldr:
      'Mooring system design is the discipline that turns a metocean dataset into a steel bill of materials — spread, taut-leg, single-point, or dynamic-positioning systems for floating renewables, aquaculture, FPSOs, and offshore platforms. KDS Offshore screens configurations in ARIANE-3D, runs dynamic analysis in OrcaFlex or MOSES, and certifies fatigue to DNV-OS-E301 or API RP 2SK.',
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
    outcomes: [
      { metric: '6 OWCs', label: 'analysed in single hybrid platform', context: 'GRS Power Platform, WavEC Offshore Renewables, Belmullet (Ireland), 2015' },
      { metric: 'ULS + ALS', label: 'design environments per project', context: 'operational, survival, and accidental conditions modelled' },
      { metric: '25 yr', label: 'typical fatigue design life', context: 'rainflow + S-N to DNV-RP-C203, with margin reported' },
      { metric: '4–8 wk', label: 'lead time on a single-deployment study', context: 'screening + dynamic + fatigue + installation procedure' },
    ],
    whenToUse: [
      'Floating wind, wave-energy, or solar — coupled controller / mooring problem where uncertainty is in the metocean dataset.',
      'FPSO or permanent offshore installation with a multi-decade service life and fatigue-critical lines.',
      'Aquaculture or temporary moorings needing a defensible installation procedure for an unfamiliar contractor.',
      'Re-analysis of an existing mooring after damage, line replacement, or environmental reassessment.',
    ],
    whenNotToUse: [
      'Ship-to-ship transfer / tandem mooring operations (use a marine operations consultancy).',
      'Pure anchor-design without metocean coupling (use a specialist geotechnical firm).',
    ],
    regulatoryContext: [
      { name: 'DNV-OS-E301', note: 'Position-mooring — operational, survival, and ALS design rule set.' },
      { name: 'API RP 2SK', note: 'Design and analysis of station-keeping systems for floating structures.' },
      { name: 'DNV-RP-C203', note: 'Fatigue design of offshore steel structures — S-N curves and rainflow methodology.' },
      { name: 'DNV-OS-J103 (floating wind)', note: 'Design of floating wind turbine structures — mooring and global response.' },
      { name: 'IEC 61400-3', note: 'Wind-turbine design requirements for offshore (couples with mooring loads).' },
    ],
    vesselTypes: [
      'Floating wind sub-structures (semi-sub, spar, TLP)',
      'Wave-energy converters (point absorbers, OWCs, attenuators)',
      'Floating solar arrays',
      'FPSOs and FSOs',
      'Offshore aquaculture (fish-farm cages)',
      'Temporary moorings (construction, commissioning, decommissioning)',
    ],
    publications: [
      {
        label:
          'Ribeiro e Silva, S. et al. (2011). Numerical modelling and assessment of the UGEN floating wave energy converter. International Journal of Marine Engineering, Vol. 153.',
      },
      {
        label:
          'Ribeiro e Silva, S. et al. (2016). Hydrodynamic optimization of the UGEN wave energy converter. International Journal of Marine Energy, Vol. 15.',
      },
      {
        label:
          'Ribeiro e Silva, S. et al. (2021). Model testing of floating wave energy converter with internal U-shaped oscillating water column. Energy Conversion and Management, Vol. 240.',
      },
      {
        label:
          'Lourenço, D., Ribeiro e Silva, S., Pinto, L. (2025). Wave Energy Conversion Efficiency of the UGEN along the Western Portuguese Coast. EWTEC 2025, Funchal.',
        url: 'https://doi.org/10.36688/ewtec-2025-1032',
      },
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
      'KDS Mooring (proprietary)',
      'SESAM · DeepC · global response',
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
    tldr:
      'Vessel conversion engineering is the redesign of an existing hull for a new role — remotorisation, capacity uplift, hybrid-propulsion retrofit, scientific or commercial repurposing. KDS Offshore handles the stability re-issue, structural reinforcement, class- and flag-state liaison (DNV, BV, RINA, LR, DGRM), and yard tender support. Fixed-fee feasibility first; design only when the engineering case closes.',
    overview: [
      'A conversion is a different problem from a new build: the geometry is given, the structure has a history, and the budget has to compete with replacement. We do conversions where the engineering case actually closes — not because we want the project, because the operator does.',
      'Typical jobs span the full range we have either delivered or quoted: tanker → FPSO conversion; hybrid dual-fuel LNG–Diesel–Electric propulsion retrofit; remotorisation (the gearbox usually wins); passenger or cargo capacity uplift; additional accommodation-block installation; OPS / shore-power fitting; stand-by vessel hull conversion; and scientific-research conversion. We handle the stability re-issue, the structural reinforcements, the class- and flag-state liaison, and the yard tender support.',
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
    outcomes: [
      { metric: 'On schedule', label: 'Belize I delivered', context: 'Nautiber, catamaran remotorisation & capacity uplift, 2023' },
      { metric: 'On-time, on-spec', label: 'Libries scientific-tourism conversion', context: 'Blue Geo Lighthouse, motor-sailer conversion, 2022' },
      { metric: 'Fixed-fee', label: 'feasibility study before design commits', context: 'most projects either move or stop at feasibility' },
      { metric: '4–10 wk', label: 'typical lead time for the design package', context: 'after feasibility decision' },
    ],
    whenToUse: [
      'Remotorisation, hybrid-propulsion retrofit, or accommodation upgrade where the hull is sound and the role is shifting.',
      'Passenger or cargo capacity uplift requiring structural reinforcement and re-issued stability.',
      'Scientific-research or tourism conversion of an existing commercial vessel.',
      'Yard tender preparation — the operator needs a yard-ready specification before bid.',
    ],
    whenNotToUse: [
      'When the new role asks for a hull the existing vessel cannot give within structural or stability limits — we say so in feasibility, not after steel is cut.',
      'When the operator wants a brand-new design without reusing the existing hull — use Naval Architecture instead.',
    ],
    regulatoryContext: [
      { name: 'SOLAS Chapter II-1 (damage stability)', note: 'Re-issued damage cases after any subdivision or compartmentation change.' },
      { name: 'MARPOL Annex VI (NOx / SOx)', note: 'Emissions compliance for remotorised propulsion plant.' },
      { name: 'IACS Common Structural Rules', note: 'Where reinforcement intersects CSR-applicable structure (tankers, bulkers).' },
      { name: 'EU MRV / FuelEU Maritime', note: 'Operational fuel-consumption baseline before and after retrofit.' },
      { name: 'Decreto-Lei 96/2017 + DGRM (Portugal)', note: 'Direct liaison with the Portuguese flag-state authority for PT-flagged conversions.' },
    ],
    vesselTypes: [
      'Catamarans (passenger, tourism, working) — Belize I',
      'Motor-sailers and yachts — Libries',
      'Working boats and supply vessels',
      'Tugs and harbour craft',
      'Small ferries and RoPax',
      'Specialist conversion (scientific, expedition, hospital)',
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
    tldr:
      "Supervision of new constructions is the independent owner's-engineer role that protects the operator's specification through build — material audits, gate reviews, inspection logs, sea trials, and final acceptance. KDS Offshore sits on the owner side with no commercial relationship to the yard, with written authority to stop work, and delivers a final report the operator can hand to the insurer.",
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
    outcomes: [
      { metric: 'Independent', label: 'no commercial tie to the yard', context: 'fees paid exclusively by the owner; written stop-work authority' },
      { metric: 'Day-1', label: 'inspection plan with named gates', context: 'before steel is cut; locked at kick-off, not negotiated mid-build' },
      { metric: '24 h', label: 'standard NCR resolution clock', context: 'documented; most disputes resolve before escalation' },
      { metric: 'Insurer-ready', label: 'final delivery report', context: 'acceptance results + outstanding-items list, formatted for hull P&I' },
    ],
    whenToUse: [
      'A new build where the owner needs an independent technical witness — first-of-class, novel design, or multi-yard subcontracting.',
      'A construction phase under schedule pressure, where the owner cannot resident-staff but needs gate-level discipline.',
      'A foreign yard where time-zone and language gaps require a principal-led, on-site presence at hold-points.',
      'A high-value offshore structure where insurance and class will both audit the delivery package after handover.',
    ],
    whenNotToUse: [
      'A turnkey contract where the owner does not retain technical accountability and the yard carries all risk.',
      'A modification or refit inside a single yard period under existing class oversight (use Vessel Conversion Engineering).',
    ],
    regulatoryContext: [
      { name: 'IACS Common Structural Rules', note: 'Hull-structure inspection gates and acceptance criteria.' },
      { name: 'SOLAS / MARPOL / Load Line', note: 'Statutory survey points witnessed alongside the recognised organisation.' },
      { name: 'IMO Sea Trial Resolution MSC.137(76)', note: 'Acceptance criteria for the standard manoeuvres witnessed at trials.' },
      { name: 'ISO 9001 (yard QMS)', note: 'Quality-management framework against which the yard\'s NCR process is audited.' },
      { name: 'Flag-state delegation (DGRM / equivalents)', note: 'Statutory items delegated by the flag administration to the RO and witnessed by the owner\'s engineer.' },
    ],
    vesselTypes: [
      'Cargo ships (newbuild block assembly through delivery)',
      'Passenger and cruise vessels',
      'Offshore structures (jackets, semi-subs, FPSO topsides)',
      'Patrol and naval craft',
      'Working boats and pilot boats',
      'Renewable-energy installations (during construction phase)',
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
  {
    slug: 'maritime-decarbonisation',
    number: '08',
    name: 'Maritime Decarbonisation',
    shortName: 'Decarbonisation',
    tagline: 'Pathways from fuel-burn baseline to net zero.',
    description:
      'GHG-reduction pathways for vessels and offshore assets. Alternative fuels, energy efficiency, and FuelEU Maritime / IMO 2050 compliance.',
    tldr:
      'Maritime decarbonisation is the technical work of moving a vessel or fleet from a measured fuel-burn baseline to a defensible net-zero pathway — battery, hybrid, LNG, methanol, ammonia, biofuel, or efficiency retrofit — that satisfies FuelEU Maritime, EU ETS Maritime, and IMO 2050 obligations. KDS Offshore grounds every recommendation in CFD-quantified hydrodynamics and well-to-wake lifecycle modelling.',
    overview: [
      'Maritime decarbonisation is no longer a strategic abstraction. FuelEU Maritime, the EU ETS extension to shipping, IMO 2050 targets, and the Poseidon Principles all impose concrete, dated obligations on operators. The question is not whether to decarbonise — it is which pathway, on what timeline, with which capital cost.',
      'We work the technical side: emissions baselines, alternative-fuel feasibility (battery, hybrid, LNG, methanol, ammonia), energy-efficiency retrofits, and operational optimisation (trim, speed, routing). Every recommendation is grounded in CFD-quantified hydrodynamics and lifecycle GHG modelling, not in generic ESG narrative.',
      'Reference work includes the SEAPOWER 1500 — a fully electric 15 m pilot boat sized by CFD before construction — the OPS shore-power study for APRAM in Madeira, and remotorisation work on the "Belize I" catamaran for Nautiber. Each engagement starts from a measured operational baseline and ends with a documented pathway the operator can defend to regulators and lenders.',
    ],
    whatWeDeliver: [
      'Operational emissions baseline (well-to-wake)',
      'Decarbonisation pathway comparison matrix',
      'Alternative-fuel feasibility study',
      'Electrification & hybrid powertrain sizing',
      'Energy-efficiency retrofit specification',
      'FuelEU Maritime / IMO 2050 / EU ETS compliance assessment',
      'Lifecycle GHG model and CAPEX/OPEX envelope',
    ],
    outcomes: [
      { metric: '100%', label: 'electric propulsion (SEAPOWER 1500)', context: '15 m pilot boat, 664 kWh lithium-ion, sized by CFD pre-construction (2025)' },
      { metric: '8–9%', label: 'voyage fuel saved on Atlantic case', context: 'SOOS programme, published IMDC 2024 + ICCAS 2024' },
      { metric: 'OPS', label: 'shore-power design for Madeira port authority', context: 'Green Ports Madeira / APRAM via Future Proman, 2023' },
      { metric: '6 fuel paths', label: 'compared per fleet study', context: 'battery, hybrid, LNG, methanol, ammonia, biofuel — each scored on CAPEX, OPEX, GHG, TRL' },
    ],
    whenToUse: [
      'A FuelEU Maritime, EU ETS Maritime, or CII compliance gap that needs a technical answer — not a glossy ESG report.',
      'A fleet renewal or remotorisation decision where battery, hybrid, methanol, or biofuel are all candidates.',
      'A port-authority or charterer demand for shore-power, alternative fuel, or measured well-to-wake reporting.',
      'A lender or RO requesting a defensible technical annex for green-finance or Poseidon-Principles disclosure.',
    ],
    whenNotToUse: [
      'A pure ESG marketing brief without an operational baseline (we are engineers, not communications consultants).',
      'A duty-cycle where the operator has not yet measured or estimated fuel consumption — start with a one-week onboard logging effort first.',
    ],
    regulatoryContext: [
      { name: 'FuelEU Maritime (Regulation (EU) 2023/1805)', note: 'Annual GHG intensity limits on energy used on board EU-trading ships from 2025.', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1805' },
      { name: 'EU ETS Maritime (extension 2024)', note: 'CO₂ allowances for ships ≥5,000 GT trading to EU ports; ramp-up 2024–2027.' },
      { name: 'IMO 2023 GHG Strategy (MEPC.377(80))', note: 'Net-zero close to 2050; 20–30% by 2030; 70–80% by 2040 (well-to-wake).' },
      { name: 'IMO CII (Resolution MEPC.336(76))', note: 'Annual carbon intensity rating A–E; remedial plan for D / E ratings.' },
      { name: 'Poseidon Principles', note: 'Bank-led climate alignment disclosure; technical annex required.' },
      { name: 'EU MRV (Regulation (EU) 2015/757)', note: 'Monitoring, reporting, verification of CO₂ emissions on EU-trading ships.' },
    ],
    vesselTypes: [
      'Pilot boats, harbour craft, port-authority fleets — SEAPOWER 1500, APRAM',
      'Ferries and short-sea passenger',
      'Container ships and feeders',
      'Tugs and offshore service vessels',
      'Cruise vessels (operational efficiency and OPS retrofit)',
      'Working boats and aquaculture support',
    ],
    publications: [
      {
        label:
          'Ribeiro e Silva, S., Bento Moreira, M. (2024). An optimisation-based approach to reduce fuel consumption and emissions from shipping navigation. IMDC 2024, Amsterdam.',
        url: 'https://doi.org/10.59490/imdc.2024.832',
      },
      {
        label:
          'Ribeiro e Silva, S., Bento Moreira, M. (2024). An integrated real-time Ship Operation Optimisation System (SOOS) to reduce fuel consumption and emissions from shipping navigation and port calls. ICCAS 2024, RINA, Genoa.',
      },
    ],
    methodology: [
      {
        t: 'Baseline & boundary',
        d: 'Define the operational profile — voyages, port time, fuel mix, environmental conditions. Build the well-to-wake emissions baseline against IMO DCS / CII methodology.',
      },
      {
        t: 'Pathway options',
        d: 'Score battery, hybrid, methanol, ammonia, biofuel, and efficiency-retrofit options against CAPEX, OPEX, GHG reduction, technology readiness, and refuelling availability. Output is a defensible comparison matrix.',
      },
      {
        t: 'Engineering sizing',
        d: 'For the selected pathway, full engineering: powertrain, battery, fuel system, integration, structural fit, weight and stability impact. CFD where it changes the answer (hull, propulsion, appendages).',
      },
      {
        t: 'Compliance & financing',
        d: 'FuelEU Maritime, EU ETS, IMO 2050, Poseidon Principles. We prepare the technical submission for class and the technical annexes lenders ask for.',
      },
    ],
    tools: [
      'Simerics MP (CFD)',
      'STAR-CCM+ / OpenFOAM (CFD)',
      'Rhino + Grasshopper (parametric design)',
      'Holtrop-Mennem method (empirical resistance)',
      'FuelEU Maritime / IMO DCS / CII methodology',
      'EU ETS maritime calculator',
      'Lifecycle assessment frameworks',
      'MATLAB / Simulink (powertrain sizing)',
    ],
    cases: [
      { title: 'SEAPOWER 1500 — fully electric 15 m pilot boat', client: 'SeaPower', year: '2025' },
      { title: 'Green Ports Madeira / OPS shore-power study', client: 'APRAM via Future Proman', year: '2023' },
      { title: '"Belize I" — catamaran remotorisation & capacity uplift', client: 'Nautiber', year: '2023' },
    ],
    faq: [
      {
        q: 'Which fuel pathway is right for my fleet?',
        a: "There is no universal answer. We start from your operational profile — voyage length, port time, refuelling availability, charter constraints, CAPEX envelope — and score battery, hybrid, methanol, ammonia, and biofuel options against your specifics. The output is a comparison matrix and a written recommendation, not a sales pitch.",
      },
      {
        q: 'Are you certified for FuelEU Maritime reporting?',
        a: 'We follow the published FuelEU Maritime methodology and DCS reporting framework, and we deliver assessments in the format flag-state administrations and recognised organisations expect. Final certification is issued by the RO (DNV, BV, RINA, LR); we prepare the technical submission and answer the queries.',
      },
      {
        q: 'Can you retrofit existing vessels, or only design new builds?',
        a: 'Both. For most operators retrofit is more economical than newbuild in the short term. We have remotorised pilot boats, converted catamarans, and specified hybrid retrofits. Each starts with a feasibility study covering structural fit, weight balance, range, and regulatory approval.',
      },
    ],
    leadTime: '4–12 weeks',
    serviceType: 'Decarbonisation',
  },
  {
    slug: 'maritime-digitalisation-and-digital-twin',
    number: '09',
    name: 'Digitalisation & Digital Twin',
    shortName: 'Digitalisation',
    tagline: 'Physics-based twins from design to fleet operation.',
    description:
      'Digital-twin development, data-driven performance monitoring, and digitalisation strategy for fleets and offshore operations.',
    tldr:
      'A maritime digital twin is a physics-based predictive model — coupling CFD-derived hydrodynamics with onboard sensor streams — that answers operational what-if questions (trim, speed, route, retrofit) without onboard trials. KDS Offshore builds twins to ISO/IEC 23247 conventions, calibrated against measurements, with documented residuals. Reference work: SEAPOWER 1500 and the SOOS optimisation system (IMDC 2024 / ICCAS 2024).',
    overview: [
      'Most maritime "digital twins" are dashboards on top of SCADA streams. Useful, but they cannot answer the question the operator actually has: "what if we change trim by one degree, or speed by half a knot?" Answering that needs a physics-based model — and that is the layer we build.',
      'We couple CFD-derived hydrodynamic models with onboard sensor streams to produce a twin that lives next to the data, not in place of it. The same physics model that sized the vessel during design carries into operation as a calibrated predictor of resistance, fuel burn, and trim sensitivity. ISO/IEC 23247 digital-twin conventions guide the architecture.',
      'Reference work includes the SEAPOWER 1500 — a fully electric pilot boat whose digital twin was built before steel was cut — and a real-time ship-operation optimisation system that reduces fuel consumption and emissions on navigation and port calls (published at IMDC 2024 and ICCAS 2024 in Genoa).',
    ],
    whatWeDeliver: [
      'Physics-based digital twin (CFD-derived)',
      'Real-time performance dashboard',
      'Predictive trim, speed, and fuel-burn models',
      'Sensor architecture & instrumentation spec',
      'Fleet benchmarking framework',
      'Operator decision-support tooling (trim advisor, route comparison)',
      'Published-research-backed methodology',
    ],
    outcomes: [
      { metric: 'Pre-build', label: 'twin delivered before steel cut', context: 'SEAPOWER 1500 — 15 m fully electric pilot boat, 2025' },
      { metric: '8–9%', label: 'voyage fuel saved (synthetic Atlantic case)', context: 'SOOS, IMDC 2024 / ICCAS 2024 publications' },
      { metric: 'Minimum-viable', label: 'sensor set: GPS, IMU, fuel flow, RPM, environment', context: 'simpler than vendor norm — fewer failure modes' },
      { metric: 'ISO/IEC 23247', label: 'digital-twin architecture standard', context: 'guides the model / data / actor layering' },
    ],
    whenToUse: [
      'A new build where the design-stage CFD can carry into the operational twin from day one.',
      'An existing vessel needing a trim advisor, speed-fuel curve, or retrofit-impact estimator — the CFD baseline closes the loop the sensors cannot.',
      'A fleet operator needing a single benchmarking framework across mixed-age vessels.',
      'A pilot project preceding a multi-year fleet rollout — we ship a working twin in weeks, not months.',
    ],
    whenNotToUse: [
      'A pure data-engineering job (just collect and visualise SCADA streams) — use a DAQ vendor instead.',
      'A pure ML / regression model with no physics anchor — accurate inside the training envelope, dangerous outside it.',
    ],
    regulatoryContext: [
      { name: 'ISO/IEC 23247 (Digital Twin Framework for Manufacturing / Marine)', note: 'Model / data / actor architecture conventions for production twins.' },
      { name: 'IMO CII (Carbon Intensity Indicator)', note: 'Twin-derived operational efficiency feeds CII forecasting and rating uplift.' },
      { name: 'EU MRV / FuelEU Maritime', note: 'Twin-derived fuel-burn predictions support MRV reporting and FuelEU compliance forecasting.' },
      { name: 'IMO MSC.428(98) (cyber risk management)', note: 'Twin integration with shipboard systems must satisfy the cyber-risk safety-management framework.' },
      { name: 'NIST SP 800-160 (digital systems engineering)', note: 'Reference for the twin\'s system-level architecture and trustworthiness.' },
    ],
    vesselTypes: [
      'Pilot boats and harbour craft (SEAPOWER 1500)',
      'Ferries and short-sea passenger',
      'Container ships and bulk carriers (voyage optimisation)',
      'Cruise vessels (trim and speed advisory)',
      'Working boats and offshore service vessels',
      'Fleets needing cross-vessel benchmarking',
    ],
    publications: [
      {
        label:
          'Ribeiro e Silva, S., Bento Moreira, M. (2024). An integrated real-time Ship Operation Optimisation System (SOOS). ICCAS 2024, RINA, Genoa.',
      },
      {
        label:
          'Ribeiro e Silva, S., Bento Moreira, M. (2024). An optimisation-based approach to reduce fuel consumption and emissions from shipping navigation. IMDC 2024, Amsterdam.',
        url: 'https://doi.org/10.59490/imdc.2024.832',
      },
    ],
    methodology: [
      {
        t: 'CFD-derived baseline',
        d: 'Resistance & propulsion curves from CFD (Simerics MP, OpenFOAM, or STAR-CCM+) across the operational envelope. This is the twin\'s physics layer — calm-water, free-trim, free-sinkage, multiple loading conditions.',
      },
      {
        t: 'Sensor architecture',
        d: 'Specify the minimum viable sensor set — RPM, torque, GPS, fuel flow, IMU, environment — that drives a useful twin. We bias for simplicity; one extra sensor that adds nothing is one more failure mode.',
      },
      {
        t: 'Twin integration & calibration',
        d: 'Couple the CFD-derived model with live data streams. Calibration loop against onboard measurements, with documented residuals and uncertainty bounds.',
      },
      {
        t: 'Decision-support layer',
        d: 'Operator-facing outputs: trim advisor, speed-fuel curve, voyage comparison, retrofit-impact estimator. The model answers questions; the operator decides.',
      },
    ],
    tools: [
      'Simerics MP (CFD baseline)',
      'OpenFOAM / STAR-CCM+ (CFD)',
      'Rhino + Grasshopper / Orca3D (geometry)',
      'Python / NumPy / SciPy / pandas (data processing)',
      'MATLAB / Simulink (control & state-space models)',
      'InfluxDB / Grafana (time-series & dashboards)',
      'ISO/IEC 23247 digital-twin standards',
      'IMDC 2024 / ICCAS 2024 published optimisation methodology',
    ],
    cases: [
      { title: 'SEAPOWER 1500 — CFD-derived digital twin, pre-construction', client: 'SeaPower', year: '2025' },
      { title: 'Real-time ship operation optimisation (IMDC / ICCAS publications)', client: 'KDS R&D', year: '2024' },
      { title: '"Belize I" — performance monitoring framework', client: 'Nautiber', year: '2023' },
    ],
    faq: [
      {
        q: 'Is this just another SCADA dashboard?',
        a: 'No. SCADA dashboards visualise what the sensors measure. A physics-based twin can answer "what if we change trim by one degree?" without onboard testing — because the CFD-derived model fills the gap the sensors cannot see. The model lives next to the data, not in place of it.',
      },
      {
        q: 'How much sensor instrumentation do I need to install?',
        a: 'Less than most vendors will tell you. A typical setup runs on GPS, IMU, fuel flow, shaft RPM, and a small environmental package. The CFD-derived model infers what the sensors cannot directly measure (resistance components, propulsive efficiency at off-design points).',
      },
      {
        q: 'Can the twin run on existing vessels, or only new builds?',
        a: 'Both. For new builds we couple design-stage CFD into the operational twin from day one. For existing vessels we run a one-off CFD baseline against the as-built hull and then attach the live data stream. The retrofit path takes weeks, not months.',
      },
    ],
    leadTime: '6–16 weeks',
    serviceType: 'Digitalisation',
  },
];
