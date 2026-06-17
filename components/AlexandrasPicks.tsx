import { CURATOR, SECOND_VOICE, JOINT_PICKS } from "@/lib/content";

// Picks are shared — both curators together. No individual attribution per film.
const picks = [
  {
    film: "Gummo",
    year: 1997,
    note: "I saw it at 19 on a borrowed VHS. I didn't talk about it for a week. That response is the correct one.",
  },
  {
    film: "The Terminator",
    year: 1984,
    note: "Pre-franchise Cameron. The machine is terrifying not because it's unstoppable but because it has no opinion of you.",
  },
  {
    film: "Smithereens",
    year: 1982,
    note: "Susan Seidelman's debut. A girl who wants to be famous in New York, circa 1982. The ambition is painful to watch.",
  },
  {
    film: "The House of Yes",
    year: 1997,
    note: "Parker Posey at maximum amplitude. A Thanksgiving film. Not a holiday recommendation.",
  },
  {
    film: "Threads",
    year: 1984,
    note: "A BBC docudrama about nuclear war in Sheffield. Watch it once. You won't need to watch it again.",
  },
];

export default function AlexandrasPicks() {
  return (
    <section id="picks" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
          {/* Left: Curator intro */}
          <div>
            <span className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-3 block">
              The curators
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {JOINT_PICKS.curatorsLabel}
              <br />
              <span className="text-[#a78bfa]">Picks</span>
            </h2>

            <div className="mb-8 space-y-4 text-[#9ca3af] font-sans text-sm leading-relaxed">
              <p>
                Two people program this place. One grew up in Concord — the long flat summers,
                the parking-lot heat, the BART that goes somewhere else.
                The other met her at a Roxie screening and disagreed about the film.
                They still do.
              </p>
              <p>
                Together they built a program for people who aren&apos;t looking for a Disney
                release or a Marvel event. People who want to lie down in the dark and watch
                something that stays with them.
              </p>
              <p>
                The mattress selection is real. The programming is personal. These are not films
                recommended because they are important. They are films that stayed with both
                of them on drives home from nowhere in particular.
              </p>
              <p>
                Some nights have a theme. Breakup Night, Insomnia Night, Hometown. The occasion
                shapes what&apos;s on screen. The mattresses don&apos;t move either way.
              </p>
            </div>

            {/* Shared curator card */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#1f1f1f]">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#7c3aed]/20 border-2 border-[#0d0d0d] flex items-center justify-center text-[#a78bfa] font-bold text-lg z-10">
                  {CURATOR.initial}
                </div>
                <div className="w-10 h-10 rounded-full bg-[#d97706]/20 border-2 border-[#0d0d0d] flex items-center justify-center text-[#f59e0b] font-bold text-lg">
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
                &ldquo;Our poles are Gummo and The Terminator. Everything in the schedule lives somewhere
                on that spectrum. Not everything is extreme. But nothing is just comfortable.&rdquo;
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
                  className="bg-[#111] border border-[#1f1f1f] hover:border-[#7c3aed]/30 rounded-lg p-6 transition-colors group"
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-[#2d2d2d] font-sans font-bold text-sm w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold group-hover:text-[#a78bfa] transition-colors">
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
              <span className="text-[#a78bfa] bg-[#7c3aed]/10 px-1.5 py-0.5 rounded text-xs">
                {JOINT_PICKS.curatorPickLabel}
              </span>{" "}
              in the schedule are ones {JOINT_PICKS.curatorsLabel} specifically requested together
              and appear at least once per season.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
