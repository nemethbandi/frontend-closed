import { aboutContent } from "../data/siteContent";

export default function AboutPage() {
  return (
    <section className="space-y-8 pb-8 md:space-y-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Our Story</p>
        <h1 className="text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">{aboutContent.introTitle}</h1>
        <p className="max-w-3xl text-[var(--text-muted)]">{aboutContent.introBody}</p>
      </header>

      <section className="grid gap-6 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_10px_35px_-20px_rgba(15,23,42,0.45)] md:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-6 text-white">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Mission</p>
          <h2 className="mt-4 text-2xl font-semibold">{aboutContent.missionTitle}</h2>
          <p className="mt-3 text-sm text-slate-200">{aboutContent.missionBody}</p>
        </div>
        <div className="grid gap-3">
          {aboutContent.qualityBlocks.map((block) => (
            <article className="rounded-2xl border border-black/10 bg-white p-4" key={block.title}>
              <h3 className="font-semibold text-[var(--text-primary)]">{block.title}</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{block.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {aboutContent.trustStats.map((stat) => (
          <article
            className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.45)]"
            key={stat.label}
          >
            <p className="text-2xl font-semibold text-[var(--text-primary)]">{stat.value}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{stat.label}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
