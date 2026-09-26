"use client";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Check, ShoppingCart, Palette } from "lucide-react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { brandServices, ecommerceServices } from "@/lib/services-data";
import { FaWhatsapp } from "react-icons/fa6";

type ServiceLike = {
  id: string;
  title: string;
  desc: string;
  checklist: string[];
  cta: string;
  image?: string | { src: string };
  imageAlt?: string;
  images?: Array<string | { src: string }>;
  badge?: string;
  badgeType?: string;
};

const coreServiceMeta: Record<
  string,
  {
    bestFor: string;
    detailHref: string;
    resultsHref: string;
    pricingHref: string;
  }
> = {
  "a-content-ebc-design": {
    bestFor: "Best for listings that need more trust and product explanation",
    detailHref: "/services/a-plus-content",
    resultsHref: "/case-studies",
    pricingHref: "/pricing",
  },
  "product-hero-images": {
    bestFor: "Best for products getting traffic but weak buyer response",
    detailHref: "/services/listing-images",
    resultsHref: "/case-studies",
    pricingHref: "/pricing",
  },
  "catalog-rpd-creation": {
    bestFor: "Best for broader brand navigation and catalog discovery",
    detailHref: "/services/brand-store",
    resultsHref: "/case-studies",
    pricingHref: "/pricing",
  },
};

