import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { caseStudySlugs, getCaseStudyBySlug } from "@/content/case-studies/items";
import { breadcrumbSchema, caseStudySchema } from "@/lib/seo/schema";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  const url = `https://pvlabs.ai/case-studies/${study.slug}`;

  return {
    title: `${study.client} Case Study`,
    description: study.title,
    alternates: { canonical: url },
    openGraph: { url, title: `${study.client} Case Study`, description: study.title },
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) notFound();

  const pageUrl = `https://pvlabs.ai/case-studies/${study.slug}`;

    const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "https://pvlabs.ai" },
    { name: "Case Studies", item: "https://pvlabs.ai/case-studies" },
    { name: study.client, item: pageUrl },
  ]);

  const caseStudyJsonLd = caseStudySchema({
    client: study.client,
    title: study.title,
    problem: study.problem,
    url: pageUrl,
    category: study.category,
  });

  return (
    <div className="min-h-screen gradient-bg-soft">
      <Navbar />

      <JsonLd id="ld-json-case-study-breadcrumb" data={breadcrumbJsonLd} />
      <JsonLd id="ld-json-case-study" data={caseStudyJsonLd} />

      <section className="pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {study.category}
            </span>
            <span className="text-xs text-muted-foreground">• {study.client}</span>
            <span className="text-xs text-muted-foreground">• {study.duration}</span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            {study.title}
          </h1>

          <div className="rounded-[24px] overflow-hidden shadow-lg mb-10">
            <img
              src={typeof study.heroImage === "string" ? study.heroImage : study.heroImage.src}
              alt={study.title}
              className="w-full aspect-[21/9] object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="glass-card p-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
            </div>

            <div className="glass-card p-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {study.results.map((result, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <div className="text-sm md:text-base text-foreground font-semibold leading-snug">
                  {result}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="glass-card p-6 border-l-4 border-destructive/30">
              <span className="text-xs font-bold text-destructive uppercase tracking-wider">
                Before
              </span>
              <p className="text-muted-foreground mt-2">{study.beforeAfter.before}</p>
            </div>

            <div className="glass-card p-6 border-l-4 border-primary/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                After
              </span>
              <p className="text-muted-foreground mt-2">{study.beforeAfter.after}</p>
            </div>
          </div>

          <div className="glass-card p-8 bg-primary/5 border-primary/20 mb-10">
            <p className="text-lg text-foreground italic leading-relaxed mb-4">
              "{study.testimonial.text}"
            </p>
            <div>
              <span className="font-heading font-bold text-foreground">{study.testimonial.author}</span>
              <span className="text-sm text-muted-foreground ml-2">- {study.testimonial.role}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={study.serviceHref}
              data-cta="case-study-service"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold inline-flex items-center justify-center"
            >
              View related service
            </Link>
            <Link
              href="/pricing"
              data-cta="case-study-pricing"
              className="bg-background text-foreground px-8 py-4 rounded-full font-bold inline-flex items-center justify-center border border-border"
            >
              View pricing
            </Link>
            <Link
              href="/contact"
              data-cta="case-study-audit"
              className="gradient-btn px-8 py-4 font-bold inline-flex items-center justify-center"
            >
              Request Creative Audit
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
