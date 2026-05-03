# Antigravity Handoff Brief — All Time Plumbers

**Status:** Asset gathering done. Code build is yours. Plan + assets are below.
**Plan file (read first):** [PLAN.md](PLAN.md) (also at `/home/milan/.claude/plans/elegant-soaring-tiger.md`)
**Client profile:** [CLIENT.md](CLIENT.md)
**Drafted:** 2026-05-04

---

## What's prepared

### 1. Plan brief (~5,000 words, 19 sections)
[PLAN.md](PLAN.md) — context, IA, brand direction, MK 10-feature mapping, page-by-page wireframes, **expanded SEO section §9 (11 sub-sections)**, content strategy, quality gates, phasing, critical paths, acceptance criteria.

### 2. Folder structure
```
clients/alltimeplumbers/
├── PLAN.md                            ← spec (read first)
├── HANDOFF.md                         ← this file (orientation)
├── CLIENT.md                          ← profile + 10 questions for Pete
├── assets/
│   ├── source/
│   │   ├── download.sh                ← bash version (curl, has WAF issue — see below)
│   │   ├── download.mjs               ← Playwright request version (with Referer)
│   │   └── download-via-render.mjs    ← Playwright page-render interception
│   ├── photos/                        ← (empty; populate during build)
│   └── icons/                         ← (empty; redraw lucide-style during build)
├── documents/
│   └── PHOTO-SHOT-LIST.md             ← 12-shot iPhone brief for Pete (Phase 2)
├── screenshots/
│   ├── home-1440.png, home-375.png    ← real captures via Firecrawl
│   ├── services-1440.png, services-375.png
│   ├── contact-1440.png, reviews-1440.png
│   ├── gallery-1440.png, feedback-1440.png
│   ├── capture.mjs                    ← Playwright capture (currently blocked by WAF)
│   ├── download-from-firecrawl.mjs    ← pulls Firecrawl Storage URLs
│   ├── _urls.txt                      ← Firecrawl Storage URLs (expire ~2026-05-10)
│   └── competitors/
│       ├── mr-rooter.png, roto-rooter.png, benjamin-franklin.png
│       ├── mike-diamond.png, john-the-plumber.png, plumblineservices.png
│       └── _urls.txt
└── state/
    └── gbp-snapshot.json              ← Pete's GBP — partial (see open items)
```

### 3. Source-of-truth facts (extracted via Firecrawl 2026-05-03)

| Field | Value |
|---|---|
| Company | All Time Plumbers, Inc. |
| Owner | **Pete** (last name TBD — ask before launch) |
| License | **CSLB Lic #1134776** |
| Phone | **(760) 201-6461** (`tel:+17602016461`) |
| Address | San Diego, CA 92127 |
| Lat/Lng | 32.9962024, -117.1358175 |
| GBP | https://maps.app.goo.gl/27B8SeJbJJDSWqRv6 |
| GBP star rating | 5.0 (placeholder — 0 reviews returned by unauthenticated scrape; see open items) |
| Existing site | alltimeplumbers.com (WP 6.9.4 + AIOSEO 4.9.3 + Bootstrap) |
| Established | 2018 |
| Existing brand colors | `#BF2235` red · `#213B6E` navy · `#D4D4D4` gray |
| Existing fonts | Oswald (heading) · Montserrat (body) |
| One on-site review | "Pete did an amazing job…" — Bita Hoffman, 2026-01-10 |

### 4. Tech stack (LOCKED — Next.js 16, NOT Vite)

- **Next.js 16 (App Router)** + **React 19** + **TypeScript** + **Tailwind v4** + **shadcn/ui (Radix)** + **lucide-react** + **next/font**
- Reference: `/home/milan/projects/MonteKristo Devs/clients/ideal-energy/` (mirror this exactly)
- Deploy: **Vercel** (DNS proxied through Cloudflare, NOT Cloudflare Pages — adapter pain)
- Why: SEO is the #1 KPI for this build. PLAN §4 + §9 detail. Next 16 file conventions (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, Metadata API, `next/image`, `next/font`) are non-negotiable SEO levers.

---

## Open items (must resolve before / during build)

### Critical — blockers for launch

