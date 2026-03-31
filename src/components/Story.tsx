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
                src="/images/hero.jpg"
                alt="Hanka a Klaudie — zakladatelky Mlsné holky"
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
                  Chtěla být zubařkou. Stala se cukrářkou.
                </span>
                Hanka Pokorná zprvu studovala medicínu. Po chirurgické stáži v Thajsku si ale
                uvědomila, že ji tato cesta nenaplňuje tak, jako její kolegy. Rozhodla se riskovat
                a vsadit na to, co ji opravdu bavilo — pečení.
              </p>
              <p>
                V roce 2017 otevřela na 17 m² v centru Brna <strong className="text-plum">první donut shop ve městě</strong>.
                Na účtu měla 30 korun, suroviny nakoupila jen na jeden den. Jeden post na Facebooku
                stačil — a hned první den stála fronta. Všechno vyprodala a musela péct další várku.
              </p>
              <p>
                Dnes Mlsnou holku tvoří <strong className="text-plum">12 žen</strong>, z nichž jen
                jedna je vyučená cukrářka. Ostatní, stejně jako Hanka, přišly z jiných oborů —
                spojuje je vášeň pro řemeslo a nebojácnost zkoušet neobvyklé kombinace chutí.
                Výsledkem je třeba makronka s gorgonzolou a hruškou nebo s parmezánem a yuzu.
              </p>
            </div>

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
