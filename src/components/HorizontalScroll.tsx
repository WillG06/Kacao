import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import insta5 from "@/assets/insta-5.jpg";

const panels = [
  {
    n: "I",
    t: "At six",
    d: "First batch out. The marble is cold, the espresso is on, the bench is dusted in flour.",
    img: g1,
    pos: "center 30%",
  },
  {
    n: "II",
    t: "Lamination",
    d: "Seventy-eight layers of cultured French butter, folded by hand over thirty-six hours.",
    img: g2,
    pos: "center 50%",
  },
  {
    n: "III",
    t: "The bench",
    d: "Twelve seats along the marble. A flat white in glass. The morning paper.",
    img: insta5,
    pos: "center 40%",
  },
  {
    n: "IV",
    t: "At noon",
    d: "Second bake. Sourdough out of the deck oven, still cracking as it cools.",
    img: g3,
    pos: "center 60%",
  },
  {
    n: "V",
    t: "Last pour",
    d: "Single origin Ethiopian, double ristretto. The barista knows your drink by the third visit.",
    img: g4,
    pos: "center 45%",
  },
];

export function HorizontalScroll() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Panel width: 82vw desktop, 92vw mobile
  const panelVw = isMobile ? 92 : 82;
  const distanceVw = panels.length * panelVw - 100;

  // Add a dwell buffer at the end — horizontal travel finishes before the
  // section ends, so the last panel settles and sits rather than rushing off.
  // dwellVw = how much extra "nothing happens" scroll space at the end.
  const dwellVw = panelVw * 0.9;
  const totalVw = distanceVw + dwellVw;
  const endProgress = distanceVw / totalVw;

  const x = useTransform(
    scrollYProgress,
    [0, endProgress],
    ["0vw", `-${distanceVw}vw`]
  );

  // Progress bar completes when horizontal travel completes, not at section end
  const progressScaleX = useTransform(scrollYProgress, [0, endProgress], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative bg-ink text-cream"
      style={{ height: `${(totalVw / 100 + 1) * 100}vh` }}
      aria-label="A day at KACAO"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Chapter header */}
        <div className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 pt-10 md:pt-14 flex items-center justify-between pointer-events-none">
          <div className="text-[10px] tracking-luxe uppercase text-cream/60">
            II — A day at the counter
          </div>
          <div className="hidden md:block text-[10px] tracking-luxe uppercase tabular-nums text-cream/40">
            06:00 → 20:00
          </div>
        </div>

        {/* Panels track */}
        <motion.div
          style={reduce ? undefined : { x }}
          className="flex h-full will-change-transform"
        >
          {panels.map((p, i) => (
            <article
              key={p.n}
              className="relative shrink-0 h-full w-[92vw] md:w-[82vw] overflow-hidden"
              style={{
                borderRight: "1px solid rgba(245,238,225,0.08)",
              }}
            >
              {/* Full-bleed image */}
              <img
                src={p.img}
                alt={p.t}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: p.pos, opacity: 0.88 }}
              />

              {/* Atmospheric gradients */}
              {/* Bottom dark burn — for text legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(18,14,10,0.97) 0%, rgba(18,14,10,0.65) 30%, rgba(18,14,10,0.15) 60%, rgba(18,14,10,0.05) 100%)",
                }}
                aria-hidden
              />
              {/* Left edge fade — eases entry */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(18,14,10,0.55) 0%, transparent 30%)",
                }}
                aria-hidden
              />

              {/* Chapter mark — top left */}
              <div className="absolute top-20 left-6 md:left-10 z-10 flex items-center gap-3">
                <span
                  className="text-[10px] tracking-luxe uppercase tabular-nums"
                  style={{ color: "rgba(245,238,225,0.4)" }}
                >
                  Hour
                </span>
                <span
                  className="text-[10px] tracking-luxe"
                  style={{ color: "rgba(245,238,225,0.25)" }}
                >
                  —
                </span>
                <span
                  className="font-display text-sm"
                  style={{ color: "rgba(245,238,225,0.5)" }}
                >
                  {p.n}
                </span>
              </div>

              {/* Panel index — top right */}
              <div
                className="absolute top-20 right-6 md:right-10 z-10 text-[10px] tracking-luxe uppercase tabular-nums"
                style={{ color: "rgba(245,238,225,0.25)" }}
              >
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(panels.length).padStart(2, "0")}
              </div>

              {/* Text block — bottom left, on image */}
              <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-10 lg:px-14 pb-14 md:pb-20">
                <motion.h3
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-cream leading-[0.88]"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 7.5rem)",
                    textShadow: "0 2px 40px rgba(0,0,0,0.4)",
                  }}
                >
                  {p.t}.
                </motion.h3>
                <motion.p
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-4 md:mt-5 text-sm md:text-base leading-relaxed"
                  style={{
                    maxWidth: "28ch",
                    color: "rgba(245,238,225,0.65)",
                  }}
                >
                  {p.d}
                </motion.p>
              </div>
            </article>
          ))}
        </motion.div>

        {/* Progress bar — bottom of viewport */}
        <div
          className="absolute bottom-0 left-0 right-0 z-30 h-px"
          style={{ background: "rgba(245,238,225,0.08)" }}
        >
          <motion.div
            className="h-full origin-left"
            style={{
              scaleX: reduce ? 1 : progressScaleX,
              background: "rgba(245,238,225,0.5)",
            }}
          />
        </div>

        {/* Scroll hint — bottom right */}
        <motion.div
          className="absolute bottom-6 right-8 z-30 hidden md:flex items-center gap-2"
          animate={reduce ? undefined : { x: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span
            className="text-[10px] tracking-luxe uppercase"
            style={{ color: "rgba(245,238,225,0.4)" }}
          >
            Scroll
          </span>
          <svg
            width="18"
            height="8"
            viewBox="0 0 18 8"
            fill="none"
            style={{ opacity: 0.35 }}
          >
            <path
              d="M0 4h16M13 1l3 3-3 3"
              stroke="rgba(245,238,225,1)"
              strokeWidth="0.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}