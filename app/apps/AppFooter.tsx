import Link from 'next/link';

export function AppFooter({ note }: { note?: string }) {
  return (
    <footer className="app-footer">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 md:px-8">
        <p>
          © {new Date().getFullYear()} Abhishek Bhattarai ·{' '}
          {note && `${note} · `}
          <Link href="/apps" className="app-link">
            More apps
          </Link>
        </p>
        <Link href="/">bhattaraiabhishek.com.np</Link>
      </div>
    </footer>
  );
}
