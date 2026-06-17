// VenueGallery — stylized illustrated placeholders for exterior + interior
// No Google Maps / Street View imagery. All cards are CSS/SVG art compositions
// evoking the Willow Pass retail corridor at night and the interior theater setup.

const exteriorScenes = [
  {
    id: "ext-1",
    label: "Exterior · Willow Pass Road",
    caption: "Strip center, east side. Purple sign visible from the road at night.",
    art: "exterior-night",
  },
  {
    id: "ext-2",
    label: "Parking Lot · Dusk",
    caption: "40 surface spots. The lot is full by 7:45 on screening nights.",
    art: "parking-dusk",
  },
  {
    id: "ext-3",
    label: "Storefront Detail · Day",
    caption: "Mattress store by day. The marquee reads Sleep & Screen after 5 PM.",
    art: "storefront-day",
  },
];

const interiorScenes = [
  {
    id: "int-1",
    label: "The Theater Floor",
    caption: "Twelve mattresses arranged in three rows. Screen fills the north wall.",
    art: "theater-floor",
  },
  {
    id: "int-2",
    label: "Night Counter",
    caption: "Concessions open at 7 PM. Order before the lights go down.",
    art: "counter-night",
  },
  {
    id: "int-3",
    label: "Showroom by Day",
    caption: "Same mattresses, different light. The store opens at 10 AM.",
    art: "showroom-day",
  },
];

type ArtKey =
  | "exterior-night"
  | "parking-dusk"
  | "storefront-day"
  | "theater-floor"
  | "counter-night"
  | "showroom-day";

