import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";

export function CookieConsent() {
  const { tr } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-16 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 
      card-surface p-5 animate-fade-up">
      <p className="text-sm text-muted-foreground leading-relaxed">
        {tr("cookie.text")}{" "}
        <Link to="/legal/cookies" className="text-primary hover:underline font-medium">
          {tr("cookie.policy")}
        </Link>.
      </p>
      <button
        onClick={() => { localStorage.setItem("cookie-consent", "true"); setShow(false); }}
        className="mt-3 px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-inner
          transition-all hover:scale-[1.02] active:scale-95"
      >
        {tr("cookie.accept")}
      </button>
    </div>
  );
}
