import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];

export const LOCALE_BCP47: Record<Locale, string> = {
  pt: 'pt-PT',
  en: 'en-GB',
};

export const LOCALE_OG: Record<Locale, string> = {
  pt: 'pt_PT',
  en: 'en_GB',
};
