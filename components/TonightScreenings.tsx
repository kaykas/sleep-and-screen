"use client";
import { useState } from "react";
import { CURATOR, SECOND_VOICE } from "@/lib/content";

const screenings = [
  {
    date: "Tonight",
    dayLabel: "TUE",
    film: "Spring Breakers",
    year: 2012,
    director: "Harmony Korine",
    runtime: "94 min",
    rating: "R",
    series: "Looks Good on a Mattress",
    description:
      "Four college women rob a restaurant to fund spring break. James Franco plays a rapper named Alien. Korine shoots it like a music video that takes itself seriously. Genuinely unusual.",
    note: `${CURATOR.firstName}'s Pick`,
    seats: 5,
    maxSeats: 12,
    tag: "visual",
  },
  {
    date: "Wed Jun 18",
    dayLabel: "WED",
    film: "RoboCop",
    year: 1987,
    director: "Paul Verhoeven",
    runtime: "102 min",
    rating: "R",
    series: "Friday Night Machines",
    description:
      "A Detroit cop is killed, rebuilt as a machine, and sent back to police the same city. Verhoeven's satire is present throughout and does not announce itself.",
    note: null,
    seats: 9,
    maxSeats: 12,
    tag: "action",
  },
  {
    date: "Thu Jun 19",
    dayLabel: "THU",
    film: "Serial Mom",
    year: 1994,
    director: "John Waters",
    runtime: "95 min",
    rating: "R",
    series: "John Waters Night",
    description:
      "Kathleen Turner plays Beverly Sutphin: devoted suburban mother, mild-mannered neighbor, serial killer. Waters plays it completely straight. That's why it works.",
    note: `${CURATOR.firstName}'s Pick`,
    seats: 10,
    maxSeats: 12,
    tag: "comedy",
  },
  {
    date: "Fri Jun 20",
    dayLabel: "FRI",
    film: "The Terminator + T2",
    year: 1984,
    director: "James Cameron",
    runtime: "107 + 137 min",
    rating: "R",
    series: "Double Features",
    description:
      "Both films, one night. Intermission after T1. Counter stays open. T2 improves if you've just watched T1. Alexandra's been asking for this.",
    note: `${CURATOR.firstName}'s Pick`,
    seats: 3,
    maxSeats: 12,
    tag: "action",
  },
  {
    date: "Sat Jun 21",
    dayLabel: "SAT",
    film: "Wayne's World + Wayne's World 2",
    year: 1992,
    director: "Penelope Spheeris / Stephen Surjik",
    runtime: "95 + 95 min",
    rating: "PG-13",
    series: "Double Features",
    description:
      "Both films back to back. The camera-looks are better than you remember. Garth holds up. The second one is underrated. Kitrina asked for this.",
    note: `${SECOND_VOICE.firstName}'s Pick`,
    seats: 7,
    maxSeats: 12,
    tag: "comedy",
  },
];

