import { motion } from "framer-motion";
import { Globe, Cpu, Brush, Wrench, Network } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Modern, responsive web apps with React, Laravel, and Tailwind. From MVP to enterprise.",
    items: ["SPAs & SSR", "REST APIs", "CMS & Dashboards"],
  },
  {
    icon: Cpu,
    title: "Software Development",
    desc: "Custom systems built with C/C++ and modern frameworks for performance-critical workloads.",
    items: ["Desktop tools", "Automation", "System design"],
  },
  {
    icon: Brush,
    title: "Graphic Design",
    desc: "Brand identities, marketing assets, and UI design that elevates your product.",
    items: ["Logos & Identity", "UI Mockups", "Print & Social"],
  },
  {
    icon: Wrench,
    title: "Device Repair",
    desc: "Diagnostics and repair for laptops, desktops, and peripherals with quick turnaround.",
    items: ["Hardware fixes", "OS recovery", "Upgrades"],
  },
  {
    icon: Network,
    title: "Networking",
    desc: "Network design, configuration, and security for SMBs and growing organizations.",
    items: ["LAN/WAN", "Firewalls", "Monitoring"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-primary mb-4">
            / 04 — SERVICES
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What I <span className="text-aurora">offer</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Full-spectrum services — from first sketch to deployed product to working network.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative glass holo-border rounded-3xl p-7 hover:border-primary/40 transition-all"
            >
              <div className="absolute top-0 right-0 font-mono text-7xl font-bold text-foreground/[0.04] leading-none p-4 pointer-events-none">
                0{i + 1}
              </div>

              <div className="relative h-14 w-14 rounded-2xl bg-gradient-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:shadow-glow-primary transition-shadow">
                <s.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {s.desc}
              </p>

              <ul className="space-y-2 pt-5 border-t border-border/50">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
