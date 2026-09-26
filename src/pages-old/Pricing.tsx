"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  ShoppingCart,
  Palette,
  Zap,
  MessageSquare,
  Star,
  Package,
  Share2,
  Layout,
} from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"ecommerce" | "brand">("ecommerce");

  const pricingFaqs = [
    {
      q: "How much does A+ Content cost?",
      a: "A+ Content pricing depends on the number of modules, complexity of the product story, and whether it is bundled with listing images.",
    },
    {
      q: "How much do listing images cost?",
      a: "Listing image pricing depends on SKU count, category complexity, and whether you need only image support or a broader listing upgrade.",
    },
    {
      q: "How much does storefront design cost?",
      a: "Storefront pricing depends on how many pages or sections you need, how much content is already prepared, and whether it is bundled with other marketplace creative work.",
    },
    {
      q: "Should I buy listing images, A+ Content, or a full listing upgrade?",
      a: "Choose listing images if traffic is coming but clicks or first impressions are weak. Choose A+ Content if the listing lacks trust, depth, and buyer education. Choose a full listing upgrade when both top-of-page visuals and product storytelling need work.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 via-white to-white text-slate-900">
      <Navbar />

      <section className="pt-24 pb-20 px-6 md:px-12 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-200/50 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-70 animate-blob" />
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-200/50 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold mb-6 text-slate-900 tracking-tight">
              Pricing for visuals that <br />
              <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent drop-shadow-sm">
                support better buying decisions
              </span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Clear pricing for listing images, A+ Content, and storefront support. Built for sellers comparing options, evaluating ROI, and planning the next creative fix.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <button
                onClick={() => setActiveTab("ecommerce")}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-lg ${
                  activeTab === "ecommerce"
                    ? "bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] text-white scale-105 shadow-purple-500/30"
                    : "bg-white text-slate-500 hover:text-[#7B2FD9] hover:bg-purple-50"
                }`}
              >
                <ShoppingCart size={20} /> E-Commerce Visuals
              </button>
              <button
                onClick={() => setActiveTab("brand")}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-lg ${
                  activeTab === "brand"
                    ? "bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] text-white scale-105 shadow-purple-500/30"
                    : "bg-white text-slate-500 hover:text-[#7B2FD9] hover:bg-purple-50"
                }`}
              >
                <Palette size={20} /> Brand & Marketing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#7B2FD9] to-transparent mb-5"></div>

      <div className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === "ecommerce" ? (
            <motion.div
              key="ecommerce"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-24"
            >
              <section className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "1",
                    title: "If your ads get clicks but no sales",
                    text: "Fix first-impression creatives and conversion clarity with listing images or a full listing upgrade.",
                  },
                  {
                    icon: "2",
                    title: "If your listing lacks A+",
                    text: "Add richer explanation, brand story, benefit modules, and trust-building content below the fold.",
                  },
                  {
                    icon: "3",
                    title: "If buyers need more confidence before purchasing",
                    text: "Use storefront or bundled visual systems to create a stronger commercial path across your catalog.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] text-white font-bold flex items-center justify-center mb-5">
                      {item.icon}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </section>

              <section>
                <div className="mb-12 text-center md:text-left">
                  <span className="text-[#7B2FD9] text-sm font-bold uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-md">
                    CORE COMMERCIAL PACKAGES
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
                    Start with the problem you need to fix first.
                  </h2>
                  <p className="text-slate-600 mt-2 text-lg">
                    Pricing is structured around the buyer questions most sellers are trying to solve.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col h-full group">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">A+ Content</h3>
                    <p className="text-slate-500 text-sm mb-8 font-medium">Best when the listing lacks depth, trust, and buyer education</p>
                    <div className="mb-8 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                      <span className="text-5xl font-extrabold text-[#7B2FD9]">₹699</span>
                      <span className="text-sm text-slate-500 font-bold ml-2">/ starting</span>
                      <p className="text-slate-400 text-xs mt-1 font-semibold uppercase">Depends on module count and scope</p>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {[
                        "A+ module planning",
                        "Benefit and feature storytelling",
                        "Brand-supportive layout design",
                        "Marketplace-ready visual structure",
                        "3–5 day delivery",
                      ].map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <Check size={12} className="text-[#7B2FD9]" />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-500 mb-8 border border-slate-100 italic flex gap-2 items-center">
                      <MessageSquare size={16} className="text-purple-400 shrink-0" /> Buyers click, but your listing still does not explain enough
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link href="/services/a-plus-content" className="text-[#7B2FD9] font-bold hover:underline">
                        View service details
                      </Link>
                      <Link href="/case-studies" className="text-[#7B2FD9] font-bold hover:underline">
                        See related results
                      </Link>
                      <Link href="/contact" className="block text-center py-4 rounded-full font-bold border-2 border-slate-200 text-slate-700 hover:border-[#7B2FD9] hover:text-[#7B2FD9] hover:bg-purple-50 transition-all duration-300">
                        Request Creative Audit
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white p-10 rounded-[32px] border-2 border-[#7B2FD9] flex flex-col h-full relative shadow-2xl shadow-purple-500/20 transform md:-translate-y-4">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wider flex items-center gap-2 shadow-lg">
                      <Star size={12} fill="currentColor" /> Most Relevant
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Listing Images</h3>
                    <p className="text-slate-500 text-sm mb-8 font-medium">Best when traffic is coming but first impression and click-through are weak</p>
                    <div className="mb-8 p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
                      <span className="text-5xl font-extrabold bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">₹399</span>
                      <span className="text-sm text-slate-500 font-bold ml-2">/ starting</span>
                      <p className="text-slate-400 text-xs mt-1 font-semibold uppercase">Depends on SKU count and category complexity</p>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {[
                        "5 listing images per SKU",
                        "Marketplace-compliant image structure",
                        "White background + selling visuals",
                        "Benefit-led layouts",
                        "3–5 day delivery",
                      ].map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Check size={12} className="text-white" />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-500 mb-8 border border-slate-100 italic flex gap-2 items-center">
                      <MessageSquare size={16} className="text-blue-400 shrink-0" /> Your product is good, but buyers are not stopping to trust it
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link href="/services/listing-images" className="text-[#7B2FD9] font-bold hover:underline">
                        View service details
                      </Link>
                      <Link href="/case-studies" className="text-[#7B2FD9] font-bold hover:underline">
                        See related results
                      </Link>
                      <Link href="/contact" className="block text-center py-4 rounded-full font-bold bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                        Request Creative Audit
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col h-full group">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Storefront / Brand Store</h3>
                    <p className="text-slate-500 text-sm mb-8 font-medium">Best when you need stronger branded navigation and product discovery</p>
                    <div className="mb-8 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                      <span className="text-5xl font-extrabold text-[#7B2FD9]">Custom</span>
                      <span className="text-sm text-slate-500 font-bold ml-2">pricing</span>
                      <p className="text-slate-400 text-xs mt-1 font-semibold uppercase">Scope depends on structure and page count</p>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {[
                        "Brand store structure support",
                        "Page layout and content planning",
                        "Category and brand navigation logic",
                        "Marketplace-ready creative direction",
                        "Quote based on actual scope",
                      ].map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <Check size={12} className="text-[#7B2FD9]" />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-500 mb-8 border border-slate-100 italic flex gap-2 items-center">
                      <MessageSquare size={16} className="text-purple-400 shrink-0" /> Buyers need a better brand journey across multiple products
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link href="/services/brand-store" className="text-[#7B2FD9] font-bold hover:underline">
                        View service details
                      </Link>
                      <Link href="/case-studies" className="text-[#7B2FD9] font-bold hover:underline">
                        See related results
                      </Link>
                      <Link href="/contact" className="block text-center py-4 rounded-full font-bold border-2 border-slate-200 text-slate-700 hover:border-[#7B2FD9] hover:text-[#7B2FD9] hover:bg-purple-50 transition-all duration-300">
                        Request Creative Audit
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="mb-12 text-center md:text-left">
                  <span className="text-[#60B8F0] text-sm font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
                    MULTI-SKU SUPPORT
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">More SKUs. Better buying consistency across your catalog.</h2>
                  <p className="text-slate-600 mt-2 text-lg">
                    Use this when multiple listings need aligned commercial creatives.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-[24px] border border-slate-200 shadow-xl bg-white">
                  <table className="w-full border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="p-6 text-left text-slate-500 font-bold text-xs uppercase tracking-wider">SERVICES</th>
                        <th className="p-6 text-center font-extrabold text-sm text-slate-700">10 SKUs</th>
                        <th className="p-6 text-center font-extrabold text-sm text-slate-700">25 SKUs</th>
                        <th className="p-6 text-center font-extrabold text-sm relative bg-purple-50 text-[#7B2FD9]">
                          50+ SKUs
                          <div className="absolute top-2 right-2 bg-green-100 text-green-700 text-[9px] px-2 py-0.5 rounded-full border border-green-200 font-bold">
                            BEST VALUE
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="p-6 text-slate-900 font-bold text-sm">
                          Listing Images
                          <br />
                          <span className="text-slate-400 font-medium text-xs">(5 images per SKU)</span>
                        </td>
                        <td className="p-6 text-center text-slate-600 font-medium text-sm">₹399/SKU</td>
                        <td className="p-6 text-center text-slate-600 font-medium text-sm">₹349/SKU</td>
                        <td className="p-6 text-center text-slate-900 font-bold text-lg bg-purple-50/30">
                          ₹299<span className="text-xs font-normal text-slate-500">/SKU</span>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="p-6 text-slate-900 font-bold text-sm">
                          A+ Content
                          <br />
                          <span className="text-slate-400 font-medium text-xs">(scope-based support)</span>
                        </td>
                        <td className="p-6 text-center text-slate-600 font-medium text-sm">₹699/SKU</td>
                        <td className="p-6 text-center text-slate-600 font-medium text-sm">₹599/SKU</td>
                        <td className="p-6 text-center text-slate-900 font-bold text-lg bg-purple-50/30">
                          ₹499<span className="text-xs font-normal text-slate-500">/SKU</span>
                        </td>
                      </tr>
                      <tr className="bg-gradient-to-r from-white to-purple-50 border-l-[6px] border-[#7B2FD9]">
                        <td className="p-6 text-slate-900 font-bold text-sm flex items-center gap-3">
                          Full Listing Upgrade
                          <span className="text-[10px] bg-[#7B2FD9] text-white px-2 py-0.5 rounded-full font-bold shadow-sm">
                            RECOMMENDED
                          </span>
                        </td>
                        <td className="p-6 text-center text-[#7B2FD9] font-bold text-sm">₹999/SKU</td>
                        <td className="p-7 text-center text-[#7B2FD9] font-bold text-sm">₹899/SKU</td>
                        <td className="p-6 text-center text-[#7B2FD9] font-extrabold text-xl bg-purple-100/50">
                          ₹699<span className="text-xs font-normal text-slate-500">/SKU</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Which package fits which problem?",
                    text: "Use listing images when first impression is weak. Use A+ Content when the page lacks detail and trust. Use a full listing upgrade when buyers need both better visuals and better explanation.",
                  },
                  {
                    title: "If your ads get clicks but no sales",
                    text: "Start with listing images or a full listing upgrade. This is usually a first-impression and buyer-confidence problem, not only a traffic problem.",
                  },
                  {
                    title: "If your listing lacks A+",
                    text: "Add A+ Content first if buyers need more context, clearer benefits, or stronger brand trust before purchasing.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-slate-900 font-bold mb-3 text-lg">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </section>

              <section className="bg-gradient-to-r from-slate-900 to-slate-800 p-12 rounded-[32px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7B2FD9]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">Need help choosing the right commercial fix?</h3>
                    <p className="text-slate-300 text-lg">
                      Start with your current problem, not with a random package.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-200">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2"><Check size={16} className="text-[#7B2FD9]" /> Buyers are not clicking</div>
                      <div className="flex items-center gap-2"><Check size={16} className="text-[#7B2FD9]" /> Buyers click but do not convert</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2"><Check size={16} className="text-[#7B2FD9]" /> Listing lacks A+ support</div>
                      <div className="flex items-center gap-2"><Check size={16} className="text-[#7B2FD9]" /> Brand store needs better structure</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-full font-bold hover:bg-purple-50 transition-colors">
                    Request Creative Audit <ArrowRight size={18} />
                  </Link>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 text-white border border-white/20 px-5 py-3 rounded-full font-bold hover:bg-white/5 transition-colors">
                    See Results <ArrowRight size={18} />
                  </Link>
                </div>
              </section>

              <section>
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-10">
                    <span className="text-[#7B2FD9] text-sm font-bold uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-md">
                      PRICING FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
                      Buyer questions we hear before pricing decisions
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {pricingFaqs.map((faq, i) => (
                      <details key={i} className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm">
                        <summary className="cursor-pointer font-bold text-slate-900 list-none flex items-center justify-between gap-4">
                          {faq.q}
                          <span className="text-[#7B2FD9] text-xl">+</span>
                        </summary>
                        <p className="text-slate-600 mt-4 leading-relaxed">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="brand"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="text-center mb-16">
                <span className="text-[#60B8F0] text-sm font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md ">
                  BRAND & MARKETING DESIGN
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Every brand project is different.</h2>
                <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
                  Pricing depends on scope, complexity, and timeline. Request a creative audit and we will recommend the right next step.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Palette, title: "Logo & Brand Identity", text: "Logo design, brand color system, typography kit & complete brand guidelines." },
                  { icon: Package, title: "Packaging Design", text: "Box, label, pouch & insert design. Print-ready CMYK files delivered." },
                  { icon: Share2, title: "Social Media Creatives", text: "Posts, carousels, stories & reel covers - on-brand, platform-optimized." },
                  { icon: Zap, title: "Ad Creatives", text: "High-converting Meta & Google ad creatives. Multiple sizes. A/B test versions." },
                  { icon: Layout, title: "Presentation & Pitch Deck", text: "Investor decks, sales presentations & company profiles. PowerPoint + Google Slides." },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-lg group hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7B2FD9] to-[#60B8F0] flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-slate-900 font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.text}</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-[#7B2FD9] font-bold hover:gap-3 transition-all">
                      Request Creative Audit
                    </Link>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-[32px] p-12 border border-purple-100 text-center mt-12 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0]" />
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Not sure what your project needs?</h2>
                <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                  Tell us about your company. We will scope it clearly and point you toward the right next step.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="gradient-btn px-10 py-4 font-bold text-white shadow-lg hover:shadow-purple-500/20 transition-all">
                    Request Creative Audit
                  </Link>
                  <a
                    href="https://wa.me/917417791003"
                    className="px-10 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-bold hover:border-[#7B2FD9] hover:text-[#7B2FD9] transition-all"
                  >
                    Talk on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <section className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">How work moves at PV Labs</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 hidden md:block rounded-full" />
            <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] hidden md:block rounded-full" />

            {[
              { step: 1, title: "Requirement confirmation & asset collection" },
              { step: 2, title: "Visual structure alignment before execution" },
              { step: 3, title: "Final delivery after scope completion" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10 group">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-xl border-4 border-white transition-transform duration-300 hover:scale-110 ${
                    i < 2 ? "bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] text-white" : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {s.step}
                </div>
                <p className="text-slate-900 text-sm font-bold max-w-[200px]">{s.title}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest bg-slate-50 inline-block px-4 py-2 rounded-full">
              Execution starts post advance payment
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto border-t border-slate-100 pt-12">
          <p className="text-slate-600 mb-4 font-medium">
            Clear pricing helps buyers compare options faster and move with less hesitation.
          </p>
          <p className="text-slate-600 font-medium">
            Need help choosing between listing images, A+ Content, or storefront support? We can guide the next step.
          </p>
          <div className="mt-12">
            <Link
              href="/contact"
              className="gradient-btn px-12 py-5 font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 transition-all text-white"
            >
              Request Creative Audit
            </Link>
            <div className="mt-8 space-y-2 text-slate-500 text-xs font-medium">
              <p>📞 We respond within 2 hours · Mon–Sat 10am–7pm IST</p>
              <p>💬 Or WhatsApp us directly: +91 74177 91003</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
