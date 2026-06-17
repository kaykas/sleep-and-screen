import Image from "next/image";
import { SITE } from "@/lib/content";

export default function AboutStorefront() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-10">
          <div className="text-xs font-bold tracking-widest uppercase text-[#1d4ed8] mb-2">
            The Location
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            San Pablo Ave, Berkeley
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Full-width retail storefront with large plate-glass showroom windows.
            The East Bay Mattress sign runs across the top. MOVIES neon in the window
            on screening nights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: storefront images — two stacked, well cropped */}
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/images/about/storefront-door-close.jpg"
                alt="East Bay Mattress entrance — glass door, MOVIES neon sign, showtimes board"
                width={700}
                height={520}
                className="w-full object-cover object-center"
                style={{ maxHeight: "300px" }}
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/images/about/storefront-day-alt.jpg"
                alt="East Bay Mattress storefront — angled view, full building sign, showroom floor visible through windows"
                width={700}
                height={420}
                className="w-full object-cover object-center"
                style={{ maxHeight: "200px" }}
              />
            </div>
          </div>

          {/* Right: facts and address */}
          <div className="space-y-5 mt-2">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Address</div>
              <div className="text-xl font-extrabold text-gray-900 mb-0.5">{SITE.name}</div>
              <div className="text-gray-600">{SITE.address.street}</div>
              <div className="text-gray-600 mb-3">{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</div>
              <div className="pt-3 border-t border-gray-100 text-sm text-gray-500 leading-relaxed">
                On San Pablo Ave in Berkeley, between Alcatraz Ave and Ashby Ave.
                Large storefront with the East Bay Mattress sign visible from the street.
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400 space-y-1">
                <div><span className="font-semibold text-gray-600">By car</span> — Street parking on San Pablo Ave and side streets</div>
                <div><span className="font-semibold text-gray-600">By BART</span> — Ashby or MacArthur Station, short bus or rideshare</div>
                <div><span className="font-semibold text-gray-600">By bus</span> — AC Transit lines on San Pablo Ave, stop at storefront</div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address.street + " " + SITE.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Hours</div>
              <div className="space-y-2 text-sm">
                {[
                  ["Mon–Fri", "10 AM – 6 PM", "Showroom open"],
                  ["Sat–Sun", "10 AM – 6 PM", "Showroom open"],
                  ["Fri evenings", "Doors 7 PM · Film 8 PM", "Evening Hours screenings"],
                ].map(([day, time, note]) => (
                  <div key={day} className="flex items-start gap-4 py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-bold text-gray-900 w-24 flex-shrink-0">{day}</span>
                    <div>
                      <div className="text-gray-700">{time}</div>
                      <div className="text-xs text-gray-400">{note}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-sm font-bold text-[#1d4ed8]">
                {SITE.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