1. **Pete's last name** — needed for About + bio + `Person` schema. Open question #1 in CLIENT.md.
2. **Pricing tile confirmation** — the `$89 / $250-450 / $1,800-3,800 / $295 / $7,500-15,000` ranges need Pete's sign-off. Plan §8 row 10.
3. **Hours of operation** — existing site shows graphic only; GBP says "24h" but copy implies emergency-only after-hours. Confirm before launch.
4. **GBP review count + recent review text** — Firecrawl scrape returned 0 reviews because Maps SPA hides counts behind consent wall. Switch to **Google Places API** for the live build:
   - Set `GOOGLE_PLACES_API_KEY` in **Vercel env** (Production + Preview + Development scopes)
   - Build-time fetch via `https://places.googleapis.com/v1/places/{place_id}` with field mask `displayName,rating,userRatingCount,reviews`
   - Place ID likely `ChIJJ9bqyKy9qEYRoUbsOpnl5VQ` (derived from URL — verify in GBP dashboard)
   - Use Next ISR (`revalidate: 604800`) on `/reviews` so each weekly rebuild refreshes data without redeploy
   - **If review count < 15 — do not publish count or AggregateRating schema** (engineered-trust signal). Show only star + "Owner-operated since 2018" until 15+.
5. **Booking webhook target** — no GHL set up for Pete yet. Phase 1 booking uses **Next Server Actions** that email Pete + write to a CF KV log (or Vercel KV). Wire to GHL/n8n in Phase 2 only. Need Pete's email before launch.
6. **Image bulk download** — see "Cloudflare WAF blocker" below. You will need to run download script from a fresh, non-banned IP.

### Cloudflare WAF blocker — important context for image work

> **Pete's site has a Cloudflare WAF rule that:**
> 1. Returns **HTTP 403** on direct requests to `/wp-content/uploads/*` (hot-link protection).
> 2. **Bans the entire ASN 24940 (Hetzner)** — Cloudflare Error 1005 — which is the ASN this prep environment runs from.
>
> Practical implications for Antigravity:
> - **Run image download (`assets/source/download.mjs`)** from your shell (not banned IP), with the Referer header set to `https://alltimeplumbers.com/` per the script.
> - **If still 403** — switch to Firecrawl scrape on each image URL (Firecrawl rotating residential proxies bypass the WAF). Inventory of 20 URLs is in `assets/source/download.sh` and `assets/source/download.mjs`.
> - **If still 403 + you must keep the existing logo+favicon** — the only ones we strictly need from the source are `ATPLogo.png` and `ATPFavIcon.png`. Everything else is being redrawn lucide-style or replaced with stock-w/-grade per plan §10. Worst case: ask Pete for the original PNG via email.

### Code-build open items

7. **Service icons** — redraw lucide-react: `Droplet` (leak), `Flame` (water heater), `Wrench` (repair), `Wind` (drain), `AlarmClock` (emergency). Stroke 1.5px, color `navy.ink`, hover `primary.DEFAULT`. Plan §10.
8. **Stock photography (Phase 1)** — 8-10 Unsplash plumbing shots, unified warm/navy color grade, **served via `next/image`** (auto AVIF + WebP). Strictly framed as "what we do" tile imagery — never as "here's our team." Plan §10.
9. **Pete's real photos (Phase 2)** — `documents/PHOTO-SHOT-LIST.md` is the brief. Phase 1 ships with stock; swap 1-for-1 within 30 days.
10. **Custom domain bind** — Vercel project bound to `alltimeplumbers.com`, DNS records in Cloudflare pointing to `cname.vercel-dns.com`. Use the `domain-setup` skill for the Cloudflare side. Route legacy WP origin to `legacy.alltimeplumbers.com` for 30-day cutover window.

---

## Done before this handoff

