import { listingPricing, aPlusPricing, brandStorePricing } from "@/lib/pricing";

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
      "Professional, high-converting product listing images for Amazon and Flipkart sellers in India — CGI-based, platform-compliant, delivered in 3–5 days.",
    excerpt:
      "Listing images, infographics and lifestyle visuals for Indian Amazon and Flipkart sellers. Share your product references and get a scoped quote.",
    content: `
      <h2>What We Deliver</h2>
      <p>We create complete sets of listing images — main hero shot, infographics, lifestyle images, dimension references, comparison charts, and social proof context shots. Every image is designed to meet Amazon and Flipkart technical specifications while maximizing click-through rate and conversion.</p>
      <p>The catalog package includes 5 listing images per SKU, delivered in high-resolution PNG/JPEG format, ready to upload to your chosen marketplace. We agree the mix of hero, lifestyle, infographic, or comparison visuals before work starts; additional images or platform versions are quoted separately.</p>

      <h2>Why Listing Images Matter More Than Anything Else</h2>
      <p>On Amazon and Flipkart, your product image is the first thing buyers see in search results. Your main image helps buyers decide whether to open the listing. Read our <a href="/blog/amazon-listing-guide-2026">complete Amazon listing image guide</a> for the full breakdown of specs, strategies, and mistakes to avoid.</p>
      <p>Clear hero images help shoppers identify the product. Infographics and lifestyle images explain features, size and usage. Sales also depend on price, reviews, traffic and the offer; image design cannot guarantee results.</p>
      <p>We check the image requirements for your chosen marketplace and category before exporting. See our <a href="/blog/flipkart-listing-requirements-2026">Flipkart listing guide</a> for context.</p>

      <h2>Our Process — From Brief to Upload-Ready</h2>
      <p><strong>Step 1 — Product Brief:</strong> You share product photos (even phone shots are fine), key features, target audience, and competitor references. We handle the rest.</p>
      <p><strong>Step 2 — CGI Modeling:</strong> We build photorealistic 3D renders of your product. No physical product shoot or shipping required. This gives us complete control over lighting, angles, and backgrounds.</p>
      <p><strong>Step 3 — Image Set Design:</strong> We plan the 5-image set around your product: hero, lifestyle, infographics, dimensions, or comparison visuals, selected for your brief.</p>
      <p><strong>Step 4 — Platform Optimization:</strong> We agree the target marketplace, image dimensions and file formats for your category. Additional platform versions are scoped separately.</p>
      <p><strong>Step 5 — Delivery & Revisions:</strong> Delivered in 3–5 business days. 2 rounds of revisions included. We prepare files for the agreed platform; final approval remains with the marketplace.</p>

      <h2>CGI vs Traditional Photography — Why We Use CGI</h2>
      <p>Our workflow starts with your product reference photos and approved brief. We confirm whether those references are suitable before work starts.</p>
      <p>CGI and image design let us develop product angles, backgrounds and lifestyle settings from references. We review product shape, labels and colour against the supplied inputs.</p>

      <h2>Platform Compliance — Amazon & Flipkart Specs We Follow</h2>
      <p><strong>Amazon India:</strong> We check hero backgrounds, product framing, legibility and exports against the requirements for your category and account.</p>
      <p><strong>Flipkart:</strong> We confirm catalog image requirements for the selected category before preparing the files. Marketplace review and approval remain separate from design delivery.</p>
      <p>We also optimize for Meesho, Myntra, and JioMart specifications when needed — one brief, multiple platform-ready deliverables.</p>

      <h2>Pair With A+ Content for Maximum Impact</h2>
      <p>Combine listing images with <a href="/services/a-plus-content">A+ Content</a> when buyers also need a fuller explanation on the product page. Each service has its own agreed deliverables.</p>

      <h2>Who This Is For</h2>
      <p>Our listing image service is designed for Indian sellers and brands who want to compete at the highest level without spending lakhs on photography. Whether you're launching your first product or scaling an existing brand with 50+ SKUs — we deliver the same professional quality at every scale.</p>
      <p>Categories we specialize in: Skincare & Beauty, Home & Kitchen, Electronics & Gadgets, Food & Supplements, Fashion Accessories, Baby Products, and Health & Wellness.</p>

      <h2>Pricing</h2>
      <p>${listingPricing}</p>
      <p>The listing image package includes: 5 images per SKU, 2 revision rounds, and delivery in 3–5 business days. Check our <a href="/pricing">pricing page</a> for detailed package breakdowns.</p>
    `,
  },
  {
    slug: "a-plus-content",
    title: "A+ Content Design",
    description:
      "Amazon A+ Content design for Indian brand-registered sellers — branded banners, product explanation and comparison modules, with scope agreed before design starts.",
    excerpt:
      "Branded A+ modules that explain your product benefits, materials and usage. Review examples and agree the module count before work starts.",
    content: `
      <h2>What is A+ Content?</h2>
      <p>A+ Content (previously Enhanced Brand Content) is Amazon's premium listing feature that lets brand-registered sellers replace plain text product descriptions with rich visual modules — brand banners, comparison charts, lifestyle images, ingredient breakdowns, and more. Read our <a href="/blog/amazon-a-plus-content-guide">complete A+ Content guide</a> for everything you need to know.</p>
      <p>A+ Content provides space for product explanation and brand presentation. We focus on clear visual hierarchy and readable benefits. Any sales effect must be measured on your own listings.</p>

      <h2>Why Every Amazon India Brand Needs A+ Content in 2026</h2>
      <p>A+ Content helps shoppers compare features and understand your brand. Check that your seller account and ASINs are eligible before commissioning designs.</p>
      <p>PV Labs charges for creative design. Account eligibility and marketplace approval are managed by Amazon.</p>

      <h2>Our 5-Module Strategy That Converts</h2>
      <p>These are examples of modules we can plan. The final mix and module count depend on your brief and are confirmed in the quote:</p>
      <p><strong>Module 1 — Brand Story Banner:</strong> Full-width cinematic banner communicating your brand identity in one glance. Logo, tagline, and one powerful lifestyle image. Builds instant credibility.</p>
      <p><strong>Module 2 — Feature Highlight:</strong> Top 3 selling points with icons, short text, and supporting visuals. Indian buyers scan — bold headlines and 10–15 word descriptions per feature.</p>
      <p><strong>Module 3 — Ingredient/Material Breakdown:</strong> Critical for skincare, food, and supplements. Shows what's inside with clean visuals. Builds trust and reduces "is this genuine?" doubts.</p>
      <p><strong>Module 4 — Comparison Chart:</strong> Your product variants side-by-side (500ml vs 1L vs 2L). Reduces confusion, reduces returns, and often upsells buyers to higher-priced variants.</p>
      <p><strong>Module 5 — Lifestyle/Usage Context:</strong> Full-width image showing product in a real Indian setting — kitchen, living room, vanity table. Creates emotional connection.</p>

      <h2>Our Process</h2>
      <p><strong>Day 1–2:</strong> You share your brand assets, product details, and target audience. We research your category and competitors.</p>
      <p><strong>Day 2–4:</strong> We design all 5 modules with custom layouts, branded visuals, and mobile-optimized compositions.</p>
      <p><strong>Day 4–5:</strong> Review, revisions, and final delivery. All images exported at 970px+ width in Amazon-required specs.</p>
      <p><strong>Day 5–12:</strong> We submit to Amazon on your behalf (optional) and handle any review feedback until approved.</p>

      <h2>What Gets Rejected — And How We Avoid It</h2>
      <p>We review content for marketplace restrictions, including pricing claims, competitor references, contact information and unsupported health claims.</p>
      <p>Amazon reviews and approves A+ submissions. We do not promise a first-submission approval rate or a fixed review date.</p>

      <h2>Basic vs Premium A+ Content</h2>
      <p><strong>Basic A+ (Free):</strong> 5 content modules, comparison charts, standard image+text layouts. Available to all Brand Registered sellers.</p>
      <p><strong>Premium A+:</strong> Additional module types may be available to eligible accounts. Check the options in your Seller Central account; eligibility and specifications can change.</p>
      <p>We design both. For most sellers, we recommend starting with Basic A+, building consistent sales, then graduating to Premium.</p>

      <h2>Complete Your Amazon Presence</h2>
      <p>A+ Content works best when paired with <a href="/services/listing-images">professional listing images</a> (which get the initial click) and an <a href="/services/brand-store">Amazon Brand Store</a> (which drives repeat purchases and maximizes Sponsored Brands ad ROI). Together, these three form a complete brand presence on Amazon.</p>

      <h2>Pricing</h2>
      <p>${aPlusPricing}</p>
      <p>Module count and deliverables depend on the agreed scope. See our <a href="/pricing">pricing page</a> for the catalog packages and confirm your brief before starting.</p>

      <h2>Who This Is For</h2>
      <p>Any Amazon India seller with Brand Registry who wants to look like an established brand, increase conversions, and reduce returns. Whether you sell skincare, electronics, kitchen appliances, supplements, or fashion — A+ Content works across every category.</p>
    `,
  },
  {
    slug: "brand-store",
    title: "Amazon Brand Store Design",
    description:
      "Custom Amazon Brand Store design for Indian brands — multi-page storefront, category pages, campaign pages, and Sponsored Brands traffic strategy.",
    excerpt:
      "A dedicated multi-page storefront on Amazon that builds brand equity, drives repeat purchases, and converts Sponsored Brands traffic.",
    content: `
      <h2>Your Own Storefront on Amazon</h2>
      <p>An Amazon Brand Store is a free, multi-page shopping destination exclusively for your brand. It's the only place on Amazon where your products appear without competitor ads. Think of it as your own mini-website inside Amazon — complete with hero banners, category navigation, product grids, and brand storytelling.</p>
      <p>Brand Stores are accessible via your brand's byline on any product listing, through Sponsored Brands ads, and via direct URL (amazon.in/stores/yourbrand). For Indian brands running Sponsored Brands campaigns, the Brand Store is where that traffic lands — making its design directly impact your ad ROI.</p>

      <h2>Why Indian Brands Need a Brand Store in 2026</h2>
      <p>Amazon India now has thousands of brands competing in every category. A Brand Store does three critical things that product listings alone cannot:</p>
      <p><strong>1. Eliminates competitor ads:</strong> On regular product pages, Amazon shows competitor products in "Similar items" and "Sponsored" sections. Your Brand Store shows ONLY your products. Zero distractions. Zero competitor visibility.</p>
      <p><strong>2. Organizes your catalog:</strong> Category pages and product grids help shoppers browse related products and variants.</p>
      <p><strong>3. Builds brand perception:</strong> A well-designed Brand Store makes you look like an established brand — not a random third-party seller. This is especially important for D2C Indian brands that are known on Instagram but look "new" on Amazon.</p>

      <h2>What We Design</h2>
      <p><strong>Home Page:</strong> Hero banner with brand identity, featured products or bestsellers, category navigation tiles, brand story section, and trust badges (awards, certifications, customer count).</p>
      <p><strong>Category Sub-Pages:</strong> Dedicated pages for each product category — skincare, haircare, supplements, etc. Each with its own hero banner, product grid, and category-specific messaging.</p>
      <p><strong>Campaign/Seasonal Pages:</strong> Dedicated landing pages for Big Billion Days, Prime Day, Diwali offers, or new product launches. These are where your Sponsored Brands ads should point during sale events.</p>
      <p><strong>About/Brand Story Page:</strong> Your founding story, mission, manufacturing process, certifications, and team. Builds emotional connection and trust with first-time buyers.</p>

      <h2>Our Process</h2>
      <p><strong>Day 1–2:</strong> Brand audit — we review your existing Amazon presence, product catalog, brand assets, and competitor stores.</p>
      <p><strong>Day 3–5:</strong> Wireframe and layout design for all pages. We map your product catalog into logical categories and design the navigation flow.</p>
      <p><strong>Day 5–8:</strong> Full visual design with custom banners and branded components, reviewed on mobile and desktop.</p>
      <p><strong>Day 8–10:</strong> Review, revisions, and final assets delivered in Amazon Brand Store specs. We can also handle the store setup and publishing on your behalf.</p>

      <h2>Brand Store + Sponsored Brands = Maximum ROI</h2>
      <p>Sponsored Brands ads can direct relevant shoppers to a Brand Store. We plan store pages around product categories and the destination of each campaign.</p>
      <p>Store pages organize your products and brand information. Any effect on order value or sales must be measured using your own campaign and store data.</p>
      <p>Without a properly designed Brand Store, your Sponsored Brands budget is wasted on a generic landing page. We design stores specifically to maximize Sponsored Brands conversion — with clear CTAs, logical product flow, and category-specific landing pages for different ad campaigns.</p>

      <h2>Brand Store Analytics</h2>
      <p>Amazon provides detailed Brand Store analytics — visits, views per page, sales from store visitors, and traffic sources. We set up your store with analytics tracking in mind, creating distinct pages for different campaigns so you can measure exactly which traffic sources convert best.</p>

      <h2>The Complete Amazon Brand Ecosystem</h2>
      <p>A Brand Store works best as part of a complete Amazon presence: <a href="/services/listing-images">professional listing images</a> drive clicks from search, <a href="/services/a-plus-content">A+ Content</a> converts browsers into buyers, and the Brand Store ties everything together — building loyalty and repeat purchases. Learn more about <a href="/blog/amazon-listing-guide-2026">optimizing your listing images</a> and <a href="/blog/amazon-a-plus-content-guide">creating high-converting A+ Content</a>.</p>

      <h2>Pricing</h2>
      <p>${brandStorePricing} See our <a href="/pricing">pricing page</a> for the other catalog packages.</p>
      <p>Results depend on targeting, product demand, pricing and the shopping experience. PV Labs does not guarantee ROAS or a payback period.</p>

      <h2>Who This Is For</h2>
      <p>Brand Registered Amazon India sellers with 5+ products who want to build a premium brand presence, increase basket size, and maximize Sponsored Brands ad returns. Especially valuable for D2C brands transitioning from their own website to Amazon, and established brands wanting to differentiate from resellers.</p>
    `,
  },
];

export const serviceSlugs = serviceItems.map((s) => s.slug);

export const getServiceBySlug = (slug: string) =>
  serviceItems.find((s) => s.slug === slug);