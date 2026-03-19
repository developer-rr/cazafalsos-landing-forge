import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    q: { es: "¿Qué es CazaFalsos?", pt: "O que é CazaFalsos?" },
    a: { es: "CazaFalsos es una extensión de Chrome que detecta automáticamente publicaciones de productos falsificados en Mercado Libre, ayudándote a proteger tu marca y recuperar ventas.", pt: "CazaFalsos é uma extensão do Chrome que detecta automaticamente publicações de produtos falsificados no Mercado Livre, ajudando você a proteger sua marca e recuperar vendas." },
  },
  {
    q: { es: "¿Es gratis?", pt: "É grátis?" },
    a: { es: "Sí, ofrecemos un plan gratuito con 5 búsquedas diarias. Para necesidades más avanzadas, consulta nuestros planes Pro y Enterprise.", pt: "Sim, oferecemos um plano gratuito com 5 buscas diárias. Para necessidades mais avançadas, consulte nossos planos Pro e Enterprise." },
  },
  {
    q: { es: "¿Es seguro usar CazaFalsos?", pt: "É seguro usar o CazaFalsos?" },
    a: { es: "Absolutamente. No accedemos a tus credenciales de Mercado Libre y todos los datos están cifrados end-to-end. Cumplimos con LGPD.", pt: "Absolutamente. Não acessamos suas credenciais do Mercado Livre e todos os dados são criptografados end-to-end. Cumprimos a LGPD." },
  },
  {
    q: { es: "¿En qué países funciona?", pt: "Em quais países funciona?" },
    a: { es: "CazaFalsos funciona en todos los países donde opera Mercado Libre: Argentina, Brasil, México, Colombia, Chile, Uruguay y más.", pt: "CazaFalsos funciona em todos os países onde o Mercado Livre opera: Argentina, Brasil, México, Colômbia, Chile, Uruguai e mais." },
  },
];

export function FAQSection() {
  const { lang } = useLang();
  const { tr } = useLang();
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
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.a[lang]}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
