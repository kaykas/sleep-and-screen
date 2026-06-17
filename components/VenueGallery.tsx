// VenueGallery — CSS/SVG placeholder compositions for exterior + interior shots.
// Visual direction: full-width retail storefront on San Pablo Ave, Berkeley.
// Exterior: multi-story commercial building, plate-glass showroom windows, stucco sign band,
//           street parking on San Pablo Ave and side streets.
// Interior: mattress showroom with beds on low risers, price cards, fluorescent retail
//           lighting by day; warmer conversion for evening screenings.
// No external images, no CDN, no Google Street View.

const exteriorScenes = [
  {
    id: "ext-1",
    label: "Strip Mall Exterior · Day",
    caption: "Multi-story commercial building, plate-glass showroom windows, large sign band. San Pablo Ave, Berkeley.",
    art: "exterior-day",
  },
  {
    id: "ext-2",
    label: "Parking Lot · Dusk",
    caption: "Street parking on San Pablo Ave and side streets. The block fills by 7:45 on screening nights.",
    art: "parking-dusk",
  },
  {
    id: "ext-3",
    label: "Storefront · Evening Hours",
    caption: "Same storefront after 8 PM. Mattresses still visible through the plate glass. Showtime posted in the window.",
    art: "exterior-night",
  },
];

const interiorScenes = [
  {
    id: "int-1",
    label: "Showroom Floor · Daytime",
    caption: "Fluorescent retail lighting. Beds on low risers with price cards. 12 models on the floor, no appointment needed.",
    art: "showroom-day",
  },
  {
    id: "int-2",
    label: "Showroom Floor · Screening Night",
    caption: "Same floor after 8 PM. Screen drops at the north wall. Overhead lights dim. Mattresses face it.",
    art: "theater-floor",
  },
  {
    id: "int-3",
    label: "Concession Counter",
    caption: "Open at 7 PM on screening nights. Popcorn, candy, limited hot items. Order before the lights go down.",
    art: "counter-night",
  },
];

type ArtKey =
  | "exterior-day"
  | "exterior-night"
  | "parking-dusk"
  | "showroom-day"
  | "theater-floor"
  | "counter-night";

