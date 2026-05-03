# All Time Plumbers, Inc. — Client Profile

## Quick Reference

| Field | Value |
|-------|-------|
| **Company** | All Time Plumbers, Inc. |
| **Industry** | Plumbing services (residential + commercial) |
| **Owner** | Pete (last name TBD) |
| **License** | CSLB Lic #1134776 |
| **Phone** | (760) 201-6461 |
| **Address** | San Diego, CA 92127 |
| **Hours** | TBD (currently graphic-only on existing footer) |
| **GBP** | https://maps.app.goo.gl/27B8SeJbJJDSWqRv6 |
| **Existing site** | alltimeplumbers.com (WordPress 6.9.4 + AIOSEO + Bootstrap) |
| **Established** | 2018 |
| **Status** | Active — Phase 1 redesign in progress |
| **Engagement** | Premium website redesign (MonteKristo standard) |

---

## What All Time Plumbers Does

Owner-operated San Diego plumbing company serving residential homeowners, real-estate professionals, and commercial property managers across San Diego County. Specialty mix: emergency plumbing, water heater install/repair (tank + tankless), drain cleaning, leak detection (incl. slab leaks), repipe, sewer line + camera inspection, gas line, backflow prevention, real-estate transactional inspections.

Pete runs the company personally — every job has his accountability. The brand equity sits in three places: license number, owner-personal voice, and 8 years of hands-on local experience.

### Service area (per existing site copy)
North County focus: Pacific Beach, Downtown San Diego, near-Balboa Park, plus Pete's own ZIP 92127 (Rancho Bernardo / 4S Ranch corridor). Phase-1 redesign focuses landing pages on 5 cities: Rancho Bernardo, Poway, 4S Ranch, Carmel Mountain, Escondido.

---

## Current site audit (2026-05-03)

| Symptom | Impact |
|---|---|
| One (1) services page — every service jammed onto `/plumbing-services-in-san-diego-ca` | SEO disaster — can't rank for individual service intents |
| One (1) testimonial total: "Bita Hoffman, 2026-01-10" | No social proof at scale; Google reviews exist on GBP but never surfaced |
| Empty `/gallery` (only social icons) | Zero before/after, zero project shots |
| One (1) blog post total — `/2022/12/welcome-to-our-blog` from Dec 2022 | Topical authority signal is dead |
| No service-area pages | Local SEO surface absent |
| Generic AI-tinged copy | Trust score collapses on read; visible AI-tells block conversion |
| No multi-step booking, no chat, no schema beyond AIOSEO defaults, no transparent pricing | Stack of missing 2026-standard features |
| `/contact` Google Maps embed broken (`about:invalid#zClosurez`) | Visible bug |

Visual quality 1-10: **3.5**. Brand bones (red+navy) survive; execution is 2014-trade-template flat.

---

## Engagement (Phase 1 redesign)

**Plan brief:** [/home/milan/.claude/plans/elegant-soaring-tiger.md](/home/milan/.claude/plans/elegant-soaring-tiger.md)

**Tech stack:** Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4 + shadcn/ui + lucide-react + next/font. Mirrors `clients/ideal-energy/` pattern. Deploy on Vercel (DNS via Cloudflare). Full Next file-convention SEO stack (sitemap.ts, robots.ts, opengraph-image.tsx, per-route Metadata API, JSON-LD via `schema-dts`).

**Information architecture:** 11 pages Phase 1 (5 core: Home, About, Reviews, Contact, Book · 5 service hubs: Drain, Water Heater, Leak, Repipe, Emergency · 1 city anchor: `/areas/san-diego` covering 5 listed cities). Phase 2 expands to 18 pages with individual city pages and 3 seeded blog posts.

**MK 10-feature mapping:** 6 keep / 4 drop. Keep: review-gating (soft), 5-step booking with photo upload, scoped Retell chatbot (Phase 2), Plumber JSON-LD schema, sticky mobile CTA bar, transparent pricing tiles. Drop: partner marquee, before/after gallery (deferred), AI-generated team photos, generic membership program.

