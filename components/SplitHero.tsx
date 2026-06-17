// SplitHero — homepage main hero
// Left panel: mattress sale billboard — retail-first, high impact
// Right panel: Tonight's Feature / Evening Hours — secondary but real
// The split communicates the dual identity clearly without either side overwhelming the other.

import { SITE } from "@/lib/content";

// Tonight's feature — hardcoded for now, would be data-driven in production
const tonightFeature = {
  series: "John Waters Night",
  film: "Serial Mom",
  year: 1994,
  director: "John Waters",
  runtime: "95 min",
  rating: "R",
  note: "A+K Pick",
  seats: 5,
  date: "Fri Jun 20",
  time: "8:00 PM",
  doorsOpen: "7:00 PM",
};

export default function SplitHero() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] min-h-[420px]">

          {/* ── LEFT: Mattress Sale Billboard ── */}
          <div className="px-6 md:px-10 py-12 md:py-16 flex flex-col justify-center border-r border-gray-100 relative overflow-hidden">
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

            <div className="relative">
              {/* Event label */}
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-block bg-[#dc2626] text-white text-[10px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded">
                  Summer Mattress Event
                </span>
                <span className="text-sm text-gray-400">Ends Aug 31</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-gray-900 leading-[1.02] mb-5">
                Up to{" "}
                <span className="text-[#dc2626]">40% Off</span>
                <br />
                Every Mattress
                <br />
                <span className="text-[#1d4ed8]">on the Floor</span>
              </h1>

              {/* Sub */}
              <p className="text-base text-gray-600 max-w-md leading-relaxed mb-6">
                Innerspring, memory foam, and hybrid — all on the showroom floor at{" "}
                <strong className="text-gray-800">{SITE.address.street}</strong>. Walk in, no appointment.
                Try any mattress. No pressure, no commission.
              </p>

              {/* Trust micro-strip */}
              <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-8 text-xs text-gray-500">
                {[
                  "120-Night Free Trial",
                  "Free Delivery & Setup",
                  "0% Financing — 12 Mo",
                  "Price Match Guarantee",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span className="text-green-600 font-extrabold">✓</span>
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#showroom"
                  className="bg-[#dc2626] hover:bg-red-700 text-white font-extrabold px-8 py-3.5 rounded text-sm transition-colors shadow-sm"
                >
                  Shop the Sale
                </a>
                <a
                  href="#showroom"
                  className="border border-gray-300 hover:border-[#1d4ed8] hover:text-[#1d4ed8] text-gray-700 font-semibold px-7 py-3.5 rounded text-sm transition-colors"
                >
                  View All Mattresses
                </a>
              </div>

              {/* Rating bar */}
              <div className="mt-8 flex items-center gap-3 text-xs text-gray-400">
                <span className="flex text-amber-400 gap-0.5 text-sm" aria-label="4.8 stars">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </span>
                <span className="font-semibold text-gray-600">4.8 Google Reviews</span>
                <span className="text-gray-300">·</span>
                <span>12 models on the floor</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Tonight's Feature / Evening Hours ── */}
          <div className="bg-[#0f0d0b] text-[#f5f0e8] flex flex-col justify-between p-8 lg:p-10">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-6">
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

              <div className="mb-3">
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-1.5">
                  {tonightFeature.date} · {tonightFeature.time}
                </div>
                <h2 className="text-2xl font-extrabold leading-tight mb-1">
                  {tonightFeature.film}
                </h2>
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-gray-400 text-sm">{tonightFeature.year}</span>
                  <span className="text-gray-600">·</span>
                  <span className="text-sm text-gray-400">Dir. {tonightFeature.director}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-[10px] bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 px-2 py-1 rounded font-bold uppercase tracking-wide">
                  {tonightFeature.series}
                </span>
                <span className="text-[10px] bg-[#7c3aed]/15 text-[#c4b5fd] border border-[#7c3aed]/25 px-2 py-1 rounded font-bold">
                  {tonightFeature.note}
                </span>
                <span className="text-[10px] text-gray-500 border border-gray-700 px-2 py-1 rounded">
                  {tonightFeature.rating}
                </span>
                <span className="text-[10px] text-gray-500 border border-gray-700 px-2 py-1 rounded">
                  {tonightFeature.runtime}
                </span>
              </div>

              {/* Screen graphic — minimal but visual */}
              <div className="rounded-lg overflow-hidden border border-gray-800 mb-5">
                <ScreenGraphic />
              </div>
            </div>

            {/* Bottom: seats + reserve */}
            <div>
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="text-gray-400">
                  Doors {tonightFeature.doorsOpen} · Showroom floor
                </span>
                <span className="text-red-400 font-bold">
                  {tonightFeature.seats} spots left
                </span>
              </div>
              <a
                href="#tonight"
                className="block w-full text-center bg-indigo-700 hover:bg-indigo-800 text-white font-extrabold py-3 rounded text-sm transition-colors"
              >
                Reserve a Spot →
              </a>
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

// Minimal screen graphic — abstract film frame, dark mode aesthetic
function ScreenGraphic() {
  return (
    <svg
      viewBox="0 0 320 130"
      className="w-full h-auto block"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sh-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8e0cc" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#d0c8b0" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="sh-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1512" />
          <stop offset="100%" stopColor="#120f0a" />
        </linearGradient>
        <linearGradient id="sh-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8e0cc" stopOpacity="0.12" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      {/* Room */}
      <rect width="320" height="130" fill="url(#sh-floor)" />

      {/* Screen on back wall */}
      <rect x="20" y="8" width="280" height="52" fill="url(#sh-screen)" stroke="#2a2520" strokeWidth="1.5" />
      {/* Screen content — abstract warm light, 2 silhouette zones */}
      <rect x="22" y="10" width="140" height="48" fill="#c8a860" opacity="0.07" />
      <rect x="164" y="10" width="134" height="48" fill="#7060a8" opacity="0.09" />
      {/* Screen grain */}
      {[30,70,110,150,190,230,270].map((x, i) => (
        <line key={i} x1={x} y1="10" x2={x} y2="58" stroke="#e8dcc8" strokeWidth="0.3" opacity="0.06" />
      ))}
      {/* Screen frame border */}
      <rect x="20" y="8" width="280" height="52" fill="none" stroke="#3a3528" strokeWidth="1" />

      {/* Projector beam */}
      <polygon points="160,75 140,62 180,62" fill="#f0e8d0" opacity="0.04" />
      <polygon points="160,75 100,10 220,10" fill="#f0e8d0" opacity="0.02" />

      {/* Mattresses on the floor — 4 visible, facing screen */}
      {[16, 90, 164, 238].map((x, i) => (
        <g key={i}>
          <rect
            x={x} y={78 + i * 1.5}
            width={68} height={20}
            rx="2"
            fill="#1e1a14"
            stroke="#2a2518"
            strokeWidth="0.8"
          />
          <rect
            x={x + 3} y={80 + i * 1.5}
            width="16" height="9"
            rx="1"
            fill="#252018"
          />
          {/* Screen light catch on front beds */}
          {i <= 1 && (
            <rect
              x={x} y={78 + i * 1.5}
              width={68} height={3}
              rx="1"
              fill="#e8dcc8"
              opacity="0.04"
            />
          )}
          {/* Price card still on mattress */}
          <rect
            x={x + 44} y={80 + i * 1.5}
            width="20" height="8"
            rx="0.5"
            fill="#141008"
            stroke="#2a2518"
            strokeWidth="0.4"
          />
          <rect
            x={x + 46} y={82 + i * 1.5}
            width="16" height="1.5"
            fill="#a08050"
            opacity="0.3"
          />
        </g>
      ))}

      {/* Aisle amber strip lights */}
      {[76, 100, 124].map((y, i) => (
        <g key={i}>
          <rect x="2" y={y} width="3" height="10" rx="1" fill="#d97706" opacity="0.3" />
          <rect x="315" y={y} width="3" height="10" rx="1" fill="#d97706" opacity="0.25" />
        </g>
      ))}

      {/* "EAST BAY MATTRESS" on screen border — tiny, deadpan */}
      <text x="160" y="68" textAnchor="middle" fill="#3a3428" fontSize="4" fontFamily="monospace" opacity="0.5">
        EAST BAY MATTRESS · EVENING HOURS
      </text>
    </svg>
  );
}
