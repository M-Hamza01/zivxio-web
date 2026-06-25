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
    <div className="relative w-full max-w-[280px] mx-auto">
      <div className="rounded-[32px] border-[6px] border-[var(--navy-900)] bg-[var(--navy-900)] shadow-2xl overflow-hidden aspect-[9/19.5]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="280px"
        />
      </div>
    </div>
  );
}
