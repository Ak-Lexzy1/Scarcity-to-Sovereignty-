import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "About Me",
  description: "The story behind Scarcity 2 Sovereignty — and why this blog exists.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:px-10">
      <p className="text-center text-[11px] uppercase tracking-[0.25em] text-gold">About Me</p>
      <h1 className="mt-3 text-center font-serif text-3xl font-semibold leading-tight text-navy md:text-5xl">
        About Me: From Scarcity to Sovereignty
      </h1>

      <div className="prose prose-lg mx-auto mt-14 max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:leading-relaxed prose-p:text-ink/80 prose-a:text-red-600 prose-strong:text-navy">
        <p>Hi, it&rsquo;s great having you here in my online space.</p>

        <p>
          I write as and call myself The Sovereign Being. It&rsquo;s a pen
          name I chose long before this blog existed, and it&rsquo;s not
          because I&rsquo;m above anyone. Sovereignty to me means I&rsquo;m
          finally under no one. I own my time, my choices, and my
          relationship with money from the inside out.
        </p>

        <p>
          And it&rsquo;s where the name of this blog came from. I share
          real, lived experiences here, but I don&rsquo;t share names, exact
          locations, or too much identifying detail, aside from notable names
          known to the public. The lessons are real, while the privacy is
          intentional.
        </p>

        <p>
          I believe this is due to my extremely introverted nature, because
          I&rsquo;m a loner at heart. Ironically, I still enjoy good company,
          and I&rsquo;ve been told that I&rsquo;m very approachable and easy
          to get along with.
        </p>

        <h2>Where I Started</h2>
        <p>
          I grew up in a small town with my parents and four siblings. Money
          was always tight. We lived paycheck to paycheck for as long as I
          can remember, and that was the atmosphere I knew as normal.
        </p>

        <p>
          That environment shaped how I thought. For years, I believed
          wealth wasn&rsquo;t realistic for someone like me. It was an
          abstract concept. My mind stored that scarcity as fact.
        </p>

        <p>
          I carried it into college. I turned down opportunities because
          they felt too big. I remember a classmate making $2,000 a month
          from an online business in her dorm. I didn&rsquo;t ask how. I
          assumed it was a scheme. I did the same with a small beauty
          business I ran before college. I undercharged, avoided investing,
          and it closed within a year.
        </p>

        <p>
          No budgeting template fixed that, because the problem wasn&rsquo;t
          the numbers. It was the mindset behind them.
        </p>

        <p>
          After college, I worked 6 different jobs. Two permanent night
          shifts, one odd job, and 3 regular 9-5s.
        </p>

        <h2>The Shift That Changed My Life</h2>
        <p>
          I attended a wealth and mindset summit in Nashville, Tennessee,
          almost on a whim. It was the first time I understood that
          financial freedom starts in the mind long before you imagined it,
          eventually showing up in a bank account.
        </p>

        <p>
          Change wasn&rsquo;t overnight. It was slow and often frustrating.
          But learning to identify scarcity thinking and replace it with
          practical, consistent money habits changed the direction of my
          life.
        </p>

        <h2>Why I Started Scarcity 2 Sovereignty</h2>
        <p>
          I started this blog in 2026 to document what I&rsquo;m actively
          learning and using to build real wealth from a low-income starting
          point.
        </p>

        <p>
          This is not an &ldquo;I&rsquo;ve made it&rdquo; blog. It&rsquo;s a
          &ldquo;here&rsquo;s what&rsquo;s working while I build it&rdquo;
          blog. In some of the blog posts, I share personal stories from my
          experiences, family, and upbringing to explain the lesson, but
          never to expose private identities.
        </p>

        <h2>What You&rsquo;ll Find Here</h2>
        <ol>
          <li>
            <strong>Practical money habits for people starting from
            behind.</strong> Budgeting for beginners, the cash envelope
            system, saving on a low income, how to have fun on a budget,
            frugal lifestyle, and investing to build generational wealth.
          </li>
          <li>
            <strong>Honest writing on money mindset.</strong> How scarcity
            quietly runs your decisions and how to shift it.
          </li>
          <li>
            <strong>Verified financial help.</strong> Every assistance
            program, grant, FAFSA guide, ACA resource, and more that I share
            is thoroughly researched and verified before I publish, linking
            directly to its official .gov or .org source.
          </li>
        </ol>

        <p>
          No get-rich-quick promises. No inflated income claims. Just real
          steps toward frugal living, abundance mindset, financial literacy,
          and freedom.
        </p>

        <h2>My Commitment to Trust</h2>
        <p>
          Because I strongly believe trust should not just be handed out
          cheaply, I work harder to earn yours:
        </p>
        <ul>
          <li>I share methods I am actively using, with real examples.</li>
          <li>I link every resource to its official source.</li>
          <li>I update posts when deadlines, costs, or rules change.</li>
        </ul>

        <h2>A Quick Honesty Note</h2>
        <p>
          I am not a licensed financial advisor, and nothing on this site is
          formal financial advice. Everything I write and share comes from
          personal experience, ongoing research, and continuous learning.
          Always do your own due diligence before making financial
          decisions.
        </p>

        <p>
          If you&rsquo;ve ever come from a place where there never seemed to
          be enough, money, time, or stability, you&rsquo;re in the right
          place.
        </p>

        <p>
          <strong>Your reign starts here.</strong>
        </p>
      </div>

      <div className="mt-14">
        <NewsletterForm />
      </div>
    </div>
  );
          }
