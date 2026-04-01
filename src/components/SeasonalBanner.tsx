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
  const [dismissed, setDismissed] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hidden = dismissed || scrolled;
  const marqueeText = `${emoji} ${title}  ·  ${items.join("  ·  ")}  ·  `;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] transition-transform duration-400 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="bg-cream-dark/95 backdrop-blur-sm border-b border-gold-light/30 relative">
        {/* Desktop: static centered */}
        <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 py-1.5 items-center justify-center gap-2.5">
          <span className="text-sm leading-none shrink-0">{emoji}</span>
          <span className="text-gold text-[12px] font-medium uppercase tracking-[0.15em] shrink-0">
            {title}
          </span>
          <span className="w-px h-3 bg-gold-light/40" />
          <div className="flex items-center gap-x-3">
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

        {/* Mobile: marquee scroll */}
        <div className="md:hidden flex items-center py-1.5 overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-[11px]">
              <span className="text-gold font-medium uppercase tracking-[0.12em]">{marqueeText}</span>
              <span className="text-gold font-medium uppercase tracking-[0.12em]">{marqueeText}</span>
            </div>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="shrink-0 px-2 text-warm-gray/40"
            aria-label="Zavřít"
          >
            <X size={11} />
          </button>
        </div>
      </div>
    </div>
  );
}
