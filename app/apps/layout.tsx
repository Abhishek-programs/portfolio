import { Instrument_Sans } from 'next/font/google';
import './apps.css';

const body = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-apps',
});

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`app-site ${body.variable}`}>{children}</div>;
}
