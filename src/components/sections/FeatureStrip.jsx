const features = [
  {
    title: "Hiteles kiadások",
    body: "Licencelt modellek megbízható prémium gyártóktól.",
  },
  {
    title: "Gyűjtői csomagolás",
    body: "Biztonságos kezelés a dobozos és vitrinfokozatú darabokhoz.",
  },
  {
    title: "Kurált katalógus",
    body: "Fókuszált válogatás a zsúfolt kínálat zaján túl.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="ui-panel grid gap-4 rounded-2xl p-5 sm:grid-cols-3 sm:p-6">
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
