import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin, Clock, Mail, Phone } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { FadeInSection } from "@/components/FadeInSection";
import { ContactForm } from "@/components/ContactForm";
import interior from "@/assets/about-interior.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — KACAO Bakery, Bullring Birmingham" },
      { name: "description", content: "Find KACAO inside the Bullring food court, Birmingham. Walk-in only — opening hours, location, parking and contact details." },
      { property: "og:title", content: "Visit KACAO — Bullring, Birmingham" },
      { property: "og:description", content: "Walk-in only. Open daily inside the Bullring food court, Birmingham." },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: VisitPage,
});

const hours = [
  { d: "Mon — Thu", h: "8:00 — 20:00" },
  { d: "Friday", h: "8:00 — 21:00" },
  { d: "Saturday", h: "9:00 — 21:00" },
  { d: "Sunday", h: "9:00 — 19:00" },
];

const expect = [
  { n: "01", t: "Walk in", d: "No bookings — we keep the counter open. Quietest before 11 and after 3." },
  { n: "02", t: "Order at the bench", d: "Tell us what catches your eye. We'll plate it on Limoges porcelain or wrap it for the road." },
  { n: "03", t: "Stay a while", d: "Twelve seats along the marble. A flat white in glass, the morning paper, and the next bake on its way out." },
];

const faqs = [
  { q: "Do you take reservations?", a: "We don't — KACAO is walk-in only. We've found a counter works best when nobody is waiting on a table." },
  { q: "Can I order a whole cake?", a: "Yes. Whole entremets, sourdough loaves and viennoiserie boxes can be pre-ordered with 48 hours' notice. Email hello@kacao.co.uk." },
  { q: "Is there parking?", a: "The Bullring car park (B5 4BU) sits directly above us — exit at Level 0, the food court is signposted." },
  { q: "Are you dog friendly?", a: "Service dogs are always welcome. Small dogs are welcome at the outer counter, weather permitting." },
  { q: "Allergens & dietary?", a: "A full allergen sheet is at the counter. We bake with wheat, dairy, nuts and eggs — please ask before ordering." },
];

