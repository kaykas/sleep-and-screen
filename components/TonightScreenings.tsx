"use client";
import { useState } from "react";

// TonightScreenings — Current week screenings. Cinema showtimes module.
// Always-visible Reserve CTAs. Responsive rows that don't clip at right edge.

const screenings = [
  {
    date: "Tonight",
    dayLabel: "TUE",
    film: "Spring Breakers",
    year: 2012,
    director: "Harmony Korine",
    runtime: "94 min",
    rating: "R",
    genre: "Crime / Drama",
    imdbScore: "5.3",
    series: "Looks Good on a Mattress",
    description:
      "Four college women rob a restaurant to fund spring break. James Franco plays a rapper named Alien. Korine shoots it like a music video that takes itself seriously. Genuinely unusual.",
    note: "A+K Pick",
    seats: 5,
    maxSeats: 12,
    time: "8:00 PM",
    pairingNote: "Counter open. Sparkling water, tea, and whatever fits the vibe.",
  },
  {
    date: "Wed Jun 18",
    dayLabel: "WED",
    film: "RoboCop",
    year: 1987,
    director: "Paul Verhoeven",
    runtime: "102 min",
    rating: "R",
    genre: "Action / Sci-Fi",
    imdbScore: "7.6",
    series: "Friday Night Machines",
    description:
      "A Detroit cop is killed, rebuilt as a machine, and sent back to police the same city. Verhoeven's satire is present throughout and does not announce itself.",
    note: null,
    seats: 9,
    maxSeats: 12,
    time: "8:00 PM",
    pairingNote: null,
  },
  {
    date: "Thu Jun 19",
    dayLabel: "THU",
    film: "Serial Mom",
    year: 1994,
    director: "John Waters",
    runtime: "95 min",
    rating: "R",
    genre: "Dark Comedy / Crime",
    imdbScore: "6.8",
    series: "John Waters Night",
    description:
      "Kathleen Turner plays Beverly Sutphin: devoted suburban mother, serial killer. Waters plays it completely straight.",
    note: "A+K Pick",
    seats: 10,
    maxSeats: 12,
    time: "8:00 PM",
    pairingNote: "Programmed by Alexandra & Kitrina. Counter open until the last kill.",
  },
  {
    date: "Fri Jun 20",
    dayLabel: "FRI",
    film: "The Terminator + T2",
    year: 1984,
    director: "James Cameron",
    runtime: "107 + 137 min",
    rating: "R",
    genre: "Sci-Fi / Action",
    imdbScore: "8.0 / 8.6",
    series: "Double Features",
    description:
      "Both films, one night. Intermission after T1. Counter stays open.",
    note: "A+K Pick",
    seats: 3,
    maxSeats: 12,
    time: "7:30 PM",
    pairingNote: "Double feature. Starts 30 min early. Intermission ~10 PM.",
  },
  {
    date: "Sat Jun 21",
    dayLabel: "SAT",
    film: "Wayne's World + Wayne's World 2",
    year: 1992,
    director: "Penelope Spheeris / Stephen Surjik",
    runtime: "95 + 95 min",
    rating: "PG-13",
    genre: "Comedy",
    imdbScore: "7.0 / 6.1",
    series: "Double Features",
    description:
      "Both films back to back. The camera-looks are better than you remember.",
    note: "A+K Pick",
    seats: 7,
    maxSeats: 12,
    time: "8:00 PM",
    pairingNote: "Double feature. Short intermission between films.",
  },
];

