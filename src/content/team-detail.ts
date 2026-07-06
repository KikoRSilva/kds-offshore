// Detailed profiles for /team/[slug]/ pages.
// The named team-card members on /about (Filipe Inok, Lúcia Moreira, José Gordo,
// José Dias, José Abreu Valente, Francisco Ribeiro e Silva) are intentionally NOT
// given individual /team/ pages until full bios, credentials and publications are
// supplied. Adding placeholder profiles would degrade E-E-A-T.

export interface Publication {
  title: string;
  year: number;
  venue: string;
  citations?: number;
  url?: string;
}

export interface TeamMemberI18n {
  jobTitle?: string;
  shortBio?: string;
  longBio?: string[];
  credentials?: string[];
  knowsAbout?: string[];
  knowsLanguage?: string[];
  affiliations?: { name: string; url?: string; role: string }[];
  photoAlt?: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  givenName: string;
  familyName: string;
  honorificPrefix?: string;
  honorificSuffix?: string;
  jobTitle: string;
  shortBio: string;
  longBio: string[];
  credentials: string[];
  knowsAbout: string[];
  knowsLanguage: string[];
  alumniOf: { name: string; url: string }[];
  affiliations: { name: string; url?: string; role: string }[];
  publications: Publication[];
  publicationStats?: {
    totalCitations: number;
    hIndex: number;
    i10Index: number;
  };
  sameAs: string[];
  photoSrc: string;
  photoAlt: string;
  i18n?: { pt?: TeamMemberI18n };
}

