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
        As a Kid, I Thought Money Was the Problem. Turns Out, It Was. Just Not
        the Way I Thought.
      </h1>

      <div className="prose prose-lg mx-auto mt-14 max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:leading-relaxed prose-p:text-ink/80 prose-strong:text-navy">
        <p>
          Growing up in a small town in Kentucky with my parents and four
          siblings, three older, one younger, my relationship with money was
          really a relationship with fear. My mom told me my dad gambled away
          what we had shortly before I was born. We moved to the town where I
          and my younger sibling grew up, and we were struggling financially
          from the start.
        </p>

        <p>
          That struggle wasn&rsquo;t a phase. It was the whole atmosphere I
          grew up in, because right from my childhood, we were living inside
          that reality, and my parents lived paycheck to paycheck.
        </p>

        <p>
          I remember my eldest sibling getting into a fight with some of the
          locals and getting badly injured. We lost him four days later to
          his injuries, before my dad could get him to another town&rsquo;s
          hospital with better facilities. I was so shaken that it took me
          months before I could become really social again.
        </p>

        <p>
          Wealth felt like an abstract concept to me. The mind is like a
          memory card that stores experiences, assumptions, and beliefs about
          what&rsquo;s normal, and I grew up believing I may never be rich or
          wealthy, because it had never been my reality. I built my whole
          idea of what was possible around the capacity of my mind.
        </p>

        <p>
          Despite struggling to get myself into college, I unconsciously
          carried that scarcity mindset with me the entire way.
        </p>

        <p>
          I avoided and turned down opportunities that felt too big before I
          even tried them, and assumed certain lifestyles were unrealistic.
          Because tell me how it&rsquo;s supposed to feel realistic for a
          fellow college student to be making two grand monthly from a
          business she claimed to run online from her dorm.
        </p>

        <p>
          I could have at least asked to be taught or shown what it was, but
          I didn&rsquo;t, because I felt it might be some kind of scheme.
          That was just one of many opportunities I could have tried. The
          capacity of my mind at the time dissuaded me. Gosh, I feel really
          ashamed thinking back on these things.
        </p>

        <p>
          There was actually a time I ran a small business before college,
          selling handmade goods locally. I undercharged constantly,
          terrified that asking for what I was worth would scare customers
          away. It fell apart within a year. I was so afraid of spending
          money that I couldn&rsquo;t see the spending that would have
          actually grown it.
        </p>

        <p>
          I made every decision from scarcity without realizing that&rsquo;s
          what I was doing, and no amount of budgeting advice fixed it,
          because the problem was never really the numbers on the page.
        </p>

        <p>
          Then I attended a wealth and mindset summit in Nashville,
          Tennessee, almost on a whim, and something shifted. Not overnight.
          It was slow and often frustrating. But it paid off in the end, and
          it changed the direction of my entire life.
        </p>

        <p>
          <strong>
            Scarcity to Sovereignty exists because I had to learn, the hard
            way, that financial freedom starts in the mind long before it
            shows up in a bank account.
          </strong>
        </p>

        <p>
          This isn&rsquo;t written from a place of &ldquo;I&rsquo;ve made it,
          let me tell you how.&rdquo; It&rsquo;s written from how I&rsquo;ve
          been actively building both actual wealth and a healthier mind and
          relationship with money. The habits, the mindset shifts, the
          mistakes, the lessons. All of it, as it happens.
        </p>

        <h2>What You&rsquo;ll Find Here</h2>
        <ul>
          <li>
            Practical, no-fluff money habits for people starting from
            behind, not ahead.
          </li>
          <li>
            Honest writing on mindset: how scarcity thinking quietly runs
            your decisions, and how to actually shift it, from someone
            who&rsquo;s lived both sides of it.
          </li>
          <li>
            No get-rich-quick promises and no inflated income claims. Just
            real, consistent steps toward wealth, financial literacy, and
            freedom.
          </li>
        </ul>

        <h2>A Quick Honesty Note</h2>
        <p>
          I&rsquo;m not a licensed financial advisor, and nothing here is
          formal financial advice. Everything on this blog comes from real
          experience, ongoing research, and continuous learning, shared
          openly as I go. Always do your own due diligence before making
          financial decisions.
        </p>

        <p>
          If any part of this sounds like where you are right now,
          you&rsquo;re welcome here.
        </p>

        <p>
          The newsletter isn&rsquo;t live yet, but you can join the waitlist
          below and I&rsquo;ll let you know the moment it launches.
        </p>
      </div>

      <div className="mt-14">
        <NewsletterForm />
      </div>
    </div>
  );
}
