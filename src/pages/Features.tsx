import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InstallButton } from "@/components/InstallButton";
import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Search, Globe, ShieldCheck, FileText, TrendingDown, ScanEye, Clock, FolderOpen, FileCheck2, Building2 } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const DETAILED_FEATURES = [
  {
    icon: Search,
    title: { es: "Búsqueda inteligente", pt: "Busca inteligente" },
    desc: {
      es: "CazaFalsos analiza publicaciones buscando coincidencias exactas con tu marca, pero también variaciones engañosas, menciones indirectas y jerga local que usan los vendedores de productos falsificados. Esto incluye abreviaciones, errores intencionales de ortografía y términos coloquiales que dificultan la detección manual.",
      pt: "CazaFalsos analisa publicações buscando correspondências exatas com sua marca, mas também variações enganosas, menções indiretas e gírias locais usadas por vendedores de produtos falsificados. Isso inclui abreviações, erros intencionais de ortografia e termos coloquiais que dificultam a detecção manual.",
    },
  },
  {
    icon: Globe,
    title: { es: "Cobertura en 6 países", pt: "Cobertura em 6 países" },
    desc: {
      es: "Funciona en los principales mercados de Mercado Libre: México, Brasil, Argentina, Chile, Colombia y Perú. Puedes monitorear tu marca en múltiples países desde una sola herramienta, sin necesidad de revisar cada sitio por separado.",
      pt: "Funciona nos principais mercados do Mercado Livre: México, Brasil, Argentina, Chile, Colômbia e Peru. Você pode monitorar sua marca em múltiplos países a partir de uma única ferramenta, sem precisar revisar cada site separadamente.",
    },
  },
  {
    icon: ShieldCheck,
    title: { es: "Recopilación de pruebas", pt: "Coleta de provas" },
    desc: {
      es: "Cada caso detectado se documenta con capturas de pantalla, timestamps y un hash SHA-256 que ayuda a verificar la integridad de la evidencia. Esto facilita la organización de pruebas y puede ser útil al momento de presentar denuncias formales.",
      pt: "Cada caso detectado é documentado com capturas de tela, timestamps e um hash SHA-256 que ajuda a verificar a integridade da evidência. Isso facilita a organização de provas e pode ser útil ao apresentar denúncias formais.",
    },
  },
  {
    icon: FileText,
    title: { es: "Denuncias preparadas", pt: "Denúncias preparadas" },
    desc: {
      es: "CazaFalsos genera plantillas de denuncia pre-llenadas, pensadas para facilitar procesos como el Brand Protection Program (BPP) y el Programa de Protección de Propiedad Intelectual (PPPI). Esto reduce el tiempo y esfuerzo necesario para formalizar cada caso.",
      pt: "CazaFalsos gera modelos de denúncia pré-preenchidos, pensados para facilitar processos como o Brand Protection Program (BPP) e o Programa de Proteção de Propriedade Intelectual (PPPI). Isso reduz o tempo e esforço necessários para formalizar cada caso.",
    },
  },
  {
    icon: TrendingDown,
    title: { es: "Detección de anomalías de precio", pt: "Detecção de anomalias de preço" },
    desc: {
      es: "Publicaciones con precios inusualmente bajos bajo tu marca pueden ser una señal de actividad sospechosa. CazaFalsos identifica estos patrones para que puedas revisarlos y decidir si requieren atención.",
      pt: "Publicações com preços incomumente baixos sob sua marca podem ser um sinal de atividade suspeita. CazaFalsos identifica esses padrões para que você possa revisá-los e decidir se requerem atenção.",
    },
  },
  {
    icon: ScanEye,
    title: { es: "Análisis de imágenes", pt: "Análise de imagens" },
    desc: {
      es: "Encuentra publicaciones que usan imágenes visualmente similares a las de tus productos, incluso si fueron recortadas, filtradas o ligeramente modificadas. Esto ayuda a detectar casos que una búsqueda por texto no encontraría.",
      pt: "Encontra publicações que usam imagens visualmente similares às dos seus produtos, mesmo se foram cortadas, filtradas ou ligeiramente modificadas. Isso ajuda a detectar casos que uma busca por texto não encontraria.",
    },
  },
];

