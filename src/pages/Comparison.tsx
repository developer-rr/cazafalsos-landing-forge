import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InstallButton } from "@/components/InstallButton";
import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Check, X, ThumbsUp, ThumbsDown, Calculator, ShieldCheck, Search, Building2 } from "lucide-react";
import { useEffect } from "react";

const COMPARISON_ROWS = [
  {
    label: { es: "Precio", pt: "Preço" },
    manual: { es: "$0 (tu tiempo)", pt: "$0 (seu tempo)" },
    caza: { es: "Desde $0/mes", pt: "A partir de $0/mês" },
    enterprise: { es: "$500+/mes", pt: "$500+/mês" },
  },
  {
    label: { es: "Tiempo necesario", pt: "Tempo necessário" },
    manual: { es: "15-20 hrs/semana", pt: "15-20 hrs/semana" },
    caza: { es: "5 min/semana", pt: "5 min/semana" },
    enterprise: { es: "1 hr/semana", pt: "1 hr/semana" },
  },
  {
    label: { es: "Cobertura Mercado Libre", pt: "Cobertura Mercado Livre" },
    manual: { es: "Sí, pero manual", pt: "Sim, mas manual" },
    caza: { es: "Sí, 6 países", pt: "Sim, 6 países" },
    enterprise: { es: "Variable / limitada", pt: "Variável / limitada" },
  },
  {
    label: { es: "Pruebas SHA-256", pt: "Provas SHA-256" },
    manual: "no",
    caza: "yes",
    enterprise: { es: "A veces", pt: "Às vezes" },
  },
  {
    label: { es: "Plantillas BPP / PPPI", pt: "Modelos BPP / PPPI" },
    manual: "no",
    caza: "yes",
    enterprise: "yes",
  },
  {
    label: { es: "Detección de jerga local", pt: "Detecção de gírias locais" },
    manual: { es: "Solo si la conoces", pt: "Só se conhecer" },
    caza: "yes",
    enterprise: { es: "Limitada", pt: "Limitada" },
  },
  {
    label: { es: "Pensado para pequeños negocios", pt: "Pensado para pequenos negócios" },
    manual: { es: "Parcialmente", pt: "Parcialmente" },
    caza: "yes",
    enterprise: "no",
  },
];

function CompCell({ value, lang }: { value: string | Record<string, string>; lang: string }) {
  if (value === "yes") return <Check className="w-5 h-5 text-secondary mx-auto" />;
  if (value === "no") return <X className="w-5 h-5 text-destructive/50 mx-auto" />;
  const text = typeof value === "string" ? value : (value as any)[lang] ?? value.es;
  return <span className="text-sm text-muted-foreground">{text}</span>;
}

const DEEP_DIVE = [
  {
    title: { es: "Monitoreo manual", pt: "Monitoramento manual" },
    icon: Search,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    pros: {
      es: ["Sin costo directo", "Control total del proceso"],
      pt: ["Sem custo direto", "Controle total do processo"],
    },
    cons: {
      es: [
        "Alto consumo de tiempo (15-20 horas por semana)",
        "Difícil de escalar a múltiples países",
        "Recopilación de evidencia inconsistente",
        "Depende demasiado del esfuerzo humano",
        "Fácil perder publicaciones nuevas",
      ],
      pt: [
        "Alto consumo de tempo (15-20 horas por semana)",
        "Difícil escalar para múltiplos países",
        "Coleta de evidência inconsistente",
        "Depende demais do esforço humano",
        "Fácil perder publicações novas",
      ],
    },
  },
  {
    title: { es: "CazaFalsos", pt: "CazaFalsos" },
    icon: ShieldCheck,
    color: "text-primary",
    bgColor: "bg-primary/10",
    pros: {
      es: [
        "Enfocado 100% en Mercado Libre",
        "Flujo de trabajo en 6 países",
        "Recopilación de pruebas con hash SHA-256",
        "Denuncias preparadas automáticamente",
        "Accesible para marcas y pymes",
        "Equilibrio práctico entre simplicidad y capacidad",
      ],
      pt: [
        "Focado 100% no Mercado Livre",
        "Fluxo de trabalho em 6 países",
        "Coleta de provas com hash SHA-256",
        "Denúncias preparadas automaticamente",
        "Acessível para marcas e PMEs",
        "Equilíbrio prático entre simplicidade e capacidade",
      ],
    },
    cons: {
      es: ["Extensión de Chrome (requiere navegador desktop)"],
      pt: ["Extensão do Chrome (requer navegador desktop)"],
    },
  },
  {
    title: { es: "Soluciones enterprise", pt: "Soluções enterprise" },
    icon: Building2,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    pros: {
      es: ["Más recursos y funcionalidades avanzadas", "Equipos de soporte dedicados", "Cobertura multi-plataforma"],
      pt: ["Mais recursos e funcionalidades avançadas", "Equipes de suporte dedicadas", "Cobertura multi-plataforma"],
    },
    cons: {
      es: [
        "Precio elevado ($500+/mes)",
        "Menos adaptadas a Mercado Libre específicamente",
        "Contratos largos y poco flexibles",
        "No siempre se ajustan a marcas pequeñas",
      ],
      pt: [
        "Preço elevado ($500+/mês)",
        "Menos adaptadas ao Mercado Livre especificamente",
        "Contratos longos e pouco flexíveis",
        "Nem sempre se ajustam a marcas pequenas",
      ],
    },
  },
];

