"use client";
import { useState } from "react";
import { THEME_NIGHTS } from "@/lib/content";

const icons: Record<string, string> = {
  breakup: "♥",
  insomnia: "◉",
  "bad-date": "◈",
  hometown: "◎",
  "bad-decisions": "⚡",
};

const accentColors: Record<string, { border: string; text: string; tag: string; tagBg: string }> = {
  breakup: {
    border: "border-[#f87171]/25",
    text: "text-[#f87171]",
    tag: "text-[#f87171]",
    tagBg: "bg-[#f87171]/10 border-[#f87171]/20",
  },
  insomnia: {
    border: "border-[#a78bfa]/25",
    text: "text-[#a78bfa]",
    tag: "text-[#a78bfa]",
    tagBg: "bg-[#7c3aed]/10 border-[#7c3aed]/20",
  },
  "bad-date": {
    border: "border-[#fbbf24]/25",
    text: "text-[#fbbf24]",
    tag: "text-[#fbbf24]",
    tagBg: "bg-[#d97706]/10 border-[#d97706]/20",
  },
  hometown: {
    border: "border-[#34d399]/25",
    text: "text-[#34d399]",
    tag: "text-[#34d399]",
    tagBg: "bg-[#34d399]/10 border-[#34d399]/20",
  },
  "bad-decisions": {
    border: "border-[#fb923c]/25",
    text: "text-[#fb923c]",
    tag: "text-[#fb923c]",
    tagBg: "bg-[#fb923c]/10 border-[#fb923c]/20",
  },
};

export default function ThemeNights() {
  const [open, setOpen] = useState<string>("breakup");

  const active = THEME_NIGHTS.find((t) => t.slug === open) ?? THEME_NIGHTS[0];
  const colors = accentColors[active.slug] ?? accentColors["breakup"];

  return (
    <section id="theme-nights" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-3 block">
            The calendar
          </span>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                Theme Nights
              </h2>
              <p className="text-[#9ca3af] font-sans text-sm max-w-lg leading-relaxed">
                Recurring series built around occasions. The mattresses stay the same. The program changes around them.
              </p>
            </div>
          </div>
        </div>

        {/* Tab row */}
        <div className="flex flex-wrap gap-2 mb-10">
          {THEME_NIGHTS.map((night) => {
            const c = accentColors[night.slug] ?? accentColors["breakup"];
            const isActive = night.slug === open;
            return (
              <button
                key={night.slug}
                onClick={() => setOpen(night.slug)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded text-sm font-sans transition-colors border ${
                  isActive
                    ? `${c.tagBg} ${c.text} ${c.border}`
                    : "border-[#1f1f1f] text-[#6b7280] hover:text-[#9ca3af] hover:border-[#2d2d2d]"
                }`}
              >
                <span className="text-base leading-none">{icons[night.slug]}</span>
                {night.name}
              </button>
            );
          })}
        </div>

        {/* Active night detail */}
        <div className={`bg-[#111] border rounded-xl overflow-hidden transition-colors ${colors.border}`}>
          <div className="grid lg:grid-cols-[1.2fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]">
            {/* Left: narrative */}
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-3xl ${colors.text}`}>{icons[active.slug]}</span>
                <div>
                  <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280]">
                    Recurring series
                  </div>
                  <h3 className={`text-2xl font-bold ${colors.text}`}>{active.name}</h3>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg font-medium text-[#f5f0e8] mb-5 leading-snug">
                &ldquo;{active.tagline}&rdquo;
              </p>

              <p className="text-sm text-[#9ca3af] font-sans leading-relaxed mb-8">
                {active.description}
              </p>

              {/* Schedule + concessions */}
              <div className="space-y-3">
                <div className="flex gap-3 text-sm font-sans">
                  <span className="text-[#4b5563] w-24 flex-shrink-0">Schedule</span>
                  <span className="text-[#9ca3af]">{active.scheduledNote}</span>
                </div>
                <div className="flex gap-3 text-sm font-sans">
                  <span className="text-[#4b5563] w-24 flex-shrink-0">Counter</span>
                  <span className="text-[#9ca3af]">{active.concessionNote}</span>
                </div>
              </div>
            </div>

            {/* Right: film list */}
            <div className="p-8 lg:p-10">
              <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-5">
                Films in this series
              </div>
              <ul className="space-y-3">
                {active.films.map((film, i) => (
                  <li
                    key={film}
                    className="flex items-center gap-3 py-2.5 border-b border-[#131313] last:border-0"
                  >
                    <span className="text-[#2d2d2d] font-sans text-xs w-5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-[#f5f0e8]">{film}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs font-sans text-[#4b5563] leading-relaxed">
                Films rotate within each series. Schedule posted weekly. Sign up for the newsletter to see the full season.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom footnote */}
        <p className="mt-6 text-xs font-sans text-[#2d2d2d] text-center">
          Theme nights use the same mattresses, same screen, same house rules. The occasion changes the program, not the venue.
        </p>
      </div>
    </section>
  );
}
