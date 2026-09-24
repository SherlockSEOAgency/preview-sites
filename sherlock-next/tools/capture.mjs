// Capture a real, public client site for a proof frame.
// Usage (from this folder; needs Playwright, e.g. the render-gate install in mcp-audit-platform):
//   NODE_PATH=<path>/node_modules node tools/capture.mjs https://bovenyvo.be/ bovenyvo
// Writes src/static/assets/img/<name>-desktop-<YYYY-MM-DD>.jpg and <name>-mobile-<YYYY-MM-DD>.jpg.
// The capture date is part of the file name so every caption can state it. Nothing is edited or retouched.
// Optional crop heights keep a site's own floating widgets (review chips, chat bubbles) out of the frame:
//   CLIP_DESKTOP=820 CLIP_MOBILE=752 node tools/capture.mjs ...   (CSS px from the top of the first screen)
// A crop only removes the bottom of the first screen; it never alters what is shown.
import { createRequire } from 'node:module';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const [, , url, name] = process.argv;
if (!url || !name) { console.error('usage: capture.mjs <url> <name>'); process.exit(2); }
const day = new Date().toISOString().slice(0, 10);
const out = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'static', 'assets', 'img');
const shots = [
  { tag: 'desktop', viewport: { width: 1440, height: 900 }, dpr: 1.25, mobile: false },
  { tag: 'mobile', viewport: { width: 390, height: 844 }, dpr: 2, mobile: true },
];
const browser = await chromium.launch();
for (const s of shots) {
  const ctx = await browser.newContext({
    viewport: s.viewport, deviceScaleFactor: s.dpr, isMobile: s.mobile, hasTouch: s.mobile, locale: 'nl-BE',
    userAgent: s.mobile ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1' : undefined,
  });
  const page = await ctx.newPage();
  const res = await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  await page.evaluate(() => document.fonts && document.fonts.ready).catch(() => {});
  await page.waitForTimeout(3000);
  const file = resolve(out, `${name}-${s.tag}-${day}.jpg`);
  const clipH = Number(process.env[s.tag === 'desktop' ? 'CLIP_DESKTOP' : 'CLIP_MOBILE']) || 0;
  await page.screenshot({ path: file, type: 'jpeg', quality: 80, ...(clipH ? { clip: { x: 0, y: 0, width: s.viewport.width, height: clipH } } : {}) });
  console.log(`${s.tag}: HTTP ${res && res.status()} ${page.url()} -> ${file}`);
  await ctx.close();
}
await browser.close();
