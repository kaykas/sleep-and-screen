"use client";
import { useState } from "react";

type Film = {
  title: string;
  year: number;
  director: string;
  runtime: string;
  rating: string;
  note?: string;
  sharedPick?: boolean;
};

type Series = {
  name: string;
  slug: string;
  description: string;
  accentClass: string;
  tabBg: string;
  tabText: string;
  tabBorder: string;
  headerBg: string;
  films: Film[];
};

const series: Series[] = [
  {
    name: "Friday Night Machines",
    slug: "friday-machines",
    description:
      "Robots, cyborgs, systems. Films where the technology is practical and the stakes are real. Good for a Friday.",
    accentClass: "text-blue-700",
    tabBg: "bg-blue-50 border-blue-300",
    tabText: "text-blue-700",
    tabBorder: "border-blue-300",
    headerBg: "bg-blue-50",
    films: [
      { title: "The Terminator", year: 1984, director: "James Cameron", runtime: "107 min", rating: "R", sharedPick: true },
      { title: "Terminator 2: Judgment Day", year: 1991, director: "James Cameron", runtime: "137 min", rating: "R", sharedPick: true, note: "Double feature option" },
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
    accentClass: "text-purple-700",
    tabBg: "bg-purple-50 border-purple-300",
    tabText: "text-purple-700",
    tabBorder: "border-purple-300",
    headerBg: "bg-purple-50",
    films: [
      { title: "Holy Motors", year: 2012, director: "Leos Carax", runtime: "115 min", rating: "NR", sharedPick: true },
      { title: "Under the Skin", year: 2013, director: "Jonathan Glazer", runtime: "108 min", rating: "R", sharedPick: true },
      { title: "Spring Breakers", year: 2012, director: "Harmony Korine", runtime: "94 min", rating: "R", sharedPick: true },
      { title: "Daisies", year: 1966, director: "Věra Chytilová", runtime: "74 min", rating: "NR", sharedPick: true },
      { title: "Daughters of Darkness", year: 1971, director: "Harry Kümel", runtime: "96 min", rating: "NR" },
      { title: "El Topo", year: 1970, director: "Alejandro Jodorowsky", runtime: "125 min", rating: "NR" },
    ],
  },
  {
    name: "Double Features",
    slug: "double-features",
    description:
      "Two films, one night. Announced together because they're better back to back. Short intermission. The counter stays open.",
    accentClass: "text-amber-700",
    tabBg: "bg-amber-50 border-amber-300",
    tabText: "text-amber-700",
    tabBorder: "border-amber-300",
    headerBg: "bg-amber-50",
    films: [
      { title: "Wayne's World", year: 1992, director: "Penelope Spheeris", runtime: "95 min", rating: "PG-13", sharedPick: true, note: "Double feature with Wayne's World 2" },
      { title: "Wayne's World 2", year: 1993, director: "Stephen Surjik", runtime: "95 min", rating: "PG-13", sharedPick: true, note: "Double feature — shown same night" },
      { title: "Bill & Ted's Excellent Adventure", year: 1989, director: "Stephen Herek", runtime: "90 min", rating: "PG" },
      { title: "Wet Hot American Summer", year: 2001, director: "David Wain", runtime: "97 min", rating: "R", sharedPick: true },
      { title: "The Terminator", year: 1984, director: "James Cameron", runtime: "107 min", rating: "R", note: "T1+T2 double feature, select nights" },
      { title: "Repo Man", year: 1984, director: "Alex Cox", runtime: "92 min", rating: "R" },
    ],
  },
  {
    name: "John Waters Night",
    slug: "waters-night",
    description:
      "John Waters is the only person who gets his own series. Serial Mom, Pink Flamingos, Polyester, Hairspray. One night per film. Crowd light on judgment.",
    accentClass: "text-pink-700",
    tabBg: "bg-pink-50 border-pink-300",
    tabText: "text-pink-700",
    tabBorder: "border-pink-300",
    headerBg: "bg-pink-50",
    films: [
      { title: "Serial Mom", year: 1994, director: "John Waters", runtime: "95 min", rating: "R", sharedPick: true },
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
    accentClass: "text-teal-700",
    tabBg: "bg-teal-50 border-teal-300",
    tabText: "text-teal-700",
    tabBorder: "border-teal-300",
    headerBg: "bg-teal-50",
    films: [
      { title: "The Eyes of Tammy Faye", year: 2021, director: "Michael Showalter", runtime: "126 min", rating: "PG-13", sharedPick: true },
      { title: "First Wives Club", year: 1996, director: "Hugh Wilson", runtime: "103 min", rating: "PG", sharedPick: true },
      { title: "Near Dark", year: 1987, director: "Kathryn Bigelow", runtime: "94 min", rating: "R" },
      { title: "The House of Yes", year: 1997, director: "Mark Waters", runtime: "85 min", rating: "R" },
      { title: "Smithereens", year: 1982, director: "Susan Seidelman", runtime: "93 min", rating: "R", sharedPick: true },
      { title: "Over the Edge", year: 1979, director: "Jonathan Kaplan", runtime: "95 min", rating: "PG" },
    ],
  },
  {
    name: "Horror for People Who Say They Don't Like Horror",
    slug: "horror-for-people",
    description:
      "Four films. All canonical, all legible, all genuinely scary. Not niche. Not gorehound. The ones people actually mean.",
    accentClass: "text-red-700",
    tabBg: "bg-red-50 border-red-300",
    tabText: "text-red-700",
    tabBorder: "border-red-300",
    headerBg: "bg-red-50",
    films: [
      { title: "The Texas Chain Saw Massacre", year: 1974, director: "Tobe Hooper", runtime: "83 min", rating: "R", note: "Still works. More than you expect." },
      { title: "The Silence of the Lambs", year: 1991, director: "Jonathan Demme", runtime: "118 min", rating: "R" },
      { title: "The Shining", year: 1980, director: "Stanley Kubrick", runtime: "146 min", rating: "R" },
      { title: "Get Out", year: 2017, director: "Jordan Peele", runtime: "104 min", rating: "R" },
    ],
  },
  {
    name: "Late & Harder",
    slug: "late-harder",
    description:
      "Films that ask more. Scheduled later in the week or at 10 PM on select nights. Not homework — just films that work better when you're willing to stay with them.",
    accentClass: "text-stone-700",
    tabBg: "bg-stone-100 border-stone-400",
    tabText: "text-stone-700",
    tabBorder: "border-stone-400",
    headerBg: "bg-stone-100",
    films: [
      { title: "Possession", year: 1981, director: "Andrzej Żuławski", runtime: "123 min", rating: "NR", sharedPick: true },
      { title: "Come and See", year: 1985, director: "Elem Klimov", runtime: "142 min", rating: "NR", sharedPick: true },
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
    <section id="programming" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="mb-10">
          <span className="text-xs font-sans tracking-widest uppercase text-stone-400 mb-3 block">
            Season 1 · Summer 2026
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">Programming</h2>
          <p className="text-stone-500 font-sans text-sm">
            36 films. 6 series. One screen. Showtime every night at 8&nbsp;PM.
          </p>
        </div>

        {/* Series tab selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {series.map((s) => (
            <button
              type="button"
              key={s.slug}
              onClick={() => setActiveSlug(s.slug)}
              className={`text-sm font-sans font-medium px-4 py-2 rounded-lg border transition-all leading-snug ${
                activeSlug === s.slug
                  ? `${s.tabBg} ${s.tabText} shadow-sm`
                  : "bg-white border-stone-200 text-stone-500 hover:border-stone-300 hover:text-stone-700"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Active series panel */}
        <div className="rounded-2xl border border-stone-200 overflow-hidden bg-white shadow-sm">

          {/* Series header */}
          <div className={`px-8 py-7 border-b border-stone-100 ${active.headerBg}`}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className={`text-xl font-bold mb-1.5 ${active.accentClass}`}>
                  {active.name}
                </h3>
                <p className="text-sm text-stone-600 font-sans max-w-xl leading-relaxed">
                  {active.description}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className={`text-2xl font-bold ${active.accentClass}`}>{active.films.length}</div>
                <div className="text-xs font-sans text-stone-400">films</div>
              </div>
            </div>
          </div>

          {/* Film list */}
          <div className="divide-y divide-stone-100">
            {active.films.map((film, i) => (
              <div
                key={i}
                className="flex flex-wrap items-center gap-x-4 gap-y-1 px-6 sm:px-8 py-4 hover:bg-stone-50 transition-colors group"
              >
                {/* Number */}
                <div className={`font-mono text-xs font-bold w-7 flex-shrink-0 ${active.accentClass} opacity-60`}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Title + meta */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-0.5">
                    <span className="font-bold text-stone-900 text-sm sm:text-base">
                      {film.title}
                    </span>
                    <span className="text-stone-400 font-sans text-sm">{film.year}</span>
                    {film.sharedPick && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-sans font-semibold bg-violet-100 text-violet-700 border border-violet-200 px-2 py-0.5 rounded-full">
                        ★ A+K Pick
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                    <span className="text-xs text-stone-400 font-sans">Dir. {film.director}</span>
                    {film.note && (
                      <span className="text-xs text-stone-400 font-sans italic">{film.note}</span>
                    )}
                  </div>
                </div>

                {/* Runtime + rating */}
                <div className="flex items-center gap-3 text-xs font-sans text-stone-400 flex-shrink-0">
                  <span>{film.runtime}</span>
                  <span className="border border-stone-200 px-1.5 py-0.5 rounded text-stone-500 font-medium">
                    {film.rating}
                  </span>
                  <span className="text-stone-300 group-hover:text-violet-500 transition-colors opacity-0 group-hover:opacity-100 hidden sm:inline">
                    Reserve →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend + footnote */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-sans text-stone-400">
          <span className="inline-flex items-center gap-1.5 bg-violet-100 text-violet-700 border border-violet-200 px-2.5 py-1 rounded-full font-semibold">
            ★ A+K Pick
          </span>
          <span>= Alexandra and Kitrina programmed it together</span>
        </div>
        <p className="mt-3 text-xs font-sans text-stone-400 text-center">
          Programming subject to change. All screenings are for cultural purposes. This is a concept venue; no licensed screenings are implied.
        </p>
      </div>
    </section>
  );
}
