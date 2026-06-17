import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TonightScreenings from "@/components/TonightScreenings";
import AlexandrasPicks from "@/components/AlexandrasPicks";
import KitrinasPicks from "@/components/KitrinasPicks";
import Showroom from "@/components/Showroom";
import Programming from "@/components/Programming";
import ThemeNights from "@/components/ThemeNights";
import VenueGallery from "@/components/VenueGallery";
import Concessions from "@/components/Concessions";
import Visit from "@/components/Visit";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">
      <Nav />
      <Hero />
      <HowItWorks />
      <TonightScreenings />
      <AlexandrasPicks />
      <KitrinasPicks />
      <Showroom />
      <ThemeNights />
      <Programming />
      <VenueGallery />
      <Concessions />
      <Visit />
      <Newsletter />
      <Footer />
    </main>
  );
}
