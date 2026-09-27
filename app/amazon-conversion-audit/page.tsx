import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

const URL = "https://pvlabs.ai/amazon-conversion-audit";

export const metadata: Metadata = {
  title: "Free Amazon Listing Conversion Audit — Find What's Costing You Sales",
  description:
    "Get a free review of your Amazon or Flipkart listing images, A+ Content, and Brand Store against platform compliance and conversion best practices.",
  alternates: { canonical: URL },
  openGraph: { url: URL },
};

const checklist = [
  {
    title: "Hero image compliance",
    detail: "Pure white background, product fills 85%+ of frame, no text or watermarks.",
  },
  {
    title: "Image set completeness",
    detail: "Angles, lifestyle context, infographics, and dimension references present.",
  },
  {
    title: "A+ Content presence",
    detail: "Brand Story and module structure in place if you're Brand Registered.",
  },
  {
    title: "Consistency across SKUs",
    detail: "Visual language matches across your full catalog, not just top sellers.",
  },
  {
    title: "Mobile readability",
    detail: "Infographic text and A+ modules readable on a phone screen.",
  },
];

export default function Page() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "https://pvlabs.ai" },
    { name: "Amazon Conversion Audit", item: URL },
  ]);

  return (
    <div className="min-h-screen gradient-bg-soft">
      <Navbar />
      <JsonLd id="ld-json-breadcrumb" data={breadcrumbJsonLd} />

      <section className="pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            Free Amazon Listing Conversion Audit
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Send us your listing. We'll review it against Amazon's compliance rules and conversion
            best practices, and tell you exactly what's holding your CTR and conversion rate back.
          </p>
          <Link href="/contact" className="gradient-btn px-8 py-4 font-bold inline-flex mt-8">
            Request your free audit
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">What we check</h2>
          <div className="space-y-4">
            {checklist.map((c, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 glass-card p-8">
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">How it works</h2>
          <ol className="text-muted-foreground space-y-2 list-decimal list-inside">
            <li>Share your listing URL and current images via the contact form.</li>
            <li>We review it against Amazon/Flipkart compliance and conversion patterns.</li>
            <li>You get a written breakdown of gaps and recommended fixes — no obligation.</li>
          </ol>
        </div>

        <div className="max-w-4xl mx-auto mt-10 text-center">
          <Link href="/contact" className="gradient-btn px-8 py-4 font-bold inline-flex">
            Get my free audit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
