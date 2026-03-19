import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Check, X, Minus } from "lucide-react";

const ROWS = [
  { label: "comp.price", manual: "comp.price.manual", caza: "comp.price.caza", enterprise: "comp.price.enterprise" },
  { label: "comp.time", manual: "comp.time.manual", caza: "comp.time.caza", enterprise: "comp.time.enterprise" },
  { label: "comp.coverage", manual: "comp.coverage.manual", caza: "comp.coverage.caza", enterprise: "comp.coverage.enterprise" },
  { label: "comp.hash", manual: "no", caza: "yes", enterprise: "comp.sometimes" },
  { label: "comp.complaints", manual: "no", caza: "yes", enterprise: "comp.sometimes" },
  { label: "comp.slang", manual: "no", caza: "yes", enterprise: "comp.slang.enterprise" },
  { label: "comp.small", manual: "comp.small.manual", caza: "yes", enterprise: "no" },
];

function CellContent({ value, tr }: { value: string; tr: (k: string) => string }) {
  if (value === "yes") return <Check className="w-5 h-5 text-secondary mx-auto" />;
  if (value === "no") return <X className="w-5 h-5 text-destructive mx-auto" />;
  return <span className="text-sm text-muted-foreground">{tr(value)}</span>;
}

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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{tr("comp.title")}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{tr("comp.subtitle")}</p>
        </motion.div>

        <motion.div
          className="card-surface overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <table className="w-full min-w-[520px] text-center">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 sm:p-5 text-left" />
                <th className="p-4 sm:p-5 text-sm font-bold text-muted-foreground">{tr("comp.col.manual")}</th>
                <th className="p-4 sm:p-5 relative bg-primary/5">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-secondary text-secondary-foreground rounded-full whitespace-nowrap">
                    {tr("comp.recommended")}
                  </span>
                  <span className="text-sm font-bold text-primary">CazaFalsos</span>
                </th>
                <th className="p-4 sm:p-5 text-sm font-bold text-muted-foreground">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={i} className={i < ROWS.length - 1 ? "border-b border-border" : ""}>
                  <td className="p-4 sm:p-5 text-left text-sm font-medium text-foreground">{tr(row.label)}</td>
                  <td className="p-4 sm:p-5"><CellContent value={row.manual} tr={tr} /></td>
                  <td className="p-4 sm:p-5 bg-primary/5"><CellContent value={row.caza} tr={tr} /></td>
                  <td className="p-4 sm:p-5"><CellContent value={row.enterprise} tr={tr} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
