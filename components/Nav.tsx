"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE } from "@/lib/content";

const mainNavLinks = [
  { label: "Shop Mattresses", href: "#showroom" },
  { label: "Evening Hours",   href: "#evening-hours" },
  { label: "Movie Nights",    href: "#theme-nights" },
  { label: "About",           href: "/about" },
  { label: "Visit",           href: "#visit" },
  { label: "Sale",            href: "#showroom", hot: true },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      {/* ── Main header ── */}
      <div
        className={`bg-white border-b border-gray-200 transition-shadow duration-150 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center gap-6">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none flex-shrink-0 mr-2">
              <div className="flex items-baseline gap-0.5">
                <span className="text-[22px] font-black tracking-tight leading-none text-[#dc2626]">
                  East Bay
                </span>
                <span className="text-[22px] font-black tracking-tight leading-none text-[#1d4ed8] ml-1.5">
                  Mattress
                </span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide mt-px">
                {SITE.address.city}, {SITE.address.state} · {SITE.address.street}
              </span>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-0.5 ml-2" aria-label="Main navigation">
              {mainNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded transition-colors whitespace-nowrap ${
                    link.hot
                      ? "text-[#dc2626] font-extrabold hover:bg-red-50"
                      : "text-gray-700 hover:text-[#1d4ed8] hover:bg-blue-50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: phone + CTA */}
            <div className="hidden md:flex items-center gap-4 ml-auto flex-shrink-0">
              <a
                href={`tel:${SITE.phone}`}
                className="text-sm font-bold text-gray-700 hover:text-[#1d4ed8] transition-colors"
              >
                {SITE.phone}
              </a>
              <a
                href="#showroom"
                className="bg-[#dc2626] hover:bg-red-700 text-white text-sm font-extrabold px-5 py-2.5 rounded transition-colors whitespace-nowrap shadow-sm"
              >
                Shop Sale
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden text-gray-800 p-2 ml-auto rounded hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-2">
            <div className="mb-2 pt-2 pb-1 border-b border-gray-100">
              <div className="text-sm font-extrabold text-[#1d4ed8]">{SITE.phone}</div>
              <div className="text-xs text-gray-400 mt-0.5">Mon–Sun 10 AM–6 PM</div>
            </div>
            {mainNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center py-3 text-sm font-semibold border-b border-gray-100 last:border-b-0 transition-colors ${
                  link.hot
                    ? "text-[#dc2626] font-extrabold"
                    : "text-gray-700 hover:text-[#1d4ed8]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {link.hot && (
                  <span className="ml-2 bg-red-100 text-red-700 text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded">
                    Up to 40% Off
                  </span>
                )}
              </a>
            ))}
            <div className="mt-3 pb-3 flex flex-col gap-2">
              <a
                href="#showroom"
                className="block text-center bg-[#dc2626] text-white font-extrabold py-3 rounded text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Shop Mattresses — Sale Prices
              </a>
              <a
                href="#visit"
                className="block text-center border border-gray-200 text-gray-700 font-semibold py-3 rounded text-sm hover:border-gray-300 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Visit Showroom
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
