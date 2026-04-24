import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const items = [
  {
    quote:
      "Emanuel delivered our platform ahead of schedule with zero technical debt. The level of polish is unmatched.",
    name: "A. Mwambene",
    role: "Founder, FinTech Startup",
  },
  {
    quote:
      "Brilliant problem-solver. Our network downtime dropped to almost zero after his redesign.",
    name: "J. Kessy",
    role: "IT Manager, NGO",
  },
  {
    quote:
      "He doesn't just code — he designs experiences. Our users notice the difference every day.",
    name: "L. Massawe",
    role: "Product Lead",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-primary mb-4">
            / 06 — VOICES
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Words from <span className="text-gradient">collaborators</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-3xl p-7 hover:border-primary/40 transition-all"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <blockquote className="text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <figcaption className="pt-4 border-t border-border/50">
                <div className="font-display font-semibold text-sm">{t.name}</div>
                <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mt-1">
                  {t.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
