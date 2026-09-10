# Cinematic GSAP Portfolio Design

## Goal

Rebuild the homepage as a frontend-forward, cinematic résumé while preserving the current portfolio at `/v1`. The new experience should use GSAP extensively but coherently: every chapter is pinned on desktop and reveals information through one controlled scroll-driven sequence.

## Visual Language

- Warm paper background (`#f1eadb`) with black ink and signal yellow (`#f2ff36`).
- Sharp grotesque display type paired with monospace metadata.
- Brutalist geometry is retained through rules, square corners, outlined panels, and oversized typography, but thick cartoon borders, multicolor cards, emoji, and hard drop shadows are removed.
- A low-opacity yellow cursor blob follows fine pointers using blend mode. It expands slightly over interactive elements and is absent on touch and reduced-motion devices.

## Page Structure

1. **Hero / Identity** — oversized name, role, current employer, location, and scroll cue.
2. **Proof / Scale** — four metrics: 4+ years, 1M+ learners, 100K+ visualizer users, and 2× content velocity.
3. **Now / reAlpha** — Turnit role, scope, ownership, and TypeScript product stack.
4. **Experience / Programiz** — Senior Software Engineer and Software Engineer progression, with the highest-impact achievements.
5. **Selected Systems** — Code Visualizer, Playground IDE, AI Content Engine, and Analytics Pipeline.
6. **Capabilities** — frontend architecture leads; backend, data, and delivery skills support it.
7. **Background** — education, certification, and teacher training.
8. **Contact** — email, LinkedIn, GitHub, phone, location, and updated résumé download.

## Motion Direction

Each desktop chapter occupies a viewport and pins while an internal GSAP timeline advances with scroll. Timelines use transforms, opacity, clipping, and scale rather than layout properties. The shared choreography is measured: index and eyebrow enter first, headline second, supporting content third, then a yellow progress rule completes.

- Hero: name lines reveal from vertical clipping; metadata and rule follow.
- Proof: metrics travel through a large vertical stack while active rows sharpen from muted to black.
- reAlpha: a large `NOW` field recedes while role details assemble.
- Programiz: the career spine draws and role panels trade focus.
- Systems: four project panels travel horizontally inside a pinned chapter.
- Capabilities: skill groups layer into a typographic matrix.
- Background: credentials rotate through a vertical editorial stack.
- Contact: call-to-action expands to fill the final frame, then remains usable.

The cursor follower uses `gsap.quickTo`. Desktop scrub uses a small catch-up value. Triggers are created in document order and cleaned up through `useGSAP`.

## Responsive and Accessibility

- Desktop chapter pinning applies only at `min-width: 900px` and fine-pointer devices.
- Mobile uses the same chapter compositions as normal vertical sections with concise entrance timelines; there is no pinning, horizontal scroll simulation, or cursor blob.
- `prefers-reduced-motion: reduce` disables cursor tracking, pinning, scrubbing, counters, and decorative movement. All content renders in its final readable state.
- Semantic headings, landmarks, keyboard-visible focus, adequate contrast, and real links remain available independently of animation.

## Content Rules

- The updated September 2026 résumé is the source of truth.
- reAlpha Tech Corp. / Turnit is current from May 2026.
- Programiz runs from July 2022 through April 2026.
- Claims are limited to figures present in the résumé: 4+ years, 1M+ monthly learners, 100K+ monthly visualizer users, 2× content velocity, 45% authentication latency reduction, and 50% tracking accuracy improvement.
- Copy is concise and outcome-led. Frontend architecture and interaction design are emphasized without hiding full-stack experience.

## Architecture

- The root layout provides global metadata and fonts only.
- `/` renders one client portfolio experience whose chapter data is static and local.
- `/v1` composes the existing Navbar, Hero, About, Skills, Projects, Contact, and Footer unchanged.
- GSAP, `@gsap/react`, and ScrollTrigger provide all new motion. The existing `motion` package remains only for the preserved v1 page.
- The existing contact API remains available, but the cinematic homepage uses direct contact links to keep its pinned final chapter reliable.

## Verification

- TypeScript and production build must pass.
- Browser review covers desktop pin transitions, horizontal project movement, cursor behavior, navigation links, `/v1`, mobile flow, and reduced-motion behavior.
- No chapter may obscure content or trap scrolling when JavaScript, fine pointer, or motion preferences differ.
