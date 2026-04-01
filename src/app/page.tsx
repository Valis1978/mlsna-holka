import SeasonalBanner from "@/components/SeasonalBanner";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import CakeShowcase from "@/components/CakeShowcase";
import Products from "@/components/Products";
import Weddings from "@/components/Weddings";
import CorporateClients from "@/components/CorporateClients";
import Brunch from "@/components/Brunch";
import Pricing from "@/components/Pricing";
import OrderForm from "@/components/OrderForm";
import Locations from "@/components/Locations";
import Instagram from "@/components/Instagram";
import InfoBanner from "@/components/InfoBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <SeasonalBanner
        emoji="🐣"
        title="Velikonoční otevírací doba"
        items={[
          "Centrum Pá 3.4.–Ne 5.4.: 9:00–17:00 · Po 6.4.: zavřeno",
          "Lesná Pá 3.4.: 10:00–18:00 · So–Ne: 13:00–18:00 · Po 6.4.: zavřeno",
        ]}
      />
      <Navigation />
      <Hero />
      <Story />
      <CakeShowcase />
      <Products />
      <Weddings />
      <CorporateClients />
      <Brunch />
      <Pricing />
      <OrderForm />
      <Locations />
      <Instagram />
      <Footer />
      <InfoBanner />
    </main>
  );
}
