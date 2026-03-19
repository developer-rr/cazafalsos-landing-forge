import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { AlertTriangle, TrendingDown, ShieldOff } from "lucide-react";

export function ProblemSection() {
  const { tr } = useLang();

  const problems = [
    { icon: AlertTriangle, label: { es: "Publicaciones clonadas", pt: "Publicações clonadas" } },
    { icon: TrendingDown, label: { es: "Pérdida de ventas", pt: "Perda de vendas" } },
    { icon: ShieldOff, label: { es: "Daño a tu reputación", pt: "Danos à sua reputação" } },
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-destructive/10 text-destructive rounded-full mb-4">
            {tr("problem.tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{tr("problem.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{tr("problem.desc")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              className="card-surface p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="feature-icon-box bg-destructive/10 mx-auto mb-4">
                <p.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-bold text-foreground">{p.label[tr("problem.tag") === "El problema" ? "es" : "pt"]}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
