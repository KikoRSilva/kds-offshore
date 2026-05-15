// Detail data for /work/[slug]/ case-study pages.
//
// Each entry mirrors a row of `pages.cases.items` (which drives the /work
// index grid) with the same `slug` order — the index uses CASE_SLUGS to build
// links into these pages.
//
// Optional fields (subtitle, brief, approach, deliverables, outcomes, lessons,
// references) are filled in case-by-case as content is approved by the user.
// When a field is undefined the detail page renders a visible "Pending" stub
// for that section so the editorial gap is obvious — and so the page still
// has stable structure across the seven cases.
//
// Localisation: each case carries an optional `i18n.pt` block with the
// translatable text fields. Slugs, client names, years, locations, image
// paths, and references stay locale-invariant. Use `pickCaseView(c, lang)`
// from this module to read the locale-correct view.

export interface CaseReference {
  label: string;
  url?: string;
}

export interface CaseI18n {
  tag?: string;
  category?: string;
  title?: string;
  description?: string;
  heroAlt?: string;
  subtitle?: string;
  brief?: string;
  constraints?: string[];
  approach?: string[];
  deliverables?: string[];
  outcomes?: { headline: string; detail?: string }[];
  lessons?: string;
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

  // Optional per-locale overrides (PT for now; extend with es/fr/etc.)
  i18n?: { pt?: CaseI18n };
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
    references: [
      {
        label:
          'Ribeiro e Silva, S. (2005). Parametrically excited roll in regular and irregular head seas. International Shipbuilding Progress, Vol. 52.',
      },
      {
        label:
          'Ribeiro e Silva, S. et al. (2013). Prediction of parametric rolling in waves with time domain non-linear strip theory. Ocean Engineering, Vol. 72.',
      },
    ],
    i18n: {
      pt: {
        tag: 'Manobrabilidade · Porta-contentores',
        category: 'Manobrabilidade & CFD',
        title: '"Corvo" — avaliação de manobra autónoma, Vila do Porto',
        description:
          'Estudo probabilístico de quantas vezes por ano o navio porta-contentores "Corvo" (IMO 9381275) pode manobrar autonomamente dentro do porto de Vila do Porto sem assistência de rebocador. Modelo numérico em MatLab acoplando casco, leme com flap, e propulsores de proa.',
        heroAlt:
          'Navio porta-contentores semelhante ao "Corvo" atracado a um cais — classe de 610 TEU, 9.000 DWT.',
      },
    },
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
    references: [
      {
        label:
          'Ribeiro e Silva, S. et al. (2011). Numerical modelling and assessment of the UGEN floating wave energy converter. International Journal of Marine Engineering, Vol. 153.',
      },
      {
        label:
          'Ribeiro e Silva, S. et al. (2016). Hydrodynamic optimization of the UGEN: Wave energy converter. International Journal of Marine Energy, Vol. 15.',
      },
      {
        label:
          'Ribeiro e Silva, S. et al. (2017). Experimental study on reduction of dynamic instability in oscillating water column spar buoy. 12th European Wave and Tidal Energy Conference.',
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
    i18n: {
      pt: {
        tag: 'Renováveis offshore',
        category: 'Amarração & offshore',
        title: 'GRS Power Platform — avaliação de rolamento paramétrico',
        description:
          'Análise de risco pré-implantação de um conceito híbrido eólico-ondas fixo no fundo (seis Colunas de Água Oscilante). Difração-radiação em WAMIT e simulação não-linear no domínio temporal em Ship@Sea.',
        heroAlt:
          'Construção de plataforma de renováveis offshore — imagem ilustrativa para o projeto GRS Power Platform.',
      },
    },
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
    references: [
      {
        label:
          'Ribeiro e Silva, S., Bento Moreira, M. (2024). An optimisation-based approach to reduce fuel consumption and emissions from shipping navigation. 15th International Marine Design Conference (IMDC 2024), Amsterdam.',
        url: 'https://doi.org/10.59490/imdc.2024.832',
      },
      {
        label:
          'Ribeiro e Silva, S., Bento Moreira, M. (2024). An integrated real-time Ship Operation Optimisation System (SOOS) to reduce fuel consumption and emissions from shipping navigation and port calls. ICCAS 2024 / RINA.',
      },
    ],
    i18n: {
      pt: {
        tag: 'Descarbonização',
        category: 'Descarbonização',
        title: 'Green Ports Madeira / projeto OPS APRAM',
        description:
          'Soluções de engenharia para a descarbonização do sector dos transportes marítimos: projeto de fornecimento de energia em terra (cold-ironing) e retrofit da frota da autoridade portuária APRAM.',
        heroAlt:
          'Porto à noite — imagem ilustrativa para o projeto Green Ports Madeira / APRAM OPS.',
      },
    },
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
    i18n: {
      pt: {
        tag: 'Retrofit · Catamarã',
        category: 'Arquitetura naval',
        title: '"Belize I" — remotorização e aumento de capacidade',
        description:
          'Projeto de engenharia naval para remotorização e aumento de capacidade de passageiros do catamarã "Belize I". Responsável técnico: Eng. Sérgio Ribeiro e Silva.',
        heroAlt:
          'Mar aberto — imagem ilustrativa para o projeto de remotorização do "Belize I".',
      },
    },
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
    i18n: {
      pt: {
        tag: 'Conversão · Motor-veleiro',
        category: 'Arquitetura naval',
        title: '"Libries" — conversão para turismo científico',
        description:
          'Conversão do motor-veleiro "Libries" para operações de turismo científico. Pacote completo de engenharia naval entregue sob supervisão técnica.',
        heroAlt:
          'Horizonte oceânico — imagem ilustrativa para o projeto de conversão do "Libries".',
      },
    },
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
    i18n: {
      pt: {
        tag: 'CFD · Barco de trabalho',
        category: 'Manobrabilidade & CFD',
        title: 'OneOcean — pacote preliminar de CFD',
        description:
          'Apoio CFD durante o projeto preliminar e a construção do barco de trabalho da OneOcean. As ferramentas numéricas fornecidas pela KDS permitiram ao cliente cumprir o programa de projeto naval dentro do prazo.',
        heroAlt:
          'Equipamento marítimo de trabalho — imagem ilustrativa para o projeto CFD da OneOcean.',
      },
    },
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
    i18n: {
      pt: {
        tag: 'CFD · Lancha-piloto',
        category: 'Manobrabilidade & CFD',
        title: 'SeaPower — otimização hidrodinâmica de lancha-piloto',
        description:
          'Programa de estabilização de balanço e otimização de trim para a lancha-piloto da SeaPower. Refinamento hidrodinâmico por CFD destinado a promover eficiência energética e descarbonização em operações portuárias.',
        heroAlt:
          'Pormenor de engenharia marítima — imagem ilustrativa para o projeto da lancha-piloto SeaPower.',
      },
    },
  },
];

export const CASES_BY_SLUG: Record<string, CaseDetail> = Object.fromEntries(
  CASES.map((c) => [c.slug, c]),
);

export const CASE_SLUGS: string[] = CASES.map((c) => c.slug);

// Locale-aware accessor: returns a flat object with PT overrides applied
// (falling back to EN for any missing field). Slugs and non-translatable
// metadata (client, year, location, references, etc.) are preserved as-is.
export interface LocalisedCase extends CaseDetail {}

export function pickCaseView(c: CaseDetail, lang: 'en' | 'pt'): LocalisedCase {
  if (lang !== 'pt' || !c.i18n?.pt) return c;
  const pt = c.i18n.pt;
  return {
    ...c,
    tag: pt.tag ?? c.tag,
    category: pt.category ?? c.category,
    title: pt.title ?? c.title,
    description: pt.description ?? c.description,
    heroAlt: pt.heroAlt ?? c.heroAlt,
    subtitle: pt.subtitle ?? c.subtitle,
    brief: pt.brief ?? c.brief,
    constraints: pt.constraints ?? c.constraints,
    approach: pt.approach ?? c.approach,
    deliverables: pt.deliverables ?? c.deliverables,
    outcomes: pt.outcomes ?? c.outcomes,
    lessons: pt.lessons ?? c.lessons,
  };
}
