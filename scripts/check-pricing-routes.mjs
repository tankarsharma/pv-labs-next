import assert from "node:assert/strict";
import { JSDOM } from "jsdom";

// Run after npm run build against a running production server.
// node scripts/check-pricing-routes.mjs http://127.0.0.1:3000
const baseUrl = process.argv[2] ?? "http://127.0.0.1:3000";
const normalize = (text) => text.replace(/\s+/g, " ").trim();
async function page(path) {
  const response = await fetch(new URL(path, baseUrl), { redirect: "manual" });
  assert.equal(response.status, 200, path);
  return new JSDOM(await response.text());
}

const pricing = await page("/pricing");
const document = pricing.window.document;
// Independent expected values transcribed from the approved screenshot.
assert.deepEqual([...document.querySelectorAll("tbody tr")].map((row) =>
  [...row.querySelectorAll("td")].slice(1).map((cell) => normalize(cell.textContent))), [
  ["₹499/SKU", "₹449/SKU", "₹399/SKU"],
  ["₹999/SKU", "₹899/SKU", "₹799/SKU"],
  ["₹1,299/SKU", "₹999/SKU", "₹799/SKU"],
]);
assert.equal(document.querySelectorAll("tbody tr").length, 3, "Trial must not become a catalog tier");
const trial = document.querySelector("#starter-trial");
assert.match(normalize(trial?.textContent ?? ""), /from ₹1,299 total for 2 SKUs/);
assert.equal(trial?.querySelector("a")?.getAttribute("href"), "/contact");
const pricingSchema = JSON.parse(document.querySelector("#ld-json-pricing-faq").textContent);
const visibleFaqs = [...document.querySelectorAll("details")];
for (const [index, faq] of pricingSchema.mainEntity.entries()) {
  assert.equal(normalize(visibleFaqs[index].querySelector("summary").textContent).replace(/\s*\+$/, ""), faq.name);
  assert.equal(normalize(visibleFaqs[index].querySelector("p").textContent), faq.acceptedAnswer.text);
}
const answers = Object.fromEntries(pricingSchema.mainEntity.map((faq) => [faq.name, faq.acceptedAnswer.text]));
pricing.window.close();

for (const [slug, question] of [
  ["listing-images", "How much do listing images cost?"],
  ["a-plus-content", "How much does A+ Content design cost?"],
  ["brand-store", "How much does storefront or brand store design cost?"],
]) {
  const dom = await page(`/services/${slug}`);
  const doc = dom.window.document;
  const schema = [...doc.querySelectorAll('script[type="application/ld+json"]')]
    .map((script) => JSON.parse(script.textContent)).find((data) => data["@type"] === "FAQPage");
  assert.ok(schema.mainEntity.some((faq) => faq.acceptedAnswer.text === answers[question]), `${slug} FAQ pricing`);
  assert.ok(normalize(doc.querySelector("article > div").textContent).includes(answers[question]), `${slug} body pricing`);
  if (slug === "listing-images") assert.ok(!/up to [789] images|full 9-image/.test(doc.body.textContent));
  dom.window.close();
}

const faqPage = await page("/faq");
const faqSchema = JSON.parse(faqPage.window.document.querySelector("#ld-json-faq").textContent);
for (const question of ["How much do listing images cost?", "How much does storefront or brand store design cost?", "Can I try PV Labs before booking a larger package?"]) {
  assert.equal(faqSchema.mainEntity.find((faq) => faq.name === question)?.acceptedAnswer.text, answers[question]);
  assert.ok(normalize(faqPage.window.document.body.textContent).includes(answers[question]));
}
faqPage.window.close();

for (const [slug, question] of [
  ["amazon-product-image-size-guide-2026", "How much do listing images cost?"],
  ["amazon-product-photography-vs-cgi", "How much do listing images cost?"],
  ["amazon-a-plus-content-guide", "How much does A+ Content design cost?"],
  ["amazon-a-plus-content-design-guide", "How much does A+ Content design cost?"],
  ["flipkart-listing-requirements-2026", "How much do listing images cost?"],
  ["amazon-listing-images-design-service-guide", "How much do listing images cost?"],
  ["amazon-a-plus-content-design-service-guide", "How much does A+ Content design cost?"],
  ["amazon-brand-store-design-service-guide", "How much does storefront or brand store design cost?"],
]) {
  const dom = await page(`/blog/${slug}`);
  assert.ok(normalize(dom.window.document.querySelector(".prose").textContent).includes(answers[question]), slug);
  dom.window.close();
}
const comparison = await page("/a-plus-content-vs-storefront");
assert.ok(normalize(comparison.window.document.body.textContent).includes(answers["How much does A+ Content design cost?"]));
assert.ok(normalize(comparison.window.document.body.textContent).includes(answers["How much does storefront or brand store design cost?"]));
comparison.window.close();
console.log("PASS: all nine catalog prices, separate two-SKU trial and CTA, matching visible/schema FAQs, three service pages, eight article price sections, and comparison page.");
