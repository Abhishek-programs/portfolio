import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UnSpoil Privacy Policy',
  description:
    'Privacy policy for UnSpoil, a local-first personal finance app for Android. No account, no cloud sync, data stays on your device.',
  alternates: {
    canonical: 'https://bhattaraiabhishek.com.np/apps/unspoil/privacy',
  },
  openGraph: {
    title: 'UnSpoil Privacy Policy',
    description:
      'How UnSpoil handles your data: stored on your device only, optional backups, and optional payment-helper permissions.',
    url: 'https://bhattaraiabhishek.com.np/apps/unspoil/privacy',
    siteName: 'UnSpoil',
    type: 'website',
  },
};

export default function UnspoilPrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
