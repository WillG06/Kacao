import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      setStatus("error");
      setError(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setStatus("loading");
    try {
      const apiKey = (import.meta.env.VITE_RESEND_API_KEY as string | undefined) ?? "";
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: "KACAO <hello@kacao.co.uk>",
          to: ["hello@kacao.co.uk"],
          subject: `New message from ${parsed.data.name}`,
          reply_to: parsed.data.email,
          text: `${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`,
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("We couldn't send your message. Please try again or email us directly.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-10" noValidate>
      <div>
        <label htmlFor="cf-name" className="block text-[10px] tracking-luxe uppercase text-muted-foreground mb-3">Name</label>
        <input
          id="cf-name" name="name" type="text" required maxLength={100} autoComplete="name"
          className="w-full bg-transparent border-0 border-b border-ink/30 focus:border-ink focus:outline-none py-3 text-base font-sans"
        />
      </div>
      <div>
        <label htmlFor="cf-email" className="block text-[10px] tracking-luxe uppercase text-muted-foreground mb-3">Email</label>
        <input
          id="cf-email" name="email" type="email" required maxLength={255} autoComplete="email"
          className="w-full bg-transparent border-0 border-b border-ink/30 focus:border-ink focus:outline-none py-3 text-base font-sans"
        />
      </div>
      <div>
        <label htmlFor="cf-message" className="block text-[10px] tracking-luxe uppercase text-muted-foreground mb-3">Message</label>
        <textarea
          id="cf-message" name="message" required maxLength={1000} rows={4}
          className="w-full bg-transparent border-0 border-b border-ink/30 focus:border-ink focus:outline-none py-3 text-base font-sans resize-none"
        />
      </div>
      <div className="flex items-center justify-between gap-6 pt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="text-[11px] tracking-luxe uppercase border-b border-ink pb-1 hover:gap-4 transition-all inline-flex items-center gap-2 disabled:opacity-50"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
        {status === "success" && <span className="text-xs text-cocoa">Thank you — we'll be in touch.</span>}
        {status === "error" && <span className="text-xs text-destructive">{error}</span>}
      </div>
    </form>
  );
}