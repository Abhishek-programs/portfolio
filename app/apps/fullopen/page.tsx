import type { Metadata } from 'next';
import { AppFooter } from '../AppFooter';
import { AppHeader } from '../AppHeader';
import './fullopen.css';

const SITE_URL = 'https://bhattaraiabhishek.com.np/apps/fullopen';
const REPO_URL = 'https://github.com/Abhishek-programs/FullOpen';
const INSTALL_CMD =
  'curl -fsSL https://raw.githubusercontent.com/Abhishek-programs/FullOpen/main/install.sh | zsh';

const title = 'FullOpen: open any Mac app straight into full screen';
const description =
  'Free, open-source Mac app. Right-click an app in the Dock, Finder or search and open it in full screen, or hold Shift while it opens.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: 'FullOpen',
    type: 'website',
    images: [{ url: '/apps/fullopen/icon-512.png', width: 512, height: 512 }],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/apps/fullopen/icon-512.png'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FullOpen',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'macOS 14 or later',
  processorRequirements: 'Apple Silicon (arm64)',
  softwareVersion: '0.2',
  isAccessibleForFree: true,
  description,
  url: SITE_URL,
  image: `${SITE_URL}/icon-512.png`,
  license: 'https://opensource.org/licenses/MIT',
  codeRepository: REPO_URL,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author: {
    '@type': 'Person',
    name: 'Abhishek Bhattarai',
    url: 'https://bhattaraiabhishek.com.np',
  },
};

const ways = [
  {
    title: 'Right-click it',
    body: 'Open in Full Screen is the first option, in the Dock, Finder, Apps and search. No key needed.',
  },
  {
    title: 'Hold Shift',
    body: 'Keep it down while the app opens. Prefer another key? Pick Option, Command or Fn.',
  },
  {
    title: 'Tick it once',
    body: 'Apps under Always Full Screen in the menu bar open that way every time.',
  },
];

const facts = [
  {
    title: 'Why it has its own Dock menu',
    body: 'macOS won’t let an app add to the Dock’s menu, so FullOpen shows its own. Apple’s is one click deeper, or Option-right-click.',
  },
  {
    title: 'Why it needs Accessibility',
    body: 'To see which app you right-clicked and to make its window full screen. That’s a broad permission, so read the code first. It has no network code.',
  },
  {
    title: 'What it can’t do',
    body: 'The hold key only works on apps that aren’t running yet, and apps that don’t support full screen stay windowed.',
  },
];

export default function FullOpenPage() {
  return (
    <div className="fo-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AppHeader
        name="FullOpen"
        href="/apps/fullopen"
        icon="/apps/fullopen/icon-512.png"
        links={[
          ['Install', '/apps/fullopen#install'],
          ['Portfolio', '/'],
        ]}
        cta={{ label: 'GitHub ↗', href: REPO_URL }}
      />
      <main>
        <section className="border-b border-[var(--line)]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-2 md:items-center md:px-8 md:py-24">
            <div>
              <h1 className="text-4xl font-semibold leading-[1.06] tracking-tight md:text-[2.75rem] lg:text-[3.4rem]">
                Open any Mac app straight into full screen.
              </h1>
              <p className="app-lede mt-6">
                Opening an app full screen takes two steps: open it, then hunt
                for the tiny green button. FullOpen makes it one.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#install" className="app-btn">
                  Install
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
              className="fo-screen"
              role="img"
              aria-label="Right-click menu above a Dock app with Open in Full Screen selected"
            >
              <div className="fo-menu" aria-hidden>
                <span className="fo-on">Open in Full Screen</span>
                <span>Open</span>
                <hr />
                <span>Show in Finder</span>
                <hr />
                <span>More Dock Options…</span>
              </div>
              <div className="fo-dock" aria-hidden>
                <i />
                <i />
                <i className="fo-on" />
                <i />
                <i />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
            Three ways to use it.
          </h2>
          <ul className="app-list" data-cols="3">
            {ways.map(item => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="install" className="app-band">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Install with one line.
            </h2>
            <p className="app-body mb-6 mt-4">
              Paste this in Terminal. It builds FullOpen on your Mac and opens
              it. You need Apple’s Command Line Tools (
              <span className="app-mono whitespace-nowrap">
                xcode-select --install
              </span>
              ), not the full Xcode app.
            </p>
            <pre className="app-code" tabIndex={0}>
              <code>{INSTALL_CMD}</code>
            </pre>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
            Good to know.
          </h2>
          <ul className="app-list" data-cols="3">
            {facts.map(item => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <AppFooter note="MIT License" />
    </div>
  );
}
