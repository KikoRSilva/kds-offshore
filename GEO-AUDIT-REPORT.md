# GEO Audit Report: KDS Offshore

**Audit Date:** 2026-05-05
**URL Audited:** http://localhost:3002 (pre-deployment dev server)
**Production target:** kdsoffshore.pt (per email + brand)
**Business Type:** Agency / Services (Naval architecture & offshore engineering consultancy)
**Pages Analyzed:** 6 — `/`, `/about`, `/services`, `/work`, `/journal`, `/contact`

---

## Executive Summary

**Overall GEO Score: 42/100 (Poor)**

KDS Offshore has unusually strong editorial content for its size — named founder credentials (PhD IST, MSc UCL), specific case studies with vessel names and IMOs, distinctive voice, and a credible 10-year timeline — but the site is invisible to AI systems because the technical and structural foundations are missing. The biggest gap is the **complete absence of structured data** (zero JSON-LD blocks, no Organization schema, no Person, no Service, no Article), compounded by missing `robots.txt`, `sitemap.xml`, and `llms.txt`. The site is also still on a localhost dev server, so external brand-authority signals (Wikipedia, Reddit, YouTube, industry directories) are effectively zero. The good news: the underlying content is genuinely citable and the technical fixes are mostly low-effort, single-PR changes. Implementing the Critical and High priority items below should lift the score from 42 to roughly 70–75 within two weeks.

### Score Breakdown

| Category | Score | Weight | Weighted |
|---|---|---|---|
| AI Citability | 52/100 | 25% | 13.0 |
| Brand Authority | 14/100 | 20% | 2.8 |
| Content E-E-A-T | 78/100 | 20% | 15.6 |
| Technical GEO | 55/100 | 15% | 8.25 |
| Schema & Structured Data | 8/100 | 10% | 0.8 |
| Platform Optimization | 16/100 | 10% | 1.6 |
| **Overall GEO Score** | | | **42 / 100** |

**Rating:** Poor — Weak GEO signals; AI systems will struggle to discover, cite, or recommend KDS Offshore in its current state.

---

## Critical Issues (Fix Immediately)

| # | Issue | Page | Why It Blocks GEO |
|---|---|---|---|
| C-1 | **Zero JSON-LD structured data** sitewide | All | AI engines cannot disambiguate "KDS Offshore" from other consultancies, cannot link to founder credentials, cannot enumerate services. Single largest GEO loss. |
| C-2 | **Missing `/robots.txt`** (HTTP 404) | Root | No explicit AI-crawler allow signals, no `Sitemap:` directive — slows discovery. |
| C-3 | **Missing `/sitemap.xml`** (HTTP 404) | Root | Crawlers must rely on link-graph discovery; six pages plus journal posts go unindexed. |
| C-4 | **Missing `/llms.txt`** | Root | The single highest-leverage GEO file is absent. AI crawlers have no content map. |
| C-5 | **Footer "Privacy / Cookies / GDPR · LGPD" are non-clickable spans** with no `href` | All pages | EU/Portugal company → GDPR compliance failure; trust-signal blocker for E-E-A-T. |
| C-6 | **Localhost-only deployment** | — | No public URL means no Google/Bing index, no AI crawler access, no link-equity. |

---

## High Priority Issues (Fix Within 1 Week)

| # | Issue | Detail |
|---|---|---|
| H-1 | No `metadata.metadataBase` in `app/layout.tsx` | OG/Twitter URLs resolve relative; previews break when shared. |
| H-2 | No canonical link tag on any page | Duplicate-content risk; no preferred-URL signal. |
| H-3 | No `og:image` / `twitter:image` | Social/AI preview cards render without thumbnails. |
| H-4 | No hreflang tags | EN/PT bilingual claim (`og:locale:alternate=pt_PT`) without hreflang infrastructure. |
| H-5 | No author bio pages | Sérgio Ribeiro e Silva named on /about and journal posts but no `/team/sergio-ribeiro-e-silva/` permalink with photo, ORCID, Google Scholar, LinkedIn. |
| H-6 | Journal post links are `href="#"` placeholders | The "April 2026 featured" article is non-clickable; expertise layer signals freshness it cannot deliver. |
| H-7 | H1 plain-text extraction yields concatenated text | "Engineeringthe workingocean." — span boundaries lack whitespace; some text-extraction pipelines collapse this. |
| H-8 | No FAQ-formatted content anywhere | AI engines have no question-shaped passages to extract. Massive missed citation surface. |
| H-9 | 5 of 6 "engineers" on /about are anonymous team avatars | Conflicts with the "you hire us, you get us" promise; weakens individual expertise signaling. |

