import type { Metadata } from "next";
import Services from "@/pages-old/Services";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore PV Labs' full range of e-commerce design services — listing images, A+ content, brand stores, and more.",
  alternates: { canonical: "https://pvlabs.ai/services" },
  openGraph: { url: "https://pvlabs.ai/services" },
};

export default function Page() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Services",
    url: "https://pvlabs.ai/services",
  };

  return (
    <>
      <JsonLd id="ld-json-services" data={servicesSchema} />
      <h1 className="sr-only">Services</h1>
      <Services />
    </>
  );
}