# East Bay Mattress — Product & Assets Research Pack
> Prepared for Ryn / sleep-and-screen redesign  
> Research date: June 2026  
> Do not edit app code — this is content/data scaffolding only.

---

## 1. Navigation & Category Taxonomy

### Top-Nav Structure (credible local mattress retailer)

```
Mattresses | Bases & Frames | Pillows & Bedding | Sale & Clearance | About | Evening Hours
```

**Mattresses dropdown:**
- All Mattresses
- Memory Foam
- Hybrid
- Innerspring / Coil
- Latex / Natural Latex
- Cooling / Temperature Regulation
- Firm Support
- Plush & Pillow-Top
- ─────
- Best Sellers
- New Arrivals
- Under $500

**Bases & Frames dropdown:**
- Adjustable Bases
- Box Springs & Foundations
- Platform Frames
- Bed Frames

**Pillows & Bedding dropdown:**
- Pillows
- Mattress Protectors
- Sheets & Bedding Sets
- Duvet / Comforter

**Sale & Clearance dropdown:**
- Current Promotions
- Clearance Floor Models
- Bundles & Sets

**Evening Hours** (standalone nav item — links to movie schedule / in-store viewing section)

---

## 2. Product Naming Patterns

Credible fictional local-retailer naming conventions:

### Pattern A — Material + Comfort + Series name
`Bay Rest Hybrid Elite`  
`Bay Rest Memory Cloud Plush`  
`Bay Rest Innerspring Classic Firm`

### Pattern B — Series word + Level number
`Harborview 500` / `Harborview 800` / `Harborview 1200`

### Pattern C — Material descriptor + Comfort word
`CoolSleep Gel Memory Foam`  
`SilverCrest Latex Plush`  
`DeltaCoil Firm Pillow-Top`

### Pattern D — Lifestyle/benefit name
`The Nightwatch` (cooling, movie-night tie-in)  
`The Estuary` (plush, premium)  
`The Shoreline` (mid-range hybrid)  
`The Gravel Road` (firm innerspring — working class East Bay nod)

**Recommended brand name for house label:** **Bay Rest**  
(East Bay local feel, no trademark conflicts at time of research)

---

## 3. Realistic Price Bands by Size & Type

All prices are retail (pre-sale) ranges based on 2025–2026 market data.

| Type | Twin | Full | Queen | King |
|---|---|---|---|---|
| Innerspring / Coil | $249–$499 | $299–$599 | $349–$699 | $499–$899 |
| Memory Foam (mid) | $399–$699 | $449–$799 | $499–$899 | $699–$1,199 |
| Memory Foam (gel) | $549–$899 | $649–$999 | $749–$1,099 | $999–$1,499 |
| Hybrid (mid) | $599–$999 | $699–$1,099 | $799–$1,299 | $1,099–$1,799 |
| Hybrid (premium) | $899–$1,399 | $999–$1,499 | $1,099–$1,999 | $1,499–$2,699 |
| Latex (natural) | $999–$1,599 | $1,099–$1,799 | $1,249–$1,999 | $1,699–$2,999 |

**Sources:** latestcost.com queen mattress guide (2026), ConsumerAffairs mattress cost guide, WIRED best mattresses 2026, naplab.com affordable mattress testing.

### Sale/Badge language
- `Save $200` / `Save $350` / `Save $500` (dollar amount, not %)
- `Summer Sale — ends soon`
- `Clearance — floor model`
- `Bundle & Save — includes adjustable base`
- `Most Popular`
- `Staff Pick`
- `New This Month`

### Financing copy
> *From $29/mo with 0% APR financing for 36 months on qualifying purchases.*  
> *Ask in-store or apply online — approval in 60 seconds.*

### Monthly payment at-a-glance (back-of-envelope for product cards)
- $699 queen → `from $19/mo`
- $999 queen → `from $28/mo`
- $1,299 queen → `from $36/mo`
- $1,799 queen → `from $50/mo`

*(Based on 36-month 0% APR. Adjust if using different term.)*

---

## 4. Product Card Schema

Each card should include these fields:

