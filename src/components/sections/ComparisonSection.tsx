import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { X, Check } from "lucide-react";

const ROWS = [
  { labelKey: "comparison.time", manualKey: "comparison.time.manual", cazaKey: "comparison.time.caza" },
  { labelKey: "comparison.accuracy", manualKey: "comparison.accuracy.manual", cazaKey: "comparison.accuracy.caza" },
  { labelKey: "comparison.cost", manualKey: "comparison.cost.manual", cazaKey: "comparison.cost.caza" },
  { labelKey: "comparison.reports2", manualKey: "comparison.reports.manual", cazaKey: "comparison.reports.caza" },
];

export function ComparisonSection() {
  const { tr } = useLang();

  return (
    <section className="section-padding bg-primary/[0.03]">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary rounded-full mb-4">
            {tr("comparison.tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{tr("comparison.title")}</h2>
        </motion.div>

        <motion.div
          className="card-surface overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-border">
            <div className="p-4 sm:p-6" />
            <div className="p-4 sm:p-6 text-center border-l border-border">
              <span className="text-sm font-bold text-muted-foreground">{tr("comparison.manual")}</span>
            </div>
            <div className="p-4 sm:p-6 text-center border-l border-border bg-primary/5">
              <span className="text-sm font-bold text-primary">{tr("comparison.cazafalsos")}</span>
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 ${i < ROWS.length - 1 ? "border-b border-border" : ""}`}>
              <div className="p-4 sm:p-6 text-sm font-medium text-foreground">{tr(row.labelKey)}</div>
              <div className="p-4 sm:p-6 text-center border-l border-border flex items-center justify-center gap-2">
                <X className="w-4 h-4 text-destructive shrink-0" />
                <span className="text-sm text-muted-foreground">{tr(row.manualKey)}</span>
              </div>
              <div className="p-4 sm:p-6 text-center border-l border-border bg-primary/5 flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-sm font-medium text-foreground">{tr(row.cazaKey)}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
