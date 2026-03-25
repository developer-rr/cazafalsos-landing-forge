import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { FileText, ChevronRight } from "lucide-react";

const LEGAL_LINKS = [
  { slug: "privacidad", es: "Política de Privacidad", pt: "Política de Privacidade" },
  { slug: "terminos", es: "Términos de Servicio", pt: "Termos de Serviço" },
  { slug: "cookies", es: "Política de Cookies", pt: "Política de Cookies" },
  { slug: "reembolsos", es: "Política de Reembolsos", pt: "Política de Reembolsos" },
];

export default function LegalIndex() {
  const { lang } = useLang();
  const l = lang === "pt" ? "pt" : "es";

  return (
    <>
      <SEOHead
        title={l === "es" ? "Documentos Legales — CazaFalsos" : "Documentos Legais — CazaFalsos"}
        description={l === "es" ? "Consulta nuestros documentos legales: privacidad, términos, cookies y reembolsos." : "Consulte nossos documentos legais: privacidade, termos, cookies e reembolsos."}
      />
      <Header />
      <main className="min-h-screen bg-background pt-12 pb-20">
        <div className="section-container max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-2"
          >
            {l === "es" ? "Documentos Legales" : "Documentos Legais"}
          </motion.h1>
          <p className="text-muted-foreground mb-10">
            {l === "es"
              ? "Consulta nuestras políticas y condiciones de uso."
              : "Consulte nossas políticas e condições de uso."}
          </p>

          <div className="flex flex-col gap-3">
            {LEGAL_LINKS.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={`/legal/${item.slug}`}
                  className="flex items-center gap-4 p-5 rounded-[var(--radius-outer)] border border-border bg-card hover:border-primary/40 hover:shadow-card transition-all duration-200 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-[var(--radius-inner)] bg-primary/10 text-primary shrink-0">
                    <FileText size={20} />
                  </div>
                  <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors flex-1">
                    {l === "es" ? item.es : item.pt}
                  </span>
                  <ChevronRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
