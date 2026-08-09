import type { Metadata } from "next";
import Portfolio from "@/pages-old/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio — Our Work",
  description:
    "See real Amazon listing images, A+ content, Flipkart catalog visuals, and packaging designs created by PV Labs for Indian e-commerce brands.",
  alternates: { canonical: "https://pvlabs.ai/portfolio" },
  openGraph: { url: "https://pvlabs.ai/portfolio" },
};

export default function Page() {
  return <Portfolio />;
}