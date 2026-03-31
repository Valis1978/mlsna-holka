import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#39086B",
};

export const metadata: Metadata = {
  title: "Mlsná Holka | Dorty & Cukrářství Brno",
  description:
    "Prémiové dorty na zakázku, makronky, mini donuty a snídaně v Brně. Vítěz Gourmet Brno 2025. Dva provozy: centrum & Lesná.",
  keywords: [
    "dorty Brno",
    "cukrářství Brno",
    "makronky Brno",
    "svatební dorty",
    "mini donuty",
    "Mlsná Holka",
  ],
  openGraph: {
    title: "Mlsná Holka | Dorty & Cukrářství Brno",
    description: "Prémiové dorty na zakázku. Vítěz Gourmet Brno 2025.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
