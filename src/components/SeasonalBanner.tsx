"use client";

import { useState } from "react";
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
    "Lesná Pá 3.4.: 10:00–18:00 · So–Ne 5.4.: 13:00–18:00 · Po 6.4.: zavřeno",
  ],
}: SeasonalBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-plum">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3">
        <span className="text-lg leading-none shrink-0">{emoji}</span>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-0.5">
          <span className="text-white/90 text-[13px] font-medium tracking-wide">
            {title}
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          {items.map((item, i) => (
            <span key={i} className="text-white/70 text-[12px]">
              {item}
            </span>
          ))}
        </div>

        <button
          onClick={() => setVisible(false)}
          className="shrink-0 w-5 h-5 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors ml-2"
          aria-label="Zavřít"
        >
          <X size={12} className="text-white/50" />
        </button>
      </div>
    </div>
  );
}
