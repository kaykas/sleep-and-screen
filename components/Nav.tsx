"use client";
import { useState, useEffect } from "react";
import { SITE } from "@/lib/content";

const categoryLinks = [
  { label: "Sale", href: "#showroom", hot: true },
  { label: "Mattresses", href: "#showroom" },
  { label: "Box Springs & Bed Frames", href: "#showroom" },
  { label: "Now Playing", href: "#evening-hours" },
  { label: "Sleep-In VIP Tickets", href: "#evening-hours" },
  { label: "Concessions", href: "#concessions" },
  { label: "bedMOVIE", href: "#evening-hours", accent: true },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [zip, setZip] = useState("");
  const [zipFocused, setZipFocused] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── 1. Gray utility bar ── */}
      <div className="bg-[#f3f4f6] border-b border-gray-300 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between gap-4">
          {/* Left: zip + store selector */}
          <div className="flex items-center gap-4 text-xs text-gray-600">
            {/* Zip input */}
            <div className={`flex items-center gap-1.5 border rounded px-2 py-1 bg-white transition-colors ${zipFocused ? "border-blue-500" : "border-gray-300"}`}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400 flex-shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <input
                type="text"
                placeholder="Enter Delivery Zip Code"
                value={zip}
                onChange={e => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
                onFocus={() => setZipFocused(true)}
                onBlur={() => setZipFocused(false)}
                className="w-36 text-xs bg-transparent outline-none text-gray-700 placeholder-gray-400"
                maxLength={5}
              />
              {zip.length === 5 && (
                <span className="text-blue-600 font-semibold cursor-pointer hover:underline ml-1">Go</span>
              )}
            </div>

            {/* Store & Theater selector */}
            <button type="button" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Select Store &amp; Theater
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-400">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
          </div>

          {/* Right: utility links + phone */}
          <div className="flex items-center gap-5 text-xs text-gray-600">
            <button type="button" className="hover:text-blue-700 transition-colors flex items-center gap-1">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Track My Order
            </button>
            <a href="#visit" className="hover:text-blue-700 transition-colors">Contact Us</a>
            <button type="button" className="hover:text-blue-700 transition-colors flex items-center gap-1">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Chat
            </button>
            <a href={`tel:${SITE.phone}`} className="font-bold text-[#1d4ed8] hover:underline">
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ── 2. Main header row ── */}
      <div className={`bg-white border-b border-gray-200 transition-shadow ${scrolled ? "shadow-md" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">

          {/* Logo */}
          <a href="#" className="flex flex-col leading-none flex-shrink-0 mr-2">
            <span className="text-2xl font-black tracking-tight text-gray-900 uppercase leading-none">
              <span className="text-[#dc2626]">East Bay</span>{" "}
              <span className="text-[#1d4ed8]">Mattress</span>
            </span>
            <span className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#1d4ed8] leading-none mt-0.5">
              Mattresses &amp; Cinema
            </span>
            <span className="text-[9px] text-gray-400 tracking-wide font-medium mt-0.5">
              Evening Hours after dark · {SITE.address.street}, {SITE.address.city}, {SITE.address.state}
            </span>
          </a>

          {/* Search bar — grows to fill space */}
          <div className="flex-1 hidden md:flex items-center border-2 border-gray-300 hover:border-blue-400 focus-within:border-blue-600 rounded-lg overflow-hidden transition-colors bg-white">
            <input
              type="text"
              placeholder="Search mattresses, showtimes, snacks..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
            />
            <button
              type="button"
              className="bg-[#1d4ed8] hover:bg-blue-800 text-white px-5 py-2.5 text-sm font-bold transition-colors flex-shrink-0 flex items-center gap-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              Search
            </button>
          </div>

          {/* Right: icon controls + CTAs */}
          <div className="hidden md:flex items-center gap-1 flex-shrink-0">
            {/* Map pin / location */}
            <a
              href="#visit"
              title="Store Location"
              className="flex flex-col items-center justify-center w-11 h-11 rounded hover:bg-gray-100 transition-colors text-gray-600 hover:text-blue-700"
            >
              {/* Unicode map pin via SVG inline */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-[9px] font-medium leading-none mt-0.5">Store</span>
            </a>
            {/* Account */}
            <button
              type="button"
              title="Account"
              className="flex flex-col items-center justify-center w-11 h-11 rounded hover:bg-gray-100 transition-colors text-gray-600 hover:text-blue-700"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              <span className="text-[9px] font-medium leading-none mt-0.5">Account</span>
            </button>
            {/* Cart with red badge */}
            <button
              type="button"
              title="Cart"
              className="flex flex-col items-center justify-center w-11 h-11 rounded hover:bg-gray-100 transition-colors text-gray-600 hover:text-blue-700 relative"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span className="text-[9px] font-medium leading-none mt-0.5">Cart</span>
              {/* Red badge */}
              <span className="absolute top-1 right-1 bg-[#dc2626] text-white text-[9px] font-extrabold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                0
              </span>
            </button>

            <div className="w-px h-10 bg-gray-200 mx-1" />

            <a
              href="#showroom"
              className="bg-[#dc2626] hover:bg-red-700 text-white text-sm font-extrabold px-5 py-2.5 rounded transition-colors whitespace-nowrap"
            >
              Shop Sale
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-gray-800 p-2 ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* ── 3. Category nav bar ── */}
      <div className="hidden md:block bg-[#1f2937] border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center overflow-x-auto">
            {categoryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold px-4 py-3 transition-colors hover:bg-white/10 whitespace-nowrap flex-shrink-0 ${
                  link.accent
                    ? "text-amber-300 hover:text-white border-l border-gray-600 ml-auto font-black tracking-wide"
                    : link.hot
                    ? "text-red-300 hover:text-white font-black"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {link.hot && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-400 mr-1.5 mb-0.5 animate-pulse" />
                )}
                {link.accent && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mr-1.5 mb-0.5" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          {/* Mobile search */}
          <div className="px-4 pt-3 pb-2">
            <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search mattresses, showtimes..."
                className="flex-1 px-3 py-2.5 text-sm outline-none"
              />
              <button type="button" className="bg-[#1d4ed8] text-white px-4 py-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="px-4 pb-3">
            <div className="text-sm font-black text-[#1d4ed8] mb-0.5">{SITE.phone}</div>
            <div className="text-xs text-gray-500 mb-3">Mon–Sun 10 AM–6 PM</div>
            {categoryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block py-3 text-sm font-semibold border-b border-gray-100 hover:text-[#1d4ed8] ${
                  link.accent ? "text-amber-600" : link.hot ? "text-red-600" : "text-gray-700"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <a href="#showroom" className="block text-center bg-[#dc2626] text-white font-extrabold py-3 rounded text-sm" onClick={() => setMenuOpen(false)}>
                Shop Mattresses
              </a>
              <a href="#visit" className="block text-center border-2 border-gray-800 text-gray-800 font-extrabold py-3 rounded text-sm" onClick={() => setMenuOpen(false)}>
                Visit Store
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
