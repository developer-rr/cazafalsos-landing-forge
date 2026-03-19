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
  "cta.coming.note": { es: "Próximamente en Chrome Web Store", pt: "Em breve na Chrome Web Store" },
  "cta.join": { es: "Unirme a la lista", pt: "Entrar na lista" },
  "cta.send": { es: "Enviar consulta", pt: "Enviar consulta" },

  // Hero
  "hero.title": {
    es: "Detecta falsificaciones en Mercado Libre antes de que dañen tu marca.",
    pt: "Detecte falsificações no Mercado Livre antes que prejudiquem sua marca.",
  },
  "hero.subtitle": {
    es: "CazaFalsos te ayuda a encontrar publicaciones sospechosas, recopilar pruebas y preparar denuncias de forma simple.",
    pt: "CazaFalsos te ajuda a encontrar publicações suspeitas, coletar provas e preparar denúncias de forma simples.",
  },
  "hero.badge": { es: "Extensión de Chrome", pt: "Extensão do Chrome" },

  // Trust bar
  "trust.countries": { es: "Países LATAM cubiertos", pt: "Países LATAM cobertos" },
  "trust.hash": { es: "Pruebas con hash verificable", pt: "Provas com hash verificável" },
  "trust.reports": { es: "Denuncias preparadas automáticamente", pt: "Denúncias preparadas automaticamente" },
  "trust.pymes": { es: "Pensado para marcas y pymes", pt: "Pensado para marcas e PMEs" },

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
  "features.subtitle": {
    es: "Detecta falsificaciones, recopila pruebas y prepara denuncias en una sola herramienta.",
    pt: "Detecte falsificações, colete provas e prepare denúncias em uma única ferramenta.",
  },
  "features.search.title": { es: "Búsqueda inteligente", pt: "Busca inteligente" },
  "features.search.desc": {
    es: "Detecta coincidencias exactas, variaciones engañosas y jerga local de falsificadores.",
    pt: "Detecta correspondências exatas, variações enganosas e gírias locais de falsificadores.",
  },
  "features.coverage.title": { es: "Cobertura en 6 países", pt: "Cobertura em 6 países" },
  "features.coverage.desc": {
    es: "Funciona en Mercado Libre México, Brasil, Argentina, Chile, Colombia y Perú.",
    pt: "Funciona no Mercado Livre México, Brasil, Argentina, Chile, Colômbia e Peru.",
  },
  "features.evidence.title": { es: "Pruebas sólidas", pt: "Provas sólidas" },
  "features.evidence.desc": {
    es: "Capturas, timestamps y hash SHA-256 para documentar cada caso.",
    pt: "Capturas, timestamps e hash SHA-256 para documentar cada caso.",
  },
  "features.complaints.title": { es: "Denuncias preparadas", pt: "Denúncias preparadas" },
  "features.complaints.desc": {
    es: "Genera denuncias listas para Brand Protection Program / PPPI.",
    pt: "Gera denúncias prontas para Brand Protection Program / PPPI.",
  },
  "features.pricing.title": { es: "Anomalías de precio", pt: "Anomalias de preço" },
  "features.pricing.desc": {
    es: "Detecta publicaciones sospechosamente baratas bajo tu marca.",
    pt: "Detecta publicações suspeitamente baratas sob sua marca.",
  },
  "features.images.title": { es: "Análisis de imágenes", pt: "Análise de imagens" },
  "features.images.desc": {
    es: "Encuentra productos visualmente similares incluso si modificaron la foto.",
    pt: "Encontra produtos visualmente similares mesmo se modificaram a foto.",
  },

  // Comparison
  "comparison.tag": { es: "Comparación", pt: "Comparação" },
  "comp.title": {
    es: "Una opción más inteligente que hacerlo a mano",
    pt: "Uma opção mais inteligente do que fazer manualmente",
  },
  "comp.subtitle": {
    es: "Comparado con la búsqueda manual y las herramientas enterprise, CazaFalsos ofrece el mejor equilibrio entre simplicidad, precio y protección real para marcas y pymes.",
    pt: "Comparado com a busca manual e ferramentas enterprise, CazaFalsos oferece o melhor equilíbrio entre simplicidade, preço e proteção real para marcas e PMEs.",
  },
  "comp.col.manual": { es: "Manual", pt: "Manual" },
  "comp.recommended": { es: "Recomendado", pt: "Recomendado" },
  "comp.price": { es: "Precio", pt: "Preço" },
  "comp.price.manual": { es: "Bajo, pero consume tiempo", pt: "Baixo, mas consome tempo" },
  "comp.price.caza": { es: "Accesible", pt: "Acessível" },
  "comp.price.enterprise": { es: "Alto", pt: "Alto" },
  "comp.time": { es: "Tiempo necesario", pt: "Tempo necessário" },
  "comp.time.manual": { es: "Alto", pt: "Alto" },
  "comp.time.caza": { es: "Bajo", pt: "Baixo" },
  "comp.time.enterprise": { es: "Medio", pt: "Médio" },
  "comp.coverage": { es: "Cobertura Mercado Libre", pt: "Cobertura Mercado Livre" },
  "comp.coverage.manual": { es: "Limitada", pt: "Limitada" },
  "comp.coverage.caza": { es: "6 países LATAM", pt: "6 países LATAM" },
  "comp.coverage.enterprise": { es: "Variable", pt: "Variável" },
  "comp.hash": { es: "Pruebas con hash", pt: "Provas com hash" },
  "comp.complaints": { es: "Denuncias preparadas", pt: "Denúncias preparadas" },
  "comp.sometimes": { es: "A veces", pt: "Às vezes" },
  "comp.slang": { es: "Detección de jerga local", pt: "Detecção de gírias locais" },
  "comp.slang.enterprise": { es: "Limitada", pt: "Limitada" },
  "comp.small": { es: "Pensado para pequeños negocios", pt: "Pensado para pequenos negócios" },
  "comp.small.manual": { es: "Parcialmente", pt: "Parcialmente" },

  // Pricing
  "pricing.tag": { es: "Precios", pt: "Preços" },
  "pricing.title": {
    es: "Elige el plan que mejor se adapta a tu marca",
    pt: "Escolha o plano que melhor se adapta à sua marca",
  },
  "pricing.subtitle": {
    es: "Empieza gratis y escala cuando necesites más monitoreo, más marcas y más automatización.",
    pt: "Comece grátis e escale quando precisar de mais monitoramento, mais marcas e mais automação.",
  },
  "pricing.free": { es: "Gratis", pt: "Grátis" },
  "pricing.inicial": { es: "Inicial", pt: "Inicial" },
  "pricing.pro": { es: "PRO", pt: "PRO" },
  "pricing.experto": { es: "Experto", pt: "Experto" },
  "pricing.mo": { es: "/mes", pt: "/mês" },
  "pricing.popular": { es: "Más popular", pt: "Mais popular" },

  // Testimonials
  "testimonials.tag": { es: "Testimonios", pt: "Depoimentos" },
  "testimonials.title": {
    es: "Marcas que ya protegen mejor su negocio",
    pt: "Marcas que já protegem melhor seu negócio",
  },
  "testimonials.subtitle": {
    es: "CazaFalsos está pensado para marcas y pymes que venden en Mercado Libre y necesitan actuar más rápido frente a publicaciones sospechosas.",
    pt: "CazaFalsos é pensado para marcas e PMEs que vendem no Mercado Livre e precisam agir mais rápido frente a publicações suspeitas.",
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
    es: "Empieza a proteger tu marca en Mercado Libre hoy mismo.",
    pt: "Comece a proteger sua marca no Mercado Livre hoje mesmo.",
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
