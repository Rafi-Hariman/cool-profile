/* Dev-only screenshot harness for /new-page (scratch route). Run: node scripts/shot-new-page.mjs */
import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL || "http://localhost:3100";
const OUT = "scripts/shots";
mkdirSync(OUT, { recursive: true });

const exe =
  "/Users/bsi-2-2200019/Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-arm64/chrome-headless-shell";
const browser = await chromium.launch({ executablePath: exe, args: ["--no-sandbox"] });

const errors = [];

for (const [name, width, height] of [
  ["new-page-desktop", 1440, 1000],
  ["new-page-tablet", 900, 1000],
  ["new-page-mobile", 390, 844],
]) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`[${name}] console.error: ${m.text()}`);
  });
  page.on("pageerror", (e) => errors.push(`[${name}] pageerror: ${e.message}`));

  await page.goto(`${BASE}/new-page`, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });

  if (name === "new-page-desktop") {
    // Exercise the tabs so the analytics panel actually renders.
    await page.getByRole("tab", { name: "Analytics" }).click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${OUT}/new-page-tab-analytics.png` });
    await page.getByRole("tab", { name: "Overview" }).click();
    await page.waitForTimeout(300);
  }

  await page.close();
}

await browser.close();
console.log(errors.length ? errors.join("\n") : "NO_CONSOLE_ERRORS");
