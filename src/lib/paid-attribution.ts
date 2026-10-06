// Only a known campaign is attributed. Free text, contact details and click IDs
// never enter analytics or the brief through this helper.
export const attributionKey = "pv-paid-source";
export type PaidSource = { campaign: "pv_india_creative_test"; service: "listing_images" | "a_plus" | "other"; capturedAt: number };
export function paidSourceFromSearch(search: string, now = Date.now()): PaidSource | null {
  const params = new URLSearchParams(search);
  if (params.get("utm_source") !== "google" || params.get("utm_medium") !== "cpc" || params.get("utm_campaign") !== "pv_india_creative_test") return null;
  const content = params.get("utm_content");
  return { campaign: "pv_india_creative_test", service: content === "listing_images" || content === "a_plus" ? content : "other", capturedAt: now };
}
export function rememberPaidSource(search: string, storage: Storage, now = Date.now()): PaidSource | null {
  try {
    const fresh = paidSourceFromSearch(search, now);
    if (fresh) { storage.setItem(attributionKey, JSON.stringify(fresh)); return fresh; }
    const saved = JSON.parse(storage.getItem(attributionKey) || "null");
    if (saved?.campaign === "pv_india_creative_test" && ["listing_images", "a_plus", "other"].includes(saved.service) && Number.isFinite(saved.capturedAt) && now >= saved.capturedAt && now - saved.capturedAt < 30 * 60 * 1000) return saved;
  } catch { /* Contact still works when storage is blocked. */ }
  return null;
}
export function appendPaidSource(message: string, source: PaidSource | null): string {
  if (!source) return message;
  const service = source.service === "listing_images" ? "Listing Images" : source.service === "a_plus" ? "A+ Content" : "Creative Services";
  return `${message}\n\nFound PV Labs through Google Search — ${service}.`;
}
export function serviceSelections(search: string) {
  const service = new URLSearchParams(search).get("service");
  if (service === "listing-images") return { projectTypes: ["Listing Images"] };
  if (service === "a-plus-content") return { projectTypes: ["A+ Content"] };
  if (service === "brand-store") return { projectTypes: ["Storefront / Brand Store"] };
  return {};
}
