import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import RetailBanner from "@/components/RetailBanner";
import Showroom from "@/components/Showroom";
import HowItWorks from "@/components/HowItWorks";
import EveningHours from "@/components/EveningHours";
import TonightScreenings from "@/components/TonightScreenings";
import JointPicks from "@/components/JointPicks";
import ThemeNights from "@/components/ThemeNights";
import Programming from "@/components/Programming";
import Concessions from "@/components/Concessions";
import VenueGallery from "@/components/VenueGallery";
import Visit from "@/components/Visit";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import PromoModal from "@/components/PromoModal";
import CookieBar from "@/components/CookieBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ── OVERLAYS ── */}
      <PromoModal />
      <CookieBar />

      {/* ── RETAIL FIRST ── */}
      <Nav />
      <Hero />
      <RetailBanner />
      <Showroom />
      <HowItWorks />

      {/* ── EVENING HOURS — secondary in-store program ── */}
      <EveningHours />
      <TonightScreenings />

      {/* ── PROGRAMMING DETAIL — for Evening Hours regulars ── */}
      <div className="bg-[#111] text-[#f5f0e8]">
        <JointPicks />
        <ThemeNights />
        <Programming />
        <Concessions />
      </div>

      {/* ── STRIP-MALL LOCATION VISUALS ── */}
      <VenueGallery />

      {/* ── STORE INFO ── */}
      <Visit />
      <Newsletter />
      <Footer />
    </main>
  );
}
