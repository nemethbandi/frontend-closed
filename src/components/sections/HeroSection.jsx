import { homeContent } from "../../data/siteContent";

export default function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-gradient-to-br from-[#162521] via-[#23332f] to-[#3C474B] p-7 text-[var(--color-mist-200)] shadow-[0_24px_52px_-36px_rgba(22,37,33,0.9)] sm:p-10">
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[rgba(243,255,185,0.12)] blur-2xl" />
      <div className="absolute -bottom-20 left-14 h-52 w-52 rounded-full bg-[rgba(255,253,152,0.12)] blur-2xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.25fr_1fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.22em] text-[rgba(243,255,185,0.82)]">{hero.eyebrow}</p>
          <h1 className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">{hero.headline}</h1>
          <p className="max-w-2xl text-sm text-[rgba(243,255,185,0.9)] sm:text-base">{hero.subheadline}</p>

          <div className="flex flex-wrap gap-3">
            <a
              className="ui-btn rounded-xl border border-[#FFFD98] bg-[#FFFD98] px-5 py-2.5 text-sm font-semibold !text-[#162521] hover:bg-[#F3FFB9] hover:!text-[#162521]"
              href={hero.primaryCta.to}
            >
              {hero.primaryCta.label}
            </a>
            <a
              className="ui-btn rounded-xl border border-[rgba(243,255,185,0.45)] bg-[rgba(243,255,185,0.06)] px-5 py-2.5 text-sm font-semibold text-[var(--color-mist-200)] hover:bg-[rgba(243,255,185,0.18)]"
              href={hero.secondaryCta.to}
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="grid gap-3 rounded-2xl border border-[rgba(243,255,185,0.24)] bg-[rgba(15,21,19,0.44)] p-4">
          {hero.highlightStats.map((stat) => (
            <div className="rounded-xl border border-[rgba(243,255,185,0.2)] bg-[rgba(243,255,185,0.06)] p-4" key={stat.label}>
              <p className="text-xl font-semibold">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-[rgba(243,255,185,0.82)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
