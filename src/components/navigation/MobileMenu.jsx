import { NavLink } from "react-router-dom";

function getMobileLinkClasses(isActive) {
  return `block rounded-xl px-4 py-3 text-sm font-semibold transition ${
    isActive
      ? "bg-[var(--accent-primary)] text-white"
      : "text-[var(--text-primary)] hover:bg-black/5"
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
      </div>
    </nav>
  );
}
