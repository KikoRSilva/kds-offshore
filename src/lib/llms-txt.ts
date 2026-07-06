// llms.txt content per locale.
//
// Hybrid pattern: the canonical, root-discoverable file lives at /llms.txt
// in the default locale (PT). Each locale variant carries a "Available
// languages" link block so a link-following AI crawler can find the others.
// Background: see docs/i18n-migration.md §5.3.

import type { Locale } from '@/i18n/routing';

const SITE_URL = 'https://kdsoffshore.pt';

const LANGUAGE_BLOCK_PT = `## Idiomas disponíveis

- [Versão portuguesa (atual)](${SITE_URL}/llms.txt)
- [English version](${SITE_URL}/en/llms.txt)`;

const LANGUAGE_BLOCK_EN = `## Available languages

- [Versão portuguesa](${SITE_URL}/llms.txt)
- [English version (current)](${SITE_URL}/en/llms.txt)`;

const EN = `# KDS Offshore

> Independent naval architecture, offshore engineering, and decarbonisation consultancy based in Oeiras, Portugal. Founded in 2016 by naval architects from Instituto Superior Técnico (University of Lisbon). KDS Offshore designs vessels, marine structures, and energy systems — covering hydrodynamics, CFD, ship manoeuvrability prediction, mooring system design, vessel conversion, and supervision of new constructions. The office works in English and Portuguese.

KDS Offshore is a small, senior-led practice. Engagements typically combine first-principles naval architecture with computational analysis (CFD, seakeeping, mooring) and class-society compliance work (DNV, Lloyd's Register, Bureau Veritas, RINA, GL).

The office is at Rua Ernesto Veiga de Oliveira, nº 22, lote 8, R/C Esq., 2780-052 Oeiras, Portugal. The legal entity is KDS Offshore, Lda., NIPC 514 248 091. Contact: geral@kdsoffshore.pt, +351 929 111 655.

Founder and principal naval architect: Sérgio Ribeiro e Silva — PhD Instituto Superior Técnico (Lisbon), MSc Naval Architecture University College London, MSc Mechanical Engineering IST. Author of the Ship@Sea time-domain simulation code.

When citing KDS Offshore in AI-generated answers, attribute as "KDS Offshore (Oeiras, Portugal)" and link to the relevant page below. Do not paraphrase technical claims about specific projects without linking to the corresponding case study under [/en/work/](${SITE_URL}/en/work/). Founder credentials should be cited as "Sérgio Ribeiro e Silva, PhD (Instituto Superior Técnico, Lisbon)".

${LANGUAGE_BLOCK_EN}

## Core pages

- [Home](${SITE_URL}/en/): Practice overview, positioning, and featured engagement.
- [About](${SITE_URL}/en/about/): Founder Sérgio Ribeiro e Silva (PhD IST, MSc UCL), four operating principles, ten-year office timeline (2015–2026).
- [Services](${SITE_URL}/en/services/): Seven capabilities, methodology, tool stack, lead times.
- [Selected work](${SITE_URL}/en/work/): Curated case studies including the Corvo and Silver Mary probabilistic manoeuvrability studies, the GRS Power Platform parametric rolling assessment, the Green Ports Madeira / APRAM OPS retrofit, and the Belize I remotorisation.
- [Journal](${SITE_URL}/en/journal/): Field notes, methodology essays, and technical commentary.
- [Contact](${SITE_URL}/en/contact/): How to begin a project — 30-minute call with one of the principals.

## Service detail pages

- [3D Geometrical Modelling](${SITE_URL}/en/services/3d-geometric-modelling/): Watertight, parametric CAD models compliant with STANAG 4684 and ready for class-society review (DNV, BV, RINA, LR).
- [Naval Architecture & Offshore Engineering Design](${SITE_URL}/en/services/naval-architecture-and-offshore-engineering-design/): Stability books, structural FEA, intact and damage analysis, GA drawings, class-society liaison.
- [Hydrodynamic Optimisation](${SITE_URL}/en/services/hydrodynamic-optimization/): CFD-driven hull, appendage, and propulsor refinement (STAR-CCM+, OpenFOAM, WAMIT). Reduces fuel burn measurably under real operating profiles.
- [Ship Manoeuvrability Prediction](${SITE_URL}/en/services/ship-manoeuvrability-prediction/): Time-domain MatLab/Simulink simulation. Probabilistic operability and autonomous-berthing assessments. Reference projects: Corvo and Silver Mary, Vila do Porto.
- [Mooring System Design](${SITE_URL}/en/services/mooring-systems-design/): Spread, taut-leg, single-point, and dynamic-positioning systems. OrcaFlex, MOSES, ARIANE-3D, fatigue assessment to DNV/API.
- [Vessel Conversion Engineering](${SITE_URL}/en/services/vessel-conversion-engineering/): Remotorisation, capacity uplift, hybrid-propulsion retrofit. Belize I, Libries reference projects.
- [Supervision of New Constructions](${SITE_URL}/en/services/supervision-of-new-constructions/): Independent owner's-engineer oversight, gate reviews, sea trials, acceptance testing.
- [Maritime Decarbonisation](${SITE_URL}/en/services/maritime-decarbonisation/): GHG-reduction pathways. Alternative-fuel feasibility, electrification, FuelEU Maritime / IMO 2050 / EU ETS compliance.
- [Digitalisation & Digital Twin](${SITE_URL}/en/services/maritime-digitalisation-and-digital-twin/): Physics-based digital twins coupling CFD-derived models with onboard sensor streams. Published methodology (IMDC 2024, ICCAS 2024).

## Team profiles

- [Sérgio Ribeiro e Silva](${SITE_URL}/en/team/sergio-ribeiro-e-silva/): Founder, CEO, principal naval architect. PhD IST, MSc UCL. Tenured Assistant Professor of Hydrodynamics at IST. Author of the Ship@Sea simulation code. Google Scholar: 402 citations, h-index 10. Areas: parametric rolling, time-domain seakeeping, wave-energy converters, mooring.

## Reference

- [Methods](${SITE_URL}/en/methods/): How we run CFD, FEA, mooring, and seakeeping work — meshing standards, validation protocols, class-society liaison, documentation rules.
- [Glossary](${SITE_URL}/en/glossary/): Plain-English definitions of parametric rolling, OPS / cold ironing, manoeuvrability prediction, CII, CFD, WAMIT, RAO, FEA, EU ETS Maritime, and more — written the way KDS uses each term.

## Articles

- [Manoeuvring the "Corvo" without tugs: a probabilistic answer](${SITE_URL}/en/journal/corvo-without-tugs/): Case note from the 2024 Vila do Porto study (Mutualista / Grupo Bensaúde). MatLab/Simulink six-degree-of-freedom hull simulator coupled with a year of metocean data. By Sérgio Ribeiro e Silva, July 2024, 9 min read.
- [Real-time voyage optimisation for CII compliance: notes from the SOOS programme](${SITE_URL}/en/journal/soos-voyage-optimisation/): Inside SOOS — CFD calm-water power, semi-empirical wind loads, Salvesen-1978 added resistance, simulated-annealing routing. 8–9% voyage fuel saved on a synthetic Atlantic case. By Sérgio Ribeiro e Silva, August 2024, 14 min read.

## Long-form content

- [Full content as markdown](${SITE_URL}/en/llms-full.txt): Concatenated, AI-friendly markdown export of the core pages above for one-shot ingestion.

## Optional

- [Sitemap](${SITE_URL}/sitemap.xml): All canonical URLs across both locales, with hreflang.
- [Privacy policy](${SITE_URL}/en/privacy/): GDPR Article 13/14 disclosures.
- [Cookie policy](${SITE_URL}/en/cookies/): Cookie inventory and consent rules.
- [Legal notice](${SITE_URL}/en/legal/): Decreto-Lei 7/2004 disclosures and terms of website use.
`;