const orderedEcommerceServices = (() => {
  const priority = [
    "a-content-ebc-design",
    "product-hero-images",
    "catalog-rpd-creation",
  ];

  const prioritized = priority
    .map((id) => ecommerceServices.find((service: any) => service.id === id))
    .filter(Boolean);

  const remaining = ecommerceServices.filter(
    (service: any) => !priority.includes(service.id)
  );

  return [...prioritized, ...remaining];
})();

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<"ecommerce" | "brand">("ecommerce");

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  const scrollToCategory = (category: "ecommerce" | "brand") => {
    setActiveCategory(category);
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          background-color: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(8px);
          width: 32px !important;
          height: 32px !important;
          border-radius: 50%;
          color: #000000 !important;
          transition: all 0.3s ease;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 2px;
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background-color: rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 12px !important;
          font-weight: 900 !important;
        }
        .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.5;
          width: 5px !important;
          height: 5px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #ffffff !important;
        }
      `}</style>

      <Navbar />

      <section className="pt-24 pb-10 px-6 md:px-12 gradient-bg-soft">
        <div className="w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-[3px]">
              WHAT WE CREATE
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold mt-6 mb-4 text-black">
              Design that sells
            </h1>
            <h2 className="font-heading text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#7B2FD9] via-[#C84FD8] to-[#60B8F0] bg-clip-text text-transparent">
              For Sellers. For Brands. For Growth.
            </h2>
            <p className="text-[#888] text-lg max-w-3xl mx-auto leading-relaxed">
              Start with the services that most directly improve listing performance, buyer trust, and commercial clarity.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <button
                onClick={() => scrollToCategory("ecommerce")}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${
                  activeCategory === "ecommerce"
                    ? "gradient-bg-vivid text-white"
                    : "bg-[#111] border border-[#1a1a1a] text-white hover:border-[#7B2FD9]"
                }`}
              >
                <ShoppingCart size={18} /> E-Commerce Visuals
              </button>
              <button
                onClick={() => scrollToCategory("brand")}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${
                  activeCategory === "brand"
                    ? "gradient-bg-vivid text-white"
                    : "bg-[#111] border border-[#1a1a1a] text-white hover:border-[#60B8F0]"
                }`}
              >
                <Palette size={18} /> Brand & Marketing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[calc(100vh-80px)] overflow-hidden">
        <section
          id="ecommerce"
          className="gradient-bg-soft border-r pb-20 lg:overflow-y-auto custom-scrollbar"
        >
          <div className="m-6 rounded-md shadow-2xl">
            <div className="mb-12 sticky top-0 gradient-bg-soft z-20 border-black py-4 shadow-sm px-6 text-center">
              <span className="text-[#7B2FD9] text-sm font-bold uppercase tracking-widest text-center">
                FOR SELLERS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-black mt-4">
                Start with the services that influence buyer decisions first.
              </h2>
              <p className="text-[#888] mt-4 w-auto">
                A+ Content, listing images, and storefront support come first because they most directly support commercial evaluation.
              </p>
            </div>

            <div className="space-y-20 px-6">
              {orderedEcommerceServices.map((s: any, i: number) => (
                <ServiceCard
                  key={i}
                  service={s}
                  index={i}
                  category="ecommerce"
                  isCore={Boolean(coreServiceMeta[s.id])}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="brand"
          className="gradient-bg-soft border-r pb-20 lg:overflow-y-auto custom-scrollbar"
        >
          <div className="m-6 rounded-md shadow-2xl">
            <div className="mb-12 sticky top-0 gradient-bg-soft z-20 border-black py-4 shadow-sm px-6 text-center">
              <span className="text-[#60B8F0] text-sm font-bold uppercase tracking-widest">
                FOR BRANDS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-black mt-4">
                Keep broader brand services lower on the page.
              </h2>
              <p className="text-[#888] mt-4 w-auto">
                These services still matter, but they come after the core marketplace decision-support work.
              </p>
            </div>

            <div className="space-y-20 px-6">
              {brandServices.map((s: any, i: number) => (
                <ServiceCard
                  key={i}
                  service={s}
                  index={i}
                  category="brand"
                  isCore={false}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-[24px] border border-slate-200 p-8 bg-slate-50">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">A+ Content vs Storefront</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              A+ Content helps a single listing explain and convert better. Storefront support helps buyers navigate your broader brand and product range more clearly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/a-plus-content" className="text-[#7B2FD9] font-bold hover:underline">
                View A+ Content
              </Link>
              <Link href="/services/brand-store" className="text-[#7B2FD9] font-bold hover:underline">
                View Storefront Support
              </Link>
            </div>
          </div>

          <div className="rounded-[24px] border border-slate-200 p-8 bg-slate-50">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Images vs Full Listing Upgrade</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Choose listing images when first impression is the main issue. Choose a fuller upgrade when buyers also need stronger explanation, trust, and below-the-fold support.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/pricing" className="text-[#7B2FD9] font-bold hover:underline">
                View Pricing
              </Link>
              <Link href="/case-studies" className="text-[#7B2FD9] font-bold hover:underline">
                See Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto px-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-md">
          <div className="bg-whiterounded-[24px] p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B2FD9]/5 to-[#60B8F0]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
              Not sure which service fits your brand?
            </h2>
            <p className="text-[#888] text-lg mb-4 max-w-xl mx-auto relative z-10">
              Tell us about your business. We&apos;ll recommend the clearest next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                href="/contact"
                className="gradient-btn px-4 py-4 font-bold flex items-center justify-center gap-2"
              >
                Request Creative Audit
              </Link>
              <a
                href="https://wa.me/917417791003"
                className="px-4 py-4 rounded-full border border-white text-white font-bold hover:bg-green-300 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <FaWhatsapp /> Talk on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ServiceCard = ({
  service,
  index,
  category,
  isCore,
}: {
  service: ServiceLike;
  index: number;
  category: string;
  isCore: boolean;
}) => {
  const meta = coreServiceMeta[service.id];

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col gap-8 scroll-mt-32"
    >
      <div className="relative rounded-2xl overflow-hidden bg-[#111] aspect-video group">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          {service.images && service.images.length > 0 ? (
            service.images.map((img, idx) => (
              <SwiperSlide key={idx} className="w-full h-full">
                <img
                  src={typeof img === "string" ? img : img.src}
                  alt={`${service.title} - ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide className="w-full h-full">
              <img
                src={typeof service.image === "string" ? service.image : service.image?.src || ""}
                alt={service.imageAlt || service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </SwiperSlide>
          )}
        </Swiper>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-[5]" />

        {service.badge && (
          <div
            className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-[12px] font-bold text-white shadow-lg z-10 ${
              service.badgeType === "hot"
                ? "gradient-bg-vivid"
                : service.badgeType === "amazon"
                ? "bg-blue-600"
                : "bg-cyan-600"
            }`}
          >
            {service.badge}
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {isCore ? (
            <span className="text-xs font-bold uppercase tracking-wider bg-[#7B2FD9]/10 text-[#7B2FD9] px-3 py-1 rounded-full">
              Core commercial service
            </span>
          ) : (
            <span className="text-xs font-bold uppercase tracking-wider bg-slate-200 text-slate-700 px-3 py-1 rounded-full">
              Broader brand service
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>

        {meta?.bestFor && (
          <p className="text-sm font-semibold text-[#7B2FD9] mb-4">
            Best for: {meta.bestFor}
          </p>
        )}

        <p className="text-[#888] leading-relaxed mb-6 text-sm md:text-base">{service.desc}</p>

        <div className="grid grid-cols-1 gap-y-3 mb-8">
          {service.checklist.map((item: string, i: number) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] flex items-center justify-center flex-shrink-0">
                <Check size={10} className="text-white" />
              </div>
              <span className="text-[#888]">{item}</span>
            </div>
          ))}
        </div>

        {isCore && meta ? (
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
            <Link
              href={meta.detailHref}
              className="inline-flex items-center gap-2 font-bold text-[#7B2FD9] transition-colors group underline underline-offset-8 decoration-[#7B2FD9]/30 hover:decoration-[#7B2FD9]"
            >
              View service details <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={meta.resultsHref}
              className="inline-flex items-center gap-2 font-bold text-[#7B2FD9] transition-colors group underline underline-offset-8 decoration-[#7B2FD9]/30 hover:decoration-[#7B2FD9]"
            >
              See related results <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={meta.pricingHref}
              className="inline-flex items-center gap-2 font-bold text-[#7B2FD9] transition-colors group underline underline-offset-8 decoration-[#7B2FD9]/30 hover:decoration-[#7B2FD9]"
            >
              View pricing <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ) : (
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold text-[#7B2FD9] transition-colors group underline underline-offset-8 decoration-[#7B2FD9]/30 hover:decoration-[#7B2FD9]"
          >
            {service.cta} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Services;
