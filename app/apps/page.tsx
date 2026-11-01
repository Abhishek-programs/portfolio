import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Apps',
  description:
    'Apps by Abhishek Bhattarai. UnSpoil is a local-first personal finance app for Android.',
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
  },
];

export default function AppsPage() {
  return (
    <div className="cinematic-portfolio">
      <header className="portfolio-header">
        <Link href="/" className="portfolio-mark" aria-label="Portfolio">
          AB
        </Link>
        <p className="mono text-[11px] uppercase tracking-[0.14em]">Apps</p>
        <Link href="/" className="header-resume">
          Portfolio ↗
        </Link>
      </header>
      <main className="mx-auto max-w-3xl px-7 pb-24 pt-32">
        <p className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
          Published
        </p>
        <h1 className="mt-3 text-6xl font-semibold tracking-tight md:text-7xl">
          Apps.
        </h1>
        <ul className="mt-14 border-t border-[var(--line)]">
          {apps.map(app => (
            <li key={app.href} className="border-b border-[var(--line)]">
              <Link
                href={app.href}
                className="flex items-center gap-5 py-6 no-underline"
              >
                <Image
                  src={app.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-2xl"
                />
                <span className="min-w-0">
                  <span className="mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    {app.platform}
                  </span>
                  <span className="mt-1 block text-3xl font-semibold tracking-tight">
                    {app.name}
                  </span>
                  <span className="mt-2 block max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
                    {app.summary}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
