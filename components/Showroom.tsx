// Showroom — Product cards. Retail e-commerce style.
// Each mattress has a small secondary "In the theater" note — deadpan, not featured.

const mattresses = [
  {
    name: "San Pablo Classic",
    type: "Innerspring",
    firmness: "Medium",
    price: "$649",
    salePrice: "$449",
    onSale: true,
    features: [
      "Pocketed coil system",
      "Cooling top panel",
      "Edge support foam",
      "10-year warranty",
    ],
    badge: null,
    theater: "Floor 2, Row B",
  },
  {
    name: "Diablo Plush",
    type: "Memory Foam",
    firmness: "Soft",
    price: "$849",
    salePrice: "$649",
    onSale: true,
    features: [
      "3-inch gel memory foam",
      "Motion isolation",
      "CertiPUR certified",
      "12-year warranty",
    ],
    badge: "Most Popular",
    theater: "Floor 1, Center",
  },
  {
    name: "Treat Hybrid",
    type: "Hybrid",
    firmness: "Firm",
    price: "$1,099",
    salePrice: null,
    onSale: false,
    features: [
      "Coil + foam hybrid",
      "Lumbar support zone",
      "Breathable cover",
      "12-year warranty",
    ],
    badge: "Best Seller",
    theater: "Floor 3, Row A",
  },
  {
    name: "Mount Diablo Luxury",
    type: "Latex Hybrid",
    firmness: "Medium-Firm",
    price: "$1,499",
    salePrice: "$1,199",
    onSale: true,
    features: [
      "Natural latex comfort layer",
      "Zoned lumbar support",
      "Temperature neutral",
      "15-year warranty",
    ],
    badge: null,
    theater: "Floor 2, Center",
  },
  {
    name: "Berkeley Nights",
    type: "Foam",
    firmness: "Medium-Soft",
    price: "$599",
    salePrice: "$499",
    onSale: true,
    features: [
      "CertiPUR foam",
      "Side-sleeper profile",
      "Low-profile base",
      "10-year warranty",
    ],
    badge: null,
    theater: "Floor 1, Row C",
  },
  {
    name: "Crestwood Euro Top",
    type: "Innerspring",
    firmness: "Medium-Plush",
    price: "$1,249",
    salePrice: null,
    onSale: false,
    features: [
      "Euro pillow-top",
      "Dual-coil base",
      "Reinforced perimeter",
      "12-year warranty",
    ],
    badge: null,
    theater: "Floor 3, Row B",
  },
];

const firmnessBar: Record<string, { pct: number; label: string }> = {
  Soft: { pct: 20, label: "Soft" },
  "Medium-Soft": { pct: 35, label: "Med-Soft" },
  Medium: { pct: 50, label: "Medium" },
  "Medium-Plush": { pct: 45, label: "Med-Plush" },
  "Medium-Firm": { pct: 65, label: "Med-Firm" },
  Firm: { pct: 85, label: "Firm" },
};

export default function Showroom() {
  return (
    <section id="showroom" className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
              On the Floor Now
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Best Sellers &amp; Sale Picks
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Every model below is on the showroom floor. Try it before you buy it. No appointment needed.
            </p>
          </div>
          <a
            href="#visit"
            className="bg-[#1d4ed8] hover:bg-blue-800 text-white font-bold text-sm px-6 py-3 rounded transition-colors"
          >
            Visit Showroom →
          </a>
        </div>

        {/* Daytime note */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 flex gap-3 items-start">
          <span className="text-blue-600 text-lg flex-shrink-0 mt-0.5 font-black">i</span>
          <div>
            <div className="text-sm font-bold text-blue-800 mb-0.5">
              No pressure, no commission
            </div>
            <p className="text-sm text-blue-700 leading-relaxed">
              Walk in during store hours. Try any mattress. Staff are available if you want them,
              absent if you don&apos;t. Every mattress price includes delivery and setup.
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mattresses.map((m) => {
            const fb = firmnessBar[m.firmness] ?? { pct: 50, label: m.firmness };
            return (
              <div
                key={m.name}
                className="bg-white border border-gray-200 hover:border-blue-400 hover:shadow-md rounded-xl overflow-hidden transition-all flex flex-col relative"
              >
                {/* Sale ribbon */}
                {m.onSale && (
                  <div className="absolute top-0 left-0 bg-[#dc2626] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-br-lg z-10">
                    Sale
                  </div>
                )}
                {m.badge && !m.onSale && (
                  <div className="absolute top-0 left-0 bg-[#1d4ed8] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-br-lg z-10">
                    {m.badge}
                  </div>
                )}
                {m.badge && m.onSale && (
                  <div className="absolute top-0 right-0 bg-[#1d4ed8] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-bl-lg z-10">
                    {m.badge}
                  </div>
                )}

                {/* Faux product image block */}
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-36 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-1">🛏</div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {m.type}
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-extrabold text-gray-900 mb-0.5">{m.name}</h3>
                  <div className="text-xs text-gray-500 mb-3">{m.type}</div>

                  {/* Firmness bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-400">Soft</span>
                      <span className="text-gray-700 font-semibold">{fb.label}</span>
                      <span className="text-gray-400">Firm</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${fb.pct}%` }}
                      />
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Evening Hours note — small, deadpan */}
                  <div className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 mb-4">
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                      Evening Hours
                    </div>
                    <div className="text-xs text-gray-500">{m.theater} · faces the screen</div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-end justify-between">
                    <div>
                      {m.onSale && m.salePrice ? (
                        <>
                          <div className="text-[11px] text-gray-400 line-through leading-none mb-0.5">
                            {m.price}
                          </div>
                          <div className="text-2xl font-extrabold text-[#dc2626]">
                            {m.salePrice}
                          </div>
                        </>
                      ) : (
                        <div className="text-2xl font-extrabold text-gray-900">{m.price}</div>
                      )}
                      <div className="text-[10px] text-gray-400 mt-0.5">
                        Queen · delivery included
                      </div>
                    </div>
                    <button
                      type="button"
                      className="bg-[#1d4ed8] hover:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 rounded transition-colors"
                    >
                      Ask &amp; Try It
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-gray-400 text-center">
          All prices for Queen size. King, Full, and Twin available in most models. Financing available.
          Prices include delivery and setup within the East Bay area. Old mattress removal $40.
        </p>
      </div>
    </section>
  );
}
