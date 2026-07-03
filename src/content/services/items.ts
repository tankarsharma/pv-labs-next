export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
};

export const serviceItems: ServiceItem[] = [
  {
    slug: "listing-images",
    title: "Amazon & Flipkart Listing Images",
    description:
      "Professional, high-converting product listing images for Amazon and Flipkart that boost CTR and sales.",
    excerpt:
      "Studio-quality listing images designed to meet platform specs and maximise conversions.",
    content: `
      <h2>What We Deliver</h2>
      <p>We create complete sets of listing images — main shot, infographics, lifestyle, and comparison — all to platform spec.</p>
      <h2>Why It Matters</h2>
      <ul>
        <li>Better images directly increase click-through rate</li>
        <li>Infographics reduce buyer hesitation and returns</li>
        <li>Lifestyle shots build brand trust</li>
      </ul>
    `,
  },
  {
    slug: "a-plus-content",
    title: "A+ Content Design",
    description:
      "Brand-registered Amazon A+ Content that increases conversions by 3–10% with rich visuals and storytelling.",
    excerpt:
      "Rich A+ modules that tell your brand story and convert browsers into buyers.",
    content: `
      <h2>What is A+ Content?</h2>
      <p>A+ Content lets brand-registered sellers add rich visuals and comparison modules to product detail pages.</p>
      <h2>Our Approach</h2>
      <ul>
        <li>Custom module layouts tailored to your product</li>
        <li>Brand-consistent design language</li>
        <li>Mobile-optimised compositions</li>
      </ul>
    `,
  },
  {
    slug: "brand-store",
    title: "Amazon Brand Store Design",
    description:
      "Custom Amazon Brand Store design that showcases your full catalogue and drives repeat purchases.",
    excerpt:
      "A dedicated storefront on Amazon that builds brand equity and increases basket size.",
    content: `
      <h2>Your Own Storefront on Amazon</h2>
      <p>A Brand Store gives you a multi-page destination to showcase your full product range without competitor ads.</p>
      <h2>What We Design</h2>
      <ul>
        <li>Home page with hero banner and featured products</li>
        <li>Category sub-pages</li>
        <li>Seasonal and campaign pages</li>
      </ul>
    `,
  },
];

export const serviceSlugs = serviceItems.map((s) => s.slug);

export const getServiceBySlug = (slug: string) =>
  serviceItems.find((s) => s.slug === slug);
