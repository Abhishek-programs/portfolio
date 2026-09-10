# Cinematic GSAP Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace `/` with a pinned cinematic GSAP résumé and preserve the current portfolio at `/v1`.

**Architecture:** The root layout becomes design-neutral. A focused client component owns the new static résumé content and scoped GSAP timelines, while `/v1` composes the existing component tree. CSS defines the editorial visual system and non-animated fallbacks.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, GSAP, `@gsap/react`, ScrollTrigger

## Global Constraints

- Warm paper, black ink, and signal yellow are the only primary palette.
- Every desktop chapter pins and animates its information; mobile chapters remain in document flow.
- Disable pinning, cursor movement, and decorative animation for reduced motion.
- The updated résumé is the source of truth.
- Preserve the current experience at `/v1`.

---

### Task 1: Preserve the Legacy Portfolio

**Files:**
- Create: `app/v1/page.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Produces: `/v1` route with `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Contact`, and `Footer`
- Produces: root layout that does not force legacy chrome around `/`

- [ ] **Step 1: Add the v1 composition**

Create a page that imports and renders the seven existing legacy components in their current order.

- [ ] **Step 2: Neutralize the root layout**

Remove legacy Navbar and Footer from `app/layout.tsx`; retain metadata, structured data, and the body wrapper.

- [ ] **Step 3: Verify route compilation**

Run `npm run build`.
Expected: both `/` and `/v1` compile without missing imports.

### Task 2: Add the GSAP Runtime and Résumé Asset

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Replace: `public/abhishek-bhattarai-resume-SE.pdf`

**Interfaces:**
- Produces: `gsap` and `@gsap/react` imports available to client components
- Produces: updated résumé at the existing stable download URL

- [ ] **Step 1: Install runtime dependencies**

Run `npm install gsap @gsap/react`.
Expected: both packages appear under dependencies.

- [ ] **Step 2: Replace the résumé**

Copy `/Users/abhishek/Downloads/Abhishek Bhattarai Resume.pdf` over the existing public résumé asset.

- [ ] **Step 3: Verify tracked changes**

Run `git status --short`.
Expected: package manifests and the résumé PDF are modified.

### Task 3: Build the Cinematic Resume

**Files:**
- Create: `components/CinematicPortfolio.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: default export `CinematicPortfolio`
- Consumes: GSAP core, ScrollTrigger, and `useGSAP`

- [ ] **Step 1: Define static chapter data**

Add typed arrays for proof metrics, roles, systems, capabilities, and credentials using only claims from the design specification.

- [ ] **Step 2: Render semantic chapters**

Render hero, proof, reAlpha, Programiz, systems, capabilities, background, and contact sections with chapter labels, headings, and stable class hooks.

- [ ] **Step 3: Add scoped animation setup**

Register `useGSAP` and ScrollTrigger. Under `gsap.matchMedia`, create desktop pinned timelines in DOM order, mobile entrance timelines, and a reduced-motion final-state branch. Scope all selectors to the portfolio root.

- [ ] **Step 4: Add the cursor follower**

For fine pointers without reduced motion, update a single fixed blob with `gsap.quickTo`; enlarge it when the closest target matches a link or button. Remove listeners in cleanup.

- [ ] **Step 5: Route the homepage**

Replace the old root page composition with the new component.

### Task 4: Add the Editorial Visual System

**Files:**
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: class hooks from `CinematicPortfolio.tsx`
- Produces: complete desktop, mobile, pointer, focus, and reduced-motion styling

- [ ] **Step 1: Add tokens and base styles**

Define paper, ink, yellow, muted, and border tokens; update body background and selection styling.

- [ ] **Step 2: Style pinned chapter frames**

Add viewport chapter sizing, editorial grid, oversized responsive type, rules, stage overflow, and project track layout.

- [ ] **Step 3: Add responsive fallbacks**

Below 900px, switch chapters to auto-height, project track to a vertical stack, hide decorative index elements, and disable the cursor blob.

- [ ] **Step 4: Add reduced-motion safeguards**

Ensure transforms and hidden states cannot prevent content from rendering when motion is reduced.

### Task 5: Verify the Experience

**Files:**
- Modify as required by failures only

**Interfaces:**
- Verifies: production compilation and browser behavior

- [ ] **Step 1: Run formatting and build checks**

Run `npm run format:check` and `npm run build`.
Expected: both exit successfully.

- [ ] **Step 2: Review desktop in browser**

Confirm all eight chapters pin and release, the projects move horizontally, the cursor blob follows subtly, all external links work, and `/v1` retains the previous design.

- [ ] **Step 3: Review mobile and reduced motion**

Confirm content remains in normal vertical flow, no cursor blob appears, no horizontal overflow exists, and all content is visible with reduced motion.

- [ ] **Step 4: Run final repository check**

Run `git diff --check` and `git status --short`.
Expected: no whitespace errors and only intended files changed.
