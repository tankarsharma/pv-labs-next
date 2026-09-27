import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { serviceSlugs, getServiceBySlug } from "@/content/services/items";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo/schema";

type Params = Promise<{ slug: string }>;

const serviceFaqs: Record<string, { question: string; answer: string }[]> = {
  "listing-images": [
    { question: "How much do Amazon listing images cost in India?", answer: "Professional listing image sets start at ₹499 per SKU. Bulk packages (10+ SKUs) bring per-SKU cost  ₹449. Dual-platform packages (Amazon + Flipkart optimized) available at a discount." },
    { question: "How long does it take to get listing images?", answer: "We deliver complete image sets in 3–5 business days. This includes up to 7 images for Amazon & Flipkart, with 2 rounds of revisions." },
    { question: "Do you guarantee Amazon and Flipkart compliance?", answer: "Yes. 100% compliance guarantee - if your images get rejected due to spec issues, we redo them for free. Our Flipkart approval rate is above 95%." },
    { question: "Do I need to ship my product to you?", answer: "No. We use CGI-based product visualization. You send reference photos (even phone shots work), and we build photorealistic visuals from that." },
    { question: "What categories do you specialize in?", answer: "Skincare & Beauty, Home & Kitchen, Electronics & Gadgets, Food & Supplements, Fashion Accessories, Baby Products, and Health & Wellness." },
  ],
  "a-plus-content": [
    { question: "What is A+ Content on Amazon?", answer: "A+ Content is Amazon's premium listing feature that lets Brand Registered sellers replace plain text descriptions with rich visual modules." },
    { question: "How much does A+ Content design cost?", answer: "A+ Content design starts at ₹1,299 per ASIN for the full 5-module/banners set. Includes 2 revision rounds, compliance guarantee." },
    { question: "What is the approval rate for A+ Content?", answer: "Our approval rate is 99% on first submission. The industry average rejection rate for first-time submissions is 30–40%." },
    { question: "Do I need Brand Registry for A+ Content?", answer: "Yes. A+ Content requires Amazon Brand Registry. You need either a registered trademark (®) or a pending trademark application." },
    { question: "How long does A+ Content take to get approved?", answer: "We deliver designs in 5 days. Amazon then takes 3–7 business days to review and approve." },
  ],
  "brand-store": [
    { question: "What is an Amazon Brand Store?", answer: "An Amazon Brand Store is a free, multi-page shopping destination exclusively for your brand." },
    { question: "How much does Brand Store design cost?", answer: "Brand Store design starts at ₹3,000 for a 3-page store (Home + 2 Category pages)." },
    { question: "Do I need Brand Registry for a Brand Store?", answer: "Yes. Amazon Brand Stores are only available to Brand Registered sellers." },
    { question: "How does a Brand Store improve ad ROI?", answer: "Sponsored Brands ads can link directly to your Brand Store, where buyers see ONLY your products with zero competitor distractions." },
    { question: "How long does it take to design a Brand Store?", answer: "Our process takes 8–10 business days from brief to final delivery." },
  ],
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const url = `https://pvlabs.ai/services/${service.slug}`;
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: { url },
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const pageUrl = `https://pvlabs.ai/services/${service.slug}`;
  const serviceJsonLd = serviceSchema({
    name: service.title,
    description: service.description,
    url: pageUrl,
  });

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "https://pvlabs.ai" },
    { name: "Services", item: "https://pvlabs.ai/services" },
    { name: service.title, item: pageUrl },
  ]);

  const faqs = serviceFaqs[slug] || [];
  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <JsonLd
