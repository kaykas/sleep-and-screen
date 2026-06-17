// SplitHero — homepage main hero
// Left panel: mattress sale billboard — retail-first, high impact
// Right panel: Tonight's Feature — cinema poster card with high-contrast layout

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
};

export default function SplitHero() {
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] min-h-[500px]">

          {/* ── LEFT: Mattress Sale Billboard ── */}
          <div className="px-6 md:px-10 lg:px-12 py-10 md:py-14 flex flex-col justify-center border-r border-gray-200 relative overflow-hidden">
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

            <div className="relative max-w-xl">
              {/* Event badge row */}
              <div className="mb-4 flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 bg-[#dc2626] text-white text-[10px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-white/70 rounded-full" aria-hidden="true" />
                  Summer Mattress Event
                </span>
                <span className="text-xs text-gray-400 font-medium">Ends Aug 31</span>
              </div>

              {/* Headline — controlled size, deliberate composition */}
              <h1 className="text-3xl md:text-[38px] lg:text-[42px] font-black tracking-tight text-gray-900 leading-[1.05] mb-4">
                Up to{" "}
                <span className="text-[#dc2626]">40% Off</span>
                {" "}Every Mattress
                <br />
                <span className="text-[#1d4ed8] text-2xl md:text-3xl lg:text-[34px] font-bold">on the Showroom Floor</span>
              </h1>

              <p className="text-[15px] text-gray-600 max-w-sm leading-relaxed mb-6">
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
            <div className="flex gap-5 px-6 py-5">
              {/* Poster */}
              <div
                className="flex-shrink-0 w-[96px] h-[144px] rounded-lg overflow-hidden border border-white/15 shadow-lg"
                aria-hidden="true"
              >
                <PosterGraphic title={tonightFeature.film} year={tonightFeature.year} />
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

// Stylized cinema poster — 2:3 ratio, high internal contrast
// Richer palette than before: warm cream title on deep blue-purple
function PosterGraphic({ title, year }: { title: string; year: number }) {
  const words = title.split(" ");
  const line1 = words.slice(0, 2).join(" ");
  const line2 = words.slice(2).join(" ");

  return (
    <svg
      viewBox="0 0 96 144"
      className="w-full h-full block"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pg-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d1b4e" />
          <stop offset="55%" stopColor="#1a0f2e" />
          <stop offset="100%" stopColor="#0e0818" />
        </linearGradient>
        <linearGradient id="pg-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pg-vignette" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.75" />
        </linearGradient>
        <radialGradient id="pg-center" cx="50%" cy="38%" r="40%">
          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="96" height="144" fill="url(#pg-bg)" />

      {/* Center spotlight */}
      <rect width="96" height="144" fill="url(#pg-center)" />

      {/* Top violet glow */}
      <rect x="0" y="0" width="96" height="60" fill="url(#pg-glow)" />

      {/* Abstract figure — head + shoulders silhouette */}
      <ellipse cx="48" cy="46" rx="13" ry="15" fill="#c4b5fd" opacity="0.16" />
      <path d="M28 78 Q34 60 48 58 Q62 60 68 78 Z" fill="#c4b5fd" opacity="0.10" />

      {/* Vignette bottom */}
      <rect x="0" y="80" width="96" height="64" fill="url(#pg-vignette)" />

      {/* Divider rule */}
      <line x1="10" y1="90" x2="86" y2="90" stroke="#c4b5fd" strokeWidth="0.5" opacity="0.25" />

      {/* "TONIGHT" stripe at top */}
      <rect x="0" y="0" width="96" height="13" fill="#6d28d9" opacity="0.6" />
      <text
        x="48" y="9"
        textAnchor="middle"
        fill="#e9d5ff"
        fontSize="5.5"
        fontFamily="monospace"
        fontWeight="bold"
        letterSpacing="2.5"
      >
        TONIGHT
      </text>

      {/* Title line 1 */}
      <text
        x="48" y="104"
        textAnchor="middle"
        fill="#f0eaff"
        fontSize="10"
        fontFamily="Georgia, serif"
        fontWeight="bold"
        letterSpacing="0.3"
      >
        {line1}
      </text>
      {/* Title line 2 (if exists) */}
      {line2 && (
        <text
          x="48" y="117"
          textAnchor="middle"
          fill="#f0eaff"
          fontSize="10"
          fontFamily="Georgia, serif"
          fontWeight="bold"
          letterSpacing="0.3"
        >
          {line2}
        </text>
      )}

      {/* Year */}
      <text
        x="48" y={line2 ? "131" : "120"}
        textAnchor="middle"
        fill="#a78bfa"
        fontSize="6"
        fontFamily="monospace"
        letterSpacing="1.5"
      >
        {year}
      </text>

      {/* Corner tick marks — film frame detail */}
      {([[2,14],[94,14],[2,130],[94,130]] as [number,number][]).map(([cx, cy], i) => (
        <g key={i}>
          <line
            x1={cx < 50 ? cx : cx - 4} y1={cy}
            x2={cx < 50 ? cx + 4 : cx} y2={cy}
            stroke="#c4b5fd" strokeWidth="0.6" opacity="0.3"
          />
          <line
            x1={cx} y1={cy < 80 ? cy : cy - 4}
            x2={cx} y2={cy < 80 ? cy + 4 : cy}
            stroke="#c4b5fd" strokeWidth="0.6" opacity="0.3"
          />
        </g>
      ))}
    </svg>
  );
}
