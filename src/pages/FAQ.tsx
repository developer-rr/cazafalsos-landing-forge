import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InstallButton } from "@/components/InstallButton";
import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";

type Lang = "es" | "pt";

interface FaqItem {
  q: Record<Lang, string>;
  a: Record<Lang, string>;
}

interface FaqCategory {
  title: Record<Lang, string>;
  items: FaqItem[];
}

const FAQ_DATA: FaqCategory[] = [
  {
    title: { es: "Sobre el producto", pt: "Sobre o produto" },
    items: [
      {
        q: { es: "¿Qué es CazaFalsos?", pt: "O que é CazaFalsos?" },
        a: { es: "CazaFalsos es una extensión de Chrome diseñada para ayudar a marcas y pymes a detectar publicaciones sospechosas en Mercado Libre, recopilar pruebas documentadas y preparar denuncias de forma más eficiente.", pt: "CazaFalsos é uma extensão do Chrome projetada para ajudar marcas e PMEs a detectar publicações suspeitas no Mercado Livre, coletar provas documentadas e preparar denúncias de forma mais eficiente." },
      },
      {
        q: { es: "¿Para quién está pensado?", pt: "Para quem é pensado?" },
        a: { es: "Para marcas, pequeños negocios y emprendedores que venden en Mercado Libre y necesitan proteger sus productos frente a publicaciones sospechosas, sin contar con grandes equipos legales.", pt: "Para marcas, pequenos negócios e empreendedores que vendem no Mercado Livre e precisam proteger seus produtos frente a publicações suspeitas, sem contar com grandes equipes jurídicas." },
      },
      {
        q: { es: "¿Funciona solo para Mercado Libre?", pt: "Funciona só para o Mercado Livre?" },
        a: { es: "Sí. CazaFalsos está diseñado específicamente para Mercado Libre en México, Brasil, Argentina, Chile, Colombia y Perú.", pt: "Sim. CazaFalsos é projetado especificamente para o Mercado Livre no México, Brasil, Argentina, Chile, Colômbia e Peru." },
      },
      {
        q: { es: "¿Necesito conocimientos técnicos?", pt: "Preciso de conhecimentos técnicos?" },
        a: { es: "No. La extensión está pensada para ser intuitiva. Solo necesitas instalarla en Chrome y seguir las instrucciones iniciales.", pt: "Não. A extensão é pensada para ser intuitiva. Basta instalá-la no Chrome e seguir as instruções iniciais." },
      },
      {
        q: { es: "¿Puedo usarlo con una sola marca?", pt: "Posso usar com uma única marca?" },
        a: { es: "Sí. El plan gratuito permite monitorear 1 marca. Si necesitas más, puedes escalar a un plan superior.", pt: "Sim. O plano gratuito permite monitorar 1 marca. Se precisar de mais, pode escalar para um plano superior." },
      },
    ],
  },
  {
    title: { es: "Seguridad y privacidad", pt: "Segurança e privacidade" },
    items: [
      {
        q: { es: "¿Es seguro instalar la extensión?", pt: "É seguro instalar a extensão?" },
        a: { es: "CazaFalsos está diseñado con un enfoque cuidadoso de privacidad, evitando permisos innecesarios siempre que sea posible. No accede a datos personales ni financieros de tu cuenta.", pt: "CazaFalsos é projetado com foco cuidadoso em privacidade, evitando permissões desnecessárias sempre que possível. Não acessa dados pessoais nem financeiros da sua conta." },
      },
      {
        q: { es: "¿Qué datos recopila?", pt: "Que dados coleta?" },
        a: { es: "La extensión recopila solo la información necesaria para funcionar: datos de publicaciones públicas de Mercado Libre que coincidan con tus criterios de búsqueda. No almacena contraseñas ni datos de pago.", pt: "A extensão coleta apenas as informações necessárias para funcionar: dados de publicações públicas do Mercado Livre que coincidam com seus critérios de busca. Não armazena senhas nem dados de pagamento." },
      },
      {
        q: { es: "¿Necesita acceso sensible a mi cuenta?", pt: "Precisa de acesso sensível à minha conta?" },
        a: { es: "No. CazaFalsos trabaja con información pública de las publicaciones de Mercado Libre. No requiere credenciales de tu cuenta de vendedor.", pt: "Não. CazaFalsos trabalha com informações públicas das publicações do Mercado Livre. Não requer credenciais da sua conta de vendedor." },
      },
    ],
  },
  {
    title: { es: "Precios y pagos", pt: "Preços e pagamentos" },
    items: [
      {
        q: { es: "¿Existe un plan gratis?", pt: "Existe um plano grátis?" },
        a: { es: "Sí. El plan Gratis incluye 1 marca, 50 escaneos al mes y búsqueda básica, sin necesidad de tarjeta de crédito.", pt: "Sim. O plano Grátis inclui 1 marca, 50 escaneamentos por mês e busca básica, sem necessidade de cartão de crédito." },
      },
      {
        q: { es: "¿Puedo cambiar de plan?", pt: "Posso mudar de plano?" },
        a: { es: "Sí. Puedes subir o bajar de plan en cualquier momento. El cambio se aplica en el siguiente ciclo de facturación.", pt: "Sim. Pode subir ou descer de plano a qualquer momento. A mudança se aplica no próximo ciclo de faturamento." },
      },
      {
        q: { es: "¿Puedo cancelar cuando quiera?", pt: "Posso cancelar quando quiser?" },
        a: { es: "Sí. No hay contratos ni permanencia mínima. Puedes cancelar desde tu cuenta en cualquier momento.", pt: "Sim. Não há contratos nem permanência mínima. Pode cancelar pela sua conta a qualquer momento." },
      },
      {
        q: { es: "¿Tienen garantía de reembolso?", pt: "Têm garantia de reembolso?" },
        a: { es: "Sí. Ofrecemos una garantía de reembolso de 14 días si no estás satisfecho con el servicio.", pt: "Sim. Oferecemos garantia de reembolso de 14 dias se não estiver satisfeito com o serviço." },
      },
      {
        q: { es: "¿Habrá descuento anual?", pt: "Haverá desconto anual?" },
        a: { es: "Sí. El pago anual incluye 2 meses gratis.", pt: "Sim. O pagamento anual inclui 2 meses grátis." },
      },
    ],
  },
  {
    title: { es: "Uso", pt: "Uso" },
    items: [
      {
        q: { es: "¿Cómo detecta publicaciones sospechosas?", pt: "Como detecta publicações suspeitas?" },
        a: { es: "Busca coincidencias exactas con tu marca, variaciones engañosas, jerga local de falsificadores y anomalías de precio. También puede analizar imágenes visualmente similares.", pt: "Busca correspondências exatas com sua marca, variações enganosas, gírias locais de falsificadores e anomalias de preço. Também pode analisar imagens visualmente similares." },
      },
      {
        q: { es: "¿Funciona en todos los países de Mercado Libre?", pt: "Funciona em todos os países do Mercado Livre?" },
        a: { es: "Está pensado para operar en México, Brasil, Argentina, Chile, Colombia y Perú.", pt: "É pensado para operar no México, Brasil, Argentina, Chile, Colômbia e Peru." },
      },
      {
        q: { es: "¿Necesito una marca registrada?", pt: "Preciso de marca registrada?" },
        a: { es: "No siempre. Pero contar con una marca registrada puede facilitar ciertas acciones de protección y denuncia.", pt: "Nem sempre. Mas ter uma marca registrada pode facilitar certas ações de proteção e denúncia." },
      },
      {
        q: { es: "¿Puedo generar denuncias listas para enviar?", pt: "Posso gerar denúncias prontas para enviar?" },
        a: { es: "Sí. CazaFalsos genera plantillas de denuncia pre-llenadas pensadas para procesos como el Brand Protection Program (BPP) y PPPI.", pt: "Sim. CazaFalsos gera modelos de denúncia pré-preenchidos pensados para processos como o Brand Protection Program (BPP) e PPPI." },
      },
    ],
  },
  {
    title: { es: "Soporte", pt: "Suporte" },
    items: [
      {
        q: { es: "¿Cómo contacto con soporte?", pt: "Como entro em contato com suporte?" },
        a: { es: "Puedes escribirnos a support@cazafalsos.com o usar el formulario de contacto en nuestra web. Respondemos en menos de 24 horas hábiles.", pt: "Pode nos escrever em support@cazafalsos.com ou usar o formulário de contato em nosso site. Respondemos em menos de 24 horas úteis." },
      },
      {
        q: { es: "¿En cuánto tiempo responden?", pt: "Em quanto tempo respondem?" },
        a: { es: "Nos comprometemos a responder en menos de 24 horas hábiles. Los usuarios del plan Experto tienen acceso a soporte prioritario.", pt: "Nos comprometemos a responder em menos de 24 horas úteis. Usuários do plano Experto têm acesso a suporte prioritário." },
      },
    ],
  },
];

