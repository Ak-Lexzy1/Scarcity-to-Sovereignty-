import PinterestLogo from "./PinterestLogo";

interface PinterestSaveButtonProps {
  imageUrl: string;
  pageUrl: string;
  description: string;
}

export default function PinterestSaveButton({
  imageUrl,
  pageUrl,
  description,
}: PinterestSaveButtonProps) {
  const saveUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
    pageUrl
  )}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(description)}`;

  return (
    <a
      href={saveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Save this image to Pinterest"
      className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#E60023] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white shadow-md transition hover:bg-[#c8001e]"
    >
      <PinterestLogo className="h-4 w-4" />
      Save
    </a>
  );
}
