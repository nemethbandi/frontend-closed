import ProductCard from "../components/cards/ProductCard";
import { useProductFilters } from "../hooks/useProductFilters";
import { navigateToCart, navigateToCheckout } from "../services/cartService";
import { getBrands } from "../services/productService";

const allFilter = { slug: "all", name: "All Brands" };

export default function ProductsPage() {
  const brandFilters = [allFilter, ...getBrands()];
  const brandNameBySlug = Object.fromEntries(
    getBrands().map((brand) => [brand.slug, brand.name])
  );
  const { activeBrand, filteredProducts, setBrandFilter } = useProductFilters();

  return (
    <section className="space-y-8 pb-8">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Catalog</p>
        <h1 className="text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">Premium Auto Models</h1>
        <p className="max-w-3xl text-[var(--text-muted)]">
          Browse by brand, compare scales, and prepare your shortlist for future Hotcakes-powered cart and checkout.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {brandFilters.map((brand) => {
          const isActive = activeBrand === brand.slug;
          return (
            <button
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-[var(--accent-primary)] text-white"
                  : "border border-black/10 bg-white text-[var(--text-primary)] hover:bg-[var(--surface-soft)]"
              }`}
              key={brand.slug}
              onClick={() => setBrandFilter(brand.slug)}
              type="button"
            >
              {brand.name}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_10px_35px_-20px_rgba(15,23,42,0.45)]">
        <p className="text-sm text-[var(--text-muted)]">
          Showing <span className="font-semibold text-[var(--text-primary)]">{filteredProducts.length}</span> models
        </p>
        <div className="flex gap-2">
          <button
            className="rounded-xl border border-black/10 px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
            onClick={navigateToCart}
            type="button"
          >
            Open Cart
          </button>
          <button
            className="rounded-xl bg-[var(--accent-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
            onClick={navigateToCheckout}
            type="button"
          >
            Checkout
          </button>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard
            brandName={brandNameBySlug[product.brand] || product.brand}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
