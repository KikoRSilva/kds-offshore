import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://kdsoffshore.pt';

// AI / assistant crawlers we explicitly welcome.
//
// Strategy: maximise visibility in reputable AI search and assistants;
// block one well-known bad actor (Bytespider) for whatever signal it carries
// (note: Bytespider largely ignores robots.txt — server-level rules also
// recommended).
//
// Sources:
//  OpenAI:    https://platform.openai.com/docs/bots
//  Anthropic: https://support.anthropic.com/en/articles/8896518
//  Apple:     https://support.apple.com/en-us/119829
const AI_AGENTS_ALLOWED = [
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic (Claude-Web and anthropic-ai are deprecated — do not use)
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google (Google-Extended controls Gemini / AI Overviews training; Googlebot
  // for traditional search is governed by the default rule)
  'Google-Extended',
  // Apple
  'Applebot',
  'Applebot-Extended',
  // Other reputable AI / assistant crawlers
  'MistralAI-User',
  'DuckAssistBot',
  'Meta-ExternalAgent',
  'Amazonbot',
  'CCBot',
  'YouBot',
  'Diffbot',
] as const;

const AI_AGENTS_BLOCKED = [
  // ByteDance / TikTok — largely ignores robots.txt; this is a soft signal only.
  'Bytespider',
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_AGENTS_ALLOWED.map((userAgent) => ({ userAgent, allow: '/' })),
      ...AI_AGENTS_BLOCKED.map((userAgent) => ({ userAgent, disallow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
