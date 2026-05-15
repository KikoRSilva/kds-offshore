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

export interface ServiceDetail {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  overview: string[];
  whatWeDeliver: string[];
  methodology: { t: string; d: string }[];
  tools: string[];
  cases: ServiceCaseRef[];
  faq: ServiceFaq[];
  leadTime: string;
  serviceType: string;
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