// Minimal poster graphic — abstract cinema card
function MiniPoster({ film, year, isTonight }: { film: string; year: number; isTonight: boolean }) {
  const label = film.split(" ").slice(0, 2).join(" ");
  const accentColor = isTonight ? "#6366f1" : "#4b5563";
  const glowColor = isTonight ? "#6366f1" : "#374151";
  const uid = `${year}-${film.replace(/\s+/g, "")}`;

  return (
    <svg viewBox="0 0 52 78" className="w-full h-full block" aria-hidden="true">
      <defs>
        <linearGradient id={`mp-bg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1a14" />
          <stop offset="100%" stopColor="#0d0b08" />
        </linearGradient>
        <linearGradient id={`mp-sh-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      <rect width="52" height="78" fill={`url(#mp-bg-${uid})`} />
      <rect x="0" y="0" width="52" height="30" fill={glowColor} opacity="0.07" />
      <ellipse cx="26" cy="28" rx="7" ry="8" fill={accentColor} opacity="0.12" />
      <rect x="20" y="35" width="12" height="14" rx="1.5" fill={accentColor} opacity="0.09" />
      <line x1="5" y1="52" x2="47" y2="52" stroke="#3a3020" strokeWidth="0.4" opacity="0.6" />
      <rect x="0" y="50" width="52" height="28" fill={`url(#mp-sh-${uid})`} />
      <text x="26" y="63" textAnchor="middle" fill="#e8e0cc" fontSize="5.5" fontFamily="Georgia, serif" fontWeight="bold">
        {label}
      </text>
      <text x="26" y="71" textAnchor="middle" fill="#5a4e30" fontSize="4.5" fontFamily="monospace" letterSpacing="0.8">
        {year}
      </text>
      {isTonight && (
        <>
          <rect x="0" y="0" width="52" height="10" fill={accentColor} opacity="0.25" />
          <text x="26" y="7.5" textAnchor="middle" fill="#a5b4fc" fontSize="4.5" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">
            NOW
          </text>
        </>
      )}
    </svg>
  );
}

// Seat availability bar
function SeatBar({ seats, max }: { seats: number; max: number }) {
  const pct = Math.round((seats / max) * 100);
  const barColor = seats <= 3 ? "bg-red-500" : seats <= 6 ? "bg-amber-400" : "bg-green-500";
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all ${barColor}`} style={{ width: `${pct}%` }} />
      </div>
      <span className={`text-xs font-bold whitespace-nowrap ${seats <= 3 ? "text-red-600" : seats <= 6 ? "text-amber-600" : "text-green-700"}`}>
        {seats} left
      </span>
    </div>
  );
}

export default function TonightScreenings() {
  const [rsvpFilm, setRsvpFilm] = useState<string | null>(null);
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpEmail, setRsvpEmail] = useState("");
  const [rsvpCount, setRsvpCount] = useState("2");
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(rsvpFilm);
    setRsvpFilm(null);
    setRsvpName("");
    setRsvpEmail("");
  };

  return (
    <section id="tonight" className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* ── Header ── */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-2">
              Evening Hours — This Week
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              Current Screenings
            </h2>
            <p className="text-[15px] text-gray-500 mt-1.5">
              8 PM nightly · Showroom floor · 12 spots per night · Free with mattress purchase
            </p>
          </div>
          <a
            href="#evening-hours"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1d4ed8] border-2 border-[#1d4ed8] hover:bg-blue-50 px-4 py-2 rounded-full transition-colors whitespace-nowrap flex-shrink-0"
          >
            Full summer calendar →
          </a>
        </div>

        {/* ── RSVP confirmation ── */}
        {submitted && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800 flex items-center gap-3">
            <span className="text-lg">✓</span>
            <span>
              Reservation noted for <strong>{submitted}</strong>.
              Confirmation email by 6 PM day-of. Doors open 7 PM.
            </span>
          </div>
        )}

        {/* ── Screenings list ── */}
        <div className="space-y-3">
          {screenings.map((s, i) => {
            const isTonight = i === 0;
            return (
              <div
                key={i}
                className={`bg-white rounded-xl overflow-hidden transition-all ${
                  isTonight
                    ? "border-2 border-indigo-400 shadow-md"
                    : "border border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                {/* Tonight label bar */}
                {isTonight && (
                  <div className="bg-indigo-600 text-white text-[11px] font-extrabold uppercase tracking-widest px-5 py-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-200 animate-pulse" aria-hidden="true" />
                    Tonight · {s.time}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-stretch gap-0">

                  {/* Poster — left strip */}
                  <div className="sm:flex-shrink-0 sm:w-[68px] w-full flex sm:flex-col items-center justify-center sm:py-5 sm:border-r border-b sm:border-b-0 border-gray-100 bg-gray-50 py-4 px-4 sm:px-0">
                    <div className="w-[52px] h-[78px] rounded overflow-hidden border border-gray-200 flex-shrink-0">
                      <MiniPoster film={s.film} year={s.year} isTonight={isTonight} />
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 min-w-0 px-5 py-4">

                    {/* Date + series */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {!isTonight && (
                        <span className="text-xs font-bold text-gray-500">{s.date} · {s.time}</span>
                      )}
                      <span className="text-[11px] bg-gray-100 text-gray-500 border border-gray-200 px-2.5 py-0.5 rounded-full font-medium">
                        {s.series}
                      </span>
                    </div>

                    {/* Title + year + A+K badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-lg font-extrabold text-gray-900 leading-tight">{s.film}</h3>
                      <span className="text-sm text-gray-400">{s.year}</span>
                      {s.note && (
                        <span className="text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-full font-bold">
                          {s.note}
                        </span>
                      )}
                    </div>

                    {/* Metadata row */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                      <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5">
                        <span className="text-amber-500 text-xs leading-none">★</span>
                        <span className="text-gray-800 font-extrabold text-[11px] leading-none">{s.imdbScore}</span>
                        <span className="text-gray-400 text-[10px] leading-none">/10</span>
                      </div>
                      <span className="text-[10px] border border-gray-300 text-gray-500 px-1.5 py-0.5 rounded font-bold">{s.rating}</span>
                      <span className="text-xs text-gray-400">{s.runtime}</span>
                      <span className="text-xs text-gray-400 italic">{s.genre}</span>
                      <span className="text-xs text-gray-400">Dir. {s.director}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>

                    {/* Pairing note */}
                    {s.pairingNote && (
                      <p className="text-xs text-indigo-600 italic mt-2">{s.pairingNote}</p>
                    )}
                  </div>

                  {/* Right column — seats + CTA: always visible, never clipped */}
                  <div className="sm:flex-shrink-0 sm:w-40 flex sm:flex-col flex-row items-center sm:items-end justify-between sm:justify-center gap-3 px-5 py-4 sm:border-l border-t sm:border-t-0 border-gray-100 bg-gray-50/50">
                    <div className="flex-1 sm:flex-none sm:w-full">
                      <SeatBar seats={s.seats} max={s.maxSeats} />
                    </div>
                    <button
                      type="button"
                      onClick={() => setRsvpFilm(s.film)}
                      disabled={s.seats === 0}
                      className={`flex-shrink-0 sm:w-full font-extrabold px-5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                        s.seats === 0
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : isTonight
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
                          : "bg-[#1d4ed8] hover:bg-blue-800 text-white"
                      }`}
                    >
                      {s.seats === 0 ? "Sold Out" : "Reserve →"}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ── Footer note ── */}
        <p className="mt-6 text-xs text-gray-400 text-center">
          Concept/prototype schedule. No real transactions.
        </p>

        {/* ── RSVP Modal ── */}
        {rsvpFilm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={(e) => { if (e.target === e.currentTarget) setRsvpFilm(null); }}
          >
            <div className="bg-white border border-gray-200 rounded-2xl max-w-md w-full p-7 shadow-2xl">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">
                    Reservation — Evening Hours
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900">{rsvpFilm}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setRsvpFilm(null)}
                  className="text-gray-400 hover:text-gray-700 text-2xl ml-4 leading-none flex-shrink-0"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={rsvpEmail}
                    onChange={(e) => setRsvpEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Spots
                  </label>
                  <select
                    value={rsvpCount}
                    onChange={(e) => setRsvpCount(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "spot" : "spots"}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  No payment required. Confirmation by 6 PM day-of. Doors 7 PM.
                  Concept/prototype venue — no real transactions.
                </p>
                <button
                  type="submit"
                  className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-extrabold py-3.5 rounded-xl text-sm transition-colors"
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