export const TEAM: TeamMember[] = [
  {
    slug: 'sergio-ribeiro-e-silva',
    name: 'Sérgio Ribeiro e Silva',
    givenName: 'Sérgio',
    familyName: 'Ribeiro e Silva',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'PhD',
    jobTitle: 'CEO & Founder · Principal Naval Architect',
    shortBio:
      'Founder of KDS Offshore. Naval architect, hydrodynamicist, and author of the Ship@Sea time-domain simulation code. Tenured Assistant Professor of Hydrodynamics at Instituto Superior Técnico, University of Lisbon.',
    longBio: [
      'Sérgio Ribeiro e Silva founded KDS Offshore in 2016, on the back of two decades of practitioner work in the Portuguese Navy and a continuing academic career at Instituto Superior Técnico (IST), University of Lisbon, where he is tenured Assistant Professor of Hydrodynamics in the Centre of Naval Architecture and Engineering.',
      'His research focuses on the analytical, numerical, and experimental study of the hydrodynamics of floating structures — with particular depth in parametric rolling, time-domain seakeeping, and the dynamics of wave-energy converters. He is the author of the Ship@Sea time-domain simulation code, a six-degree-of-freedom non-linear platform that has evolved continuously from his doctoral work and that underpins KDS Offshore\'s most demanding seakeeping and manoeuvrability assignments.',
      'He spent 21 years in the Portuguese Navy before transitioning fully to academia and consulting. Outside Portugal, his postdoctoral research and teaching at Newcastle University (UK) shaped the experimental rigour that characterises KDS\'s methodology — every numerical claim is benchmarked against a model test or sea trial wherever one exists.',
      'At KDS Offshore he leads the most demanding engagements personally — from the GRS Power Platform parametric-rolling assessment for WavEC at Belmullet (2015) to the Corvo and Silver Mary probabilistic manoeuvrability studies in Vila do Porto (2024). The pattern across his work is consistent: a hard hydrodynamics problem, a numerical model that admits non-linearity rather than linearising it away, and a result the operator can act on.',
      'Recent work has extended the office\'s practice into maritime decarbonisation. In 2024 he co-authored — with M. Bento Moreira at CENTEC, IST — two complementary papers on an integrated, real-time Ship Operation Optimisation System (SOOS) that combines voyage planning, weather routing and anti-rolling-tank measures to bring case-study vessels into compliance with the IMO\'s Carbon Intensity Indicator (CII): a methods paper at IMDC 2024 in Amsterdam and a fuller systems paper at ICCAS / RINA later the same year. In parallel he continues to lead the UGEN floating wave-energy converter programme; the most recent instalment — a Levelized-Cost-of-Energy assessment of the device along the Portuguese Atlantic façade (Porto, Nazaré, Sines), co-authored with Lourenço and Pinto — was presented at EWTEC 2025 in Funchal.',
    ],
    credentials: [
      'PhD, Naval Architecture and Marine Engineering — Instituto Superior Técnico, University of Lisbon',
      'MSc Naval Architecture — University College London',
      'MSc Mechanical Engineering — Instituto Superior Técnico',
      'Postdoctoral research and teaching, Newcastle University (UK)',
      '21 years of service with the Portuguese Navy',
    ],
    knowsAbout: [
      'Naval architecture',
      'Offshore engineering',
      'Hydrodynamics of floating structures',
      'Parametric rolling',
      'Time-domain seakeeping simulation',
      'Ship manoeuvrability prediction',
      'Wave-energy converters',
      'Mooring system design',
      'Stability of intact and damaged ships',
      'Computational fluid dynamics',
      'Maritime decarbonisation',
    ],
    knowsLanguage: ['English', 'Portuguese'],
    alumniOf: [
      { name: 'Instituto Superior Técnico, University of Lisbon', url: 'https://tecnico.ulisboa.pt/' },
      { name: 'University College London', url: 'https://www.ucl.ac.uk/' },
    ],
    affiliations: [
      {
        name: 'Instituto Superior Técnico, University of Lisbon',
        url: 'https://tecnico.ulisboa.pt/',
        role: 'Tenured Assistant Professor of Hydrodynamics, Centre of Naval Architecture and Engineering',
      },
      {
        name: 'LARSyS / MARETEC',
        url: 'https://www.maretec.org/',
        role: 'Senior Researcher',
      },
      {
        name: 'KDS Offshore, Lda.',
        url: 'https://kdsoffshore.pt/',
        role: 'Founder, CEO, Principal Naval Architect',
      },
    ],
    // Selected, peer-reviewed publications. Full list and citation counts on Google Scholar.
    publications: [
      {
        title:
          'Wave Energy Conversion Efficiency of the UGEN along the Western Portuguese Coast',
        year: 2025,
        venue:
          '16th European Wave and Tidal Energy Conference (EWTEC 2025), Funchal',
        url: 'https://doi.org/10.36688/ewtec-2025-1032',
      },
      {
        title:
          'An integrated real-time Ship Operation Optimisation System (SOOS) to reduce fuel consumption and emissions from shipping navigation and port calls',
        year: 2024,
        venue:
          'International Conference on Computer Applications in Shipbuilding (ICCAS 2024) / RINA',
      },
      {
        title:
          'An optimisation-based approach to reduce fuel consumption and emissions from shipping navigation',
        year: 2024,
        venue:
          '15th International Marine Design Conference (IMDC 2024), Amsterdam',
        url: 'https://doi.org/10.59490/imdc.2024.832',
      },
      {
        title: 'Parametrically excited roll in regular and irregular head seas',
        year: 2005,
        venue: 'International Shipbuilding Progress, Vol. 52',
        citations: 76,
      },
      {
        title:
          'Prediction of parametric rolling in waves with time domain non-linear strip theory',
        year: 2013,
        venue: 'Ocean Engineering, Vol. 72',
        citations: 74,
      },
      {
        title: 'Hydrodynamic optimization of the UGEN: Wave energy converter',
        year: 2016,
        venue: 'International Journal of Marine Energy, Vol. 15',
        citations: 69,
      },
      {
        title:
          'Experimental study on reduction of dynamic instability in oscillating water column spar buoy',
        year: 2017,
        venue: '12th European Wave and Tidal Energy Conference',
        citations: 36,
      },
      {
        title:
          'Model testing of floating wave energy converter with internal U-shaped oscillating water column',
        year: 2021,
        venue: 'Energy Conversion and Management, Vol. 240',
        citations: 25,
      },
      {
        title: 'Time domain simulation of parametrically excited roll in head seas',
        year: 2000,
        venue: '7th International Conference on Stability of Ships and Ocean Vehicles',
        citations: 21,
      },
      {
        title: 'On the parametric rolling of container vessels',
        year: 2010,
        venue: 'Brodogradnja, 61(4): 347–358',
        citations: 14,
      },
      {
        title: 'Numerical modelling and assessment of the UGEN floating wave energy converter',
        year: 2011,
        venue: 'International Journal of Marine Engineering, Vol. 153',
        citations: 10,
      },
      {
        title: "Loss of fishing vessel's intact stability in longitudinal waves",
        year: 2011,
        venue: 'Transactions of the Royal Institution of Naval Architects',
        citations: 10,
      },
      {
        title: 'Non-linear time domain simulation of dynamic instabilities',
        year: 2008,
        venue: 'International Conference on Offshore Mechanics and Arctic Engineering (OMAE)',
        citations: 10,
      },
    ],
    publicationStats: {
      totalCitations: 402,
      hIndex: 10,
      i10Index: 10,
    },
    sameAs: [
      'https://orcid.org/0000-0003-0977-0629',
      'https://www.linkedin.com/in/sergio-ribeiro-e-silva-39110322/',
      'https://scholar.google.pt/citations?user=K6-RZXQAAAAJ&hl=en',
      'http://www.maretec.org/en/about-us/team/SergioSilva',
      'https://tecnico.ulisboa.pt/',
    ],
    photoSrc: '/images/kds/portrait-sergio.webp',
    photoAlt: 'Sérgio Ribeiro e Silva — founder of KDS Offshore',
    i18n: {
      pt: {
        jobTitle: 'CEO & Fundador · Engenheiro e Arquiteto Naval Principal',
        shortBio:
          'Fundador da KDS Offshore. Engenheiro e Arquiteto Naval, hidrodinamicista e autor do código de simulação no domínio temporal Ship@Sea. Professor Auxiliar com agregação de Hidrodinâmica no Instituto Superior Técnico, Universidade de Lisboa.',
        longBio: [
          'Sérgio Ribeiro e Silva fundou a KDS Offshore em 2016, na sequência de duas décadas de trabalho prático na Marinha Portuguesa e de uma carreira académica ininterrupta no Instituto Superior Técnico (IST), Universidade de Lisboa, onde é Professor Auxiliar com agregação de Hidrodinâmica no Centro de Engenharia e Arquitetura Naval.',
          'A sua investigação centra-se no estudo analítico, numérico e experimental da hidrodinâmica de estruturas flutuantes — com particular profundidade em balanço paramétrico, comportamento no mar no domínio temporal, e dinâmica de conversores de energia das ondas. É o autor do código de simulação no domínio temporal Ship@Sea, uma plataforma não-linear de seis graus de liberdade que evoluiu continuamente a partir do seu trabalho de doutoramento e que sustenta os trabalhos de comportamento no mar e manobrabilidade mais exigentes da KDS Offshore.',
          'Passou 21 anos na Marinha Portuguesa antes de transitar inteiramente para a vida académica e a consultoria. Fora de Portugal, a sua investigação e ensino de pós-doutoramento na Newcastle University (Reino Unido) moldaram o rigor experimental que caracteriza a metodologia da KDS — todas as afirmações numéricas são confrontadas com um ensaio em modelo ou prova de mar, sempre que estejam disponíveis.',
          'Na KDS Offshore lidera pessoalmente os projetos mais exigentes — desde a avaliação de balanço paramétrico da GRS Power Platform para a WavEC em Belmullet (2015) até aos estudos probabilísticos de manobrabilidade do Corvo e do Silver Mary em Vila do Porto (2024). O padrão dos seus trabalhos é consistente: um problema difícil de hidrodinâmica, um modelo numérico que admite a não-linearidade em vez de a linearizar, e um resultado sobre o qual o operador pode atuar.',
          'O trabalho recente estendeu a prática do gabinete de engenharia à descarbonização marítima. Em 2024, em coautoria com M. Bento Moreira do CENTEC, IST, publicou dois artigos complementares sobre um Ship Operation Optimisation System (SOOS) integrado e em tempo real, que combina planeamento de viagem, weather routing e medidas com tanque anti-rolling para colocar navios de caso de estudo em conformidade com o Carbon Intensity Indicator (CII) da IMO: um artigo metodológico no IMDC 2024 em Amesterdão e um artigo de sistemas mais completo no ICCAS / RINA, mais tarde no mesmo ano. Em paralelo, continua a liderar o programa do conversor de energia das ondas flutuante UGEN; a edição mais recente — uma avaliação do Custo Nivelado de Energia do dispositivo ao longo da fachada atlântica portuguesa (Porto, Nazaré, Sines), em coautoria com Lourenço e Pinto — foi apresentada no EWTEC 2025 no Funchal.',
        ],
        credentials: [
          'Doutoramento em Arquitetura Naval e Engenharia Marítima — Instituto Superior Técnico, Universidade de Lisboa',
          'MSc Arquitetura Naval — University College London',
          'MSc Engenharia Mecânica — Instituto Superior Técnico',
          'Investigação e ensino de pós-doutoramento, Newcastle University (Reino Unido)',
          '21 anos de serviço na Marinha Portuguesa',
        ],
        knowsAbout: [
          'Arquitetura naval',
          'Engenharia offshore',
          'Hidrodinâmica de estruturas flutuantes',
          'Balanço paramétrico',
          'Simulação de comportamento no mar no domínio temporal',
          'Previsão de manobrabilidade',
          'Conversores de energia das ondas',
          'Projeto de sistemas de amarração',
          'Estabilidade de navios intactos e em avaria',
          'CFD',
          'Descarbonização marítima',
        ],
        knowsLanguage: ['Inglês', 'Português'],
        affiliations: [
          {
            name: 'Instituto Superior Técnico, Universidade de Lisboa',
            url: 'https://tecnico.ulisboa.pt/',
            role: 'Professor Auxiliar com agregação de Hidrodinâmica, Centro de Engenharia e Arquitetura Naval',
          },
          {
            name: 'LARSyS / MARETEC',
            url: 'https://www.maretec.org/',
            role: 'Investigador Sénior',
          },
          {
            name: 'KDS Offshore, Lda.',
            url: 'https://kdsoffshore.pt/',
            role: 'Fundador, CEO, Engenheiro e Arquiteto Naval Principal',
          },
        ],
        photoAlt: 'Sérgio Ribeiro e Silva — fundador da KDS Offshore',
      },
    },
  },
];

export const TEAM_BY_SLUG = Object.fromEntries(TEAM.map((m) => [m.slug, m]));
export const TEAM_SLUGS = TEAM.map((m) => m.slug);

export function pickTeamView(m: TeamMember, lang: 'en' | 'pt'): TeamMember {
  if (lang !== 'pt' || !m.i18n?.pt) return m;
  const pt = m.i18n.pt;
  return {
    ...m,
    jobTitle: pt.jobTitle ?? m.jobTitle,
    shortBio: pt.shortBio ?? m.shortBio,
    longBio: pt.longBio ?? m.longBio,
    credentials: pt.credentials ?? m.credentials,
    knowsAbout: pt.knowsAbout ?? m.knowsAbout,
    knowsLanguage: pt.knowsLanguage ?? m.knowsLanguage,
    affiliations: pt.affiliations ?? m.affiliations,
    photoAlt: pt.photoAlt ?? m.photoAlt,
  };
}
