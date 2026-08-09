import type { Metadata } from "next";
import Faq from "@/pages-old/FAQPage";
import JsonLd from "@/components/seo/JsonLd";
import { faqs } from "@/lib/Faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about PV Labs' e-commerce design services, turnaround times, and revisions.",
  alternates: { canonical: "https://pvlabs.ai/faq" },
  openGraph: { url: "https://pvlabs.ai/faq" },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://pvlabs.ai/faq#faqpage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <JsonLd id="ld-json-faq" data={faqSchema} />
      <Faq />
    </>
  );
}