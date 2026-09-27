import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

const URL = "https://pvlabs.ai/a-plus-content-vs-storefront";

export const metadata: Metadata = {
  title: "A+ Content vs Amazon Brand Store — Which Do You Need First?",
  description:
    "A+ Content and Amazon Brand Store solve different problems. Compare what each does, what it costs, and which one to build first for your listing.",
  alternates: { canonical: URL },
  openGraph: { url: URL },
};

const faqs = [
  {
    question: "Should I build A+ Content or a Brand Store first?",
    answer:
      "A+ Content first. It sits directly on your product listing where buyers already land from search, and it's free for Brand Registered sellers. A Brand Store matters most once you're running Sponsored Brands ads and need a destination beyond the product page.",
  },
  {
    question: "Can I have both?",
    answer:
      "Yes, and most established brands do. A+ Content converts the buyer who's already on your listing. Brand Store converts traffic from ads and byline clicks by removing competitor distractions.",
  },
  {
    question: "Do both require Amazon Brand Registry?",
    answer:
      "Yes. Both A+ Content and Brand Store are only available to Brand Registered sellers with a registered or pending trademark.",
  },
];

export default function Page() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "https://pvlabs.ai" },
    { name: "A+ Content vs Storefront", item: URL },
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen gradient-bg-soft">
      <Navbar />
      <JsonLd id="ld-json-breadcrumb" data={breadcrumbJsonLd} />
      <JsonLd id="ld-json-faq" data={faqJsonLd} />

      <section className="pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            A+ Content vs Amazon Brand Store
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Both are Amazon Brand Registry features. They solve different problems in your buyer's
            journey — here's how to decide which one to build first.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="glass-card p-8">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">A+ Content</h2>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>Lives directly on your product listing page</li>
              <li>Free for all Brand Registered sellers</li>
              <li>Increases conversion 3–10% on average (Amazon data)</li>
              <li>Delivered in 5 days, live in 8–12 days after Amazon review</li>
              <li>Starts at ₹5,000 per ASIN</li>
            </ul>
            <Link
              href="/services/a-plus-content"
              className="mt-6 inline-flex bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold"
            >
              See A+ Content service
            </Link>
          </div>

          <div className="glass-card p-8">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Amazon Brand Store</h2>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>A separate multi-page destination away from the product listing</li>
              <li>Free to publish, requires design investment</li>
              <li>Removes competitor ads for visitors who land there</li>
              <li>Best paired with Sponsored Brands ad traffic</li>
              <li>Starts at ₹15,000 for a 3-page store</li>
            </ul>
            <Link
              href="/services/brand-store"
              className="mt-6 inline-flex bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold"
            >
              See Brand Store service
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 glass-card p-8">
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">Which one first?</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you're not yet running Sponsored Brands ads, build A+ Content first — it's free,
            sits where your organic and PPC traffic already lands, and directly lifts conversion.
            Build a Brand Store once you're spending on Sponsored Brands and need a landing
            destination that doesn't leak clicks to competitors.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">FAQs</h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="font-bold text-foreground mb-2">{f.question}</h3>
                <p className="text-muted-foreground text-sm">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/pricing" className="bg-background text-foreground px-8 py-4 rounded-full font-bold border border-border text-center">
            View pricing
          </Link>
          <Link href="/contact" className="gradient-btn px-8 py-4 font-bold text-center">
            Talk to PV Labs
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
