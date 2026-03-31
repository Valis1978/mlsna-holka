"use client";

import { useInView } from "@/hooks/useInView";

const PRODUCTS = [
  {
    name: "Makronky",
    desc: "Bezlepkové, z prvotřídních surovin. Slaný karamel, pistácie, hruška & gorgonzola i parmezan & yuzu. Od 45 Kč/ks.",
    image: "/images/macaron-colorful.jpg",
    tag: "Bestseller",
  },
  {
    name: "Mini donuty",
    desc: "To, čím to celé začalo. 16 ingrediencí v těstě, menu se mění denně. Od 75 Kč/ks, min. 12 ks.",
    image: "/images/donut1.jpeg",
    tag: "Vlajková loď",
  },
  {
    name: "Sweet bar & dezerty",
    desc: "Brownies, éclairs, větrníky, cake pops, tartaletky, panna cotta i dezerty ve skleničce. Kompletní sladký servis.",
    image: "/images/sweetbar1.jpeg",
    tag: "Eventy",
  },
  {
    name: "Snídaně & Brunch",
    desc: "Každý den od 8:30 v centru. O víkendu brunch 9:00–13:00. Čerstvé, domácí, s láskou.",
    image: "/images/brunch-interior.jpg",
    tag: "Každý den",
  },
];

export default function Products() {
  const { ref, isVisible } = useInView();

  return (
    <section id="produkty" className="py-24 md:py-32 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "will-animate"}`}>
          <span className="text-gold text-[12px] uppercase tracking-[0.25em] font-medium">
            Sortiment
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-charcoal mt-4">
            Více než jen <span className="italic text-plum">dorty</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.name}
              className={`group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer ${
                isVisible ? "animate-scale-in" : "will-animate"
              }`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[11px] uppercase tracking-wider rounded-full">
                  {p.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white">
                  {p.name}
                </h3>
                <p className="text-white/70 text-sm mt-2 leading-relaxed">
                  {p.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-gold-light text-sm font-medium group-hover:gap-3 transition-all">
                  Zjistit více
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
