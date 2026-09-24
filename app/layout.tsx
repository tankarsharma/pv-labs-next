import type { Metadata } from "next";
import Script from "next/script";
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

// AI-GENERATED-START | user:tankarsharmaa | date:2026-09-24 | model:GPT-5
const GA_MEASUREMENT_ID = "G-MS7CHRD6CZ";
// AI-GENERATED-END | user:tankarsharmaa | date:2026-09-24

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* AI-GENERATED-START | user:tankarsharmaa | date:2026-09-24 | model:GPT-5 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');

            // Fire a GA4 event whenever a lead-intent link is clicked anywhere on the site
            document.addEventListener('click', function (e) {
              const el = e.target.closest('a');
              if (!el) return;
              const href = el.getAttribute('href') || '';
              if (href.startsWith('https://wa.me/')) {
                gtag('event', 'lead_whatsapp_click', { link_url: href });
              } else if (href.startsWith('tel:')) {
                gtag('event', 'lead_call_click', { link_url: href });
              } else if (href.startsWith('mailto:')) {
                gtag('event', 'lead_email_click', { link_url: href });
              }
            });
          `}
        </Script>
        {/* AI-GENERATED-END | user:tankarsharmaa | date:2026-09-24 */}
      </body>
    </html>
  );
}
