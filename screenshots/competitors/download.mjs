#!/usr/bin/env node
/**
 * Download competitor reference screenshots from Firecrawl-hosted Google Storage URLs.
 * URLs expire ~7 days after capture, so this script must run within that window.
 * Source: ./_urls.txt (CSV: slug,url)
 */
import { chromium } from 'playwright';
import { writeFile, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const csv = await readFile(resolve(__dirname, '_urls.txt'), 'utf8');
const rows = csv.trim().split('\n').filter(Boolean).map(l => {
  const i = l.indexOf(',');
  return [l.slice(0, i), l.slice(i + 1)];
});

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext();
let ok = 0, fail = 0;

for (const [slug, url] of rows) {
  process.stdout.write(`  ${slug.padEnd(20)} `);
  try {
    const r = await ctx.request.get(url, { timeout: 60_000 });
    if (!r.ok()) { console.log(`HTTP ${r.status()}`); fail++; continue; }
    const buf = await r.body();
    await writeFile(resolve(__dirname, `${slug}.png`), buf);
    console.log(`OK ${(buf.length / 1024).toFixed(1)}kb`);
    ok++;
  } catch (e) {
    console.log(`ERR ${e.message}`);
    fail++;
  }
}

await browser.close();
console.log(`\n${ok} ok, ${fail} failed`);