const BENEFITS = [
  {
    icon: Clock,
    title: { es: "Ahorra tiempo", pt: "Economize tempo" },
    desc: { es: "Deja de revisar publicaciones una por una. Automatiza la detección y enfócate en actuar.", pt: "Pare de revisar publicações uma por uma. Automatize a detecção e foque em agir." },
  },
  {
    icon: FolderOpen,
    title: { es: "Mejor organización", pt: "Melhor organização" },
    desc: { es: "Todas las pruebas documentadas y organizadas en un solo lugar, listas para cuando las necesites.", pt: "Todas as provas documentadas e organizadas em um só lugar, prontas para quando precisar." },
  },
  {
    icon: FileCheck2,
    title: { es: "Más base documental", pt: "Mais base documental" },
    desc: { es: "Actúa con evidencias estructuradas: capturas, hashes y plantillas de denuncia preparadas.", pt: "Aja com evidências estruturadas: capturas, hashes e modelos de denúncia preparados." },
  },
  {
    icon: Building2,
    title: { es: "Pensado para pymes", pt: "Pensado para PMEs" },
    desc: { es: "No necesitas un equipo legal grande. CazaFalsos simplifica la protección de marca para negocios de cualquier tamaño.", pt: "Você não precisa de uma equipe jurídica grande. CazaFalsos simplifica a proteção de marca para negócios de qualquer tamanho." },
  },
];

const FeaturesPage = () => {
  const { tr, lang } = useLang();

  const seoTitle = lang === "es"
    ? "Funciones de CazaFalsos — Monitoreo, Pruebas y Denuncias para Mercado Libre"
    : "Funções do CazaFalsos — Monitoramento, Provas e Denúncias para Mercado Livre";
  const seoDesc = lang === "es"
    ? "Búsqueda inteligente, cobertura en 6 países, pruebas SHA-256, denuncias preparadas y más. Protege tu marca en Mercado Libre."
    : "Busca inteligente, cobertura em 6 países, provas SHA-256, denúncias preparadas e mais. Proteja sua marca no Mercado Livre.";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={seoTitle} description={seoDesc} />
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
                {lang === "es"
                  ? "Funciones pensadas para proteger tu marca en Mercado Libre"
                  : "Funções pensadas para proteger sua marca no Mercado Livre"}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {lang === "es"
                  ? "CazaFalsos combina monitoreo, recopilación de pruebas y preparación de denuncias en una experiencia simple para marcas y pymes."
                  : "CazaFalsos combina monitoramento, coleta de provas e preparação de denúncias em uma experiência simples para marcas e PMEs."}
              </p>
              <div className="flex flex-col items-center gap-2 pt-2">
                <InstallButton size="lg" />
                <p className="text-xs text-muted-foreground italic">{tr("cta.coming.note")}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="section-padding bg-primary/[0.03]">
          <div className="section-container max-w-3xl">
            <motion.p
              className="text-muted-foreground leading-relaxed text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {lang === "es"
                ? "Monitorear manualmente las publicaciones de tu marca en Mercado Libre es lento, inconsistente y difícil de escalar, especialmente cuando vendes en más de un país. CazaFalsos centraliza la detección, la documentación y la preparación de denuncias para que puedas actuar con más rapidez y menos esfuerzo."
                : "Monitorar manualmente as publicações da sua marca no Mercado Livre é lento, inconsistente e difícil de escalar, especialmente quando você vende em mais de um país. CazaFalsos centraliza a detecção, a documentação e a preparação de denúncias para que você possa agir com mais rapidez e menos esforço."}
            </motion.p>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="section-padding">
          <div className="section-container max-w-4xl space-y-12">
            {DETAILED_FEATURES.map((f, i) => (
              <motion.div
                key={i}
                className="card-surface p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="feature-icon-box bg-secondary/10 shrink-0">
                  <f.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{f.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc[lang]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-primary/[0.03]">
          <div className="section-container">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {lang === "es"
                ? "Menos trabajo manual. Más claridad para actuar."
                : "Menos trabalho manual. Mais clareza para agir."}
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={i}
                  className="card-surface p-7 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="feature-icon-box bg-primary/10 mx-auto mb-5">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{b.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc[lang]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding">
          <div className="section-container">
            <motion.div
              className="rounded-outer bg-gradient-to-br from-primary to-primary/80 p-10 sm:p-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                {tr("final.title")}
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto leading-relaxed">
                {tr("final.desc")}
              </p>
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

export default FeaturesPage;
