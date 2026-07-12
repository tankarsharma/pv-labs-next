import type { Metadata } from "next";
import Blog from "@/pages-old/Blog";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Expert e-commerce design insights, Amazon listing guides, A+ content tips, and Flipkart image requirements from the PV Labs team.",
  alternates: { canonical: "https://pvlabs.ai/blog" },
  openGraph: { url: "https://pvlabs.ai/blog" },
};

export default function Page() {
  return (
    <>
      <h1 className="sr-only">Blog & Insights</h1>
      <Blog />
    </>
  );
}
