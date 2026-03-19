import { useLang, Lang } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="relative flex items-center bg-muted rounded-full p-0.5">
      <div
        className="absolute h-[calc(100%-4px)] w-[calc(50%-2px)] bg-primary rounded-full transition-transform duration-200"
        style={{ transform: lang === "es" ? "translateX(2px)" : "translateX(calc(100% + 2px))" }}
      />
      {(["es", "pt"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`relative z-10 px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors duration-200
            ${lang === l ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
