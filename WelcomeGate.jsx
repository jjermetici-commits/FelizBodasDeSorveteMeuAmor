import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { TIMELINE } from "../data/content";

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="section-anchor relative py-24 md:py-32 px-6"
      data-testid="timeline-section"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/70 text-amber-700 text-xs font-semibold tracking-wider mb-4">
            <Sparkles size={14} />
            NOSSA HISTÓRIA
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-600 text-purple-900">
            Datas que mudaram tudo
          </h2>
          <p className="mt-3 text-purple-800/70 max-w-xl mx-auto">
            Pequenos marcos que, juntos, viraram a nossa história.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-purple-200 via-pink-200 to-amber-200"
          />

          <div className="space-y-12 md:space-y-16">
            {TIMELINE.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12 items-center"
                  data-testid={`timeline-item-${idx}`}
                >
                  {/* Dot */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 z-10">
                    <div className="h-5 w-5 rounded-full bg-white border-4 border-purple-500 shadow-[0_0_0_4px_rgba(168,85,247,0.15)]" />
                  </div>

                  {/* Card */}
                  <div
                    className={`pl-14 md:pl-0 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 mb-2">
                      <Heart size={12} fill="#EC4899" color="#EC4899" />
                      {item.date}
                    </div>
                    <div className="glass-card rounded-3xl p-6 md:p-7 overflow-hidden">
                      {item.image && (
                        <div className="mb-4 -mx-6 md:-mx-7 -mt-6 md:-mt-7 aspect-[16/10] overflow-hidden bg-purple-100">
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                      <h3 className="font-heading text-xl md:text-2xl font-600 text-purple-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-purple-900/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer */}
                  {isLeft ? <div className="hidden md:block" /> : null}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
