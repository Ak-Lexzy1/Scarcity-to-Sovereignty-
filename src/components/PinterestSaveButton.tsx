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
      className="absolute right-3 top-3 z-10 rounded-full bg-[#E60023] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white opacity-0 shadow-md transition hover:bg-[#c8001e] group-hover:opacity-100"
    >
      Save
    </a>
  );
    }
