"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef, subRef, badgeRef, ctaRef];
    els.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.animationDelay = `${300 + i * 200}ms`;
        ref.current.classList.add("animate-fade-in-up");
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-end sm:items-center justify-center overflow-hidden pb-24 sm:pb-0">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero.jpg')`,
            backgroundPosition: "center 50%",
          }}
        />
        {/* Mobile: stronger gradient at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70 sm:from-black/50 sm:via-black/25 sm:to-black/55" />
      </div>

      {/* Decorative circles — hidden on mobile */}
      <div className="hidden sm:block absolute top-20 right-20 w-64 h-64 rounded-full bg-plum/10 blur-3xl animate-float" />
      <div
        className="hidden sm:block absolute bottom-32 left-16 w-48 h-48 rounded-full bg-gold/10 blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Award badge */}
        <div ref={badgeRef} className="will-animate mb-5 sm:mb-8 inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-gold/40 bg-white/10 backdrop-blur-sm text-gold-light text-xs sm:text-sm tracking-wider uppercase">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="sm:w-4 sm:h-4">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Vítěz Gourmet Brno 2025
          </span>
        </div>

        <h1
          ref={headingRef}
          className="will-animate font-[family-name:var(--font-heading)] text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-4 sm:mb-6 drop-shadow-lg"
        >
          Mlsná{" "}
          <span className="italic text-gold-light">holka</span>
        </h1>

        <p
          ref={subRef}
          className="will-animate text-white/80 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          Prémiové dorty na zakázku, makronky &amp; mini donuty.
          <br />
          Pečeme s láskou v Brně od roku 2017.
        </p>

        <div ref={ctaRef} className="will-animate flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#dorty"
            className="w-full sm:w-auto px-8 py-4 bg-plum text-white text-sm uppercase tracking-[0.15em] rounded-full hover:bg-plum-light transition-all duration-300 hover:shadow-lg hover:shadow-plum/25"
          >
            Prohlédnout dorty
          </a>
          <a
            href="#objednavka"
            className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-[0.15em] rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Objednat na míru
          </a>
        </div>
      </div>

      {/* Scroll indicator — hidden on mobile */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/50">
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
