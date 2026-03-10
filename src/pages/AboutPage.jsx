import { aboutContent } from "../data/siteContent";

export default function AboutPage() {
  return (
    <section className="space-y-8 pb-8 md:space-y-10">
      <header className="space-y-4">
        <p className="ui-eyebrow">Történetünk</p>
        <h1 className="text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">{aboutContent.introTitle}</h1>
        <p className="max-w-3xl text-[var(--text-muted)]">{aboutContent.introBody}</p>
      </header>

      <section className="ui-panel grid gap-6 rounded-3xl p-6 md:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl bg-gradient-to-br from-[#162521] via-[#23332f] to-[#3C474B] p-6 text-[var(--color-mist-200)]">
          <p className="text-xs uppercase tracking-[0.18em] text-[rgba(243,255,185,0.84)]">Küldetés</p>
          <h2 className="mt-4 text-2xl font-semibold">{aboutContent.missionTitle}</h2>
          <p className="mt-3 text-sm text-[rgba(243,255,185,0.92)]">{aboutContent.missionBody}</p>
        </div>
        <div className="grid gap-3">
          {aboutContent.qualityBlocks.map((block) => (
            <article className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-base)] p-4" key={block.title}>
              <h3 className="font-semibold text-[var(--text-primary)]">{block.title}</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{block.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {aboutContent.trustStats.map((stat) => (
          <article className="ui-card rounded-2xl p-5" key={stat.label}>
            <p className="text-2xl font-semibold text-[var(--text-primary)]">{stat.value}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{stat.label}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
