import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#1f2937] text-gray-300 py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-lg font-extrabold text-white uppercase tracking-tight mb-0.5">
              {SITE.name}
            </div>
            <div className="text-xs text-blue-400 font-semibold uppercase tracking-wide mb-4">
              {SITE.address.city}, {SITE.address.state} · Mattress Store
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state}{" "}
              {SITE.address.zip}.
              Showroom open daily. Evening Hours film program Fridays after 8 PM.
            </p>
            <div className="mt-4 text-sm font-bold text-blue-400">{SITE.phone}</div>
          </div>

          {/* Shop links */}
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-gray-500 mb-4">
              Shop
            </div>
            <ul className="space-y-2">
              {[
                ["Mattresses", "#showroom"],
                ["Adjustable Bases", "#showroom"],
                ["Pillows", "#showroom"],
                ["Financing", "#financing"],
                ["Delivery & Setup", "#delivery"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store + Evening Hours */}
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-gray-500 mb-4">
              Store
            </div>
            <ul className="space-y-2">
              {[
                ["Visit Showroom", "#visit"],
                ["Hours & Directions", "#visit"],
                ["Evening Hours", "#evening-hours"],
                ["Summer Calendar", "#evening-hours"],
                ["About", "/about"],
                ["Contact", "#visit"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-gray-500">
            © 2026 {SITE.name}. {SITE.address.city}, {SITE.address.state}.
          </div>
          <div className="text-xs text-gray-600">
            Mattress store by day. Evening Hours film program after dark.
            San Pablo Ave, Berkeley, CA.
          </div>
        </div>
      </div>
    </footer>
  );
}
