"use client";
import { useState } from "react";
import { THEME_NIGHTS } from "@/lib/content";

// Bigger, friendlier emoji for each theme
const icons: Record<string, string> = {
  breakup: "💔",
  insomnia: "🌙",
  "bad-date": "😬",
  hometown: "🏘️",
  "bad-decisions": "🎲",
  "divorce-dad": "🚗",
  "horror-for-people": "😨",
  "friday-night-machines": "🤖",
  "looks-good-on-a-mattress": "🛏️",
  "double-features": "🎬",
  "john-waters-night": "💅",
  "worth-your-attention": "✨",
  "late-and-harder": "🕯️",
};

type ThemeAccent = {
  pill: string;
  pillActive: string;
  cardBg: string;
  cardBorder: string;
  heading: string;
  taglineColor: string;
  quoteBar: string;
  badge: string;
  filmNum: string;
  divider: string;
  footerText: string;
};

const accentMap: Record<string, ThemeAccent> = {
  breakup: {
    pill: "bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200",
    pillActive: "bg-rose-500 text-white border-rose-500 shadow-rose-200",
    cardBg: "bg-gradient-to-br from-rose-50 to-pink-50",
    cardBorder: "border-rose-200",
    heading: "text-rose-600",
    taglineColor: "text-rose-700",
    quoteBar: "border-rose-300",
    badge: "text-rose-500",
    filmNum: "text-rose-400",
    divider: "bg-rose-100",
    footerText: "text-rose-400",
  },
  insomnia: {
    pill: "bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200",
    pillActive: "bg-violet-600 text-white border-violet-600 shadow-violet-200",
    cardBg: "bg-gradient-to-br from-violet-50 to-indigo-50",
    cardBorder: "border-violet-200",
    heading: "text-violet-700",
    taglineColor: "text-violet-800",
    quoteBar: "border-violet-300",
    badge: "text-violet-500",
    filmNum: "text-violet-400",
    divider: "bg-violet-100",
    footerText: "text-violet-400",
  },
  "bad-date": {
    pill: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200",
    pillActive: "bg-amber-500 text-white border-amber-500 shadow-amber-200",
    cardBg: "bg-gradient-to-br from-amber-50 to-yellow-50",
    cardBorder: "border-amber-200",
    heading: "text-amber-700",
    taglineColor: "text-amber-800",
    quoteBar: "border-amber-300",
    badge: "text-amber-600",
    filmNum: "text-amber-400",
    divider: "bg-amber-100",
    footerText: "text-amber-400",
  },
  hometown: {
    pill: "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200",
    pillActive: "bg-emerald-600 text-white border-emerald-600 shadow-emerald-200",
    cardBg: "bg-gradient-to-br from-emerald-50 to-teal-50",
    cardBorder: "border-emerald-200",
    heading: "text-emerald-700",
    taglineColor: "text-emerald-800",
    quoteBar: "border-emerald-300",
    badge: "text-emerald-600",
    filmNum: "text-emerald-400",
    divider: "bg-emerald-100",
    footerText: "text-emerald-400",
  },
  "bad-decisions": {
    pill: "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200",
    pillActive: "bg-orange-500 text-white border-orange-500 shadow-orange-200",
    cardBg: "bg-gradient-to-br from-orange-50 to-amber-50",
    cardBorder: "border-orange-200",
    heading: "text-orange-700",
    taglineColor: "text-orange-800",
    quoteBar: "border-orange-300",
    badge: "text-orange-600",
    filmNum: "text-orange-400",
    divider: "bg-orange-100",
    footerText: "text-orange-400",
  },
  "divorce-dad": {
    pill: "bg-sky-100 text-sky-700 border-sky-200 hover:bg-sky-200",
    pillActive: "bg-sky-500 text-white border-sky-500 shadow-sky-200",
    cardBg: "bg-gradient-to-br from-sky-50 to-blue-50",
    cardBorder: "border-sky-200",
    heading: "text-sky-700",
    taglineColor: "text-sky-800",
    quoteBar: "border-sky-300",
    badge: "text-sky-600",
    filmNum: "text-sky-400",
    divider: "bg-sky-100",
    footerText: "text-sky-400",
  },
  "horror-for-people": {
    pill: "bg-red-100 text-red-700 border-red-200 hover:bg-red-200",
    pillActive: "bg-red-600 text-white border-red-600 shadow-red-200",
    cardBg: "bg-gradient-to-br from-red-50 to-rose-50",
    cardBorder: "border-red-200",
    heading: "text-red-700",
    taglineColor: "text-red-800",
    quoteBar: "border-red-300",
    badge: "text-red-600",
    filmNum: "text-red-400",
    divider: "bg-red-100",
    footerText: "text-red-400",
  },
  "friday-night-machines": {
    pill: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200",
    pillActive: "bg-blue-600 text-white border-blue-600 shadow-blue-200",
    cardBg: "bg-gradient-to-br from-blue-50 to-indigo-50",
    cardBorder: "border-blue-200",
    heading: "text-blue-700",
    taglineColor: "text-blue-800",
    quoteBar: "border-blue-300",
    badge: "text-blue-600",
    filmNum: "text-blue-400",
    divider: "bg-blue-100",
    footerText: "text-blue-400",
  },
  "looks-good-on-a-mattress": {
    pill: "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200",
    pillActive: "bg-purple-600 text-white border-purple-600 shadow-purple-200",
    cardBg: "bg-gradient-to-br from-purple-50 to-fuchsia-50",
    cardBorder: "border-purple-200",
    heading: "text-purple-700",
    taglineColor: "text-purple-800",
    quoteBar: "border-purple-300",
    badge: "text-purple-600",
    filmNum: "text-purple-400",
    divider: "bg-purple-100",
    footerText: "text-purple-400",
  },
  "double-features": {
    pill: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200",
    pillActive: "bg-yellow-500 text-white border-yellow-500 shadow-yellow-200",
    cardBg: "bg-gradient-to-br from-yellow-50 to-orange-50",
    cardBorder: "border-yellow-200",
    heading: "text-yellow-700",
    taglineColor: "text-yellow-800",
    quoteBar: "border-yellow-300",
    badge: "text-yellow-600",
    filmNum: "text-yellow-500",
    divider: "bg-yellow-100",
    footerText: "text-yellow-500",
  },
  "john-waters-night": {
    pill: "bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200",
    pillActive: "bg-pink-500 text-white border-pink-500 shadow-pink-200",
    cardBg: "bg-gradient-to-br from-pink-50 to-fuchsia-50",
    cardBorder: "border-pink-200",
    heading: "text-pink-700",
    taglineColor: "text-pink-800",
    quoteBar: "border-pink-300",
    badge: "text-pink-600",
    filmNum: "text-pink-400",
    divider: "bg-pink-100",
    footerText: "text-pink-400",
  },
  "worth-your-attention": {
    pill: "bg-teal-100 text-teal-700 border-teal-200 hover:bg-teal-200",
    pillActive: "bg-teal-600 text-white border-teal-600 shadow-teal-200",
    cardBg: "bg-gradient-to-br from-teal-50 to-cyan-50",
    cardBorder: "border-teal-200",
    heading: "text-teal-700",
    taglineColor: "text-teal-800",
    quoteBar: "border-teal-300",
    badge: "text-teal-600",
    filmNum: "text-teal-400",
    divider: "bg-teal-100",
    footerText: "text-teal-400",
  },
  "late-and-harder": {
    pill: "bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200",
    pillActive: "bg-stone-700 text-white border-stone-700 shadow-stone-200",
    cardBg: "bg-gradient-to-br from-stone-50 to-slate-50",
    cardBorder: "border-stone-200",
    heading: "text-stone-700",
    taglineColor: "text-stone-800",
    quoteBar: "border-stone-300",
    badge: "text-stone-600",
    filmNum: "text-stone-400",
    divider: "bg-stone-100",
    footerText: "text-stone-400",
  },
};

