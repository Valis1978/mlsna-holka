"use client";

import { useInView } from "@/hooks/useInView";

export default function Story() {
  const { ref, isVisible } = useInView();

  return (
    <section id="pribeh" className="py-24 md:py-32 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "will-animate"}`}>
          <span className="text-gold text-[12px] uppercase tracking-[0.25em] font-medium">Náš příběh</span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-charcoal mt-4">
            Od operačního sálu <span className="italic text-plum">za plotnu</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className={`relative ${isVisible ? "animate-slide-left delay-200" : "will-animate"}`}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden img-zoom">
              <img
                src="/images/storefront.jpg"
                alt="Hanka před pobočkou Mlsné holky na Poštovské"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-[200px]">
              <p className="font-[family-name:var(--font-heading)] text-4xl text-plum">2017</p>
              <p className="text-warm-gray text-sm mt-1">První donut shop v Brně</p>
            </div>
            {/* Decorative dot grid */}
            <div className="absolute -top-4 -left-4 w-24 h-24 opacity-20">
              <svg viewBox="0 0 100 100" fill="none">
                {Array.from({ length: 25 }).map((_, i) => (
                  <circle
                    key={i}
                    cx={(i % 5) * 22 + 11}
                    cy={Math.floor(i / 5) * 22 + 11}
                    r="2"
                    fill="#C9A96E"
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Text side */}
          <div className={`${isVisible ? "animate-slide-right delay-300" : "will-animate"}`}>
            <div className="space-y-6 text-warm-gray leading-relaxed text-[17px]">
              <p>
                <span className="font-[family-name:var(--font-heading)] text-2xl text-charcoal block mb-3">
                  Splněný sen, který se stal skutečností.
                </span>
                Jsme Hanka a Klaudie. Příběh Mlsné holky začal na střední škole, kdy Hanku
                fascinovalo pečení dortů a snila o vlastní cukrárně. Nebyla si ale jistá, jestli
                je to ta správná cesta — a tak nastoupila na lékařskou fakultu. Zlom přišel
                během zahraniční stáže na chirurgii, kde pochopila, že medicína není její posláním.
                Sebrala odvahu a rozhodla se jít za svým snem.
              </p>
              <p>
                Začátky byly skromné — od prvních donutů na{" "}
                <strong className="text-plum">17 m² v centru Brna</strong>,
                přes které si k nám našli cestu první zákazníci. Hanka tehdy dělala úplně všechno
                sama. Postupně přibyly makronky, éclairs, dorty a další dezerty.
              </p>
              <p>
                Dnes za Mlsnou holkou stojí <strong className="text-plum">silný tým šikovných holek</strong>,
                které prošly řadou kurzů a stáží v Česku i v zahraničí. Každé tři měsíce měníme
                dezertní menu, vymýšlíme nové kombinace chutí i vzhledů a snažíme se jít vlastní,
                originální cestou. V roce 2024 jsme otevřely druhou pobočku a na centru spustily
                snídaně a brunche.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 pl-5 border-l-2 border-gold-light/50">
              <p className="text-charcoal italic text-[16px]">
                P.S.: Plňte si své sny. 💛
              </p>
              <cite className="text-warm-gray text-sm not-italic mt-2 block">— Hanka & Klaudie</cite>
            </blockquote>

            {/* Media mentions */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Aktuálně.cz", "Český rozhlas", "Go To Brno", "Rumelier Podcast"].map((m) => (
                <span
                  key={m}
                  className="px-3 py-1.5 bg-plum-soft text-plum text-[13px] rounded-full"
                >
                  {m}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gold-light/30">
              {[
                { num: "8+", label: "Let zkušeností" },
                { num: "20K", label: "Sledujících na IG" },
                { num: "2", label: "Pobočky v Brně" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-plum">
                    {stat.num}
                  </p>
                  <p className="text-warm-gray text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
