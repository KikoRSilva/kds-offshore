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
    tldr:
      'A modelação geométrica 3D é a produção de superfícies CAD paramétricas e estanques que alimentam, a partir de uma fonte única, todas as análises a jusante — FEA estrutural, CFD, amarração e revisão por sociedade classificadora. A KDS Offshore constrói modelos em Rhino + Grasshopper conformes com a STANAG 4684 e entrega exportações nativas, STEP, IGES e secções.',
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
    outcomes: [
      { metric: '100%', label: 'estanque na entrega', context: 'verificação manifold automatizada em cada entrega' },
      { metric: '0', label: 'retrabalho geométrico após revisão de classe', context: 'lancha-piloto SeaPower 12 m, barco de trabalho OneOcean' },
      { metric: '2–4 sem.', label: 'prazo típico para casco de 15–30 m', context: 'do plano de linhas à entrega' },
      { metric: 'STANAG 4684', label: 'conforme por defeito', context: 'convenções HLA em todos os modelos paramétricos' },
    ],
    whenToUse: [
      'Casco novo, conceito inovador ou casota invulgar onde nenhuma geometria existente é fiável.',
      'Múltiplas utilizações a jusante previstas: CFD + FEA + estabilidade + visualização — um modelo serve todas.',
      'Uma submissão de classe está no caminho crítico e a geometria tem de passar a revisão DNV / BV / RINA / LR sem retrabalho.',
      'Espera-se iterar (mover a casota, alterar apêndice, redistribuir tanques) ao longo dos próximos 12 meses.',
    ],
    whenNotToUse: [
      'Já existe um IGES sólido, já passou por classe, e não está prevista mais variação paramétrica.',
      'Um plano 2D é suficiente (desenho único para licenciamento), sem análise a jusante associada.',
    ],
    regulatoryContext: [
      { name: 'STANAG 4684', note: 'Norma NATO para virtual ships; convenções HLA adotadas em todo o trabalho.' },
      { name: 'Convenções geométricas DNV', note: 'Estanque, manifold, secções de controlo identificadas.' },
      { name: 'Bureau Veritas Marine NR467', note: 'Requisitos de definição de forma de casco para submissões em aço.' },
      { name: 'RINA — Rules for the Classification of Ships', note: 'Entradas geométricas para verificações de escantilhão e estabilidade.' },
      { name: "Lloyd's Register — Rules for the Classification of Ships", note: 'Topologia paramétrica compatível e secções identificadas.' },
    ],
    vesselTypes: [
      'Lanchas-piloto, embarcações rápidas, RIBs',
      'Barcos de trabalho e embarcações de apoio',
      'Plataformas offshore, semissubmersíveis, topsides de FPSO',
      'Conversores de energia das ondas, subestruturas eólicas flutuantes',
      'Embarcações de patrulha e navais',
      'Iates e embarcações turísticas',
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
    tldr:
      'A arquitetura naval e engenharia offshore é a disciplina clássica de transformar um conceito de embarcação num pacote construível e certificável — livro de estabilidade, FEA estrutural, análises intacta e em avaria, desenhos GA e ligação com sociedade classificadora. A KDS Offshore entrega-o liderado por sócio, com honorário fixo e assinado por engenheiro titulado pela Ordem dos Engenheiros.',
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
    outcomes: [
      { metric: '5', label: 'sociedades classificadoras em ligação ativa', context: 'DNV, Lloyd\'s Register, Bureau Veritas, RINA, GL' },
      { metric: '50+', label: 'livros de estabilidade entregues', context: 'em carga, passageiros, offshore e renováveis (2016–2026)' },
      { metric: '90 dias', label: 'apoio pós-entrega incluído', context: 'padrão em cada projeto' },
      { metric: '8–16 sem.', label: 'prazo típico para pacote completo', context: 'GA, estabilidade, FEA, ligação com classe' },
    ],
    whenToUse: [
      'Nova construção, aumento de capacidade ou conversão que exija novo livro de estabilidade e submissão a classe.',
      'Reconstrução da estabilidade em avaria após modificação estrutural ou alteração de compartimentação.',
      'Avaliação probabilística de estabilidade em avaria segundo SOLAS Capítulo II-1 para navios novos ou modificados.',
      'Assinatura de engenharia do lado do armador necessária (engenheiro titulado pela Ordem dos Engenheiros).',
    ],
    whenNotToUse: [
      'Trabalho puro de supervisão de doca, sem âmbito de projeto — use Supervisão de Novas Construções.',
      'Estudo CFD isolado sem âmbito estrutural ou de estabilidade — use Otimização Hidrodinâmica.',
    ],
    regulatoryContext: [
      { name: 'SOLAS Capítulo II-1', note: 'Subdivisão, estabilidade intacta e em avaria, integridade estanque.' },
      { name: 'MARPOL', note: 'Requisitos de projeto para prevenção da poluição (óleo, substâncias nocivas, esgotos, lixo, ar).' },
      { name: 'IACS Common Structural Rules', note: 'Escantilhões estruturais para tankers e bulkers em classe IACS.' },
      { name: 'DNV-OS-C101', note: 'Projeto de estruturas offshore de aço (geral).' },
      { name: 'Convenção Internacional de Linhas de Carga 1966 / Protocolo 1988', note: 'Bordo livre e reserva de flutuabilidade.' },
      { name: 'Decreto-Lei 96/2017 (Portugal)', note: 'Transposição portuguesa de segurança marítima; ligação à DGRM para embarcações de pavilhão PT.' },
    ],
    vesselTypes: [
      'Carga: contentor, granel, multi-uso',
      'Passageiros: ferries, cruzeiros, RoPax',
      'Offshore: FPSO, plataformas, embarcações de apoio',
      'Renováveis: subestruturas eólicas flutuantes, conversores de energia das ondas',
      'Especializadas: rebocadores, dragas, lanchas-piloto, barcos de trabalho',
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
      'NASTRAN · FEA estrutural, ruído e vibrações',
      'SESAM · GeniE · modelação estrutural',
      'SESAM · HydroD · cargas hidrodinâmicas',
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
    tldr:
      'A otimização hidrodinâmica é o refinamento por CFD de casco, apêndices e propulsor para reduzir resistência, consumo e emissões em todo o perfil operacional real — não a uma única velocidade de projeto. A KDS Offshore usa STAR-CCM+, OpenFOAM e WAMIT, valida contra dados de tanque ou de provas de mar, e publica os resíduos em todos os relatórios.',
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
    outcomes: [
      { metric: '−18%', label: 'consumo de combustível em cruzeiro', context: 'lancha-piloto SeaPower 12 m, 2022 (validada por CFD)' },
      { metric: '8–9%', label: 'combustível poupado em caso atlântico sintético', context: 'programa SOOS, publicado no IMDC 2024 e ICCAS 2024' },
      { metric: '3–5%', label: 'resíduo típico contra provas de mar', context: 'malha validada na previsão de resistência' },
      { metric: '~80 pp', label: 'relatório CFD por estudo', context: 'pronto para sociedade classificadora, com configuração de solver documentada' },
    ],
    whenToUse: [
      'Estudo paramétrico com 10+ variantes de casco para triagem rápida (CFD bate o tanque por ordens de magnitude).',
      'Briefing de poupança de combustível em retrofit — o operador quer saber quanto custa 1° de trim ou 0,5 nó de velocidade.',
      'Projeto de propulsor onde a interação com a esteira importa e os dados de tanque estão incompletos.',
      'Coeficientes de carga de vento, onda e corrente de qualquer tipo de embarcação de mar, para uso em software de weather routing, podem ser submetidos pela KDS Offshore a uma sociedade classificadora para revisão externa e respetivo processo de acreditação.',
    ],
    whenNotToUse: [
      'Um único casco validado com dados de tanque já abundantes — voltar a correr CFD acrescenta pouco.',
      'Previsão de cavitação a velocidade total de propulsor sem campanha dedicada em túnel de cavitação.',
    ],
    regulatoryContext: [
      { name: 'EEDI / EEXI (IMO MEPC.328(76))', note: 'Os dados hidrodinâmicos por CFD alimentam os índices de eficiência de projeto e de navio existente.' },
      { name: 'CII (Indicador IMO de Intensidade de Carbono)', note: 'Consumo operacional modelado por CFD informa a previsão e a melhoria do rating CII.' },
      { name: 'FuelEU Maritime', note: 'Aconselhamento de trim e velocidade validado por CFD reduz a intensidade GEE well-to-wake para conformidade.' },
      { name: 'Manual de qualidade da ITTC', note: 'Protocolos V&V seguidos em cada relatório CFD; resíduos publicados, não escondidos.' },
    ],
    vesselTypes: [
      'Lanchas-piloto e embarcações portuárias',
      'Barcos de trabalho, embarcações de apoio, OSVs',
      'Porta-contentores, graneleiros, tankers (trabalho operacional de trim e velocidade)',
      'Cruzeiros e navios de passageiros',
      'Estruturas offshore (cargas de vento e corrente)',
      'Embarcações navais e de patrulha',
    ],
    publications: [
      {
        label:
          'Ribeiro e Silva, S., Varela, J. M. (2022). Ship Gyroscopic Roll Stabilisation. 41ª International Conference on Ocean, Offshore and Arctic Engineering (OMAE 2022), ASME, Hamburgo. Paper OMAE2022-7953.',
      },
      {
        label:
          'Ribeiro e Silva, S., Bento Moreira, M. (2024). An optimisation-based approach to reduce fuel consumption and emissions from shipping navigation. IMDC 2024, Amsterdão.',
        url: 'https://doi.org/10.59490/imdc.2024.832',
      },
      {
        label:
          'Ribeiro e Silva, S., Bento Moreira, M. (2024). An integrated real-time Ship Operation Optimisation System (SOOS). ICCAS 2024, RINA, Génova.',
      },
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
      'MITCHELL1 · resistência de formação de ondas (teoria do navio fino)',
      'DAWSON0 · resistência de formação de ondas (superfície livre linear)',
      'Ansys Aqwa',
      'AUTOHYDRO',
      'Maxsurf',
      'Ship@Sea (proprietário KDS, FORTRAN)',
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
    tldr:
      'A previsão de manobrabilidade usa simulação no domínio temporal para antecipar como uma embarcação responde em condições reais — círculos de evolução, zigzags, janelas de atracação, envelopes de manobra autónoma. A KDS Offshore corre estudos probabilísticos de operacionalidade (milhares de atracações amostradas a partir de um ano de dados meteoceânicos) que respondem a quantas vezes por ano um navio pode manobrar sem rebocador.',
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
    outcomes: [
      { metric: '610 TEU', label: 'porta-contentores analisado', context: 'Corvo e Silver Mary, Vila do Porto (Açores), 2024' },
      { metric: 'Probabilística', label: 'resposta de operacionalidade por ano', context: 'milhares de atracações amostradas com intervalos de confiança' },
      { metric: 'MSC.137(76)', label: 'critérios IMO de aceitação validados', context: 'evolução, zigzag, espiral, paragem brusca' },
      { metric: '6 GdL', label: 'acoplamento no domínio temporal', context: 'casco, leme com flap, propulsores de proa / popa' },
    ],
    whenToUse: [
      'Um porto onde a assistência de rebocador é pouco fiável, cara ou indisponível — e o operador quer uma janela de atracação sem rebocador.',
      'Uma embarcação autónoma ou não tripulada que precisa de um envelope operacional defensável antes da implantação.',
      'Um retrofit de propulsor onde a pergunta é "quanto é que um segundo propulsor de proa nos compra?".',
      'Validação das manobras IMO MSC.137(76) para um casco novo ou modificado.',
    ],
    whenNotToUse: [
      'Otimização de viagem em alto-mar (use o programa SOOS / otimização de viagem).',
      'Uma pergunta pura de resistência / propulsão sem componente de manobra (use Otimização Hidrodinâmica).',
    ],
    regulatoryContext: [
      { name: 'IMO MSC.137(76)', note: 'Critérios de aceitação das manobras-padrão (círculo de evolução, zigzag, espiral, paragem brusca).' },
      { name: 'IMO MSC-MEPC.2/Circ.12 (navios autónomos)', note: 'Evidência de operacionalidade exigida pelo quadro de testes e aprovação MASS.' },
      { name: 'PIANC Harbour Approach Channels (Report 121)', note: 'Referências de margens de manobra e desenho de bacia em estudos portuários.' },
      { name: 'OCIMF Mooring Equipment Guidelines (MEG4)', note: 'Convenções de carga de vento e corrente usadas no conjunto de coeficientes.' },
    ],
    vesselTypes: [
      'Porta-contentores e feeders (Corvo, Silver Mary)',
      'Tankers, graneleiros, carga geral multi-uso',
      'Cruzeiros e navios de passageiros (manobra portuária)',
      'RoRo e RoPax',
      'Rebocadores, lanchas-piloto, embarcações portuárias',
      'Embarcações autónomas / não tripuladas (MASS)',
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
          'Ribeiro e Silva, S., Varela, J. M. (2022). Ship Gyroscopic Roll Stabilisation. 41ª International Conference on Ocean, Offshore and Arctic Engineering (OMAE 2022), ASME, Hamburgo. Paper OMAE2022-7953. BEM com correções de velocidade + ST para avaliação do índice de operacionalidade em pequenas embarcações de patrulha.',
      },
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
      'KDS DemoShip · manobra no domínio temporal em MatLab/Simulink',
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
    tldr:
      'O projeto de sistemas de amarração é a disciplina que transforma um conjunto de dados meteoceânicos numa lista de materiais em aço — sistemas spread, taut-leg, single-point ou de apoio a posicionamento dinâmico para renováveis flutuantes, aquacultura, FPSOs e plataformas offshore. A KDS Offshore tria configurações em ARIANE-3D, corre análise dinâmica em OrcaFlex ou MOSES e certifica fadiga segundo DNV-OS-E301 ou API RP 2SK.',
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
    outcomes: [
      { metric: '6 OWCs', label: 'analisados numa única plataforma híbrida', context: 'GRS Power Platform, WavEC Offshore Renewables, Belmullet (Irlanda), 2015' },
      { metric: 'ULS + ALS', label: 'ambientes de projeto por estudo', context: 'condições operacionais, sobrevivência e acidentais modeladas' },
      { metric: '25 anos', label: 'vida típica de projeto à fadiga', context: 'rainflow + S-N segundo DNV-RP-C203, com margem reportada' },
      { metric: '4–8 sem.', label: 'prazo para um estudo de implantação única', context: 'triagem + dinâmica + fadiga + procedimento de instalação' },
    ],
    whenToUse: [
      'Eólica flutuante, energia das ondas ou solar — problema acoplado de controlador / amarração onde a incerteza está nos dados meteoceânicos.',
      'FPSO ou instalação offshore permanente com várias décadas de vida e linhas críticas à fadiga.',
      'Aquacultura ou amarrações temporárias que precisam de procedimento de instalação defensável para um empreiteiro novo.',
      'Reanálise de amarração existente após dano, substituição de linha ou reavaliação ambiental.',
    ],
    whenNotToUse: [
      'Transferências ship-to-ship / amarração em tandem (use consultoria de operações marítimas).',
      'Projeto puro de âncora sem acoplamento meteoceânico (use empresa geotécnica especializada).',
    ],
    regulatoryContext: [
      { name: 'DNV-OS-E301', note: 'Amarração de posicionamento — regra de projeto para condições operacionais, sobrevivência e ALS.' },
      { name: 'API RP 2SK', note: 'Projeto e análise de sistemas de manutenção de posição para estruturas flutuantes.' },
      { name: 'DNV-RP-C203', note: 'Projeto à fadiga de estruturas offshore de aço — curvas S-N e metodologia rainflow.' },
      { name: 'DNV-OS-J103 (eólica flutuante)', note: 'Projeto de estruturas de turbinas eólicas flutuantes — amarração e resposta global.' },
      { name: 'IEC 61400-3', note: 'Requisitos de projeto de turbinas eólicas para offshore (acopla com cargas de amarração).' },
    ],
    vesselTypes: [
      'Subestruturas eólicas flutuantes (semi-sub, spar, TLP)',
      'Conversores de energia das ondas (point absorbers, OWCs, atenuadores)',
      'Solares flutuantes',
      'FPSOs e FSOs',
      'Aquacultura offshore (jaulas de piscicultura)',
      'Amarrações temporárias (construção, comissionamento, desmantelamento)',
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
      'KDS Mooring (proprietário)',
      'SESAM · DeepC · resposta global',
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
    tldr:
      'A engenharia de conversão de navios é o reprojeto de um casco existente para um novo papel — remotorização, aumento de capacidade, retrofit de propulsão híbrida, reconversão científica ou comercial. A KDS Offshore trata da reedição da estabilidade, dos reforços estruturais, da ligação com classe e estado de bandeira (DNV, BV, RINA, LR, DGRM) e do apoio ao concurso para o estaleiro. Viabilidade com honorário fixo primeiro; projeto só quando o caso de engenharia fecha.',
    overview: [
      'Uma conversão é um problema diferente de uma nova construção: a geometria está dada, a estrutura tem um histórico, e o orçamento tem de competir com a substituição. Fazemos conversões quando o caso de engenharia fecha — não porque queremos o projeto, mas porque o operador precisa.',
      'Os trabalhos típicos cobrem toda a gama que já entregámos ou orçamentámos: conversão de tanker → FPSO; retrofit de propulsão híbrida dual-fuel LNG–Diesel–Elétrico; remotorização (a caixa de velocidades geralmente vence); aumento de capacidade de passageiros ou carga; instalação de blocos de acomodação adicionais; retrofit OPS / fornecimento de energia em terra; conversão de casco para stand-by vessel; e conversão para investigação científica. Tratamos da reedição da estabilidade, dos reforços estruturais, da ligação com classe e estado de bandeira, e do apoio ao concurso para o estaleiro.',
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
    outcomes: [
      { metric: 'No prazo', label: 'Belize I entregue', context: 'Nautiber, remotorização e aumento de capacidade do catamarã, 2023' },
      { metric: 'No prazo, no âmbito', label: 'conversão científica do Libries', context: 'Blue Geo Lighthouse, motor-veleiro, 2022' },
      { metric: 'Honorário fixo', label: 'viabilidade antes de o projeto avançar', context: 'a maioria dos projetos avança ou pára na viabilidade' },
      { metric: '4–10 sem.', label: 'prazo típico do pacote de projeto', context: 'depois da decisão de viabilidade' },
    ],
    whenToUse: [
      'Remotorização, retrofit de propulsão híbrida ou modernização de acomodação onde o casco está sólido e o papel está a mudar.',
      'Aumento de capacidade de passageiros ou carga que exija reforço estrutural e reedição de estabilidade.',
      'Conversão para investigação científica ou turismo de uma embarcação comercial existente.',
      'Preparação de concurso de estaleiro — o operador precisa de uma especificação pronta para estaleiro antes da consulta.',
    ],
    whenNotToUse: [
      'Quando o novo papel pede um casco que o navio existente não consegue dar dentro de limites estruturais ou de estabilidade — dizemos isso na viabilidade, não depois do aço estar a ser cortado.',
      'Quando o operador quer um projeto completamente novo sem reutilizar o casco existente — use Arquitetura Naval.',
    ],
    regulatoryContext: [
      { name: 'SOLAS Capítulo II-1 (estabilidade em avaria)', note: 'Reedição dos casos de avaria após qualquer alteração de subdivisão ou compartimentação.' },
      { name: 'MARPOL Anexo VI (NOx / SOx)', note: 'Conformidade de emissões para a planta propulsora remotorizada.' },
      { name: 'IACS Common Structural Rules', note: 'Onde o reforço intersecta estrutura abrangida pelas CSR (tankers, bulkers).' },
      { name: 'EU MRV / FuelEU Maritime', note: 'Linha de base operacional de consumo antes e depois do retrofit.' },
      { name: 'Decreto-Lei 96/2017 + DGRM (Portugal)', note: 'Ligação direta à autoridade portuguesa de bandeira para conversões com pavilhão PT.' },
    ],
    vesselTypes: [
      'Catamarãs (passageiros, turismo, trabalho) — Belize I',
      'Motor-veleiros e iates — Libries',
      'Barcos de trabalho e embarcações de apoio',
      'Rebocadores e embarcações portuárias',
      'Pequenos ferries e RoPax',
      'Conversões especiais (científica, expedição, hospital)',
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
    tldr:
      'A supervisão de novas construções é o papel independente de engenheiro do armador que protege a especificação do operador durante a construção — auditorias de materiais, revisões de fase, registos de inspeção, provas de mar e aceitação final. A KDS Offshore senta-se do lado do armador, sem ligação comercial ao estaleiro, com autorização escrita para parar a obra, e entrega um relatório final que o operador pode entregar à seguradora.',
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
    outcomes: [
      { metric: 'Independente', label: 'sem ligação comercial ao estaleiro', context: 'honorários pagos exclusivamente pelo armador; autoridade escrita de paragem' },
      { metric: 'Dia 1', label: 'plano de inspeção com gates nomeados', context: 'antes de o aço ser cortado; fixado no kick-off, não negociado a meio' },
      { metric: '24 h', label: 'relógio padrão de resolução de NCR', context: 'documentado; a maioria das disputas resolve-se antes de escalar' },
      { metric: 'Para a seguradora', label: 'relatório final de entrega', context: 'aceitação + lista de pendentes, formatado para P&I do casco' },
    ],
    whenToUse: [
      'Nova construção onde o armador precisa de uma testemunha técnica independente — primeira da classe, projeto inovador ou subcontratação multi-estaleiro.',
      'Fase de construção sob pressão de calendário, onde o armador não consegue ter pessoal residente mas precisa de disciplina ao nível dos gates.',
      'Estaleiro estrangeiro onde diferenças de fuso horário e idioma exigem presença in-situ liderada por sócio nos hold-points.',
      'Estrutura offshore de elevado valor em que seguradora e classe vão ambas auditar o pacote de entrega após o handover.',
    ],
    whenNotToUse: [
      'Um contrato chave-na-mão onde o armador não mantém responsabilidade técnica e o estaleiro carrega todo o risco.',
      'Uma modificação ou retrofit dentro de um único período de estaleiro com supervisão de classe existente (use Engenharia de Conversão de Navios).',
    ],
    regulatoryContext: [
      { name: 'IACS Common Structural Rules', note: 'Pontos de inspeção e critérios de aceitação para estrutura do casco.' },
      { name: 'SOLAS / MARPOL / Linhas de Carga', note: 'Pontos de vistoria estatutária testemunhados em conjunto com o organismo reconhecido.' },
      { name: 'IMO Sea Trial Resolution MSC.137(76)', note: 'Critérios de aceitação para as manobras-padrão testemunhadas em provas de mar.' },
      { name: 'ISO 9001 (QMS do estaleiro)', note: 'Quadro de gestão de qualidade contra o qual o processo de NCR do estaleiro é auditado.' },
      { name: 'Delegação do estado de bandeira (DGRM / equivalentes)', note: 'Itens estatutários delegados pela administração de bandeira ao RO e testemunhados pelo engenheiro do armador.' },
    ],
    vesselTypes: [
      'Navios de carga (montagem de blocos até à entrega)',
      'Navios de passageiros e cruzeiros',
      'Estruturas offshore (jackets, semi-sub, topsides de FPSO)',
      'Embarcações de patrulha e navais',
      'Barcos de trabalho e lanchas-piloto',
      'Instalações de energias renováveis (fase de construção)',
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
      'Caminhos de redução de GEE para navios e ativos offshore. Combustíveis alternativos, eficiência energética e conformidade FuelEU Maritime / EU ETS Maritime / IMO 2050 — engenharia, não narrativa.',
    tldr:
      'A descarbonização marítima é o trabalho de engenharia de levar uma embarcação ou frota de uma linha de base medida de consumo até um caminho defensável de zero líquido — bateria, híbrido, LNG, metanol, amoníaco, biocombustível ou retrofit de eficiência — sob o FuelEU Maritime, o EU ETS Maritime, a Estratégia GEE IMO 2023 (MEPC.377(80)) e os Princípios de Poseidon. A KDS Offshore, spin-off de 2016 do Instituto Superior Técnico (Lisboa), fundamenta cada recomendação em hidrodinâmica quantificada por CFD, otimização de viagem revista por pares (IMDC 2024, ICCAS 2024) e modelação well-to-wake de ciclo de vida.',
    overview: [
      'A descarbonização marítima já não é uma abstração estratégica. O FuelEU Maritime (Regulamento (UE) 2023/1805), a extensão do EU ETS ao transporte marítimo, a Estratégia GEE IMO 2023 (MEPC.377(80)) — próximo de zero líquido até cerca de 2050, com 20–30% de redução absoluta até 2030 e 70–80% até 2040 em base well-to-wake — e os Princípios de Poseidon impõem obrigações concretas e datadas a armadores, operadores, autoridades portuárias e financiadores. A pergunta para o operador já não é se descarbonizar. É qual o caminho que fecha em engenharia, prazo e CAPEX, e como é que esse caminho é defendido perante o organismo reconhecido, a administração de bandeira e o banco financiador.',
      'A KDS Offshore trabalha o lado técnico de ponta a ponta: linhas de base operacionais de emissões well-to-wake segundo a metodologia IMO DCS / CII; viabilidade de combustíveis alternativos em bateria, híbrido, LNG, metanol, amoníaco e biocombustível de segunda geração; dimensionamento de eletrificação e powertrain híbrido; retrofits de eficiência energética (casco, hélice, apêndices, calor residual); projeto de fornecimento de energia em terra (OPS / cold-ironing); e otimização operacional — trim, velocidade, weather routing — através do nosso Ship Operation Optimisation System (SOOS) publicado. Cada recomendação está fundamentada em hidrodinâmica quantificada por CFD, metodologia revista por pares e modelação GEE de ciclo de vida. Nenhuma narrativa ESG genérica.',
      'O trabalho de referência inclui o SEAPOWER 1500 — uma lancha-piloto de 15 m, totalmente elétrica, com banco de baterias lítio-ião de 664 kWh, dimensionada por CFD pré-construção em 2025 — o estudo OPS de fornecimento de energia em terra para a autoridade portuária da Madeira APRAM, entregue em parceria com a Future Proman no programa Green Ports Madeira (2023), e a remotorização e aumento de capacidade do catamarã "Belize I" para a Nautiber (2023), entregue dentro do prazo. Cada projeto começa com uma linha de base operacional medida e termina com um caminho documentado que o operador pode defender perante reguladores e financiadores.',
      'A espinha dorsal metodológica é publicada, não opacidade proprietária. Em 2024 o sócio Sérgio Ribeiro e Silva e Miguel Bento Moreira (IST/CENTEC) apresentaram o programa de otimização SOOS na 15.ª International Marine Design Conference (IMDC 2024, Amesterdão, paper 832) e novamente no ICCAS 2024 (RINA, Génova). Num porta-contentores geared de 712 TEU em condições atlânticas sintéticas — vento oeste a 23 nós, corrente west-going a 2,14 nós, vaga oeste regular de 1,25 m / 10 s, perna de 215 km — o SOOS convergiu em menos de 100 epochs de Vectorized Simulated Annealing e reduziu o consumo de combustível de viagem em 8–9% face à rota direta da grande circunferência, mantendo a poupança mesmo com um obstáculo (ilha, corredor marítimo) inserido no espaço de procura. Combinado com 25+ anos de investigação hidrodinâmica do sócio no IST e 364+ citações no Google Scholar, o histórico técnico é auditável, não promocional.',
      'A regra da KDS: física primeiro, otimização depois, narrativa por último. CAPEX, OPEX, GEE, maturidade tecnológica e disponibilidade de reabastecimento são pontuados lado a lado para os caminhos candidatos — o operador recebe uma matriz comparativa e uma recomendação escrita, não um discurso de venda. Quando um caminho não fecha nos números, dizemos isso na viabilidade, não depois do aço estar a ser cortado.',
    ],
    whatWeDeliver: [
      'Linha de base operacional de emissões (well-to-wake) — conforme DCS / CII / MRV',
      'Matriz comparativa de caminhos de descarbonização (bateria / híbrido / LNG / metanol / amoníaco / biocombustível / retrofit de eficiência)',
      'Estudo de viabilidade de combustíveis alternativos com mapa de disponibilidade de reabastecimento',
      'Dimensionamento de eletrificação e powertrain híbrido (bateria, genset, célula de combustível)',
      'Especificação de retrofit de eficiência energética (casco, hélice, apêndices, calor residual)',
      'Projeto OPS / energia em terra para autoridades portuárias e operadores',
      'Curvas de resistência e propulsão quantificadas por CFD ao longo do envelope operacional',
      'Implantação de otimização de viagem (SOOS — trim, velocidade, weather routing)',
      'Avaliação de conformidade FuelEU Maritime / IMO 2050 / EU ETS / CII',
      'Modelo GEE de ciclo de vida com envelope CAPEX / OPEX e análise de break-even',
      'Anexos técnicos para divulgação Princípios de Poseidon / Sea Cargo Charter',
    ],
    outcomes: [
      { metric: '100%', label: 'propulsão elétrica entregue', context: 'SEAPOWER 1500 — lancha-piloto de 15 m, 664 kWh lítio-ião, dimensionada por CFD pré-construção (SeaPower, 2025)' },
      { metric: '8–9%', label: 'combustível poupado em caso atlântico', context: 'porta-contentores geared de 712 TEU, programa SOOS — revisão por pares IMDC 2024 + ICCAS 2024' },
      { metric: '<100 epochs', label: 'convergência do otimizador', context: 'Vectorized Simulated Annealing dentro do stack SOOS — resposta em tempo real apta para operação' },
      { metric: 'OPS', label: 'projeto de energia em terra para autoridade portuária da Madeira', context: 'Green Ports Madeira / APRAM via Future Proman (2023)' },
      { metric: '6 caminhos', label: 'comparados por estudo de frota', context: 'bateria, híbrido, LNG, metanol, amoníaco, biocombustível — pontuados em CAPEX, OPEX, GEE, TRL, disponibilidade de reabastecimento' },
      { metric: '30%', label: 'meta IMO 2030 de redução de GEE (well-to-wake)', context: 'MEPC.377(80) — o piso do caminho operacional para o qual fazemos engenharia' },
    ],
    whenToUse: [
      'Lacuna de conformidade FuelEU Maritime, EU ETS Maritime ou CII que precisa de resposta técnica com metodologia auditável — não de um relatório ESG vistoso.',
      'Decisão de renovação ou remotorização de frota onde bateria, híbrido, metanol, amoníaco e biocombustível são todos candidatos e o operador precisa de uma matriz comparativa defensável.',
      'Exigência de uma autoridade portuária ou afretador para energia em terra (OPS / cold-ironing), prontidão para combustível alternativo ou reporte medido well-to-wake.',
      'Pedido de um financiador, organismo reconhecido ou off-taker para anexo técnico defensável em finança verde, Princípios de Poseidon ou Sea Cargo Charter.',
      'Verificação EEXI de navio existente que precisa de uma curva de resistência em água calma validada por CFD e sanity check Holtrop-Mennen.',
      'Downgrade de rating CII (D ou E) que exige plano corretivo com medidas operacionais + retrofit pontuadas contra o relógio regulatório.',
      'Embarcação prevista para docagem de rotina onde o operador quer agregar um retrofit de eficiência (regime de limpeza de casco, otimização de hélice, redesenho de apêndices) ao âmbito existente.',
    ],
    whenNotToUse: [
      'Um briefing puramente de marketing ESG sem linha de base operacional (somos engenheiros, não consultores de comunicação).',
      'Um ciclo de operação em que o operador ainda não mediu ou estimou consumo de combustível — comece com uma semana de registo a bordo primeiro.',
      'Um pedido para "escolher um combustível" sem contexto de embarcação, rota ou afretamento — a resposta depende do perfil operacional que ainda não vimos.',
    ],
    regulatoryContext: [
      { name: 'FuelEU Maritime (Regulamento (UE) 2023/1805)', note: 'Limites anuais de intensidade GEE na energia usada a bordo de navios que negoceiam na UE desde 1 de janeiro de 2025; aperta por etapas até −80% em 2050.', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32023R1805' },
      { name: 'EU ETS Maritime (extensão 2024)', note: 'Licenças de CO₂ para navios ≥5.000 GT que escalam em portos da UE; phase-in de 40% em 2024, 70% em 2025, 100% em 2026.' },
      { name: 'Estratégia GEE IMO 2023 (MEPC.377(80))', note: 'Próximo de zero líquido até cerca de 2050; redução absoluta de 20–30% até 2030; 70–80% até 2040; base well-to-wake.' },
      { name: 'CII IMO (Resolução MEPC.336(76))', note: 'Rating anual de intensidade de carbono A–E; plano corretivo exigido para D (3 anos consecutivos) ou E (um único ano).' },
      { name: 'EEXI IMO (Resolução MEPC.328(76))', note: 'Energy Efficiency Existing Ship Index — verificação única na primeira vistoria após 1 de janeiro de 2023.' },
      { name: 'EU MRV (Regulamento (UE) 2015/757)', note: 'Monitorização, reporte e verificação de emissões de CO₂ em navios que negoceiam na UE; alimenta FuelEU + EU ETS.' },
      { name: 'IMO DCS (MEPC.278(70))', note: 'Data Collection System sobre consumo de fuel oil — alimenta o cálculo CII.' },
      { name: 'Princípios de Poseidon', note: 'Quadro de divulgação de alinhamento climático liderado por bancos; anexo técnico exigido para financiamento.' },
      { name: 'Sea Cargo Charter', note: 'Equivalente liderado por afretadores aos Princípios de Poseidon — divulgação de emissões para donos de carga.' },
      { name: 'ISO 19030 — monitorização de desempenho e consumo de combustível', note: 'Metodologia de monitorização de desempenho em serviço; sustenta a verificação de retrofit de eficiência.' },
    ],
    vesselTypes: [
      'Lanchas-piloto, embarcações portuárias, frotas de autoridade portuária — SEAPOWER 1500, APRAM',
      'Ferries e passageiros de cabotagem (RoPax incluídos)',
      'Porta-contentores e feeders — caso de validação SOOS publicado',
      'Tankers e graneleiros (foco EEXI + CII)',
      'Rebocadores e embarcações de apoio offshore (OSVs)',
      'Cruzeiros (eficiência operacional, retrofit OPS, upgrade de amarração MEG4)',
      'Barcos de trabalho, aquacultura e embarcações de investigação científica',
      'Conversores de energia das ondas e embarcações de apoio à eólica flutuante',
    ],
    publications: [
      {
        label:
          'Ribeiro e Silva, S., Bento Moreira, M. (2024). An optimisation-based approach to reduce fuel consumption and emissions from shipping navigation. 15.ª International Marine Design Conference (IMDC 2024), Amesterdão.',
        url: 'https://doi.org/10.59490/imdc.2024.832',
      },
      {
        label:
          'Ribeiro e Silva, S., Bento Moreira, M. (2024). An integrated real-time Ship Operation Optimisation System (SOOS) to reduce fuel consumption and emissions from shipping navigation and port calls. ICCAS 2024, RINA, Génova.',
      },
      {
        label:
          'Ribeiro e Silva, S., Varela, J. M. (2022). Ship Gyroscopic Roll Stabilisation. OMAE 2022, ASME, Hamburgo. Paper OMAE2022-7953 — metodologia BEM com correções de velocidade + ST que informa decisões de retrofit de eficiência.',
      },
      {
        label:
          'Costa, P., Ribeiro e Silva, S., et al. (2018). Atmospheric emissions from pellet energy supply chain: a Portuguese case study. Air Quality, Atmosphere & Health, 11(2), 197–207. Histórico em contabilização de emissões well-to-wake.',
      },
      {
        label:
          'Ribeiro e Silva, S. et al. (2021). Model testing of floating wave energy converter with internal U-shaped oscillating water column. Energy Conversion and Management, Vol. 240 — metodologia hidrodinâmica/energética acoplada que sustenta o trabalho de descarbonização por renováveis.',
      },
    ],
    methodology: [
      {
        t: 'Baseline & fronteira',
        d: 'Definir o perfil operacional — viagens, tempo em porto, mistura de combustíveis, condições ambientais, restrições de afretamento. Construir a linha de base de emissões well-to-wake segundo a metodologia IMO DCS / CII / MRV. Registo a bordo quando os dados ainda não existem.',
      },
      {
        t: 'Opções de caminho',
        d: 'Pontuar bateria, híbrido, LNG, metanol, amoníaco, biocombustível e opções de retrofit de eficiência face a CAPEX, OPEX, redução de GEE, maturidade tecnológica, disponibilidade de reabastecimento, e o relógio regulatório (metas CII, limites FuelEU, phase-in EU ETS). O resultado é uma matriz comparativa defensável que o operador pode entregar ao conselho.',
      },
      {
        t: 'Dimensionamento de engenharia',
        d: 'Para o caminho selecionado, engenharia completa: powertrain, bateria, sistema de combustível, integração, encaixe estrutural, impacto em peso e estabilidade, atualizações de GA, esquemas elétricos unifilares, verificação contra regras de classe. CFD onde altera a resposta (casco, propulsão, apêndices, arranjo de ligação OPS).',
      },
      {
        t: 'Otimização operacional',
        d: 'Implantar o SOOS onde a rota não é trivial: weather routing por Vectorized Simulated Annealing sobre potência em água calma derivada de CFD, cargas de vento semi-empíricas, resistência adicionada em ondas Salvesen-1978, trim através do centro de gravidade. Testado no caso de referência SOOS de 712 TEU com poupança de combustível de 8–9%.',
      },
      {
        t: 'Conformidade & financiamento',
        d: 'Preparar as submissões técnicas FuelEU Maritime, EU ETS, IMO 2050, CII e Princípios de Poseidon. Ligação com o RO (DNV / BV / RINA / LR) e administração de bandeira. Entregar ao operador o anexo técnico que o financiador precisa para finança verde.',
      },
      {
        t: 'Monitorização em serviço',
        d: 'Quadro de monitorização de desempenho ISO 19030 com o modelo CFD como âncora física. Benchmarking contínuo contra a linha de base; deriva sinalizada despoleta recomendação de limpeza de casco ou re-baseline. Opcional — tipicamente combinado com o nosso serviço de Gémeo Digital.',
      },
    ],
    tools: [
      'STAR-CCM+ / OpenFOAM / Simerics MP — CFD',
      'WAMIT — difração / radiação, cargas estruturais OPS',
      'Rhino + Grasshopper — projeto paramétrico de powertrain e casco',
      'Holtrop-Mennen — sanity check de resistência empírica',
      'Salvesen-1978 — resistência adicionada em ondas',
      'SOOS · Vectorized Simulated Annealing (KDS, revisto por pares)',
      'Ship@Sea — código proprietário KDS de seakeeping no domínio temporal',
      'Metodologia FuelEU Maritime / IMO DCS / CII',
      'Calculadora EU ETS marítima',
      'Templates de divulgação Princípios de Poseidon & Sea Cargo Charter',
      'MATLAB / Simulink — dimensionamento de powertrain, lógica de controlo',
      'Python · NumPy · SciPy · pandas — modelação GEE de ciclo de vida',
      'ISO 19030 — monitorização de desempenho em serviço',
    ],
    cases: [
      { title: 'SEAPOWER 1500 — lancha-piloto 100% elétrica de 15 m (dimensionada por CFD pré-construção)', client: 'SeaPower', year: '2025' },
      { title: 'Green Ports Madeira — projeto OPS / energia em terra para frota da APRAM', client: 'APRAM via Future Proman', year: '2023' },
      { title: '"Belize I" — remotorização e aumento de capacidade do catamarã', client: 'Nautiber', year: '2023' },
      { title: 'SOOS — otimização de viagem em tempo real (porta-contentores 712 TEU, 8–9% de poupança)', client: 'KDS R&D · IST/CENTEC', year: '2024' },
    ],
    faq: [
      {
        q: 'Que caminho de combustível é o certo para a minha frota?',
        a: 'Não há resposta universal. Partimos do vosso perfil operacional — duração das viagens, tempo em porto, disponibilidade de reabastecimento, restrições de afretamento, envelope CAPEX, e o relógio regulatório face à vossa exposição CII / FuelEU / EU ETS — e pontuamos bateria, híbrido, LNG, metanol, amoníaco e biocombustível em função das vossas especificidades. O resultado é uma matriz comparativa e uma recomendação escrita, não um discurso de venda.',
      },
      {
        q: 'Estão certificados para reporte FuelEU Maritime?',
        a: 'Seguimos a metodologia FuelEU Maritime publicada (Regulamento (UE) 2023/1805) e o quadro de reporte IMO DCS, e entregamos avaliações no formato que as administrações de bandeira e os organismos reconhecidos esperam. A certificação final FuelEU é emitida pelo RO (DNV, BV, RINA, LR); preparamos a submissão técnica, o cálculo well-to-wake e as respostas às questões do RO.',
      },
      {
        q: 'Conseguem fazer retrofit em navios existentes, ou apenas projetar novas construções?',
        a: 'Ambos. Para a maioria dos operadores o retrofit é mais económico do que a nova construção a curto prazo. Já remotorizámos lanchas-piloto, convertemos catamarãs (Belize I) e especificámos retrofits híbridos. Cada projeto começa com um estudo de viabilidade que cobre encaixe estrutural, balanço de pesos, autonomia, aprovação regulamentar e a poupança operacional face ao CAPEX. Dizemos não quando o caso não fecha.',
      },
      {
        q: 'Como tratam um salto de rating CII de D para C?',
        a: 'Um downgrade CII exige um plano corretivo, não um comunicado de imprensa. Fazemos baseline da embarcação contra a trajetória, identificamos as medidas de menor CAPEX com poupança verificada (otimização de trim, regime de limpeza de casco, otimização de hélice, weather routing via SOOS) e empilhamos com opções de retrofit (recuperação de calor residual, shaft generator, híbrido). Cada medida é pontuada em poupança de engenharia + lacuna de conformidade fechada + payback. Documentamos o plano no formato que o RO aceita.',
      },
      {
        q: 'As poupanças podem ser medidas antes do retrofit, ou só depois?',
        a: 'Ambas. Antes do retrofit: as curvas de potência derivadas de CFD ao longo do envelope operacional alimentam um gémeo digital que projeta poupanças sob condições operacionais históricas, com bandas de incerteza documentadas. Depois do retrofit: a monitorização em serviço ISO 19030 mede a poupança realizada face à mesma linha de base, com o modelo CFD como âncora física. O operador recebe uma comparação quantificada antes / depois que o financiador pode auditar.',
      },
      {
        q: 'Cobrem projeto OPS / fornecimento de energia em terra para autoridades portuárias?',
        a: 'Sim. Trabalho de referência: o programa Green Ports Madeira com a frota da autoridade portuária APRAM, em parceria com a Future Proman (2023). O âmbito inclui tipicamente projeto de arranjo de ligação, interface elétrica do lado da embarcação, dimensionamento da subestação do lado do porto, interface regulamentar com a administração de bandeira, e a contabilização GEE que mostra a poupança face à linha de base EU ETS / FuelEU.',
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
      'Gémeos digitais baseados em física, monitorização de desempenho data-driven e estratégia de digitalização para embarcações, frotas e operações offshore. Metodologia revista por pares (IMDC 2024, ICCAS 2024), construída segundo ISO/IEC 23247 e ISO 19030.',
    tldr:
      'Um gémeo digital marítimo é um modelo preditivo baseado em física — hidrodinâmica derivada de CFD acoplada a fluxos de sensores a bordo — que responde a perguntas operacionais "e se" (trim, velocidade, rota, retrofit, trajetória CII) sem ensaios a bordo. A KDS Offshore constrói gémeos segundo ISO/IEC 23247 + ISO 19030, calibrados contra medições com resíduos documentados. A mesma física Ship@Sea que dimensionou a sua embarcação durante o projeto continua na operação como preditor calibrado de resistência, consumo e CII. Otimização de viagem em tempo real por Vectorized Simulated Annealing, publicada por Ribeiro e Silva & Bento Moreira (IST/CENTEC) no IMDC 2024 (paper 832) e ICCAS 2024.',
    overview: [
      'A maioria dos "gémeos digitais" marítimos hoje vendidos são dashboards sobre fluxos SCADA. Úteis para consciência situacional, mas não conseguem responder à pergunta que o operador realmente tem: "e se mudarmos o trim em um grau? E se baixarmos meio nó? E se desviarmos desta frente? E se fizermos retrofit a este hélice?" Responder a isso exige um modelo baseado em física — e essa é a camada que a KDS Offshore constrói.',
      'Acoplamos modelos hidrodinâmicos derivados de CFD a fluxos de sensores a bordo para produzir um gémeo que vive ao lado dos dados, não no lugar deles. O mesmo modelo de física que dimensionou a embarcação durante o projeto continua na operação como preditor calibrado de resistência, consumo de combustível, sensibilidade ao trim e trajetória CII. A arquitetura segue ISO/IEC 23247 (Digital Twin Framework) para a estratificação modelo / dados / atores, e ISO 19030 (monitorização de desempenho e consumo de combustível em navio) para o ciclo de calibração em serviço. Resíduos documentados e bandas de incerteza substituem confiança caixa-preta.',
      'O sócio Sérgio Ribeiro e Silva (Doutorado IST, MSc UCL, 364+ citações Google Scholar, h-index 10) constrói simuladores de seakeeping e manobra baseados em física desde o seu doutoramento no IST em 2005 sobre rolamento paramétrico. O código interno Ship@Sea no domínio temporal é o descendente operacional dessa linha de trabalho, e carrega o mesmo pedigree de validação (rolamento paramétrico: Ribeiro e Silva 2005, Ocean Engineering 2013). O gémeo que recebe não é o primeiro produto de uma Series-A. É uma codebase hidrodinâmica de 20 anos ligada aos vossos sensores.',
      'O trabalho de referência inclui o SEAPOWER 1500 — uma lancha-piloto de 15 m totalmente elétrica cujo gémeo digital foi construído antes do aço ser cortado (2025) — e o Ship Operation Optimisation System (SOOS) em tempo real que reduz consumo de combustível e emissões em navegação e em escalas portuárias. O SOOS combina uma curva de potência em água calma derivada de CFD, cargas de vento semi-empíricas, o modelo Salvesen-1978 de resistência adicionada em ondas, trim através do centro de gravidade, e um otimizador de weather routing por Vectorized Simulated Annealing. Num porta-contentores geared de 712 TEU em condições atlânticas sintéticas, o SOOS amostrou uma população de 200 rotas candidatas, convergiu em menos de 100 epochs (limite 750), e reduziu o consumo de combustível de viagem em 8–9% face à rota direta da grande circunferência, mantendo a poupança mesmo com um obstáculo (ilha, corredor marítimo) inserido no espaço de procura. Publicado no IMDC 2024 (Amesterdão, paper 832) e ICCAS 2024 (RINA, Génova). O otimizador não tem hiperparâmetros que a ponte tenha de ajustar.',
      'A metodologia é publicada, não opacidade proprietária. Os dois papers subjacentes documentam o algoritmo de otimização, o modelo hidrodinâmico, o contexto regulatório (objetivo de conformidade CII) e o caso de validação. Os operadores recebem um gémeo que podem auditar, as sociedades classificadoras recebem um modelo que podem rever, e os financiadores recebem um quadro que podem defender numa divulgação Princípios de Poseidon. Caixas pretas não sobrevivem a uma conversa EEXI / CII.',
    ],
    whatWeDeliver: [
      'Gémeo digital baseado em física (derivado de CFD, calibrado contra sensores a bordo)',
      'Dashboard de desempenho em tempo real com resíduos documentados',
      'Modelos preditivos de trim, velocidade e consumo ao longo do envelope operacional',
      'Implantação de otimização de viagem (SOOS, weather routing por Vectorized Simulated Annealing)',
      'Arquitetura de sensores e especificação de instrumentação (conjunto mínimo viável)',
      'Quadro de benchmarking de frota com métricas de desempenho cross-vessel',
      'Ferramentas de apoio à decisão para o operador (conselheiro de trim, curva velocidade-consumo, estimador de impacto de retrofit)',
      'Previsão CII / FuelEU e projeção de trajetória de rating',
      'Pacote de verificação EEXI (curvas de potência validadas por CFD)',
      'Relatório de monitorização de desempenho em serviço ISO 19030',
      'Metodologia revista por pares por trás de cada afirmação',
    ],
    outcomes: [
      { metric: 'Pré-construção', label: 'gémeo entregue antes do aço cortado', context: 'SEAPOWER 1500 — lancha-piloto 100% elétrica de 15 m, SeaPower (2025)' },
      { metric: '8–9%', label: 'combustível poupado em viagem (caso atlântico sintético)', context: 'porta-contentores geared de 712 TEU, programa SOOS, IMDC 2024 (paper 832) + ICCAS 2024' },
      { metric: '<100 epochs', label: 'convergência do otimizador', context: 'Vectorized Simulated Annealing sobre 200 rotas candidatas; limite era 750 epochs' },
      { metric: '0', label: 'hiperparâmetros que a ponte tem de ajustar', context: 'apoio à decisão em tempo real apto para operação — por design' },
      { metric: 'Mínimo viável', label: 'conjunto de sensores: GPS, IMU, caudal, RPM do veio, ambiente', context: 'mais simples do que a norma do mercado — menos modos de falha, retrofit mais rápido' },
      { metric: 'ISO/IEC 23247', label: '+ ISO 19030 normas de arquitetura', context: 'estratificação modelo / dados / atores + convenções de monitorização em serviço' },
    ],
    whenToUse: [
      'Nova construção onde o modelo CFD da fase de projeto pode passar para o gémeo operacional desde o primeiro dia — sem segundo modelo, sem lacuna de calibração.',
      'Navio existente que precisa de conselheiro de trim, curva velocidade-consumo ou estimador de impacto de retrofit — a baseline CFD fecha o ciclo que os sensores não conseguem.',
      'Operador de frota que precisa de um único quadro de benchmarking ao longo de embarcações de idades distintas — mesma arquitetura de modelo, calibração específica por embarcação.',
      'Projeto-piloto antes de um rollout de frota plurianual — a KDS entrega um gémeo a funcionar em semanas, não meses.',
      'Verificação EEXI / EEDI de sociedade classificadora que precisa de curvas de potência validadas por CFD ao longo do envelope operacional.',
      'Armador a enfrentar downgrade de rating CII que precisa de evidência operacional de ação corretiva (implantação SOOS, otimização de trim, trigger de limpeza de casco).',
      'Negociação de charter-party onde o operador precisa de defender a poupança de combustível projetada de um retrofit proposto, antes da alteração do ativo.',
    ],
    whenNotToUse: [
      'Trabalho puro de engenharia de dados (recolher e visualizar fluxos SCADA) — use um fornecedor DAQ.',
      'Modelo puramente ML / regressão sem âncora física — preciso dentro do envelope de treino, perigoso fora dele. Construímos modelos híbridos, não ajustes de curva.',
      'Embarcação cujo operador não está disposto a partilhar pelo menos 90 dias de dados operacionais para calibração — o gémeo precisa de um ciclo de calibração para ser defensável.',
    ],
    regulatoryContext: [
      { name: 'ISO/IEC 23247 (Digital Twin Framework for Manufacturing / Marine)', note: 'Convenções de arquitetura modelo / dados / atores para gémeos apta para produção.' },
      { name: 'ISO 19030 — monitorização de desempenho e consumo de combustível', note: 'Metodologia de desempenho em serviço; sustenta o ciclo de calibração do gémeo e a verificação de retrofit.' },
      { name: 'CII IMO (Resolução MEPC.336(76))', note: 'Eficiência operacional derivada do gémeo alimenta a previsão CII e melhoria de trajetória de rating.' },
      { name: 'EEXI IMO (Resolução MEPC.328(76))', note: 'Existing Ship Energy Efficiency Index; gémeo validado por CFD suporta verificação na primeira vistoria.' },
      { name: 'EU MRV (Regulamento (UE) 2015/757)', note: 'Previsões de consumo derivadas do gémeo suportam reporte MRV e verificação de emissões.' },
      { name: 'FuelEU Maritime (Regulamento (UE) 2023/1805)', note: 'Poupança de viagem projetada pelo gémeo alimenta a previsão de conformidade FuelEU.', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32023R1805' },
      { name: 'IMO MSC.428(98) — Maritime Cyber Risk Management', note: 'A integração do gémeo com sistemas de bordo tem de satisfazer o quadro de gestão de segurança contra risco cibernético.' },
      { name: 'NIST SP 800-160 — Systems Security Engineering', note: 'Referência para a arquitetura ao nível de sistema do gémeo e para a sua confiabilidade.' },
      { name: 'IMO MSC-MEPC.2/Circ.12 — quadro de testes MASS (autónomos)', note: 'Para gémeos digitais de embarcações não tripuladas, a evidência de operacionalidade tem de satisfazer o processo de avaliação MASS.' },
    ],
    vesselTypes: [
      'Lanchas-piloto e embarcações portuárias (SEAPOWER 1500 — projeto completo + gémeo operacional)',
      'Ferries, RoPax e passageiros de cabotagem',
      'Porta-contentores e feeders (caso de validação SOOS publicado — 712 TEU)',
      'Graneleiros e tankers (otimização de viagem, verificação EEXI)',
      'Cruzeiros (aconselhamento de trim e velocidade, otimização de escalas portuárias)',
      'Rebocadores, OSVs e barcos de trabalho (perfil de duty-cycle)',
      'Instalações flutuantes de energias renováveis (eólica, ondas) — monitorização acoplada',
      'Frotas de idades distintas que precisam de benchmarking entre embarcações',
    ],
    publications: [
      {
        label:
          'Ribeiro e Silva, S., Bento Moreira, M. (2024). An optimisation-based approach to reduce fuel consumption and emissions from shipping navigation. 15.ª International Marine Design Conference (IMDC 2024), Amesterdão — paper 832.',
        url: 'https://doi.org/10.59490/imdc.2024.832',
      },
      {
        label:
          'Ribeiro e Silva, S., Bento Moreira, M. (2024). An integrated real-time Ship Operation Optimisation System (SOOS) to reduce fuel consumption and emissions from shipping navigation and port calls. ICCAS 2024, RINA, Génova.',
      },
      {
        label:
          'Ribeiro e Silva, S., Varela, J. M. (2022). Ship Gyroscopic Roll Stabilisation. OMAE 2022, ASME, Hamburgo. Paper OMAE2022-7953 — metodologia BEM com correções de velocidade + ST que informa calibração de gémeos de monitorização em embarcações pequenas.',
      },
      {
        label:
          'Ribeiro e Silva, S. et al. (2013). Prediction of parametric rolling in waves with time-domain non-linear strip theory. Ocean Engineering, Vol. 72 — pedigree de validação do código Ship@Sea que ancora o gémeo operacional.',
      },
      {
        label:
          'Ribeiro e Silva, S. (2005). Parametrically excited roll in regular and irregular head seas. International Shipbuilding Progress, Vol. 52 — metodologia fundacional de seakeeping no domínio temporal em uso contínuo na KDS.',
      },
    ],
    methodology: [
      {
        t: 'Baseline derivada de CFD',
        d: 'Curvas de resistência e propulsão obtidas por CFD (Simerics MP, OpenFOAM ou STAR-CCM+) ao longo do envelope operacional — água calma, trim livre, calado livre, várias condições de carga. Sanity check contra Holtrop-Mennen. Esta é a camada de física do gémeo.',
      },
      {
        t: 'Seakeeping & resistência adicionada em ondas',
        d: 'Modelo de resistência adicionada por teoria de faixas Salvesen-1978 acoplado ao núcleo de seakeeping Ship@Sea no domínio temporal. Forças de onda e resistência adicionada induzida por movimento alimentam o preditor operacional de consumo sob meteoceânica real.',
      },
      {
        t: 'Arquitetura de sensores',
        d: 'Especificar o conjunto mínimo viável de sensores — RPM do veio, binário (quando disponível), GPS, caudal de combustível, IMU, pacote ambiental — que alimenta um gémeo útil. Privilegiamos a simplicidade; um sensor extra que não acrescenta nada é mais um modo de falha em serviço.',
      },
      {
        t: 'Integração e calibração do gémeo',
        d: 'Acoplar o modelo derivado de CFD aos fluxos de dados em direto. Ciclo de calibração contra medições a bordo ao longo de 90+ dias, com resíduos documentados e bandas de incerteza. Convenções ISO 19030 para extração de tendência de desempenho.',
      },
      {
        t: 'Otimização de viagem (SOOS)',
        d: 'Onde a rota não é trivial: o SOOS implanta um otimizador Vectorized Simulated Annealing sobre 200 variantes de rota candidatas, convergindo em <100 epochs em hardware comum. Física cara pré-computada offline + re-avaliação barata online significa que o re-planeamento acontece em segundos, não minutos.',
      },
      {
        t: 'Camada de apoio à decisão',
        d: 'Saídas para o operador: conselheiro de trim, curva velocidade-consumo, comparação de viagens, estimador de impacto de retrofit, projeção de trajetória CII. O modelo responde a perguntas; o operador decide. Sem piloto automático, sem surpresas de automação.',
      },
    ],
    tools: [
      'Simerics MP — baseline CFD (referência da lancha-piloto elétrica)',
      'OpenFOAM / STAR-CCM+ — CFD (resistência e propulsão de produção)',
      'WAMIT — difração / radiação, geração de RAOs para o núcleo de seakeeping',
      'Ship@Sea (proprietário KDS, FORTRAN) — seakeeping não-linear no domínio temporal',
      'SOOS (KDS, revisto por pares) — weather routing por Vectorized Simulated Annealing',
      'Salvesen-1978 — resistência adicionada em ondas',
      'Holtrop-Mennen — sanity check de resistência empírica',
      'Rhino + Grasshopper / Orca3D — geometria',
      'Python · NumPy · SciPy · pandas · scikit-learn — processamento de dados & calibração',
      'MATLAB / Simulink — modelos de controlo e espaço de estados',
      'InfluxDB / Grafana / TimescaleDB — séries temporais e dashboards do operador',
      'ISO/IEC 23247 — convenções de arquitetura de gémeo digital',
      'ISO 19030 — metodologia de monitorização de desempenho em serviço',
      'Metodologia de otimização publicada em IMDC 2024 / ICCAS 2024',
    ],
    cases: [
      { title: 'SEAPOWER 1500 — gémeo digital derivado de CFD, entregue pré-construção', client: 'SeaPower', year: '2025' },
      { title: 'SOOS — otimização de viagem em tempo real (porta-contentores 712 TEU, 8–9% de poupança)', client: 'KDS R&D · IST/CENTEC', year: '2024' },
      { title: 'IMDC 2024 paper 832 — metodologia publicada para otimização ao nível de frota', client: 'International Marine Design Conference, Amesterdão', year: '2024' },
      { title: 'ICCAS 2024 — apresentação do programa SOOS', client: 'RINA, Génova', year: '2024' },
      { title: '"Belize I" — quadro de monitorização de desempenho em catamarã remotorizado', client: 'Nautiber', year: '2023' },
    ],
    faq: [
      {
        q: 'Isto é apenas mais um dashboard SCADA?',
        a: 'Não. Os dashboards SCADA visualizam o que os sensores medem. Um gémeo baseado em física consegue responder a "e se mudarmos o trim em um grau?" sem ensaios a bordo — porque o modelo derivado de CFD preenche a lacuna que os sensores não conseguem ver. O modelo vive ao lado dos dados, não no lugar deles.',
      },
      {
        q: 'Quanta instrumentação de sensores preciso de instalar?',
        a: 'Menos do que a maioria dos fornecedores vos dirá. Uma configuração típica corre com GPS, IMU, caudal de combustível, RPM do veio e um pequeno pacote ambiental. O modelo derivado de CFD infere o que os sensores não conseguem medir diretamente (componentes de resistência, eficiência propulsiva em pontos fora de design), pelo que podemos entregar um gémeo útil com um conjunto mínimo de sensores e adicionar instrumentação só onde realmente melhora a calibração.',
      },
      {
        q: 'O gémeo pode correr em navios existentes, ou apenas em novas construções?',
        a: 'Ambos. Para novas construções acoplamos o CFD da fase de projeto ao gémeo operacional desde o primeiro dia. Para navios existentes corremos uma baseline CFD pontual contra o casco como construído e depois ligamos o fluxo de dados em direto. O caminho de retrofit demora semanas, não meses.',
      },
      {
        q: 'O gémeo vai substituir o nosso programa de provas de mar?',
        a: 'Não, e não vamos fingir o contrário. As provas de mar continuam a ser a medição autoritária no ponto de projeto. O gémeo estende esse ponto a uma previsão contínua ao longo de todo o envelope operacional — velocidades, calados, rumos, estados de mar que a prova não cobre economicamente. O gémeo é calibrado contra a prova, não um substituto dela.',
      },
      {
        q: 'Como é que o gémeo alimenta a previsão CII?',
        a: 'A curva de potência derivada de CFD mais o otimizador SOOS projetam o consumo de combustível sobre o perfil de viagem planeado. Agregado sobre um ano de reporte MRV, isso produz uma trajetória CII com bandas de confiança. O operador vê o rating que vai atingir se nada mudar, e o rating que vai atingir sob cada medida corretiva (otimização de trim, limpeza de casco, routing SOOS, retrofit) — quantificado, antes do ano terminar.',
      },
      {
        q: 'Quem é dono do modelo e dos dados?',
        a: 'O operador. A KDS entrega a baseline CFD, os scripts de calibração, o código de otimização e os dashboards sob licença padrão. Não fechamos numa SaaS que controlamos — se quiserem migrar o gémeo para uma infraestrutura diferente no próximo ano, os artefactos são vossos.',
      },
      {
        q: 'Em que é que isto difere das ofertas de gémeo digital dos principais OEM?',
        a: 'Os OEM vendem gémeos ligados ao seu próprio equipamento e à sua própria plataforma — bom quando a frota é single-OEM, problemático quando não é. A KDS é agnóstica em relação a OEM e physics-first: a arquitetura do modelo é publicada (ISO/IEC 23247 + ISO 19030, metodologia IMDC 2024 / ICCAS 2024), funciona em frotas mistas OEM, e é auditável pelo operador, pela sociedade classificadora e pelo financiador. Sem vendor lock-in.',
      },
    ],
    leadTime: '6–16 semanas',
    serviceType: 'Digitalização',
  },
];
