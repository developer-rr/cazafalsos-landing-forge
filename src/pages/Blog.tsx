import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import { FileText } from "lucide-react";

const BlogPage = () => {
  const { tr } = useLang();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-container section-padding text-center">
        <FileText className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{tr("page.blog.title")}</h1>
        <p className="text-lg text-muted-foreground">{tr("page.blog.coming")}</p>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
