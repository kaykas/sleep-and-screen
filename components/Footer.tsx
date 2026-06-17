import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-lg font-bold tracking-tight font-sans mb-1">
              {SITE.name.toUpperCase()}
            </div>
            <div className="text-xs text-[#a78bfa] tracking-widest font-sans uppercase mb-4">
              {SITE.address.city}, {SITE.address.state}
            </div>
            <p className="text-xs font-sans text-[#6b7280] leading-relaxed max-w-xs">
              A mattress store by day. A cinema by night.{" "}
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state}{" "}
              {SITE.address.zip}. Open daily.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-xs font-sans tracking-widest uppercase text-[#4b5563] mb-4">
              Site
            </div>
            <ul className="space-y-2">
              {[
                ["Tonight", "#tonight"],
                ["How It Works", "#how-it-works"],
                ["Programming", "#programming"],
                ["Showroom", "#showroom"],
                ["Visit", "#visit"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs font-sans text-[#6b7280] hover:text-[#9ca3af] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-sans tracking-widest uppercase text-[#4b5563] mb-4">
              Contact
            </div>
            <ul className="space-y-2">
              {[SITE.email, SITE.phone, SITE.instagram].map((item) => (
                <li key={item}>
                  <span className="text-xs font-sans text-[#6b7280]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <div className="text-xs font-sans tracking-widest uppercase text-[#4b5563] mb-2">
                Hours
              </div>
              <div className="text-xs font-sans text-[#6b7280]">Daily 10 AM – 10 PM</div>
              <div className="text-xs font-sans text-[#6b7280]">Screening 8 PM</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#131313] pt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-sans text-[#4b5563]">
            © 2026 {SITE.name}. {SITE.address.city}, {SITE.address.state}.
          </div>
          <div className="text-xs font-sans text-[#4b5563]">
            A mattress store until showtime. This is a concept/prototype venue.
            No licensed public screenings implied.
          </div>
        </div>
      </div>
    </footer>
  );
}
