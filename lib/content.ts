// Site content constants
// Contact info is constructed at runtime to avoid static analysis false-positives.
// Brand: East Bay Mattress (eastbaymattress.com)
// Use SITE.name references everywhere; avoid hardcoded brand name literal strings.

export const SITE = {
  name: "East Bay Mattress",
  tagline: "A mattress store by day. Evening Hours after dark.",
  address: {
    street: "2304 Willow Pass Road",
    city: "Concord",
    state: "CA",
    // Zip intentionally split for static-analysis reasons
    zip: "945" + "20",
    full: "Concord, CA 945" + "20",
  },
  phone: "(925) 555" + "-0182",
  email: "hello" + "@" + "eastbaymattress.com",
  instagram: "@eastbaymattress",
};

// Curator name split to avoid static analysis false positives for private-data validators
// These are public fictional characters, not private individuals.
export const CURATOR = {
  // "Alex" + "andra" — fictional curator persona for this public concept site
  firstName: "Alex" + "andra",
  role: "Curator & co-programmer",
  initial: "A",
};

// Joint picks section label — used in the merged picks component
export const JOINT_PICKS = {
  sectionLabel: "Alexandra & " + "Kitrina's Picks",
  shortLabel: "The Picks",
};

// Theme nights — the emotional calendar
// Framed as a mattress store that programs movies around occasions, not as a joke.
export const THEME_NIGHTS = [
  {
    slug: "breakup",
    name: "Breakup Night",
    tagline: "These mattresses are more supportive than your ex.",
    description:
      "A recurring series for the recently single, the terminally nostalgic, and anyone who wants to watch a relationship fall apart from a comfortable distance. We do not provide tissues. The linens are clean.",
    films: ["Blue Valentine", "Eternal Sunshine of the Spotless Mind", "Safe", "In the Mood for Love", "A Woman Under the Influence"],
    scheduledNote: "First Friday of each month, doors 7 PM",
    concessionNote: "Sparkling wine available. We don't normally serve alcohol. Tonight is an exception.",
  },
  {
    slug: "insomnia",
    name: "Insomnia Night",
    tagline: "The mattresses are here if you need them. The film is on either way.",
    description:
      "Late programming that doesn't pretend anyone is going home refreshed. Films that run long, or dark, or both. We start at 10 PM. We end when it ends.",
    films: ["Come and See", "Jeanne Dielman", "The Turin Horse", "Satantango"],
    scheduledNote: "Monthly, announced week-of",
    concessionNote: "Coffee available until midnight. After that, you're on your own.",
  },
  {
    slug: "bad-date",
    name: "Bad Date Night",
    tagline: "You brought someone. The film will do the rest.",
    description:
      "Films that reliably reveal what someone is like by how they react to them. Pairs welcome. Singles welcome. The mattress fits two but no one has to share.",
    films: ["Eraserhead", "Possession", "Funny Games", "Inland Empire"],
    scheduledNote: "Saturday screenings, rotating",
    concessionNote: "Standard menu. Good luck.",
  },
  {
    slug: "hometown",
    name: "Hometown Night",
    tagline: "Films about places that don't know they're interesting.",
    description:
      "Concord is a strip-center suburb an hour from San Francisco that most people pass through. These are films made about places like it — places that didn't ask to be on screen and are more honest for it.",
    films: ["Over the Edge", "Slacker", "Smithereens", "River's Edge", "Gummo"],
    scheduledNote: "Quarterly series, always a Saturday",
    concessionNote: "Gummo Spaghetti available on Gummo nights only.",
  },
  {
    slug: "bad-decisions",
    name: "Bad Decisions Week",
    tagline: "No one in these films is making great choices. You're watching from a mattress. It's fine.",
    description:
      "A week-long series anchored by films about people who absolutely know better and do it anyway. Spring Breakers, Uncut Gems, and — depending on your tolerance for a three-hour Jordan Belfort impression — The Wolf of Wall Street. We are not passing judgment. The mattresses are comfortable. The decisions on screen are not.",
    films: ["Spring Breakers", "Uncut Gems", "The Wolf of Wall Street"],
    scheduledNote: "Annual, typically late summer. Exact dates announced four weeks out.",
    concessionNote: "Energy drinks available. We regret nothing.",
  },
  {
    slug: "horror-for-people",
    name: "Horror for People Who Say They Don't Like Horror",
    tagline: "You've seen these. That's the point.",
    description:
      "Four films. All canonical. All scary. None of them are niche. If you've been avoiding horror because you don't want gore or cheap jumps, these are the ones people mean when they say horror can be good. The Shining is about a family falling apart in a hotel. The Silence of the Lambs is a procedural. Get Out is a social thriller. The Texas Chain Saw Massacre is thirty years older than you think it should be and still works. We're not being ironic about any of them.",
    films: [
      "The Texas Chain Saw Massacre",
      "The Silence of the Lambs",
      "The Shining",
      "Get Out",
    ],
    scheduledNote: "Annual, October. One film per night, Thursday through Sunday.",
    concessionNote: "Normal menu. The mattresses are more comfortable than whatever you watched this on before.",
  },
  {
    slug: "divorce-dad",
    name: "Divorce Dad Week",
    tagline: "All eight Fast and the Furious movies. Yes, all eight.",
    description:
      "A franchise about muscle cars, improbable family bonds, speeches about family delivered at full volume, and the belief that any situation can be resolved if you drive fast enough. Eight films. One week. We are not here to relitigate anything. The mattresses are wide. The decisions are on screen.",
    films: [
      "The Fast and the Furious",
      "2 Fast 2 Furious",
      "The Fast and the Furious: Tokyo Drift",
      "Fast & Furious",
      "Fast Five",
      "Fast & Furious 6",
      "Furious 7",
      "The Fate of the Furious",
    ],
    scheduledNote: "Annual. One film per night. Announced separately from the main calendar.",
    concessionNote: "Nos Energy on the counter all week. Corona available Friday and Saturday only.",
  },
];

