// Concessions After Dark — Night Counter
// Candy, popcorn, soda, and film-night specials including Gummo spaghetti

type ConcessionItem = {
  name: string;
  price: string;
  description: string;
  tag?: string;
  tagColor?: string;
  icon: string;
};

type FilmSpecial = {
  film: string;
  year: number;
  item: string;
  description: string;
  price: string;
  icon: string;
};

const standards: ConcessionItem[] = [
  {
    name: "Popcorn",
    price: "Included",
    description: "Salted. Included with every admission. Refills at the counter.",
    icon: "◎",
    tag: "Always",
    tagColor: "text-[#fbbf24] bg-[#d97706]/10 border-[#d97706]/20",
  },
  {
    name: "Junior Mints",
    price: "$3",
    description: "The original cinema candy. We stock the full-size box, not the concession-stand shrinkflation version.",
    icon: "◆",
  },
  {
    name: "Milk Duds",
    price: "$3",
    description: "Caramel-coated toffee covered in milk chocolate. Takes ten minutes to eat one. Good for long films.",
    icon: "◆",
  },
  {
    name: "Red Vines",
    price: "$3",
    description: "Original Red Vines. Not Twizzlers. The distinction matters.",
    icon: "◆",
  },
  {
    name: "Sour Patch Kids",
    price: "$3",
    description: "Theatre-size bag. Good for the first half of any film before your mouth gives out.",
    icon: "◆",
  },
  {
    name: "Reese's Pieces",
    price: "$3",
    description: "Peanut butter in a candy shell. Historically the correct ET viewing companion.",
    icon: "◆",
  },
  {
    name: "Butterfinger",
    price: "$2",
    description: "Standard bar. Loud wrapper. Please open before the film starts.",
    icon: "◆",
  },
  {
    name: "Whoppers",
    price: "$3",
    description: "Malted milk balls. Divisive. We carry them because enough people ask.",
    icon: "◆",
  },
];

const drinks: ConcessionItem[] = [
  {
    name: "House Soda",
    price: "$4",
    description: "Coke, Diet Coke, Sprite, or root beer. 22 oz. Free refills during the film.",
    icon: "▲",
  },
  {
    name: "Sparkling Water",
    price: "$3",
    description: "Canned. No-flavor or lime. For the people who want to feel good about the $10 ticket.",
    icon: "▲",
  },
  {
    name: "Iced Coffee",
    price: "$5",
    description: "Cold brew over ice. Available pre-screening only — we stop serving at showtime to reduce noise.",
    icon: "▲",
  },
  {
    name: "Tea (hot)",
    price: "$4",
    description: "Chamomile or English Breakfast. You're on a mattress. Might as well commit.",
    icon: "▲",
  },
];

const filmSpecials: FilmSpecial[] = [
  {
    film: "Gummo",
    year: 1997,
    item: "Gummo Spaghetti",
    description: "Spaghetti in a paper bowl with a plastic fork. Plain red sauce. Eaten in a bathtub or at your mattress — your call. Served only on Gummo nights. This is not a joke and it is not fine dining.",
    price: "$6",
    icon: "⬡",
  },
  {
    film: "The Rocky Horror Picture Show",
    year: 1975,
    item: "Toast (dry)",
    description: "One slice of plain white toast in a paper bag. Context provided at screening. We will not explain further.",
    price: "$1",
    icon: "⬡",
  },
  {
    film: "Eraserhead",
    year: 1977,
    item: "The Radiator Cookie",
    description: "A pale shortbread cookie in a wax paper sleeve. No flavor notes on the packaging. Served in silence.",
    price: "$2",
    icon: "⬡",
  },
  {
    film: "Safe",
    year: 1995,
    item: "Filtered Water",
    description: "One sealed cup of filtered water. Served without comment.",
    price: "$3",
    icon: "⬡",
  },
  {
    film: "Come and See",
    year: 1985,
    item: "Nothing",
    description: "There is no special for Come and See. The popcorn will still be there but we won't recommend it.",
    price: "—",
    icon: "⬡",
  },
];

