import Image from "next/image";
import { SITE } from "@/lib/content";

export default function AboutStorefront() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: copy */}
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-[#1d4ed8] mb-3">
              The San Pablo Ave storefront
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
              2397 San Pablo Ave,<br />Berkeley
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                The San Pablo Ave storefront is a full-width retail space with large plate-glass
                windows facing the street. The showroom floor is visible from outside — mattresses
                on risers, price cards, the works.
              </p>
              <p>
                The <strong className="text-gray-800">East Bay Mattress</strong> sign runs across
                the top of the building. The MOVIES neon is in the window — it goes on for
                Evening Hours nights. The showtimes board is below it.
              </p>
              <p>
                Street parking is available on San Pablo Ave and on the side streets.
                AC Transit runs along San Pablo Ave with a stop at the storefront.
                Ashby and MacArthur BART stations are both reachable by bus.
              </p>
            </div>

            {/* Address card */}
            <div className="mt-8 bg-white border border-gray-200 rounded-xl p-5 inline-block">
              <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                Address
              </div>
              <div className="text-sm font-extrabold text-gray-900">{SITE.address.street}</div>
              <div className="text-sm text-gray-600">
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
                Mon–Sat 10 AM–6 PM · Sun 11 AM–5 PM
              </div>
              <div className="mt-1 text-xs font-bold text-[#1d4ed8]">{SITE.phone}</div>
            </div>
          </div>

          {/* Right: two stacked storefront images */}
          <div className="space-y-4">
            {/* Close door image */}
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/images/about/storefront-door-close.jpg"
                alt="East Bay Mattress entrance — glass door with East Bay Mattress lettering, MOVIES neon sign, hours sign, showtime board"
                width={700}
                height={560}
                className="w-full object-cover"
                style={{ maxHeight: "320px" }}
              />
            </div>
            {/* Alternate day angle */}
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/images/about/storefront-day-alt.jpg"
                alt="East Bay Mattress storefront day — angled view showing full building sign, showroom floor through windows, showtimes board"
                width={700}
                height={460}
                className="w-full object-cover"
                style={{ maxHeight: "240px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
