// Approved catalog rates. Keep page copy and structured data on this source.
export const pricingTiers = [
  { label: "10 SKUs", listingImages: 499, aPlus: 999, fullUpgrade: 1299 },
  { label: "25 SKUs", listingImages: 449, aPlus: 899, fullUpgrade: 999 },
  { label: "50+ SKUs", listingImages: 399, aPlus: 799, fullUpgrade: 799 },
] as const;

export const formatPrice = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

export const listingPricing = `Listing images cost ${pricingTiers.map((tier) => `${formatPrice(tier.listingImages)}/SKU for ${tier.label}`).join("; ")}. Each package includes 5 listing images per SKU.`;
export const aPlusPricing = `A+ Content costs ${pricingTiers.map((tier) => `${formatPrice(tier.aPlus)}/SKU for ${tier.label}`).join("; ")}. Support is scope-based; module count and deliverables are agreed before work starts.`;
export const fullUpgradePricing = `Full Listing Upgrade costs ${pricingTiers.map((tier) => `${formatPrice(tier.fullUpgrade)}/SKU for ${tier.label}`).join("; ")}. The deliverables are agreed before work starts.`;
export const brandStorePricing = "Brand Store design is custom quoted based on page count, store structure, and content requirements. Contact PV Labs for a quote.";

// A separate introductory offer, not a fourth catalog tier or per-SKU rate.
export const starterTrial = { price: 2499, skus: 2 } as const;
export const trialPricing = `Starter Trial Pack — ${starterTrial.skus} SKUs from ${formatPrice(starterTrial.price)} total. Start small and review our design quality before booking a larger package. Deliverables are confirmed before work begins.`;

export const pricingFaqs = [
  { question: "How much does A+ Content design cost?", answer: aPlusPricing },
  { question: "How much do listing images cost?", answer: listingPricing },
  { question: "How much does a Full Listing Upgrade cost?", answer: fullUpgradePricing },
  { question: "Can I try PV Labs before booking a larger package?", answer: trialPricing },
  { question: "How much does storefront or brand store design cost?", answer: brandStorePricing },
  { question: "Should I choose listing images, A+ Content, or a full listing upgrade?", answer: "Choose listing images for product visuals, A+ Content for richer product explanation, and a full listing upgrade when both need work. Confirm the scope with PV Labs before starting." },
];
