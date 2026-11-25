import type { Metadata } from 'next';
import { AppFooter } from '../AppFooter';
import { AppHeader } from '../AppHeader';
import './bicha.css';

const SITE_URL = 'https://bhattaraiabhishek.com.np/apps/bicha-ma-bhetam';
const APP_URL = 'https://bicha-ma-bhetam.vercel.app/';

const title = 'Bicha ma Bhetam: meet in the middle in Kathmandu';
const description =
  'Free web app for friend groups in Kathmandu. Put the gang on a map, find the middle, and keep score of who rides the most. No login.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: 'Bicha ma Bhetam',
    type: 'website',
    images: [
      {
        url: '/apps/bicha-ma-bhetam/icon-512.png',
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/apps/bicha-ma-bhetam/icon-512.png'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Bicha ma Bhetam',
  applicationCategory: 'SocialNetworkingApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  isAccessibleForFree: true,
  description,
  url: APP_URL,
  image: `${SITE_URL}/icon-512.png`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'NPR' },
  author: {
    '@type': 'Person',
    name: 'Abhishek Bhattarai',
    url: 'https://bhattaraiabhishek.com.np',
  },
};

const steps = [
  {
    title: 'Drop your friends on the map',
    body: 'Type where everyone is coming from. Save the group and it’s there next time.',
  },
  {
    title: 'Get the middle',
    body: 'It suggests cafes, chowks and landmarks around it, with a rough ride time for each person.',
  },
  {
    title: 'Share the link',
    body: 'Friends vote for a spot, fix their own pin, or throw in a place of their own.',
  },
];

const facts = [
  {
    title: 'Ride score',
    body: 'Tap “We met here” and everyone’s metres add up. “I always ride the farthest” now needs proof.',
  },
  {
    title: 'No login',
    body: 'The whole plan and the score travel in the share link. Saved groups stay on your device.',
  },
  {
    title: 'Fun, not precise',
    body: 'Ride times are rough guesses for Kathmandu traffic. The map data is free, so some cafes will be wrong.',
  },
];

export default function BichaPage() {
  return (
    <div className="bmb-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AppHeader
        name="Bicha ma Bhetam"
        href="/apps/bicha-ma-bhetam"
        icon="/apps/bicha-ma-bhetam/icon-512.png"
        links={[['Portfolio', '/']]}
        cta={{ label: 'Open the map ↗', href: APP_URL }}
      />
      <main>
        <section className="border-b border-[var(--line)]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-2 md:items-center md:px-8 md:py-20">
            <div>
              <h1 className="text-4xl font-semibold leading-[1.06] tracking-tight md:text-[2.75rem] lg:text-[3.4rem]">
                “Ka bhetne?” <br />
                40 messages later, still no chiya.
              </h1>
              <p className="app-lede mt-6">
                Bicha ma Bhetam means “let’s meet in the middle”. Put the gang
                on a map, it finds the middle, and keeps score of who rode the
                most. In metres.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={APP_URL} className="app-btn">
                  Find your middle
                </a>
              </div>
              <p className="app-meta mt-6">
                Free · Web · Kathmandu Valley · No login
              </p>
            </div>
            <video
              className="bmb-video"
              controls
              playsInline
              preload="none"
              poster="/apps/bicha-ma-bhetam/launch-poster.jpg"
              aria-label="Bicha ma Bhetam launch video, 48 seconds"
            >
              <source src="/apps/bicha-ma-bhetam/launch.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
            How it works.
          </h2>
          <ol className="app-steps max-w-2xl">
            {steps.map(item => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="app-band">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
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
          </div>
        </section>
      </main>
      <AppFooter note="Map data © OpenStreetMap contributors" />
    </div>
  );
}
