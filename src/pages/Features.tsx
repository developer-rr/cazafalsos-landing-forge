import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { useLang } from "@/lib/i18n";

const FeaturesPage = () => {
  const { tr } = useLang();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="section-container section-padding text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{tr("page.features.title")}</h1>
        </div>
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
