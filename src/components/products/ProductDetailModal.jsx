import { useEffect, useMemo, useState } from "react";
import { addToCart } from "../../services/cartService";
import { formatPrice } from "../../utils/format";

const MIN_QTY = 1;
const MAX_QTY = 99;

function clampQuantity(value) {
  if (!Number.isFinite(value)) return MIN_QTY;
  return Math.min(MAX_QTY, Math.max(MIN_QTY, Math.floor(value)));
}

export default function ProductDetailModal({ product, brandName, onClose }) {
  const [quantity, setQuantity] = useState(MIN_QTY);

  useEffect(() => {
    setQuantity(MIN_QTY);
  }, [product]);

  useEffect(() => {
    function handleKey(event) {
      if (event.key === "Escape") {
        onClose?.();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const safeQuantity = useMemo(() => clampQuantity(quantity), [quantity]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button
        type="button"
        aria-label="Termék részletek bezárása"
        className="absolute inset-0 h-full w-full cursor-pointer bg-[rgba(22,37,33,0.35)] backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        className="relative z-10 flex h-full w-full flex-col overflow-hidden border border-[var(--border-soft)] bg-[var(--surface-base)] shadow-[0_30px_60px_-40px_rgba(22,37,33,0.55)]"
        role="dialog"
        aria-modal="true"
        aria-label={`${product.name} részletek`}
      >
        <div className="flex items-center justify-between gap-6 border-b border-[var(--accent-primary)] bg-[var(--accent-primary)] px-6 py-4 text-[var(--color-mist-200)]">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-mist-200)]/80">{brandName}</p>
            <h2 className="text-2xl font-semibold text-[var(--color-mist-200)]">{product.name}</h2>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(243,255,185,0.35)] bg-[rgba(243,255,185,0.08)] text-[var(--color-mist-200)] transition hover:border-[rgba(243,255,185,0.7)] hover:bg-[rgba(243,255,185,0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-mist-200)]"
            aria-label="Bezárás"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[1.35fr_1fr] lg:items-start">
              <div className="flex justify-center lg:justify-start lg:items-start">
                <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-gradient-to-br from-[#162521] via-[#23332f] to-[#3C474B]">
                  <div className="aspect-[4/3] w-full">
                  {product.image ? (
                    <img
                      alt={product.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      src={product.image}
                    />
                  ) : null}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(22,37,33,0.45)] via-[rgba(35,51,47,0.4)] to-[rgba(60,71,75,0.4)]" />
                <div className="absolute left-5 top-5 z-10 inline-flex rounded-full border border-[rgba(243,255,185,0.3)] bg-[rgba(243,255,185,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-mist-200)]">
                  {product.badge}
                </div>
                <div className="absolute bottom-5 right-5 z-10 rounded-full border border-[rgba(243,255,185,0.3)] bg-[rgba(243,255,185,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-mist-200)]">
                  {product.scale}
                </div>
                </div>
              </div>

              <div className="flex h-full flex-col justify-between gap-10 lg:min-h-[30rem]">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    <span className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-muted)] px-3 py-1">
                      {product.category}
                  </span>
                  <span className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-muted)] px-3 py-1">
                    {product.scale}
                  </span>
                  <span className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-muted)] px-3 py-1">
                    {product.badge}
                  </span>
                </div>

                  <p className="text-base leading-relaxed text-[var(--text-muted)]">
                    {product.description}
                  </p>

                  <div className="flex items-end justify-between border-t border-[var(--border-soft)] pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                      Ár
                      </p>
                      <p className="text-2xl font-semibold text-[var(--text-primary)]">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                    <div className="text-right text-xs text-[var(--text-muted)]">
                      Várható feladás: 2–4 nap
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-muted)] p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">Mennyiség</p>
                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface-base)] text-lg font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-base)]"
                        onClick={() => setQuantity((prev) => clampQuantity(prev - 1))}
                      aria-label="Mennyiség csökkentése"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min={MIN_QTY}
                        max={MAX_QTY}
                        value={safeQuantity}
                        onChange={(event) => setQuantity(Number(event.target.value))}
                        className="h-10 w-20 rounded-xl border border-[var(--border-soft)] bg-[var(--surface-base)] px-3 text-center text-sm font-semibold outline-none focus:border-[var(--accent-secondary)] focus:ring-2 focus:ring-[rgba(136,162,170,0.25)]"
                      />
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface-base)] text-lg font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-base)]"
                        onClick={() => setQuantity((prev) => clampQuantity(prev + 1))}
                      aria-label="Mennyiség növelése"
                      >
                        +
                      </button>
                      <span className="ml-auto text-sm font-semibold text-[var(--text-primary)]">
                      Összesen: {formatPrice(product.price * safeQuantity)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button
                      type="button"
                      className="ui-btn ui-btn-primary active-cta w-full py-3 text-base"
                      onClick={() => addToCart(product, safeQuantity)}
                    >
                    Kosárba
                    </button>
                    <button
                      type="button"
                      className="ui-btn ui-btn-secondary w-full"
                      onClick={onClose}
                    >
                    Vásárlás folytatása
                    </button>
                  </div>

                <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-base)] p-4 text-xs text-[var(--text-muted)]">
                  Itt állíthatod a mennyiséget. A kosárba gomb a kosár oldalra irányít.
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--accent-primary)] bg-[var(--accent-primary)] py-4" />
      </div>
    </div>
  );
}
