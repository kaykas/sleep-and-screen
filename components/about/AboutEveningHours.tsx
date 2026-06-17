import Image from "next/image";
import Link from "next/link";
import { JOINT_PICKS } from "@/lib/content";

export default function AboutEveningHours() {
  return (
    <section className="py-0 bg-[#0d0d0d] text-[#f5f0e8]">
      <div className="grid md:grid-cols-2">
        {/* Evening storefront image — left panel */}
        <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
          <Image
            src="/images/about/storefront-evening.jpg"
            alt="East Bay Mattress at dusk — MOVIES neon sign lit in window, showtime board visible, mattress showroom interior glowing warm"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle dark overlay so text on right stays legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/40 md:hidden" />
        </div>

        {/* Right panel: Evening Hours copy */}
        <div className="flex flex-col justify-center px-10 py-16">
          <div className="text-xs font-bold tracking-widest uppercase text-indigo-400 mb-4">
            Evening Hours
          </div>
          <h2 className="text-3xl font-extrabold mb-5">
            The store stays open after dark —
            for films.
          </h2>
          <div className="space-y-4 text-[#c8c0b0] leading-relaxed text-sm">
            <p>
              On selected nights, the showroom converts. The overhead lights dim. A screen
              drops over the north wall. The mattresses stay where they are — you watch from them.
            </p>
            <p>
              Programming is curated by{" "}
              <span className="text-[#f5f0e8] font-semibold">{JOINT_PICKS.curatorsLabel}</span>.
              The calendar runs monthly with theme nights, double features, and annual series.
              Some nights are quiet. Some run to midnight.
            </p>
            <p>
              Mattress customers get priority reservation access. Walk-in screening reservations
              are a suggested donation. Popcorn is included.
            </p>
            <p>
              Evening Hours is a secondary program. The store comes first.
              You can shop mattresses without ever attending a screening.
            </p>
          </div>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Link
              href="/#evening-hours"
              className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-sm px-6 py-3 rounded transition-colors"
            >
              See the calendar
            </Link>
            <Link
              href="/#visit"
              className="inline-block border border-[#444] hover:border-[#888] text-[#c8c0b0] hover:text-[#f5f0e8] font-semibold text-sm px-6 py-3 rounded transition-colors"
            >
              Store hours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
