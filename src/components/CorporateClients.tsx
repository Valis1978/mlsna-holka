"use client";

import { useInView } from "@/hooks/useInView";

const CLIENTS = ["Notino", "Forbes Czech Republic", "Thermofisher Scientific", "Primark"];

const SERVICES = [
  {
    title: "Firemní akce",
    desc: "Neobvyklé sladkosti pro kolegy a partnery. Kancelářské brunche, coffee breaky, vánoční večírky.",
  },
  {
    title: "Jedlý tisk makronky",
    desc: "Makronky s vaším logem nebo firemními barvami. Od 15 ks, tisk potravinářským inkoustem dle norem EU.",
  },
  {
    title: "Výstavní catering",
    desc: "Brandovaný sladký bar a reprezentativní dezerty pro konference a veletrhy.",
  },
];

export default function CorporateClients() {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-20 md:py-28 bg-charcoal text-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "will-animate"}`}>
          <span className="text-gold text-[12px] uppercase tracking-[0.25em] font-medium">
            Pro firmy
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-white mt-4">
            Důvěřují nám <span className="italic text-gold-light">přední značky</span>
          </h2>
        </div>

        {/* Client logos as text */}
        <div className={`flex flex-wrap justify-center gap-8 md:gap-16 mb-20 ${isVisible ? "animate-fade-in-up delay-200" : "will-animate"}`}>
          {CLIENTS.map((client) => (
            <span
              key={client}
              className="text-white/30 text-lg md:text-xl font-medium tracking-wide uppercase"
            >
              {client}
            </span>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-plum/40 transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "will-animate"
              }`}
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-white">
                {s.title}
              </h3>
              <p className="text-white/50 mt-3 text-[15px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 ${isVisible ? "animate-fade-in-up delay-500" : "will-animate"}`}>
          <a
            href="mailto:info@mlsna-holka.cz?subject=Firemní spolupráce"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-[0.12em] rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Napsat Hance
          </a>
        </div>
      </div>
    </section>
  );
}
