import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import about from "@/assets/about.jpg";
import hands from "@/assets/about-hands.jpg";
import oven from "@/assets/about-oven.jpg";
import interior from "@/assets/about-interior.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — KACAO Bakery, Birmingham" },
      { name: "description", content: "The story behind KACAO — a five-star artisan bakery and patisserie inside Birmingham's Bullring food court." },
      { property: "og:title", content: "About KACAO — Luxury Bakery, Birmingham" },
      { property: "og:description", content: "A five-star artisan bakery built around patience, craft and a single counter." },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { n: "01", t: "Patience", d: "Long ferments, slow proofs, nothing rushed. The dough decides when it's ready, not the clock." },
  { n: "02", t: "Provenance", d: "Stone-milled flour from heritage grains, French cultured butter, single-origin coffee. We name our suppliers." },
  { n: "03", t: "Restraint", d: "Three perfect things, not thirty average ones. The carte changes — but the standard doesn't." },
  { n: "04", t: "Hospitality", d: "Warmth at the counter, every visit. We learn your drink. We remember your name." },
];

const timeline = [
  { y: "2019", t: "A single shelf", d: "KACAO opens with three pastries on a borrowed shelf at the back of the food court." },
  { y: "2021", t: "The first oven", d: "We move to a counter of our own. The deck oven arrives in pieces, by van, from Lyon." },
  { y: "2023", t: "Five stars", d: "Our hundredth Google review tips the scale. We have not dropped below five since." },
  { y: "2025", t: "A new chapter", d: "The counter doubles. The team triples. The standard does not move." },
];

const team = [
  { name: "Yasmin El-Amrani", role: "Founder & Head Baker" },
  { name: "Théo Laurent", role: "Pastry Chef" },
  { name: "Mira Okafor", role: "Head Barista" },
  { name: "Samuel Whitcombe", role: "Bread Baker" },
];

function AboutPage() {
  const reduce = useReducedMotion();
  return (
    <PageTransition variant="clip">
      {/* Cinematic hero */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img src={about} alt="KACAO baker shaping dough by hand" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1200} />
        <div className="absolute inset-0 bg-ink/35" aria-hidden />
        <div className="relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col justify-end pb-24 md:pb-32">
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-[10px] tracking-luxe uppercase text-cream/85"
          >
            Chapter — I
          </motion.div>
          <motion.h1
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] text-cream max-w-4xl"
          >
            Made by hand,<br /><em className="not-italic">in Birmingham.</em>
          </motion.h1>
        </div>
      </section>

      {/* Story with side image */}
      <section className="py-32 md:py-44 px-6 md:px-12">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-[1.1fr_1fr] gap-16 md:gap-24 items-start">
          <div>
            <Reveal>
              <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">II — The beginning</div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 font-display text-3xl md:text-5xl leading-[1.1]">
                A small Moroccan family recipe. A borrowed mixer. A single shelf inside the Bullring.
              </p>
            </Reveal>
            <Reveal variant="fade" delay={0.2} className="mt-10 space-y-6 text-base leading-relaxed text-ink/80">
              <p>
                The food court is a generous host but a strange neighbour for a bakery — most of what's around it is loud, fast, and forgettable. We wanted to build the opposite. A counter where the croissants are laminated for thirty-six hours, the espresso is poured into warm cups, and the queue moves only as fast as the next bake out of the oven.
              </p>
              <p>
                Five years and five stars later, very little has changed. We still bake only enough for the day. We still know the regulars by drink. And we still believe that where you eat shouldn't decide how well you eat.
              </p>
            </Reveal>
          </div>
          <Reveal variant="fade" delay={0.2}>
            <motion.img
              src={hands}
              alt="Baker's flour-dusted hands shaping sourdough"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
              width={1024}
              height={1280}
            />
          </Reveal>
        </div>
      </section>

      {/* IMAGE BAND */}
      <section className="px-6 md:px-12">
        <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[260px]">
          <Reveal className="col-span-7 row-span-2">
            <img src={oven} alt="Loaves resting in a stone deck oven" loading="lazy" className="w-full h-full object-cover" />
          </Reveal>
          <Reveal className="col-span-5">
            <img src={g2} alt="A torn KACAO croissant, laminated layers visible" loading="lazy" className="w-full h-full object-cover" />
          </Reveal>
          <Reveal className="col-span-5">
            <img src={g4} alt="Espresso pour at KACAO" loading="lazy" className="w-full h-full object-cover" />
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 mt-24">
        <Reveal variant="rule" className="editorial-rule" />
      </div>

      {/* Values */}
      <section className="py-32 md:py-44 px-6 md:px-12">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">III — Principles</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-5xl md:text-7xl max-w-4xl leading-[0.95]">Four things we hold to.</h2>
          </Reveal>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {values.map((v, i) => (
              <motion.div
                key={v.n}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-border pt-8"
              >
                <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">{v.n}</div>
                <h3 className="mt-4 font-display text-5xl md:text-6xl text-ink">{v.t}</h3>
                <p className="mt-5 text-base text-ink/75 max-w-sm leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE with image */}
      <section className="py-32 md:py-44 px-6 md:px-12 bg-sand/40">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-[1fr_1.3fr] gap-16 md:gap-24 items-start">
          <Reveal variant="fade">
            <motion.img
              src={interior}
              alt="KACAO interior with marble counter and warm light"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover md:sticky md:top-32"
              width={1024}
              height={1280}
            />
          </Reveal>
          <div>
            <Reveal>
              <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">IV — A short timeline</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95]">From a shelf<br />to a studio.</h2>
            </Reveal>
            <ol className="mt-16 space-y-12">
              {timeline.map((p, i) => (
                <motion.li
                  key={p.y}
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-[80px_1fr] gap-8 border-t border-ink/15 pt-8"
                >
                  <span className="font-display text-2xl tabular-nums">{p.y}</span>
                  <div>
                    <h3 className="font-display text-3xl">{p.t}</h3>
                    <p className="mt-3 text-base text-ink/75 leading-relaxed max-w-md">{p.d}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-32 md:py-44 px-6 md:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-24 items-end mb-16">
            <Reveal>
              <div>
                <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">V — The bench</div>
                <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95]">Eight pairs of hands.</h2>
              </div>
            </Reveal>
            <Reveal variant="fade" className="text-base text-ink/75 max-w-md leading-relaxed">
              A small studio of bakers, baristas and pastry chefs. Most of the team has been here since the second year.
            </Reveal>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {team.map((p, i) => (
              <motion.li
                key={p.name}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="border-t border-border pt-6"
              >
                <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">0{i + 1}</div>
                <h3 className="mt-3 font-display text-2xl">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.role}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40 px-6 md:px-12 bg-ink text-cream">
        <div className="mx-auto max-w-[1100px] text-center">
          <div className="text-[10px] tracking-luxe uppercase text-cream/60">Open today</div>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
            Best read at the counter,<br /><em className="not-italic text-sand">over a flat white.</em>
          </h2>
          <div className="mt-12 flex items-center justify-center gap-8">
            <Link to="/visit" className="inline-flex items-center gap-2 text-[11px] tracking-luxe uppercase border-b border-cream pb-1 hover:gap-4 transition-all">
              Plan your visit <ArrowUpRight size={14} strokeWidth={1.25} />
            </Link>
            <Link to="/menu" className="text-[11px] tracking-luxe uppercase text-cream/70 hover:text-cream transition-colors">
              See the menu
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}