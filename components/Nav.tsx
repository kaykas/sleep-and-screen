"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Tonight", href: "#tonight" },
  { label: "Programming", href: "#programming" },
  { label: "Venue", href: "#venue" },
  { label: "Concessions", href: "#concessions" },
  { label: "Showroom", href: "#showroom" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#2d2d2d]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span className="text-lg font-bold tracking-tight font-sans text-[#f5f0e8]">
            SLEEP & SCREEN
          </span>
          <span className="text-xs text-[#a78bfa] tracking-widest font-sans uppercase">
            Concord, CA
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans text-[#9ca3af] hover:text-[#f5f0e8] transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#tonight"
            className="text-sm font-sans bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-5 py-2 rounded transition-colors tracking-wide"
          >
            Reserve a Spot
          </a>
        </div>

        {/* Mobile hamburger */}
        <button type="button"
          className="md:hidden text-[#f5f0e8] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#2d2d2d] px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-sans text-[#9ca3af] hover:text-[#f5f0e8] border-b border-[#1a1a1a]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#tonight"
            className="block mt-4 text-center text-sm font-sans bg-[#7c3aed] text-white px-5 py-3 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Reserve a Spot
          </a>
        </div>
      )}
    </nav>
  );
}
