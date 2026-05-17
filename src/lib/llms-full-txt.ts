// llms-full.txt content per locale.
//
// Long-form concatenated markdown export of public-facing pages, for
// one-shot AI ingestion. Locale-aware to match the rest of the site.
// See docs/i18n-migration.md §5.3 for the hybrid file pattern.

import type { Locale } from '@/i18n/routing';

const SITE_URL = 'https://kdsoffshore.pt';

const EN = `# KDS Offshore — Full content for AI ingestion

> Independent naval architecture, offshore engineering, and decarbonisation consultancy based in Oeiras, Portugal. Founded in 2016 by naval architects from Instituto Superior Técnico (University of Lisbon). The studio works in English and Portuguese. Legal entity: KDS Offshore, Lda., NIPC 514 248 091. Contact: geral@kdsoffshore.pt, +351 213 854 212.

This file concatenates the public-facing pages of kdsoffshore.pt as plain markdown so that an AI assistant can ingest the site in one fetch. It is intentionally kept in sync with the live HTML pages and is updated when those pages change.

A Portuguese-language mirror is available at ${SITE_URL}/llms-full.txt.

---

## /en/  Home

**Engineering the working ocean.**

KDS Offshore designs the vessels, structures, and energy systems that move people, cargo, and power through the most demanding sea states on earth, from a small studio in Oeiras to projects across the Atlantic.

- 120+ projects delivered
- 14 currently active
- 9 years in the studio (founded 2016)
- Currently accepting Q3 2026 engagements

### Featured engagement — 2025

SEAPOWER 1500 — fully electric 15 m pilot boat, sized by CFD before construction.

- Vessel: SeaPower 1500, 15 m HDPE-hull pilot boat
- Method: CFD-derived calm-water resistance and propulsion sizing
- Outcome: 100% electric, 664 kWh lithium-ion battery pack, top speed analysed to 22 kn, ITTC V&V compliant

### What we are good at — nine capabilities

1. **3D Geometrical Modelling** — production-grade CAD geometry for structural, hydrodynamic, and visualisation downstream. Watertight surfaces ready for class-society review.
2. **Naval Architecture & Offshore Engineering Design** — from small craft to major offshore installations. Stability, structural, and intact/damage analysis to international standards.
3. **Hydrodynamic Optimisation** — CFD-driven hull, appendage, and propulsor refinement, reducing fuel burn and emissions in real operating conditions.
4. **Ship Manoeuvrability Prediction** — time-domain simulation of vessel manoeuvring, including operability under metocean conditions.
5. **Mooring System Design** — analysis and design of mooring solutions for fixed and floating offshore structures.
6. **Vessel Conversion Engineering** — feasibility, design, and supervision of vessel conversions and retrofits.
7. **Supervision of New Constructions** — owner's-engineer supervision through detailed design, construction, and sea trials.
8. **Maritime Decarbonisation** — GHG-reduction pathways, alternative-fuel feasibility, FuelEU Maritime / IMO 2050 / EU ETS compliance.
9. **Digitalisation & Digital Twin** — physics-based twins coupling CFD-derived models with onboard sensor streams; published methodology (IMDC 2024, ICCAS 2024).

---

## /en/about  About

**Founded in Lisbon. Quietly opinionated.**

KDS Offshore was founded in 2016 by naval architects from Instituto Superior Técnico, University of Lisbon. We are a partnership (not a consultancy chain) and we have stayed deliberately small so that the principals are the ones doing the engineering you pay for. The studio is located at Rua Ernesto Veiga de Oliveira, Oeiras.

### Four principles

1. **No work we cannot stand behind.** If the brief is wrong, we say so. If the budget is too small, we say so. If a competitor is better placed, we say so. The reputation we are building is worth more than any single fee.
2. **Principals do the engineering.** You hire us, you get us. Junior engineers support, but the model, the report, and the recommendation come from a named principal.
3. **Write everything down.** Every assumption, every input, every result is documented. Six months later, when the operator has a new question, we can answer it because the model is still alive.
4. **Make it less polluting.** Wherever there is a choice between a faster hull and a cleaner hull, we present both. We believe the maritime sector is going to decarbonise.

### Ten years — 2015 → 2026

- **2015** — pre-incorporation engagement with WavEC Offshore Renewables on the GRS Power Platform: parametric rolling and intact stability of a hybrid wind+wave OWC concept (Belmullet, Ireland).
- **2016** — KDS Offshore founded in Oeiras.
- **2021** — OneOcean working boat CFD support during preliminary design and construction.
- **2022** — "Libries" scientific-tourism conversion for Blue Geo Lighthouse.
- **2023** — Belize I remotorisation and capacity uplift (Nautiber); Green Ports Madeira / APRAM OPS design (Future Proman).
- **2024** — "Corvo" probabilistic manoeuvrability assessment in Vila do Porto (Mutualista / Grupo Bensaúde); SOOS methodology papers at IMDC 2024 (Amsterdam) and ICCAS 2024 (Genoa).
- **2025** — SEAPOWER 1500 fully electric pilot boat, sized by CFD; UGEN LCOE assessment along the Portuguese Atlantic façade (EWTEC 2025, Funchal).

### Founder

**Sérgio Ribeiro e Silva** — PhD Instituto Superior Técnico (Lisbon), MSc Naval Architecture University College London, MSc Mechanical Engineering IST. Author of the Ship@Sea time-domain simulation code. Tenured Assistant Professor of Hydrodynamics at IST. Principal naval architect.

---

## /en/services  Services

**Nine disciplines. One studio.**

We work on a curated set of problems we know well: 3D modelling, naval architecture, hydrodynamics, manoeuvrability, mooring, vessel conversion, supervision of new constructions, maritime decarbonisation, and digital-twin development.

### 01 / 09  3D Geometrical Modelling
Production-grade CAD geometry for structural, hydrodynamic, and visualisation downstream. Watertight surfaces ready for class-society review.
**Deliverables:** production-grade CAD, watertight surface model, frames & sections export, class-society-ready files, visualisation renders.
**Lead time:** 2–4 weeks.

### 02 / 09  Naval Architecture & Offshore Engineering Design
From small craft to major offshore installations. Stability, structural, and intact/damage analysis to international standards.
**Deliverables:** stability book, structural FEA report, damage stability analysis, GA & profile drawings, class liaison package.
**Lead time:** 8–16 weeks.

### 03 / 09  Hydrodynamic Optimisation
CFD-driven hull, appendage, and propulsor refinement, reducing fuel burn and emissions in real operating conditions.
**Deliverables:** CFD report (~80 pp), hull form recommendations, resistance & propulsion curves, wake & pressure plots, documented solver setup.
**Lead time:** 6–10 weeks.

### 04 / 09  Ship Manoeuvrability Prediction
Time-domain simulation of vessel manoeuvring, including probabilistic operability assessments and autonomous-manoeuvring envelopes inside ports.
**Reference work:** Corvo and Silver Mary probabilistic operability assessments, Vila do Porto.
**Lead time:** 6–12 weeks.

### 05 / 09  Mooring System Design
Spread, taut-leg, single-point, and dynamic-positioning systems for FPSOs, floating wind, wave-energy converters, aquaculture, and offshore platforms. OrcaFlex, MOSES, ARIANE-3D, fatigue assessment to DNV/API.
**Lead time:** 4–8 weeks.

### 06 / 09  Vessel Conversion Engineering
Remotorisation, repurposing, capacity uplift, hybrid-propulsion retrofit. Belize I, Libries reference projects.
**Lead time:** 4–10 weeks (design).

### 07 / 09  Supervision of New Constructions
Owner's-engineer supervision through detailed design, construction, and sea trials. Independent inspection plan, gate reviews, acceptance testing.
**Lead time:** Project span.

### 08 / 09  Maritime Decarbonisation
GHG-reduction pathways for vessels and offshore assets. Alternative fuels (battery, hybrid, LNG, methanol, ammonia), energy-efficiency retrofits, FuelEU Maritime / IMO 2050 / EU ETS compliance. SEAPOWER 1500, Green Ports Madeira / APRAM OPS, Belize I.
**Lead time:** 4–12 weeks.

### 09 / 09  Digitalisation & Digital Twin
Physics-based digital twins coupling CFD-derived hydrodynamic models with onboard sensor streams. ISO/IEC 23247. Real-time ship-operation optimisation (IMDC 2024 / ICCAS 2024 published methodology).
**Lead time:** 6–16 weeks.

### Tools and methods
STAR-CCM+, OpenFOAM, Simerics MP, WAMIT, Maxsurf, Ansys Aqwa, AUTOHYDRO, SESAM, OrcaFlex, MOSES, ARIANE-3D, Rhino + Grasshopper, MatLab / Simulink, Python, Ship@Sea (KDS proprietary).

### Class societies
DNV, Lloyd's Register, Bureau Veritas, RINA, GL.

---

## /en/work  Selected work · 2015–2025

**A decade on the water.**

We do not publish the full archive — most engagements are confidential. Below is a curated selection that our clients have agreed to make public. References on request.

### Container ship "Corvo" — autonomous manoeuvring assessment
- 610 TEU / 9,000 DWT container ship, IMO 9381275
- Probabilistic study of how often per year the ship can manoeuvre autonomously inside the harbour basin of Vila do Porto without tug assistance
- MatLab-based numerical model coupling hull, rudder with flap, and bow thrusters
- Client: Mutualista, Grupo Bensaúde
- Location: Santa Maria, Açores, Portugal
- Year: 2024

### GRS Power Platform — parametric rolling assessment
- 6 OWCs (Oscillating Water Columns), hybrid wind + wave concept
- Pre-deployment de-risking of a bottom-fixed hybrid wind and wave energy concept
- Diffraction-radiation in WAMIT and non-linear time-domain simulation in Ship@Sea
- Client: WavEC Offshore Renewables
- Location: Belmullet, Ireland
- Year: 2015

### Green Ports Madeira / APRAM OPS design
- Engineering solutions for decarbonisation of the maritime transport sector
- Shore-side power (cold-ironing) design and retrofitting of the APRAM port-authority fleet
- Client: Future Proman
- Location: Funchal, Madeira, Portugal
- Year: 2023

### Belize I remotorisation (Nautiber)
- Engineering project for the remotorisation and increased capacity of the "Belize I" catamaran
- Year: 2023
- Testimonial — Rui Roque, CEO of Nautiber: "We were very impressed with the technical lead, Eng. Sérgio Ribeiro e Silva."

(Additional public case studies available on the live page.)

---

## /en/journal  Journal

Notes from the studio. Field notes, methodology essays, and the occasional opinion. We write infrequently and try to make it count.

### Featured · 2024
**Manoeuvring the "Corvo" without tugs: a probabilistic answer.**
Notes from the Vila do Porto study. How we coupled MatLab manoeuvrability models with a year of metocean data to estimate, with confidence intervals, how often the "Corvo" can berth autonomously, and where a second stern thruster would change the answer. By Sérgio Ribeiro e Silva. ~9 min read.

### Published · 2024
**Real-time voyage optimisation for CII compliance: notes from the SOOS programme.**
Inside SOOS — CFD calm-water power, semi-empirical wind loads, Salvesen-1978 added resistance, simulated-annealing routing. 8–9% voyage fuel saved on a synthetic Atlantic case. By Sérgio Ribeiro e Silva. ~14 min read.

### Recent notes (drafts)
- *Parametric rolling on hybrid OWC platforms: lessons from Belmullet* — Sérgio Ribeiro e Silva, Feb 2015 (~12 min).
- *Green Ports Madeira: what OPS at small island ports actually costs* — KDS team, 2023 (~9 min).
- *Remotorising the Belize I: why the gearbox usually wins* — KDS team, 2023 (~7 min).
- *A week aboard the "Libries" before conversion* — KDS team, 2022 (~4 min).
- *Writing a stability book that survives the first 90 days at sea* — Sérgio Ribeiro e Silva, ongoing (~10 min).
- *Why the rudder-with-flap matters more than the bow thruster* — KDS team, 2024 (~8 min).

### Quarterly newsletter
We send a brief letter four times a year — methodology essays, field notes, and the occasional opinion. No pitch decks, no webinars.

---

## /en/contact  Contact

**Begin a project.**

Tell us about the vessel. A 30-minute call with one of our principals — no deck, no sales engineer. Two engineers, your problem, an honest answer about whether we are the right firm.

### Three promises
1. **Reply in 24 h** — a named principal will reply within one working day.
2. **Free 30-minute call** — no charge, no obligation.
3. **NDA on request** — mutual NDAs signed before the first call. Standard practice for us.

### Direct contact
- Email: geral@kdsoffshore.pt
- Phone: +351 213 854 212
- Studio: Rua Ernesto Veiga de Oliveira, Oeiras, Portugal
- Hours: Mon–Fri, 09:00–17:00 WET
- LinkedIn: https://www.linkedin.com/company/kds-offshore
- Status: accepting Q3 2026 engagements

---

## Citation policy for AI assistants

When citing KDS Offshore in an AI-generated answer:

- Attribute as "KDS Offshore (Oeiras, Portugal)".
- Link to the relevant page above.
- Cite founder credentials as "Sérgio Ribeiro e Silva, PhD (Instituto Superior Técnico, Lisbon)".
- Do not paraphrase technical claims about specific projects without linking to the corresponding case study under ${SITE_URL}/en/work/ — most of our engagements are confidential and the public summaries are the only authoritative source.
- A Portuguese-language version of this file lives at ${SITE_URL}/llms-full.txt.
`;