```
name          — product title (e.g. "Bay Rest Shoreline Hybrid")
sku           — e.g. "BR-SHORE-Q"
type          — memory foam | hybrid | innerspring | latex
comfort       — Firm | Medium Firm | Medium | Plush | Ultra Plush  (1–5 scale or label)
height        — e.g. "12 inches" (typical range: 9"–15")
materials     — top layer, comfort layers, support core (1–2 sentences)
best_for      — e.g. "Side sleepers, couples, hot sleepers"
rating        — e.g. 4.7 (number, not generated stars only)
review_count  — e.g. 214
price_queen   — regular price
sale_price_queen — if on sale
monthly_from  — financing teaser string
warranty      — e.g. "10-year limited"
trial         — "120-night sleep trial"
badge         — optional: "Most Popular" | "Staff Pick" | "Sale" | "New"
image_key     — reference to image slot (see Section 6)
```

---

## 5. Service / Trust Modules

### Standard trust badge set (for footer strip or hero sub-row)
| Icon | Label | Subtext |
|---|---|---|
| 🚚 | Free Delivery & Setup | White-glove to any room |
| 🌙 | 120-Night Sleep Trial | Return it, no questions |
| 💳 | 0% Financing | 36-month options available |
| 🏷️ | Best Price Guarantee | We'll match any local price |
| 🔄 | Old Mattress Haul-Away | We take the old one, too |
| 🛡️ | 10-Year Warranty | Manufacturer-backed |
| 🧼 | Sanitation Guarantee | Certified clean delivery |

### Copy scaffold for each module

**Free Delivery & Setup**
> We deliver to your door and set up in the room you want. No extra fees, no surprises. Available throughout the East Bay 7 days a week.

**120-Night Sleep Trial**
> Sleep on it — literally. Try your mattress for up to 120 nights. If it's not right, we'll pick it up and find you something better or issue a full refund.

**0% Financing**
> Pay over time without the interest. Qualified customers get 0% APR for 36 months. Apply in-store or start online in about a minute.

**Best Price Guarantee**
> Found the same mattress for less at a local store? Show us the price. We'll match it, same day.

**Old Mattress Haul-Away**
> We'll remove your old mattress when we deliver the new one. No scheduling a separate pickup. Responsibly recycled when possible.

**Sanitation Guarantee**
> Every mattress leaves our warehouse in sealed packaging. Delivery teams follow a clean-hands protocol. Your first night is a clean one.

---

## 6. Image Strategy

### Licensing approach
**Unsplash free tier** is the safest no-cost option. The Unsplash License permits commercial use, no attribution required, no per-seat fee. Restriction: cannot create a competing image service. Using for a mattress retail website is clearly permitted.

**Pexels** operates under a similar free commercial license.

**Generated images** (via image-generation tools available in-stack) are safest for product isolation shots where no real product brand appears.

---

### Unsplash search URLs — usable for direct download or `next/image` src

| Use | Search URL | Notes |
|---|---|---|
| Bedroom / product context | `https://unsplash.com/s/photos/bedroom` | 100k+ results, filter by landscape |
| Bedroom interior | `https://unsplash.com/s/photos/bedroom-interior` | 30k+ results |
| Mattress (direct) | `https://unsplash.com/s/photos/mattress` | 3.5k results |
| Bed mattress | `https://unsplash.com/s/photos/bed-mattress` | 2.1k results |
| Pillow / bedding | `https://unsplash.com/s/photos/pillow` | lifestyle shots |
| Sleep lifestyle | `https://unsplash.com/s/photos/sleep` | comfort/person shots |
| Furniture showroom | `https://unsplash.com/s/photos/furniture-store` | store-floor feel |
| Bedding | `https://unsplash.com/s/photos/bedding` | linens/covers |

**Known free (non-Unsplash+) image IDs for direct use:**
- `photo-1635594202056-9ea3b497e5c0` — bed with white cover, pillows — Zulian Firmansyah (Unsplash free)
  - URL: `https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?w=800&q=80`

> **Note:** Unsplash+ images (lock icon in search results) require a paid subscription. Filter to free-tier only when downloading.

---

