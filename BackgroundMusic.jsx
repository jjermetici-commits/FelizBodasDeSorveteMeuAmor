import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, Heart } from "lucide-react";
import { CACA_PALAVRAS } from "../data/content";

const STORAGE_KEY = "caca-palavras-found-v1";

export default function CacaPalavrasSection() {
  const { imageUrl, title, intro, words } = CACA_PALAVRAS;

  const [found, setFound] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    } catch {
      /* noop */
    }
  }, [found]);

  const toggle = (word) =>
    setFound((prev) =>
      prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word]
    );

  const allFound = words.length > 0 && found.length === words.length;

  return (
    <section
      id="cacapalavras"
      className="section-anchor relative py-24 md:py-32 px-6"
      data-testid="caca-palavras-section"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 text-purple-700 text-xs font-semibold tracking-wider mb-4">
            <Sparkles size={14} />
            UM JOGUINHO PRA VOCÊ
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-600 text-purple-900">
            {title}
          </h2>
          <p className="mt-4 text-purple-800/85 max-w-2xl mx-auto leading-relaxed">
            {intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-5 gap-6 md:gap-10 items-start"
          data-testid="caca-palavras-card"
        >
          {/* Image */}
          <div className="md:col-span-3 glass-card rounded-3xl p-4 md:p-5">
            <div className="relative rounded-2xl overflow-hidden bg-white aspect-square">
              <img
                src={imageUrl}
                alt="Caça palavras feito com amor"
                className="absolute inset-0 h-full w-full object-contain p-3"
                draggable={false}
              />
            </div>
            <p className="mt-3 text-center text-xs uppercase tracking-[0.25em] font-bold text-purple-500/70">
              <Heart size={10} className="inline mr-1" fill="#EC4899" color="#EC4899" />
              feito a mão • com amor
            </p>
          </div>

          {/* Words list */}
          <div className="md:col-span-2 glass-card rounded-3xl p-6 md:p-7">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-lg md:text-xl font-600 text-purple-900">
                Palavras pra encontrar
              </h3>
              <span
                className="text-xs font-bold uppercase tracking-wider text-purple-600/80"
                data-testid="caca-palavras-progress"
              >
                {found.length}/{words.length}
              </span>
            </div>

            <ul className="flex flex-wrap gap-2">
              {words.map((w) => {
                const isFound = found.includes(w);
                return (
                  <li key={w}>
                    <button
                      type="button"
                      onClick={() => toggle(w)}
                      data-testid={`caca-word-${w}`}
                      className={`group inline-flex items-center gap-1.5 pl-3 pr-3.5 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                        isFound
                          ? "bg-purple-600 text-white shadow-[0_6px_18px_rgba(147,51,234,0.35)] line-through decoration-pink-200"
                          : "bg-white/80 text-purple-800 border border-purple-200 hover:bg-purple-50 hover:-translate-y-0.5"
                      }`}
                    >
                      <span
                        className={`inline-flex h-4 w-4 items-center justify-center rounded-full ${
                          isFound
                            ? "bg-white/30"
                            : "border border-purple-300 group-hover:border-purple-500"
                        }`}
                      >
                        {isFound && <Check size={10} strokeWidth={3.5} />}
                      </span>
                      {w}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Progress bar */}
            <div className="mt-6 h-2 rounded-full bg-purple-100 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: `${(found.length / words.length) * 100}%` }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              />
            </div>

            {/* Completion message */}
            <motion.div
              initial={false}
              animate={{ opacity: allFound ? 1 : 0, y: allFound ? 0 : 6 }}
              transition={{ duration: 0.4 }}
              className="mt-5 p-4 rounded-2xl bg-gradient-to-br from-purple-100 via-pink-100 to-amber-100 text-center"
              data-testid="caca-palavras-complete"
              style={{ pointerEvents: allFound ? "auto" : "none" }}
            >
              <p className="font-heading text-lg text-purple-900 font-600 inline-flex items-center gap-2">
                <Heart size={18} fill="#EC4899" color="#EC4899" className="pulse-heart" />
                Você achou todas, meu amor 💜
              </p>
              <p className="mt-1 text-sm text-purple-700/80">
                Cada palavra dessas é a gente.
              </p>
            </motion.div>

            {found.length > 0 && !allFound && (
              <button
                type="button"
                onClick={() => setFound([])}
                className="mt-5 text-[11px] uppercase tracking-wider font-bold text-purple-500/60 hover:text-purple-700"
                data-testid="caca-palavras-reset"
              >
                recomeçar
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
