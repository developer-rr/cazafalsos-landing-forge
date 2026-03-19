import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    q: { es: "¿Necesito una marca registrada?", pt: "Preciso de uma marca registrada?" },
    a: { es: "No siempre. Pero contar con una marca registrada puede facilitar ciertas acciones de protección y denuncia.", pt: "Nem sempre. Mas ter uma marca registrada pode facilitar certas ações de proteção e denúncia." },
  },
  {
    q: { es: "¿Es seguro instalar la extensión?", pt: "É seguro instalar a extensão?" },
    a: { es: "CazaFalsos está diseñado para funcionar con un enfoque cuidadoso de privacidad y acceso, evitando permisos innecesarios siempre que sea posible.", pt: "CazaFalsos é projetado para funcionar com uma abordagem cuidadosa de privacidade e acesso, evitando permissões desnecessárias sempre que possível." },
  },
  {
    q: { es: "¿Funciona en todos los países de Mercado Libre?", pt: "Funciona em todos os países do Mercado Livre?" },
    a: { es: "Está pensado para operar en México, Brasil, Argentina, Chile, Colombia y Perú.", pt: "É pensado para operar no México, Brasil, Argentina, Chile, Colômbia e Peru." },
  },
  {
    q: { es: "¿Puedo cancelar en cualquier momento?", pt: "Posso cancelar a qualquer momento?" },
    a: { es: "Sí. La idea es ofrecer una herramienta flexible, sin compromisos rígidos para pequeñas marcas y negocios.", pt: "Sim. A ideia é oferecer uma ferramenta flexível, sem compromissos rígidos para pequenas marcas e negócios." },
  },
];

export function FAQSection() {
  const { lang, tr } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section-padding bg-primary/[0.03]">
      <div className="section-container max-w-3xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary rounded-full mb-4">
            {tr("faq.tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{tr("faq.title")}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{tr("faq.subtitle")}</p>
        </motion.div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq, i) => (
            <motion.div
              key={i}
              className="card-surface overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-bold text-foreground">{faq.q[lang]}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 shrink-0 ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-200 ${openIdx === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.a[lang]}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
