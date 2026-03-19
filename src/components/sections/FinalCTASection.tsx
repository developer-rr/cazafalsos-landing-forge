import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { InstallButton } from "../InstallButton";
import { useState } from "react";
import { toast } from "sonner";

export function FinalCTASection() {
  const { tr } = useLang();
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("🎉 " + tr("cta.coming"));
    setEmail("");
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
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            {tr("final.title")}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            {tr("final.desc")}
          </p>
          <InstallButton size="lg" className="bg-accent hover:shadow-[0_0_20px_rgba(255,109,0,0.4)]" />

          {/* Newsletter */}
          <div className="mt-12 max-w-md mx-auto">
            <p className="text-sm text-primary-foreground/70 mb-3">{tr("newsletter.title")}</p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
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
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
