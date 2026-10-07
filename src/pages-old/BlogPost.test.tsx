import { cleanup, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { blogPosts } from "@/content/blog/posts";
import BlogPost from "./BlogPost";

vi.mock("@/components/layout/Navbar", () => ({ default: () => null }));
vi.mock("@/components/layout/Footer", () => ({ default: () => null }));
vi.mock("framer-motion", () => ({
  motion: { div: ({ children }: { children: ReactNode }) => <div>{children}</div> },
  useScroll: () => ({ scrollYProgress: 0 }),
  useSpring: () => 0,
}));

afterEach(cleanup);

describe("published blog conversion and sharing", () => {
  it.each(blogPosts)("gives $slug a contact link, consistent reading time, and clean text", (post) => {
    const { container } = render(<BlogPost slug={post.slug} />);
    const article = container.querySelector(".prose")!;
    const ctas = article.querySelectorAll('a[data-cta="blog-contact"]');
    expect(ctas.length).toBeGreaterThan(0);
    for (const cta of ctas) {
      expect(new URL(cta.getAttribute("href")!, "https://pvlabs.ai").pathname).toBe("/contact");
    }
    expect(article.querySelectorAll("button")).toHaveLength(0);
    expect(screen.getByText(`${post.readTime} read`)).toBeInTheDocument();
    expect(article.textContent).not.toMatch(/[âÃÂ�]/);
  });

  it.each(blogPosts)("shares the actual $slug URL instead of opening company profiles", (post) => {
    render(<BlogPost slug={post.slug} />);
    const articleUrl = `https://pvlabs.ai/blog/${post.slug}`;
    for (const [name, host, parameter] of [
      ["LinkedIn", "www.linkedin.com", "url"],
      ["Facebook", "www.facebook.com", "u"],
      ["X", "twitter.com", "url"],
    ]) {
      const link = screen.getByRole("link", { name: `Share article on ${name}` });
      const url = new URL(link.getAttribute("href")!);
      expect(url.hostname).toBe(host);
      expect(url.searchParams.get(parameter)).toBe(articleUrl);
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
    const whatsapp = new URL(screen.getByRole("link", { name: "Share article on WhatsApp" }).getAttribute("href")!);
    expect(whatsapp.hostname).toBe("api.whatsapp.com");
    expect(whatsapp.searchParams.get("text")).toContain(articleUrl);
    // Sharing must not look like a WhatsApp sales lead to existing GA4 tracking.
    expect(whatsapp.href.startsWith("https://wa.me/")).toBe(false);
  });

  it("renders rupees and ranges correctly in the two previously corrupted articles", () => {
    const { unmount } = render(<BlogPost slug="amazon-listing-guide-2026" />);
    expect(screen.getByText("₹8,000–₹40,000 per SKU")).toBeInTheDocument();
    unmount();
    render(<BlogPost slug="amazon-a-plus-content-guide" />);
    expect(screen.getByText("3–10%")).toBeInTheDocument();
  });

  it.each([
    ["amazon-a-plus-content-guide", "a-plus-content"],
    ["amazon-a-plus-content-design-guide", "a-plus-content"],
    ["amazon-listing-images-design-service-guide", "listing-images"],
    ["amazon-a-plus-content-design-service-guide", "a-plus-content"],
    ["amazon-brand-store-design-service-guide", "brand-store"],
  ])("preselects the relevant service for %s", (slug, service) => {
    const { container } = render(<BlogPost slug={slug} />);
    const cta = container.querySelector('a[data-cta="blog-contact"]')!;
    expect(new URL(cta.getAttribute("href")!, "https://pvlabs.ai").searchParams.get("service")).toBe(service);
  });
});
