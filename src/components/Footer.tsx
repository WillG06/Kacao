import { Link } from "@tanstack/react-router";
import { Instagram, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/70 mt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="font-display text-3xl">KACAO</div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            A small bakery with quiet ambition. Birmingham, England.
          </p>
        </div>
        <div>
          <div className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-4">Visit</div>
          <p className="text-sm leading-relaxed">
            Bullring Food Court<br />
            Birmingham B5 4BU<br />
            United Kingdom
          </p>
        </div>
        <div>
          <div className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-4">Hours</div>
          <p className="text-sm leading-relaxed">
            Mon — Fri · 8 — 20<br />
            Sat — Sun · 9 — 21
          </p>
        </div>
        <div>
          <div className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-4">Index</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-cocoa transition-colors">Home</Link></li>
            <li><Link to="/menu" className="hover:text-cocoa transition-colors">Menu</Link></li>
            <li><Link to="/about" className="hover:text-cocoa transition-colors">About</Link></li>
            <li><Link to="/visit" className="hover:text-cocoa transition-colors">Visit</Link></li>
          </ul>
          <div className="mt-6 flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-cocoa transition-colors"><Instagram size={18} strokeWidth={1.25} /></a>
            <a href="#" aria-label="TikTok" className="hover:text-cocoa transition-colors"><Music2 size={18} strokeWidth={1.25} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between gap-2 text-[10px] tracking-luxe uppercase text-muted-foreground">
          <span>© {new Date().getFullYear()} Kacao Bakery</span>
          <span>Made with care in Birmingham</span>
        </div>
      </div>
    </footer>
  );
}
