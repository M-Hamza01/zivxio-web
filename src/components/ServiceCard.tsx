import Card from "@/components/ui/Card";
import { ServiceInfo } from "@/lib/site-config";

export default function ServiceCard({ service }: { service: ServiceInfo }) {
  return (
    <Card variant="raised" className="flex flex-col">
      <h3 className="text-xl font-bold text-[var(--navy-900)] mb-3">
        {service.title}
      </h3>
      <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
        {service.description}
      </p>
      <ul className="space-y-2 mt-auto">
        {service.deliverables.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
            <svg className="w-4 h-4 text-[var(--accent-600)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
