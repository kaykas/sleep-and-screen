// RetailBanner — Product categories + store value proposition
// Retail-first: financing, delivery, service, trial. Clean white/gray.

import { SITE } from "@/lib/content";

const valueProps = [
  {
    icon: "✓",
    headline: "120-Night Sleep Trial",
    sub: "Try it at home. Return it free if it isn't right.",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: "◈",
    headline: "0% Financing — 12 Months",
    sub: "Synchrony Bank. Approved in minutes. On orders $599+.",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: "🚚",
    headline: "Free Delivery & Setup",
    sub: "Berkeley, Oakland, Alameda + surrounding East Bay.",
    color: "text-slate-700",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
  {
    icon: "◎",
    headline: "Price Match Guarantee",
    sub: "Found it cheaper locally? We'll match the price.",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
  },
];

const mattressTypes = [
  {
    name: "Innerspring",
    desc: "Traditional pocketed coil. Best airflow, great for hot sleepers.",
    price: "From $499",
    tag: null,
  },
  {
    name: "Memory Foam",
    desc: "Pressure-relieving, motion isolating. Good for side sleepers.",
    price: "From $649",
    tag: null,
  },
  {
    name: "Hybrid",
    desc: "Coil core with foam comfort layers. The most popular category.",
    price: "From $899",
    tag: "Best Seller",
  },
  {
    name: "Latex Hybrid",
    desc: "Natural latex feel, responsive and temperature neutral.",
    price: "From $1,199",
    tag: null,
  },
  {
    name: "Euro Top",
    desc: "Sewn-in pillow top. Plush surface, firm base.",
    price: "From $1,049",
    tag: null,
  },
  {
    name: "Firm Support",
    desc: "Minimal contouring. Back and stomach sleepers.",
    price: "From $549",
    tag: null,
  },
];

export default function RetailBanner() {
  return (
    <>
      {/* Mattress type nav grid */}
      <section id="categories" className="bg-white border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h2 className="text-2xl font-extrabold text-gray-900">Mattresses</h2>
            <span className="text-sm text-gray-500">
              12 models on the floor · walk-in, no appointment
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {mattressTypes.map((m) => (
              <a
                key={m.name}
                href="#showroom"
                className="group border border-gray-200 hover:border-blue-400 hover:shadow-sm rounded-lg p-4 transition-all bg-white block relative"
              >
                {m.tag && (
                  <span className="absolute top-2 right-2 bg-[#dc2626] text-white text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded">
                    {m.tag}
                  </span>
                )}
                <div className="text-sm font-extrabold text-gray-900 group-hover:text-blue-700 mb-1 transition-colors pr-8">
                  {m.name}
                </div>
                <div className="text-xs text-gray-500 leading-snug mb-2">{m.desc}</div>
                <div className="text-xs font-bold text-blue-700">{m.price}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Value proposition strip */}
      <section className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {valueProps.map((v) => (
              <div
                key={v.headline}
                className={`${v.bg} ${v.border} border rounded-xl px-5 py-5 flex items-start gap-3`}
              >
                <span className={`text-xl flex-shrink-0 font-black mt-0.5 ${v.color}`}>
                  {v.icon}
                </span>
                <div>
                  <div className={`text-sm font-extrabold leading-tight mb-1 ${v.color}`}>
                    {v.headline}
                  </div>
                  <div className="text-xs text-gray-600 leading-relaxed">{v.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Store info strip */}
          <div className="mt-6 pt-5 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
            <div className="flex flex-wrap gap-5 items-center">
              <span>
                <span className="font-bold text-gray-700">{SITE.name}</span>
                {" · "}
                {SITE.address.street}, {SITE.address.city}, {SITE.address.state}{" "}
                {SITE.address.zip}
              </span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span>Showroom Mon–Sun 10 AM–6 PM</span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span>Evening Hours screenings Fri 8 PM</span>
            </div>
            <span className="font-semibold text-blue-700">{SITE.phone}</span>
          </div>
        </div>
      </section>
    </>
  );
}
