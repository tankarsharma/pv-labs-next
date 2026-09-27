# Case Study Publishing Checklist

Use this checklist every time a new case study is added to `src/content/case-studies/items.ts`.

## Content requirements
- [ ] **Measurable problem** — specific, concrete buyer/listing problem (not generic "needed better visuals")
- [ ] **Asset type** — which service was delivered (listing images, A+ Content, brand store, packaging, etc.)
- [ ] **Business result** — `results: string[]` with real, verifiable outcomes (no invented metrics)
- [ ] **Before/after** — `beforeAfter.before` and `beforeAfter.after` clearly contrasted
- [ ] **Testimonial** — real client quote with `author` and `role`
- [ ] **Related service** — `relatedServiceSlug` + `serviceHref` point to an existing slug in `src/content/services/items.ts`
- [ ] **Related pricing** — `relatedPricingPath` set (usually `/pricing`)
- [ ] **Related category/industry** — `category` and `marketplace` fields set correctly; link the case study from the matching `/industries/*` page if one exists

## Technical requirements
- [ ] **Schema** — case study detail route (`app/case-studies/[slug]/page.tsx`) renders `caseStudySchema()` + `breadcrumbSchema()` via `JsonLd` — no changes needed if using the existing dynamic route
- [ ] **Sitemap inclusion** — confirm the new slug appears via `caseStudySlugs` export (already automatic in `app/sitemap.ts` since it maps over `caseStudySlugs`)
- [ ] **Metadata** — dynamic route already generates title/description from `study.client` / `study.title` — verify both read well as a page title and meta description before publishing

## Do not
- Do not invent metrics, awards, or reviews
- Do not use the word "studio" or "agency" — PV Labs is a company
- Do not add new schema helpers — reuse `caseStudySchema` and `breadcrumbSchema` from `src/lib/seo/schema.ts`
