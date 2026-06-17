import { CURATOR, SECOND_VOICE, JOINT_PICKS } from "@/lib/content";

// Films split by voice — not competing personas, just two people who like different things
const alexandrasPicks = [
  {
    film: "Spring Breakers",
    year: 2012,
    note: "Harmony Korine. Four college women rob a restaurant to fund spring break. James Franco shows up. It gets stranger from there. Visually loud, surprisingly patient.",
  },
  {
    film: "The Terminator",
    year: 1984,
    note: "Before the franchise became a franchise. A machine from 1984 Los Angeles hunting one specific person for reasons that slowly make sense. Still the best version of this story.",
  },
  {
    film: "Serial Mom",
    year: 1994,
    note: "John Waters. Kathleen Turner plays a devoted suburban mother who is also a serial killer. The humor is completely straight-faced, which is what makes it work.",
  },
  {
    film: "First Wives Club",
    year: 1996,
    note: "Three women whose ex-husbands traded up. They decide to make it expensive. Bette Midler, Goldie Hawn, Diane Keaton. It's extremely funny.",
  },
  {
    film: "Smithereens",
    year: 1982,
    note: "Susan Seidelman's first film. A woman in New York who wants to be famous with no particular plan for how. The ambition is uncomfortable to watch in the right way.",
  },
];

const kitrinasPicks = [
  {
    film: "Holy Motors",
    year: 2012,
    note: "Leos Carax. Denis Lavant plays multiple characters across one Paris day. What it means is genuinely open. What it looks like is unlike anything else.",
  },
  {
    film: "Under the Skin",
    year: 2013,
    note: "Scarlett Johansson drives around Scotland picking up men. Jonathan Glazer. The score does most of the work. It should not be as unsettling as it is.",
  },
  {
    film: "Wet Hot American Summer",
    year: 2001,
    note: "The last day of a summer camp, 1981. A comedy that commits completely to its own rules. Funnier on rewatch. David Wain.",
  },
  {
    film: "Wayne's World",
    year: 1992,
    note: "We show this as a double feature with Wayne's World 2. Both hold up. The camera-looks are better than you remember.",
  },
  {
    film: "The Eyes of Tammy Faye",
    year: 2021,
    note: "Jessica Chastain as Tammy Faye Bakker. The makeup is extraordinary. The film is more sympathetic than the premise sounds and earns it.",
  },
];

export default function JointPicks() {
  return (
    <section id="picks" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-3 block">
            Programming
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {JOINT_PICKS.sectionLabel}
          </h2>
          <p className="text-[#9ca3af] font-sans text-sm max-w-xl leading-relaxed">
            Two people pick films for this place. They don&apos;t always agree. That&apos;s the point.
            Below is what each of them keeps putting on the calendar.
          </p>
        </div>

        {/* Two-column picks */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Alexandra's column */}
          <div>
            {/* Voice card */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#1a1a1a]">
              <div className="w-9 h-9 rounded-full bg-[#7c3aed]/20 border border-[#7c3aed]/30 flex items-center justify-center text-[#a78bfa] font-bold text-base flex-shrink-0">
                {CURATOR.initial}
              </div>
              <div>
                <div className="text-sm font-medium text-[#f5f0e8] font-sans">
                  {CURATOR.firstName}
                </div>
                <div className="text-xs text-[#6b7280] font-sans">
                  {CURATOR.role}
                </div>
              </div>
            </div>

            <div className="text-xs font-sans text-[#6b7280] mb-5 leading-relaxed">
              Grew up in Concord. Watched a lot of movies in the wrong order. Interested in films where
              someone wants something badly enough that it becomes a problem.
            </div>

            <div className="space-y-4">
              {alexandrasPicks.map((pick, i) => (
                <div
                  key={pick.film}
                  className="bg-[#111] border border-[#1f1f1f] hover:border-[#7c3aed]/25 rounded-lg p-5 transition-colors group"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-[#2d2d2d] font-sans font-bold text-xs w-5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold group-hover:text-[#a78bfa] transition-colors">
                      {pick.film}
                    </h3>
                    <span className="text-[#6b7280] font-sans text-xs">{pick.year}</span>
                  </div>
                  <p className="text-xs text-[#9ca3af] font-sans leading-relaxed italic pl-8">
                    &ldquo;{pick.note}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Kitrina's column */}
          <div>
            {/* Voice card */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#1a1a1a]">
              <div className="w-9 h-9 rounded-full bg-[#d97706]/20 border border-[#d97706]/30 flex items-center justify-center text-[#f59e0b] font-bold text-base flex-shrink-0">
                {SECOND_VOICE.initial}
              </div>
              <div>
                <div className="text-sm font-medium text-[#f5f0e8] font-sans">
                  {SECOND_VOICE.firstName}
                </div>
                <div className="text-xs text-[#6b7280] font-sans">
                  {SECOND_VOICE.role}
                </div>
              </div>
            </div>

            <div className="text-xs font-sans text-[#6b7280] mb-5 leading-relaxed">
              Met Alexandra at a Roxie screening in 2019. They disagreed about it. They still do.
              Picks films with strong visual language and soundtracks you notice.
            </div>

            <div className="space-y-4">
              {kitrinasPicks.map((pick, i) => (
                <div
                  key={pick.film}
                  className="bg-[#111] border border-[#1f1f1f] hover:border-[#d97706]/25 rounded-lg p-5 transition-colors group"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-[#2d2d2d] font-sans font-bold text-xs w-5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold group-hover:text-[#f59e0b] transition-colors">
                      {pick.film}
                    </h3>
                    <span className="text-[#6b7280] font-sans text-xs">{pick.year}</span>
                  </div>
                  <p className="text-xs text-[#9ca3af] font-sans leading-relaxed italic pl-8">
                    &ldquo;{pick.note}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer note — humble, not a manifesto */}
        <div className="mt-12 pt-8 border-t border-[#1a1a1a]">
          <p className="text-xs font-sans text-[#4b5563] max-w-lg">
            Films marked with their name in the schedule are ones they specifically requested.
            Most of the programming is just what seemed good for a given week.
          </p>
          <p className="mt-3 text-xs font-sans text-[#4b5563] max-w-lg">
            Programming note: we are not trying to pick films that seem impressive. The calendar isn’t
            chasing prestige or anything that could be described as a bold arthouse choice. If something
            is on here, it’s because it’s good on a Friday night or someone genuinely wanted to watch it.
            That’s the whole bar.
          </p>
        </div>
      </div>
    </section>
  );
}
