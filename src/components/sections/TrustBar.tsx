import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const stats = [
  { key: "trust.brands", value: "500+" },
  { key: "trust.listings", value: "2M+" },
  { key: "trust.fakes", value: "50K+" },
  { key: "trust.countries", value: "18" },
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
              <div className="text-3xl sm:text-4xl font-bold text-primary tabular-nums">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{tr(s.key)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
