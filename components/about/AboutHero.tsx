import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/content";

export default function AboutHero() {
  return (
    <section className="bg-white border-b border-gray-100">
      {/* ── Hero image — wide storefront ── */}
      <div className="relative w-full overflow-hidden" style={{ maxHeight: "480px", minHeight: "260px" }}>
        <Image
          src="/images/about/storefront-day-wide.jpg"
          alt="East Bay Mattress storefront on San Pablo Ave, Berkeley — showroom windows, East Bay Mattress sign"
          width={1200}
          height={800}
          priority
          className="w-full object-cover object-center"
          style={{ maxHeight: "480px" }}
        />
        {/* Gradient overlay — bottom fade for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Overlay badge — bottom left */}
        <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
          <div className="bg-white/95 backdrop-blur-sm px-5 py-4 rounded-lg shadow-xl max-w-xs">
            <div className="text-[10px] font-extrabold tracking-widest uppercase text-[#1d4ed8] mb-1">
              San Pablo Ave · Berkeley, CA
            </div>
            <div className="text-lg font-extrabold text-gray-900 leading-tight">
              {SITE.name}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100 flex items-center gap-3 text-xs text-gray-400">
              <span className="font-semibold text-gray-600">By day:</span>
              <span>Mattress showroom</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="font-semibold text-indigo-600">By night:</span>
              <span>Evening Hours screenings</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Breadcrumb + page header ── */}
      <div className="max-w-5xl mx-auto px-6 py-8 border-b border-gray-100">
        <div className="text-xs text-gray-400 mb-3">
          <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-600">About</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              About East Bay Mattress
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              A mattress store on San Pablo Ave in Berkeley. Full showroom floor,
              local delivery, and Evening Hours film programming on selected nights after dark.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-shrink-0">
            <Link
              href="/#showroom"
              className="bg-[#dc2626] hover:bg-red-700 text-white font-extrabold text-sm px-6 py-3 rounded transition-colors text-center"
            >
              Shop Mattresses
            </Link>
            <Link
              href="/#evening-hours"
              className="border border-indigo-200 hover:border-indigo-400 text-indigo-700 font-semibold text-sm px-6 py-3 rounded transition-colors text-center"
            >
              Evening Hours calendar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
