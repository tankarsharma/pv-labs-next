import { describe, expect, it } from "vitest";
import { appendPaidSource, attributionKey, paidSourceFromSearch, rememberPaidSource, serviceSelections } from "./paid-attribution";
const query = "?utm_source=google&utm_medium=cpc&utm_campaign=pv_india_creative_test&utm_content=listing_images";
describe("paid enquiry attribution", () => {
  it("retains the known paid source across internal navigation but expires it", () => {
    sessionStorage.clear();
    const source = rememberPaidSource(query, sessionStorage, 1000);
    expect(rememberPaidSource("?service=listing-images", sessionStorage, 2000)).toEqual(source);
    expect(appendPaidSource("Hello", source)).toContain("Google Search — Listing Images");
    expect(rememberPaidSource("", sessionStorage, 1801000)).toBeNull();
  });
  it("rejects arbitrary campaigns and does not copy query free text or click IDs", () => {
    expect(paidSourceFromSearch("?utm_source=google&utm_medium=cpc&utm_campaign=another")).toBeNull();
    const source = paidSourceFromSearch(`${query}&email=private@example.com&gclid=secret&utm_term=private`, 1000);
    expect(JSON.stringify(source)).not.toMatch(/private|secret|gclid/);
    expect(appendPaidSource("Hello", source)).not.toMatch(/private|secret/);
  });
  it("keeps contact working if storage is blocked or corrupted", () => {
    sessionStorage.setItem(attributionKey, "invalid JSON");
    expect(rememberPaidSource("", sessionStorage, 1000)).toBeNull();
    expect(rememberPaidSource(query, { setItem() { throw new Error("blocked"); } } as unknown as Storage)).toBeNull();
    expect(appendPaidSource("Hello", null)).toBe("Hello");
  });
  it("only preselects recognized service names", () => {
    expect(serviceSelections("?service=a-plus-content")).toEqual({ projectTypes: ["A+ Content"] });
    expect(serviceSelections("?service=listing-images")).toEqual({ projectTypes: ["Listing Images"] });
    expect(serviceSelections("?service=unknown")).toEqual({});
  });
});
