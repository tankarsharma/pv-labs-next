import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo/schema";

const URL = "https://pvlabs.ai/industries/supplements-amazon-creative";

export const metadata: Metadata = {
  title: "Amazon Creative for Supplement & Nutrition Brands",
  description:
    "Listing images, A+ Content, and Brand Store design for Indian supplement and nutrition brands selling on Amazon and Flipkart.",
  alternates: { canonical: URL },
  openGraph: { url: URL },
};

export default function Page() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "https://pvlabs.ai" },
    { name: "Supplements & Nutrition", item: URL },
  ]);

  const collectionJsonLd = collectionPageSchema({
    name: "Amazon Creative for Supplement & Nutrition Brands",
    description:
      "Listing images, A+ Content, and Brand Store design for Indian supplement and nutrition brands.",
    url: URL,
  });

  return (
    <div className="min-h-screen gradient-bg-soft">
      <Navbar />
      <JsonLd id="ld-json-breadcrumb" data={breadcrumbJsonLd} />
      <JsonLd id="ld-json-collection" data={collectionJsonLd} />

      <section className="pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            Amazon Creative for Supplement & Nutrition Brands
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Supplement buyers need certification cues, ingredient clarity, and dosage information
            before they trust a listing. We design creative built around that trust gap.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/services/listing-images" className="glass-card p-6 block">
            <h3 className="font-bold text-foreground mb-2">Listing Images</h3>
            <p className="text-muted-foreground text-sm">Dosage, certification, and ingredient-focused visuals.</p>
          </Link>
          <Link href="/services/a-plus-content" className="glass-card p-6 block">
            <h3 className="font-bold text-foreground mb-2">A+ Content</h3>
            <p className="text-muted-foreground text-sm">Ingredient breakdown and comparison modules for supplement variants.</p>
          </Link>
          <Link href="/services/brand-store" className="glass-card p-6 block">
            <h3 className="font-bold text-foreground mb-2">Brand Store</h3>
            <p className="text-muted-foreground text-sm">Full catalog storefront for multi-SKU nutrition brands.</p>
          </Link>
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
          Related case study
        </h2>
        <div className="max-w-4xl mx-auto">
          <Link href="/case-studies/only-essentials-d2c" className="glass-card p-6 block">
            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
              D2C · Gut Health
            </span>
            <h3 className="font-bold text-foreground mb-1">Only Essentials</h3>
            <p className="text-muted-foreground text-sm">
              How stronger trust signals and product clarity supported a gut-health supplement brand.
            </p>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto mt-12 flex flex-col sm:flex-row gap-4">
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
