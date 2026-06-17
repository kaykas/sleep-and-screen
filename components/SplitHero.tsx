// SplitHero — homepage main hero
// Retail-first mattress promo + Evening Hours movie card

import Image from "next/image";
import { SITE } from "@/lib/content";

const tonightFeature = {
  series: "John Waters Night",
  film: "Serial Mom",
  year: 1994,
  director: "John Waters",
  runtime: "95 min",
  rating: "R",
  genre: "Dark Comedy / Crime",
  imdbScore: "6.8",
  note: "A+K Pick",
  seats: 5,
  date: "Fri Jun 20",
  time: "8:00 PM",
  doorsOpen: "7:00 PM",
  tagline: "She's the perfect mother. Except for the murder.",
  logline:
    "Kathleen Turner plays Beverly Sutphin: devoted suburban mother, serial killer. John Waters plays it completely straight.",
  posterUrl: "/images/movies/serial-mom-poster.jpg",
};

const trustBadges = [
  "120-night trial",
  "Free delivery + setup",
  "0% financing",
  "Price match",
];

export default function SplitHero() {
  return (
    <section className="bg-[#f3f6fb] border-b border-gray-200 py-7 md:py-9">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_410px] xl:grid-cols-[minmax(0,1fr)_450px] gap-5 lg:gap-6 items-stretch">
          {/* Mattress sale card */}
          <div className="bg-white rounded-[28px] border border-gray-200 shadow-sm overflow-hidden relative">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-50/80 to-transparent pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #1d4ed8 0, #1d4ed8 1px, transparent 0, transparent 44px), repeating-linear-gradient(90deg, #1d4ed8 0, #1d4ed8 1px, transparent 0, transparent 44px)",
              }}
              aria-hidden="true"
            />

            <div className="relative p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center text-center min-h-[320px]">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                <span className="inline-flex items-center gap-2 bg-[#dc2626] text-white text-[11px] font-black tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/75" />
                  Summer mattress event
                </span>
                <span className="text-xs font-semibold text-gray-400">Ends Aug 31</span>
              </div>

              <h1 className="text-[36px] md:text-[44px] xl:text-[52px] leading-[0.98] font-black tracking-tight text-gray-950 mb-4">
                Up to <span className="text-[#dc2626]">40% off</span>
                <br />
                <span className="text-[#1d4ed8]">every mattress.</span>
              </h1>

              <p className="text-[15px] md:text-base text-gray-600 max-w-lg leading-relaxed mb-6">
                Innerspring, memory foam, latex, and hybrid models on the floor at{" "}
                <strong className="text-gray-900">{SITE.address.street}</strong>. Walk in, try the bed,
                take it home tonight or schedule free East Bay delivery.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <a
                  href="#showroom"
                  className="inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-red-700 active:bg-red-800 text-white font-black px-7 py-3.5 rounded-full text-sm transition-colors shadow-md hover:shadow-lg"
                >
                  Shop the Sale <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#showroom"
                  className="inline-flex items-center justify-center border-2 border-[#1d4ed8] text-[#1d4ed8] hover:bg-blue-50 font-extrabold px-6 py-3.5 rounded-full text-sm transition-colors"
                >
                  View All Mattresses
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                    <span className="inline-flex w-5 h-5 rounded-full bg-green-50 text-green-700 items-center justify-center text-sm font-black">
                      ✓
                    </span>
                    {badge}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-gray-200 w-full flex flex-wrap justify-center items-center gap-3 text-sm">
                <span className="text-amber-400 tracking-tight" aria-label="4.8 stars">★★★★★</span>
                <span className="font-bold text-gray-800">4.8 Google Reviews</span>
                <span className="text-gray-300">·</span>
                <span className="text-gray-500">12 models on the floor</span>
                <span className="text-gray-300">·</span>
                <span className="text-gray-500">walk-in, no appointment</span>
              </div>
            </div>
          </div>

          {/* Evening Hours card */}
          <div className="bg-[#1c1a2e] text-white rounded-[28px] border border-[#2c2944] shadow-sm overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" aria-hidden="true" />
                <span className="text-xs font-black tracking-[0.22em] uppercase text-indigo-200">
                  Evening Hours
                </span>
              </div>
              <a href="#evening-hours" className="text-xs font-semibold text-indigo-200 hover:text-white underline underline-offset-2">
                Full calendar →
              </a>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="grid grid-cols-[122px_minmax(0,1fr)] gap-5 items-start mb-5">
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden border border-white/15 shadow-xl bg-black/30">
                  <Image
                    src={tonightFeature.posterUrl}
                    alt={`${tonightFeature.film} theatrical poster`}
                    fill
                    sizes="122px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="min-w-0">
                  <span className="inline-block text-[10px] bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 px-2 py-0.5 rounded font-black uppercase tracking-wider mb-2">
                    {tonightFeature.series}
                  </span>
                  <h2 className="text-3xl font-black leading-none text-white mb-2">
                    {tonightFeature.film}
                  </h2>
                  <p className="text-sm text-gray-300 mb-3">
                    {tonightFeature.year} · Dir. <span className="text-white font-semibold">{tonightFeature.director}</span>
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 bg-amber-400/15 border border-amber-400/30 rounded px-2 py-1 text-amber-100 font-black text-sm">
                      ★ {tonightFeature.imdbScore}<span className="text-amber-300/60 text-[11px]">/10</span>
                    </span>
                    <span className="text-[11px] border border-gray-400 text-gray-300 px-1.5 py-0.5 rounded font-bold">{tonightFeature.rating}</span>
                    <span className="text-xs text-gray-300">{tonightFeature.runtime}</span>
                    <span className="text-xs text-gray-400">{tonightFeature.genre}</span>
                  </div>
                </div>
              </div>

              <div className="border-y border-white/10 py-4 mb-4">
                <p className="text-sm text-gray-100 italic leading-snug mb-2">
                  “{tonightFeature.tagline}”
                </p>
                <p className="text-[13px] text-gray-400 leading-relaxed">
                  {tonightFeature.logline}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 text-xs bg-violet-500/20 text-violet-200 border border-violet-400/30 px-2.5 py-1 rounded-full font-semibold">
                  <span className="text-violet-300">♥</span>
                  {tonightFeature.note}
                </span>
                <span className="inline-flex items-center text-xs text-gray-300 border border-white/15 bg-white/5 px-2.5 py-1 rounded-full">
                  Programmed by Alexandra &amp; Kitrina
                </span>
              </div>

              <div className="mt-auto rounded-2xl bg-black/20 border border-white/10 p-4">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div>
                    <div className="text-lg font-black text-white">{tonightFeature.date} · {tonightFeature.time}</div>
                    <div className="text-xs text-gray-400">Doors {tonightFeature.doorsOpen}</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-red-500/20 border border-red-400/40 text-red-200 font-black text-xs px-2.5 py-1 rounded-full flex-shrink-0">
                    <span className="w-1.5 h-1.5 bg-red-300 rounded-full" aria-hidden="true" />
                    {tonightFeature.seats} spots left
                  </span>
                </div>
                <a
                  href="#tonight"
                  className="flex items-center justify-center gap-2 w-full bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 text-white font-black py-3.5 rounded-xl text-[15px] tracking-wide transition-colors shadow-lg mb-2.5"
                >
                  Reserve a Mattress Seat <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#evening-hours"
                  className="flex items-center justify-center w-full border border-white/20 hover:border-indigo-400/50 text-gray-300 hover:text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
                >
                  View Full Showtimes
                </a>
                <p className="mt-3 text-center text-[11px] text-gray-500">
                  Free with mattress purchase · $10–15 suggested donation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
