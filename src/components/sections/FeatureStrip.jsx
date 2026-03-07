const features = [
  {
    title: "Authentic Releases",
    body: "Licensed models from trusted premium manufacturers.",
  },
  {
    title: "Collector Packaging",
    body: "Secure handling standards for boxed and display-grade items.",
  },
  {
    title: "Curated Catalog",
    body: "Focused selection over crowded inventory noise.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="grid gap-4 rounded-2xl border border-white/70 bg-white/85 p-5 shadow-[0_10px_35px_-20px_rgba(15,23,42,0.4)] sm:grid-cols-3 sm:p-6">
      {features.map((feature) => (
        <article key={feature.title}>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--text-primary)]">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{feature.body}</p>
        </article>
      ))}
    </section>
  );
}
