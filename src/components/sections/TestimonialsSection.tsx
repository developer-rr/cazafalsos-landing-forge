import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Mariana R.",
    country: "🇲🇽",
    role: { es: "Dueña de marca de cosmética", pt: "Dona de marca de cosméticos" },
    quote: {
      es: "Antes perdíamos horas revisando publicaciones manualmente. Ahora detectamos más rápido los anuncios sospechosos y tenemos mejor base para actuar.",
      pt: "Antes perdíamos horas revisando publicações manualmente. Agora detectamos mais rápido os anúncios suspeitos e temos uma base melhor para agir.",
    },
  },
  {
    name: "Rafael T.",
    country: "🇧🇷",
    role: { es: "Responsable de e-commerce", pt: "Responsável por e-commerce" },
    quote: {
      es: "CazaFalsos nos ayudó a monitorear mejor nuestra marca en Mercado Libre y organizar evidencias sin depender de procesos manuales tan lentos.",
      pt: "CazaFalsos nos ajudou a monitorar melhor nossa marca no Mercado Livre e organizar evidências sem depender de processos manuais tão lentos.",
    },
  },
  {
    name: "Luciano G.",
    country: "🇦🇷",
    role: { es: "Fundador de pyme", pt: "Fundador de PME" },
    quote: {
      es: "Lo que más valoro es la simplicidad. No es una herramienta pensada solo para corporaciones: una pyme también la puede usar.",
      pt: "O que mais valorizo é a simplicidade. Não é uma ferramenta pensada só para corporações: uma PME também pode usá-la.",
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
          <p className="mt-4 text-muted-foreground leading-relaxed">{tr("testimonials.subtitle")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              className="card-surface p-8 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Quote className="w-6 h-6 text-primary/20 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">"{t.quote[lang]}"</p>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{t.country}</span>
                <div>
                  <div className="text-sm font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role[lang]}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
