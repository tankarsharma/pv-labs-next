import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { JSDOM } from "jsdom";

// Run against a running production server:
// node scripts/check-seo-routes.mjs http://127.0.0.1:3000
const baseUrl = process.argv[2] ?? "http://127.0.0.1:3000";
const source = await readFile(new URL("../src/content/blog/posts.ts", import.meta.url), "utf8");
const slugs = [...source.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
assert.ok(slugs.length > 0, "Published articles must be found");

const restoredArticles = {
  "amazon-listing-images-design-service-guide": "Why This Service Exists",
  "amazon-a-plus-content-design-service-guide": "What Brands Get Wrong About A+ Content",
  "amazon-brand-store-design-service-guide": "Why a Brand Store Matters",
};
const footerLinks = {
  "A+ Content": "/services/a-plus-content",
  "Listing Images": "/services/listing-images",
  Storefront: "/services/brand-store",
};

for (const slug of slugs) {
  const path = `/blog/${slug}`;
  const response = await fetch(new URL(path, baseUrl), { redirect: "manual" });
  assert.equal(response.status, 200, `${path} must serve an article without redirecting`);
  assert.equal(response.headers.get("location"), null, `${path} must not redirect`);
  const dom = new JSDOM(await response.text());
  const document = dom.window.document;
  const canonical = `https://pvlabs.ai${path}`;
  assert.equal(document.querySelector('link[rel="canonical"]')?.getAttribute("href"), canonical);
  assert.equal(document.querySelectorAll("h1").length, 1, `${path} must have one article heading`);
  const robots = document.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "";
  assert.ok(!/noindex/i.test(robots), `${path} must allow indexing`);
  const schema = JSON.parse(document.querySelector("#ld-json-blogposting")?.textContent ?? "null");
  assert.equal(schema?.["@type"], "BlogPosting", `${path} must retain article structured data`);
  assert.equal(schema?.mainEntityOfPage, canonical);

  if (restoredArticles[slug]) {
    assert.ok(document.querySelector(".prose")?.textContent.includes(restoredArticles[slug]),
      `${path} must show its own article body`);
    assert.equal(document.querySelector("h1")?.textContent, schema.headline,
      `${path} title must match its article schema`);
    const links = [...document.querySelectorAll("footer a")];
    for (const [label, target] of Object.entries(footerLinks)) {
      assert.equal(links.find((link) => link.textContent === label)?.getAttribute("href"), target);
    }
  }
  dom.window.close();
}

const missing = await fetch(new URL("/blog/seo-check-nonexistent-article", baseUrl), { redirect: "manual" });
assert.equal(missing.status, 404, "Unknown articles must return 404 instead of redirecting");
console.log(`PASS: ${slugs.length} published articles, three restored article bodies and footer links, article canonicals/schema, and unknown-article 404.`);
