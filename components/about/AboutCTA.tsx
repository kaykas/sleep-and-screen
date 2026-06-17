import Link from "next/link";
import { SITE } from "@/lib/content";

export default function AboutCTA() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="text-xs font-bold tracking-widest uppercase text-[#1d4ed8] mb-3">
          Visit
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Come in and try the mattresses.
        </h2>
        <p className="text-gray-600 leading-relaxed mb-2">
          No appointment needed. The showroom floor is open Monday through Saturday 10 AM to 6 PM,
          Sundays 11 AM to 5 PM. Staff are present if you have questions.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip} · {SITE.phone}
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/#showroom"
            className="bg-[#dc2626] hover:bg-red-700 text-white font-extrabold px-8 py-4 rounded text-sm transition-colors"
          >
            Shop Mattresses
          </Link>
          <Link
            href="/#visit"
            className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-7 py-4 rounded text-sm transition-colors"
          >
            Hours &amp; Directions
          </Link>
          <Link
            href="/#evening-hours"
            className="border border-indigo-200 hover:border-indigo-400 text-indigo-700 font-semibold px-7 py-4 rounded text-sm transition-colors"
          >
            Evening Hours schedule
          </Link>
        </div>
      </div>
    </section>
  );
}
