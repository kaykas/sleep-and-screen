"use client";
import { useState } from "react";
import { SITE } from "@/lib/content";
import { FAQ_CATEGORIES, ALL_FAQS } from "@/lib/faq-data";

const faqCategories = FAQ_CATEGORIES;

export default function Visit() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Store & Location");

  const currentCategory = faqCategories.find((c) => c.label === activeCategory) ?? faqCategories[0];

  return (
    <section id="visit" className="py-14 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <div className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
            Visit Us
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Showroom &amp; FAQ
          </h2>
          <p className="text-sm text-gray-500 mt-1 max-w-xl">
            {ALL_FAQS.length} questions answered — store, products, delivery, trial, and the Evening Hours film program.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: location + hours + contact */}
          <div className="space-y-5">
            {/* Address card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
                Location
              </div>
              <div className="space-y-1 mb-4">
                <div className="text-xl font-extrabold text-gray-900">{SITE.name}</div>
                <div className="text-sm text-gray-600">{SITE.address.street}</div>
                <div className="text-sm text-gray-600">
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </div>
              </div>
              <div className="text-sm text-gray-500 leading-relaxed mb-4">
                On San Pablo Ave in Berkeley, between Alcatraz Ave and Ashby Ave.
                Large storefront with the East Bay Mattress sign visible from the street.
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
                  Getting Here
                </div>
                <ul className="space-y-2">
                  {[
                    ["By car", "Street parking on San Pablo Ave and side streets"],
                    ["By BART", "Ashby or MacArthur Station, short bus or rideshare"],
                    ["By bus", "AC Transit lines on San Pablo Ave, stop at storefront"],
                  ].map(([mode, detail]) => (
                    <li key={mode} className="flex gap-3 text-xs">
                      <span className="text-gray-900 font-bold w-16 flex-shrink-0">{mode}</span>
                      <span className="text-gray-500">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
                Hours
              </div>
              <div className="space-y-2">
                {[
                  ["Mon–Fri", "10 AM – 6 PM", "Showroom"],
                  ["Sat–Sun", "10 AM – 6 PM", "Showroom"],
                  ["Fri evenings", "Doors 7 PM · Film 8 PM", "Evening Hours screenings"],
                  ["Holidays", "Check schedule", "Closed Christmas, July 4"],
                ].map(([day, time, note]) => (
                  <div
                    key={day}
                    className="flex items-start gap-4 py-2.5 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="text-sm font-bold text-gray-900 w-24 flex-shrink-0">{day}</span>
                    <span className="text-sm text-gray-600 w-36 flex-shrink-0">{time}</span>
                    <span className="text-xs text-gray-400">{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
                Contact
              </div>
              <div className="space-y-3">
                {[
                  ["Phone", SITE.phone],
                  ["Email", SITE.email],
                  ["Instagram", SITE.instagram],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-4 text-sm">
                    <span className="text-gray-500 w-20 flex-shrink-0">{label}</span>
                    <span className="font-semibold text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-400 leading-relaxed">
                For group reservations, press, or mattress delivery questions — email is faster.
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
              <div className="h-36 flex items-center justify-center bg-gray-100 relative">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative text-center">
                  <div className="text-blue-600 text-3xl mb-1">◉</div>
                  <div className="text-xs text-gray-500 font-medium">{SITE.address.street}</div>
                  <div className="text-xs text-gray-400">{SITE.address.full}</div>
                </div>
              </div>
              <div className="px-5 py-3 border-t border-gray-200">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    SITE.address.street + " " + SITE.address.full
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Right: categorized FAQ */}
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
              Frequently Asked — {ALL_FAQS.length} Questions
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-5">
              {faqCategories.map((cat) => (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => { setActiveCategory(cat.label); setOpenFaq(null); }}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                    activeCategory === cat.label
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <span>{cat.emoji}</span>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* FAQ accordion for active category */}
            <div className="space-y-2">
              {currentCategory.questions.map((faq, i) => {
                const key = `${activeCategory}-${i}`;
                const isOpen = openFaq === key;
                return (
                  <div
                    key={key}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                  >
                    <button
                      type="button"
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenFaq(isOpen ? null : key)}
                    >
                      <span className="text-sm font-semibold text-gray-800 leading-snug pr-2">{faq.q}</span>
                      <span className={`text-gray-400 flex-shrink-0 text-lg font-light transition-transform duration-150 ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="mt-4 text-xs text-gray-400">
              More questions? Call {SITE.phone} or email {SITE.email}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