export default function TonightScreenings() {
  const [rsvpFilm, setRsvpFilm] = useState<string | null>(null);
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpEmail, setRsvpEmail] = useState("");
  const [rsvpCount, setRsvpCount] = useState("2");
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleRsvp = (film: string) => {
    setRsvpFilm(film);
    setSubmitted(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(rsvpFilm);
    setRsvpFilm(null);
    setRsvpName("");
    setRsvpEmail("");
  };

  const tagColors: Record<string, string> = {
    cult: "border-[#7c3aed]/40 text-[#a78bfa]",
    midnight: "border-[#1d4ed8]/40 text-[#60a5fa]",
    arthouse: "border-[#065f46]/40 text-[#34d399]",
    action: "border-[#92400e]/40 text-[#fbbf24]",
    "body horror": "border-[#7f1d1d]/40 text-[#f87171]",
    visual: "border-[#7c3aed]/40 text-[#a78bfa]",
    comedy: "border-[#065f46]/40 text-[#34d399]",
  };

  return (
    <section id="tonight" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-3 block">
              This week
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Tonight &amp; Upcoming
            </h2>
          </div>
          <a
            href="#programming"
            className="text-sm font-sans text-[#9ca3af] hover:text-[#f5f0e8] transition-colors"
          >
            Full season schedule →
          </a>
        </div>

        {/* RSVP confirmation */}
        {submitted && (
          <div className="mb-8 bg-[#111] border border-[#7c3aed]/30 rounded-lg p-5 text-sm font-sans text-[#a78bfa]">
            Reservation noted for <strong className="text-[#f5f0e8]">{submitted}</strong>. We&apos;ll send a confirmation to your email before 6 PM on the day of screening. Doors open at 7 PM.
          </div>
        )}

        {/* Screenings list */}
        <div className="space-y-3">
          {screenings.map((s, i) => (
            <div
              key={i}
              className={`bg-[#111] border rounded-lg overflow-hidden transition-all ${
                i === 0
                  ? "border-[#7c3aed]/50 shadow-[0_0_30px_rgba(124,58,237,0.08)]"
                  : "border-[#1f1f1f]"
              }`}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start gap-6">
                  {/* Date block */}
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="text-xs font-sans font-bold tracking-widest uppercase text-[#6b7280]">
                      {s.dayLabel}
                    </div>
                    <div
                      className={`text-sm font-sans font-semibold mt-1 ${
                        i === 0 ? "text-[#a78bfa]" : "text-[#9ca3af]"
                      }`}
                    >
                      {i === 0 ? "Tonight" : s.date.split(" ").slice(1).join(" ")}
                    </div>
                  </div>

                  {/* Film info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold">
                        {s.film}
                      </h3>
                      <span className="text-[#6b7280] font-sans text-sm">
                        {s.year}
                      </span>
                      {s.note && (
                        <span className="text-xs font-sans bg-[#7c3aed]/20 text-[#a78bfa] px-2 py-0.5 rounded">
                          {s.note}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mb-3 text-xs font-sans text-[#6b7280]">
                      <span>Dir. {s.director}</span>
                      <span>{s.runtime}</span>
                      <span>{s.rating}</span>
                      <span
                        className={`border px-2 py-0.5 rounded-full ${
                          tagColors[s.tag] || "border-[#2d2d2d] text-[#6b7280]"
                        }`}
                      >
                        {s.series}
                      </span>
                    </div>
                    <p className="text-sm text-[#9ca3af] font-sans leading-relaxed max-w-2xl">
                      {s.description}
                    </p>
                  </div>

                  {/* Seats + RSVP */}
                  <div className="flex-shrink-0 flex flex-col items-end gap-3">
                    <div className="text-xs font-sans text-[#6b7280] text-right">
                      <span
                        className={
                          s.seats <= 3 ? "text-[#f87171]" : "text-[#34d399]"
                        }
                      >
                        {s.seats} spots left
                      </span>
                      <span className="text-[#2d2d2d] mx-1">·</span>
                      <span>8 PM showtime</span>
                    </div>
                    <button type="button"
                      onClick={() => handleRsvp(s.film)}
                      disabled={s.seats === 0}
                      className="text-sm font-sans bg-[#7c3aed] hover:bg-[#6d28d9] disabled:bg-[#1f1f1f] disabled:text-[#6b7280] text-white px-5 py-2.5 rounded transition-colors"
                    >
                      {s.seats === 0 ? "Sold Out" : "Reserve a Spot"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RSVP Modal overlay */}
        {rsvpFilm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="bg-[#111] border border-[#2d2d2d] rounded-xl max-w-md w-full p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-1">
                    Reservation
                  </div>
                  <h3 className="text-xl font-bold">{rsvpFilm}</h3>
                </div>
                <button type="button"
                  onClick={() => setRsvpFilm(null)}
                  className="text-[#6b7280] hover:text-[#f5f0e8] text-xl ml-4"
                >
                  ×
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-sans text-[#6b7280] mb-1.5 tracking-wide uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-[#2d2d2d] rounded px-4 py-3 text-sm font-sans text-[#f5f0e8] focus:outline-none focus:border-[#7c3aed] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans text-[#6b7280] mb-1.5 tracking-wide uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={rsvpEmail}
                    onChange={(e) => setRsvpEmail(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-[#2d2d2d] rounded px-4 py-3 text-sm font-sans text-[#f5f0e8] focus:outline-none focus:border-[#7c3aed] transition-colors"
                    placeholder="your email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans text-[#6b7280] mb-1.5 tracking-wide uppercase">
                    Number of Spots
                  </label>
                  <select
                    value={rsvpCount}
                    onChange={(e) => setRsvpCount(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-[#2d2d2d] rounded px-4 py-3 text-sm font-sans text-[#f5f0e8] focus:outline-none focus:border-[#7c3aed] transition-colors"
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "spot" : "spots"}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-xs font-sans text-[#6b7280] leading-relaxed">
                  No payment required. Confirmation email sent by 6 PM day-of. Doors open 7 PM. This is a concept/prototype venue — no real transactions occur.
                </div>
                <button type="submit"
                  className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-sans font-medium py-3.5 rounded text-sm transition-colors"
                >
                  Confirm Reservation
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
