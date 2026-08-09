import type { Metadata } from "next";
import CaseStudies from "@/pages-old/CaseStudies";

export const metadata: Metadata = {
  title: "Case Studies — Real Results for E-Commerce Brands",
  description:
    "See how PV Labs helped Indian Amazon and Flipkart sellers increase CTR and conversions with professional listing images, A+ content, and brand visuals.",
  alternates: { canonical: "https://pvlabs.ai/case-studies" },
  openGraph: { url: "https://pvlabs.ai/case-studies" },
};

export default function Page() {
  return <CaseStudies />;
}