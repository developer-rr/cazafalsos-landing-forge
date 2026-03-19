import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { InstallButton } from "../InstallButton";
import heroMockup from "@/assets/hero-mockup.png";

export function HeroSection() {
  const { tr } = useLang();

  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="section-container section-padding">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left - 60% */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-widest 
              bg-secondary/10 text-secondary rounded-full">
              {tr("hero.badge")}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
              {tr("hero.title")}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {tr("hero.subtitle")}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <InstallButton size="lg" />
            </div>
          </motion.div>

          {/* Right - 40% */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="relative rounded-outer overflow-hidden shadow-2xl border border-border">
              <img src={heroMockup} alt="CazaFalsos Chrome Extension" className="w-full h-auto" />
              {/* Scan line animation */}
              <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent animate-scan-line opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
