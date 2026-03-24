import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { CookieConsent } from "@/components/CookieConsent";
import { ExitIntent } from "@/components/ExitIntent";
import { SEOHead } from "@/components/SEOHead";
import { useLang } from "@/lib/i18n";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => {
  const { lang } = useLang();
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={lang === "es"
          ? "CazaFalsos — Detecta Falsificaciones en Mercado Libre | Protección de Marca"
          : "CazaFalsos — Detecte Falsificações no Mercado Livre | Proteção de Marca"}
        description={lang === "es"
          ? "Detecta publicaciones sospechosas en Mercado Libre, recopila pruebas con hash SHA-256 y prepara denuncias. 6 países LATAM. Empieza gratis."
          : "Detecte publicações suspeitas no Mercado Livre, colete provas com hash SHA-256 e prepare denúncias. 6 países LATAM. Comece grátis."}
      />
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <ComparisonSection />
        <PricingSection />
        <TestimonialsSection />
        <SecuritySection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyCTA />
      <CookieConsent />
      <ExitIntent />
    </div>
  );
};

export default Index;
