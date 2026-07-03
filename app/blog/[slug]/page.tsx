import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPost from "@/pages-old/BlogPost";
import { blogSlugs, getBlogPostBySlug } from "@/content/blog/posts";

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
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return <BlogPost slug={slug} />;
}
