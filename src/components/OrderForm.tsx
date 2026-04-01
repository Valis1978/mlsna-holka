"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Send, CheckCircle } from "lucide-react";

const SIZES = [
  { label: "ø 20 cm (cca 12 porcí)", value: "20cm" },
  { label: "ø 22 cm (cca 16 porcí)", value: "22cm" },
  { label: "ø 26 cm (cca 22 porcí)", value: "26cm" },
  { label: "2 patrový ø 22/15 cm", value: "22-15cm" },
  { label: "2 patrový ø 26/18 cm", value: "26-18cm" },
  { label: "2 patrový ø 28/20 cm", value: "28-20cm" },
  { label: "3 patrový ø 26/18/10 cm", value: "26-18-10cm" },
  { label: "3 patrový ø 28/22/15 cm", value: "28-22-15cm" },
  { label: "3 patrový ø 32/24/15 cm", value: "32-24-15cm" },
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

const PICKUP = [
  { label: "Centrum — Poštovská 1 (Po–Pá 8:30–18:00)", value: "centrum" },
  { label: "Lesná — Fillova 1 (Út–Pá 10:00–18:00, So–Ne 13:00–18:00)", value: "lesna" },
];

export default function OrderForm() {
  const { ref, isVisible } = useInView();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <CheckCircle size={48} className="text-plum mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-charcoal">
            Děkujeme za objednávku!
          </h2>
          <p className="text-warm-gray mt-4">
            Ozveme se vám co nejdříve s potvrzením. Obvykle do 1–2 pracovních dnů.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="formular" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "will-animate"}`}>
          <span className="text-gold text-[12px] uppercase tracking-[0.25em] font-medium">
            Objednávka
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-charcoal mt-4">
            Objednat <span className="italic text-plum">dort</span>
          </h2>
          <p className="text-warm-gray mt-4 max-w-lg mx-auto text-[15px]">
            Objednávky přijímáme minimálně 5 dní předem. Každý dort je originál na míru.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const data = new FormData(form);

            // Build mailto
            const subject = `Objednávka dortu — ${data.get("name")}`;
            const body = [
              `Jméno: ${data.get("name")}`,
              `Email: ${data.get("email")}`,
              `Telefon: ${data.get("phone")}`,
              `Datum vyzvednutí: ${data.get("date")}`,
              `Místo: ${data.get("pickup")}`,
              `Velikost: ${data.get("size")}`,
              `Příchut: ${data.get("flavor")}`,
              `Pro koho / příležitost: ${data.get("occasion")}`,
              `Poznámky: ${data.get("notes")}`,
            ].join("\n");

            window.location.href = `mailto:dorty@mlsna-holka.cz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setSubmitted(true);
          }}
          className={`space-y-6 ${isVisible ? "animate-fade-in-up delay-200" : "will-animate"}`}
        >
          {/* Personal info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-charcoal text-sm font-medium mb-1.5">
                Jméno a příjmení *
              </label>
              <input
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gold-light/30 bg-cream focus:border-plum focus:ring-1 focus:ring-plum/20 outline-none transition-colors text-charcoal"
                placeholder="Jana Nováková"
              />
            </div>
            <div>
              <label className="block text-charcoal text-sm font-medium mb-1.5">
                E-mail *
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gold-light/30 bg-cream focus:border-plum focus:ring-1 focus:ring-plum/20 outline-none transition-colors text-charcoal"
                placeholder="jana@email.cz"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-charcoal text-sm font-medium mb-1.5">
                Telefon
              </label>
              <input
                name="phone"
                type="tel"
                className="w-full px-4 py-3 rounded-xl border border-gold-light/30 bg-cream focus:border-plum focus:ring-1 focus:ring-plum/20 outline-none transition-colors text-charcoal"
                placeholder="+420 ..."
              />
            </div>
            <div>
              <label className="block text-charcoal text-sm font-medium mb-1.5">
                Datum vyzvednutí *
              </label>
              <input
                name="date"
                type="date"
                required
                className="w-full px-4 py-3 rounded-xl border border-gold-light/30 bg-cream focus:border-plum focus:ring-1 focus:ring-plum/20 outline-none transition-colors text-charcoal"
              />
            </div>
          </div>

          {/* Pickup location */}
          <div>
            <label className="block text-charcoal text-sm font-medium mb-1.5">
              Místo vyzvednutí *
            </label>
            <select
              name="pickup"
              required
              className="w-full px-4 py-3 rounded-xl border border-gold-light/30 bg-cream focus:border-plum focus:ring-1 focus:ring-plum/20 outline-none transition-colors text-charcoal"
            >
              <option value="">Vyberte pobočku</option>
              {PICKUP.map((p) => (
                <option key={p.value} value={p.label}>{p.label}</option>
              ))}
            </select>
          </div>

          {/* Cake details */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-charcoal text-sm font-medium mb-1.5">
                Velikost dortu *
              </label>
              <select
                name="size"
                required
                className="w-full px-4 py-3 rounded-xl border border-gold-light/30 bg-cream focus:border-plum focus:ring-1 focus:ring-plum/20 outline-none transition-colors text-charcoal"
              >
                <option value="">Vyberte velikost</option>
                {SIZES.map((s) => (
                  <option key={s.value} value={s.label}>{s.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-charcoal text-sm font-medium mb-1.5">
                Příchut *
              </label>
              <select
                name="flavor"
                required
                className="w-full px-4 py-3 rounded-xl border border-gold-light/30 bg-cream focus:border-plum focus:ring-1 focus:ring-plum/20 outline-none transition-colors text-charcoal"
              >
                <option value="">Vyberte příchut</option>
                {FLAVORS.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Occasion */}
          <div>
            <label className="block text-charcoal text-sm font-medium mb-1.5">
              Pro koho dort bude? Příležitost? *
            </label>
            <input
              name="occasion"
              required
              className="w-full px-4 py-3 rounded-xl border border-gold-light/30 bg-cream focus:border-plum focus:ring-1 focus:ring-plum/20 outline-none transition-colors text-charcoal"
              placeholder="Narozeniny Petr, 30 let — jméno a věk na dort"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-charcoal text-sm font-medium mb-1.5">
              Poznámky k objednávce
            </label>
            <textarea
              name="notes"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gold-light/30 bg-cream focus:border-plum focus:ring-1 focus:ring-plum/20 outline-none transition-colors text-charcoal resize-none"
              placeholder="Speciální přání, barvy, inspirace, alergie..."
            />
          </div>

          <p className="text-warm-gray text-[13px]">
            Každý dort je originál. Rádi se inspirujeme fotografiemi, ale výsledek se nikdy nebude shodovat úplně do detailu.
          </p>

          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-plum text-white text-sm uppercase tracking-[0.15em] rounded-full hover:bg-plum-light transition-all duration-300 hover:shadow-lg hover:shadow-plum/25 mx-auto"
          >
            <Send size={16} />
            Odeslat objednávku
          </button>
        </form>
      </div>
    </section>
  );
}
