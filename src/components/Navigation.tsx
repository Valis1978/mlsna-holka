"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Příběh", href: "#pribeh" },
  { label: "Dorty", href: "#dorty" },
  { label: "Produkty", href: "#produkty" },
  { label: "Svatby", href: "#svatby" },
  { label: "Snídaně", href: "#snidane" },
  { label: "Ceník", href: "#objednavka" },
  { label: "Provozovny", href: "#provozovny" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-gold-light/30 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-10">
            {scrolled ? (
              <span className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl italic text-plum">
                Mlsná holka
              </span>
            ) : (
              <img
                src="/images/logo-white.png"
                alt="Mlsná holka"
                className="h-8 md:h-10"
              />
            )}
          </a>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[12px] uppercase tracking-[0.12em] font-medium transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-charcoal" : "text-white/90"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#objednavka"
              className="ml-1 px-5 py-2.5 bg-plum text-white text-[12px] uppercase tracking-[0.1em] rounded-full hover:bg-plum-light transition-colors duration-300"
            >
              Objednat
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`xl:hidden relative z-10 p-2 transition-colors ${
              menuOpen || scrolled ? "text-charcoal" : "text-white"
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-all duration-500 flex flex-col items-center justify-center gap-6 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_ITEMS.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-[family-name:var(--font-heading)] text-3xl text-charcoal hover:text-plum transition-colors"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#objednavka"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-8 py-3 bg-plum text-white text-sm uppercase tracking-widest rounded-full"
        >
          Objednat dort
        </a>
      </div>
    </>
  );
}