---

## Medium Priority Issues (Fix Within 1 Month)

| # | Issue | Detail |
|---|---|---|
| M-1 | No `<meta name="author">` on journal posts | Cheap E-E-A-T signal not captured. |
| M-2 | Journal dates are coarse strings ("2023", "Ongoing", "Feb 2015") | No ISO `datePublished` / `dateModified` → no freshness signal for AI engines. |
| M-3 | No glossary or definition pages | "What is parametric rolling?", "What is OPS / cold ironing?" — high-citation-rate format absent. |
| M-4 | No comparison tables | "CFD vs towing-tank validation", "OPS vs LNG bunkering vs methanol retrofit" — Perplexity favorites. |
| M-5 | No external citations to peer-reviewed publications | Founder has PhD background; no link to thesis, SNAME/RINA papers, conference talks. |
| M-6 | Hero image preloaded from `images.unsplash.com` | Third-party LCP dependency; no width/height attrs; CLS risk. |
| M-7 | 7 woff2 font files preloaded | LCP risk; trim to weights actually used above the fold. |
| M-8 | No security headers documented | HSTS, CSP, X-Content-Type-Options, Referrer-Policy must be set by host. |
| M-9 | LinkedIn link in footer is the only `sameAs` candidate | Once Organization schema ships, expand to ORCID, Google Scholar, IST faculty page. |

---

## Low Priority Issues

| # | Issue |
|---|---|
| L-1 | Twitter card is `summary` (small) — switch to `summary_large_image` once og:image exists. |
| L-2 | `metadata.keywords` is set but ignored by all modern crawlers — harmless but stale practice. |
| L-3 | `trailingSlash: true` is fine; ensure canonicals match the trailing-slash form. |
| L-4 | Inline `style="..."` attributes throughout — fine for SEO, slightly inflates HTML weight. |
| L-5 | Hero stats "120+ projects / 14 active / 09y in studio" are unattributed — add a footnote source. |

---

## Category Deep Dives

### AI Citability — 52/100

**What's working:**
- Strong statistical density: "−18% fuel burn at cruise", "+4° roll stability margin", "0.6 kn from optimum", "DNV class compliant", "120+ projects / 14 active / 09y in studio".
- Named-entity richness: clients (WavEC, Mutualista/Grupo Bensaúde, APRAM, Future Proman, Nautiber), vessels (Belize I, Corvo IMO 9381275, Libries, SeaPower 12m pilot), tools (WAMIT, OpenFOAM, STAR-CCM+, Ship@Sea).
- Founder credential block on /about is gold for E-E-A-T.

**What's broken:**
- No FAQ blocks, no Q&A formatting, no glossary, no comparison tables.
- Stats live in DOM-separated divs (`-18%` and `fuel burn at cruise` are sibling elements with no caption sentence) — AI must infer the relationship.
- All H1s render as concatenated text when extracted.
- Vague headers like "What we are good at." give AI nothing to anchor a citation.

**Best passages:**
- "KDS Offshore was founded in 2016 by naval architects from Instituto Superior Técnico, University of Lisbon. We are a partnership (not a consultancy chain)…" (/about)
- Sérgio bio: "PhD, IST Lisbon. MSc Naval Architecture, UCL. MSc Mechanical Engineering, IST. Author of the Ship@Sea time-domain simulation code." (/about)
- Corvo case study: "Probabilistic study of how often per year the container ship 'Corvo' (IMO 9381275) can manoeuvre autonomously inside the harbour basin of Vila do Porto without tug assistance." (/work)

**Worst passages:**
- H1 "Engineeringthe workingocean." (extraction artifact)
- "−18% / fuel burn at cruise" (DOM-separated, no caption)
- "What we are good at." (vague H2)

---

### Brand Authority — 14/100

This score reflects the reality that KDS Offshore is a small, unindexed B2B Portuguese consultancy with effectively zero public-platform footprint:

