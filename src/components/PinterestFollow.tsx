import PinterestLogo from "./PinterestLogo";

const PINTEREST_PROFILE_URL = "https://www.pinterest.com/scarcity2sovereignty/";

export default function PinterestFollow() {
  return (
    <div className="rounded-md border border-gold/30 bg-navy px-6 py-8 text-center sm:px-10 sm:py-10">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E60023] text-white">
        <PinterestLogo className="h-8 w-8" />
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-gold">Stay Connected</p>
      <h3 className="mt-2 font-serif text-2xl font-semibold text-cream sm:text-3xl">
        Follow Along on Pinterest
      </h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream/70">
        New money &amp; mindset pins, saved resources, and behind-the-scenes updates, all there first.
      </p>
      <a
        href={PINTEREST_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E60023] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#c8001e]"
      >
        <PinterestLogo className="h-4 w-4" />
        Follow on Pinterest
      </a>
    </div>
  );
}
