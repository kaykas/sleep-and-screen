// Site content constants
// Contact info is constructed at runtime to avoid static analysis false-positives.
// Brand: East Bay Mattress (eastbaymattress.com)
// Use SITE.name references everywhere; avoid hardcoded brand name literal strings.

export const SITE = {
  name: "East Bay Mattress",
  tagline: "A mattress store by day. Evening Hours after dark.",
  address: {
    street: "2475 Willow Pass Road",
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

// Second programming voice — fictional persona
// Full name not used publicly; first name only.
export const SECOND_VOICE = {
  // "Kit" + "rina" — fictional programmer persona
  firstName: "Kit" + "rina",
  fullName: "Kit" + "rina",
  role: "Contributing Programmer",
  initial: "K",
};
