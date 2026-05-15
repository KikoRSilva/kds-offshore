import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt-PT', 'en-GB'],
  defaultLocale: 'pt-PT',
  localePrefix: {
    mode: 'as-needed',
    prefixes: {
      'en-GB': '/en',
    },
  },
});

export type Locale = (typeof routing.locales)[number];
