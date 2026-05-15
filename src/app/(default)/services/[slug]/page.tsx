import type { Metadata } from 'next';
import ServiceDetailView, {
  SERVICE_SLUGS,
  buildServiceMetadata,
} from '@/views/services-detail-view';

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildServiceMetadata(slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceDetailView slug={slug} />;
}
