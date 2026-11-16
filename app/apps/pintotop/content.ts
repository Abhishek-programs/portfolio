// Shared copy for the Pin To Top page. FAQ entries feed both the visible
// FAQ section and the FAQPage structured data, so they can never drift apart.

export const SITE_URL = 'https://bhattaraiabhishek.com.np/apps/pintotop';
export const REPO_URL = 'https://github.com/Abhishek-programs/PinToTop';
// Always points at the newest GitHub Release asset.
export const DMG_URL = `${REPO_URL}/releases/latest/download/PinToTop.dmg`;

export const faqs = [
  {
    q: 'Can I keep a FaceTime, Zoom, Google Meet, or Teams call visible while another app is full screen?',
    a: 'Yes, that is what Pin To Top is for. Pin the call window, then go full screen in your browser, IDE, or slides. The call stays in a small picture-in-picture panel in every Space, including full-screen Spaces where macOS allows overlays.',
  },
  {
    q: 'How is this different from other “always on top” apps?',
    a: 'Many of them keep a window on top only in the Space where you pinned it, so it disappears when you switch Spaces or go full screen. Pin To Top puts a live copy of the window in a panel that joins every Space, so the call follows you wherever you work. Drag it to whichever display you like.',
  },
  {
    q: 'How do I keep a window always on top on a Mac?',
    a: 'macOS has no built-in “always on top” switch for other apps’ windows. With Pin To Top, pick the window from the menu bar and choose Pin. A live copy floats above everything until you unpin it or close the floating panel.',
  },
  {
    q: 'Can I click or type into the pinned window?',
    a: 'Not yet. The panel is a view-only mirror, so you use the original window for mute or leave call. An interactive mode that keeps the real window on top and clickable is on the roadmap, alongside the picture-in-picture mode.',
  },
  {
    q: 'Why does it need Screen Recording permission?',
    a: 'That is the only way macOS lets one app see another app’s window. Pin To Top captures just the window you pick, with audio off, and never writes frames to disk or sends them anywhere. There is no network code at all.',
  },
  {
    q: 'Is Pin To Top free?',
    a: 'Yes. It is free and open source under the MIT license. Download it, read the code, build it yourself, or send a pull request.',
  },
  {
    q: 'Why does macOS say it can’t verify the app?',
    a: 'Pin To Top is free and isn’t signed with a paid Apple Developer ID yet. Open it once, click Done, then go to System Settings → Privacy & Security and click Open Anyway. You only do this once. If you’d rather not trust a download, build it from source.',
  },
  {
    q: 'Which Macs are supported?',
    a: 'macOS 14 Sonoma or later on Apple Silicon. Download the DMG, or build it from source with the Xcode Command Line Tools.',
  },
];
