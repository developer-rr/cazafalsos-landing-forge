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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border px-4 py-2.5 animate-fade-up">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-muted-foreground">
          {tr("cookie.text")}{" "}
          <Link to="/legal/cookies" className="text-primary hover:underline font-medium">
            {tr("cookie.policy")}
          </Link>.
        </p>
        <button
          onClick={() => { localStorage.setItem("cookie-consent", "true"); setShow(false); }}
          className="shrink-0 px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-inner
            transition-all hover:scale-[1.02] active:scale-95"
        >
          {tr("cookie.accept")}
        </button>
      </div>
    </div>
  );
}
