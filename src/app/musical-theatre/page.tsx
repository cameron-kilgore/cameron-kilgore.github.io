import Section from "@/components/ui/Section";

export default function MusicalTheatrePage() {
  return (
    <Section id="musical-theatre">
      <div className="mx-auto max-w-3xl space-y-6">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--primary)]">
          Creative portfolio
        </p>
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Musical Theatre Projects
        </h1>
        <p className="text-lg text-[var(--muted)]">
          This page is ready for your musical theatre showcase. Replace the placeholder copy with productions, performances, and links you want to feature.
        </p>
      </div>
    </Section>
  );
}
