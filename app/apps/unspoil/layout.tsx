import { Inter } from 'next/font/google';
import { UnspoilHeader } from './UnspoilHeader';
import './unspoil.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unspoil',
});

export default function UnspoilLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`unspoil-site ${inter.variable}`}>
      <UnspoilHeader />
      {children}
    </div>
  );
}
