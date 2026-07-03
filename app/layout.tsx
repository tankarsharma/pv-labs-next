import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pvlabs.ai"),
  title: {
    default: "PV Labs — E-Commerce Design & Marketplace Visuals",
    template: "%s | PV Labs",
  },
  description:
    "PV Labs creates high-converting product listing images, A+ content, and marketplace visuals for Amazon, Flipkart, and beyond.",
  openGraph: {
    type: "website",
    siteName: "PV Labs",
    url: "https://pvlabs.ai",
    title: "PV Labs — E-Commerce Design & Marketplace Visuals",
    description:
      "High-converting product listing images, A+ content, and marketplace visuals for Indian e-commerce sellers.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PV Labs — E-Commerce Design & Marketplace Visuals",
    description:
      "High-converting product listing images, A+ content, and marketplace visuals for Indian e-commerce sellers.",
    images: ["/og-default.jpg"],
  },
  alternates: {
    canonical: "https://pvlabs.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
