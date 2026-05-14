import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { FadeInSection } from "@/components/FadeInSection";
import { SignatureSpotlight } from "@/components/SignatureSpotlight";
import { StickyStory } from "@/components/StickyStory";
import { HorizontalScroll } from "@/components/HorizontalScroll";
import { InstagramFeed } from "@/components/InstagramFeed";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import croissant from "@/assets/menu/pain-au-chocolat.png";
import sourdough from "@/assets/menu/sourdough.png";
import flatWhite from "@/assets/menu/flat-white-glass.png";
import canele from "@/assets/menu/canele.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KACAO — Luxury Bakery in Birmingham, Bullring" },
      { name: "description", content: "KACAO is a five-star artisan bakery in Birmingham's Bullring food court — hand-crafted patisserie, viennoiserie, sourdough and specialty coffee." },
      { property: "og:title", content: "KACAO — Luxury Bakery in Birmingham" },
      { property: "og:description", content: "Hand-crafted patisserie, sourdough and specialty coffee in Birmingham's Bullring food court." },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:url", content: "https://kacao.co.uk/" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: HomePage,
});

const galleryItems = [
  { src: g1, alt: "Assorted KACAO patisserie flat lay", caption: "The counter, on a Tuesday", span: "md:col-span-5 md:row-span-2" },
  { src: g3, alt: "KACAO bakery display case in Birmingham", caption: "Today, baked at six", span: "md:col-span-7" },
  { src: g2, alt: "Flaky golden KACAO croissant torn open", caption: "78 layers, 36 hours", span: "md:col-span-4" },
  { src: g4, alt: "Espresso pour at KACAO", caption: "Single origin, double ristretto", span: "md:col-span-3" },
];

const signatures = [
  { img: croissant, name: "Pain au Chocolat", note: "36-hour lamination", price: "4.20" },
  { img: sourdough, name: "Country Sourdough", note: "Stone-milled, 48-hour cold ferment", price: "6.50" },
  { img: flatWhite, name: "Flat White, in glass", note: "Single origin · double ristretto", price: "3.60" },
  { img: canele, name: "Canelé de Bordeaux", note: "Rum, vanilla, beeswaxed copper", price: "3.80" },
];

const process = [
  { n: "01", t: "Mill", d: "Heritage grains, stone-milled in small lots, never older than the week." },
  { n: "02", t: "Ferment", d: "Long, cold proofs — 36 to 48 hours — for flavour and a slow, even rise." },
  { n: "03", t: "Shape", d: "Every loaf, every laminate, finished by hand at the bench." },
  { n: "04", t: "Bake", d: "In small batches, twice daily. Out of the oven and onto the counter." },
];

const press = [
  { quote: "The best croissant in the Midlands — full stop.", source: "The Independent" },
  { quote: "A bakery worth crossing a city for.", source: "Conde Nast Traveller" },
  { quote: "Quietly, KACAO is rewriting what a food court can be.", source: "Birmingham Post" },
];

