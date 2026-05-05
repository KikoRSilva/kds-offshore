# KDS Offshore

The website for KDS Offshore — naval architecture, offshore engineering, and decarbonisation consultancy from Oeiras, Portugal.

Built with Next.js 15 (App Router, static export), TypeScript, Tailwind CSS, Framer Motion, and Supabase for the contact form. EN/PT and dark/light toggles in the navigation.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build        # static HTML output to ./out
```

The output of `out/` is a fully static site you can deploy to any static host (Vercel, Netlify, Cloudflare Pages, S3, etc.).

## Contact form (Supabase)

See [`SUPABASE_SETUP.md`](./SUPABASE_SETUP.md) for the table schema and RLS policies.

Copy `.env.local.example` to `.env.local` and fill in your Supabase project URL and anon key:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Without these env vars, the contact form still validates and shows the success state — it just doesn't store anything.

## Project structure

```
src/
  app/                # one folder per route, all client components
    layout.tsx        # root layout — fonts, providers, nav, footer
    page.tsx          # /
    services/page.tsx
    work/page.tsx
    about/page.tsx
    journal/page.tsx
    contact/page.tsx
    globals.css       # design tokens, sonar grid, animations
  components/
    nav.tsx           # sticky header with EN/PT + theme toggles
    footer.tsx
    page-hero.tsx     # shared hero used by inner pages
    service-cta.tsx
    kds-mark.tsx      # logo SVG
    kds-image.tsx     # image with hatched-pattern fallback
    reveal.tsx        # scroll-reveal wrapper (Framer Motion)
  contexts/
    site-context.tsx  # theme + language (persisted to localStorage)
  content/
    en.ts             # English copy
    pt.ts             # Portuguese copy
  lib/
    supabase.ts       # contact form client
    utils.ts          # cn() helper
```

## Design system

The "Deep Current" design system uses CSS custom properties for theming. Colours, line weights, and surfaces are all defined as `--vars` in `globals.css` and switch automatically between `[data-theme="dark"]` and `[data-theme="light"]`.

Typography:
- **Spectral** (display) — large headings, italic accents
- **JetBrains Mono** (mono) — labels, eyebrows, status indicators
- **Inter Tight** (sans) — body copy

## License

© 2026 KDS Offshore, Lda.
