import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ARTICLES, ARTICLES_BY_SLUG, ARTICLE_SLUGS } from '@/content/journal-detail';
import { TEAM_BY_SLUG } from '@/content/team-detail';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';

const SITE_URL = 'https://kdsoffshore.pt';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ARTICLE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const a = ARTICLES_BY_SLUG[slug];
  if (!a) return {};

  return {
    title: a.title,
    description: a.subtitle,
    alternates: { canonical: `/journal/${slug}/` },
    openGraph: {
      title: `${a.title} — KDS Offshore Journal`,
      description: a.subtitle,
      url: `${SITE_URL}/journal/${slug}/`,
      type: 'article',
      publishedTime: a.datePublished,
      modifiedTime: a.dateModified,
      authors: [a.author],
      images: a.hero ? [{ url: a.hero.src, alt: a.hero.alt }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: a.title,
      description: a.subtitle,
    },
  };
}

const SECTION_LABEL: React.CSSProperties = {
  fontSize: 11,
  color: 'var(--ink-faint)',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
};

const PROSE: React.CSSProperties = {
  fontSize: 18,
  lineHeight: 1.75,
  color: 'var(--ink)',
  maxWidth: 720,
  margin: '0 0 24px',
};

const H2_STYLE: React.CSSProperties = {
  fontSize: 'clamp(28px, 3vw, 40px)',
  fontWeight: 300,
  letterSpacing: '-0.01em',
  margin: '56px 0 24px',
  color: 'var(--ink)',
  lineHeight: 1.1,
};

const PULL_QUOTE: React.CSSProperties = {
  fontSize: 'clamp(22px, 2.4vw, 32px)',
  fontStyle: 'italic',
  color: 'var(--accent)',
  fontWeight: 300,
  lineHeight: 1.35,
  margin: '40px 0',
  padding: '0 0 0 32px',
  borderLeft: '3px solid var(--accent)',
  maxWidth: 760,
};

function formatHumanDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const a = ARTICLES_BY_SLUG[slug];
  if (!a) notFound();

  const author = a.authorSlug ? TEAM_BY_SLUG[a.authorSlug] : undefined;

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/journal/${slug}/#article`,
    mainEntityOfPage: `${SITE_URL}/journal/${slug}/`,
    headline: a.title,
    description: a.subtitle,
    abstract: a.abstract,
    articleSection: a.tag,
    inLanguage: 'en-GB',
    datePublished: a.datePublished,
    dateModified: a.dateModified,
    wordCount: a.sections
      .filter((s) => typeof s.content === 'string')
      .reduce((acc, s) => acc + (s.content as string).split(/\s+/).length, 0),
    timeRequired: `PT${a.readMinutes}M`,
    image: a.hero ? `${SITE_URL}${a.hero.src}` : undefined,
    author: author
      ? { '@id': `${SITE_URL}/team/${author.slug}/#person` }
      : { '@type': 'Person', name: a.author },
    publisher: { '@id': `${SITE_URL}/#organization` },
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };

  const otherArticles = ARTICLES.filter((x) => x.slug !== slug);

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Journal', path: '/journal/' },
          { name: a.title, path: `/journal/${slug}/` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />

      {/* HERO */}
      <article>
        <header
          className="sonar-bg"
          style={{ padding: '100px 48px 60px', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <nav
              className="kds-mono"
              aria-label="Breadcrumb"
              style={{
                ...SECTION_LABEL,
                marginBottom: 32,
              }}
            >
              <Link href="/" style={{ color: 'var(--ink-dim)' }}>
                Home
              </Link>
              <span style={{ margin: '0 12px' }}>·</span>
              <Link href="/journal/" style={{ color: 'var(--ink-dim)' }}>
                Journal
              </Link>
              <span style={{ margin: '0 12px' }}>·</span>
              <span>{a.tag.split('·')[0].trim()}</span>
            </nav>

            <div className="kds-mono" style={{ ...SECTION_LABEL, color: 'var(--accent)', marginBottom: 24 }}>
              {a.tag}
            </div>

            <h1
              className="kds-display"
              aria-label={a.title}
              style={{
                fontSize: 'clamp(36px, 5vw, 72px)',
                margin: 0,
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.015em',
              }}
            >
              {a.title}
            </h1>

            <p
              className="kds-sans"
              style={{
                fontSize: 19,
                color: 'var(--ink-dim)',
                marginTop: 32,
                lineHeight: 1.6,
                maxWidth: 760,
              }}
            >
              {a.subtitle}
            </p>

            <div
              className="kds-mono"
              style={{
                marginTop: 48,
                paddingTop: 24,
                borderTop: '1px solid var(--line)',
                display: 'flex',
                gap: 32,
                flexWrap: 'wrap',
                alignItems: 'center',
                fontSize: 11,
                color: 'var(--ink-dim)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              <span>
                By{' '}
                {author ? (
                  <Link href={`/team/${author.slug}/`} style={{ color: 'var(--ink)' }}>
                    {a.author}
                  </Link>
                ) : (
                  <span style={{ color: 'var(--ink)' }}>{a.author}</span>
                )}
              </span>
              <span>·</span>
              <time dateTime={a.datePublished}>{formatHumanDate(a.datePublished)}</time>
              <span>·</span>
              <span>{a.readMinutes} min read</span>
            </div>
          </div>
        </header>

        {a.hero && (
          <div style={{ padding: '0 48px', marginTop: 0 }}>
            <div
              style={{
                maxWidth: 1100,
                margin: '0 auto',
                aspectRatio: '21/9',
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
              }}
            >
              <Image
                src={a.hero.src}
                alt={a.hero.alt}
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 1100px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        )}

        {/* KEY TAKEAWAYS */}
        <section style={{ padding: '60px 48px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div
              style={{
                padding: '32px 36px',
                background: 'var(--bg-2)',
                border: '1px solid var(--line)',
                borderRadius: 4,
                maxWidth: 760,
              }}
            >
              <div className="kds-mono" style={{ ...SECTION_LABEL, marginBottom: 16 }}>
                ✦ Key takeaways
              </div>
              <ul style={{ margin: 0, paddingLeft: 20, listStyle: 'none' }}>
                {a.keyTakeaways.map((t, i) => (
                  <li
                    key={i}
                    className="kds-sans"
                    style={{
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: 'var(--ink)',
                      paddingLeft: 16,
                      paddingBottom: 12,
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: -8,
                        top: 0,
                        color: 'var(--accent)',
                        fontWeight: 600,
                      }}
                    >
                      ·
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ABSTRACT */}
        <section style={{ padding: '40px 48px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p
              className="kds-display"
              style={{
                fontSize: 'clamp(20px, 2vw, 26px)',
                lineHeight: 1.5,
                color: 'var(--ink)',
                fontStyle: 'italic',
                fontWeight: 300,
                maxWidth: 760,
                margin: '32px 0',
                paddingLeft: 24,
                borderLeft: '2px solid var(--line-2)',
              }}
            >
              {a.abstract}
            </p>
          </div>
        </section>

        {/* BODY */}
        <section style={{ padding: '0 48px 60px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ maxWidth: 760 }}>
              {a.sections.map((s, i) => {
                if (s.type === 'h2') {
                  return (
                    <h2 key={i} className="kds-display" style={H2_STYLE}>
                      {s.content as string}
                    </h2>
                  );
                }
                if (s.type === 'h3') {
                  return (
                    <h3
                      key={i}
                      className="kds-display"
                      style={{
                        fontSize: 22,
                        fontWeight: 500,
                        margin: '40px 0 16px',
                        color: 'var(--ink)',
                      }}
                    >
                      {s.content as string}
                    </h3>
                  );
                }
                if (s.type === 'pull') {
                  return (
                    <blockquote key={i} style={PULL_QUOTE}>
                      {s.content as string}
                    </blockquote>
                  );
                }
                if (s.type === 'ul' || s.type === 'ol') {
                  const Tag = s.type;
                  return (
                    <Tag
                      key={i}
                      className="kds-sans"
                      style={{ ...PROSE, paddingLeft: 24 }}
                    >
                      {(s.content as string[]).map((item, j) => (
                        <li key={j} style={{ marginBottom: 8 }}>
                          {item}
                        </li>
                      ))}
                    </Tag>
                  );
                }
                if (s.type === 'figure') {
                  return (
                    <figure key={i} style={{ margin: '40px 0' }}>
                      <Image
                        src={s.content as string}
                        alt={s.caption ?? ''}
                        width={760}
                        height={428}
                        style={{ width: '100%', height: 'auto', borderRadius: 4 }}
                      />
                      {s.caption && (
                        <figcaption
                          className="kds-mono"
                          style={{
                            fontSize: 11,
                            color: 'var(--ink-faint)',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            marginTop: 12,
                          }}
                        >
                          {s.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
                // p
                return (
                  <p key={i} className="kds-sans" style={PROSE}>
                    {s.content as string}
                  </p>
                );
              })}
            </div>
          </div>
        </section>

        {/* REFERENCES */}
        {a.references && a.references.length > 0 && (
          <section style={{ padding: '40px 48px 60px', background: 'var(--bg-2)' }}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <div className="kds-mono" style={{ ...SECTION_LABEL, marginBottom: 24 }}>
                References
              </div>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: 760 }}>
                {a.references.map((r, i) => (
                  <li
                    key={i}
                    className="kds-sans"
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: 'var(--ink-dim)',
                      padding: '14px 0',
                      borderBottom: '1px solid var(--line)',
                      display: 'grid',
                      gridTemplateColumns: '40px 1fr',
                      gap: 16,
                    }}
                  >
                    <span
                      className="kds-mono"
                      style={{
                        color: 'var(--ink-faint)',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {r.marker}
                    </span>
                    <span>
                      {r.text}
                      {r.url && (
                        <>
                          {' '}
                          <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
                            ↗
                          </a>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* AUTHOR CARD */}
        {author && (
          <section style={{ padding: '60px 48px' }}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <Link
                href={`/team/${author.slug}/`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: 32,
                  padding: '32px',
                  border: '1px solid var(--line)',
                  borderRadius: 4,
                  alignItems: 'center',
                  maxWidth: 760,
                }}
              >
                <div
                  style={{
                    aspectRatio: '1/1',
                    position: 'relative',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: 'var(--bg-2)',
                  }}
                >
                  <Image
                    src={author.photoSrc}
                    alt={author.photoAlt}
                    fill
                    sizes="120px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div className="kds-mono" style={{ ...SECTION_LABEL, marginBottom: 8 }}>
                    Written by
                  </div>
                  <div
                    className="kds-display"
                    style={{
                      fontSize: 24,
                      fontWeight: 400,
                      color: 'var(--ink)',
                      marginBottom: 4,
                    }}
                  >
                    {author.name}
                  </div>
                  <div
                    className="kds-mono"
                    style={{
                      fontSize: 11,
                      color: 'var(--ink-dim)',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      marginBottom: 12,
                    }}
                  >
                    {author.jobTitle}
                  </div>
                  <div
                    className="kds-mono"
                    style={{
                      fontSize: 11,
                      color: 'var(--accent)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Read full profile →
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* RELATED */}
        {a.related && a.related.length > 0 && (
          <section style={{ padding: '40px 48px 80px' }}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <div className="kds-mono" style={{ ...SECTION_LABEL, marginBottom: 24 }}>
                Related notes
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {a.related.map((r) => (
                  <li
                    key={r.slug}
                    style={{
                      padding: '20px 0',
                      borderTop: '1px solid var(--line)',
                    }}
                  >
                    <span
                      className="kds-display"
                      style={{ fontSize: 19, color: 'var(--ink-dim)' }}
                    >
                      {r.title}
                    </span>
                    <span
                      className="kds-mono"
                      style={{
                        fontSize: 10,
                        color: 'var(--ink-faint)',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        marginLeft: 16,
                      }}
                    >
                      Coming soon
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
