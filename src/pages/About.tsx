import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Crosshair, Globe, Users } from "lucide-react";

const AboutPage = () => {
  const { tr, lang } = useLang();

  const values = [
    { icon: Crosshair, title: { es: "Precisión", pt: "Precisão" }, desc: { es: "Tecnología de detección de última generación.", pt: "Tecnologia de detecção de última geração." } },
    { icon: Globe, title: { es: "Alcance LATAM", pt: "Alcance LATAM" }, desc: { es: "Protegemos marcas en toda América Latina.", pt: "Protegemos marcas em toda a América Latina." } },
    { icon: Users, title: { es: "Comunidad", pt: "Comunidade" }, desc: { es: "Construimos junto a nuestros usuarios.", pt: "Construímos junto com nossos usuários." } },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="section-container section-padding">
          <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">{tr("page.about.title")}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {lang === "es"
                ? "CazaFalsos nació de la frustración de ver marcas legítimas perder ventas frente a falsificadores en Mercado Libre. Somos un equipo de ingenieros y especialistas en propiedad intelectual comprometidos con proteger el ecosistema de e-commerce en LATAM."
                : "CazaFalsos nasceu da frustração de ver marcas legítimas perderem vendas para falsificadores no Mercado Livre. Somos uma equipe de engenheiros e especialistas em propriedade intelectual comprometidos em proteger o ecossistema de e-commerce na LATAM."}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mt-16">
            {values.map((v, i) => (
              <motion.div key={i} className="card-surface p-8 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="feature-icon-box bg-primary/10 mx-auto mb-5"><v.icon className="w-6 h-6 text-primary" /></div>
                <h3 className="text-lg font-bold text-foreground mb-2">{v.title[lang]}</h3>
                <p className="text-sm text-muted-foreground">{v.desc[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
