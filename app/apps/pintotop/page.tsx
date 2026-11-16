import type { Metadata } from 'next';
import PinToTopLanding from './PinToTopLanding';
import { DMG_URL, REPO_URL, SITE_URL, faqs } from './content';

const title = 'Pin To Top — Picture-in-picture for video calls on Mac';
const description =
  'Free, open-source Mac app that keeps your FaceTime, Zoom, or Meet call floating on top, even over full-screen apps and across every Space.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'picture in picture video call mac',
    'keep zoom call visible full screen mac',
    'facetime picture in picture over full screen app',
    'google meet floating window mac',
    'pin to top mac',
    'always on top mac',
    'keep window on top across spaces mac',
    'open source always on top mac',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title,
    description:
      'Your video call follows you into full-screen apps and every Space. Free and open source for macOS.',
    url: SITE_URL,
    siteName: 'Pin To Top',
    type: 'website',
    images: [
      {
        url: '/apps/pintotop/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Pin To Top app icon',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/apps/pintotop/icon-512.png'],
  },
};

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Pin To Top',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'macOS 14 or later',
    description,
    url: SITE_URL,
    image: `${SITE_URL}/icon-512.png`,
    license: 'https://opensource.org/licenses/MIT',
    codeRepository: REPO_URL,
    downloadUrl: DMG_URL,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: {
      '@type': 'Person',
      name: 'Abhishek Bhattarai',
      url: 'https://bhattaraiabhishek.com.np',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  },
];

export default function PinToTopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PinToTopLanding />
    </>
  );
}
