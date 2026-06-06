import React from "react";
import { motion } from "framer-motion";
import { Heart, Flower2, Sparkles, MailOpen } from "lucide-react";
import { SITE } from "../data/content";

/**
 * Tela de boas-vindas. Mostra uma "carta principal lacrada" com o nome
 * da Polyana. Quando ela clica, dispara o `onEnter` (que vai iniciar
 * a música de fundo e revelar o site).
 */
export default function WelcomeGate({ onEnter }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed inset-0 z-[200] flex items-center justify-center px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F3E8FF 0%, #FCE7F3 55%, #FEF3C7 100%)",
      }}
      data-testid="welcome-gate"
    >
      {/* Floating decor */}
      <motion.div
        className="absolute top-10 left-8"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={34} fill="#EC4899" color="#EC4899" />
      </motion.div>
      <motion.div
        className="absolute top-16 right-10"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <Flower2 size={38} fill="#F59E0B" color="#F59E0B" />
      </motion.div>
      <motion.div
        className="absolute bottom-16 left-14"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        <Flower2 size={32} fill="#FBBF24" color="#FBBF24" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-12"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <Heart size={28} fill="#DB2777" color="#DB2777" />
      </motion.div>

      {/* The big sealed envelope */}
      <motion.button
        type="button"
        onClick={onEnter}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative w-full max-w-xl rounded-[2rem] overflow-hidden focus:outline-none focus:ring-4 focus:ring-purple-300/60 shadow-[0_30px_80px_rgba(147,51,234,0.25)]"
        data-testid="welcome-enter"
        aria-label="Abrir presente"
      >
        <div
          className="relative aspect-[4/3] flex items-center justify-center px-8 py-10"
          style={{
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #F5F3FF 60%, #FAE8FF 100%)",
          }}
        >
          {/* Envelope flap pattern */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(135deg, transparent 49.6%, rgba(147,51,234,0.18) 50%, transparent 50.4%), linear-gradient(45deg, transparent 49.6%, rgba(147,51,234,0.18) 50%, transparent 50.4%)",
            }}
          />
          {/* radial accents */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 18% 25%, rgba(236,72,153,0.18) 0, transparent 40%), radial-gradient(circle at 82% 75%, rgba(245,158,11,0.18) 0, transparent 40%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-purple-100 text-[11px] uppercase tracking-[0.25em] font-bold text-purple-700 mb-6">
              <Sparkles size={12} />
              um presente pra você
            </div>

            {/* Wax seal */}
            <motion.div
              animate={{ rotate: [0, -4, 4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-28 w-28 md:h-32 md:w-32 rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(147,51,234,0.4)] mb-6"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #C084FC 0%, #9333EA 45%, #6B21A8 100%)",
              }}
            >
              <div className="absolute inset-1.5 rounded-full border border-white/40" />
              <Heart size={52} fill="#FCE7F3" color="#FCE7F3" />
            </motion.div>

            <h1 className="font-heading text-3xl md:text-5xl font-700 text-purple-900 leading-tight">
              Feito para{" "}
              <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Polyana meu amor
              </span>
            </h1>
            <p className="mt-4 text-purple-800/80 text-sm md:text-base max-w-sm">
              Eu fiz isso aqui só pra você. Toca pra abrir o seu presente —
              e deixa a música começar. 💜
            </p>

            <div className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-[0_10px_30px_rgba(147,51,234,0.4)] group-hover:bg-purple-700">
              <MailOpen size={18} />
              tocar pra abrir
            </div>

            <p className="mt-4 text-[11px] uppercase tracking-[0.25em] font-bold text-purple-500/70">
              feito com muito amor
            </p>
          </div>

          {/* Corner decor */}
          <div className="absolute -top-3 -left-3">
            <Heart size={22} fill="#EC4899" color="#EC4899" />
          </div>
          <div className="absolute -bottom-3 -right-3 rotate-12">
            <Flower2 size={24} fill="#F59E0B" color="#F59E0B" />
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}
