"use client";
import { useState, useEffect } from "react";
import { SITE } from "@/lib/content";

const mainNavLinks = [
  { label: "Mattresses",    href: "#showroom"       },
  { label: "Sale",          href: "#showroom",  hot: true },
  { label: "Financing",     href: "#showroom"       },
  { label: "Delivery",      href: "#visit"          },
  { label: "Evening Hours", href: "#evening-hours"  },
  { label: "About",         href: "/about"          },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Thin promo strip ── */}
      <div className="bg-[#1d4ed8] text-white text-center text-xs font-semibold py-2 tracking-wide">
        Summer Mattress Event — Up to 40% Off · Ends Aug 31
        <span className="hidden sm:inline">
          {" "}·{" "}
          <a href="#showroom" className="underline underline-offset-2 hover:text-blue-200 transition-colors">
            Shop Now
          </a>
        </span>
      </div>

      {/* ── Main header row ── */}
      <div className={`bg-white border-b border-gray-200 transition-shadow ${scrolled ? "shadow-md" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-5">

          {/* Logo */}
          <a href="#" className="flex flex-col leading-none flex-shrink-0">
            <span className="text-xl font-black tracking-tight leading-none">
              <span className="text-[#dc2626]">East Bay</span>{" "}
              <span className="text-[#1d4ed8]">Mattress</span>
            </span>
            <span className="text-[10px] text-gray-400 font-medium mt-0.5 tracking-wide">
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state}
            </span>
          </a>

          {/* Search bar */}
          <div className="flex-1 hidden md:flex items-center border border-gray-300 hover:border-blue-400 focus-within:border-blue-600 rounded-lg overflow-hidden transition-colors bg-white max-w-lg">
            <input
              type="text"
              placeholder="Search mattresses, sizes, prices..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
            />
            <button
              type="button"
              className="bg-[#1d4ed8] hover:bg-blue-800 text-white px-4 py-2.5 text-sm font-semibold transition-colors flex-shrink-0"
            >
              Search
            </button>
          </div>

          {/* Right: phone + CTA */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0 ml-auto">
            <a href={`tel:${SITE.phone}`} className="text-sm font-bold text-[#1d4ed8] hover:underline">
              {SITE.phone}
            </a>
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

        {/* ── Category nav — inline below header on desktop ── */}
        <div className="hidden md:block border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-1">
              {mainNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm px-4 py-2.5 transition-colors hover:text-[#1d4ed8] font-medium whitespace-nowrap flex-shrink-0 ${
                    link.hot
                      ? "text-[#dc2626] font-extrabold"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              {/* bedMOVIE as a quiet badge at the end */}
              <a
                href="#evening-hours"
                className="ml-auto text-xs text-indigo-600 hover:text-indigo-800 font-semibold px-3 py-1 border border-indigo-200 rounded-full transition-colors whitespace-nowrap flex-shrink-0"
              >
                bedMOVIE ›
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-4 pt-3 pb-2">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search mattresses..."
                className="flex-1 px-3 py-2.5 text-sm outline-none"
              />
              <button type="button" className="bg-[#1d4ed8] text-white px-4 py-2.5 text-sm font-semibold">
                Search
              </button>
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="text-sm font-black text-[#1d4ed8] mb-0.5">{SITE.phone}</div>
            <div className="text-xs text-gray-500 mb-3">Mon–Sun 10 AM–6 PM</div>
            {mainNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block py-3 text-sm font-semibold border-b border-gray-100 hover:text-[#1d4ed8] ${
                  link.hot ? "text-red-600" : "text-gray-700"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#evening-hours"
              className="block py-3 text-sm font-semibold border-b border-gray-100 text-indigo-600 hover:text-indigo-800"
              onClick={() => setMenuOpen(false)}
            >
              bedMOVIE / Concessions
            </a>
            <div className="mt-4 flex flex-col gap-2">
              <a href="#showroom" className="block text-center bg-[#dc2626] text-white font-extrabold py-3 rounded text-sm" onClick={() => setMenuOpen(false)}>
                Shop Mattresses
              </a>
              <a href="#visit" className="block text-center border border-gray-300 text-gray-700 font-semibold py-3 rounded text-sm" onClick={() => setMenuOpen(false)}>
                Visit Store
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
