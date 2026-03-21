import { Link, NavLink } from "react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#ebece4]/95 backdrop-blur-sm border-b border-[#262626]/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-['Playfair_Display',serif] font-medium text-[#262626] text-2xl md:text-3xl hover:text-[#ef7452] transition-colors"
        >
          AMICK BYRAM
        </Link>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            [
              "border border-[#262626] px-6 py-2 rounded transition-all duration-300",
              isActive
                ? "bg-[#262626] text-[#ebece4] pointer-events-none"
                : "hover:bg-[#262626] hover:text-[#ebece4]",
            ].join(" ")
          }
        >
          <span className="font-['Playfair_Display',serif] font-medium text-lg">
            CONTACT
          </span>
        </NavLink>
      </div>
    </header>
  );
}
