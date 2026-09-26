export type FAQLink = {
  label: string;
  href: string;
};

export type FAQItem = {
  cat: "Choosing an agency" | "Pricing" | "Conversion" | "Compliance" | "Storefront" | "Categories";
  q: string;
  a: string;
  links?: FAQLink[];
};

export const faqs: FAQItem[] = [
  {
    cat: "Choosing an agency",
    q: "How do I know if PV Labs is the right company for my listing work?",
    a: "PV Labs is a fit when you need conversion-focused marketplace creatives, not just design output. If your goal is better listing clarity, stronger buyer trust, and a more commercially useful creative system, this is the type of work we support.",
    links: [
      { label: "See Results", href: "/case-studies" },
      { label: "View Pricing", href: "/pricing" },
      { label: "Request Creative Audit", href: "/contact" },
    ],
  },
  {
    cat: "Choosing an agency",
    q: "Should I hire a freelancer or a company for A+ Content and listing images?",
    a: "A freelancer can be enough for isolated tasks. A company is usually the better fit when you need consistency across SKUs, stronger commercial thinking, faster coordination, and creative work mapped to a larger catalog or marketplace growth plan.",
    links: [
      { label: "View Pricing", href: "/pricing" },
      { label: "See Results", href: "/case-studies" },
    ],
  },
  {
    cat: "Pricing",
    q: "How much do listing images cost?",
    a: "Listing image pricing depends on SKU count, complexity, and whether you need only image support or a larger listing upgrade. Use the pricing page for current package direction, then contact PV Labs for a scope-specific recommendation.",
    links: [
      { label: "View Pricing", href: "/pricing" },
      { label: "Listing Images Service", href: "/services/listing-images" },
    ],
  },
  {
    cat: "Pricing",
    q: "How much does A+ Content cost?",
    a: "A+ Content pricing depends on module count, storytelling depth, and whether it is bundled with listing images. It is usually best evaluated alongside your current conversion problem, not in isolation.",
    links: [
      { label: "View Pricing", href: "/pricing" },
      { label: "A+ Content Service", href: "/services/a-plus-content" },
    ],
  },
  {
    cat: "Pricing",
    q: "How much does storefront or brand store design cost?",
    a: "Storefront pricing depends on structure, page count, content readiness, and how much buyer-navigation support is needed. If your product range is growing, storefront work is often scoped differently from single-listing work.",
    links: [
      { label: "View Pricing", href: "/pricing" },
      { label: "Brand Store Service", href: "/services/brand-store" },
      { label: "Request Creative Audit", href: "/contact" },
    ],
  },
  {
    cat: "Conversion",
    q: "My ads get clicks but my listing does not convert. What should I fix first?",
    a: "Usually the first fix is the buyer’s first impression: listing images, product communication, and clarity of benefits. If buyers arrive but hesitate, the issue is often visual trust and information structure rather than traffic alone.",
    links: [
      { label: "Listing Images Service", href: "/services/listing-images" },
      { label: "See Results", href: "/case-studies" },
      { label: "View Pricing", href: "/pricing" },
    ],
  },
  {
    cat: "Conversion",
    q: "When should I choose A+ Content instead of only listing images?",
    a: "Choose A+ Content when the listing needs more explanation, stronger brand trust, deeper product education, or better support for buyer objections below the fold. Choose both when the top of page and the rest of the listing both need work.",
    links: [
      { label: "A+ Content Service", href: "/services/a-plus-content" },
      { label: "View Pricing", href: "/pricing" },
    ],
  },
  {
    cat: "Compliance",
    q: "Do you support Amazon and marketplace-compliant creative formats?",
    a: "Yes. PV Labs supports marketplace-ready creative work built around current platform requirements and commercial usability. Exact requirements still depend on platform and asset type.",
    links: [
      { label: "Listing Images Service", href: "/services/listing-images" },
      { label: "Request Creative Audit", href: "/contact" },
    ],
  },
  {
    cat: "Compliance",
    q: "Can you help if my current listing visuals are inconsistent across marketplaces?",
    a: "Yes. This is a common issue when products are live across Amazon, Flipkart, Myntra, or other channels. The goal is usually to create a more consistent visual system while still respecting platform-specific constraints.",
    links: [
      { label: "See Results", href: "/case-studies" },
      { label: "Request Creative Audit", href: "/contact" },
    ],
  },
  {
    cat: "Storefront",
    q: "When does a brand need storefront support?",
    a: "Storefront support becomes important when you have multiple products, need a stronger branded path for buyers, or want better product discovery beyond a single listing page.",
    links: [
      { label: "Brand Store Service", href: "/services/brand-store" },
      { label: "View Pricing", href: "/pricing" },
    ],
  },
  {
    cat: "Storefront",
    q: "What is the difference between listing images and storefront work?",
    a: "Listing images help a single product page sell better. Storefront work helps buyers navigate your broader brand and product range. One improves product-level conversion; the other improves multi-product discovery and branded shopping flow.",
    links: [
      { label: "Listing Images Service", href: "/services/listing-images" },
      { label: "Brand Store Service", href: "/services/brand-store" },
    ],
  },
  {
    cat: "Categories",
    q: "Do you work only with Amazon sellers?",
    a: "No. PV Labs supports commercial creative work for Amazon, other marketplaces, and brand-led commerce use cases where better visuals can improve buyer trust and decision-making.",
    links: [
      { label: "See Results", href: "/case-studies" },
      { label: "Request Creative Audit", href: "/contact" },
    ],
  },
  {
    cat: "Categories",
    q: "Can you support multiple SKUs or catalog-level work?",
    a: "Yes. Catalog-level support is often where stronger systems matter most because consistency, pricing efficiency, and faster creative decisions become more important as SKU count grows.",
    links: [
      { label: "View Pricing", href: "/pricing" },
      { label: "Request Creative Audit", href: "/contact" },
    ],
  },
];
