import { homeContent } from "../../data/siteContent";

export default function StorySection() {
  const { story } = homeContent;

  return (
    <section className="ui-panel grid gap-6 rounded-3xl p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr]">
      <div className="space-y-4">
        <p className="ui-eyebrow">Collector Standard</p>
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">{story.heading}</h2>
        <p className="text-[var(--text-muted)]">{story.body}</p>
      </div>

      <div className="rounded-2xl border border-[rgba(243,255,185,0.2)] bg-[var(--color-ink-950)] p-6 text-[var(--color-mist-200)]">
        <h3 className="text-lg font-semibold">{story.featureTitle}</h3>
        <p className="mt-3 text-sm text-[rgba(243,255,185,0.88)]">{story.featureBody}</p>
      </div>
    </section>
  );
}
