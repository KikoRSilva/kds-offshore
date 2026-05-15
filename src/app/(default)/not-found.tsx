import type { Metadata } from 'next';
import NotFoundView from '@/views/not-found-view';

export const metadata: Metadata = {
  title: 'Page not found',
  description:
    'The page you asked for is not on our charts. Return to the KDS Offshore studio via the links below.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundView />;
}
