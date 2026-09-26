"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Target, Users, BarChart3 } from "lucide-react";
import { caseStudies } from "@/content/case-studies/items";

const CaseStudies = () => (
  <div className="min-h-screen gradient-bg-soft">
    <Navbar />

    <section className="pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
            Before PV Labs. <span className="gradient-text">After PV Labs.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Real commercial problems. Real project outcomes. Explore each case study directly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
        >
          {[
            { icon: TrendingUp, num: "2x", label: "Stronger click performance" },
            { icon: Target, num: "Buyer", label: "Decision-support focus" },
            { icon: Users, num: "Multi", label: "Marketplace use cases" },
            { icon: BarChart3, num: "Proof", label: "Results buyers can review" },
          ].map((s, i) => (
            <div key={i} className="glass-card p-4 text-center">
              <s.icon size={18} className="text-primary mx-auto mb-1" />
              <div className="font-heading text-2xl font-bold gradient-text">{s.num}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="px-6 md:px-12 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={typeof cs.heroImage === "string" ? cs.heroImage : cs.heroImage.src}
                  alt={cs.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {cs.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{cs.client}</span>
                </div>

                <h2 className="font-heading text-xl font-bold text-foreground mb-3">
                  {cs.title}
                </h2>

                <p className="text-sm text-muted-foreground mb-5 line-clamp-3">
                  {cs.problem}
                </p>

                <div className="flex flex-col gap-3">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 text-[#7B2FD9] font-bold hover:gap-3 transition-all"
                  >
                    View case study <ArrowRight size={16} />
                  </Link>
                  <Link
                    href={cs.serviceHref}
                    className="inline-flex items-center gap-2 text-[#7B2FD9] font-bold hover:gap-3 transition-all"
                  >
                    View related service <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 text-[#7B2FD9] font-bold hover:gap-3 transition-all"
                  >
                    View pricing <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#7B2FD9] font-bold hover:gap-3 transition-all"
                  >
                    Request Creative Audit <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6 text-center border-y border-border/50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
          Stronger proof helps buyers compare with more confidence.
        </h3>
        <p className="text-xl text-muted-foreground mb-10">
          If your listing, A+ Content, or storefront is underperforming, start with the case study closest to your problem.
        </p>
        <Link
          href="/contact"
          className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold inline-flex items-center gap-3 hover:shadow-2xl transition-all hover:scale-105"
        >
          Request Creative Audit <ArrowRight size={22} />
        </Link>
      </div>
    </section>

    <section className="section-padding bg-gradient-to-r from-slate-900 to-slate-800 text-center max-w-4xl mx-auto my-12 w-[calc(100%-3rem)] rounded-[32px] shadow-2xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Want results like these?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Start with the service, proof, and pricing path that matches your current problem.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/pricing"
            className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:shadow-xl transition-all hover:scale-105"
          >
            View Pricing
          </Link>
          <Link
            href="/contact"
            className="gradient-btn px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:shadow-xl transition-all hover:scale-105"
          >
            Request Creative Audit
          </Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default CaseStudies;
