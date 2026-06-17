"use client";
import { useState } from "react";
import { CURATOR } from "@/lib/content";

type Film = {
  title: string;
  year: number;
  director: string;
  runtime: string;
  rating: string;
  note?: string;
  alexandras?: boolean;
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
    name: "Damaged Americana",
    slug: "damaged-americana",
    description:
      "Films about the American suburbs, small towns, and landscapes that don't get written about. The wrong side of the American dream.",
    color: "text-[#fbbf24] border-[#92400e]/40",
    films: [
      { title: "Gummo", year: 1997, director: "Harmony Korine", runtime: "89 min", rating: "NR", alexandras: true },
      { title: "Kids", year: 1995, director: "Larry Clark", runtime: "91 min", rating: "NR" },
      { title: "Smithereens", year: 1982, director: "Susan Seidelman", runtime: "93 min", rating: "R", alexandras: true },
      { title: "River's Edge", year: 1986, director: "Tim Hunter", runtime: "99 min", rating: "R" },
      { title: "Over the Edge", year: 1979, director: "Jonathan Kaplan", runtime: "95 min", rating: "PG" },
      { title: "Slacker", year: 1990, director: "Richard Linklater", runtime: "97 min", rating: "R" },
    ],
  },
  {
    name: "Machine Nights",
    slug: "machine-nights",
    description:
      "Technology, systems, and bodies. Films where the machine wins, doesn't win, or becomes unclear.",
    color: "text-[#60a5fa] border-[#1d4ed8]/40",
    films: [
      { title: "The Terminator", year: 1984, director: "James Cameron", runtime: "107 min", rating: "R", alexandras: true },
      { title: "Videodrome", year: 1983, director: "David Cronenberg", runtime: "87 min", rating: "R" },
      { title: "Robocop", year: 1987, director: "Paul Verhoeven", runtime: "102 min", rating: "R" },
      { title: "Tron", year: 1982, director: "Steven Lisberger", runtime: "96 min", rating: "PG" },
      { title: "Dark Star", year: 1974, director: "John Carpenter", runtime: "83 min", rating: "G" },
      { title: "Hardware", year: 1990, director: "Richard Stanley", runtime: "94 min", rating: "R" },
    ],
  },
  {
    name: "Body Trouble",
    slug: "body-trouble",
    description:
      "The body as threat, mystery, failure, or transformation. Not exactly horror. Not exactly not.",
    color: "text-[#f87171] border-[#7f1d1d]/40",
    films: [
      { title: "Possession", year: 1981, director: "Andrzej Żuławski", runtime: "123 min", rating: "NR" },
      { title: "The Fly", year: 1986, director: "David Cronenberg", runtime: "96 min", rating: "R" },
      { title: "Naked Lunch", year: 1991, director: "David Cronenberg", runtime: "115 min", rating: "R" },
      { title: "Tusk", year: 1980, director: "Alexandro Jodorowsky", runtime: "100 min", rating: "R", note: "Jodorowsky short programs" },
      { title: "Society", year: 1989, director: "Brian Yuzna", runtime: "99 min", rating: "R" },
      { title: "Shivers", year: 1975, director: "David Cronenberg", runtime: "87 min", rating: "R" },
    ],
  },
  {
    name: "Midnight Standards",
    slug: "midnight-standards",
    description:
      "The canon of late-night cinema. Films that became famous by being watched repeatedly after midnight by people who couldn't sleep.",
    color: "text-[#a78bfa] border-[#7c3aed]/40",
    films: [
      { title: "Eraserhead", year: 1977, director: "David Lynch", runtime: "89 min", rating: "NR" },
      { title: "El Topo", year: 1970, director: "Alejandro Jodorowsky", runtime: "125 min", rating: "NR" },
      { title: "Pink Flamingos", year: 1972, director: "John Waters", runtime: "93 min", rating: "NR", note: "Adults 18+ only" },
      { title: "The Rocky Horror Picture Show", year: 1975, director: "Jim Sharman", runtime: "98 min", rating: "R", note: "No audience participation kits. No rice." },
      { title: "Repo Man", year: 1984, director: "Alex Cox", runtime: "92 min", rating: "R" },
      { title: "Liquid Sky", year: 1982, director: "Slava Tsukerman", runtime: "112 min", rating: "NR" },
    ],
  },
  {
    name: "Female Directors / Female Monsters",
    slug: "female-directors",
    description:
      "Work by women directors, or films featuring women in roles that are not supportive, nurturing, or decorative.",
    color: "text-[#34d399] border-[#065f46]/40",
    films: [
      { title: "Daughters of Darkness", year: 1971, director: "Harry Kümel", runtime: "96 min", rating: "NR", note: "Note: male director" },
      { title: "Near Dark", year: 1987, director: "Kathryn Bigelow", runtime: "94 min", rating: "R" },
      { title: "The House of Yes", year: 1997, director: "Mark Waters", runtime: "85 min", rating: "R", alexandras: true },
      { title: "The Piano", year: 1993, director: "Jane Campion", runtime: "121 min", rating: "R" },
      { title: "Trouble Every Day", year: 2001, director: "Claire Denis", runtime: "101 min", rating: "NR" },
      { title: "Housekeeper", year: 2002, director: "Claude Chabrol", runtime: "91 min", rating: "R" },
    ],
  },
  {
    name: "Comfortably Uncomfortable",
    slug: "comfortably-uncomfortable",
    description:
      "Films that don't announce themselves as difficult. They feel ordinary until they don't.",
    color: "text-[#f9a8d4] border-[#9d174d]/40",
    films: [
      { title: "Safe", year: 1995, director: "Todd Haynes", runtime: "119 min", rating: "R" },
      { title: "Eyes Wide Shut", year: 1999, director: "Stanley Kubrick", runtime: "159 min", rating: "R" },
      { title: "Funny Games", year: 1997, director: "Michael Haneke", runtime: "108 min", rating: "NR" },
      { title: "Threads", year: 1984, director: "Mick Jackson", runtime: "112 min", rating: "NR", alexandras: true, note: "BBC docudrama. Difficult." },
      { title: "A Simple Plan", year: 1998, director: "Sam Raimi", runtime: "121 min", rating: "R" },
      { title: "Happiness", year: 1998, director: "Todd Solondz", runtime: "134 min", rating: "NR" },
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
            <button type="button"
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
                className={`flex flex-wrap items-center gap-4 px-8 py-5 border-b border-[#131313] last:border-b-0 hover:bg-[#0d0d0d] transition-colors group`}
              >
                <div className="text-xs font-sans text-[#2d2d2d] w-6 flex-shrink-0 font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold group-hover:text-[#a78bfa] transition-colors">
                      {film.title}
                    </span>
                    <span className="text-[#6b7280] font-sans text-sm">
                      {film.year}
                    </span>
                    {film.alexandras && (
                      <span className="text-[10px] font-sans bg-[#7c3aed]/15 text-[#a78bfa] border border-[#7c3aed]/20 px-1.5 py-0.5 rounded">
                        {CURATOR.firstName}&apos;s Pick
                      </span>
                    )}
                    {film.note && (
                      <span className="text-[10px] font-sans text-[#6b7280] italic">
                        {film.note}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#6b7280] font-sans">
                    Dir. {film.director}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-sans text-[#6b7280] flex-shrink-0">
                  <span>{film.runtime}</span>
                  <span className="border border-[#2d2d2d] px-1.5 py-0.5 rounded">
                    {film.rating}
                  </span>
                  <button type="button" className="text-[#6b7280] hover:text-[#7c3aed] transition-colors opacity-0 group-hover:opacity-100">
                    Reserve →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-xs font-sans text-[#4b5563] text-center">
          Programming is subject to change. All screenings are for educational and cultural purposes. Sleep &amp; Screen is a concept venue. No licensed screenings are implied.
        </p>
      </div>
    </section>
  );
}
