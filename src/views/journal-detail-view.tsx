import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ARTICLES_BY_SLUG, ARTICLE_SLUGS, type ArticleSection } from '@/content/journal-detail';
import { TEAM_BY_SLUG } from '@/content/team-detail';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';
import { JournalArticleBody } from '@/components/journal-article-body';

const SITE_URL = 'https://kdsoffshore.pt';

export { ARTICLE_SLUGS };

interface FaqEntry {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

export async function buildArticleMetadata(slug: string, locale: 'en' | 'pt'): Promise<Metadata> {
  const a = ARTICLES_BY_SLUG[slug];
  if (!a) return {};

  const pt = a.i18n?.pt;
  const usePt = locale === 'pt' && pt;
  const title = usePt ? pt.title : a.title;
  const subtitle = usePt ? pt.subtitle : a.subtitle;
  const canonical = locale === 'pt' ? `/journal/${slug}/` : `/en/journal/${slug}/`;
  const url = locale === 'pt' ? `${SITE_URL}/journal/${slug}/` : `${SITE_URL}/en/journal/${slug}/`;

  return {
    title,
    description: subtitle,
    alternates: { canonical },
    openGraph: {
      title: `${title} — KDS Offshore Journal`,
      description: subtitle,
      url,
      type: 'article',
      publishedTime: a.datePublished,
      modifiedTime: a.dateModified,
      authors: [a.author],
      images: a.hero
        ? [{ url: a.hero.src, alt: a.hero.alt }]
        : [
            {
              url: '/og-image.png',
              width: 1200,
              height: 630,
              alt: 'KDS Offshore — Engineering the working ocean.',
            },
          ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: subtitle,
      images: [a.hero ? a.hero.src : '/og-image.png'],
    },
  };
}

function buildFaqEntries(sections: ArticleSection[]): FaqEntry[] {
  const faqStart = sections.findIndex(
    (s) => s.type === 'h2' && /frequently asked|faq/i.test(s.content as string),
  );
  if (faqStart === -1) return [];

  const entries: FaqEntry[] = [];
  for (let i = faqStart + 1; i < sections.length; i++) {
    const s = sections[i];
    if (s.type === 'h2') break;
    if (s.type !== 'h3') continue;
    const next = sections[i + 1];
    if (!next || next.type !== 'p') continue;
    entries.push({
      '@type': 'Question',
      name: s.content as string,
      acceptedAnswer: {
        '@type': 'Answer',
        text: next.content as string,
      },
    });
  }
  return entries;
}

export default function JournalArticleView({ slug, locale }: { slug: string; locale: 'en' | 'pt' }) {
  const a = ARTICLES_BY_SLUG[slug];
  if (!a) notFound();

  const author = a.authorSlug ? TEAM_BY_SLUG[a.authorSlug] : undefined;
  const usePt = locale === 'pt' && a.i18n?.pt;
  const headline = usePt ? a.i18n!.pt!.title : a.title;
  const description = usePt ? a.i18n!.pt!.subtitle : a.subtitle;
  const abstract = usePt ? a.i18n!.pt!.abstract : a.abstract;
  const articleSection = usePt ? a.i18n!.pt!.tag : a.tag;
  const articleUrl = locale === 'pt' ? `${SITE_URL}/journal/${slug}/` : `${SITE_URL}/en/journal/${slug}/`;

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    mainEntityOfPage: articleUrl,
    headline,
    description,
    abstract,
    articleSection,
    inLanguage: locale === 'pt' ? 'pt-PT' : 'en-GB',
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

  const faqEntries = buildFaqEntries(a.sections);
  const faqJsonLd =
    faqEntries.length >= 2
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': `${SITE_URL}/journal/${slug}/#faq`,
          inLanguage: 'en-GB',
          isPartOf: { '@id': `${SITE_URL}/journal/${slug}/#article` },
          mainEntity: faqEntries,
        }
      : null;

  const authorProps = author
    ? {
        slug: author.slug,
        name: author.name,
        jobTitle: author.jobTitle,
        photoSrc: author.photoSrc,
        photoAlt: author.photoAlt,
      }
    : undefined;

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Journal', path: '/journal/' },
          { name: headline, path: `/journal/${slug}/` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <JournalArticleBody article={a} author={authorProps} />
    </>
  );
}
