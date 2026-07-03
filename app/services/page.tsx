import type { Metadata } from "next";
import Services from "@/pages-old/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore PV Labs' full range of e-commerce design services — listing images, A+ content, brand stores, and more.",
  alternates: { canonical: "https://pvlabs.ai/services" },
  openGraph: { url: "https://pvlabs.ai/services" },
};

export default function Page() {
  return <Services />;
}
