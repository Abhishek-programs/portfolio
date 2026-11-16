'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { DMG_URL, INSTALL_CMD, REPO_URL, faqs } from './content';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

const useCases = [
  {
    title: 'Calls with family and friends',
    body: 'Keep FaceTime, WhatsApp, or Meet in the corner while you browse or code full screen. You still see their faces.',
  },
  {
    title: 'Work calls and stand-ups',
    body: 'Zoom, Teams, or Meet stays visible while your IDE, slides, or docs take the whole screen.',
  },
  {
    title: 'Follow a tutorial while you code',
    body: 'Pin the video and type along in a full-screen editor without switching back every ten seconds.',
  },
  {
    title: 'Watch a build, stream, or dashboard',
    body: 'Logs, CI progress, a game, or a live stream stay in view while you get on with something else.',
  },
];

const steps = [
  {
    title: 'Pick your call',
    body: 'Open the menu bar icon. Every app window is listed per display, with a live thumbnail.',
  },
  {
    title: 'Pin it',
    body: 'A live picture-in-picture panel appears on the display you’re using, above everything else.',
  },
  {
    title: 'Go full screen',
    body: 'Switch Spaces or full-screen your browser or IDE. The call comes with you. Close the panel to unpin.',
  },
];

const features = [
  {
    title: 'Follows you into full screen',
    body: 'The panel joins every Space, including full-screen app Spaces, wherever macOS allows overlays.',
  },
  {
    title: 'Any display',
    body: 'The panel opens where your pointer is. Drag it to another monitor; unplug one and it comes back.',
  },
  {
    title: 'Live, not a screenshot',
    body: 'Up to 30 fps through ScreenCaptureKit, and it stays sharp when you resize the source.',
  },
  {
    title: 'Light on battery',
    body: 'One capture stream, and live frames redraw only the panel, not the rest of the app.',
  },
  {
    title: 'Private by design',
    body: 'Only the window you pick. No audio, no network code, frames never touch disk.',
  },
  {
    title: 'Open source',
    body: 'About 1,100 lines of Swift with no dependencies. MIT licensed. Read it in an afternoon.',
  },
];

const tiles = ['AB', 'SK', 'RM', 'JL'];

