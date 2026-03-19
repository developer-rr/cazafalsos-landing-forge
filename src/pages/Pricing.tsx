import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/sections/PricingSection";
import { useLang } from "@/lib/i18n";

const PricingPage = () => {
  const { tr } = useLang();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="section-container section-padding text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{tr("page.pricing.title")}</h1>
        </div>
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
