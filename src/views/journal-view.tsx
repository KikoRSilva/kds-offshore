'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { KDSImage } from '@/components/kds-image';
import { Reveal } from '@/components/reveal';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';
import { useLocale, useMessages } from 'next-intl';
import { subscribeNewsletter } from '@/lib/supabase';

// Per-post card images. Keyed by post slug so the right image always
// follows the right post (regardless of array index after filtering).
// Falls back to a stock image if the slug has no dedicated image yet.
const POST_IMG_BY_SLUG: Record<string, string> = {
  'corvo-without-tugs': '/images/journal/corvo-aerial-cargo-waterway.jpg',
  'soos-voyage-optimisation': '/images/journal/soos-aerial-container-ocean.jpg',
};
const POST_IMG_FALLBACK = '/images/stock/ocean-horizon.jpg';

export default function JournalView() {
  const lang = useLocale();
  const p = useMessages().pages.journal;
  // Only published posts reach the DOM and the indexable HTML. Unpublished
  // entries are kept in messages JSON so they can be flipped on later, but
  // we never expose "Coming soon" placeholders to search crawlers.
  const visiblePosts = p.posts.filter((post: { published?: boolean }) => post.published);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;

    setSubmitting(true);
    setError(null);

    const { error: subscribeError } = await subscribeNewsletter({
      email,
      locale: lang === 'pt' ? 'pt' : 'en',
      source: 'journal',
    });

    setSubmitting(false);

    if (subscribeError) {
      setError(
        lang === 'pt'
          ? 'Não foi possível subscrever. Tente novamente.'
          : 'Could not subscribe. Please try again.',
      );
      return;
    }

    setSubscribed(true);
  };

  return (
    <>
      <BreadcrumbJsonLd
        locale={lang}
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Journal', path: '/journal/' },
        ]}
      />
      <PageHero
        eyebrow={p.eyebrow}
        lines={[
          { text: p.title1 },
          { text: p.title2, italic: true, accent: true, indent: true },
        ]}
        lede={p.lede}
      />

      <section style={{ padding: '80px 48px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <Reveal>
            <div
              className="kds-mono"
              style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 32 }}
            >
              ✦ {lang === 'pt' ? 'Destaque · Abril 2026' : 'Featured · April 2026'}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href={p.featured.published ? `/journal/${p.featured.slug}/` : '#'}
              className="kds-card"
              style={{
                display: 'grid',
                gridTemplateColumns: '7fr 5fr',
                gap: 56,
                alignItems: 'center',
              }}
            >
              <KDSImage
                src="/images/journal/corvo-aerial-cargo-waterway.jpg"
                aspect="16/10"
                alt={p.featured.t}
                parallax
                style={{ borderRadius: 4 }}
              />
              <div>
                <div
                  className="kds-mono"
                  style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}
                >
                  {p.featured.tag}
                </div>
                <h2
                  className="kds-display"
                  style={{
                    fontSize: 'clamp(36px, 4.4vw, 64px)',
                    margin: 0,
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                  }}
                >
                  {p.featured.t}
                </h2>
                <p
                  className="kds-sans"
                  style={{ fontSize: 17, color: 'var(--ink-dim)', lineHeight: 1.6, marginTop: 28 }}
                >
                  {p.featured.d}
                </p>
                <div
                  style={{
                    marginTop: 32,
                    paddingTop: 20,
                    borderTop: '1px solid var(--line)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span className="kds-sans" style={{ fontSize: 14 }}>{p.featured.author}</span>
                  <span
                    className="kds-mono"
                    style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.18em', textTransform: 'uppercase' }}
                  >
                    <time dateTime={p.featured.datePublished}>{p.featured.date}</time> · {p.featured.read}
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <Reveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: 48,
                paddingBottom: 24,
                borderBottom: '1px solid var(--line)',
              }}
            >
              <h3 className="kds-display" style={{ fontSize: 36, margin: 0, fontWeight: 300 }}>
                {lang === 'pt' ? 'Notas recentes' : 'Recent notes'}
              </h3>
              <span
                className="kds-mono"
                style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.22em', textTransform: 'uppercase' }}
              >
                {String(visiblePosts.length).padStart(2, '0')} {lang === 'pt' ? 'publicados' : 'published'}
              </span>
            </div>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderTop: '1px solid var(--line)',
            }}
          >
            {visiblePosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.07}>
                <Link
                  href={`/journal/${post.slug}/`}
                  className="kds-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingBottom: 36,
                    borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--line)' : 'none',
                    borderBottom: '1px solid var(--line)',
                    minHeight: 320,
                  }}
                >
                  <div>
                    <KDSImage
                      src={POST_IMG_BY_SLUG[post.slug] ?? POST_IMG_FALLBACK}
                      aspect="16/10"
                      alt={post.t}
                    />
                    <div style={{ padding: '24px 28px 0' }}>
                      <div
                        className="kds-mono"
                        style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 16 }}
                      >
                        {post.tag}
                      </div>
                      <h4
                        className="kds-display"
                        style={{ fontSize: 22, fontWeight: 400, margin: 0, letterSpacing: '-0.01em', lineHeight: 1.2 }}
                      >
                        {post.t}
                      </h4>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: 24,
                      padding: '12px 28px 0',
                      borderTop: '1px solid var(--line)',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span className="kds-sans" style={{ fontSize: 12, color: 'var(--ink-dim)' }}>{post.author}</span>
                    <span
                      className="kds-mono"
                      style={{ fontSize: 11, color: 'var(--ink-faint)', letterSpacing: '0.16em', textTransform: 'uppercase' }}
                    >
                      <time dateTime={post.datePublished}>{post.date}</time> · {post.read}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 48px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <div
              className="kds-mono"
              style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 24 }}
            >
              ✦ {lang === 'pt' ? 'Apenas trimestral' : 'Quarterly only'}
            </div>
            <h3
              className="kds-display"
              style={{ fontSize: 'clamp(36px, 4vw, 64px)', margin: 0, fontWeight: 300, lineHeight: 1.1 }}
            >
              {lang === 'pt' ? (
                <>Enviamos uma carta breve <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>quatro vezes por ano.</span></>
              ) : (
                <>We send a brief letter <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>four times a year.</span></>
              )}
            </h3>
            <p
              className="kds-sans"
              style={{ fontSize: 16, color: 'var(--ink-dim)', maxWidth: 520, margin: '24px auto 36px', lineHeight: 1.6 }}
            >
              {lang === 'pt'
                ? 'Ensaios de metodologia, notas de campo e a opinião ocasional. Sem apresentações, sem webinars.'
                : 'Methodology essays, field notes, and the occasional opinion. No pitch decks, no webinars.'
              }
            </p>

            {subscribed ? (
              <div
                className="kds-mono"
                style={{ fontSize: 13, color: 'var(--accent)', letterSpacing: '0.16em' }}
              >
                ✦ {lang === 'pt' ? 'Subscrito. Até breve.' : 'Subscribed. See you next quarter.'}
              </div>
            ) : (
              <>
                <form
                  onSubmit={handleSubscribe}
                  style={{ display: 'flex', gap: 12, maxWidth: 480, margin: '0 auto' }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={lang === 'pt' ? 'o.seu@email' : 'your@email'}
                    required
                    disabled={submitting}
                    aria-label="Email address"
                    style={{
                      flex: 1,
                      padding: '16px 20px',
                      border: '1px solid var(--line-2)',
                      background: 'var(--surface)',
                      color: 'var(--ink)',
                      fontSize: 14,
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="kds-sans"
                    style={{
                      padding: '16px 24px',
                      background: 'var(--ink)',
                      color: 'var(--bg)',
                      border: 'none',
                      fontSize: 14,
                      fontWeight: 500,
                      cursor: submitting ? 'wait' : 'pointer',
                      opacity: submitting ? 0.7 : 1,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {submitting
                      ? lang === 'pt' ? 'A subscrever…' : 'Subscribing…'
                      : lang === 'pt' ? 'Subscrever →' : 'Subscribe →'}
                  </button>
                </form>
                {error && (
                  <div
                    role="alert"
                    className="kds-mono"
                    style={{
                      marginTop: 16,
                      fontSize: 12,
                      color: 'var(--ink-dim)',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {error}
                  </div>
                )}
              </>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
