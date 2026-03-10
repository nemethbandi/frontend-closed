import { Link } from "react-router-dom";
import { buildProductsUrl } from "../../services/navigationService";

export default function BrandCard({ brand }) {
  return (
    <Link
      className="ui-card group overflow-hidden rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
      to={buildProductsUrl(brand.slug)}
    >
      <div className={`mb-4 h-28 rounded-xl bg-gradient-to-br ${brand.accent} p-4 text-[var(--color-mist-200)]`}>
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.18em] text-[rgba(243,255,185,0.85)]">{brand.origin}</p>
          <img alt={`${brand.name} logo`} className="h-12 w-12 object-contain" src={brand.logo} />
        </div>
        <p className="mt-4 text-2xl font-semibold leading-none">{brand.name}</p>
      </div>
      <p className="text-sm text-[var(--text-muted)]">{brand.blurb}</p>
      <p className="mt-4 text-sm font-semibold text-[var(--text-primary)] transition group-hover:text-[var(--accent-secondary)]">
        Modellek megtekintése
      </p>
    </Link>
  );
}
