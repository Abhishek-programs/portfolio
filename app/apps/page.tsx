import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { AppHeader } from './AppHeader';

export const metadata: Metadata = {
  title: 'Apps',
  description:
    'Apps by Abhishek Bhattarai. UnSpoil is a local-first personal finance app for Android. Pin To Top is picture-in-picture for video calls on Mac, even over full-screen apps.',
  alternates: {
    canonical: 'https://bhattaraiabhishek.com.np/apps',
  },
};

const apps = [
  {
    name: 'UnSpoil',
    platform: 'Android',
    summary:
      'Local-first personal finance. Safe-to-spend, goals, and lending stay on the phone. No account, no bank login.',
    href: '/apps/unspoil',
    icon: '/apps/unspoil/icon-512.png',
    accent: {
      '--accent': '#15803d',
      '--accent-text': '#116632',
      '--accent-soft': '#e2f3e7',
    },
  },
  {
    name: 'Pin To Top',
    platform: 'macOS · Open source',
    summary:
      'Picture-in-picture for video calls on Mac. Your call follows you into full-screen apps and every Space. Free and MIT licensed.',
    href: '/apps/pintotop',
    icon: '/apps/pintotop/icon-512.png',
    accent: {
      '--accent': '#2f5bd3',
      '--accent-text': '#2449b0',
      '--accent-soft': '#e6ecfb',
    },
  },
];

export default function AppsPage() {
  return (
    <>
      <AppHeader
        name="Abhishek Bhattarai"
        href="/"
        links={[['Portfolio', '/']]}
      />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-16 md:px-8 md:pt-24">
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Apps
        </h1>
        <p className="app-body mt-4">
          Small, focused apps I build and publish.
        </p>
        <ul className="mt-12 border-t border-[var(--line-strong)]">
          {apps.map(app => (
            <li
              key={app.href}
              className="border-b border-[var(--line)]"
              style={app.accent as React.CSSProperties}
            >
              <Link
                href={app.href}
                className="group flex items-start gap-5 py-7 no-underline"
              >
                <Image
                  src={app.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="flex-none rounded-2xl"
                />
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight transition-colors group-hover:text-[var(--accent-text)] md:text-3xl">
                      {app.name}
                    </span>
                    <span
                      aria-hidden
                      className="text-xl text-[var(--accent-text)] transition-transform group-hover:translate-x-1"
                    >
                      <FiArrowRight />
                    </span>
                  </span>
                  <span className="mt-1 block text-[13px] font-medium text-[var(--accent-text)]">
                    {app.platform}
                  </span>
                  <span className="mt-2 block max-w-xl text-[15.5px] leading-relaxed text-[var(--muted)]">
                    {app.summary}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
