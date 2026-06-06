import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Flower2, Mail, MailOpen, Sparkles } from "lucide-react";
import { MESSAGES } from "../data/content";

const AccentIcon = ({ accent, size = 26 }) => {
  if (accent === "sunflower") {
    return <Flower2 size={size} fill="#F59E0B" color="#F59E0B" strokeWidth={1.4} />;
  }
  return <Heart size={size} fill="#EC4899" color="#EC4899" strokeWidth={1.4} />;
};

const SealedEnvelope = ({ index, accent, onOpen }) => (
  <motion.button
    type="button"
    onClick={onOpen}
    initial={{ opacity: 0, y: 30, rotate: -2 }}
    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    transition={{ duration: 0.55, delay: index * 0.06 }}
    className="group relative w-full text-left rounded-3xl overflow-hidden focus:outline-none focus:ring-4 focus:ring-purple-300"
    data-testid={`message-envelope-${index}`}
    aria-label={`Abrir carta ${index + 1}`}
  >
    {/* Envelope body */}
    <div
      className="relative aspect-[4/3] flex items-center justify-center px-7 py-9"
      style={{
        background:
          "linear-gradient(135deg, #F3E8FF 0%, #FCE7F3 55%, #FEF3C7 100%)",
      }}
    >
      {/* Diagonal envelope flap lines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 49.5%, rgba(147,51,234,0.18) 50%, transparent 50.5%), linear-gradient(45deg, transparent 49.5%, rgba(147,51,234,0.18) 50%, transparent 50.5%)",
        }}
      />

      {/* Subtle pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(236,72,153,0.15) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(245,158,11,0.15) 0, transparent 40%)",
        }}
      />

      {/* Wax seal */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          whileHover={{ rotate: 10 }}
          className="relative h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(147,51,234,0.35)] mb-4"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #C084FC 0%, #9333EA 45%, #6B21A8 100%)",
          }}
        >
          <div className="absolute inset-1 rounded-full border border-white/40" />
          <AccentIcon accent={accent} size={36} />
        </motion.div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md text-[11px] uppercase tracking-[0.2em] font-bold text-purple-700">
          <Mail size={11} />
          carta {String(index + 1).padStart(2, "0")}
        </div>

        <p className="mt-4 font-heading text-lg md:text-xl text-purple-900 font-600">
          toque para abrir
        </p>
        <p className="mt-1 text-xs text-purple-700/70 flex items-center gap-1">
          <Sparkles size={11} />
          uma surpresa pra você
        </p>
      </div>

      {/* Corner decor */}
      <div className="absolute -top-3 -left-3">
        <AccentIcon accent={accent} size={22} />
      </div>
      <div className="absolute -bottom-3 -right-3 rotate-12">
        <AccentIcon accent={accent === "heart" ? "sunflower" : "heart"} size={22} />
      </div>
    </div>
  </motion.button>
);

const OpenLetter = ({ message, index, onClose }) => (
  <motion.article
    layout
    initial={{ opacity: 0, scale: 0.92, rotateX: -8 }}
    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
    className="relative glass-card rounded-3xl p-7 md:p-9"
    data-testid={`message-card-${index}`}
    style={{ transformPerspective: 800 }}
  >
    {/* Corner decor */}
    <div className="absolute -top-4 -left-4 float-y">
      <AccentIcon accent={message.accent} />
    </div>

    {/* Close / re-seal button */}
    <button
      type="button"
      onClick={onClose}
      className="absolute top-4 right-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-purple-500/70 hover:text-purple-700 transition-colors"
      data-testid={`message-close-${index}`}
      aria-label="Fechar carta"
    >
      <MailOpen size={12} />
      fechar
    </button>

    <div className="flex items-center gap-2 mb-3">
      <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
      <span className="text-xs uppercase tracking-wider font-bold text-purple-600/80">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>

    <h3 className="font-heading text-2xl md:text-3xl text-purple-900 font-600 mb-3">
      {message.title}
    </h3>

    {message.image && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="mb-5 rounded-2xl overflow-hidden bg-purple-100 aspect-[4/3]"
      >
        <img
          src={message.image}
          alt={message.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
    )}

    <p className="text-base md:text-[17px] leading-relaxed text-purple-900/85 whitespace-pre-line">
      {message.body}
    </p>

    <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-purple-500/70">
      <Heart size={12} fill="#EC4899" color="#EC4899" />
      com amor
    </div>
  </motion.article>
);

export default function MessagesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="messages"
      className="section-anchor relative py-24 md:py-32 px-6"
      data-testid="messages-section"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/70 text-pink-700 text-xs font-semibold tracking-wider mb-4">
            <Mail size={14} />
            CARTAS PRA VOCÊ
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-600 text-purple-900">
            Cartinhas pra você abrir
          </h2>
          <p className="mt-3 text-purple-800/70 max-w-xl mx-auto">
            Cada envelope guarda um pedacinho meu — toque pra abrir e descobrir o que tem dentro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {MESSAGES.map((m, idx) => (
            <div key={idx} className={idx % 2 === 1 ? "md:translate-y-8" : ""}>
              <AnimatePresence mode="wait" initial={false}>
                {openIndex === idx ? (
                  <OpenLetter
                    key="open"
                    message={m}
                    index={idx}
                    onClose={() => setOpenIndex(null)}
                  />
                ) : (
                  <SealedEnvelope
                    key="sealed"
                    index={idx}
                    accent={m.accent}
                    onOpen={() => setOpenIndex(idx)}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
