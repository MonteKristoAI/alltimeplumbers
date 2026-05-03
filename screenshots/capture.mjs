#!/usr/bin/env node
/**
 * Playwright capture script — alltimeplumbers.com
 *
 * Captures full-page PNG screenshots of every URL in the existing sitemap
 * at three viewports (375 / 768 / 1440). Reference material only —
 * never published.
 *
 * Run:
 *   cd clients/alltimeplumbers/screenshots
 *   npm install playwright
 *   npx playwright install chromium
 *   node capture.mjs
 *
 * Output:
 *   clients/alltimeplumbers/screenshots/{slug}-{viewport}.png
 */

import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// All known URLs from Firecrawl sitemap pull
const URLS = [
  { path: '/',                                  slug: 'home' },
  { path: '/plumbing-services-in-san-diego-ca', slug: 'services' },
  { path: '/contact-us',                        slug: 'contact' },
  { path: '/reviews',                           slug: 'reviews' },
  { path: '/feedback',                          slug: 'feedback' },
  { path: '/gallery',                           slug: 'gallery' },
  { path: '/sitemap',                           slug: 'sitemap' },
  { path: '/terms-and-conditions',              slug: 'terms' },
  { path: '/privacy-policy',                    slug: 'privacy' },
  { path: '/2022/12/welcome-to-our-blog',       slug: 'blog-post-1' },
  { path: '/category/general',                  slug: 'category-general' },
];

const VIEWPORTS = [
  { name: '375',  width: 375,  height: 812,  isMobile: true,  deviceScaleFactor: 2 },
  { name: '768',  width: 768,  height: 1024, isMobile: true,  deviceScaleFactor: 2 },
  { name: '1440', width: 1440, height: 900,  isMobile: false, deviceScaleFactor: 1 },
];

const BASE = 'https://alltimeplumbers.com';
const OUT_DIR = resolve(__dirname);

async function captureOne(browser, url, viewport, slug) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: viewport.deviceScaleFactor,
    isMobile: viewport.isMobile,
    userAgent: viewport.isMobile
      ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1'
      : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15',
  });
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45_000 });
    // settle: scroll once to bottom to trigger lazy-load, scroll back
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1200);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);

    const fileName = `${slug}-${viewport.name}.png`;
    const outPath = resolve(OUT_DIR, fileName);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`  ✓ ${fileName}`);
  } catch (err) {
    console.log(`  ✗ ${slug} @ ${viewport.name} — ${err.message}`);
  } finally {
    await context.close();
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  console.log(`Launching Chromium…`);
  const browser = await chromium.launch({ headless: true });

  try {
    for (const { path, slug } of URLS) {
      const url = `${BASE}${path}`;
      console.log(`\n[${slug}] ${url}`);
      for (const vp of VIEWPORTS) {
        await captureOne(browser, url, vp, slug);
      }
    }
  } finally {
    await browser.close();
  }

  console.log(`\nDone. Output → ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
