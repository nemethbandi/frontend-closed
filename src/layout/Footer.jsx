import { Link } from "react-router-dom";
import { navigationItems, siteMeta } from "../data/siteContent";
import { navigateToCheckout } from "../services/cartService";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white/90">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.6fr_1fr_1fr] lg:px-8">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-[var(--text-primary)]">{siteMeta.brandName}</p>
          <p className="text-sm text-[var(--text-muted)]">{siteMeta.footerTagline}</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold uppercase tracking-[0.14em] text-[var(--text-primary)]">Navigation</p>
          {navigationItems.map((item) => (
            <Link className="block text-[var(--text-muted)] transition hover:text-[var(--text-primary)]" key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold uppercase tracking-[0.14em] text-[var(--text-primary)]">Checkout</p>
          <button
            className="rounded-xl bg-[var(--accent-primary)] px-4 py-2 font-semibold text-white transition hover:brightness-110"
            onClick={navigateToCheckout}
            type="button"
          >
            Go to Checkout
          </button>
        </div>
      </div>
    </footer>
  );
}
