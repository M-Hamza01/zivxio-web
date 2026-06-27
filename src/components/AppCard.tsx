import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { AppInfo } from "@/lib/site-config";

export default function AppCard({ app }: { app: AppInfo }) {
  const isComingSoon = app.status === "coming-soon";

  return (
    <Card variant="raised" className="flex flex-col p-6">
      <div className="flex items-center gap-4 mb-4">
        {app.icon ? (
          <div className="relative w-12 h-12 rounded-[12px] overflow-hidden shrink-0">
            <Image src={app.icon} alt={`${app.name} icon`} fill className="object-cover" sizes="48px" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-[12px] border border-dashed border-[var(--border)] flex items-center justify-center shrink-0 text-[var(--text-tertiary)] font-semibold">
            {app.name.charAt(0)}
          </div>
        )}

        <div className="flex-1">
          <h3 className="font-bold text-[var(--navy-900)] leading-tight">
            {app.name}
          </h3>
          {isComingSoon && (
            <span className="font-mono-tight text-[10px] uppercase tracking-wide text-[var(--text-tertiary)]">
              Coming soon
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-[var(--text-secondary)] mb-6 flex-grow">
        {app.tagline}
      </p>

      <Button
        href={isComingSoon ? "#" : `/${app.slug}`}
        variant={isComingSoon ? "secondary" : "dark"}
        size="md"
        className={isComingSoon ? "pointer-events-none opacity-60" : "self-start"}
      >
        {isComingSoon ? "Coming soon" : "View details"}
      </Button>
    </Card>
  );
}
