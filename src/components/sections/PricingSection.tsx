import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Check } from "lucide-react";
import { InstallButton } from "../InstallButton";

const PLANS = [
  {
    nameKey: "pricing.free",
    price: "$0",
    features: {
      es: ["1 marca", "50 escaneos al mes", "Detección básica", "Vista previa de pruebas"],
      pt: ["1 marca", "50 escaneamentos/mês", "Detecção básica", "Pré-visualização de provas"],
    },
    highlighted: false,
  },
  {
    nameKey: "pricing.inicial",
    price: "$49",
    features: {
      es: ["5 marcas", "500 escaneos al mes", "Plantillas BPP / PPPI", "Exportación básica"],
      pt: ["5 marcas", "500 escaneamentos/mês", "Modelos BPP / PPPI", "Exportação básica"],
    },
    highlighted: false,
  },
  {
    nameKey: "pricing.pro",
    price: "$99",
    features: {
      es: ["Marcas ilimitadas", "Escaneos avanzados", "BYOK AI", "Alertas inteligentes", "Exportación completa"],
      pt: ["Marcas ilimitadas", "Escaneamentos avançados", "BYOK AI", "Alertas inteligentes", "Exportação completa"],
    },
    highlighted: true,
  },
  {
    nameKey: "pricing.experto",
    price: "$199",
    features: {
      es: ["CLIP visual", "Paquete judicial", "Soporte prioritario", "Herramientas avanzadas para enforcement"],
      pt: ["CLIP visual", "Pacote judicial", "Suporte prioritário", "Ferramentas avançadas para enforcement"],
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
          <p className="mt-4 text-muted-foreground leading-relaxed">{tr("pricing.subtitle")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.nameKey}
              className={`card-surface p-7 flex flex-col ${plan.highlighted ? "ring-2 ring-primary relative" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground rounded-full whitespace-nowrap">
                  {tr("pricing.popular")}
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground">{tr(plan.nameKey)}</h3>
              <div className="mt-3 mb-5">
                <span className="text-3xl font-bold text-foreground tabular-nums">
                  {plan.price}<span className="text-sm font-normal text-muted-foreground">{tr("pricing.mo")}</span>
                </span>
              </div>
              <ul className="space-y-2.5 flex-1">
                {plan.features[lang].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <InstallButton className="w-full" />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6 italic">{tr("cta.coming.note")}</p>
      </div>
    </section>
  );
}
