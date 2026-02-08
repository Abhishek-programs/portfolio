import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abhishek Bhattarai | Senior Software Engineer',
  description:
    'Senior Software Engineer, 4 years. High-scale platforms for 10M+ users. TypeScript, React, Next.js, Python. Execution engines, workflow automation, growth analytics (sGTM, CAPI).',
  icons: {
    icon: [
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-96x96.png', sizes: '96x96' },
    ],
    shortcut: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Portfolio',
  },
  openGraph: {
    title: 'Abhishek Bhattarai | Senior Software Engineer',
    description:
      'Senior Software Engineer building high-scale platforms for 10M+ users. React, Next.js, TypeScript, Python. Growth analytics (sGTM, CAPI).',
    url: 'https://bhattaraiabhishek.com.np',
    siteName: 'Abhishek Bhattarai Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abhishek Bhattarai Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Bhattarai | Senior Software Engineer',
    description:
      'Senior Software Engineer, 4 years. High-scale platforms for 10M+ users. Full-stack and growth analytics.',
    images: ['/og-image.png'],
    // creator: '@handle', // adding when i make the account
  },
  metadataBase: new URL('https://bhattaraiabhishek.com.np'),
  other: {
    'article:published_time': '2025-12-01',
    'article:author': 'Abhishek Bhattarai',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Abhishek Bhattarai',
              url: 'https://bhattaraiabhishek.com.np',
              jobTitle: 'Senior Software Engineer',
              sameAs: [
                'https://github.com/abhishek-programs',
                'https://linkedin.com/in/i-abhishek-bhattarai/',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
