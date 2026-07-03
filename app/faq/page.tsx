import type { Metadata } from "next";
import FAQ from "@/pages-old/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about PV Labs' e-commerce design services, turnaround times, and revisions.",
  alternates: { canonical: "https://pvlabs.ai/faq" },
  openGraph: { url: "https://pvlabs.ai/faq" },
};

export default function Page() {
  return <FAQ />;
}
