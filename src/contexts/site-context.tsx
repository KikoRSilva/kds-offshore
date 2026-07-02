'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, getPathname } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

type Theme = 'dark' | 'light';
type Lang = 'en' | 'pt';

interface SiteContextValue {
  theme: Theme;
  lang: Lang;
  toggleTheme: () => void;
  toggleLang: () => void;
}

const SiteContext = createContext<SiteContextValue>({
  theme: 'dark',
  lang: 'pt',
  toggleTheme: () => {},
  toggleLang: () => {},
});

export function SiteProvider({ children }: { children: ReactNode }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem('kds-theme') as Theme) || 'dark';
    setTheme(savedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kds-theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const toggleLang = () => {
    const nextLocale: Locale = locale === 'pt' ? 'en' : 'pt';
    // Build the target path via getPathname (no forcePrefix). The router's
    // replace(path, { locale }) forces a locale prefix even for the default
    // locale, producing /pt/… URLs — but with localePrefix: 'as-needed' the
    // default locale (pt) is served at the root by app/(default) and is
    // excluded from the static export, so /pt/… would 404. getPathname honours
    // 'as-needed': '/en' for en, '/' for pt.
    const href = getPathname({ href: pathname, locale: nextLocale });
    // Match the site's `trailingSlash: true` output (e.g. /en → /en/) so the
    // static host serves the right file. Switching locale crosses two separate
    // root layouts — a full document load regardless — so navigate hard.
    const target = href.endsWith('/') ? href : `${href}/`;
    window.location.replace(target);
  };

  return (
    <SiteContext.Provider value={{ theme, lang: locale, toggleTheme, toggleLang }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  return useContext(SiteContext);
}
