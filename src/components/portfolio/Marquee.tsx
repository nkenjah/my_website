const techs = [
  "React", "Laravel", "TypeScript", "Tailwind", "PHP", "C++",
  "Node.js", "PostgreSQL", "Inertia", "Bootstrap", "Networking", "UI/UX",
];

export const Marquee = () => {
  return (
    <section
      aria-label="Technology stack"
      className="relative py-10 border-y border-border/40 overflow-hidden bg-card/20 backdrop-blur-sm"
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...techs, ...techs, ...techs].map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-3 font-display text-2xl md:text-3xl font-semibold text-muted-foreground/60 hover:text-primary transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            {t}
          </div>
        ))}
      </div>
    </section>
  );
};
