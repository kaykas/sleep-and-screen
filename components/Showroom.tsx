"use client";

import Image from "next/image";
import { useState } from "react";

// AI-generated mattress product photos — served locally
const PHOTOS: Record<string, string> = {
  "shoreline-hybrid":    "/products/shoreline-hybrid.png",
  "nightwatch-cooling":  "/products/nightwatch-cooling.png",
  "estuary-latex":       "/products/estuary-latex.png",
  "gravel-road-firm":    "/products/gravel-road-firm.png",
  "memory-cloud-plush":  "/products/memory-cloud-plush.png",
  "harborview-800":      "/products/harborview-800.png",
  "harborview-500":      "/products/harborview-500.png",
  "silvercrest-latex":   "/products/silvercrest-latex.png",
};

const TYPE_LABEL: Record<string, string> = {
  hybrid: "Hybrid",
  memory_foam: "Memory Foam",
  latex: "Natural Latex",
  innerspring: "Innerspring",
  foam: "Foam",
};

const BADGE_STYLES: Record<string, string> = {
  "Most Popular": "bg-[#1d4ed8] text-white",
  "Staff Pick": "bg-[#0f766e] text-white",
  "Best Value": "bg-[#dc2626] text-white",
  Premium: "bg-[#6d28d9] text-white",
  New: "bg-gray-900 text-white",
};

