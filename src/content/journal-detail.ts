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

export interface ArticleI18n {
  title: string;
  subtitle: string;
  tag: string;
  abstract: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  references?: Reference[];
  related?: { slug: string; title: string }[];
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
  i18n?: { pt?: ArticleI18n };
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
    i18n: {
      pt: {
        title: 'Manobrar o "Corvo" sem rebocadores: uma resposta probabilística',
        subtitle:
          'Como acoplámos modelos de manobrabilidade em MatLab com um ano de dados meteoceanográficos para estimar, com intervalos de confiança, com que frequência o Corvo pode atracar autonomamente em Vila do Porto — e onde é que um segundo propulsor de popa mudaria a resposta.',
        tag: 'Nota de caso · Manobrabilidade',
        abstract:
          'Em 2024, a Mutualista / Grupo Bensaúde encarregou a KDS Offshore de avaliar a operacionalidade do navio porta-contentores Corvo (IMO 9381275, 610 TEU) dentro do porto de Vila do Porto, Açores. A pergunta era simples de enunciar e difícil de responder: quantos dias por ano pode o navio atracar sem assistência de rebocador? A resposta é probabilística — e depende de uma decisão sobre um propulsor de popa que o operador estava prestes a tomar.',
        keyTakeaways: [
          'Uma análise de pior caso na atracação diz quando o navio não pode operar; uma análise probabilística diz quando pode. Os operadores pagam por esta última.',
          'Acoplar um modelo de casco de seis graus de liberdade com um ano de dados meteoceanográficos hindcast permite cobrir todo o envelope operacional, e não apenas as condições de projeto.',
          'Para o Corvo, a atracação autónoma era atingível em cerca de 88% dos dias — mas um segundo propulsor de popa elevou esse número para os altos noventa por cento, com custo modesto.',
          'A precisão de todo o estudo depende do conjunto de coeficientes hidrodinâmicos e aerodinâmicos; tudo o resto é canalização.',
        ],
        sections: [
          { type: 'h2', content: 'A pergunta' },
          {
            type: 'p',
            content:
              'Vila do Porto situa-se na costa sul de Santa Maria, a ilha mais a sudeste do arquipélago dos Açores. O seu porto é pequeno, exposto a ondulação proveniente de um arco amplo a sul, e serve como o único porto comercial da ilha. O Corvo (IMO 9381275, 610 TEU, 9.000 DWT, casco alongado em estilo pós-Panamax) é o cavalo-de-batalha que mantém a ilha abastecida. Quando a pergunta chegou da Mutualista — o braço de shipping do Grupo Bensaúde — vinha formulada em linguagem operacional, não de engenharia: "quantas vezes por ano podemos atracar sem rebocadores, e um segundo propulsor de popa pagar-se-ia a si próprio?"',
          },
          {
            type: 'p',
            content:
              'Uma análise de pior caso teria respondido a uma pergunta diferente — a pergunta de se o navio alguma vez não consegue atracar. Essa pergunta também vale a pena responder, e respondemos, mas não é a pergunta que conduz uma decisão de aquisição de propulsor. Essa pergunta é a da operacionalidade, e a operacionalidade é uma quantidade probabilística.',
          },

          { type: 'h2', content: 'O modelo' },
          {
            type: 'p',
            content:
              'Construímos o simulador em MatLab/Simulink, sobre o chassis de um modelo de casco de seis graus de liberdade que temos vindo a evoluir desde 2005 [1, 2]. O modelo acopla o casco, o leme (do tipo flap, no caso do Corvo), a propulsão principal, e os propulsores de proa e popa. As forças induzidas pelas ondas vêm de um núcleo de comportamento no mar baseado em método de painéis 3D (WAMIT), pré-calculadas para as condições de calado e trim relevantes. As cargas de vento e corrente são aplicadas com coeficientes clássicos calibrados contra simulações CFD da forma real do casco.',
          },
          {
            type: 'p',
            content:
              'A precisão de todo o estudo vive no conjunto de coeficientes. O simulador pode estar errado numa manobra em dez metros à proa simplesmente porque a derivada de guinada do casco estava errada em dez por cento — e dez por cento está bem dentro da incerteza das fórmulas de regressão genéricas para coeficientes derivados. Não usamos fórmulas genéricas em projetos desta dimensão: corremos CFD dedicado ou, quando existem dados de provas de mar, calibramos contra eles. Para o Corvo fizemos os dois.',
          },

          { type: 'h2', content: 'O lado meteoceanográfico' },
          {
            type: 'p',
            content:
              'Depois vem o envelope operacional. Extraímos um ano completo de dados de vento, onda e corrente em hindcast à entrada do porto — não no local offshore, mas na boca do porto — e organizámo-los na distribuição conjunta dos parâmetros que importam para a atracação: a ondulação de sul que entra na bacia, a direção do vento relativamente ao corredor de aproximação, e a corrente cruzada na bacia interior. A resposta probabilística é o integral do output do modelo sobre essa distribuição conjunta.',
          },
          {
            type: 'pull',
            content:
              'Uma análise de pior caso diz quando o navio não pode operar. Uma análise probabilística diz quando pode. Os operadores pagam por esta última.',
          },

          { type: 'h2', content: 'A questão do propulsor' },
          {
            type: 'p',
            content:
              'Uma vez ligados o simulador e o envelope meteoceanográfico, a pergunta passa a ser paramétrica: para cada configuração do navio — apenas o propulsor de proa atual; o atual mais um segundo propulsor de popa; um leme melhorado; combinações — que fração do ano fecha o envelope de atracação autónoma? Corremos vários milhares de atracações simuladas por configuração, amostradas a partir da distribuição conjunta meteoceanográfica, e agregámos no único número que o operador queria: percentagem de dias atracáveis sem rebocadores.',
          },
          {
            type: 'p',
            content:
              'O resultado-chefe, com intervalos de confiança apropriadamente largos: com a configuração de propulsores existente, o Corvo pode atracar autonomamente em cerca de 88% dos dias. Adicionar um propulsor de popa do tamanho que recomendámos eleva esse número para os altos noventa por cento. Os pontos percentuais restantes são dominados por uma única combinação — ondulação de sudeste em conjunto com uma forte corrente transversal à bacia — que nenhuma configuração plausível de propulsores consegue verdadeiramente domesticar, e que o operador já gere com rebocadores como prática corrente.',
          },

          { type: 'h2', content: 'O que não afirmámos' },
          {
            type: 'p',
            content:
              'Algumas coisas que vale a pena dizer sobre a incerteza. Primeiro, o número dos 88% é uma estimativa pontual; o intervalo credível, dada a incerteza do hindcast meteoceanográfico e a incerteza dos coeficientes, foi reportado no relatório de engenharia em cerca de ±3 pontos percentuais. Segundo, isto é operacionalidade sob pressões comerciais normais — o simulador não captura os fatores humanos que verdadeiramente conduzem as decisões de go/no-go em condições marginais, e dissemo-lo por escrito. Terceiro, o ano de dados meteoceanográficos é uma realização; a variabilidade interanual pode deslocar o número-chefe num ponto percentual em qualquer das direções.',
          },
          {
            type: 'p',
            content:
              'Estas ressalvas importam porque a alternativa é um único número em que o operador confia em demasia. Preferimos apresentar uma banda calibrada à volta da qual o operador pode planear, do que um número afiado que não sobrevive à próxima reunião com o capitão do porto.',
          },

          { type: 'h2', content: 'Por que isto importa para além de Vila do Porto' },
          {
            type: 'p',
            content:
              'A avaliação probabilística de operacionalidade é uma ferramenta genérica. A combinação de um simulador de casco de seis graus de liberdade, coeficientes calibrados, e um registo meteoceanográfico longo pode responder a muitas perguntas da mesma forma: quantas vezes por ano um navio pode rebocar / içar / desembarcar / manter posição em segurança, dada uma escolha de configuração que é mais barata avaliar agora do que instalar e arrepender-se. Já corremos a mesma forma de análise desde então no Silver Mary no mesmo porto, e esperamos continuar a corrê-la. Se tem uma pergunta comparável, escreva-nos.',
          },
        ],
        related: [
          { slug: 'parametric-rolling-belmullet', title: 'Rolamento paramétrico em plataformas OWC híbridas: lições de Belmullet' },
          { slug: 'rudder-flap-vs-bow-thruster', title: 'Porque o leme com flap importa mais do que o propulsor de proa' },
        ],
      },
    },
  },

  {
    slug: 'soos-voyage-optimisation',
    title: 'Real-time voyage optimisation for CII compliance: notes from the SOOS programme',
    subtitle:
      'Inside SOOS — the decision-support stack of CFD calm-water power, semi-empirical wind loads, Salvesen-1978 added resistance, and simulated-annealing routing that cut a containership\'s voyage fuel by 8 to 9% on a synthetic Atlantic case.',
    tag: 'Decarbonisation · Methodology',
    author: 'Sérgio Ribeiro e Silva',
    authorSlug: 'sergio-ribeiro-e-silva',
    datePublished: '2024-08-30',
    dateModified: '2024-08-30',
    readMinutes: 14,
    hero: {
      src: '/images/stock/cargo-vessel.jpg',
      alt: 'A geared containership on the open Atlantic, the operating environment SOOS is designed for',
    },
    abstract:
      'In June 2024, with M. Bento Moreira at CENTEC / IST, we presented the first methods paper of an integrated Ship Operation Optimisation System (SOOS) at the 15th International Marine Design Conference in Amsterdam. SOOS is a real-time decision-support stack — a CFD-derived calm-water power curve, semi-empirical wind loads, Salvesen-1978 added-resistance in waves, trim-via-centre-of-gravity, and a Vectorized Simulated Annealing weather-routing layer. On a 712 TEU geared containership in synthetic Atlantic conditions, SOOS cut voyage fuel by 8 to 9% versus the great-circle direct route, and held that saving even when an obstacle — an island, a marine corridor — was inserted into the search space. These notes describe what SOOS is, why we built it the way we did, and what we are not yet claiming.',
    keyTakeaways: [
      'The IMO\'s 2023 GHG Strategy (MEPC.377(80)) targets a roughly 30% absolute drop in shipping emissions by 2030. For an existing fleet, hardware retrofits get you 5 to 15% (DnV 2022); the rest must come from how the ship is operated.',
      'SOOS is not a routing app. It is a coupled hydrodynamics + optimisation stack: CFD calm-water resistance, semi-empirical wind loads, Salvesen-1978 added resistance in waves, trim-via-centre-of-gravity, and a Vectorized Simulated Annealing layer over the route geometry.',
      '"Real-time" means seconds, not minutes — the model has to re-plan as forecasts update and as fuel burn shifts the centre of gravity. We precompute the expensive physics offline and re-use it inside the optimiser.',
      'On a 712 TEU geared containership in synthetic Atlantic conditions, SOOS converged inside 100 epochs and saved 8 to 9% of voyage fuel versus the great-circle direct route. With an obstacle inserted in the route grid, the saving held at roughly 8%.',
      'Fuel saved is emissions saved. For a CII-regulated containership, the same 8 to 9% is the difference between staying inside the operating band and entering corrective-action territory.',
    ],
    sections: [
      { type: 'h2', content: 'Why the IMO 2030 target is an operational problem, not a hardware problem' },
      {
        type: 'p',
        content:
          'The IMO\'s 2023 GHG Strategy (Resolution MEPC.377(80)) commits the maritime sector to a roughly 30% absolute reduction in well-to-wake emissions by 2030 relative to 2008 levels. The international fleet today emits about 681 megatonnes of CO2 a year. Hardware retrofits — coatings, hull-form tweaks, propeller polishing — buy you 5 to 15% per vessel. Operational measures must close the rest of the gap.',
      },
      {
        type: 'p',
        content:
          'The arithmetic is unforgiving for an existing containership. DnV\'s 2022 maritime forecast put the per-vessel hydrodynamic envelope at 5 to 15% and the operational envelope (speed management, fleet planning, weather routing — what DnV calls logistics and digitalisation) at more than 20%. A new build can be designed for the new band; a 2010s containership cannot. Its operator has to find the missing percentage points in how the vessel is sailed, not how it is built. That is the boundary condition we wrote SOOS against. Add the macro context — bunker prices held high by the war in Ukraine and Middle East shipping disruptions, and the World Shipping Council reporting more than 3,113 containers lost overboard in 2020 to 2021 — and the operational case stops being academic. Safer voyages also burn less fuel.',
      },

      { type: 'h2', content: 'What "real-time" actually demands of the model' },
      {
        type: 'p',
        content:
          'A real-time voyage optimiser has to compute four things faster than a forecast updates: the calm-water power needed at any speed and trim, the wind loads on the above-waterline projection, the added resistance the seaway is imposing on the hull, and the response of the centre of gravity as fuel and ballast move around the vessel.',
      },
      {
        type: 'p',
        content:
          'The honest version is that none of these can be done in real time from first principles on a ship\'s bridge computer. CFD on a containership in waves is hours per case at best. So the architecture is the inverse: precompute the expensive physics offline at high fidelity, distil it into a small set of coefficients and lookup surfaces, and have the optimiser query those surfaces inside its inner loop. The on-board cost then collapses to interpolation plus the optimisation itself. Where SOOS earns its keep is in being honest about which simplifications hold under operational forecasts and which do not — which is why the methods paper at IMDC 2024 is half about the simplifications, and the systems paper at ICCAS / RINA later the same year is about the cases where the simplifications break down.',
      },

      { type: 'h2', content: 'The four hydrodynamic ingredients' },
      {
        type: 'p',
        content:
          'Each layer of the stack has its own validation history and its own cost-accuracy compromise. We chose them on the basis of what gives the best signal per second of compute on a 120-metre containership.',
      },

      { type: 'h3', content: 'Calm-water resistance from CFD, not regression' },
      {
        type: 'p',
        content:
          'For the 712 TEU case, we ran the calm-water resistance in Simerics MP — a RANS solver with a marine template — swept across speeds at the design trim of 0.2° by stern. The output was fitted as a third-order polynomial in speed, forced through the origin, and converted to power via a propulsive coefficient of 0.656 derived from the same campaign.',
      },
      {
        type: 'p',
        content:
          'The practical reason for going to CFD instead of a Holtrop-Mennen-style regression is that those regressions are calibrated on hull families that no longer represent the modern containership population. The accuracy gain matters because every downstream layer — wind, waves, trim — is a perturbation on the calm-water number, and a wrong baseline propagates everywhere. The cost is one CFD campaign per vessel, per loading condition that operations actually uses, run once. That is a one-off bill the fleet owner pays in exchange for a defensible power curve.',
      },

      { type: 'h3', content: 'Wind loads, semi-empirical first' },
      {
        type: 'p',
        content:
          'Wind loads come from the Isherwood (1972), Gould (1982), and Blendermann (1994) family of semi-empirical formulations, applied to the projected lateral and transverse areas above the waterline. On most ship types the wind contribution is around 2% of total resistance. On a containership stacked six-high above deck — roughly 60% of the boxes are above the main deck — it can reach 10%.',
      },
      {
        type: 'p',
        content:
          'We default to the semi-empirical route for two reasons. First, the dependence on heading is well-characterised across the Isherwood-Gould-Blendermann tradition, so the lookup is small and stable. Second, the wind-resistance signal is dominated by the projected area, and the projected area is known exactly from the loading condition. CFD can do better — we have run it and we say so in the paper — but the marginal gain rarely justifies the marginal cost on a vessel whose dominant uncertainty is the forecast wind itself, not the load coefficient. When the dominant uncertainty is somewhere else, you spend the CFD budget there.',
      },

      { type: 'h3', content: 'Added resistance in waves: Salvesen-1978 over Gerritsma-Beukelman' },
      {
        type: 'p',
        content:
          'Added resistance in irregular waves is computed with the Salvesen (1978) formulation built on Frank\'s close-fit strip theory, with a short-wave correction. We compared it against Gerritsma-Beukelman (1979); both agree in head waves, but Gerritsma-Beukelman drifts in quartering seas in a way our seagoing experience says is wrong, so we use Salvesen.',
      },
      {
        type: 'p',
        content:
          'To put a number on it: for the 712 TEU case at top speed (Froude number 0.26), facing the most statistically frequent Atlantic train (significant wave height of 1.25 metres, peak period of 9 seconds, head seas), Salvesen returns an added resistance of 13.42 kilonewtons. That is 1.7% of total resistance, or 2.9% of the residuary resistance. Small in flat conditions; in storm conditions it dominates. The strip-theory transfer functions are precomputed across heading and frequency and looked up inside the optimiser. Speed loss in waves falls out of the same lookup, so we do not over-predict the speed the engine can hold.',
      },

      { type: 'h3', content: 'Trim and the moving centre of gravity' },
      {
        type: 'p',
        content:
          'Trim is the cheapest available lever. Small changes in longitudinal centre of gravity move the dynamic trim by tenths of a degree and reclaim measurable kilowatts at the propeller. SOOS tracks the instantaneous centre of gravity from the discrete weights aboard — fuel, ballast, cargo, crew — and computes the trim correction needed via the unit moment to change trim.',
      },
      {
        type: 'p',
        content:
          'The point of computing this in real time is that the operator does not actually know the centre of gravity at any given moment. The departure-condition stability book is a snapshot. Hours later, fuel has been burned out of the aft tanks, ballast has been adjusted, and the trim is no longer optimal. SOOS recomputes the optimal trim against the current loading and prompts a ballast transfer when the gain justifies the operational cost. On the 712 TEU case the ideal trim was 0.2° by stern — the same value used in the calm-water CFD campaign — but the more interesting fact is that this number changes across the voyage.',
      },

      { type: 'h2', content: 'Why simulated annealing is the right routing layer' },
      {
        type: 'p',
        content:
          'The route-geometry search space — find the sequence of waypoints that minimises fuel between two ports under a forecast meteocean field, while respecting land and traffic exclusions — is non-convex, has hard boundaries, and is not differentiable across those boundaries. Simulated annealing tolerates all three. We use a vectorised variant adapted from Maurício and Moreira (2022), originally developed for sailboat routing under non-uniform wind fields.',
      },
      {
        type: 'p',
        content:
          'The mechanics are unromantic. SOOS represents a route as a chain of N − 1 waypoints between origin and destination. It generates a population of 200 candidate routes with random waypoint positions, evaluates the fuel for each by integrating the consumption rate along the leg, retains the best half, perturbs them with a spatial noise whose amplitude decays exponentially across epochs, and repeats. The decay schedule is the temperature analogue from classical annealing. Vectorisation means that the perturb-and-evaluate step runs in parallel across the whole population on commodity hardware. We capped at 750 epochs in the published case, but the optimiser converged inside 100 — which is the property you want, because the operator on the bridge will not wait for 750. The five-step heuristic is laid out fully in the IMDC 2024 paper; the relevant part for an operator is that there are no hyperparameters they need to tune.',
      },

      { type: 'h2', content: 'The 712 TEU case — and what 8 to 9% really means' },
      {
        type: 'p',
        content:
          'On a synthetic Atlantic field — uniform 23-knot wind from the west, a 2.14-knot west-going current, a 1.25 m / 10 s regular west swell, two ports about 215 km apart — SOOS routed the 712 TEU geared containership for 3.99 kg of fuel against 4.31 kg on the great-circle direct route. The saving was 8 to 9%.',
      },
      {
        type: 'p',
        content:
          'The harder version of the same case had us insert an "island" exactly where the optimal route wanted to go. The optimiser detoured around it and still landed at 3.97 kg — an 8% saving. That is the property we cared about: the saving is not a fragile artefact of a friendly cost surface. It is robust to the kind of geographic constraint a real voyage actually has — a marine corridor, a fishing exclusion zone, a weather-routing waypoint imposed by a charterer. Multiply 8% across a fleet\'s annual bunker bill and the number stops being a curiosity. For a mid-size containership on a Mediterranean-Atlantic loop, an 8% voyage saving compounds to seven figures of avoided fuel cost per year, and it shifts the same vessel\'s CII rating by enough to matter at the next port-state inspection.',
      },

      { type: 'h2', content: 'What we are not yet claiming' },
      {
        type: 'p',
        content:
          'These results are preliminary. The environment is synthetic, not a hindcast. The optimiser has not been validated against sea-trial data on the case-study vessel. The anti-rolling-tank coupling described in the introduction of the IMDC 2024 paper is not yet wired into the optimiser. And the model assumes vessel heading equals course over ground, which is conservative in current but wrong in heavy weather.',
      },
      {
        type: 'p',
        content:
          'The companion ICCAS / RINA paper from later in 2024 takes the next step: it sets the same SOOS stack against a real-case meteocean field from the MOHID large-circulation hydrodynamic model, and against a containership refit that converts an existing anti-heeling tank into an anti-rolling U-tank. That paper is where the systems-level story lives — coupling the routing layer to the on-board roll-stabilisation hardware, and asking whether a vessel that is more comfortable at any given speed is also a vessel that operates at speeds closer to its hydrodynamic optimum. The next milestone is the at-sea validation campaign. Until that is done, we will keep saying "the simulation says 8 to 9%" rather than "we save 8 to 9%". The two are not the same sentence.',
      },

      { type: 'h2', content: 'Why this matters beyond one containership' },
      {
        type: 'p',
        content:
          'Voyage optimisation is a generic decarbonisation lever. Any vessel that is large, fast, and operating against a forecastable meteocean field — containerships, RoRos, ferries, OSVs on long-distance steam-outs — has the same arithmetic available to it. The four physical ingredients are the same; only the coefficients and the optimiser cost surface change.',
      },
      {
        type: 'pull',
        content:
          'Hardware retrofits buy 5 to 15%. Operational measures, done well, can buy more than 20%. For an existing fleet under the 2030 IMO target, "done well" is not optional — and it is mostly software.',
      },
      {
        type: 'p',
        content:
          'The harder problem, and the one we intend to keep working on, is the integration. A weather-routing tool that lives in a separate window from the engine-room console, or that asks the bridge officer to type forecasts into a spreadsheet, will not survive the second week of a voyage. SOOS is being built so that the calm-water curves, the wave responses, the wind loads, and the routing layer are one stack with one interface, and so that the operator can trust a single number on the screen. Whether we have got that right is what the sea trials are for.',
      },

      { type: 'h2', content: 'Frequently asked questions' },

      { type: 'h3', content: 'What is the Carbon Intensity Indicator (CII)?' },
      {
        type: 'p',
        content:
          'The CII is an IMO operational metric, in force since January 2023, that rates a ship\'s annual carbon emissions per unit of transport work — grams of CO2 per tonne-mile. Each ship is given a letter rating A to E. Three consecutive C ratings, or a single E, require a corrective-action plan to be submitted to the flag state.',
      },

      { type: 'h3', content: 'How is SOOS different from a commercial weather-routing service?' },
      {
        type: 'p',
        content:
          'Commercial services typically optimise over a black-box ship model fitted to operational data. SOOS optimises over an open hydrodynamic model fitted from CFD and strip theory on the actual vessel. The difference matters when the loading condition or trim moves outside the operational envelope the black-box was fitted on — exactly when the largest fuel-saving opportunities tend to appear.',
      },

      { type: 'h3', content: 'How much fuel can voyage optimisation realistically save?' },
      {
        type: 'p',
        content:
          'On the synthetic Atlantic case in our IMDC 2024 paper, the saving was 8 to 9% versus the great-circle direct route. DnV\'s 2022 outlook puts the upper bound on operational measures at more than 20% across speed management, fleet planning, and weather routing combined. Single-voyage gains will sit somewhere inside that band, depending on route, season, and vessel type.',
      },

      { type: 'h3', content: 'Is this approach only for containerships?' },
      {
        type: 'p',
        content:
          'No. We tested SOOS on a 712 TEU geared containership because containerships are the highest emissions producers per nautical mile in the world fleet, but the four physical ingredients — calm-water resistance, wind loads, added resistance in waves, trim response — are generic. Tankers, bulkers, RoRos, and ferries each have their own coefficient sets but the same model architecture.',
      },

      { type: 'h3', content: 'When will sea-trial validation be available?' },
      {
        type: 'p',
        content:
          'The validation campaign is planned for the next phase of the SOOS programme, in coordination with the case-study vessel\'s operator. The companion ICCAS / RINA 2024 paper sets the framework for it. Until trials are complete, we describe SOOS as a methods study and not as an operational claim.',
      },
    ],
    references: [
      {
        marker: '[1]',
        text:
          'Ribeiro e Silva, S. and Bento Moreira, M. (2024). "An optimisation-based approach to reduce fuel consumption and emissions from shipping navigation." Proceedings of the 15th International Marine Design Conference (IMDC 2024), Amsterdam.',
        url: 'https://doi.org/10.59490/imdc.2024.832',
      },
      {
        marker: '[2]',
        text:
          'Ribeiro e Silva, S. and Bento Moreira, M. (2024). "Ship Operation Optimisation System (SOOS) — a real-time integrated decision-support tool." International Conference on Computer Applications in Shipbuilding (ICCAS / RINA), Genoa.',
      },
      {
        marker: '[3]',
        text:
          'IMO (2023). Resolution MEPC.377(80) — 2023 IMO Strategy on the Reduction of GHG Emissions from Ships.',
        url: 'https://www.imo.org/en/OurWork/Environment/Pages/2023-IMO-Strategy-on-Reduction-of-GHG-Emissions-from-Ships.aspx',
      },
      {
        marker: '[4]',
        text:
          'DNV (2022). Maritime Forecast to 2050 — Energy Transition Outlook 2022.',
        url: 'https://www.dnv.com/maritime/publications/maritime-forecast-2050/',
      },
      {
        marker: '[5]',
        text:
          'Salvesen, N. (1978). "Added resistance of ships in waves." Journal of Hydronautics, 12(1), 24–34.',
      },
      {
        marker: '[6]',
        text:
          'Isherwood, R. M. (1972). "Wind resistance of merchant ships." Transactions of the Royal Institution of Naval Architects, 38, 114–135.',
      },
      {
        marker: '[7]',
        text:
          'Gould, R. W. F. (1982). "The estimation of wind loads on ship superstructures." Maritime Technology Monograph No. 8, The Royal Institution of Naval Architects.',
      },
      {
        marker: '[8]',
        text:
          'Blendermann, W. (1994). "Parameter identification of wind loads on ships." Journal of Wind Engineering and Industrial Aerodynamics, 51, 339–351.',
      },
      {
        marker: '[9]',
        text:
          'Maurício, F. and Moreira, M. (2022). "Optimization of sailboat routes under non-uniform wind velocity fields." Trends in Maritime Technology and Engineering, 391–396.',
      },
      {
        marker: '[10]',
        text:
          'HSVA (2020). "Development of an automated test procedure for efficient roll damping of ships equipped with bilge keels (Autoroll)." HSVA Technical Report 1695.',
      },
    ],
    related: [
      { slug: 'corvo-without-tugs', title: 'Manoeuvring the "Corvo" without tugs: a probabilistic answer' },
      { slug: 'ugen-western-coast', title: 'UGEN along the Portuguese coast: LCOE from Porto to Sines' },
    ],
    i18n: {
      pt: {
        title: 'Otimização de viagem em tempo real para conformidade CII: notas do programa SOOS',
        subtitle:
          'Dentro do SOOS — o stack de apoio à decisão composto por potência CFD em água calma, cargas de vento semi-empíricas, resistência adicionada Salvesen-1978 e routing por simulated annealing que reduziu o consumo de combustível de viagem de um porta-contentores em 8 a 9% num cenário Atlântico sintético.',
        tag: 'Descarbonização · Metodologia',
        abstract:
          'Em junho de 2024, com M. Bento Moreira do CENTEC / IST, apresentámos na 15.ª International Marine Design Conference em Amesterdão o primeiro artigo metodológico de um Ship Operation Optimisation System (SOOS) integrado. O SOOS é um stack de apoio à decisão em tempo real — uma curva de potência em água calma derivada de CFD, cargas de vento semi-empíricas, resistência adicionada em ondas de Salvesen-1978, trim através do centro de gravidade e uma camada de weather routing por Vectorized Simulated Annealing. Num porta-contentores geared de 712 TEU em condições atlânticas sintéticas, o SOOS reduziu o consumo de combustível de viagem em 8 a 9% face à rota direta da grande circunferência, e manteve essa poupança mesmo quando se inseriu um obstáculo — uma ilha, um corredor marítimo — no espaço de procura. Estas notas descrevem o que é o SOOS, porquê o construímos como o construímos, e o que ainda não estamos a afirmar.',
        keyTakeaways: [
          'A Estratégia GEE da IMO de 2023 (MEPC.377(80)) tem como meta uma redução absoluta de cerca de 30% das emissões do shipping até 2030. Para uma frota existente, retrofits de hardware permitem 5 a 15% (DnV 2022); o resto tem de vir do modo como o navio é operado.',
          'O SOOS não é uma aplicação de routing. É um stack acoplado de hidrodinâmica + otimização: resistência CFD em água calma, cargas de vento semi-empíricas, resistência adicionada em ondas de Salvesen-1978, trim através do centro de gravidade, e uma camada de Vectorized Simulated Annealing sobre a geometria da rota.',
          '"Tempo real" significa segundos, não minutos — o modelo tem de re-planear à medida que as previsões são atualizadas e à medida que o consumo de combustível desloca o centro de gravidade. Pré-computamos a física cara offline e re-utilizamos as superfícies dentro do otimizador.',
          'Num porta-contentores geared de 712 TEU em condições atlânticas sintéticas, o SOOS convergiu em menos de 100 epochs e poupou 8 a 9% do combustível de viagem face à rota direta da grande circunferência. Com um obstáculo inserido na grelha, a poupança manteve-se em cerca de 8%.',
          'Combustível poupado é emissões poupadas. Para um porta-contentores regulado pelo CII, os mesmos 8 a 9% são a diferença entre permanecer dentro da banda operacional e entrar em território de plano de ação corretiva.',
        ],
        sections: [
          { type: 'h2', content: 'Porque a meta IMO 2030 é um problema operacional, não um problema de hardware' },
          {
            type: 'p',
            content:
              'A Estratégia GEE da IMO de 2023 (Resolução MEPC.377(80)) compromete o sector marítimo a uma redução absoluta de aproximadamente 30% das emissões well-to-wake até 2030, face aos níveis de 2008. A frota internacional emite hoje cerca de 681 megatoneladas de CO2 por ano. Retrofits de hardware — revestimentos, ajustes à forma do casco, polimento de hélice — rendem 5 a 15% por navio. As medidas operacionais têm de fechar o resto do gap.',
          },
          {
            type: 'p',
            content:
              'A aritmética é implacável para um porta-contentores existente. O Maritime Forecast da DnV de 2022 colocou o envelope hidrodinâmico por navio em 5 a 15%, e o envelope operacional (gestão de velocidade, planeamento de frota, weather routing — o que a DnV chama logística e digitalização) em mais de 20%. Um navio novo pode ser desenhado para a nova banda; um porta-contentores da década de 2010 não pode. O seu operador tem de encontrar os pontos percentuais em falta no modo como o navio é operado, não no modo como foi construído. É essa a condição de fronteira contra a qual escrevemos o SOOS. Junte-se a isto o contexto macro — preços do bunker mantidos altos pela guerra na Ucrânia e pelas perturbações no shipping do Médio Oriente, e o World Shipping Council a reportar mais de 3.113 contentores perdidos no mar entre 2020 e 2021 — e o caso operacional deixa de ser académico. Viagens mais seguras também consomem menos combustível.',
          },

          { type: 'h2', content: 'O que "tempo real" exige verdadeiramente do modelo' },
          {
            type: 'p',
            content:
              'Um otimizador de viagem em tempo real tem de calcular quatro coisas mais rapidamente do que uma previsão é atualizada: a potência em água calma necessária a qualquer velocidade e trim, as cargas de vento na projeção acima da linha de água, a resistência adicionada que o estado do mar está a impor ao casco, e a resposta do centro de gravidade à medida que combustível e ballast se movimentam pelo navio.',
          },
          {
            type: 'p',
            content:
              'A versão honesta é que nenhum destes cálculos pode ser feito em tempo real a partir de princípios físicos no computador da ponte. CFD num porta-contentores em ondas leva horas por caso, na melhor das hipóteses. Por isso a arquitetura é o inverso: pré-computa-se a física cara offline em alta fidelidade, destila-se essa física num pequeno conjunto de coeficientes e superfícies de lookup, e o otimizador consulta essas superfícies dentro do seu loop interno. O custo a bordo colapsa para interpolação mais a otimização propriamente dita. Onde o SOOS justifica o seu valor é ao ser honesto sobre quais simplificações se mantêm sob previsões operacionais e quais não — razão pela qual o artigo metodológico no IMDC 2024 é metade sobre as simplificações, e o artigo de sistemas no ICCAS / RINA, mais tarde no mesmo ano, é sobre os casos em que as simplificações falham.',
          },

          { type: 'h2', content: 'Os quatro ingredientes hidrodinâmicos' },
          {
            type: 'p',
            content:
              'Cada camada do stack tem o seu próprio histórico de validação e o seu próprio compromisso custo-precisão. Escolhemo-las com base no que dá melhor sinal por segundo de computação num porta-contentores de 120 metros.',
          },

          { type: 'h3', content: 'Resistência em água calma a partir de CFD, não de regressão' },
          {
            type: 'p',
            content:
              'Para o caso dos 712 TEU, corremos a resistência em água calma no Simerics MP — um solver RANS com template marítimo — varrendo um intervalo de velocidades ao trim de design de 0,2° à popa. O output foi ajustado como um polinómio de terceiro grau na velocidade, forçado a passar pela origem, e convertido em potência através de um coeficiente propulsivo de 0,656 derivado da mesma campanha.',
          },
          {
            type: 'p',
            content:
              'A razão prática para se ir até CFD em vez de uma regressão tipo Holtrop-Mennen é que essas regressões foram calibradas em famílias de cascos que já não representam a população moderna de porta-contentores. O ganho de precisão importa porque cada camada a jusante — vento, ondas, trim — é uma perturbação sobre o número da água calma, e uma baseline errada propaga-se a tudo o resto. O custo é uma campanha CFD por navio, por condição de carga que as operações usam efetivamente, corrida uma vez. É uma fatura única que o armador paga em troca de uma curva de potência defensável.',
          },

          { type: 'h3', content: 'Cargas de vento, semi-empíricas em primeiro lugar' },
          {
            type: 'p',
            content:
              'As cargas de vento vêm da família de formulações semi-empíricas de Isherwood (1972), Gould (1982) e Blendermann (1994), aplicadas às áreas projetadas lateral e transversal acima da linha de água. Na maioria dos tipos de navio, a contribuição do vento ronda os 2% da resistência total. Num porta-contentores empilhado seis-em-seis acima do convés — onde aproximadamente 60% das caixas estão acima do convés principal — pode chegar aos 10%.',
          },
          {
            type: 'p',
            content:
              'Optamos pela rota semi-empírica por duas razões. Primeira, a dependência da direção está bem caracterizada na tradição Isherwood-Gould-Blendermann, o que torna o lookup pequeno e estável. Segunda, o sinal de resistência ao vento é dominado pela área projetada, e a área projetada é conhecida exatamente a partir da condição de carga. CFD pode fazer melhor — já o corremos e dizemo-lo no artigo — mas o ganho marginal raramente justifica o custo marginal num navio cuja incerteza dominante é o próprio vento previsto, não o coeficiente de carga. Quando a incerteza dominante está noutro sítio, é nesse sítio que se gasta o budget de CFD.',
          },

          { type: 'h3', content: 'Resistência adicionada em ondas: Salvesen-1978 sobre Gerritsma-Beukelman' },
          {
            type: 'p',
            content:
              'A resistência adicionada em ondas irregulares é calculada com a formulação de Salvesen (1978) construída sobre a strip theory close-fit de Frank, com uma correção para ondas curtas. Comparámo-la com Gerritsma-Beukelman (1979); ambas concordam em ondas de proa, mas Gerritsma-Beukelman desvia em ondas de quartel de uma forma que a nossa experiência no mar diz estar errada, pelo que usamos Salvesen.',
          },
          {
            type: 'p',
            content:
              'Para colocar um número: para o caso dos 712 TEU à velocidade máxima (número de Froude 0,26), enfrentando o trem atlântico estatisticamente mais frequente (altura significativa de onda de 1,25 metros, período de pico de 9 segundos, ondas de proa), Salvesen devolve uma resistência adicionada de 13,42 quilonewtons. Isto representa 1,7% da resistência total, ou 2,9% da resistência residual. Pequeno em condições calmas; em condições de tempestade, domina. As funções de transferência da strip theory são pré-computadas em direção e frequência e consultadas dentro do otimizador. A perda de velocidade em ondas sai do mesmo lookup, pelo que não sobre-prevemos a velocidade que o motor consegue manter.',
          },

          { type: 'h3', content: 'Trim e o centro de gravidade em movimento' },
          {
            type: 'p',
            content:
              'O trim é a alavanca disponível mais barata. Pequenas variações no centro de gravidade longitudinal movimentam o trim dinâmico em décimos de grau e recuperam quilowatts mensuráveis na hélice. O SOOS segue o centro de gravidade instantâneo a partir dos pesos discretos a bordo — combustível, ballast, carga, tripulação — e calcula a correção de trim necessária através do momento unitário para variar trim.',
          },
          {
            type: 'p',
            content:
              'O ponto de calcular isto em tempo real é que o operador não sabe, na verdade, o centro de gravidade num dado momento. O livro de estabilidade da condição de partida é uma fotografia. Horas mais tarde, foi queimado combustível dos tanques de ré, o ballast foi ajustado, e o trim deixou de ser ótimo. O SOOS recalcula o trim ótimo contra a carga atual e propõe uma transferência de ballast quando o ganho justifica o custo operacional. No caso dos 712 TEU o trim ideal foi de 0,2° à popa — o mesmo valor usado na campanha CFD em água calma — mas o facto mais interessante é que este número muda ao longo da viagem.',
          },

          { type: 'h2', content: 'Porque o simulated annealing é a camada de routing certa' },
          {
            type: 'p',
            content:
              'O espaço de procura da geometria da rota — encontrar a sequência de waypoints que minimiza o consumo de combustível entre dois portos sob um campo meteoceanográfico previsto, respeitando exclusões de terra e de tráfego — é não-convexo, tem fronteiras rígidas e não é diferenciável através dessas fronteiras. O simulated annealing tolera as três coisas. Usamos uma variante vectorizada adaptada de Maurício e Moreira (2022), originalmente desenvolvida para routing de veleiros sob campos de vento não uniformes.',
          },
          {
            type: 'p',
            content:
              'A mecânica é prosaica. O SOOS representa uma rota como uma cadeia de N − 1 waypoints entre origem e destino. Gera uma população de 200 rotas candidatas com posições aleatórias dos waypoints, avalia o consumo de combustível para cada uma integrando a taxa de consumo ao longo do leg, retém a melhor metade, perturba-as com um ruído espacial cuja amplitude decai exponencialmente ao longo dos epochs, e repete. O programa de decaimento é o análogo da temperatura no annealing clássico. A vetorização significa que o passo de perturbar-e-avaliar corre em paralelo sobre toda a população em hardware comum. No caso publicado limitámos a 750 epochs, mas o otimizador convergiu em menos de 100 — que é a propriedade que se quer, porque o operador na ponte não vai esperar por 750. A heurística de cinco passos está descrita por completo no artigo IMDC 2024; a parte relevante para um operador é que não há hiperparâmetros que tenha de afinar.',
          },

          { type: 'h2', content: 'O caso dos 712 TEU — e o que 8 a 9% significa realmente' },
          {
            type: 'p',
            content:
              'Num campo Atlântico sintético — vento uniforme de 23 nós de Oeste, corrente uniforme de 2,14 nós para Oeste, vagas regulares de Oeste com 1,25 m / 10 s, dois portos a cerca de 215 km de distância — o SOOS encaminhou o porta-contentores geared de 712 TEU para 3,99 kg de combustível contra 4,31 kg na rota direta da grande circunferência. A poupança foi de 8 a 9%.',
          },
          {
            type: 'p',
            content:
              'A versão mais difícil do mesmo caso teve-nos a inserir uma "ilha" exatamente no sítio onde a rota ótima queria passar. O otimizador desviou-se à volta dela e ainda assim ficou em 3,97 kg — uma poupança de 8%. Era essa a propriedade que nos interessava: a poupança não é um artefacto frágil de uma superfície de custo amigável. É robusta ao tipo de restrição geográfica que uma viagem real efetivamente tem — um corredor marítimo, uma zona de exclusão de pesca, um waypoint imposto pelo afretador. Multiplique 8% pela fatura anual de bunker de uma frota e o número deixa de ser uma curiosidade. Para um porta-contentores médio numa rota Mediterrâneo-Atlântico, uma poupança de 8% por viagem compõe-se em sete dígitos de combustível evitado por ano, e altera o rating CII desse mesmo navio o suficiente para fazer diferença na próxima inspeção do estado do porto.',
          },

          { type: 'h2', content: 'O que ainda não estamos a afirmar' },
          {
            type: 'p',
            content:
              'Estes resultados são preliminares. O ambiente é sintético, não um hindcast. O otimizador não foi validado contra dados de provas de mar do navio do caso de estudo. O acoplamento ao tanque anti-rolling descrito na introdução do artigo IMDC 2024 ainda não está integrado no otimizador. E o modelo assume que o rumo da embarcação é igual ao curso sobre o solo, o que é conservador em corrente mas errado em mau tempo.',
          },
          {
            type: 'p',
            content:
              'O artigo companheiro do ICCAS / RINA, mais tarde em 2024, dá o passo seguinte: corre o mesmo stack SOOS contra um campo meteoceanográfico de caso real proveniente do modelo hidrodinâmico de grande circulação MOHID, e contra um refit de porta-contentores que converte um tanque anti-heeling existente num tanque anti-rolling do tipo U. É nesse artigo que vive a história ao nível dos sistemas — acoplar a camada de routing ao hardware de estabilização de roll a bordo, e perguntar se um navio que é mais confortável a uma dada velocidade é também um navio que opera a velocidades mais próximas do seu ótimo hidrodinâmico. O próximo marco é a campanha de validação no mar. Até estar feita, continuaremos a dizer "a simulação diz 8 a 9%" em vez de "poupamos 8 a 9%". Não são a mesma frase.',
          },

          { type: 'h2', content: 'Porque isto importa para além de um porta-contentores' },
          {
            type: 'p',
            content:
              'A otimização de viagem é uma alavanca de descarbonização genérica. Qualquer navio que seja grande, rápido, e que opere contra um campo meteoceanográfico previsível — porta-contentores, RoRos, ferries, OSVs em deslocações longas — tem a mesma aritmética disponível. Os quatro ingredientes físicos são os mesmos; só os coeficientes e a superfície de custo do otimizador é que mudam.',
          },
          {
            type: 'pull',
            content:
              'Retrofits de hardware rendem 5 a 15%. Medidas operacionais, bem feitas, podem render mais de 20%. Para uma frota existente sob a meta IMO 2030, "bem feitas" deixa de ser opcional — e é maioritariamente software.',
          },
          {
            type: 'p',
            content:
              'O problema mais difícil, e aquele em que tencionamos continuar a trabalhar, é a integração. Uma ferramenta de weather routing que vive numa janela separada da consola da casa das máquinas, ou que pede ao oficial de ponte para escrever previsões numa folha de cálculo, não vai sobreviver à segunda semana de viagem. O SOOS está a ser construído para que as curvas de água calma, as respostas em ondas, as cargas de vento e a camada de routing sejam um único stack com uma única interface, e para que o operador possa confiar num único número no ecrã. Se acertámos nisso, é para isso que servem as provas de mar.',
          },

          { type: 'h2', content: 'Perguntas frequentes' },

          { type: 'h3', content: 'O que é o Carbon Intensity Indicator (CII)?' },
          {
            type: 'p',
            content:
              'O CII é uma métrica operacional da IMO, em vigor desde janeiro de 2023, que classifica as emissões anuais de carbono de um navio por unidade de trabalho de transporte — gramas de CO2 por tonelada-milha. Cada navio recebe uma classificação por letra de A a E. Três classificações C consecutivas, ou um único E, exigem um plano de ação corretiva submetido ao Estado de bandeira.',
          },

          { type: 'h3', content: 'Em que é que o SOOS difere de um serviço comercial de weather routing?' },
          {
            type: 'p',
            content:
              'Os serviços comerciais tipicamente otimizam sobre um modelo de navio caixa-negra ajustado a dados operacionais. O SOOS otimiza sobre um modelo hidrodinâmico aberto ajustado a partir de CFD e strip theory no navio efetivo. A diferença importa quando a condição de carga ou o trim saem do envelope operacional sobre o qual a caixa-negra foi ajustada — exatamente quando aparecem as maiores oportunidades de poupança de combustível.',
          },

          { type: 'h3', content: 'Quanto combustível pode a otimização de viagem realisticamente poupar?' },
          {
            type: 'p',
            content:
              'No caso Atlântico sintético do nosso artigo IMDC 2024, a poupança foi de 8 a 9% face à rota direta da grande circunferência. O outlook da DnV de 2022 coloca o limite superior das medidas operacionais em mais de 20% no conjunto de gestão de velocidade, planeamento de frota e weather routing. Os ganhos por viagem ficarão algures dentro dessa banda, dependendo da rota, da estação e do tipo de navio.',
          },

          { type: 'h3', content: 'Esta abordagem é só para porta-contentores?' },
          {
            type: 'p',
            content:
              'Não. Testámos o SOOS num porta-contentores geared de 712 TEU porque os porta-contentores são os maiores produtores de emissões por milha náutica na frota mundial, mas os quatro ingredientes físicos — resistência em água calma, cargas de vento, resistência adicionada em ondas, resposta de trim — são genéricos. Tankers, bulkers, RoRos e ferries têm cada um os seus próprios conjuntos de coeficientes mas a mesma arquitetura de modelo.',
          },

          { type: 'h3', content: 'Quando estará disponível a validação por provas de mar?' },
          {
            type: 'p',
            content:
              'A campanha de validação está planeada para a próxima fase do programa SOOS, em coordenação com o operador do navio do caso de estudo. O artigo companheiro do ICCAS / RINA 2024 estabelece o framework para a campanha. Até as provas estarem completas, descrevemos o SOOS como um estudo metodológico e não como uma afirmação operacional.',
          },
        ],
        related: [
          { slug: 'corvo-without-tugs', title: 'Manobrar o "Corvo" sem rebocadores: uma resposta probabilística' },
          { slug: 'ugen-western-coast', title: 'UGEN ao longo da costa portuguesa: LCOE do Porto a Sines' },
        ],
      },
    },
  },
];

export const ARTICLES_BY_SLUG = Object.fromEntries(ARTICLES.map((a) => [a.slug, a]));
export const ARTICLE_SLUGS = ARTICLES.map((a) => a.slug);
