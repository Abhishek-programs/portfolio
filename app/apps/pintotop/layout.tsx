import { AppHeader } from '../AppHeader';
import { REPO_URL } from './content';
import './pintotop.css';

const links = [
  ['Use cases', '/apps/pintotop#use-cases'],
  ['How it works', '/apps/pintotop#how-it-works'],
  ['FAQ', '/apps/pintotop#faq'],
  ['Portfolio', '/'],
] as const;

export default function PinToTopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ptt-site">
      <AppHeader
        name="Pin To Top"
        href="/apps/pintotop"
        icon="/apps/pintotop/icon-512.png"
        links={links}
        cta={{ label: 'GitHub ↗', href: REPO_URL }}
      />
      {children}
    </div>
  );
}