### Recommended Unsplash API approach (for Ryn)
Use the Unsplash Source CDN for placeholder images during development:
```
https://source.unsplash.com/featured/?mattress,bedroom
https://source.unsplash.com/featured/?bed,sleep
https://source.unsplash.com/featured/?pillow,bedroom
```
These return random relevant photos but **should not be used in production** (rate limited, randomized). For production: download chosen images to `/public/images/`.

---

### Image-generation prompts (for AI-generated product photos)

Use these when stock shots are generic. Generate via in-stack image tools or Midjourney/Flux.

**Isolated mattress (product card hero)**
> Clean white mattress on a white background, studio lighting, subtle shadow, high-end retail product photography, no branding, 3/4 angle, memory foam layers visible at edge, 4:3 ratio

**Hybrid mattress cross-section**
> Cut-away side view of a hybrid mattress showing coil springs beneath memory foam layers, clean infographic style, soft neutral background, no text, retail product visual

**Adjustable base**
> Adjustable bed base in elevated head position, white bedding, neutral bedroom, soft morning light, no branding, retail product photo

**Showroom floor**
> Mattress store interior with rows of beds on display, warm overhead lighting, clean retail space, no people, slight depth of field, wide angle

**Lifestyle — comfort**
> Person reading a book in bed, morning light, white bedding, East Bay / California casual feel, natural light, no brand visible, wide crop

**Lifestyle — couple sleeping**
> Two people asleep in a large bed, plush white bedding, soft morning sunlight, calm and minimal, no faces fully visible, lifestyle photography

**Pillow flat-lay**
> Four pillows arranged on white bedding, overhead flat-lay shot, clean minimal aesthetic, retail product photo, no text

**Movie night in bed** *(Evening Hours tie-in)*
> Two people watching a projected movie on a white bedroom wall, sitting up in bed with popcorn, cozy warm lighting, casual indie film atmosphere, no brand visible

---

## 7. Homepage Section Structure

### Section sequence (recommended)

```
1. Hero Banner
2. Trust Strip (delivery / trial / financing / price match)
3. Shop By Category grid
4. Featured / Best Sellers
5. "Why East Bay Mattress" — differentiators
6. Evening Hours module (movie-night tie-in)
7. Product Grid (8–12 products)
8. Comparison CTA ("Not sure? Compare mattresses →")
9. Testimonials / Reviews
10. Service Detail (delivery, trial, warranty — expanded)
11. Newsletter / SMS signup
12. Footer
```

---

### Hero Banner copy scaffold

**Headline options:**
- "Sleep Better. Start Here."
- "The East Bay's Sleep Store."
- "Find Your Mattress. Take It Home Tonight."

**Sub-headline:**
> Oakland's only mattress store with a movie screen. Same-day delivery available.

**CTAs:** `Shop Mattresses` / `See Tonight's Screening`

---

### "Why East Bay Mattress" module
```
We're not a chain. We're your neighbor.

Founded in Oakland, East Bay Mattress has been helping families sleep better
since [year]. We carry brands you know and brands you'll want to know —
at prices that don't require a holiday weekend to be good.

Every sale includes free delivery, in-room setup, and a 120-night trial.
If it's not right, we'll make it right.
```

---

### Evening Hours Module copy scaffold
```
═══════════════════════════════════════════════
        EVENING HOURS — THE SCREENING ROOM
═══════════════════════════════════════════════

Some nights, the best way to test a mattress is to watch a movie on one.

Our showroom transforms after 6pm. Curated by Alexandra & Kitrina,
Evening Hours screens one film a night — classic, cult, or just good.
Lie back on a floor model. Decide if it's your mattress.

[ See Tonight's Film → ]   [ View the Schedule → ]

"The Nightwatch" — our cooling hybrid, $1,099 Queen
Recommended pairing: anything by Wong Kar-wai.
```

---

### Testimonials — scaffold (not fabricated as real reviews)
> *Use these as placeholder shapes. Replace with real collected reviews before launch.*

