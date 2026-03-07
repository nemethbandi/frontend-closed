import { Link } from "react-router-dom";
import { homeContent } from "../../data/siteContent";

export default function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-7 text-white shadow-[0_26px_55px_-35px_rgba(2,6,23,0.9)] sm:p-10">
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-20 left-14 h-52 w-52 rounded-full bg-sky-400/20 blur-2xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.25fr_1fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-200">{hero.eyebrow}</p>
          <h1 className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">{hero.headline}</h1>
          <p className="max-w-2xl text-sm text-slate-200 sm:text-base">{hero.subheadline}</p>

          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              to={hero.primaryCta.to}
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              className="rounded-xl border border-white/35 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              to={hero.secondaryCta.to}
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="grid gap-3 rounded-2xl border border-white/15 bg-black/20 p-4">
          {hero.highlightStats.map((stat) => (
            <div className="rounded-xl border border-white/15 bg-white/5 p-4" key={stat.label}>
              <p className="text-xl font-semibold">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
