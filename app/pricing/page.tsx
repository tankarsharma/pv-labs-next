import type { Metadata } from "next";
import Pricing from "@/pages-old/Pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for PV Labs' e-commerce design packages — listing images, A+ content, and brand store design.",
  alternates: { canonical: "https://pvlabs.ai/pricing" },
  openGraph: { url: "https://pvlabs.ai/pricing" },
};

export default function Page() {
  return <Pricing />;
}
