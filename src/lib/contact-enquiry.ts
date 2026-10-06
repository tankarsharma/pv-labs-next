export const whatsappContactUrl = "https://wa.me/917417791003";
export const enquiryEmail = "growth@pvlabs.ai";

export const contactGroups = [
  {
    key: "projectTypes", title: "Project type", multiple: true, exclusive: "Not sure yet",
    items: ["A+ Content", "Listing Images", "Storefront / Brand Store", "Full Listing Upgrade", "Launch Support", "Not sure yet"],
  },
  {
    key: "marketplaces", title: "Marketplace", multiple: true, exclusive: "Multiple marketplaces",
    items: ["Amazon", "Flipkart", "Myntra", "Meesho", "Ajio", "Brand Website", "Multiple marketplaces"],
  },
  {
    key: "categories", title: "Category", multiple: false,
    items: ["Beauty / Skincare", "Fashion / Apparel", "Jewellery / Accessories", "Home / Kitchen", "Food / Wellness", "Other"],
  },
  {
    key: "skuCounts", title: "Number of SKUs", multiple: false,
    items: ["1 SKU", "2–10 SKUs", "11–25 SKUs", "26–50 SKUs", "50+ SKUs"],
  },
  {
    key: "budgetRanges", title: "Budget range", multiple: false,
    items: ["Under ₹5,000", "₹5,000–₹15,000", "₹15,000–₹50,000", "₹50,000+", "Need recommendation"],
  },
  {
    key: "mainProblems", title: "Main problem", multiple: true,
    items: ["Low conversion", "Need A+ content", "Need listing images", "Need storefront", "Launch support", "Need better creative direction"],
  },
] as const;

export type ContactGroup = (typeof contactGroups)[number];
export type ContactSelections = Partial<Record<ContactGroup["key"], string[]>>;

export function toggleContactChoice(selections: ContactSelections, group: ContactGroup, item: string): ContactSelections {
  const current = selections[group.key] ?? [];
  const exclusive = "exclusive" in group ? group.exclusive : undefined;
  const next = current.includes(item)
    ? current.filter((value) => value !== item)
    : !group.multiple || item === exclusive
      ? [item]
      : [...current.filter((value) => value !== exclusive), item];
  return { ...selections, [group.key]: next };
}

export function buildContactMessage(selections: ContactSelections, details = ""): string {
  const lines = ["Hi PV Labs, I'd like to discuss a project."];
  for (const group of contactGroups) {
    // Use the displayed order so the same selections always produce the same brief.
    const selected = group.items.filter((item) => selections[group.key]?.includes(item));
    if (selected.length) lines.push(`${group.title}: ${selected.join(", ")}`);
  }
  if (details.trim()) lines.push(`Additional details: ${details.trim()}`);
  return lines.length === 1 ? lines[0] : [lines[0], "", ...lines.slice(1)].join("\n");
}

export function contactMessageLinks(message: string) {
  return {
    whatsapp: `${whatsappContactUrl}?text=${encodeURIComponent(message)}`,
    email: `mailto:${enquiryEmail}?subject=${encodeURIComponent("Project enquiry — PV Labs")}&body=${encodeURIComponent(message)}`,
  };
}
