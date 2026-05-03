#!/usr/bin/env node
/**
 * Image asset downloader (Playwright-based, sandbox-friendly).
 * curl/wget don't work in this environment; Chromium request context does.
 */

import { chromium } from 'playwright';
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname);
const BASE = 'https://alltimeplumbers.com/wp-content/uploads';

const FILES = [
  { url: 'ATPLogo.png',                                 dir: 'logos' },
  { url: 'ATPLogoFooter-e1761595185929.png',            dir: 'logos' },
  { url: 'ATPFavIcon.png',                              dir: 'logos' },
  { url: 'White24-e1761595270917.png',                  dir: 'logos' },
  { url: 'phone-icon.png',                              dir: 'chrome' },
  { url: 'phone-icon-1.png',                            dir: 'chrome' },
  { url: 'map-pin.png',                                 dir: 'chrome' },
  { url: 'google-brand.png',                            dir: 'chrome' },
  { url: 'WaterHeaterIcon.png',                         dir: 'icons' },
  { url: 'GasIcon.png',                                 dir: 'icons' },
  { url: 'PlumbingIcon.png',                            dir: 'icons' },
  { url: 'New-Construction-Plumbing.png',               dir: 'illustrations' },
  { url: 'Realtor-and-Property-Management-Inspections.png', dir: 'illustrations' },
  { url: 'Sewer-Line-and-Camera-Inspections.png',       dir: 'illustrations' },
  { url: '2022/08/yelp-logo-icon.png',                  dir: 'social' },
  { url: '2022/08/yelp-logo-icon-150x150.png',          dir: 'social' },
  { url: '2022/08/facebook-icon-logo.png',              dir: 'social' },
  { url: '2022/08/facebook-icon-logo-150x150.png',      dir: 'social' },
  { url: '2022/08/google.png',                          dir: 'social' },
  { url: '2022/08/google-150x150.png',                  dir: 'social' },
];

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  // Pretend we're navigating from inside the site — defeats hotlink protection
  extraHTTPHeaders: {
    'Referer': 'https://alltimeplumbers.com/',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15',
  },
});
let ok = 0, fail = 0;

for (const f of FILES) {
  const url = `${BASE}/${f.url}`;
  const fname = basename(f.url);
  const outDir = resolve(OUT, f.dir);
  await mkdir(outDir, { recursive: true });
  const outPath = resolve(outDir, fname);

  process.stdout.write(`  ${f.dir.padEnd(14)} ${fname.padEnd(50)} `);
  try {
    const res = await ctx.request.get(url, { timeout: 30_000 });
    if (!res.ok()) {
      console.log(`HTTP ${res.status()}`);
      fail++;
      continue;
    }
    const buf = await res.body();
    if (buf.length < 100) {
      console.log(`TINY (${buf.length}b) — likely WAF`);
      fail++;
      continue;
    }
    await writeFile(outPath, buf);
    console.log(`OK ${(buf.length / 1024).toFixed(1)}kb`);
    ok++;
  } catch (err) {
    console.log(`ERR ${err.message}`);
    fail++;
  }
}

await browser.close();
console.log(`\nDownloaded: ${ok} ok, ${fail} failed`);
