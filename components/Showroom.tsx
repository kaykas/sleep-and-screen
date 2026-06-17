const mattresses = [
  {
    name: "Willow Pass Classic",
    type: "Innerspring",
    firmness: "Medium",
    price: "$649",
    features: ["Pocketed coil system", "Cooling top panel", "Edge support foam"],
    badge: null,
    cinema: "Floor 2, Row B — good projection angle",
  },
  {
    name: "Diablo Plush",
    type: "Memory Foam",
    firmness: "Soft",
    price: "$849",
    features: ["3-inch memory foam layer", "Gel infused", "Motion isolation"],
    badge: "Popular",
    cinema: "Floor 1, Center — best seat in the house",
  },
  {
    name: "Treat Firm",
    type: "Hybrid",
    firmness: "Firm",
    price: "$1,099",
    features: ["Coil + foam hybrid", "Lumbar support zone", "Breathable cover"],
    badge: null,
    cinema: "Floor 3, Row A — closest to screen",
  },
  {
    name: "Mount Diablo Luxury",
    type: "Latex Hybrid",
    firmness: "Medium-Firm",
    price: "$1,499",
    features: ["Natural latex comfort", "Zoned support", "Temperature neutral"],
    badge: "Best Viewing",
    cinema: "Floor 2, Center — widest mattress, fits two",
  },
  {
    name: "Concord Nights",
    type: "Foam",
    firmness: "Medium-Soft",
    price: "$599",
    features: ["CertiPUR foam", "Low-profile base", "Good for side sleepers"],
    badge: null,
    cinema: "Floor 1, Row C — angled to left screen half",
  },
  {
    name: "Crestwood Euro Top",
    type: "Innerspring",
    firmness: "Medium-Plush",
    price: "$1,249",
    features: ["Euro pillow-top", "Dual-coil base", "Reinforced perimeter"],
    badge: null,
    cinema: "Floor 3, Row B — raised platform",
  },
];

const firmnessColors: Record<string, string> = {
  Soft: "text-[#60a5fa]",
  "Medium-Soft": "text-[#34d399]",
  Medium: "text-[#a78bfa]",
  "Medium-Firm": "text-[#fbbf24]",
  Firm: "text-[#f87171]",
  "Medium-Plush": "text-[#f472b6]",
};

export default function Showroom() {
  return (
    <section id="showroom" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-3 block">
            The store
          </span>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                Mattress Showroom
              </h2>
              <p className="text-[#9ca3af] font-sans text-sm">
                Open 10 AM – 6 PM daily. No appointment needed.
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs font-sans text-[#6b7280]">
                Purchase a mattress?
              </div>
              <div className="text-xs font-sans text-[#a78bfa]">
                Priority reservation access for all future screenings.
              </div>
            </div>
          </div>
        </div>

        {/* Showroom note */}
        <div className="bg-[#111] border border-[#d97706]/20 rounded-lg p-5 mb-12 flex gap-4 items-start">
          <span className="text-[#d97706] text-lg flex-shrink-0 mt-0.5">☀</span>
          <div>
            <div className="text-sm font-medium text-[#d97706] font-sans mb-1">
              Daytime visitors
            </div>
            <p className="text-sm text-[#9ca3af] font-sans leading-relaxed">
              You don&apos;t need a screening reservation to browse the showroom. Walk in
              during store hours, try any mattress, and talk to staff at your own pace.
              Every mattress listed here is the same one you&apos;ll sit on at a screening.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mattresses.map((m, i) => (
            <div
              key={i}
              className="bg-[#111] border border-[#1f1f1f] hover:border-[#2d2d2d] rounded-lg p-6 flex flex-col transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold mb-0.5">{m.name}</h3>
                  <div className="text-xs font-sans text-[#6b7280]">{m.type}</div>
                </div>
                {m.badge && (
                  <span className="text-xs font-sans bg-[#7c3aed]/15 text-[#a78bfa] border border-[#7c3aed]/20 px-2 py-0.5 rounded flex-shrink-0 ml-2">
                    {m.badge}
                  </span>
                )}
              </div>

              {/* Firmness */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-sans text-[#6b7280]">
                  Firmness:
                </span>
                <span
                  className={`text-xs font-sans font-medium ${
                    firmnessColors[m.firmness] || "text-[#9ca3af]"
                  }`}
                >
                  {m.firmness}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-1.5 mb-5 flex-1">
                {m.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-xs font-sans text-[#6b7280]">
                    <span className="text-[#2d2d2d] mt-0.5 flex-shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Cinema note */}
              <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded px-3 py-2 mb-4">
                <div className="text-xs font-sans text-[#6b7280] mb-0.5">
                  In the theater:
                </div>
                <div className="text-xs font-sans text-[#9ca3af]">
                  {m.cinema}
                </div>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-[#f5f0e8]">{m.price}</div>
                <button type="button" className="text-xs font-sans bg-transparent border border-[#2d2d2d] hover:border-[#7c3aed]/50 text-[#9ca3af] hover:text-[#a78bfa] px-4 py-2 rounded transition-colors">
                  Ask About It
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs font-sans text-[#4b5563] text-center">
          All prices include delivery and setup in the Concord / East Bay area. Financing available. Terms posted in-store.
        </p>
      </div>
    </section>
  );
}