const ComparisonPage = () => {
  const { tr, lang } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          <div className="section-container section-padding text-center">
            <motion.div
              className="max-w-3xl mx-auto space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                {lang === "es" ? "CazaFalsos vs las alternativas" : "CazaFalsos vs as alternativas"}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {lang === "es"
                  ? "No todas las formas de proteger tu marca en Mercado Libre ofrecen el mismo equilibrio entre tiempo, precio y capacidad de acción."
                  : "Nem todas as formas de proteger sua marca no Mercado Livre oferecem o mesmo equilíbrio entre tempo, preço e capacidade de ação."}
              </p>
              <div className="flex flex-col items-center gap-2 pt-2">
                <InstallButton size="lg" />
                <p className="text-xs text-muted-foreground italic">{tr("cta.coming.note")}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section-padding bg-primary/[0.03]">
          <div className="section-container">
            <motion.div
              className="card-surface overflow-x-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <table className="w-full min-w-[560px] text-center">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 sm:p-5 text-left" />
                    <th className="p-4 sm:p-5 text-sm font-bold text-muted-foreground">Manual</th>
                    <th className="p-4 sm:p-5 relative bg-primary/5">
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-secondary text-secondary-foreground rounded-full whitespace-nowrap">
                        {lang === "es" ? "Recomendado" : "Recomendado"}
                      </span>
                      <span className="text-sm font-bold text-primary">CazaFalsos</span>
                    </th>
                    <th className="p-4 sm:p-5 text-sm font-bold text-muted-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={i} className={i < COMPARISON_ROWS.length - 1 ? "border-b border-border" : ""}>
                      <td className="p-4 sm:p-5 text-left text-sm font-medium text-foreground">
                        {typeof row.label === "string" ? row.label : row.label[lang]}
                      </td>
                      <td className="p-4 sm:p-5"><CompCell value={row.manual} lang={lang} /></td>
                      <td className="p-4 sm:p-5 bg-primary/5"><CompCell value={row.caza} lang={lang} /></td>
                      <td className="p-4 sm:p-5"><CompCell value={row.enterprise} lang={lang} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.p
              className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto italic leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {lang === "es"
                ? "CazaFalsos cierra la brecha entre 'no puedo pagar una solución enterprise' y 'no tengo tiempo para hacerlo manualmente'."
                : "CazaFalsos fecha a lacuna entre 'não posso pagar uma solução enterprise' e 'não tenho tempo para fazer manualmente'."}
            </motion.p>
          </div>
        </section>

        {/* Deep Dive */}
        <section className="section-padding">
          <div className="section-container max-w-5xl">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {lang === "es" ? "Un vistazo más detallado" : "Um olhar mais detalhado"}
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {DEEP_DIVE.map((item, i) => (
                <motion.div
                  key={i}
                  className={`card-surface p-7 flex flex-col ${i === 1 ? "ring-2 ring-primary" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`feature-icon-box ${item.bgColor}`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <h3 className={`text-lg font-bold ${i === 1 ? "text-primary" : "text-foreground"}`}>{item.title[lang]}</h3>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" /> {lang === "es" ? "Ventajas" : "Vantagens"}
                    </p>
                    <ul className="space-y-1.5">
                      {item.pros[lang].map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-destructive/70 mb-2 flex items-center gap-1">
                      <ThumbsDown className="w-3 h-3" /> {lang === "es" ? "Limitaciones" : "Limitações"}
                    </p>
                    <ul className="space-y-1.5">
                      {item.cons[lang].map((c, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <X className="w-3.5 h-3.5 text-destructive/50 shrink-0 mt-0.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator Placeholder */}
        <section className="section-padding bg-primary/[0.03]">
          <div className="section-container max-w-2xl">
            <motion.div
              className="card-surface p-10 sm:p-12 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-3 right-3 px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-accent/10 text-accent rounded-full">
                {lang === "es" ? "Próximamente" : "Em breve"}
              </div>
              <div className="feature-icon-box bg-secondary/10 mx-auto mb-5">
                <Calculator className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {lang === "es" ? "Calculadora ROI — próximamente" : "Calculadora ROI — em breve"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                {lang === "es"
                  ? "Más adelante podrás estimar cuánto tiempo y dinero puedes ahorrar frente al monitoreo manual."
                  : "Em breve você poderá estimar quanto tempo e dinheiro pode economizar em relação ao monitoramento manual."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding">
          <div className="section-container">
            <motion.div
              className="rounded-[var(--radius-outer)] bg-gradient-to-br from-primary to-primary/80 p-10 sm:p-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                {lang === "es"
                  ? "Elige una forma más clara de proteger tu marca"
                  : "Escolha uma forma mais clara de proteger sua marca"}
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto leading-relaxed">
                {lang === "es"
                  ? "Si hoy lo haces a mano, CazaFalsos puede ayudarte a simplificar el proceso. Si las soluciones enterprise se te van de presupuesto, aquí tienes una alternativa más accesible."
                  : "Se hoje você faz manualmente, CazaFalsos pode ajudar a simplificar o processo. Se as soluções enterprise estão fora do orçamento, aqui tem uma alternativa mais acessível."}
              </p>
              <InstallButton size="lg" className="bg-accent hover:shadow-[0_0_20px_rgba(255,109,0,0.4)]" />
              <p className="mt-4 text-xs text-primary-foreground/50 italic">
                {lang === "es" ? "Próximamente disponible" : "Disponível em breve"}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComparisonPage;
