"use client";
import { useState } from "react";
import { CURATOR, SECOND_VOICE } from "@/lib/content";

type Film = {
  title: string;
  year: number;
  director: string;
  runtime: string;
  rating: string;
  note?: string;
  alexandras?: boolean;
  kitrinas?: boolean;
};

type Series = {
  name: string;
  slug: string;
  description: string;
  color: string;
  films: Film[];
};

const series: Series[] = [
  {
    name: "Friday Night Machines",
    slug: "friday-machines",
    description:
      "Robots, cyborgs, systems. Films where the technology is practical and the stakes are real. Good for a Friday.",
    color: "text-[#60a5fa] border-[#1d4ed8]/40",
    films: [
      { title: "The Terminator", year: 1984, director: "James Cameron", runtime: "107 min", rating: "R", alexandras: true },
      { title: "Terminator 2: Judgment Day", year: 1991, director: "James Cameron", runtime: "137 min", rating: "R", alexandras: true, note: "Double feature option" },
      { title: "RoboCop", year: 1987, director: "Paul Verhoeven", runtime: "102 min", rating: "R" },
      { title: "Videodrome", year: 1983, director: "David Cronenberg", runtime: "87 min", rating: "R" },
      { title: "Hardware", year: 1990, director: "Richard Stanley", runtime: "94 min", rating: "R" },
      { title: "Dark Star", year: 1974, director: "John Carpenter", runtime: "83 min", rating: "G" },
    ],
  },
  {
    name: "Looks Good on a Mattress",
    slug: "looks-good",
    description:
      "Visually ambitious films that reward watching on a big screen lying down. Strong cinematography, strong soundtracks, things happening in the frame.",
    color: "text-[#a78bfa] border-[#7c3aed]/40",
    films: [
      { title: "Holy Motors", year: 2012, director: "Leos Carax", runtime: "115 min", rating: "NR", kitrinas: true },
      { title: "Under the Skin", year: 2013, director: "Jonathan Glazer", runtime: "108 min", rating: "R", kitrinas: true },
      { title: "Spring Breakers", year: 2012, director: "Harmony Korine", runtime: "94 min", rating: "R", alexandras: true },
      { title: "Daisies", year: 1966, director: "Věra Chytilová", runtime: "74 min", rating: "NR", kitrinas: true },
      { title: "Daughters of Darkness", year: 1971, director: "Harry Kümel", runtime: "96 min", rating: "NR" },
      { title: "El Topo", year: 1970, director: "Alejandro Jodorowsky", runtime: "125 min", rating: "NR" },
    ],
  },
  {
    name: "Double Features",
    slug: "double-features",
    description:
      "Two films, one night. Announced together because they're better back to back. Short intermission. The counter stays open.",
    color: "text-[#fbbf24] border-[#92400e]/40",
    films: [
      { title: "Wayne's World", year: 1992, director: "Penelope Spheeris", runtime: "95 min", rating: "PG-13", kitrinas: true, note: "Double feature with Wayne's World 2" },
      { title: "Wayne's World 2", year: 1993, director: "Stephen Surjik", runtime: "95 min", rating: "PG-13", kitrinas: true, note: "Double feature — shown same night" },
      { title: "Bill & Ted's Excellent Adventure", year: 1989, director: "Stephen Herek", runtime: "90 min", rating: "PG" },
      { title: "Wet Hot American Summer", year: 2001, director: "David Wain", runtime: "97 min", rating: "R", kitrinas: true },
      { title: "The Terminator", year: 1984, director: "James Cameron", runtime: "107 min", rating: "R", note: "T1+T2 double feature, select nights" },
      { title: "Repo Man", year: 1984, director: "Alex Cox", runtime: "92 min", rating: "R" },
    ],
  },
  {
    name: "John Waters Night",
    slug: "waters-night",
    description:
      "John Waters is the only person who gets his own series. Serial Mom, Pink Flamingos, Polyester, Hairspray. One night per film. Crowd light on judgment.",
    color: "text-[#f9a8d4] border-[#9d174d]/40",
    films: [
      { title: "Serial Mom", year: 1994, director: "John Waters", runtime: "95 min", rating: "R", alexandras: true },
      { title: "Pink Flamingos", year: 1972, director: "John Waters", runtime: "93 min", rating: "NR", note: "Adults 18+ only" },
      { title: "Polyester", year: 1981, director: "John Waters", runtime: "86 min", rating: "R", note: "Odorama scratch card provided" },
      { title: "Hairspray", year: 1988, director: "John Waters", runtime: "92 min", rating: "PG" },
      { title: "Female Trouble", year: 1974, director: "John Waters", runtime: "89 min", rating: "NR" },
      { title: "Cry-Baby", year: 1990, director: "John Waters", runtime: "85 min", rating: "PG-13" },
    ],
  },
  {
    name: "Worth Your Attention",
    slug: "worth-attention",
    description:
      "Films from the last ten years that are good and didn't get the run they deserved, or that people still haven't seen.",
    color: "text-[#34d399] border-[#065f46]/40",
    films: [
      { title: "The Eyes of Tammy Faye", year: 2021, director: "Michael Showalter", runtime: "126 min", rating: "PG-13", kitrinas: true },
      { title: "First Wives Club", year: 1996, director: "Hugh Wilson", runtime: "103 min", rating: "PG", alexandras: true },
      { title: "Near Dark", year: 1987, director: "Kathryn Bigelow", runtime: "94 min", rating: "R" },
      { title: "The House of Yes", year: 1997, director: "Mark Waters", runtime: "85 min", rating: "R" },
      { title: "Smithereens", year: 1982, director: "Susan Seidelman", runtime: "93 min", rating: "R", alexandras: true },
      { title: "Over the Edge", year: 1979, director: "Jonathan Kaplan", runtime: "95 min", rating: "PG" },
    ],
  },
  {
    name: "Late & Harder",
    slug: "late-harder",
    description:
      "Films that ask more. Scheduled later in the week or at 10 PM on select nights. Not homework — just films that work better when you're willing to stay with them.",
    color: "text-[#f87171] border-[#7f1d1d]/40",
    films: [
      { title: "Possession", year: 1981, director: "Andrzej Żuławski", runtime: "123 min", rating: "NR", kitrinas: true },
      { title: "Come and See", year: 1985, director: "Elem Klimov", runtime: "142 min", rating: "NR", kitrinas: true },
      { title: "Eraserhead", year: 1977, director: "David Lynch", runtime: "89 min", rating: "NR" },
      { title: "Safe", year: 1995, director: "Todd Haynes", runtime: "119 min", rating: "R" },
      { title: "The Holy Mountain", year: 1973, director: "Alejandro Jodorowsky", runtime: "114 min", rating: "NR" },
      { title: "Funny Games", year: 1997, director: "Michael Haneke", runtime: "108 min", rating: "NR" },
    ],
  },
];

