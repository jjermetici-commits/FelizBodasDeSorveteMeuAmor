import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Heart, Flower2 } from "lucide-react";
import { SITE, HERO_BG } from "../data/content";

export default function Hero() {
  const scrollToNext = () => {
    const el = document.getElementById("counter");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-anchor"
      data-testid="hero-section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-200/50 via-purple-100/40 to-[#EFE3FF]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-purple-100 shadow-sm mb-7"
          data-testid="hero-eyebrow"
        >
          <Heart size={14} fill="#EC4899" color="#EC4899" />
          <span className="text-xs md:text-sm font-semibold text-purple-700 tracking-wide">
            {SITE.heroEyebrow}
          </span>
          <Flower2 size={14} fill="#F59E0B" color="#F59E0B" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-600 text-purple-900 leading-[1.05]"
          data-testid="hero-title"
        >
          Para
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            {SITE.girlName}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-7 text-base md:text-lg text-purple-800/80 leading-relaxed max-w-2xl mx-auto"
          data-testid="hero-subtitle"
        >
          {SITE.heroSubtitle}
        </motion.p>

        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-[0_10px_30px_rgba(147,51,234,0.35)] transition-transform active:scale-95"
          data-testid="hero-cta"
        >
          começar a leitura
          <ChevronDown size={18} />
        </motion.button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#EFE3FF] pointer-events-none" />
    </section>
  );
}
