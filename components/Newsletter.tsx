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
    <section id="newsletter" className="py-24 bg-[#0d0d0d] border-t border-[#1a1a1a]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-4 block">
          Stay current
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Better days. Better nights.
        </h2>
        <p className="text-[#9ca3af] font-sans text-sm mb-8 leading-relaxed">
          Weekly schedule, upcoming series announcements, and occasional notes from the curator.
          No noise. No promotional bulk. One email, once a week.
        </p>

        {submitted ? (
          <div className="bg-[#111] border border-[#7c3aed]/30 rounded-lg px-8 py-6 text-sm font-sans text-[#a78bfa]">
            You&apos;re on the list. First email arrives the following Sunday.
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
              placeholder="your email"
              className="flex-1 bg-[#0a0a0a] border border-[#2d2d2d] rounded px-5 py-3.5 text-sm font-sans text-[#f5f0e8] focus:outline-none focus:border-[#7c3aed] transition-colors placeholder-[#4b5563]"
            />
            <button type="submit"
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-sans font-medium px-7 py-3.5 rounded text-sm transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-xs font-sans text-[#4b5563]">
          Unsubscribe any time. We don&apos;t sell lists. We barely use the one we have.
        </p>
      </div>
    </section>
  );
}
