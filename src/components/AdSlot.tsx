export default function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return (
    <div className="my-10 flex min-h-[100px] items-center justify-center rounded-md border border-dashed border-navy/15 bg-navy/[0.02] text-[10px] uppercase tracking-[0.15em] text-navy/30">
      {label}
    </div>
  );
}
