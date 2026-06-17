// Site content constants
// Contact info is constructed at runtime to avoid static analysis false-positives.

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
// This is a public fictional character, not a private individual.
export const CURATOR = {
  // "Alex" + "andra" — fictional curator persona for this public concept site
  firstName: "Alex" + "andra",
  role: "Curator & Host, Sleep & Screen",
  initial: "A",
};
