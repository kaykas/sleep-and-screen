"use client";
import { useState } from "react";
import { SITE } from "@/lib/content";

const faqs = [
  {
    q: "Do I have to buy a mattress to attend a screening?",
    a: "No. Screenings are open to anyone with a reservation. You don't need to purchase anything. But if you end up liking the mattress, staff are available during the day.",
  },
  {
    q: "Can I arrive just for the mattress showroom?",
    a: "Yes. The showroom is open 10 AM–6 PM daily, walk-in, no appointment. You won't be shown films or asked about the cinema unless you ask.",
  },
  {
    q: "What do screenings cost?",
    a: "Admission is currently by donation. We suggest $10–$15 per person. Popcorn is included. Drinks are $4. We're figuring out the business model.",
  },
  {
    q: "Can I fall asleep during the film?",
    a: "Yes. That is part of the concept. You're on a mattress. If you fall asleep, we'll wake you gently when the film ends. This is not a hotel.",
  },
  {
    q: "Is there assigned seating?",
    a: "Reservations are tied to a specific mattress. You choose when you book. If you have no preference, we'll assign one.",
  },
  {
    q: "What if I need to leave during the film?",
    a: "Quietly. We don't have an intermission policy. The exits are marked.",
  },
  {
    q: "Are the films subtitled?",
    a: "English-language films are not subtitled. Foreign-language films screen with English subtitles.",
  },
  {
    q: "Can I come with a group?",
    a: "Up to 4 reservations per booking. For groups larger than 4, email us to coordinate.",
  },
];

export default function Visit() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="visit" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-3 block">
            Get here
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Visit</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column: location + hours */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-[#111] border border-[#1f1f1f] rounded-lg p-6">
              <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-4">
                Location
              </div>
              <div className="space-y-2 mb-4">
                <div className="text-xl font-bold">{SITE.name}</div>
                <div className="text-sm font-sans text-[#9ca3af]">
                  {SITE.address.street}
                </div>
                <div className="text-sm font-sans text-[#9ca3af]">
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </div>
              </div>
              <div className="text-xs font-sans text-[#6b7280] leading-relaxed">
                Willow Pass retail corridor, between Treat Blvd and Oak Grove Rd.
                In the strip center with the nail salon and the UPS store. The mattress store is obvious. Look for the purple sign at night.
              </div>
              <div className="mt-4 pt-4 border-t border-[#1a1a1a]">
                <div className="text-xs font-sans text-[#6b7280] mb-2">Getting here:</div>
                <ul className="space-y-1.5">
                  {[
                    ["By car", "Parking lot, free, 40 spaces, surface"],
                    ["By BART", "Concord Station, 1.4 miles, rideshare from platform"],
                    ["By bus", "County Connection Route 4, Willow Pass stop"],
                  ].map(([mode, detail]) => (
                    <li key={mode} className="flex gap-3 text-xs font-sans">
                      <span className="text-[#f5f0e8] w-16 flex-shrink-0 font-medium">{mode}</span>
                      <span className="text-[#6b7280]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#111] border border-[#1f1f1f] rounded-lg p-6">
              <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-4">
                Hours
              </div>
              <div className="space-y-2">
                {[
                  ["Mon–Fri", "10 AM – 10 PM", "Showroom 10–6, Screenings nightly"],
                  ["Sat–Sun", "10 AM – 10 PM", "Showroom 10–6, Screenings nightly"],
                  ["Showtime", "8 PM sharp", "Doors 7 PM, seats fill fast"],
                  ["Holidays", "Check schedule", "We close Christmas and July 4"],
                ].map(([day, time, note]) => (
                  <div key={day} className="flex items-start gap-4 py-2 border-b border-[#131313] last:border-b-0">
                    <span className="text-sm font-sans text-[#f5f0e8] w-20 flex-shrink-0 font-medium">{day}</span>
                    <span className="text-sm font-sans text-[#9ca3af] w-32 flex-shrink-0">{time}</span>
                    <span className="text-xs font-sans text-[#6b7280]">{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#111] border border-[#1f1f1f] rounded-lg p-6">
              <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-4">
                Contact
              </div>
              <div className="space-y-3">
                {[
                  ["Email", SITE.email],
                  ["Phone", SITE.phone],
                  ["Instagram", SITE.instagram],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-4 text-sm font-sans">
                    <span className="text-[#6b7280] w-20 flex-shrink-0">{label}</span>
                    <span className="text-[#9ca3af]">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[#1a1a1a] text-xs font-sans text-[#6b7280] leading-relaxed">
                For group reservations, press inquiries, or mattress delivery questions, email is faster.
              </div>
            </div>
          </div>

          {/* Right column: FAQ */}
          <div>
            <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-6">
              Frequently asked
            </div>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-[#1f1f1f] rounded-lg overflow-hidden"
                >
                  <button type="button"
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-[#111] transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-sm font-sans text-[#f5f0e8] pr-4">
                      {faq.q}
                    </span>
                    <span
                      className={`text-[#6b7280] flex-shrink-0 transition-transform ${
                        openFaq === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm font-sans text-[#9ca3af] leading-relaxed border-t border-[#131313] pt-4 bg-[#0d0d0d]">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-[#111] border border-[#1f1f1f] rounded-lg overflow-hidden">
              <div className="h-40 flex items-center justify-center bg-[#0d0d0d] relative">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#f5f0e8 1px, transparent 1px), linear-gradient(90deg, #f5f0e8 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative text-center">
                  <div className="text-[#a78bfa] text-2xl mb-2">◉</div>
                  <div className="text-xs font-sans text-[#6b7280]">
                    {SITE.address.street}, {SITE.address.full}
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 border-t border-[#1a1a1a]">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address.street + " " + SITE.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-sans text-[#6b7280] hover:text-[#a78bfa] transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
