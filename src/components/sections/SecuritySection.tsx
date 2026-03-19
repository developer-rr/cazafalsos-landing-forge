import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Shield, Lock, Server } from "lucide-react";

export function SecuritySection() {
  const { tr, lang } = useLang();

  const items = [
    { icon: Shield, title: { es: "Cifrado end-to-end", pt: "Criptografia end-to-end" }, desc: { es: "Tus datos viajan y se almacenan cifrados.", pt: "Seus dados trafegam e são armazenados criptografados." } },
    { icon: Lock, title: { es: "Sin acceso a contraseñas", pt: "Sem acesso a senhas" }, desc: { es: "Nunca almacenamos credenciales de Mercado Libre.", pt: "Nunca armazenamos credenciais do Mercado Livre." } },
    { icon: Server, title: { es: "LGPD Compliant", pt: "LGPD Compliant" }, desc: { es: "Cumplimos todas las regulaciones de privacidad.", pt: "Cumprimos todas as regulamentações de privacidade." } },
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-secondary/10 text-secondary rounded-full mb-4">
            {tr("security.tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{tr("security.title")}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="card-surface p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="feature-icon-box bg-secondary/10 mx-auto mb-5">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title[lang]}</h3>
              <p className="text-sm text-muted-foreground">{item.desc[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
