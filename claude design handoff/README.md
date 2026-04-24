# Handoff: Brian Koo Personal Website

## Overview
A single-page personal portfolio website for Brian Koo, Senior Frontend Developer (Angular specialist). The site is designed to appeal to engineering hiring managers across Irvine/Orange County, CA. The visual theme is a **dark IDE / code editor aesthetic** — the entire site looks like a VSCode-style development environment, with syntax highlighting, line numbers, file tabs, and monospace typography as core design elements.

## About the Design Files
The files in this bundle are **HTML design references** — high-fidelity prototypes showing the intended look, feel, copy, and interaction behavior. They are **not** production code to copy directly.

Your task is to **recreate these designs in Angular** (the target framework, since this is an Angular engineer's portfolio — the site itself should showcase Angular). Use Angular's component architecture, routing, and animation APIs. The HTML prototype uses React + Babel purely as a rapid prototyping medium.

## Fidelity
**High-fidelity.** All colors, typography, spacing, copy, and interactions are final. Implement pixel-faithfully using the design tokens listed below.

---

## Screens / Views

The site is a single scrollable page with 5 named sections, plus a sticky nav and footer.

---

### 0. Nav Bar (sticky, always visible)

**Purpose:** File-tab navigation, IDE chrome branding.

**Layout:** Full-width, `height: 44px`, `position: fixed`, `top: 0`, `z-index: 100`. Three zones:
- **Left logo zone** — `width: ~80px`, `border-right: 1px solid #222`, flex center, Angular shield SVG (16×16, fill `#DD0031`) + text "bkoo" (`color: #555, font-size: 11px, letter-spacing: 1px`)
- **Tab strip** — flex row, `overflow-x: auto`. Each tab: `padding: 0 20px`, `font-size: 11px`, `height: 100%`, `border-right: 1px solid #222`. **Active state:** `background: #0d0d0d`, `color: #d4d4d4`, `border-top: 1px solid #DD0031`, `border-bottom: 1px solid #0d0d0d` (creates flush illusion). **Inactive:** `background: transparent`, `color: #555`.
- **Right status zone** — `border-left: 1px solid #222`, `padding: 0 16px 0 16px`. Contains: `"TypeScript"` label (`font-size: 10px, color: #555, letter-spacing: 1px`) + `"OPEN TO WORK"` badge (`background: #DD0031, color: #fff, font-size: 10px, padding: 2px 8px, letter-spacing: 1px`).

**Tab file names (in order):**
1. `hero.component.ts`
2. `about.ts`
3. `experience.service.ts`
4. `skills.config.ts`
5. `projects.module.ts`

**Behavior:** Active tab updates on scroll (intersection observer or scroll position check). Clicking a tab smooth-scrolls to the matching section offset by 72px.

---

### 1. Hero Section (`#hero`)

**Purpose:** First impression. Displays Brian's profile as a TypeScript object literal with a typewriter animation.

**Layout:** `min-height: 100vh`, `padding-top: 44px` (nav height). Two sub-zones:

**Left gutter (line numbers):**
- `width: 52px`, `border-right: 1px solid #222`, absolute positioned full height
- 40 line numbers, `font-size: 11px`, `color: #333`, right-aligned with `padding-right: 12px`, `line-height: 22px`

**Main content area:**
- `padding-left: 80px`, `padding-right: 40px`, `padding-top: 48px`
- Max content width: `820px`
- Content stacks vertically:

```
// src/app/hero.component.ts                          ← green comment, 13px
// April 24, 2026 · Irvine, CA                       ← green comment, 13px

import { Component } from '@angular/core';            ← syntax-colored, 13px

[blank line]

const engineer: SeniorDeveloper = {                  ← 13px
  name: "Brian Koo",                                 ← teal prop + orange string
  role: "Senior Frontend Developer"|                 ← typewriter animation
  framework: "Angular v11–21",
  experience: 8,                                     ← number color
  location: "Irvine, CA",
  available: true,                                   ← blue keyword
};

[CTA buttons]
```

**Typewriter:** `role` value types out `"Senior Frontend Developer"` at ~45ms/char after a 800ms delay. Cursor is `#DD0031`, blinks at 1s interval after typing completes.

**Fade-in animation:** Each line fades up (0→1 opacity, translateY 20px→0) with `0.6s ease` timing. Lines stagger with `~80ms` delay between each. Use `animation-fill-mode: forwards`.

**CTA Buttons (flex row, gap 16px):**
- Primary: `background: #DD0031`, `color: #fff`, `padding: 10px 28px`, `font-family: monospace`, `font-size: 12px`, `letter-spacing: 1px`. Label: `> viewProjects()`
- Secondary: `background: transparent`, `color: #888`, `border: 1px solid #2a2a2a`, same padding/font. Label: `> getInTouch()`. Links to `mailto:briankoo.web@gmail.com`.

**Marquee ticker (bottom of section):**
- `border-top + border-bottom: 1px solid #222`, `padding: 10px 0`, `overflow: hidden`
- Infinite scroll left animation (28s linear). Text `color: #2a2a2a`, `font-size: 11px`, `letter-spacing: 2px`
- Items: `ANGULAR · TYPESCRIPT · RXJS · NGXS · NGRX · IEEE · BRICKSIMPLE · AIRBORNE INTERACTIVE · WCAG 2.1 AA · NX MONOREPO · IRVINE CA · UC RIVERSIDE ·` (repeated 4× for seamless loop)

---

### 2. About Section (`#about`)

**Purpose:** Bio + quick-facts as code.

**Layout:** `padding: 80px 0`, two-column CSS grid `1fr 1fr`, `gap: 40px`. Left: bio text inside a class body. Right: `const` declarations.

**Section label:** `font-size: 11px`, `color: #555`, `letter-spacing: 2px`, `text-transform: uppercase`, `margin-bottom: 32px`. Text: `about.ts`

**Left column:**
- JSDoc comment block (green): `/** @class BrianKoo @extends SeniorFrontendDeveloper @since 2015 @education UC Riverside, B.S. Computer Science */`
- `export class BrianKoo {`
- Body: `font-family: Space Grotesk`, `font-size: 14px`, `line-height: 1.85`, `color: #d4d4d4`, 3 paragraphs (see copy below)
- Closing `}`

**Bio copy:**
> Senior Frontend Developer with 8+ years of experience architecting and delivering enterprise-scale Angular applications in fully remote, distributed environments.

> Expert in Angular (v11–21), TypeScript, RxJS, and NGXS, with a proven track record of leading full-scale framework migrations, building accessible WCAG 2.1 AA-compliant interfaces, and driving measurable performance improvements.

> Adept at collaborating cross-functionally with UX, QA, and product teams to deliver polished, scalable frontend solutions. Passionate about clean component architecture, mentoring engineers, and continuously adopting modern frontend best practices.

**Right column — const declarations:**
```ts
const email    = "briankoo.web@gmail.com";
const phone    = "(818) 359-2010";
const linkedin = "linkedin.com/in/koobrian";
const location = "Irvine, CA";
const education = "B.S. CS — UC Riverside";
const workStyle = "Full Remote / Hybrid";
const available = true;
```
Prop names in `#4ec9b0` (teal), strings in `#ce9178` (orange), `true` in `#569cd6` (blue).

---

### 3. Skills Section (`#skills`)

**Purpose:** Tech stack displayed as a TypeScript config object.

**Background:** `#111` (one shade lighter than base).

**Layout:** 4-column grid with 1px gaps (gap cells filled with `border: #222`). `margin-left: 28px`.

**Header:** `export const skillMatrix: SkillConfig = {`

**Four columns:**

| Column | `prop` name | Items |
|---|---|---|
| 1 | `frameworks` | Angular v11–21, React, Vue 2/3, AngularJS, SvelteJS |
| 2 | `state_reactive` | NGXS, NgRx, RxJS, Angular Signals, Redux |
| 3 | `languages_styling` | TypeScript, JavaScript ES6+, SCSS/Sass, HTML5, Tailwind CSS |
| 4 | `tooling_testing` | Jest, Cypress/Playwright, Vitest, Webpack/Gulp, Nx Monorepo |

Each item: string value in orange, comment descriptor in green below it.

**Below grid (inline):**
```ts
  accessibility: "WCAG 2.1 AA",
  analytics: "Google Analytics / AdSense",
  emailTemplating: "MJML",
```

---

### 4. Experience Section (`#experience`)

**Purpose:** Work history as a TypeScript class with decorators.

**Layout:** Single column with left border timeline. `padding-left: 80px`.

**Header:** `export class ExperienceService {`

Each job entry:
- Left accent border: `2px solid {company color at 33% opacity}`
- Dot marker: 8×8px circle, `border-radius: 50%`, `left: -5px`, full company color
- Company name: `color: #dcdcaa` (yellow/function color), `font-size: 15px`
- Period comment: `// Aug 2018 – May 2025`, green, `font-size: 12px`
- Location: `color: #555`, `font-size: 11px`
- Role decorator: `@Role('Senior Web Developer')` — `@` + `Role` in purple, string in orange
- Bullet points: `▸` in green, body text in `Space Grotesk 14px`, `line-height: 1.65`, `color: #d4d4d4`

**Companies:**

| Company | Color | Period | Role |
|---|---|---|---|
| IEEE | `#0e76bc` | Aug 2018 – May 2025 | Senior Web Developer |
| BrickSimple | `#f47421` | Jun 2017 – Aug 2018 | Web Application Developer |
| Airborne Interactive | `#5b8dd9` | Feb 2015 – Jul 2016 | Junior Application Developer |

**IEEE bullets (9 items):**
1. Spearheaded migration of IEEE Xplore Digital Library from JSP & AngularJS to Angular 11, establishing foundational CSS architecture, state management, and service layer.
2. Led Angular upgrade from v11 to v19, collaborating with QA to ensure regression-free releases across all production environments.
3. Implemented mobile-responsive pages driving more traffic growth in 2019 than the previous 3 years combined.
4. Architected admin panel enabling management of publication analytics access for 300+ editors-in-chief.
5. Built internal analytics app using Angular, D3.js, FusionCharts, Jest, Cypress, and NGXS — including choropleth world map and D3 bubble chart.
6. Achieved WCAG 2.1 AA compliance across IEEE Xplore, improving screen reader compatibility and ADA conformance.
7. Implemented React/MJML pipeline for mobile-responsive transactional emails; delivered dynamic search page in SvelteJS at 39 KB total bundle.
8. Migrated Gulp build to Webpack — 30% improvement in build times. Migrated AngularJS project to Vue.js — 20%+ reduction in bundle size.
9. Mentored new hires on Angular, RxJS, Flexbox, D3.js, and Angular CLI.

**BrickSimple bullets (5):** Fantasy football site (React/Redux), job bidding site (Angular 4), hospital search (Google Maps), Vue.js feature additions (D3/Chart.js), CSS animation work.

**Airborne Interactive bullets (1):** QML + JS for In-Flight Entertainment (Panasonic/Lufthansa RESTful APIs).

**Education block (after jobs):**
```ts
education: {
  degree: "B.S. Computer Science",
  school: "University of California, Riverside",
  years: 2010–2014
},
```

---

### 5. Projects Section (`#projects`)

**Purpose:** Featured work as an array of Angular module objects.

**Background:** `#111`

**Layout:** 2×2 CSS grid, 1px gaps (background `#222` showing through).

**Header:** `const featuredProjects = [`

| Project | Type decorator | Tags | Status |
|---|---|---|---|
| IEEE Xplore Digital Library | `@NgMigration` | Angular 11–19, NGXS, D3.js, WCAG 2.1 AA, Jest, Cypress | `production` (teal) |
| Productivity Reward App | `@NgFullStack` | Angular, NestJS, GraphQL, NgRx SignalStore, Playwright, Vitest, Tailwind | `deployed` (red) |
| IEEE Analytics Dashboard | `@NgModule` | Angular Material, D3.js, FusionCharts, NGXS, Cypress | `internal` (grey) |
| Email / Search Pipeline | `@NgHybrid` | React, MJML, SvelteJS, 39 KB bundle | `production` (teal) |

Each card: `background: #0d0d0d`, `padding: 28px`. Type decorator in purple/blue, project name in white `font-size: 14px`, description in `Space Grotesk 13px`, tags as orange-bordered chips.

---

### Footer

**Layout:** `padding: 56px 80px`, flex row space-between, wrap.

**Left:** `// Let's build something great together` comment + two const declarations:
```ts
const email = "briankoo.web@gmail.com";  // clickable mailto link
const phone = "(818) 359-2010";
```

**Center links:** LinkedIn (`https://linkedin.com/in/koobrian`), GitHub, Resume.pdf ↓ (red color)

**Right:** `© 2026 Brian Koo · Irvine, CA` in `#555`, `font-size: 11px`

---

## Design Tokens

### Colors
```
--bg:       #0d0d0d   (page background)
--bg2:      #111      (alternate section background)
--border:   #222      (dividers, gutters)
--border2:  #2a2a2a   (secondary borders)
--red:      #DD0031   (Angular red — primary accent, CTAs, active states)
--blue:     #569cd6   (keyword color — "const", "import", "true")
--teal:     #4ec9b0   (property names)
--orange:   #ce9178   (string values)
--green:    #6a9955   (comments)
--number:   #b5cea8   (numeric literals)
--purple:   #c586c0   (type names, decorators)
--yellow:   #dcdcaa   (function/company names)
--dim:      #555      (inactive text)
--mid:      #888      (secondary text)
--text:     #d4d4d4   (body text)
--bright:   #ffffff   (headings)
```

### Typography
```
Primary (code):  'IBM Plex Mono', monospace — all code-styled content
Secondary (prose): 'Space Grotesk', sans-serif — bio paragraphs, bullet descriptions
```

### Spacing
- Section padding: `80px 0` vertical
- Content left padding: `80px` (accounts for line number gutter)
- Content right padding: `40px`
- Nav height: `44px`
- Grid gaps: `1px` (filled by parent background color)

### Other
- Scanline overlay: `position: fixed`, full screen, `pointer-events: none`, `z-index: 999`, `background: repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,0.012) 2px 4px)` — subtle CRT scanline effect
- Scrollbar: `width: 6px`, track `#111`, thumb `#333`, `border-radius: 3px`

---

## Animations

| Animation | Details |
|---|---|
| Hero fade-up | `opacity: 0→1`, `translateY: 20px→0`, `0.6s ease`, `fill-mode: forwards`, staggered 80ms between lines |
| Typewriter | Character-by-character, 45ms/char, 800ms start delay, blinking cursor |
| Marquee ticker | `translateX(0 → -50%)`, `28s linear infinite` |
| Nav active tab | `transition: all 0.15s` on color/border changes |

---

## Responsive / Mobile

The design is fully responsive. Key breakpoints:

| Breakpoint | Behavior |
|---|---|
| `> 768px` | Full desktop layout |
| `≤ 768px` | Line-number gutter hidden; all grids collapse to 1–2 col; padding reduces to `20px`; nav status zone hidden |
| `≤ 480px` | Skills grid collapses to 1 column |

CSS classes used for responsive layout (defined in `<style>` block):
- `.sec-pad` — section horizontal padding (80px → 20px)
- `.hero-inner` — hero content padding (80px → 20px)
- `.line-gutter` — hidden on mobile
- `.grid-2col` — about/experience two-col grid → stacks
- `.grid-4col` — skills four-col grid → 2-col → 1-col
- `.grid-2col-proj` — projects two-col grid → stacks
- `.footer-inner` — footer flex row → column
- `.status-zone` (nav) — hidden on mobile

---

## Angular Implementation Notes

- Use `@angular/animations` for the hero `fadeUp` stagger sequence
- Use `@ViewChildren` + intersection observer for scroll-triggered reveals
- Implement the typewriter as a standalone pipe or service using `interval()` from RxJS
- Nav active state: use `fromEvent(window, 'scroll')` piped through `debounceTime` + `map` to determine current section
- The entire site can be one Angular component with `#anchor` fragment routing, or split into feature components per section
- Consider using Angular's `@defer` blocks for below-the-fold sections
- The scanline overlay can be a global CSS class applied to `body` or a fixed host element

---

## Assets

- **Angular shield SVG** (inline, no external file needed):
  ```svg
  <svg width="16" height="16" viewBox="0 0 250 250">
    <polygon points="125,5 250,45 220,200 125,245 30,200 0,45" fill="#DD0031"/>
  </svg>
  ```
- **Fonts:** Load from Google Fonts:
  - `IBM Plex Mono` (weights 300, 400, 500, 700; italic 400)
  - `Space Grotesk` (weights 300, 400, 500, 600)
- No other external assets required.

---

## Files in This Package

| File | Description |
|---|---|
| `README.md` | This document |
| `Brian Koo.html` | Full high-fidelity HTML prototype — the reference implementation |
| `Brian Koo - Concepts.html` | The 6 initial concept directions explored before settling on the terminal aesthetic |
