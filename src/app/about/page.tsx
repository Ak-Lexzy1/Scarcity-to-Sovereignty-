import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "About Me",
  description: "The story behind Scarcity to Sovereignty — and why this blog exists.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:px-10">
      <p className="text-center text-[11px] uppercase tracking-[0.25em] text-gold">About Me</p>
      <h1 className="mt-3 text-center font-serif text-3xl font-semibold leading-tight text-navy md:text-5xl">
        As a Kid, I Used to Think Money Was the Problem.
        <br />
        Well, it is — until it wasn&rsquo;t.
      </h1>

      <div className="prose prose-lg mx-auto mt-14 max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:leading-relaxed prose-p:text-ink/80 prose-strong:text-navy">
        <p>
          Growing up in a small town with my parents and four siblings — three older, one
          younger — my relationship with money was really a relationship with fear. My mom
          told me my dad gambled away his wealth shortly before I was born, and we had to move
          to the town where I and my younger sibling were born. We were struggling financially
          from the start.
        </p>

        <p>
          Right from my childhood, we were living inside that reality. My parents were living
          from paycheck to paycheck. Wealth felt like an abstract concept to me — and because
          the mind is like a memory card that stores experiences, assumptions, and beliefs
          about what&rsquo;s normal, I grew up believing I may never be rich or wealthy, because
          it had never been my reality.
        </p>

        <p>
          Despite struggling to get myself into college, I unconsciously built a life around
          scarcity, because everything I&rsquo;d ever seen was scarcity. I avoided opportunities
          that felt too big and assumed certain lifestyles were unrealistic — not for me.
        </p>

        <p>
          There was a time I ran a small business before college. I undercharged my worth, and
          it all crumbled. I was so afraid to spend money, even when spending it would have
          created more money.
        </p>

        <p>
          I made decisions from scarcity without realizing that&rsquo;s what I was doing — and
          no amount of budgeting advice fixed it, because the problem was never really the
          numbers.
        </p>

        <p>
          And then I attended a wealth &amp; mindset shift business summit in Delaware, and had
          a paradigm shift. It was a slow, arduous journey — but it paid off in the end, and my
          life transformed completely.
        </p>

        <p>
          <strong>
            Scarcity to Sovereignty exists because I had to learn, the hard way, that financial
            freedom starts in the mind before it shows up in a bank account.
          </strong>
        </p>

        <p>
          This isn&rsquo;t a blog written from a place of &ldquo;I&rsquo;ve made it, let me tell
          you how.&rdquo; It&rsquo;s written from how I&rsquo;ve been actively building both
          wealth and a healthier mind around money — sharing what&rsquo;s actually working: the
          habits, the mindset shifts, the practical steps, the lessons, and everything in
          between, as I go.
        </p>

        <h2>What You&rsquo;ll Find Here</h2>
        <ul>
          <li>Practical, no-fluff money habits for people starting from behind, not ahead.</li>
          <li>
            Honest writing on mindset — how scarcity thinking shows up and how to actually
            shift it, from lived experience.
          </li>
          <li>
            No get-rich-quick promises and no unrealistic income claims. Just consistent, real
            steps toward wealth creation, financial literacy, and freedom.
          </li>
        </ul>

        <h2>A Quick Honesty Note</h2>
        <p>
          I&rsquo;m not a licensed financial advisor, and nothing here is formal financial
          advice. Everything on this blog is real experience, research, and continuous
          learning, shared openly. Always do your own due diligence on anything financial.
        </p>

        <p>
          If any of this sounds like where you are right now — you&rsquo;re welcome here. The
          newsletter isn&rsquo;t live yet, but you can join the waitlist below and I&rsquo;ll
          notify you the moment it goes live.
        </p>
      </div>

      <div className="mt-14">
        <NewsletterForm />
      </div>
    </div>
  );
      }
