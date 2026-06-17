import { CURATOR, SECOND_VOICE, JOINT_PICKS } from "@/lib/content";

// Picks are shared — both curators together. No individual per-film attribution.
const picks = [
  {
    film: "Daisies",
    year: 1966,
    note: "Vĕra Chytilová. Two women decide that since the world is spoiled, they will be too. Watched it together for the first time and didn't say anything for a while after.",
  },
  {
    film: "In My Room",
    year: 2018,
    note: "Hans Petter Moland meets Ulrich Köhler. Everyone disappears overnight. One man is left. What he does with that is very quiet and very strange.",
  },
  {
    film: "The Holy Mountain",
    year: 1973,
    note: "Jodorowsky at maximum. Alchemical, obscene, genuinely visionary. This is not a comfortable film. It is not trying to be.",
  },
  {
    film: "Come and See",
    year: 1985,
    note: "Elem Klimov. WWII, Belarus. The boy's face changes over the course of the film. It is the best anti-war film ever made and neither of us wants to see it again.",
  },
  {
    film: "Daughters of Darkness",
    year: 1971,
    note: "Harry Kümel. Delphine Seyrig as Countess Báthory at a Belgian seaside hotel in winter. Glacial and erotic and fully committed to its own strange logic.",
  },
];

export default function KitrinasPicks() {
  return (
    <section id="kitrinas-picks" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
          {/* Left: Voice intro */}
          <div>
            <span className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-3 block">
              Shared picks
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {JOINT_PICKS.curatorsLabel}
              <br />
              <span className="text-[#f59e0b]">Esoteric Picks</span>
            </h2>

            <div className="mb-8 space-y-4 text-[#9ca3af] font-sans text-sm leading-relaxed">
              <p>
                These are the films from the harder end of the calendar — the ones that reach for
                something they can&apos;t fully articulate and are better for the attempt.
              </p>
              <p>
                Art-house, cult, the emotionally sharp. Films with a charge to them — something
                left unresolved, something the director couldn&apos;t resolve because the world
                won&apos;t cooperate with tidy answers.
              </p>
              <p>
                This isn&apos;t a separate strand. It&apos;s the same program, with the harder nights
                pulled out so you know what you&apos;re walking into. Some nights you&apos;ll see
                this framing next to a title. Those are the nights worth staying for.
              </p>
              <p>
                The harder theme nights live here: Bad Date Night, Insomnia Night. If you see
                Possession or Come and See on the calendar, this is the context.
              </p>
            </div>

            {/* Shared curator card */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#1f1f1f]">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#7c3aed]/20 border-2 border-[#0a0a0a] flex items-center justify-center text-[#a78bfa] font-bold text-lg z-10">
                  {CURATOR.initial}
                </div>
                <div className="w-10 h-10 rounded-full bg-[#d97706]/20 border-2 border-[#0a0a0a] flex items-center justify-center text-[#f59e0b] font-bold text-lg">
                  {SECOND_VOICE.initial}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-[#f5f0e8] font-sans">
                  {JOINT_PICKS.curatorsLabel}
                </div>
                <div className="text-xs text-[#6b7280] font-sans">
                  Co-curators &amp; programmers
                </div>
              </div>
            </div>

            <div className="mt-8 bg-[#111] border border-[#1f1f1f] rounded-lg p-5">
              <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-2">
                Programming ethos
              </div>
              <p className="text-sm text-[#9ca3af] font-sans leading-relaxed">
                &ldquo;We want films that have a charge to them — something left unresolved, something the
                director couldn&apos;t resolve because the world won&apos;t cooperate with tidy answers.
                That&apos;s what we&apos;re looking for.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Picks list */}
          <div>
            <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-6">
              5 films they keep returning to
            </div>
            <div className="space-y-4">
              {picks.map((pick, i) => (
                <div
                  key={pick.film}
                  className="bg-[#111] border border-[#1f1f1f] hover:border-[#d97706]/30 rounded-lg p-6 transition-colors group"
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-[#2d2d2d] font-sans font-bold text-sm w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold group-hover:text-[#f59e0b] transition-colors">
                      {pick.film}
                    </h3>
                    <span className="text-[#6b7280] font-sans text-sm">
                      {pick.year}
                    </span>
                  </div>
                  <p className="text-sm text-[#9ca3af] font-sans leading-relaxed italic pl-9">
                    &ldquo;{pick.note}&rdquo;
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm font-sans text-[#6b7280]">
              Films marked{" "}
              <span className="text-[#f59e0b] bg-[#d97706]/10 px-1.5 py-0.5 rounded text-xs">
                {JOINT_PICKS.curatorPickLabel}
              </span>{" "}
              in the schedule are personally selected by {JOINT_PICKS.curatorsLabel} together.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