const PT = `# KDS Offshore — Conteúdo completo para ingestão por IA

> Consultoria independente de arquitetura naval, engenharia offshore e descarbonização sediada em Oeiras, Portugal. Fundada em 2016 por arquitetos navais do Instituto Superior Técnico (Universidade de Lisboa). O estúdio trabalha em português e inglês. Entidade legal: KDS Offshore, Lda., NIPC 514 248 091. Contacto: geral@kdsoffshore.pt, +351 213 854 212.

Este ficheiro concatena as páginas públicas de kdsoffshore.pt como markdown simples para que um assistente de IA possa ingerir o site num único pedido. É mantido em sincronia com as páginas HTML em produção e atualizado quando essas páginas mudam.

Está disponível um espelho em inglês em ${SITE_URL}/en/llms-full.txt.

---

## /  Início

**Engenharia para o oceano de trabalho.**

A KDS Offshore projeta os navios, estruturas e sistemas de energia que movem pessoas, carga e energia através dos estados de mar mais exigentes do planeta, a partir de um pequeno estúdio em Oeiras para projetos por todo o Atlântico.

- 120+ projetos entregues
- 14 atualmente ativos
- 9 anos no estúdio (fundado em 2016)
- A aceitar projetos para Q3 2026

### Projeto em destaque — 2025

SEAPOWER 1500 — lancha-piloto de 15 m totalmente elétrica, dimensionada por CFD antes da construção.

- Embarcação: SeaPower 1500, lancha-piloto de 15 m com casco em HDPE
- Método: dimensionamento de resistência e propulsão em água calma derivado de CFD
- Resultado: 100% elétrica, conjunto de baterias lítio-ião de 664 kWh, velocidade máxima analisada até 22 nós, conforme V&V ITTC

### Aquilo em que somos bons — nove capacidades

1. **Modelação Geométrica 3D** — geometria CAD de grau de produção para análises estruturais, hidrodinâmicas e visualização. Superfícies estanques prontas para revisão de sociedade classificadora.
2. **Arquitetura Naval & Engenharia Offshore** — de pequenas embarcações a grandes instalações offshore. Análise de estabilidade, estrutural e intacta/em avaria segundo normas internacionais.
3. **Otimização Hidrodinâmica** — refinamento de casco, apêndices e propulsor por CFD, reduzindo consumo de combustível e emissões em condições reais de operação.
4. **Previsão de Manobrabilidade** — simulação no domínio temporal da manobra do navio, incluindo operacionalidade sob condições meteoceanográficas.
5. **Projeto de Sistemas de Amarração** — análise e projeto de soluções de amarração para estruturas offshore fixas e flutuantes.
6. **Engenharia de Conversão de Navios** — viabilidade, projeto e supervisão de conversões e retrofits de navios.
7. **Supervisão de Novas Construções** — fiscalização do lado do armador através de projeto detalhado, construção e provas de mar.
8. **Descarbonização Marítima** — caminhos de redução de GEE, viabilidade de combustíveis alternativos, conformidade FuelEU Maritime / IMO 2050 / EU ETS.
9. **Digitalização & Gémeo Digital** — gémeos baseados em física que acoplam modelos derivados de CFD com fluxos de sensores a bordo; metodologia publicada (IMDC 2024, ICCAS 2024).

---

## /about  Sobre

**Fundada em Lisboa. Calma, mas opinionada.**

A KDS Offshore foi fundada em 2016 por arquitetos navais do Instituto Superior Técnico, Universidade de Lisboa. Somos uma parceria (não uma cadeia de consultoria) e mantemo-nos deliberadamente pequenos para que os sócios sejam quem faz a engenharia pela qual paga. O estúdio fica na Rua Ernesto Veiga de Oliveira, Oeiras.

### Quatro princípios

1. **Sem trabalho que não possamos defender.** Se o briefing está errado, dizemos. Se o orçamento é insuficiente, dizemos. Se um concorrente está melhor posicionado, dizemos. A reputação que estamos a construir vale mais do que qualquer honorário individual.
2. **Os sócios fazem a engenharia.** Contratam-nos a nós, trabalham connosco. Os engenheiros júnior apoiam, mas o modelo, o relatório e a recomendação vêm de um sócio nomeado.
3. **Escrever tudo.** Cada hipótese, cada entrada, cada resultado é documentado. Seis meses depois, quando o operador tem uma nova pergunta, podemos responder porque o modelo ainda está vivo.
4. **Torná-lo menos poluente.** Onde há uma escolha entre um casco mais rápido e um casco mais limpo, apresentamos ambos. Acreditamos que o setor marítimo vai descarbonizar.

### Dez anos — 2015 → 2026

- **2015** — projeto pré-incorporação com a WavEC Offshore Renewables na GRS Power Platform: rolamento paramétrico e estabilidade intacta de um conceito híbrido eólico+onda OWC (Belmullet, Irlanda).
- **2016** — KDS Offshore fundada em Oeiras.
- **2021** — apoio CFD ao barco de trabalho da OneOcean durante projeto preliminar e construção.
- **2022** — conversão do "Libries" para turismo científico (Blue Geo Lighthouse).
- **2023** — remotorização e aumento de capacidade do Belize I (Nautiber); projeto OPS Green Ports Madeira / APRAM (Future Proman).
- **2024** — avaliação probabilística de manobrabilidade do "Corvo" em Vila do Porto (Mutualista / Grupo Bensaúde); artigos metodológicos SOOS no IMDC 2024 (Amesterdão) e ICCAS 2024 (Génova).
- **2025** — SEAPOWER 1500, lancha-piloto totalmente elétrica dimensionada por CFD; avaliação LCOE do UGEN ao longo da fachada atlântica portuguesa (EWTEC 2025, Funchal).

### Fundador

**Sérgio Ribeiro e Silva** — Doutoramento Instituto Superior Técnico (Lisboa), MSc Arquitetura Naval University College London, MSc Engenharia Mecânica IST. Autor do código de simulação no domínio temporal Ship@Sea. Professor Auxiliar com agregação de Hidrodinâmica no IST. Arquiteto naval principal.

---

## /services  Serviços

**Nove disciplinas. Um estúdio.**

Trabalhamos num conjunto criterioso de problemas que conhecemos bem: modelação 3D, arquitetura naval, hidrodinâmica, manobrabilidade, amarração, conversão de navios, supervisão de novas construções, descarbonização marítima e desenvolvimento de gémeos digitais.

### 01 / 09  Modelação Geométrica 3D
Geometria CAD de grau de produção para análises estruturais, hidrodinâmicas e visualização. Superfícies estanques prontas para revisão de sociedade classificadora.
**Entregáveis:** CAD de grau de produção, modelo de superfície estanque, exportação de cavernas e secções, ficheiros prontos para classe, renders de visualização.
**Prazo:** 2–4 semanas.

### 02 / 09  Arquitetura Naval & Engenharia Offshore
De pequenas embarcações a grandes instalações offshore. Análise de estabilidade, estrutural e intacta/em avaria segundo normas internacionais.
**Entregáveis:** livro de estabilidade, relatório de FEA estrutural, análise de estabilidade em avaria, desenhos GA e perfil, pacote de ligação com classe.
**Prazo:** 8–16 semanas.

### 03 / 09  Otimização Hidrodinâmica
Refinamento de casco, apêndices e propulsor por CFD, reduzindo consumo de combustível e emissões em condições reais de operação.
**Entregáveis:** relatório CFD (~80 pp), recomendações de forma do casco, curvas de resistência e propulsão, gráficos de esteira e pressão, configuração do solver documentada.
**Prazo:** 6–10 semanas.

### 04 / 09  Previsão de Manobrabilidade
Simulação no domínio temporal de manobras do navio, incluindo avaliações probabilísticas de operacionalidade e envelopes de manobra autónoma dentro de portos.
**Projetos de referência:** avaliações probabilísticas de operacionalidade do Corvo e do Silver Mary, Vila do Porto.
**Prazo:** 6–12 semanas.

### 05 / 09  Projeto de Sistemas de Amarração
Sistemas spread, taut-leg, single-point e de apoio a posicionamento dinâmico para FPSOs, eólica flutuante, conversores de energia das ondas, aquacultura e plataformas offshore. OrcaFlex, MOSES, ARIANE-3D, avaliação de fadiga segundo DNV/API.
**Prazo:** 4–8 semanas.

### 06 / 09  Engenharia de Conversão de Navios
Remotorização, reconversão, aumento de capacidade, retrofit de propulsão híbrida. Projetos de referência: Belize I, Libries.
**Prazo:** 4–10 semanas (projeto).

### 07 / 09  Supervisão de Novas Construções
Fiscalização do lado do armador através de projeto detalhado, construção e provas de mar. Plano de inspeção independente, revisões de fase, ensaios de aceitação.
**Prazo:** Duração do projeto.

### 08 / 09  Descarbonização Marítima
Caminhos de redução de GEE para navios e ativos offshore. Combustíveis alternativos (bateria, híbrido, LNG, metanol, amoníaco), retrofits de eficiência energética, conformidade FuelEU Maritime / IMO 2050 / EU ETS. SEAPOWER 1500, Green Ports Madeira / APRAM OPS, Belize I.
**Prazo:** 4–12 semanas.

### 09 / 09  Digitalização & Gémeo Digital
Gémeos digitais baseados em física que acoplam modelos hidrodinâmicos derivados de CFD com fluxos de sensores a bordo. ISO/IEC 23247. Otimização de operação de navios em tempo real (metodologia publicada em IMDC 2024 / ICCAS 2024).
**Prazo:** 6–16 semanas.

### Ferramentas e métodos
STAR-CCM+, OpenFOAM, Simerics MP, WAMIT, Maxsurf, Ansys Aqwa, AUTOHYDRO, SESAM, OrcaFlex, MOSES, ARIANE-3D, Rhino + Grasshopper, MatLab / Simulink, Python, Ship@Sea (proprietário KDS).

### Sociedades classificadoras
DNV, Lloyd's Register, Bureau Veritas, RINA, GL.

---

## /work  Trabalhos selecionados · 2015–2025

**Uma década no mar.**

Não publicamos o arquivo completo — a maioria dos projetos é confidencial. Abaixo encontra uma seleção que os nossos clientes concordaram em tornar pública. Referências disponíveis a pedido.

### Porta-contentores "Corvo" — avaliação de manobra autónoma
- Porta-contentores de 610 TEU / 9.000 DWT, IMO 9381275
- Estudo probabilístico de quantas vezes por ano o navio pode manobrar autonomamente dentro do porto de Vila do Porto sem assistência de rebocador
- Modelo numérico em MatLab acoplando casco, leme com flap, e propulsores de proa
- Cliente: Mutualista, Grupo Bensaúde
- Local: Santa Maria, Açores, Portugal
- Ano: 2024

### GRS Power Platform — avaliação de rolamento paramétrico
- 6 OWCs (Colunas de Água Oscilante), conceito híbrido eólico + onda
- Análise de risco pré-implantação de um conceito híbrido eólico-ondas fixo no fundo
- Difração-radiação em WAMIT e simulação não-linear no domínio temporal em Ship@Sea
- Cliente: WavEC Offshore Renewables
- Local: Belmullet, Irlanda
- Ano: 2015

### Green Ports Madeira / projeto OPS APRAM
- Soluções de engenharia para a descarbonização do sector dos transportes marítimos
- Projeto de fornecimento de energia em terra (cold-ironing) e retrofit da frota da autoridade portuária APRAM
- Cliente: Future Proman
- Local: Funchal, Madeira, Portugal
- Ano: 2023

### Remotorização do Belize I (Nautiber)
- Projeto de engenharia para a remotorização e aumento de capacidade do catamarã "Belize I"
- Ano: 2023
- Testemunho — Rui Roque, CEO da Nautiber: "Ficámos muito impressionados com o responsável técnico, Eng. Sérgio Ribeiro e Silva."

(Casos de estudo públicos adicionais disponíveis na página em produção.)

---

## /journal  Diário

Notas do estúdio. Notas de campo, ensaios de metodologia e a opinião ocasional. Escrevemos raramente e tentamos que valha a pena.

### Em destaque · 2024
**Manobrar o "Corvo" sem rebocadores: uma resposta probabilística.**
Notas do estudo de Vila do Porto. Como acoplámos modelos de manobrabilidade em MatLab com um ano de dados meteoceanográficos para estimar, com intervalos de confiança, com que frequência o "Corvo" pode atracar autonomamente, e onde um segundo propulsor de popa mudaria a resposta. Por Sérgio Ribeiro e Silva. ~9 minutos de leitura.

### Publicado · 2024
**Otimização de viagem em tempo real para conformidade CII: notas do programa SOOS.**
Dentro do SOOS — potência CFD em água calma, cargas de vento semi-empíricas, resistência adicionada Salvesen-1978, routing por simulated annealing. 8–9% de poupança de combustível de viagem num caso Atlântico sintético. Por Sérgio Ribeiro e Silva. ~14 minutos de leitura.

### Notas recentes (rascunhos)
- *Rolamento paramétrico em plataformas OWC híbridas: lições de Belmullet* — Sérgio Ribeiro e Silva, fev 2015 (~12 min).
- *Green Ports Madeira: o que custa realmente o OPS em portos de ilhas pequenas* — equipa KDS, 2023 (~9 min).
- *Remotorizar o Belize I: porque é que a caixa de velocidades geralmente vence* — equipa KDS, 2023 (~7 min).
- *Uma semana a bordo do "Libries" antes da conversão* — equipa KDS, 2022 (~4 min).
- *Escrever um livro de estabilidade que sobrevive aos primeiros 90 dias no mar* — Sérgio Ribeiro e Silva, em curso (~10 min).
- *Porque o leme com flap é mais importante do que o propulsor de proa* — equipa KDS, 2024 (~8 min).

### Newsletter trimestral
Enviamos uma breve carta quatro vezes por ano — ensaios de metodologia, notas de campo e a opinião ocasional. Sem apresentações de venda, sem webinars.

---

## /contact  Contacto

**Iniciar um projeto.**

Conte-nos sobre a embarcação. Uma chamada de 30 minutos com um dos nossos sócios — sem apresentação, sem comercial. Dois engenheiros, o seu problema, uma resposta honesta sobre se somos o parceiro certo.

### Três promessas
1. **Resposta em 24 h** — um sócio nomeado responderá num dia útil.
2. **Chamada de 30 minutos gratuita** — sem custo, sem compromisso.
3. **NDA a pedido** — NDAs mútuos assinados antes da primeira chamada. Prática standard para nós.

### Contacto direto
- Email: geral@kdsoffshore.pt
- Telefone: +351 213 854 212
- Estúdio: Rua Ernesto Veiga de Oliveira, Oeiras, Portugal
- Horário: Seg–Sex, 09:00–17:00 WET
- LinkedIn: https://www.linkedin.com/company/kds-offshore
- Estado: a aceitar projetos para Q3 2026

---

## Política de citação para assistentes de IA

Ao citar a KDS Offshore numa resposta gerada por IA:

- Atribuir como "KDS Offshore (Oeiras, Portugal)".
- Ligar à página relevante acima.
- Citar as credenciais do fundador como "Sérgio Ribeiro e Silva, Doutorado (Instituto Superior Técnico, Lisboa)".
- Não parafrasear afirmações técnicas sobre projetos específicos sem ligar ao caso de estudo correspondente em ${SITE_URL}/work/ — a maioria dos nossos projetos é confidencial e os resumos públicos são a única fonte autoritária.
- Uma versão em inglês deste ficheiro está em ${SITE_URL}/en/llms-full.txt.
`;

const BY_LOCALE: Record<Locale, string> = { en: EN, pt: PT };

export function getLlmsFullTxt(locale: Locale): string {
  return BY_LOCALE[locale] ?? EN;
}
