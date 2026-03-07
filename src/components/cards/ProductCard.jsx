import { addToCart } from "../../services/cartService";
import { formatPrice } from "../../utils/format";

export default function ProductCard({ product, brandName }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-[0_10px_35px_-20px_rgba(15,23,42,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-20px_rgba(15,23,42,0.55)]">
      <div className="relative h-44 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-5 text-white">
        <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
          {product.badge}
        </span>
        <p className="absolute bottom-4 right-4 text-xs uppercase tracking-[0.16em] text-white/70">
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
          className="w-full rounded-xl bg-[var(--accent-primary)] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          onClick={() => addToCart(product)}
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
