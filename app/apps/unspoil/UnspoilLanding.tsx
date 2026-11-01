'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const pillars = [
  {
    title: 'Playbook-first',
    body: 'Split take-home pay across buckets you define—Core Living, Personal, emergency fund, SIP, goals, and more. Your plan drives the app, not the other way around.',
  },
  {
    title: 'Safe to spend',
    body: 'Once salary is confirmed this month, Home shows one clear number: what you can spend without breaking the plan. No mental math at the checkout.',
  },
  {
    title: 'Your money, your wallets',
    body: 'Bank balance plus wallets you name (Cash, eSewa, whatever you use). Transactions always know where money moved.',
  },
  {
    title: 'Living & Future',
    body: 'Spending ceilings with green / amber / red bars. Future rows for EF, SIP, and goals—with check-offs that feel like a monthly rhythm.',
  },
  {
    title: 'Lent & borrowed',
    body: 'Person ledger with settle-up, kept separate from bucket spend so lending never distorts your budget bars.',
  },
  {
    title: 'Local-first privacy',
    body: 'No sign-in, no cloud sync, no ads. SQLite on your phone. Backups and exports only when you tap them.',
  },
];

const rhythm = [
  {
    title: 'Salary in',
    body: 'Confirm income when it hits, or early if pay arrives before your month start.',
  },
  {
    title: 'Plan unlocked',
    body: 'The ring and safe-to-spend open for that period. The number is what’s left after the playbook.',
  },
  {
    title: 'Checklist done',
    body: 'EF, SIP, and savings get a nudge, then you live inside Living ceilings until the next cycle.',
  },
];

const optional = [
  {
    title: 'Payment helper',
    body: 'Optional. Pick apps like eSewa or nBank; get a prompt to log amounts while you pay. Usage + notification access only—no screenshots or accessibility scraping.',
  },
  {
    title: 'Backups & export',
    body: 'JSON backup for a new phone, optional nightly auto-backup on device (last 3 files), CSV for spreadsheets, or a markdown snapshot when you want outside help.',
  },
  {
    title: 'Gentle nudges',
    body: 'On-device reminders for budget and savings—at most one per day, quiet hours overnight. No server push.',
  },
];

const screenshots = [
  {
    src: '/apps/unspoil/screenshots/screenshot-01-home.png',
    alt: 'UnSpoil Home with safe-to-spend ring and Living section',
  },
  {
    src: '/apps/unspoil/screenshots/screenshot-02-transactions.png',
    alt: 'Transactions list and charts',
  },
  {
    src: '/apps/unspoil/screenshots/screenshot-03-goals.png',
    alt: 'Goals and Vault progress',
  },
  {
    src: '/apps/unspoil/screenshots/screenshot-04-settings.png',
    alt: 'Settings and playbook controls',
  },
];

const RING_GAP = 0;
const RING_WEIGHTS = [0.64, 0.22, 0.14];
const RING_COLORS = [
  'var(--unspoil-ring)',
  'var(--unspoil-red)',
  'var(--unspoil-purple)',
];

function ringSegments() {
  const usable = 1 - RING_GAP * RING_WEIGHTS.length;
  let cursor = 0;
  return RING_WEIGHTS.map((weight, index) => {
    const length = usable * weight;
    const start = cursor;
    cursor += length + RING_GAP;
    return {
      key: RING_COLORS[index],
      color: RING_COLORS[index],
      length,
      start,
    };
  });
}

const segments = ringSegments();

