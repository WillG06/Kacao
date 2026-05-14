import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import aboutInterior from "@/assets/about-interior.jpg";

const blocks = [
  {
    n: "I",
    t: "A small shelf",
    d: "KACAO began as a single shelf in the back of the Bullring food court — a stubborn idea that the place you eat in shouldn't decide how well you eat.",
  },
  {
    n: "II",
    t: "Patience, mostly",
    d: "Most of what you taste here happens before you arrive. Doughs are shaped the night before, croissants laminated over thirty-six hours, sourdough rested for two cold days.",
  },
  {
    n: "III",
    t: "Only enough for the day",
    d: "We bake twice — at six and at noon. When the counter is empty, the day is done. We'd rather sell out than stand still.",
  },
  {
    n: "IV",
    t: "A counter, not a queue",
    d: "Twelve seats along the marble. No bookings, no rush. Most of the team has been here since the second year, and they remember what you drink.",
  },
];

export function StickyStory() {
  return (
    <section className="sticky-story bg-cream">
      <div className="sticky-image">
        <img
          src={aboutInterior}
          alt="The KACAO marble counter under warm afternoon light"
          loading="lazy"
          width={1280}
          height={1600}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="sticky-text px-6 md:px-16 lg:px-24 py-20 md:py-32">
        <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">The story</div>
        <h2 className="mt-6 font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95]">
          Made by hand,<br /><em className="not-italic text-cocoa">in Birmingham.</em>
        </h2>
        <div className="mt-16 space-y-24">
          {blocks.map((b) => (
            <article key={b.n}>
              <div className="text-[10px] tracking-luxe uppercase text-muted-foreground tabular-nums">Chapter — {b.n}</div>
              <h3 className="mt-4 font-display text-3xl md:text-4xl">{b.t}</h3>
              <p className="mt-5 max-w-md text-base md:text-lg text-ink/80 leading-relaxed">{b.d}</p>
            </article>
          ))}
          <Link to="/about" className="inline-flex items-center gap-2 text-[11px] tracking-luxe uppercase border-b border-ink pb-1 hover:gap-4 transition-all">
            Read the full story <ArrowUpRight size={14} strokeWidth={1.25} />
          </Link>
        </div>
      </div>
    </section>
  );
}