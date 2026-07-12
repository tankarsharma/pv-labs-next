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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PV Labs",
    url: "https://pvlabs.ai",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PV Labs",
    url: "https://pvlabs.ai",
  };

  return (
    <div className="min-h-screen bg-background">
      <JsonLd id="ld-json-home-organization" data={organizationSchema} />
      <JsonLd id="ld-json-home-website" data={websiteSchema} />
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