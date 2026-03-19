import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/sections/FAQSection";
import { useLang } from "@/lib/i18n";

const FAQPage = () => {
  const { tr } = useLang();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="section-container section-padding text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{tr("page.faq.title")}</h1>
        </div>
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
