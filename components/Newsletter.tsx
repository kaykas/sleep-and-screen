"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-14 bg-[#1d4ed8] text-white border-t border-blue-900">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="text-xs font-extrabold tracking-widest uppercase text-blue-300 mb-3">
          Stay Current
        </div>
        <h2 className="text-3xl font-extrabold mb-3">
          Sale alerts. New arrivals. Screening schedule.
        </h2>
        <p className="text-blue-100 text-sm mb-8 leading-relaxed">
          One email per week. Upcoming sales, new floor models, and the Evening Hours Friday schedule.
          No noise. Unsubscribe any time.
        </p>

        {submitted ? (
          <div className="bg-white/10 border border-white/20 rounded-xl px-8 py-6 text-sm text-white">
            You&apos;re on the list. First email arrives Sunday.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-white text-gray-900 border border-transparent rounded-lg px-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-[#dc2626] hover:bg-red-700 text-white font-extrabold px-7 py-3.5 rounded-lg text-sm transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-blue-300">
          We don&apos;t sell lists. We barely use the one we have.
        </p>
      </div>
    </section>
  );
}
