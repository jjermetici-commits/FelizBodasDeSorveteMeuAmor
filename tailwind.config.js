import React from "react";
import { Heart, Flower2 } from "lucide-react";
import { SITE } from "../data/content";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative py-16 px-6 text-center"
      data-testid="site-footer"
    >
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Flower2 size={22} fill="#F59E0B" color="#F59E0B" strokeWidth={1.4} />
          <Heart
            size={26}
            fill="#EC4899"
            color="#EC4899"
            className="pulse-heart"
          />
          <Flower2 size={22} fill="#F59E0B" color="#F59E0B" strokeWidth={1.4} />
        </div>
        <p className="font-heading text-2xl md:text-3xl text-purple-900">
          Feito com muito amor pra você, {SITE.girlName}.
        </p>
        <p className="mt-3 text-sm text-purple-700/70">
          — {SITE.fromName} • {year}
        </p>
      </div>
    </footer>
  );
}
