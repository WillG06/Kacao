import { useEffect, useState } from "react";

const KEY = "kacao-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch { /* ignore */ }
  }, []);

  const set = (value: "accepted" | "rejected") => {
    try { localStorage.setItem(KEY, value); } catch { /* ignore */ }
    if (value === "accepted") {
      window.dispatchEvent(new CustomEvent("kacao:consent", { detail: { granted: true } }));
    }
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[70] bg-cream border border-ink/20 shadow-[0_12px_40px_rgba(60,40,20,0.18)] p-6 md:p-7"
    >
      <div className="text-[10px] tracking-luxe uppercase text-muted-foreground">Cookies</div>
      <p className="mt-3 text-sm text-ink/85 leading-relaxed">
        We use a small handful of cookies for analytics — to understand which pastries you read about most. Nothing more.
      </p>
      <div className="mt-5 flex items-center gap-6">
        <button onClick={() => set("accepted")} className="text-[11px] tracking-luxe uppercase border-b border-ink pb-1 hover:gap-4 transition-all">
          Accept all
        </button>
        <button onClick={() => set("rejected")} className="text-[11px] tracking-luxe uppercase text-ink/65 hover:text-ink transition-colors">
          Reject non-essential
        </button>
      </div>
    </div>
  );
}