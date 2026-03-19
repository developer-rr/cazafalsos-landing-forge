import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Monitor, ShieldOff, FileCheck } from "lucide-react";

export function SecuritySection() {
  const { tr, lang } = useLang();

  const items = [
    { icon: Monitor, title: { es: "Procesamiento 100% local", pt: "Processamento 100% local" }, desc: { es: "Gran parte del procesamiento ocurre localmente en el navegador, reduciendo dependencias innecesarias y dando más control al usuario.", pt: "Grande parte do processamento ocorre localmente no navegador, reduzindo dependências desnecessárias e dando mais controle ao usuário." } },
    { icon: ShieldOff, title: { es: "Sin acceso innecesario a tu cuenta", pt: "Sem acesso desnecessário à sua conta" }, desc: { es: "La extensión está pensada para funcionar sin pedir acceso sensible que no sea necesario para su propósito.", pt: "A extensão é pensada para funcionar sem pedir acesso sensível que não seja necessário para seu propósito." } },
    { icon: FileCheck, title: { es: "Privacidad y cumplimiento", pt: "Privacidade e conformidade" }, desc: { es: "Arquitectura preparada para prácticas de privacidad claras y cumplimiento aplicable, incluyendo enfoque compatible con LGPD.", pt: "Arquitetura preparada para práticas de privacidade claras e conformidade aplicável, incluindo abordagem compatível com LGPD." } },
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
