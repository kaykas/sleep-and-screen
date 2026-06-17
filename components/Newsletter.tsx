"use client";
import { useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitState === "submitting") return;

    setSubmitState("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          website,
          source: "homepage-newsletter",
        }),
      });

      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.ok) {
        throw new Error(body.error || "Could not subscribe right now");
      }

      setSubmitState("success");
      setEmail("");
      setWebsite("");
    } catch (error) {
      setSubmitState("error");
      setMessage(error instanceof Error ? error.message : "Could not subscribe right now");
    }
  };

  return (
    <section id="newsletter" className="py-14 bg-[#1d4ed8] text-white border-t border-blue-900">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="text-xs font-extrabold tracking-widest uppercase text-blue-300 mb-3">
          Stay Current
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight">
          Sale alerts. New arrivals. Screening schedule.
        </h2>
        <p className="text-blue-100 text-sm mb-8 leading-relaxed">
          One email per week. Upcoming sales, new floor models, and the Evening Hours Friday schedule.
          No noise. Unsubscribe any time.
        </p>

        {submitState === "success" ? (
          <div className="bg-white/10 border border-white/20 rounded-xl px-8 py-6 text-sm text-white">
            You&apos;re on the list. First email arrives Sunday.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="hidden" aria-hidden="true">
              <label htmlFor="newsletter-website">Website</label>
              <input
                id="newsletter-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-white text-gray-900 border border-transparent rounded-lg px-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400"
                disabled={submitState === "submitting"}
              />
              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="bg-[#dc2626] hover:bg-red-700 disabled:bg-red-900 disabled:cursor-not-allowed text-white font-extrabold px-7 py-3.5 rounded-lg text-sm transition-colors whitespace-nowrap"
              >
                {submitState === "submitting" ? "Subscribing…" : "Subscribe"}
              </button>
            </div>

            {submitState === "error" && (
              <p className="mt-3 text-sm text-red-100 bg-red-950/30 border border-red-300/20 rounded-lg px-4 py-2">
                {message}
              </p>
            )}
          </form>
        )}

        <p className="mt-4 text-xs text-blue-300">
          We don&apos;t sell lists. We barely use the one we have.
        </p>
      </div>
    </section>
  );
}
