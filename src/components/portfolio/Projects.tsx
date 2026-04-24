import { motion } from "framer-motion";
import { ArrowUpRight, Shield, Users, Building2, ShoppingBag, HeartPulse } from "lucide-react";
import { TiltCard } from "./TiltCard";

const projects = [
  {
    title: "Real-time Threat Mitigation",
    desc: "Network security platform with live monitoring, automated responses, and anomaly detection.",
    tags: ["Security", "Networking", "Real-time"],
    icon: Shield,
    accent: "primary",
    size: "lg", // bento
  },
  {
    title: "VICOBA Management",
    desc: "End-to-end community banking platform handling memberships, loans, and financial reporting.",
    tags: ["Laravel", "Finance"],
    icon: Users,
    accent: "accent",
    size: "sm",
  },
  {
    title: "Multi-tenant SaaS",
    desc: "Scalable architecture serving multiple organizations from a single codebase.",
    tags: ["SaaS", "Architecture"],
    icon: Building2,
    accent: "secondary",
    size: "sm",
  },
  {
    title: "E-commerce Platform",
    desc: "Modern storefront with cart, payments, inventory, and admin dashboard.",
    tags: ["React", "Stripe", "Laravel"],
    icon: ShoppingBag,
    accent: "primary",
    size: "md",
  },
  {
    title: "Hospital Management",
    desc: "Clinical operations platform for patients, appointments, billing, and records.",
    tags: ["Healthcare", "Records"],
    icon: HeartPulse,
    accent: "accent",
    size: "md",
  },
];

const accentMap: Record<string, string> = {
  primary: "text-primary border-primary/30 group-hover:shadow-glow-primary",
  secondary: "text-secondary border-secondary/30 group-hover:shadow-glow-secondary",
  accent: "text-accent border-accent/30 group-hover:shadow-glow-accent",
};

const sizeMap: Record<string, string> = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-1 md:row-span-1",
  sm: "md:col-span-1 md:row-span-1",
};

export const Projects = () => {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <p className="font-mono text-xs tracking-widest text-primary mb-4">
              / 03 — WORK
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl">
              Selected <span className="text-aurora">projects</span> from the lab.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Real systems shipped to real users — built end-to-end with care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[260px] gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${sizeMap[p.size]} group`}
            >
              <TiltCard className="relative h-full glass holo-border rounded-3xl p-7 overflow-hidden hover:border-primary/40 transition-colors flex flex-col">
                {/* Background grid for featured card */}
                {p.size === "lg" && (
                  <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
                )}
                <div className="absolute -inset-px rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-15 blur-xl transition-opacity -z-10" />

                <div className="relative flex items-start justify-between mb-6">
                  <div
                    className={`h-12 w-12 rounded-xl glass border flex items-center justify-center transition-shadow ${accentMap[p.accent]}`}
                  >
                    <p.icon className="h-5 w-5" />
                  </div>
                  <button
                    className="h-10 w-10 rounded-xl glass flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:rotate-45"
                    aria-label="View project"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="relative flex-1 flex flex-col">
                  <h3
                    className={`font-display font-semibold mb-3 group-hover:text-aurora transition-all ${
                      p.size === "lg" ? "text-2xl md:text-3xl" : "text-xl"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`text-sm text-muted-foreground leading-relaxed mb-auto ${
                      p.size !== "lg" ? "line-clamp-3" : ""
                    }`}
                  >
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground border border-border/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
