import type { Metadata } from "next";
import Careers from "@/pages-old/Careers";

export const metadata: Metadata = {
  title: "Careers — Join PV Labs",
  description:
    "Join PV Labs and help Indian e-commerce brands create stunning product visuals. We're hiring designers, content creators, and creative strategists.",
  alternates: { canonical: "https://pvlabs.ai/careers" },
  openGraph: { url: "https://pvlabs.ai/careers" },
};

export default function Page() {
  return <Careers />;
}