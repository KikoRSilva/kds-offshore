import type { Metadata } from 'next';
import TeamMemberView, { TEAM_SLUGS, buildTeamMetadata } from '@/views/team-detail-view';
import { routing } from '@/i18n/routing';

const LOCALE = routing.defaultLocale;

export function generateStaticParams() {
  return TEAM_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildTeamMetadata(slug, LOCALE);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <TeamMemberView slug={slug} locale={LOCALE} />;
}
