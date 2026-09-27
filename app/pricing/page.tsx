import type { Metadata } from "next";
import Pricing from "@/pages-old/Pricing";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for PV Labs' e-commerce design packages — listing images, A+ content, and brand store design.",
  alternates: { canonical: "https://pvlabs.ai/pricing" },
  openGraph: { url: "https://pvlabs.ai/pricing" },
};

const pricingFaqs = [
  {
    question: "How much does A+ Content design cost?",
    answer:
      "A+ Content pricing depends on scope, number of modules, and whether it is part of a wider listing upgrade. Use the pricing page or contact PV Labs for a quote matched to your product and SKU count.",
  },
  {
    question: "How much do listing images cost?",
    answer:
      "Listing image pricing depends on SKU count, category complexity, and whether you need only images or a complete listing upgrade with supporting content.",
  },
  {
    question: "How much does storefront or brand store design cost?",
    answer:
      "Storefront pricing depends on page count, content readiness, and whether the work is part of a larger marketplace creative project.",
  },
  {
    question: "Should I choose listing images, A+ Content, or a full listing upgrade?",
    answer:
      "If your ads get clicks but conversions are weak, improve listing images first. If the listing lacks depth or brand trust, add A+ Content. If both first-click visuals and below-the-fold content need work, a full listing upgrade is more efficient.",
  },
];

export default function Page() {
  const pricingFaqSchema = faqSchema(pricingFaqs);
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "https://pvlabs.ai" },
    { name: "Pricing", item: "https://pvlabs.ai/pricing" },
  ]);

  return (
    <>
      <JsonLd id="ld-json-pricing-faq" data={pricingFaqSchema} />
      <JsonLd id="ld-json-pricing-breadcrumb" data={breadcrumbJsonLd} />
      <Pricing />
    </>
  );
}
