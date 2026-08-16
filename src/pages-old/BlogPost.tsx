"use client";
import { redirect } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar, Sparkles, ShieldCheck, ArrowRight, Twitter, Linkedin, Facebook, Link as LinkIcon } from "lucide-react";
import { socialLinks } from "@/lib/social-links";
import serviceBranding from "../assets/Blog11.png";
import serviceWebdesign from "../assets/Blog22.png";
import serviceAppdesign from "../assets/Blog33.png";
import serviceSocial from "@/assets/service-social.jpg";

const blogData: Record<string, any> = {
    "amazon-product-image-size-guide-2026": {
    title: "Amazon Product Image Size Guide 2026: Complete Requirements & Best Practices",
    category: "Guide",
    subtitle: "Image Size & Compliance",
    author: "Tankaar Sharma",
    date: "August 10, 2026",
    readTime: "12 min",
    image: null,
    content: (
      <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="text-primary" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Amazon Product Image Size Requirements 2026</h2>
          </div>
          <div className="glass-card p-6 md:p-8 border-l-4 border-primary bg-white/50 relative overflow-hidden">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium relative z-10">
              "Amazon's technical minimum is 500×500 pixels, but if you upload at that size, you're sabotaging your own listing. The zoom feature — the single biggest conversion driver — only activates at 1600×1600px or above."
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-all bg-white/50 group">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900">
              <ShieldCheck className="text-primary group-hover:scale-110 transition-transform" size={24} /> Main Image Specs
            </h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Recommended: <span className="text-gray-900 font-bold">1600×1600px minimum</span> (zoom requires this)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Maximum: <span className="text-gray-900 font-bold">10,000×10,000px</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Aspect ratio: <span className="text-gray-900 font-bold">1:1 (square)</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Background: <span className="text-gray-900 font-bold">Pure white RGB (255, 255, 255)</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Frame fill: <span className="text-gray-900 font-bold">85%+ of image area</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Format: <span className="text-gray-900 font-bold">JPEG, PNG, TIFF</span> — no watermarks/text</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Color profile: <span className="text-gray-900 font-bold">sRGB</span></span>
              </li>
            </ul>
          </div>
          <div className="glass-card p-6 md:p-8 hover:border-accent/30 transition-all bg-white/50">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-gray-900">
              <Clock className="text-accent" size={24} /> A+ Content Sizes
            </h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Standard modules: <span className="text-gray-900 font-bold">970×600px</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Comparison charts: <span className="text-gray-900 font-bold">150×300px per cell</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Brand Story banner: <span className="text-gray-900 font-bold">1464×625px</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Brand Store hero: <span className="text-gray-900 font-bold">3000×600px</span></span>
              </li>
            </ul>
            <div className="flex items-center gap-2 p-4 bg-accent/5 rounded-2xl border border-accent/10 text-accent font-bold text-sm mt-6">
              <Sparkles size={16} /> DPI is irrelevant — only pixels matter on screens
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Why Image Size Matters for Rankings & Conversions</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              Amazon's A9 algorithm uses Click-Through Rate (CTR) as a primary ranking signal. Your product image is the #1 factor determining whether someone clicks your listing in search results — not your title, not your price, not your reviews. The image.
            </p>
            <p>
              Here's the chain reaction: higher-quality images → higher CTR → Amazon ranks you higher → more impressions → more clicks → more sales → even higher rank. It's a compounding growth loop that starts with whether your image is sharp, zoom-eligible, and professionally composed.
            </p>
            <p>
              The zoom feature alone changes conversion dramatically. Amazon's own data shows listings with zoom-eligible images (1600px+) see <span className="text-gray-900 font-bold">30%+ higher conversion rates</span> compared to listings without zoom. When a buyer can pinch-to-zoom and see the stitching on a leather wallet or the ingredient label on a protein powder — that's what closes the sale.
            </p>
            <p>
              In India specifically, over 70% of Amazon traffic comes from mobile devices. A 1000×1000px image might look "fine" on desktop, but on a 6.5-inch phone screen, it's blurry when pinched. Your infographic text becomes unreadable. The buyer leaves and buys from a competitor whose images are crisp.
            </p>
          </div>
        </section>

        <section className="bg-gray-900 rounded-[32px] md:rounded-[40px] p-6 md:p-10 text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 blur-[100px]" />
          <h2 className="text-2xl font-black mb-8">Common Image Size Mistakes Indian Sellers Make</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">01.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">WhatsApp compression:</span> Sharing product photos via WhatsApp auto-compresses to ~800px. Always transfer via Google Drive or cable.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">02.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Wrong aspect ratio:</span> Uploading 1600×900px landscape images. Amazon crops or pads — making your product look small.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">03.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Not filling 85% frame:</span> Too much white space makes your thumbnail tiny in search results. Buyers scroll past.</p>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">04.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Text too small for mobile:</span> Infographic text unreadable at 400px width is decoration, not information.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">05.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Same images for Amazon & Flipkart:</span> Different platforms, different specs. Copy-pasting leads to rejections.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">06.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Over-compression:</span> JPEG quality 60 destroys sharpness. Amazon allows 10MB — save at quality 85-95.</p>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-8">Category-Specific Image Requirements</h2>
          <div className="space-y-4">
            {[
              { c: "Fashion & Apparel", t: "Model shots mandatory (front/back). Size charts reduce returns by 2-3x. Human models required — no mannequins." },
              { c: "Electronics", t: "All ports and buttons visible. BIS certification marks in secondary images. Scale reference with common objects." },
              { c: "Food & Grocery", t: "FSSAI license visible. Nutritional info, MRP, expiry date must be legible. Show product outside packaging." },
              { c: "Jewelry & Accessories", t: "Macro close-ups for stone setting and clasp quality. Worn-on-model for scale. Hallmark visibility for gold/silver." },
              { c: "Home & Kitchen", t: "Lifestyle context in Indian home settings. Dimension images essential. Show product with common objects for scale." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-6 rounded-3xl border border-gray-100 hover:border-primary/20 transition-all">
                <div className="w-full md:w-36 font-black text-[10px] uppercase tracking-tighter text-gray-400 md:border-r md:border-gray-100 md:pr-6">{item.c}</div>
                <p className="text-sm text-gray-600 font-medium">{item.t}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">How to Resize & Optimize Images for Amazon</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              <span className="text-gray-900 font-bold">Using Adobe Photoshop:</span> Image → Image Size → Set to 1600px or 2000px. If not square, use Canvas Size to add white space. Convert to sRGB profile. Save for Web at JPEG quality 85-92, or PNG for graphics-heavy infographics.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Using Canva (free):</span> Create custom design at 1600×1600px. Upload product photo, position to fill 85%+ of canvas. Set background to white (#FFFFFF). Download as PNG.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Critical point:</span> Resizing a small image UP doesn't improve quality. An 800×800px image resized to 1600×1600px is just a blurry image made bigger. You need high-resolution source files — either from a good camera (12MP+) or from CGI renders.
            </p>
            <p>
              At PV Labs, we deliver all images at 2000×2000px with platform-specific variants — ready to upload directly to Seller Central without any resizing on your end.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center text-sm">9</span>
            Main Image vs Secondary Images
          </h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              <span className="text-gray-900 font-bold">Main Image = The Click Generator.</span> Its only job is to make someone click from search results. Clean, high-resolution, pure white background, product filling the frame. No text, no infographics, no lifestyle. Violations get your listing suppressed.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Secondary Images = The Conversion Machine.</span> Once someone clicks, images PT01–PT08 must convince them to buy:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {[
              { t: "Second Angle", d: "Back, side, or top-down perspective." },
              { t: "Lifestyle Shot", d: "Product in use in an Indian home setting." },
              { t: "Feature Infographic", d: "Top 3-4 features with icons and text." },
              { t: "Dimensions/Scale", d: "Exact measurements with reference objects." },
              { t: "Material/Ingredients", d: "Close-up of materials, certifications." },
              { t: "Comparison Chart", d: "Your variants side by side." },
              { t: "Social Proof", d: "Review quotes, awards, star ratings." },
              { t: "Brand Story/CTA", d: "Who you are, why you're different." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all group">
                <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 block">Image {i + 2}</span>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.t}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Mobile Optimization: Why 1500px+ Is Non-Negotiable</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              Over 70% of Amazon India's traffic comes from mobile devices. In Tier 2 and Tier 3 cities — where e-commerce is growing fastest — that number is closer to 85%.
            </p>
            <p>
              On mobile, your image displays at 400-500px in search and 600-800px on the detail page. When a buyer pinch-to-zooms, Amazon renders the full-resolution image. If it's only 1000px, the zoom is blurry. At 1600px+, it's crisp — and that detail converts browsers into buyers.
            </p>
            <p>
              For infographics: if text isn't readable at 400px width, it's too small. Use minimum 24pt body text and 36pt+ for headlines. At PV Labs, we test every infographic at mobile display sizes before delivery.
            </p>
          </div>
        </section>

        <section className="bg-primary/5 rounded-[32px] md:rounded-[40px] p-6 md:p-10 border border-primary/10">
          <h2 className="text-2xl font-black text-gray-900 mb-6">Professional vs DIY: Cost Comparison</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-gray-100">
              <h4 className="font-black text-gray-900 mb-2">DIY (Phone + Canva)</h4>
              <p className="text-2xl font-black text-gray-900 mb-3">₹0</p>
              <ul className="space-y-2 text-xs text-gray-500 font-medium">
                <li>• High rejection rate</li>
                <li>• No zoom quality</li>
                <li>• Poor CTR</li>
                <li>• Best for: testing 1 product</li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-gray-100">
              <h4 className="font-black text-gray-900 mb-2">Professional Photography</h4>
              <p className="text-2xl font-black text-gray-900 mb-3">₹8K–₹40K<span className="text-sm font-medium text-gray-400">/SKU</span></p>
              <ul className="space-y-2 text-xs text-gray-500 font-medium">
                <li>• High quality but inflexible</li>
                <li>• Full reshoot for changes</li>
                <li>• 7-14 day turnaround</li>
                <li>• Best for: large brands</li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl bg-gray-900 text-white border border-gray-800">
              <h4 className="font-black mb-2">CGI (PV Labs)</h4>
              <p className="text-2xl font-black mb-3">₹3K–₹8K<span className="text-sm font-medium text-gray-400">/SKU</span></p>
              <ul className="space-y-2 text-xs text-gray-300 font-medium">
                <li>• Photorealistic renders</li>
                <li>• No shipping needed</li>
                <li>• Unlimited angles & revisions</li>
                <li>• 3-5 days, 100% compliant</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 font-medium mt-6 leading-relaxed">
            <span className="text-gray-900 font-bold">ROI math:</span> Upgrading from 2% CTR to 5% CTR on 1,000 daily impressions at ₹800 AOV = ₹24,000 more revenue per day — ₹7.2 lakh/month from a one-time ₹5,000-8,000 investment. Payback: 1 day.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What size image for Amazon 2026?", a: "1600×1600 pixels minimum for zoom in 1:1 square ratio. Technical minimum is 500px but zoom requires 1600+. Best practice: upload at 2000×2000px in JPEG quality 85+ or PNG with pure white background." },
              { q: "How to create Amazon product images?", a: "Three options: (1) DIY with phone + Canva at ₹0; (2) Professional photographer at ₹8,000-40,000/SKU; (3) CGI team like PV Labs at ₹3,000-8,000/SKU with compliance guarantee and 3-5 day delivery." },
              { q: "Which size for Amazon A+ listing images?", a: "Standard modules: 970×600px. Comparison charts: 150×300px per cell. Image-with-text: 300×300px or 600×180px. Brand Story banners: 1464×625px. Never stretch smaller images to fit." },
              { q: "What is Amazon product image size in pixels?", a: "1600×1600px minimum for zoom, up to 10,000×10,000px maximum. Most professionals upload at 2000×2000px for optimal quality-to-file-size balance. Always 1:1 square ratio." },
              { q: "What is the Amazon image size ratio?", a: "1:1 (square). Non-square images get cropped or padded with white space, making your product look smaller than competitors. Always design at square ratio." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/30">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="glass-card p-6 md:p-10 bg-white shadow-2xl border border-gray-100 rounded-2xl md:rounded-3xl w-full">
            <div className="p-4 sm:p-6 md:p-10 bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl sm:rounded-2xl md:rounded-3xl text-center w-full">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-black mb-2 sm:mb-3 md:mb-4 px-2">
                Get Amazon-Compliant Images — Zero Rejections Guaranteed
              </h3>
              <p className="text-gray-400 text-[11px] sm:text-xs md:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed px-2">
                9 images per SKU. CGI-based. 3-5 day delivery. If Amazon rejects any image, we redo it free.
              </p>
              <button className="w-full sm:w-auto px-4 sm:px-6 md:px-10 py-2 sm:py-2.5 md:py-4 bg-primary hover:bg-accent text-white font-black uppercase tracking-widest text-[9px] sm:text-[10px] md:text-xs rounded-xl transition-all">
                Get Your Images Done →
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  },
  "amazon-listing-guide-2026": {
    title: "Amazon Listing Images - Complete Guide for Indian Sellers 2026",
    category: "Guide",
    subtitle: "CTR & Conversion Optimization",
    author: "Rudra",
    date: "March 20, 2026",
    readTime: "8 min",
    image: serviceBranding,
    content: (
      <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="text-primary" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Why It Matters More Than Anything Else</h2>
          </div>
          <div className="glass-card p-6 md:p-8 border-l-4 border-primary bg-white/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles size={80} className="text-primary" />
            </div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed italic font-medium relative z-10">
              "Amazon gives every buyer a split second to decide, scroll or click. In that moment, your main image is the only thing that exists. No title, no price, no reviews - just the image. A bad image = no click = no sale. Simple."
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-all bg-white/50 group">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900">
              <ShieldCheck className="text-primary group-hover:scale-110 transition-transform" size={24} /> Technical Specs 2026
            </h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Pure white background - <span className="text-gray-900 font-bold">RGB (255, 255, 255)</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Product must fill at least <span className="text-gray-900 font-bold">85% of the frame</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Minimum <span className="text-gray-900 font-bold">1500 × 1500 pixels</span> recommended</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>JPEG, PNG, or TIFF format - <span className="text-gray-900 font-bold">No watermarks</span></span>
              </li>
            </ul>
          </div>
          <div className="glass-card p-6 md:p-8 hover:border-accent/30 transition-all bg-white/50">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-gray-900">
              <Clock className="text-accent" size={24} /> How Many Images?
            </h3>
            <p className="text-gray-600 font-medium mb-6">
              Amazon allows up to <span className="text-gray-900 font-bold">9 images</span> per listing. Use all of them. Every empty slot is a missed opportunity to convince your buyer.
            </p>
            <div className="flex items-center gap-2 p-4 bg-accent/5 rounded-2xl border border-accent/10 text-accent font-bold text-sm">
              <Sparkles size={16} /> 1 Hero + 8 Supporting Images
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center text-sm">01</span>
            The 9-Image Strategy - A Winning Set
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "Main Hero", d: "Clean, professional, 85% fill. Your click magnet." },
              { t: "Second Angle", d: "Back, side, or open lid shot. Shows depth." },
              { t: "Lifestyle", d: "Product in real use. Helps buyers visualize." },
              { t: "Feature Callout", d: "Highlight the #1 unique selling point clearly." },
              { t: "Infographic", d: "3-5 key benefits with icons and fast text." },
              { t: "Dimensions", d: "Size/scale reference to reduce return rates." },
              { t: "Material/Ingredients", d: "What's inside? Build trust via transparency." },
              { t: "Comparison Chart", d: "Your product vs generic. Why you win." },
              { t: "Social Proof", d: "Family/office/outdoor context. Trusted feel." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all group">
                <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 block">Image {i + 1}</span>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.t}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 rounded-[32px] md:rounded-[40px] p-6 md:p-10 text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 blur-[100px]" />
          <h2 className="text-2xl font-black mb-8">Most Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">01.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Phone camera hero shots:</span> Uneven lighting and shadows kill trust instantly.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">02.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Product too small:</span> Amazon wants 85%+ fill. Don't leave empty space.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">03.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Text on hero image:</span> Against guidelines. Leads to listing suppression.</p>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">04.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Ignoring mobile:</span> 70% of traffic is mobile. Text must be readable on small screens.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">05.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">No LifeStyle Images - C:</span> Hard to build an emotional connection with just white backgrounds.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">06.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Duplicate images:</span> Signals low effort and confuses the buyer.</p>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-8">Category-Specific Tips</h2>
          <div className="space-y-4">
            {[
              { c: "Skincare & Beauty", t: "Texture & consistency shots. Before/after graphics are high converters." },
              { c: "Home & Kitchen", t: "Real Indian home settings. Scale reference is critical for 'fit'." },
              { c: "Electronics", t: "All ports, buttons, and 'in-the-box' accessories in one frame." },
              { c: "Food & Supplements", t: "Certifications (FSSAI, Organic) as visual badges build instant trust." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-6 rounded-3xl border border-gray-100 hover:border-primary/20 transition-all">
                <div className="w-full md:w-24 font-black text-[10px] uppercase tracking-tighter text-gray-400 md:border-r md:border-gray-100 md:pr-6">{item.c}</div>
                <p className="text-sm text-gray-600 font-medium">{item.t}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary/5 rounded-[32px] md:rounded-[40px] p-6 md:p-10 border border-primary/10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Do You Need a Studio Shoot?</h2>
            <p className="text-gray-600 font-medium leading-relaxed mb-6">
              In-house studio shoots in India cost <span className="text-gray-900 font-bold">â‚¹8,000â€“â‚¹40,000 per SKU</span>.
              The alternative? <span className="text-primary font-bold">Catalog-quality CGI</span>.
              Same output, fraction of the cost, and you never need to ship your product anywhere.
              This is how modern Amazon brands scale.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="px-6 py-3 bg-gray-900 text-white text-xs font-black uppercase tracking-widest rounded-xl text-center">CGI is the Future</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center sm:text-left">Available at PV Labs</div>
            </div>
          </div>
        </section>

        <section>
          <div className="glass-card p-6 md:p-10 bg-white shadow-2xl border border-gray-100 rounded-2xl md:rounded-3xl w-full">
            <h2 className="text-2xl font-black text-gray-900 mb-6 md:mb-8 text-center">Final Checklist</h2>
            
            {/* Checklist Grid - Fully Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10 w-full">
              {[
                "White background hero - RGB 255,255,255",
                "Product fills 85%+ of frame",
                "Minimum 1500 × 1500px resolution",
                "All 9 image slots utilized",
                "Lifestyle image included",
                "Size/dimension reference included",
                "Mobile-readable text on infographics",
                "No text or logos on hero image"
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-primary/10 bg-primary/5 hover:bg-primary/10 transition-all"
                >
                  <div className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck size={12} className="text-green-600" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 font-bold leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Section - Fully Responsive */}
            <div className="p-4 sm:p-6 md:p-10 bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl sm:rounded-2xl md:rounded-3xl text-center w-full">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-black mb-2 sm:mb-3 md:mb-4 px-2">
                Fix the images first. Everything else follows.
              </h3>
              <p className="text-gray-400 text-[11px] sm:text-xs md:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed px-2">
                Want us to audit your current Amazon listing images for free?
              </p>
              <button className="w-full sm:w-auto px-4 sm:px-6 md:px-10 py-2 sm:py-2.5 md:py-4 bg-primary hover:bg-accent text-white font-black uppercase tracking-widest text-[9px] sm:text-[10px] md:text-xs lg:text-sm rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 active:scale-95 shadow-md">
                Get Free Listing Audit →
              </button>
            </div>
          </div>
        </section>
                <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Why Indian Sellers Struggle with Amazon Images</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              The Indian e-commerce market crossed ₹7 lakh crore in 2025, and Amazon India now hosts over 12 lakh active sellers. Competition is fierce — especially in categories like skincare, electronics, kitchen, and fashion. Yet most Indian sellers still upload phone-camera shots with uneven lighting, cluttered backgrounds, and zero infographics.
            </p>
            <p>
              The reason? Traditional product photography in India costs ₹8,000–₹40,000 per SKU. You need a studio, a photographer, props, lighting equipment, and days of back-and-forth. For a seller launching 10 SKUs, that's ₹80,000–₹4,00,000 just for images — before a single sale is made.
            </p>
            <p>
              This is why CGI-based product visualization has exploded in 2026. Studios like PV Labs create photorealistic listing images without ever touching your physical product. You send reference photos, we build the visuals digitally — Amazon-compliant, conversion-optimized, delivered in 3–5 days at 80% less cost than a traditional shoot.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">How Amazon's Algorithm Uses Your Images</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              Amazon's A9 algorithm doesn't just look at keywords and reviews. It tracks <span className="text-gray-900 font-bold">Click-Through Rate (CTR)</span> from search results — and your main image is the #1 factor that determines whether someone clicks or scrolls past.
            </p>
            <p>
              Here's how the algorithm loop works: Better image → Higher CTR → Amazon shows your listing to more people → More sales → Higher organic rank → Even more visibility. It's a compounding effect. One image improvement can cascade into 2–3x revenue growth over 30 days.
            </p>
            <p>
              Amazon also uses image quality as a ranking signal for the "Amazon's Choice" badge. Listings with all 9 image slots filled, high resolution, and proper white backgrounds are significantly more likely to earn featured placement.
            </p>
            <p>
              Conversely, listings with poor images get suppressed. Amazon's automated systems flag low-resolution images, non-white backgrounds, and text on hero images — pushing your listing down in search or even suppressing it entirely.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">The Psychology Behind High-Converting Images</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              Indian buyers on Amazon make purchase decisions in under 7 seconds. In that window, your images need to answer three questions: "What is this product?", "Is it high quality?", and "Is it right for me?"
            </p>
            <p>
              <span className="text-gray-900 font-bold">Hero Image:</span> This answers "what is it?" — a clean, professional, zoomed-in shot on pure white. The product must dominate the frame. No distractions, no props, no text. Just the product looking its absolute best.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Infographics:</span> These answer "is it high quality?" — callout key features, certifications, materials, and dimensions. Indian buyers are extremely value-conscious. They want to know exactly what they're getting before they spend ₹500 or ₹5,000.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Lifestyle Images:</span> These answer "is it right for me?" — show the product in a real Indian home, on a real person, in a real kitchen. Context builds emotional connection. A pressure cooker on a white background is a product. A pressure cooker in a modern Indian kitchen with rotis being made — that's a story.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Comparison Charts:</span> These reduce return rates by 15–25%. When buyers clearly understand size, variants, and what's included — they make confident purchases and don't send products back.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Image Optimization for Mobile (70% of Amazon India Traffic)</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              Over 70% of Amazon India traffic comes from mobile devices — primarily Android phones with 5.5–6.5 inch screens. This means your images are being viewed at roughly 350–400 pixels wide. Any text smaller than 24pt becomes unreadable. Any fine detail disappears.
            </p>
            <p>
              The biggest mobile optimization mistakes Indian sellers make:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Infographic text too small — buyers pinch-zoom and leave</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Too many features crammed into one image — pick 3–4 max per frame</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Dark backgrounds that don't contrast well on AMOLED screens</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Hero image product too small — wasted white space on already-tiny screens</li>
            </ul>
            <p>
              At PV Labs, every image we deliver is mobile-first tested. We preview all infographics at 400px width before delivery to ensure readability on the smallest screens your buyers are using.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">ROI of Professional Listing Images — Real Numbers</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              Let's do simple math. Say your product gets 1,000 impressions per day on Amazon search. With average images, your CTR is 2% — that's 20 clicks/day. With professional, optimized images, CTR jumps to 5% — that's 50 clicks/day. Same impressions, 150% more traffic.
            </p>
            <p>
              If your conversion rate is 10% and average order value is ₹800, that's the difference between ₹1,600/day and ₹4,000/day in revenue. Over a month: ₹48,000 vs ₹1,20,000. The ₹72,000 difference — every single month — came from one image upgrade that cost you ₹5,000–₹8,000 one time.
            </p>
            <p>
              This is why the smartest Amazon India sellers treat listing images as their highest-ROI investment. Not PPC. Not keywords. Not reviews. Images come first because everything else depends on the click.
            </p>
          </div>
        </section>
      </div>
    )
  },
  "amazon-a-plus-content-guide": {
    title: "What is A+ Content & Why Every Amazon Brand Needs It",
    category: "Education",
    subtitle: "Brand Growth Strategy",
    author: "Tankaar Sharma",
    date: "March 25, 2026",
    readTime: "7 min",
    image: serviceWebdesign,
    content: (
      <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
              <ShieldCheck className="text-purple-600" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">The Power of Visual Storytelling</h2>
          </div>
          <div className="glass-card p-6 md:p-8 border-l-4 border-purple-500 bg-white/50">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              "Your competitor's listing looks like a magazine spread. Yours looks like a plain text document from 2015. Same product. Same price. But they're outselling you and <span className="text-purple-600 font-bold">A+ Content</span> is probably why."
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6 md:p-8 bg-white/50 border-purple-50">
            <h3 className="text-xl font-bold mb-4 text-gray-900">What is A+ Content?</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              A+ Content (previously EBC) is Amazon's premium listing feature that lets brand-registered sellers replace the plain text product description with rich visual content banners, comparison charts, LifeStyle Images - C, and more.
            </p>
          </div>
          <div className="glass-card p-6 md:p-8 bg-purple-900 text-white border-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-3xl" />
            <h3 className="text-xl font-bold mb-4">Basic vs Premium</h3>
            <ul className="space-y-3 text-xs text-purple-100 font-medium">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Basic: 5 modules, comparison charts (Free for registered brands)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Premium: Video, interactive hotspots, carousels (Conditional)</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-8">What Goes Inside? Module by Module</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Brand Story Banner", d: "First impression after bullet points. Your visual identity." },
              { t: "Feature Highlight", d: "Image + text combo. Buyers read this more than anything." },
              { t: "Ingredient Breakdown", d: "Critical for skincare, food, and supplements. Build trust." },
              { t: "Lifestyle & Usage", d: "Full-width image showing product in real Indian context." },
              { t: "Comparison Chart", d: "Your product variants side-by-side. Reduces returns." },
              { t: "Technical Spec Table", d: "Detailed data for electronics or heavy appliances." }
            ].map((m, i) => (
              <div key={i} className="p-6 rounded-3xl border border-purple-50 bg-purple-50/20 hover:bg-white hover:shadow-xl hover:border-purple-200 transition-all">
                <h4 className="font-bold text-gray-900 mb-2">{m.t}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{m.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 rounded-[32px] md:rounded-[40px] p-6 md:p-10 text-white">
          <h2 className="text-2xl font-black mb-8">The Impact on Your Numbers</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Amazon's data shows A+ Content increases conversion rates by <span className="text-white font-bold">3â€“10%</span> on average. For high-competition Indian categories, it's even higher.
              </p>
              <div className="p-6 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                <span className="text-4xl font-black text-purple-400 mb-2 block">38%</span>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Conversion increase seen by our client 'NutriFuel'</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                { t: "Conversion Goes Up", d: "Less bouncing to competitor listings." },
                { t: "Returns Go Down", d: "Buyers understand exactly what they're getting." },
                { t: "Brand Perception", d: "Look established, not like a 'new seller'." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 font-bold text-xs">{i + 1}</div>
                  <div>
                    <h5 className="font-bold text-white text-sm">{item.t}</h5>
                    <p className="text-xs text-gray-400">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-8">Common Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Repeating bullet points (don't waste the space!)",
              "Low resolution images (Amazon requires 970px width)",
              "Mentioning competitor brand names (policy violation)",
              "Ignoring mobile layout (70% of traffic is mobile)",
              "No Brand Story module (skipping brand recognition)",
              "Publishing and forgetting (A+ needs updates as you grow)"
            ].map((err, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-red-50/50 border border-red-100/50">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-xs text-gray-600 font-bold">{err}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-purple-50/50 rounded-[32px] md:rounded-[40px] p-6 md:p-10 border border-purple-100">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Timeline & Approval</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <p className="text-sm text-gray-600 font-medium">
                Amazon takes up to <span className="text-gray-900 font-bold">7 business days</span> to review A+ Content. Rejections often happen due to pricing claims or contact info.
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-purple-100 shadow-sm">
                <Clock size={14} className="text-purple-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Build in 10 days for your launch</span>
              </div>
            </div>
            <div className="w-full md:w-64 p-6 bg-white rounded-3xl shadow-xl border border-purple-50 text-center">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Success Rate</h4>
              <span className="text-4xl font-black text-gray-900">99%</span>
              <p className="text-[10px] text-gray-500 mt-2">Approval rate with PV Labs designs</p>
            </div>
          </div>
        </section>

        <section>
          <div className="glass-card p-6 md:p-10 bg-white shadow-2xl border border-gray-100 rounded-2xl md:rounded-3xl w-full">
            <h2 className="text-2xl font-black text-gray-900 mb-6 md:mb-8 text-center">A+ Content Checklist</h2>
            
            {/* Checklist Grid - Fully Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10 w-full">
              {[
                "Brand Registry enrollment confirmed",
                "All images minimum 970px wide",
                "No competitor brand names mentioned",
                "No pricing or promotional claims",
                "No contact information included",
                "Mobile layout reviewed",
                "Brand Story module created",
                "Comparison chart included"
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-purple-100/50 bg-purple-50/30 hover:bg-purple-50/60 transition-all"
                >
                  <div className="w-5 h-5 rounded-full bg-purple-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck size={12} className="text-purple-600" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 font-bold leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Section - Fully Responsive */}
            <div className="p-4 sm:p-6 md:p-10 bg-gradient-to-br from-purple-900 to-purple-950 rounded-xl sm:rounded-2xl md:rounded-3xl text-center w-full">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-black mb-2 sm:mb-3 md:mb-4 px-2">
                A+ Content is the single highest-ROI improvement for Amazon listings.
              </h3>
              <p className="text-purple-200/90 text-[11px] sm:text-xs md:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed px-2">
                Need high-converting A+ modules designed in 5 days?
              </p>
              <button className="w-full sm:w-auto px-4 sm:px-6 md:px-10 py-2 sm:py-2.5 md:py-4 bg-white hover:bg-purple-50 text-purple-900 font-black uppercase tracking-widest text-[9px] sm:text-[10px] md:text-xs lg:text-sm rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/30 active:scale-95 shadow-md">
                Get Your A+ Content Done →
              </button>
            </div>
          </div>
        </section>
                <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">A+ Content for Indian Sellers — Why It's Non-Negotiable in 2026</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              Amazon India crossed 12 lakh active sellers in 2025. In categories like skincare, supplements, and kitchen appliances — there are 500+ sellers offering nearly identical products at similar prices. When your product looks the same, costs the same, and has similar reviews — A+ Content is what makes the buyer choose YOU.
            </p>
            <p>
              Think about it from the buyer's perspective. They scroll down past your bullet points and see either: (a) a plain text description that looks like it was written in 2015, or (b) a magazine-quality visual experience with brand story, ingredient breakdowns, comparison charts, and lifestyle shots. Which seller looks more trustworthy? Which one feels like a "real brand" vs a random reseller?
            </p>
            <p>
              Amazon's own data confirms this: listings with A+ Content see <span className="text-gray-900 font-bold">3–10% higher conversion rates</span> on average. In highly competitive Indian categories, we've seen increases of 15–38% because the gap between sellers WITH A+ and those WITHOUT is enormous.
            </p>
            <p>
              The best part? Basic A+ Content is completely free for Brand Registered sellers. You're leaving money on the table every single day you don't have it.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">How to Get Brand Registry in India (Step-by-Step)</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              A+ Content requires Amazon Brand Registry. Here's exactly how Indian sellers can get it:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">1.</span> Register your trademark with the Indian Trademark Registry (Class 1–45 based on your product category)</li>
              <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">2.</span> You need either a registered trademark (®) OR a pending application with a serial number</li>
              <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">3.</span> Go to brandregistry.amazon.in and enroll with your trademark details</li>
              <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">4.</span> Amazon sends a verification code to the trademark correspondent — confirm it</li>
              <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">5.</span> Once approved (3–14 days), A+ Content Manager appears in your Seller Central</li>
            </ul>
            <p>
              Pro tip: Even with a "pending" trademark (™ not yet ®), Amazon India now accepts applications. Don't wait for full registration — start the process today and you'll have A+ access within 2 weeks.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">The 5-Module A+ Content Strategy That Converts</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              After designing A+ Content for 200+ Indian brands, we've identified the exact 5-module structure that maximizes conversion:
            </p>
            <p>
              <span className="text-gray-900 font-bold">Module 1 — Brand Story Banner (Full Width):</span> This is the first thing buyers see after scrolling past bullet points. Use a cinematic banner that communicates your brand identity in one glance. Include your logo, tagline, and one powerful lifestyle image. This module builds instant credibility — you look like a "real brand", not a random seller.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Module 2 — Feature Highlight (Image + Text):</span> Pick your top 3 selling points and present them with icons, short text, and supporting visuals. Indian buyers scan — they don't read paragraphs. Use bold headlines and 10–15 word descriptions max per feature.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Module 3 — Ingredient/Material Breakdown:</span> Critical for skincare, food, supplements, and baby products. Show what's inside with clean visuals. For electronics, show build materials and certifications (BIS, ISI). This module builds trust and reduces "is this genuine?" doubts.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Module 4 — Comparison Chart:</span> Compare your product variants (not competitor products — that violates policy). Show your 500ml vs 1L vs 2L. Show your Basic vs Pro vs Premium. This reduces confusion, reduces returns, and often upsells buyers to higher-priced variants.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Module 5 — Lifestyle/Usage Context:</span> Full-width image showing the product in a real Indian setting. A water purifier in a modern Indian kitchen. A yoga mat in a living room with morning light. A face serum on a vanity table. This creates emotional connection and helps buyers visualize owning the product.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">A+ Content Approval — What Gets Rejected and Why</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              Amazon takes 3–7 business days to review A+ Content. Rejection rate for first-time submissions is around 30–40% — mostly due to easily avoidable mistakes. Here's what triggers rejection:
            </p>
            <p>
              <span className="text-gray-900 font-bold">Pricing claims:</span> "50% off", "Best value", "Cheapest" — any pricing or promotional language gets instant rejection. Even "affordable" can be flagged.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Competitor mentions:</span> You cannot name other brands. No "better than Brand X" or "unlike Brand Y". Even subtle comparisons get caught.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Contact information:</span> No phone numbers, email addresses, website URLs, or social media handles anywhere in A+ Content.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Health/medical claims:</span> "Cures acne", "Prevents hair fall", "Doctor recommended" — unless you have clinical proof uploaded to Amazon, these get rejected immediately.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Low resolution images:</span> All A+ images must be minimum 970px wide. Blurry or pixelated images are auto-rejected by Amazon's system before a human even reviews them.
            </p>
            <p>
              At PV Labs, our A+ Content approval rate is 99% on first submission. We know exactly what Amazon's review team looks for because we've submitted thousands of A+ modules across every category.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">A+ Content Cost in India — What to Expect</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              The A+ Content feature itself is free from Amazon. But designing professional A+ modules requires a skilled design team. Here's what the Indian market charges in 2026:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> Freelance designers on Fiverr/Upwork: ₹3,000–₹8,000 per ASIN (inconsistent quality, 0 revisions)</li>
              <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> Generic design agencies: ₹8,000–₹15,000 per ASIN (no Amazon expertise)</li>
              <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> Specialized e-commerce studios (like PV Labs): ₹5,000–₹12,000 per ASIN (Amazon-specific, revision included, compliance guaranteed)</li>
            </ul>
            <p>
              The ROI math is simple: if A+ Content increases your conversion rate by even 5% on a product doing ₹2,00,000/month in revenue — that's ₹10,000 extra revenue per month, forever. A one-time ₹8,000 investment pays for itself in 25 days and keeps compounding.
            </p>
            <p>
              For brands with 10+ ASINs, we offer bulk packages that bring per-ASIN cost below ₹4,000 — making it one of the cheapest, highest-impact investments any Amazon India seller can make.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Premium A+ Content vs Basic — Is It Worth It?</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              Amazon now offers Premium A+ Content (formerly A++ or Brand Story) to sellers who meet certain criteria — typically brands that have published A+ on all ASINs and have an active Brand Story. Premium unlocks:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> Video modules embedded directly in the product description</li>
              <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> Interactive hotspot images (buyers tap areas to reveal details)</li>
              <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> Image carousels and Q&A modules</li>
              <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> Full-width HD banner images with no compression</li>
            </ul>
            <p>
              Is it worth it? For brands doing ₹10L+/month on Amazon — absolutely. Premium A+ can increase conversion by an additional 5–8% beyond basic A+. For smaller sellers, focus on getting Basic A+ right first. Nail the 5-module structure, get consistent sales, then graduate to Premium.
            </p>
          </div>
        </section>
      </div>
    )
  },
  "flipkart-listing-requirements-2026": {
    title: "Flipkart Listing Image Requirements - Full Size & Format Guide 2026",
    category: "Guide",
    subtitle: "Seller Compliance Guide",
    author: "Rudra",
    date: "March 28, 2026",
    readTime: "6 min",
    image: serviceAppdesign,
    content: (
      <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
        <section>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <Clock className="text-blue-600" size={20} />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900">
              Flipkart Standards vs. Amazon
            </h2>
          </div>
          <div className="glass-card p-4 sm:p-6 md:p-8 border-l-4 border-blue-500 bg-white/50 rounded-xl sm:rounded-2xl">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed md:leading-relaxed font-medium">
              "Most sellers treat Flipkart as a copy-paste of their Amazon listing. Big mistake. Flipkart's catalog team reviews images manually for many categories, and what works on one platform can get rejected on the other."
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="glass-card p-4 sm:p-6 md:p-8 hover:border-blue-300 transition-all bg-white/50 rounded-xl sm:rounded-2xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 sm:gap-3 text-gray-900">
              <ShieldCheck className="text-blue-600 flex-shrink-0" size={20} />
              <span>Technical Specs 2026</span>
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-600 font-medium text-xs sm:text-sm md:text-base">
              <li className="flex justify-between items-center border-b border-gray-100 pb-2 sm:pb-3">
                <span>Min Resolution</span>
                <span className="text-gray-900 font-bold text-right">1000 × 1000 px</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2 sm:pb-3">
                <span>Recommended</span>
                <span className="text-gray-900 font-bold text-right">1500 × 1500 px</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2 sm:pb-3">
                <span>Background</span>
                <span className="text-gray-900 font-bold text-right">Pure White (255,255,255)</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2 sm:pb-3">
                <span>Product Fill</span>
                <span className="text-gray-900 font-bold text-right">80% Minimum</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Format</span>
                <span className="text-gray-900 font-bold text-right">JPEG / PNG</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-4 sm:p-6 md:p-8 bg-blue-900 text-white border-none rounded-xl sm:rounded-2xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">How Many Images?</h3>
            <p className="text-xs sm:text-sm md:text-base text-blue-100 leading-relaxed md:leading-relaxed mb-4 md:mb-6 font-medium">
              Flipkart's algorithm rewards listings with <span className="text-white font-bold">6+ images</span>. Clicks are significantly higher when buyers see the product from every possible angle.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Hero", "Angle 2", "Lifestyle", "Infographic", "Dimensions", "Packaging"].map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 sm:px-3 py-1 bg-white/10 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 md:mb-8">
            Category-Specific Requirements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              { c: "Fashion & Apparel", d: "Front/back shots mandatory. Model images preferred over flat lays." },
              { c: "Home & Kitchen", d: "Real Indian home settings. Dimension references are non-negotiable." },
              { c: "Electronics", d: "All ports/buttons visible. In-the-box contents shot recommended." },
              { c: "Skincare & Beauty", d: "Ingredient list must be visible. Certifications (BIS) build trust." },
              { c: "Food & Grocery", d: "FSSAI license number and Expiry date must be clearly visible." },
              { c: "Baby Products", d: "Age suitability and safety certifications clearly displayed." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <h4 className="font-bold text-blue-900 text-xs sm:text-sm md:text-base mb-2 md:mb-3">
                  {item.c}
                </h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed md:leading-relaxed font-medium">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 rounded-2xl sm:rounded-3xl md:rounded-[32px] lg:rounded-[40px] p-5 sm:p-6 md:p-8 lg:p-10 text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-blue-500/5 blur-[80px] sm:blur-[100px]" />

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-8 text-red-400 relative z-10">
            Common Rejection Reasons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-x-12 lg:gap-y-6 relative z-10">
            {[
              { t: "Off-white background", d: "Even a slight grey or beige tint leads to instant manual rejection." },
              { t: "Product too small", d: "System flags any product filling less than 80% of the frame." },
              { t: "Watermarks / Logos", d: "Main image must be clean. No brand identity on the hero shot." },
              { t: "Low Resolution", d: "Images under 1000px are auto-rejected by the Flipkart portal." },
              { t: "Inconsistent Style", d: "Different lighting or backgrounds across SKUs kills trust." },
              { t: "Lifestyle as Hero", d: "Main image MUST be white background. No exceptions." },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <h5 className="font-bold text-white text-xs sm:text-sm md:text-base flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" /> {item.t}
                </h5>
                <p className="text-xs md:text-sm text-gray-400 font-medium pl-3.5">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 md:mb-6">
            Flipkart vs. Amazon Key Differences
          </h2>

          <div className="w-[280px] sm:w-full overflow-x-auto rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-100 scrollbar-hide">
            <table className="w-full min-w-[500px] text-left text-xs sm:text-sm md:text-base">
              <thead className="bg-gray-50 text-[8px] sm:text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">
                <tr>
                  <th className="p-3 sm:p-4 md:p-4">Feature</th>
                  <th className="p-3 sm:p-4 md:p-4">Flipkart</th>
                  <th className="p-3 sm:p-4 md:p-4">Amazon</th>
                </tr>
              </thead>
              <tbody className="font-medium text-gray-600">
                <tr className="border-t border-gray-100">
                  <td className="p-3 sm:p-4 md:p-4 bg-gray-50/30">Min Res</td>
                  <td className="p-3 sm:p-4 md:p-4">1000 × 1000</td>
                  <td className="p-3 sm:p-4 md:p-4">1000 × 1000</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-3 sm:p-4 md:p-4 bg-gray-50/30">Product Fill</td>
                  <td className="p-3 sm:p-4 md:p-4">80%+</td>
                  <td className="p-3 sm:p-4 md:p-4">85%+</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-3 sm:p-4 md:p-4 bg-gray-50/30">Manual Review</td>
                  <td className="p-3 sm:p-4 md:p-4 text-blue-600 font-bold">Yes (Strict)</td>
                  <td className="p-3 sm:p-4 md:p-4">Algorithm First</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-3 sm:p-4 md:p-4 bg-gray-50/30">Size Chart</td>
                  <td className="p-3 sm:p-4 md:p-4 text-blue-600 font-bold">Compulsory*</td>
                  <td className="p-3 sm:p-4 md:p-4">Recommended</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-400 mt-2 md:mt-4 text-center italic">
            Scroll table horizontally to view more →
          </p>
        </section>

        <section className="w-full">
          <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-10 bg-white shadow-2xl border border-gray-100 rounded-xl sm:rounded-2xl lg:rounded-3xl w-full">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-6 md:mb-8 lg:mb-10 text-center px-2">
              Flipkart Image Checklist
            </h2>

            {/* Checklist Grid - Fully Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10 w-full">
              {[
                "Pure white background - RGB 255,255,255",
                "Minimum 1500 × 1500px resolution",
                "Product fills 80%+ of frame",
                "Square 1:1 ratio maintained",
                "No watermarks or logos on hero image",
                "Maximum image slots filled (6–9)",
                "Lifestyle image included",
                "Size chart included (for fashion)",
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-blue-100/50 bg-blue-50/20 hover:bg-blue-50/50 transition-all"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck size={12} className="text-blue-600" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 font-bold leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Section - Fully Responsive */}
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl sm:rounded-2xl lg:rounded-3xl text-center w-full">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-black mb-2 sm:mb-3 md:mb-4 px-2">
                Struggling with Flipkart listing rejections?
              </h3>
              <p className="text-blue-200/90 text-[11px] sm:text-xs md:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-relaxed px-2">
                We create 100% Flipkart-compliant listing image sets with zero rejections guaranteed.
              </p>
              <button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-[9px] sm:text-[10px] md:text-xs lg:text-sm rounded-lg sm:rounded-xl lg:rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95 shadow-md">
                Get Flipkart-Ready Images →
              </button>
            </div>
          </div>
        </section>
                <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Why Flipkart Is Different from Amazon — And Why It Matters</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              Most Indian sellers list on both Amazon and Flipkart. And most make the same mistake: they upload identical images to both platforms. This is a problem because Flipkart and Amazon have fundamentally different catalog systems.
            </p>
            <p>
              Amazon uses primarily algorithmic image review — their systems auto-check resolution, background color, and text. Flipkart, on the other hand, has <span className="text-gray-900 font-bold">manual catalog teams</span> that review images in many categories, especially fashion, electronics, and home. A human reviewer is far stricter than an algorithm.
            </p>
            <p>
              Flipkart also has different UI behavior. On the Flipkart app (which accounts for 80%+ of Flipkart traffic), images are displayed in a slightly different aspect ratio and zoom level than Amazon. Text that's readable on Amazon's viewer may become unreadable on Flipkart's. Color profiles render differently. What looks crisp on Amazon can look washed out on Flipkart.
            </p>
            <p>
              At PV Labs, we create platform-specific image sets. Same product, optimized differently for each marketplace. This costs marginally more but eliminates rejections and maximizes conversion on both platforms.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Flipkart Image Specifications — The Complete Technical Guide</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              Here are the exact specifications Flipkart enforces in 2026, based on their latest seller documentation and our experience with 500+ listings:
            </p>
            <p>
              <span className="text-gray-900 font-bold">Primary Image (Hero):</span> Pure white background (RGB 255,255,255). Product must fill minimum 80% of the frame. No text, no logos, no watermarks, no props. JPEG or PNG format. Minimum 1000×1000px, recommended 1500×1500px. Square 1:1 aspect ratio mandatory.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Secondary Images:</span> Up to 8 additional images allowed. These can include lifestyle shots, infographics, size charts, ingredient lists, and feature callouts. Text is allowed on secondary images but must be readable at mobile scale (minimum 24pt equivalent).
            </p>
            <p>
              <span className="text-gray-900 font-bold">Fashion-Specific Rules:</span> Front and back shots are mandatory. Model images preferred over flat lays or ghost mannequins. Size chart is compulsory for all clothing and footwear. Color accuracy is critical — Flipkart's QC team rejects listings where the displayed color doesn't match the actual product.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Electronics-Specific Rules:</span> All ports, buttons, and connectivity options must be visible in at least one image. "In the box" contents shot is strongly recommended. BIS certification mark should be visible for applicable products.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Food & Grocery:</span> FSSAI license number must be clearly visible in at least one image. Manufacturing date, expiry date, and nutritional information should be shown. MRP must be printed on packaging and visible.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Flipkart's Manual Review Process — What Actually Happens</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              Unlike Amazon where most image checks are automated, Flipkart employs catalog quality teams that manually review images in high-volume categories. Here's what their review process looks like:
            </p>
            <p>
              <span className="text-gray-900 font-bold">Stage 1 — Auto Check:</span> Flipkart's system automatically checks resolution (must be 1000px+), file format (JPEG/PNG only), and file size. Images that fail these basic checks are rejected instantly — you see the error in Seller Hub within minutes.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Stage 2 — Manual Review:</span> For categories like fashion, beauty, electronics, and baby products, a human reviewer examines your images. They check: Is the background truly white? Does the product fill 80%+ of the frame? Are mandatory shots included (front/back for fashion, size chart for apparel)? Is there any policy violation (watermarks, competitor logos, misleading imagery)?
            </p>
            <p>
              <span className="text-gray-900 font-bold">Stage 3 — Approval or Rejection:</span> If approved, your listing goes live within 24–48 hours. If rejected, you get a reason code in Seller Hub. Common codes include: "Image quality not as per guidelines", "Background not white", "Mandatory image missing". You can resubmit immediately after fixing the issue.
            </p>
            <p>
              The manual review is why Flipkart rejections are so common among Indian sellers. We've seen sellers get rejected 3–4 times before getting images right. With PV Labs, our Flipkart approval rate is 100% on first submission because we know exactly what the manual reviewers look for.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">How Flipkart's Algorithm Rewards Better Images</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              Flipkart's search algorithm considers what they call a "Catalog Quality Score" — a composite metric that includes image quality, number of images, attribute completeness, and description quality. This score directly affects your search ranking.
            </p>
            <p>
              Listings with 6+ high-quality images score significantly higher than listings with 2–3 mediocre shots. Flipkart's data shows that listings with complete image sets (all slots filled) receive <span className="text-gray-900 font-bold">40% more clicks</span> than listings with just a hero image and one or two secondary shots.
            </p>
            <p>
              Flipkart also uses image quality for their "Flipkart Assured" and "Top Seller" badge eligibility. If your listing images don't meet quality thresholds, you're automatically disqualified from these trust badges — which significantly reduce buyer hesitation and increase conversion.
            </p>
            <p>
              During Flipkart sales events like Big Billion Days, Flipkart Dussehra Sale, and Republic Day Sale — the algorithm gives even more weight to catalog quality. Sellers with professional images and complete catalogs get preferred placement in deal pages, flash sales, and category banners.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Flipkart Listing Image Cost in India — 2026 Pricing</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              What does it cost to get professional Flipkart-compliant images in India? Here's a realistic breakdown for 2026:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> DIY (phone camera + Canva): ₹0 cost, but 40–60% rejection rate and poor conversion</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Local photographer: ₹5,000–₹15,000 per SKU (not Flipkart-optimized, no infographics)</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Freelancer (Fiverr/Upwork): ₹2,000–₹6,000 per SKU (hit or miss quality, no compliance guarantee)</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Specialized e-commerce studio (PV Labs): ₹4,000–₹10,000 per SKU (platform-specific, compliance guaranteed, revisions included)</li>
            </ul>
            <p>
              The hidden cost most sellers miss is <span className="text-gray-900 font-bold">rejection rework</span>. Every rejection costs you 2–5 days of lost sales while you fix and resubmit. If your product does ₹2,000/day in revenue, one rejection cycle costs you ₹4,000–₹10,000 in lost revenue — more than the cost of getting it right the first time.
            </p>
            <p>
              For sellers listing on both Amazon and Flipkart (which most Indian sellers do), PV Labs offers dual-platform packages. You get Amazon-optimized AND Flipkart-optimized images for each SKU at 30% less than ordering them separately. Same product, different specifications, zero rejections on both platforms.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Flipkart vs Meesho vs Myntra — Image Requirements Compared</h2>
          <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
            <p>
              If you're selling on multiple Indian marketplaces, here's how their image requirements differ:
            </p>
            <p>
              <span className="text-gray-900 font-bold">Flipkart:</span> 1000×1000px minimum, white background, manual review in most categories, size chart compulsory for fashion. Strictest enforcement among Indian platforms.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Meesho:</span> 800×800px minimum, white background preferred but not always enforced. More lenient review process. However, Meesho's buyer base is extremely price-sensitive — professional images create trust that justifies even small price premiums over competitors.
            </p>
            <p>
              <span className="text-gray-900 font-bold">Myntra:</span> Strictest of all Indian platforms for fashion. Model shots are mandatory (no flat lays, no ghost mannequin for most categories). Specific angle requirements: front, back, side, detail close-up. Images must show accurate color under neutral lighting. Myntra rejects more fashion listings than Flipkart and Amazon combined.
            </p>
            <p>
              <span className="text-gray-900 font-bold">JioMart:</span> Relatively new catalog requirements. 1000×1000px minimum, white background. Review process is evolving. Getting in early with professional images gives you first-mover advantage as JioMart scales.
            </p>
            <p>
              At PV Labs, we create images optimized for all Indian marketplaces simultaneously. One photoshoot brief, multiple platform-specific deliverables. This is how smart Indian brands scale across Flipkart, Amazon, Meesho, Myntra, and JioMart without multiplying their design costs.
            </p>
          </div>
        </section>
      </div>
    )
  }
};

type BlogPostProps = { slug: string };
const BlogPost = ({ slug }: BlogPostProps) => {
  const post = slug ? blogData[slug] : null;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!post) {
    redirect("/blog");
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="fixed top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-50 origin-left"
        style={{ scaleX }}
      />

      <div className="relative z-10  ">
        <section className="pt-24 pb-16 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <Link href="/blog" className="flex  justify-start items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-all mb-5">
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className=" text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-xs font-black uppercase tracking-[4px] mb-4 block">
                {post.subtitle}
              </span>
              <h1 className="text-3xl lg:text-4xl text-center  font-black font-heading mb-6 text-gray-900 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 ">
                <span className="flex items-center gap-2"><User size={14} className="text-primary" /> {post.author}</span>
                <span className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-primary" /> {post.readTime} read</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 sm:px-6 md:px-12 mb-12 md:mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl sm:rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
              {post.image ? (
                <img src={typeof post.image === "string" ? post.image : post.image.src} alt={post.title} className="w-screen h-full object-cover" />
              ) : (
                <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-br from-gray-900 via-gray-800 to-primary/80 flex items-center justify-center">
                  <h2 className="text-white font-black text-xl sm:text-2xl md:text-4xl text-center px-8 leading-tight max-w-3xl">{post.title}</h2>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-24 ">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[80px_1fr] gap-8 md:gap-12">
              <div className="hidden lg:flex flex-col gap-4 sticky top-40 h-fit">
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest text-center mb-2">Share</p>
                {socialLinks.slice(0, 4).map((link, i) => (
                  <a key={i} href={link.href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary transition-all hover:scale-110 border border-gray-100/50">
                    <link.icon size={18} />
                  </a>
                ))}
              </div>

              <div className="prose prose-slate max-w-none">
                {post.content}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default BlogPost;








