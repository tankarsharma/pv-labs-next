import type { Metadata } from "next";
import Blog from "@/pages-old/Blog";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Expert e-commerce design insights, Amazon listing guides, A+ content tips, and Flipkart image requirements from the PV Labs team.",
  alternates: { canonical: "https://pvlabs.ai/blog" },
  openGraph: { url: "https://pvlabs.ai/blog" },
};

export default function Page() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "PV Labs Blog",
    url: "https://pvlabs.ai/blog",
  };

  return (
    <>
      <JsonLd id="ld-json-blog" data={blogSchema} />
      <h1 className="sr-only">Blog & Insights</h1>
      <Blog />
    </>
  );
}