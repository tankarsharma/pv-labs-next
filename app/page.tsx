import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsCards from "@/components/home/StatsCards";
import FeaturedWork from "@/components/home/FeaturedWork";
import WhyChoose from "@/components/home/WhyChoose";
import ClientLogos from "@/components/home/ClientLogos";
import BlogPreview from "@/components/home/BlogPreview";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "PV Labs — E-Commerce Design & Marketplace Visuals",
  description:
    "PV Labs helps Indian e-commerce brands dominate Amazon and Flipkart with high-converting listing images, A+ content, and marketplace visuals.",
  alternates: { canonical: "https://pvlabs.ai" },
  openGraph: { url: "https://pvlabs.ai" },
};

export default function HomePage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://pvlabs.ai/#organization",
        name: "PV Labs",
        url: "https://pvlabs.ai",
        logo: "https://pvlabs.ai/logo.png",
        description:
          "PV Labs is India's e-commerce visual design studio. We create Amazon product listing images, A+ content, Flipkart catalog visuals, infographics, packaging design and brand identity for sellers on Amazon, Flipkart, Myntra, Meesho and Ajio.",
        foundingDate: "2023",
        areaServed: ["IN"],
        knowsAbout: [
          "Amazon Product Listing Images",
          "A+ Content Design India",
          "Flipkart Catalog Design",
          "Flipkart Listing Images",
          "Product Hero Images",
          "Infographics for Amazon",
          "Lifestyle Product Photography India",
          "Packaging Design India",
          "Brand Identity Design India",
          "Social Media Creatives India",
          "Ad Creatives Meta Google India",
          "Meesho Listing Images",
          "Myntra Catalog Design",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Business Enquiry",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
          contactOption: "TollFree",
        },
        sameAs: [
          "https://www.instagram.com/pvlabs",
          "https://www.linkedin.com/company/pvlabs",
          "https://twitter.com/pvlabsai",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://pvlabs.ai/#website",
        url: "https://pvlabs.ai",
        name: "PV Labs",
        description:
          "Amazon product listing images, A+ content and Flipkart catalog design agency for Indian e-commerce sellers.",
        publisher: { "@id": "https://pvlabs.ai/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://pvlabs.ai/blog?search={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://pvlabs.ai/#localbusiness",
        name: "PV Labs",
        url: "https://pvlabs.ai",
        description:
          "E-commerce visual design agency for Amazon, Flipkart, Myntra and Meesho sellers in India. Product listing images, A+ content, catalog design, packaging and brand identity.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Online Payment",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "E-commerce Design Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Amazon Product Listing Images",
                description:
                  "White background hero images, lifestyle visuals and infographics for Amazon India sellers. 2000x2000px, Amazon compliant, delivered in 3-5 days.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "A+ Content Design India",
                description:
                  "Amazon A+ content and EBC design for Indian brand-registered sellers. Brand story, feature banners, comparison charts.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Flipkart Catalog Design",
                description:
                  "Flipkart-compliant product listing images and RPD catalog creation for Flipkart sellers in India.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Packaging Design India",
                description:
                  "Product packaging design for Indian brands — boxes, labels, pouches. Print-ready CMYK files.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Brand Identity Design India",
                description:
                  "Logo and complete brand identity for Indian e-commerce brands and D2C sellers.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <JsonLd id="ld-json-home-graph" data={schemaGraph} />
      <Navbar />
      <h1 className="sr-only">PV Labs — E-Commerce Design & Marketplace Visuals</h1>
      <Hero />
      <ClientLogos />
      <AboutPreview />
      <ServicesGrid />
      <StatsCards />
      <FeaturedWork />
      <WhyChoose />
      <BlogPreview />
      <FAQ />
      <ContactCTA />
      <Footer />
    </div>
  );
}