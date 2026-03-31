"use client";

import { useState } from "react";
import { X, Clock, Truck, CalendarDays, Info } from "lucide-react";

const INFO_ITEMS = [
  {
    icon: CalendarDays,
    text: "Dorty objednávejte min. 5 dní předem",
  },
  {
    icon: Truck,
    text: "Rozvoz po Brně 500 Kč · mimo město 20 Kč/km",
  },
  {
    icon: Clock,
    text: "Mini donuty objednávejte 3 dny předem tel. 703 388 023",
  },
];

export default function InfoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
      <div className="max-w-4xl mx-auto px-4 pb-4 pointer-events-auto">
        <div className="relative bg-charcoal/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/20 border border-white/10 overflow-hidden">
          {/* Subtle gradient accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-plum/60 to-transparent" />

          <div className="px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 sm:gap-5">
            {/* Icon */}
            <div className="hidden sm:flex shrink-0 w-9 h-9 rounded-full bg-plum/15 items-center justify-center">
              <Info size={16} className="text-plum-light" />
            </div>

            {/* Items */}
            <div className="flex-1 flex flex-wrap items-center gap-x-6 gap-y-1.5">
              {INFO_ITEMS.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[12px] sm:text-[13px] text-white/70">
                  <item.icon size={13} className="text-gold/70 shrink-0 hidden sm:block" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Close */}
            <button
              onClick={() => setVisible(false)}
              className="shrink-0 w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Zavřít"
            >
              <X size={14} className="text-white/50" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
