// HowItWorks — Repurposed as Delivery & Service grid + Financing section
// Retail-first: explains the buying experience, delivery, and setup.
// Evening Hours gets a brief factual callout at the bottom.

const deliverySteps = [
  {
    step: "01",
    title: "Try It In the Showroom",
    body: "Walk in any day 10 AM–6 PM. No appointment. Take as long as you need. Staff won't follow you around.",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    step: "02",
    title: "Pick Your Date",
    body: "Same-day pickup available. Or schedule delivery — we cover Berkeley, Oakland, Alameda, and surrounding East Bay.",
    color: "text-slate-700",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
  {
    step: "03",
    title: "We Deliver & Set Up",
    body: "Our crew carries it in, assembles the frame, and removes all packaging. Old mattress removal for $40.",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    step: "04",
    title: "120-Night Trial",
    body: "If the mattress isn't right, call us. We pick it up. Full refund. No restocking fee.",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
  },
];

const serviceItems = [
  ["Free delivery", "Berkeley & surrounding East Bay"],
  ["Setup included", "Frame assembly and packaging removal"],
  ["Old mattress removal", "$40, scheduled with delivery"],
  ["Warranty service", "Handled in-store — no manufacturer runaround"],
  ["Price match", "Match any local competitor's written price"],
  ["No-pressure staff", "Commission-free. They don't earn more if you spend more."],
];

export default function HowItWorks() {
  return (
    <>
      {/* Delivery steps */}
      <section id="delivery" className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
              How It Works
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              From Showroom to Bedroom
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Try it here. Take it home. Sleep on it for 120 nights. Return it free if you don&apos;t love it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deliverySteps.map((s) => (
              <div
                key={s.step}
                className={`${s.bg} ${s.border} border rounded-xl p-6`}
              >
                <div className={`text-3xl font-extrabold ${s.color} mb-3 leading-none`}>
                  {s.step}
                </div>
                <h3 className={`text-base font-extrabold ${s.color} mb-2 leading-snug`}>
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Service grid */}
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {serviceItems.map(([label, detail]) => (
              <div key={label} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-b-0">
                <span className="text-green-600 font-extrabold text-sm flex-shrink-0 mt-0.5">✓</span>
                <div>
                  <span className="text-sm font-bold text-gray-800">{label}</span>
                  <span className="text-sm text-gray-500"> — {detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing section */}
      <section id="financing" className="py-14 bg-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-blue-300 mb-3">
                Financing
              </div>
              <h2 className="text-3xl font-extrabold mb-4">
                0% Interest for 12 Months
              </h2>
              <p className="text-blue-100 text-base mb-6 leading-relaxed">
                Synchrony Bank financing. Apply in-store in minutes.
                On approved credit. On orders $599 and above. Minimum monthly payment required.
              </p>
              <a
                href="#visit"
                className="inline-block bg-white text-[#1e3a8a] font-extrabold px-8 py-4 rounded text-base hover:bg-blue-50 transition-colors"
              >
                Ask About Financing In-Store
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Min. Order", value: "$599", note: "to qualify" },
                { label: "Rate", value: "0%", note: "for 12 months" },
                { label: "Approval", value: "In-store", note: "minutes, not days" },
                { label: "Down Payment", value: "$0", note: "required at signing" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 border border-white/20 rounded-xl p-5 text-center"
                >
                  <div className="text-3xl font-extrabold text-white mb-1">{item.value}</div>
                  <div className="text-xs text-blue-200 font-medium">{item.note}</div>
                  <div className="text-[10px] text-blue-300 uppercase tracking-wide mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
