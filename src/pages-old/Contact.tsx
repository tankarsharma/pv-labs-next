"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, CheckCircle } from "lucide-react";
import { socialLinks } from "@/lib/social-links";
import { FaWhatsapp } from "react-icons/fa6";

const contactOptions = {
  projectTypes: [
    "A+ Content",
    "Listing Images",
    "Storefront / Brand Store",
    "Full Listing Upgrade",
    "Launch Support",
    "Not sure yet",
  ],
  marketplaces: [
    "Amazon",
    "Flipkart",
    "Myntra",
    "Meesho",
    "Ajio",
    "Brand Website",
    "Multiple marketplaces",
  ],
  categories: [
    "Beauty / Skincare",
    "Fashion / Apparel",
    "Jewellery / Accessories",
    "Home / Kitchen",
    "Food / Wellness",
    "Other",
  ],
  skuCounts: [
    "1 SKU",
    "2–10 SKUs",
    "11–25 SKUs",
    "26–50 SKUs",
    "50+ SKUs",
  ],
  budgetRanges: [
    "Under ₹5,000",
    "₹5,000–₹15,000",
    "₹15,000–₹50,000",
    "₹50,000+",
    "Need recommendation",
  ],
  mainProblems: [
    "Low conversion",
    "Need A+ content",
    "Need listing images",
    "Need storefront",
    "Launch support",
    "Need better creative direction",
  ],
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Request Creative Audit
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
              Let&apos;s <span className="gradient-text">talk</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tell us what you are trying to fix, what marketplace you sell on, and how many SKUs are involved. We will guide the clearest next step.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-muted-foreground">
              {["WhatsApp-first", "Commercial guidance", "Low-friction start"].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-primary" /> {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="p-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 md:p-10 shadow-xl h-full">
              <div className="mb-8">
                <h2 className="font-heading text-3xl font-extrabold mb-3 text-foreground">
                  Qualify your project before we talk
                </h2>
                <p className="text-base text-muted-foreground max-w-2xl">
                  This helps us point you to the right service, pricing path, and next step before you message us.
                </p>
              </div>

              <div className="space-y-8">
                <ContactChoiceGroup
                  title="Project type"
                  items={contactOptions.projectTypes}
                />

                <ContactChoiceGroup
                  title="Marketplace"
                  items={contactOptions.marketplaces}
                />

                <ContactChoiceGroup
                  title="Category"
                  items={contactOptions.categories}
                />

                <ContactChoiceGroup
                  title="Number of SKUs"
                  items={contactOptions.skuCounts}
                />

                <ContactChoiceGroup
                  title="Budget range"
                  items={contactOptions.budgetRanges}
                />

                <ContactChoiceGroup
                  title="Main problem"
                  items={contactOptions.mainProblems}
                />

                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Ready to continue?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    No backend needed yet. Use the buttons below to start the conversation with your requirements.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/917417791003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-green-500 text-white rounded-2xl font-bold text-base hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg shadow-green-200"
                    >
                      <FaWhatsapp size={20} /> Talk on WhatsApp
                    </a>

                    <a
                      href="mailto:growth@pvlabs.ai?subject=Request%20Creative%20Audit"
                      className="px-8 py-4 border border-slate-300 text-foreground rounded-2xl font-bold text-base hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-3"
                    >
                      <Mail size={18} /> Email Project Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {[
              {
                icon: Mail,
                label: "Email Us",
                value: "growth@pvlabs.ai",
                sub: "Share your listing or project details",
                href: "mailto:growth@pvlabs.ai",
              },
              {
                icon: Phone,
                label: "Call Us",
                value: "+91 74177 91003",
                sub: "Mon–Sat, 10AM–7PM IST",
                href: "tel:+917417791003",
              },
              {
                icon: Clock,
                label: "Business Hours",
                value: "Mon – Sat: 10AM-7PM IST",
                sub: "Sunday: Closed",
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-5 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-foreground hover:text-primary transition-colors"
                      target={item.href.startsWith("mailto:") ? "_blank" : undefined}
                      rel={item.href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm text-foreground">{item.value}</div>
                  )}
                  <div className="text-xs text-muted-foreground">{item.sub}</div>
                </div>
              </div>
            ))}

            <div className="glass-card p-6">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Best when you want help with:
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Low conversion on active listings",
                  "A+ Content planning and execution",
                  "Listing image upgrades",
                  "Storefront support",
                  "Launch support for new SKUs",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-5">
              <h3 className="text-sm font-semibold text-foreground mb-3">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ icon: Icon, label, href, hoverColor }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`group w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 ${hoverColor}`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ContactChoiceGroup = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <div>
      <h3 className="font-heading text-lg font-bold text-foreground mb-3">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            className="px-4 py-2 rounded-full border border-border bg-background text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-all"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Contact;
