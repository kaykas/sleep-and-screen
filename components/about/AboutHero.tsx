import Image from "next/image";
import { SITE } from "@/lib/content";

export default function AboutHero() {
  return (
    <section className="pt-[116px] md:pt-[136px] bg-white">
      {/* Wide angled day exterior — hero image */}
      <div className="relative w-full overflow-hidden" style={{ maxHeight: "520px" }}>
        <Image
          src="/images/about/storefront-day-wide.jpg"
          alt="East Bay Mattress storefront on San Pablo Ave, Berkeley — wide exterior view showing showroom windows, East Bay Mattress sign, and MOVIES neon"
          width={1200}
          height={800}
          priority
          className="w-full object-cover object-center"
          style={{ maxHeight: "520px" }}
        />
        {/* Overlay badge */}
        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-3 rounded shadow-lg">
          <div className="text-xs font-bold tracking-widest uppercase text-[#1d4ed8] mb-0.5">
            San Pablo Ave · Berkeley, CA
          </div>
          <div className="text-base font-extrabold text-gray-900">
            {SITE.name}
          </div>
          <div className="text-xs text-gray-500 mt-0.5">
            {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
          </div>
        </div>
      </div>

      {/* Section header below image */}
      <div className="max-w-5xl mx-auto px-6 py-10 border-b border-gray-100">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
          About East Bay Mattress
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          A mattress store on San Pablo Ave in Berkeley. Full showroom floor,
          local delivery, and Evening Hours film programming on selected nights after dark.
        </p>
      </div>
    </section>
  );
}
