import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { toast } from "sonner";

export function ExitIntent() {
  const { tr } = useLang();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !localStorage.getItem("exit-intent-shown")) {
      setShow(true);
      localStorage.setItem("exit-intent-shown", "true");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("🎉 " + tr("cta.coming"));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm animate-fade-up">
      <div className="relative card-surface p-8 sm:p-10 max-w-md w-full">
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>
        <h3 className="text-2xl font-bold text-foreground mb-2">{tr("exit.title")}</h3>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{tr("exit.desc")}</p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={tr("exit.email")}
            className="flex-1 px-4 py-3 text-sm bg-muted border border-border rounded-inner
              text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-5 py-3 text-sm font-semibold bg-accent text-accent-foreground rounded-inner
              transition-all hover:scale-[1.02] active:scale-95"
          >
            {tr("exit.cta")}
          </button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground text-center font-medium">
          {tr("exit.code")}
        </p>
        <button
          onClick={() => setShow(false)}
          className="mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {tr("exit.close")}
        </button>
      </div>
    </div>
  );
}
