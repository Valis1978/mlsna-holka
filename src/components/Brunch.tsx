"use client";

import { useInView } from "@/hooks/useInView";

export default function Brunch() {
  const { ref, isVisible } = useInView();

  return (
    <section id="snidane" className="relative py-24 md:py-32 overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src="/images/brunch-interior.jpg"
          alt="Snídaně v Mlsné holce"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className={`${isVisible ? "animate-fade-in-up" : "will-animate"}`}>
            <span className="text-gold-light text-[12px] uppercase tracking-[0.25em] font-medium">
              Každý den
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-white mt-4 leading-tight">
              Snídaně &<br />
              <span className="italic text-gold-light">Brunch</span>
            </h2>
            <p className="text-white/80 mt-6 text-[17px] leading-relaxed max-w-md">
              Každý den vám připravíme snídani, na kterou se budete těšit. Čerstvé croissanty,
              domácí granola, eggs benedict a mnohem více.
            </p>
          </div>

          <div className={`mt-10 grid grid-cols-2 gap-6 ${isVisible ? "animate-fade-in-up delay-300" : "will-animate"}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="text-gold-light font-[family-name:var(--font-heading)] text-lg">Všední dny</p>
              <p className="text-white/90 text-2xl font-[family-name:var(--font-heading)] mt-1">8:30 — 11:00</p>
              <p className="text-white/50 text-sm mt-2">Poštovská 1, centrum</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="text-gold-light font-[family-name:var(--font-heading)] text-lg">Víkendový brunch</p>
              <p className="text-white/90 text-2xl font-[family-name:var(--font-heading)] mt-1">9:00 — 13:00</p>
              <p className="text-white/50 text-sm mt-2">Poštovská 1, centrum</p>
            </div>
          </div>

          <div className={`mt-8 ${isVisible ? "animate-fade-in-up delay-400" : "will-animate"}`}>
            <a
              href="tel:+420703388023"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-[0.12em] rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Rezervovat snídani
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
