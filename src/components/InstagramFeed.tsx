import { motion, useReducedMotion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import { FadeInSection } from "./FadeInSection";
import i1 from "@/assets/insta-1.jpg";
import i2 from "@/assets/insta-2.jpg";
import i3 from "@/assets/insta-3.jpg";
import i4 from "@/assets/insta-4.jpg";
import i5 from "@/assets/insta-5.jpg";
import i6 from "@/assets/insta-6.jpg";

const posts = [
  { src: i1, caption: "Pain au chocolat — Tuesday morning bake.", likes: "1,284" },
  { src: i2, caption: "Flat white, in glass. Always.", likes: "962" },
  { src: i3, caption: "Country sourdough — 48 hours later.", likes: "2,108" },
  { src: i4, caption: "Pistachio éclair, brushed with matcha.", likes: "1,571" },
  { src: i5, caption: "A quiet four o'clock at the counter.", likes: "843" },
  { src: i6, caption: "Brioche feuilletée, straight from the oven.", likes: "1,346" },
];

export function InstagramFeed() {
  const reduce = useReducedMotion();
  return (
    <FadeInSection as="section" className="py-28 md:py-36 px-6 md:px-12 bg-cream">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end mb-14 md:mb-20">
          <div>
            <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">VI — From the counter</div>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95]">
              Follow along<br /><em className="not-italic text-cocoa">@kacao.bakery</em>
            </h2>
          </div>
          <a
            href="https://instagram.com/kacao.bakery"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow KACAO on Instagram"
            className="inline-flex items-center gap-3 text-[11px] tracking-luxe uppercase border-b border-ink pb-1 hover:gap-5 transition-all"
          >
            <Instagram size={14} strokeWidth={1.25} /> Follow <ArrowUpRight size={14} strokeWidth={1.25} />
          </a>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {posts.map((p, i) => (
            <motion.li
              key={p.src}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-square overflow-hidden bg-sand"
            >
              <a
                href="https://instagram.com/kacao.bakery"
                target="_blank"
                rel="noreferrer"
                aria-label={p.caption}
                className="block h-full w-full"
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/55 transition-colors duration-500" aria-hidden />
                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-cream">
                  <Instagram size={16} strokeWidth={1.25} />
                  <div>
                    <div className="text-[10px] tracking-luxe uppercase text-cream/70 tabular-nums">♥ {p.likes}</div>
                    <p className="mt-2 text-xs leading-snug">{p.caption}</p>
                  </div>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </FadeInSection>
  );
}
