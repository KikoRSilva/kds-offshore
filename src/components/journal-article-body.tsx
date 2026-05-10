'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { JournalArticle, ArticleI18n, ArticleSection, Reference } from '@/content/journal-detail';
import { useSite } from '@/contexts/site-context';
import { ParallaxImageFrame } from '@/components/parallax-image-frame';

interface AuthorCardProps {
  slug: string;
  name: string;
  jobTitle: string;
  photoSrc: string;
  photoAlt: string;
}

interface JournalArticleBodyProps {
  article: JournalArticle;
  author?: AuthorCardProps;
}

interface LocalisedView {
  title: string;
  subtitle: string;
  tag: string;
  abstract: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  references?: Reference[];
  related?: { slug: string; title: string }[];
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

function pickView(article: JournalArticle, lang: 'en' | 'pt'): LocalisedView {
  const pt: ArticleI18n | undefined = article.i18n?.pt;
  if (lang === 'pt' && pt) {
    return {
      title: pt.title,
      subtitle: pt.subtitle,
      tag: pt.tag,
      abstract: pt.abstract,
      keyTakeaways: pt.keyTakeaways,
      sections: pt.sections,
      references: pt.references ?? article.references,
      related: pt.related ?? article.related,
    };
  }
  return {
    title: article.title,
    subtitle: article.subtitle,
    tag: article.tag,
    abstract: article.abstract,
    keyTakeaways: article.keyTakeaways,
    sections: article.sections,
    references: article.references,
    related: article.related,
  };
}

function formatHumanDate(iso: string, lang: 'en' | 'pt'): string {
  return new Date(iso).toLocaleDateString(lang === 'pt' ? 'pt-PT' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function JournalArticleBody({ article, author }: JournalArticleBodyProps) {
  const { lang } = useSite();
  const view = pickView(article, lang);

  const labels = {
    home: lang === 'pt' ? 'Início' : 'Home',
    journal: lang === 'pt' ? 'Diário' : 'Journal',
    by: lang === 'pt' ? 'Por' : 'By',
    minRead: lang === 'pt' ? 'min de leitura' : 'min read',
    keyTakeaways: lang === 'pt' ? '✦ Principais conclusões' : '✦ Key takeaways',
    references: lang === 'pt' ? 'Referências' : 'References',
    writtenBy: lang === 'pt' ? 'Escrito por' : 'Written by',
    readProfile: lang === 'pt' ? 'Ler perfil completo →' : 'Read full profile →',
    relatedNotes: lang === 'pt' ? 'Notas relacionadas' : 'Related notes',
    comingSoon: lang === 'pt' ? 'Em breve' : 'Coming soon',
  };

  return (
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
              {labels.home}
            </Link>
            <span style={{ margin: '0 12px' }}>·</span>
            <Link href="/journal/" style={{ color: 'var(--ink-dim)' }}>
              {labels.journal}
            </Link>
            <span style={{ margin: '0 12px' }}>·</span>
            <span>{view.tag.split('·')[0].trim()}</span>
          </nav>

          <div className="kds-mono" style={{ ...SECTION_LABEL, color: 'var(--accent)', marginBottom: 24 }}>
            {view.tag}
          </div>

          <h1
            className="kds-display"
            aria-label={view.title}
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              margin: 0,
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
            }}
          >
            {view.title}
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
            {view.subtitle}
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
              {labels.by}{' '}
              {author ? (
                <Link href={`/team/${author.slug}/`} style={{ color: 'var(--ink)' }}>
                  {article.author}
                </Link>
              ) : (
                <span style={{ color: 'var(--ink)' }}>{article.author}</span>
              )}
            </span>
            <span>·</span>
            <time dateTime={article.datePublished}>{formatHumanDate(article.datePublished, lang)}</time>
            <span>·</span>
            <span>
              {article.readMinutes} {labels.minRead}
            </span>
          </div>
        </div>
      </header>

      {article.hero && (
        <div style={{ padding: '0 48px', marginTop: 0 }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <ParallaxImageFrame aspect="21/9" style={{ borderRadius: 4 }}>
              <Image
                src={article.hero.src}
                alt={article.hero.alt}
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 1100px"
                style={{ objectFit: 'cover' }}
              />
            </ParallaxImageFrame>
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
              {labels.keyTakeaways}
            </div>
            <ul style={{ margin: 0, paddingLeft: 20, listStyle: 'none' }}>
              {view.keyTakeaways.map((t, i) => (
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
            {view.abstract}
          </p>
        </div>
      </section>

      {/* BODY */}
      <section style={{ padding: '0 48px 60px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ maxWidth: 760 }}>
            {view.sections.map((s, i) => {
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
                  <Tag key={i} className="kds-sans" style={{ ...PROSE, paddingLeft: 24 }}>
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
      {view.references && view.references.length > 0 && (
        <section style={{ padding: '40px 48px 60px', background: 'var(--bg-2)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="kds-mono" style={{ ...SECTION_LABEL, marginBottom: 24 }}>
              {labels.references}
            </div>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: 760 }}>
              {view.references.map((r, i) => (
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
              className="kds-card"
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
                  {labels.writtenBy}
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
                  {labels.readProfile}
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* RELATED */}
      {view.related && view.related.length > 0 && (
        <section style={{ padding: '40px 48px 80px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="kds-mono" style={{ ...SECTION_LABEL, marginBottom: 24 }}>
              {labels.relatedNotes}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {view.related.map((r) => (
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
                    {labels.comingSoon}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}
