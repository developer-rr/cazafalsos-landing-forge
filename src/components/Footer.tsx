import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/lib/constants";

export function Footer() {
  const { tr } = useLang();

  const productLinks = [
    { label: tr("nav.caracteristicas"), path: "/caracteristicas" },
    { label: tr("nav.precios"), path: "/precios" },
    { label: tr("nav.comparacion"), path: "/comparacion" },
    { label: tr("footer.guide"), path: "/faq" },
  ];

  const companyLinks = [
    { label: tr("nav.nosotros"), path: "/nosotros" },
    { label: tr("nav.blog"), path: "/blog" },
    { label: tr("nav.contacto"), path: "/contacto" },
    { label: tr("nav.faq"), path: "/faq" },
  ];

  const legalLinks = [
    { label: tr("footer.privacy"), path: "/legal/privacidad" },
    { label: tr("footer.terms"), path: "/legal/terminos" },
    { label: tr("footer.cookies"), path: "/legal/cookies" },
    { label: tr("footer.refunds"), path: "/legal/reembolsos" },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold text-foreground">
              Caza<span className="text-primary">Falsos</span>
            </span>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {tr("footer.brand")}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">{tr("footer.product")}</h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">{tr("footer.company")}</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">{tr("footer.legal")}</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} {COMPANY_NAME} | {COMPANY_EMAIL} | {tr("footer.lgpd")}</span>
        </div>
      </div>
    </footer>
  );
}
