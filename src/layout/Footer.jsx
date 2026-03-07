import { Link } from "react-router-dom";
import { siteMeta } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-[var(--text-muted)] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>{siteMeta.footerTagline}</p>
        <div className="flex flex-wrap gap-4">
          <Link className="transition hover:text-[var(--text-primary)]" to="/">
            Home
          </Link>
          <Link className="transition hover:text-[var(--text-primary)]" to="/products">
            Products
          </Link>
          <Link className="transition hover:text-[var(--text-primary)]" to="/about">
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
