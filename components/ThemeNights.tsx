"use client";
import { useState } from "react";
import { THEME_NIGHTS } from "@/lib/content";

const icons: Record<string, string> = {
  breakup: "♥",
  insomnia: "◉",
  "bad-date": "◈",
  hometown: "◎",
  "bad-decisions": "⚡",
  "divorce-dad": "🚗",
  "horror-for-people": "■",
  "friday-night-machines": "⚙",
  "looks-good-on-a-mattress": "△",
  "double-features": "∙",
  "john-waters-night": "✻",
  "worth-your-attention": "○",
  "late-and-harder": "◑",
};

type ThemeAccent = {
  bg: string;
  border: string;
  heading: string;
  badge: string;
  badgeBg: string;
  tagBg: string;
  tagText: string;
  tagBorder: string;
  iconColor: string;
  cardActiveBg: string;
  divider: string;
};

const accentMap: Record<string, ThemeAccent> = {
  breakup: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    heading: "text-rose-700",
    badge: "text-rose-700",
    badgeBg: "bg-rose-100 border-rose-200",
    tagBg: "bg-rose-600",
    tagText: "text-white",
    tagBorder: "border-rose-600",
    iconColor: "text-rose-400",
    cardActiveBg: "bg-rose-50 border-rose-300",
    divider: "bg-rose-100",
  },
  insomnia: {
    bg: "bg-violet-50",
    border: "border-violet-200",
    heading: "text-violet-700",
    badge: "text-violet-700",
    badgeBg: "bg-violet-100 border-violet-200",
    tagBg: "bg-violet-600",
    tagText: "text-white",
    tagBorder: "border-violet-600",
    iconColor: "text-violet-400",
    cardActiveBg: "bg-violet-50 border-violet-300",
    divider: "bg-violet-100",
  },
  "bad-date": {
    bg: "bg-amber-50",
    border: "border-amber-200",
    heading: "text-amber-700",
    badge: "text-amber-700",
    badgeBg: "bg-amber-100 border-amber-200",
    tagBg: "bg-amber-500",
    tagText: "text-white",
    tagBorder: "border-amber-500",
    iconColor: "text-amber-400",
    cardActiveBg: "bg-amber-50 border-amber-300",
    divider: "bg-amber-100",
  },
  hometown: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    heading: "text-emerald-700",
    badge: "text-emerald-700",
    badgeBg: "bg-emerald-100 border-emerald-200",
    tagBg: "bg-emerald-600",
    tagText: "text-white",
    tagBorder: "border-emerald-600",
    iconColor: "text-emerald-400",
    cardActiveBg: "bg-emerald-50 border-emerald-300",
    divider: "bg-emerald-100",
  },
  "bad-decisions": {
    bg: "bg-orange-50",
    border: "border-orange-200",
    heading: "text-orange-700",
    badge: "text-orange-700",
    badgeBg: "bg-orange-100 border-orange-200",
    tagBg: "bg-orange-500",
    tagText: "text-white",
    tagBorder: "border-orange-500",
    iconColor: "text-orange-400",
    cardActiveBg: "bg-orange-50 border-orange-300",
    divider: "bg-orange-100",
  },
  "divorce-dad": {
    bg: "bg-sky-50",
    border: "border-sky-200",
    heading: "text-sky-700",
    badge: "text-sky-700",
    badgeBg: "bg-sky-100 border-sky-200",
    tagBg: "bg-sky-600",
    tagText: "text-white",
    tagBorder: "border-sky-600",
    iconColor: "text-sky-400",
    cardActiveBg: "bg-sky-50 border-sky-300",
    divider: "bg-sky-100",
  },
  "horror-for-people": {
    bg: "bg-red-50",
    border: "border-red-200",
    heading: "text-red-700",
    badge: "text-red-700",
    badgeBg: "bg-red-100 border-red-200",
    tagBg: "bg-red-600",
    tagText: "text-white",
    tagBorder: "border-red-600",
    iconColor: "text-red-400",
    cardActiveBg: "bg-red-50 border-red-300",
    divider: "bg-red-100",
  },
  "friday-night-machines": {
    bg: "bg-blue-50",
    border: "border-blue-200",
    heading: "text-blue-700",
    badge: "text-blue-700",
    badgeBg: "bg-blue-100 border-blue-200",
    tagBg: "bg-blue-600",
    tagText: "text-white",
    tagBorder: "border-blue-600",
    iconColor: "text-blue-400",
    cardActiveBg: "bg-blue-50 border-blue-300",
    divider: "bg-blue-100",
  },
  "looks-good-on-a-mattress": {
    bg: "bg-purple-50",
    border: "border-purple-200",
    heading: "text-purple-700",
    badge: "text-purple-700",
    badgeBg: "bg-purple-100 border-purple-200",
    tagBg: "bg-purple-600",
    tagText: "text-white",
    tagBorder: "border-purple-600",
    iconColor: "text-purple-400",
    cardActiveBg: "bg-purple-50 border-purple-300",
    divider: "bg-purple-100",
  },
  "double-features": {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    heading: "text-yellow-700",
    badge: "text-yellow-700",
    badgeBg: "bg-yellow-100 border-yellow-200",
    tagBg: "bg-yellow-500",
    tagText: "text-white",
    tagBorder: "border-yellow-500",
    iconColor: "text-yellow-500",
    cardActiveBg: "bg-yellow-50 border-yellow-300",
    divider: "bg-yellow-100",
  },
  "john-waters-night": {
    bg: "bg-pink-50",
    border: "border-pink-200",
    heading: "text-pink-700",
    badge: "text-pink-700",
    badgeBg: "bg-pink-100 border-pink-200",
    tagBg: "bg-pink-600",
    tagText: "text-white",
    tagBorder: "border-pink-600",
    iconColor: "text-pink-400",
    cardActiveBg: "bg-pink-50 border-pink-300",
    divider: "bg-pink-100",
  },
  "worth-your-attention": {
    bg: "bg-teal-50",
    border: "border-teal-200",
    heading: "text-teal-700",
    badge: "text-teal-700",
    badgeBg: "bg-teal-100 border-teal-200",
    tagBg: "bg-teal-600",
    tagText: "text-white",
    tagBorder: "border-teal-600",
    iconColor: "text-teal-400",
    cardActiveBg: "bg-teal-50 border-teal-300",
    divider: "bg-teal-100",
  },
  "late-and-harder": {
    bg: "bg-stone-100",
    border: "border-stone-300",
    heading: "text-stone-700",
    badge: "text-stone-700",
    badgeBg: "bg-stone-200 border-stone-300",
    tagBg: "bg-stone-700",
    tagText: "text-white",
    tagBorder: "border-stone-700",
    iconColor: "text-stone-500",
    cardActiveBg: "bg-stone-100 border-stone-400",
    divider: "bg-stone-200",
  },
};

