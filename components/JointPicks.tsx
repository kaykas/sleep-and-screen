import { JOINT_PICKS } from "@/lib/content";

const sharedPicks = [
  { film: "Gummo", year: 1997, note: "The anchor. Small-town damage, strange warmth, no clean explanation. This is the north star for the stranger side of Evening Hours." },
  { film: "The Terminator", year: 1984, note: "The counterweight. Lean, practical, relentless. If Gummo is one pole, this is the other." },
  { film: "Spring Breakers", year: 2012, note: "Harmony Korine makes a neon crime film that looks louder than it behaves. Good on a mattress because the pace keeps drifting." },
  { film: "Serial Mom", year: 1994, note: "John Waters played completely straight. Suburbia, murder, manners. Exactly the kind of joke this place understands." },
  { film: "Holy Motors", year: 2012, note: "A shape-shifting Paris day that refuses to explain itself. The kind of pick that makes the calendar feel less safe." },
  { film: "Under the Skin", year: 2013, note: "Cold, quiet, unsettling. The score does most of the work. Better in a room where nobody is pretending it is casual." },
  { film: "First Wives Club", year: 1996, note: "Funny, broad, and sharper than people remember. It earns the Breakup Night mattress-support joke." },
  { film: "Smithereens", year: 1982, note: "Ambition with no plan, downtown without romance. A good Hometown Night cousin." },
  { film: "Wet Hot American Summer", year: 2001, note: "A summer closer that commits to its own rules. Funnier when paired with something that should not pair with it." },
  { film: "Wayne's World", year: 1992, note: "A double-feature staple. The camera looks are better than you remember. The room knows every line anyway." },
];

export default function JointPicks() {
  return (
    <section id="picks" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-3 block">
            Programming
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {JOINT_PICKS.sectionLabel}
          </h2>
          <p className="text-[#9ca3af] font-sans text-sm max-w-2xl leading-relaxed">
            Alexandra and Kitrina program this together. The picks are shared, not separate lanes.
            Some nights are stranger, some are louder, and some are just what sounded good from a mattress in the showroom on San Pablo Ave.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {sharedPicks.map((pick, i) => (
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
                <span className="text-[10px] font-sans bg-[#7c3aed]/15 text-[#a78bfa] border border-[#7c3aed]/20 px-1.5 py-0.5 rounded">
                  A+K Pick
                </span>
              </div>
              <p className="text-xs text-[#9ca3af] font-sans leading-relaxed italic pl-8">
                &ldquo;{pick.note}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#1a1a1a]">
          <p className="text-xs font-sans text-[#4b5563] max-w-2xl">
            Programming note: the calendar is not chasing prestige. If something is here, it is because Alexandra and Kitrina both want it in the room. That is the whole bar.
          </p>
        </div>
      </div>
    </section>
  );
}
