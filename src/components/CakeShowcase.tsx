"use client";

import { useInView } from "@/hooks/useInView";
import { useCardGlow } from "@/hooks/useCardGlow";

const CAKE_CATEGORIES = [
  {
    title: "Klasické dorty",
    description: "Elegantní dorty zdobené čerstvým ovocem, makronkami a jedlými květy. Každý je originál na míru.",
    image: "/images/cake1.jpeg",
    price: "od 1 990 Kč",
  },
  {
    title: "Dětské dorty",
    description: "Veselé motivy, oblíbené postavičky a barvy, které rozzáří každou dětskou oslavu.",
    image: "/images/detsky-dort.jpeg",
    price: "od 1 990 Kč",
  },
  {
    title: "Svatební dorty",
    description: "Od klasické elegance po odvážné kompozice. Součástí může být i kompletní sweet bar s makronkami.",
    image: "/images/wedding1.jpeg",
    price: "od 4 900 Kč",
  },
  {
    title: "Makronkové dorty",
    description: "Bezlepkový dort ze 3 makronkových skořápek ø 18 cm. Tmavá čokoláda s malinami, vanilka s rybízem nebo višněmi.",
    image: "/images/cake2.jpeg",
    price: "od 1 300 Kč",
  },
];

export default function CakeShowcase() {
  const { ref, isVisible } = useInView();
  const { onMouseMove } = useCardGlow();

  return (
    <section id="dorty" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "will-animate"}`}>
          <span className="text-gold text-[12px] uppercase tracking-[0.25em] font-medium">
            Naše speciality
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-charcoal mt-4">
            Dorty na <span className="italic text-plum">zakázku</span>
          </h2>
          <p className="text-warm-gray mt-4 max-w-lg mx-auto">
            Každý dort pečeme vždy na objednávku, aby byl čerstvý a přesně podle vašich představ.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {CAKE_CATEGORIES.map((cake, i) => (
            <div
              key={cake.title}
              onMouseMove={onMouseMove}
              className={`card-glow group rounded-2xl overflow-hidden bg-cream border border-gold-light/20 hover:border-gold-light/50 transition-all duration-500 hover:shadow-xl hover:shadow-plum/5 ${
                isVisible ? "animate-fade-in-up" : "will-animate"
              }`}
              style={{ animationDelay: `${200 + i * 150}ms` }}
            >
              <div className="aspect-[16/10] img-zoom">
                <img
                  src={cake.image}
                  alt={cake.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl text-charcoal group-hover:text-plum transition-colors">
                      {cake.title}
                    </h3>
                    <p className="text-warm-gray mt-2 text-[15px] leading-relaxed">
                      {cake.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm text-plum font-medium bg-plum-soft px-3 py-1.5 rounded-full">
                    {cake.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 ${isVisible ? "animate-fade-in-up delay-600" : "will-animate"}`}>
          <a
            href="#objednavka"
            className="inline-flex items-center gap-3 px-8 py-4 bg-plum text-white text-sm uppercase tracking-[0.15em] rounded-full hover:bg-plum-light transition-all duration-300 hover:shadow-lg hover:shadow-plum/25"
          >
            Objednat dort na míru
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
