import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { serviceSlugs, getServiceBySlug } from "@/content/services/items";

type Params = Promise<{ slug: string }>;

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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: pageUrl,
    serviceType: service.title,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    provider: {
      "@type": "Organization",
      name: "PV Labs",
      url: "https://pvlabs.ai",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pvlabs.ai",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://pvlabs.ai/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
            className="text-gray-800 leading-8 space-y-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />
        </article>
      </section>

      <Footer />
    </div>
  );
}
