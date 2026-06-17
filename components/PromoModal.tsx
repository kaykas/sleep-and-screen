"use client";
import { useState, useEffect } from "react";

// PromoModal — deferred newsletter signup strip
// Renders as a bottom-anchored strip, not a full modal, so it doesn't hijack the first viewport.
// 8s delay (after user has scrolled/engaged). Session-dismissed.

export default function PromoModal() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("ebm-modal-v3")) return;
    const t = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    sessionStorage.setItem("ebm-modal-v3", "1");
    setVisible(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(dismiss, 2400);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 shadow-lg"
      role="complementary"
      aria-label="Newsletter signup"
    >
      <div className="max-w-4xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">

        {/* Copy */}
        <div className="flex-1 min-w-0">
          {!submitted ? (
            <>
              <p className="text-sm font-extrabold text-gray-900 leading-tight">
                Get 10% off your next mattress order.
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Sale alerts, delivery windows, and Friday Evening Hours invites.
              </p>
            </>
          ) : (
            <p className="text-sm font-semibold text-green-700">
              You&apos;re in. 10% off code on the way.
            </p>
          )}
        </div>

        {/* Form */}
        {!submitted && (
          <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-shrink-0">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors w-48"
            />
            <button
              type="submit"
              className="bg-[#1d4ed8] hover:bg-blue-800 text-white font-bold px-4 py-2 rounded text-sm transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        {/* Dismiss */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="text-gray-400 hover:text-gray-600 text-xl font-light leading-none px-1 flex-shrink-0 transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
}
