import { addToCart } from "../../services/cartService";
import { formatPrice } from "../../utils/format";

export default function ProductCard({ product, brandName }) {
  return (
    <article className="ui-card group overflow-hidden rounded-2xl transition hover:-translate-y-0.5 hover:border-[var(--border-strong)]">
      <div className="relative h-44 bg-gradient-to-br from-[#162521] via-[#23332f] to-[#3C474B] p-5 text-[var(--color-mist-200)]">
        <span className="inline-flex rounded-full border border-[rgba(243,255,185,0.3)] bg-[rgba(243,255,185,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
          {product.badge}
        </span>
        <p className="absolute bottom-4 right-4 text-xs uppercase tracking-[0.16em] text-[rgba(243,255,185,0.72)]">
          {product.scale}
        </p>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">{brandName}</p>
          <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">{product.name}</h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{product.description}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
          <span>{product.category}</span>
          <span className="font-semibold text-[var(--text-primary)]">{formatPrice(product.price)}</span>
        </div>

        <button
          className="ui-btn ui-btn-primary w-full py-2.5"
          onClick={() => addToCart(product)}
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
