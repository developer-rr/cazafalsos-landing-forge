import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import { FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const { tr, lang } = useLang();
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title = lang === "es"
      ? "Blog — CazaFalsos | Protección de Marca en Mercado Libre"
      : "Blog — CazaFalsos | Proteção de Marca no Mercado Livre";
    document.querySelector('meta[name="description"]')?.setAttribute("content",
      lang === "es"
        ? "Artículos y novedades sobre protección de marca en Mercado Libre. Próximamente."
        : "Artigos e novidades sobre proteção de marca no Mercado Livre. Em breve.");
  }, [lang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("🎉 " + tr("cta.coming"));
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-container section-padding text-center">
        <FileText className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{tr("page.blog.title")}</h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
          {lang === "es"
            ? "Estamos preparando contenido sobre protección de marca en Mercado Libre. Déjanos tu email para recibir los primeros artículos."
            : "Estamos preparando conteúdo sobre proteção de marca no Mercado Livre. Deixe seu email para receber os primeiros artigos."}
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto mb-8">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={tr("newsletter.placeholder")}
            className="flex-1 px-4 py-3 text-sm bg-muted border border-border rounded-inner
              text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-5 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-inner
              transition-all hover:scale-[1.02] active:scale-95"
          >
            {tr("cta.join")}
          </button>
        </form>

        <Link to="/" className="text-sm text-primary hover:underline">
          ← {lang === "es" ? "Volver al inicio" : "Voltar ao início"}
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
