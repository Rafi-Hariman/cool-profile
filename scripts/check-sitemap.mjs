#!/usr/bin/env node
// Sitemap / robots diagnostic for the Cool Profile site.
// Usage:
//   node scripts/check-sitemap.mjs http://localhost:3000
//   node scripts/check-sitemap.mjs https://rafihariman.my.id
//
// Exits nonzero when a confirmed failure occurs (HTML sitemap, non-200 route,
// bad host, duplicate <loc>, missing robots directive, etc.).

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/+$/, "");
let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.error(`  ✗ ${msg}`);
};
const ok = (msg) => console.log(`  ✓ ${msg}`);

async function get(url) {
  const res = await fetch(url, { redirect: "manual" });
  const body = await res.text();
  return {
    status: res.status,
    type: res.headers.get("content-type") ?? "",
    body,
  };
}

const XML_CT = /application\/xml|text\/xml/;
const HTML = /^\s*<!doctype html|<html/i;
const BAD_HOST = /localhost|undefined|vercel\.app|\.now\.sh/i;
const locsOf = (xml) =>
  [...xml.matchAll(/<loc>\s*([^<\s][^<]*?)\s*<\/loc>/gi)].map((m) => m[1].trim());

// 1. sitemap.xml
console.log(`GET ${base}/sitemap.xml`);
let sitemap;
try {
  sitemap = await get(`${base}/sitemap.xml`);
  console.log(`  status ${sitemap.status} · ${sitemap.type || "(no content-type)"}`);
  if (sitemap.status !== 200) fail(`sitemap.xml status ${sitemap.status} (expected 200)`);
  if (!XML_CT.test(sitemap.type)) fail(`sitemap.xml content type is not XML: ${sitemap.type || "(none)"}`);
  if (HTML.test(sitemap.body)) fail("sitemap.xml returned HTML, not XML");
  if (!/<urlset\b/i.test(sitemap.body)) fail("sitemap.xml missing <urlset> root");
} catch (e) {
  fail(`could not fetch sitemap.xml: ${e.message}`);
}

const locs = sitemap ? locsOf(sitemap.body) : [];
if (sitemap) {
  console.log(`  <loc> entries: ${locs.length}`);
  if (locs.length === 0) fail("no <loc> entries found");
  const seen = new Set();
  for (const loc of locs) {
    if (seen.has(loc)) {
      fail(`duplicate <loc>: ${loc}`);
      continue;
    }
    seen.add(loc);
    if (BAD_HOST.test(loc)) fail(`unexpected host in <loc>: ${loc}`);
    if (/^http:\/\//i.test(loc)) fail(`non-HTTPS <loc>: ${loc}`);
    if (!/^https:\/\//i.test(loc)) fail(`not an absolute HTTPS <loc>: ${loc}`);
  }
}

// 2. robots.txt
console.log(`GET ${base}/robots.txt`);
try {
  const rb = await get(`${base}/robots.txt`);
  console.log(`  status ${rb.status}`);
  if (rb.status !== 200) fail(`robots.txt status ${rb.status} (expected 200)`);
  if (!/sitemap\s*:/i.test(rb.body)) fail("robots.txt missing Sitemap directive");
  if (BAD_HOST.test(rb.body)) fail("robots.txt references an unexpected host");
} catch (e) {
  fail(`could not fetch robots.txt: ${e.message}`);
}

// 3. reachability of each <loc> (redirects reported, not followed)
if (locs.length > 0) {
  console.log("Checking <loc> reachability");
  for (const loc of locs) {
    try {
      const r = await get(loc);
      if (r.status === 200) ok(`${loc} -> 200`);
      else if (r.status === 301 || r.status === 308) ok(`${loc} -> ${r.status} (redirect)`);
      else fail(`${loc} -> ${r.status}`);
    } catch (e) {
      fail(`${loc} -> unreachable (${e.message})`);
    }
  }
}

console.log(failures === 0 ? "PASS" : `FAIL (${failures} problem(s))`);
process.exit(failures === 0 ? 0 : 1);
