// SplitHero — homepage main hero
// Left panel: mattress sale billboard — retail-first, high impact
// Right panel: Tonight's Feature — movie-poster card with IMDb-style metadata

import { SITE } from "@/lib/content";

// Tonight's feature — hardcoded for now, would be data-driven in production
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
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_480px] min-h-[480px]">

          {/* ── LEFT: Mattress Sale Billboard ── */}
          <div className="px-6 md:px-10 lg:px-14 py-12 md:py-16 lg:py-20 flex flex-col justify-center border-r border-gray-100 relative overflow-hidden">
            {/* Background graphic — subtle mattress grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #1d4ed8 0, #1d4ed8 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, #1d4ed8 0, #1d4ed8 1px, transparent 0, transparent 50%)",
                backgroundSize: "48px 48px",
              }}
              aria-hidden="true"
            />

            <div className="relative max-w-[560px]">
              {/* Sale badge row */}
              <div className="mb-6 flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center bg-[#dc2626] text-white text-[11px] font-extrabold tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-sm">
                  Summer Mattress Event
                </span>
                <span className="text-sm text-gray-400 font-medium">Ends Aug 31</span>
              </div>

              {/* Headline */}
              <h1 className="text-[40px] md:text-[52px] lg:text-[58px] font-black tracking-tight text-gray-900 leading-[1.0] mb-5">
                Up to{" "}
                <span className="text-[#dc2626]">40% Off</span>
                <br />
                Every Mattress
                <br />
                <span className="text-[#1d4ed8]">on the Floor.</span>
              </h1>

              {/* Sub */}
              <p className="text-[15px] md:text-base text-gray-500 max-w-[440px] leading-relaxed mb-3">
                Innerspring, memory foam, and hybrid — all on the showroom floor at{" "}
                <strong className="text-gray-700 font-semibold">{SITE.address.street}</strong>.
                Walk in, no appointment. Try any mattress. No pressure, no commission.
              </p>

              {/* Movie tie-in line */}
              <p className="text-[13px] text-indigo-600 font-medium mb-8">
                King purchase includes 1 year of{" "}
                <a href="#evening-hours" className="underline underline-offset-2 hover:text-indigo-800 transition-colors">
                  Evening Hours
                </a>.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="#showroom"
                  className="inline-flex items-center justify-center bg-[#dc2626] hover:bg-[#b91c1c] active:bg-[#991b1b] text-white font-extrabold px-8 py-4 rounded-full text-[15px] tracking-wide transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:ring-offset-2"
                >
                  Shop the Sale
                </a>
                <a
                  href="#showroom"
                  className="inline-flex items-center justify-center border-2 border-[#1d4ed8] text-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white font-bold px-7 py-4 rounded-full text-[15px] tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:ring-offset-2"
                >
                  View All Mattresses
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-x-4 gap-y-2.5 mb-8">
                {[
                  "120-Night Free Trial",
                  "Free Delivery & Setup",
                  "0% Financing — 12 Mo",
                  "Price Match Guarantee",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-[13px] text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
                    <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.25" />
                      <path d="M4.5 8.25l2.5 2.5 4-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>

              {/* Rating bar */}
              <div className="flex items-center gap-2.5">
                <span className="flex text-amber-400 gap-px text-base leading-none" aria-label="4.8 stars">
                  ★★★★★
                </span>
                <span className="text-sm font-semibold text-gray-700">4.8</span>
                <span className="text-[13px] text-gray-400">Google Reviews</span>
                <span className="text-gray-300 mx-1">·</span>
                <span className="text-[13px] text-gray-400">12 models on the floor</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Tonight's Feature — Cinema Poster Card ── */}
          <div className="bg-[#0f0d0b] text-[#f5f0e8] flex flex-col p-6 lg:p-8">

            {/* Header row */}
            <div className="flex items-center justify-between mb-5">
              <div className="text-[10px] font-extrabold tracking-widest uppercase text-indigo-400">
                Evening Hours
              </div>
              <a
                href="#evening-hours"
                className="text-[10px] text-gray-500 hover:text-gray-300 transition-colors font-medium"
              >
                Full calendar →
              </a>
            </div>

            {/* Showtime date/time label */}
            <div className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-4">
              {tonightFeature.date} · {tonightFeature.time} · Doors {tonightFeature.doorsOpen}
            </div>

            {/* ── POSTER CARD ── */}
            <div className="flex gap-4 mb-5">
              {/* Poster placeholder — stylized art-house poster card */}
              <div className="flex-shrink-0 w-[88px] h-[132px] rounded overflow-hidden relative bg-[#1a1410] border border-[#2a2318]">
                <PosterGraphic title={tonightFeature.film} year={tonightFeature.year} />
              </div>

              {/* Metadata column */}
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                {/* Series badge */}
                <span className="inline-block text-[9px] bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 px-2 py-1 rounded font-bold uppercase tracking-wide mb-2 w-fit">
                  {tonightFeature.series}
                </span>

                {/* Title + year */}
                <div className="mb-1">
                  <h2 className="text-xl font-extrabold leading-tight">
                    {tonightFeature.film}
                  </h2>
                  <div className="text-gray-500 text-xs mt-0.5">
                    {tonightFeature.year} · Dir. {tonightFeature.director}
                  </div>
                </div>

                {/* IMDb-style score + MPAA rating */}
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  {/* Star score */}
                  <div className="flex items-center gap-1 bg-[#1e1a0e] border border-[#3a3010] rounded px-2 py-1">
                    <span className="text-amber-400 text-sm leading-none">★</span>
                    <span className="text-[#f5f0e8] font-extrabold text-xs leading-none">
                      {tonightFeature.imdbScore}
                    </span>
                    <span className="text-gray-600 text-[10px] leading-none">/10</span>
                  </div>
                  {/* MPAA rating */}
                  <span className="text-[10px] border border-gray-600 text-gray-400 px-1.5 py-0.5 rounded font-bold">
                    {tonightFeature.rating}
                  </span>
                  {/* Runtime */}
                  <span className="text-[10px] text-gray-500">{tonightFeature.runtime}</span>
                </div>

                {/* Genre */}
                <div className="text-[10px] text-gray-500">
                  {tonightFeature.genre}
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-[11px] text-gray-500 italic mb-3 leading-snug">
              &ldquo;{tonightFeature.tagline}&rdquo;
            </p>

            {/* Logline */}
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              {tonightFeature.logline}
            </p>

            {/* Badge row */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-[10px] bg-[#7c3aed]/15 text-[#c4b5fd] border border-[#7c3aed]/25 px-2 py-1 rounded font-bold">
                {tonightFeature.note}
              </span>
              <span className="text-[10px] text-gray-500 border border-gray-700 px-2 py-1 rounded">
                Programmed by Alexandra &amp; Kitrina
              </span>
            </div>

            {/* Spacer fills remaining height */}
            <div className="flex-1" />

            {/* Bottom: seats + CTAs */}
            <div>
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="text-gray-400">
                  Showroom floor · 14-ft screen
                </span>
                <span className="text-red-400 font-bold">
                  {tonightFeature.seats} spots left
                </span>
              </div>

              {/* CTA buttons */}
              <div className="flex gap-2">
                <a
                  href="#tonight"
                  className="flex-1 text-center bg-indigo-700 hover:bg-indigo-800 text-white font-extrabold py-3 rounded text-sm transition-colors"
                >
                  Reserve a Mattress Seat
                </a>
                <a
                  href="#evening-hours"
                  className="text-center border border-gray-700 hover:border-indigo-500 text-gray-400 hover:text-indigo-300 font-bold py-3 px-4 rounded text-sm transition-colors whitespace-nowrap"
                >
                  All Showtimes
                </a>
              </div>
              <div className="mt-2.5 text-[10px] text-gray-600 text-center">
                Free with mattress purchase · $10–15 suggested donation otherwise
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Stylized art-house poster card — no real poster image required
// Renders a cinematic placeholder in the 2:3 poster aspect ratio
function PosterGraphic({ title, year }: { title: string; year: number }) {
  // Derive a display title for the poster — truncate if needed
  const words = title.split(" ");
  const line1 = words.slice(0, 2).join(" ");
  const line2 = words.slice(2).join(" ");

  return (
    <svg
      viewBox="0 0 88 132"
      className="w-full h-full block"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="poster-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a1f0f" />
          <stop offset="60%" stopColor="#1a1208" />
          <stop offset="100%" stopColor="#0f0c06" />
        </linearGradient>
        <linearGradient id="poster-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0c040" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#f0c040" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="poster-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="88" height="132" fill="url(#poster-bg)" />

      {/* Filmic grain pattern */}
      {Array.from({ length: 18 }).map((_, i) => (
        <rect
          key={i}
          x={Math.floor((i * 13) % 88)}
          y={Math.floor((i * 17) % 132)}
          width="1"
          height="1"
          fill="#c8a060"
          opacity={0.04 + (i % 5) * 0.01}
        />
      ))}

      {/* Top amber glow — like a cinema marquee */}
      <rect x="0" y="0" width="88" height="50" fill="url(#poster-glow)" />

      {/* Center silhouette — abstract figure suggestion */}
      <ellipse cx="44" cy="52" rx="11" ry="13" fill="#c8a060" opacity="0.08" />
      <rect x="36" y="62" width="16" height="22" rx="2" fill="#c8a060" opacity="0.06" />

      {/* Horizontal rule above title area */}
      <line x1="8" y1="84" x2="80" y2="84" stroke="#8a7040" strokeWidth="0.5" opacity="0.4" />

      {/* Bottom shadow overlay */}
      <rect x="0" y="82" width="88" height="50" fill="url(#poster-shadow)" />

      {/* Film title — styled like a poster */}
      <text
        x="44"
        y="97"
        textAnchor="middle"
        fill="#f0e8d0"
        fontSize="9"
        fontFamily="Georgia, serif"
        fontWeight="bold"
        letterSpacing="0.5"
      >
        {line1}
      </text>
      {line2 && (
        <text
          x="44"
          y="108"
          textAnchor="middle"
          fill="#f0e8d0"
          fontSize="9"
          fontFamily="Georgia, serif"
          fontWeight="bold"
          letterSpacing="0.5"
        >
          {line2}
        </text>
      )}

      {/* Year — small below title */}
      <text
        x="44"
        y="120"
        textAnchor="middle"
        fill="#8a7040"
        fontSize="6"
        fontFamily="monospace"
        letterSpacing="1"
      >
        {year}
      </text>

      {/* Top: "TONIGHT" label */}
      <rect x="0" y="0" width="88" height="14" fill="#1a1208" opacity="0.6" />
      <text
        x="44"
        y="9.5"
        textAnchor="middle"
        fill="#8a6020"
        fontSize="5.5"
        fontFamily="monospace"
        fontWeight="bold"
        letterSpacing="2"
      >
        TONIGHT
      </text>
    </svg>
  );
}
