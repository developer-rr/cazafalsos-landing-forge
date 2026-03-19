import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "pt";

type Translations = Record<string, Record<Lang, string>>;

export const t: Translations = {
  // Nav
  "nav.inicio": { es: "Inicio", pt: "Início" },
  "nav.caracteristicas": { es: "Características", pt: "Características" },
  "nav.precios": { es: "Precios", pt: "Preços" },
  "nav.comparacion": { es: "Comparación", pt: "Comparação" },
  "nav.nosotros": { es: "Nosotros", pt: "Sobre nós" },
  "nav.faq": { es: "FAQ", pt: "FAQ" },
  "nav.blog": { es: "Blog", pt: "Blog" },
  "nav.contacto": { es: "Contacto", pt: "Contato" },
  
  // CTA
  "cta.install": { es: "Instalar Gratis", pt: "Instalar Grátis" },
  "cta.coming": { es: "Próximamente", pt: "Em breve" },
  "cta.join": { es: "Unirme a la lista", pt: "Entrar na lista" },
  "cta.send": { es: "Enviar consulta", pt: "Enviar consulta" },

  // Hero
  "hero.title": {
    es: "Tu marca es real. Asegúrate de que sus ventas también lo sean.",
    pt: "Sua marca é real. Garanta que suas vendas também sejam.",
  },
  "hero.subtitle": {
    es: "Detecta falsificaciones en Mercado Libre automáticamente con nuestra extensión de Chrome. Protege tu reputación y recupera tus ventas.",
    pt: "Detecte falsificações no Mercado Livre automaticamente com nossa extensão do Chrome. Proteja sua reputação e recupere suas vendas.",
  },
  "hero.badge": { es: "Extensión de Chrome", pt: "Extensão do Chrome" },

  // Trust bar
  "trust.brands": { es: "Marcas protegidas", pt: "Marcas protegidas" },
  "trust.listings": { es: "Listados analizados", pt: "Anúncios analisados" },
  "trust.fakes": { es: "Falsificaciones detectadas", pt: "Falsificações detectadas" },
  "trust.countries": { es: "Países cubiertos", pt: "Países cobertos" },

  // Problem
  "problem.tag": { es: "El problema", pt: "O problema" },
  "problem.title": {
    es: "Las falsificaciones están robando tus ventas",
    pt: "As falsificações estão roubando suas vendas",
  },
  "problem.desc": {
    es: "Cada día, miles de productos falsificados se publican en Mercado Libre. Los vendedores ilegítimos copian tus imágenes, descripciones y hasta el nombre de tu marca, desviando tus clientes y dañando tu reputación.",
    pt: "Todos os dias, milhares de produtos falsificados são publicados no Mercado Livre. Vendedores ilegítimos copiam suas imagens, descrições e até o nome da sua marca, desviando seus clientes e prejudicando sua reputação.",
  },

  // Solution
  "solution.tag": { es: "La solución", pt: "A solução" },
  "solution.title": {
    es: "Tu cazador de falsificaciones automático",
    pt: "Seu caçador de falsificações automático",
  },
  "solution.desc": {
    es: "CazaFalsos escanea Mercado Libre en tiempo real, identificando publicaciones sospechosas que imitan tus productos. Recibe alertas instantáneas y actúa antes de perder más ventas.",
    pt: "CazaFalsos escaneia o Mercado Livre em tempo real, identificando publicações suspeitas que imitam seus produtos. Receba alertas instantâneos e aja antes de perder mais vendas.",
  },

  // Features
  "features.tag": { es: "Características", pt: "Características" },
  "features.title": {
    es: "Todo lo que necesitas para proteger tu marca",
    pt: "Tudo que você precisa para proteger sua marca",
  },
  "features.auto.title": { es: "Detección Automática", pt: "Detecção Automática" },
  "features.auto.desc": {
    es: "Identificamos patrones de precios y reputación sospechosa en segundos.",
    pt: "Identificamos padrões de preços e reputação suspeita em segundos.",
  },
  "features.alerts.title": { es: "Alertas en Tiempo Real", pt: "Alertas em Tempo Real" },
  "features.alerts.desc": {
    es: "Recibe notificaciones instantáneas cuando se detecta una falsificación.",
    pt: "Receba notificações instantâneas quando uma falsificação é detectada.",
  },
  "features.reports.title": { es: "Reportes Detallados", pt: "Relatórios Detalhados" },
  "features.reports.desc": {
    es: "Genera informes completos para presentar ante Mercado Libre.",
    pt: "Gere relatórios completos para apresentar ao Mercado Livre.",
  },
  "features.monitor.title": { es: "Monitoreo Continuo", pt: "Monitoramento Contínuo" },
  "features.monitor.desc": {
    es: "Vigilancia 24/7 de nuevas publicaciones sospechosas.",
    pt: "Vigilância 24/7 de novas publicações suspeitas.",
  },
  "features.ai.title": { es: "IA Avanzada", pt: "IA Avançada" },
  "features.ai.desc": {
    es: "Algoritmos de machine learning que mejoran con cada detección.",
    pt: "Algoritmos de machine learning que melhoram a cada detecção.",
  },
  "features.legal.title": { es: "Soporte Legal", pt: "Suporte Legal" },
  "features.legal.desc": {
    es: "Guías y plantillas para tomar acción legal contra falsificadores.",
    pt: "Guias e modelos para tomar ação legal contra falsificadores.",
  },

  // Comparison
  "comparison.tag": { es: "Comparación", pt: "Comparação" },
  "comparison.title": {
    es: "Búsqueda manual vs. CazaFalsos",
    pt: "Busca manual vs. CazaFalsos",
  },
  "comparison.manual": { es: "Búsqueda Manual", pt: "Busca Manual" },
  "comparison.cazafalsos": { es: "CazaFalsos", pt: "CazaFalsos" },
  "comparison.time": { es: "Tiempo de búsqueda", pt: "Tempo de busca" },
  "comparison.time.manual": { es: "4-6 horas/día", pt: "4-6 horas/dia" },
  "comparison.time.caza": { es: "Automático 24/7", pt: "Automático 24/7" },
  "comparison.accuracy": { es: "Precisión", pt: "Precisão" },
  "comparison.accuracy.manual": { es: "~40% de detección", pt: "~40% de detecção" },
  "comparison.accuracy.caza": { es: "95%+ de detección", pt: "95%+ de detecção" },
  "comparison.cost": { es: "Costo operativo", pt: "Custo operativo" },
  "comparison.cost.manual": { es: "Alto (personal dedicado)", pt: "Alto (pessoal dedicado)" },
  "comparison.cost.caza": { es: "Desde $0/mes", pt: "Desde $0/mês" },
  "comparison.reports2": { es: "Reportes", pt: "Relatórios" },
  "comparison.reports.manual": { es: "Manuales, inconsistentes", pt: "Manuais, inconsistentes" },
  "comparison.reports.caza": { es: "Automáticos, detallados", pt: "Automáticos, detalhados" },

  // Pricing
  "pricing.tag": { es: "Precios", pt: "Preços" },
  "pricing.title": {
    es: "Planes para cada etapa de tu marca",
    pt: "Planos para cada etapa da sua marca",
  },
  "pricing.free": { es: "Gratis", pt: "Grátis" },
  "pricing.pro": { es: "Pro", pt: "Pro" },
  "pricing.enterprise": { es: "Enterprise", pt: "Enterprise" },
  "pricing.mo": { es: "/mes", pt: "/mês" },
  "pricing.contact": { es: "Contactar ventas", pt: "Contatar vendas" },
  "pricing.popular": { es: "Más popular", pt: "Mais popular" },

  // Testimonials
  "testimonials.tag": { es: "Testimonios", pt: "Depoimentos" },
  "testimonials.title": {
    es: "Lo que dicen nuestros usuarios",
    pt: "O que dizem nossos usuários",
  },

  // Security
  "security.tag": { es: "Seguridad", pt: "Segurança" },
  "security.title": {
    es: "Tu información está segura con nosotros",
    pt: "Sua informação está segura conosco",
  },

  // FAQ
  "faq.tag": { es: "Preguntas Frecuentes", pt: "Perguntas Frequentes" },
  "faq.title": {
    es: "¿Tienes dudas? Tenemos respuestas",
    pt: "Tem dúvidas? Temos respostas",
  },

  // Final CTA
  "final.title": {
    es: "Protege tu marca hoy",
    pt: "Proteja sua marca hoje",
  },
  "final.desc": {
    es: "Únete a cientos de marcas que ya protegen sus ventas en Mercado Libre.",
    pt: "Junte-se a centenas de marcas que já protegem suas vendas no Mercado Livre.",
  },

  // Sticky CTA
  "sticky.text": { es: "Protege tu marca hoy", pt: "Proteja sua marca hoje" },

  // Cookie
  "cookie.text": {
    es: "Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra",
    pt: "Usamos cookies para melhorar sua experiência. Ao continuar, você aceita nossa",
  },
  "cookie.policy": { es: "política de cookies", pt: "política de cookies" },
  "cookie.accept": { es: "Aceptar", pt: "Aceitar" },

  // Exit intent
  "exit.title": { es: "¿Quieres ser el primero?", pt: "Quer ser o primeiro?" },
  "exit.desc": {
    es: "Únete a la lista de espera y obtén 3 meses de Plan Pro gratis.",
    pt: "Entre na lista de espera e ganhe 3 meses de Plano Pro grátis.",
  },
  "exit.email": { es: "Tu email", pt: "Seu email" },
  "exit.close": { es: "No, gracias", pt: "Não, obrigado" },

  // Newsletter
  "newsletter.title": { es: "Mantente informado", pt: "Fique informado" },
  "newsletter.desc": {
    es: "Recibe novedades y tips de protección de marca.",
    pt: "Receba novidades e dicas de proteção de marca.",
  },
  "newsletter.placeholder": { es: "Tu email", pt: "Seu email" },

  // Footer
  "footer.brand": {
    es: "Protegiendo el ecosistema de e-commerce en LATAM.",
    pt: "Protegendo o ecossistema de e-commerce na LATAM.",
  },
  "footer.product": { es: "Producto", pt: "Produto" },
  "footer.company": { es: "Compañía", pt: "Empresa" },
  "footer.legal": { es: "Legal", pt: "Legal" },
  "footer.privacy": { es: "Privacidad", pt: "Privacidade" },
  "footer.terms": { es: "Términos", pt: "Termos" },
  "footer.cookies": { es: "Cookies", pt: "Cookies" },
  "footer.refunds": { es: "Reembolsos", pt: "Reembolsos" },
  "footer.guide": { es: "Guía de Instalación", pt: "Guia de Instalação" },
  "footer.lgpd": { es: "LGPD Compliant", pt: "LGPD Compliant" },

  // Pages
  "page.features.title": {
    es: "Características de CazaFalsos",
    pt: "Características do CazaFalsos",
  },
  "page.pricing.title": { es: "Planes y Precios", pt: "Planos e Preços" },
  "page.comparison.title": { es: "Comparación", pt: "Comparação" },
  "page.about.title": { es: "Sobre Nosotros", pt: "Sobre Nós" },
  "page.blog.title": { es: "Blog", pt: "Blog" },
  "page.blog.coming": { es: "Contenido próximamente", pt: "Conteúdo em breve" },
  "page.faq.title": { es: "Preguntas Frecuentes", pt: "Perguntas Frequentes" },
  "page.contact.title": { es: "Contacto", pt: "Contato" },
  "page.contact.name": { es: "Nombre", pt: "Nome" },
  "page.contact.email": { es: "Email", pt: "Email" },
  "page.contact.message": { es: "Mensaje", pt: "Mensagem" },
};

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "es",
  setLang: () => {},
  tr: (key) => key,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const tr = (key: string) => t[key]?.[lang] ?? key;
  return (
    <LangContext.Provider value={{ lang, setLang, tr }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
