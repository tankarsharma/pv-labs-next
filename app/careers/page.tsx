import type { Metadata } from "next";
import Careers from "@/pages-old/Careers";

export const metadata: Metadata = {
  title: "Careers — Join PV Labs",
  description:
    "Join PV Labs and help Indian e-commerce brands create stunning product visuals. We're hiring designers, content creators, and creative strategists.",
  alternates: { canonical: "https://pvlabs.ai/careers" },
  openGraph: { url: "https://pvlabs.ai/careers" },
  // AI-GENERATED-START | user:tankarsharmaa | date:2026-09-24 | model:GPT-5
  robots: {
    index: false,
    follow: true,
  },
  // AI-GENERATED-END | user:tankarsharmaa | date:2026-09-24
};

export default function Page() {
  return <Careers />;
}
