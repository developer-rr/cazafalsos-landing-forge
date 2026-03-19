import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "María González",
    role: { es: "Fundadora, BellaVista Cosmetics", pt: "Fundadora, BellaVista Cosmetics" },
    quote: {
      es: "CazaFalsos nos ayudó a eliminar más de 200 publicaciones falsas en nuestro primer mes. Recuperamos el 30% de nuestras ventas perdidas.",
      pt: "CazaFalsos nos ajudou a eliminar mais de 200 publicações falsas no nosso primeiro mês. Recuperamos 30% das nossas vendas perdidas.",
    },
  },
  {
    name: "Carlos Silva",
    role: { es: "Director de E-commerce, TechBR", pt: "Diretor de E-commerce, TechBR" },
    quote: {
      es: "La detección automática es increíble. Lo que antes nos tomaba días ahora se resuelve en minutos.",
      pt: "A detecção automática é incrível. O que antes levava dias agora se resolve em minutos.",
    },
  },
  {
    name: "Ana Rodríguez",
    role: { es: "Brand Manager, Deportes AR", pt: "Brand Manager, Deportes AR" },
    quote: {
      es: "La mejor inversión que hemos hecho para proteger nuestra marca en Mercado Libre.",
      pt: "O melhor investimento que fizemos para proteger nossa marca no Mercado Livre.",
    },
  },
];

export function TestimonialsSection() {
  const { tr, lang } = useLang();

  return (
    <section className="section-padding bg-primary/[0.03]">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-accent/10 text-accent rounded-full mb-4">
            {tr("testimonials.tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{tr("testimonials.title")}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              className="card-surface p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.quote[lang]}"</p>
              <div>
                <div className="text-sm font-bold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role[lang]}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
