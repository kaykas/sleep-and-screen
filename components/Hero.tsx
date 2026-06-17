// Hero — retail sale billboard
// Mattress sale first. Movie offer as a single clean promo line. Lots of whitespace.

import { SITE } from "@/lib/content";

export default function Hero() {
  return (
    <section className="pt-[116px] md:pt-[136px] bg-white">

      {/* ── SALE HERO ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">

          {/* Event label */}
          <div className="mb-5">
            <span className="inline-block bg-[#dc2626] text-white text-xs font-extrabold tracking-widest uppercase px-3 py-1.5 rounded">
              Ends Aug 31 — Up to 40% Off
            </span>
          </div>

          {/* Primary headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.05] mb-6">
            Summer Mattress Event
          </h1>

          {/* Sub-headline / tagline */}
          <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed mb-3">
            Innerspring, memory foam, and hybrid mattresses — all on the floor,
            all discounted. Walk in, no appointment needed.
          </p>

          {/* Movie offer — single quiet promo line */}
          <p className="text-sm text-indigo-700 font-medium mb-10">
            King mattress purchase includes 1 year of Friday Evening Hours.{" "}
            <a href="#evening-hours" className="underline underline-offset-2 hover:text-indigo-900 transition-colors">
              What is Evening Hours?
            </a>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="#showroom"
              className="bg-[#dc2626] hover:bg-red-700 text-white font-extrabold px-8 py-4 rounded text-base transition-colors"
            >
              Shop the Event
            </a>
            <a
              href="#showroom"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-7 py-4 rounded text-base transition-colors"
            >
              View All Mattresses
            </a>
          </div>

          {/* Store line */}
          <p className="text-xs text-gray-400 mt-8">
            {SITE.name} · {SITE.address.street}, {SITE.address.city}, {SITE.address.state} · 12 models on the floor · free delivery · 120-night trial
          </p>
        </div>
      </div>

      {/* ── TRUST BAR ── */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-wrap gap-6 items-center text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="text-amber-500 font-bold">★ 4.8</span>
              <span>Google Reviews</span>
            </span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span>120-Night Free Trial</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span>Free Delivery &amp; Setup</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span>0% Financing — 12 Months</span>
          </div>
        </div>
      </div>

    </section>
  );
}
