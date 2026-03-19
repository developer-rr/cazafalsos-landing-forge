import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { useLang } from "@/lib/i18n";

const ComparisonPage = () => {
  const { tr } = useLang();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="section-container section-padding text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{tr("page.comparison.title")}</h1>
        </div>
        <ComparisonSection />
      </main>
      <Footer />
    </div>
  );
};

export default ComparisonPage;
