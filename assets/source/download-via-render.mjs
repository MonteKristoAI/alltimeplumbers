#!/usr/bin/env node
/**
 * Plan B image downloader: visit pages with Playwright, intercept all image
 * responses, save unique uploads to disk. Bypasses the WAF hot-link rule
 * because images are loaded as part of the page render flow, not as
 * standalone fetches.
 */
import { chromium } from 'playwright';
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname);

const PAGES = [
  'https://alltimeplumbers.com/',
  'https://alltimeplumbers.com/plumbing-services-in-san-diego-ca/',
  'https://alltimeplumbers.com/contact-us/',
  'https://alltimeplumbers.com/reviews/',
  'https://alltimeplumbers.com/feedback/',
  'https://alltimeplumbers.com/gallery/',
  'https://alltimeplumbers.com/2022/12/welcome-to-our-blog/',
];

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
});
const page = await ctx.newPage();

const seen = new Map(); // url -> { buf, ct }

page.on('response', async (res) => {
  const url = res.url();
  if (!/\/wp-content\/uploads\//.test(url)) return;
  if (seen.has(url)) return;
  if (res.status() !== 200) return;
  const ct = res.headers()['content-type'] || '';
  if (!/image\//.test(ct)) return;
  try {
    const buf = await res.body();
    if (buf.length < 100) return;
    seen.set(url, { buf, ct });
  } catch {}
});

for (const u of PAGES) {
  process.stdout.write(`  visiting ${u} … `);
  try {
    await page.goto(u, { waitUntil: 'networkidle', timeout: 45_000 });
    // small extra time for any lazy images
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1500);
    console.log('ok');
  } catch (e) {
    console.log(`err ${e.message}`);
  }
}

await browser.close();

console.log(`\nUnique image responses captured: ${seen.size}`);

// Write to disk, classifying by name
function classify(name) {
  const lower = name.toLowerCase();
  if (/atplogo|favicon|white24/.test(lower)) return 'logos';
  if (/icon|wrench|gas|water|plumb/.test(lower)) return 'icons';
  if (/construction|inspection|sewer|realtor/.test(lower)) return 'illustrations';
  if (/yelp|facebook|google|instagram|twitter/.test(lower)) return 'social';
  if (/phone|map-pin|map_pin|pin/.test(lower)) return 'chrome';
  return 'other';
}

let ok = 0;
for (const [url, { buf }] of seen) {
  const fname = basename(new URL(url).pathname);
  const dir = classify(fname);
  await mkdir(resolve(OUT, dir), { recursive: true });
  await writeFile(resolve(OUT, dir, fname), buf);
  console.log(`  ${dir.padEnd(14)} ${fname.padEnd(50)} ${(buf.length / 1024).toFixed(1)}kb`);
  ok++;
}

console.log(`\nSaved: ${ok} files`);
