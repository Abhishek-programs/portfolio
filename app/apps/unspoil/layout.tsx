import { AppHeader } from '../AppHeader';
import './unspoil.css';

const links = [
  ['Features', '/apps/unspoil#features'],
  ['Screenshots', '/apps/unspoil#screenshots'],
  ['Privacy', '/apps/unspoil/privacy'],
  ['Portfolio', '/'],
] as const;

export default function UnspoilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="unspoil-site">
      <AppHeader
        name="UnSpoil"
        href="/apps/unspoil"
        icon="/apps/unspoil/icon-512.png"
        links={links}
      />
      {children}
    </div>
  );
}
