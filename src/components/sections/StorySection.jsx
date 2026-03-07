import { homeContent } from "../../data/siteContent";

export default function StorySection() {
  const { story } = homeContent;

  return (
    <section className="grid gap-6 rounded-3xl border border-white/70 bg-white/85 p-6 shadow-[0_10px_35px_-20px_rgba(15,23,42,0.45)] sm:p-8 lg:grid-cols-[1.2fr_1fr]">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Collector Standard</p>
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">{story.heading}</h2>
        <p className="text-[var(--text-muted)]">{story.body}</p>
      </div>

      <div className="rounded-2xl bg-[var(--bg-deep)] p-6 text-white">
        <h3 className="text-lg font-semibold">{story.featureTitle}</h3>
        <p className="mt-3 text-sm text-slate-200">{story.featureBody}</p>
      </div>
    </section>
  );
}
