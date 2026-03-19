import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { InstallButton } from "./InstallButton";

export function StickyCTA() {
  const { tr } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 glass-header border-t border-border py-3 animate-fade-up">
      <div className="section-container flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-3">
          <span className="text-lg font-bold text-foreground">
            Caza<span className="text-primary">Falsos</span>
          </span>
          <span className="text-sm text-muted-foreground">{tr("sticky.text")}</span>
        </div>
        <InstallButton />
      </div>
    </div>
  );
}
