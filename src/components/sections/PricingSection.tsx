import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Check } from "lucide-react";
import { InstallButton } from "../InstallButton";

const PLANS = [
  {
    nameKey: "pricing.free",
    price: "$0",
    features: {
      es: ["5 búsquedas/día", "Alertas básicas", "1 marca", "Soporte comunitario"],
      pt: ["5 buscas/dia", "Alertas básicos", "1 marca", "Suporte comunitário"],
    },
    highlighted: false,
  },
  {
    nameKey: "pricing.pro",
    price: "$29",
    features: {
      es: ["Búsquedas ilimitadas", "Alertas en tiempo real", "10 marcas", "Reportes automáticos", "Soporte prioritario"],
      pt: ["Buscas ilimitadas", "Alertas em tempo real", "10 marcas", "Relatórios automáticos", "Suporte prioritário"],
    },
    highlighted: true,
  },
  {
    nameKey: "pricing.enterprise",
    price: null,
    features: {
      es: ["Todo de Pro", "Marcas ilimitadas", "API dedicada", "Account manager", "SLA personalizado"],
      pt: ["Tudo do Pro", "Marcas ilimitadas", "API dedicada", "Account manager", "SLA personalizado"],
    },
    highlighted: false,
  },
];

export function PricingSection() {
  const { tr, lang } = useLang();

  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary rounded-full mb-4">
            {tr("pricing.tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{tr("pricing.title")}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.nameKey}
              className={`card-surface p-8 flex flex-col ${plan.highlighted ? "ring-2 ring-primary relative" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground rounded-full">
                  {tr("pricing.popular")}
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground">{tr(plan.nameKey)}</h3>
              <div className="mt-4 mb-6">
                {plan.price ? (
                  <span className="text-4xl font-bold text-foreground tabular-nums">
                    {plan.price}<span className="text-base font-normal text-muted-foreground">{tr("pricing.mo")}</span>
                  </span>
                ) : (
                  <span className="text-lg font-bold text-muted-foreground">{tr("pricing.contact")}</span>
                )}
              </div>
              <ul className="space-y-3 flex-1">
                {plan.features[lang].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {plan.price ? (
                  <InstallButton className="w-full" />
                ) : (
                  <a href="/contacto" className="block w-full text-center px-6 py-3 text-sm font-semibold border border-border rounded-outer text-foreground hover:bg-muted transition-colors">
                    {tr("pricing.contact")}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