function SceneArt({ art }: { art: ArtKey }) {
  switch (art) {
    // ── EXTERIOR DAY ── bland suburban retail plaza, midday sun, asphalt lot
    case "exterior-day":
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="sky-day" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b8cfe8" />
              <stop offset="100%" stopColor="#dce8f5" />
            </linearGradient>
            <linearGradient id="asphalt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a4a4a" />
              <stop offset="100%" stopColor="#3a3a3a" />
            </linearGradient>
          </defs>
          {/* Sky */}
          <rect width="400" height="220" fill="url(#sky-day)" />
          {/* Asphalt parking lot */}
          <rect x="0" y="155" width="400" height="65" fill="url(#asphalt)" />
          {/* Parking lot lines */}
          {[38,76,114,152,190,228,266,304,342,380].map((x, i) => (
            <line key={i} x1={x} y1="156" x2={x} y2="218" stroke="#555" strokeWidth="1" />
          ))}
          {/* Curb strip */}
          <rect x="0" y="152" width="400" height="4" fill="#888" />

          {/* Strip mall building — full width, single story, stucco */}
          <rect x="0" y="55" width="400" height="100" fill="#d4ccc2" />
          {/* Stucco texture hint — subtle horizontal banding */}
          {[65,75,85,95,105,115,125,135,145].map((y, i) => (
            <line key={i} x1="0" y1={y} x2="400" y2={y} stroke="#c8c0b5" strokeWidth="0.4" opacity="0.5" />
          ))}
          {/* Roofline / sign band — flat parapet */}
          <rect x="0" y="45" width="400" height="13" fill="#c0b8ac" />
          <rect x="0" y="44" width="400" height="3" fill="#a89f94" />

          {/* LEFT TENANT — generic retail (nail salon implied) */}
          <rect x="5" y="58" width="100" height="94" fill="#cec6bc" />
          <rect x="8" y="68" width="94" height="60" fill="#e8e4de" stroke="#b0a898" strokeWidth="1" />
          {/* Window reflection */}
          <rect x="8" y="68" width="94" height="15" fill="white" opacity="0.25" />
          {/* Tenant sign on band */}
          <rect x="20" y="50" width="70" height="8" fill="#e8e4de" />
          <rect x="28" y="52" width="54" height="3" rx="0.5" fill="#888" opacity="0.6" />
          {/* Door */}
          <rect x="55" y="108" width="22" height="44" fill="#d8d0c8" stroke="#a89f94" strokeWidth="1" />
          <circle cx="75" cy="130" r="1.5" fill="#888" />

          {/* CENTER TENANT — East Bay Mattress */}
          <rect x="118" y="58" width="164" height="94" fill="#d0c8be" />
          {/* Big plate-glass showroom windows */}
          <rect x="121" y="70" width="76" height="62" fill="#d8e4f0" stroke="#a0aabb" strokeWidth="1.5" />
          <rect x="203" y="70" width="76" height="62" fill="#d8e4f0" stroke="#a0aabb" strokeWidth="1.5" />
          {/* Window reflection */}
          <rect x="121" y="70" width="76" height="14" fill="white" opacity="0.3" />
          <rect x="203" y="70" width="76" height="14" fill="white" opacity="0.3" />
          {/* Mattress visible in window — left window */}
          <rect x="128" y="98" width="60" height="22" rx="2" fill="#b8bcc4" stroke="#909498" strokeWidth="1" />
          <rect x="130" y="100" width="20" height="8" rx="1" fill="#cccfd6" />
          <rect x="128" y="106" width="60" height="3" fill="#a8aaae" opacity="0.6" />
          {/* Price card in window */}
          <rect x="165" y="116" width="18" height="6" rx="0.5" fill="white" />
          <rect x="167" y="118" width="14" height="1.5" fill="#333" opacity="0.5" />
          {/* Right window — another mattress */}
          <rect x="209" y="100" width="62" height="20" rx="2" fill="#c4b8b0" stroke="#a09090" strokeWidth="1" />
          <rect x="211" y="102" width="22" height="8" rx="1" fill="#d4c8c0" />
          {/* Price card */}
          <rect x="246" y="116" width="18" height="6" rx="0.5" fill="white" />
          <rect x="248" y="118" width="14" height="1.5" fill="#333" opacity="0.5" />
          {/* Sign band — East Bay Mattress */}
          <rect x="120" y="49" width="160" height="10" fill="#1d4ed8" />
          <rect x="135" y="52" width="130" height="4" rx="0.5" fill="white" opacity="0.85" />
          {/* Entrance — center */}
          <rect x="184" y="105" width="32" height="47" fill="#c8d4e0" stroke="#a0b0c0" strokeWidth="1.5" />
          <rect x="185" y="106" width="13" height="44" fill="#d0dce8" />
          <rect x="201" y="106" width="13" height="44" fill="#d0dce8" />
          <circle cx="199" cy="129" r="1.5" fill="#607080" />

          {/* RIGHT TENANT — Subway implied */}
          <rect x="295" y="58" width="100" height="94" fill="#cec6bc" />
          <rect x="298" y="68" width="94" height="60" fill="#e8e4de" stroke="#b0a898" strokeWidth="1" />
          <rect x="298" y="68" width="94" height="14" fill="white" opacity="0.2" />
          {/* Tenant sign */}
          <rect x="308" y="50" width="72" height="8" fill="#22a048" />
          <rect x="318" y="52" width="52" height="3" rx="0.5" fill="white" opacity="0.8" />
          {/* Door */}
          <rect x="330" y="108" width="22" height="44" fill="#d8d0c8" stroke="#a89f94" strokeWidth="1" />
          <circle cx="350" cy="130" r="1.5" fill="#888" />

          {/* Parked cars */}
          {/* Car 1 */}
          <rect x="35" y="162" width="58" height="18" rx="3" fill="#7a8a9a" />
          <rect x="40" y="156" width="38" height="8" rx="2" fill="#8a9aaa" />
          <rect x="40" y="178" width="10" height="4" rx="1" fill="#333" />
          <rect x="83" y="178" width="10" height="4" rx="1" fill="#333" />
          {/* Car 2 */}
          <rect x="155" y="163" width="62" height="17" rx="3" fill="#c8a070" />
          <rect x="162" y="157" width="40" height="8" rx="2" fill="#d4b080" />
          <rect x="162" y="178" width="10" height="4" rx="1" fill="#333" />
          <rect x="207" y="178" width="10" height="4" rx="1" fill="#333" />
          {/* Car 3 */}
          <rect x="285" y="162" width="60" height="18" rx="3" fill="#9a9a9a" />
          <rect x="292" y="156" width="40" height="8" rx="2" fill="#aaaaaa" />
          <rect x="292" y="178" width="10" height="4" rx="1" fill="#333" />
          <rect x="335" y="178" width="10" height="4" rx="1" fill="#333" />
          {/* Light pole */}
          <rect x="196" y="90" width="4" height="62" fill="#888" />
          <rect x="188" y="88" width="20" height="5" rx="1" fill="#999" />
        </svg>
      );

    // ── PARKING LOT DUSK ── suburban strip mall, golden hour, cars in lot
    case "parking-dusk":
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="dusk-sky2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a3060" />
              <stop offset="40%" stopColor="#c4681a" />
              <stop offset="70%" stopColor="#e88030" />
              <stop offset="100%" stopColor="#c86818" />
            </linearGradient>
            <linearGradient id="dusk-lot2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a3530" />
              <stop offset="100%" stopColor="#2a2520" />
            </linearGradient>
          </defs>
          {/* Dusk sky */}
          <rect width="400" height="160" fill="url(#dusk-sky2)" />
          {/* Asphalt */}
          <rect y="155" width="400" height="65" fill="url(#dusk-lot2)" />
          <rect y="153" width="400" height="4" fill="#5a5248" />
          {/* Parking lines faint in dusk */}
          {[40,80,120,160,200,240,280,320,360].map((x, i) => (
            <line key={i} x1={x} y1="157" x2={x} y2="218" stroke="#4a4540" strokeWidth="1" />
          ))}

          {/* Building silhouette — strip mall shape */}
          <rect x="0" y="60" width="400" height="96" fill="#1a1510" />
          {/* Roofline */}
          <rect x="0" y="52" width="400" height="10" fill="#141008" />
          {/* Utility lines on roof */}
          <rect x="10" y="50" width="380" height="3" fill="#0a0a0a" />

          {/* Tenant divisions implied by lit/unlit windows */}
          {/* Left tenant — unlit, closed */}
          <rect x="8" y="72" width="95" height="58" fill="#0d0a08" stroke="#252015" strokeWidth="1" />
          {/* Center — East Bay Mattress lit warm */}
          <rect x="118" y="68" width="164" height="62" fill="#1a1208" />
          {/* Warm interior glow through windows */}
          <rect x="122" y="72" width="74" height="48" fill="#e8a030" opacity="0.12" stroke="#c87020" strokeWidth="1" strokeOpacity="0.4" />
          <rect x="204" y="72" width="74" height="48" fill="#e8a030" opacity="0.10" stroke="#c87020" strokeWidth="1" strokeOpacity="0.4" />
          {/* Mattresses dimly visible through warm-lit windows */}
          <rect x="128" y="90" width="58" height="18" rx="2" fill="#2a2018" stroke="#4a3820" strokeWidth="0.5" />
          <rect x="212" y="92" width="58" height="16" rx="2" fill="#2a2018" stroke="#4a3820" strokeWidth="0.5" />
          {/* Sign band lit blue */}
          <rect x="118" y="52" width="164" height="11" fill="#1d4ed8" opacity="0.7" />
          <rect x="132" y="55" width="136" height="4" rx="0.5" fill="white" opacity="0.6" />
          {/* Showtime sign in window — small */}
          <rect x="250" y="94" width="42" height="18" rx="1" fill="#1a1a10" stroke="#d97706" strokeWidth="1" strokeOpacity="0.8" />
          <rect x="254" y="98" width="34" height="3" rx="0.5" fill="#d97706" opacity="0.7" />
          <rect x="257" y="104" width="28" height="2" rx="0.5" fill="#d97706" opacity="0.5" />

          {/* Right tenant — dim */}
          <rect x="296" y="72" width="97" height="56" fill="#0d0a08" stroke="#1a1510" strokeWidth="1" />
          <rect x="308" y="50" width="72" height="8" fill="#187028" opacity="0.6" />

          {/* Light pole with sodium glow */}
          <rect x="197" y="88" width="4" height="70" fill="#5a5248" />
          <ellipse cx="199" cy="90" rx="24" ry="10" fill="#e8a030" opacity="0.18" />
          <rect x="189" y="85" width="22" height="5" rx="1" fill="#887860" />

          {/* Cars */}
          <rect x="32" y="162" width="56" height="17" rx="3" fill="#303028" />
          <rect x="38" y="157" width="36" height="7" rx="2" fill="#383830" />
          <rect x="38" y="177" width="10" height="3" rx="1" fill="#1a1818" />
          <rect x="78" y="177" width="10" height="3" rx="1" fill="#1a1818" />
          {/* Headlights */}
          <ellipse cx="88" cy="172" rx="8" ry="3" fill="#e8e0c0" opacity="0.3" />

          <rect x="152" y="161" width="60" height="18" rx="3" fill="#403830" />
          <rect x="158" y="156" width="40" height="7" rx="2" fill="#504838" />
          <rect x="158" y="177" width="10" height="3" rx="1" fill="#1a1818" />
          <rect x="202" y="177" width="10" height="3" rx="1" fill="#1a1818" />

          <rect x="286" y="162" width="58" height="17" rx="3" fill="#282828" />
          <rect x="293" y="157" width="38" height="7" rx="2" fill="#303030" />
        </svg>
      );

    // ── EXTERIOR NIGHT ── same strip mall bay after dark, mattresses through glass, showtime posted
    case "exterior-night":
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="night-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06060e" />
              <stop offset="100%" stopColor="#0d0d18" />
            </linearGradient>
            <linearGradient id="night-lot" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#111" />
            </linearGradient>
          </defs>
          {/* Night sky */}
          <rect width="400" height="220" fill="url(#night-sky)" />
          {/* Faint stars */}
          {[[25,18],[70,10],[140,25],[210,8],[280,20],[350,14],[95,38],[320,42],[180,35]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={i%3===0?1.2:0.7} fill="#e0d8f0" opacity="0.4" />
          ))}
          {/* Asphalt */}
          <rect y="158" width="400" height="62" fill="url(#night-lot)" />
          <rect y="155" width="400" height="4" fill="#2a2a2a" />
          {/* Lot lines */}
          {[40,80,120,160,200,240,280,320,360].map((x, i) => (
            <line key={i} x1={x} y1="159" x2={x} y2="218" stroke="#222" strokeWidth="1" />
          ))}
          {/* Building */}
          <rect x="0" y="58" width="400" height="100" fill="#0d0c0a" />
          <rect x="0" y="50" width="400" height="10" fill="#080806" />

          {/* Left tenant — dark/closed */}
          <rect x="5" y="70" width="100" height="60" fill="#080806" stroke="#181816" strokeWidth="1" />
          <rect x="5" y="50" width="100" height="10" fill="#101010" />

          {/* East Bay Mattress — lit interior, warm overhead retail fluorescent */}
          <rect x="118" y="65" width="164" height="65" fill="#14120a" />
          {/* Fluorescent spill — warm retail light through glass */}
          <rect x="122" y="68" width="74" height="50" fill="#f5e8c0" opacity="0.09" stroke="#c8a840" strokeWidth="1" strokeOpacity="0.5" />
          <rect x="204" y="68" width="74" height="50" fill="#f5e8c0" opacity="0.08" stroke="#c8a840" strokeWidth="1" strokeOpacity="0.4" />
          {/* Mattresses clearly visible through window in fluorescent light */}
          <rect x="128" y="88" width="60" height="18" rx="2" fill="#3a3428" stroke="#5a5040" strokeWidth="0.8" />
          <rect x="130" y="90" width="18" height="8" rx="1" fill="#4a4438" />
          <rect x="128" y="94" width="60" height="2" fill="#3e3830" opacity="0.8" />
          {/* Price card lit */}
          <rect x="164" y="102" width="18" height="5" rx="0.5" fill="#f0e8d0" opacity="0.7" />
          <rect x="166" y="103.5" width="14" height="1" fill="#604000" opacity="0.6" />
          {/* Right window mattress */}
          <rect x="210" y="90" width="62" height="18" rx="2" fill="#3a3428" stroke="#504838" strokeWidth="0.8" />
          <rect x="212" y="92" width="20" height="8" rx="1" fill="#4a4438" />
          <rect x="210" y="96" width="62" height="2" fill="#3e3830" opacity="0.6" />
          {/* Price card */}
          <rect x="248" y="104" width="18" height="5" rx="0.5" fill="#f0e8d0" opacity="0.6" />

          {/* Showtime sign in window — clear and readable */}
          <rect x="156" y="108" width="88" height="20" rx="1" fill="#0a0800" stroke="#e8a020" strokeWidth="1.5" />
          <rect x="160" y="112" width="80" height="3" rx="0.5" fill="#e8a020" opacity="0.9" />
          <rect x="163" y="118" width="74" height="2" rx="0.5" fill="#e8a020" opacity="0.6" />
          {/* "TONIGHT" label */}
          <rect x="163" y="108" width="30" height="5" rx="0.5" fill="#e8a020" opacity="0.8" />

          {/* Sign band — blue neon-ish */}
          <rect x="118" y="50" width="164" height="11" fill="#1d4ed8" opacity="0.5" />
          <rect x="130" y="53" width="140" height="4" rx="0.5" fill="white" opacity="0.7" />
          {/* Sign glow */}
          <rect x="108" y="50" width="184" height="14" fill="#1d4ed8" opacity="0.06" />

          {/* Entrance door — lit frame */}
          <rect x="184" y="105" width="32" height="48" fill="#100e08" stroke="#c8a840" strokeWidth="1" strokeOpacity="0.5" />
          <rect x="185" y="106" width="13" height="44" fill="#181408" />
          <rect x="201" y="106" width="13" height="44" fill="#181408" />

          {/* Right tenant — dark */}
          <rect x="296" y="68" width="98" height="60" fill="#080806" stroke="#181816" strokeWidth="1" />
          <rect x="296" y="50" width="98" height="10" fill="#101010" />

          {/* Light pole + sodium glow */}
          <rect x="197" y="92" width="4" height="68" fill="#4a4440" />
          <rect x="189" y="88" width="20" height="6" rx="1" fill="#9a8858" />
          <ellipse cx="199" cy="92" rx="26" ry="10" fill="#e8d080" opacity="0.12" />
          {/* Lot glow under pole */}
          <ellipse cx="199" cy="168" rx="40" ry="8" fill="#e8d080" opacity="0.06" />

          {/* Cars in lot */}
          <rect x="30" y="163" width="58" height="17" rx="3" fill="#1a1a1a" />
          <rect x="36" y="158" width="36" height="7" rx="2" fill="#222" />
          <rect x="148" y="162" width="62" height="18" rx="3" fill="#181818" />
          <rect x="155" y="157" width="40" height="7" rx="2" fill="#1f1f1f" />
          <rect x="285" y="163" width="60" height="17" rx="3" fill="#1a1a1a" />
          <rect x="292" y="158" width="38" height="7" rx="2" fill="#222" />
          {/* Headlight glow one car */}
          <ellipse cx="207" cy="172" rx="10" ry="3" fill="#f0f0e0" opacity="0.2" />
        </svg>
      );

    // ── SHOWROOM DAY ── retail fluorescent lighting, mattresses on low risers, price cards
    case "showroom-day":
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="showroom-floor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8e0d8" />
              <stop offset="100%" stopColor="#dcd4cc" />
            </linearGradient>
            <linearGradient id="showroom-wall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f0ece8" />
              <stop offset="100%" stopColor="#e4e0dc" />
            </linearGradient>
          </defs>
          {/* Ceiling — off-white drop tile */}
          <rect width="400" height="220" fill="url(#showroom-wall)" />
          <rect x="0" y="0" width="400" height="28" fill="#f0f0ee" />
          {/* Ceiling tile grid */}
          {[0,50,100,150,200,250,300,350,400].map((x, i) => (
            <line key={`cv${i}`} x1={x} y1="0" x2={x} y2="28" stroke="#dcdcda" strokeWidth="0.5" />
          ))}
          {[0,14,28].map((y, i) => (
            <line key={`ch${i}`} x1="0" y1={y} x2="400" y2={y} stroke="#dcdcda" strokeWidth="0.5" />
          ))}
          {/* Fluorescent light fixtures */}
          {[50,150,250,350].map((x, i) => (
            <g key={i}>
              <rect x={x-28} y="4" width="56" height="6" rx="1" fill="#f8f8f0" stroke="#ccc" strokeWidth="0.5" />
              <rect x={x-26} y="5" width="52" height="4" fill="#fffef0" opacity="0.9" />
              <ellipse cx={x} cy="28" rx="50" ry="16" fill="#fffef0" opacity="0.4" />
            </g>
          ))}
          {/* Floor — light beige vinyl */}
          <rect x="0" y="165" width="400" height="55" fill="url(#showroom-floor)" />
          <rect x="0" y="164" width="400" height="2" fill="#c8c0b8" />
          {/* Floor tile lines */}
          {[0,50,100,150,200,250,300,350,400].map((x, i) => (
            <line key={i} x1={x} y1="165" x2={x} y2="220" stroke="#d8d0c8" strokeWidth="0.8" />
          ))}
          {/* Wall — back wall, plain painted */}
          <rect x="0" y="28" width="400" height="138" fill="#eeece8" />
          {/* Wall panel / branding strip */}
          <rect x="0" y="28" width="400" height="6" fill="#1d4ed8" opacity="0.15" />

          {/* Left info panel on wall */}
          <rect x="12" y="38" width="80" height="90" fill="#e8e4e0" stroke="#d0ccc8" strokeWidth="1" />
          <rect x="16" y="42" width="72" height="5" rx="0.5" fill="#1d4ed8" opacity="0.5" />
          <rect x="16" y="51" width="60" height="3" rx="0.5" fill="#666" opacity="0.4" />
          <rect x="16" y="58" width="68" height="3" rx="0.5" fill="#666" opacity="0.35" />
          <rect x="16" y="65" width="52" height="3" rx="0.5" fill="#666" opacity="0.3" />
          <rect x="16" y="78" width="72" height="42" fill="#e0dcd8" stroke="#ccc" strokeWidth="0.5" />
          <rect x="20" y="82" width="64" height="3" rx="0.5" fill="#888" opacity="0.3" />
          <rect x="20" y="89" width="56" height="3" rx="0.5" fill="#888" opacity="0.25" />
          <rect x="20" y="96" width="60" height="3" rx="0.5" fill="#888" opacity="0.25" />
          <rect x="20" y="103" width="48" height="3" rx="0.5" fill="#888" opacity="0.2" />

          {/* Mattresses on low risers — 3 beds */}
          {[
            { x: 105, y: 118, w: 80, h: 34, color: "#d8d0c8", pillow: "#e0dcd8", label: "From $499", badge: null },
            { x: 200, y: 114, w: 84, h: 38, color: "#c8c4c0", pillow: "#d4d0cc", label: "From $849", badge: "Best Seller" },
            { x: 300, y: 118, w: 80, h: 34, color: "#ccc8c4", pillow: "#d8d4d0", label: "From $1,299", badge: null },
          ].map((bed, i) => (
            <g key={i}>
              {/* Low riser platform */}
              <rect x={bed.x - 2} y={bed.y + bed.h} width={bed.w + 4} height={8} rx="1"
                fill="#ccc4bc" stroke="#b8b0a8" strokeWidth="0.5" />
              {/* Mattress body */}
              <rect x={bed.x} y={bed.y} width={bed.w} height={bed.h} rx="3"
                fill={bed.color} stroke="#b0a8a0" strokeWidth="1" />
              {/* Pillow area */}
              <rect x={bed.x + 4} y={bed.y + 5} width={bed.w * 0.3} height={bed.h - 12} rx="2"
                fill={bed.pillow} stroke="#c0b8b0" strokeWidth="0.5" />
              {/* Bedding fold lines */}
              <line x1={bed.x + bed.w * 0.35} y1={bed.y + 10} x2={bed.x + bed.w - 4} y2={bed.y + 10}
                stroke="#a8a0a0" strokeWidth="0.6" />
              <line x1={bed.x + bed.w * 0.35} y1={bed.y + 18} x2={bed.x + bed.w - 4} y2={bed.y + 18}
                stroke="#a8a0a0" strokeWidth="0.4" />
              <line x1={bed.x + bed.w * 0.35} y1={bed.y + 26} x2={bed.x + bed.w - 4} y2={bed.y + 26}
                stroke="#a8a0a0" strokeWidth="0.3" />
              {/* Mattress edge piping */}
              <rect x={bed.x} y={bed.y} width={bed.w} height={bed.h} rx="3"
                fill="none" stroke="#908888" strokeWidth="0.5" />
              {/* Sale badge */}
              {bed.badge && (
                <rect x={bed.x + bed.w - 36} y={bed.y - 10} width={40} height={12} rx="2"
                  fill="#dc2626" />
              )}
              {bed.badge && (
                <rect x={bed.x + bed.w - 32} y={bed.y - 7} width={32} height={3} rx="0.5"
                  fill="white" opacity="0.9" />
              )}
              {/* Price card on riser */}
              <rect x={bed.x + 4} y={bed.y + bed.h + 2} width={48} height={20} rx="1"
                fill="white" stroke="#c8c0b8" strokeWidth="0.5" />
              <rect x={bed.x + 8} y={bed.y + bed.h + 5} width={40} height={4} rx="0.5"
                fill="#1d4ed8" opacity="0.7" />
              <rect x={bed.x + 8} y={bed.y + bed.h + 12} width={32} height={3} rx="0.5"
                fill="#666" opacity="0.5" />
              <rect x={bed.x + 8} y={bed.y + bed.h + 17} width={24} height={2} rx="0.5"
                fill="#999" opacity="0.4" />
            </g>
          ))}

          {/* Right info panel */}
          <rect x="308" y="38" width="80" height="90" fill="#e8e4e0" stroke="#d0ccc8" strokeWidth="1" />
          <rect x="312" y="42" width="72" height="5" rx="0.5" fill="#dc2626" opacity="0.5" />
          <rect x="312" y="51" width="60" height="3" rx="0.5" fill="#666" opacity="0.4" />
          <rect x="312" y="58" width="68" height="3" rx="0.5" fill="#666" opacity="0.35" />
          <rect x="312" y="78" width="72" height="42" fill="#e0dcd8" stroke="#ccc" strokeWidth="0.5" />
          <rect x="316" y="82" width="64" height="3" rx="0.5" fill="#888" opacity="0.3" />
          <rect x="316" y="89" width="56} height=" rx="0.5" fill="#888" opacity="0.25" />

          {/* Customer foot traffic hint — faint silhouette */}
          <ellipse cx="200" cy="168" rx="12" ry="5" fill="#c0b8b0" opacity="0.3" />
        </svg>
      );

    // ── THEATER FLOOR ── same showroom floor in screening mode, screen down, mattresses face it
    case "theater-floor":
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="screen-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f0ece4" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#d8d0c4" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="dim-floor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a1510" />
              <stop offset="100%" stopColor="#120f0a" />
            </linearGradient>
          </defs>
          {/* Darkened showroom ceiling */}
          <rect width="400" height="220" fill="url(#dim-floor)" />
          <rect x="0" y="0" width="400" height="22" fill="#100c08" />
          {/* Fluorescent lights OFF — only faint aisle strip lights */}
          {[60, 180, 300].map((x, i) => (
            <rect key={i} x={x-20} y="4" width="40" height="5" rx="1" fill="#1a1510" stroke="#252015" strokeWidth="0.5" />
          ))}
          {/* Screen — pulled down over the mattress display wall, fills north wall */}
          <rect x="38" y="6" width="324" height="88" rx="1" fill="url(#screen-g)" opacity="0.88" />
          <rect x="36" y="4" width="328" height="92" rx="1" fill="none" stroke="#2a2520" strokeWidth="2" />
          {/* Screen content — warm film tones, abstract */}
          <rect x="50" y="12" width="160" height="76" fill="#c8b898" opacity="0.35" />
          <rect x="220" y="12" width="132" height="76" fill="#887060" opacity="0.4" />
          <rect x="50" y="48" width="302" height="2" fill="#000" opacity="0.15" />
          {/* Projector beam hint from back */}
          <polygon points="200,0 183,8 217,8" fill="#f0ece4" opacity="0.05" />
          {/* Screen ambient spill on floor/beds */}
          <ellipse cx="200" cy="105" rx="180" ry="14" fill="#e8dcc8" opacity="0.06" />

          {/* Mattresses — same retail beds, now facing screen in dim light */}
          {[0,1,2].map(row => (
            [0,1,2,3].map(col => {
              const x = 30 + col * 86;
              const y = 108 + row * 35;
              const lit = row === 0;
              return (
                <g key={`${row}-${col}`}>
                  {/* Low riser */}
                  <rect x={x} y={y + 24} width={78} height={6} rx="1" fill="#1e1a14" stroke="#282218" strokeWidth="0.5" />
                  {/* Mattress body — same retail bed, just dimmer */}
                  <rect x={x} y={y} width={78} height={26} rx="3"
                    fill={lit ? "#2a2518" : "#1a1610"}
                    stroke={lit ? "#3a3020" : "#221e14"}
                    strokeWidth="1" />
                  {/* Pillow visible */}
                  <rect x={x+4} y={y+4} width="20" height="12" rx="2"
                    fill={lit ? "#302820" : "#201c14"} stroke="#282018" strokeWidth="0.4" />
                  {/* Screen light catch on top-row beds */}
                  {lit && <rect x={x} y={y} width={78} height={4} rx="1" fill="#e8dcc8" opacity="0.06" />}
                  {/* Price cards still on beds — strip-mall detail */}
                  <rect x={x + 46} y={y + 2} width="28" height="10" rx="0.5"
                    fill="#141008" stroke="#2a2518" strokeWidth="0.5" />
                  <rect x={x + 48} y={y + 4} width="24" height="2" rx="0.2" fill="#a89060" opacity="0.3" />
                </g>
              );
            })
          ))}
          {/* Aisle strip lights — warm amber, retail floor detail */}
          {[112, 147, 182].map((y, i) => (
            <g key={i}>
              <rect x="2" y={y} width="4" height="14" rx="1" fill="#d97706" opacity="0.35" />
              <rect x="394" y={y} width="4" height="14" rx="1" fill="#d97706" opacity="0.3" />
            </g>
          ))}
          {/* Side walls — showroom drywall, not cinema walls */}
          <rect x="0" y="0" width="24" height="220" fill="#0f0c08" />
          <rect x="376" y="0" width="24" height="220" fill="#0f0c08" />
        </svg>
      );

    // ── CONCESSION COUNTER ── retail-style, no fancy bar
    case "counter-night":
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="counter-wall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f0ece8" />
              <stop offset="60%" stopColor="#e8e4e0" />
              <stop offset="100%" stopColor="#d8d4d0" />
            </linearGradient>
            <linearGradient id="counter-top" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8c0b8" />
              <stop offset="100%" stopColor="#b8b0a8" />
            </linearGradient>
          </defs>
          {/* Wall */}
          <rect width="400" height="220" fill="url(#counter-wall)" />
          {/* Ceiling — same drop tile */}
          <rect x="0" y="0" width="400" height="24" fill="#f4f4f2" />
          {[0,50,100,150,200,250,300,350,400].map((x, i) => (
            <line key={`cv${i}`} x1={x} y1="0" x2={x} y2="24" stroke="#e4e4e2" strokeWidth="0.5" />
          ))}
          {[0,12,24].map((y, i) => (
            <line key={`ch${i}`} x1="0" y1={y} x2="400" y2={y} stroke="#e4e4e2" strokeWidth="0.5" />
          ))}
          {/* Fluorescent fixture */}
          <rect x="140" y="4" width="120" height="6" rx="1" fill="#fefef8" stroke="#ddd" strokeWidth="0.5" />
          <rect x="143" y="5" width="114" height="4" fill="#fffef0" />
          <ellipse cx="200" cy="24" rx="90" ry="16" fill="#fffef0" opacity="0.5" />

          {/* Wall shelving — retail shelving unit */}
          <rect x="15" y="28" width="370" height="88" fill="#eae6e2" stroke="#d0ccc8" strokeWidth="1" />
          {/* Shelf boards */}
          {[56,82,108].map((y, i) => (
            <rect key={i} x="18" y={y} width="364" height="3" fill="#d0ccc8" />
          ))}
          {/* Items on shelves */}
          {/* Top shelf — candy/snacks retail boxes */}
          {[28,60,92,124,156,188,220,252,284,316,348].map((x, i) => {
            const colors = ["#dc2626","#1d4ed8","#16a34a","#d97706","#7c3aed","#db2777","#dc2626","#1d4ed8","#16a34a","#d97706","#7c3aed"];
            return (
              <g key={i}>
                <rect x={x} y="33" width="24" height="20" rx="1" fill={colors[i % colors.length]} opacity="0.75" />
                <rect x={x+2} y="35" width="20" height="4" rx="0.5" fill="white" opacity="0.4" />
              </g>
            );
          })}
          {/* Second shelf — drink bottles */}
          {[28,65,102,139,176,213,250,287,324,361].map((x, i) => (
            <g key={i}>
              <rect x={x} y="60" width="16" height="20" rx="2" fill="#60a5fa" opacity="0.5" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.4" />
              <ellipse cx={x+8} cy="59" rx="7" ry="2.5" fill="#93c5fd" opacity="0.4" />
            </g>
          ))}
          {/* Third shelf — gummo spaghetti + misc */}
          {[28,90,152,220,288,350].map((x, i) => (
            <g key={i}>
              <rect x={x} y="86" width="38" height="18" rx="1" fill="#f0e8d8" stroke="#d0c8b0" strokeWidth="0.5" />
              <rect x={x+3} y="89" width="32" height="3" rx="0.5" fill="#888" opacity="0.35" />
              <rect x={x+3} y="95" width="24" height="2" rx="0.5" fill="#888" opacity="0.25" />
            </g>
          ))}

          {/* Counter surface */}
          <rect x="0" y="116" width="400" height="16" fill="url(#counter-top)" />
          <rect x="0" y="115" width="400" height="2" fill="#a8a098" />
          <rect x="0" y="130" width="400" height="2" fill="#9a9288" />

          {/* Counter front panel */}
          <rect x="0" y="132" width="400" height="60" fill="#e0dcd8" />
          <rect x="0" y="134" width="400" height="4" fill="#d0ccc8" />

          {/* Counter items */}
          {/* Popcorn */}
          <g>
            <polygon points="120,88 134,88 137,116 117,116" fill="#f0e8d0" stroke="#c8a840" strokeWidth="1" />
            <rect x="119" y="84" width="16" height="6" rx="1" fill="#dc2626" opacity="0.7" />
            {/* Popcorn puffs */}
            {[[122,82],[126,80],[130,82],[124,78],[128,79]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="3" fill="#f5e8c0" opacity="0.8" />
            ))}
          </g>
          {/* Soda cup */}
          <g>
            <polygon points="175,90 187,90 190,116 172,116" fill="#e0e8f0" stroke="#60a5fa" strokeWidth="1" />
            <rect x="175" y="86" width="12" height="6" rx="1" fill="#2563eb" opacity="0.6" />
            <circle cx="181" cy="86" r="4" fill="#dbeafe" opacity="0.6" />
          </g>
          {/* Candy bar */}
          <g>
            <rect x="220" y="100" width="32" height="16" rx="2" fill="#dc2626" opacity="0.8" stroke="#b91c1c" strokeWidth="0.5" />
            <rect x="223" y="104" width="26" height="3" rx="0.5" fill="white" opacity="0.7" />
          </g>
          {/* Gummo spaghetti special — labeled */}
          <g>
            <ellipse cx="295" cy="108" rx="32" ry="10" fill="#f0e8d0" stroke="#c8a060" strokeWidth="1" />
            <ellipse cx="295" cy="105" rx="28" ry="8" fill="#f5ede0" />
            {[-10,-5,0,5,10].map((dx, i) => (
              <path key={i}
                d={`M ${282+dx} ${103+i*0.5} q 4 2 7 0 q 4 -2 7 0`}
                stroke="#c88040" strokeWidth="0.8" fill="none" opacity="0.6" />
            ))}
            {/* Label */}
            <rect x="269" y="115" width="52" height="12" rx="1" fill="#dc2626" opacity="0.8" />
            <rect x="273" y="118" width="44" height="3" rx="0.5" fill="white" opacity="0.8" />
          </g>

          {/* Floor */}
          <rect x="0" y="192" width="400" height="28" fill="url(#showroom-floor, #dcd4cc)" />
          {[0,50,100,150,200,250,300,350,400].map((x, i) => (
            <line key={i} x1={x} y1="192" x2={x} y2="220" stroke="#c8c0b8" strokeWidth="0.6" />
          ))}
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
          <rect width="400" height="220" fill="#e8e4e0" />
        </svg>
      );
  }
}

