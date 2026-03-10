import { formatPrice } from "../../utils/format";

export default function ProductCard({ product, brandName, onOpen }) {
  return (
    <article
      className="ui-card group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl transition hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
      onClick={() => onOpen?.(product)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen?.(product);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#162521] via-[#23332f] to-[#3C474B] p-5 text-[var(--color-mist-200)]">
        {product.image ? (
          <img
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            src={product.image}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(22,37,33,0.72)] via-[rgba(35,51,47,0.62)] to-[rgba(60,71,75,0.64)]" />
        <span className="relative z-10 inline-flex rounded-full border border-[rgba(243,255,185,0.3)] bg-[rgba(243,255,185,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
          {product.badge}
        </span>
        <p className="absolute bottom-4 right-4 z-10 text-xs uppercase tracking-[0.16em] text-[rgba(243,255,185,0.72)]">
          {product.scale}
        </p>
      </div>

      <div className="flex flex-1 flex-col space-y-4 p-5">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">{brandName}</p>
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">{product.name}</h3>
          <p className="text-sm text-[var(--text-muted)]">{product.description}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
          <span>{product.category}</span>
          <span className="font-semibold text-[var(--text-primary)]">{formatPrice(product.price)}</span>
        </div>

        <button
          className="ui-btn ui-btn-primary active-cta mt-auto w-full py-2.5"
          onClick={(event) => {
            event.stopPropagation();
            onOpen?.(product);
          }}
          type="button"
        >
          Kosárba
        </button>
      </div>
    </article>
  );
}
