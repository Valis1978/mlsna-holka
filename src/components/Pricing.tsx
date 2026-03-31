"use client";

import { useInView } from "@/hooks/useInView";

const PRICE_TABLE = [
  { label: "1 patrový ø 20 cm", portions: "cca 12 porcí", price: "1 990" },
  { label: "1 patrový ø 22 cm", portions: "cca 16 porcí", price: "2 150" },
  { label: "1 patrový ø 26 cm", portions: "cca 22 porcí", price: "3 250" },
  { label: "2 patrový ø 22/15 cm", portions: "cca 30–35 porcí", price: "4 900" },
  { label: "2 patrový ø 26/18 cm", portions: "cca 40–45 porcí", price: "6 500" },
  { label: "2 patrový ø 28/20 cm", portions: "cca 50–55 porcí", price: "7 500" },
  { label: "3 patrový ø 26/18/10 cm", portions: "cca 60–65 porcí", price: "9 000" },
  { label: "3 patrový ø 28/22/15 cm", portions: "cca 70–80 porcí", price: "10 000" },
  { label: "3 patrový ø 32/24/15 cm", portions: "cca 100–120 porcí", price: "12 000" },
];

const FLAVORS = [
  "Vanilkový korpus + vanilkový krém + maliny",
  "Vanilkový korpus + čokoládový krém + banán s karamelem",
  "Čokoládový korpus + vanilkový krém + černý rybíz",
  "Čokoládový korpus + čokoládový krém + mango & maracuja",
  "Mrkvový korpus + vanilkový krém + lemon curd",
  "Red velvet korpus + vanilkový krém + maliny",
  "Ořechový korpus + vanilkový krém + meruňky s tonkou",
  "Kokosový korpus + vanilkový krém + mango & maracuja curd",
  "Makový korpus + vanilkový krém + lemon curd",
];

export default function Pricing() {
  const { ref, isVisible } = useInView();

  return (
    <section id="objednavka" className="py-24 md:py-32 bg-cream">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "will-animate"}`}>
          <span className="text-gold text-[12px] uppercase tracking-[0.25em] font-medium">
            Ceník & Objednávka
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-charcoal mt-4">
            Ceník <span className="italic text-plum">dortů</span>
          </h2>
          <p className="text-warm-gray mt-4 max-w-lg mx-auto">
            Ceny platné od 7/2025. Objednávky přijímáme výhradně přes objednávkový formulář.
          </p>
        </div>

        {/* Price table */}
        <div className={`bg-white rounded-2xl shadow-sm border border-gold-light/20 overflow-hidden ${isVisible ? "animate-fade-in-up delay-200" : "will-animate"}`}>
          <div className="p-8 md:p-10">
            {PRICE_TABLE.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center justify-between py-4 ${
                  i !== PRICE_TABLE.length - 1 ? "border-b border-cream-dark" : ""
                }`}
              >
                <div>
                  <p className="text-charcoal font-medium">{item.label}</p>
                  <p className="text-warm-gray text-sm mt-0.5">{item.portions}</p>
                </div>
                <p className="font-[family-name:var(--font-heading)] text-xl text-plum whitespace-nowrap">
                  od {item.price} Kč
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Flavors */}
        <div className={`mt-12 bg-white rounded-2xl shadow-sm border border-gold-light/20 p-8 md:p-10 ${isVisible ? "animate-fade-in-up delay-300" : "will-animate"}`}>
          <h3 className="font-[family-name:var(--font-heading)] text-2xl text-charcoal mb-6">
            Příchutě
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {FLAVORS.map((f) => (
              <div key={f} className="flex items-start gap-3 text-warm-gray text-[15px]">
                <span className="text-gold mt-1 shrink-0">●</span>
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${isVisible ? "animate-fade-in-up delay-400" : "will-animate"}`}>
          <a
            href="mailto:dorty@mlsna-holka.cz?subject=Objednávka dortu"
            className="inline-flex items-center gap-3 px-10 py-5 bg-plum text-white uppercase tracking-[0.15em] text-sm rounded-full hover:bg-plum-light transition-all duration-300 hover:shadow-xl hover:shadow-plum/25"
          >
            Objednat dort
          </a>
          <p className="text-warm-gray text-sm mt-4">
            Objednávky e-mailem na{" "}
            <a href="mailto:dorty@mlsna-holka.cz" className="text-plum hover:underline">
              dorty@mlsna-holka.cz
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
