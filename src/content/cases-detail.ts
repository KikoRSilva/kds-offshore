// Detail data for /work/[slug]/ case-study pages.
//
// Each entry mirrors a row of `en.pages.cases.items` (which drives the /work
// index grid) with the same `slug` order — the index uses CASE_SLUGS to build
// links into these pages.
//
// Optional fields (subtitle, brief, approach, deliverables, outcomes, lessons,
// references) are filled in case-by-case as content is approved by the user.
// When a field is undefined the detail page renders a visible "Pending" stub
// for that section so the editorial gap is obvious — and so the page still
// has stable structure across the seven cases.

export interface CaseReference {
  label: string;
  url?: string;
}

export interface CaseDetail {
  // Routing / identity
  slug: string;

  // Index-shared fields (kept in sync with en.pages.cases.items)
  tag: string;
  category: string;
  title: string;
  client: string;
  clientUrl?: string;
  year: string;
  location: string;
  stat: string;
  description: string;

  // Hero
  heroSrc: string;
  heroAlt: string;

  // Optional editorial sections — placeholders rendered when undefined
  subtitle?: string;
  brief?: string;
  constraints?: string[];
  approach?: string[];
  deliverables?: string[];
  outcomes?: { headline: string; detail?: string }[];
  lessons?: string;
  team?: string[];
  references?: CaseReference[];
}

export const CASES: CaseDetail[] = [
  {
    slug: 'corvo-autonomous-manoeuvring',
    tag: 'Manoeuvrability · Container ship',
    category: 'Manoeuvrability & CFD',
    title: '"Corvo" autonomous manoeuvring assessment, Vila do Porto',
    client: 'Mutualista, Grupo Bensaúde',
    year: '2024',
    location: 'Sta. Maria, Açores · PT',
    stat: '610 TEU · 9,000 DWT',
    description:
      'Probabilistic study of how often per year the container ship "Corvo" (IMO 9381275) can manoeuvre autonomously inside the harbour basin of Vila do Porto without tug assistance. MatLab-based numerical model coupling hull, rudder with flap, and bow thrusters.',
    heroSrc: '/images/stock/cargo-vessel.jpg',
    heroAlt:
      'Container vessel similar to the "Corvo" alongside a quay — 610 TEU, 9,000 DWT class.',
  },
  {
    slug: 'grs-power-platform-parametric-rolling',
    tag: 'Offshore renewables',
    category: 'Mooring & offshore',
    title: 'GRS Power Platform, parametric rolling assessment',
    client: 'WavEC Offshore Renewables',
    year: '2015',
    location: 'Belmullet · IE',
    stat: '6 OWCs · hybrid wind+wave',
    description:
      'Pre-deployment de-risking of a bottom-fixed hybrid wind and wave energy concept (six Oscillating Water Columns). Diffraction-radiation in WAMIT and non-linear time-domain simulation in Ship@Sea.',
    heroSrc: '/images/stock/port-cranes.jpg',
    heroAlt:
      'Offshore renewables platform construction — placeholder image for the GRS Power Platform engagement.',
  },
  {
    slug: 'green-ports-madeira-ops',
    tag: 'Decarbonisation',
    category: 'Decarbonisation',
    title: 'Green Ports Madeira / APRAM OPS design',
    client: 'Future Proman',
    year: '2023',
    location: 'Funchal · PT',
    stat: 'OPS + fleet retrofit',
    description:
      'Engineering solutions for decarbonisation of the maritime transport sector: shore-side power (cold-ironing) design and retrofitting of the APRAM port-authority fleet.',
    heroSrc: '/images/stock/harbor-night.jpg',
    heroAlt:
      'Port at night — placeholder image for the Green Ports Madeira / APRAM OPS engagement.',
  },
  {
    slug: 'belize-i-remotorisation',
    tag: 'Retrofit · Catamaran',
    category: 'Naval architecture',
    title: '"Belize I" remotorisation & capacity uplift',
    client: 'Nautiber',
    year: '2023',
    location: 'Algarve · PT',
    stat: 'Delivered on schedule',
    description:
      'Naval engineering project for remotorisation and increased passenger capacity of the "Belize I" catamaran. Technical lead: Eng. Sérgio Ribeiro e Silva.',
    heroSrc: '/images/stock/sea-wave.jpg',
    heroAlt:
      'Open sea — placeholder image for the "Belize I" remotorisation engagement.',
  },
  {
    slug: 'libries-scientific-tourism-conversion',
    tag: 'Conversion · Motor-sailer',
    category: 'Naval architecture',
    title: '"Libries" scientific-tourism conversion',
    client: 'Blue Geo Lighthouse',
    year: '2022',
    location: 'PT',
    stat: 'On-time, on-spec',
    description:
      'Conversion of the motor-sailer "Libries" for scientific tourism operations. Full naval engineering package delivered under technical supervision.',
    heroSrc: '/images/stock/ocean-horizon.jpg',
    heroAlt:
      'Open ocean horizon — placeholder image for the "Libries" conversion engagement.',
  },
  {
    slug: 'oneocean-cfd-package',
    tag: 'CFD · Working boat',
    category: 'Manoeuvrability & CFD',
    title: 'OneOcean preliminary CFD package',
    client: 'OneOcean',
    year: '2021',
    location: 'PT',
    stat: 'Schedule met',
    description:
      "CFD support during preliminary design and construction of OneOcean's working boat. Numerical tools provided by KDS allowed the client to comply with the ship-design programme on schedule.",
    heroSrc: '/images/stock/maritime-equipment.jpg',
    heroAlt:
      'Maritime working equipment — placeholder image for the OneOcean CFD engagement.',
  },
  {
    slug: 'seapower-pilot-boat-optimisation',
    tag: 'CFD · Pilot boat',
    category: 'Manoeuvrability & CFD',
    title: 'SeaPower pilot boat hydrodynamic optimisation',
    client: 'SeaPower',
    year: '2022',
    location: 'PT',
    stat: 'Roll-stab + trim',
    description:
      "Roll-stabilisation and trim-optimisation programme for SeaPower's pilot boat. CFD-driven hydrodynamic refinement intended to promote energy efficiency and decarbonisation in port operations.",
    heroSrc: '/images/stock/engineering-detail.jpg',
    heroAlt:
      'Maritime engineering detail — placeholder image for the SeaPower pilot boat engagement.',
  },
];

export const CASES_BY_SLUG: Record<string, CaseDetail> = Object.fromEntries(
  CASES.map((c) => [c.slug, c]),
);

export const CASE_SLUGS: string[] = CASES.map((c) => c.slug);
