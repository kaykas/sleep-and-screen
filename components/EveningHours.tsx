"use client";
import { useState } from "react";
import { EVENING_HOURS_SUMMER_2026, SECOND_VOICE } from "@/lib/content";

const monthColors: Record<string, { accent: string; border: string; tag: string; tagBg: string }> = {
  "June 2026": {
    accent: "text-[#fb923c]",
    border: "border-[#fb923c]/25",
    tag: "text-[#fb923c]",
    tagBg: "bg-[#fb923c]/10 border-[#fb923c]/20",
  },
  "July 2026": {
    accent: "text-[#38bdf8]",
    border: "border-[#38bdf8]/25",
    tag: "text-[#38bdf8]",
    tagBg: "bg-[#0ea5e9]/10 border-[#0ea5e9]/20",
  },
  "August 2026": {
    accent: "text-[#a78bfa]",
    border: "border-[#7c3aed]/25",
    tag: "text-[#a78bfa]",
    tagBg: "bg-[#7c3aed]/10 border-[#7c3aed]/20",
  },
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
  kitrinas?: boolean;
};

export default function EveningHours() {
  const [activeMonth, setActiveMonth] = useState(EVENING_HOURS_SUMMER_2026[0].month);
  const active = EVENING_HOURS_SUMMER_2026.find((m) => m.month === activeMonth) ?? EVENING_HOURS_SUMMER_2026[0];
  const colors = monthColors[active.month] ?? monthColors["June 2026"];

  return (
    <section id="evening-hours" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-3 block">
            Programming calendar
          </span>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                Evening Hours
              </h2>
              <p className="text-[#9ca3af] font-sans text-sm max-w-lg leading-relaxed">
                Summer 2026 programming. One film per week, Friday nights. Doors at 7 PM, film at 8 PM sharp. Reservations open rolling on Mondays.
              </p>
            </div>
            <div className="text-xs font-sans text-[#4b5563] text-right leading-relaxed">
              June — August 2026<br />
              Fridays at 8 PM
            </div>
          </div>
        </div>

        {/* Month tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {EVENING_HOURS_SUMMER_2026.map((month) => {
            const c = monthColors[month.month] ?? monthColors["June 2026"];
            const isActive = month.month === activeMonth;
            return (
              <button
                key={month.month}
                onClick={() => setActiveMonth(month.month)}
                className={`flex flex-col items-start px-5 py-3 rounded-lg text-sm font-sans transition-colors border ${
                  isActive
                    ? `${c.tagBg} ${c.tag} ${c.border}`
                    : "border-[#1f1f1f] text-[#6b7280] hover:text-[#9ca3af] hover:border-[#2d2d2d]"
                }`}
              >
                <span className="font-bold text-base leading-none mb-0.5">
                  {month.month.split(" ")[0]}
                </span>
                <span className="text-[10px] tracking-wide opacity-70 uppercase">
                  {month.theme}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active month */}
        <div className={`bg-[#111] border rounded-xl overflow-hidden ${colors.border}`}>
          {/* Month header */}
          <div className="p-8 border-b border-[#1a1a1a]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className={`text-xs font-sans tracking-widest uppercase mb-1 ${colors.accent}`}>
                  {active.month}
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${colors.accent}`}>
                  {active.theme}
                </h3>
                <p className="text-base font-medium text-[#f5f0e8] italic mb-3">
                  &ldquo;{active.tagline}&rdquo;
                </p>
                <p className="text-sm text-[#9ca3af] font-sans max-w-xl leading-relaxed">
                  {active.description}
                </p>
              </div>
              <div className="text-xs font-sans text-[#4b5563] text-right">
                <div>{active.nights.length} nights</div>
                <div className="text-[#2d2d2d]">this month</div>
              </div>
            </div>
          </div>

          {/* Night list */}
          <div>
            {active.nights.map((night: Night, i: number) => (
              <div
                key={night.slug}
                className="flex flex-wrap items-start gap-4 px-8 py-6 border-b border-[#131313] last:border-b-0 hover:bg-[#0d0d0d] transition-colors group"
              >
                {/* Date badge */}
                <div className={`text-xs font-sans font-bold w-16 flex-shrink-0 pt-0.5 ${colors.accent}`}>
                  {night.date}
                </div>

                {/* Main info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-[#f5f0e8] group-hover:text-white transition-colors">
                      {night.title}
                    </span>
                    {night.year && (
                      <span className="text-[#6b7280] font-sans text-sm">{night.year}</span>
                    )}
                    {night.isDouble && (
                      <span className="text-[10px] font-sans bg-[#d97706]/15 text-[#fbbf24] border border-[#d97706]/20 px-1.5 py-0.5 rounded">
                        Double Feature
                      </span>
                    )}
                    {night.kitrinas && (
                      <span className={`text-[10px] font-sans px-1.5 py-0.5 rounded border ${colors.tagBg} ${colors.tag}`}>
                        {SECOND_VOICE.firstName}&apos;s Pick
                      </span>
                    )}
                  </div>
                  {night.director && (
                    <div className="text-xs text-[#6b7280] font-sans mb-1.5">
                      Dir. {night.director}
                    </div>
                  )}
                  {night.films && (
                    <div className="flex flex-wrap gap-2 mt-1 mb-1.5">
                      {night.films.map((f) => (
                        <span key={f} className="text-[10px] font-sans text-[#9ca3af] bg-[#1a1a1a] border border-[#2d2d2d] px-2 py-0.5 rounded">
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                  {night.note && (
                    <div className="text-xs font-sans text-[#6b7280] italic mt-0.5">
                      {night.note}
                    </div>
                  )}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs font-sans text-[#6b7280] flex-shrink-0 pt-0.5">
                  <span>{night.runtime}</span>
                  <span className="border border-[#2d2d2d] px-1.5 py-0.5 rounded">
                    {night.rating}
                  </span>
                  <button
                    type="button"
                    className="text-[#6b7280] hover:text-[#a78bfa] transition-colors opacity-0 group-hover:opacity-100"
                  >
                    Reserve →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer notes */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-sans text-[#4b5563]">
            Reservations open rolling Monday AM for that week&apos;s Friday screening. Newsletter subscribers get 48-hour advance access.
          </p>
          <p className="text-xs font-sans text-[#2d2d2d]">
            Programming subject to change. This is a concept/prototype schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
