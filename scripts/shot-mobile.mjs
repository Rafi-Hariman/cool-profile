/* Dev-only screenshot harness for /mobile. Run: node scripts/shot-mobile.mjs */
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
  ["mobile-desktop", 1440, 1000],
  ["mobile-tablet", 900, 1000],
  ["mobile-phone", 390, 844],
]) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`[${name}] console.error: ${m.text()}`);
  });
  page.on("pageerror", (e) => errors.push(`[${name}] pageerror: ${e.message}`));

  await page.goto(`${BASE}/mobile`, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });

  // How many nav links are actually reachable at this width?
  const navVisible = await page.evaluate(() => {
    const links = [...document.querySelectorAll('nav[aria-label="Primary navigation"] a')];
    return {
      inDom: links.length,
      rendered: links.filter((a) => a.getBoundingClientRect().width > 0).length,
    };
  });
  console.log(`[${name}] nav links in DOM: ${navVisible.inDom}, visibly rendered: ${navVisible.rendered}`);

  // Keyboard reachability: tab through once and record what receives focus.
  if (name === "mobile-phone") {
    const seen = [];
    for (let i = 0; i < 22; i++) {
      await page.keyboard.press("Tab");
      const info = await page.evaluate(() => {
        const el = document.activeElement;
        return {
          tag: el.tagName,
          id: el.id || "",
          label: el.getAttribute("aria-label") || el.textContent?.trim().slice(0, 22) || "",
        };
      });
      seen.push(`${info.tag}${info.id ? "#" + info.id : ""} "${info.label}"`);
    }
    console.log(`[${name}] tab order:\n  ` + seen.join("\n  "));
  }

  await page.close();
}

await browser.close();
console.log(errors.length ? errors.join("\n") : "NO_CONSOLE_ERRORS");
