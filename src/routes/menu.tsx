import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { menuSections } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — KACAO Bakery, Birmingham" },
      { name: "description", content: "Explore the KACAO menu: artisan patisserie, viennoiserie, croissants and specialty coffee, all hand-crafted in Birmingham." },
      { property: "og:title", content: "Menu — KACAO Bakery, Birmingham" },
      { property: "og:description", content: "Patisserie, viennoiserie and specialty coffee, hand-crafted daily." },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const reduce = useReducedMotion();
  return (
    <PageTransition variant="rise">
      {/* HERO */}
      <section className="pt-40 md:pt-52 pb-20 px-6 md:px-12">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">The carte</div>
          </Reveal>
          <motion.h1
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-6 font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.92]"
          >
            Today, on<br /><em className="not-italic text-cocoa">the counter.</em>
          </motion.h1>
          <Reveal variant="fade" delay={0.4} className="mt-10 max-w-md text-sm text-muted-foreground">
            Hover any item to see it lift off the page.
          </Reveal>
        </div>
      </section>

      {menuSections.map((section, sIdx) => (
        <motion.section
          key={section.title}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.05 }}
          className="px-6 md:px-12 py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1600px]">
            <div className="mx-auto max-w-[1600px] mb-12">
              <Reveal variant="rule" className="editorial-rule mb-12" />
            </div>
            <div className="grid md:grid-cols-[1fr_3fr] gap-12 md:gap-20 mb-16">
              <Reveal>
                <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">{section.caption}</div>
                <h2 className="mt-4 font-display text-5xl md:text-7xl">{section.title}</h2>
              </Reveal>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
              {section.items.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group cursor-default"
                >
                  <div className="relative h-56 sm:h-60 md:h-64 flex items-end justify-center mb-6">
                    <motion.img
                      src={item.image}
                      alt={`${item.name} — ${item.description}`}
                      loading="lazy"
                      className="max-h-full max-w-[100%] object-contain drop-shadow-[0_25px_30px_rgba(60,40,20,0.18)] will-change-transform"
                      whileHover={reduce ? undefined : { y: -18, rotate: -4, scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    />
                  </div>
                  <div className="flex items-baseline justify-between gap-3 border-t border-border/60 pt-4">
                    <h3 className="font-display text-xl">{item.name}</h3>
                    <span className="font-sans text-sm tabular-nums text-ink/80">£{item.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <span key={t} className="tag-pill">{t}</span>
                      ))}
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>
      ))}

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal variant="rule" className="editorial-rule" />
      </div>
      <div className="px-6 md:px-12 py-20 text-center">
        <Reveal variant="fade" className="text-xs italic text-muted-foreground">
          Menu rotates with the seasons. Allergens and dietary notes available at the counter.
        </Reveal>
      </div>
    </PageTransition>
  );
}
