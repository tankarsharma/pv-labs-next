import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPost from "@/pages-old/BlogPost";
import { blogSlugs, getBlogPostBySlug } from "@/content/blog/posts";
import JsonLd from "@/components/seo/JsonLd";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const url = `https://pvlabs.ai/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const pageUrl = `https://pvlabs.ai/blog/${post.slug}`;
  const d = new Date((post as any).publishedAt ?? (post as any).date ?? "");
  const isoDate = Number.isNaN(d.getTime()) ? "2026-01-01T00:00:00.000Z" : d.toISOString();

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    mainEntityOfPage: pageUrl,
    datePublished: isoDate,
    dateModified: isoDate,
  };

  return (
    <>
      <JsonLd id="ld-json-blogposting" data={blogPostingSchema} />
      <BlogPost slug={slug} />
    </>
  );
}