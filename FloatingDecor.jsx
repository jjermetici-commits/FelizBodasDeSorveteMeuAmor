import React from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { GALLERY } from "../data/content";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="section-anchor relative py-24 md:py-32 px-6"
      data-testid="gallery-section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/70 text-purple-700 text-xs font-semibold tracking-wider mb-4">
            <Camera size={14} />
            NOSSAS LEMBRANÇAS
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-600 text-purple-900">
            Momentos que eu nunca quero esquecer
          </h2>
          <p className="mt-3 text-purple-800/70 max-w-xl mx-auto">
            Cada foto é uma história. Cada história, um pedacinho de a gente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {GALLERY.map((photo, idx) => (
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
              className="polaroid rounded-md mx-auto w-full max-w-[300px]"
              data-testid={`gallery-photo-${idx}`}
            >
              <div className="aspect-square overflow-hidden rounded-sm bg-purple-100">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center font-handwritten text-purple-800 text-base">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
