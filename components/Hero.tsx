// Hero — SUMMER BLOCKBUSTER MATTRESS EVENT
// Mattress sale first. Movie benefit second. Deadpan because real.

import { SITE } from "@/lib/content";

const trustBadges = [
  { icon: "★", value: "4.8/5",     label: "Google Reviews",   color: "text-amber-600" },
  { icon: "↺", value: "120 Nights", label: "Free Trial",       color: "text-blue-600"  },
  { icon: "✓", value: "Free",       label: "Delivery & Setup", color: "text-green-700" },
  { icon: "◈", value: "0%",         label: "12-Mo Financing",  color: "text-blue-700"  },
];

const categories = [
  { label: "Innerspring",      sub: "Classic support, great value",    from: "From $499", color: "bg-blue-50 border-blue-200 hover:border-blue-400",     text: "text-blue-800"   },
  { label: "Memory Foam",      sub: "Contouring pressure relief",       from: "From $649", color: "bg-indigo-50 border-indigo-200 hover:border-indigo-400", text: "text-indigo-800", },
  { label: "Hybrid",           sub: "Coils + foam, best of both",       from: "From $899", color: "bg-slate-50 border-slate-200 hover:border-slate-400",   text: "text-slate-800", badge: "Best Seller" },
  { label: "Adjustable Bases", sub: "Head & foot incline, zero-G",      from: "From $799", color: "bg-gray-50 border-gray-200 hover:border-gray-400",      text: "text-gray-800"   },
];

export default function Hero() {
  return (
    <section className="pt-[74px] md:pt-[156px] bg-white">

      {/* ── EVENT HERO BANNER ── */}
      <div className="bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left: headline block */}
            <div>
              {/* Event badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#dc2626] text-white text-[11px] font-extrabold tracking-[0.18em] uppercase px-3 py-1.5 rounded">
                  Ends Aug 31 &mdash; Up to 40% Off
                </span>
              </div>

              {/* Primary headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight mb-4 uppercase">
                Summer Blockbuster<br />
                <span className="text-blue-200">Mattress Event</span>
              </h1>

              {/* The movie offer — strong, secondary */}
              <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 mb-6">
                <p className="text-yellow-300 text-xs font-extrabold tracking-widest uppercase mb-1">
                  King Size Bonus
                </p>
                <p className="text-white text-lg font-extrabold leading-snug">
                  Buy a King Size Mattress,<br />
                  Get 1 Year of Unlimited Movies.
                </p>
                <p className="text-blue-200 text-xs mt-1.5 leading-relaxed">
                  Every Friday Evening Hours screening free for 12 months.
                  The mattress stays in the store. On Fridays the screen comes down.
                  You watch from it.
                </p>
              </div>

              {/* Store facts */}
              <p className="text-blue-100 text-sm mb-1">
                {SITE.name} · {SITE.address.street}, {SITE.address.city}.
              </p>
              <p className="text-blue-200 text-xs mb-7">
                12 models on the floor · no commission · 120-night trial · free delivery
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#showroom"
                  className="bg-[#dc2626] hover:bg-red-700 text-white font-extrabold px-8 py-4 rounded text-base transition-colors"
                >
                  Shop the Event
                </a>
                <a
                  href="#evening-hours"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded text-base border border-white/30 transition-colors"
                >
                  See Tonight&apos;s Showing
                </a>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                <a
                  href="#showroom"
                  className="text-blue-200 hover:text-white text-sm font-semibold underline underline-offset-2 transition-colors"
                >
                  Shop Mattresses →
                </a>
                <span className="text-blue-400 text-sm">·</span>
                <a
                  href="#financing"
                  className="text-blue-200 hover:text-white text-sm font-semibold underline underline-offset-2 transition-colors"
                >
                  0% Financing →
                </a>
              </div>

              {/* Deadpan movie note */}
              <p className="mt-5 text-blue-300 text-xs leading-relaxed">
                After 8:30 PM on Fridays, the same mattresses face the screen.{" "}
                <a href="#evening-hours" className="underline hover:text-white transition-colors">
                  Evening Hours →
                </a>
              </p>
            </div>

            {/* Right: offer grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  eyebrow: "Sale price",
                  headline: "From $499",
                  sub: "Queen innerspring, in stock, take home today",
                  icon: "🛏",
                  bg: "bg-white/10 border-white/20",
                },
                {
                  eyebrow: "Risk-free",
                  headline: "120-Night Trial",
                  sub: "Doesn't work? We pick it up. Full refund.",
                  icon: "↺",
                  bg: "bg-white/8 border-white/15",
                },
                {
                  eyebrow: "Included",
                  headline: "Free Delivery",
                  sub: "Setup included. Old mattress removal $40.",
                  icon: "🚚",
                  bg: "bg-white/8 border-white/15",
                },
                {
                  eyebrow: "King bonus",
                  headline: "1 Year Movies",
                  sub: "Buy King, get 52 Friday screenings free. Deadpan. Real.",
                  icon: "▶",
                  bg: "bg-yellow-400/10 border-yellow-400/25",
                  highlight: true,
                },
              ].map((b) => (
                <div key={b.headline} className={`${b.bg} border rounded-xl p-5`}>
                  <div className="text-2xl mb-2">{b.icon}</div>
                  <div className={`text-[10px] font-extrabold uppercase tracking-widest mb-0.5 ${b.highlight ? "text-yellow-300" : "text-blue-300"}`}>
                    {b.eyebrow}
                  </div>
                  <div className={`font-extrabold text-base leading-tight mb-1 ${b.highlight ? "text-yellow-200" : "text-white"}`}>
                    {b.headline}
                  </div>
                  <div className="text-blue-200 text-xs leading-relaxed">{b.sub}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── TRUST BADGE BAR ── */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-3">
                <span className={`text-2xl font-black ${b.color}`}>{b.icon}</span>
                <div>
                  <div className={`text-base font-extrabold ${b.color}`}>{b.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{b.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SHOP BY CATEGORY ── */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900">Shop by Category</h2>
          <span className="text-xs text-gray-400 font-medium">
            All 12 models on the floor · walk in, no appointment
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href="#showroom"
              className={`${cat.color} border-2 rounded-xl p-5 transition-colors block relative`}
            >
              {cat.badge && (
                <span className="absolute top-3 right-3 bg-[#dc2626] text-white text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded">
                  {cat.badge}
                </span>
              )}
              <div className={`text-base font-extrabold ${cat.text} mb-1 pr-16`}>{cat.label}</div>
              <div className="text-xs text-gray-500 mb-3 leading-snug">{cat.sub}</div>
              <div className="text-sm font-bold text-gray-700">{cat.from}</div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
