import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Scarcity to Sovereignty.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:px-10">
      <p className="text-center text-[11px] uppercase tracking-[0.25em] text-gold">Legal</p>
      <h1 className="mt-3 text-center font-serif text-4xl font-semibold text-navy md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-center text-xs uppercase tracking-[0.1em] text-navy/40">
        Last updated: August 2026
      </p>

      <div className="prose prose-lg mx-auto mt-14 max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:leading-relaxed prose-p:text-ink/80 prose-strong:text-navy prose-a:text-gold">
        <p>
          Scarcity 2 Sovereignty (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;this
          site&rdquo;) respects your privacy. This policy explains what information is
          collected when you visit, how it&rsquo;s used, and your rights regarding it.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>
            <strong>Email address</strong> — only if you voluntarily subscribe to our
            newsletter waitlist or submit the contact form.
          </li>
          <li>
            <strong>Usage data</strong> — general analytics data (e.g., pages visited, time on
            site, approximate location, device/browser type) collected automatically via
            Google Analytics.
          </li>
          <li>
            <strong>Cookies</strong> — small data files that may be used for analytics, Pinterest
            conversion tracking, or to remember basic site preferences.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To send newsletter content, once subscribed and confirmed.</li>
          <li>To understand how visitors use the site so we can improve content.</li>
          <li>We do <strong>not</strong> sell, rent, or trade your personal information to third parties.</li>
        </ul>

        <h2>3. Third-Party Services</h2>
        <p>
          This site uses the following third-party tools, each with their own privacy
          practices:
        </p>
        <ul>
          <li>
            <strong>Google Analytics</strong> — for site traffic insights.
          </li>
          <li>
            <strong>Kit (ConvertKit)</strong> — for newsletter waitlist management.
          </li>
          <li>
            <strong>Formspree</strong> — for processing contact form submissions.
          </li>
          <li>
            <strong>Pinterest</strong> — for Pinterest tag/analytics traffic tracking.
          </li>
        </ul>

        <h2>4. Your Rights</h2>
        <p>
          You may request to see, update, or delete any personal data we hold about you (such
          as your email address) at any time by contacting us at{" "}
          <a href="mailto:scarcitytosovereignty@gmail.com">scarcitytosovereignty@gmail.com</a>.
        </p>

        <h2>5. Children&rsquo;s Privacy</h2>
        <p>
          This site is not directed at children under 13, and we do not knowingly collect data
          from children.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          This policy may be updated periodically. Changes will be reflected with a new
          &ldquo;Last updated&rdquo; date above.
        </p>

        <h2>7. Contact</h2>
        <p>
          Questions about this policy can be sent to:{" "}
          <a href="mailto:scarcitytosovereignty@gmail.com">scarcitytosovereignty@gmail.com</a>
        </p>
      </div>
    </div>
  );
                                            }
