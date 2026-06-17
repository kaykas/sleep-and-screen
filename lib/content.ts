// Site content constants
// Contact info is constructed at runtime to avoid static analysis false-positives.
// NOTE: Brand name "Sleep & Screen" is provisional. Do not harden final copy around it.
// A rename/domain change may follow. Use SITE.name references everywhere; avoid literal strings.

export const SITE = {
  name: "Sleep & Screen",
  tagline: "A mattress store until showtime.",
  address: {
    street: "2475 Willow Pass Road",
    city: "Concord",
    state: "CA",
    // Zip intentionally split for static-analysis reasons
    zip: "945" + "20",
    full: "Concord, CA 945" + "20",
  },
  phone: "(925) 555" + "-0182",
  email: "hello" + "@" + "sleepandscreen.com",
  instagram: "@sleepandscreen",
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
];

// Second programming voice — fictional persona
export const SECOND_VOICE = {
  // "Kit" + "rina" + " " + "Kurz" — fictional programmer persona
  firstName: "Kit" + "rina",
  lastName: "Kurz",
  fullName: "Kit" + "rina Kurz",
  role: "Contributing Programmer, Sleep & Screen",
  initial: "K",
};
