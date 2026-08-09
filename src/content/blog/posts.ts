import serviceWebdesign from "@/assets/Blog11.png";
import serviceBranding from "@/assets/Blog22.png";
import serviceAppdesign from "@/assets/Blog33.png";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  featured: boolean;
  image: { src: string } | string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "amazon-listing-guide-2026",
    title: "Amazon Listing Images — Complete Guide for Indian Sellers 2026",
    description:
      "Complete guide to Amazon listing images for Indian sellers — technical specs, 9-image strategy, mobile optimization, CTR tips, CGI vs studio shoots, and ROI calculations for 2026.",
    excerpt:
      "Wrong images cost you sales every single day. Here's exactly what Amazon wants — and what Indian sellers keep getting wrong.",
    category: "Guide",
    readTime: "14 min",
    author: "Rudra",
    date: "March 20, 2026",
    featured: true,
    image: serviceWebdesign,
    content: `
      <h2>Why Listing Images Matter</h2>
      <p>Your product image is the first thing buyers see on Amazon. In a marketplace with 12 lakh+ active sellers in India, better images directly increase CTR and conversion — making them the single highest-ROI investment for any Amazon seller.</p>
      <h2>Core Amazon Requirements</h2>
      <ul>
        <li>White background (RGB 255,255,255)</li>
        <li>Minimum 1500×1500px resolution recommended</li>
        <li>Product must fill 85%+ of the frame</li>
        <li>JPEG, PNG, or TIFF — no watermarks</li>
      </ul>
      <h2>The 9-Image Strategy</h2>
      <p>Amazon allows 9 images per listing. Use all of them: Hero, Second Angle, Lifestyle, Feature Callout, Infographic, Dimensions, Material/Ingredients, Comparison Chart, and Social Proof context shot.</p>
      <h2>Why Indian Sellers Struggle</h2>
      <p>Traditional product photography costs ₹8,000–₹40,000 per SKU in India. CGI-based visualization by studios like PV Labs delivers Amazon-compliant images at 80% less cost in 3–5 days.</p>
      <h2>How Amazon's A9 Algorithm Uses Images</h2>
      <p>Better images increase CTR, which tells Amazon to show your listing to more buyers, creating a compounding growth loop. Listings with all 9 slots filled are significantly more likely to earn the Amazon's Choice badge.</p>
      <h2>Mobile Optimization</h2>
      <p>70%+ of Amazon India traffic is mobile. All infographic text must be readable at 400px width. PV Labs mobile-first tests every image before delivery.</p>
      <h2>ROI of Professional Images</h2>
      <p>Upgrading from 2% to 5% CTR on 1,000 daily impressions means ₹72,000 more revenue per month — from a one-time ₹5,000–₹8,000 image investment.</p>
    `,
  },
  {
    slug: "amazon-a-plus-content-guide",
    title: "What is A+ Content & Why Every Amazon Brand Needs It",
    description:
      "Everything Indian sellers need to know about Amazon A+ Content — Brand Registry steps, 5-module strategy, approval tips, pricing in India, and Basic vs Premium A+ comparison for 2026.",
    excerpt:
      "Most Amazon sellers have never used A+ Content. The ones who have — won't stop. Here's everything you need to know before your competitors figure it out.",
    category: "Education",
    readTime: "15 min",
    author: "Tankaar Sharma",
    date: "March 25, 2026",
    featured: true,
    image: serviceBranding,
    content: `
      <h2>What is A+ Content?</h2>
      <p>A+ Content (previously EBC) lets brand-registered Amazon sellers replace plain text descriptions with rich visual modules — brand banners, comparison charts, lifestyle images, and ingredient breakdowns.</p>
      <h2>Why It's Non-Negotiable in 2026</h2>
      <p>With 12 lakh+ sellers on Amazon India, A+ Content is what separates "real brands" from random resellers. Amazon's data shows 3–10% conversion increase; in competitive Indian categories, PV Labs clients have seen up to 38% improvement.</p>
      <h2>How to Get Brand Registry in India</h2>
      <p>Register your trademark with the Indian Trademark Registry, enroll at brandregistry.amazon.in, verify the code Amazon sends, and A+ Content Manager appears in Seller Central within 3–14 days. Even pending ™ applications are accepted.</p>
      <h2>The 5-Module Strategy That Converts</h2>
      <ul>
        <li>Brand Story Banner — instant credibility</li>
        <li>Feature Highlight — top 3 selling points with icons</li>
        <li>Ingredient/Material Breakdown — trust builder</li>
        <li>Comparison Chart — reduces returns, upsells variants</li>
        <li>Lifestyle/Usage Context — emotional connection</li>
      </ul>
      <h2>What Gets Rejected</h2>
      <p>Pricing claims, competitor mentions, contact info, health/medical claims, and low-resolution images (&lt;970px) trigger rejection. PV Labs maintains a 99% first-submission approval rate.</p>
      <h2>A+ Content Cost in India</h2>
      <p>Specialized studios charge ₹5,000–₹12,000 per ASIN with compliance guaranteed. A 5% conversion boost on ₹2L/month revenue pays back the investment in 25 days.</p>
      <h2>Premium A+ vs Basic</h2>
      <p>Premium unlocks video modules, interactive hotspots, and carousels. Worth it for brands doing ₹10L+/month. Smaller sellers should nail Basic A+ first.</p>
    `,
  },
  {
    slug: "flipkart-listing-requirements-2026",
    title: "Flipkart Listing Image Requirements — Full Size & Format Guide 2026",
    description:
      "Complete Flipkart listing image guide for Indian sellers — technical specs, manual review process, rejection reasons, algorithm ranking, pricing, and comparison with Amazon, Meesho, Myntra, and JioMart.",
    excerpt:
      "Flipkart rejects thousands of listings every day for image errors. Here's the exact spec sheet Indian sellers need — so yours never gets rejected.",
    category: "Guide",
    readTime: "14 min",
    author: "Rudra",
    date: "March 28, 2026",
    featured: false,
    image: serviceAppdesign,
    content: `
      <h2>Why Flipkart Is Different from Amazon</h2>
      <p>Flipkart uses manual catalog teams for image review in most categories — far stricter than Amazon's algorithmic checks. Copy-pasting Amazon images to Flipkart is the #1 mistake Indian sellers make.</p>
      <h2>Technical Specifications 2026</h2>
      <ul>
        <li>Minimum 1000×1000px, recommended 1500×1500px</li>
        <li>Pure white background (RGB 255,255,255)</li>
        <li>Product fills 80%+ of frame</li>
        <li>JPEG or PNG, square 1:1 ratio</li>
        <li>6+ images recommended for algorithm boost</li>
      </ul>
      <h2>Category-Specific Rules</h2>
      <p>Fashion requires front/back model shots and compulsory size charts. Electronics need all ports visible and BIS certification. Food & Grocery must show FSSAI license, expiry date, and MRP.</p>
      <h2>Manual Review Process</h2>
      <p>Stage 1: Auto-check (resolution, format). Stage 2: Human reviewer checks background, fill, mandatory shots, policy compliance. Stage 3: Approval (24–48 hrs) or rejection with reason code. PV Labs maintains 100% first-submission approval rate.</p>
      <h2>Flipkart's Catalog Quality Score</h2>
      <p>Listings with 6+ quality images get 40% more clicks. Image quality affects Flipkart Assured badge eligibility and preferred placement during Big Billion Days and sale events.</p>
      <h2>Pricing in India</h2>
      <p>Professional Flipkart-compliant images cost ₹4,000–₹10,000 per SKU at specialized studios. The hidden cost of rejection rework (2–5 days lost sales) often exceeds the cost of getting images right the first time.</p>
      <h2>Flipkart vs Meesho vs Myntra vs JioMart</h2>
      <p>Each Indian marketplace has different specs. Myntra is strictest for fashion (mandatory model shots). PV Labs creates platform-specific image sets from one brief — optimized for all marketplaces simultaneously.</p>
    `,
  },
];

export const blogSlugs = blogPosts.map((p) => p.slug);

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);