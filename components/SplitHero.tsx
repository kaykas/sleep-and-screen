// SplitHero — homepage main hero
// Left panel: mattress sale billboard — retail-first, high impact
// Right panel: Tonight's Feature — real movie poster + showtime metadata

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
  posterCredit: "Poster via TMDb",
};

export default function SplitHero() {
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_440px] min-h-[500px]">

          {/* ── LEFT: Mattress Sale Billboard ── */}
          <div className="px-6 md:px-8 lg:px-12 py-9 md:py-12 flex flex-col justify-center md:border-r border-gray-200 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div
              className="absolute inset-0 opacity-[0.018] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #1d4ed8 0, #1d4ed8 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, #1d4ed8 0, #1d4ed8 1px, transparent 0, transparent 50%)",
                backgroundSize: "56px 56px",
              }}
              aria-hidden="true"
            />
            {/* Warm wash behind promo card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/40 pointer-events-none" aria-hidden="true" />

            <div className="relative max-w-[560px]">
              {/* Event badge row */}
              <div className="mb-4 flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 bg-[#dc2626] text-white text-[10px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-white/70 rounded-full" aria-hidden="true" />
                  Summer Mattress Event
                </span>
                <span className="text-xs text-gray-400 font-medium">Ends Aug 31</span>
              </div>

              {/* Headline — controlled size, deliberate composition */}
              <h1 className="text-3xl md:text-[34px] lg:text-[42px] font-black tracking-tight text-gray-900 leading-[1.05] mb-4">
                Up to{" "}
                <span className="text-[#dc2626]">40% Off</span>
                {" "}Every Mattress
                <br />
                <span className="text-[#1d4ed8] text-2xl md:text-[27px] lg:text-[34px] font-bold">on the Showroom Floor</span>
              </h1>

              <p className="text-[15px] text-gray-600 max-w-[420px] leading-relaxed mb-6">
                Innerspring, memory foam, and hybrid — all on the floor at{" "}
                <strong className="text-gray-800">{SITE.address.street}</strong>. Walk in, no
                appointment. No pressure, no commission.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mb-7">
                <a
                  href="#showroom"
                  className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-red-700 active:bg-red-800 text-white font-extrabold px-7 py-3.5 rounded-full text-sm transition-colors shadow-md"
                >
                  Shop the Sale
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#showroom"
                  className="inline-flex items-center gap-2 border-2 border-[#1d4ed8] text-[#1d4ed8] hover:bg-blue-50 font-bold px-6 py-3.5 rounded-full text-sm transition-colors"
                >
                  View All Mattresses
                </a>
              </div>

              {/* Trust badges — clean grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
                {[
                  { icon: "✓", label: "120-Night Free Trial" },
                  { icon: "✓", label: "Free Delivery & Setup" },
                  { icon: "✓", label: "0% Financing — 12 Mo" },
                  { icon: "✓", label: "Price Match Guarantee" },
                ].map((t) => (
                  <span key={t.label} className="flex items-center gap-1.5 text-xs text-gray-600 font-medium">
                    <span className="text-green-600 font-extrabold text-sm">{t.icon}</span>
                    {t.label}
                  </span>
                ))}
              </div>

              {/* Review row */}
              <div className="flex items-center gap-2.5 pt-5 border-t border-gray-200">
                <span className="flex text-amber-400 gap-0.5" aria-label="4.8 stars">
                  ★★★★★
                </span>
                <span className="text-sm font-semibold text-gray-700">4.8 · Google Reviews</span>
                <span className="text-gray-300">·</span>
                <span className="text-xs text-gray-400">12 models on the floor</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Tonight's Feature ── */}
          {/* Dark slate card — intentional cinema poster aesthetic */}
          <div className="bg-[#1c1a2e] text-white flex flex-col">

            {/* ── TOP HEADER BAR ── */}
            <div className="flex items-center justify-between px-6 pt-5 pb-3.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                {/* Live indicator dot */}
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" aria-hidden="true" />
                <span className="text-xs font-extrabold tracking-widest uppercase text-indigo-300">
                  Evening Hours

                </span>
              </div>
              <a
                href="#evening-hours"
                className="text-xs font-semibold text-indigo-300 hover:text-white transition-colors underline underline-offset-2"
                aria-label="View full Evening Hours calendar"
              >
                Full calendar →
              </a>
            </div>

            {/* ── POSTER + METADATA ── */}
            <div className="flex gap-5 px-6 py-5 md:flex-col xl:flex-row">
              {/* Poster */}
              <div className="flex-shrink-0 w-[108px] sm:w-[118px] md:w-[132px] xl:w-[118px] aspect-[2/3] rounded-lg overflow-hidden border border-white/15 shadow-xl bg-black/30 relative">
                <Image
                  src={tonightFeature.posterUrl}
                  alt={`${tonightFeature.film} theatrical poster`}
                  fill
                  sizes="118px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Metadata */}
              <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                {/* Series badge */}
                <span className="inline-block text-[10px] bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 px-2 py-0.5 rounded font-bold uppercase tracking-wider w-fit">
                  {tonightFeature.series}
                </span>

                {/* Title */}
                <h2 className="text-[22px] font-extrabold leading-tight text-white">
                  {tonightFeature.film}
                </h2>

                {/* Year · Director */}
                <p className="text-sm text-gray-300">
                  {tonightFeature.year} · Dir.{" "}
                  <span className="text-white font-medium">{tonightFeature.director}</span>
                </p>

                {/* Score row */}
                <div className="flex items-center gap-2 flex-wrap mt-0.5">
                  {/* Star score */}
                  <div className="flex items-center gap-1 bg-amber-400/15 border border-amber-400/30 rounded px-2 py-0.5">
                    <span className="text-amber-300 text-sm leading-none">★</span>
                    <span className="text-amber-100 font-extrabold text-sm leading-none">
                      {tonightFeature.imdbScore}
                    </span>
                    <span className="text-amber-300/60 text-[11px] leading-none">/10</span>
                  </div>
                  {/* MPAA */}
                  <span className="text-[11px] border border-gray-400 text-gray-300 px-1.5 py-0.5 rounded font-bold">
                    {tonightFeature.rating}
                  </span>
                  {/* Runtime */}
                  <span className="text-xs text-gray-300">{tonightFeature.runtime}</span>
                  {/* Genre */}
                  <span className="text-xs text-gray-400">{tonightFeature.genre}</span>
                </div>
              </div>
            </div>

            {/* ── TAGLINE + LOGLINE ── */}
            <div className="px-6 pb-4 border-b border-white/10">
              <p className="text-[13px] text-gray-200 italic leading-snug mb-1.5">
                &ldquo;{tonightFeature.tagline}&rdquo;
              </p>
              <p className="text-[13px] text-gray-400 leading-relaxed">
                {tonightFeature.logline}
              </p>
            </div>

            {/* ── CURATOR BADGES ── */}
            <div className="flex flex-wrap gap-2 px-6 py-4 border-b border-white/10">
              <span className="inline-flex items-center gap-1.5 text-xs bg-violet-500/20 text-violet-200 border border-violet-400/30 px-2.5 py-1 rounded-full font-semibold">
                <span className="text-violet-300">♥</span>
                {tonightFeature.note}
              </span>
              <span className="inline-flex items-center text-xs text-gray-300 border border-white/15 bg-white/5 px-2.5 py-1 rounded-full">
                Programmed by Alexandra &amp; Kitrina
              </span>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* ── SHOWTIME + AVAILABILITY + CTAs ── */}
            <div className="px-6 pb-7 pt-5 border-t border-white/10">
              {/* Showtime + availability row */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm">
                  <span className="font-bold text-white">{tonightFeature.date}</span>
                  <span className="text-gray-400"> · </span>
                  <span className="font-bold text-white">{tonightFeature.time}</span>
                  <span className="text-gray-500 text-xs ml-2">Doors {tonightFeature.doorsOpen}</span>
                </div>
                {/* Availability badge */}
                <span className="inline-flex items-center gap-1.5 bg-red-500/20 border border-red-400/40 text-red-300 font-bold text-xs px-2.5 py-1 rounded-full flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full" aria-hidden="true" />
                  {tonightFeature.seats} spots left
                </span>
              </div>

              {/* Primary CTA */}
              <a
                href="#tonight"
                className="flex items-center justify-center gap-2 w-full bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 text-white font-extrabold py-3.5 rounded-xl text-[15px] tracking-wide transition-colors shadow-lg mb-2.5"
              >
                Reserve a Mattress Seat
                <span aria-hidden="true">→</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#evening-hours"
                className="flex items-center justify-center w-full border border-white/20 hover:border-indigo-400/50 text-gray-300 hover:text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
              >
                View Full Showtimes
              </a>

              {/* Pricing note */}
              <p className="mt-3 text-center text-[11px] text-gray-500">
                Free with mattress purchase ·
                <span className="text-gray-600"> $10–15 suggested donation</span>
              </p>
            </div>

          </div>
          {/* ── END RIGHT PANEL ── */}

        </div>
      </div>
    </section>
  );
}