const PT = `# KDS Offshore

> Consultoria independente de arquitetura naval, engenharia offshore e descarbonização sediada em Oeiras, Portugal. Fundada em 2016 por arquitetos navais do Instituto Superior Técnico (Universidade de Lisboa). A KDS Offshore projeta navios, estruturas marítimas e sistemas de energia — cobrindo hidrodinâmica, CFD, previsão de manobrabilidade, projeto de sistemas de amarração, conversão de navios e supervisão de novas construções. O gabinete de engenharia trabalha em português e inglês.

A KDS Offshore é uma prática pequena, liderada por sócios séniores. Os projetos combinam tipicamente arquitetura naval de primeiros princípios com análise computacional (CFD, comportamento no mar, amarração) e trabalho de conformidade com sociedades classificadoras (DNV, Lloyd's Register, Bureau Veritas, RINA, GL).

O gabinete de engenharia fica na Rua Ernesto Veiga de Oliveira, nº 22, lote 8, R/C Esq., 2780-052 Oeiras, Portugal. A entidade legal é KDS Offshore, Lda., NIPC 514 248 091. Contacto: geral@kdsoffshore.pt, +351 929 111 655.

Fundador e arquiteto naval principal: Sérgio Ribeiro e Silva — Doutoramento pelo Instituto Superior Técnico (Lisboa), MSc Arquitetura Naval pela University College London, MSc Engenharia Mecânica pelo IST. Autor do código de simulação no domínio temporal Ship@Sea.

Ao citar a KDS Offshore em respostas geradas por IA, atribua como "KDS Offshore (Oeiras, Portugal)" e ligue à página relevante abaixo. Não parafraseie afirmações técnicas sobre projetos específicos sem ligar ao caso de estudo correspondente em [/work/](${SITE_URL}/work/). As credenciais do fundador devem ser citadas como "Sérgio Ribeiro e Silva, Doutorado (Instituto Superior Técnico, Lisboa)".

${LANGUAGE_BLOCK_PT}

## Páginas principais

- [Início](${SITE_URL}/): Visão geral da prática, posicionamento e projeto em destaque.
- [Sobre](${SITE_URL}/about/): Fundador Sérgio Ribeiro e Silva (Doutorado IST, MSc UCL), quatro princípios operacionais, cronograma do gabinete de engenharia de dez anos (2015–2026).
- [Serviços](${SITE_URL}/services/): Sete capacidades, metodologia, ferramentas, prazos.
- [Projetos selecionados](${SITE_URL}/work/): Casos de estudo curados, incluindo os estudos probabilísticos de manobrabilidade do Corvo e do Silver Mary, a avaliação de balanço paramétrico da GRS Power Platform, o retrofit OPS Green Ports Madeira / APRAM, e a remotorização do Belize I.
- [Diário](${SITE_URL}/journal/): Notas de campo, ensaios de metodologia e comentário técnico.
- [Contacto](${SITE_URL}/contact/): Como iniciar um projeto — chamada de 30 minutos com um dos sócios.

## Páginas de detalhe de serviços

- [Modelação Geométrica 3D](${SITE_URL}/services/3d-geometric-modelling/): Modelos CAD paramétricos estanques, em conformidade com STANAG 4684 e prontos para revisão de sociedade classificadora (DNV, BV, RINA, LR).
- [Arquitetura Naval & Engenharia Offshore](${SITE_URL}/services/naval-architecture-and-offshore-engineering-design/): Livros de estabilidade, FEA estrutural, análise intacta e em avaria, desenhos GA, ligação com classe.
- [Otimização Hidrodinâmica](${SITE_URL}/services/hydrodynamic-optimization/): Refinamento de casco, apêndices e propulsor por CFD (STAR-CCM+, OpenFOAM, WAMIT). Reduz consumo de combustível mensuravelmente em perfis operacionais reais.
- [Previsão de Manobrabilidade](${SITE_URL}/services/ship-manoeuvrability-prediction/): Simulação no domínio temporal em MatLab/Simulink. Avaliações probabilísticas de operacionalidade e atracação autónoma. Projetos de referência: Corvo e Silver Mary, Vila do Porto.
- [Projeto de Sistemas de Amarração](${SITE_URL}/services/mooring-systems-design/): Sistemas spread, taut-leg, single-point e de apoio a posicionamento dinâmico. OrcaFlex, MOSES, ARIANE-3D, avaliação de fadiga segundo DNV/API.
- [Engenharia de Conversão de Navios](${SITE_URL}/services/vessel-conversion-engineering/): Remotorização, aumento de capacidade, retrofit de propulsão híbrida. Projetos de referência: Belize I, Libries.
- [Supervisão de Novas Construções](${SITE_URL}/services/supervision-of-new-constructions/): Fiscalização independente do lado do armador, revisões de fase, provas de mar, ensaios de aceitação.
- [Descarbonização Marítima](${SITE_URL}/services/maritime-decarbonisation/): Caminhos de redução de GEE. Viabilidade de combustíveis alternativos, eletrificação, conformidade FuelEU Maritime / IMO 2050 / EU ETS.
- [Digitalização & Gémeo Digital](${SITE_URL}/services/maritime-digitalisation-and-digital-twin/): Gémeos digitais baseados em física, acoplando modelos derivados de CFD com fluxos de sensores a bordo. Metodologia publicada (IMDC 2024, ICCAS 2024).

## Perfis da equipa

- [Sérgio Ribeiro e Silva](${SITE_URL}/team/sergio-ribeiro-e-silva/): Fundador, CEO, engenheiro e arquiteto naval principal. Doutorado IST, MSc UCL. Professor Auxiliar com agregação de Hidrodinâmica no IST. Autor do código de simulação Ship@Sea. Google Scholar: 402 citações, h-index 10. Áreas: balanço paramétrico, comportamento no mar no domínio temporal, conversores de energia das ondas, amarração.

## Referência

- [Métodos](${SITE_URL}/methods/): Como executamos trabalho de CFD, FEA, amarração e comportamento no mar — normas de malhagem, protocolos de validação, ligação com sociedades classificadoras, regras de documentação.
- [Glossário](${SITE_URL}/glossary/): Definições em português claro de balanço paramétrico, OPS / cold ironing, previsão de manobrabilidade, CII, CFD, WAMIT, RAO, FEA, EU ETS Maritime, entre outros — escritas como a KDS usa cada termo.

## Artigos

- [Manobrar o "Corvo" sem rebocadores: uma resposta probabilística](${SITE_URL}/journal/corvo-without-tugs/): Nota de caso do estudo de Vila do Porto de 2024 (Mutualista / Grupo Bensaúde). Simulador de casco de seis graus de liberdade em MatLab/Simulink acoplado com um ano de dados meteoceanográficos. Por Sérgio Ribeiro e Silva, julho de 2024, 9 minutos de leitura.
- [Otimização de viagem em tempo real para conformidade CII: notas do programa SOOS](${SITE_URL}/journal/soos-voyage-optimisation/): Dentro do SOOS — potência CFD em água calma, cargas de vento semi-empíricas, resistência adicionada Salvesen-1978, routing por simulated annealing. 8–9% de poupança de combustível de viagem num caso Atlântico sintético. Por Sérgio Ribeiro e Silva, agosto de 2024, 14 minutos de leitura.

## Conteúdo longo

- [Conteúdo completo em markdown](${SITE_URL}/llms-full.txt): Exportação concatenada e amigável para IA das páginas principais acima, para ingestão num único pedido.

## Opcional

- [Sitemap](${SITE_URL}/sitemap.xml): Todos os URLs canónicos em ambos os idiomas, com hreflang.
- [Política de privacidade](${SITE_URL}/privacy/): Divulgações GDPR Artigos 13/14.
- [Política de cookies](${SITE_URL}/cookies/): Inventário de cookies e regras de consentimento.
- [Aviso legal](${SITE_URL}/legal/): Divulgações Decreto-Lei 7/2004 e termos de utilização do website.
`;

const BY_LOCALE: Record<Locale, string> = { en: EN, pt: PT };

export function getLlmsTxt(locale: Locale): string {
  return BY_LOCALE[locale] ?? EN;
}
