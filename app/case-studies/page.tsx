import type { Metadata } from "next";
import CaseStudies from "@/pages-old/CaseStudies";
import JsonLd from "@/components/seo/JsonLd";
import { collectionPageSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Case Studies — Real Results for E-Commerce Brands",
  description:
    "See how PV Labs helped Indian Amazon and Flipkart sellers increase CTR and conversions with professional listing images, A+ content, and brand visuals.",
  alternates: { canonical: "https://pvlabs.ai/case-studies" },
  openGraph: { url: "https://pvlabs.ai/case-studies" },
};

export default function Page() {
  const collectionJsonLd = collectionPageSchema({
    name: "PV Labs Case Studies",
    description:
      "Real commercial outcomes for Amazon, Flipkart, Myntra, and D2C brands worked with by PV Labs.",
    url: "https://pvlabs.ai/case-studies",
  });

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "https://pvlabs.ai" },
    { name: "Case Studies", item: "https://pvlabs.ai/case-studies" },
  ]);

  return (
    <>
      <JsonLd id="ld-json-case-studies-collection" data={collectionJsonLd} />
      <JsonLd id="ld-json-case-studies-breadcrumb" data={breadcrumbJsonLd} />
      <CaseStudies />
    </>
  );
}
