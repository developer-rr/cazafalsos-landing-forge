import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InstallButton } from "@/components/InstallButton";
import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Check, X, CreditCard, RefreshCw, CalendarCheck, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const PLANS = [
  {
    name: { es: "Gratis", pt: "Grátis" },
    price: "$0",
    regional: null,
    features: {
      es: ["1 marca", "50 escaneos al mes", "Búsqueda básica", "Vista previa de pruebas"],
      pt: ["1 marca", "50 escaneamentos/mês", "Busca básica", "Pré-visualização de provas"],
    },
    cta: { es: "Instalar", pt: "Instalar" },
    highlighted: false,
  },
  {
    name: { es: "Inicial", pt: "Inicial" },
    price: "$49",
    regional: "(~$850 MXN)",
    features: {
      es: ["5 marcas", "500 escaneos al mes", "Búsqueda avanzada", "Análisis pHash", "Plantillas BPP / PPPI"],
      pt: ["5 marcas", "500 escaneamentos/mês", "Busca avançada", "Análise pHash", "Modelos BPP / PPPI"],
    },
    cta: { es: "Comenzar", pt: "Começar" },
    highlighted: false,
  },
  {
    name: { es: "PRO", pt: "PRO" },
    price: "$99",
    regional: "(~$1,700 MXN)",
    features: {
      es: ["Marcas ilimitadas", "Escaneos avanzados", "Todo lo de Inicial", "BYOK AI", "Alertas inteligentes", "Exportación completa"],
      pt: ["Marcas ilimitadas", "Escaneamentos avançados", "Tudo do Inicial", "BYOK AI", "Alertas inteligentes", "Exportação completa"],
    },
    cta: { es: "Comenzar", pt: "Começar" },
    highlighted: true,
  },
  {
    name: { es: "Experto", pt: "Experto" },
    price: "$199",
    regional: "(~$3,400 MXN)",
    features: {
      es: ["Todo lo de PRO", "CLIP visual", "Paquete judicial", "Soporte prioritario"],
      pt: ["Tudo do PRO", "CLIP visual", "Pacote judicial", "Suporte prioritário"],
    },
    cta: { es: "Comenzar", pt: "Começar" },
    highlighted: false,
  },
];

const MATRIX_ROWS = [
  { label: { es: "Número de marcas", pt: "Número de marcas" }, values: ["1", "5", "Ilimitadas", "Ilimitadas"] },
  { label: { es: "Escaneos mensuales", pt: "Escaneamentos mensais" }, values: ["50", "500", "Avanzados", "Avanzados"] },
  { label: { es: "Búsqueda avanzada", pt: "Busca avançada" }, values: ["no", "yes", "yes", "yes"] },
  { label: { es: "Plantillas BPP / PPPI", pt: "Modelos BPP / PPPI" }, values: ["no", "yes", "yes", "yes"] },
  { label: { es: "Análisis de imágenes", pt: "Análise de imagens" }, values: ["no", "pHash", "pHash", "pHash + CLIP"] },
  { label: { es: "Alertas", pt: "Alertas" }, values: ["no", "no", "yes", "yes"] },
  { label: { es: "BYOK AI", pt: "BYOK AI" }, values: ["no", "no", "yes", "yes"] },
  { label: { es: "Exportación completa", pt: "Exportação completa" }, values: ["no", "no", "yes", "yes"] },
  { label: { es: "Soporte prioritario", pt: "Suporte prioritário" }, values: ["no", "no", "no", "yes"] },
  { label: { es: "Paquete judicial", pt: "Pacote judicial" }, values: ["no", "no", "no", "yes"] },
];

const PLAN_NAMES_SHORT = [
  { es: "Gratis", pt: "Grátis" },
  { es: "Inicial", pt: "Inicial" },
  { es: "PRO", pt: "PRO" },
  { es: "Experto", pt: "Experto" },
];

const FAQ_ITEMS = [
  {
    q: { es: "¿Puedo cambiar de plan después?", pt: "Posso mudar de plano depois?" },
    a: { es: "Sí. Puedes subir o bajar de plan en cualquier momento desde tu cuenta. El cambio se aplica en el siguiente ciclo de facturación.", pt: "Sim. Você pode subir ou descer de plano a qualquer momento pela sua conta. A mudança se aplica no próximo ciclo de faturamento." },
  },
  {
    q: { es: "¿Aceptan pagos locales en Brasil y México?", pt: "Aceitam pagamentos locais no Brasil e México?" },
    a: { es: "Sí. Aceptamos Pix en Brasil y OXXO en México, además de tarjetas internacionales.", pt: "Sim. Aceitamos Pix no Brasil e OXXO no México, além de cartões internacionais." },
  },
  {
    q: { es: "¿Qué incluye la garantía de reembolso?", pt: "O que inclui a garantia de reembolso?" },
    a: { es: "Si no estás satisfecho con el servicio, puedes solicitar un reembolso completo dentro de los primeros 14 días después del pago.", pt: "Se você não está satisfeito com o serviço, pode solicitar um reembolso completo nos primeiros 14 dias após o pagamento." },
  },
  {
    q: { es: "¿Puedo cancelar cuando quiera?", pt: "Posso cancelar quando quiser?" },
    a: { es: "Sí. No hay contratos ni permanencia mínima. Puedes cancelar desde tu cuenta en cualquier momento.", pt: "Sim. Não há contratos nem permanência mínima. Você pode cancelar pela sua conta a qualquer momento." },
  },
  {
    q: { es: "¿Habrá descuento por pago anual?", pt: "Haverá desconto por pagamento anual?" },
    a: { es: "Sí. El pago anual incluye 2 meses gratis, lo que representa un ahorro significativo a lo largo del año.", pt: "Sim. O pagamento anual inclui 2 meses grátis, o que representa uma economia significativa ao longo do ano." },
  },
];

