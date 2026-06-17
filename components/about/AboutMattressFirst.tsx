import { SITE } from "@/lib/content";

export default function AboutMattressFirst() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: headline + copy */}
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-[#1d4ed8] mb-3">
              A mattress store first
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
              The showroom floor is open.
              Walk in, no appointment.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                East Bay Mattress carries innerspring, memory foam, and hybrid mattresses across
                a full retail showroom floor. Every model is priced and available to purchase.
                Staff are present but not hovering — walk in and spend as much or as little time
                as you want.
              </p>
              <p>
                Local delivery includes setup and packaging removal. Old mattress removal is
                available at delivery. A 120-night trial covers every size on every model.
              </p>
              <p>
                Hours are Monday through Saturday, 10 AM to 6 PM, Sundays 11 AM to 5 PM.
                The showroom is on San Pablo Ave in Berkeley — the address is{" "}
                <span className="font-semibold text-gray-800">{SITE.address.street}</span>.
              </p>
            </div>
          </div>

          {/* Right: retail fact cards */}
          <div className="space-y-4 mt-2">
            {[
              {
                label: "Showroom",
                value: "Full floor — 12+ models",
                detail: "No appointment needed. Walk in any time during store hours.",
              },
              {
                label: "Delivery",
                value: "Local delivery + setup",
                detail: "We carry it in, set up the frame, remove all packaging. Old mattress removal $40.",
              },
              {
                label: "Trial",
                value: "120-night return policy",
                detail: "If it isn't working after 120 nights, we pick it up. Full refund, no restocking fee.",
              },
              {
                label: "Financing",
                value: "0% financing on approved credit",
                detail: "Applied in-store. On orders $599 and up. Minimum monthly payments required.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-5"
              >
                <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
                  {item.label}
                </div>
                <div className="text-base font-extrabold text-gray-900 mb-1">{item.value}</div>
                <div className="text-sm text-gray-500">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
