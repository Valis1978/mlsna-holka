"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface SeasonalBannerProps {
  emoji?: string;
  title: string;
  items: string[];
}

export default function SeasonalBanner({
  emoji = "🐣",
  title = "Velikonoční otevírací doba",
  items = [
    "Centrum Pá 3.4.–Ne 5.4.: 9:00–17:00 · Po 6.4.: zavřeno",
    "Lesná Pá 3.4.: 10:00–18:00 · So–Ne: 13:00–18:00 · Po 6.4.: zavřeno",
  ],
}: SeasonalBannerProps) {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-out ${
        mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-charcoal/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-center gap-3">
          <span className="text-base leading-none shrink-0">{emoji}</span>

          <span className="text-gold text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.18em] shrink-0">
            {title}
          </span>

          <span className="hidden md:inline w-px h-3 bg-white/15" />

          <div className="hidden md:flex items-center gap-x-4">
            {items.map((item, i) => (
              <span key={i} className="text-white/55 text-[11px] tracking-wide">
                {item}
              </span>
            ))}
          </div>

          <button
            onClick={() => setVisible(false)}
            className="shrink-0 ml-1 w-5 h-5 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
            aria-label="Zavřít"
          >
            <X size={11} className="text-white/30 hover:text-white/60" />
          </button>
        </div>
      </div>
      {/* Subtle gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </div>
  );
}
