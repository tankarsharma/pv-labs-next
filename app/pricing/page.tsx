import type { Metadata } from "next";
import Pricing from "@/pages-old/Pricing";
import { pricingFaqs } from "@/lib/pricing";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for PV Labs' e-commerce design packages — listing images, A+ content, and brand store design.",
  alternates: { canonical: "https://pvlabs.ai/pricing" },
  openGraph: { url: "https://pvlabs.ai/pricing" },
};


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
