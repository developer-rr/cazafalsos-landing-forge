import { CHROME_STORE_URL } from "@/lib/constants";
import { useLang } from "@/lib/i18n";
import { toast } from "sonner";

interface InstallButtonProps {
  size?: "default" | "lg";
  className?: string;
}

export function InstallButton({ size = "default", className = "" }: InstallButtonProps) {
  const { tr } = useLang();

  const handleClick = () => {
    if (CHROME_STORE_URL) {
      window.open(CHROME_STORE_URL, "_blank");
    } else {
      toast(tr("cta.coming"), {
        description: "CazaFalsos",
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative inline-flex items-center justify-center font-semibold 
        bg-primary text-primary-foreground rounded-outer
        transition-all duration-300 hover:scale-[1.02] active:scale-95
        hover:shadow-[var(--shadow-glow)]
        ${size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm"}
        ${className}`}
    >
      <span>{tr("cta.install")}</span>
      {!CHROME_STORE_URL && (
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 
          transition-transform duration-200 bg-accent text-accent-foreground
          text-[10px] uppercase tracking-widest px-2 py-1 rounded-md whitespace-nowrap font-bold">
          {tr("cta.coming")}
        </span>
      )}
    </button>
  );
}
