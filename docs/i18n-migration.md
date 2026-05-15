# i18n Migration Plan — SEO/GEO-Optimised Multilingual Routing

**Status:** Proposed — awaiting approval before execution
**Author:** Engineering, with Claude
**Date:** 2026-05-15
**Decision owner:** Francisco

---

## 1. Problem

The current implementation toggles language **client-side** via React Context + `localStorage` ([src/contexts/site-context.tsx](../src/contexts/site-context.tsx)) on a static-exported Next.js 16 site. Both languages share the same URL set.

This breaks both classical SEO and GEO (Generative Engine Optimisation) in seven specific ways:

| # | Issue | Source | Impact |
|---|---|---|---|
| 1 | One URL serves two languages | [src/app/page.tsx](../src/app/page.tsx), all routes | Google indexes only the default render. PT content is invisible to search. |
| 2 | AI crawlers don't execute JS | GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended | They only ever see the default English bundle. PT has zero AI citability. |
| 3 | `<html lang="en-GB">` hardcoded | [src/app/layout.tsx:274](../src/app/layout.tsx#L274) | Even the `lang` attribute is wrong for crawlers visiting "PT" content. |
| 4 | `alternates.languages` only declares `en-GB` | [src/app/layout.tsx:62-68](../src/app/layout.tsx#L62-L68) | No `hreflang` chain exists. PT is undeclared. |
| 5 | `WebSite` JSON-LD claims two `inLanguage` values without two URLs | [src/app/layout.tsx:266](../src/app/layout.tsx#L266) | Schema misrepresents reality. |
| 6 | Single `llms.txt`, `llms-full.txt` | [public/llms.txt](../public/llms.txt) | AI search ecosystems see one language. |
| 7 | First paint always EN regardless of visitor | [src/contexts/site-context.tsx:28-33](../src/contexts/site-context.tsx#L28-L33) | PT visitors see EN until JS hydrates and reads localStorage. |

## 2. Decisions (locked)

Captured from product owner Q&A on 2026-05-15:

| Decision | Choice | Rationale |
|---|---|---|
| URL structure | **PT at `/`, EN at `/en/`** | Aligns with `.pt` ccTLD; preserves existing URLs; future locales add cleanly under `/es/`, `/fr/`, etc. |
| Migration mode | **Cutover, not dual-publish** | Simpler. Existing URLs keep working (just serve PT instead of EN). |
| Launch locales | **`pt-PT` (default), `en-GB`** | Current authored content. |
| Translation flow | **JSON catalogs, manually edited (no TMS yet)** | Simpler tooling, easier diffs, ready to integrate Crowdin/Lokalise later. |
| EN discovery from `/` | **Visible language toggle in nav, no auto-redirect** | Static-export friendly, no JS flash, clean crawler signals. |

## 3. Target architecture

### 3.1 URL map

```
PT (default — no prefix)              EN (prefixed)
/                                  ↔  /en/
/about/                            ↔  /en/about/
/services/                         ↔  /en/services/
/services/[slug]/                  ↔  /en/services/[slug]/
/work/                             ↔  /en/work/
/work/[slug]/                      ↔  /en/work/[slug]/
/team/[slug]/                      ↔  /en/team/[slug]/
/journal/                          ↔  /en/journal/
/journal/[slug]/                   ↔  /en/journal/[slug]/
/contact/                          ↔  /en/contact/
/methods/                          ↔  /en/methods/
/glossary/                         ↔  /en/glossary/
/publications/                     ↔  /en/publications/
/legal/                            ↔  /en/legal/
/privacy/                          ↔  /en/privacy/
/cookies/                          ↔  /en/cookies/
```

Future locales: `/es/...`, `/fr/...` — additive, zero refactor.

### 3.2 Stack

- **`next-intl`** (>= 4.x) — App Router + static-export support, hreflang helpers, message catalogs
  - `localePrefix: 'as-needed'`
  - `defaultLocale: 'pt-PT'`
  - `locales: ['pt-PT', 'en-GB']`
- **JSON message catalogs** in `src/messages/{pt-PT,en-GB}/...json`
- **Auto-generated message types** via `next-intl`'s `IntlMessages` declaration
- **No middleware** — kept incompatible with `output: 'export'`. Locale resolution happens via the route param at build time.

### 3.3 File-system layout (after migration)

> **Architectural refinement (post-research, 2026-05-15):** `localePrefix: 'as-needed'` officially relies on next-intl middleware, which is incompatible with `output: 'export'`. The static-export-compatible way to serve the default locale at root + non-default locales under a prefix is a **route-group pattern**: one tree for the default locale (PT) inside a `(default)` route group, a parallel `[locale]` tree for non-default locales. Both trees import the same page bodies from shared components, so duplication is structural only (one-line `page.tsx` shells).

```
src/
├── app/
│   ├── layout.tsx                        # Root <html>/<body>/fonts only (no NextIntlClientProvider)
│   ├── not-found.tsx                     # 404 (PT default copy)
│   ├── sitemap.ts                        # Emits all (route × locale) entries with hreflang
│   ├── robots.ts                         # (NEW) replaces public/robots.txt, references sitemap
│   ├── llms.txt/route.ts                 # (NEW) PT llms.txt at /llms.txt
│   ├── globals.css
│   │
│   ├── (default)/                        # Route group → PT pages at "/", no URL segment
│   │   ├── layout.tsx                    # NextIntlClientProvider hardcoded to 'pt-PT'
│   │   ├── page.tsx                      # PT home at /
│   │   ├── about/page.tsx                # /about/  (PT)
│   │   ├── services/page.tsx
│   │   ├── services/[slug]/page.tsx
│   │   ├── work/page.tsx
│   │   ├── work/[slug]/page.tsx
│   │   ├── team/[slug]/page.tsx
│   │   ├── journal/page.tsx
│   │   ├── journal/[slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── methods/page.tsx
│   │   ├── glossary/page.tsx
│   │   ├── publications/page.tsx
│   │   ├── legal/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── cookies/page.tsx
│   │
│   └── [locale]/                         # Non-default locales → /en/, /es/, /fr/...
│       ├── layout.tsx                    # NextIntlClientProvider from param, JSON-LD per locale
│       ├── page.tsx                      # /en/, /es/, /fr/...
│       ├── llms.txt/route.ts             # (NEW) /en/llms.txt etc.
│       ├── about/page.tsx                # /en/about/
│       ├── services/page.tsx
│       ├── services/[slug]/page.tsx
│       ├── work/page.tsx
│       ├── work/[slug]/page.tsx
│       ├── team/[slug]/page.tsx
│       ├── journal/page.tsx
│       ├── journal/[slug]/page.tsx
│       ├── contact/page.tsx
│       ├── methods/page.tsx
│       ├── glossary/page.tsx
│       ├── publications/page.tsx
│       ├── legal/page.tsx
│       ├── privacy/page.tsx
│       └── cookies/page.tsx
│
├── views/                                # (NEW) Shared page bodies imported by both trees
│   ├── home-view.tsx
│   ├── about-view.tsx
│   ├── services-view.tsx
│   ├── services-detail-view.tsx
│   ├── work-view.tsx
│   ├── work-detail-view.tsx
│   ├── team-detail-view.tsx
│   ├── journal-view.tsx
│   ├── journal-detail-view.tsx
│   ├── contact-view.tsx
│   ├── methods-view.tsx
│   ├── glossary-view.tsx
│   ├── publications-view.tsx
│   ├── legal-view.tsx
│   ├── privacy-view.tsx
│   └── cookies-view.tsx
├── i18n/
│   ├── routing.ts                        # locales, defaultLocale, localePrefix
│   ├── request.ts                        # getRequestConfig — load messages per locale
│   └── navigation.ts                     # Re-exports Link/redirect/usePathname/useRouter
├── messages/
│   ├── pt-PT.json                        # Migrated from src/content/pt.ts
│   └── en-GB.json                        # Migrated from src/content/en.ts
├── components/
│   ├── nav.tsx                           # Replace useSite().lang → useLocale()
│   ├── footer.tsx                        # Replace useSite().lang → useLocale()
│   ├── language-toggle.tsx               # (NEW) extracted; uses next-intl Link
│   └── ...                                # Other components unchanged
├── contexts/
│   └── site-context.tsx                  # Trimmed to theme only (no lang)
└── content/
    ├── cases-detail.ts                   # Refactored: slug + non-translatable fields only
    ├── journal-detail.ts                 # Same
    ├── services-detail.ts                # Same
    └── team-detail.ts                    # Same
```

### 3.4 Configuration files

**`next.config.js`** — wrap with `next-intl/plugin`:

```js
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { root: __dirname },
};

module.exports = withNextIntl(nextConfig);
```

**`src/i18n/routing.ts`** (Phase 1 implementation):

```ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt-PT', 'en-GB'],
  defaultLocale: 'pt-PT',
  localePrefix: {
    mode: 'as-needed',
    prefixes: {
      'en-GB': '/en', // shorten from default /en-GB
    },
  },
});

export type Locale = (typeof routing.locales)[number];
```

> Note: `mode: 'as-needed'` is the *intent* for URL design. For static export, **the file-system structure (route group `(default)/` + `[locale]/`) — not the routing config — produces the actual URL shape**. The `routing` object is still used by next-intl helpers (Link, getPathname) so they generate correct hrefs, e.g. `Link href="/about" locale="en-GB"` becomes `/en/about`.

**`src/i18n/request.ts`** — load messages per locale:

```ts
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

**`src/i18n/navigation.ts`** — locale-aware Link/router:

```ts
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
```

**`src/app/(default)/layout.tsx`** — PT root layout (Phase 2):

```tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';

const PT_LOCALE = 'pt-PT' as const;

export default async function DefaultLayout({ children }: { children: React.ReactNode }) {
  setRequestLocale(PT_LOCALE);
  const messages = await getMessages({ locale: PT_LOCALE });
  return (
    <NextIntlClientProvider locale={PT_LOCALE} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
```

**`src/app/[locale]/layout.tsx`** — Non-default locales layout (Phase 2):

```tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

// Critical: exclude the default locale — it lives under app/(default)/ instead.
// This prevents /pt-PT/ duplicates of every PT page.
export function generateStaticParams() {
  return routing.locales
    .filter((locale) => locale !== routing.defaultLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.site' });
  return {
    metadataBase: new URL('https://kdsoffshore.pt'),
    title: { template: `%s · ${t('name')}`, default: t('title') },
    description: t('description'),
    alternates: {
      canonical: locale === 'pt-PT' ? '/' : `/${locale.split('-')[0]}`,
      languages: {
        'pt-PT': '/',
        'en-GB': '/en',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale.replace('-', '_'),
      alternateLocale: locale === 'pt-PT' ? 'en_GB' : 'pt_PT',
      // ...
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as never)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} data-theme="dark" className={/* fonts */}>
      <head>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrgJsonLd(locale)) }} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SiteProvider>
            <Nav />
            <main>{children}</main>
            <Footer />
          </SiteProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

`buildOrgJsonLd(locale)` returns the existing schema with `inLanguage` set to the active locale and `url` pointing to the locale-specific home (`/` or `/en/`).

## 4. Content migration

### 4.1 What translates vs what doesn't

| Data | Lives in | Translatable? | Action |
|---|---|---|---|
| UI strings (nav, hero, CTAs) | `src/content/en.ts`, `src/content/pt.ts` | Yes | Move to `src/messages/{locale}.json` |
| Service slugs (`'3d-geometric-modelling'`) | `src/content/services-detail.ts` | **No** — slugs stay English (URL stability) | Keep as-is in `services-detail.ts` |
| Service titles/descriptions | Same | Yes | Move title/description into messages keyed by slug |
| Journal article bodies | `src/content/journal-detail.ts` | Yes | One messages namespace per article slug |
| Team bios | `src/content/team-detail.ts` | Yes | Same pattern |
| Case study copy | `src/content/cases-detail.ts` | Yes | Same pattern |
| `dateModified`, `dateCreated`, slugs | All `*-detail.ts` | No | Keep in `*-detail.ts` |

**Slug policy:** Keep slugs identical across locales (`/services/maritime-decarbonisation/` and `/en/services/maritime-decarbonisation/`). Trade-off: PT URL has English-rooted slug. Alternative is per-locale slug maps — defer that decision; raise as future enhancement only if SEO research shows PT-language slugs materially improve PT-language ranking.

### 4.2 Message catalog structure (illustrative)

`src/messages/pt-PT.json`:

```json
{
  "meta": {
    "site": {
      "name": "KDS Offshore",
      "title": "KDS Offshore — Arquitectura Naval & Engenharia Offshore...",
      "description": "..."
    }
  },
  "nav": {
    "home": "Início",
    "services": "Serviços",
    "work": "Projectos",
    "about": "Sobre",
    "journal": "Diário",
    "contact": "Contacto",
    "cta": "Iniciar um projecto"
  },
  "hero": {
    "eyebrow": "Arquitectura naval / engenharia offshore / ...",
    "title1": "Arquitectura Naval",
    ...
  },
  "services": {
    "label": "Capacidades",
    "title": "Aquilo em que somos bons.",
    "items": {
      "3d-geometric-modelling": {
        "title": "Modelação Geométrica 3D",
        "description": "Geometria CAD de qualidade industrial..."
      },
      ...
    }
  }
}
```

Components consume via `useTranslations`:

```tsx
const t = useTranslations('hero');
return <h1>{t('title1')}</h1>;
```

## 5. SEO/GEO assets

### 5.1 Sitemap ([src/app/sitemap.ts](../src/app/sitemap.ts))

Rewrite to emit one entry per (route × locale) with `alternates.languages`:

```ts
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/work', /* ... */];
  const locales = ['pt-PT', 'en-GB'] as const;

  return routes.flatMap((path) =>
    locales.map((locale) => ({
      url: `${BASE_URL}${localeUrl(locale, path)}`,
      lastModified: now,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}${localeUrl(l, path)}`]),
        ),
      },
    })),
  );
}

