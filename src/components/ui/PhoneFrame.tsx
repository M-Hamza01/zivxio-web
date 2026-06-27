import Image from "next/image";

/**
 * Wraps a real screenshot in a minimal device frame. Used on the home
 * hero and app landing pages — replaces the old fake-UI mockup div.
 *
 * Pass the screenshot path from /public, e.g. "/screenshots/nust-one-1.png"
 */
export default function PhoneFrame({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="hidden md:block relative w-full max-w-[240px] mx-auto">
      {/* Outer bezel — slate, not pure navy, so it reads against a dark section */}
      <div className="relative rounded-[34px] bg-gradient-to-b from-[#2A3548] to-[#1B2538] p-[8px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        {/* Side buttons */}
        <div className="absolute -left-[2px] top-24 w-[3px] h-9 bg-[#0E1420] rounded-r-sm" />
        <div className="absolute -right-[2px] top-32 w-[3px] h-14 bg-[#0E1420] rounded-l-sm" />

        {/* Screen */}
        <div className="relative aspect-[9/20] rounded-[26px] overflow-hidden bg-[var(--navy-950)]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
            sizes="240px"
          />
          {/* Punch-hole camera — Android style */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black/80 ring-1 ring-white/10 z-10" />
        </div>
      </div>
    </div>
  );
}