export default function UnspoilLanding() {
  const root = useRef<HTMLDivElement>(null);
  const amount = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (!reduce && amount.current) {
        const counter = { value: 0 };
        gsap.to(counter, {
          value: 42500,
          duration: 1.25,
          ease: 'power2.out',
          onUpdate: () => {
            if (!amount.current) return;
            amount.current.textContent = Math.round(
              counter.value
            ).toLocaleString('en-US');
          },
        });
        gsap.from('.ring-seg', {
          attr: {
            strokeDashoffset: (_index, element) => {
              const node = element as SVGCircleElement;
              return -(
                Number(node.dataset.start) + Number(node.dataset.length)
              );
            },
          },
          duration: 1.15,
          stagger: 0.08,
          ease: 'power3.out',
        });
        gsap.from('.hero-copy > *', {
          autoAlpha: 0,
          y: 18,
          duration: 0.7,
          stagger: 0.07,
          ease: 'power3.out',
        });
        gsap.from('.unspoil-ring-badge', {
          autoAlpha: 0,
          scale: 0.85,
          duration: 0.5,
          delay: 0.7,
          ease: 'power2.out',
        });
      }

      if (reduce) return;

      gsap.utils.toArray<HTMLElement>('.unspoil-reveal').forEach(block => {
        gsap.from(block, {
          autoAlpha: 0,
          y: 24,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 86%',
            once: true,
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <section className="border-b border-[var(--unspoil-border)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:py-20">
          <div className="hero-copy">
            <span className="unspoil-chip">
              Multi-currency · Nepal-friendly · Android
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
              Your monthly money playbook—honest safe-to-spend, no bank login.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--unspoil-muted)]">
              UnSpoil is for people who want structure without linking accounts
              or ads. Plan buckets, log expenses manually, track goals and
              lending, and see what is actually left to spend after salary
              lands. NPR and Nepal are first-class; pick any currency in
              Settings.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span
                className="unspoil-btn-primary cursor-default"
                aria-label="Google Play listing coming soon"
              >
                Google Play — coming soon
              </span>
              <Link href="/apps/unspoil/privacy" className="unspoil-btn-ghost">
                Privacy policy
              </Link>
            </div>
            <p className="unspoil-mono mt-6 text-[11px] uppercase tracking-wide text-[var(--unspoil-faint)]">
              No account · No cloud sync · Data stays on device
            </p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[320px] md:max-w-[380px]">
            <svg viewBox="0 0 240 240" className="h-full w-full" aria-hidden>
              <circle
                cx="120"
                cy="120"
                r="88"
                fill="none"
                stroke="var(--unspoil-track)"
                strokeWidth="16"
              />
              {segments.map(segment => (
                <circle
                  key={segment.key}
                  className="ring-seg"
                  data-start={segment.start}
                  data-length={segment.length}
                  cx="120"
                  cy="120"
                  r="88"
                  fill="none"
                  stroke={segment.color}
                  strokeWidth="16"
                  pathLength="1"
                  strokeDasharray={`${segment.length} ${1 - segment.length}`}
                  strokeDashoffset={-segment.start}
                  transform="rotate(-90 120 120)"
                />
              ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="unspoil-mono text-[10px] uppercase tracking-widest text-[var(--unspoil-faint)]">
                Safe to spend
              </p>
              <p
                ref={amount}
                className="unspoil-tabular mt-1 text-4xl font-semibold tracking-tight md:text-5xl"
              >
                42,500
              </p>
              <p className="mt-1 text-xs text-[var(--unspoil-muted)]">
                Example · your currency
              </p>
            </div>
            <div className="unspoil-ring-badge absolute right-2 top-[16%] rounded-full px-2.5 py-1 text-[11px] font-bold">
              12d
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="unspoil-reveal mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20"
      >
        <p className="unspoil-section-kicker">Built for clarity</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          Structure that matches how you actually get paid and spend.
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[var(--unspoil-muted)]">
          Manual entry on purpose—you stay in control. The app does the
          arithmetic: ceilings, safe-to-spend, EF targets, and goal progress
          from the playbook you set once and tweak in Settings.
        </p>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(item => (
            <li key={item.title} className="unspoil-card p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--unspoil-muted)]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="unspoil-reveal border-y border-[var(--unspoil-border)] bg-[var(--unspoil-surface)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="unspoil-section-kicker">Month rhythm</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Salary in, plan unlocked, checklist done.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-[var(--unspoil-muted)]">
              The month starts on the day you choose, not on the calendar. A
              center + button logs an expense, income, or lend/borrow. Play
              lists it as manual finance, not open banking.
            </p>
          </div>
          <ol className="unspoil-rhythm">
            {rhythm.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="screenshots"
        className="unspoil-reveal mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20"
      >
        <p className="unspoil-section-kicker">Screenshots</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Light, calm, numbers-first.
        </h2>
        <p className="mt-3 max-w-xl text-[var(--unspoil-muted)]">
          The phone stays light. Green means the plan is healthy. Amber and red
          show up when a ceiling is close.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {screenshots.map(shot => (
            <figure key={shot.src} className="unspoil-shot">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={540}
                height={1122}
                className="h-auto w-full rounded-[12px]"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="unspoil-reveal border-t border-[var(--unspoil-border)] bg-[var(--unspoil-surface)]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="unspoil-section-kicker">Optional power-ups</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            You choose what to enable.
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {optional.map(item => (
              <li key={item.title} className="unspoil-card p-6">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--unspoil-muted)]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="unspoil-reveal mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="unspoil-card grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="unspoil-section-kicker">Privacy</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Your financial data never needs our servers.
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--unspoil-muted)]">
              UnSpoil is published by Abhishek Bhattarai. The privacy policy
              explains on-device storage, optional backups, and optional Android
              permissions for the payment helper and nudges.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              href="/apps/unspoil/privacy"
              className="unspoil-btn-primary text-center"
            >
              Read privacy policy
            </Link>
            <a
              href="mailto:i.abhishek.bhattarai@gmail.com"
              className="unspoil-btn-ghost text-center"
            >
              Email feedback
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--unspoil-border)] bg-[var(--unspoil-surface)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-[var(--unspoil-muted)] md:px-8">
          <p>
            © {new Date().getFullYear()} Abhishek Bhattarai ·{' '}
            <Link href="/apps/unspoil/privacy" className="unspoil-link">
              Privacy
            </Link>
          </p>
          <Link
            href="/"
            className="no-underline hover:text-[var(--unspoil-ink)]"
          >
            bhattaraiabhishek.com.np
          </Link>
        </div>
      </footer>
    </div>
  );
}
