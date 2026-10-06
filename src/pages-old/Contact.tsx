"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, CheckCircle } from "lucide-react";
import { socialLinks } from "@/lib/social-links";
import { FaWhatsapp } from "react-icons/fa6";
import {
  buildContactMessage,
  contactGroups,
  contactMessageLinks,
  toggleContactChoice,
  whatsappContactUrl,
  type ContactGroup,
  type ContactSelections,
} from "@/lib/contact-enquiry";

const Contact = () => {
  const [selections, setSelections] = useState<ContactSelections>({});
  const [details, setDetails] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [copying, setCopying] = useState(false);
  const message = buildContactMessage(selections, details);
  const links = contactMessageLinks(message);
  const hasDetails = Object.values(selections).some((values) => values.length > 0) || details.trim().length > 0;

  function choose(group: ContactGroup, item: string) {
    setSelections((current) => toggleContactChoice(current, group, item));
    setCopyStatus("");
  }

  async function copyMessage() {
    setCopying(true);
    try {
      await navigator.clipboard.writeText(message);
      setCopyStatus("Message copied. Paste it into WhatsApp or email.");
    } catch {
      setCopyStatus("Could not copy automatically. Select and copy the message below.");
    } finally {
      setCopying(false);
    }
  }

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
                  Share your project details — optional
                </h2>
                <p className="text-base text-muted-foreground max-w-2xl">
                  Choose what applies, or skip this and chat with us directly. Your choices will be included in your message.
                </p>
              </div>

              <div className="mb-8">
                <a
                  href={whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="contact-direct-whatsapp"
                  className="inline-flex items-center gap-2 text-green-700 font-semibold underline underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <FaWhatsapp size={20} /> Skip the details — chat directly on WhatsApp
                </a>
              </div>

              <div className="space-y-8">
                {contactGroups.map((group) => (
                  <ContactChoiceGroup
                    key={group.key}
                    group={group}
                    selected={selections[group.key] ?? []}
                    onToggle={(item) => choose(group, item)}
                  />
                ))}

                <div>
                  <label htmlFor="project-details" className="block font-heading text-lg font-bold text-foreground mb-3">
                    Listing link or extra details <span className="text-sm font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <textarea
                    id="project-details"
                    value={details}
                    onChange={(event) => { setDetails(event.target.value); setCopyStatus(""); }}
                    maxLength={1000}
                    rows={3}
                    placeholder="Share a product link or tell us what you need."
                    className="w-full rounded-xl border border-border bg-background p-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                  <p className="text-xs text-muted-foreground mt-2">{details.length}/1,000 characters</p>
                </div>

                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Ready to continue?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    Nothing is sent when you select an option. Open WhatsApp or email, review your message, then press Send there.
                  </p>

                  <label htmlFor="enquiry-preview" className="block text-sm font-semibold text-foreground mb-2">
                    Your message
                  </label>
                  <textarea
                    id="enquiry-preview"
                    readOnly
                    value={message}
                    rows={hasDetails ? 8 : 3}
                    className="w-full rounded-xl border border-slate-200 bg-white p-4 text-sm mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                  <div className="flex flex-wrap items-center gap-4 mb-5">
                    <button type="button" onClick={copyMessage} disabled={copying} className="text-sm font-semibold text-primary underline underline-offset-4 rounded focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50">
                      {copying ? "Copying…" : "Copy message"}
                    </button>
                    {hasDetails && (
                      <button type="button" onClick={() => { setSelections({}); setDetails(""); setCopyStatus(""); }} className="text-sm font-semibold text-muted-foreground underline underline-offset-4 rounded focus-visible:ring-2 focus-visible:ring-primary">
                        Clear all details
                      </button>
                    )}
                  </div>
                  <p role="status" className="text-sm text-muted-foreground mb-4">{copyStatus}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={whatsappContactUrl}
                      onClick={(event) => {
                        event.preventDefault();
                        // Keep the message out of the DOM link URL and outbound-link analytics.
                        window.open(links.whatsapp, "_blank", "noopener,noreferrer");
                      }}
                      data-cta="contact-brief-whatsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-green-500 text-white rounded-2xl font-bold text-base hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg shadow-green-200"
                    >
                      <FaWhatsapp size={20} /> Continue on WhatsApp
                    </a>

                    <a
                      href={links.email}
                      data-cta="contact-brief-email"
                      className="px-8 py-4 border border-slate-300 text-foreground rounded-2xl font-bold text-base hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-3"
                    >
                      <Mail size={18} /> Continue by email
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
  group,
  selected,
  onToggle,
}: {
  group: ContactGroup;
  selected: string[];
  onToggle: (item: string) => void;
}) => (
  <fieldset>
    <legend className="font-heading text-lg font-bold text-foreground mb-3">
      {group.title} <span className="text-sm font-normal text-muted-foreground">(optional)</span>
    </legend>
    <p className="text-xs text-muted-foreground mb-3">
      {group.multiple ? "Choose any that apply. Click again to remove." : "Choose one. Click again to remove."}
    </p>
    <div className="flex flex-wrap gap-3">
      {group.items.map((item) => {
        const active = selected.includes(item);
        return (
          <button
            key={item}
            type="button"
            aria-pressed={active}
            onClick={() => onToggle(item)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
              active ? "border-primary bg-primary text-white" : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  </fieldset>
);

export default Contact;
