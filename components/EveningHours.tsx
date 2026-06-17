"use client";
import { useState } from "react";
import { EVENING_HOURS_SUMMER_2026 } from "@/lib/content";

// Evening Hours — secondary section. Real store program, not arthouse cinema.
// Deadpan, factual. The mattresses don't move. The screen comes down.

const monthAccents: Record<string, string> = {
  "June 2026": "text-orange-600 bg-orange-50 border-orange-200",
  "July 2026": "text-blue-700 bg-blue-50 border-blue-200",
  "August 2026": "text-indigo-700 bg-indigo-50 border-indigo-200",
};

const monthBadge: Record<string, string> = {
  "June 2026": "bg-orange-100 text-orange-700 border-orange-300",
  "July 2026": "bg-blue-100 text-blue-700 border-blue-300",
  "August 2026": "bg-indigo-100 text-indigo-700 border-indigo-300",
};

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

export default function EveningHours() {
  const [activeMonth, setActiveMonth] = useState(EVENING_HOURS_SUMMER_2026[0].month);
  const active =
    EVENING_HOURS_SUMMER_2026.find((m) => m.month === activeMonth) ??
    EVENING_HOURS_SUMMER_2026[0];
  const accentClass = monthAccents[active.month] ?? monthAccents["June 2026"];
  const badgeClass = monthBadge[active.month] ?? monthBadge["June 2026"];

  return (
    <section id="evening-hours" className="py-14 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-8">
          {/* Explanation strip */}
          <div className="flex flex-wrap items-start gap-4 mb-6 bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">
                In-Store Program
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-1">
                Evening Hours
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                On Friday nights after 8:30 PM, the showroom doesn&apos;t change.
                The mattresses stay where they are. A 14-foot projection screen comes down.
                One film, watched from the actual showroom inventory.
                This is an in-store program, not a movie theater.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-right flex-shrink-0">
              <div className="text-xs text-gray-500">Fridays at 8 PM</div>
              <div className="text-xs text-gray-500">Doors 7 PM</div>
              <div className="text-xs text-gray-500">Free with mattress purchase</div>
              <div className="text-xs text-gray-400">otherwise by reservation</div>
            </div>
          </div>

          {/* Month tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {EVENING_HOURS_SUMMER_2026.map((month) => {
              const isActive = month.month === activeMonth;
              const cls = monthBadge[month.month] ?? monthBadge["June 2026"];
              return (
                <button
                  key={month.month}
                  onClick={() => setActiveMonth(month.month)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${
                    isActive
                      ? `${cls} shadow-sm`
                      : "bg-white border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                  }`}
                >
                  <span className="font-extrabold">{month.month.split(" ")[0]}</span>
                  <span className="text-xs font-normal ml-2 opacity-70">{month.theme}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active month */}
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
          {/* Month header */}
          <div className={`px-6 py-5 border-b border-gray-100 ${accentClass}`}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider mb-0.5 opacity-70">
                  {active.month}
                </div>
                <h3 className="text-lg font-extrabold mb-1">{active.theme}</h3>
                <p className="text-sm font-medium italic opacity-80">
                  &ldquo;{active.tagline}&rdquo;
                </p>
              </div>
              <div className="text-xs opacity-60 text-right">
                {active.nights.length} screenings this month
              </div>
            </div>
          </div>

          {/* Night list */}
          <div>
            {active.nights.map((night: Night, i: number) => (
              <div
                key={night.slug}
                className={`flex flex-wrap items-start gap-4 px-6 py-5 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors group ${
                  i === 0 ? "bg-gray-50/50" : ""
                }`}
              >
                {/* Date badge */}
                <div className="w-16 flex-shrink-0">
                  <div className={`text-xs font-extrabold ${accentClass} px-2 py-1 rounded text-center`}>
                    {night.date}
                  </div>
                </div>

                {/* Main info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span className="font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {night.title}
                    </span>
                    {night.year && (
                      <span className="text-gray-400 text-sm">{night.year}</span>
                    )}
                    {night.isDouble && (
                      <span className="text-[10px] bg-amber-100 text-amber-700 border border-amber-300 px-1.5 py-0.5 rounded font-bold uppercase tracking-wide">
                        Double Feature
                      </span>
                    )}
                    {night.sharedPick && (
                      <span className={`text-[10px] border px-1.5 py-0.5 rounded font-bold uppercase tracking-wide ${badgeClass}`}>
                        A+K Pick
                      </span>
                    )}
                  </div>
                  {night.director && (
                    <div className="text-xs text-gray-500 mb-1">Dir. {night.director}</div>
                  )}
                  {night.films && (
                    <div className="flex flex-wrap gap-1.5 mt-1 mb-1">
                      {night.films.map((f) => (
                        <span
                          key={f}
                          className="text-[10px] text-gray-600 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                  {night.note && (
                    <div className="text-xs text-gray-400 italic mt-0.5">{night.note}</div>
                  )}
                </div>

                {/* Meta + reserve */}
                <div className="flex items-center gap-3 text-xs text-gray-400 flex-shrink-0">
                  <span>{night.runtime}</span>
                  <span className="border border-gray-200 px-1.5 py-0.5 rounded text-gray-500">
                    {night.rating}
                  </span>
                  <button
                    type="button"
                    className="bg-[#1d4ed8] hover:bg-blue-800 text-white font-bold px-3 py-1.5 rounded text-[11px] transition-colors opacity-0 group-hover:opacity-100"
                  >
                    Reserve →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer notes */}
        <div className="mt-5 flex flex-wrap items-start justify-between gap-4 text-xs text-gray-400">
          <p>
            Reservations open Monday AM for that Friday&apos;s screening.
            Mattress customers get priority booking access.
          </p>
          <p className="text-gray-300">
            Programming subject to change. This is a concept/prototype schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
