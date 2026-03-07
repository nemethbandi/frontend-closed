import { Link } from "react-router-dom";
import { buildProductsUrl } from "../../services/navigationService";

export default function BrandCard({ brand }) {
  return (
    <Link
      className="group overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-5 shadow-[0_10px_35px_-20px_rgba(15,23,42,0.6)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-20px_rgba(15,23,42,0.55)]"
      to={buildProductsUrl(brand.slug)}
    >
      <div className={`mb-4 h-28 rounded-xl bg-gradient-to-br ${brand.accent} p-4 text-white`}>
        <p className="text-xs uppercase tracking-[0.18em] opacity-90">{brand.origin}</p>
        <p className="mt-6 text-2xl font-semibold leading-none">{brand.name}</p>
      </div>
      <p className="text-sm text-[var(--text-muted)]">{brand.blurb}</p>
      <p className="mt-4 text-sm font-semibold text-[var(--text-primary)] transition group-hover:text-[var(--accent-primary)]">
        Explore models
      </p>
    </Link>
  );
}
