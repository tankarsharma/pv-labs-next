"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Clock, User, ArrowRight, Search } from "lucide-react";
import { blogPosts } from "@/content/blog/posts";


const categories = ["All", "Guide", "Education"];

const Blog = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const featured = blogPosts.filter(p => p.featured);
  const filtered = (active === "All" ? blogPosts : blogPosts.filter(p => p.category === active)).filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Blog & Insights</span>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
              Design <span className="gradient-text">insights</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Expert perspectives on e-commerce design, product listing images, A+ content, and marketplace visuals from the PV Labs team.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-background border border-border rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      {!search && active === "All" && (
        <section className="px-6 py-5 pb-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link href={`/blog/${p.slug}`} className="glass-card overflow-hidden group block hover:shadow-xl transition-shadow">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={typeof p.image === "string" ? p.image : p.image.src} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{p.category}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {p.readTime}</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User size={12} /> {p.author} • {p.date}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="px-6 md:px-12 pb-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === c ? "gradient-btn" : "bg-secondary text-muted-foreground hover:bg-secondary/80"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 pb-24 pt-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div key={p.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Link href={`/blog/${p.slug}`} className="glass-card overflow-hidden group block hover:shadow-xl transition-shadow h-full">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={typeof p.image === "string" ? p.image : p.image.src} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{p.category}</span>
                    <span className="text-xs text-muted-foreground">{p.readTime}</span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{p.excerpt}</p>
                  <div className="text-xs text-muted-foreground">{p.author} • {p.date}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No articles found matching your search.</p>
        )}
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-to-r from-slate-900 to-slate-800 rounded-md text-center mx-auto w-[calc(100%-2rem)] sm:max-w-4xl m-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Stay in the loop</h2>
          <p className="text-primary-foreground/80 mb-8">Get the latest e-commerce design insights, tips, and trends delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-background/20 border border-background/30 rounded-full px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none"
            />
            <button className="bg-background text-foreground px-6 py-3 rounded-full font-semibold text-sm hover:shadow-xl transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;



