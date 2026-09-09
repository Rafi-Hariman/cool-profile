/* Dev-only assertion harness. Run: node scripts/verify.mjs */
import { chromium } from "playwright-core";

const BASE = process.env.BASE_URL || "http://localhost:3100";
const exe =
  "/Users/bsi-2-2200019/Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-arm64/chrome-headless-shell";

const browser = await chromium.launch({ executablePath: exe, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const results = [];
const errors = [];
page.on("console", (m) => {
  if (m.type() === "error") errors.push(`console.error: ${m.text()}`);
});
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));

await page.goto(BASE, { waitUntil: "networkidle" });
await page.waitForTimeout(1800);

// 1. Overlay copy rendered?
const heroTitle = await page.textContent("section#top h1");
const heroEyebrow = await page.textContent("section#top p");
results.push(["hero title text", heroTitle]);
results.push(["hero subtitle", heroEyebrow]);

// 2. Canvas painted real pixels (nodes) — not a flat void?
const canvasStats = await page.evaluate(() => {
  const c = document.querySelector("section#top canvas");
  if (!c) return null;
  const ctx = c.getContext("2d");
  // full canvas bitmap (device-pixel = dpr, capped 2)
  const { width: cw, height: ch } = c;
  const img = ctx.getImageData(0, 0, cw, ch).data;
  let lit = 0;
  let total = cw * ch;
  const step = 4; // sample every 4th pixel
  for (let i = 0; i < img.length; i += 4 * step) {
    const r = img[i], g = img[i + 1], b = img[i + 2];
    // node white ~ (255,255,255); accent ~ (56,189,248); bg ~ (3,4,7)
    if (r + g + b > 60) lit++;
  }
  return { width: cw, height: ch, sampled: Math.floor(total / step), lit };
});
results.push(["canvas paint stats", JSON.stringify(canvasStats)]);

// 3. Background under canvas (isolation) is near-black
const bg = await page.evaluate(() =>
  getComputedStyle(document.querySelector("section#top")).backgroundColor
);
results.push(["hero background-color", bg]);

// 4. Nav + all sections present
for (const id of ["work", "about", "stack", "contact"]) {
  const n = await page.locator(`section#${id}`).count();
  results.push([`section#${id}`, n > 0 ? "present" : "MISSING"]);
}

// 5. Overflow check (no horizontal scroll)
const overflowX = await page.evaluate(
  () => document.documentElement.scrollWidth > document.documentElement.clientWidth
);
results.push(["horizontal overflow", overflowX ? "YES (bad)" : "none"]);

// 6. Contact CTA is a mailto link
const mailto = await page.locator('a[href^="mailto:"]').count();
results.push(["mailto links", mailto]);

console.log("--- ASSERTIONS ---");
for (const [k, v] of results) console.log(`  ${k}: ${v}`);
console.log("--- CONSOLE/PAGE ERRORS ---");
console.log(errors.length ? errors.join("\n") : "none");

await browser.close();
