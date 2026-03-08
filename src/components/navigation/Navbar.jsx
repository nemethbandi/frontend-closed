import { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { navigationItems, siteMeta } from "../../data/siteContent";
import { navigateToCart } from "../../services/cartService";

function getLinkClasses(isActive) {
  return `nav-pill ${isActive ? "nav-pill-active active-cta" : ""}`;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const desktopItems = useMemo(
    () =>
      navigationItems.map((item) => (
        <NavLink key={item.to} className={({ isActive }) => getLinkClasses(isActive)} to={item.to}>
          {item.label}
        </NavLink>
      )),
    []
  );

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-base)_96%,var(--color-mist-200))] backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link className="group inline-flex items-center gap-3" to="/">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-primary)] text-xs font-bold tracking-[0.14em] text-[var(--color-mist-200)]">
            {siteMeta.shortBrand}
          </span>
          <span className="brand-wordmark text-2xl text-[var(--text-primary)] md:text-[1.7rem]">
            {siteMeta.brandName}
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <nav className="items-center gap-1 md:flex">{desktopItems}</nav>
          <button
            className="rounded-full border border-[var(--border-strong)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-[#F3FFB9]"
            onClick={navigateToCart}
            type="button"
          >
            Cart
          </button>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="inline-flex rounded-lg p-2 text-[var(--text-primary)] transition hover:bg-[var(--surface-muted)] md:hidden"
          onClick={() => setIsOpen((previous) => !previous)}
          type="button"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      <MobileMenu isOpen={isOpen} items={navigationItems} onNavigate={() => setIsOpen(false)} />
    </header>
  );
}
