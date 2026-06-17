export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#f5f0e8 1px, transparent 1px), linear-gradient(90deg, #f5f0e8 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Purple glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Day/Night badge */}
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-sans tracking-widest uppercase text-[#d97706] border border-[#d97706]/30 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] animate-pulse inline-block" />
            Open Daily · Showtime 8 PM
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl">
          A mattress store
          <br />
          <span className="text-[#7c3aed]">until showtime.</span>
        </h1>

        {/* Subhead */}
        <p className="text-xl md:text-2xl text-[#9ca3af] max-w-xl mb-4 leading-relaxed">
          By day: a real mattress showroom in Concord.
          <br />
          By night: a curated cinema where you watch from the beds.
        </p>

        <p className="text-base text-[#6b7280] max-w-lg mb-10 font-sans">
          Try the mattress. Stay for the movie.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#tonight"
            className="inline-flex items-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-sans font-medium px-7 py-4 rounded text-base transition-colors"
          >
            <span className="text-[#a78bfa]">▶</span>
            See Tonight&apos;s Screening
          </a>
          <a
            href="#showroom"
            className="inline-flex items-center gap-2 border border-[#2d2d2d] hover:border-[#444] text-[#f5f0e8] font-sans font-medium px-7 py-4 rounded text-base transition-colors"
          >
            Browse the Showroom
          </a>
        </div>

        {/* Quick stats */}
        <div className="mt-16 pt-10 border-t border-[#1a1a1a] grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "30+", label: "Films per season" },
            { value: "8 PM", label: "Nightly showtime" },
            { value: "12", label: "Mattress models" },
            { value: "Free", label: "Parking, always" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold text-[#f5f0e8]">
                {stat.value}
              </div>
              <div className="text-sm text-[#6b7280] font-sans mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
