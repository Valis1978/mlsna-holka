"use client";

import { useInView } from "@/hooks/useInView";

const INSTAGRAM_IMAGES = [
  "/images/macaron-box.jpg",
  "/images/cake1.jpeg",
  "/images/brunch-interior.jpg",
  "/images/wedding3.jpeg",
  "/images/macaron-colorful.jpg",
  "/images/sweetbar1.jpeg",
];

export default function Instagram() {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-24 md:py-32 bg-cream overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "will-animate"}`}>
          <span className="text-gold text-[12px] uppercase tracking-[0.25em] font-medium">
            @mlsnaholka
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-charcoal mt-4">
            Sledujte nás na{" "}
            <span className="italic text-plum">Instagramu</span>
          </h2>
          <p className="text-warm-gray mt-3">
            20 000+ sledujících · 2 200+ příspěvků
          </p>
        </div>
      </div>

      {/* Full-width grid */}
      <div className={`grid grid-cols-3 md:grid-cols-6 ${isVisible ? "animate-scale-in delay-200" : "will-animate"}`}>
        {INSTAGRAM_IMAGES.map((img, i) => (
          <a
            key={i}
            href="https://www.instagram.com/mlsnaholka/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square group overflow-hidden"
          >
            <img
              src={img}
              alt={`Instagram post ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-plum/0 group-hover:bg-plum/40 transition-all duration-300 flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