export default function Programming() {
  const [activeSlug, setActiveSlug] = useState<string>(series[0].slug);
  const active = series.find((s) => s.slug === activeSlug) ?? series[0];

  return (
    <section id="programming" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-3 block">
            Season 1 · Summer 2026
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Programming</h2>
          <p className="text-[#9ca3af] font-sans text-sm">
            36 films. 6 series. One screen. Showtime every night at 8 PM.
          </p>
        </div>

        {/* Series tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {series.map((s) => (
            <button
              type="button"
              key={s.slug}
              onClick={() => setActiveSlug(s.slug)}
              className={`text-xs font-sans px-4 py-2 rounded-full border transition-all ${
                activeSlug === s.slug
                  ? `${s.color} bg-[#111]`
                  : "border-[#1f1f1f] text-[#6b7280] hover:border-[#2d2d2d] hover:text-[#9ca3af]"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Active series */}
        <div className="bg-[#111] border border-[#1f1f1f] rounded-xl overflow-hidden">
          {/* Series header */}
          <div className="p-8 border-b border-[#1a1a1a]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${active.color.split(" ")[0]}`}>
                  {active.name}
                </h3>
                <p className="text-sm text-[#9ca3af] font-sans max-w-lg leading-relaxed">
                  {active.description}
                </p>
              </div>
              <div className="text-xs font-sans text-[#6b7280] text-right">
                <div>{active.films.length} films</div>
                <div className="text-[#4b5563]">in this series</div>
              </div>
            </div>
          </div>

          {/* Film table */}
          <div>
            {active.films.map((film, i) => (
              <div
                key={i}
                className="flex flex-wrap items-center gap-4 px-8 py-5 border-b border-[#131313] last:border-b-0 hover:bg-[#0d0d0d] transition-colors group"
              >
                <div className="text-xs font-sans text-[#2d2d2d] w-6 flex-shrink-0 font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold group-hover:text-[#a78bfa] transition-colors">
                      {film.title}
                    </span>
                    <span className="text-[#6b7280] font-sans text-sm">{film.year}</span>
                    {film.alexandras && (
                      <span className="text-[10px] font-sans bg-[#7c3aed]/15 text-[#a78bfa] border border-[#7c3aed]/20 px-1.5 py-0.5 rounded">
                        {CURATOR.firstName}&apos;s Pick
                      </span>
                    )}
                    {film.kitrinas && (
                      <span className="text-[10px] font-sans bg-[#d97706]/15 text-[#f59e0b] border border-[#d97706]/20 px-1.5 py-0.5 rounded">
                        {SECOND_VOICE.firstName}&apos;s Pick
                      </span>
                    )}
                    {film.note && (
                      <span className="text-[10px] font-sans text-[#6b7280] italic">
                        {film.note}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#6b7280] font-sans">Dir. {film.director}</div>
                </div>

                <div className="flex items-center gap-4 text-xs font-sans text-[#6b7280] flex-shrink-0">
                  <span>{film.runtime}</span>
                  <span className="border border-[#2d2d2d] px-1.5 py-0.5 rounded">
                    {film.rating}
                  </span>
                  <button
                    type="button"
                    className="text-[#6b7280] hover:text-[#7c3aed] transition-colors opacity-0 group-hover:opacity-100"
                  >
                    Reserve →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-[#4b5563]">
          <span className="text-[#a78bfa] bg-[#7c3aed]/10 px-1.5 py-0.5 rounded">
            {CURATOR.firstName}&apos;s Pick
          </span>
          <span className="text-[#9ca3af]">= {CURATOR.firstName} asked for it</span>
          <span className="mx-2 text-[#2d2d2d]">|</span>
          <span className="text-[#f59e0b] bg-[#d97706]/10 px-1.5 py-0.5 rounded">
            {SECOND_VOICE.firstName}&apos;s Pick
          </span>
          <span className="text-[#9ca3af]">= {SECOND_VOICE.fullName} asked for it</span>
        </div>
        <p className="mt-4 text-xs font-sans text-[#4b5563] text-center">
          Programming subject to change. All screenings are for cultural purposes. This is a concept venue; no licensed screenings are implied.
        </p>
      </div>
    </section>
  );
}
