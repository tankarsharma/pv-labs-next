import type { Metadata } from "next";
import Founders from "@/pages-old/Founders";
import JsonLd from "@/components/seo/JsonLd";
import { personSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Founder — Meet Tankaar Sharma",
  description:
    "Meet Tankaar Sharma, founder of PV Labs, an e-commerce creative company helping Amazon sellers and D2C brands build high-converting visuals.",
  alternates: { canonical: "https://pvlabs.ai/founders" },
  openGraph: { url: "https://pvlabs.ai/founders" },
};

export default function Page() {
  const personJsonLd = personSchema({
    name: "Tankaar Sharma",
    jobTitle: "Founder & Creative Director",
    description:
      "Tankaar Sharma is the founder of PV Labs, an e-commerce creative company. He founded PV Labs to help marketplace sellers and D2C brands convert weak product visuals into high-converting listings and storefronts through designer-led product visuals and A+ Content design.",
    url: "https://pvlabs.ai/founders",
  });

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "https://pvlabs.ai" },
    { name: "Founders", item: "https://pvlabs.ai/founders" },
  ]);

  return (
    <>
      <JsonLd id="ld-json-founder-person" data={personJsonLd} />
      <JsonLd id="ld-json-founder-breadcrumb" data={breadcrumbJsonLd} />
      <Founders />
    </>
  );
}
