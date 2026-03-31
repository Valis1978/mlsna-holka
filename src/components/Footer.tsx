"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-charcoal text-white/70 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/images/logo-white.png"
              alt="Mlsná holka"
              className="h-10"
            />
            <p className="mt-4 text-white/50 text-sm leading-relaxed">
              Prémiové dorty na zakázku, makronky a mini donuty.
              Pečeme s láskou v Brně od roku 2017.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/mlsnaholka/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-plum transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/mlsnaholka/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-plum transition-colors"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-wider mb-4">Sortiment</h4>
            <ul className="space-y-3 text-sm">
              {["Klasické dorty", "Dětské dorty", "Pavlova dorty", "Makronky", "Mini donuty", "Sweet bar"].map(
                (item) => (
                  <li key={item}>
                    <a href="#dorty" className="hover:text-gold transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-wider mb-4">Služby</h4>
            <ul className="space-y-3 text-sm">
              {["Dorty na zakázku", "Svatby", "Firemní akce", "Snídaně & Brunch", "Makronky s potiskem", "Rozvoz"].map(
                (item) => (
                  <li key={item}>
                    <a href="#svatby" className="hover:text-gold transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-wider mb-4">Kontakt</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-white/50 text-xs mb-1">Dorty & makronky</p>
                  <a href="mailto:dorty@mlsna-holka.cz" className="hover:text-gold transition-colors">
                    dorty@mlsna-holka.cz
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-white/50 text-xs mb-1">Spolupráce & firmy</p>
                  <a href="mailto:info@mlsna-holka.cz" className="hover:text-gold transition-colors">
                    info@mlsna-holka.cz
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                <a href="tel:+420703388023" className="hover:text-gold transition-colors">
                  +420 703 388 023
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>Brno centrum & Lesná</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>&copy; 2017—{new Date().getFullYear()} Mlsná holka. Všechna práva vyhrazena.</p>
          <p>
            Web vytvořil{" "}
            <a
              href="https://mujagent.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              MůjAgent.cz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