export default function Concessions() {
  return (
    <section id="concessions" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-3 block">
            Food &amp; Drink
          </span>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                Night Counter
              </h2>
              <p className="text-[#9ca3af] font-sans text-sm max-w-xl leading-relaxed">
                Concessions open at 7 PM, one hour before showtime. Counter closes when the film starts. Order early.
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs font-sans text-[#6b7280]">Counter opens</div>
              <div className="text-sm font-medium text-[#f5f0e8] font-sans">7:00 PM nightly</div>
            </div>
          </div>
        </div>

        {/* Popcorn + Candy section */}
        <div className="mb-14">
          <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-6">
            Candy &amp; Popcorn
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {standards.map((item) => (
              <div
                key={item.name}
                className="bg-[#111] border border-[#1f1f1f] hover:border-[#2d2d2d] rounded-lg p-5 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#d97706] text-sm">{item.icon}</span>
                    <span className="font-medium text-sm text-[#f5f0e8]">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-[#f5f0e8] font-sans ml-2 flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                {item.tag && (
                  <span
                    className={`inline-block text-[10px] font-sans border px-1.5 py-0.5 rounded mb-2 ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>
                )}
                <p className="text-xs text-[#6b7280] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Drinks */}
        <div className="mb-14">
          <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-6">
            Drinks
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {drinks.map((item) => (
              <div
                key={item.name}
                className="bg-[#111] border border-[#1f1f1f] hover:border-[#2d2d2d] rounded-lg p-5 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#60a5fa] text-sm">{item.icon}</span>
                    <span className="font-medium text-sm text-[#f5f0e8]">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-[#f5f0e8] font-sans ml-2 flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-[#6b7280] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Film Night Specials */}
        <div>
          <div className="mb-6">
            <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-2">
              Film-Night Specials
            </div>
            <p className="text-sm text-[#9ca3af] font-sans leading-relaxed max-w-xl">
              Select screenings have a food item chosen to match the film. These are listed in the program notes. They are optional. Some are better ideas than others.
            </p>
          </div>

          <div className="space-y-4">
            {filmSpecials.map((special) => (
              <div
                key={special.film}
                className="bg-[#111] border border-[#1f1f1f] hover:border-[#f87171]/20 rounded-lg p-6 transition-colors group"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-[#f87171] text-sm flex-shrink-0">{special.icon}</span>
                      <span className="font-bold text-[#f5f0e8] group-hover:text-[#f87171] transition-colors">
                        {special.item}
                      </span>
                      <span className="text-xs font-sans text-[#6b7280] border border-[#1f1f1f] px-2 py-0.5 rounded">
                        {special.film}, {special.year}
                      </span>
                    </div>
                    <p className="text-sm text-[#9ca3af] font-sans leading-relaxed">
                      {special.description}
                    </p>
                  </div>
                  <div className="text-xl font-bold text-[#f5f0e8] flex-shrink-0 font-sans">
                    {special.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gummo callout */}
          <div className="mt-8 bg-[#111] border border-[#f87171]/20 rounded-lg p-6">
            <div className="flex gap-4 items-start">
              <span className="text-[#f87171] text-xl flex-shrink-0 mt-0.5">⬡</span>
              <div>
                <div className="text-sm font-medium text-[#f87171] font-sans mb-1">
                  On Gummo nights
                </div>
                <p className="text-sm text-[#9ca3af] font-sans leading-relaxed">
                  Harmony Korine&apos;s 1997 film features a scene of a boy eating spaghetti in a bathtub. We serve spaghetti on Gummo nights. You may eat it in the bed. The sauce is red. The film is stranger than you remember. Popcorn is still available if you prefer to stay on comfortable ground.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-xs font-sans text-[#2d2d2d] text-center">
          All items cash or card. No outside food. Allergy information available at the counter. Film-night specials subject to screening schedule.
        </p>
      </div>
    </section>
  );
}
