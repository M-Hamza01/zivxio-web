import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";

const swatches = [
  { name: "navy-950", value: "#060a14" },
  { name: "navy-900", value: "#0b1220" },
  { name: "ink-700", value: "#1b2538" },
  { name: "accent-500", value: "#3d8bff" },
  { name: "accent-600", value: "#2e6fe0" },
  { name: "surface", value: "#f6f7f9" },
  { name: "border", value: "#e5e7eb" },
];

export default function StyleGuide() {
  return (
    <div className="w-full">
      <Section className="py-16">
        <Container className="space-y-16">
          <div>
            <Eyebrow>internal / not linked</Eyebrow>
            <h1 className="text-4xl font-bold text-[var(--navy-900)] mt-3">
              Style guide
            </h1>
            <p className="text-[var(--text-secondary)] mt-2 max-w-xl">
              Phase 0 reference: tokens and shared primitives. This page is
              for review only — not part of the public site nav.
            </p>
          </div>

          {/* Color */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Color</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {swatches.map((s) => (
                <div key={s.name}>
                  <div
                    className="h-16 rounded-[var(--radius-md)] border border-[var(--border)]"
                    style={{ background: s.value }}
                  />
                  <p className="font-mono-tight text-xs mt-2 text-[var(--text-secondary)]">
                    {s.name}
                  </p>
                  <p className="font-mono-tight text-xs text-[var(--text-tertiary)]">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Type */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Type</h2>
            <div className="space-y-4">
              <p className="text-5xl font-bold text-[var(--navy-900)]">
                Display / Sora 700
              </p>
              <p className="text-2xl font-semibold text-[var(--navy-900)]">
                Heading / Sora 600
              </p>
              <p className="text-base text-[var(--text-secondary)] max-w-xl">
                Body / Inter 400 — the quick brown fox jumps over the lazy
                dog. Used for paragraphs, descriptions, and longform copy
                across the site.
              </p>
              <p className="font-mono-tight text-xs uppercase text-[var(--text-tertiary)]">
                Mono / JetBrains Mono — used for eyebrows, labels, stats
              </p>
            </div>
          </div>

          {/* Eyebrow / signature element */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Eyebrow (signature element)
            </h2>
            <div className="flex flex-wrap gap-6 items-center">
              <Eyebrow>featured app</Eyebrow>
              <Eyebrow pulse>live on play store</Eyebrow>
              <Eyebrow tone="neutral">development</Eyebrow>
            </div>
          </div>

          {/* Buttons */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Buttons</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary</Button>
              <Button variant="dark">Dark</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Cards */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Cards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card variant="raised">
                <p className="font-semibold text-[var(--navy-900)] mb-2">
                  Raised
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Default card for app/feature listings.
                </p>
              </Card>
              <Card variant="flat">
                <p className="font-semibold text-[var(--navy-900)] mb-2">
                  Flat
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  For content sitting on a surface section.
                </p>
              </Card>
              <Card variant="dashed">
                <p className="font-semibold text-[var(--navy-900)] mb-2">
                  Dashed
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Placeholder / "coming soon" slots.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Dark section preview */}
      <Section tone="dark" className="py-16">
        <Container>
          <Eyebrow tone="on-dark">dark section</Eyebrow>
          <h2 className="text-2xl font-semibold text-white mt-3 mb-2">
            Navy-950 surface
          </h2>
          <p className="text-[var(--text-on-dark-secondary)] max-w-xl">
            Used sparingly for high-contrast moments — footer, or a single
            anchor section per page. Not the default background.
          </p>
        </Container>
      </Section>
    </div>
  );
}
