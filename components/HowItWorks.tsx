const steps = [
  {
    time: "10 AM – 6 PM",
    label: "Day",
    title: "Mattress Showroom",
    body: "Walk the floor. Try every model at your own pace. No commission, no pressure. Staff are there if you want them.",
    icon: "☀",
    color: "text-[#d97706]",
  },
  {
    time: "6 PM – 8 PM",
    label: "Transition",
    title: "Setup & Doors",
    body: "The showroom reconfigures. Snacks appear. The projection screen comes down. Guests with reservations check in and choose their mattress.",
    icon: "◐",
    color: "text-[#9ca3af]",
  },
  {
    time: "8 PM",
    label: "Night",
    title: "Screening Begins",
    body: "The lights drop. One film, projected on a 14-foot screen, watched from real showroom mattresses. No seats. Pillows provided.",
    icon: "◉",
    color: "text-[#a78bfa]",
  },
];

const rules = [
  "Shoes off at the door.",
  "Fresh linens on every mattress, every night.",
  "Popcorn is included. Drinks are $4.",
  "Phones face-down during the film.",
  "No overnight stays. The film ends; you go home.",
  "Mattress purchases get priority reservation access.",
  "Children under 13 admitted only to G/PG screenings.",
  "We reserve the right to eject anyone who talks.",
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-3 block">
            The concept
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-[#9ca3af] max-w-lg font-sans">
            The store does not change. The mattresses stay where they are. At
            night, they become your seats.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[#111] border border-[#1f1f1f] rounded-lg p-8 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-3xl opacity-20">
                {step.icon}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-2xl ${step.color}`}>{step.icon}</span>
                <div>
                  <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280]">
                    {step.label}
                  </div>
                  <div className="text-xs font-sans text-[#9ca3af]">
                    {step.time}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed font-sans">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* House rules */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6">House Rules</h3>
            <ul className="space-y-3">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-sm text-[#9ca3af]">
                  <span className="text-[#7c3aed] mt-0.5 flex-shrink-0">—</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111] border border-[#1f1f1f] rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">What&apos;s Included</h3>
            <div className="space-y-4">
              {[
                ["Reservation", "Required for evening screenings. Free to book."],
                ["Linens", "Clean set provided. Swapped nightly."],
                ["Popcorn", "One bag per person, included."],
                ["Drinks", "Sparkling water, sodas, one local beer on tap."],
                ["Runtime", "Films typically run 80–140 minutes."],
                ["Parking", "Free surface lot. 40+ spaces."],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-4 text-sm">
                  <span className="text-[#f5f0e8] font-medium w-24 flex-shrink-0 font-sans">
                    {label}
                  </span>
                  <span className="text-[#9ca3af] font-sans">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
