import Link from 'next/link';

const sections: { title: string; body: string[] }[] = [
  {
    title: 'Overview',
    body: [
      'UnSpoil (“the app”) is a personal finance app for Android published by Abhishek Bhattarai. Package name: app.unspoil.',
      'The app is local-first: your budgets, transactions, goals, and settings are stored on your phone. UnSpoil does not require an account, and we do not operate a backend that collects or stores your financial data.',
    ],
  },
  {
    title: 'What we collect',
    body: [
      'We do not collect, transmit, or sell your personal or financial information to our servers. There is no sign-in and no cloud sync in the current version of the app.',
      'Any data you enter (amounts, names, notes, bucket plans, lending records, etc.) remains in an on-device database unless you choose to export it.',
    ],
  },
  {
    title: 'Data on your device',
    body: [
      'The app uses local storage (SQLite) on your phone to run. Uninstalling the app removes that data unless you have exported a backup elsewhere.',
      'Optional nightly auto-backup, if enabled in Settings, writes JSON backup files to app-private storage on the same device (not uploaded automatically). You control whether that feature is on and at what time it runs.',
    ],
  },
  {
    title: 'Backups and exports you control',
    body: [
      'You may export a full backup (JSON), export transactions (CSV), or share a snapshot for your own use (e.g. with an AI assistant). These actions only happen when you tap the relevant control; you choose where files are saved or shared using Android’s system picker or share sheet.',
      'Importing a backup replaces data on the device with the contents of the file you select. We do not receive those files.',
    ],
  },
  {
    title: 'Optional Android permissions',
    body: [
      'Notifications (optional): used for plan nudges (e.g. budget reminders) and, if you enable it, the payment helper. Nudges are scheduled on-device; we do not send push messages from a server.',
      'Payment helper (optional, off by default): if you turn it on, the app may request usage access and notification access so it can detect when selected payment apps (e.g. eSewa, nBank) are in the foreground and show a local prompt to log the amount. We do not read screen content, use accessibility services, or capture screenshots for this feature. You choose which apps are watched and can disable the helper at any time.',
      'Battery optimization: the app may suggest exempting UnSpoil from aggressive battery restrictions so optional background features (payment helper, scheduled backup) work more reliably. This is optional.',
    ],
  },
  {
    title: 'Third-party services',
    body: [
      'The app does not embed third-party analytics or advertising SDKs that report your financial data to us.',
      'If you use Android’s share sheet or file picker, those flows are handled by Google/your chosen apps under their own policies—not by UnSpoil servers.',
    ],
  },
  {
    title: 'Children’s privacy',
    body: [
      'UnSpoil is not directed at children under 13. We do not knowingly collect personal information from children.',
    ],
  },
  {
    title: 'Changes',
    body: [
      'We may update this policy when the app changes (e.g. new optional features). The “Last updated” date below will change when we do. Continued use of the app after updates means you accept the revised policy.',
    ],
  },
  {
    title: 'Contact',
    body: [
      'Questions about this policy or UnSpoil: i.abhishek.bhattarai@gmail.com',
    ],
  },
];

export default function UnspoilPrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 md:px-8 md:py-14">
      <p className="unspoil-section-kicker">Legal</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-[var(--unspoil-muted)]">Last updated: November 1, 2026</p>
      <p className="mt-2 text-sm">
        <Link href="/apps/unspoil" className="unspoil-link">
          ← Back to UnSpoil
        </Link>
      </p>

      <div className="mt-12 space-y-10">
        {sections.map(section => (
          <section key={section.title}>
            <h2 className="mb-3 text-lg font-semibold text-[var(--unspoil-ink)]">{section.title}</h2>
            <div className="space-y-3 text-[15px] leading-relaxed text-[var(--unspoil-muted)]">
              {section.body.map(paragraph => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-14 border-t border-[var(--unspoil-border)] pt-8 text-sm text-[var(--unspoil-muted)]">
        UnSpoil — multi-currency personal finance for Android. All data stays on your device unless
        you export it yourself.
      </p>
    </main>
  );
}
