import UtilityBar from "@/components/UtilityBar";
import Nav from "@/components/Nav";
import SaleStrip from "@/components/SaleStrip";
import SplitHero from "@/components/SplitHero";
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ── UTILITY + NAV ── */}
      <UtilityBar />
      <Nav />
      <SaleStrip />

      {/* ── HOMEPAGE SPLIT HERO ── */}
      <SplitHero />

      {/* ── RETAIL CORE ── */}
      <RetailBanner />
      <Showroom />
      <HowItWorks />

      {/* ── Transition to Evening Hours ── */}
      <div className="h-0.5 bg-gradient-to-r from-gray-100 via-indigo-200 to-gray-100" aria-hidden="true" />

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

      {/* ── STOREFRONT LOCATION VISUALS ── */}
      <VenueGallery />

      {/* ── STORE INFO ── */}
      <Visit />
      <Newsletter />
      <Footer />
    </main>
  );
}
