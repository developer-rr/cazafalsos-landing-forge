import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Crosshair, Zap, Bell } from "lucide-react";

export function SolutionSection() {
  const { tr } = useLang();

  const steps = [
    { icon: Crosshair, title: { es: "Escanea", pt: "Escaneia" }, desc: { es: "Analiza miles de publicaciones automáticamente", pt: "Analisa milhares de publicações automaticamente" } },
    { icon: Zap, title: { es: "Detecta", pt: "Detecta" }, desc: { es: "Identifica patrones sospechosos con IA", pt: "Identifica padrões suspeitos com IA" } },
    { icon: Bell, title: { es: "Alerta", pt: "Alerta" }, desc: { es: "Recibe notificaciones instantáneas", pt: "Receba notificações instantâneas" } },
  ];

  const lang = tr("solution.tag") === "La solución" ? "es" : "pt";

  return (
    <section className="section-padding bg-primary/[0.03]">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-secondary/10 text-secondary rounded-full mb-4">
            {tr("solution.tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{tr("solution.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{tr("solution.desc")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="card-surface p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="feature-icon-box bg-secondary/10 mx-auto mb-5">
                <s.icon className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{i + 1}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title[lang]}</h3>
              <p className="text-sm text-muted-foreground">{s.desc[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
