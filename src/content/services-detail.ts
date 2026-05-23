// Per-service detail content for /services/[slug]/ pages.
// Slugs mirror the live kdsoffshore.pt URLs so any existing inbound links keep
// resolving when this build replaces production. Slugs are locale-invariant.

import type { Locale } from '@/i18n/routing';
import { SERVICES_EN } from './services-detail.en';
import { SERVICES_PT } from './services-detail.pt';

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceCaseRef {
  title: string;
  client: string;
  year: string;
}

// A standalone, stats-rich outcome line. AI systems prefer extractable claims
// with a specific number + a label + a traceable context (case / client / year).
export interface ServiceOutcome {
  metric: string;        // e.g. "−18%", "100%", "9,000 DWT"
  label: string;         // what the metric measures, e.g. "fuel burn at cruise"
  context?: string;      // where the number came from, e.g. "SeaPower 12 m pilot boat, 2022"
}

// A regulatory or industry framework the service helps the client satisfy.
// Naming the framework explicitly anchors the service to topical authority
// and improves AI citation in queries like "FuelEU Maritime compliance".
export interface ServiceFramework {
  name: string;          // e.g. "FuelEU Maritime", "DNV-OS-E301", "IMO MSC.137(76)"
  note?: string;         // one sentence explaining the relevance to this service
  url?: string;          // canonical reference to the framework (when public)
}

// A publication the principal has authored or co-authored that supports the
// methodology used in this service. Mirrors `CaseReference` from cases-detail.
export interface ServicePublication {
  label: string;
  url?: string;
}

export interface ServiceDetail {
  // Routing / identity
  slug: string;
  number: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;

  // Long-form content (existing)
  overview: string[];
  whatWeDeliver: string[];
  methodology: { t: string; d: string }[];
  tools: string[];
  cases: ServiceCaseRef[];
  faq: ServiceFaq[];
  leadTime: string;
  serviceType: string;

  // GEO / AI-citability extensions (optional; pages degrade gracefully when
  // a field is undefined).
  //
  // `tldr` — a self-contained 40–60 word answer block placed at the top of the
  // page so AI systems can extract a clean definition snippet without needing
  // the surrounding narrative.
  tldr?: string;
  // `outcomes` — stats-rich block (Princeton GEO: +37% citation uplift).
  outcomes?: ServiceOutcome[];
  // `whenToUse` / `whenNotToUse` — comparison content (highly cited; ~33% of
  // AI citations are comparison-format). Each entry is a short, scannable line.
  whenToUse?: string[];
  whenNotToUse?: string[];
  // `regulatoryContext` — frameworks the service helps satisfy. Anchors the
  // page to topical authority and tail queries like "IMO MSC.137(76) compliance".
  regulatoryContext?: ServiceFramework[];
  // `vesselTypes` — explicit list of vessel/asset categories served. Surfaces
  // tail-search intent ("mooring design FPSO", "manoeuvrability container ship").
  vesselTypes?: string[];
  // `publications` — peer-reviewed work that grounds the methodology. Authority
  // signal for AI systems and for sophisticated clients reading the page.
  publications?: ServicePublication[];
}

const SERVICES_BY_LOCALE: Record<Locale, ServiceDetail[]> = {
  en: SERVICES_EN,
  pt: SERVICES_PT,
};

export function getServicesByLocale(locale: Locale): ServiceDetail[] {
  return SERVICES_BY_LOCALE[locale] ?? SERVICES_EN;
}

export function getServiceBySlug(slug: string, locale: Locale): ServiceDetail | undefined {
  return getServicesByLocale(locale).find((s) => s.slug === slug);
}

// Slugs are locale-invariant and ordering matches across locales.
export const SERVICE_SLUGS = SERVICES_EN.map((s) => s.slug);

// Backwards-compatible English-only exports — used by code paths that are
// not yet locale-aware (e.g. canonical schema names in JSON-LD).
export const SERVICES = SERVICES_EN;
export const SERVICES_BY_SLUG = Object.fromEntries(
  SERVICES_EN.map((s) => [s.slug, s]),
) as Record<string, ServiceDetail>;
