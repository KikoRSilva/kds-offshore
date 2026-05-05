// Detailed profiles for /team/[slug]/ pages.
// Anonymous team-card members (Naval architecture team, Hydrodynamics team, etc.)
// are intentionally NOT given individual /team/ pages until real names and bios
// are provided by the user. Adding placeholder profiles would degrade E-E-A-T.

export interface Publication {
  title: string;
  year: number;
  venue: string;
  citations?: number;
  url?: string;
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
      'https://www.linkedin.com/in/sergio-ribeiro-e-silva-39110322/',
      'https://scholar.google.pt/citations?user=K6-RZXQAAAAJ&hl=en',
      'http://www.maretec.org/en/about-us/team/SergioSilva',
      'https://tecnico.ulisboa.pt/',
    ],
    photoSrc: '/images/kds/portrait-sergio.webp',
    photoAlt: 'Sérgio Ribeiro e Silva — founder of KDS Offshore',
  },
];

export const TEAM_BY_SLUG = Object.fromEntries(TEAM.map((m) => [m.slug, m]));
export const TEAM_SLUGS = TEAM.map((m) => m.slug);
