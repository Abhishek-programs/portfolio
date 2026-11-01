'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger, Observer);
}

const proof = [
  ['4+', 'years shipping products'],
  ['1M+', 'monthly IDE learners'],
  ['100K+', 'monthly visualizer users'],
  ['2×', 'content production velocity'],
];

const programizRoles = [
  {
    period: '2022 — 2026',
    title: 'Senior Software Engineer',
    copy: 'Led interactive developer tools and AI-assisted production systems while raising frontend architecture, TypeScript, and API standards.',
    facts: ['Visualizer lead', '45% faster auth', '50% better tracking'],
  },
  {
    period: '2022 — 2024',
    title: 'Software Engineer',
    copy: 'Built the Playground IDE, execution infrastructure, learning APIs, internal controls, and a workflow system that cut releases from 14 days to 4.',
    facts: ['8 languages', '1M+ learners', '14 → 4 day releases'],
  },
];

const systems: {
  number: string;
  title: string;
  metric: string;
  copy: string;
  stack: string;
  href?: string;
  linkLabel?: string;
}[] = [
  {
    number: '01',
    title: 'Code Visualizer',
    metric: '100K+ monthly learners',
    copy: 'Led Python, C, and DSA visualizers from execution pipelines to recursive call and algorithm-state rendering.',
    stack: 'React · TypeScript · Python · Node.js',
    href: 'https://programiz.pro/code-visualizer/dsa?type=knapsack',
  },
  {
    number: '02',
    title: 'Playground IDE',
    metric: '1M+ monthly learners',
    copy: 'Developed a browser IDE supporting eight languages with real-time, scalable code execution.',
    stack: 'React · TypeScript · Node.js · REST',
    href: 'https://www.programiz.com/python-programming/online-compiler/',
  },
  {
    number: '03',
    title: 'UnSpoil',
    metric: 'Local-first Android',
    copy: 'Multi-currency manual budgeting—Nepal-friendly, local-first. Safe-to-spend, goals, and lending on the phone with no account and no bank login.',
    stack: 'React Native · Expo · SQLite',
    href: '/apps/unspoil',
    linkLabel: 'App site ↗',
  },
  {
    number: '04',
    title: 'Grievance Desk',
    metric: 'One write, still explainable',
    copy: 'A desk for fictional complaints. CSV imports are staged, the deadline is five working days in Kathmandu, and the supervisor’s decision shares a transaction with the follow-up.',
    stack: 'TypeScript · React · Express · PostgreSQL',
    href: 'https://desk.bhattaraiabhishek.com.np',
  },
  {
    number: '05',
    title: 'AI Content Engine',
    metric: '12 → 6 days',
    copy: 'Architected a GPT/Gemini and Slack workflow that turns raw documentation into structured courses.',
    stack: 'Python · GPT · Gemini · Slack API',
  },
  {
    number: '06',
    title: 'Analytics Pipeline',
    metric: '50% accuracy gain',
    copy: 'Designed privacy-aware server-side conversion tracking and funnel analytics across millions of events.',
    stack: 'sGTM · Meta CAPI · GA4 · BigQuery',
  },
];

const capabilities = [
  {
    label: 'Frontend',
    items: 'React · Next.js · TypeScript · React Native · Tailwind CSS',
  },
  {
    label: 'Architecture',
    items: 'Design systems · Component libraries · Responsive UI · Performance',
  },
  {
    label: 'Systems',
    items: 'Node.js · Python · PostgreSQL · REST APIs · Execution pipelines',
  },
  {
    label: 'Delivery',
    items: 'Docker · CI/CD · Workflow automation · Code review · Mentorship',
  },
  {
    label: 'Data',
    items: 'GTM · sGTM · CAPI · GA4 · RudderStack · Mixpanel',
  },
];

