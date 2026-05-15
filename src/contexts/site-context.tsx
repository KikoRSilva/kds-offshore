'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
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
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

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
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
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
