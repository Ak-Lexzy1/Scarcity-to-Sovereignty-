import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-semibold flex items-center gap-2">
              Scarcity
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cream text-[10px] font-bold text-navy">
                2
              </span>
              <span className="text-gold">Sovereignty</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
              Where scarcity thinking ends & wealth clarity starts.
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li><Link href="/blog" className="hover:text-gold">Blog</Link></li>
              <li><Link href="/about" className="hover:text-gold">About Me</Link></li>
              <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold">Segments</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li><Link href="/blog?segment=money-foundations" className="hover:text-gold">Money Foundations</Link></li>
              <li><Link href="/blog?segment=wealth-income-building" className="hover:text-gold">Wealth &amp; Income Building</Link></li>
              <li><Link href="/blog?segment=mindset-freedom" className="hover:text-gold">Mindset &amp; Freedom</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-[11px] uppercase tracking-[0.1em] text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Scarcity 2 Sovereignty. All rights reserved.</p>
          <p>Not financial advice — always do your own due diligence.</p>
        </div>
      </div>
    </footer>
  );
            }
