export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    serviceType: input.name,
    areaServed: { "@type": "Country", name: "India" },
    provider: {
      "@type": "Organization",
      name: "PV Labs",
      url: "https://pvlabs.ai",
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((x, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: x.name,
      item: x.item,
    })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function caseStudySchema(input: {
  client: string;
  title: string;
  problem: string;
  url: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${input.client} Case Study`,
    headline: input.title,
    description: input.problem,
    mainEntityOfPage: input.url,
    about: input.category,
  };
}

export function collectionPageSchema(input: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: input.url,
  };
}

export function contactPageSchema(input: { url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: input.url,
    about: {
      "@type": "Organization",
      name: "PV Labs",
      url: "https://pvlabs.ai",
    },
  };
}

export function personSchema(input: {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    jobTitle: input.jobTitle,
    description: input.description,
    url: input.url,
    worksFor: {
      "@type": "Organization",
      name: "PV Labs",
      url: "https://pvlabs.ai",
    },
    ...(input.sameAs ? { sameAs: input.sameAs } : {}),
  };
}
