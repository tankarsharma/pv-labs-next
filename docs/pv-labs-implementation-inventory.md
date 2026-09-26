# PV Labs implementation inventory

Last updated: 2026-09-26

## Goal
Create a simple route/content map before implementation starts so future phases do not waste time rediscovering:
- which pages are App Router-native
- which pages are wrappers over `src/pages-old/*`
- where schema already exists
- which pages can be upgraded surgically vs rebuilt later

## Confirmed repo findings
- `app/services/[slug]/page.tsx` is currently the best SEO implementation pattern
- `app/page.tsx` already includes `Organization`, `WebSite`, and `ProfessionalService` JSON-LD
- `app/blog/[slug]/page.tsx` already includes `BlogPosting` JSON-LD
- `app/sitemap.ts` is route-list driven and easy to extend
- `src/pages-old/*` pages are content-heavy and UI-complete, so they should be surgically upgraded, not blindly redesigned

## Route inventory

| Route | Source file | Type | Schema present | Keep as wrapper for now? | Notes |
| --- | --- | --- | --- | --- | --- |
| `/` | `app/page.tsx` | Real app page | Yes | No | Keep App Router-native |
| `/about` | `app/about/page.tsx` → `src/pages-old/About.tsx` | Wrapper | No route-level schema found | Yes | Upgrade surgically later |
| `/services` | `app/services/page.tsx` → `src/pages-old/Services.tsx` | Wrapper | Yes | Yes | Good wrapper + schema pattern |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | Real app page | Yes | No | Best current App Router SEO pattern |
| `/portfolio` | `app/portfolio/page.tsx` → `src/pages-old/Portfolio.tsx` | Wrapper | No route-level schema found | Yes | Keep wrapper-based for now |
| `/case-studies` | `app/case-studies/page.tsx` → `src/pages-old/CaseStudies.tsx` | Wrapper | No route-level schema found | Yes | Keep wrapper-based for now |
| `/pricing` | `app/pricing/page.tsx` → `src/pages-old/Pricing.tsx` | Wrapper | No route-level schema found | Yes | Keep wrapper-based for now |
| `/blog` | `app/blog/page.tsx` → `src/pages-old/Blog.tsx` | Wrapper | Yes | Yes | Wrapper already adds schema |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` → `src/pages-old/BlogPost.tsx` | Hybrid | Yes | No | Keep current hybrid structure |
| `/faq` | `app/faq/page.tsx` → `src/pages-old/FAQPage.tsx` | Wrapper | Yes | Yes | Wrapper already adds schema |
| `/contact` | `app/contact/page.tsx` → `src/pages-old/Contact.tsx` | Wrapper | No route-level schema found | Yes | Keep wrapper-based for now |
| `/founders` | `app/founders/page.tsx` → `src/pages-old/Founders.tsx` | Wrapper | No route-level schema found | Yes | Keep wrapper-based for now |
| `/testimonials` | `app/testimonials/page.tsx` → `src/pages-old/TestimonialsPage.tsx` | Wrapper | No route-level schema found | Yes | Keep wrapper-based for now |
| `/careers` | `app/careers/page.tsx` → `src/pages-old/Careers.tsx` | Wrapper | No route-level schema found | Yes | Keep wrapper-based for now |
| `/privacy` | `app/privacy/page.tsx` → `src/pages-old/Privacy.tsx` | Wrapper | No route-level schema found | Yes | Legal page |
| `/terms` | `app/terms/page.tsx` → `src/pages-old/Terms.tsx` | Wrapper | No route-level schema found | Yes | Legal page |

## Current implementation decision
### Keep App Router-native
- `/`
- `/services/[slug]`
- `/blog/[slug]`

### Keep wrapper-based for now
- `/about`
- `/services`
- `/portfolio`
- `/case-studies`
- `/pricing`
- `/blog`
- `/faq`
- `/contact`
- `/founders`
- `/testimonials`
- `/careers`
- `/privacy`
- `/terms`

## Implementation rule for next phases
When possible:
1. improve metadata, schema, sitemap entries, and internal linking in `app/*`
2. update `src/pages-old/*` surgically only where content or conversion sections must change
3. use `app/services/[slug]/page.tsx` as the reference pattern for any future App Router-native rebuild
