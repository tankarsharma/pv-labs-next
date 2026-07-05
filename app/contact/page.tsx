import type { Metadata } from "next";
import Contact from "@/pages-old/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with PV Labs for e-commerce design enquiries, custom projects, or partnership opportunities.",
  alternates: { canonical: "https://pvlabs.ai/contact" },
  openGraph: { url: "https://pvlabs.ai/contact" },
};

export default function Page() {
  return (
    <>
      <h1 className="sr-only">Contact</h1>
      <Contact />
    </>
  );
}
