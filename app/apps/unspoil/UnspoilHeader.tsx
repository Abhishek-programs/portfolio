import Image from 'next/image';
import Link from 'next/link';

const links = [
  ['Features', '/apps/unspoil#features'],
  ['Screenshots', '/apps/unspoil#screenshots'],
  ['Privacy', '/apps/unspoil/privacy'],
  ['Portfolio', '/'],
] as const;

export function UnspoilHeader() {
  return (
    <header className="unspoil-header">
      <div className="unspoil-header-inner">
        <Link href="/apps/unspoil" className="unspoil-brand">
          <Image
            src="/apps/unspoil/icon-512.png"
            alt=""
            width={36}
            height={36}
            priority
          />
          UnSpoil
        </Link>
        <nav className="unspoil-nav" aria-label="UnSpoil">
          {links.map(([label, href]) => (
            <Link key={label} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
