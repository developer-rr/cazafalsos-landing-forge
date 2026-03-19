import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Eye, Bell, FileText, Clock, Brain, Scale } from "lucide-react";

const FEATURES = [
  { icon: Eye, titleKey: "features.auto.title", descKey: "features.auto.desc" },
  { icon: Bell, titleKey: "features.alerts.title", descKey: "features.alerts.desc" },
  { icon: FileText, titleKey: "features.reports.title", descKey: "features.reports.desc" },
  { icon: Clock, titleKey: "features.monitor.title", descKey: "features.monitor.desc" },
  { icon: Brain, titleKey: "features.ai.title", descKey: "features.ai.desc" },
  { icon: Scale, titleKey: "features.legal.title", descKey: "features.legal.desc" },
];

export function FeaturesSection() {
  const { tr } = useLang();

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
            {tr("features.tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{tr("features.title")}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.titleKey}
              className="card-surface p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="feature-icon-box bg-secondary/10 mb-6">
                <f.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{tr(f.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tr(f.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
