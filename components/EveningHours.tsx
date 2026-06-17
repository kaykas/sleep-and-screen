"use client";
import { useState } from "react";
import { EVENING_HOURS_SUMMER_2026 } from "@/lib/content";

// Evening Hours — Summer 2026 calendar.
// Cinema showtimes module aesthetic: month tabs, schedule cards, clear hierarchy.

type Night = {
  slug: string;
  date: string;
  title: string;
  year: number | null;
  director: string | null;
  runtime: string;
  rating: string;
  note?: string;
  isDouble?: boolean;
  films?: string[];
  sharedPick?: boolean;
};

type MonthData = {
  month: string;
  theme: string;
  tagline: string;
  nights: Night[];
};

// Month color tokens
const MONTH_COLORS: Record<string, {
  tabActive: string;
  tabInactive: string;
  accent: string;
  dateBg: string;
  dateText: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
}> = {
  "June 2026": {
    tabActive: "bg-orange-500 text-white border-orange-500 shadow-md",
    tabInactive: "bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-700",
    accent: "text-orange-600",
    dateBg: "bg-orange-50 border-orange-200",
    dateText: "text-orange-700",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    badgeBorder: "border-orange-200",
  },
  "July 2026": {
    tabActive: "bg-blue-700 text-white border-blue-700 shadow-md",
    tabInactive: "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-700",
    accent: "text-blue-700",
    dateBg: "bg-blue-50 border-blue-200",
    dateText: "text-blue-700",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    badgeBorder: "border-blue-200",
  },
  "August 2026": {
    tabActive: "bg-indigo-700 text-white border-indigo-700 shadow-md",
    tabInactive: "bg-white text-gray-600 border-gray-200 hover:border-indigo-400 hover:text-indigo-700",
    accent: "text-indigo-700",
    dateBg: "bg-indigo-50 border-indigo-200",
    dateText: "text-indigo-700",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    badgeBorder: "border-indigo-200",
  },
};

function getColors(month: string) {
  return MONTH_COLORS[month] ?? MONTH_COLORS["June 2026"];
}

