import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InstallButton } from "@/components/InstallButton";
import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Scale, Globe, Building2, ShieldCheck, Check } from "lucide-react";
import { useEffect } from "react";

const EXPERTISE = [
  {
    icon: Scale,
    title: { es: "20+ años en propiedad intelectual", pt: "20+ anos em propriedade intelectual" },
    desc: {
      es: "Experiencia acumulada en protección de marcas, enforcement y procesos de denuncia en entornos digitales.",
      pt: "Experiência acumulada em proteção de marcas, enforcement e processos de denúncia em ambientes digitais.",
    },
  },
  {
    icon: Globe,
    title: { es: "Múltiples jurisdicciones LATAM", pt: "Múltiplas jurisdições LATAM" },
    desc: {
      es: "Conocimiento práctico de los marcos legales y comerciales de México, Brasil, Argentina, Chile, Colombia y Perú.",
      pt: "Conhecimento prático dos marcos legais e comerciais do México, Brasil, Argentina, Chile, Colômbia e Peru.",
    },
  },
  {
    icon: Building2,
    title: { es: "Enfoque para marcas y pymes", pt: "Foco em marcas e PMEs" },
    desc: {
      es: "Herramientas diseñadas para negocios que no cuentan con grandes equipos legales ni presupuestos enterprise.",
      pt: "Ferramentas projetadas para negócios que não contam com grandes equipes jurídicas nem orçamentos enterprise.",
    },
  },
  {
    icon: ShieldCheck,
    title: { es: "Privacidad y protección de datos", pt: "Privacidade e proteção de dados" },
    desc: {
      es: "Sensibilidad a la privacidad del usuario, con un enfoque cuidadoso en el manejo de información y permisos.",
      pt: "Sensibilidade à privacidade do usuário, com foco cuidadoso no manuseio de informações e permissões.",
    },
  },
];

const TRUST_POINTS = {
  es: [
    "Experiencia regional en propiedad intelectual",
    "Enfoque accesible para pymes y marcas pequeñas",
    "Comprensión profunda del ecosistema de Mercado Libre",
    "Privacidad y claridad en el uso de la herramienta",
  ],
  pt: [
    "Experiência regional em propriedade intelectual",
    "Foco acessível para PMEs e marcas pequenas",
    "Compreensão profunda do ecossistema do Mercado Livre",
    "Privacidade e clareza no uso da ferramenta",
  ],
};

const AboutPage = () => {
  const { tr, lang } = useLang();

  useEffect(() => {
    document.title = lang === "es"
      ? "Sobre CazaFalsos — Protección de Marca en Mercado Libre"
      : "Sobre CazaFalsos — Proteção de Marca no Mercado Livre";
  }, [lang]);

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
                {lang === "es" ? "Sobre CazaFalsos" : "Sobre o CazaFalsos"}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {lang === "es"
                  ? "Proteger una marca no debería ser un lujo reservado para grandes corporaciones."
                  : "Proteger uma marca não deveria ser um luxo reservado para grandes corporações."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-primary/[0.03]">
          <div className="section-container max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary rounded-full mb-4">
                {lang === "es" ? "Misión" : "Missão"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                {lang === "es" ? "Nuestra misión" : "Nossa missão"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {lang === "es"
                  ? "CazaFalsos existe para ayudar a marcas y pymes que venden en Mercado Libre a detectar publicaciones sospechosas, recopilar pruebas y actuar con más claridad, sin depender de procesos manuales lentos o herramientas enterprise fuera de presupuesto."
                  : "CazaFalsos existe para ajudar marcas e PMEs que vendem no Mercado Livre a detectar publicações suspeitas, coletar provas e agir com mais clareza, sem depender de processos manuais lentos ou ferramentas enterprise fora do orçamento."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Expertise */}
        <section className="section-padding">
          <div className="section-container">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {lang === "es" ? "Experiencia que respalda la herramienta" : "Experiência que respalda a ferramenta"}
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {EXPERTISE.map((item, i) => (
                <motion.div
                  key={i}
                  className="card-surface p-7 flex gap-5 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="feature-icon-box bg-secondary/10 shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1.5">{item.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc[lang]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="section-padding bg-primary/[0.03]">
          <div className="section-container max-w-2xl">
            <motion.div
              className="card-surface p-8 sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                {lang === "es" ? "¿Por qué confiar en CazaFalsos?" : "Por que confiar no CazaFalsos?"}
              </h2>
              <ul className="space-y-3">
                {TRUST_POINTS[lang].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
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
                  ? "Empieza a proteger tu marca con una herramienta pensada para la región"
                  : "Comece a proteger sua marca com uma ferramenta pensada para a região"}
              </h2>
              <InstallButton size="lg" className="bg-accent hover:shadow-[0_0_20px_rgba(255,109,0,0.4)]" />
              <p className="mt-4 text-xs text-primary-foreground/50 italic">
                {lang === "es" ? "Disponible en Chrome Web Store" : "Disponível na Chrome Web Store"}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
