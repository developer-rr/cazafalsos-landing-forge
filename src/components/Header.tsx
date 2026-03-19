import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { InstallButton } from "./InstallButton";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV_ITEMS = [
  { key: "nav.inicio", path: "/" },
  { key: "nav.caracteristicas", path: "/caracteristicas" },
  { key: "nav.precios", path: "/precios" },
  { key: "nav.comparacion", path: "/comparacion" },
  { key: "nav.nosotros", path: "/nosotros" },
  { key: "nav.faq", path: "/faq" },
];

export function Header() {
  const { tr } = useLang();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-header">
      <div className="section-container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
          Caza<span className="text-primary">Falsos</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-sm font-medium rounded-inner transition-colors duration-200
                ${location.pathname === item.path
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              {tr(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <InstallButton />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background pb-4">
          <nav className="section-container flex flex-col gap-1 pt-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 text-sm font-medium rounded-inner transition-colors
                  ${location.pathname === item.path
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
              >
                {tr(item.key)}
              </Link>
            ))}
            <div className="flex items-center gap-3 mt-3 px-3">
              <LanguageSwitcher />
              <InstallButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
