import type { Metadata } from 'next';
import { IBM_Plex_Mono, Poppins, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-legacy',
});

export const metadata: Metadata = {
  title: 'Abhishek Bhattarai | Senior Software Engineer',
  description:
    'Senior Software Engineer at reAlpha building interaction-rich products with TypeScript, React, Next.js, React Native, Node.js, and Python.',
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
      'Frontend-forward Senior Software Engineer building high-scale products and developer tools with TypeScript, React, Next.js, and Python.',
    url: 'https://bhattaraiabhishek.com.np',
    siteName: 'Abhishek Bhattarai Portfolio',
    images: [
      {
        url: '/og_image.png',
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
      'Frontend-forward Senior Software Engineer at reAlpha building high-scale products and developer tools.',
    images: ['/og_image.png'],
    // creator: '@handle', // adding when i make the account
  },
  metadataBase: new URL('https://bhattaraiabhishek.com.np'),
  other: {
    'article:modified_time': '2026-09-10',
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
      <body
        className={`${spaceGrotesk.variable} ${plexMono.variable} ${poppins.variable}`}
      >
        {children}
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