export default function VenueGallery() {
  return (
    <section id="venue" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-3 block">
            The space
          </span>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">Venue</h2>
              <p className="text-[#9ca3af] font-sans text-sm max-w-lg">
                On San Pablo Ave in Berkeley. Full-width retail storefront.
                Mattress store by day — same floor, same beds — single-screen after 8 PM on selected nights.
              </p>
            </div>
            <div className="text-xs font-sans text-[#4b5563] text-right leading-relaxed">
              2397 San Pablo Ave<br />
              Berkeley, CA 94702<br />
              <span className="text-[#374151]">Retail storefront · street parking · accessible</span>
            </div>
          </div>
        </div>

        {/* Exterior row */}
        <div className="mb-5">
          <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-4">
            Exterior &amp; Approach
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {exteriorScenes.map((scene) => (
              <figure key={scene.id} className="m-0">
                <div className="aspect-video bg-[#e8e4e0] border border-[#1f1f1f] rounded-lg overflow-hidden">
                  <SceneArt art={scene.art as ArtKey} />
                </div>
                <figcaption className="mt-2 px-0.5">
                  <div className="text-xs font-sans font-medium text-[#9ca3af]">
                    {scene.label}
                  </div>
                  <div className="text-xs font-sans text-[#4b5563] mt-0.5">
                    {scene.caption}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#131313] my-10" />

        {/* Interior row */}
        <div>
          <div className="text-xs font-sans tracking-widest uppercase text-[#6b7280] mb-4">
            Interior
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {interiorScenes.map((scene) => (
              <figure key={scene.id} className="m-0">
                <div className="aspect-video bg-[#e8e4e0] border border-[#1f1f1f] rounded-lg overflow-hidden">
                  <SceneArt art={scene.art as ArtKey} />
                </div>
                <figcaption className="mt-2 px-0.5">
                  <div className="text-xs font-sans font-medium text-[#9ca3af]">
                    {scene.label}
                  </div>
                  <div className="text-xs font-sans text-[#4b5563] mt-0.5">
                    {scene.caption}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="mt-8 text-xs font-sans text-[#2d2d2d] text-center">
          Illustrated placeholders for interior shots. Exterior storefront photography available on the About page.
        </p>
      </div>
    </section>
  );
}