export default function ThemeNights() {
  const [open, setOpen] = useState<string>("breakup");

  const active = THEME_NIGHTS.find((t) => t.slug === open) ?? THEME_NIGHTS[0];
  const colors = accentMap[active.slug] ?? accentMap["breakup"];

  return (
    <section id="theme-nights" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-xs font-sans tracking-widest uppercase text-stone-400 mb-3 block">
            The calendar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
            Theme Nights
          </h2>
          <p className="text-stone-500 font-sans text-sm max-w-md mx-auto leading-relaxed">
            Recurring series built around occasions. The mattresses stay the same. The program changes around them.
          </p>
        </div>

        {/* Theme selector — colorful pill chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {THEME_NIGHTS.map((night) => {
            const c = accentMap[night.slug] ?? accentMap["breakup"];
            const isActive = night.slug === open;
            return (
              <button
                key={night.slug}
                onClick={() => setOpen(night.slug)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? `${c.pillActive} shadow-md scale-105`
                    : `${c.pill}`
                }`}
              >
                <span className="text-base leading-none">{icons[night.slug]}</span>
                {night.name}
              </button>
            );
          })}
        </div>

        {/* Active night detail card */}
        <div className={`rounded-3xl border-2 overflow-hidden transition-all duration-200 ${colors.cardBorder} ${colors.cardBg} shadow-sm`}>
          <div className="grid lg:grid-cols-[1.3fr_1fr] divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/60">

            {/* Left: narrative */}
            <div className="p-8 lg:p-10">
              {/* Big emoji + series label */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl leading-none drop-shadow-sm">{icons[active.slug]}</span>
                <div>
                  <div className="text-[10px] font-sans tracking-widest uppercase text-stone-400 mb-0.5">
                    Recurring series
                  </div>
                  <h3 className={`text-2xl font-bold leading-tight ${colors.heading}`}>
                    {active.name}
                  </h3>
                </div>
              </div>

              {/* Tagline — prominent pull quote */}
              <div className={`text-lg font-bold leading-snug mb-5 pl-4 border-l-4 italic ${colors.quoteBar} ${colors.taglineColor}`}>
                &ldquo;{active.tagline}&rdquo;
              </div>

              <p className="text-sm text-stone-600 font-sans leading-relaxed mb-8">
                {active.description}
              </p>

              {/* Schedule + concessions */}
              <div className="space-y-3 bg-white/60 rounded-2xl p-4 border border-white">
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
                    className="flex items-center gap-3 py-2.5 border-b border-white/60 last:border-0 group"
                  >
                    <span className={`font-mono text-xs w-6 flex-shrink-0 font-bold ${colors.filmNum}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-stone-800 group-hover:text-stone-950 transition-colors">{film}</span>
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