export default function PinToTopLanding() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelector<HTMLVideoElement>('.ptt-demo video')?.pause();
        return;
      }

      gsap
        .timeline({ delay: 0.2 })
        .from('.ptt-code-line', {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.5,
          stagger: 0.03,
          ease: 'expo.out',
        })
        .from(
          '.ptt-float',
          {
            autoAlpha: 0,
            y: -14,
            scale: 0.94,
            duration: 0.6,
            ease: 'expo.out',
          },
          '-=0.2'
        )
        .from(
          '.ptt-pin',
          { y: -40, autoAlpha: 0, duration: 0.45, ease: 'bounce.out' },
          '-=0.25'
        );
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-[1fr_1fr] md:items-center md:px-8 md:py-24">
          <div>
            <h1 className="text-4xl font-semibold leading-[1.06] tracking-tight md:text-[2.75rem] lg:text-[3.4rem]">
              Picture-in-picture for your video calls, even over full-screen
              apps.
            </h1>
            <p className="app-lede mt-6">
              Pin your FaceTime, Zoom, Meet, or Teams call and it follows you
              into every Space and every full-screen app. Code
              or browse full screen and still see the people you’re talking to.
              Works with any other window too.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={DMG_URL} className="app-btn">
                Download for Mac
              </a>
              <a href={REPO_URL} className="app-btn-quiet">
                View on GitHub
              </a>
            </div>
            <p className="app-meta mt-6">
              Free · MIT license · macOS 14+ · Apple Silicon
            </p>
          </div>

          <div
            className="ptt-screen"
            role="img"
            aria-label="A full-screen code editor with a video call pinned in a small floating panel in the top-right corner"
          >
            <div className="ptt-menubar">
              <span />
              <span className="ptt-menubar-pin" />
            </div>
            <div className="ptt-editor">
              {[72, 54, 88, 40, 66, 80, 34, 58, 76, 48, 62].map((w, i) => (
                <div
                  key={i}
                  className="ptt-code-line"
                  style={{ width: `${w}%`, marginLeft: `${(i % 3) * 6}%` }}
                />
              ))}
            </div>
            <div className="ptt-float">
              <div className="ptt-float-bar">
                <i />
                <i />
                <i />
              </div>
              <div className="ptt-tiles">
                {tiles.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <span className="ptt-pin" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-24">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          See it follow you.
        </h2>
        <p className="app-body mt-4">
          Pin a window from the menu bar, then jump into a full-screen editor
          and across Spaces. The video keeps playing in the corner. Shown at
          1.5× speed.
        </p>
        <figure className="ptt-demo mt-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/apps/pintotop/demo-poster.jpg"
            aria-label="Pin To Top demo: a YouTube window is pinned, then the user switches to full-screen apps and other Spaces while the video keeps playing in a floating panel"
          >
            <source src="/apps/pintotop/demo.webm" type="video/webm" />
            <source src="/apps/pintotop/demo.mp4" type="video/mp4" />
          </video>
        </figure>
      </section>

      <section
        id="use-cases"
        className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24"
      >
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          Go full screen without losing the call.
        </h2>
        <p className="app-body mt-4">
          Full screen hides every other window, and most “always on top” tools
          only keep a window on top of the Space it’s in. Switch Spaces and it’s
          gone. Pin To Top’s panel goes with you. I built it so I could keep
          coding and browsing full screen during calls with family.
        </p>
        <ul className="app-list mt-12">
          {useCases.map(item => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="how-it-works" className="app-band">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Pick, pin, keep working.
            </h2>
            <p className="app-body mt-4">
              macOS doesn’t let one app force another app’s window on top. So
              Pin To Top mirrors it instead: it captures that one window and
              draws it into its own floating panel. The original stays exactly
              where it was. The mirror is view-only, so you still use the source
              app for mute, play, or scroll.
            </p>
          </div>
          <ol className="app-steps">
            {steps.map(step => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Small app, does one thing.
        </h2>
        <ul className="app-list mt-10" data-cols="3">
          {features.map(item => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="install" className="app-band">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Install in a minute.
            </h2>
            <p className="app-body mt-4">
              Paste one line in Terminal. It puts Pin To Top in Applications
              and opens it, with no security warning to click through.
            </p>
            <ol className="app-steps mt-6">
              <li>
                <strong>Prefer the DMG?</strong>
                <p>
                  Open <a href={DMG_URL} className="app-link">PinToTop.dmg</a>{' '}
                  and drag Pin To Top into Applications.
                </p>
              </li>
              <li>
                <strong>Click Done, not Move to Trash</strong>
                <p>
                  The app isn’t notarized yet, so macOS warns once. Then go to
                  System Settings → Privacy &amp; Security → Open Anyway.
                </p>
              </li>
              <li>
                <strong>Grant Screen Recording</strong>
                <p>
                  That’s how any app gets to see another app’s window. Video
                  only, nothing leaves your Mac.
                </p>
              </li>
            </ol>
          </div>
          <div className="min-w-0">
            <p className="app-meta mb-3">Terminal, one line:</p>
            <pre className="app-code">
              <code>{INSTALL_CMD}</code>
            </pre>
            <p className="app-meta mb-3 mt-8">Or build it from source:</p>
          <pre className="app-code">
            <code>
              {`git clone ${REPO_URL}
cd PinToTop
./build-app.sh
open "outputs/Pin To Top.app"`}
            </code>
          </pre>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24"
      >
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Questions people ask.
        </h2>
        <div className="mt-10 border-t border-[var(--line-strong)]">
          {faqs.map(item => (
            <details key={item.q} className="app-faq">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="app-cta grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Found an app it doesn’t work with?
            </h2>
            <p className="mt-3 max-w-xl text-[15.5px] leading-relaxed">
              Overlay behavior depends on the macOS version and the source app.
              Open an issue with both and it gets looked at. Pull requests are
              welcome too.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a href={REPO_URL} className="app-btn">
              View the code
            </a>
            <a href={`${REPO_URL}/issues`} className="app-btn-quiet">
              Report an issue
            </a>
          </div>
        </div>
      </section>

      <footer className="app-footer">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 md:px-8">
          <p>
            © {new Date().getFullYear()} Abhishek Bhattarai · MIT License ·{' '}
            <Link href="/apps" className="app-link">
              More apps
            </Link>
          </p>
          <Link href="/">bhattaraiabhishek.com.np</Link>
        </div>
      </footer>
    </div>
  );
}