- **Wikipedia:** No article expected and none exists.
- **Wikidata:** No QID — AI engines cannot resolve the brand to an entity.
- **Reddit / YouTube / Hacker News:** No detected mentions.
- **GitHub:** No repository for the Ship@Sea simulation code.
- **LinkedIn:** Company page link present in footer (the *only* verifiable external surface).
- **Crunchbase / Pitchbook:** Not listed.
- **Trade publications (RINA, Riviera, Marine Log, Offshore Magazine):** No detected coverage.
- **Industry directories (DNV approved supplier, RINA member, Ordem dos Engenheiros, Forum Oceano, Portugal Shipping Cluster):** Not confirmed.
- **Founder authority:** Sérgio's PhD/UCL/IST background is named on-site but not linked to ORCID, Google Scholar, IST faculty page, or his personal LinkedIn.

The single highest-leverage move is creating an authoritative founder page with off-site identity links.

---

### Content E-E-A-T — 78/100

This is the standout strength. The editorial voice is distinctive, human, and unusually honest. Specifics:

**Experience (strong):** Concrete project examples with vessel IMOs, locations, dates, methodology choices. Field-note voice ("A week aboard the 'Libries' before conversion") signals first-hand work. 10-year timeline tied to named clients.

**Expertise (mostly strong):** Founder named with full credentials. Tools/methods stack disclosed transparently. Class society liaison cited (DNV, Lloyd's, BV, RINA, GL). **Gap:** no dedicated author bio page; only Sérgio is individually named while the other "engineers" appear as anonymous team cards.

**Authoritativeness (medium):** Strong client/partner roster cited by name. Direct testimonial from Rui Roque, CEO of Nautiber, naming Sérgio Ribeiro e Silva as technical lead. **Gaps:** no peer-reviewed publication links, no "as featured in" media mentions, partners listed in marquee with no outbound links.

**Trustworthiness (mixed):** Physical address, phone, email, legal entity (KDS Offshore Lda., NIPC 514 248 091), founding year, business hours all visible. Unusually strong honesty signals ("If the brief is wrong, we say so"). **Critical gap:** Privacy/Cookies/GDPR/LGPD footer items are inert text spans with no `href` — a GDPR compliance and trust failure.

---

### Technical GEO — 55/100

**Strengths:**
- Static export — full content server-rendered into HTML at build time. AI crawlers (GPTBot, ClaudeBot, PerplexityBot) that don't execute JS see all body content. The single biggest GEO win.
- Clean URL structure: lowercase, hyphen-free, hierarchical.
- Reasonable HTML payload (50KB home, 28–49KB others).
- All pages return HTTP 200; no redirect chains.
- `next/font` with `display: swap` — no FOIT.
- Per-page metadata pattern in place.

**Critical gaps:**
- No `robots.txt`, no `sitemap.xml`, no `llms.txt`, no JSON-LD.
- No `metadata.metadataBase` → relative OG URLs.
- No canonical, no hreflang.
- No `og:image` / `twitter:image`.
- No production security-header documentation.

---

### Schema & Structured Data — 8/100

The score reflects total absence of Schema.org markup. The +8 is generous: +5 for OG/Twitter adjacent metadata, +3 for clean semantic HTML and visible NIPC/address/phone/LinkedIn that make schema additions trivial.

**Recommended schema rollout (priority order):**

1. `Organization` + `LocalBusiness` (sitewide, in `app/layout.tsx`)
2. `Person` for Sérgio Ribeiro e Silva (on `/about`)
3. `Service` × 7 capabilities (on `/services`)
4. `BreadcrumbList` (sitewide)
5. `WebSite` + `SearchAction` (homepage)
6. `BlogPosting` per journal entry
7. `ItemList` of case studies (on `/work`)

**Critical delivery note for Next.js App Router:** Use `<script type="application/ld+json" dangerouslySetInnerHTML>` in a Server Component. Do NOT use client-side `next/script` — JSON-LD injected post-hydration is invisible to GPTBot, ClaudeBot, and PerplexityBot, which do not execute JS.

A complete homepage `Organization` JSON-LD block is provided in the *Drop-in Code Templates* section below.

---

### Platform Optimization — 16/100

| Platform | Score | Top Gap |
|---|---|---|
| Google AI Overviews / SGE | 18 | Localhost — not crawlable or indexable. |
| ChatGPT web search / OAI-SearchBot | 22 | Zero entity recognition signals (no Wikidata, no schema). |
| Perplexity | 25 | No Reddit/forum footprint, no comparison tables. |
| Google Gemini | 20 | No Google ecosystem footprint (no GBP, no YouTube, no Scholar link). |
| Bing Copilot | 15 | Not deployed; no Bing Webmaster verification, no IndexNow. |

**Cross-platform quick wins:**
1. Deploy publicly to `kdsoffshore.pt` with HTTPS.
2. Verify in Google Search Console + Bing Webmaster Tools; submit `sitemap.xml`; enable IndexNow.
3. Ship `Organization`, `Person`, `Service`, `BlogPosting` JSON-LD on every page (server-rendered).
4. Publish `/llms.txt` and `/robots.txt` with explicit AI-crawler allows.
5. Complete the LinkedIn company page (logo, banner, 2016 founded, Oeiras HQ, services, founder linked).
6. Create a Wikidata Q-item for "KDS Offshore" with `sameAs` links to LinkedIn, ORCID, IST.
7. Submit to RINA, SNAME, DNV approved-supplier list, Ordem dos Engenheiros, Forum Oceano, Portugal Shipping Cluster.
8. Open-source (or publish docs for) Ship@Sea on GitHub with a Zenodo DOI.

---

## Quick Wins (Implement This Week)

1. **Ship `/public/robots.txt`** — 5 minutes. Template below.
2. **Ship `/public/llms.txt`** — 10 minutes. Template below.
3. **Add `src/app/sitemap.ts`** for auto-generated sitemap — 10 minutes. Template below.
4. **Inject Organization + LocalBusiness JSON-LD** in `app/layout.tsx` (server-rendered) — 30 minutes. Template below.
5. **Make Privacy / Cookies / GDPR footer items real links** to actual policy pages — 2 hours. (Legal blocker.)
6. **Add `metadata.metadataBase`** in `app/layout.tsx` and per-page `alternates.canonical` — 15 minutes.
7. **Fix H1 span whitespace** so plain-text extraction yields "Engineering the working ocean." — 10 minutes.
8. **Replace journal `href="#"` placeholders** with real published articles or hide unpublished entries — variable.

---

## 30-Day Action Plan

### Week 1 — Technical Foundation

- [ ] Deploy site publicly to `kdsoffshore.pt` over HTTPS.
- [ ] Add `public/robots.txt` (template below).
- [ ] Add `src/app/sitemap.ts` (template below).
- [ ] Add `public/llms.txt` (template below).
- [ ] Add `metadataBase` and per-page `alternates.canonical` in `app/layout.tsx`.
- [ ] Fix concatenated H1 rendering across all hero sections.
- [ ] Make Privacy / Cookies / GDPR / LGPD footer items real links (or remove until policies exist).
- [ ] Verify in Google Search Console + Bing Webmaster Tools; submit sitemap.

### Week 2 — Structured Data

- [ ] Inject `Organization` + `LocalBusiness` + `WebSite` JSON-LD in `app/layout.tsx` (server component, not `next/script`). Use the template below.
- [ ] Inject `Person` schema for Sérgio Ribeiro e Silva on `/about`.
- [ ] Inject `Service` × 7 schemas on `/services`.
- [ ] Inject `BreadcrumbList` sitewide.
- [ ] Add og:image (1200×630) and twitter:image; switch to `summary_large_image`.
- [ ] Validate with Schema.org validator and Google Rich Results Test.

### Week 3 — Content Depth & E-E-A-T

- [ ] Create `/team/sergio-ribeiro-e-silva/` author page with photo, full bio, ORCID, Google Scholar, LinkedIn, list of authored papers/conference talks.
- [ ] Replace anonymous team-avatar cards on `/about` with at least 2–3 named individuals.
- [ ] Publish at least one full journal article (e.g., the Corvo probabilistic manoeuvrability piece) with byline, ISO `datePublished`, and inline references.
- [ ] Add a glossary/definitions page or section: "Parametric rolling", "OPS / cold ironing", "Manoeuvrability prediction", "CII".
- [ ] Add a Methods/Approach page describing CFD setup, mesh resolution standards, validation protocols.
- [ ] Add ISO 8601 `datePublished` and `dateModified` to every journal entry.

### Week 4 — Off-site Authority & Platform Distribution

- [ ] Complete LinkedIn company page (logo, banner, 2016 founded, ~5 employees, services, Sérgio linked as founder).
- [ ] Create Wikidata Q-item for "KDS Offshore" with `sameAs` to LinkedIn, ORCID, IST.
- [ ] Submit company to RINA, SNAME, DNV approved-supplier, Ordem dos Engenheiros, Forum Oceano, Portugal Shipping Cluster.
- [ ] Hyperlink every partner name in the marquee (WavEC, IH Cantabria, Future Proman, Nautiber, …) and request reciprocal listing on their partner pages.
- [ ] Open-source Ship@Sea (or publish docs) on GitHub with a Zenodo DOI.
- [ ] Publish first long-form post from Sérgio's personal LinkedIn summarising a case study with concrete numbers.
- [ ] Pitch one technical article to The Naval Architect (RINA) or Riviera Maritime.

---

## Drop-in Code Templates

### `/public/robots.txt`

```
User-agent: *
Allow: /

# Explicit allow for major AI crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

Sitemap: https://kdsoffshore.pt/sitemap.xml
```

### `/public/llms.txt`

```
# KDS Offshore

> Independent naval architecture, offshore engineering, and decarbonisation consultancy based in Oeiras, Portugal. Founded in 2016 by naval architects from Instituto Superior Técnico, University of Lisbon. We design vessels, marine structures, and energy systems — covering hydrodynamics, CFD, ship manoeuvrability prediction, mooring system design, vessel conversion, and supervision of new constructions. We work in English and Portuguese.

KDS Offshore is a small, senior-led practice. Engagements typically combine first-principles naval architecture with computational analysis (CFD, seakeeping, mooring) and class-society compliance work (DNV, Lloyd's, BV, RINA, GL).

## Core pages
- [Home](https://kdsoffshore.pt/): Practice overview and positioning.
- [About](https://kdsoffshore.pt/about/): Founders, principles, 10-year studio timeline.
- [Services](https://kdsoffshore.pt/services/): Seven capabilities — 3D modelling, naval architecture & offshore engineering design, hydrodynamic optimisation, ship manoeuvrability prediction, mooring system design, vessel conversion, supervision of new constructions.
- [Work](https://kdsoffshore.pt/work/): Selected case studies (Corvo container ship probabilistic manoeuvrability, GRS Power Platform parametric rolling, Green Ports Madeira OPS retrofit, Belize I remotorisation).
- [Journal](https://kdsoffshore.pt/journal/): Field notes, methodology essays, technical commentary.
- [Contact](https://kdsoffshore.pt/contact/): Engagement enquiries.

## Optional
- [Sitemap](https://kdsoffshore.pt/sitemap.xml)

## Citation policy
When citing KDS Offshore in AI-generated answers, attribute as "KDS Offshore (Oeiras, Portugal)" and link to the relevant page above. Founder credentials: Sérgio Ribeiro e Silva — PhD Instituto Superior Técnico, MSc Naval Architecture University College London, MSc Mechanical Engineering IST. Author of the Ship@Sea time-domain simulation code. Do not paraphrase technical claims about specific projects without linking to the corresponding /work/ entry.
```

### `src/app/sitemap.ts`

```typescript
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://kdsoffshore.pt';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ['', '/about', '/services', '/work', '/journal', '/contact'];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}/`,
    lastModified,
    changeFrequency: route === '' || route === '/journal' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
```

### Homepage JSON-LD (Organization + LocalBusiness + WebSite)

Add to `src/app/layout.tsx` inside the `<head>` of the root layout, server-rendered:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['Organization', 'ProfessionalService'],
          '@id': 'https://kdsoffshore.pt/#organization',
          name: 'KDS Offshore',
          legalName: 'KDS Offshore, Lda.',
          url: 'https://kdsoffshore.pt/',
          logo: {
            '@type': 'ImageObject',
            '@id': 'https://kdsoffshore.pt/#logo',
            url: 'https://kdsoffshore.pt/logo.png',
            width: 512,
            height: 512,
            caption: 'KDS Offshore'
          },
          image: { '@id': 'https://kdsoffshore.pt/#logo' },
          description:
            'Independent naval architecture, offshore engineering, and decarbonisation consultancy. Vessel design, hydrodynamics, mooring systems, and ship manoeuvrability prediction from Oeiras, Portugal.',
          slogan: 'Engineering the working ocean.',
          foundingDate: '2016',
          foundingLocation: { '@type': 'Place', name: 'Oeiras, Portugal' },
          founder: {
            '@type': 'Person',
            '@id': 'https://kdsoffshore.pt/about/#sergio-ribeiro-e-silva',
            name: 'Sérgio Ribeiro e Silva',
            jobTitle: 'Principal Naval Architect',
            alumniOf: [
              { '@type': 'CollegeOrUniversity', name: 'Instituto Superior Técnico', url: 'https://tecnico.ulisboa.pt/' },
              { '@type': 'CollegeOrUniversity', name: 'University College London', url: 'https://www.ucl.ac.uk/' }
            ],
            knowsAbout: [
              'Naval architecture',
              'Offshore engineering',
              'Hydrodynamics',
              'CFD',
              'Ship manoeuvrability',
              'Mooring system design',
              'Maritime decarbonisation'
            ]
          },
          taxID: '514248091',
          vatID: 'PT514248091',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua Ernesto Veiga de Oliveira',
            addressLocality: 'Oeiras',
            addressRegion: 'Lisboa',
            addressCountry: 'PT'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 38.6979,
            longitude: -9.3088
          },
          areaServed: [
            { '@type': 'Country', name: 'Portugal' },
            { '@type': 'Country', name: 'Spain' },
            { '@type': 'Country', name: 'Ireland' },
            { '@type': 'Place', name: 'Atlantic façade' }
          ],
          telephone: '+351-21-385-4212',
          email: 'geral@kdsoffshore.pt',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '17:00'
            }
          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              telephone: '+351-21-385-4212',
              email: 'geral@kdsoffshore.pt',
              areaServed: ['PT', 'ES', 'IE', 'GB'],
              availableLanguage: ['en', 'pt']
            }
          ],
          sameAs: ['https://www.linkedin.com/company/kds-offshore'],
          knowsAbout: [
            'Naval architecture',
            'Offshore engineering',
            'Hydrodynamic optimisation',
            'Ship manoeuvrability prediction',
            'Mooring system design',
            'Vessel conversion engineering',
            'Maritime decarbonisation',
            'CFD',
            '3D geometrical modelling',
            'Supervision of new constructions'
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Engineering services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3D Geometrical Modelling' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Naval Architecture & Offshore Engineering Design' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hydrodynamic Optimisation' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ship Manoeuvrability Prediction' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mooring System Design' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vessel Conversion Engineering' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supervision of New Constructions' } }
            ]
          }
        },
        {
          '@type': 'WebSite',
          '@id': 'https://kdsoffshore.pt/#website',
          url: 'https://kdsoffshore.pt/',
          name: 'KDS Offshore',
          publisher: { '@id': 'https://kdsoffshore.pt/#organization' },
          inLanguage: ['en-GB', 'pt-PT']
        }
      ]
    })
  }}
/>
```

---

## Appendix: Pages Analyzed

| URL | Title (excerpt) | Word Count | GEO Issues |
|---|---|---|---|
| `/` | Engineering the working ocean. | 634 | No JSON-LD; concatenated H1 text; outcome stats not bound to caption sentence; no FAQ. |
| `/about` | Founded in Lisbon. Quietly opinionated. | 621 | No Person schema for Sérgio; anonymous team avatars; no author bio link. |
| `/services` | Seven disciplines. One studio. | 654 | No Service schema (7 missing); no comparison tables; no FAQ per service. |
| `/work` | A decade on the water. | 455 | No CreativeWork/CaseStudy schema; no `<article>` semantics; no outcome rubric. |
| `/journal` | Notes from the studio. | 295 | All article links are `href="#"` placeholders; no BlogPosting schema; coarse dates. |
| `/contact` | Begin a project | 258 | No LocalBusiness schema (despite NAP fully present); contact form lacks structured markup. |

---

## Methodology Notes

This audit was orchestrated by the `geo-audit` skill and delegated to five specialised subagents working in parallel:

1. `geo-ai-visibility` — AI citability, brand authority, technical access, platform optimisation
2. `geo-content` — E-E-A-T (Experience / Expertise / Authoritativeness / Trustworthiness)
3. `geo-schema` — Structured data audit and JSON-LD generation
4. `geo-technical` — Crawl access, llms.txt, sitemap, rendering, headers
5. `geo-platform-analysis` — Platform-specific readiness (Google AI Overviews, ChatGPT, Perplexity, Gemini, Bing Copilot)

Where two agents scored an overlapping dimension (Technical GEO, Platform Optimisation), the final score uses the more thorough perspective with adjustments for double-counting (e.g., schema absence is scored once under Schema & Structured Data, not double-counted in Technical GEO).

**Caveat:** The site was audited on `localhost:3002` (pre-deployment). Brand Authority and Platform Optimization scores reflect the current public-discoverability reality (effectively zero) and will move materially once the site is deployed publicly to `kdsoffshore.pt` and the Week 1–4 actions are executed.