export default function ThemeNights() {
  const [open, setOpen] = useState<string>("breakup");

  const active = THEME_NIGHTS.find((t) => t.slug === open) ?? THEME_NIGHTS[0];
  const colors = accentMap[active.slug] ?? accentMap["breakup"];

  return (
    <section id="theme-nights" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-sans tracking-widest uppercase text-stone-400 mb-3 block">
            The calendar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
            Theme Nights
          </h2>
          <p className="text-stone-500 font-sans text-sm max-w-lg leading-relaxed">
            Recurring series built around occasions. The mattresses stay the same. The program changes around them.
          </p>
        </div>

        {/* Theme selector grid — cards, not chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-10">
          {THEME_NIGHTS.map((night) => {
            const c = accentMap[night.slug] ?? accentMap["breakup"];
            const isActive = night.slug === open;
            return (
              <button
                key={night.slug}
                onClick={() => setOpen(night.slug)}
                className={`flex flex-col items-start gap-1.5 px-3 py-3 rounded-lg border text-left transition-all ${
                  isActive
                    ? `${c.cardActiveBg} shadow-sm`
                    : "bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50"
                }`}
              >
                <span className={`text-xl leading-none ${isActive ? c.iconColor : "text-stone-300"}`}>
                  {icons[night.slug]}
                </span>
                <span
                  className={`text-xs font-sans font-semibold leading-tight ${
                    isActive ? c.heading : "text-stone-600"
                  }`}
                >
                  {night.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active night detail card */}
        <div className={`rounded-2xl border-2 overflow-hidden transition-all ${colors.border} ${colors.bg}`}>
          <div className="grid lg:grid-cols-[1.25fr_1fr] divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white">

            {/* Left: narrative */}
            <div className="p-8 lg:p-10">
              {/* Series label + name */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-4xl leading-none ${colors.iconColor}`}>
                  {icons[active.slug]}
                </span>
                <div>
                  <div className="text-[10px] font-sans tracking-widest uppercase text-stone-400 mb-0.5">
                    Recurring series
                  </div>
                  <h3 className={`text-2xl font-bold leading-tight ${colors.heading}`}>
                    {active.name}
                  </h3>
                </div>
              </div>

              {/* Tagline — styled as a pull quote */}
              <blockquote className={`text-base font-semibold leading-snug mb-5 pl-4 border-l-4 ${colors.border} ${colors.heading}`}>
                &ldquo;{active.tagline}&rdquo;
              </blockquote>

              <p className="text-sm text-stone-600 font-sans leading-relaxed mb-8">
                {active.description}
              </p>

              {/* Schedule + concessions */}
              <div className="space-y-3">
                <div className="flex gap-3 items-start text-sm font-sans">
                  <span className={`text-[10px] font-sans tracking-widest uppercase font-bold w-20 flex-shrink-0 mt-0.5 ${colors.badge}`}>
                    Schedule
                  </span>
                  <span className="text-stone-600">{active.scheduledNote}</span>
                </div>
                <div className={`h-px w-full ${colors.divider}`} />
                <div className="flex gap-3 items-start text-sm font-sans">
                  <span className={`text-[10px] font-sans tracking-widest uppercase font-bold w-20 flex-shrink-0 mt-0.5 ${colors.badge}`}>
                    Counter
                  </span>
                  <span className="text-stone-600">{active.concessionNote}</span>
                </div>
              </div>
            </div>

            {/* Right: film list */}
            <div className="p-8 lg:p-10">
              <div className={`text-[10px] font-sans tracking-widest uppercase font-bold mb-5 ${colors.badge}`}>
                Films in this series
              </div>
              <ul className="space-y-1">
                {active.films.map((film, i) => (
                  <li
                    key={film}
                    className="flex items-center gap-3 py-2.5 border-b border-white/70 last:border-0"
                  >
                    <span className={`font-mono text-xs w-6 flex-shrink-0 font-bold ${colors.iconColor}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-stone-800">{film}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-sans text-stone-400 leading-relaxed">
                Films rotate within each series. Schedule posted weekly. Sign up for the newsletter to see the full season.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom footnote */}
        <p className="mt-6 text-xs font-sans text-stone-400 text-center">
          Theme nights use the same mattresses, same screen, same house rules. The occasion changes the program, not the venue.
        </p>
      </div>
    </section>
  );
}
