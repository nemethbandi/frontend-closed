import BrandCard from "../cards/BrandCard";

export default function BrandSection({ brands }) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="ui-eyebrow">Böngészés márka szerint</p>
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
          Fedezd fel az ikonikus autómárkákat
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
