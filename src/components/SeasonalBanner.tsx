"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface SeasonalBannerProps {
  emoji?: string;
  title: string;
  items: string[];
  onVisibilityChange?: (visible: boolean) => void;
}

export default function SeasonalBanner({
  emoji = "🐣",
  title = "Velikonoční otevírací doba",
  items = [
    "Centrum Pá 3.4.–Ne 5.4.: 9:00–17:00 · Po 6.4.: zavřeno",
    "Lesná Pá 3.4.: 10:00–18:00 · So–Ne: 13:00–18:00 · Po 6.4.: zavřeno",
  ],
}: SeasonalBannerProps) {
  const [dismissed, setDismissed] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hidden = dismissed || scrolled;

  return (
    <div
      id="seasonal-banner"
      className={`fixed top-0 left-0 right-0 z-[60] transition-transform duration-400 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="bg-cream-dark/95 backdrop-blur-sm border-b border-gold-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-center gap-2.5">
          <span className="text-sm leading-none shrink-0">{emoji}</span>

          <span className="text-gold text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.15em] shrink-0">
            {title}
          </span>

          <span className="hidden md:inline text-gold-light/40 text-[10px]">—</span>

          <div className="hidden md:flex items-center gap-x-3">
            {items.map((item, i) => (
              <span key={i} className="text-warm-gray text-[11px] tracking-wide">
                {item}
              </span>
            ))}
          </div>

          <button
            onClick={() => setDismissed(true)}
            className="shrink-0 ml-1 text-warm-gray/40 hover:text-warm-gray transition-colors"
            aria-label="Zavřít"
          >
            <X size={11} />
          </button>
        </div>
      </div>
    </div>
  );
}
