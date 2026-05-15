import type { ServiceDetail } from './services-detail';

// PT-PT translation of services-detail.en.ts.
// Slugs, software/standard names (CFD, STAR-CCM+, DNV, FuelEU Maritime,
// SOLAS, Maxsurf, etc.) and proper nouns are preserved in English.
// Only prose content (overview, methodology descriptions, FAQ Q&A,
// taglines, deliverable phrasing) is translated.

export const SERVICES_PT: ServiceDetail[] = [
  {
    slug: '3d-geometric-modelling',
    number: '01',
    name: 'Modelação Geométrica 3D',
    shortName: 'Modelação 3D',
    tagline: 'Superfícies estanques, prontas para classe.',
    description:
      'Geometria CAD pronta para produção, para análises estruturais, hidrodinâmicas e visualização. Compatível com sociedades classificadoras.',
    overview: [
      'Cada projeto que executamos parte de uma fonte única de verdade: a geometria. Construímos modelos paramétricos de superfícies estanques que FEA, CFD, amarração e revisões de classe podem ler sem necessidade de remalhar.',
      'Os nossos modelos seguem os princípios de Simulation-Based Design and Virtual Prototyping (SBDVP), incluindo as convenções HLA definidas pela STANAG 4684 ("On Virtual Ships"), de modo a que a mesma geometria possa alimentar um cálculo de estabilidade em Maxsurf, uma simulação CFD em STAR-CCM+ ou OpenFOAM, e uma submissão de classe à DNV, BV, RINA ou Lloyd\'s Register.',
      'Entregamos topologia limpa, exportações de cavernas e secções, e renders prontos para visualização. O modelo é vosso; entregamos o ficheiro, não apenas a resposta.',
    ],
    whatWeDeliver: [
      'Modelo CAD de grau de produção',
      'Modelo de superfície estanque',
      'Exportação de cavernas e secções',
      'Ficheiros prontos para sociedades classificadoras',
      'Renders de visualização',
      'Topologia e parâmetros documentados',
    ],
    methodology: [
      {
        t: 'Briefing geométrico',
        d: 'Plano de linhas, características principais, utilização prevista a jusante (CFD, FEA, classificação, marketing) e tolerâncias-alvo.',
      },
      {
        t: 'Construção de superfícies',
        d: 'Modelo paramétrico de superfícies em Rhino + Grasshopper, com secções de controlo identificadas, verificações de estanquidade e controlo de versões.',
      },
      {
        t: 'Verificações de sanidade a jusante',
        d: 'Uma corrida rápida de CFD ou estabilidade para confirmar que o modelo se comporta antes de o entregarmos.',
      },
      {
        t: 'Entrega',
        d: 'Exportações nativas + STEP/IGES + secções, com um README de uma página explicando os controlos paramétricos.',
      },
    ],
    tools: [
      'Rhino + Grasshopper',
      'Maxsurf',
      'AutoCAD',
      'Intercâmbio STEP / IGES',
      'STAR-CCM+ (CFD a jusante)',
      'OpenFOAM (CFD a jusante)',
    ],
    cases: [
      { title: 'Barco de trabalho OneOcean', client: 'OneOcean', year: '2021' },
      { title: 'Lancha-piloto SeaPower 12 m', client: 'SeaPower', year: '2022' },
    ],
    faq: [
      {
        q: 'O que significa "estanque" no vosso entregável?',
        a: 'Superfície fechada, sem arestas de fronteira, topologia manifold, adequada para malhagem CFD ou FEA a jusante sem reparação manual. Executamos uma verificação automatizada antes da entrega e documentamos quaisquer tolerâncias.',
      },
      {
        q: 'O modelo sobreviverá a uma revisão de sociedade classificadora?',
        a: 'Sim. Construímos segundo as convenções de geometria que a DNV, BV, RINA e Lloyd\'s Register esperam, com um histórico de submissões aprovadas sem retrabalho geométrico.',
      },
      {
        q: 'Mantêm o modelo vivo após a entrega?',
        a: 'A pedido. A maioria dos clientes regressa seis meses depois com uma pergunta do tipo "e se mudássemos a casota para a popa?", e o modelo paramétrico permite-nos responder em dias, não semanas.',
      },
    ],
    leadTime: '2–4 semanas',
    serviceType: 'Arquitetura naval',
  },
  {
    slug: 'naval-architecture-and-offshore-engineering-design',
    number: '02',
    name: 'Arquitetura Naval & Engenharia Offshore',
    shortName: 'Arquitetura naval',
    tagline: 'De pequenas embarcações a grandes instalações offshore.',
    description:
      'Estabilidade, análise estrutural e análise intacta/em avaria segundo normas internacionais.',
    overview: [
      'O trabalho clássico de arquitetura naval — livros de estabilidade, FEA estrutural, análises intacta e em avaria, desenhos GA e de perfil — feito pelos sócios, assinado pelos sócios, defendido pelos sócios perante a sociedade classificadora.',
      'Trabalhamos em navios de carga, navios de passageiros, plataformas offshore e instalações de energias renováveis. A disciplina não muda com o navio; a norma sim, e calibramos o pacote ao pavilhão e à classe.',
      'Quando o projeto está errado, dizemos. Quando o orçamento não cobre o que a norma exige, dizemos. A reputação que estamos a construir vale mais do que qualquer honorário individual.',
    ],
    whatWeDeliver: [
      'Livro de estabilidade (intacta e em avaria)',
      'Relatório de FEA estrutural',
      'Desenhos de GA e perfil',
      'Pacote de ligação com sociedade classificadora',
      'Curvas hidrostáticas e de avaria',
      'Cálculos de arqueação e bordo livre',
    ],
    methodology: [
      {
        t: '01 · Descoberta & definição de âmbito',
        d: 'Uma chamada de 30 minutos para compreender o navio, o operador e o desafio que originou o projeto. Dizemos logo se somos o parceiro certo.',
      },
      {
        t: '02 · Proposta técnica',
        d: 'Uma proposta de honorários fixos e âmbito fixo com sócios nomeados, entregáveis, percurso de classificação e riscos. Em cinco dias úteis.',
      },
      {
        t: '03 · Engenharia',
        d: 'Sessões de trabalho semanais com o operador. Livros de estabilidade, FEA estrutural, desenhos de GA e ligação com sociedade classificadora entregues segundo um Gantt publicado.',
      },
      {
        t: '04 · Entrega & apoio',
        d: 'Relatório final, modelo documentado e 90 dias de suporte pós-entrega incluídos.',
      },
    ],
    tools: [
      'Maxsurf · estabilidade',
      'Ansys Aqwa · comportamento no mar',
      'AUTOHYDRO',
      'SESAM · análise estrutural',
      'STAR-CCM+ · validação CFD',
      'DNV · ligação de classe',
      "Lloyd's Register",
      'Bureau Veritas',
      'RINA',
    ],
    cases: [
      { title: 'Belize I — remotorização e aumento de capacidade', client: 'Nautiber', year: '2023' },
      { title: 'Libries — conversão para turismo científico', client: 'Blue Geo Lighthouse', year: '2022' },
    ],
    faq: [
      {
        q: 'Com que sociedades classificadoras trabalham regularmente?',
        a: 'DNV, Lloyd\'s Register, Bureau Veritas, RINA e GL. Temos processos de ligação ativos com cada uma e conhecemos os respetivos avaliadores.',
      },
      {
        q: 'Assinam entregáveis como engenheiros titulados?',
        a: 'Sim. Os sócios da KDS são membros da Ordem dos Engenheiros (Portugal) e fornecem assinatura de engenheiro titulado nos entregáveis que a exigem, em conformidade com as regras da Ordem.',
      },
      {
        q: 'Como tratam a estabilidade em avaria de um navio que está a ser modificado?',
        a: 'Reconstruímos os casos de avaria a partir do plano de linhas original e da nova compartimentação interna, e depois corremos uma avaliação probabilística de estabilidade em avaria segundo a regra SOLAS ou de classe aplicável. O resultado é um plano de controlo de avarias que o operador pode utilizar a bordo.',
      },
    ],
    leadTime: '8–16 semanas',
    serviceType: 'Arquitetura naval',
  },
  {
    slug: 'hydrodynamic-optimization',
    number: '03',
    name: 'Otimização Hidrodinâmica',
    shortName: 'CFD & hidrodinâmica',
    tagline: 'Refinamento de casco e propulsor por CFD.',
    description:
      'Reduzir consumo de combustível e emissões em condições reais de operação, não em ensaios de tanque idealizados.',
    overview: [
      'O desempenho hidrodinâmico é o que a maioria dos operadores sente como uma fatura de combustível. Usamos teoria de fluxo potencial para varreduras rápidas e CFD com Reynolds médio para os casos que importam, validados contra campanhas de ensaios em modelo, quando existem.',
      'Cargas de onda, corrente e vento em estruturas offshore são avaliadas pela formulação de Morison e por métodos de painéis tridimensionais. O resultado é um conjunto numérico de coeficientes de carga de vento e corrente que o projetista pode defender.',
      'Resultados típicos: 10–20% de redução de consumo de combustível em cruzeiro, melhoria mensurável da margem de estabilidade ao balanço, e um relatório CFD (~80 páginas) que tanto a sociedade classificadora como o operador conseguem ler.',
    ],
    whatWeDeliver: [
      'Relatório CFD (~80 pp)',
      'Recomendações de forma do casco',
      'Curvas de resistência e propulsão',
      'Gráficos de esteira e pressão',
      'Coeficientes de carga de vento e corrente',
      'Configuração do solver documentada (reproduzível)',
    ],
    methodology: [
      {
        t: 'Avaliação de baseline',
        d: 'Geometria existente, dados de desempenho e perfil operacional. O perfil operacional é a entrada mais importante — a maior parte do combustível é queimada a uma ou duas velocidades, não em todo o envelope.',
      },
      {
        t: 'Campanha de simulação',
        d: 'STAR-CCM+ ou OpenFOAM aos números de Froude relevantes. Validação contra dados de tanque ou de provas de mar sempre que existam.',
      },
      {
        t: 'Modificações de projeto',
        d: 'Refinamentos de casco, apêndices e propulsor propostos e quantificados. Cada alteração é acompanhada de uma estimativa de poupança de combustível e de um intervalo de confiança.',
      },
      {
        t: 'Validação & entrega',
        d: 'Configuração final do solver, malha e scripts de pós-processamento entregues. O modelo é vosso após o projeto.',
      },
    ],
    tools: [
      'STAR-CCM+',
      'OpenFOAM',
      'WAMIT (fluxo potencial / método de painéis)',
      'Ansys Aqwa',
      'AUTOHYDRO',
      'Maxsurf',
      'Ship@Sea (proprietário KDS)',
    ],
    cases: [
      {
        title: 'Lancha-piloto SeaPower 12 m — −18% de consumo em cruzeiro',
        client: 'SeaPower',
        year: '2022',
      },
      { title: 'CFD preliminar para barco de trabalho OneOcean', client: 'OneOcean', year: '2021' },
    ],
    faq: [
      {
        q: 'Quando é que o CFD é melhor do que um ensaio em tanque de reboque?',
        a: 'Quando o espaço paramétrico é grande (estão a explorar 20 variantes de casco, não a validar uma), quando o número de Reynolds não pode ser reproduzido à escala do modelo, ou quando o orçamento para tempo de tanque já não existe. O CFD nem sempre é mais barato, mas é sempre mais rápido para iterar.',
      },
      {
        q: 'Qual a precisão do vosso CFD comparado com provas de mar?',
        a: 'Para resistência, normalmente dentro de 3–5% numa malha validada. Para propulsão, 5–8% consoante a modelação do hélice. Publicamos os resíduos em todos os relatórios.',
      },
      {
        q: 'Cobrem comportamento no mar para além de resistência?',
        a: 'Sim — Ansys Aqwa para comportamento linear, Ship@Sea (o nosso código interno) para simulação não-linear no domínio temporal quando a resposta é grande.',
      },
    ],
    leadTime: '6–10 semanas',
    serviceType: 'Hidrodinâmica',
  },
  {
    slug: 'ship-manoeuvrability-prediction',
    number: '04',
    name: 'Previsão de Manobrabilidade',
    shortName: 'Manobrabilidade',
    tagline: 'Simulação no domínio temporal. Respostas probabilísticas.',
    description:
      'Prever o comportamento da embarcação e avaliar envelopes de manobra autónoma dentro de portos.',
    overview: [
      'Um estudo de manobra tem de responder a uma pergunta sobre a qual o operador possa atuar: quantas vezes por ano o meu navio pode atracar sem assistência de rebocador? Que margem tenho para ventos de través? Onde é que um segundo propulsor de popa muda a resposta?',
      'Respondemos a essas perguntas com um modelo no domínio temporal em MatLab/Simulink que acopla casco, leme (com flap, quando aplicável) e propulsores de proa/popa, alimentado por um ano de dados meteoceânicos e por um núcleo de comportamento no mar baseado em método de painéis 3D para as forças de onda.',
      'Os nossos projetos de referência são as avaliações probabilísticas de operacionalidade dos navios porta-contentores de 610 TEU *Corvo* e *Silver Mary* dentro do porto de Vila do Porto (Açores). Fazemos estes estudos em estreita colaboração com a autoridade portuária e o operador.',
    ],
    whatWeDeliver: [
      'Simulação de manobrabilidade (domínio temporal)',
      'Operacionalidade % por ano',
      'Recomendações de dimensionamento de propulsores e leme',
      'Envelopes de bacia portuária',
      'Trajetórias no domínio temporal com intervalos de confiança',
      'Conjunto de coeficientes hidrodinâmicos e aerodinâmicos',
    ],
    methodology: [
      {
        t: 'Determinação de coeficientes',
        d: 'Coeficientes de resistência, deriva, guinada e aerodinâmicos, obtidos a partir de CFD e de dados de prova disponíveis. A precisão de todo o estudo depende deste passo.',
      },
      {
        t: 'Modelo numérico',
        d: 'Plataforma interna em MatLab/Simulink que acopla casco, leme, hélices e propulsores no domínio temporal.',
      },
      {
        t: 'Integração meteoceânica',
        d: 'Um ano completo de dados de vento, onda e corrente no local de operação — não um cenário de pior caso, mas a distribuição real.',
      },
      {
        t: 'Análise probabilística',
        d: 'Milhares de atracações simuladas amostradas a partir da distribuição meteoceânica. O resultado é um intervalo de confiança, não um único número.',
      },
    ],
    tools: [
      'MatLab / Simulink (interno)',
      'STAR-CCM+ (determinação de coeficientes)',
      'WAMIT (método de painéis 3D, difração de ondas)',
      'Ship@Sea',
      'Conjuntos de dados meteoceânicos (Copernicus, autoridades portuárias)',
    ],
    cases: [
      {
        title: '"Corvo" — avaliação de manobra autónoma, Vila do Porto',
        client: 'Mutualista, Grupo Bensaúde',
        year: '2024',
      },
      {
        title: '"Silver Mary" — análise de operacionalidade, Vila do Porto',
        client: 'Mutualista, Grupo Bensaúde',
        year: '2024',
      },
    ],
    faq: [
      {
        q: 'Porquê probabilístico em vez de pior caso?',
        a: 'Porque o operador não paga pelos dias de pior caso — paga pelo dia mediano. O pior caso define um envelope de segurança; o probabilístico define o envelope de operação. Ambos são necessários; entregamos ambos.',
      },
      {
        q: 'O modelo pode ser corrido novamente quando o navio muda?',
        a: 'Sim. O conjunto de coeficientes e o simulador são entregues. Uma alteração de calado, uma melhoria de propulsor, ou um porto diferente podem ser testados em dias.',
      },
      {
        q: 'Cobrem navios autónomos / não tripulados?',
        a: 'Sim. O mesmo simulador responde à pergunta de quanta autoridade de sensores e controlo um navio não tripulado precisa para se manter dentro do envelope operacional.',
      },
    ],
    leadTime: '6–12 semanas',
    serviceType: 'Hidrodinâmica',
  },
  {
    slug: 'mooring-systems-design',
    number: '05',
    name: 'Projeto de Sistemas de Amarração',
    shortName: 'Amarração',
    tagline: 'De cargas ambientais ao dimensionamento de âncoras.',
    description:
      'Sistemas de catenária, taut-leg e híbridos para renováveis flutuantes, aquacultura e plataformas offshore.',
    overview: [
      'A amarração é a disciplina que transforma um conjunto de dados meteoceânicos numa lista de materiais em aço. Projetamos sistemas spread, single-point e de apoio a posicionamento dinâmico para FPSOs, eólica flutuante, conversores de energia das ondas, aquacultura e plataformas offshore — permanentes ou temporários.',
      'Triagem quase-estática com ARIANE-3D, depois análise dinâmica em OrcaFlex ou MOSES, e finalmente avaliação de fadiga segundo a regra DNV / API aplicável. O resultado é um envelope de tensão nas linhas, uma tabela de dimensionamento de âncoras e um procedimento de instalação que o operador pode entregar ao empreiteiro.',
      'Trabalhamos esta disciplina desde a avaliação de rolamento paramétrico da GRS Power Platform com a WavEC em Belmullet, em 2015. As lições difíceis ficaram registadas no log de hipóteses de cada projeto que executamos.',
    ],
    whatWeDeliver: [
      'Relatório de análise de amarração (quase-estático & dinâmico)',
      'Envelopes de tensão nas linhas',
      'Dimensionamento de âncoras e cálculos de capacidade de retenção',
      'Avaliação de vida à fadiga',
      'Procedimento de instalação',
      'Manual de operação e inspeção',
    ],
    methodology: [
      {
        t: 'Avaliação do local',
        d: 'Meteoceânica (corrente, vento, onda) no local de implantação. Caracterização do solo para projeto de âncoras.',
      },
      {
        t: 'Triagem de configurações',
        d: 'Análise quase-estática em ARIANE-3D em configurações candidatas (spread, taut-leg, single-point).',
      },
      {
        t: 'Análise dinâmica',
        d: 'Simulação no domínio temporal em OrcaFlex ou MOSES, incluindo dinâmica das linhas e acoplamento hidrodinâmico.',
      },
      {
        t: 'Fadiga e certificação',
        d: 'Contagem rainflow, curvas S-N segundo DNV / API e um pacote pronto para sociedade classificadora.',
      },
    ],
    tools: [
      'OrcaFlex',
      'MOSES',
      'ARIANE-3D',
      'WAMIT',
      'Ansys Aqwa',
      'Ship@Sea',
      'Conjuntos de regras DNV / API',
    ],
    cases: [
      {
        title: 'GRS Power Platform — avaliação de rolamento paramétrico',
        client: 'WavEC Offshore Renewables',
        year: '2015',
      },
    ],
    faq: [
      {
        q: 'Spread vs taut-leg — como escolhem?',
        a: 'Profundidade de água, orçamento de movimentos, área permitida pelos vizinhos, e custo de âncoras. Um sistema taut-leg dá um envelope de movimentos mais apertado, mas paga-o em pré-tensão de âncoras. Triamos os dois antes de recomendar um.',
      },
      {
        q: 'Cobrem amarrações para eólica flutuante?',
        a: 'Sim. A eólica flutuante acopla amarração, controlador e aerodinâmica — coordenamos o lado da amarração com o analista do lado do vento (ou corremos o modelo acoplado internamente) para que o controlador e a amarração concordem sobre o que o rotor está a fazer.',
      },
      {
        q: 'Como tratam a incerteza no conjunto de dados meteoceânicos?',
        a: 'Hindcast mais dados medidos onde existam, estudos de sensibilidade nas piores direções, e uma banda de incerteza documentada em cada envelope de tensão. Não a escondemos dentro de um "fator de segurança."',
      },
    ],
    leadTime: '4–8 semanas',
    serviceType: 'Engenharia offshore',
  },
  {
    slug: 'vessel-conversion-engineering',
    number: '06',
    name: 'Engenharia de Conversão de Navios',
    shortName: 'Conversão',
    tagline: 'Remotorização, reconversão, aumento de capacidade.',
    description:
      'De pequenas modificações a conversões completas, em conformidade com as regulamentações em vigor.',
    overview: [
      'Uma conversão é um problema diferente de uma nova construção: a geometria está dada, a estrutura tem um histórico, e o orçamento tem de competir com a substituição. Fazemos conversões quando o caso de engenharia fecha — não porque queremos o projeto, mas porque o operador precisa.',
      'Trabalhos típicos: remotorização (a caixa de velocidades geralmente vence), aumento de capacidade, retrofit de propulsão híbrida, modernização de acomodação, conversão para investigação científica. Tratamos da reedição da estabilidade, dos reforços estruturais, da ligação com classe e estado de bandeira, e do apoio ao concurso para o estaleiro.',
      'Os nossos trabalhos de referência são a remotorização do Belize I para a Nautiber (2023, entregue dentro do prazo) e a conversão do motor-veleiro Libries para a Blue Geo Lighthouse (2022, no prazo, no âmbito).',
    ],
    whatWeDeliver: [
      'Pacote de projeto de conversão',
      'Estudo de viabilidade de re-motorização',
      'Livro de estabilidade atualizado',
      'Projeto de reforços estruturais',
      'Ligação com classe e estado de bandeira',
      'Apoio ao concurso de estaleiro',
    ],
    methodology: [
      {
        t: 'Viabilidade',
        d: 'Um estudo curto, de honorários fixos, que responde a uma pergunta: a conversão fecha em engenharia, prazo e orçamento? A maioria dos projetos avança ou pára aqui.',
      },
      {
        t: 'Projeto',
        d: 'Livro de estabilidade atualizado, reforços estruturais, GA, atualizações de sistemas e uma especificação pronta para estaleiro.',
      },
      {
        t: 'Apoio ao concurso',
        d: 'Ajudamos o operador a colocar o trabalho a concurso junto dos estaleiros, a avaliar as propostas e a fazer o briefing ao vencedor.',
      },
      {
        t: 'Supervisão de obra',
        d: 'Opcional. Inspeção, revisões de fase, provas de mar e ensaios de aceitação.',
      },
    ],
    tools: [
      'Maxsurf · estabilidade',
      'AUTOHYDRO',
      'SESAM · FEA',
      'Ansys',
      'STAR-CCM+ (quando a hidrodinâmica muda)',
      'Ligação com classe: DNV, BV, RINA, LR',
    ],
    cases: [
      { title: '"Belize I" — remotorização e aumento de capacidade', client: 'Nautiber', year: '2023' },
      { title: '"Libries" — conversão para turismo científico', client: 'Blue Geo Lighthouse', year: '2022' },
    ],
    faq: [
      {
        q: 'Quando é que a conversão é a resposta errada?',
        a: 'Quando o novo papel pede um casco que o navio existente não consegue dar dentro dos limites estruturais e de estabilidade. Dizemos isso na viabilidade, não depois do aço estar a ser cortado.',
      },
      {
        q: 'Como tratam retrofits de propulsão híbrida?',
        a: 'Auditoria energética do perfil operacional primeiro — se o ciclo de operação não tem horas significativas de baixa carga, o híbrido não compensa. Quando compensa, dimensionamos a bateria e o gerador em torno do perfil de carga real, não de um genérico.',
      },
      {
        q: 'Tratam do lado do estado de bandeira para além da classe?',
        a: 'Sim. Para conversões com pavilhão português fazemos a ligação direta com a Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos (DGRM); para pavilhões estrangeiros trabalhamos com o representante do estado de bandeira do operador.',
      },
    ],
    leadTime: '4–10 semanas (projeto)',
    serviceType: 'Arquitetura naval',
  },
  {
    slug: 'supervision-of-new-constructions',
    number: '07',
    name: 'Supervisão de Novas Construções',
    shortName: 'Supervisão',
    tagline: 'Fiscalização independente do lado do armador.',
    description:
      'Controlo de qualidade, conformidade técnica e ensaios de aceitação até à entrega.',
    overview: [
      'A supervisão independente é o trabalho que um operador paga para que o estaleiro não possa redefinir silenciosamente a especificação. Ficamos do lado do armador, sem qualquer relação comercial com o estaleiro, e levamos uma autorização escrita para parar a obra quando algo está errado.',
      'O nosso âmbito cobre auditorias de aprovisionamento de materiais, revisões de fase antes de cada etapa de construção, registos de inspeção contra os desenhos aprovados, provas de mar e ensaios de aceitação. Trabalhamos internacionalmente, e deslocamo-nos.',
      'O entregável do primeiro dia é o plano de inspeção: que inspeções, em que pontos, contra que critérios de aceitação. O entregável do último dia é o relatório final de entrega. Tudo o que está pelo meio fica documentado.',
    ],
    whatWeDeliver: [
      'Plano de inspeção e QA',
      'Auditoria de especificações',
      'Revisões de fase e registos de inspeção',
      'Relatórios de não conformidade',
      'Protocolo e resultados de ensaios de aceitação',
      'Relatório final de entrega',
    ],
    methodology: [
      {
        t: 'Plano de inspeção',
        d: 'Fases, pontos de gate, hold-points, critérios de aceitação. Emitido antes de o aço ser cortado.',
      },
      {
        t: 'Supervisão no local',
        d: 'Sócio residente ou em visitas em cada fase. Resolução de problemas em tempo real; decisões documentadas.',
      },
      {
        t: 'Provas de mar',
        d: 'Provas de manobra, velocidade e ruído acompanhadas em conformidade com o contrato. Discrepâncias reportadas com ações corretivas.',
      },
      {
        t: 'Entrega final',
        d: 'Resultados dos ensaios de aceitação, lista de pontos pendentes, e relatório final de entrega que o operador pode entregar à seguradora.',
      },
    ],
    tools: [
      'Conjuntos de regras de classe (DNV, BV, RINA, LR, GL)',
      'Quadros de conformidade IMO / SOLAS / MARPOL',
      'Software de inspeção e registos digitais',
      'Coordenação de instrumentação para provas de mar',
    ],
    cases: [
      { title: 'Barco de trabalho OneOcean (fase de construção)', client: 'OneOcean', year: '2021' },
    ],
    faq: [
      {
        q: 'O vosso supervisor está a tempo inteiro no local?',
        a: 'Depende do projeto. Para fases de ritmo elevado (montagem de blocos, outfitting), sim. Para fases mais longas com hold-points bem definidos, comparecemos nos pontos de gate. O plano é definido no início do projeto, não negociado a meio da construção.',
      },
      {
        q: 'Levam autoridade para parar a obra?',
        a: 'Sim — escrita, pelo armador. Usamos com parcimónia. A maioria das disputas resolve-se por um relatório de não conformidade e um relógio de 24 horas.',
      },
      {
        q: 'Cobrem construção de estruturas offshore para além de navios?',
        a: 'Sim. A disciplina transfere-se: revisões de fase, hold-points, critérios de aceitação. A regra de classe muda; o rigor não.',
      },
    ],
    leadTime: 'Duração do projeto',
    serviceType: 'Supervisão de projeto',
  },
  {
    slug: 'maritime-decarbonisation',
    number: '08',
    name: 'Descarbonização Marítima',
    shortName: 'Descarbonização',
    tagline: 'Caminhos do baseline de consumo até zero líquido.',
    description:
      'Caminhos de redução de GEE para navios e ativos offshore. Combustíveis alternativos, eficiência energética e conformidade FuelEU Maritime / IMO 2050.',
    overview: [
      'A descarbonização marítima já não é uma abstração estratégica. O FuelEU Maritime, a extensão do EU ETS ao transporte marítimo, as metas IMO 2050, e os Princípios de Poseidon impõem todos obrigações concretas e datadas aos operadores. A pergunta não é se descarbonizar — é qual o caminho, em que prazo, com que custo de capital.',
      'Trabalhamos o lado técnico: linhas de base de emissões, viabilidade de combustíveis alternativos (bateria, híbrido, LNG, metanol, amoníaco), retrofits de eficiência energética, e otimização operacional (trim, velocidade, rotas). Cada recomendação está fundamentada em hidrodinâmica quantificada por CFD e em modelação de GEE de ciclo de vida, e não em narrativa ESG genérica.',
      'O trabalho de referência inclui o SEAPOWER 1500 — uma lancha-piloto de 15 m totalmente elétrica dimensionada por CFD antes da construção — o estudo OPS de fornecimento de energia elétrica em terra para a APRAM na Madeira, e o trabalho de remotorização do catamarã "Belize I" para a Nautiber. Cada projeto começa com uma linha de base operacional medida e termina com um caminho documentado que o operador pode defender perante reguladores e financiadores.',
    ],
    whatWeDeliver: [
      'Linha de base de emissões operacionais (well-to-wake)',
      'Matriz comparativa de caminhos de descarbonização',
      'Estudo de viabilidade de combustíveis alternativos',
      'Dimensionamento de eletrificação e powertrain híbrido',
      'Especificação de retrofit de eficiência energética',
      'Avaliação de conformidade FuelEU Maritime / IMO 2050 / EU ETS',
      'Modelo de GEE de ciclo de vida e envelope CAPEX/OPEX',
    ],
    methodology: [
      {
        t: 'Baseline & fronteira',
        d: 'Definir o perfil operacional — viagens, tempo em porto, mistura de combustíveis, condições ambientais. Construir a linha de base de emissões well-to-wake segundo a metodologia IMO DCS / CII.',
      },
      {
        t: 'Opções de caminho',
        d: 'Pontuar bateria, híbrido, metanol, amoníaco, biocombustível e opções de retrofit de eficiência face a CAPEX, OPEX, redução de GEE, maturidade tecnológica, e disponibilidade de reabastecimento. O resultado é uma matriz comparativa defensável.',
      },
      {
        t: 'Dimensionamento de engenharia',
        d: 'Para o caminho selecionado, engenharia completa: powertrain, bateria, sistema de combustível, integração, encaixe estrutural, impacto em peso e estabilidade. CFD onde altera a resposta (casco, propulsão, apêndices).',
      },
      {
        t: 'Conformidade & financiamento',
        d: 'FuelEU Maritime, EU ETS, IMO 2050, Princípios de Poseidon. Preparamos a submissão técnica para classe e os anexos técnicos que os financiadores pedem.',
      },
    ],
    tools: [
      'Simerics MP (CFD)',
      'STAR-CCM+ / OpenFOAM (CFD)',
      'Rhino + Grasshopper (projeto paramétrico)',
      'Método Holtrop-Mennem (resistência empírica)',
      'Metodologia FuelEU Maritime / IMO DCS / CII',
      'Calculadora EU ETS marítima',
      'Quadros de avaliação de ciclo de vida',
      'MATLAB / Simulink (dimensionamento de powertrain)',
    ],
    cases: [
      { title: 'SEAPOWER 1500 — lancha-piloto 100% elétrica de 15 m', client: 'SeaPower', year: '2025' },
      { title: 'Green Ports Madeira / estudo OPS de energia em terra', client: 'APRAM via Future Proman', year: '2023' },
      { title: '"Belize I" — remotorização e aumento de capacidade do catamarã', client: 'Nautiber', year: '2023' },
    ],
    faq: [
      {
        q: 'Que caminho de combustível é o certo para a minha frota?',
        a: 'Não há resposta universal. Partimos do vosso perfil operacional — duração das viagens, tempo em porto, disponibilidade de reabastecimento, restrições de afretamento, envelope CAPEX — e pontuamos as opções de bateria, híbrido, metanol, amoníaco e biocombustível em função das vossas especificidades. O resultado é uma matriz comparativa e uma recomendação escrita, não um discurso de venda.',
      },
      {
        q: 'Estão certificados para reporte FuelEU Maritime?',
        a: 'Seguimos a metodologia FuelEU Maritime publicada e o quadro de reporte DCS, e entregamos avaliações no formato que as administrações de bandeira e os organismos reconhecidos esperam. A certificação final é emitida pelo RO (DNV, BV, RINA, LR); preparamos a submissão técnica e respondemos às questões.',
      },
      {
        q: 'Conseguem fazer retrofit em navios existentes, ou apenas projetar novas construções?',
        a: 'Ambos. Para a maioria dos operadores o retrofit é mais económico do que a nova construção a curto prazo. Já remotorizámos lanchas-piloto, convertemos catamarãs e especificámos retrofits híbridos. Cada um começa com um estudo de viabilidade que cobre encaixe estrutural, balanço de pesos, autonomia e aprovação regulamentar.',
      },
    ],
    leadTime: '4–12 semanas',
    serviceType: 'Descarbonização',
  },
  {
    slug: 'maritime-digitalisation-and-digital-twin',
    number: '09',
    name: 'Digitalização & Gémeo Digital',
    shortName: 'Digitalização',
    tagline: 'Gémeos baseados em física, do projeto à operação de frota.',
    description:
      'Desenvolvimento de gémeos digitais, monitorização de desempenho data-driven e estratégia de digitalização para frotas e operações offshore.',
    overview: [
      'A maioria dos "gémeos digitais" marítimos são dashboards sobre fluxos SCADA. Úteis, mas não conseguem responder à pergunta que o operador realmente tem: "e se mudarmos o trim em um grau, ou a velocidade em meio nó?" Responder a isso exige um modelo baseado em física — e essa é a camada que construímos.',
      'Acoplamos modelos hidrodinâmicos derivados de CFD com fluxos de sensores a bordo para produzir um gémeo que vive ao lado dos dados, não no lugar deles. O mesmo modelo de física que dimensionou o navio durante o projeto continua na operação como preditor calibrado de resistência, consumo de combustível e sensibilidade ao trim. As convenções de gémeo digital ISO/IEC 23247 orientam a arquitetura.',
      'O trabalho de referência inclui o SEAPOWER 1500 — uma lancha-piloto totalmente elétrica cujo gémeo digital foi construído antes do aço ser cortado — e um sistema de otimização de operação de navios em tempo real que reduz o consumo de combustível e as emissões em navegação e em escalas portuárias (publicado no IMDC 2024 e no ICCAS 2024 em Génova).',
    ],
    whatWeDeliver: [
      'Gémeo digital baseado em física (derivado de CFD)',
      'Dashboard de desempenho em tempo real',
      'Modelos preditivos de trim, velocidade e consumo',
      'Arquitetura de sensores e especificação de instrumentação',
      'Quadro de benchmarking de frota',
      'Ferramentas de apoio à decisão para o operador (conselheiro de trim, comparação de rotas)',
      'Metodologia suportada por investigação publicada',
    ],
    methodology: [
      {
        t: 'Baseline derivada de CFD',
        d: 'Curvas de resistência e propulsão obtidas por CFD (Simerics MP, OpenFOAM ou STAR-CCM+) ao longo do envelope operacional. Esta é a camada de física do gémeo — água calma, trim livre, calado livre, várias condições de carga.',
      },
      {
        t: 'Arquitetura de sensores',
        d: 'Especificar o conjunto mínimo viável de sensores — RPM, binário, GPS, caudal de combustível, IMU, ambiente — que alimenta um gémeo útil. Privilegiamos a simplicidade; um sensor extra que não acrescenta nada é mais um modo de falha.',
      },
      {
        t: 'Integração e calibração do gémeo',
        d: 'Acoplar o modelo derivado de CFD aos fluxos de dados em direto. Ciclo de calibração contra medições a bordo, com resíduos documentados e bandas de incerteza.',
      },
      {
        t: 'Camada de apoio à decisão',
        d: 'Saídas para o operador: conselheiro de trim, curva velocidade-consumo, comparação de viagens, estimador de impacto de retrofit. O modelo responde a perguntas; o operador decide.',
      },
    ],
    tools: [
      'Simerics MP (baseline CFD)',
      'OpenFOAM / STAR-CCM+ (CFD)',
      'Rhino + Grasshopper / Orca3D (geometria)',
      'Python / NumPy / SciPy / pandas (processamento de dados)',
      'MATLAB / Simulink (modelos de controlo e de espaço de estados)',
      'InfluxDB / Grafana (séries temporais e dashboards)',
      'Normas de gémeo digital ISO/IEC 23247',
      'Metodologia de otimização publicada em IMDC 2024 / ICCAS 2024',
    ],
    cases: [
      { title: 'SEAPOWER 1500 — gémeo digital derivado de CFD, pré-construção', client: 'SeaPower', year: '2025' },
      { title: 'Otimização de operação de navios em tempo real (publicações IMDC / ICCAS)', client: 'KDS R&D', year: '2024' },
      { title: '"Belize I" — quadro de monitorização de desempenho', client: 'Nautiber', year: '2023' },
    ],
    faq: [
      {
        q: 'Isto é apenas mais um dashboard SCADA?',
        a: 'Não. Os dashboards SCADA visualizam o que os sensores medem. Um gémeo baseado em física consegue responder a "e se mudarmos o trim em um grau?" sem ensaios a bordo — porque o modelo derivado de CFD preenche a lacuna que os sensores não conseguem ver. O modelo vive ao lado dos dados, não no lugar deles.',
      },
      {
        q: 'Quanta instrumentação de sensores preciso de instalar?',
        a: 'Menos do que a maioria dos fornecedores vos dirá. Uma configuração típica corre com GPS, IMU, caudal de combustível, RPM do veio e um pequeno pacote ambiental. O modelo derivado de CFD infere o que os sensores não conseguem medir diretamente (componentes de resistência, eficiência propulsiva em pontos fora de design).',
      },
      {
        q: 'O gémeo pode correr em navios existentes, ou apenas em novas construções?',
        a: 'Ambos. Para novas construções acoplamos o CFD da fase de projeto ao gémeo operacional desde o primeiro dia. Para navios existentes corremos uma baseline CFD pontual contra o casco como construído e depois ligamos o fluxo de dados em direto. O caminho de retrofit demora semanas, não meses.',
      },
    ],
    leadTime: '6–16 semanas',
    serviceType: 'Digitalização',
  },
];
