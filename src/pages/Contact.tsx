import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactPage = () => {
  const { tr } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(tr("cta.coming"));
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-container section-padding">
        <motion.div className="max-w-lg mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">{tr("page.contact.title")}</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">{tr("page.contact.name")}</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-muted border border-border rounded-inner text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">{tr("page.contact.email")}</label>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-muted border border-border rounded-inner text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">{tr("page.contact.message")}</label>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-muted border border-border rounded-inner text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
            </div>
            <button type="submit" className="w-full px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-inner transition-all hover:scale-[1.02] active:scale-95">
              {tr("cta.send")}
            </button>
          </form>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
