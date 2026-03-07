import { NavLink } from "react-router-dom";
import { navigateToCart } from "../../services/cartService";

function getMobileLinkClasses(isActive) {
  return `block rounded-xl px-4 py-3 text-sm font-semibold transition ${
    isActive
      ? "bg-[var(--accent-primary)] text-white"
      : "text-[var(--text-primary)] hover:bg-[var(--surface-soft)]"
  }`;
}

export default function MobileMenu({ isOpen, items, onNavigate }) {
  if (!isOpen) {
    return null;
  }

  return (
    <nav className="border-t border-black/5 bg-white px-4 pb-4 md:hidden">
      <div className="space-y-2 pt-3">
        {items.map((item) => (
          <NavLink
            key={item.to}
            className={({ isActive }) => getMobileLinkClasses(isActive)}
            onClick={onNavigate}
            to={item.to}
          >
            {item.label}
          </NavLink>
        ))}
        <button
          className="block w-full rounded-xl border border-black/10 px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
          onClick={() => {
            onNavigate();
            navigateToCart();
          }}
          type="button"
        >
          Cart
        </button>
      </div>
    </nav>
  );
}
