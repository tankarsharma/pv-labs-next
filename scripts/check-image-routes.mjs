import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { JSDOM } from "jsdom";

// Run after npm run build against a production server.
const baseUrl = process.argv[2] ?? "http://127.0.0.1:3000";
async function page(path) {
  const response = await fetch(new URL(path, baseUrl));
  assert.equal(response.status, 200, path);
  return new JSDOM(await response.text());
}

for (const path of ["/", "/services"]) {
  const dom = await page(path);
  const images = [...dom.window.document.images].filter(image => / - \d+$/.test(image.alt));
  assert.equal(images.length, path === "/" ? 14 : 10, `${path}: one initial image per gallery`);
  for (const image of images) {
    assert.equal(image.getAttribute("loading"), "lazy", image.alt);
    assert.ok(image.getAttribute("src").startsWith("/_next/image?"), `${image.alt}: optimized delivery`);
    assert.ok(image.getAttribute("sizes"), `${image.alt}: responsive sizing`);
  }
  console.log(`${path}: ${images.length} optimized, lazy gallery images in initial HTML`);
  dom.window.close();
}

const source = await readFile(new URL("../src/content/case-studies/items.ts", import.meta.url), "utf8");
const slugs = [...source.matchAll(/slug: "([^"]+)"/g)].map(match => match[1]);
assert.equal(slugs.length, 8);
for (const path of ["/case-studies", ...slugs.map(slug => `/case-studies/${slug}`)]) {
  const dom = await page(path);
  const images = [...dom.window.document.images].filter(image => image.getAttribute("src").includes("CS%"));
  assert.equal(images.length, path === "/case-studies" ? 8 : 1, `${path}: comparison images`);
  for (const image of images) {
    assert.ok(image.getAttribute("src").startsWith("/_next/image?"), path);
    assert.ok(image.classList.contains("h-auto"), `${path}: natural aspect ratio`);
    assert.ok(!image.classList.contains("object-cover"), `${path}: no cropped labels`);
    assert.ok(Number(image.width) > 0 && Number(image.height) > 0, `${path}: reserve intrinsic dimensions`);
  }
  dom.window.close();
}

for (const path of ["/services/a-plus-content", "/services/listing-images", "/services/brand-store", "/amazon-conversion-audit", "/pricing", "/contact"]) {
  const dom = await page(path);
  assert.ok(dom.window.document.querySelector('a[href="/contact"]'), `${path}: contact journey`);
  dom.window.close();
}

const home = await page("/");
const sample = [...home.window.document.images].find(image => image.alt === "Product Hero Images - 1");
const url = new URL(sample.getAttribute("src"), baseUrl);
url.searchParams.set("w", "640");
const originalUrl = new URL(url.searchParams.get("url"), baseUrl);
const original = await fetch(originalUrl);
assert.equal(original.status, 200);
const originalBytes = (await original.arrayBuffer()).byteLength;
const optimized = await fetch(url, { headers: { Accept: "image/webp" } });
assert.equal(optimized.status, 200);
assert.equal(optimized.headers.get("content-type"), "image/webp");
const optimizedBytes = Buffer.from(await optimized.arrayBuffer());
assert.ok(optimizedBytes.length < originalBytes / 2, "Mobile sample should be substantially smaller");
if (process.env.IMAGE_SAMPLE_PATH) await writeFile(process.env.IMAGE_SAMPLE_PATH, optimizedBytes);
console.log(`640px gallery sample: ${originalBytes} original bytes → ${optimizedBytes.length} WebP bytes (${(100 * (1 - optimizedBytes.length / originalBytes)).toFixed(1)}% reduction)`);
home.window.close();
console.log("Image delivery, all 8 comparison details, and enquiry-route checks passed.");
