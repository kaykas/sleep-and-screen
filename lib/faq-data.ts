// FAQ data — shared between Visit.tsx (client component) and layout.tsx (server)
// Keep this file free of "use client" imports so layout.tsx can import it.

export type FaqCategory = {
  label: string;
  emoji: string;
  questions: { q: string; a: string }[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    label: "Store & Location",
    emoji: "📍",
    questions: [
      {
        q: "Where is East Bay Mattress located?",
        a: "East Bay Mattress is at 2397 San Pablo Ave, Berkeley, CA 94702 — on San Pablo Avenue between Alcatraz Ave and Ashby Ave, with large plate-glass windows and a street-visible sign. Street parking is available on San Pablo Ave and surrounding side streets.",
      },
      {
        q: "What are East Bay Mattress's store hours?",
        a: "The showroom is open Monday through Sunday, 10 AM to 6 PM. No appointment needed — walk in any time during store hours.",
      },
      {
        q: "Do I need an appointment to visit the showroom?",
        a: "No appointment needed. Walk in any day from 10 AM to 6 PM. The showroom floor is open, and staff are available if you want them — and absent if you prefer to browse on your own.",
      },
      {
        q: "Is there parking at East Bay Mattress?",
        a: "Yes. Street parking is available on San Pablo Ave and surrounding side streets. The store is also accessible via AC Transit buses that stop directly on San Pablo Ave, and is a short ride or walk from the Ashby or MacArthur BART stations.",
      },
      {
        q: "How do I contact East Bay Mattress?",
        a: "Call (510) 555-0182 or email hello@eastbaymattress.com. The store is open daily 10 AM–6 PM. For group reservations, press inquiries, or complex delivery questions, email is typically faster.",
      },
    ],
  },
  {
    label: "Shopping Experience",
    emoji: "🛏️",
    questions: [
      {
        q: "Is East Bay Mattress commission-free?",
        a: "Yes. Staff do not earn commission on sales. This means no one will pressure you to buy a more expensive mattress — the recommendation you get is based on what fits you, not what earns a higher commission.",
      },
      {
        q: "How many mattresses can I try in the showroom?",
        a: "East Bay Mattress keeps 12 mattress models on the showroom floor at all times. Every model available for purchase is on display — you can try all of them before deciding.",
      },
      {
        q: "Can I bring a partner or family member to test mattresses?",
        a: "Yes. You're encouraged to bring whoever sleeps with you. A mattress that works for one sleep style but not another is a problem, and the best way to find out is to test it together on the showroom floor.",
      },
      {
        q: "How long should I plan to spend at the store?",
        a: "Most customers who come in to buy spend 30–60 minutes on the floor. If you already know roughly what firmness and material you want, it can be shorter. There's no rush — staff don't start timing you.",
      },
      {
        q: "Do East Bay Mattress staff give recommendations?",
        a: "Yes. Staff can walk you through the difference between mattress types, help narrow options by sleep position, temperature preference, or body type, and answer specific questions. Since they're commission-free, the advice is neutral.",
      },
    ],
  },
  {
    label: "Mattress Types & Products",
    emoji: "📦",
    questions: [
      {
        q: "What types of mattresses does East Bay Mattress sell?",
        a: "East Bay Mattress carries innerspring, memory foam, hybrid, natural latex, and foam mattresses. All models are displayed on the showroom floor. The house brand is Bay Rest, with named models including the Shoreline Hybrid, Nightwatch Cooling Hybrid, Estuary Natural Latex, Gravel Road Innerspring, Memory Cloud Plush, and the Harborview series.",
      },
      {
        q: "What's the difference between a hybrid and memory foam mattress?",
        a: "A hybrid mattress combines a coil spring core with foam or latex comfort layers on top, giving you the bounce and airflow of springs plus the pressure relief of foam. Memory foam mattresses have no springs — they use layered foam throughout, which offers deeper contouring and better motion isolation but can trap more heat. Hybrids are the most popular choice for couples and combination sleepers; memory foam works well for side sleepers and anyone who moves around less in their sleep.",
      },
      {
        q: "What's the difference between innerspring and hybrid mattresses?",
        a: "An innerspring mattress is mostly coil-based with a thin comfort layer on top — it sleeps cooler and has more bounce but less pressure relief. A hybrid mattress adds a substantial foam or latex comfort layer (typically 2–4 inches) over the coil core, improving cushioning and motion isolation while keeping the support and airflow of a spring base.",
      },
      {
        q: "What is a natural latex mattress?",
        a: "A natural latex mattress is made from rubber tree sap processed into foam. It's responsive (bounces back quickly), temperature-neutral, hypoallergenic, and durable. Natural latex mattresses are popular with eco-conscious buyers, hot sleepers, and people who want a plush feel without the sinking sensation of memory foam. They cost more than foam or innerspring but typically last 15–20 years.",
      },
      {
        q: "Which mattress is best for hot sleepers?",
        a: "For hot sleepers, the best mattress options are hybrid mattresses with a phase-change cooling cover, natural latex, or open-cell memory foam. The Bay Rest Nightwatch Cooling Hybrid is specifically designed for temperature regulation, with a phase-change cover and open-cell gel foam. Innerspring and hybrid mattresses generally sleep cooler than traditional memory foam because airflow through the coil layer dissipates heat.",
      },
      {
        q: "Which mattress is best for back pain?",
        a: "For most back pain, a medium-firm to firm mattress that supports spinal alignment without letting the hips sink too deep is recommended. The Bay Rest Gravel Road Innerspring (firm) and the Harborview 800 Hybrid (medium-firm) are good starting points for back pain. Back sleepers generally benefit from firmer support; side sleepers with back pain often need something in the medium range to cushion pressure points.",
      },
      {
        q: "What mattress sizes does East Bay Mattress carry?",
        a: "East Bay Mattress carries Twin, Full, Queen, King, and in some models Twin XL. The Queen is the most popular size and is what price comparisons on this site reference. King prices are approximately 35% higher than Queen; Full is approximately 15% lower.",
      },
    ],
  },
  {
    label: "Pricing & Financing",
    emoji: "💵",
    questions: [
      {
        q: "How much does a mattress cost at East Bay Mattress?",
        a: "Mattress prices at East Bay Mattress range from $399 (Queen, entry-level innerspring) to $1,699 (Queen, premium natural latex). The most popular models fall in the $749–$1,099 range. All prices include free delivery and setup. Current sale prices are listed on the showroom page — during the Summer Event, most models are discounted 20–40%.",
      },
      {
        q: "Does East Bay Mattress offer financing?",
        a: "Yes. East Bay Mattress offers 0% APR financing for 12 months through Synchrony Bank on qualifying purchases of $599 or more. Applications are processed in-store in minutes. There is no deferred interest — the rate is a genuine 0% for the term, not a promotional rate that converts to a high rate if the balance isn't paid.",
      },
      {
        q: "Does East Bay Mattress price match?",
        a: "Yes. Show us a written price from a local competitor for the same or equivalent model, and we'll match it same day. The price match applies to local stores in the East Bay area.",
      },
      {
        q: "Are delivery and setup included in the mattress price?",
        a: "Yes. Free delivery and in-room setup are included in every mattress purchase. There are no hidden delivery fees. The delivery crew carries the mattress to the room of your choice, assembles the frame if applicable, and removes all packaging.",
      },
      {
        q: "Is there a fee to remove my old mattress?",
        a: "Old mattress haul-away is $40, scheduled during the same delivery window. Old mattresses are responsibly recycled when possible. The fee is optional — if you want to dispose of it yourself, just let us know.",
      },
    ],
  },
  {
    label: "Delivery & Setup",
    emoji: "🚚",
    questions: [
      {
        q: "Does East Bay Mattress deliver?",
        a: "Yes. East Bay Mattress delivers throughout the East Bay, including Berkeley, Oakland, Alameda, El Cerrito, Albany, Emeryville, Piedmont, and surrounding areas. Delivery is free with every purchase and includes in-room setup.",
      },
      {
        q: "How long does delivery take?",
        a: "East Bay Mattress offers same-day pickup for in-stock models. Scheduled delivery typically happens within 1–3 days depending on your availability. Delivery runs 7 days a week. Exact scheduling is confirmed in-store when you purchase.",
      },
      {
        q: "Can I take a mattress home the same day?",
        a: "Yes. If the model you want is in stock, you can pick it up the same day you purchase it. Ask in-store to confirm same-day availability for the specific model and size you're buying.",
      },
      {
        q: "What does the delivery crew actually do?",
        a: "The delivery crew carries the mattress to the room of your choice — not just to the door. They set up the bed frame or foundation if you purchased one with the mattress, place the mattress on it, and remove all packaging materials from your home. Old mattress removal ($40) can be scheduled at the same time.",
      },
    ],
  },
  {
    label: "Sleep Trial & Returns",
    emoji: "🔄",
    questions: [
      {
        q: "What is East Bay Mattress's return policy?",
        a: "East Bay Mattress offers a 120-night sleep trial on all mattress purchases. If the mattress isn't right after 120 nights, call the store. They'll pick it up and refund the full purchase price. There is no restocking fee and no runaround — the trial applies to all sizes and all models.",
      },
      {
        q: "How does the 120-night sleep trial work?",
        a: "After purchasing, you have 120 nights to decide if the mattress is right for you. If it isn't — for any reason — call East Bay Mattress within the trial period. They schedule a pickup at no cost to you, and you receive a full refund of the purchase price. No partial refunds, no restocking fees, no conditions.",
      },
      {
        q: "What if the mattress is defective?",
        a: "All mattresses sold at East Bay Mattress come with a 10-year manufacturer's warranty covering structural defects including sagging, broken coils, and cover failure. Warranty claims are handled in-store — bring it back or call and they'll coordinate pickup and replacement or refund.",
      },
      {
        q: "Can I exchange my mattress for a different firmness?",
        a: "Yes, within the 120-night trial period. If you find the firmness isn't right — too soft, too firm — you can exchange for a different model. The exchange is scheduled like a return: pickup of the original and delivery of the new one at the same time.",
      },
    ],
  },
  {
    label: "East Bay & Local",
    emoji: "🌉",
    questions: [
      {
        q: "What mattress stores are in Berkeley, CA?",
        a: "East Bay Mattress at 2397 San Pablo Ave is a locally owned mattress store in Berkeley, CA. It carries 12 mattress models on the showroom floor with no-commission staff, free delivery, and a 120-night trial. The store also operates the Evening Hours film program on Friday nights.",
      },
      {
        q: "Is East Bay Mattress better than Mattress Firm?",
        a: "East Bay Mattress is a locally owned independent store with commission-free staff and 12 models on the floor — every model can be tried before you buy. The pricing is transparent, delivery and setup are included, and the 120-night trial comes with no restocking fee. The experience is designed to remove the pressure that chain stores are often associated with.",
      },
      {
        q: "Does East Bay Mattress serve Oakland?",
        a: "Yes. East Bay Mattress delivers throughout the East Bay including Oakland, Berkeley, Alameda, Emeryville, Piedmont, El Cerrito, and Albany. Delivery is free and includes setup.",
      },
      {
        q: "Why buy a mattress locally in Berkeley instead of online?",
        a: "Buying locally means you can actually lie on the mattress before you pay for it. Online mattress companies ship a compressed mattress in a box, which feels different from a properly set-up floor model. East Bay Mattress has 12 models on the floor specifically so you can test them — including for 10–15 minutes per mattress, the amount of time sleep researchers say you need to get a real read. The 120-night trial still applies if the in-home feel differs from the showroom.",
      },
    ],
  },
  {
    label: "Evening Hours Film",
    emoji: "🎬",
    questions: [
      {
        q: "What is Evening Hours at East Bay Mattress?",
        a: "Evening Hours is the in-store film program at East Bay Mattress. On Friday evenings, a screen drops at the north wall of the showroom and one film is shown — programmed by curators Alexandra and Kitrina. Mattresses stay on the showroom floor. Audience members watch from them. The program runs on the same floor you can buy a mattress from.",
      },
      {
        q: "Is the Evening Hours screening free?",
        a: "Mattress customers get priority reservation access and attend free with no cover. Walk-in reservations without a purchase are available for a $10–$15 suggested donation. Popcorn is always included.",
      },
      {
        q: "What films does Evening Hours show?",
        a: "Evening Hours programs one film a night — cult classics, overlooked films, and carefully chosen double features. The calendar includes theme nights like Breakup Night, Horror for People Who Say They Don't Like Horror, John Waters Night, and Double Features. The programming is curated, not random — every film is chosen to be experienced on a mattress in a showroom on San Pablo Ave.",
      },
      {
        q: "What time do screenings start at Evening Hours?",
        a: "Screenings start at 8:00 PM most nights, with doors open at 7:00 PM. Double features start at 7:30 PM. The concession counter opens at 7:00 PM and closes when the film starts.",
      },
      {
        q: "Can you fall asleep during the screening?",
        a: "Yes. You're lying on a mattress watching a film — falling asleep is part of the concept. Staff will gently wake you when the film ends. East Bay Mattress is not a hotel, but it's not going to stop you from sleeping.",
      },
    ],
  },
];

export const ALL_FAQS = FAQ_CATEGORIES.flatMap((c) => c.questions);
