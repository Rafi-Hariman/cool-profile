import { chromium } from "playwright-core";
const exe = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await chromium.launch({ executablePath: exe });

async function run(viewport, label) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on("pageerror", e => errors.push("pageerror: " + e.message));
  page.on("console", m => { if (m.type() === "error" && !m.text().includes("favicon") && !m.text().includes("404")) errors.push("console: " + m.text()); });
  await page.goto("http://localhost:3100", { waitUntil: "load" });
  await page.waitForTimeout(2500);
  await page.mouse.move(viewport.width * 0.5, viewport.height * 0.4, { steps: 5 });
  await page.waitForTimeout(600);

  const res = await page.evaluate(() => {
    const sections = ["top", "work", "about", "stack", "contact"];
    const out = {};
    out.canvas = !!document.querySelector("section#top canvas");
    out.heroH = document.querySelector("section#top")?.clientHeight;
    out.viewportH = window.innerHeight;
    out.overflowX = document.documentElement.scrollWidth > document.documentElement.clientWidth;
    for (const id of sections) out["sec_" + id] = !!document.getElementById(id);
    out.mailto = !!document.querySelector('a[href^="mailto:"]');
    return out;
  });
  console.log(`\n[${label}] ${viewport.width}x${viewport.height}`);
  console.log(JSON.stringify(res, null, 1));
  if (errors.length) console.log("ERRORS:", errors.join(" | "));
  return page;
}

const dpage = await run({ width: 1440, height: 900 }, "DESKTOP");
const mpage = await run({ width: 390, height: 844 }, "MOBILE");
await dpage.close(); await mpage.close();
await browser.close();