function VisitPage() {
  const reduce = useReducedMotion();
  return (
    <PageTransition variant="fade">
      {/* HERO */}
      <section className="relative pt-40 md:pt-52 pb-16 px-6 md:px-12">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-[1.2fr_1fr] gap-16 md:gap-24 items-end">
          <div>
            <Reveal>
              <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">Visit</div>
            </Reveal>
            <motion.h1
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="mt-6 font-display text-[clamp(3rem,9vw,8rem)] leading-[0.92]"
            >
              Come and find<br /><em className="not-italic text-cocoa">the counter.</em>
            </motion.h1>
          </div>
          <Reveal variant="fade" delay={0.3} className="text-base text-ink/75 leading-relaxed max-w-md md:pb-6">
            We're inside the Bullring food court, Birmingham. Walk-in only — open seven days, baked twice daily. The quietest light comes through around four.
          </Reveal>
        </div>
      </section>

      {/* IMAGE BAND */}
      <section className="px-6 md:px-12 mt-8">
        <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[280px]">
          <Reveal className="col-span-12 md:col-span-7 row-span-2">
            <img src={interior} alt="KACAO marble counter and warm light" loading="lazy" className="w-full h-full object-cover" />
          </Reveal>
          <Reveal className="col-span-6 md:col-span-5">
            <img src={g1} alt="Pastries on the KACAO counter" loading="lazy" className="w-full h-full object-cover" />
          </Reveal>
          <Reveal className="col-span-6 md:col-span-5">
            <img src={g3} alt="The KACAO display case" loading="lazy" className="w-full h-full object-cover" />
          </Reveal>
        </div>
      </section>

      {/* INFO TRIPLE */}
      <section className="py-32 md:py-40 px-6 md:px-12">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-3 gap-12 md:gap-16">
          {[
            { Icon: MapPin, title: "Find us", body: <>Bullring Food Court<br />Birmingham B5 4BU<br />United Kingdom</> },
            { Icon: Clock, title: "Hours", body: (
                <ul className="space-y-1.5">
                  {hours.map(h => (
                    <li key={h.d} className="flex justify-between gap-6">
                      <span className="text-muted-foreground">{h.d}</span>
                      <span className="tabular-nums">{h.h}</span>
                    </li>
                  ))}
                </ul>
              ) },
            { Icon: Mail, title: "Contact", body: (
                <ul className="space-y-2">
                  <li className="flex items-center gap-3"><Mail size={14} strokeWidth={1.25} /><a href="mailto:hello@kacao.co.uk" className="hover:text-cocoa">hello@kacao.co.uk</a></li>
                  <li className="flex items-center gap-3"><Phone size={14} strokeWidth={1.25} /><a href="tel:+441210000000" className="hover:text-cocoa">+44 (0) 121 000 0000</a></li>
                </ul>
              ) },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="border-t border-border pt-8"
            >
              <b.Icon size={18} strokeWidth={1.25} className="text-cocoa" />
              <h3 className="mt-6 font-display text-3xl md:text-4xl">{b.title}</h3>
              <div className="mt-6 text-sm leading-relaxed text-ink/85">{b.body}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-32 md:py-40 px-6 md:px-12 bg-sand/40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">What to expect</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-5xl md:text-7xl max-w-3xl leading-[0.95]">
              Three steps,<br /><em className="not-italic text-cocoa">no booking.</em>
            </h2>
          </Reveal>
          <ol className="mt-20 grid md:grid-cols-3 gap-12 md:gap-16">
            {expect.map((e, i) => (
              <motion.li
                key={e.n}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="border-t border-ink/15 pt-8"
              >
                <div className="text-[10px] tracking-luxe uppercase text-muted-foreground tabular-nums">{e.n}</div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl">{e.t}</h3>
                <p className="mt-4 text-base text-ink/75 leading-relaxed">{e.d}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* MAP */}
      <section className="pt-24 md:pt-32">
        <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
            <div>
              <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">On the map</div>
              <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.02]">
                Inside the Bullring,<br />Lower Mall — East.
              </h2>
            </div>
            <a
              href="https://www.google.com/maps?q=Bullring+Birmingham"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[11px] tracking-luxe uppercase border-b border-ink pb-1 hover:gap-4 transition-all"
            >
              Open in Google Maps <ArrowUpRight size={14} strokeWidth={1.25} />
            </a>
          </div>
        </div>
        <FadeInSection className="w-full">
          <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-sand overflow-hidden border-y border-border">
            <iframe
              title="Map to KACAO Birmingham"
              src="https://www.google.com/maps?q=Bullring+Birmingham&output=embed"
              className="w-full h-full grayscale contrast-90"
              loading="lazy"
            />
          </div>
        </FadeInSection>
      </section>

      {/* CONTACT FORM — editorial split */}
      <FadeInSection as="section" className="relative py-32 md:py-44 px-6 md:px-12 bg-ink text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden>
          <div className="absolute -top-20 -left-20 font-display text-[40rem] leading-none text-cream select-none">K</div>
        </div>
        <div className="relative mx-auto max-w-[1400px] grid md:grid-cols-[1fr_1.1fr] gap-16 md:gap-32 items-start">
          <div className="md:sticky md:top-32">
            <div className="text-[10px] tracking-luxe uppercase text-cream/50">Correspondence</div>
            <h2 className="mt-8 font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.92] text-cream">
              Write to<br /><em className="not-italic text-sand">the bakers.</em>
            </h2>
            <p className="mt-10 max-w-md text-base md:text-lg text-cream/75 leading-relaxed">
              Press requests, large orders, private events, weddings, collaborations — or just a kind word about the croissant. Every note lands in the same inbox, and one of us replies, by hand, within a working day.
            </p>
            <ul className="mt-12 space-y-5 text-sm text-cream/75">
              <li className="grid grid-cols-[120px_1fr] gap-4">
                <span className="text-[10px] tracking-luxe uppercase text-cream/40 pt-1">Press</span>
                <a href="mailto:press@kacao.co.uk" className="hover:text-cream border-b border-cream/30 hover:border-cream pb-0.5 w-fit">press@kacao.co.uk</a>
              </li>
              <li className="grid grid-cols-[120px_1fr] gap-4">
                <span className="text-[10px] tracking-luxe uppercase text-cream/40 pt-1">Orders</span>
                <a href="mailto:orders@kacao.co.uk" className="hover:text-cream border-b border-cream/30 hover:border-cream pb-0.5 w-fit">orders@kacao.co.uk</a>
              </li>
              <li className="grid grid-cols-[120px_1fr] gap-4">
                <span className="text-[10px] tracking-luxe uppercase text-cream/40 pt-1">Hello</span>
                <a href="mailto:hello@kacao.co.uk" className="hover:text-cream border-b border-cream/30 hover:border-cream pb-0.5 w-fit">hello@kacao.co.uk</a>
              </li>
              <li className="grid grid-cols-[120px_1fr] gap-4">
                <span className="text-[10px] tracking-luxe uppercase text-cream/40 pt-1">Telephone</span>
                <a href="tel:+441210000000" className="hover:text-cream border-b border-cream/30 hover:border-cream pb-0.5 w-fit tabular-nums">+44 (0) 121 000 0000</a>
              </li>
            </ul>
            <div className="mt-12 text-[10px] tracking-luxe uppercase text-cream/40">
              Reply within one working day · Mon — Sat
            </div>
          </div>
          <div className="bg-cream text-ink p-10 md:p-14 lg:p-16">
            <div className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-2">Form — 01 / 01</div>
            <h3 className="font-display text-3xl md:text-4xl mb-10">Drop a line.</h3>
            <ContactForm />
          </div>
        </div>
      </FadeInSection>

      {/* FAQ */}
      <section className="py-32 md:py-40 px-6 md:px-12 border-t border-border">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="text-[10px] tracking-luxe uppercase text-muted-foreground text-center">A few answers</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1] text-center">Before you come.</h2>
          </Reveal>
          <ul className="mt-16 divide-y divide-border">
            {faqs.map((f, i) => (
              <motion.li
                key={f.q}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="py-8 grid md:grid-cols-[1fr_1.4fr] gap-6"
              >
                <h3 className="font-display text-2xl md:text-3xl">{f.q}</h3>
                <p className="text-base text-ink/75 leading-relaxed">{f.a}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* OUTRO */}
      <section className="py-32 md:py-40 px-6 md:px-12 bg-ink text-cream text-center">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-[10px] tracking-luxe uppercase text-cream/60">See you at the counter</div>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
            Open today,<br /><em className="not-italic text-sand">until eight.</em>
          </h2>
          <div className="mt-12">
            <Link to="/menu" className="inline-flex items-center gap-2 text-[11px] tracking-luxe uppercase border-b border-cream pb-1 hover:gap-4 transition-all">
              See what's on today <ArrowUpRight size={14} strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}