"use client";
import { useState } from "react";

// TonightScreenings — Evening Hours current week. Subordinate to retail; factual, deadpan.

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
    note: "A+K Pick",
    seats: 5,
    maxSeats: 12,
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
      "Kathleen Turner plays Beverly Sutphin: devoted suburban mother, serial killer. Waters plays it completely straight.",
    note: "A+K Pick",
    seats: 10,
    maxSeats: 12,
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
      "Both films, one night. Intermission after T1. Counter stays open.",
    note: "A+K Pick",
    seats: 3,
    maxSeats: 12,
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
      "Both films back to back. The camera-looks are better than you remember.",
    note: "A+K Pick",
    seats: 7,
    maxSeats: 12,
  },
];

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
    <section id="tonight" className="py-10 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header — clearly subordinate */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-1">
              Evening Hours — This Week
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Current Screenings
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Friday 8 PM. Showroom floor. 12 spots per night. Free with mattress purchase.
            </p>
          </div>
          <a
            href="#evening-hours"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Full summer calendar →
          </a>
        </div>

        {/* RSVP confirmation */}
        {submitted && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800">
            Reservation noted for <strong>{submitted}</strong>. Confirmation email arrives by 6 PM day-of. Doors open 7 PM.
          </div>
        )}

        {/* Screenings list */}
        <div className="space-y-2">
          {screenings.map((s, i) => (
            <div
              key={i}
              className={`bg-white border rounded-xl overflow-hidden transition-all ${
                i === 0
                  ? "border-indigo-300 shadow-sm"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="p-5 md:p-6">
                <div className="flex flex-wrap items-start gap-5">
                  {/* Date block */}
                  <div className="flex-shrink-0 w-14 text-center">
                    <div className="text-[10px] font-extrabold tracking-widest uppercase text-gray-400">
                      {s.dayLabel}
                    </div>
                    <div
                      className={`text-sm font-extrabold mt-0.5 ${
                        i === 0 ? "text-indigo-600" : "text-gray-500"
                      }`}
                    >
                      {i === 0 ? "Tonight" : s.date.split(" ").slice(1).join(" ")}
                    </div>
                  </div>

                  {/* Film info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-base font-extrabold text-gray-900">{s.film}</h3>
                      <span className="text-gray-400 text-sm">{s.year}</span>
                      {s.note && (
                        <span className="text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded font-bold">
                          {s.note}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-2 text-xs text-gray-400">
                      <span>Dir. {s.director}</span>
                      <span>{s.runtime}</span>
                      <span>{s.rating}</span>
                      <span className="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-0.5 rounded">
                        {s.series}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                  </div>

                  {/* Seats + RSVP */}
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="text-xs text-right">
                      <span className={s.seats <= 3 ? "text-red-600 font-bold" : "text-green-700 font-bold"}>
                        {s.seats} spots left
                      </span>
                      <span className="text-gray-300 mx-1">·</span>
                      <span className="text-gray-400">8 PM</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setRsvpFilm(s.film)}
                      disabled={s.seats === 0}
                      className="text-sm font-bold bg-indigo-700 hover:bg-indigo-800 disabled:bg-gray-200 disabled:text-gray-400 text-white px-5 py-2 rounded transition-colors"
                    >
                      {s.seats === 0 ? "Sold Out" : "Reserve"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RSVP Modal */}
        {rsvpFilm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white border border-gray-200 rounded-xl max-w-md w-full p-7 shadow-xl">
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
                  className="text-gray-400 hover:text-gray-700 text-2xl ml-4 leading-none"
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
                  className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-extrabold py-3.5 rounded-lg text-sm transition-colors"
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
