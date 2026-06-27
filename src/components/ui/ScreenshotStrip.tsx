import Image from "next/image";

export default function ScreenshotStrip({
  screenshots,
  appName,
}: {
  screenshots: string[];
  appName: string;
}) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 snap-x snap-mandatory">
      {screenshots.map((src, i) => (
        <div
          key={src}
          className="relative flex-shrink-0 w-[200px] aspect-[9/19.5] rounded-[10px] overflow-hidden bg-[var(--surface)] snap-start"
        >
          <Image
            src={src}
            alt={`${appName} screenshot ${i + 1}`}
            fill
            className="object-cover"
            sizes="200px"
          />
        </div>
      ))}
    </div>
  );
}
