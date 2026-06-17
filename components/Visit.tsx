"use client";
import { useState } from "react";
import { SITE } from "@/lib/content";

const faqs = [
  {
    q: "Do I need an appointment to visit the showroom?",
    a: "No. Walk in any day 10 AM–6 PM. The floor is open. Staff are there if you want them.",
  },
  {
    q: "Does free delivery include setup?",
    a: "Yes. We carry it in, set up the frame, and remove all packaging. Old mattress removal is $40, scheduled at the same time.",
  },
  {
    q: "What size is the 120-night trial?",
    a: "All sizes on all models. If it isn't working after 120 nights, call us. We pick it up and refund the purchase price. No restocking fee.",
  },
  {
    q: "How does the 0% financing work?",
    a: "Synchrony Bank, applied in-store. On approved credit. On orders $599+. Minimum monthly payments required. No deferred interest — the rate is genuinely 0%.",
  },
  {
    q: "Is the Evening Hours program free?",
    a: "Mattress customers get priority reservation access and no cover. Walk-in screening reservations are $10–$15 suggested donation. Popcorn included.",
  },
  {
    q: "Can I fall asleep at a screening?",
    a: "Yes. That's part of the concept. You're on a mattress. We'll wake you gently when the film ends. This is not a hotel.",
  },
  {
    q: "Do you do same-day delivery?",
    a: "Sometimes. Depends on the model and the day. Ask in-store. If a model is in stock and the truck is available, we can usually schedule next-day.",
  },
  {
    q: "What brands do you carry?",
    a: "East Bay Mattress sells its own floor models — named for local landmarks. Every model on the floor is available to buy.",
  },
];

export default function Visit() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="visit" className="py-14 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <div className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
            Visit Us
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Showroom &amp; Contact
          </h2>
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
                  <div className="text-xs text-gray-500 font-medium">
                    {SITE.address.street}
                  </div>
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

          {/* Right: FAQ */}
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">
              Frequently Asked
            </div>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                >
                  <button
                    type="button"
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-sm font-semibold text-gray-800 pr-4">{faq.q}</span>
                    <span className={`text-gray-400 flex-shrink-0 text-lg transition-transform ${openFaq === i ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
