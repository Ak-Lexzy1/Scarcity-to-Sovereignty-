"use client";

import { useForm, ValidationError } from "@formspree/react";

const FORM_ID = "xzepgkzl";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <div className="rounded-md border border-gold/30 bg-white px-8 py-10 text-center shadow-sm">
        <p className="font-serif text-2xl text-navy">Message sent.</p>
        <p className="mt-2 text-sm text-ink/60">
          Thanks for reaching out — I read everything that comes through and typically reply within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-md border border-navy/10 bg-white px-8 py-10 shadow-sm">
      <div>
        <label htmlFor="reason" className="text-[11px] uppercase tracking-[0.15em] text-navy/70">
          Reason for contact
        </label>
        <select
          id="reason"
          name="reason"
          className="mt-2 w-full rounded-sm border border-navy/15 bg-cream/40 px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
        >
          <option value="General question or feedback">General question or feedback</option>
          <option value="Brand or collaboration inquiry">Brand or collaboration inquiry</option>
          <option value="Something else">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="email" className="text-[11px] uppercase tracking-[0.15em] text-navy/70">
          Your email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="mt-2 w-full rounded-sm border border-navy/15 bg-cream/40 px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-gold focus:outline-none"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      <div>
        <label htmlFor="message" className="text-[11px] uppercase tracking-[0.15em] text-navy/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What's on your mind?"
          className="mt-2 w-full rounded-sm border border-navy/15 bg-cream/40 px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-gold focus:outline-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-600" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-sm bg-navy px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-cream transition hover:bg-navy-deep disabled:opacity-60 sm:w-auto"
      >
        {state.submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
          }