function SceneArt({ art }: { art: ArtKey }) {
  switch (art) {
    case "exterior-night":
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
          {/* Night sky gradient */}
          <defs>
            <linearGradient id="sky-n" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a0118" />
              <stop offset="100%" stopColor="#1a1028" />
            </linearGradient>
            <linearGradient id="ground-n" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#111" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
            <filter id="glow-purple">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <rect width="400" height="220" fill="url(#sky-n)" />
          {/* Stars */}
          {[[30,20],[90,14],[140,30],[200,8],[260,22],[310,12],[360,28],[70,45],[180,40],[330,50]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="1" fill="#f5f0e8" opacity="0.5" />
          ))}
          {/* Strip center building */}
          <rect x="30" y="110" width="340" height="80" fill="#131313" />
          {/* Roofline detail */}
          <rect x="30" y="105" width="340" height="8" fill="#1a1a1a" />
          {/* Windows dark store left */}
          <rect x="45" y="122" width="55" height="35" fill="#0d0d0d" stroke="#222" strokeWidth="1" />
          <rect x="50" y="127" width="22" height="14" fill="#1a1a0e" opacity="0.5" />
          <rect x="75" y="127" width="22" height="14" fill="#1a1a0e" opacity="0.4" />
          {/* Sleep & Screen storefront — purple lit */}
          <rect x="150" y="115" width="100" height="55" fill="#100b1f" stroke="#7c3aed" strokeWidth="1.5" />
          {/* Purple glow behind sign */}
          <rect x="152" y="117" width="96" height="28" fill="#7c3aed" opacity="0.12" />
          {/* Sign text placeholder bars */}
          <rect x="163" y="124" width="74" height="5" rx="1" fill="#a78bfa" opacity="0.9" />
          <rect x="170" y="133" width="60" height="3" rx="1" fill="#7c3aed" opacity="0.6" />
          {/* Entrance */}
          <rect x="190" y="148" width="20" height="22" fill="#0d0d0d" stroke="#7c3aed" strokeWidth="1" />
          {/* Right store */}
          <rect x="268" y="122" width="80" height="35" fill="#0d0d0d" stroke="#222" strokeWidth="1" />
          <rect x="272" y="127" width="30" height="14" fill="#fff7e6" opacity="0.06" />
          {/* Ground / lot */}
          <rect x="0" y="190" width="400" height="30" fill="url(#ground-n)" />
          {/* Parking lot lines */}
          {[60,100,140,180,220,260,300,340].map((x,i) => (
            <line key={i} x1={x} y1="191" x2={x} y2="218" stroke="#1f1f1f" strokeWidth="1" />
          ))}
          {/* Ambient purple spill on lot */}
          <ellipse cx="200" cy="195" rx="80" ry="8" fill="#7c3aed" opacity="0.07" />
        </svg>
      );

    case "parking-dusk":
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="dusk-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a0a2e" />
              <stop offset="50%" stopColor="#2d1654" />
              <stop offset="100%" stopColor="#4a1d78" />
            </linearGradient>
            <linearGradient id="dusk-lot" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#181818" />
              <stop offset="100%" stopColor="#111" />
            </linearGradient>
          </defs>
          <rect width="400" height="180" fill="url(#dusk-sky)" />
          <rect y="160" width="400" height="60" fill="url(#dusk-lot)" />
          {/* Horizon glow */}
          <ellipse cx="200" cy="160" rx="220" ry="25" fill="#7c3aed" opacity="0.15" />
          {/* Building silhouette */}
          <rect x="60" y="80" width="280" height="85" fill="#0d0d0d" />
          <rect x="60" y="74" width="280" height="8" fill="#131313" />
          {/* Lit sign */}
          <rect x="155" y="88" width="90" height="22" fill="#7c3aed" opacity="0.2" />
          <rect x="163" y="93" width="74" height="4" rx="1" fill="#a78bfa" opacity="0.85" />
          <rect x="168" y="101" width="64" height="3" rx="1" fill="#7c3aed" opacity="0.5" />
          {/* Cars silhouette */}
          <rect x="40" y="168" width="55" height="18" rx="3" fill="#1a1a1a" />
          <rect x="44" y="163" width="35" height="8" rx="2" fill="#222" />
          <rect x="150" y="165" width="65" height="20" rx="3" fill="#1a1a1a" />
          <rect x="157" y="159" width="42" height="9" rx="2" fill="#222" />
          <rect x="290" y="167" width="58" height="19" rx="3" fill="#1a1a1a" />
          <rect x="296" y="162" width="38" height="8" rx="2" fill="#222" />
          {/* Lot lines */}
          {[80,125,170,215,260,305,345].map((x,i) => (
            <line key={i} x1={x} y1="161" x2={x} y2="220" stroke="#1f1f1f" strokeWidth="1" />
          ))}
          {/* Headlight glow */}
          <ellipse cx="95" cy="186" rx="18" ry="4" fill="#fbbf24" opacity="0.12" />
          <ellipse cx="215" cy="185" rx="18" ry="4" fill="#fbbf24" opacity="0.1" />
        </svg>
      );

    case "storefront-day":
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="day-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
          <rect width="400" height="90" fill="url(#day-sky)" />
          <rect y="90" width="400" height="130" fill="#1a1a1a" />
          {/* Building facade */}
          <rect x="40" y="45" width="320" height="145" fill="#141414" stroke="#222" strokeWidth="1" />
          {/* Awning */}
          <polygon points="40,80 360,80 360,95 40,95" fill="#1f1f1f" />
          <rect x="40" y="79" width="320" height="4" fill="#7c3aed" opacity="0.4" />
          {/* Daytime sign - unlit but legible */}
          <rect x="140" y="53" width="120" height="28" fill="#111" stroke="#2d2d2d" strokeWidth="1" />
          <rect x="148" y="60" width="104" height="5" rx="1" fill="#f5f0e8" opacity="0.5" />
          <rect x="155" y="69" width="90" height="3" rx="1" fill="#9ca3af" opacity="0.3" />
          {/* Store windows */}
          <rect x="55" y="100" width="120" height="60" fill="#0d0d0d" stroke="#1f1f1f" strokeWidth="1" />
          {/* Mattress display in window */}
          <rect x="65" y="110" width="45" height="30" rx="2" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
          <rect x="67" y="112" width="41" height="4" rx="1" fill="#7c3aed" opacity="0.2" />
          <rect x="118" y="113" width="50" height="25" rx="2" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
          {/* Entrance door */}
          <rect x="190" y="110" width="28" height="50" fill="#0a0a0a" stroke="#2d2d2d" strokeWidth="1" />
          <rect x="192" y="112" width="11" height="44" fill="#111" />
          <rect x="205" y="112" width="11" height="44" fill="#111" />
          <circle cx="203" cy="136" r="1.5" fill="#9ca3af" />
          {/* Right window */}
          <rect x="235" y="100" width="110" height="60" fill="#0d0d0d" stroke="#1f1f1f" strokeWidth="1" />
          <rect x="242" y="108" width="90" height="40" fill="#111" />
          {/* Sidewalk */}
          <rect x="0" y="190" width="400" height="30" fill="#131313" />
          {[50,100,150,200,250,300,350].map((x,i) => (
            <line key={i} x1={x} y1="191" x2={x-5} y2="220" stroke="#1a1a1a" strokeWidth="1" />
          ))}
        </svg>
      );

    case "theater-floor":
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="screen-glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8e0d4" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#c4b8a8" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="floor-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#111" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
            <filter id="screen-blur">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          {/* Room background */}
          <rect width="400" height="220" fill="url(#floor-g)" />
          {/* Ceiling */}
          <rect x="0" y="0" width="400" height="18" fill="#0f0f0f" />
          {/* Screen wall glow behind screen */}
          <rect x="50" y="5" width="300" height="90" fill="#f5f0e8" opacity="0.04" filter="url(#screen-blur)" />
          {/* Screen */}
          <rect x="70" y="8" width="260" height="75" rx="1" fill="url(#screen-glow)" opacity="0.85" />
          {/* Screen frame */}
          <rect x="68" y="6" width="264" height="79" rx="1" fill="none" stroke="#2d2d2d" strokeWidth="2" />
          {/* Film content suggestion — abstract bars */}
          <rect x="80" y="16" width="120" height="60" fill="#c4b8a8" opacity="0.3" />
          <rect x="210" y="16" width="110" height="60" fill="#8a7a6a" opacity="0.4" />
          <rect x="80" y="40" width="240" height="2" fill="#0a0a0a" opacity="0.2" />
          {/* Projector beam */}
          <polygon points="200,0 180,8 220,8" fill="#f5f0e8" opacity="0.06" />
          {/* Screen ambient spill on floor */}
          <ellipse cx="200" cy="95" rx="160" ry="12" fill="#f5f0e8" opacity="0.04" />
          {/* Mattresses — 3 rows of 4 */}
          {[0,1,2].map(row => (
            [0,1,2,3].map(col => {
              const x = 35 + col * 84;
              const y = 105 + row * 36;
              const isCenter = col === 1 || col === 2;
              return (
                <g key={`${row}-${col}`}>
                  <rect
                    x={x} y={y}
                    width={74} height={28}
                    rx="3"
                    fill={isCenter && row === 1 ? "#1a1030" : "#141414"}
                    stroke={isCenter && row === 1 ? "#7c3aed" : "#222"}
                    strokeWidth={isCenter && row === 1 ? "1.5" : "1"}
                  />
                  {/* Pillow */}
                  <rect x={x+4} y={y+4} width="18" height="10" rx="2" fill="#1f1f1f" stroke="#2a2a2a" strokeWidth="0.5" />
                  {/* Bedding texture line */}
                  <line x1={x+26} y1={y+8} x2={x+70} y2={y+8} stroke="#222" strokeWidth="0.5" />
                  <line x1={x+26} y1={y+14} x2={x+70} y2={y+14} stroke="#1a1a1a" strokeWidth="0.5" />
                  {/* Screen light reflection on top mattresses */}
                  {row === 0 && <rect x={x} y={y} width={74} height={5} rx="1" fill="#f5f0e8" opacity="0.04" />}
                </g>
              );
            })
          ))}
          {/* Side wall detail */}
          <rect x="0" y="0" width="28" height="220" fill="#0d0d0d" />
          <rect x="372" y="0" width="28" height="220" fill="#0d0d0d" />
          {/* Aisle strip lights */}
          {[110,146,182].map((y,i) => (
            <rect key={i} x="2" y={y} width="3" height="18" rx="1" fill="#7c3aed" opacity="0.3" />
          ))}
          {[110,146,182].map((y,i) => (
            <rect key={i} x="395" y={y} width="3" height="18" rx="1" fill="#7c3aed" opacity="0.3" />
          ))}
        </svg>
      );

    case "counter-night":
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="counter-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d0d0d" />
              <stop offset="100%" stopColor="#111" />
            </linearGradient>
            <linearGradient id="amber-spill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#counter-bg)" />
          {/* Overhead warm light pool */}
          <ellipse cx="200" cy="80" rx="160" ry="60" fill="url(#amber-spill)" />
          {/* Back wall shelves */}
          <rect x="20" y="20" width="360" height="100" fill="#0a0a0a" />
          {/* Shelf boards */}
          {[30,60,95].map((y,i) => (
            <rect key={i} x="25" y={y} width="350" height="3" fill="#1a1a1a" />
          ))}
          {/* Items on shelves — candy boxes */}
          {[40,65,90,115,140,165,190,215,240,265,290,315,340].map((x,i) => {
            const colors = ["#7c3aed","#d97706","#f87171","#34d399","#60a5fa","#f472b6","#a78bfa"];
            const color = colors[i % colors.length];
            const shelfY = i < 5 ? 10 : i < 9 ? 38 : 65;
            return (
              <rect key={i} x={x} y={shelfY} width="18" height="18" rx="1"
                fill={color} opacity="0.25" stroke={color} strokeWidth="0.5" strokeOpacity="0.5" />
            );
          })}
          {/* Popcorn machine silhouette */}
          <rect x="330" y="15" width="40" height="90" rx="4" fill="#111" stroke="#d97706" strokeWidth="1" strokeOpacity="0.4" />
          <ellipse cx="350" cy="22" rx="16" ry="6" fill="#d97706" opacity="0.15" />
          <rect x="338" y="26" width="24" height="50" fill="#1a1a1a" />
          {[0,1,2,3,4].map(i => (
            <circle key={i} cx={340+i*5} cy={30+i*7} r="3" fill="#f59e0b" opacity={0.1+i*0.04} />
          ))}
          {/* Counter surface */}
          <rect x="0" y="115" width="400" height="20" fill="#141414" stroke="#1f1f1f" strokeWidth="1" />
          <rect x="0" y="120" width="400" height="2" fill="#1f1f1f" />
          {/* Items on counter */}
          {/* Popcorn bag */}
          <polygon points="130,90 145,90 148,115 127,115" fill="#1a1a1a" stroke="#d97706" strokeWidth="1" strokeOpacity="0.5" />
          <rect x="129" y="86" width="18" height="6" rx="1" fill="#d97706" opacity="0.2" />
          {/* Candy bar */}
          <rect x="165" y="97" width="28" height="18" rx="2" fill="#7c3aed" opacity="0.3" stroke="#a78bfa" strokeWidth="0.5" strokeOpacity="0.5" />
          {/* Soda cup */}
          <polygon points="200,88 212,88 215,115 197,115" fill="#1a1a1a" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
          <rect x="200" y="84" width="12" height="6" rx="1" fill="#60a5fa" opacity="0.2" />
          {/* Spaghetti bowl — special item */}
          <ellipse cx="265" cy="106" rx="28" ry="9" fill="#111" stroke="#f87171" strokeWidth="1.5" />
          <ellipse cx="265" cy="103" rx="24" ry="7" fill="#1a1a1a" />
          {/* Spaghetti squiggle lines */}
          {[-10,-5,0,5,10].map((dx,i) => (
            <path key={i}
              d={`M ${255+dx} ${100+i} q ${3} ${2} ${6} ${0} q ${3} ${-2} ${6} ${0}`}
              stroke="#f87171" strokeWidth="0.8" fill="none" opacity="0.5" />
          ))}
          {/* Label card */}
          <rect x="245" y="113" width="40" height="10" rx="1" fill="#f87171" opacity="0.15" />
          <rect x="249" y="116" width="32" height="2" rx="0.5" fill="#f87171" opacity="0.4" />
          {/* Floor */}
          <rect x="0" y="135" width="400" height="85" fill="#0a0a0a" />
          {/* Floor grid */}
          {[50,100,150,200,250,300,350].map((x,i) => (
            <line key={i} x1={x} y1="135" x2={x} y2="220" stroke="#111" strokeWidth="1" />
          ))}
          {[160,185,210].map((y,i) => (
            <line key={i} x1="0" y1={y} x2="400" y2={y} stroke="#111" strokeWidth="1" />
          ))}
        </svg>
      );

    case "showroom-day":
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="day-room" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#161616" />
              <stop offset="100%" stopColor="#111" />
            </linearGradient>
            <linearGradient id="window-light" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f5f0e8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#f5f0e8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#day-room)" />
          {/* Ceiling */}
          <rect x="0" y="0" width="400" height="22" fill="#0f0f0f" />
          {/* Overhead lights */}
          {[60,120,180,240,300,360].map((x,i) => (
            <g key={i}>
              <rect x={x-6} y="4" width="12" height="4" rx="1" fill="#f5f0e8" opacity="0.2" />
              <ellipse cx={x} cy="22" rx="30" ry="8" fill="#f5f0e8" opacity="0.04" />
            </g>
          ))}
          {/* Window light spill from left */}
          <rect x="0" y="22" width="200" height="198" fill="url(#window-light)" />
          {/* Floor */}
          <rect x="0" y="170" width="400" height="50" fill="#0d0d0d" />
          {/* Floor grain lines */}
          {[40,80,120,160,200,240,280,320,360].map((x,i) => (
            <line key={i} x1={x} y1="170" x2={x+10} y2="220" stroke="#131313" strokeWidth="1" />
          ))}
          {/* Mattresses on display plinths */}
          {[0,1,2].map(col => {
            const bases = [
              { x: 20, y: 140, w: 100, badge: null },
              { x: 150, y: 135, w: 100, badge: "Popular" },
              { x: 280, y: 140, w: 100, badge: null },
            ];
            const b = bases[col];
            return (
              <g key={col}>
                {/* Plinth */}
                <rect x={b.x} y={b.y+28} width={b.w} height={12} rx="1" fill="#131313" stroke="#1a1a1a" strokeWidth="1" />
                {/* Mattress */}
                <rect x={b.x} y={b.y} width={b.w} height={30} rx="3"
                  fill="#141414" stroke={b.badge ? "#7c3aed" : "#222"}
                  strokeWidth={b.badge ? "1.5" : "1"} />
                {/* Pillow */}
                <rect x={b.x+4} y={b.y+5} width="22" height="12" rx="2" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.5" />
                {/* Bedding lines */}
                <line x1={b.x+30} y1={b.y+10} x2={b.x+b.w-4} y2={b.y+10} stroke="#1f1f1f" strokeWidth="0.5" />
                <line x1={b.x+30} y1={b.y+18} x2={b.x+b.w-4} y2={b.y+18} stroke="#191919" strokeWidth="0.5" />
                {/* Badge */}
                {b.badge && (
                  <rect x={b.x+b.w-32} y={b.y-8} width="36" height="10" rx="2"
                    fill="#7c3aed" opacity="0.3" />
                )}
                {/* Price tag */}
                <rect x={b.x} y={b.y+42} width="44" height="16" rx="1" fill="#111" stroke="#1f1f1f" strokeWidth="0.5" />
                <rect x={b.x+4} y={b.y+45} width="26" height="3" rx="0.5" fill="#9ca3af" opacity="0.3" />
                <rect x={b.x+4} y={b.y+51} width="18" height="2" rx="0.5" fill="#6b7280" opacity="0.2" />
              </g>
            );
          })}
          {/* Wall shelving / info panels */}
          <rect x="15" y="30" width="80" height="95" fill="#0d0d0d" stroke="#1a1a1a" strokeWidth="1" />
          <rect x="20" y="35" width="70" height="5" rx="0.5" fill="#f5f0e8" opacity="0.08" />
          <rect x="20" y="44" width="55" height="3" rx="0.5" fill="#9ca3af" opacity="0.1" />
          <rect x="20" y="51" width="65" height="3" rx="0.5" fill="#9ca3af" opacity="0.08" />
          <rect x="20" y="58" width="45" height="3" rx="0.5" fill="#9ca3af" opacity="0.06" />
          {/* Far right panel */}
          <rect x="305" y="30" width="80" height="95" fill="#0d0d0d" stroke="#1a1a1a" strokeWidth="1" />
          <rect x="310" y="35" width="70" height="5" rx="0.5" fill="#f5f0e8" opacity="0.06" />
          <rect x="310" y="44" width="55" height="3" rx="0.5" fill="#9ca3af" opacity="0.08" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden="true">
          <rect width="400" height="220" fill="#111" />
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
                Willow Pass retail corridor, Concord. Same building, two identities — mattress store by day, single-screen cinema after 8 PM.
              </p>
            </div>
            <div className="text-xs font-sans text-[#4b5563] text-right leading-relaxed">
              2475 Willow Pass Rd<br />
              Concord, CA 94520
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
                <div className="aspect-video bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg overflow-hidden">
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
                <div className="aspect-video bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg overflow-hidden">
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
          Illustrated compositions based on the Willow Pass corridor and venue layout. No third-party map imagery used.
        </p>
      </div>
    </section>
  );
}
