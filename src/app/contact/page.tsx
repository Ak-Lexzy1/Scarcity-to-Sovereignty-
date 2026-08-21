import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Scarcity to Sovereignty.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 md:px-10">
      <p className="text-center text-[11px] uppercase tracking-[0.25em] text-gold">Contact</p>
      <h1 className="mt-3 text-center font-serif text-4xl font-semibold text-navy md:text-5xl">
        Let&rsquo;s Talk
      </h1>
      <p className="mx-auto mt-5 max-w-md text-center text-sm leading-relaxed text-ink/70">
        Got a question, a story you want to share, a collaboration idea, or just want to say
        hi? I read everything that comes through.
      </p>

      <div className="mt-12">
        <ContactForm />
      </div>

      <p className="mt-8 text-center text-xs uppercase tracking-[0.1em] text-navy/40">
        Response time: typically within 1 business day
      </p>

      <p className="mt-2 text-center text-xs text-navy/40">
        Prefer email directly?{" "}
        <a href="mailto:scarcitytosovereignty@gmail.com" className="text-gold hover:underline">
          scarcitytosovereignty@gmail.com
        </a>
      </p>
    </div>
  );
}
