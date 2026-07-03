import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

  return (
    <main className="min-h-screen">
        <article className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

            <div
                className="text-gray-800 leading-8 space-y-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    </main>
  );
}