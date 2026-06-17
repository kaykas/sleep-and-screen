// UtilityBar — top gray strip
// Shows store location, contact, and the by-day/by-night dual identity in a compact row.
// Retail-standard: Mattress Firm / RoomandBoard / major local retailer pattern.

import { SITE } from "@/lib/content";

export default function UtilityBar() {
  return (
    <div className="bg-[#374151] text-gray-200 text-[11px] hidden md:block">
      <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between gap-4">
        {/* Left: store location */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <svg
              className="w-3 h-3 flex-shrink-0 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state}
            </span>
          </span>
          <span className="text-gray-500">·</span>
          <a
            href={`tel:${SITE.phone}`}
            className="hover:text-white transition-colors"
          >
            {SITE.phone}
          </a>
          <span className="text-gray-500">·</span>
          <span>Mon–Sun 10 AM–6 PM</span>
        </div>

        {/* Right: by day / by night toggle visual */}
        <div className="flex items-center gap-3">
          <span className="text-gray-400">
            <span className="text-gray-200 font-semibold">By day</span> — Mattress showroom
          </span>
          <span className="text-gray-500">·</span>
          <span className="text-gray-400">
            <span className="text-indigo-300 font-semibold">By night</span> — Evening Hours screenings
          </span>
          <span className="text-gray-500">|</span>
          <a href="#evening-hours" className="text-indigo-300 hover:text-indigo-200 transition-colors font-medium">
            See schedule →
          </a>
        </div>
      </div>
    </div>
  );
}
