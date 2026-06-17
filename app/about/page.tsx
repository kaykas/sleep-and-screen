import type { Metadata } from "next";
import UtilityBar from "@/components/UtilityBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutMattressFirst from "@/components/about/AboutMattressFirst";
import AboutEveningHours from "@/components/about/AboutEveningHours";
import AboutStorefront from "@/components/about/AboutStorefront";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About — East Bay Mattress | San Pablo Ave, Berkeley, CA",
  description:
    "East Bay Mattress on San Pablo Ave in Berkeley. A real mattress store with a full showroom floor and local delivery. Evening Hours film programming on selected nights.",
  openGraph: {
    title: "About — East Bay Mattress",
    description:
      "A mattress store on San Pablo Ave in Berkeley. Full showroom, local delivery, and Evening Hours film programming after dark.",
    type: "website",
    locale: "en_US",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <UtilityBar />
      <Nav />
      <AboutHero />
      <AboutMattressFirst />
      <AboutEveningHours />
      <AboutStorefront />
      <AboutCTA />
      <Footer />
    </main>
  );
}
