import type { Metadata } from 'next';
import UnspoilLanding from './UnspoilLanding';

export const metadata: Metadata = {
  title: 'UnSpoil — Personal finance playbook on your phone',
  description:
    'Multi-currency manual budgeting for Android. Plan buckets, see safe-to-spend, track goals and lending—no account, no bank login, data stays on your device.',
  alternates: {
    canonical: 'https://bhattaraiabhishek.com.np/apps/unspoil',
  },
  openGraph: {
    title: 'UnSpoil — Personal finance playbook on your phone',
    description:
      'Nepal-friendly, multi-currency budgeting with safe-to-spend, goals, and optional eSewa payment helper. Local-first on Android.',
    url: 'https://bhattaraiabhishek.com.np/apps/unspoil',
    siteName: 'UnSpoil',
    type: 'website',
    images: [
      {
        url: '/apps/unspoil/icon-512.png',
        width: 512,
        height: 512,
        alt: 'UnSpoil app icon',
      },
    ],
  },
};

export default function UnspoilPage() {
  return <UnspoilLanding />;
}