const FAQPage = () => {
  const { tr, lang } = useLang();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const seoTitle = lang === "es"
    ? "Preguntas Frecuentes — CazaFalsos | Protección de Marca"
    : "Perguntas Frequentes — CazaFalsos | Proteção de Marca";
  const seoDesc = lang === "es"
    ? "Resolvemos tus dudas sobre CazaFalsos: producto, seguridad, precios, uso y soporte para proteger tu marca en Mercado Libre."
    : "Respondemos suas dúvidas sobre CazaFalsos: produto, segurança, preços, uso e suporte para proteger sua marca no Mercado Livre.";

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
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
                {lang === "es" ? "Preguntas frecuentes" : "Perguntas frequentes"}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {lang === "es"
                  ? "Todo lo que necesitas saber antes de empezar con CazaFalsos."
                  : "Tudo o que você precisa saber antes de começar com CazaFalsos."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="section-padding">
          <div className="section-container max-w-3xl space-y-12">
            {FAQ_DATA.map((category, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.05 }}
              >
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  {category.title[lang]}
                </h2>
                <div className="space-y-2">
                  {category.items.map((item, ii) => {
                    const key = `${ci}-${ii}`;
                    const isOpen = !!openItems[key];
                    return (
                      <div key={key} className="card-surface overflow-hidden">
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full flex items-center justify-between p-5 text-left"
                        >
                          <span className="font-semibold text-foreground text-sm pr-4">{item.q[lang]}</span>
                          <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                          <div className="overflow-hidden">
                            <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a[lang]}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding">
          <div className="section-container">
            <motion.div
              className="rounded-[var(--radius-outer)] bg-gradient-to-br from-primary to-primary/80 p-10 sm:p-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <InstallButton size="lg" className="bg-accent hover:shadow-[0_0_20px_rgba(255,109,0,0.4)]" />
              <p className="mt-4 text-xs text-primary-foreground/50 italic">{tr("cta.coming.note")}</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
