# All Time Plumbers — Premium Redesign Plan
**Hand-off brief for Antigravity execution.**
Owner: Milan / MonteKristo · Target: alltimeplumbers.com (Pete, San Diego CA) · Drafted: 2026-05-03

---

## 1. Context

**Why this redesign.** All Time Plumbers, Inc. is a small owner-operated San Diego plumbing company (est. 2018, CSLB Lic #1134776, phone 760-201-6461, ZIP 92127). Their current site is a generic WordPress 6.9.4 + AIOSEO + Bootstrap build with one (1) services page, one (1) review on file ("Bita Hoffman, Jan 10 2026"), an empty gallery, a single blog post from 2022, no service-area pages, no booking flow, no chat, no schema beyond AIOSEO defaults, and obviously AI-generated body copy. Brand colors today: `#BF2235` (red) primary, `#213B6E` (navy) text, `#D4D4D4` (gray) secondary. Fonts: Oswald (heading), Montserrat (body).

We are rebuilding the site to MonteKristo premium standard — production-quality **Next.js 16 (App Router) + React 19 + Tailwind v4 + shadcn/ui**, 18 deeply-written pages, multi-step booking with photo upload, sticky mobile call-bar, Plumber + Service + FAQPage JSON-LD schema, transparent pricing tiles, and a tight Retell-powered after-hours triage bot — with a frontend-critic score of **90+/100 AND Lighthouse Mobile SEO = 100** as the launch gate. **SEO is the #1 KPI**: full Next 16 file-convention SEO stack (sitemap.ts, robots.ts, opengraph-image.tsx, per-route Metadata API), `schema-dts`-typed JSON-LD on every route, `next/image` AVIF + WebP responsive `srcset`, `next/font` with zero-CLS Bricolage Grotesque + Inter, and Vercel SSG + ISR deploy.

**Intended outcome.** Lift Pete's mobile call-conversion rate from a clearly broken sub-2% into the plumbing-industry top-quartile band of 12-16% (per benchmarks: plumbing converts ~6-8x baseline home services because intent is days-not-months). Establish a defensible local SEO surface in San Diego North County (Rancho Bernardo, Poway, 4S Ranch, Carmel Mountain, Escondido) without tripping Helpful Content Update demotion through templated city pages.

**Why hand to Antigravity.** This document is the design + IA + content brief. Antigravity will execute the build natively (no `codex exec` delegation per its protocol), iterating against the frontend-critic 100-point rubric and producing the master HTML/React bundle for Cloudflare Pages deploy.

---

## 2. Current-state audit (what we found via Firecrawl)

### Sitemap (11 pages total)

| URL | Notes |
|---|---|
| `/` (home) | Single-column dump, ~1100 words, generic copy |
| `/plumbing-services-in-san-diego-ca/` | THE only services page — every service jammed onto one URL |
| `/contact-us/` | reCAPTCHA-gated form: Name / Email / Phone / Message — Google Maps embed broken (`about:invalid#zClosurez` link) |
| `/reviews/` | **One** testimonial: "Pete did an amazing job…" — Bita Hoffman, 2026-01-10 |
| `/feedback/` | Internal feedback form (separate from reviews) — usable for review-gating logic |
| `/gallery/` | Empty — only Yelp/Facebook/Google social icons, zero project photos |
| `/2022/12/welcome-to-our-blog` | Single placeholder post from Dec 2022 |
| `/category/general`, `/author/admin`, `/sitemap` | WP defaults |
| `/terms-and-conditions/`, `/privacy-policy/` | Boilerplate, last updated 2025-02-24 |

### Trust signals present
- License # visible: **CSLB Lic #1134776** (keep verbatim, prominently)
- Phone in header: **(760) 201-6461** (tel-link works)
- Owner first name on a real review: **Pete**
- Geographic specificity in copy: Pacific Beach, North County, Balboa Park, Downtown
- Google Business listing linked (https://maps.app.goo.gl/27B8SeJbJJDSWqRv6) — real GBP exists and should be the source for review pull

### Trust signals MISSING
- No Google Reviews count or star rating on the public site
- No insurance or bonding badge images (only text "fully licensed and insured")
- No BBB rating
- No before/after gallery, no team photos, no truck photo, no on-job photos
- No technician profile (Pete is named in copy + a review but never introduced)
- No transparent pricing or service-call fee
- No emergency surcharge disclosure (or non-disclosure)
- No financing or membership program
- No service-area landing pages
- No schema beyond AIOSEO defaults (no Plumber, no FAQPage, no Review, no AggregateRating, no Service, no LocalBusiness)
- Empty/non-functional Google Maps embed on Contact

### Tech tells
- WordPress 6.9.4 + All in One SEO 4.9.3 + Bootstrap framework heritage in CSS
- Static asset paths under `/wp-content/uploads/` — easy bulk download
- No service worker, no preload hints, no `<link rel=preconnect>`, no AVIF/WebP

### Visual quality (1-10): **3.5**
The brand has bones (red+navy, license # visible, owner-first messaging) but the execution is flat: Oswald headings + Montserrat body in flat color blocks, generic stock plumbing icons, no hierarchy, no white-space discipline, three identical CTA blocks repeated down the homepage. Mobile is responsive but not designed for thumb-zone or emergency intent.

### Content quality
Body copy reads as an LLM first-draft never edited: "*Plumbing problems can disrupt your day in an instant. And at All Time Plumbers, Inc., we're here to make sure they never slow you down for long.*" Recurring AI tells: "*at the heart of*", "*we don't just X, we Y*", "*locally owned and operated*", "*honest pricing with no hidden surprises*". Must be rewritten by hand.

### Image inventory (what to download)
From `/wp-content/uploads/`:
- `ATPLogo.png`, `ATPLogoFooter-e1761595185929.png`, `ATPFavIcon.png`, `White24-e1761595270917.png`
- `phone-icon.png`, `phone-icon-1.png`, `map-pin.png`, `google-brand.png`
- Service icons: `WaterHeaterIcon.png`, `GasIcon.png`, `PlumbingIcon.png`
- Commercial illustrations: `New-Construction-Plumbing.png`, `Realtor-and-Property-Management-Inspections.png`, `Sewer-Line-and-Camera-Inspections.png`
- Social icons: `2022/08/yelp-logo-icon.png`, `2022/08/facebook-icon-logo.png`, `2022/08/google.png`

We keep the **logo** and **favicon**. Everything else gets replaced with new assets per §10.

---

## 3. Asset-gathering tasks (Antigravity executes these BEFORE code)

These are the read/capture tasks that must run after plan approval and before component work begins. They are not yet executed (plan mode).

### 3.1 Playwright capture pass
**Script location to create:** `clients/alltimeplumbers/screenshots/capture.mjs`

Capture full-page PNG screenshots of every URL in §2 sitemap at three viewports — `375×812` (iPhone SE), `768×1024` (iPad), `1440×900` (desktop). Output naming: `clients/alltimeplumbers/screenshots/{slug}-{viewport}.png`. Also capture mobile-viewport video of homepage scroll for IA reference.

```bash
npx playwright install chromium  # idempotent
node clients/alltimeplumbers/screenshots/capture.mjs
```

The screenshots are **reference material only** — they live in `clients/alltimeplumbers/screenshots/` and are never published.

### 3.2 Image asset extraction
**Script:** `clients/alltimeplumbers/assets/source/download.sh`

Download every unique URL from the inventory in §2 to `clients/alltimeplumbers/assets/source/`, preserving filenames. Required for: keeping the logo, sampling the existing service-icon style as a baseline (we'll redraw, not reuse), and capturing the CSLB license badge if any image asset of it exists (none seen — must source from cslb.ca.gov).

### 3.3 Google Business Profile pull
Pull the real review count and star rating for the GBP at `https://maps.app.goo.gl/27B8SeJbJJDSWqRv6` via Firecrawl scrape. Save raw JSON to `clients/alltimeplumbers/state/gbp-snapshot.json`. This is the only authoritative source of social proof — we will surface the LIVE count + star average on the new homepage and reviews page.

### 3.4 Competitor screenshot pass
Capture homepages of 6 plumbing competitors at desktop viewport: Mr. Rooter, Roto-Rooter, Benjamin Franklin Plumbing, Mike Diamond, John The Plumber (Ottawa), Plumbline Services (Denver). Save to `clients/alltimeplumbers/screenshots/competitors/`. Antigravity uses these only as design-reference — no copy-paste of trade dress.

### 3.5 Real-photo brief (delivered to Pete, NOT generated)
Write `clients/alltimeplumbers/documents/PHOTO-SHOT-LIST.md` with a 12-shot iPhone shoot list (truck 4 angles, hands-on work 6 shots, Pete portrait, team if any). Antigravity does not generate AI-rendered humans — that tanks trust signal. Phase 1 ships with stock-w/-grade; Phase 2 swaps in Pete's real photos.

---

## 4. Tech stack — locked

**Pick: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4 + shadcn/ui (Radix primitives) + lucide-react + next/font.** Mirror `clients/ideal-energy/` exactly. Static SSG for marketing routes; ISR (`revalidate: 604800`) on review-data routes. Deploys to **Vercel** — DNS proxied through Cloudflare.

**Why Next.js (NOT Vite, NOT vanilla):** SEO is the #1 KPI. Next 16 ships SSG + ISR, the `Metadata` API, file-convention `sitemap.ts` / `robots.ts` / `opengraph-image.tsx`, automatic `<link rel="canonical">`, `next/image` with native AVIF + WebP + responsive `srcset`, `next/font` with zero-CLS `font-display: swap` + `font-size-adjust`, and `next/link` automatic prefetch. Every one of these is a Lighthouse-score lever Vite would force us to hand-wire. Plumbing in San Diego is a high-CPM, high-intent vertical — we are competing for first-page rank against Roto-Rooter and Mr Rooter, both well-funded. Every SEO advantage Next provides on day 1 is non-negotiable.

**Why Vercel deploy (NOT Cloudflare Pages):** Next 16 App Router on CF Pages requires `@cloudflare/next-on-pages`, an adapter that breaks Server Actions, breaks file-convention `opengraph-image.tsx`, and silently disables some `<Metadata>` features. Vercel runs Next natively. Free tier handles Pete's traffic 50× over. Cloudflare still owns DNS + WAF + analytics — Vercel just hosts the app.

### Dependencies (mirror `clients/ideal-energy/package.json`)
- `next@^16` (App Router), `react@^19`, `react-dom@^19`, `typescript@^5`
- `tailwindcss@^4`, `@tailwindcss/postcss@^4`, `tailwind-merge`, `clsx`, `class-variance-authority`, `tailwindcss-animate`
- `@radix-ui/react-*` (accordion, dialog, dropdown-menu, label, navigation-menu, popover, scroll-area, select, slot, tabs, toast)
- `lucide-react`
- `react-hook-form`, `@hookform/resolvers`, `zod` (booking form)
- `framer-motion` (sticky CTA reveal, marquee)
- `embla-carousel-react` (review carousel)
- `schema-dts` *(typed JSON-LD helpers — see §9.2)*
- `vitest`, `@testing-library/react`, `playwright` (frontend-critic deps)
- `eslint`, `eslint-config-next`

### Next-specific config

`next.config.ts`:
```ts
import type { NextConfig } from 'next';
const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31_536_000,
  },
  experimental: { optimizePackageImports: ['lucide-react', 'framer-motion'] },
  async headers() {
    return [
      { source: '/(.*)', headers: [
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
      ]},
    ];
  },
  typescript: { ignoreBuildErrors: false },
};
export default config;
```

`postcss.config.mjs`:
```js
export default { plugins: { '@tailwindcss/postcss': {} } };
```

Tailwind v4 — CSS-first config in `app/globals.css`:
```css
@import "tailwindcss";

@theme {
  --color-primary: #BF2235;
  --color-primary-deep: #8E1828;
  --color-primary-soft: #FCEAEC;
  --color-navy: #1B2E55;
  --color-navy-ink: #0F1E3A;
  --color-navy-mute: #3A4D78;
  --color-cream: #F7F3EC;
  --color-cream-deep: #EDE6D6;
  --color-border: #E5DED1;
  --color-success: #1F7A4D;
  --color-warn: #C97A1F;
  --color-ink: #0F1E3A;

  --font-display: var(--font-bricolage), system-ui, sans-serif;
  --font-sans:    var(--font-inter), system-ui, sans-serif;
}
```

Other config: `tsconfig.json` (strict, paths `@/*`), `eslint.config.mjs` (extends `eslint-config-next`), `components.json` (shadcn alias `@/components`), `vercel.json` if any header overrides needed.

### Repo location
**`clients/alltimeplumbers/website/`** — matches the `clients/{slug}/website/` canonical structure in [ORGANIZATION.md](/home/milan/projects/MonteKristo%20Devs/ORGANIZATION.md). Sibling folders Antigravity must also create: `assets/`, `assets/source/` (downloads), `documents/`, `screenshots/`, `screenshots/competitors/`, `state/`, `reports/`. Top-level `CLIENT.md` + add an entry to [clients/INDEX.md](/home/milan/projects/MonteKristo%20Devs/clients/INDEX.md).

---

## 5. Brand direction

**Keep:** the red + navy combination. Pete's red `#BF2235` is fine for an emergency-trade brand and deserves preservation as equity. Navy `#213B6E` is fine but slightly muddy — we deepen it.

**Drop:** Oswald. It dates the site to ~2014 generic-trade. Oswald + plumbing reads as "Wix template I bought in 2017."

### Tailwind palette tokens (`tailwind.config.ts`)
```ts
colors: {
  primary: { DEFAULT: '#BF2235', deep: '#8E1828', soft: '#FCEAEC' },
  navy:    { DEFAULT: '#1B2E55', ink: '#0F1E3A', mute: '#3A4D78' },
  cream:   { DEFAULT: '#F7F3EC', deep: '#EDE6D6' },
  border:  { DEFAULT: '#E5DED1', mute: '#CFC6B5' },
  success: '#1F7A4D',
  warn:    '#C97A1F',
  ink:     '#0F1E3A',
}
```
Background default: `cream.DEFAULT`. Card surfaces: `white`. Body text: `ink`. Accent buttons: `primary`. Secondary buttons: outlined `navy.DEFAULT` border on transparent.

### Typography
**Drop Oswald + Montserrat. Adopt Bricolage Grotesque (display) + Inter (body).** Both Google Fonts, free, weight range 400–800. Bricolage gives the trade-blue-collar weight Oswald reaches for, but feels 2025. Inter for everything below H3.

`index.html` `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```ts
// tailwind.config.ts
fontFamily: {
  display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
  sans:    ['Inter', 'system-ui', 'sans-serif'],
}
```

### Type scale
- H1 display 56/64 (mobile 40/48), Bricolage 800, tracking -0.02em
- H2 display 40/48 (mobile 30/38), Bricolage 700, tracking -0.015em
- H3 24/32 Bricolage 600
- Body 16/26 Inter 400
- Small 14/22 Inter 500
- Eyebrow 12/16 Inter 700, uppercase, tracking 0.12em, text-primary

### Voice
"*Trade-confident, owner-personal, no-fluff.*" Pete-first, San-Diego-second. Sentences short. No "*we are committed to providing*", no "*at the heart of*", no "*don't just X, we Y*". Use real numbers (years, license #, response window) wherever possible. Never say "fully licensed and insured" without immediately printing the license number next to it.

**Banned phrases** (per MK content quality gate): see `~/Documents/MonteKristo Vault/skills/content-quality.md`. Antigravity must run blog-style anti-AI gate over every shipped paragraph before commit.

---

## 6. Information architecture (18 pages, hard cap)

```
/                                       Home
/services/                              Services hub
/services/drain-cleaning                Drain cleaning hub
/services/water-heater                  Water heater hub
/services/leak-repair                   Leak detection + repair hub
/services/repipe                        Whole-home repipe hub
/services/emergency                     24/7 emergency hub
/areas/                                 Service areas hub
/areas/rancho-bernardo                  City landing
/areas/poway                            City landing
/areas/4s-ranch                         City landing
/areas/carmel-mountain                  City landing
/areas/escondido                        City landing
/about                                  About Pete + the company
/reviews                                Reviews (live GBP pull + on-site form)
/contact                                Contact (with map)
/book                                   Multi-step booking
/blog/                                  Blog index (Phase 2; placeholder in Phase 1)
/legal/terms, /legal/privacy            Legal (carry over content, restyle only)
```

**Service x City matrix combos are deliberately deferred to Phase 2.** HCU demotes name-swap city pages. Add 2-3 `/services/water-heater-rancho-bernardo`-style pages only after the 5 city hubs prove ranking on their own — and when added, they must contain unique on-page content (hardness data, building-era pipe patterns, HOA quirks) per ZIP.

### Each service hub must contain
- 800+ words of original copy (Pete-dictated or hand-written, NOT LLM first draft)
- "What you'll see / hear / smell" symptom checklist (high intent for AI Overview pickup)
- Diagnostic decision tree (4-6 yes/no nodes → "call us" or "DIY")
- Pricing range tile (e.g. "Drain clear $250-$450 typical")
- 3 in-context FAQ entries with `FAQPage` schema
- One cross-link to each adjacent service + `/areas/`
- One "real" photo placeholder slot (Phase 1 stock-w/-grade, Phase 2 swap)
- Sticky-CTA aware layout — bottom 96px reserved on mobile

### Each city page must contain
- 600+ words of unique local context (water hardness, common pipe materials by build era, neighborhood landmarks Pete actually services, drive-time from 92127)
- Embedded GBP map centered on the city
- Locally-relevant photo slot
- 5 service-link cards
- City-specific FAQ (3 entries, FAQ schema)
- Same sticky-CTA awareness

---

## 7. Page-by-page wireframe spec

### 7.1 Home (`/`)

| Slot | Section | Content |
|---|---|---|
| 1 | **Sticky header** | logo · `Services` `Areas` `Reviews` `About` `Contact` · phone pill (red) `(760) 201-6461` |
| 2 | **Hero** | 60vh on desktop, 100svh on mobile. H1: "*San Diego plumbing, when you need it.*" Sub: 1 sentence + license badge `CSLB Lic #1134776`. CTA stack: red `Book a service` (primary) + outlined navy `Call (760) 201-6461`. Right column desktop: 16:10 image of Pete or truck. Left column mobile: image stacks above text. |
| 3 | **Trust strip** | 4 tiles: `Lic #1134776` / `Owner-operated since 2018` / GBP star + count (live pull) / `24/7 emergency` |
| 4 | **Services grid** | 5 cards in 5-col grid (mobile: 2-col), each: icon + service name + 1-line + "Learn more" link. Cards: Drain · Water Heater · Leak · Repipe · Emergency |
| 5 | **How it works** | 3-step: Book → Arrive (window) → Fixed price quote first. Tighten the "no surprise pricing" angle. |
| 6 | **Pricing transparency band** | "Starting prices" tiles. Service call $89, drain clear $250-$450, water heater install $1,800-$3,800, slab leak detection from $295. Disclose fees. Per research, transparent pricing converts plumbing 2-3x vs "free estimate." |
| 7 | **Areas served** | Map illustration + 5 city pills linking to `/areas/*` |
| 8 | **Reviews** | Live GBP star + count headline; 3-card carousel of best on-file reviews + "Leave a review" CTA |
| 9 | **Owner intro** | Photo of Pete + 2-paragraph human bio. License visible. Direct line CTA. |
| 10 | **FAQ accordion** | 6 questions, FAQPage schema |
| 11 | **Final CTA band** | Primary book + secondary call, on cream-deep background |
| 12 | **Footer** | Hours · Address · Phone · 5 service links · 5 city links · social · legal · CSLB # |
| (mobile only) | **Sticky bottom CTA bar** | 60% red `Call now` · 40% outlined `Book online` — slides in after 200px scroll |

### 7.2 Services hub (`/services/`)
Hero (compact, no image) + 5 service cards (large) + emergency banner + FAQ + footer. ~600 words intro + 100 per card.

### 7.3 Service detail (e.g. `/services/water-heater`)
Hero with breadcrumb + symptom checklist + diagnostic tree + pricing tile + CTA + 3 sub-services accordion + 5 FAQ + cross-link grid + reviews mention + final CTA band. 800-1000 words.

### 7.4 Areas hub (`/areas/`)
Hero + map + 5 city tiles with thumbnail + city-specific blurb + FAQ + final CTA.

### 7.5 City detail (e.g. `/areas/rancho-bernardo`)
Hero with city + zip + drive-time-from-92127 + GBP embed + city context paragraph + 5 service link tiles + city-specific FAQ + final CTA. 600-800 words.

### 7.6 About (`/about`)
Pete's story (real, dictated, not LLM) + license visible + how the company started + service area + the team if any + truck/uniform photo + values (no slop) + CTA. 700 words.

### 7.7 Reviews (`/reviews`)
Live GBP star + count + on-site review wall (carousel + grid) + "Leave us a review" CTA → review-gating logic (4-5★ → Google review link, 1-3★ → private feedback form per §8.1). Existing testimonial (Bita Hoffman) preserved.

### 7.8 Contact (`/contact`)
Two-column on desktop: form left (name, phone, email, service, message — react-hook-form + zod, no reCAPTCHA, use Cloudflare Turnstile instead) + map embed right (real GBP iframe, fix the broken Maps embed). Hours, address, phone, license below.

### 7.9 Book (`/book`)
**Multi-step, 5 steps, max 4 fields per step.** See §8.2. The crown jewel.

### 7.10 Blog (`/blog`) — Phase 2
Phase 1 ships with `/blog/` containing 1 placeholder post that explains the service area + who Pete is. Phase 2: 3 seed posts (water heater age signs, slab leak SD homes, emergency fee transparency).

### 7.11 Legal pages
Carry copy from existing site, restyle only. No content changes — these are reviewed by Pete's lawyer.

---

## 8. The 10 MK features — adapted for plumbing

Per [CLAUDE.md routing](/home/milan/projects/MonteKristo%20Devs/CLAUDE.md), MK premium sites ship with 10 standard features. Plumbing reality forces 6-keep / 4-skip:

| # | Feature | Decision | Plumbing-specific spec |
|---|---|---|---|
| 1 | Review gating | **KEEP — soft gate** | 4-5★ → "Leave on Google" deep link · 1-3★ → private feedback form `/feedback` (existing). Pete has only 1 public review now; gating before he hits 15 organic looks engineered, so flag is `enableHardGate=false` until count > 15. Soft-gate copy: "How was your experience?" |
| 2 | Multi-step booking | **KEEP — 5 steps with photo upload** | Step 1: Problem (icon grid: leak, drain, water heater, repipe, emergency, other). Step 2: Photos (2-4 optional, drag/drop, max 8MB each, client-side compress). Step 3: Address (Google Places autocomplete + service-area validation against 5 ZIPs first, not last). Step 4: Time window (today / tomorrow / this week / specific date — date picker). Step 5: Contact (name, phone, email — phone required, email optional). Submit posts to GHL via webhook (or n8n if no GHL yet). Photo upload **does materially convert** for plumbing per research. |
| 3 | Live chatbot | **KEEP — scoped tight** | Retell chat widget (not voice on web) — same pattern as gummygurl `index.html` retell-widget script. Persona: emergency triage only. First question: "Is water actively flowing?" → if yes, big call button; if no, schedule path. After-hours: route to Retell voice agent number. Budget: small. Avoid generic chat — research is unambiguous that bad chatbot is worse than none. |
| 4 | Partner marquee | **DROP** | Pete has no partners. A fake marquee (Lowes / Home Depot logos) will tank trust faster than no marquee. Replace with a "Certifications & licenses" mini-strip: CSLB badge, BBB if applicable, IAPMO if applicable. Real or none. |
| 5 | SEO schema | **KEEP — Plumber type, not LocalBusiness** | `Plumber` schema (subtype of `LocalBusiness`) on home + about + contact. `Service` schema on each service page. `FAQPage` on every page with FAQs. `AggregateRating` on home + reviews (pull from GBP, do not fabricate). `BreadcrumbList` everywhere. `Review` for individual testimonials. Use `@id` URIs to link entities. |
| 6 | Mobile sticky CTA | **KEEP — split bar** | Bottom-fixed bar, h=64px. Left 60%: red `📞 Call now` (`tel:+17602016461`). Right 40%: outlined `Book online` (→ `/book`). Slides in after 200px scroll. Hides on `/book` route. iOS safe-area inset respected. |
| 7 | Programmatic SEO city pages | **KEEP — capped at 5 cities** | Hard cap. Hand-written content per city. No name-swap. See §6 IA. |
| 8 | Tech / owner profile | **KEEP — single Pete page on `/about`** | Real photo (Phase 2) + bio + license + photo of truck. Cross-linked from home. |
| 9 | Before/after gallery | **DEFER to Phase 2** | Empty in Phase 1 (current state has zero). Build the component shell in Phase 1, populate in Phase 2 once Pete shoots 6+ pairs. |
| 10 | Transparent pricing tiles | **KEEP — replaces `Free Estimate` everywhere** | Service-call $89 (waived if work proceeds), drain clear $250-$450, hydro-jet $400-$700, water heater install (tank) $1,800-$3,000, water heater install (tankless) $3,500-$5,500, slab leak detection from $295, repipe (avg 3-bd) $7,500-$15,000. Tile copy: "Starts at" not "Up to". Disclose: no after-hours surcharge until 10pm; emergency surcharge $150 after 10pm. |

**Additional plumbing-specific feature: Emergency triage banner.** Site-wide banner on `/services/emergency` and on home below the hero: red, dismissible: "*Active leak? Water heater leaking on the floor? Call now — we answer 24/7.*"

---

## 9. SEO + content strategy — the #1 KPI

This is the most SEO-critical section. We are competing in San Diego plumbing — a high-CPM, high-intent vertical where ranking on the first page for `plumber san diego`, `emergency plumber san diego`, `water heater repair san diego`, and `slab leak san diego` directly drives Pete's pipeline. Every decision below is a Lighthouse / SERP lever — none are decorative.

### 9.1 Next 16 SEO infrastructure (file-convention)

| File | Purpose |
|---|---|
| `app/layout.tsx` | Root `Metadata` export — sets `metadataBase`, default title-template, description, keywords, openGraph, twitter, robots, alternates (canonical), authors, generator, verification tags. Includes site-wide JSON-LD `Plumber` + `WebSite` blocks via inline `<script type="application/ld+json">`. |
| `app/[route]/page.tsx` | Per-route `Metadata` export — title (60-70ch), description (150-160ch), keywords array, openGraph (with `images`), twitter cards, alternates (canonical override). Per-route JSON-LD `Service`/`Place`/`FAQPage`. |
| `app/sitemap.ts` | Programmatic sitemap, lists every static + dynamic route with `lastModified`, `changeFrequency`, `priority`. **Use file-convention; do NOT use `next-sitemap` package.** |
| `app/robots.ts` | Programmatic robots.txt — allows all, points to `https://alltimeplumbers.com/sitemap.xml`. Disallows `/api/`. |
| `app/opengraph-image.tsx` | Default 1200×630 OG image generated at build via `ImageResponse`. Brand-correct: cream bg, navy heading, red accent, license + phone visible. Per-route overrides in `app/{route}/opengraph-image.tsx`. |
| `app/twitter-image.tsx` | Twitter card image variant. |
| `app/icon.tsx`, `app/apple-icon.tsx` | Generated favicon + apple-touch-icon (use existing `ATPFavIcon.png` if downloadable; otherwise generate from logo at build time). |
| `app/manifest.ts` | Web app manifest (PWA-light: name, theme color, icons). |

### 9.2 JSON-LD schema strategy

Type-safe via [`schema-dts`](https://github.com/google/schema-dts). Centralize generators in `lib/schema.ts`. Required entities:

| Entity | Where | Notes |
|---|---|---|
| `Plumber` | Root layout (sitewide) | `@id: https://alltimeplumbers.com/#org`. Includes `address` (PostalAddress), `telephone`, `priceRange`, `areaServed` (array of cities), `openingHoursSpecification`, `aggregateRating` (from GBP, only if ≥15 reviews), `image`, `logo`, `sameAs` (GBP, Yelp, Facebook, Instagram), `founder`. |
| `WebSite` | Root layout | `@id: https://alltimeplumbers.com/#website`, links to `Plumber` via `publisher`. Optional `potentialAction` SearchAction. |
| `Service` ×5 | Each `/services/*` hub | `provider: { @id: '#org' }`, `serviceType`, `areaServed`, `offers` with `priceRange`, `hasOfferCatalog` for sub-services. |
| `Place` ×5 | Each `/areas/*` city page | `geo` lat/lng, `containedInPlace` (San Diego County), neighborhood landmarks. |
| `FAQPage` | Every page with FAQs | Per-page array of `Question` + `Answer`. **Required for AI Overview pickup.** |
| `AggregateRating` | Home + Reviews | Pulled live from Google Places API. **Do NOT publish unless `reviewCount ≥ 15`.** |
| `Review` | Reviews page | One per on-site testimonial. |
| `BreadcrumbList` | Every non-home page | Programmatic from URL segments. |
| `LocalBusiness` (Plumber subtype) | Contact page | Same data as root Plumber but page-scoped. |
| `Organization` | About page | `founder`: `Person` Pete (last name pending). |

Validate every page via Google Rich Results Test + Schema.org Validator before deploy. Block deploy on validation errors.

### 9.3 Metadata API patterns

```ts
// app/services/water-heater/page.tsx
export const metadata: Metadata = {
  title: 'Water Heater Repair & Install San Diego | All Time Plumbers',
  description: 'Same-day water heater repair and tankless install in San Diego. CSLB Lic #1134776. Owner-operated since 2018. Call (760) 201-6461.',
  keywords: ['water heater repair san diego', 'tankless water heater install', 'water heater replacement 92127', 'plumber san diego'],
  alternates: { canonical: 'https://alltimeplumbers.com/services/water-heater' },
  openGraph: {
    title: 'Water Heater Service in San Diego | All Time Plumbers',
    description: '…',
    url: 'https://alltimeplumbers.com/services/water-heater',
    siteName: 'All Time Plumbers',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/services/water-heater/opengraph-image', width: 1200, height: 630, alt: 'Water heater service in San Diego — All Time Plumbers' }],
  },
  twitter: { card: 'summary_large_image', title: '…', description: '…' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};
```

Title format rules:
- Home: `San Diego Plumber | All Time Plumbers | CSLB #1134776`
- Service hub: `{Service} in San Diego | All Time Plumbers`
- City page: `Plumber in {City} ({ZIP}) | All Time Plumbers`
- About: `Meet Pete — Owner-Operated San Diego Plumber | All Time Plumbers`
- All meta descriptions hand-written, 150-160 characters, **always include phone or license** for SERP CTR.

### 9.4 Internal linking + URL strategy

- **Trailing slash:** off (Next default). 301 redirects from any trailing-slash variants.
- **Canonical hosts:** `alltimeplumbers.com` (no `www`). 301 from `www.alltimeplumbers.com`.
- Every service hub links to 4 other service hubs + 3 nearest cities + about + book.
- Every city page links to 5 service hubs + about + book.
- Footer carries 5 service + 5 city links sitewide.
- Use `next/link` everywhere — automatic prefetch on hover/visible.
- Body copy uses contextual anchor text (`our [drain cleaning service](/services/drain-cleaning)` not "click here").

### 9.5 Image SEO

- All images via `next/image` — automatic AVIF + WebP + responsive `srcset`.
- `priority={true}` only on hero LCP image per page (one per page maximum).
- `alt` text: descriptive, plumbing-relevant, ≤125 characters, includes location keyword where natural.
- `width` + `height` always set — zero CLS contribution.
- Lazy-load below the fold (Next default).
- Hero filename pattern: `hero-{route}.{avif,webp,jpg}` — keyword-rich, lowercase, hyphens.
- OG image per route via file-convention `app/{route}/opengraph-image.tsx`.

### 9.6 Core Web Vitals targets (must pass on launch)

| Metric | Target | How |
|---|---|---|
| **LCP** | < 2.0s mobile (better than 2.5 threshold) | `priority` hero image, `next/font` with `display: swap`, no blocking JS, `preload` hero, server-static markup |
| **CLS** | < 0.05 | Reserve all image dimensions, set min-height on hero, `font-size-adjust` on `next/font` fallback, no layout-shifting `motion.*` enter animations on first paint |
| **INP** | < 100ms | No client-side state on marketing routes; booking flow uses Server Actions; sticky CTA uses CSS-only `transform` transitions |
| **TTFB** | < 300ms | Vercel Edge static assets |
| **FCP** | < 1.5s mobile | Inline critical CSS via Tailwind v4, no render-blocking external CSS |

### 9.7 GEO (AI Overviews) optimization

Per research, conversational long-tail wins AI Overview citations. Each FAQ:
- Complete-sentence answer ≤100 words
- Factual (no marketing fluff)
- Literal phrase "in San Diego" in the answer where geographically appropriate
- Mark up with `FAQPage` JSON-LD
- Mirror question text as `<h3>` for E-E-A-T

Use the `blog-geo` skill conventions documented in [CLAUDE.md skills section](/home/milan/projects/MonteKristo%20Devs/CLAUDE.md).

### 9.8 Sitemap + robots

`app/sitemap.ts` programmatically:
- Lists 11 Phase-1 routes
- `priority: 1.0` for `/`, `0.9` for service hubs, `0.8` for city pages, `0.7` for about/reviews/contact, `0.5` for legal
- `changeFrequency: 'weekly'` for reviews, `'monthly'` for services + cities, `'yearly'` for legal
- `lastModified: new Date()` per route from build time

`app/robots.ts`:
- `User-agent: *` allow `/`, disallow `/api/`
- `Sitemap: https://alltimeplumbers.com/sitemap.xml`

### 9.9 Search Console + analytics

Pre-launch: verify domain ownership in Google Search Console + Bing Webmaster Tools via `<meta>` verification tag in root layout (`metadata.verification`). Submit sitemap manually within 24h of DNS cutover.

Analytics: GA4 via `next/third-parties/google` (lazy-loaded, won't impact LCP). Tracking ID in env. Goal events: `phone_click`, `book_start`, `book_complete`, `service_view`.

### 9.10 hreflang + i18n

English-only Phase 1. No hreflang needed. If Spanish is added in a future phase, use Next App Router middleware-based locale routing with `<link rel="alternate" hreflang="es-US">`.

### 9.11 SEO QA pre-launch checklist

- [ ] Every route has unique title + description (no duplicates)
- [ ] Every route has explicit canonical
- [ ] Every route has `<h1>` (one only)
- [ ] Every page validates clean in Rich Results Test
- [ ] Sitemap renders at `/sitemap.xml`, lists 11+ URLs
- [ ] robots.txt renders at `/robots.txt`, references sitemap
- [ ] OG image renders at `/opengraph-image` (default) and per-route overrides
- [ ] No `noindex` accidentally set anywhere
- [ ] All internal links use `next/link` (no raw `<a href>` for internal routes)
- [ ] `next/image` everywhere (no raw `<img>`)
- [ ] All images have `alt`, `width`, `height`
- [ ] No render-blocking external CSS
- [ ] LCP image has `priority`
- [ ] No client-side data fetch on marketing routes (everything SSG/ISR)
- [ ] PageSpeed Insights mobile: Performance ≥ 90, SEO = 100
- [ ] Core Web Vitals all green in Lighthouse
- [ ] Domain verified in Google Search Console + Bing Webmaster Tools
- [ ] GA4 tracking confirmed in real-time view
- [ ] Phone-click goal event firing

---

## 10. Content production

| Source | Plan |
|---|---|
| **Body copy** | Hand-write every page. No LLM first drafts. Pete-dictated voice notes for About, Owner intro, and city-context paragraphs. Run all copy through MK content-quality gate per `~/Documents/MonteKristo Vault/skills/content-quality.md` — banned phrases trip auto-fail. |
| **Photography (Phase 1)** | 8-10 stock plumbing shots from Unsplash, all run through unified warm/navy color grade preset (Lightroom or Photoshop), exported AVIF + WebP fallback. Strictly framed as "what we do" tile imagery, never as "here's our team." |
| **Photography (Phase 2)** | iPhone shoot from Pete per `documents/PHOTO-SHOT-LIST.md`. Swap Phase-1 stock 1-for-1. |
| **Service icons** | Redraw from scratch in lucide-react style: `Droplet` for leak, `Flame` for water heater, `Wrench` for repair, `Wind` for drain, `AlarmClock` for emergency. Stroke 1.5px, color `navy.ink`, hover `primary.DEFAULT`. |
| **Logo** | Keep `ATPLogo.png`. Re-export at 2x (`logo@2x.png`) and 1x (`logo.png`) from the original. Generate `favicon.ico`, `apple-touch-icon.png` (180×180), `og-image.png` (1200×630) via realfavicongenerator.net during execution. |
| **Reviews** | Live pull from GBP at build via Firecrawl (cron: weekly rebuild). Cache in `state/gbp-snapshot.json`. |

No AI-generated humans. Period.

---

## 11. Quality gates — frontend-critic 90+/100

Per [skills/frontend-critic/SKILL.md](/home/milan/projects/MonteKristo%20Devs/skills/frontend-critic/SKILL.md), the rubric is:
- **30 pts** — Lighthouse Performance avg
- **25 pts** — Lighthouse Accessibility avg + axe-core (zero violations = full)
- **20 pts** — Tap target compliance (no <44×44px on critical CTAs)
- **15 pts** — Lighthouse SEO avg
- **10 pts** — Lighthouse Best Practices avg
**Pass: 90+.**

### Hard guarantees Antigravity must hit
- LCP < 2.5s on mobile (preload hero image, AVIF + WebP, no blocking JS)
- CLS < 0.1 (reserve image dimensions, lock font with `display: swap` + `font-size-adjust`)
- Tap targets ≥48×48px on every CTA, ≥44×44px on every non-CTA touch element
- Color contrast ratio ≥4.5:1 for body text; ≥3:1 for large text — verify against the §5 palette
- Every image has `alt`; every form field has `<label>`; every interactive non-button is `role`-correct
- No `console.error` on any route
- Schema validates clean in Google Rich Results Test
- Sitemap valid + robots.txt valid
- All internal links resolve (no 404)

### Run command after build (frontend-critic)
```bash
./skills/frontend-critic/run.sh alltimeplumbers http://localhost:5173 \
  --pages=clients/alltimeplumbers/website/pages.txt
```
`pages.txt` lists every route from §6. Output to `clients/alltimeplumbers/reports/frontend-critic/{date}/`.

If score < 90, Antigravity applies P0 + P1 fixes from the report and re-runs. **Max 3 iterations per CLAUDE.md "Automatic Frontend Critic Rules" §3.** Final score reported to user with both quality gates.

### Codex review gate (per CLAUDE.md "Automatic Codex Rules")
Before any commit, Antigravity (or its caller) runs `codex exec review` on the staged diff. P0 issues fixed pre-commit. — Note: Antigravity Protocol §2 in CLAUDE.md says Antigravity does NOT delegate to `codex exec` and does code review natively. So this rule is effectively "Antigravity self-reviews" with the equivalent rigor.

---

## 12. Phasing

### Phase 1 — MVP launch (target: 5-10 working days)
- Folder + repo scaffolding (`clients/alltimeplumbers/{website,assets,documents,screenshots,state,reports}`)
- Asset gathering tasks per §3 (already done — see `HANDOFF.md`)
- **Next.js 16 App Router + React 19 + Tailwind v4 + shadcn/ui scaffold matching `clients/ideal-energy/`**
- 11 pages live: 5 core + 5 service hubs + 1 city anchor (`/areas/san-diego` covering all 5 listed cities at first)
- Multi-step booking (5 steps, photo upload, **Server Action handler** posting to email + KV log; GHL/n8n in Phase 2)
- Mobile sticky CTA bar
- **Full Next 16 SEO stack** (per §9): file-convention `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `manifest.ts`, per-route Metadata + JSON-LD via `schema-dts`, `next/image` + `next/font`, GA4 via `next/third-parties/google`
- Plumber + WebSite + Service + FAQPage + BreadcrumbList JSON-LD on every page; AggregateRating only when GBP reviewCount ≥ 15
- Stock-w/-grade imagery (real Pete photos in Phase 2)
- **Vercel deploy** via `git push` — DNS through Cloudflare pointing to `cname.vercel-dns.com`
- Domain handoff via the `domain-setup` skill — Cloudflare zone, Vercel CNAME, certificate auto-issued
- Search Console + Bing Webmaster verification meta tags in root layout, sitemap submitted within 24h of cutover
- frontend-critic 90+ score gate AND Lighthouse Mobile SEO = 100 before public launch

### Phase 2 — Trust + expansion (target: 14-21 working days post-Phase 1)
- 4 additional individual city pages (Rancho Bernardo, Poway, 4S Ranch, Carmel Mountain, Escondido replace single anchor)
- Real photo swap (Pete's iPhone shoot)
- Retell chat widget integration (emergency triage)
- Before/after gallery populated (6+ pairs)
- 3 seeded blog posts via the existing `Blog/` sub-system (use `blog-onboard` skill for new client onboarding)
- Review collection automation: post-job SMS via GHL → Google review link → response cadence
- 2-3 highest-intent service×city combos (e.g. `/services/water-heater-rancho-bernardo`) only after the 5 city pages prove ranking

---

## 13. Critical files & paths

### Reference patterns Antigravity should mirror
| What | Path |
|---|---|
| Tech stack (Next.js 16 App Router + React 19 + Tailwind v4) | `/home/milan/projects/MonteKristo Devs/clients/ideal-energy/package.json` |
| `next.config.mjs` reference | `/home/milan/projects/MonteKristo Devs/clients/ideal-energy/next.config.mjs` |
| `postcss.config.mjs` reference | `/home/milan/projects/MonteKristo Devs/clients/ideal-energy/postcss.config.mjs` |
| Alternate Next pattern (TypeScript config) | `/home/milan/projects/MonteKristo Devs/clients/sds/next-website/next.config.ts` |
| CLIENT.md template | `/home/milan/projects/MonteKristo Devs/clients/sunraise-capital/CLIENT.md` |
| Retell widget embed pattern (for Phase 2 chat) | `/home/milan/projects/MonteKristo Devs/clients/gummygurl/index.html` |
| Org rules + folder structure | `/home/milan/projects/MonteKristo Devs/ORGANIZATION.md` |
| Client roster index | `/home/milan/projects/MonteKristo Devs/clients/INDEX.md` |
| MK brand assets (logos, fonts) | `/home/milan/projects/MonteKristo Devs/Logo/` |
| Master agent / routing | `/home/milan/projects/MonteKristo Devs/CLAUDE.md` |
| Frontend-critic skill | `/home/milan/projects/MonteKristo Devs/skills/frontend-critic/SKILL.md` |
| Banned phrases / content quality | `~/Documents/MonteKristo Vault/skills/content-quality.md` |

### Files Antigravity will create
```
clients/alltimeplumbers/
├── CLIENT.md, HANDOFF.md, PLAN.md         # already prepared
├── assets/
│   ├── source/                            # downloaded originals from §2 inventory (run download.mjs)
│   ├── photos/                            # graded stock + (Phase 2) Pete's photos
│   └── icons/                             # redrawn lucide-style service icons
├── documents/
│   └── PHOTO-SHOT-LIST.md                 # 12-shot brief for Pete (Phase 2)
├── screenshots/                           # already prepared (8 ATP + 6 competitor)
├── state/
│   ├── gbp-snapshot.json                  # GBP review pull, refreshed weekly via Places API
│   └── pete-signoff-{date}.md             # Pete's written sign-off pre-launch
├── reports/
│   └── frontend-critic/{date}/            # critic outputs
└── website/                               # ← Next.js 16 App Router project
    ├── package.json, next.config.ts, tsconfig.json, eslint.config.mjs
    ├── postcss.config.mjs, components.json, vercel.json
    ├── .env.local, .env.production
    ├── public/
    │   ├── (favicon.ico generated by app/icon.tsx)
    │   ├── (sitemap.xml generated by app/sitemap.ts)
    │   ├── (robots.txt generated by app/robots.ts)
    │   └── images/                        # static images not handled by next/image
    ├── app/
    │   ├── layout.tsx                     # root layout — Metadata + JSON-LD Plumber/WebSite + next/font setup + GA4
    │   ├── page.tsx                       # Home
    │   ├── globals.css                    # Tailwind v4 + @theme tokens
    │   ├── sitemap.ts                     # programmatic sitemap
    │   ├── robots.ts                      # programmatic robots.txt
    │   ├── manifest.ts                    # web app manifest
    │   ├── icon.tsx, apple-icon.tsx       # generated favicons
    │   ├── opengraph-image.tsx            # default OG image (1200×630)
    │   ├── twitter-image.tsx              # Twitter card image
    │   ├── not-found.tsx                  # custom 404
    │   ├── error.tsx                      # error boundary
    │   ├── loading.tsx                    # skeleton (only used by booking form)
    │   ├── services/
    │   │   ├── page.tsx                   # /services hub
    │   │   ├── opengraph-image.tsx
    │   │   ├── drain-cleaning/page.tsx
    │   │   ├── water-heater/page.tsx
    │   │   ├── leak-repair/page.tsx
    │   │   ├── repipe/page.tsx
    │   │   └── emergency/page.tsx
    │   ├── areas/
    │   │   ├── page.tsx
    │   │   └── san-diego/page.tsx         # Phase 1: single anchor; Phase 2 splits to 5 cities
    │   ├── about/page.tsx
    │   ├── reviews/page.tsx               # ISR revalidate: 604800 (weekly Places API pull)
    │   ├── contact/page.tsx
    │   ├── book/
    │   │   ├── page.tsx                   # multi-step form host
    │   │   ├── actions.ts                 # Server Action (handle submit + photo upload)
    │   │   └── steps/                     # 1-problem, 2-photos, 3-address, 4-time, 5-contact
    │   ├── legal/
    │   │   ├── terms/page.tsx
    │   │   └── privacy/page.tsx
    │   └── api/
    │       └── webhook/route.ts           # Cloudflare Worker / GHL webhook proxy (if needed)
    ├── components/
    │   ├── ui/                            # shadcn/ui primitives
    │   ├── layout/                        # Header, Footer, StickyCallBar
    │   ├── sections/                      # Hero, TrustStrip, ServicesGrid, HowItWorks, PricingTiles, AreasMap, ReviewsCarousel, OwnerIntro, FAQ, FinalCTA, EmergencyBanner
    │   ├── booking/                       # MultiStepForm + step components
    │   └── icons/                         # service icons (lucide-react wrappers)
    ├── data/                              # services.ts, areas.ts, faqs.ts, pricing.ts, reviews.ts
    ├── lib/                               # schema.ts (schema-dts wrappers), seo.ts (metadata helpers), utils.ts, gbp.ts (Places API), analytics.ts
    ├── hooks/                             # useStickyCTA, useFormStep
    ├── types/                             # global types
    └── pages.txt                          # for frontend-critic
```

Add `clients/alltimeplumbers` row to `clients/INDEX.md` Active Clients table.

---

## 14. Verification (end-to-end)

### Install + build + lint
```bash
cd "clients/alltimeplumbers/website"
npm install                                  # or bun install
npm run lint                                 # eslint-config-next clean
npx tsc --noEmit                             # zero TS errors
npm run build                                 # next build → .next/
npm run start                                # localhost:3000 (production server)
```

### Dev server
```bash
npm run dev                                   # localhost:3000
```
Manual smoke test on all 11 Phase-1 routes at 375 / 768 / 1440 viewports. Test both `dev` and `start` (production) — some Next features behave differently between them (e.g. ISR, image optimization).

### Quality gates
```bash
./skills/frontend-critic/run.sh alltimeplumbers http://localhost:3000
# Asserts 90+ score across performance, a11y, tap targets, SEO, BP.

# Per-route Lighthouse on production build
npx lighthouse http://localhost:3000 --preset=desktop --output=json --output-path=./reports/lh-home-desktop.json
npx lighthouse http://localhost:3000 --output=json --output-path=./reports/lh-home-mobile.json
```

### SEO validation (mandatory before deploy)
- **Sitemap:** open `http://localhost:3000/sitemap.xml` — must list all 11 routes with `lastmod`, `changefreq`, `priority`.
- **robots.txt:** open `http://localhost:3000/robots.txt` — must reference sitemap, allow all, disallow `/api/`.
- **OG images:** open `http://localhost:3000/opengraph-image` and per-route equivalents — must render 1200×630 brand-correct images.
- **Per-route metadata:** view-source on each route — confirm unique `<title>`, `<meta description>`, `<link rel="canonical">`, `<meta property="og:*">`, `<meta name="twitter:*">`.
- **JSON-LD:** view-source — confirm `<script type="application/ld+json">` blocks render valid `Plumber`, `WebSite`, `Service`, `FAQPage`, `BreadcrumbList`, `AggregateRating` (when reviewCount ≥ 15) entities.
- **Google Rich Results Test:** Run on home + 1 service hub + 1 city page + about. **All must validate clean.**
- **Schema.org Validator:** same routes. Zero errors, warnings acceptable.

### Booking flow E2E
- Playwright spec: complete a 5-step booking with 2 photos uploaded, expect Server Action payload containing all 5 step data.
- Negative path: enter ZIP outside service area in step 3, expect inline validation block + suggested call CTA.

### Sticky CTA behavior
- Playwright at iPhone-SE viewport: scroll 250px, assert sticky bar visible. Navigate to `/book`, assert sticky bar hidden. Tap `Call now`, assert `tel:+17602016461` href fired.

### Schema + a11y on real device
- Live preview URL on actual iPhone — verify font rendering, tap targets, 1-handed reachability, screen-reader announcements through booking flow.

### Domain handoff
- Vercel project bound to `alltimeplumbers.com`. DNS via Cloudflare — `A` or `CNAME` to `cname.vercel-dns.com`. SSL auto-issued by Vercel. Existing WP origin remains accessible at a backup subdomain (e.g. `legacy.alltimeplumbers.com`) until Pete signs off on go-live.

### Pre-launch human gate
- Pete reviews live preview URL. License # spelling, phone number, hours, service-area list, pricing-tile language all confirmed verbatim. Captured in `state/pete-signoff-{date}.md`.
- Privacy policy + T&C content unchanged from existing (only restyled).

---

## 15. Risks + mitigations

| Risk | Mitigation |
|---|---|
| Helpful Content Update demotes thin city pages | Cap at 5 hand-written city pages in Phase 1. Service×city combos deferred. |
| Pete won't ship photos → Phase 2 stalls | Pre-write `PHOTO-SHOT-LIST.md` + SMS reminder cadence into Phase 1 acceptance criteria. Phase 1 ships fine on stock-w/-grade. |
| Pricing transparency pushback from Pete | Frame tiles as "Starts at" with disclose-fees footnote. If Pete vetoes, fall back to "Service call $89 + transparent quote on-site" — still beats "Free Estimate" generic. |
| Booking webhook target undefined (no GHL yet) | Phase 1 booking submits to a Cloudflare Worker that emails Pete + writes to a CF KV log. Wire to GHL/n8n in Phase 2. |
| Retell widget budget concerns | Phase 2 only. Web chat flat-rate, scoped to emergency triage 30s-max conversations. |
| Frontend-critic scores < 90 on first pass | Iteration budget 3 attempts per CLAUDE.md auto-rule §3. If still failing, surface specific blockers to user before launch — do not ship a sub-90 site. |
| Stock photography reads cheap | Apply unified color grade preset across all imagery; never use clearly-staged plumber stock. Use abstract pipe/water textures over human figures wherever possible. |
| HCU triggers on aggressive blog seeding in Phase 2 | Use `blog-onboard` skill + content quality gate; cap at 3 posts in Phase 2; never auto-generate. |
| Antigravity's prompts get long during execution | This plan is the primary brief; Antigravity references it directly via filesystem read instead of being prompted with full context each turn. |

---

## 16. What's explicitly out of scope (Phase 1)

- Voice agent / Retell phone (deferred to Phase 2 + needs separate retell-agent-builder skill engagement)
- Full Phase-2 blog (only 1 placeholder post in Phase 1)
- Service × city programmatic combos (deferred per §6 cap)
- Membership / club program ("Plumber's Advantage Plan") — needs Pete's pricing input first
- Financing UI (GreenSky / Synchrony) — needs Pete's contract info first
- Multi-language — site is English only
- E-commerce (parts catalog) — not in business model
- Customer login / account portal — not in business model

These items are documented for Phase 3 backlog after Phase 2 close.

---

## 17. Acceptance criteria (Phase 1 launch)

Hard gates — every box ticked before public DNS cutover:

- [ ] `next build` succeeds with zero TS / ESLint errors
- [ ] All 11 Phase-1 routes render at 375 / 768 / 1440 viewports without overflow, layout break, or console error
- [ ] frontend-critic score ≥ 90/100
- [ ] **Lighthouse Mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100** (non-negotiable)
- [ ] axe-core: zero violations of any impact level on every Phase-1 route
- [ ] **All §9.11 SEO QA checklist items ticked**
- [ ] Schema validates clean in Google Rich Results Test for `Plumber`, `WebSite`, `Service`, `FAQPage`, `BreadcrumbList`, and `AggregateRating` (when reviewCount ≥ 15)
- [ ] `app/sitemap.ts` produces valid XML with all 11+ routes; `app/robots.ts` produces valid robots.txt referencing the sitemap
- [ ] OG image renders at `/opengraph-image` (1200×630) + per-route overrides
- [ ] Multi-step booking submits successfully via Server Action, photos compressed client-side, validation blocks ZIP outside service area
- [ ] Sticky bottom CTA visible at <768px after 200px scroll, hidden on `/book`, `tel:` link fires
- [ ] License #1134776 visible in header trust strip, hero subline, footer, JSON-LD schema
- [ ] Phone number `(760) 201-6461` matches verbatim across header, hero, footer, sticky bar, schema, every CTA
- [ ] All copy passes MK content-quality gate (zero banned phrases)
- [ ] No AI-generated human figures present anywhere
- [ ] Map embed on `/contact` resolves to real GBP location (replaces broken `about:invalid` link from existing site)
- [ ] Pete signs off on copy, pricing tiles, hours, license, service-area list — written confirmation captured in `state/pete-signoff-{date}.md`
- [ ] Vercel project bound to `alltimeplumbers.com`; DNS via Cloudflare; legacy WP available at backup subdomain for 30 days post-cutover
- [ ] Domain verified in Google Search Console + Bing Webmaster Tools; sitemap submitted; first crawl confirmed within 48h
- [ ] GA4 tracking confirmed in real-time view; `phone_click`, `book_start`, `book_complete` events firing
- [ ] Entry added to `clients/INDEX.md` Active Clients table
- [ ] `CLIENT.md` populated

---

## 18. One-line summary for Antigravity

**Build a Next.js 16 (App Router) + React 19 + Tailwind v4 + shadcn/ui premium plumbing site at `clients/alltimeplumbers/website/`, mirroring `clients/ideal-energy/` patterns, with Pete-first hand-written copy, full-stack SEO via Next file conventions (sitemap.ts, robots.ts, opengraph-image.tsx, per-route Metadata API + JSON-LD via `schema-dts`), multi-step booking + photo upload through Server Actions, sticky mobile call bar, transparent pricing tiles, and Vercel deploy with DNS through Cloudflare — passing frontend-critic 90+ AND Lighthouse Mobile SEO = 100 before launch.**

---

## 19. Pre-Antigravity execution checklist (THIS conversation)

Tasks Milan/Claude completes BEFORE handing off to Antigravity. Antigravity then picks up at §4 (code scaffold).

- [x] Folder structure created: `clients/alltimeplumbers/{website,assets/source,assets/photos,assets/icons,documents,screenshots/competitors,state,reports}` ✓ done
- [ ] `clients/alltimeplumbers/CLIENT.md` written (mirror sunraise template, populated with All Time Plumbers facts from §2)
- [ ] `clients/INDEX.md` updated — add row to Active Clients
- [ ] `clients/alltimeplumbers/documents/PHOTO-SHOT-LIST.md` — 12-shot iPhone brief for Pete (Phase 2)
- [ ] `clients/alltimeplumbers/screenshots/capture.mjs` — Playwright capture script
- [ ] Run capture.mjs → produces `*-{375,768,1440}.png` for all 11 routes
- [ ] `clients/alltimeplumbers/assets/source/download.sh` — bulk image download from `wp-content/uploads/`
- [ ] Run download.sh → all images in `assets/source/`
- [ ] Pull GBP review snapshot via Firecrawl → `state/gbp-snapshot.json`
- [ ] Capture 6 competitor homepages via Firecrawl screenshot → `screenshots/competitors/`

After all boxes ticked, this conversation ends and Antigravity is invoked with this plan as its primary brief.