function MatrixCell({ value }: { value: string }) {
  if (value === "yes") return <Check className="w-4 h-4 text-secondary mx-auto" />;
  if (value === "no") return <X className="w-4 h-4 text-destructive/50 mx-auto" />;
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

const PricingPage = () => {
  const { tr, lang } = useLang();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                {lang === "es" ? "Planes para cada tamaño de negocio" : "Planos para cada tamanho de negócio"}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {lang === "es"
                  ? "Empieza gratis. Escala cuando lo necesites para monitorear más marcas, recopilar más pruebas y actuar con más rapidez."
                  : "Comece grátis. Escale quando precisar para monitorar mais marcas, coletar mais provas e agir com mais rapidez."}
              </p>
              <div className="flex flex-col items-center gap-2 pt-2">
                <InstallButton size="lg" />
                <p className="text-xs text-muted-foreground italic">{tr("cta.coming.note")}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Annual discount highlight */}
        <div className="section-container -mt-6 mb-8">
          <motion.div
            className="mx-auto max-w-md text-center bg-accent/10 border border-accent/20 rounded-[var(--radius-outer)] px-5 py-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-sm font-bold text-accent">
              {lang === "es" ? "🎉 Pago anual = 2 meses gratis" : "🎉 Pagamento anual = 2 meses grátis"}
            </span>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <section className="pb-16">
          <div className="section-container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {PLANS.map((plan, i) => (
                <motion.div
                  key={i}
                  className={`card-surface p-7 flex flex-col ${plan.highlighted ? "ring-2 ring-primary relative" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground rounded-full whitespace-nowrap">
                      {lang === "es" ? "Popular" : "Popular"}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-foreground">{plan.name[lang]}</h3>
                  <div className="mt-3 mb-1">
                    <span className="text-3xl font-bold text-foreground tabular-nums">
                      {plan.price}<span className="text-sm font-normal text-muted-foreground">{tr("pricing.mo")}</span>
                    </span>
                  </div>
                  {plan.regional && (
                    <p className="text-xs text-muted-foreground mb-4">{plan.regional}</p>
                  )}
                  {!plan.regional && <div className="mb-4" />}
                  <ul className="space-y-2.5 flex-1">
                    {plan.features[lang].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <InstallButton className="w-full" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Payment notes */}
            <div className="max-w-2xl mx-auto mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CreditCard className="w-4 h-4" /> {lang === "es" ? "Tarjetas internacionales, Pix (Brasil) y OXXO (México)" : "Cartões internacionais, Pix (Brasil) e OXXO (México)"}</span>
              <span className="flex items-center gap-1.5"><RefreshCw className="w-4 h-4" /> {lang === "es" ? "Cancela cuando quieras" : "Cancele quando quiser"}</span>
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> {lang === "es" ? "Garantía de reembolso de 14 días" : "Garantia de reembolso de 14 dias"}</span>
            </div>
          </div>
        </section>

        {/* Feature Comparison Matrix */}
        <section className="section-padding bg-primary/[0.03]">
          <div className="section-container">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {lang === "es" ? "Comparación detallada de planes" : "Comparação detalhada de planos"}
            </motion.h2>

            <motion.div
              className="card-surface overflow-x-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <table className="w-full min-w-[560px] text-center">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-left" />
                    {PLAN_NAMES_SHORT.map((p, i) => (
                      <th key={i} className={`p-4 text-sm font-bold ${i === 2 ? "bg-primary/5 text-primary" : "text-muted-foreground"}`}>
                        {p[lang]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MATRIX_ROWS.map((row, ri) => (
                    <tr key={ri} className={ri < MATRIX_ROWS.length - 1 ? "border-b border-border" : ""}>
                      <td className="p-4 text-left text-sm font-medium text-foreground">{row.label[lang]}</td>
                      {row.values.map((v, ci) => (
                        <td key={ci} className={`p-4 ${ci === 2 ? "bg-primary/5" : ""}`}>
                          <MatrixCell value={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="section-container max-w-3xl">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {lang === "es" ? "Preguntas sobre precios" : "Perguntas sobre preços"}
            </motion.h2>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  className="card-surface overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-foreground text-sm">{item.q[lang]}</span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 ml-4 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a[lang]}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                  ? "Empieza con el plan que mejor se adapta a tu marca"
                  : "Comece com o plano que melhor se adapta à sua marca"}
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto leading-relaxed">
                {lang === "es"
                  ? "Puedes comenzar gratis y decidir más adelante si necesitas más potencia."
                  : "Você pode começar grátis e decidir mais adiante se precisa de mais potência."}
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

export default PricingPage;