function bindWorkStage(
  stage: HTMLElement,
  contextSafe: <T extends (...args: never[]) => void>(func: T) => T,
  animate: boolean
) {
  const panels = gsap.utils.toArray<HTMLElement>('.work-panel', stage);
  const tabs = gsap.utils.toArray<HTMLButtonElement>('.work-tab', stage);
  const progress = stage.querySelector<HTMLElement>('.work-progress span');
  if (!panels.length || !tabs.length) return () => {};

  let current = 0;
  const count = panels.length;

  gsap.set(panels, { autoAlpha: 0, x: 0, zIndex: 1 });
  gsap.set(panels[0], { autoAlpha: 1, zIndex: 2 });
  if (progress) {
    gsap.set(progress, {
      scaleX: 1 / count,
      transformOrigin: 'left center',
    });
  }

  const go = contextSafe((index: number, direction: 1 | -1) => {
    const next = (index + count) % count;
    if (next === current) return;

    const from = panels[current];
    const to = panels[next];
    current = next;

    tabs.forEach((tab, i) => {
      const selected = i === next;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel, i) => {
      panel.setAttribute('aria-hidden', String(i !== next));
    });

    const duration = animate ? 0.45 : 0;
    gsap.killTweensOf(progress ? [from, to, progress] : [from, to]);
    gsap.set(from, { zIndex: 1 });
    gsap.set(to, { zIndex: 2, x: 64 * direction, autoAlpha: 0 });
    gsap.to(from, {
      x: -64 * direction,
      autoAlpha: 0,
      duration: animate ? 0.32 : 0,
      ease: 'power2.in',
    });
    gsap.to(to, {
      x: 0,
      autoAlpha: 1,
      duration,
      ease: 'power3.out',
    });
    if (progress) {
      gsap.to(progress, {
        scaleX: (next + 1) / count,
        duration,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    }
  });

  const onTabClick = tabs.map((tab, index) => {
    const handler = () => go(index, index >= current ? 1 : -1);
    tab.addEventListener('click', handler);
    return handler;
  });

  const prev = stage.querySelector<HTMLButtonElement>('.work-side-prev');
  const next = stage.querySelector<HTMLButtonElement>('.work-side-next');
  const onPrev = () => go(current - 1, -1);
  const onNext = () => go(current + 1, 1);
  prev?.addEventListener('click', onPrev);
  next?.addEventListener('click', onNext);

  const onKeyDown = (event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    if (
      !target.classList.contains('work-tab') &&
      !target.classList.contains('work-side')
    ) {
      return;
    }
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    go(current + direction, direction);
    tabs[current]?.focus();
  };
  stage.addEventListener('keydown', onKeyDown);

  const panelsEl = stage.querySelector<HTMLElement>('.work-panels');
  const switcher = stage.querySelector<HTMLElement>('.work-switcher');
  let wheelLockedUntil = 0;
  const onWheel = (event: WheelEvent) => {
    const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
    const delta = horizontal ? event.deltaX : event.deltaY;
    if (!switcher || Math.abs(delta) < 8) return;

    const direction = delta > 0 ? 1 : -1;
    if (!horizontal) {
      const box = switcher.getBoundingClientRect();
      const fullyVisible = box.top >= 0 && box.bottom <= window.innerHeight;
      const atEdge =
        (direction === 1 && current === count - 1) ||
        (direction === -1 && current === 0);
      if (!fullyVisible || atEdge) return;
    }

    event.preventDefault();
    const now = performance.now();
    if (now < wheelLockedUntil) return;
    wheelLockedUntil = now + (animate ? 500 : 0);
    go(current + direction, direction);
  };
  switcher?.addEventListener('wheel', onWheel, { passive: false });

  const observer = Observer.create({
    target: panelsEl ?? stage,
    type: 'touch',
    lockAxis: true,
    tolerance: 16,
    dragMinimum: 28,
    allowClicks: true,
    preventDefault: false,
    ignore: '.system-link, .work-side',
    onLeft: () => go(current + 1, 1),
    onRight: () => go(current - 1, -1),
  });

  return () => {
    observer.kill();
    switcher?.removeEventListener('wheel', onWheel);
    gsap.killTweensOf(progress ? [...panels, progress] : panels);
    tabs.forEach((tab, index) =>
      tab.removeEventListener('click', onTabClick[index])
    );
    prev?.removeEventListener('click', onPrev);
    next?.removeEventListener('click', onNext);
    stage.removeEventListener('keydown', onKeyDown);
  };
}

const chapterLinks = [
  ['01', 'Intro', 'intro'],
  ['02', 'Proof', 'proof'],
  ['03', 'Now', 'now'],
  ['04', 'Experience', 'experience'],
  ['05', 'Work', 'work'],
  ['06', 'Skills', 'skills'],
  ['07', 'Background', 'background'],
  ['08', 'Contact', 'contact'],
];

export default function CinematicPortfolio() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      if (!contextSafe) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop:
            '(min-width: 900px) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
          mobile:
            '(max-width: 899px) and (prefers-reduced-motion: no-preference), (pointer: coarse) and (prefers-reduced-motion: no-preference)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        context => {
          const { desktop, mobile, reduceMotion } = context.conditions as {
            desktop: boolean;
            mobile: boolean;
            reduceMotion: boolean;
          };
          const cleanups: Array<() => void> = [];
          const stage = root.current?.querySelector<HTMLElement>('.work-stage');

          if (stage) {
            cleanups.push(bindWorkStage(stage, contextSafe, !reduceMotion));
          }

          if (desktop) {
            const chapters = gsap.utils.toArray<HTMLElement>('.chapter');

            chapters.forEach(chapter => {
              const title = chapter.querySelector('.chapter-title');
              const kicker = chapter.querySelector('.chapter-kicker');
              const reveals = chapter.querySelectorAll('.reveal-item');
              const rule = chapter.querySelector('.chapter-rule');
              const isIntro = chapter.dataset.chapter === 'intro';

              if (chapter.dataset.chapter === 'work') return;

              const timeline = gsap.timeline({
                defaults: { ease: 'power3.out' },
                scrollTrigger: {
                  trigger: chapter,
                  start: 'top top',
                  end: '+=130%',
                  pin: true,
                  scrub: 0.8,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                },
              });

              if (isIntro) {
                gsap.set([kicker, title], { autoAlpha: 1 });
                gsap.from(title, {
                  yPercent: 15,
                  duration: 1.1,
                  ease: 'power3.out',
                });
                gsap.from(kicker, {
                  y: 12,
                  duration: 0.7,
                  ease: 'power3.out',
                });
                timeline
                  .fromTo(
                    reveals,
                    { autoAlpha: 0, y: 30 },
                    {
                      autoAlpha: 1,
                      y: 0,
                      duration: 0.75,
                      stagger: 0.12,
                    }
                  )
                  .fromTo(
                    rule,
                    { scaleX: 0 },
                    {
                      scaleX: 1,
                      transformOrigin: 'left center',
                      duration: 0.5,
                    },
                    '-=0.2'
                  );
                return;
              }

              timeline
                .fromTo(
                  kicker,
                  { autoAlpha: 1, y: 24 },
                  { autoAlpha: 1, y: 0, duration: 0.35 }
                )
                .fromTo(
                  title,
                  { autoAlpha: 0.14, yPercent: 28, rotation: 1.5 },
                  {
                    autoAlpha: 1,
                    yPercent: 0,
                    rotation: 0,
                    duration: 0.75,
                  },
                  '<0.05'
                )
                .fromTo(
                  reveals,
                  { autoAlpha: 0, y: 42 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.55,
                    stagger: 0.09,
                  },
                  '-=0.25'
                )
                .fromTo(
                  rule,
                  { scaleX: 0 },
                  {
                    scaleX: 1,
                    transformOrigin: 'left center',
                    duration: 0.4,
                  },
                  '-=0.1'
                );
            });

            const blob = root.current?.querySelector('.cursor-blob');
            if (blob) {
              const xTo = gsap.quickTo(blob, 'x', {
                duration: 0.5,
                ease: 'power3.out',
              });
              const yTo = gsap.quickTo(blob, 'y', {
                duration: 0.5,
                ease: 'power3.out',
              });
              const scaleTo = gsap.quickTo(blob, 'scale', {
                duration: 0.25,
                ease: 'power2.out',
              });

              const move = (event: PointerEvent) => {
                xTo(event.clientX);
                yTo(event.clientY);
                scaleTo(
                  (event.target as HTMLElement).closest('a, button') ? 1.7 : 1
                );
              };

              window.addEventListener('pointermove', move);
              cleanups.push(() =>
                window.removeEventListener('pointermove', move)
              );
            }
          }

          if (mobile) {
            gsap.utils.toArray<HTMLElement>('.chapter').forEach(chapter => {
              gsap.from(
                chapter.querySelectorAll('.chapter-title, .reveal-item'),
                {
                  autoAlpha: 0,
                  y: 30,
                  duration: 0.7,
                  stagger: 0.08,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: chapter,
                    start: 'top 82%',
                    once: true,
                  },
                }
              );
            });
          }

          return () => cleanups.forEach(cleanup => cleanup());
        }
      );

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} className="cinematic-portfolio">
      <noscript>
        <style>{`
          .work-index, .work-hint, .work-progress, .work-side { display: none; }
          .work-panels { display: flex; flex-direction: column; gap: 12px; }
          .work-panel { visibility: visible !important; opacity: 1 !important; }
          .chapter-work, .chapter-work .chapter-frame { min-height: auto; overflow: visible; }
        `}</style>
      </noscript>
      <div className="cursor-blob" aria-hidden="true" />

      <header className="portfolio-header">
        <Link href="#intro" className="portfolio-mark" aria-label="Back to top">
          AB
        </Link>
        <nav aria-label="Portfolio chapters">
          {chapterLinks.map(([number, label, id]) => (
            <Link key={id} href={`#${id}`}>
              <span>{number}</span>
              {label}
            </Link>
          ))}
        </nav>
        <Link
          className="header-resume"
          href="/abhishek-bhattarai-resume-SE.pdf"
        >
          Résumé ↗
        </Link>
      </header>

      <main>
        <section
          id="intro"
          className="chapter chapter-hero"
          data-chapter="intro"
        >
          <div className="chapter-frame">
            <p className="chapter-kicker">01 / Kathmandu, Nepal</p>
            <div className="title-clip">
              <h1 className="chapter-title hero-title">
                <span>Abhishek</span>
                <span>Bhattarai.</span>
              </h1>
            </div>
            <div className="hero-meta reveal-item">
              <p>Senior Software Engineer</p>
              <p>reAlpha · Turnit · 2026 —</p>
            </div>
            <p className="hero-intro reveal-item">
              I build interaction-rich interfaces and the systems behind them.
            </p>
            <div className="chapter-rule" />
            <p className="scroll-cue reveal-item">Scroll to run the story ↓</p>
          </div>
        </section>

        <section
          id="proof"
          className="chapter chapter-proof"
          data-chapter="proof"
        >
          <div className="chapter-frame">
            <p className="chapter-kicker">02 / Proof, not adjectives</p>
            <div className="title-clip">
              <h2 className="chapter-title">Built at scale.</h2>
            </div>
            <div className="proof-list">
              {proof.map(([metric, label]) => (
                <div className="proof-row reveal-item" key={metric}>
                  <strong>{metric}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="chapter-rule" />
          </div>
        </section>

        <section id="now" className="chapter chapter-now" data-chapter="now">
          <div className="chapter-frame now-grid">
            <p className="chapter-kicker">03 / Now · May 2026 — Present</p>
            <div className="title-clip">
              <h2 className="chapter-title now-title">Turnit.</h2>
            </div>
            <div className="now-copy">
              <p className="reveal-item company">
                reAlpha Tech Corp. · Nasdaq: AIRE
              </p>
              <p className="reveal-item lead">
                Building the product surface for real estate turnover
                operations.
              </p>
              <p className="reveal-item">
                I own features across responsive web, mobile, REST APIs,
                business workflows, and PostgreSQL models—from technical design
                to production support.
              </p>
              <p className="reveal-item mono">
                TypeScript · React · Next.js · React Native · Node.js ·
                PostgreSQL
              </p>
            </div>
            <div className="chapter-rule" />
          </div>
        </section>

        <section
          id="experience"
          className="chapter chapter-experience"
          data-chapter="experience"
        >
          <div className="chapter-frame">
            <p className="chapter-kicker">04 / Experience · Programiz</p>
            <div className="title-clip">
              <h2 className="chapter-title">From code to leverage.</h2>
            </div>
            <div className="role-list">
              {programizRoles.map(role => (
                <article className="role-card reveal-item" key={role.title}>
                  <p className="mono">{role.period}</p>
                  <h3>{role.title}</h3>
                  <p>{role.copy}</p>
                  <ul>
                    {role.facts.map(fact => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="chapter-rule" />
          </div>
        </section>

        <section id="work" className="chapter chapter-work" data-chapter="work">
          <div className="chapter-frame">
            <p className="chapter-kicker">05 / Selected systems</p>
            <div className="title-clip work-heading">
              <h2 className="chapter-title">Made useful.</h2>
            </div>
            <div
              className="work-stage reveal-item"
              style={{ ['--work-count' as string]: systems.length }}
            >
              <p className="work-hint mono">
                Use the arrows, or scroll through them
              </p>
              <div
                className="work-index"
                role="tablist"
                aria-label="Selected systems"
              >
                {systems.map((system, index) => (
                  <button
                    key={system.title}
                    className="work-tab"
                    type="button"
                    role="tab"
                    id={`work-tab-${system.number}`}
                    aria-selected={index === 0}
                    aria-controls={`work-panel-${system.number}`}
                    tabIndex={index === 0 ? 0 : -1}
                  >
                    {system.title}
                  </button>
                ))}
              </div>
              <div className="work-progress" aria-hidden="true">
                <span />
              </div>
              <div className="work-switcher">
                <button
                  className="work-side work-side-prev"
                  type="button"
                  aria-label="Previous system"
                >
                  ←
                </button>
                <div className="work-panels">
                  {systems.map((system, index) => (
                    <article
                      className="system-card work-panel"
                      key={system.title}
                      id={`work-panel-${system.number}`}
                      role="tabpanel"
                      aria-labelledby={`work-tab-${system.number}`}
                      aria-hidden={index !== 0}
                    >
                      <div className="system-top">
                        <span>{system.number}</span>
                        <strong>{system.metric}</strong>
                      </div>
                      <h3>{system.title}</h3>
                      <p>{system.copy}</p>
                      <p className="mono">{system.stack}</p>
                      {system.href && (
                        <Link
                          className="system-link"
                          href={system.href}
                          {...(system.href.startsWith('http')
                            ? { target: '_blank', rel: 'noreferrer' }
                            : {})}
                        >
                          {system.linkLabel ?? 'View live ↗'}
                        </Link>
                      )}
                    </article>
                  ))}
                </div>
                <button
                  className="work-side work-side-next"
                  type="button"
                  aria-label="Next system"
                >
                  →
                </button>
              </div>
            </div>
            <div className="chapter-rule" />
          </div>
        </section>

        <section
          id="skills"
          className="chapter chapter-skills"
          data-chapter="skills"
        >
          <div className="chapter-frame">
            <p className="chapter-kicker">06 / Capabilities</p>
            <div className="title-clip">
              <h2 className="chapter-title">
                Frontend first. Full stack always.
              </h2>
            </div>
            <div className="capability-list">
              {capabilities.map(capability => (
                <div
                  className="capability-row reveal-item"
                  key={capability.label}
                >
                  <strong>{capability.label}</strong>
                  <span>{capability.items}</span>
                </div>
              ))}
            </div>
            <div className="chapter-rule" />
          </div>
        </section>

        <section
          id="background"
          className="chapter chapter-background"
          data-chapter="background"
        >
          <div className="chapter-frame">
            <p className="chapter-kicker">07 / Background</p>
            <div className="title-clip">
              <h2 className="chapter-title">Learn. Build. Share.</h2>
            </div>
            <div className="background-grid">
              <article className="credential reveal-item">
                <span>2019 — 2022</span>
                <h3>BSc (Hons), Cyber Security & Ethical Hacking</h3>
                <p>Coventry University · GPA 3.6+</p>
              </article>
              <article className="credential reveal-item">
                <span>2023</span>
                <h3>Applied Data Science Labs</h3>
                <p>WorldQuant University</p>
              </article>
              <article className="credential reveal-item">
                <span>2025</span>
                <h3>Teacher Trainer · Edulift</h3>
                <p>
                  Trained 18 government-school teachers to create interactive
                  digital lessons and feedback loops.
                </p>
              </article>
            </div>
            <div className="chapter-rule" />
          </div>
        </section>

        <section
          id="contact"
          className="chapter chapter-contact"
          data-chapter="contact"
        >
          <div className="chapter-frame">
            <p className="chapter-kicker">08 / Start a conversation</p>
            <div className="title-clip">
              <h2 className="chapter-title contact-title">
                Let&apos;s make something move.
              </h2>
            </div>
            <a
              className="contact-email reveal-item"
              href="mailto:i.abhishek.bhattarai@gmail.com"
            >
              i.abhishek.bhattarai@gmail.com ↗
            </a>
            <div className="contact-links reveal-item">
              <a
                href="https://github.com/abhishek-programs"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/i-abhishek-bhattarai/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a href="/abhishek-bhattarai-resume-SE.pdf">Résumé ↗</a>
              <a href="tel:+9779808459051">+977 9808459051</a>
            </div>
            <div className="contact-footer reveal-item">
              <span>Kathmandu, Nepal</span>
              <Link href="/v1">Previous portfolio · v1 ↗</Link>
              <span>© {new Date().getFullYear()}</span>
            </div>
            <div className="chapter-rule" />
          </div>
        </section>
      </main>
    </div>
  );
}
