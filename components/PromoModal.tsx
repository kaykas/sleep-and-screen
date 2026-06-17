"use client";
import { useState, useEffect } from "react";

// PromoModal — first-load retail popup
//
// Split layout ~880×580: left CSS visual panel, right offer + form.
// Headline: SAVE MONEY, SLEEP BETTER, CATCH A FLICK WITH 10% OFF*
// Looks exactly like a mattress store promo overlay. The film layer is earnest, deadpan.
//
// Behavior: 1.6s delay, dismissed once per session via sessionStorage.
// Backdrop click, ×, either CTA, or "No thanks" all dismiss.

export default function PromoModal() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("ebm-modal-v3")) return;
    const t = setTimeout(() => setVisible(true), 1600);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    sessionStorage.setItem("ebm-modal-v3", "1");
    setVisible(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (!visible) return null;

  return (
    /* ── Full-screen overlay ── */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.62)", backdropFilter: "blur(3px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Exclusive offer"
    >
      {/* ── Modal shell ── ~880px wide, ~580px tall on desktop */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full overflow-hidden flex flex-col sm:flex-row"
        style={{ maxWidth: "880px", maxHeight: "92vh" }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Close button ── */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-white hover:text-white text-xl font-bold transition-colors sm:text-gray-500 sm:bg-gray-100 sm:hover:bg-gray-200 sm:hover:text-gray-900"
        >
          ×
        </button>

        {/* ════════════════════════════════════
            LEFT PANEL — retail bed/cinema CSS art
            ════════════════════════════════════ */}
        <div className="sm:w-[42%] bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#1e40af] flex-shrink-0 flex flex-col items-center justify-center p-8 relative overflow-hidden min-h-[220px]">

          {/* Background texture: subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />

          {/* Corner sale badge */}
          <div className="absolute top-4 left-4 bg-[#dc2626] text-white text-[9px] font-extrabold uppercase tracking-widest px-2 py-1 rounded">
            Summer Sale
          </div>

          {/* ── CSS showroom bed illustration ── */}
          <div className="relative mb-5 w-48" aria-hidden="true">
            {/* Headboard */}
            <div className="w-full h-8 bg-white/25 rounded-t-xl border border-white/30 mb-0.5" />

            {/* Mattress body */}
            <div className="w-full h-20 bg-white/20 rounded-sm border border-white/25 relative overflow-hidden">
              {/* Mattress ticking lines */}
              <div className="absolute inset-0 flex flex-col justify-around py-2 px-3 gap-1">
                {[0,1,2].map(i => (
                  <div key={i} className="h-px bg-white/20 rounded" />
                ))}
              </div>
              {/* Pillow pair */}
              <div className="absolute top-2 left-3 right-3 flex gap-2">
                <div className="flex-1 h-7 bg-white/50 rounded-md border border-white/30" />
                <div className="flex-1 h-7 bg-white/50 rounded-md border border-white/30" />
              </div>
              {/* Fold-back blanket */}
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-white/15 border-t border-white/25 rounded-b-sm" />
            </div>

            {/* Bed legs */}
            <div className="flex justify-between px-4 mt-0.5">
              <div className="w-3 h-4 bg-white/20 rounded-b border border-white/20" />
              <div className="w-3 h-4 bg-white/20 rounded-b border border-white/20" />
            </div>

            {/* Film reel — overlapping bottom-right */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full border-[3px] border-amber-400/70 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border-2 border-amber-400/80 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-amber-400/60" />
              </div>
              {/* Sprocket dots */}
              {[0,90,180,270].map(deg => (
                <div
                  key={deg}
                  className="absolute w-2 h-2 rounded-full bg-amber-400/50"
                  style={{ transform: `rotate(${deg}deg) translateY(-24px)` }}
                />
              ))}
            </div>
          </div>

          {/* Stars */}
          <div className="text-amber-300 text-xs tracking-[0.3em] mb-3" aria-hidden="true">
            ★ ★ ★ ★ ★
          </div>

          {/* Brand lines */}
          <p className="text-white font-extrabold text-base text-center leading-snug mb-1">
            East Bay Mattress
          </p>
          <p className="text-blue-200 text-xs text-center font-medium mb-4">
            Mattresses &amp; Cinema · Evening Hours after dark
          </p>

          {/* Film-strip decoration */}
          <div className="flex gap-1.5 opacity-25" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-2.5 h-9 bg-white rounded-sm" />
            ))}
          </div>

          {/* Address */}
          <p className="text-blue-300 text-[10px] text-center mt-4 leading-relaxed">
            2304 Willow Pass Road<br />Concord, CA 94520
          </p>
        </div>

        {/* ════════════════════════════════════
            RIGHT PANEL — offer + form
            ════════════════════════════════════ */}
        <div className="flex-1 flex flex-col justify-between px-7 py-7 overflow-y-auto">
          {!submitted ? (
            <>
              <div>
                {/* Eyebrow */}
                <p className="text-[10px] font-extrabold tracking-[0.22em] uppercase text-gray-400 mb-2">
                  Exclusive Subscriber Offer
                </p>

                {/* Headline — exact spirit from brief */}
                <h2 className="text-[1.45rem] font-extrabold leading-tight text-[#1d4ed8] mb-1">
                  Save Money, Sleep Better,<br />
                  Catch a Flick with{" "}
                  <span className="text-[#dc2626]">10% Off*</span>
                </h2>

                {/* Body copy */}
                <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-5">
                  Get mattress deals, sale alerts, and exclusive Evening Hours
                  movie premiere invites — plus{" "}
                  <strong className="text-gray-900">10% off your next order</strong>{" "}
                  on any mattress, base, or accessory.
                  King buyers get a full year of free Friday screenings.
                  Everyone else gets the newsletter.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label
                      htmlFor="pm-email"
                      className="block text-xs font-semibold text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      id="pm-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="pm-zip"
                      className="block text-xs font-semibold text-gray-700 mb-1"
                    >
                      Zip Code{" "}
                      <span className="text-gray-400 font-normal">
                        — for local delivery deals
                      </span>
                    </label>
                    <input
                      id="pm-zip"
                      type="text"
                      inputMode="numeric"
                      placeholder="94520"
                      value={zip}
                      onChange={e => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
                      maxLength={5}
                      className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#dc2626] hover:bg-red-700 text-white font-extrabold py-3.5 rounded-full text-sm transition-colors tracking-wide"
                  >
                    Subscribe &amp; Get 10% Off
                  </button>
                </form>

                <button
                  type="button"
                  onClick={dismiss}
                  className="w-full text-center text-xs text-gray-400 hover:text-gray-600 mt-3 py-1.5 transition-colors"
                >
                  No thanks, I&apos;ll pay full price and miss the movies
                </button>
              </div>

              {/* Privacy fine print */}
              <p className="text-[10px] text-gray-400 leading-relaxed pt-4 mt-4 border-t border-gray-100">
                *10% off one purchase of $299+. Not combinable with other offers or prior purchases.
                Evening Hours access subject to availability; King purchase required for annual pass.
                Unsubscribe any time. We do not sell or share your information.
                This is a concept/prototype site — no real transactions occur.
              </p>
            </>
          ) : (
            /* ── Confirmation state ── */
            <div className="flex flex-col items-center justify-center h-full text-center py-10">
              <div className="text-5xl mb-4" aria-hidden="true">🎬</div>
              <h3 className="text-xl font-extrabold text-[#1d4ed8] mb-2">You&apos;re in.</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2 max-w-xs">
                Your 10% off code is on its way. Evening Hours invites follow
                each Monday when the Friday screening drops.
              </p>
              <p className="text-xs text-gray-400 mb-7">
                The mattresses do not move. The screen comes down.
              </p>
              <button
                type="button"
                onClick={dismiss}
                className="bg-gray-900 hover:bg-gray-700 text-white font-extrabold px-10 py-3 rounded-full text-sm transition-colors"
              >
                Shop Mattresses
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
