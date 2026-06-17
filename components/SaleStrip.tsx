// SaleStrip — bold red/blue sale announcement strip
// Sits between nav and hero. High contrast, retail-standard.

export default function SaleStrip() {
  return (
    <div className="bg-[#dc2626] text-white">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span className="bg-white text-[#dc2626] text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded flex-shrink-0">
            Summer Event
          </span>
          <span className="font-extrabold text-sm truncate">
            Up to 40% Off — Innerspring, Memory Foam &amp; Hybrid Mattresses
          </span>
          <span className="hidden sm:inline text-red-200 text-sm flex-shrink-0">
            · Ends Aug 31
          </span>
        </div>
        <a
          href="#showroom"
          className="hidden sm:inline-block bg-white text-[#dc2626] hover:bg-red-50 font-extrabold text-xs px-4 py-1.5 rounded transition-colors flex-shrink-0 whitespace-nowrap"
        >
          Shop Sale →
        </a>
      </div>
    </div>
  );
}
