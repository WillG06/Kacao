import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import insta5 from "@/assets/insta-5.jpg";

const panels = [
  { n: "I", t: "At six", d: "First batch out. The marble is cold, the espresso is on, the bench is dusted in flour.", img: g1 },
  { n: "II", t: "Lamination", d: "Seventy-eight layers of cultured French butter, folded by hand over thirty-six hours.", img: g2 },
  { n: "III", t: "The bench", d: "Twelve seats along the marble. A flat white in glass. The morning paper.", img: insta5 },
  { n: "IV", t: "At noon", d: "Second bake. Sourdough out of the deck oven, still cracking as it cools.", img: g3 },
  { n: "V", t: "Last pour", d: "Single origin Ethiopian, double ristretto. The barista knows your drink by the third visit.", img: g4 },
];

export function HorizontalScroll() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // Move from 0 to negative width of (panels-1 panels worth)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(panels.length - 1) * (100 / panels.length) * 1.0}%`]);

  return (
    <section ref={ref} className="relative bg-ink text-cream" style={{ height: `${panels.length * 100}vh` }} aria-label="A day at KACAO">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 pt-10 md:pt-14 flex items-center justify-between text-cream/70">
          <div className="text-[10px] tracking-luxe uppercase">II — A day at the counter</div>
          <div className="hidden md:block text-[10px] tracking-luxe uppercase tabular-nums">06:00 → 20:00</div>
        </div>

        <motion.div
          style={reduce ? undefined : { x }}
          className="flex h-full will-change-transform"
        >
          {panels.map((p, i) => (
            <article
              key={p.n}
              className="relative shrink-0 h-full w-screen md:w-[80vw] grid md:grid-cols-2 items-stretch border-r border-cream/10"
            >
              <div className="relative overflow-hidden bg-ink/40">
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/60" aria-hidden />
              </div>
              <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 bg-ink">
                <div className="text-[10px] tracking-luxe uppercase text-cream/50 tabular-nums">Hour — {p.n}</div>
                <h3 className="mt-8 font-display text-[clamp(3rem,7vw,7rem)] leading-[0.9] text-cream">
                  {p.t}.
                </h3>
                <p className="mt-10 max-w-md text-base md:text-lg text-cream/75 leading-relaxed">
                  {p.d}
                </p>
                <div className="mt-12 text-[10px] tracking-luxe uppercase text-cream/40 tabular-nums">
                  {String(i + 1).padStart(2, "0")} / {String(panels.length).padStart(2, "0")}
                </div>
              </div>
            </article>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-8 z-20 text-[10px] tracking-luxe uppercase text-cream/50 hidden md:block">
          Scroll →
        </div>
      </div>
    </section>
  );
}
