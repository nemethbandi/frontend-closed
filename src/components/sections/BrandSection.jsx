import BrandCard from "../cards/BrandCard";

export default function BrandSection({ brands }) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Browse By Brand</p>
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
          Explore iconic automotive houses
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {brands.map((brand) => (
          <BrandCard brand={brand} key={brand.slug} />
        ))}
      </div>
    </section>
  );
}
