"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800" />
          <div className="absolute inset-0 opacity-10 gradient-btn" />

          <div className="relative z-20 px-6 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 md:py-14 lg:py-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-sm"
              >
                <span className="text-xs sm:text-sm text-center font-semibold bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent tracking-wide">
                  TRANSFORM YOUR LISTINGS
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 md:mb-8 text-white leading-tight sm:leading-tight"
              >
                Your competitor&apos;s listing{" "}
                <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">
                  looks better than yours
                </span>
                .
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-2xl leading-relaxed"
              >
                Every day without strong visuals is a day your products get scrolled past. Let&apos;s improve the creative path buyers see first.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center items-stretch sm:items-center mb-8 sm:mb-10"
              >
                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center gap-2 gradient-btn px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base text-white"
                >
                  <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                    Request Creative Audit
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <Link
                  href="/case-studies"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
                >
                  See Results
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>

                <a
                  href="https://wa.me/917417791003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base text-white border-2 border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  Talk on WhatsApp
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-xs sm:text-sm text-cyan-300 font-medium tracking-wide"
              >
                Built for sellers comparing options, pricing, and proof before they enquire.
              </motion.p>
            </motion.div>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-bl-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-tr-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
