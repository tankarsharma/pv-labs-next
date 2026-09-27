import type { Metadata } from "next";
import Contact from "@/pages-old/Contact";
import JsonLd from "@/components/seo/JsonLd";
import { contactPageSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with PV Labs for e-commerce design enquiries, custom projects, or partnership opportunities.",
  alternates: { canonical: "https://pvlabs.ai/contact" },
  openGraph: { url: "https://pvlabs.ai/contact" },
};

export default function Page() {
  const contactJsonLd = contactPageSchema({ url: "https://pvlabs.ai/contact" });
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "https://pvlabs.ai" },
    { name: "Contact", item: "https://pvlabs.ai/contact" },
  ]);

  return (
    <>
      <JsonLd id="ld-json-contact" data={contactJsonLd} />
      <JsonLd id="ld-json-contact-breadcrumb" data={breadcrumbJsonLd} />
      <h1 className="sr-only">Contact</h1>
      <Contact />
    </>
  );
}
