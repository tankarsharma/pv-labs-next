export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "amazon-listing-guide-2026",
    title: "Amazon Listing Images — Complete Guide for Indian Sellers 2026",
    description: "Complete guide for high-converting Amazon listing images for Indian sellers in 2026.",
    excerpt: "Everything you need to know about creating high-converting Amazon listing images.",
    content: `
      <h2>Why Listing Images Matter</h2>
      <p>Your product image is the first thing buyers see. Better images increase CTR and conversion.</p>
      <h2>Core Amazon Requirements</h2>
      <ul>
        <li>White background (RGB 255,255,255)</li>
        <li>High-resolution image</li>
        <li>Product should fill major area</li>
      </ul>
      <p>Use infographics and lifestyle shots for secondary images to improve trust and clarity.</p>
    `,
  },
  {
    slug: "amazon-a-plus-content-guide",
    title: "What is A+ Content & Why Every Amazon Brand Needs It",
    description: "How A+ Content improves conversions and why every Amazon brand should use it.",
    excerpt: "How A+ Content increases conversions by 3-10%.",
    content: `
      <h2>What is A+ Content?</h2>
      <p>A+ Content lets brand-registered sellers add rich visuals and storytelling to product pages.</p>
      <h2>Why It Helps</h2>
      <ul>
        <li>Builds trust with better presentation</li>
        <li>Improves conversion rate</li>
        <li>Reduces buyer confusion</li>
      </ul>
      <p>Strong visual hierarchy and comparison modules can significantly improve purchase intent.</p>
    `,
  },
  {
    slug: "flipkart-listing-requirements-2026",
    title: "Flipkart Listing Image Requirements — Full Size & Format Guide 2026",
    description: "Complete Flipkart image requirements, rejection reasons, and format best practices.",
    excerpt: "Complete guide to Flipkart image requirements and rejection reasons.",
    content: `
      <h2>Flipkart Image Essentials</h2>
      <p>Listings fail when images don't meet platform standards. Follow format and size guidelines carefully.</p>
      <h2>Common Rejection Reasons</h2>
      <ul>
        <li>Low resolution</li>
        <li>Incorrect background</li>
        <li>Overly cluttered composition</li>
      </ul>
      <p>Keep product visibility high and maintain clean, compliant visuals for better approvals.</p>
    `,
  },
];

export const blogSlugs = blogPosts.map((p) => p.slug);

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);