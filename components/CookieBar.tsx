"use client";
import { useState } from "react";

// CookieBar — minimal bottom consent bar. No auto-render until after hydration.
// Shown only once per session. Very compact — does not compete with hero.

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
    <div className="fixed bottom-0 left-0 right-0 z-[80] bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center gap-3">
        <p className="text-xs text-gray-300 flex-1 leading-relaxed">
          We use cookies to improve your experience.{" "}
          <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>
          {" · "}
          <span className="text-gray-500">Actual cookies: Fridays at 8:30 PM, when available.</span>
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="text-xs font-semibold text-white bg-gray-600 hover:bg-gray-500 px-3 py-1.5 rounded transition-colors whitespace-nowrap flex-shrink-0"
        >
          OK
        </button>
      </div>
    </div>
  );
}
