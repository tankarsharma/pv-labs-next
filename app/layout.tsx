import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pvlabs.ai"),
title: {
  default: "PV Labs — E-Commerce Creative Company",
  template: "%s | PV Labs",
},
description:
  "PV Labs is an e-commerce creative company helping Amazon sellers and D2C brands build high-converting visuals.",
openGraph: {
  type: "website",
  siteName: "PV Labs",
  url: "https://pvlabs.ai",
  title: "PV Labs — E-Commerce Creative Company",
  description:
    "PV Labs helps Amazon sellers and D2C brands build high-converting visuals for marketplaces and product pages.",
  images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
},
twitter: {
  card: "summary_large_image",
  title: "PV Labs — E-Commerce Creative Company",
  description:
    "PV Labs helps Amazon sellers and D2C brands build high-converting visuals for marketplaces and product pages.",
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
