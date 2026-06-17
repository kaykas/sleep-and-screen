import Image from "next/image";

// VenueGallery — photorealistic storefront + showroom images.
// Uses generated/approved assets that match the Berkeley/San Pablo storefront direction.

const exteriorScenes = [
  {
    id: "ext-1",
    label: "San Pablo Ave · Day",
    caption:
      "Full-width Berkeley retail storefront, plate-glass showroom windows, practical mattress-store signage.",
    src: "/images/venue/exterior-day.jpg",
  },
  {
    id: "ext-2",
    label: "Storefront · Dusk",
    caption:
      "Same frontage as the block starts to fill. Door lettering, window signage, and Evening Hours cue visible from the sidewalk.",
    src: "/images/venue/exterior-dusk.jpg",
  },
  {
    id: "ext-3",
    label: "Evening Hours · Window",
    caption:
      "Mattress store first: blue tile, glass doors, MOVIES neon, and showtimes posted in the window.",
    src: "/images/venue/exterior-evening.jpg",
  },
];

const interiorScenes = [
  {
    id: "int-1",
    label: "Showroom Floor · Daytime",
    caption:
      "Rows of mattresses, pillows, price cards, and fluorescent retail lighting. A normal mattress store before anything else.",
    src: "/images/venue/showroom-day.jpg",
  },
  {
    id: "int-2",
    label: "Showroom Floor · Screening Night",
    caption:
      "Same showroom after close: projection screen down, warmer light, mattresses still serving as the room.",
    src: "/images/venue/showroom-screening-night.jpg",
  },
  {
    id: "int-3",
    label: "Concessions · Counter Service",
    caption:
      "Simple counter setup for popcorn, candy, drinks, and limited hot items before the lights go down.",
    src: "/images/about/storefront-door-close.jpg",
  },
];

type Scene = {
  id: string;
  label: string;
  caption: string;
  src: string;
};

function SceneCard({ scene, priority = false }: { scene: Scene; priority?: boolean }) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
        <Image
          src={scene.src}
          alt={scene.label}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority={priority}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-4">
          <figcaption className="text-sm font-black text-white drop-shadow-sm">
            {scene.label}
          </figcaption>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 leading-relaxed">{scene.caption}</p>
      </div>
    </figure>
  );
}

export default function VenueGallery() {
  return (
    <section id="venue" className="py-16 md:py-20 bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-end mb-10">
          <div>
            <div className="text-xs font-black tracking-[0.22em] uppercase text-blue-300 mb-2">
              The Space
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Venue
            </h2>
            <p className="text-gray-300 max-w-2xl leading-relaxed">
              On San Pablo Ave in Berkeley. Full-width retail storefront. Mattress store by
              day — same floor, same beds — single-screen after 8 PM on selected nights.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-gray-300">
            <div className="font-black text-white mb-1">2397 San Pablo Ave</div>
            <div>Berkeley, CA 94702</div>
            <div className="mt-3 text-xs uppercase tracking-widest text-gray-500">
              Retail storefront · street parking · accessible
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-4">
            Exterior &amp; Approach
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {exteriorScenes.map((scene, index) => (
              <SceneCard key={scene.id} scene={scene} priority={index === 0} />
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-4">
            Interior
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {interiorScenes.map((scene) => (
              <SceneCard key={scene.id} scene={scene} />
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Images are launch mockups based on the Berkeley storefront direction; final photography should replace them after access and licensing are complete.
        </p>
      </div>
    </section>
  );
}