- [x] Folder structure created
- [x] CLIENT.md written
- [x] `clients/INDEX.md` updated — All Time Plumbers row added
- [x] `documents/PHOTO-SHOT-LIST.md` — 12-shot iPhone brief for Pete
- [x] `screenshots/capture.mjs` — Playwright capture script
- [x] `assets/source/download.{sh,mjs}` — image download scripts (3 strategies)
- [x] 8 ATP screenshots (Firecrawl): home/services in 1440 + 375; contact/reviews/gallery/feedback in 1440
- [x] 6 competitor screenshots: Mr Rooter, Roto-Rooter, Benjamin Franklin, Mike Diamond, John The Plumber, Plumbline Services
- [x] `state/gbp-snapshot.json` — partial (see open item #4)

---

## Build sequence Antigravity should follow

1. **Read PLAN.md end-to-end.** The plan is the spec — this file just orients you to assets. Pay special attention to §4 (tech stack), §5 (brand), §7 (page wireframes), and §9 (SEO — the most expanded section, your single largest set of acceptance criteria).
2. **Read CLIENT.md** for the 10 open questions to gather from Pete.
3. **Run image download** (`node assets/source/download.mjs`) from your shell. If WAF still blocks, fall back to Firecrawl scrape on each URL. Worst case ship Phase 1 with placeholder logo + redrawn icons.
4. **Scaffold `website/` mirroring `clients/ideal-energy/`** — `package.json` (Next 16, React 19, Tailwind v4), `next.config.ts` per PLAN §4, `postcss.config.mjs`, `tsconfig.json` (strict, paths `@/*`), `eslint.config.mjs` (extends `eslint-config-next`), `components.json`. Tailwind v4 CSS-first config in `app/globals.css` with `@theme` block per PLAN §4.
5. **Wire `next/font`** for Bricolage Grotesque (display) + Inter (body) in `app/layout.tsx`. CSS variables `--font-bricolage`, `--font-inter`. `display: 'swap'` mandatory.
6. **Wire root `app/layout.tsx`** with full Metadata API (per PLAN §9.3), JSON-LD `Plumber` + `WebSite` (via `schema-dts`), GA4 via `next/third-parties/google`, Search Console + Bing verification meta tags, viewport export, theme color.
7. **Build the 11 Phase-1 routes** as `app/{route}/page.tsx` per PLAN §7 wireframes. Each `page.tsx` exports `metadata` (per PLAN §9.3) and renders JSON-LD entities (Service, FAQPage, BreadcrumbList — see PLAN §9.2).
8. **Build SEO infrastructure files**: `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `app/twitter-image.tsx`, `app/icon.tsx`, `app/apple-icon.tsx`, `app/manifest.ts`. Per PLAN §9.1.
9. **Wire booking flow** as Server Actions: `app/book/page.tsx` (host) + `app/book/actions.ts` (handle submit). 5 steps with photo upload, ZIP validation in step 3, react-hook-form + zod, framer-motion step transitions.
10. **Wire sticky CTA bar** as a client component using CSS-only `transform` transitions (no JS scroll listener — use IntersectionObserver via `useStickyCTA` hook). Hidden on `/book` route via `usePathname()`.
11. **Run all SEO QA checklist items in PLAN §9.11** — every box ticked before any deploy.
12. **Run frontend-critic** per plan §11 — must score 90+/100. Iterate up to 3× per CLAUDE.md auto-rule.
13. **Run Lighthouse Mobile** on production build — must score Perf ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, **SEO = 100** (non-negotiable).
14. **Validate JSON-LD** for every route in Google Rich Results Test + Schema.org Validator. Block deploy on errors.
15. **Pre-launch human gate**: Pete signs off. Capture in `state/pete-signoff-{date}.md`.
16. **Vercel deploy** — `vercel --prod` from the `website/` directory (or git push to a branch wired to Vercel). Bind custom domain. Cloudflare DNS → `cname.vercel-dns.com`.
17. **Submit sitemap** to Google Search Console + Bing Webmaster Tools within 24h of cutover. Verify domain ownership via meta tag in root layout.

Done = PLAN §17 acceptance criteria all ticked.

---

## Hard rules (do not violate)

- **Zero AI tells.** Every paragraph passes `~/Documents/MonteKristo Vault/skills/content-quality.md`. No "at the heart of", no "we don't just X, we Y", no "locally owned and operated" without an immediately printed license number.
- **No AI-generated humans** anywhere. Stock-w/-grade Phase 1, real Pete photos Phase 2.
- **Lighthouse SEO must = 100** on mobile. Not 99. 100. Iterate until it does.
- **frontend-critic ≥ 90** on mobile. Iterate up to 3× per CLAUDE.md auto-rule.
- **Always `next/link` + `next/image` + `next/font`.** Never raw `<a>`, `<img>`, `@import url(fonts.googleapis.com)`.
- **Server Components by default.** Add `'use client'` only where genuinely needed (sticky CTA, booking form, review carousel).
- **No `output: 'export'`** — we want ISR on `/reviews`. Keep dynamic rendering capability.
- **Auto-log this session** to `~/Documents/MonteKristo Vault/daily/2026-MM-DD.md` and `wiki-log.md` per the Antigravity Iron Law.