function Stars({ rating, count }: { rating: number; count: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            className={`w-3.5 h-3.5 ${
              i <= full
                ? "text-[#f59e0b]"
                : i === full + 1 && half
                ? "text-[#f59e0b]"
                : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-gray-500">{count}</span>
    </div>
  );
}

const products = [
  {
    id: "ebm-001",
    name: "Bay Rest Shoreline Hybrid",
    type: "hybrid",
    badge: "Most Popular",
    comfort_level: "Medium",
    comfort_scale: 3,
    best_for_sleepers: ["Side", "Back", "Combo"],
    rating: 4.7,
    review_count: 214,
    regular: 999,
    sale: 749,
    financing: "from $21/mo",
    image_key: "shoreline-hybrid",
    theater: "Floor 2, Row B",
    evening_pairing: null,
  },
  {
    id: "ebm-002",
    name: "Bay Rest Nightwatch Cooling Hybrid",
    type: "hybrid",
    badge: "Staff Pick",
    comfort_level: "Medium Plush",
    comfort_scale: 4,
    best_for_sleepers: ["Side", "Back"],
    rating: 4.8,
    review_count: 187,
    regular: 1199,
    sale: 1099,
    financing: "from $31/mo",
    image_key: "nightwatch-cooling",
    theater: "Floor 1, Center",
    evening_pairing: "Runs cool through a double feature. Holds its shape.",
  },
  {
    id: "ebm-003",
    name: "Bay Rest Estuary Natural Latex",
    type: "latex",
    badge: "Premium",
    comfort_level: "Plush",
    comfort_scale: 4,
    best_for_sleepers: ["Side", "Combo"],
    rating: 4.9,
    review_count: 98,
    regular: 1699,
    sale: null,
    financing: "from $47/mo",
    image_key: "estuary-latex",
    theater: "Floor 3, Row A",
    evening_pairing: null,
  },
  {
    id: "ebm-004",
    name: "Bay Rest Gravel Road Innerspring",
    type: "innerspring",
    badge: "Best Value",
    comfort_level: "Firm",
    comfort_scale: 1,
    best_for_sleepers: ["Back", "Stomach"],
    rating: 4.4,
    review_count: 342,
    regular: 499,
    sale: 399,
    financing: "from $11/mo",
    image_key: "gravel-road-firm",
    theater: "Floor 2, Row C",
    evening_pairing: null,
  },
  {
    id: "ebm-005",
    name: "Bay Rest Memory Cloud Plush",
    type: "memory_foam",
    badge: null,
    comfort_level: "Ultra Plush",
    comfort_scale: 5,
    best_for_sleepers: ["Side"],
    rating: 4.6,
    review_count: 156,
    regular: 849,
    sale: 749,
    financing: "from $21/mo",
    image_key: "memory-cloud-plush",
    theater: "Floor 1, Row C",
    evening_pairing: null,
  },
  {
    id: "ebm-006",
    name: "Harborview 800 Hybrid",
    type: "hybrid",
    badge: "New",
    comfort_level: "Medium Firm",
    comfort_scale: 2,
    best_for_sleepers: ["Back", "Combo"],
    rating: 4.5,
    review_count: 43,
    regular: 1099,
    sale: null,
    financing: "from $31/mo",
    image_key: "harborview-800",
    theater: "Floor 3, Row B",
    evening_pairing: null,
  },
  {
    id: "ebm-007",
    name: "Harborview 500 Memory Foam",
    type: "memory_foam",
    badge: null,
    comfort_level: "Medium",
    comfort_scale: 3,
    best_for_sleepers: ["Side", "Back"],
    rating: 4.3,
    review_count: 289,
    regular: 599,
    sale: 499,
    financing: "from $14/mo",
    image_key: "harborview-500",
    theater: "Floor 1, Row D",
    evening_pairing: null,
  },
  {
    id: "ebm-008",
    name: "SilverCrest Latex Hybrid",
    type: "hybrid",
    badge: null,
    comfort_level: "Plush",
    comfort_scale: 4,
    best_for_sleepers: ["Side", "Back", "Combo"],
    rating: 4.7,
    review_count: 71,
    regular: 1399,
    sale: 1199,
    financing: "from $33/mo",
    image_key: "silvercrest-latex",
    theater: "Floor 2, Row A",
    evening_pairing: "Comfortable for the whole film. Doesn't run warm.",
  },
];

const COMFORT_FILTERS = ["All", "Firm", "Medium Firm", "Medium", "Medium Plush", "Plush"];
export default function Showroom() {
  const [comfortFilter, setComfortFilter] = useState("All");
  const [sortBy, setSortBy] = useState("recommended");

  const filtered = products
    .filter((p) => {
      if (comfortFilter !== "All" && p.comfort_level !== comfortFilter) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return (a.sale ?? a.regular) - (b.sale ?? b.regular);
      if (sortBy === "price-desc") return (b.sale ?? b.regular) - (a.sale ?? a.regular);
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // recommended
    });

  return (
    <section id="showroom" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
            On the Floor Now
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Shop Mattresses
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {filtered.length} models on the showroom floor · every price includes delivery and setup
              </p>
            </div>
            <a
              href="#visit"
              className="bg-[#1d4ed8] hover:bg-blue-800 text-white font-bold text-sm px-6 py-3 rounded transition-colors whitespace-nowrap"
            >
              Visit Showroom →
            </a>
          </div>
        </div>

        {/* No-pressure bar */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 flex gap-3 items-start">
          <span className="text-blue-600 text-lg flex-shrink-0 mt-0.5 font-black">i</span>
          <p className="text-sm text-blue-700 leading-relaxed">
            <span className="font-bold">No pressure, no commission.</span>{" "}
            Walk in and try any mattress. Staff are available if you want them, absent if you don&apos;t.
          </p>
        </div>

        {/* Filter + Sort bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-2 mr-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
            </svg>
            <span className="text-sm font-medium text-gray-600">Filter:</span>
          </div>

          {/* Comfort filter */}
          <div className="flex flex-wrap gap-2">
            {COMFORT_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setComfortFilter(f)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                  comfortFilter === f
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs text-gray-500">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="recommended">Recommended</option>
              <option value="rating">Highest Rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const isSale = p.sale !== null;
            const displayPrice = p.sale ?? p.regular;
            const saveAmount = isSale ? p.regular - (p.sale as number) : 0;
            const savePct = isSale ? Math.round((saveAmount / p.regular) * 100) : 0;
            const badgeStyle = p.badge ? BADGE_STYLES[p.badge] ?? "bg-gray-800 text-white" : null;

            return (
              <div
                key={p.id}
                className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg rounded-2xl overflow-hidden transition-all duration-200 flex flex-col group"
              >
                {/* Photo */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <Image
                    src={PHOTOS[p.image_key]}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Sale banner */}
                  {isSale && (
                    <div className="absolute top-3 left-3 bg-[#dc2626] text-white text-[11px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full shadow">
                      Save ${saveAmount.toLocaleString()}
                    </div>
                  )}

                  {/* Badge — top right */}
                  {p.badge && badgeStyle && (
                    <div className={`absolute top-3 right-3 text-[11px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full shadow ${badgeStyle}`}>
                      {p.badge}
                    </div>
                  )}

                  {/* Type chip at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 pt-6 pb-3">
                    <span className="text-white text-[11px] font-bold uppercase tracking-wider">
                      {TYPE_LABEL[p.type]}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Ratings */}
                  <Stars rating={p.rating} count={p.review_count} />

                  {/* Name + type */}
                  <h3 className="text-base font-extrabold text-gray-900 mt-2 leading-snug">
                    {p.name}
                  </h3>

                  {/* Comfort */}
                  <div className="flex items-center gap-2 mt-2 mb-3">
                    <span className="text-xs text-gray-500">Comfort:</span>
                    <span className="text-xs font-semibold text-gray-700">{p.comfort_level}</span>
                    {/* Visual scale dots */}
                    <div className="flex gap-0.5 ml-auto">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i <= p.comfort_scale ? "bg-blue-500" : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Best for */}
                  <div className="text-xs text-gray-500 mb-4">
                    Best for:{" "}
                    <span className="text-gray-700 font-medium">
                      {p.best_for_sleepers.join(", ")} sleepers
                    </span>
                  </div>

                  {/* Evening Hours pairing */}
                  {p.evening_pairing && (
                    <div className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 mb-4 text-xs text-gray-500 italic leading-relaxed">
                      <span className="not-italic text-[10px] font-bold uppercase tracking-wide text-gray-400 block mb-0.5">
                        Evening Hours pick
                      </span>
                      {p.evening_pairing}
                    </div>
                  )}

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Price block */}
                  <div className="border-t border-gray-100 pt-4 mt-2">
                    <div className="text-[11px] text-gray-400 mb-0.5">Starting at (Queen)</div>
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        {isSale ? (
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-extrabold text-[#dc2626]">
                              ${displayPrice.toLocaleString()}
                            </span>
                            <span className="text-sm text-gray-400 line-through">
                              ${p.regular.toLocaleString()}
                            </span>
                            <span className="text-xs font-bold text-[#dc2626] bg-red-50 px-1.5 py-0.5 rounded">
                              {savePct}% off
                            </span>
                          </div>
                        ) : (
                          <span className="text-2xl font-extrabold text-gray-900">
                            ${displayPrice.toLocaleString()}
                          </span>
                        )}
                        <div className="text-[10px] text-gray-400 mt-0.5">{p.financing} · delivery included</div>
                      </div>

                      <a
                        href="#visit"
                        className="bg-[#1d4ed8] hover:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap flex-shrink-0"
                      >
                        Ask &amp; Try It
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-gray-400 text-center">
          All prices shown for Queen size. King, Full, and Twin available on most models.
          0% financing available. Prices include free delivery and setup within the East Bay.
        </p>
      </div>
    </section>
  );
}