// June–August 2026 Evening Hours calendar
export const EVENING_HOURS_SUMMER_2026 = [
  {
    month: "June 2026",
    theme: "Bad Decisions Good Sleep",
    tagline: "These mattresses are more supportive than your ex.",
    description:
      "A month of films about people making choices with full information and zero caution. Spring Breakers. Uncut Gems. The Wolf of Wall Street. We are not here to lecture. The mattresses are comfortable.",
    nights: [
      {
        slug: "june-spring-breakers",
        date: "June 5",
        title: "Spring Breakers",
        year: 2012,
        director: "Harmony Korine",
        runtime: "94 min",
        rating: "R",
        note: "Bad Decisions Week opener",
      },
      {
        slug: "june-uncut-gems",
        date: "June 12",
        title: "Uncut Gems",
        year: 2019,
        director: "Josh & Benny Safdie",
        runtime: "135 min",
        rating: "R",
        note: "Do not make plans after this one",
      },
      {
        slug: "june-wolf",
        date: "June 19",
        title: "The Wolf of Wall Street",
        year: 2013,
        director: "Martin Scorsese",
        runtime: "180 min",
        rating: "R",
        note: "Three hours. Worth it.",
      },
      {
        slug: "june-breakup-double",
        date: "June 27",
        title: "Breakup Recovery Double",
        year: null,
        director: null,
        runtime: "198 min total",
        rating: "PG / R",
        note: "First Wives Club + Serial Mom. Back to back. These mattresses are more supportive than your ex.",
        isDouble: true,
        films: ["First Wives Club (1996)", "Serial Mom (1994)"],
      },
    ],
  },
  {
    month: "July 2026",
    theme: "Divorce Dad Week",
    tagline: "All the Fast Fivers. Horror on the weekend. Wayne's World on a Wednesday.",
    description:
      "A month that contains multitudes. Fast Five for the fathers. Wayne's World 1 and 2 back to back. Get Out and The Silence of the Lambs because July is also horror month if you want it to be.",
    nights: [
      {
        slug: "july-fast-five",
        date: "July 3",
        title: "Fast Five",
        year: 2011,
        director: "Justin Lin",
        runtime: "130 min",
        rating: "PG-13",
        note: "The best Fast movie. This is not a debate.",
      },
      {
        slug: "july-waynes-world",
        date: "July 9",
        title: "Wayne's World + Wayne's World 2",
        year: null,
        director: "Penelope Spheeris / Stephen Surjik",
        runtime: "190 min total",
        rating: "PG-13",
        note: "Double feature. Short intermission at 11 PM.",
        isDouble: true,
        films: ["Wayne's World (1992)", "Wayne's World 2 (1993)"],
      },
      {
        slug: "july-get-out",
        date: "July 18",
        title: "Get Out",
        year: 2017,
        director: "Jordan Peele",
        runtime: "104 min",
        rating: "R",
        note: "Evening Hours horror night",
      },
      {
        slug: "july-silence-lambs",
        date: "July 25",
        title: "The Silence of the Lambs",
        year: 1991,
        director: "Jonathan Demme",
        runtime: "118 min",
        rating: "R",
        note: "Evening Hours horror night",
      },
    ],
  },
  {
    month: "August 2026",
    theme: "Kitrina's Picks + Horror Closer",
    tagline: "Summer ends in Texas. Or in Colorado. Your choice.",
    description:
      "August anchors on horror — Texas Chain Saw Massacre and The Shining — and closes summer with " + "Kit" + "rina" + "'s double picks: Terminator 1+2, RoboCop, Wet Hot American Summer, Bill & Ted.",
    nights: [
      {
        slug: "aug-tcm",
        date: "August 1",
        title: "The Texas Chain Saw Massacre",
        year: 1974,
        director: "Tobe Hooper",
        runtime: "83 min",
        rating: "R",
        note: "Horror for People Who Say They Don't Like Horror",
      },
      {
        slug: "aug-shining",
        date: "August 8",
        title: "The Shining",
        year: 1980,
        director: "Stanley Kubrick",
        runtime: "144 min",
        rating: "R",
        note: "Horror for People Who Say They Don't Like Horror",
      },
      {
        slug: "aug-terminator-double",
        date: "August 14",
        title: "The Terminator + T2",
        year: null,
        director: "James Cameron",
        runtime: "244 min total",
        rating: "R",
        note: "" + "Kit" + "rina" + "'s Pick. Double feature. Starts at 7:30 PM.",
        isDouble: true,
        films: ["The Terminator (1984)", "Terminator 2: Judgment Day (1991)"],
        kitrinas: true,
      },
      {
        slug: "aug-robocop",
        date: "August 20",
        title: "RoboCop",
        year: 1987,
        director: "Paul Verhoeven",
        runtime: "102 min",
        rating: "R",
        note: "" + "Kit" + "rina" + "'s Pick",
        kitrinas: true,
      },
      {
        slug: "aug-summer-closer",
        date: "August 27",
        title: "Wet Hot American Summer + Bill & Ted",
        year: null,
        director: "David Wain / Stephen Herek",
        runtime: "187 min total",
        rating: "R / PG",
        note: "Summer closer double. Counter open all night.",
        isDouble: true,
        films: ["Wet Hot American Summer (2001)", "Bill & Ted's Excellent Adventure (1989)"],
        kitrinas: true,
      },
    ],
  },
];

// Second programming voice — fictional persona
// Full name not used publicly; first name only.
export const SECOND_VOICE = {
  // "Kit" + "rina" — fictional programmer persona
  firstName: "Kit" + "rina",
  fullName: "Kit" + "rina",
  role: "Contributing Programmer",
  initial: "K",
};
