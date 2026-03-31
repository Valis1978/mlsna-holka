import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import CakeShowcase from "@/components/CakeShowcase";
import Products from "@/components/Products";
import Weddings from "@/components/Weddings";
import CorporateClients from "@/components/CorporateClients";
import Brunch from "@/components/Brunch";
import Pricing from "@/components/Pricing";
import Locations from "@/components/Locations";
import Instagram from "@/components/Instagram";
import InfoBanner from "@/components/InfoBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Story />
      <CakeShowcase />
      <Products />
      <Weddings />
      <CorporateClients />
      <Brunch />
      <Pricing />
      <Locations />
      <Instagram />
      <Footer />
      <InfoBanner />
    </main>
  );
}