**Brand evolution:** Keep red `#BF2235` + navy (deepened to `#1B2E55`). Drop Oswald/Montserrat → Bricolage Grotesque (display) + Inter (body). Cream `#F7F3EC` background, expanded palette tokens (success, warn, deep variants).

**Quality gate:** frontend-critic 90+/100 (30 perf · 25 a11y · 20 tap targets · 15 SEO · 10 BP). Lighthouse Mobile Perf ≥ 90, Acc ≥ 95, BP ≥ 95, SEO = 100. Zero axe-core violations. Schema validates clean in Google Rich Results Test.

**Phasing:**
- Phase 1 (5-10 working days) — MVP launch with 11 pages, booking, schema, sticky CTA, stock-w/-grade imagery, CF Pages deploy
- Phase 2 (14-21 working days post-Phase 1) — real photo swap (Pete's iPhone shoot), Retell chat widget, 4 individual city pages, 3 blog posts, before/after gallery, GHL review-collection automation

**Execution model:** Plan + assets prepared in this conversation. Build executed by Antigravity (autonomous UI agent) referencing the plan file directly. Per Antigravity Protocol §2 (CLAUDE.md), code review and edits happen natively without `codex exec` delegation.

---

## Critical reference paths

| What | Path |
|---|---|
| Plan brief | `/home/milan/.claude/plans/elegant-soaring-tiger.md` |
| Tech-stack reference | `/home/milan/projects/MonteKristo Devs/clients/ideal-energy/package.json` |
| Next config reference | `/home/milan/projects/MonteKristo Devs/clients/ideal-energy/next.config.mjs` |
| Alternate Next pattern | `/home/milan/projects/MonteKristo Devs/clients/sds/next-website/next.config.ts` |
| Retell widget embed pattern (Phase 2) | `/home/milan/projects/MonteKristo Devs/clients/gummygurl/index.html` |
| Captured screenshots | `clients/alltimeplumbers/screenshots/*.png` |
| Source images (downloaded) | `clients/alltimeplumbers/assets/source/` |
| GBP snapshot | `clients/alltimeplumbers/state/gbp-snapshot.json` |
| Photo shot list (Phase 2) | `clients/alltimeplumbers/documents/PHOTO-SHOT-LIST.md` |
| Frontend-critic skill | `/home/milan/projects/MonteKristo Devs/skills/frontend-critic/SKILL.md` |
| Content quality gate | `~/Documents/MonteKristo Vault/skills/content-quality.md` |

---

## Open questions for Pete

These need answers before Phase 1 launch (capture in `state/pete-signoff-{date}.md`):

1. Pete's last name (for About + bio + schema `Person` entity)
2. Verified hours of operation (homepage shows graphic only; need real hours)
3. Pricing tiles confirmation — is the `$89 service call · $250-$450 drain clear · $1,800-$3,800 water heater install · $295 slab-leak detection · $7,500-$15,000 repipe` range accurate for his market?
4. After-hours / emergency surcharge policy — what time does it kick in, what's the surcharge?
5. Insurance / bonding details (bond #, insurance carrier) — for trust strip
6. Email address for booking-flow webhook (Phase 1 sends to email + CF KV log)
7. GBP rating + count — Phase 1 build pulls live, but confirm we have permission to surface it
8. Service-area validation — confirm 5 ZIPs (Rancho Bernardo 92127/92128, Poway 92064, 4S Ranch 92127, Carmel Mountain 92128, Escondido 92025)
9. Photo shoot — willing to do 12-shot iPhone session per `documents/PHOTO-SHOT-LIST.md`?
10. Domain — keep `alltimeplumbers.com`, use Cloudflare DNS, legacy WP available at `legacy.alltimeplumbers.com` for 30-day cutover window?
