import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abhishek Bhattarai | Software Engineer',
  description:
    'Software Engineer building developer tools and learning platforms used by 10M+ users worldwide. Full-stack expertise in React, Next.js, TypeScript, Python, and Node.js.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: '/favicon-96x96.png',
    },
    { rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' },
    { rel: 'shortcut icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
  ],
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Portfolio',
  },
  openGraph: {
    title: 'Abhishek Bhattarai | Portfolio',
    description:
      'Explore the portfolio of Abhishek Bhattarai — web developer, engineer, and creator.',
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
    title: 'Abhishek Bhattarai | Portfolio',
    description:
      'Discover projects and experience from Abhishek Bhattarai — full-stack engineer.',
    images: ['/og-image.png'],
    // creator: '@handle', // adding when i make the account
  },
  metadataBase: new URL('https://bhattaraiabhishek.com.np'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Abhishek Bhattarai',
              url: 'https://bhattaraiabhishek.com.np',
              jobTitle: 'Software Developer',
              sameAs: [
                'https://github.com/abhishek-programs',
                'https://linkedin.com/in/i-abhishek-bhattarai/',
              ],
            }),
          }}
        />
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
