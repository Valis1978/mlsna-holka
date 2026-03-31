"use client";

import { useInView } from "@/hooks/useInView";
import { MapPin, Clock, Phone } from "lucide-react";

const LOCATIONS = [
  {
    name: "Centrum",
    address: "Poštovská 1, Brno střed",
    phone: "+420 703 388 023",
    hours: [
      { days: "Po — Pá", time: "8:30 — 18:00" },
      { days: "So — Ne", time: "9:00 — 17:00" },
    ],
    features: ["Snídaně & Brunch", "Posezení v kavárně", "Plný sortiment"],
    image: "/images/brunch-interior.jpg",
    mapUrl: "https://maps.google.com/?q=Poštovská+1,+Brno",
  },
  {
    name: "Lesná",
    address: "Fillova 1, Brno-Lesná",
    phone: "+420 736 243 810",
    hours: [
      { days: "Po", time: "Zavřeno" },
      { days: "Út — St", time: "13:00 — 18:00" },
      { days: "Čt — Pá", time: "10:00 — 18:00" },
      { days: "So — Ne", time: "13:00 — 18:00" },
    ],
    features: ["Výdejní místo dortů", "Prodej makronek & donutů"],
    image: "/images/cake8.jpeg",
    mapUrl: "https://maps.google.com/?q=Fillova+1,+Brno",
  },
];

export default function Locations() {
  const { ref, isVisible } = useInView();

  return (
    <section id="provozovny" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "will-animate"}`}>
          <span className="text-gold text-[12px] uppercase tracking-[0.25em] font-medium">
            Kde nás najdete
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-charcoal mt-4">
            Naše <span className="italic text-plum">provozovny</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {LOCATIONS.map((loc, i) => (
            <div
              key={loc.name}
              className={`rounded-2xl overflow-hidden bg-cream border border-gold-light/20 ${
                isVisible ? "animate-fade-in-up" : "will-animate"
              }`}
              style={{ animationDelay: `${200 + i * 150}ms` }}
            >
              <div className="aspect-[16/9] img-zoom">
                <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="font-[family-name:var(--font-heading)] text-3xl text-charcoal">
                  {loc.name}
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-plum mt-0.5 shrink-0" />
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal hover:text-plum transition-colors"
                    >
                      {loc.address}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-plum mt-0.5 shrink-0" />
                    <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="text-charcoal hover:text-plum transition-colors">
                      {loc.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-plum mt-0.5 shrink-0" />
                    <div className="space-y-1">
                      {loc.hours.map((h) => (
                        <div key={h.days} className="flex gap-4">
                          <span className="text-warm-gray w-16">{h.days}</span>
                          <span className={h.time === "Zavřeno" ? "text-rose" : "text-charcoal"}>
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {loc.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1.5 bg-plum-soft text-plum text-[13px] rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery info */}
        <div className={`mt-12 text-center bg-cream-dark rounded-2xl p-8 md:p-12 ${isVisible ? "animate-fade-in-up delay-400" : "will-animate"}`}>
          <h3 className="font-[family-name:var(--font-heading)] text-2xl text-charcoal">
            Rozvoz dortů
          </h3>
          <p className="text-warm-gray mt-3 max-w-lg mx-auto">
            Po Brně za fixní sazbu 500 Kč. Mimo Brno za 20 Kč/km (max. 80 km).
          </p>
        </div>
      </div>
    </section>
  );
}
