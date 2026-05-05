'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';
import { KDSMark } from './kds-mark';
import { useSite } from '@/contexts/site-context';
import { en } from '@/content/en';
import { pt } from '@/content/pt';

const NAV_LINKS = [
  { id: 'home', href: '/' },
  { id: 'services', href: '/services/' },
  { id: 'work', href: '/work/' },
  { id: 'about', href: '/about/' },
  { id: 'journal', href: '/journal/' },
  { id: 'contact', href: '/contact/' },
] as const;

type NavId = (typeof NAV_LINKS)[number]['id'];

function getLabel(id: NavId, nav: typeof en.nav) {
  return nav[id as keyof typeof nav] ?? id;
}

export function Nav() {
  const { theme, lang, toggleTheme, toggleLang } = useSite();
  const pathname = usePathname();
  const t = lang === 'pt' ? pt : en;

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href.replace(/\/$/, ''));
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'color-mix(in oklab, var(--bg) 88%, transparent)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '18px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}
          aria-label="KDS Offshore – home"
        >
          <KDSMark size={40} />
        </Link>

        <nav aria-label="Main navigation">
          <ul
            style={{
              display: 'flex',
              gap: 32,
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {NAV_LINKS.map(({ id, href }) => {
              const active = isActive(href);
              return (
                <li key={id} style={{ position: 'relative' }}>
                  <Link
                    href={href}
                    className="kds-mono"
                    style={{
                      fontSize: 12,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: active ? 'var(--ink)' : 'var(--ink-dim)',
                      transition: 'color 0.2s',
                    }}
                    aria-current={active ? 'page' : undefined}
                  >
                    {getLabel(id, t.nav)}
                  </Link>
                  {active && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: -23,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 4,
                        height: 4,
                        borderRadius: 999,
                        background: 'var(--accent)',
                      }}
                      aria-hidden
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <button
            onClick={toggleLang}
            className="kds-mono"
            aria-label={`Switch to ${lang === 'en' ? 'Portuguese' : 'English'}`}
            style={{
              fontSize: 11,
              color: 'var(--ink-faint)',
              letterSpacing: '0.14em',
              padding: '6px 10px',
              border: '1px solid var(--line)',
              borderRadius: 999,
              transition: 'color 0.2s, border-color 0.2s',
              cursor: 'pointer',
            }}
          >
            {lang === 'en' ? 'PT' : 'EN'}
          </button>

          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              border: '1px solid var(--line)',
              borderRadius: 999,
              color: 'var(--ink-dim)',
              transition: 'color 0.2s, border-color 0.2s',
              cursor: 'pointer',
            }}
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <Link
            href="/contact/"
            className="kds-sans"
            style={{
              fontSize: 13,
              padding: '10px 18px',
              border: '1px solid var(--line-2)',
              borderRadius: 999,
              color: 'var(--ink)',
              transition: 'background 0.2s',
              whiteSpace: 'nowrap',
            }}
          >
            {t.nav.cta} →
          </Link>
        </div>
      </div>
    </header>
  );
}
