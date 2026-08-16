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
    slug: "amazon-product-image-size-guide-2026",
    title: "Amazon Product Image Size Guide 2026: Complete Requirements & Best Practices",
    description:
      "Amazon product photo size guide for 2026 — exact pixel requirements, main vs secondary image specs, A+ content sizes, mobile optimization, and how Indian sellers can get compliant images.",
    excerpt:
      "Uploading the wrong size image on Amazon kills your zoom, tanks your CTR, and gets your listing suppressed. Here's the exact pixel-by-pixel spec sheet for 2026.",
    category: "Guide",
    readTime: "12 min",
    author: "Tankaar Sharma",
    date: "August 10, 2026",
    featured: true,
    image: "",
    content: `
      <h2>Amazon Product Image Size Requirements 2026</h2>
      <p>Let's start with what Amazon actually requires in 2026. The technical minimum is 500×500 pixels, but if you upload at that size, you're sabotaging your own listing. Amazon's zoom feature — the single biggest conversion driver on product pages — only activates at 1600×1600 pixels or above. Without zoom, buyers can't inspect texture, stitching, labels, or fine print. They scroll past.</p>
      <p>Here are the exact specifications for your Amazon main image (also called the hero image or MAIN slot):</p>
      <ul>
        <li><strong>Minimum size:</strong> 1600×1600px (recommended) — Amazon's technical minimum is 500px, but zoom requires 1600px+</li>
        <li><strong>Maximum size:</strong> 10,000×10,000px</li>
        <li><strong>Aspect ratio:</strong> 1:1 (square) recommended for consistent display across desktop and mobile</li>
        <li><strong>Background:</strong> Pure white (RGB 255, 255, 255) — no gradients, no shadows, no props</li>
        <li><strong>Frame fill:</strong> Product must occupy 85% or more of the image frame</li>
        <li><strong>File format:</strong> JPEG (.jpg), PNG, TIFF, or GIF (non-animated)</li>
        <li><strong>No watermarks, logos, text, or borders</strong> on the main image</li>
        <li><strong>Color profile:</strong> sRGB for accurate color rendering</li>
      </ul>
      <p>One thing most guides won't tell you: DPI (dots per inch) is irrelevant for Amazon. Amazon displays images in pixels on screens — not printing them. A 1600×1600px image at 72 DPI and 300 DPI looks identical on Amazon. Focus on pixel dimensions, not DPI settings in Photoshop.</p>
      <p>If you're an Indian seller uploading images from a phone camera or getting them via WhatsApp, you're likely losing resolution without realizing it. WhatsApp compresses images to under 1000px automatically. Always transfer original files via Google Drive, AirDrop, or cable. For a deeper dive into the full listing image strategy, read our <a href="/blog/amazon-listing-guide-2026">complete Amazon listing images guide for Indian sellers</a>.</p>

      <h2>Image Types & Their Specific Size Requirements</h2>
      <p>Amazon doesn't just have one image slot — you get up to 9 for standard listings, plus additional slots for A+ Content and Brand Store pages. Each has different size rules:</p>
      <p><strong>Main Image (MAIN slot):</strong></p>
      <ul>
        <li>1600×1600px minimum for zoom</li>
        <li>Pure white background mandatory</li>
        <li>Product only — no props, text, or lifestyle elements</li>
        <li>Must show the actual product (no illustrations or CAD renders for the main slot)</li>
      </ul>
      <p><strong>Additional Images (PT01–PT08 slots):</strong></p>
      <ul>
        <li>Same pixel requirements as main (1600×1600px recommended)</li>
        <li>White background NOT required — use lifestyle shots, infographics, comparison charts</li>
        <li>Text overlays allowed and recommended for feature callouts</li>
        <li>Infographic text must be readable at 400px width (mobile users)</li>
      </ul>
      <p><strong>A+ Content Module Images:</strong></p>
      <ul>
        <li>Standard modules: 970×600px (landscape banners)</li>
        <li>Comparison charts: 150×300px per product cell</li>
        <li>Image with text: 300×300px or 600×180px depending on module</li>
        <li>Brand Story banner: 1464×625px</li>
      </ul>
      <p>For a complete breakdown of A+ Content modules and how to design them, check our <a href="/blog/amazon-a-plus-content-guide">A+ Content guide for Indian sellers</a>. If you need professional A+ content designed, see our <a href="/services/a-plus-content">A+ Content design service</a>.</p>
      <p><strong>Brand Store Images:</strong></p>
      <ul>
        <li>Hero banner: 3000×600px</li>
        <li>Product tiles: 800×800px</li>
        <li>Category banners: 1500×300px</li>
      </ul>

      <h2>Why Image Size Matters for Rankings & Conversions</h2>
      <p>Amazon's search algorithm (A9, now evolving into what sellers call A10) uses Click-Through Rate (CTR) as a primary ranking signal. Your product image is the #1 factor determining whether someone clicks your listing in search results — not your title, not your price, not your reviews. The image.</p>
      <p>Here's the chain reaction: higher-quality images → higher CTR → Amazon ranks you higher → more impressions → more clicks → more sales → even higher rank. It's a compounding growth loop, and it starts with one thing: whether your image is sharp, zoom-eligible, and professionally composed.</p>
      <p>The zoom feature alone changes conversion dramatically. Amazon's own data shows that listings with zoom-eligible images (1600px+) see 30% or more higher conversion rates compared to listings without zoom. When a buyer can pinch-to-zoom on mobile and see the stitching on a leather wallet or the ingredient label on a protein powder — that's what closes the sale.</p>
      <p>In India specifically, over 70% of Amazon traffic comes from mobile devices. A 1000×1000px image might look "fine" on desktop, but on a 6.5-inch phone screen, it's blurry when pinched. Your infographic text becomes unreadable. Your comparison charts become meaningless. The buyer leaves and buys from a competitor whose images are crisp.</p>
      <p>This is why professional amazon product listing images design matters — not just for aesthetics, but for revenue.</p>

      <h2>Common Amazon Image Size Mistakes Indian Sellers Make</h2>
      <p>After working with hundreds of Amazon India sellers, here are the mistakes we see every single week:</p>
      <ul>
        <li><strong>Uploading low-resolution images:</strong> Phone cameras shoot at 4000×3000px — plenty of resolution. But sellers share images via WhatsApp (auto-compressed to ~800px), screenshot them from their gallery, or download thumbnails from their old Shopify store. By the time it reaches Amazon, you're uploading a 600px blurry mess.</li>
        <li><strong>Wrong aspect ratio:</strong> Amazon displays images in a 1:1 square grid. If you upload a 1600×900px landscape image, Amazon will either crop it or add white padding — making your product look small and unprofessional next to competitors who filled the frame properly.</li>
        <li><strong>Not filling 85% of the frame:</strong> Your product should dominate the image. If there's too much white space around a small product (common with jewelry, accessories, and small electronics), your listing thumbnail looks tiny in search results. Buyers' eyes skip right past it.</li>
        <li><strong>Text too small for mobile:</strong> Indian sellers love adding detailed infographic text — ingredients lists, feature callouts, USPs. But if that text isn't readable at 400px width (the approximate display size on mobile search), it's decoration, not information. Design for mobile first.</li>
        <li><strong>Using the same images for Amazon and Flipkart:</strong> Flipkart has different specs (1000×1000px minimum, different category rules). Copy-pasting Amazon images to Flipkart — or vice versa — leads to rejections and suboptimal display. Each platform needs optimized images.</li>
        <li><strong>Over-compression:</strong> Saving JPEGs at quality 60 or below to "reduce file size" destroys image quality. Amazon's maximum file size is 10MB — you have plenty of room. Save at JPEG quality 85-95 or use PNG for graphics-heavy infographics.</li>
      </ul>

      <h2>Amazon Product Photo Size for Different Categories</h2>
      <p>While the base specs (1600×1600px, white background, 85% fill) apply to all categories, Amazon has additional category-specific requirements that Indian sellers must follow:</p>
      <p><strong>Fashion & Apparel:</strong> Model shots required for clothing (front and back views). Size charts are practically mandatory — listings without them see 2-3x higher return rates. Flat-lay shots work for accessories but not for garments. Amazon India specifically requires human models (not mannequins) for most clothing subcategories.</p>
      <p><strong>Electronics:</strong> All ports, buttons, and connectivity options must be visible in at least one image. Include scale references — show the device next to common objects or hands. BIS certification marks should be visible in secondary images for products requiring bureau certification.</p>
      <p><strong>Food & Grocery:</strong> FSSAI license number must be visible. Nutritional information label, MRP, manufacturing date, and expiry date must all be legible in at least one image. For packaged foods, show the actual product outside the package in at least one additional image.</p>
      <p><strong>Jewelry & Accessories:</strong> Macro/close-up shots are critical — buyers want to see stone setting quality, clasp mechanisms, and finish details. Include images showing the product worn for scale. Hallmark/certification visibility is important for gold and silver items.</p>
      <p><strong>Home & Kitchen:</strong> Lifestyle context is king. Show the product in a real kitchen/home setting. Dimension images are essential — buyers need to know if that storage container actually fits in their fridge. Include images with common objects for scale reference.</p>

      <h2>How to Resize & Optimize Images for Amazon</h2>
      <p>If you're doing it yourself, here's the exact workflow for getting your amazon listing image size right:</p>
      <p><strong>Using Adobe Photoshop:</strong></p>
      <ul>
        <li>Open your image → Image → Image Size → Set width and height to 1600px (or 2000px for extra quality)</li>
        <li>Check "Constrain Proportions" — if your image isn't square, use Canvas Size to add white space</li>
        <li>Set color profile: Edit → Convert to Profile → sRGB IEC61966-2.1</li>
        <li>Save for Web: JPEG quality 85-92, or PNG if the image has text/graphics</li>
      </ul>
      <p><strong>Using Canva (free alternative):</strong></p>
      <ul>
        <li>Create custom design → 1600×1600px</li>
        <li>Upload your product photo → Position and resize to fill 85%+ of the canvas</li>
        <li>Set background to white (#FFFFFF)</li>
        <li>Download as PNG for best quality</li>
      </ul>
      <p><strong>Batch Resizing (for sellers with 10+ SKUs):</strong></p>
      <ul>
        <li>Use free tools like IrfanView (Windows) or Preview (Mac) for batch resize</li>
        <li>Set output to 2000×2000px, JPEG quality 90</li>
        <li>Process entire folders in one click</li>
      </ul>
      <p>The critical point most DIY guides miss: resizing a small image UP doesn't improve quality. If your source image is 800×800px, resizing it to 1600×1600px just makes a blurry image bigger. You need to start with a high-resolution source — either from a good camera (12MP+) or from CGI renders. At <a href="/services/listing-images">PV Labs</a>, we deliver all images at 2000×2000px with platform-specific variants — ready to upload directly to Seller Central without any resizing on your end.</p>

      <h2>Amazon Image Size Guide: Main Image vs Secondary Images</h2>
      <p>Think of your main image and secondary images as two completely different jobs:</p>
      <p><strong>Main Image = The Click Generator.</strong> Its only job is to make someone click your listing from search results. It must be clean, high-resolution, pure white background, product filling the frame. No text, no infographics, no lifestyle elements. Amazon strictly enforces this — violations can get your listing suppressed.</p>
      <p><strong>Secondary Images = The Conversion Machine.</strong> Once someone clicks, your secondary images (PT01 through PT08) must convince them to buy. This is where you have creative freedom:</p>
      <ul>
        <li><strong>Image 2 — Second Angle:</strong> Show the product from another perspective. Back, side, top-down.</li>
        <li><strong>Image 3 — Lifestyle Shot:</strong> Product in use. Real context. A person using the product in an Indian home setting.</li>
        <li><strong>Image 4 — Feature Infographic:</strong> Top 3-4 features with icons and short text callouts.</li>
        <li><strong>Image 5 — Dimensions/Scale:</strong> Exact measurements with reference objects.</li>
        <li><strong>Image 6 — Material/Ingredients:</strong> Close-up of materials, ingredients list, certification marks.</li>
        <li><strong>Image 7 — Comparison Chart:</strong> Your product vs competitors (without naming them) or vs your other variants.</li>
        <li><strong>Image 8 — Social Proof:</strong> Review quotes, star ratings overlay, awards, or "As Seen In" badges.</li>
        <li><strong>Image 9 — Brand Story/CTA:</strong> Who you are, why you exist, what makes you different.</li>
      </ul>
      <p>All secondary images should still be 1600×1600px, but the creative rules are relaxed. For the full 9-image strategy with examples, read our <a href="/blog/amazon-listing-guide-2026">Amazon listing images guide</a>.</p>

      <h2>Mobile Optimization: Why 1500px+ Is Non-Negotiable</h2>
      <p>Here's a stat that should change how you think about amazon product photo size: over 70% of Amazon India's traffic comes from mobile devices. In Tier 2 and Tier 3 cities — where e-commerce is growing fastest — that number is closer to 85%.</p>
      <p>On a mobile screen, your product image is displayed at roughly 400-500px width in search results and 600-800px on the product detail page. When a buyer pinch-to-zooms, Amazon renders the full-resolution image. If your uploaded image is only 1000px, the zoomed view is blurry. If it's 1600px+, the zoom is crisp and detailed — and that detail is what converts browsers into buyers.</p>
      <p>For infographic images (features, dimensions, comparison charts), there's another mobile challenge: text readability. Text that looks great at 1600px on desktop becomes microscopic on a phone screen. The rule of thumb: if your infographic text isn't readable when the image is displayed at 400px width, it's too small. Use minimum 24pt font for body text and 36pt+ for headlines in your infographic images.</p>
      <p>At PV Labs, we test every image at mobile display sizes before delivery. Every infographic we design uses mobile-first font sizes, high-contrast colors, and visual hierarchy that works at 400px. It's a small detail that most studios skip — and it's why our clients' listings convert higher on mobile.</p>

      <h2>Professional vs DIY: Cost Comparison for Indian Sellers</h2>
      <p>Let's break down the real cost of getting amazon product listing images right in India:</p>
      <p><strong>Option 1 — DIY (Phone + Canva):</strong></p>
      <ul>
        <li>Cost: ₹0 (your time isn't free, but let's ignore that)</li>
        <li>Quality: Low. Phone cameras in good lighting can be decent, but background removal, color correction, infographic design, and Amazon compliance take hours per SKU</li>
        <li>Risk: High rejection rate, no zoom quality, poor CTR</li>
        <li>Best for: Testing a single product before investing</li>
      </ul>
      <p><strong>Option 2 — Professional Photography Studio:</strong></p>
      <ul>
        <li>Cost: ₹8,000–₹40,000 per SKU (studio rental, photographer, props, post-production)</li>
        <li>Quality: High, but inflexible — if you need a different angle or background later, it's a full reshoot</li>
        <li>Turnaround: 7-14 days typically</li>
        <li>Best for: Large brands with physical product access and big budgets</li>
      </ul>
      <p><strong>Option 3 — CGI Product Visualization (PV Labs approach):</strong></p>
      <ul>
        <li>Cost: ₹3,000–₹8,000 per SKU for a complete 9-image set</li>
        <li>Quality: Photorealistic 3D renders — indistinguishable from studio photography</li>
        <li>Advantages: No shipping required (we work from reference photos), unlimited angles, easy revisions, guaranteed Amazon compliance</li>
        <li>Turnaround: 3-5 business days</li>
        <li>Best for: Sellers with 5+ SKUs who want professional quality at scale</li>
      </ul>
      <p>The ROI math is simple: upgrading from DIY images (2% CTR) to professional images (5% CTR) on a listing with 1,000 daily impressions and ₹800 average order value means ₹24,000 more revenue per day — ₹7.2 lakh per month — from a one-time ₹5,000-8,000 image investment. The payback period is literally 1 day.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>What size image for Amazon 2026?</h3>
      <p>Amazon's recommended image size for 2026 is 1600×1600 pixels or higher in a 1:1 square ratio. The technical minimum is 500×500px, but images below 1600px won't enable the zoom feature — which directly impacts conversion rates. For best results, upload at 2000×2000px in JPEG (quality 85+) or PNG format with a pure white background (RGB 255,255,255).</p>
      <h3>How to create Amazon product images?</h3>
      <p>You have three options: (1) DIY with a smartphone and Canva — shoot on white background, remove background, resize to 1600×1600px; (2) Hire a product photographer — costs ₹8,000-40,000 per SKU in India; (3) Use a CGI studio like <a href="/services/listing-images">PV Labs</a> — send reference photos, get photorealistic renders in 3-5 days at ₹3,000-8,000 per SKU with compliance guarantee. Option 3 is the most cost-effective for sellers with multiple products.</p>
      <h3>Which size image to upload for best quality on Amazon A+ listing?</h3>
      <p>A+ Content modules use different sizes than standard listing images. Standard image modules are 970×600px. Comparison chart cells are 150×300px. Image-with-text modules are 300×300px or 600×180px. Brand Story banners are 1464×625px. Always upload at or above these exact sizes — never stretch smaller images to fit. Learn more in our <a href="/blog/amazon-a-plus-content-guide">complete A+ Content guide</a>.</p>
      <h3>What is the Amazon product image size in pixels?</h3>
      <p>The recommended Amazon product image size is 1600×1600 pixels (minimum for zoom) up to 10,000×10,000 pixels (maximum upload limit). Most professional sellers upload at 2000×2000px for the best balance of quality and file size. The aspect ratio should be 1:1 (square) for consistent display across all devices.</p>
      <h3>What is the Amazon image size ratio?</h3>
      <p>Amazon recommends a 1:1 (square) aspect ratio for all product images. While Amazon technically accepts other ratios, non-square images get cropped or padded with white space in search results — making your product appear smaller than competitors. Always design and export at 1:1 ratio (e.g., 1600×1600px, 2000×2000px).</p>

      <h2>Get Amazon-Compliant Images — Zero Rejections Guaranteed</h2>
      <p>Getting your amazon product photo size right is just the starting point. What really matters is the complete package — resolution, composition, infographic design, mobile optimization, and Amazon compliance. One wrong detail can get your listing suppressed or lose you thousands in daily sales.</p>
      <p>At PV Labs, we create complete listing image sets — 9 Amazon-optimized images per SKU — using CGI product visualization. No studio needed. No product shipping. Just photorealistic, conversion-optimized images delivered in 3-5 business days with a 100% compliance guarantee. If Amazon rejects any image, we redo it free.</p>
      <p><strong>Ready to upgrade your listings?</strong> <a href="/contact">Get in touch with PV Labs</a> or explore our <a href="/services/listing-images">listing image design service</a> to see how we work.</p>
    `,
  },
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
    slug: "how-to-sell-on-amazon-india-2026",
    title: "How to Sell on Amazon India 2026: Complete Step-by-Step Guide for Beginners",
    description:
      "Complete guide on how to sell on Amazon India in 2026 — account registration, product listing, FBA vs self-ship, fees, listing images, A+ content, advertising, and scaling strategies for new Indian sellers.",
    excerpt:
      "Amazon India has 300M+ active buyers waiting. Here's exactly how to go from zero to your first sale — and then scale to ₹10L/month.",
    category: "Guide",
    readTime: "18 min",
    author: "Tankaar Sharma",
    date: "August 12, 2026",
    featured: true,
    image: "",
    content: `
      <h2>Why Sell on Amazon India in 2026?</h2>
      <p>Amazon India is the largest e-commerce marketplace in the country with over 300 million active buyers, 15 lakh+ sellers, and a GMV (Gross Merchandise Value) crossing ₹4 lakh crore annually. Whether you're a manufacturer in Rajkot, a reseller in Delhi, or a D2C brand in Bangalore — Amazon India gives you access to buyers in 19,000+ pin codes without needing a single physical store.</p>
      <p>In 2026, several factors make this the best time to start selling on Amazon India:</p>
      <ul>
        <li><strong>Tier 2 & 3 city growth:</strong> 65% of new Amazon India buyers come from non-metro cities. These buyers have fewer local shopping options and actively search on Amazon for products they can't find locally.</li>
        <li><strong>Government support:</strong> The ONDC initiative and Digital India programs are pushing millions of small businesses online. Amazon's partnership with MSME schemes makes seller onboarding easier than ever.</li>
        <li><strong>Lower competition per niche:</strong> While 15 lakh sellers sounds like a lot, most categories still have only 20-50 serious sellers with professional listings. The bar is low — professional images and A+ content immediately put you in the top 10%.</li>
        <li><strong>FBA infrastructure:</strong> Amazon now operates 60+ fulfillment centers across India. FBA (Fulfillment by Amazon) handles storage, packing, shipping, and returns — letting you run an e-commerce business from your laptop.</li>
      </ul>

      <h2>Step 1: Choose What to Sell on Amazon India</h2>
      <p>Before you create an account, you need a product. This is where 80% of new sellers fail — they pick a product based on gut feeling instead of data. Here's how to choose correctly:</p>
      <p><strong>Product Research Method:</strong></p>
      <ul>
        <li><strong>Best Sellers & Movers and Shakers:</strong> Go to amazon.in/bestsellers. Look at top-selling products in your category of interest. Note which ones have fewer than 100 reviews — these are beatable.</li>
        <li><strong>Demand validation:</strong> Use tools like Helium 10, Jungle Scout, or even Google Trends India to check monthly search volume. If a keyword gets 5,000+ searches/month on Amazon India, there's demand.</li>
        <li><strong>Competition analysis:</strong> Search your target keyword on Amazon. If the first page results have poor images (phone camera shots, no infographics), weak A+ content, and fewer than 200 reviews — you can outrank them with better execution.</li>
        <li><strong>Margin calculation:</strong> Your product selling price minus (product cost + Amazon referral fee + FBA fee + shipping + GST) should leave you at least 25-30% margin. Below that, it's not worth the effort.</li>
      </ul>
      <p><strong>Best categories for new Indian sellers in 2026:</strong></p>
      <ul>
        <li>Home & Kitchen (low return rates, high demand)</li>
        <li>Health & Personal Care (repeat purchases, brand loyalty)</li>
        <li>Baby Products (parents spend without much price sensitivity)</li>
        <li>Office Products (steady B2B + B2C demand)</li>
        <li>Pet Supplies (fastest growing category on Amazon India)</li>
      </ul>

      <h2>Step 2: Register Your Amazon Seller Account</h2>
      <p>Creating an Amazon seller account in India takes 15-30 minutes if you have your documents ready. Here's what you need:</p>
      <p><strong>Documents required:</strong></p>
      <ul>
        <li>GST number (GSTIN) — mandatory for all sellers</li>
        <li>PAN card (individual or business)</li>
        <li>Bank account with IFSC code (for payment deposits)</li>
        <li>Mobile number and email ID</li>
        <li>Address proof (Aadhaar, utility bill, or rent agreement)</li>
      </ul>
      <p><strong>Registration process:</strong></p>
      <ul>
        <li>Go to sellercentral.amazon.in and click "Register Now"</li>
        <li>Enter your mobile number — Amazon sends an OTP</li>
        <li>Fill business details: legal name (as per PAN), business type (Individual/Company/LLP), and address</li>
        <li>Upload GST certificate and PAN</li>
        <li>Add bank account details for payment settlement (Amazon pays every 7 days to your bank)</li>
        <li>Complete tax interview and identity verification</li>
        <li>Choose your display name (this is your brand name buyers will see)</li>
      </ul>
      <p><strong>Pro tip:</strong> Register as a "Business" seller, not "Individual" — even if you're a one-person operation. Business accounts get access to Amazon Business (B2B) orders which can add 20-30% extra revenue with zero additional effort.</p>
      <p>For a detailed Hindi walkthrough of account creation, read our <a href="/blog/amazon-seller-account-kaise-banaye">Amazon seller account kaise banaye guide</a>.</p>

      <h2>Step 3: List Your First Product</h2>
      <p>Once your account is active, you need to create your product listing. This is where most Indian sellers rush and pay the price later. A listing has 5 components that directly impact your sales:</p>
      <p><strong>3.1 Product Title (200 characters max):</strong></p>
      <p>Your title must include: Brand Name + Product Name + Key Feature + Size/Quantity + Color/Variant. Example: "NutriFuel Whey Protein Powder | 24g Protein Per Scoop | 1kg Double Chocolate | No Added Sugar | For Gym & Recovery"</p>
      <p><strong>3.2 Bullet Points (5 bullets, 500 characters each):</strong></p>
      <p>Each bullet should cover one benefit. Start with the benefit, then explain the feature. Example: "BUILDS LEAN MUSCLE — 24g of fast-absorbing whey protein per scoop with complete amino acid profile for post-workout recovery."</p>
      <p><strong>3.3 Product Description (2000 characters):</strong></p>
      <p>This is what appears below the fold. Use it to tell your brand story, explain use cases, and address objections. If you have Brand Registry, replace this with <a href="/blog/amazon-a-plus-content-guide">A+ Content</a> instead — it converts 3-10% better.</p>
      <p><strong>3.4 Backend Keywords (250 bytes):</strong></p>
      <p>Hidden keywords that help Amazon's algorithm find your product. Include: Hindi spellings, common misspellings, synonyms, and related terms. Don't repeat words from your title.</p>
      <p><strong>3.5 Product Images (9 slots):</strong></p>
      <p>This is the single most important part of your listing. Professional images can increase your CTR by 150% and conversion by 30-50%. You need: 1 hero image (white background, 1600×1600px+), lifestyle shots, infographics, size charts, and comparison visuals. Read our <a href="/blog/amazon-product-image-size-guide-2026">complete Amazon image size guide</a> for exact specifications.</p>
      <p>For a step-by-step listing creation walkthrough in Hindi, check our <a href="/blog/amazon-listing-kaise-kare">Amazon listing kaise kare guide</a>.</p>

      <h2>Step 4: FBA vs Self-Ship — Which to Choose?</h2>
      <p>Amazon offers two fulfillment options in India. Your choice here impacts delivery speed, Buy Box win rate, customer trust, and your margins:</p>
      <p><strong>FBA (Fulfillment by Amazon):</strong></p>
      <ul>
        <li>You ship inventory to Amazon's warehouse. They handle storage, packing, shipping, and returns.</li>
        <li>Your products get "Fulfilled by Amazon" and "Prime" badges — which increase conversion by 20-30%</li>
        <li>Delivery in 1-2 days to most pin codes</li>
        <li>Amazon handles customer service and returns</li>
        <li>Fees: ₹25-150 per unit (depending on size and weight) + storage fee (₹35-45/cubic ft per month)</li>
        <li>Best for: Products under 5kg, high-volume SKUs, sellers who don't want to handle logistics</li>
      </ul>
      <p><strong>Self-Ship (Easy Ship / Seller Flex):</strong></p>
      <ul>
        <li>You store inventory at your location. Amazon's courier picks up orders daily.</li>
        <li>Lower fees but slower delivery (3-5 days)</li>
        <li>You handle packaging and returns</li>
        <li>Best for: Large/heavy products, low-volume testing, sellers with existing warehouse space</li>
      </ul>
      <p><strong>Recommendation for new sellers:</strong> Start with FBA for your top 2-3 SKUs. The Prime badge and faster delivery will get you initial sales and reviews faster. Once you're doing 50+ orders/day, add Seller Flex for cost optimization. For detailed FBA fee breakdown, read our <a href="/blog/amazon-fba-india-2026">Amazon FBA India guide</a>.</p>

      <h2>Step 5: Pricing Strategy for Amazon India</h2>
      <p>Pricing on Amazon India is different from pricing in your local market. You need to account for multiple fees and still remain competitive:</p>
      <p><strong>Amazon's fee structure:</strong></p>
      <ul>
        <li><strong>Referral fee:</strong> 6-45% of selling price (depends on category — most are 8-15%)</li>
        <li><strong>Closing fee:</strong> ₹5-30 per unit (fixed, based on price slab)</li>
        <li><strong>FBA fee:</strong> ₹25-150 per unit (if using FBA)</li>
        <li><strong>GST:</strong> 18% on all Amazon fees (not on your product price)</li>
        <li><strong>Weight handling:</strong> Additional for items over 500g</li>
      </ul>
      <p><strong>Pricing formula:</strong> Selling Price = (Product Cost + All Amazon Fees + Shipping + GST on Fees) ÷ (1 - Your Target Margin). If your product costs ₹200, total Amazon fees are ₹120, and you want 30% margin, your selling price should be: (200 + 120) ÷ 0.7 = ₹457.</p>
      <p>Use Amazon's Revenue Calculator in Seller Central to check exact fees before listing. Never price without calculating — many Indian sellers discover they're losing money per order because they didn't account for all fees.</p>

      <h2>Step 6: Get Your First Reviews</h2>
      <p>Reviews are the social proof that converts browsers into buyers. New listings with zero reviews struggle to get traction. Here's how to ethically get your first 10-20 reviews:</p>
      <ul>
        <li><strong>Amazon Vine:</strong> Enroll your product in Amazon Vine (costs ₹0 but you give away free units). Vine reviewers are trusted and leave detailed reviews within 30 days.</li>
        <li><strong>Request a Review button:</strong> In Seller Central, go to Orders → click any delivered order → click "Request a Review". Do this for every order. Expect 5-10% of buyers to leave a review.</li>
        <li><strong>Product inserts:</strong> Include a small card in your packaging thanking the buyer and asking for honest feedback. Never ask for "5 stars" — just say "We'd love your honest review on Amazon." Keep it compliant.</li>
        <li><strong>Quality product = organic reviews:</strong> If your product genuinely delivers value, reviews come naturally over time. The fastest path to reviews is selling a good product to the right audience.</li>
      </ul>
      <p><strong>What NOT to do:</strong> Never buy fake reviews. Amazon India's AI detection is aggressive in 2026. Sellers caught manipulating reviews get permanent account suspension — losing all inventory, reviews, and brand equity overnight.</p>

      <h2>Step 7: Amazon Advertising (PPC) — Start Getting Sales</h2>
      <p>For new listings with no reviews and no sales history, organic ranking is nearly impossible. Amazon PPC (Pay-Per-Click) advertising is how you get your first 50-100 sales and start the ranking flywheel:</p>
      <p><strong>Campaign types for beginners:</strong></p>
      <ul>
        <li><strong>Sponsored Products (Auto):</strong> Start here. Amazon automatically shows your ad for relevant searches. Set ₹500-1000/day budget. Let it run 7 days to gather keyword data.</li>
        <li><strong>Sponsored Products (Manual):</strong> After 7 days, check which keywords converted in your auto campaign. Move the winners to a manual campaign with higher bids for more control.</li>
        <li><strong>Sponsored Brands:</strong> Available after Brand Registry. Shows your brand logo + 3 products at the top of search. Great for brand awareness.</li>
      </ul>
      <p><strong>Target ACoS (Advertising Cost of Sale):</strong> For new products, accept 30-50% ACoS for the first 2-3 months. You're buying reviews and ranking, not profit. Once you hit 50+ reviews and page 1 organic ranking, reduce bids and aim for 15-20% ACoS.</p>
      <p><strong>Budget recommendation:</strong> Minimum ₹15,000-25,000/month for the first 3 months. This is not an expense — it's an investment in ranking. Sellers who skip advertising stay on page 10 forever.</p>

      <h2>Step 8: Optimize Your Listing Images</h2>
      <p>After your listing is live and you've started getting some traffic via PPC, the biggest lever you can pull is image optimization. This is where most Indian sellers leave money on the table.</p>
      <p>Your listing images are responsible for:</p>
      <ul>
        <li><strong>CTR (Click-Through Rate):</strong> Your main image determines whether buyers click on your listing from search results. Professional images get 2-3x more clicks than phone camera shots.</li>
        <li><strong>Conversion Rate:</strong> Your secondary images (lifestyle, infographic, comparison chart) convince the buyer to add to cart. Listings with all 9 image slots filled convert 30-50% better.</li>
        <li><strong>Return Rate:</strong> Clear dimension images, material close-ups, and "what's in the box" shots set accurate expectations — reducing returns by 15-25%.</li>
      </ul>
      <p>At PV Labs, we create complete 9-image listing sets using CGI product visualization. No product shipping needed, delivered in 3-5 days, 100% Amazon compliant. Our clients see an average 40% increase in conversion after upgrading their images. <a href="/contact">Get a free listing audit</a> to see where your images are losing you sales.</p>

      <h2>Step 9: Scale with A+ Content & Brand Store</h2>
      <p>Once you're getting 10+ orders/day, it's time to build your brand presence on Amazon:</p>
      <ul>
        <li><strong>A+ Content:</strong> Replace your plain text description with rich visual modules — brand story, feature highlights, comparison charts, lifestyle images. Increases conversion by 3-10%. Read our <a href="/blog/amazon-a-plus-content-guide">complete A+ Content guide</a>.</li>
        <li><strong>Brand Store:</strong> Your own multi-page storefront on Amazon. Drives repeat purchases and cross-sells. Useful for running Sponsored Brand ads that send traffic to your store instead of a single listing.</li>
        <li><strong>Brand Registry:</strong> Register your trademark to unlock A+ Content, Brand Store, Vine, Brand Analytics, and protection against hijackers. Even a pending TM application works.</li>
      </ul>

      <h2>Step 10: Common Mistakes New Amazon India Sellers Make</h2>
      <ul>
        <li><strong>Launching without professional images:</strong> You only get one chance at a first impression. Bad images = low CTR = Amazon stops showing your listing. Invest in images before spending on ads.</li>
        <li><strong>Ignoring Amazon fees:</strong> Many sellers realize they're losing ₹50-100 per order after 3 months of selling. Calculate fees BEFORE setting your price.</li>
        <li><strong>Copying competitor listings:</strong> Amazon penalizes duplicate content. Write original titles, bullets, and descriptions. Same applies to images — don't screenshot competitor photos.</li>
        <li><strong>Not using FBA:</strong> Self-shipping is cheaper but the Prime badge and 1-2 day delivery win the Buy Box 80% of the time. Use FBA for your top sellers.</li>
        <li><strong>Giving up after 30 days:</strong> Amazon is a 3-6 month game. Most successful sellers start seeing profit in month 4-5 after building reviews, ranking, and optimizing ads.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <h3>How much does it cost to start selling on Amazon India?</h3>
      <p>Minimum investment: ₹50,000-1,00,000 for a serious launch. This covers: product inventory (₹20,000-50,000), professional listing images (₹5,000-8,000), advertising budget for first 2 months (₹30,000-50,000), and GST registration (₹2,000-5,000 via CA). You can start with less, but underfunded launches rarely succeed.</p>
      <h3>Is selling on Amazon India profitable in 2026?</h3>
      <p>Yes — if you pick the right product and execute well. Average successful sellers on Amazon India make 20-35% net margin after all fees. The key is product selection (avoid ultra-competitive categories), professional presentation (images + A+ content), and patience (3-6 months to profitability).</p>
      <h3>Do I need GST to sell on Amazon India?</h3>
      <p>Yes, GST registration is mandatory for all Amazon India sellers — there is no exemption regardless of turnover. You need a GSTIN before Amazon will activate your account. Register at gst.gov.in or through a CA (costs ₹2,000-5,000).</p>
      <h3>Can I sell on Amazon India without inventory?</h3>
      <p>Yes, through dropshipping or Amazon's "Local Shops" program. However, margins are thin (5-10%) and you have no control over quality or delivery. For sustainable income, hold your own inventory — even if it's just 50-100 units stored at home or in an FBA warehouse.</p>
      <h3>How long does it take to get first sale on Amazon India?</h3>
      <p>With PPC advertising: 1-7 days after listing goes live. Without advertising: could take weeks or months if your listing doesn't rank organically. This is why we recommend ₹500-1000/day ad spend from day 1.</p>

      <h2>Ready to Start Selling on Amazon India?</h2>
      <p>Selling on Amazon India in 2026 is a genuine business opportunity — not a get-rich-quick scheme. It requires the right product, professional presentation, strategic advertising, and 3-6 months of patience. But the payoff is real: sellers who execute well are building ₹5L-50L/month businesses from their homes.</p>
      <p>The #1 thing that separates successful Amazon India sellers from failures is listing quality — specifically images and A+ content. This is what we do at PV Labs. We create conversion-optimized listing images and A+ content for Indian sellers, delivered in 3-5 days with zero rejections guaranteed.</p>
      <p><strong>Starting your Amazon journey?</strong> <a href="/contact">Get in touch with PV Labs</a> for a free listing strategy consultation. We'll tell you exactly what images you need for your category and how to outrank your top 5 competitors visually.</p>
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