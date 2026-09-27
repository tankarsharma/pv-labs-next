import type { Metadata } from "next";
import Testimonials from "@/pages-old/TestimonialsPage";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Testimonials — What Our Clients Say",
  description:
    "Hear from Indian Amazon and Flipkart sellers who scaled their brands with PV Labs' listing images, A+ content, and visual design services.",
  alternates: { canonical: "https://pvlabs.ai/testimonials" },
  openGraph: { url: "https://pvlabs.ai/testimonials" },
};

export default function Page() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "https://pvlabs.ai" },
    { name: "Testimonials", item: "https://pvlabs.ai/testimonials" },
  ]);

  return (
    <>
      <JsonLd id="ld-json-testimonials-breadcrumb" data={breadcrumbJsonLd} />
      <Testimonials />
    </>
  );
}
