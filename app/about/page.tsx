import type { Metadata } from "next";
import About from "@/pages-old/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PV Labs — the team behind India's leading e-commerce design studio for Amazon and Flipkart sellers.",
  alternates: { canonical: "https://pvlabs.ai/about" },
  openGraph: { url: "https://pvlabs.ai/about" },
};

export default function Page() {
  return <About />;
}
