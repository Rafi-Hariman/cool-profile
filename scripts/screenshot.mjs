/* Dev-only screenshot harness (not part of the site). Run: node scripts/screenshot.mjs */
import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL || "http://localhost:3100";
const OUT = "scripts/shots";
mkdirSync(OUT, { recursive: true });

const exe =
  "/Users/bsi-2-2200019/Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-arm64/chrome-headless-shell";
const browser = await chromium.launch({ executablePath: exe, args: ["--no-sandbox"] });

const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

const errors = [];
page.on("console", (m) => {
  if (m.type() === "error") errors.push(`console.error: ${m.text()}`);
});
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));

await page.goto(BASE, { waitUntil: "networkidle" });
await page.waitForTimeout(2200); // let a few constellation frames paint

// Move the mouse across the hero so the shockwave/repulsion path actually runs.
await page.mouse.move(200, 450);
await page.mouse.move(700, 300, { steps: 12 });
await page.waitForTimeout(900);
await page.screenshot({ path: `${OUT}/hero.png` });

// Capture each section.
const sections = ["work", "about", "stack", "contact"];
for (const id of sections) {
  await page.evaluate((sel) => document.getElementById(sel)?.scrollIntoView(), id);
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${OUT}/${id}.png` });
}

// Full-page capture.
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);
await page.screenshot({ path: `${OUT}/full.png`, fullPage: true });

console.log("ERRORS:", errors.length ? JSON.stringify(errors, null, 2) : "none");
console.log("done");
await browser.close();
