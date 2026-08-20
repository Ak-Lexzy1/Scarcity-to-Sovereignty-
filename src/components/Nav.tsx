import Link from "next/link";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b border-navy/10 bg-cream/95 backdrop-blur sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="font-serif text-xl font-semibold tracking-wide text-navy">
          Scarcity to <span className="text-gold">Sovereignty</span>
        </Link>
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-navy transition hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
                                                               }
