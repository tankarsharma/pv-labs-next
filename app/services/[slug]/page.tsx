import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { serviceSlugs, getServiceBySlug } from "@/content/services/items";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo/schema";

type Params = Promise<{ slug: string }>;

const serviceFaqs: Record<string, { question: string; answer: string }[]> = {
  "listing-images": [
    { question: "How much do Amazon listing images cost in India?", answer: "Professional listing image sets start at ₹499 per SKU. Bulk packages (10+ SKUs) bring per-SKU cost  ₹449. Dual-platform packages for Amazon + Flipkart are available at 30% less than ordering separately." },
    { question: "How long does it take to get listing images?", answer: "We deliver complete image sets in 3–5 business days. This includes up to 7 images for Amazon & Flipkart, with 2 rounds of revisions included." },
    { question: "Do you guarantee Amazon and Flipkart compliance?", answer: "Yes. 100% compliance guarantee - if your images get rejected due to spec issues, we redo them for free. Our Flipkart approval rate is 100% and Amazon approval rate is 99% on first submission." },
    { question: "Do I need to ship my product to you?", answer: "No. We use CGI-based product visualization. You send reference photos (even phone shots work), and we build photorealistic visuals No studio, no shipping, no delays." },
    { question: "What categories do you specialize in?", answer: "Skincare & Beauty, Home & Kitchen, Electronics & Gadgets, Food & Supplements, Fashion Accessories, Baby Products, and Health & Wellness. We've delivered 500+ listings across these categories." },
  ],
  "a-plus-content": [
    { question: "What is A+ Content on Amazon?", answer: "A+ Content is Amazon's premium listing feature that lets Brand Registered sellers replace plain text descriptions with rich visual modules - brand banners, comparison charts, lifestyle images, and ingredient breakdowns. It's free for all Brand Registered sellers." },
    { question: "How much does A+ Content design cost?", answer: "A+ Content design starts at ₹1,299 per ASIN for the full 5-module/banners set. Includes 2 revision rounds, compliance guarantee, and submission support. Bulk packages (10+ ASINs) available at ₹749 per ASIN." },
    { question: "What is the approval rate for A+ Content?", answer: "Our approval rate is 99% on first submission. The industry average rejection rate for first-time submissions is 30–40%. We know exactly what Amazon's review team looks for." },
    { question: "Do I need Brand Registry for A+ Content?", answer: "Yes. A+ Content requires Amazon Brand Registry. You need either a registered trademark (®) or a pending trademark application with a serial number. Even pending ™ applications are accepted by Amazon India." },
    { question: "How long does A+ Content take to get approved?", answer: "We deliver designs in 5 days. Amazon then takes 3–7 business days to review and approve. Total time from brief to live A+ Content is typically 8–12 days." },
  ],
  "brand-store": [
    { question: "What is an Amazon Brand Store?", answer: "An Amazon Brand Store is a free, multi-page shopping destination exclusively for your brand. It's the only place on Amazon where your products appear without competitor ads — like your own mini-website inside Amazon." },
    { question: "How much does Brand Store design cost?", answer: "Brand Store design starts at ₹3,000 for a 3-page store (Home + 2 Category pages). Full stores with 5+ pages, campaign pages, and seasonal updates start at ₹10,000." },
    { question: "Do I need Brand Registry for a Brand Store?", answer: "Yes. Amazon Brand Stores are only available to Brand Registered sellers. You need a registered or pending trademark to enroll in Brand Registry." },
    { question: "How does a Brand Store improve ad ROI?", answer: "Sponsored Brands ads can link directly to your Brand Store, where buyers see ONLY your products with zero competitor distractions. This typically improves ad ROAS by 25–40% compared to linking to regular product pages." },
    { question: "How long does it take to design a Brand Store?", answer: "Our process takes 8–10 business days from brief to final delivery. This includes brand audit, wireframing, full visual design, revisions, and publishing support." },
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

      <JsonLd id="service-jsonld" data={serviceJsonLd} />
      <JsonLd id="service-breadcrumb-jsonld" data={breadcrumbJsonLd} />
      {faqJsonLd && <JsonLd id="service-faq-jsonld" data={faqJsonLd} />}

      <section className="pt-28 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-4">
            {service.title}
          </h1>
          <p className="text-muted-foreground text-lg">{service.excerpt}</p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20">
        <article className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-sm">
          <div
            className="text-gray-800 leading-8 space-y-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-accent"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />

          {faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </section>

      <Footer />
    </div>
  );
}