import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 95, group: "Frontend" },
  { name: "Laravel", level: 95, group: "Backend" },
  { name: "PHP", level: 92, group: "Backend" },
  { name: "JavaScript", level: 92, group: "Frontend" },
  { name: "Tailwind", level: 95, group: "Frontend" },
  { name: "C++", level: 85, group: "Systems" },
  { name: "C", level: 82, group: "Systems" },
  { name: "React-Inertia", level: 88, group: "Frontend" },
  { name: "HTML", level: 98, group: "Frontend" },
  { name: "CSS", level: 95, group: "Frontend" },
  { name: "Bootstrap 5", level: 90, group: "Frontend" },
  { name: "Laravel 10/11/12/13", level: 93, group: "Backend" },
];

const groupColors: Record<string, string> = {
  Frontend: "from-primary to-primary-glow",
  Backend: "from-secondary to-primary",
  Systems: "from-accent to-primary",
};

export const Skills = () => {
  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-primary mb-4">
            / 02 — SKILLS
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Tools of the <span className="text-gradient">trade</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A curated stack honed across years of shipping real products.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-xl p-5 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-display font-semibold">{skill.name}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.04, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${groupColors[skill.group]}`}
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  {skill.group}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