export default function EveningHours() {
  const [activeMonth, setActiveMonth] = useState(EVENING_HOURS_SUMMER_2026[0].month);
  const active = (EVENING_HOURS_SUMMER_2026.find((m) => m.month === activeMonth) ??
    EVENING_HOURS_SUMMER_2026[0]) as MonthData;
  const colors = getColors(active.month);

  return (
    <section id="evening-hours" className="py-16 md:py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* ── Section header ── */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
            In-Store Program · Fridays 8 PM
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Evening Hours
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            After close, the showroom doesn&apos;t change. A projection screen comes down.
            One film, watched from the actual mattress inventory.
            Doors 7 PM · Free with mattress purchase · $10–15 donation otherwise.
          </p>
        </div>

        {/* ── Month tabs ── */}
        <div className="flex flex-wrap gap-3 mb-8">
          {(EVENING_HOURS_SUMMER_2026 as MonthData[]).map((month) => {
            const isActive = month.month === activeMonth;
            const c = getColors(month.month);
            const [monthName] = month.month.split(" ");
            return (
              <button
                key={month.month}
                type="button"
                onClick={() => setActiveMonth(month.month)}
                className={`flex flex-col items-start px-5 py-3 rounded-xl border-2 transition-all font-bold text-sm min-w-[140px] ${
                  isActive ? c.tabActive : c.tabInactive
                }`}
              >
                <span className="text-base font-extrabold leading-tight">{monthName}</span>
                <span className={`text-xs font-medium leading-snug mt-0.5 ${isActive ? "opacity-90" : "opacity-60"}`}>
                  {month.theme}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Two-column layout: schedule left, sidebar right ── */}
        <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-start">

          {/* ── Left: Schedule cards ── */}
          <div>
            {/* Month header */}
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
              <div>
                <h3 className={`text-xl font-extrabold ${colors.accent}`}>{active.theme}</h3>
                <p className="text-sm text-gray-500 italic mt-0.5">&ldquo;{active.tagline}&rdquo;</p>
              </div>
              <span className="text-xs text-gray-400 font-medium">
                {active.nights.length} screenings
              </span>
            </div>

            {/* Schedule rows */}
            <div className="space-y-3">
              {active.nights.map((night: Night) => (
                <div
                  key={night.slug}
                  className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm rounded-xl transition-all overflow-hidden"
                >
                  <div className="flex items-start gap-0 sm:gap-0">

                    {/* Date column — fixed left strip */}
                    <div className={`flex-shrink-0 w-20 flex flex-col items-center justify-center py-5 px-2 border-r border-gray-100 ${colors.dateBg}`}>
                      <span className={`text-[11px] font-extrabold uppercase tracking-wider ${colors.dateText}`}>
                        {night.date.split(" ")[0]}
                      </span>
                      <span className={`text-xl font-black leading-none mt-0.5 ${colors.dateText}`}>
                        {night.date.split(" ")[1] ?? ""}
                      </span>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 min-w-0 px-5 py-4">
                      {/* Title row */}
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="text-base font-extrabold text-gray-900 leading-tight">
                          {night.title}
                        </h4>
                        {night.year && (
                          <span className="text-xs text-gray-400">{night.year}</span>
                        )}
                        {night.isDouble && (
                          <span className="text-[10px] bg-amber-100 text-amber-700 border border-amber-300 px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
                            Double Feature
                          </span>
                        )}
                        {night.sharedPick && (
                          <span className={`text-[10px] border px-2 py-0.5 rounded-full font-bold uppercase tracking-wide ${colors.badgeBg} ${colors.badgeText} ${colors.badgeBorder}`}>
                            A+K Pick
                          </span>
                        )}
                      </div>

                      {/* Director */}
                      {night.director && (
                        <div className="text-xs text-gray-500 mb-2">
                          Dir. {night.director}
                        </div>
                      )}

                      {/* Double feature film list */}
                      {night.films && (
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {night.films.map((f) => (
                            <span
                              key={f}
                              className="text-[11px] text-gray-600 bg-gray-100 border border-gray-200 px-2.5 py-0.5 rounded-full font-medium"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Runtime · Rating · Note */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                        <span className="font-medium">{night.runtime}</span>
                        <span className="border border-gray-200 px-1.5 py-0.5 rounded text-gray-500 font-bold text-[10px]">
                          {night.rating}
                        </span>
                        {night.note && (
                          <span className="italic text-gray-400">{night.note}</span>
                        )}
                      </div>
                    </div>

                    {/* Right: Reserve CTA */}
                    <div className="flex-shrink-0 flex flex-col items-end justify-center gap-2 px-4 py-4 border-l border-gray-100">
                      <a
                        href="#tonight"
                        className="bg-[#1d4ed8] hover:bg-blue-800 text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors whitespace-nowrap block"
                      >
                        Reserve →
                      </a>
                      <span className="text-[10px] text-gray-400 text-right">8 PM</span>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Full calendar link */}
            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
              <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
                Reservations open Monday AM for that Friday&apos;s screening.
                Mattress customers get priority access.
              </p>
              <a
                href="#tonight"
                className="text-sm font-bold text-[#1d4ed8] hover:underline underline-offset-2 whitespace-nowrap flex-shrink-0 ml-4"
              >
                This week&apos;s screenings →
              </a>
            </div>
          </div>

          {/* ── Right sidebar: program info ── */}
          <div className="space-y-4 lg:sticky lg:top-24">

            {/* Program card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                How it works
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  { icon: "🛏", label: "Watch on real mattresses", sub: "Showroom inventory, as-is" },
                  { icon: "🎞", label: "Fridays at 8 PM", sub: "Doors open 7 PM" },
                  { icon: "📍", label: "San Pablo Ave, Berkeley", sub: "Street parking available" },
                  { icon: "✓", label: "Free with mattress purchase", sub: "$10–15 suggested donation" },
                  { icon: "🎟", label: "12 spots per night", sub: "Reserve by Thursday" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-2.5">
                    <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-800 text-xs">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.sub}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* A+K Pick legend */}
            <div className={`border rounded-xl p-4 ${colors.badgeBg} ${colors.badgeBorder}`}>
              <div className={`text-[10px] font-extrabold uppercase tracking-widest mb-1.5 ${colors.badgeText}`}>
                A+K Pick
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Films marked A+K Pick are programmed jointly by Alexandra &amp; Kitrina.
                Shared picks, not separate lanes.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
