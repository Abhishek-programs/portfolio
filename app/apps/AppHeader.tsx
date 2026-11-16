import Image from 'next/image';
import Link from 'next/link';

type Props = {
  name: string;
  href: string;
  icon?: string;
  links: readonly (readonly [string, string])[];
  cta?: { label: string; href: string };
};

export function AppHeader({ name, href, icon, links, cta }: Props) {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <Link href={href} className="app-brand">
          {icon && <Image src={icon} alt="" width={34} height={34} priority />}
          {name}
        </Link>
        <nav className="app-nav" aria-label={name}>
          {links.map(([label, to]) => (
            <Link key={label} href={to}>
              {label}
            </Link>
          ))}
          {cta && (
            <a href={cta.href} className="app-nav-cta">
              {cta.label}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
