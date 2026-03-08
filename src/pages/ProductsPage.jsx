import ProductCard from "../components/cards/ProductCard";
import { useProductFilters } from "../hooks/useProductFilters";
import { navigateToCart, navigateToCheckout } from "../services/cartService";
import { getBrands } from "../services/productService";

const allFilter = { slug: "all", name: "All Brands" };

export default function ProductsPage() {
  const availableBrands = getBrands();
  const brandFilters = [allFilter, ...availableBrands];
  const brandBySlug = Object.fromEntries(availableBrands.map((brand) => [brand.slug, brand]));
  const brandNameBySlug = Object.fromEntries(
    availableBrands.map((brand) => [brand.slug, brand.name])
  );
  const { activeBrand, filteredProducts, setBrandFilter } = useProductFilters();
  const selectedBrand = activeBrand !== "all" ? brandBySlug[activeBrand] : null;

  return (
    <section className="space-y-8 pb-8">
      <header className="space-y-3">
        <p className="ui-eyebrow">Catalog</p>
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
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "border-[var(--accent-primary)] bg-[var(--accent-primary)] text-[var(--color-mist-200)]"
                  : "border-[var(--border-strong)] bg-[var(--surface-base)] text-[var(--text-primary)] hover:bg-[var(--surface-muted)]"
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

      <div className="ui-panel flex flex-wrap items-center justify-between gap-3 rounded-2xl p-4">
        <div className="flex items-center gap-3">
          {selectedBrand ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-base)] px-3 py-1.5">
              <img alt={`${selectedBrand.name} logo`} className="h-7 w-7 object-contain" src={selectedBrand.logo} />
              <span className="text-sm font-semibold text-[var(--text-primary)]">{selectedBrand.name}</span>
            </div>
          ) : null}
          <p className="text-sm text-[var(--text-muted)]">
            Showing <span className="font-semibold text-[var(--text-primary)]">{filteredProducts.length}</span> models
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="ui-btn ui-btn-secondary"
            onClick={navigateToCart}
            type="button"
          >
            Open Cart
          </button>
          <button
            className="ui-btn ui-btn-primary"
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
