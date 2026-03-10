import { useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import ProductDetailModal from "../components/products/ProductDetailModal";
import { useProductFilters } from "../hooks/useProductFilters";
import { navigateToCart, navigateToCheckout } from "../services/cartService";
import { getBrands } from "../services/productService";

const allFilter = { slug: "all", name: "Összes márka" };

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const availableBrands = getBrands();
  const brandFilters = [allFilter, ...availableBrands];
  const brandBySlug = Object.fromEntries(availableBrands.map((brand) => [brand.slug, brand]));
  const brandNameBySlug = Object.fromEntries(
    availableBrands.map((brand) => [brand.slug, brand.name])
  );
  const { activeBrand, filteredProducts, setBrandFilter } = useProductFilters();
  const selectedBrand = activeBrand !== "all" ? brandBySlug[activeBrand] : null;
  const selectedBrandName =
    selectedProduct ? brandNameBySlug[selectedProduct.brand] || selectedProduct.brand : "";

  return (
    <section className="space-y-8 pb-8">
      <header className="space-y-3">
        <p className="ui-eyebrow">Katalógus</p>
        <h1 className="text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">Prémium autómodellek</h1>
        <p className="max-w-3xl text-[var(--text-muted)]">
          Böngéssz márkák szerint, hasonlítsd össze a méretarányokat, és készítsd elő a listád a Hotcakes kosárhoz és pénztárhoz.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {brandFilters.map((brand) => {
          const isActive = activeBrand === brand.slug;
          return (
            <button
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "active-cta"
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
            Megjelenítve: <span className="font-semibold text-[var(--text-primary)]">{filteredProducts.length}</span> modell
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="ui-btn ui-btn-secondary"
            onClick={navigateToCart}
            type="button"
          >
            Kosár megnyitása
          </button>
          <button
            className="ui-btn ui-btn-primary active-cta"
            onClick={navigateToCheckout}
            type="button"
          >
            Pénztár
          </button>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard
            brandName={brandNameBySlug[product.brand] || product.brand}
            key={product.id}
            product={product}
            onOpen={setSelectedProduct}
          />
        ))}
      </div>

      {selectedProduct ? (
        <ProductDetailModal
          brandName={selectedBrandName}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      ) : null}
    </section>
  );
}
