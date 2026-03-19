import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";

const LEGAL_CONTENT: Record<string, { title: string; body: string }> = {
  privacidad: {
    title: "Política de Privacidad",
    body: "En CazaFalsos, nos comprometemos a proteger tu privacidad. Recopilamos únicamente los datos necesarios para el funcionamiento de nuestra extensión de Chrome. No compartimos tu información personal con terceros sin tu consentimiento explícito. Cumplimos con la LGPD (Lei Geral de Proteção de Dados) y todas las regulaciones de privacidad aplicables en Latinoamérica. Para más información, contacta a vitvetportugal@gmail.com.",
  },
  terminos: {
    title: "Términos de Servicio",
    body: "Al usar CazaFalsos, aceptas estos términos de servicio. CazaFalsos es una herramienta de detección de productos falsificados en Mercado Libre. No garantizamos la eliminación de publicaciones falsas, ya que esto depende de las políticas de la plataforma. Nos reservamos el derecho de modificar o descontinuar el servicio. Los planes de pago se facturan mensualmente y pueden cancelarse en cualquier momento.",
  },
  cookies: {
    title: "Política de Cookies",
    body: "CazaFalsos utiliza cookies esenciales para el funcionamiento del sitio web y cookies de análisis para mejorar la experiencia del usuario. Las cookies esenciales son necesarias para la navegación y funciones básicas. Las cookies de análisis nos ayudan a entender cómo interactúas con nuestro sitio. Puedes gestionar tus preferencias de cookies en la configuración de tu navegador.",
  },
  reembolsos: {
    title: "Política de Reembolsos",
    body: "Ofrecemos reembolsos completos dentro de los primeros 14 días de suscripción a cualquier plan de pago. Para solicitar un reembolso, contacta a nuestro equipo de soporte en vitvetportugal@gmail.com con tu número de cuenta y motivo de cancelación. Los reembolsos se procesan dentro de 5-10 días hábiles.",
  },
};

const LegalPage = () => {
  const { slug } = useParams();
  const content = LEGAL_CONTENT[slug || ""];

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="section-container section-padding text-center">
          <h1 className="text-4xl font-bold text-foreground">404</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">{content.title}</h1>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{content.body}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
