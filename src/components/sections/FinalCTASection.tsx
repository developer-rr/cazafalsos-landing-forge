import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { InstallButton } from "../InstallButton";
import { useState } from "react";
import { toast } from "sonner";
import { CreditCard, Clock, XCircle, Users } from "lucide-react";

const PERKS = [
  { icon: CreditCard, key: "final.perk1" },
  { icon: Clock, key: "final.perk2" },
  { icon: XCircle, key: "final.perk3" },
];

export function FinalCTASection() {
  const { tr, lang } = useLang();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setConsent(false);
  };

  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          className="relative overflow-hidden rounded-outer bg-gradient-to-br from-primary to-primary/80 p-10 sm:p-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Social proof */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Users className="w-4 h-4 text-primary-foreground/70" />
            <span className="text-sm font-medium text-primary-foreground/70">
              {lang === "es"
                ? "+500 marcas ya monitorean mejor su mercado"
                : "+500 marcas já monitoram melhor seu mercado"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            {tr("final.title")}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto leading-relaxed">
            {tr("final.desc")}
          </p>

          <InstallButton size="lg" className="bg-accent hover:shadow-[0_0_20px_rgba(255,109,0,0.4)]" />

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            {PERKS.map((p) => (
              <div key={p.key} className="flex items-center gap-1.5 text-primary-foreground/70">
                <p.icon className="w-4 h-4" />
                <span className="text-xs font-medium">{tr(p.key)}</span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-primary-foreground/50 italic">{tr("cta.coming.note")}</p>

          {/* Newsletter with consent */}
          <div className="mt-12 max-w-md mx-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6"
              >
                <p className="text-lg font-semibold text-primary-foreground">
                  {lang === "es"
                    ? "Gracias. Te notificaremos pronto."
                    : "Obrigado. Vamos notificá-lo em breve."}
                </p>
              </motion.div>
            ) : (
              <>
                <p className="text-sm text-primary-foreground/70 mb-3">{tr("newsletter.title")}</p>
                <form onSubmit={handleNewsletter} className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={tr("newsletter.placeholder")}
                      className="flex-1 px-4 py-3 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded-inner
                        text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                    />
                    <button
                      type="submit"
                      className="px-5 py-3 text-sm font-semibold bg-primary-foreground text-primary rounded-inner
                        transition-all hover:scale-[1.02] active:scale-95"
                    >
                      {tr("cta.join")}
                    </button>
                  </div>
                  <label className="flex items-start gap-2 text-xs text-primary-foreground/60 cursor-pointer text-left">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                      className="mt-0.5 accent-accent"
                    />
                    <span>
                      {lang === "es"
                        ? "Acepto recibir actualizaciones y acepto la política de privacidad."
                        : "Aceito receber atualizações e aceito a política de privacidade."}
                    </span>
                  </label>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
