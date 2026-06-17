"use client";
import { useState } from "react";

// CookieBar — bottom fixed consent bar.
// Credible legal copy + one deadpan line. SessionStorage dismiss.
// z-[90] keeps it below PromoModal (z-[100]).
// Mobile: wraps to two rows, buttons right-aligned, never covers hero CTAs
// because it's bottom-fixed and the page scrolls.

function getInitialVisible() {
  if (typeof window === "undefined") return false;
  return !window.sessionStorage.getItem("ebm-cookies-ok");
}

export default function CookieBar() {
  const [visible, setVisible] = useState(getInitialVisible);

  function dismiss() {
    sessionStorage.setItem("ebm-cookies-ok", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] bg-gray-100 border-t border-gray-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-start sm:items-center gap-3 flex-wrap sm:flex-nowrap">

        {/* Cookie icon — inline SVG, no dependency */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="text-gray-400 flex-shrink-0 mt-0.5 sm:mt-0 hidden sm:block"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="8"  cy="9"  r="1" fill="currentColor" stroke="none" />
          <circle cx="14" cy="8"  r="1" fill="currentColor" stroke="none" />
          <circle cx="10" cy="14" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="13" r="1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
        </svg>

        {/* Copy */}
        <p className="text-xs text-gray-600 leading-relaxed flex-1 min-w-0">
          We use cookies and similar technologies to improve your experience,
          remember your zip code, and analyze site traffic.
          By continuing to use this site, you agree to our{" "}
          <a href="#" className="underline hover:text-gray-900 transition-colors">Privacy Policy</a>
          {" "}and{" "}
          <a href="#" className="underline hover:text-gray-900 transition-colors">Terms of Use</a>.
          {" "}We do not use cookies for mattress surveillance.{" "}
          <span className="text-gray-500">
            Actual cookies are available at the 8:30 showing, when available.
          </span>
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
          <button
            type="button"
            onClick={dismiss}
            className="bg-gray-800 hover:bg-gray-900 text-white text-xs font-bold px-5 py-2 rounded transition-colors whitespace-nowrap"
          >
            Continue
          </button>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss cookie notice"
            className="text-gray-400 hover:text-gray-700 text-xl font-light leading-none px-1 transition-colors"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
