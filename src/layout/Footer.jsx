import { Link } from "react-router-dom";
import { navigationItems, siteMeta } from "../data/siteContent";
import { navigateToCheckout } from "../services/cartService";

const corporateLinks = [
  { label: "Impresszum", to: "#" },
  { label: "Privacy Policy", to: "#" },
  { label: "Terms & Conditions", to: "#" },
  { label: "Contact", to: "#" },
  { label: "Shipping Info", to: "#" },
  { label: "Returns", to: "#" },
  { label: "FAQ", to: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-base)_78%,var(--color-mist-200))]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.6fr_1fr_1fr] lg:px-8">
        <div className="space-y-3 pr-3">
          <p className="brand-wordmark text-[1.7rem] text-[var(--text-primary)]">{siteMeta.brandName}</p>
          <p className="text-sm text-[var(--text-muted)]">{siteMeta.footerTagline}</p>
          <p className="text-sm text-[var(--text-muted)]">Budapest, Hungary | Mon-Fri 9:00-18:00 CET</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="ui-eyebrow font-semibold text-[var(--text-primary)]">Navigation</p>
          {navigationItems.map((item) => (
            <Link className="block text-[var(--text-muted)] transition hover:text-[var(--text-primary)]" key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="space-y-3 text-sm">
          <p className="ui-eyebrow font-semibold text-[var(--text-primary)]">Checkout</p>
          <button
            className="ui-btn ui-btn-primary"
            onClick={navigateToCheckout}
            type="button"
          >
            Go to Checkout
          </button>
        </div>
      </div>
      <div className="border-t border-[var(--border-soft)] bg-[var(--color-ink-950)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[rgba(243,255,185,0.86)]">
            {corporateLinks.map((item) => (
              <a className="transition hover:text-[var(--color-sun-200)]" href={item.to} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[rgba(243,255,185,0.72)]">
            <p>(c) {new Date().getFullYear()} {siteMeta.brandName}. All rights reserved.</p>
            <p>Registered office: 1051 Budapest, Collector Street 12.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

