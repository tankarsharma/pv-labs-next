import pukhraj from "@/assets/Images for Website - Copy/Case Studies/CS 1.png";
import nipura from "@/assets/Images for Website - Copy/Case Studies/CS 2.png";
import attar from "@/assets/Images for Website - Copy/Case Studies/CS 3.png";
import only from "@/assets/Images for Website - Copy/Case Studies/CS 4.png";
import Aakirti from "@/assets/Images for Website - Copy/Case Studies/CS 5.png";
import aldo from "@/assets/Images for Website - Copy/Case Studies/CS 6.png";
import ashoka from "@/assets/Images for Website - Copy/Case Studies/CS 7.png";
import blazer from "@/assets/Images for Website - Copy/Case Studies/CS 8.png";

export type CaseStudyItem = {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  duration: string;
  heroImage: string | { src: string };
  problem: string;
  solution: string;
  results: { metric: string; label: string }[];
  testimonial: { text: string; author: string; role: string };
  beforeAfter: { before: string; after: string };
  serviceHref: string;
};

export const caseStudies: CaseStudyItem[] = [
  {
    id: "pukhraj-flipkart",
    slug: "pukhraj-flipkart",
    title: "This jasmine oil brand had a great product. Their listing was invisible. Here's what we did.",
    client: "Pukhraj",
    category: "Flipkart",
    duration: "4 Days",
    heroImage: pukhraj,
    problem:
      "Pukhraj had a quality jasmine oil product but their Flipkart listing was driving buyers away. Phone camera images, weak first impression, and low buyer confidence were limiting performance.",
    solution:
      "We rebuilt the visual identity for Flipkart with stronger hero imagery, more useful selling visuals, and a clearer product story matched to how buyers compare options.",
    results: [
      { metric: "2.3x", label: "More clicks, same traffic" },
      { metric: "42%", label: "More buyers who converted" },
      { metric: "4 Days", label: "Start to live" },
      { metric: "Zero", label: "Back-and-forth revisions" },
    ],
    testimonial: {
      text: "We always knew our product was good. PV Labs made our listing show that. Clicks doubled in the first week itself.",
      author: "Pukhraj Brand",
      role: "Flipkart Seller",
    },
    beforeAfter: {
      before: "Weak first impression and low-trust visuals",
      after: "Cleaner listing communication and stronger commercial presentation",
    },
    serviceHref: "/services/listing-images",
  },
  {
    id: "nipura-myntra",
    slug: "nipura-myntra",
    title: "Their earrings were premium. Their Myntra page looked anything but. Here's how we fixed it.",
    client: "Nipura Jewellery",
    category: "Myntra",
    duration: "5 Days",
    heroImage: nipura,
    problem:
      "Nipura Jewellery was live on Myntra but had weak brand presentation, low product context, and no stronger supporting modules to help the buyer evaluate quality.",
    solution:
      "We created a better structured visual system with stronger product cues, clearer supporting information, and a more premium buyer-facing presentation.",
    results: [
      { metric: "38%", label: "Higher listing quality score" },
      { metric: "45%", label: "Sales increase Month 1" },
      { metric: "5 Days", label: "Start to live" },
      { metric: "First", label: "Try approval" },
    ],
    testimonial: {
      text: "The difference was night and day. Our listing finally looked like the brand we actually are.",
      author: "Nipura Jewellery",
      role: "Marketplace Seller",
    },
    beforeAfter: {
      before: "Weak premium cues and low product explanation",
      after: "Stronger buyer confidence and clearer product presentation",
    },
    serviceHref: "/services/listing-images",
  },
  {
    id: "attar-ayurveda-amazon",
    slug: "attar-ayurveda-amazon",
    title: "This Ayurvedic brand was getting buried on Amazon. No A+ content. No brand story. Here's what changed.",
    client: "Attar Ayurveda",
    category: "Amazon",
    duration: "6 Days",
    heroImage: attar,
    problem:
      "Attar Ayurveda had a quality product but the listing lacked brand story, trust-building depth, and stronger below-the-fold communication.",
    solution:
      "We built a more complete A+ Content structure to support buyer trust, product explanation, and stronger branded decision support.",
    results: [
      { metric: "41%", label: "Conversion rate up" },
      { metric: "6 Days", label: "A+ live" },
      { metric: "Ayush", label: "Certification highlighted" },
      { metric: "Zero", label: "Back-and-forth revisions" },
    ],
    testimonial: {
      text: "Our product already had credibility. PV Labs helped the listing communicate it better.",
      author: "Attar Ayurveda",
      role: "Amazon Seller",
    },
    beforeAfter: {
      before: "Thin listing story and weak trust support",
      after: "Stronger buyer education and brand trust",
    },
    serviceHref: "/services/a-plus-content",
  },
  {
    id: "only-essentials-d2c",
    slug: "only-essentials-d2c",
    title: "Their Ayurvedic gut health product was live. But their D2C presence looked like an afterthought.",
    client: "Only Essentials",
    category: "D2C Website",
    duration: "5 Days",
    heroImage: only,
    problem:
      "The product was live, but the visual system did not build enough buyer confidence or product clarity on the brand website.",
    solution:
      "We created a more premium visual structure with stronger product explanation, trust support, and more useful buyer-facing cues.",
    results: [
      { metric: "Premium", label: "D2C brand feel achieved" },
      { metric: "5 Days", label: "Full visual set live" },
      { metric: "Zero", label: "Studio shoot required" },
      { metric: "Ayush", label: "Badge prominent" },
    ],
    testimonial: {
      text: "PV Labs helped the product look more trustworthy and complete.",
      author: "Only Essentials",
      role: "D2C Brand",
    },
    beforeAfter: {
      before: "Generic visuals and weak product storytelling",
      after: "Clearer trust signals and stronger visual support",
    },
    serviceHref: "/services/listing-images",
  },
  {
    id: "aakirti-ajio",
    slug: "aakirti-ajio",
    title: "40+ ethnic suit SKUs. Ajio kept rejecting them. Here's how we got every single one approved.",
    client: "Aakirti",
    category: "Ajio",
    duration: "7 Days",
    heroImage: Aakirti,
    problem:
      "Aakirti had volume, but not enough marketplace-ready consistency across SKU presentation.",
    solution:
      "We created a more structured catalog-ready visual system to support consistency, approval-readiness, and cleaner buyer presentation.",
    results: [
      { metric: "40+", label: "SKUs live in 7 days" },
      { metric: "Zero", label: "Listing rejections" },
      { metric: "100%", label: "Consistent visual identity" },
      { metric: "First-Try", label: "Approval" },
    ],
    testimonial: {
      text: "They helped us standardize the presentation across the whole range.",
      author: "Aakirti",
      role: "Ajio Seller",
    },
    beforeAfter: {
      before: "Inconsistent SKU presentation",
      after: "Cleaner catalog-level consistency",
    },
    serviceHref: "/services/listing-images",
  },
  {
    id: "aldo-sandal-d2c",
    slug: "aldo-sandal-d2c",
    title: "This sandal brand was selling on marketplaces. But they had no brand of their own. Here's what we built.",
    client: "ALDO",
    category: "Brand Website",
    duration: "5 Days",
    heroImage: aldo,
    problem:
      "The product sold, but the brand lacked a stronger direct visual identity and more cohesive buyer-facing presentation.",
    solution:
      "We created a cleaner visual system to help the brand present itself more confidently outside marketplace dependence.",
    results: [
      { metric: "Premium", label: "D2C brand feel achieved" },
      { metric: "5 Days", label: "Full visual set live" },
      { metric: "Zero", label: "Studio shoot required" },
      { metric: "Consistent", label: "Visual language across SKUs" },
    ],
    testimonial: {
      text: "The brand finally felt more complete and premium.",
      author: "ALDO",
      role: "Brand Team",
    },
    beforeAfter: {
      before: "Weak direct brand identity",
      after: "More cohesive premium visual system",
    },
    serviceHref: "/services/listing-images",
  },
  {
    id: "ashoka-dry-fruits",
    slug: "ashoka-dry-fruits",
    title: "Their dry fruits were premium quality. Their packaging was making them look like a commodity.",
    client: "Ashoka",
    category: "Packaging · Flipkart · Brand Website",
    duration: "6 Days",
    heroImage: ashoka,
    problem:
      "The quality was there, but the brand and packaging presentation did not support premium evaluation.",
    solution:
      "We rebuilt the packaging and visual direction to improve perceived value and consistency across surfaces.",
    results: [
      { metric: "2", label: "Platforms covered" },
      { metric: "6 Days", label: "Packaging + listing live" },
      { metric: "Premium", label: "Brand positioning achieved" },
      { metric: "Consistent", label: "Visual identity aligned" },
    ],
    testimonial: {
      text: "The new presentation helped the product feel more premium.",
      author: "Ashoka",
      role: "Brand Owner",
    },
    beforeAfter: {
      before: "Commodity-style presentation",
      after: "Stronger premium positioning",
    },
    serviceHref: "/services/listing-images",
  },
  {
    id: "highek-blazer",
    slug: "highek-blazer",
    title: "Great blazer. Zero brand identity. Ads were spending money with nothing to show.",
    client: "HighEk",
    category: "Branding · Ads Creative · Amazon",
    duration: "7 Days",
    heroImage: blazer,
    problem:
      "HighEk lacked a stronger listing identity and ad-supportive creative system, so traffic and spend were not translating well enough.",
    solution:
      "We aligned product storytelling, stronger branded listing support, and creative direction more closely with conversion goals.",
    results: [
      { metric: "4.1x", label: "Meta ad ROAS" },
      { metric: "38%", label: "Conversion rate up" },
      { metric: "7 Days", label: "A+ + ads live" },
      { metric: "Zero", label: "Revision needed" },
    ],
    testimonial: {
      text: "The listing and ad system finally started working together.",
      author: "HighEk",
      role: "Brand Team",
    },
    beforeAfter: {
      before: "Disconnected listing and ad presentation",
      after: "More aligned commercial creative system",
    },
    serviceHref: "/services/a-plus-content",
  },
];

export const caseStudySlugs = caseStudies.map((item) => item.slug);

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