function localeUrl(locale: string, path: string): string {
  const prefix = locale === 'pt-PT' ? '' : `/${locale.split('-')[0]}`;
  return `${prefix}${path}/`;
}
```

### 5.2 robots.txt

Convert `public/robots.txt` to dynamic [src/app/robots.ts](../src/app/robots.ts) so AI crawler allowlists (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended) are version-controlled in code and the sitemap reference stays in sync.

### 5.3 llms.txt — hybrid root-default + per-locale variants

The llms.txt spec doesn't formally address multilingualism (verified 2026-05-15). Two patterns are competing in the wild; we adopt a **hybrid** that satisfies both:

**Discoverability rule (non-negotiable):** Most AI crawlers fetch `/llms.txt` from the site root only. A file at `/en/llms.txt` *without* one at `/llms.txt` may be missed entirely. (Confirmed in industry guidance and the Drupal `llms_txt` contrib module's current scope decision.)

**Localization rule:** Each locale's URL list must reference that locale's URLs natively — you cannot just translate the index, because the URLs differ.

**Solution: hierarchical, with the root file in the default locale (PT):**

| File | Language | Source |
|---|---|---|
| `/llms.txt` | PT | `src/app/llms.txt/route.ts` |
| `/llms-full.txt` | PT | `src/app/llms-full.txt/route.ts` |
| `/en/llms.txt` | EN | `src/app/[locale]/llms.txt/route.ts` |
| `/en/llms-full.txt` | EN | `src/app/[locale]/llms-full.txt/route.ts` |
| Future `/es/llms.txt`, `/fr/llms.txt` (etc.) | per locale | Same dynamic route, generated by `generateStaticParams` |

The root `/llms.txt` (PT) **must include a link block** advertising the locale variants, so link-following crawlers can find them:

```markdown
## Available languages
- [English version](https://kdsoffshore.pt/en/llms.txt)
- [Versão portuguesa (atual)](https://kdsoffshore.pt/llms.txt)
```

A single shared generator function `buildLlmsTxt(locale, variant: 'index' | 'full')` keeps the two locales in lockstep — fed by the message catalogue's `meta.site` and the same route list used by `sitemap.ts`. This guarantees the llms.txt graph stays aligned with `hreflang` and canonical URLs.

**Risk note:** This convention may shift as the spec matures. The hybrid is the most defensible position today because it satisfies both root-discovery and locale-awareness simultaneously — if the spec later mandates one pattern, only the link block (not the file structure) needs to change.

### 5.4 JSON-LD per locale

Move `ORGANIZATION_JSONLD` from [src/app/layout.tsx:104](../src/app/layout.tsx#L104) into a builder function `buildOrgJsonLd(locale)` that:

- Sets `url` to the locale-specific home (`/` for PT, `/en/` for EN)
- Sets `WebSite['@type'].inLanguage` to the **active** locale only (not the array)
- Renders `description`, `slogan` from the message catalog
- Keeps `availableLanguage: ['en', 'pt']` on `contactPoint` (that field is correct as-is)

Per-page JSON-LD (e.g. `BreadcrumbList` in [src/components/breadcrumb-jsonld.tsx](../src/components/breadcrumb-jsonld.tsx), `ScholarlyArticle` in publications, `FAQPage` in journal articles) needs the same locale-awareness pass.

## 6. Component changes

| File | Change |
|---|---|
| [src/contexts/site-context.tsx](../src/contexts/site-context.tsx) | Remove `lang` state and `toggleLang`. Keep `theme`. Rename to `theme-context.tsx`. |
| [src/components/nav.tsx](../src/components/nav.tsx) | Replace `useSite().lang` with `useLocale()` from `next-intl`. Replace text lookups (`t.nav.home` style) with `useTranslations('nav')`. Use `next-intl`'s `Link` for locale-aware navigation. |
| [src/components/footer.tsx](../src/components/footer.tsx) | Same pattern as nav. |
| [src/components/journal-article-body.tsx](../src/components/journal-article-body.tsx) | Same. |
| [src/components/service-cta.tsx](../src/components/service-cta.tsx) | Same. |
| **New:** `src/components/language-toggle.tsx` | Reads current pathname, toggles between `/` ↔ `/en/...`. Uses `next-intl`'s `useRouter().replace({pathname}, {locale})`. |
| All `src/app/[route]/page.tsx` | Move to `src/app/[locale]/[route]/page.tsx`. Replace content imports with `useTranslations()` calls. `params` becomes `Promise<{ locale: string, slug?: string }>`. |

## 7. Redirects

Existing PT-targeted users land at the same URLs they used before — **no redirects required**. If hosting on Vercel/Netlify, add safety-net redirects only for hypothetical legacy `/pt/` URLs (none exist today, but defensible for future-proofing):

```json
// vercel.json
{
  "redirects": [
    { "source": "/pt/:path*", "destination": "/:path*", "permanent": true }
  ]
}
```

## 8. Validation checklist

Run before merging:

**Build & static output**
- [ ] `npm run build` produces `out/` with both `out/index.html` (PT) and `out/en/index.html` (EN)
- [ ] `curl out/index.html | grep -E 'lang=|<title>'` → shows `lang="pt-PT"` and PT title
- [ ] `curl out/en/index.html | grep -E 'lang=|<title>'` → shows `lang="en-GB"` and EN title
- [ ] No JavaScript needed: `grep -c "Naval Architecture" out/en/about/index.html` > 0
- [ ] No JavaScript needed: `grep -c "Arquitectura Naval" out/about/index.html` > 0

**hreflang**
- [ ] `curl out/index.html | grep hreflang` → finds `pt-PT`, `en-GB`, `x-default` link rels with absolute URLs
- [ ] Same set on every locale-aware page

**JSON-LD**
- [ ] [Google Rich Results test](https://search.google.com/test/rich-results) passes for `/`, `/en/`, `/services/maritime-decarbonisation/`, `/en/services/maritime-decarbonisation/`
- [ ] `inLanguage` matches the served locale (singular value, not array)

**Sitemap**
- [ ] `out/sitemap.xml` contains every route × every locale
- [ ] Each `<url>` has `<xhtml:link rel="alternate" hreflang="...">` for all locales

**llms.txt**
- [ ] `/llms.txt` returns PT-language content
- [ ] `/en/llms.txt` returns EN-language content

**Crawler simulation**
- [ ] `curl -A "GPTBot" https://kdsoffshore.pt/` (post-deploy) returns full PT HTML, no JS shell
- [ ] `curl -A "GPTBot" https://kdsoffshore.pt/en/` returns full EN HTML

**Visual smoke**
- [ ] Language toggle in nav switches `/about/` ↔ `/en/about/` and back
- [ ] Toggle preserves the current path (deep link works in both directions)
- [ ] Theme toggle still works (theme context wasn't broken by extraction)
- [ ] All 8 service detail pages render in both locales

## 9. Phasing & estimated effort

| Phase | Scope | Effort | Ship-able alone? |
|---|---|---|---|
| 1. Routing scaffold | `next-intl` install, `[locale]` skeleton, EN-only wired | 1h | Yes — gives clean `/en/` URLs immediately |
| 2. Content catalog migration | `pt.ts`/`en.ts` → JSON, components consume `useTranslations` | 2–3h | Yes — full localised site |
| 3. Detail-page namespaces | `services-detail.ts`, `journal-detail.ts`, etc. → JSON namespaces, slug map kept | 2h | Yes |
| 4. SEO/GEO assets | sitemap, robots, llms.txt, JSON-LD all locale-aware | 1h | Required for SEO win |
| 5. Validation | Run checklist, fix gaps | 1h | Required before merge |

**Total:** ~7–8 hours of focused work for both languages. Each subsequent locale is roughly 1h of catalog translation + content review.

## 10. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Breaking existing rankings for `/about/`, `/services/...` URLs | URLs unchanged. Content language flips PT→EN at root — short-term rank turbulence is possible but `hreflang` + new `/en/` pages should recover within 2–4 weeks per Google's localisation timeline. Submit updated sitemap immediately. |
| Translation drift between catalogs | Type-generate `IntlMessages` from `pt-PT.json` so missing keys in `en-GB.json` become TypeScript errors. |
| Large detail-page catalogs (journal articles >600 lines) become unwieldy in JSON | Split per-article catalogs: `src/messages/pt-PT/journal/voyage-optimisation.json` etc. `next-intl` supports nested loading. |
| Static export forbids `next-intl` middleware | **Resolved (2026-05-15):** Static export blocks middleware AND prevents `localePrefix: 'as-needed'` from producing the desired URL shape on its own. Mitigation: use a route-group pattern — `app/(default)/` serves PT at root, `app/[locale]/` serves prefixed locales (EN, future ES/FR). `generateStaticParams` in `[locale]` excludes the default locale to avoid `/pt-PT/` duplicates. Routing config (`as-needed` + custom `prefixes`) is still wired so next-intl's `Link`/`getPathname` helpers generate correct cross-locale URLs. |
| Trailing slash interaction with `next-intl` Link helpers | Test in Phase 1 — if needed, configure `next-intl`'s `pathnames` map explicitly. |
| Old localStorage `kds-lang` value in returning users' browsers does nothing post-migration | Acceptable — gracefully ignored. Optional cleanup script in nav mount. |

## 11. Out of scope (future work)

- Per-locale slug translation (`/servicos/descarbonizacao-maritima/` for PT)
- Translation Management System (Crowdin/Lokalise) integration — possible Phase 6 once locale count > 2
- Edge geo-detection redirect for first-time visitors — incompatible with pure static export, would require Vercel Edge Function or Cloudflare Worker
- Per-locale OG images
- RTL support — not needed for currently planned locales

## 12. Approval & status

- [x] Approach approved
- [x] Phasing approved
- [x] Slug policy (English slugs across locales) approved
- [x] **Phase 1 — Routing scaffold: COMPLETE (2026-05-15)**
  - `next-intl@4.12.0` installed
  - `src/i18n/routing.ts`, `src/i18n/request.ts`, `src/i18n/navigation.ts` created
  - `src/messages/pt-PT.json`, `src/messages/en-GB.json` seeded
  - `next.config.js` wrapped with `next-intl/plugin`
  - `npm run build` passes (35 routes prerendered, no regressions)
- [ ] Phase 2 — Move pages under route-group + `[locale]`
- [ ] Phase 3 — Migrate content catalogs to JSON namespaces
- [ ] Phase 4 — SEO/GEO assets (sitemap, robots, llms.txt, JSON-LD per locale)
- [ ] Phase 5 — Validation
