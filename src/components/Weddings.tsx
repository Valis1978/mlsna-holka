"use client";

import { useInView } from "@/hooks/useInView";

export default function Weddings() {
  const { ref, isVisible } = useInView();

  return (
    <section id="svatby" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-plum/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose/20 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div className={`order-2 lg:order-1 ${isVisible ? "animate-slide-left" : "will-animate"}`}>
            <span className="text-gold text-[12px] uppercase tracking-[0.25em] font-medium">
              Svatební servis
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-charcoal mt-4 leading-tight">
              Váš den si zaslouží
              <br />
              <span className="italic text-plum">dokonalý dort</span>
            </h2>
            <p className="text-warm-gray mt-6 text-[17px] leading-relaxed">
              Vytvoříme vám svatební dort snů — od klasické elegance po odvážné moderní
              kompozice. Součástí může být i kompletní sweet bar s makronkami, mini dorty
              a personalizovanými sladkostmi.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Individuální konzultace a návrh",
                "Makronky s vaším monogramem",
                "Rozvoz po celé jižní Moravě",
                "Sweet bar pro vaše hosty",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-plum-soft flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#39086B" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-charcoal">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:dorty@mlsna-holka.cz?subject=Svatební dort"
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-plum text-white text-sm uppercase tracking-[0.12em] rounded-full hover:bg-plum-light transition-all duration-300 hover:shadow-lg hover:shadow-plum/25"
            >
              Nezávazná konzultace
            </a>
          </div>

          {/* Image collage */}
          <div className={`order-1 lg:order-2 relative ${isVisible ? "animate-slide-right delay-200" : "will-animate"}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden img-zoom aspect-[3/4]">
                  <img
                    src="/images/wedding3.jpeg"
                    alt="Svatební dort"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden img-zoom aspect-square">
                  <img
                    src="/images/sweetbar2.jpeg"
                    alt="Makronky"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden img-zoom aspect-square">
                  <img
                    src="/images/sweetbar1.jpeg"
                    alt="Sweet bar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden img-zoom aspect-[3/4]">
                  <img
                    src="/images/wedding4.jpeg"
                    alt="Svatební makronky"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