function HomePage() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <PageTransition variant="curtain">
      {/* HERO — full bleed, just KACAO with parallax */}
      <section ref={heroRef} className="relative h-[100svh] w-full overflow-hidden bg-ink">
        <motion.div
          style={reduce ? undefined : { y: bgY }}
          className="absolute inset-x-0 -top-[8%] -bottom-[20%]"
        >
          <motion.img
            src={hero}
            alt="KACAO bakery counter with a fresh croissant on Carrara marble"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 40%" }}
            width={1920}
            height={1280}
            initial={reduce ? { scale: 1 } : { scale: 1.18 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/20" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/35 via-transparent to-transparent" aria-hidden />

        <motion.div
          style={reduce ? undefined : { y: fgY }}
          className="relative z-10 mx-auto max-w-[1600px] h-full px-6 md:px-12 flex flex-col"
        >
          <div className="flex-1" />
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="text-[10px] tracking-luxe uppercase text-cream/85"
          >
            Est. Birmingham · Bullring
          </motion.div>
          <motion.h1
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display text-cream leading-[0.85] tracking-[-0.02em]"
            style={{ fontSize: "clamp(4rem, 13vw, 12rem)" }}
          >
            KACAO
          </motion.h1>
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-10 pb-16 md:pb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <p className="max-w-md text-sm md:text-base text-cream/85 leading-relaxed">
              A five-star artisan bakery inside Birmingham's Bullring food court. Patisserie, viennoiserie, sourdough and specialty coffee — made with patience, served from a single counter.
            </p>
            <div className="flex items-center gap-8">
              <Link to="/menu" className="group inline-flex items-center gap-2 text-[11px] tracking-luxe uppercase text-cream border-b border-cream pb-1 hover:gap-4 transition-all">
                View the menu <ArrowUpRight size={14} strokeWidth={1.25} />
              </Link>
              <Link to="/visit" className="text-[11px] tracking-luxe uppercase text-cream/75 hover:text-cream transition-colors">
                Plan your visit
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <section className="py-16 md:py-24 overflow-hidden bg-cream">
        <div className="flex whitespace-nowrap gap-16 text-[clamp(2.5rem,7vw,6rem)] font-display leading-none text-ink/90">
          <motion.div
            className="flex shrink-0 gap-16"
            animate={reduce ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex shrink-0 gap-16">
                <span>Open today</span>
                <span className="text-cocoa">·</span>
                <span><em className="not-italic">8 — 8</em></span>
                <span className="text-cocoa">·</span>
                <span>Bullring, Birmingham</span>
                <span className="text-cocoa">·</span>
                <span>Baked at six</span>
                <span className="text-cocoa">·</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal variant="rule" className="editorial-rule" />
      </div>

      {/* SIGNATURES */}
      <FadeInSection as="section" className="py-28 md:py-36 px-6 md:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-24 items-end mb-16 md:mb-24">
            <div>
              <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">I — Signatures</div>
              <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95]">
                Four things<br />we are known for.
              </h2>
            </div>
            <p className="text-base text-ink/75 leading-relaxed max-w-md">
              The shortlist. Each one made on the day, in small batches, and pulled from the counter when it's gone.
            </p>
          </div>

          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
            {signatures.map((s, i) => (
              <motion.li
                key={s.name}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative h-56 sm:h-64 flex items-end justify-center mb-5">
                  <motion.img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_25px_30px_rgba(60,40,20,0.18)]"
                    whileHover={reduce ? undefined : { y: -14, rotate: -3, scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  />
                </div>
                <div className="border-t border-border/60 pt-4 flex items-baseline justify-between">
                  <h3 className="font-display text-xl">{s.name}</h3>
                  <span className="text-sm tabular-nums text-ink/80">£{s.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.note}</p>
              </motion.li>
            ))}
          </ul>

          <div className="mt-16 flex justify-center">
            <Link to="/menu" className="inline-flex items-center gap-2 text-[11px] tracking-luxe uppercase border-b border-ink pb-1 hover:gap-4 transition-all">
              The full carte <ArrowUpRight size={14} strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </FadeInSection>

      {/* SIGNATURE SPOTLIGHT */}
      <SignatureSpotlight />

      {/* HORIZONTAL SCROLL — A day at the counter */}
      <HorizontalScroll />

      {/* STICKY STORY (about teaser) */}
      <StickyStory />

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal variant="rule" className="editorial-rule" />
      </div>

      {/* GALLERY */}
      <FadeInSection as="section" className="py-28 md:py-36 px-6 md:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-end justify-between mb-12 md:mb-20">
            <div>
              <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">III — Notebook</div>
              <h2 className="mt-4 font-display text-4xl md:text-6xl">Things we are<br />proud of.</h2>
            </div>
            <p className="hidden md:block max-w-xs text-sm text-muted-foreground leading-relaxed">
              A working notebook of recent bakes, the counter at light, and small moments worth keeping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[260px] md:auto-rows-[300px]">
            {galleryItems.map((g, i) => (
              <motion.figure
                key={g.src}
                initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden bg-sand ${g.span}`}
              >
                <motion.img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="absolute inset-0 h-full w-full object-cover"
                  whileHover={reduce ? undefined : { scale: 1.04 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between text-[10px] tracking-luxe uppercase text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-ink/70 to-transparent">
                  <span>{g.caption}</span>
                  <span>—</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </FadeInSection>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal variant="rule" className="editorial-rule" />
      </div>

      {/* PROCESS */}
      <section className="py-32 md:py-44 px-6 md:px-12 bg-sand/40">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-24 items-start">
          <div className="md:sticky md:top-32">
            <Reveal>
              <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">IV — Process</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95]">
                Four steps,<br /><em className="not-italic text-cocoa">no shortcuts.</em>
              </h2>
            </Reveal>
            <Reveal variant="fade" delay={0.2} className="mt-8 max-w-sm text-base text-ink/75 leading-relaxed">
              Most of what you taste here happens before you arrive. The day before, in fact.
            </Reveal>
          </div>
          <ul className="space-y-12">
            {process.map((p, i) => (
              <motion.li
                key={p.n}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-[auto_1fr] gap-8 border-t border-ink/15 pt-8"
              >
                <span className="text-[10px] tracking-luxe uppercase text-muted-foreground tabular-nums">{p.n}</span>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl">{p.t}</h3>
                  <p className="mt-3 text-base text-ink/75 leading-relaxed max-w-md">{p.d}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal variant="rule" className="editorial-rule" />
      </div>

      {/* PRESS */}
      <FadeInSection as="section" className="py-32 md:py-40 px-6 md:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-[10px] tracking-luxe uppercase text-muted-foreground text-center">V — Press</div>
          <div className="mt-16 grid md:grid-cols-3 gap-12 md:gap-16">
            {press.map((p, i) => (
              <motion.figure
                key={p.source}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <blockquote className="font-display text-2xl md:text-3xl leading-snug text-ink">
                  "{p.quote}"
                </blockquote>
                <figcaption className="mt-6 text-[10px] tracking-luxe uppercase text-muted-foreground">
                  — {p.source}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* INSTAGRAM */}
      <InstagramFeed />

      {/* CTA */}
      <FadeInSection as="section" className="relative py-32 md:py-44 px-6 md:px-12 bg-ink text-cream text-center overflow-hidden">
        <div className="relative mx-auto max-w-[1100px]">
          <div className="text-[10px] tracking-luxe uppercase text-cream/60">Open today</div>
          <h2 className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95]">
            Come and find us<br /><em className="not-italic text-sand">at the counter.</em>
          </h2>
          <p className="mt-8 max-w-md mx-auto text-sm text-cream/70">
            Walk-in only. We don't take bookings — we'd rather meet you at the bench.
          </p>
          <div className="mt-12 flex items-center justify-center gap-8">
            <Link to="/visit" className="inline-flex items-center gap-2 text-[11px] tracking-luxe uppercase border-b border-cream pb-1 hover:gap-4 transition-all">
              Plan your visit <ArrowUpRight size={14} strokeWidth={1.25} />
            </Link>
            <Link to="/menu" className="text-[11px] tracking-luxe uppercase text-cream/70 hover:text-cream transition-colors">
              See the menu
            </Link>
          </div>
        </div>
      </FadeInSection>
    </PageTransition>
  );
}
