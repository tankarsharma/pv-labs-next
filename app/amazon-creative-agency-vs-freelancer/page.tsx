import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo/schema";

const URL = "https://pvlabs.ai/amazon-creative-agency-vs-freelancer";

export const metadata: Metadata = {
  title: "Amazon Creative Company vs Freelancer — What Should You Hire?",
  description:
    "Comparing a freelancer vs a dedicated Amazon creative company for listing images, A+ Content, and Brand Store — cost, speed, compliance, and consistency compared.",
  alternates: { canonical: URL },
  openGraph: { url: URL },
};

const faqs = [
  {
    question: "Is a freelancer cheaper than a dedicated creative company?",
    answer:
      "Often cheaper upfront, but revisions, missed platform specs, and rejected submissions add hidden cost and delay. A company like PV Labs includes a compliance guarantee and structured revision rounds in the price.",
  },
  {
    question: "Who understands Amazon and Flipkart compliance better?",
    answer:
      "A company that works across many sellers and categories sees rejection patterns repeatedly and builds process around them. A single freelancer typically has less exposure to platform-specific rejection triggers.",
  },
  {
    question: "What if I only need one image set, not ongoing work?",
    answer:
      "PV Labs supports single-SKU orders as well as bulk packages — you don't need an ongoing retainer to get platform-compliant creative.",
  },
];

export default function Page() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "https://pvlabs.ai" },
    { name: "Creative Company vs Freelancer", item: URL },
  ]);

 const faqJsonLd = faqSchema(faqs);
  
  return (
    <div className="min-h-screen gradient-bg-soft">
      <Navbar />
      <JsonLd id="ld-json-breadcrumb" data={breadcrumbJsonLd} />
      <JsonLd id="ld-json-faq" data={faqJsonLd} />

      <section className="pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            Freelancer vs a Dedicated Amazon Creative Company
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Both can produce images. The difference shows up in compliance, revision cycles, and
            how consistently your catalog looks across SKUs.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full glass-card text-sm">
            <thead>
              <tr className="text-left border-b border-border/50">
                <th className="p-4 font-bold text-foreground">Factor</th>
                <th className="p-4 font-bold text-foreground">Freelancer</th>
                <th className="p-4 font-bold text-foreground">PV Labs</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/30">
                <td className="p-4 font-semibold text-foreground">Platform compliance guarantee</td>
                <td className="p-4">Usually informal or none</td>
                <td className="p-4">100% compliance guarantee, free redo on rejection</td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="p-4 font-semibold text-foreground">Turnaround</td>
                <td className="p-4">Varies by availability</td>
                <td className="p-4">3–5 business days for listing images, 5 days for A+ Content</td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="p-4 font-semibold text-foreground">Consistency across SKUs</td>
                <td className="p-4">Depends on individual working style</td>
                <td className="p-4">Structured process for catalog-level consistency</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">Revision rounds included</td>
                <td className="p-4">Negotiated per project</td>
                <td className="p-4">2 rounds included by default</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-5xl mx-auto mt-10 glass-card p-8">
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">When a freelancer makes sense</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have one SKU, a flexible timeline, and no compliance pressure, a freelancer can
            work. Once you have multiple SKUs, need platform compliance guaranteed, or need a
            consistent visual system across your catalog, a dedicated company reduces risk and rework.
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
          <Link href="/case-studies" className="bg-background text-foreground px-8 py-4 rounded-full font-bold border border-border text-center">
            See case studies
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
