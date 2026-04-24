import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const roles = ["Software Developer", "Networking Master", "Graphic Designer"];

export const Hero = () => {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 50 : 110;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(current.substring(0, deleting ? text.length - 1 : text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background grid + glows */}
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Orbital rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="relative h-[700px] w-[700px] md:h-[900px] md:w-[900px] opacity-40">
          <div className="absolute inset-0 rounded-full border border-primary/10 animate-spin-slow" />
          <div className="absolute inset-12 rounded-full border border-secondary/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
          <div className="absolute inset-24 rounded-full border border-accent/10 animate-spin-slow" style={{ animationDuration: "40s" }} />
          {/* Orbital dots */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-primary shadow-glow-primary" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-12"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-secondary shadow-glow-secondary" />
          </motion.div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2 mb-8 font-mono text-xs tracking-wider"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-muted-foreground">AVAILABLE FOR NEW PROJECTS</span>
            <span className="h-3 w-px bg-border mx-1" />
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-muted-foreground">{new Date().getFullYear()}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95]"
          >
            <span className="text-shimmer">Emanuel</span>
            <br />
            <span className="text-aurora">Nkenjah</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 h-10 flex items-center justify-center font-mono text-lg sm:text-2xl"
          >
            <span className="text-muted-foreground mr-2">&gt;</span>
            <span className="text-foreground">{text}</span>
            <span className="ml-1 inline-block w-[3px] h-6 sm:h-7 bg-primary animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed"
          >
            Crafting digital experiences at the intersection of code, design, and
            networks — engineering products that feel like they belong to tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground shadow-glow-primary hover:scale-105 transition-transform overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">View Work</span>
              <ArrowDown className="relative h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 font-medium hover:border-primary/50 transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 flex items-center justify-center gap-3"
          >
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#contact" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="group h-11 w-11 rounded-xl glass flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all hover:-translate-y-1"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground tracking-widest"
      >
        <div className="flex flex-col items-center gap-2">
          <span>SCROLL</span>
          <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};
