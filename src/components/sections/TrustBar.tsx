import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const stats = [
  { key: "trust.countries", value: "6" },
  { key: "trust.hash", icon: "🔒" },
  { key: "trust.reports", icon: "📋" },
  { key: "trust.pymes", icon: "🏢" },
];

export function TrustBar() {
  const { tr } = useLang();

  return (
    <section className="border-y border-border bg-muted/30">
      <div className="section-container py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              {(s as any).value && <div className="text-3xl sm:text-4xl font-bold text-primary tabular-nums">{(s as any).value}</div>}
              {(s as any).icon && <div className="text-2xl mb-1">{(s as any).icon}</div>}
              <div className="text-sm text-muted-foreground font-medium">{tr(s.key)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
