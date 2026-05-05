import type { Metadata } from 'next';
import { Spectral, JetBrains_Mono, Inter_Tight } from 'next/font/google';
import './globals.css';
import { SiteProvider } from '@/contexts/site-context';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spectral',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s · KDS Offshore',
    default: 'KDS Offshore — Naval Architecture & Offshore Engineering',
  },
  description:
    'KDS Offshore designs vessels, structures, and energy systems. Naval architecture, hydrodynamics, mooring, and decarbonisation consultancy from Oeiras, Portugal.',
  keywords: [
    'naval architecture',
    'offshore engineering',
    'hydrodynamics',
    'CFD',
    'manoeuvrability',
    'mooring',
    'decarbonisation',
    'Portugal',
    'Lisbon',
  ],
  authors: [{ name: 'KDS Offshore' }],
  creator: 'KDS Offshore',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: 'pt_PT',
    siteName: 'KDS Offshore',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${spectral.variable} ${jetbrainsMono.variable} ${interTight.variable}`}
    >
      <body>
        <SiteProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
