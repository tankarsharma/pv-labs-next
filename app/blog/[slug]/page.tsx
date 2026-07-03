import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-28 pb-16 px-6 md:px-12 gradient-bg-soft">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">
          {post.category}
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-4">
          {post.title}
        </h1>
        <p className="text-muted-foreground text-lg">{post.excerpt}</p>
      </div>
    </section>

    <section className="px-6 md:px-12 pb-20">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-sm">
        <div
          className="text-gray-800 leading-8 space-y-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </section>

    <Footer />
  </div>
);
}