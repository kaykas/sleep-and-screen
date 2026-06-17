// RetailBanner — Mattress Firm-style reassurance strip
// Bright commercial retail UX: financing, delivery, trial, sale cues
// This is the primary storefront identity; Evening Hours is secondary.

import { SITE } from "@/lib/content";

const badges = [
  {
    icon: "✦",
    headline: "0% Financing",
    sub: "12-month no-interest on orders $599+",
    color: "text-[#22c55e]",
    bgColor: "bg-[#22c55e]/8",
    borderColor: "border-[#22c55e]/20",
  },
  {
    icon: "⟳",
    headline: "120-Night Trial",
    sub: "Sleep on it. Return it free if it isn't right.",
    color: "text-[#38bdf8]",
    bgColor: "bg-[#38bdf8]/8",
    borderColor: "border-[#38bdf8]/20",
  },
  {
    icon: "↗",
    headline: "Free Delivery",
    sub: "Concord, Walnut Creek, Pleasant Hill + more",
    color: "text-[#fbbf24]",
    bgColor: "bg-[#fbbf24]/8",
    borderColor: "border-[#fbbf24]/20",
  },
  {
    icon: "◈",
    headline: "Price Match",
    sub: "We'll match any local competitor's price",
    color: "text-[#f87171]",
    bgColor: "bg-[#f87171]/8",
    borderColor: "border-[#f87171]/20",
  },
];

export default function RetailBanner() {
  return (
    <section className="bg-[#111] border-y border-[#1f1f1f]">
      {/* Top sale strip */}
      <div className="bg-[#7c3aed] py-2.5 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white font-sans font-semibold text-sm tracking-wide">
            Summer Sale — Up to 40% off select models through August 31
          </p>
          <a
            href="#showroom"
            className="text-white/80 hover:text-white font-sans text-xs underline underline-offset-2 transition-colors flex-shrink-0"
          >
            Shop now →
          </a>
        </div>
      </div>

      {/* Reassurance badges */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((b) => (
            <div
              key={b.headline}
              className={`flex items-start gap-3 rounded-lg px-4 py-4 border ${b.bgColor} ${b.borderColor}`}
            >
              <span className={`text-xl flex-shrink-0 mt-0.5 ${b.color}`}>{b.icon}</span>
              <div>
                <div className={`text-sm font-bold font-sans leading-tight ${b.color}`}>
                  {b.headline}
                </div>
                <div className="text-xs font-sans text-[#9ca3af] mt-0.5 leading-relaxed">
                  {b.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-strip: address + hours */}
        <div className="mt-5 pt-4 border-t border-[#1a1a1a] flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-[#6b7280]">
          <div className="flex flex-wrap gap-4">
            <span>
              <span className="text-[#9ca3af] font-medium">{SITE.name}</span>
              {" · "}
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </span>
            <span className="hidden sm:inline text-[#2d2d2d]">|</span>
            <span>Showroom open Mon–Sun 10 AM–6 PM · Evening screenings Fri 8 PM</span>
          </div>
          <span className="text-[#6b7280]">{SITE.phone}</span>
        </div>
      </div>
    </section>
  );
}