```json
[
  {
    "name": "D.M., Oakland",
    "rating": 5,
    "text": "Came in on a Tuesday expecting to spend an hour and leave confused. Left with a queen hybrid and a plan for same-day delivery. Setup crew was fast and clean.",
    "product": "Bay Rest Shoreline Hybrid Queen"
  },
  {
    "name": "T.K., Berkeley",
    "rating": 5,
    "text": "The Evening Hours screening sold me. I tried three mattresses while watching half of a film. Bought the one that made me want to stay.",
    "product": "Bay Rest Nightwatch Cooling Queen"
  },
  {
    "name": "P.L., Emeryville",
    "rating": 4,
    "text": "120-night trial is real. I swapped once. They picked it up and dropped off the new one. No attitude.",
    "product": "Bay Rest Estuary Latex King"
  }
]
```

---

## 8. Product Comparison Attributes

For a comparison table (up to 3–4 products side-by-side):

| Attribute | Description |
|---|---|
| Mattress type | Memory foam / Hybrid / Innerspring / Latex |
| Comfort level | Firm / Med Firm / Medium / Plush / Ultra Plush |
| Height | Inches |
| Top layer | e.g. "2" gel memory foam" |
| Comfort layer | e.g. "3" responsive poly foam" |
| Support core | e.g. "6" individually wrapped coils" |
| Cooling features | Yes/No + descriptor |
| Motion isolation | Excellent / Good / Average |
| Edge support | Excellent / Good / Average |
| Best for sleepers | Side / Back / Stomach / Combo |
| Best for | Couples / Hot sleepers / Back pain / Budget |
| Trial period | 120 nights |
| Warranty | 10-year limited |
| Price (Queen) | $ |
| Financing from | $/mo |

---

## 9. Evening Hours — Movie/Mattress Tie-In

### Alexandra & Kitrina roles
- First names only throughout the site and UI (no last names)
- Equal curators — no hierarchy implied
- Framing: "curated by Alexandra & Kitrina" or "Alexandra & Kitrina's pick"

### Tie-in product pairings (sample)
```
Film genre → Mattress recommendation logic

Slow cinema (Tarkovsky, Wong Kar-wai) → Plush / ultra-plush, deep sink
Thriller / horror → Firm, "you'll want to sit up fast"
Comedy double feature → Mid-range hybrid, "stays comfortable through credits"
Documentary → Cooling hybrid, "you'll be there a while"
```

### Sample copy for product page (Nightwatch)
> **Best paired with:** long films, late starts, and anything that needs rewatching.  
> Alexandra & Kitrina picked this one for the screening room floor. It runs cool, holds its shape through double features, and doesn't make you feel like you need to leave.

### "Reserve a Test Nap" framing
> **Reserve a spot in Evening Hours.**  
> Show up, pick a mattress, watch the film. If you fall asleep, that's the one.  
> Free. No purchase required. Walk-ins welcome after 6pm.

*(Keep the tone dry, not gimmicky. "Reserve a test nap" works as internal shorthand but should surface as "Reserve your spot" or "Come watch a movie on it" on the public-facing site.)*

---

## 10. Sources & Licensing Notes

| Source | URL | Usage notes |
|---|---|---|
| Mattress Firm (structure reference) | mattressfirm.com | Navigation/copy patterns observed, not copied |
| LatestCost.com price guide | latestcost.com/queen-mattress-cost-price-ranges-budget-tips/ | Price band data |
| ConsumerAffairs mattress cost | consumeraffairs.com/furniture/how-much-does-a-mattress-cost.html | Hybrid average price data |
| WIRED best mattresses 2026 | wired.com/gallery/best-mattresses/ | Premium tier anchors |
| naplab.com affordable mattress | naplab.com/best-mattress/best-affordable-mattress/ | Budget/mid-range |
| Unsplash license | unsplash.com/license | Free commercial use, no attribution required |
| Unsplash mattress search | unsplash.com/s/photos/mattress | 3.5k images available, free tier |
| Unsplash bed-mattress | unsplash.com/s/photos/bed-mattress | 2.1k images, free tier |
| Unsplash bedroom | unsplash.com/s/photos/bedroom | 100k+ free |
| Unsplash furniture store | unsplash.com/s/photos/furniture-store | Showroom feel |

---

*See `sample-products.json` for 12 product cards ready to paste into component data.*
