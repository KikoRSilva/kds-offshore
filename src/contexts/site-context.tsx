'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

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
  lang: 'en',
  toggleTheme: () => {},
  toggleLang: () => {},
});

export function SiteProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<Lang>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem('kds-theme') as Theme) || 'dark';
    const savedLang = (localStorage.getItem('kds-lang') as Lang) || 'en';
    setTheme(savedTheme);
    setLang(savedLang);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kds-theme', theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('kds-lang', lang);
  }, [lang, mounted]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const toggleLang = () => setLang((l) => (l === 'en' ? 'pt' : 'en'));

  return (
    <SiteContext.Provider value={{ theme, lang, toggleTheme, toggleLang }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  return useContext(SiteContext);
}
