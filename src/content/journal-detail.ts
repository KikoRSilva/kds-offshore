// Full journal article content for /journal/[slug]/ pages.
// Articles are referenced by slug; the journal index page reads `published`
// from each post entry in en.ts to decide whether to link to the detail page.

export interface ArticleSection {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'pull' | 'figure';
  content: string | string[];
  caption?: string;
}

export interface Reference {
  /** Inline marker like "[1]" or "[Silva 2013]" */
  marker: string;
  text: string;
  url?: string;
}

export interface JournalArticle {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  author: string;
  authorSlug?: string;
  datePublished: string;
  dateModified: string;
  readMinutes: number;
  hero?: { src: string; alt: string };
  abstract: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  references?: Reference[];
  related?: { slug: string; title: string }[];
}

export const ARTICLES: JournalArticle[] = [
  {
    slug: 'corvo-without-tugs',
    title: 'Manoeuvring the "Corvo" without tugs: a probabilistic answer',
    subtitle:
      'How we coupled MatLab manoeuvrability models with a year of metocean data to estimate, with confidence intervals, how often the Corvo can berth autonomously inside Vila do Porto — and where a second stern thruster would change the answer.',
    tag: 'Case note · Manoeuvrability',
    author: 'Sérgio Ribeiro e Silva',
    authorSlug: 'sergio-ribeiro-e-silva',
    datePublished: '2024-07-15',
    dateModified: '2024-07-15',
    readMinutes: 9,
    hero: {
      src: '/images/kds/services-manoeuvrability.webp',
      alt: 'CFD pressure-field visualisation of a container ship hull during a manoeuvring simulation',
    },
    abstract:
      'In 2024, Mutualista / Grupo Bensaúde commissioned KDS Offshore to assess the operability of the 610 TEU container ship Corvo (IMO 9381275) inside the harbour basin of Vila do Porto, Açores. The question was simple to state and hard to answer: how many days per year can the vessel berth without tug assistance? The answer is probabilistic — and it depends on a stern-thruster decision the operator was about to make.',
    keyTakeaways: [
      'A worst-case berthing analysis tells you when the vessel cannot operate; a probabilistic analysis tells you when it can. Operators pay for the latter.',
      'Coupling a six-degree-of-freedom hull model with a year of hindcast metocean data lets you cover the full operating envelope, not just the design conditions.',
      'For the Corvo, autonomous berthing was achievable on roughly 88% of days — but a second stern thruster moved that figure into the high nineties at modest cost.',
      'The accuracy of the whole study depends on the hydrodynamic and aerodynamic coefficient set; everything else is plumbing.',
    ],
    sections: [
      { type: 'h2', content: 'The question' },
      {
        type: 'p',
        content:
          'Vila do Porto sits on the southern coast of Santa Maria, the most south-easterly island of the Açores archipelago. Its harbour basin is small, exposed to swell from a wide arc to the south, and it serves as the only commercial port for the island. The Corvo (IMO 9381275, 610 TEU, 9,000 DWT, lengthened post-Panamax-style hull) is the workhorse that keeps the island supplied. When the question came in from Mutualista — Grupo Bensaúde\'s shipping arm — it was framed in operational, not engineering, language: "how often per year can we berth without tugs, and would a second stern thruster pay for itself?"',
      },
      {
        type: 'p',
        content:
          'A worst-case analysis would have answered a different question — the question of whether the vessel ever cannot berth. That question is also worth answering, and we did, but it is not the question that drives a thruster-procurement decision. The question that does is the operability question, and operability is a probabilistic quantity.',
      },

      { type: 'h2', content: 'The model' },
      {
        type: 'p',
        content:
          'We built the simulator in MatLab/Simulink, on the chassis of a six-degree-of-freedom hull model that we have been evolving since 2005 [1, 2]. The model couples the hull, the rudder (a flap-type rudder, in the Corvo\'s case), the main propulsion, and bow and stern thrusters. The wave-induced forces come from a 3D-panel-method seakeeping core (WAMIT), pre-computed for the relevant draft and trim conditions. Wind and current loads are applied with classical coefficients calibrated against CFD runs on the actual hull form.',
      },
      {
        type: 'p',
        content:
          'The accuracy of the whole study lives in the coefficient set. The simulator can be wrong about a manoeuvre by ten metres at the bow simply because the yaw-derivative on the hull was off by ten percent — and ten percent is well within the uncertainty of generic regression formulae for derivative coefficients. We don\'t use generic formulae for jobs of this size: we run dedicated CFD or, when sea-trial data exists, we calibrate against it. For the Corvo we did both.',
      },

      { type: 'h2', content: 'The metocean side' },
      {
        type: 'p',
        content:
          'Then comes the operating envelope. We pulled a full year of hindcast wind, wave, and current data at the harbour entrance — not the offshore site, the port-mouth gauge — and binned it into the joint distribution of the parameters that matter for berthing: the southerly swell that enters the basin, the wind direction relative to the approach corridor, and the cross-current at the inner basin. The probabilistic answer is the integral of the model output over that joint distribution.',
      },
      {
        type: 'pull',
        content:
          'A worst-case analysis tells you when the vessel cannot operate. A probabilistic analysis tells you when it can. Operators pay for the latter.',
      },

      { type: 'h2', content: 'The thruster question' },
      {
        type: 'p',
        content:
          'Once the simulator and the metocean envelope are wired together, the question becomes parametric: for each configuration of the vessel — current bow thruster only; current bow plus a second stern thruster; an upgraded rudder; combinations — what fraction of the year does the autonomous-berthing envelope close? We ran several thousand simulated berthings per configuration, sampled from the metocean joint distribution, and aggregated to the single number the operator wanted: percent of days berthable without tugs.',
      },
      {
        type: 'p',
        content:
          'The headline result, with appropriately wide confidence intervals: with the existing thruster fit, the Corvo can berth autonomously on roughly 88% of days. Adding a stern thruster of the size we recommended pushes that figure into the high nineties. The remaining percent is dominated by a single combination — south-easterly swell paired with a strong cross-basin current — that no plausible thruster fit can fully tame, and that the operator already manages with tugs as standard practice.',
      },

      { type: 'h2', content: 'What we did not claim' },
      {
        type: 'p',
        content:
          'A few things worth saying about uncertainty. First, the 88% figure is a point estimate; the credible interval, given the metocean hindcast uncertainty and the coefficient uncertainty, was reported in the engineering report at roughly ±3 percentage points. Second, this is operability under normal commercial pressures — the simulator does not capture the human factors that genuinely drive go/no-go calls in marginal conditions, and we said so in writing. Third, the year of metocean data is one realisation; year-to-year variability could shift the headline by a percentage point in either direction.',
      },
      {
        type: 'p',
        content:
          'These caveats matter because the alternative is a single number the operator over-trusts. We would rather present a calibrated band the operator can plan around than a sharp number that does not survive the next harbour-master meeting.',
      },

      { type: 'h2', content: 'Why this matters beyond Vila do Porto' },
      {
        type: 'p',
        content:
          'Probabilistic operability assessment is a generic tool. The combination of a six-degree-of-freedom hull simulator, calibrated coefficients, and a long metocean record can answer many questions of the same shape: how often per year can a vessel safely tow / lift / land / hold station, given a configuration choice that is cheaper to evaluate now than to install and regret. We have run the same shape of analysis since on the Silver Mary at the same port, and we expect to keep running it. If you have a comparable question, write to us.',
      },
    ],
    references: [
      {
        marker: '[1]',
        text:
          'Ribeiro e Silva, S. and Guedes Soares, C. (2005). "Parametrically excited roll in regular and irregular head seas", International Shipbuilding Progress, Vol. 52.',
      },
      {
        marker: '[2]',
        text:
          'Ribeiro e Silva, S. and Guedes Soares, C. (2013). "Prediction of parametric rolling in waves with time domain non-linear strip theory", Ocean Engineering, Vol. 72.',
      },
      {
        marker: '[3]',
        text:
          'Lee, C.-H. (1995). "WAMIT: A radiation–diffraction panel program for wave–body interactions", MIT Department of Ocean Engineering.',
      },
    ],
    related: [
      { slug: 'parametric-rolling-belmullet', title: 'Parametric rolling on hybrid OWC platforms: lessons from Belmullet' },
      { slug: 'rudder-flap-vs-bow-thruster', title: 'Why the rudder-with-flap matters more than the bow thruster' },
    ],
  },
];

export const ARTICLES_BY_SLUG = Object.fromEntries(ARTICLES.map((a) => [a.slug, a]));
export const ARTICLE_SLUGS = ARTICLES.map((a) => a.slug);
