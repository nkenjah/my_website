import { motion } from "framer-motion";
import { Code2, Palette, Network } from "lucide-react";

const stats = [
  { label: "Years Coding", value: "5+" },
  { label: "Projects Shipped", value: "30+" },
  { label: "Tech Stacks", value: "12+" },
];

const pillars = [
  {
    icon: Code2,
    title: "Engineer",
    text: "Architecting scalable systems with clean, maintainable code.",
  },
  {
    icon: Palette,
    title: "Designer",
    text: "Translating ideas into pixel-precise, emotive interfaces.",
  },
  {
    icon: Network,
    title: "Networker",
    text: "Designing resilient, secure, high-performance infrastructure.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <p className="font-mono text-xs tracking-widest text-primary mb-4">
              / 01 — ABOUT
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Building the
              <br />
              <span className="text-gradient">future</span>, one
              <br />
              line at a time.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-medium">Emanuel Nkenjah</span> — a
              multidisciplinary creator working across software engineering, network
              architecture, and visual design. I build production-grade web platforms
              with Laravel and React, design brand systems that resonate, and engineer
              network solutions that simply work.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach blends the rigor of engineering with the curiosity of a
              designer. Every interface I ship is fast, accessible, and crafted with
              intention — because details are what separate good from unforgettable.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-4 text-center"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-mono tracking-wider">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative glass rounded-2xl p-7 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-primary/20 border border-primary/30 flex items-center justify-center mb-5 group-hover:shadow-glow-primary transition-shadow">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
