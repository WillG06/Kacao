import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { FadeInSection } from "./FadeInSection";
import signature from "@/assets/signature-drink.jpg";

export function SignatureSpotlight() {
  return (
    <FadeInSection as="section" className="px-0 md:px-0 py-0">
      <div className="relative grid md:grid-cols-2 min-h-[80vh]">
        <div className="relative min-h-[60vh] md:min-h-full overflow-hidden bg-sand">
          <img
            src={signature}
            alt="The KACAO signature flat white in a glass cup on Carrara marble"
            loading="lazy"
            width={1280}
            height={1600}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="bg-cream flex items-center px-6 md:px-16 lg:px-24 py-20 md:py-32">
          <div className="max-w-xl">
            <div className="text-[10px] tracking-luxe uppercase text-cocoa">House special</div>
            <h2 className="mt-8 font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.92]">
              The Flat White,<br /><em className="not-italic text-cocoa">in glass.</em>
            </h2>
            <p className="mt-10 text-base md:text-lg text-ink/80 leading-relaxed">
              A double ristretto pulled from a single-origin Ethiopian bean, poured into milk steamed to exactly 62°.
              Served the way we drink it ourselves — in a small glass cup, so the colour does the talking.
            </p>
            <p className="mt-4 text-base text-ink/70 leading-relaxed">
              Three minutes from grind to bench. Best taken at the counter, while it's still warm enough to fog the glass.
            </p>
            <Link to="/menu" className="mt-12 inline-flex items-center gap-2 text-[11px] tracking-luxe uppercase border-b border-ink pb-1 hover:gap-4 transition-all">
              See the bar <ArrowUpRight size={14} strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}