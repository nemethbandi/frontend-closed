import { Link } from "react-router-dom";
import { navigationItems, siteMeta } from "../data/siteContent";
import { navigateToCheckout } from "../services/cartService";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-base)_78%,var(--color-mist-200))]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.6fr_1fr_1fr] lg:px-8">
        <div className="space-y-3 pr-3">
          <p className="brand-wordmark text-[1.7rem] text-[var(--text-primary)]">{siteMeta.brandName}</p>
          <p className="text-sm text-[var(--text-muted)]">{siteMeta.footerTagline}</p>
          <p className="text-sm text-[var(--text-muted)]">Budapest, Magyarország | H-P 9:00-18:00 CET</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="ui-eyebrow font-semibold text-[var(--text-primary)]">Navigáció</p>
          {navigationItems.map((item) => (
            <Link className="block text-[var(--text-muted)] transition hover:text-[var(--text-primary)]" key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="space-y-3 text-sm">
          <p className="ui-eyebrow font-semibold text-[var(--text-primary)]">Pénztár</p>
          <button
            className="ui-btn ui-btn-primary active-cta"
            onClick={navigateToCheckout}
            type="button"
          >
            Ugrás a pénztárhoz
          </button>
        </div>
      </div>
      <div className="border-t border-[var(--border-soft)] bg-[var(--color-ink-950)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[rgba(243,255,185,0.72)]">
            <p>(c) {new Date().getFullYear()} {siteMeta.brandName}. Minden jog fenntartva.</p>
            <p>Székhely: 1051 Budapest, Collector utca 12.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
