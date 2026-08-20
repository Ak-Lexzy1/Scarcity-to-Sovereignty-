"use client";

import { useState } from "react";

const CONVERTKIT_ACTION = "https://app.kit.com/forms/9796547/subscriptions";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(CONVERTKIT_ACTION, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-gold/40 bg-navy px-6 py-8 text-center">
        <p className="font-serif text-lg text-cream">You&rsquo;re on the list.</p>
        <p className="mt-2 text-sm text-cream/70">
          Check your email to confirm your subscription — we&rsquo;ll notify you the moment the newsletter goes live.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-gold/30 bg-navy px-6 py-8 sm:px-10 sm:py-10">
      <p className="text-[11px] uppercase tracking-[0.2em] text-gold">Weekly Money &amp; Mindset Shifts</p>
      <h3 className="mt-2 font-serif text-2xl font-semibold text-cream sm:text-3xl">
        Join the Waitlist
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/70">
        The newsletter isn&rsquo;t live yet — join now and be the first to know when it launches.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email_address"
          required
          placeholder="Your email address"
          className="w-full flex-1 rounded-sm border border-cream/20 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="whitespace-nowrap rounded-sm bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-navy-deep transition hover:bg-gold-soft disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Join Waitlist"}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-3 text-xs text-red-300">
          Something went wrong — please try again in a moment.
        </p>
      )}

      <p className="mt-4 text-[11px] text-cream/40">We won&rsquo;t send spam. Unsubscribe anytime.</p>
    </form>
  );
}
