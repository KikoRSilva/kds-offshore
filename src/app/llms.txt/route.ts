import { getLlmsTxt } from '@/lib/llms-txt';
import { routing } from '@/i18n/routing';

export const dynamic = 'force-static';

export function GET() {
  return new Response(getLlmsTxt(routing.defaultLocale), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
