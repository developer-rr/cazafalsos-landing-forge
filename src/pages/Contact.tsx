import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import { useState, useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, Clock, Building2 } from "lucide-react";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/lib/constants";

const ContactPage = () => {
  const { tr, lang } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [consent, setConsent] = useState(false);

  const seoTitle = lang === "es"
    ? "Contacto — CazaFalsos | Protección de Marca en Mercado Libre"
    : "Contato — CazaFalsos | Proteção de Marca no Mercado Livre";
  const seoDesc = lang === "es"
    ? "¿Tienes preguntas sobre CazaFalsos? Contáctanos. Respondemos en menos de 24 horas hábiles."
    : "Tem perguntas sobre o CazaFalsos? Fale conosco. Respondemos em menos de 24 horas úteis.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(tr("cta.coming"), {
      description: lang === "es" ? "Formulario disponible próximamente" : "Formulário disponível em breve",
    });
    setForm({ name: "", email: "", message: "" });
    setConsent(false);
  };

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
                {lang === "es" ? "Contacto" : "Contato"}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {lang === "es"
                  ? "¿Tienes preguntas sobre CazaFalsos? Estamos aquí para ayudarte."
                  : "Tem perguntas sobre o CazaFalsos? Estamos aqui para ajudar."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Two-column contact */}
        <section className="section-padding">
          <div className="section-container max-w-4xl">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left - Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="card-surface p-7 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="feature-icon-box bg-primary/10 shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1">Email</h3>
                      <a href={`mailto:${COMPANY_EMAIL}`} className="text-sm text-primary hover:underline break-all">
                        {COMPANY_EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="feature-icon-box bg-secondary/10 shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        {lang === "es" ? "Tiempo de respuesta" : "Tempo de resposta"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {lang === "es"
                          ? "Respondemos en menos de 24 horas hábiles"
                          : "Respondemos em menos de 24 horas úteis"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Company info */}
                <div className="card-surface p-7">
                  <div className="flex items-start gap-4">
                    <div className="feature-icon-box bg-muted shrink-0">
                      <Building2 className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{COMPANY_NAME}</p>
                      <p className="text-sm text-muted-foreground">Portugal</p>
                    </div>
                  </div>
                </div>

                {/* Trust note */}
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  {lang === "es"
                    ? "Te respondemos con claridad, sin vueltas y con foco práctico."
                    : "Respondemos com clareza, sem rodeios e com foco prático."}
                </p>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="card-surface p-7">
                  <h2 className="text-lg font-bold text-foreground mb-5">
                    {lang === "es" ? "Mantente informado" : "Fique informado"}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">{tr("page.contact.name")}</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-muted border border-border rounded-[var(--radius-inner)] text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">{tr("page.contact.email")}</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-muted border border-border rounded-[var(--radius-inner)] text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">{tr("page.contact.message")}</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-muted border border-border rounded-[var(--radius-inner)] text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>
                    <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        required
                        className="mt-0.5 accent-primary"
                      />
                      <span>
                        {lang === "es"
                          ? "Acepto la política de privacidad y el uso de mis datos para recibir respuesta a mi consulta."
                          : "Aceito a política de privacidade e o uso dos meus dados para receber resposta à minha consulta."}
                      </span>
                    </label>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-[var(--radius-inner)] transition-all hover:scale-[1.02] active:scale-95 hover:shadow-[var(--shadow-glow)]"
                    >
                      {tr("cta.send")}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
