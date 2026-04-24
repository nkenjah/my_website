import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Command,
  Search,
  User,
  Code2,
  Briefcase,
  Wrench,
  Mail,
  Github,
  Linkedin,
  Home,
  Sparkles,
} from "lucide-react";

interface Item {
  id: string;
  label: string;
  hint: string;
  icon: typeof Home;
  action: () => void;
  group: string;
}

export const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);

  const go = (hash: string) => {
    setOpen(false);
    setQuery("");
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  const items: Item[] = [
    { id: "home", label: "Go to Home", hint: "#home", icon: Home, action: () => go("#home"), group: "Navigate" },
    { id: "about", label: "Go to About", hint: "#about", icon: User, action: () => go("#about"), group: "Navigate" },
    { id: "skills", label: "Go to Skills", hint: "#skills", icon: Sparkles, action: () => go("#skills"), group: "Navigate" },
    { id: "projects", label: "View Projects", hint: "#projects", icon: Code2, action: () => go("#projects"), group: "Navigate" },
    { id: "services", label: "View Services", hint: "#services", icon: Wrench, action: () => go("#services"), group: "Navigate" },
    { id: "contact", label: "Contact Emanuel", hint: "#contact", icon: Mail, action: () => go("#contact"), group: "Navigate" },
    { id: "hire", label: "Hire me", hint: "Open contact form", icon: Briefcase, action: () => go("#contact"), group: "Actions" },
    { id: "gh", label: "Open GitHub", hint: "github.com", icon: Github, action: () => window.open("https://github.com", "_blank"), group: "Social" },
    { id: "li", label: "Open LinkedIn", hint: "linkedin.com", icon: Linkedin, action: () => window.open("https://linkedin.com", "_blank"), group: "Social" },
  ];

  const filtered = items.filter(
    (i) =>
      i.label.toLowerCase().includes(query.toLowerCase()) ||
      i.hint.toLowerCase().includes(query.toLowerCase()) ||
      i.group.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
      if (open) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setActiveIdx((i) => Math.max(i - 1, 0));
        }
        if (e.key === "Enter" && filtered[activeIdx]) {
          e.preventDefault();
          filtered[activeIdx].action();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, activeIdx]);

  useEffect(() => setActiveIdx(0), [query, open]);

  // Group items
  const grouped = filtered.reduce<Record<string, Item[]>>((acc, item) => {
    (acc[item.group] = acc[item.group] || []).push(item);
    return acc;
  }, {});

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 rounded-full glass-strong px-4 py-2.5 font-mono text-xs hover:border-primary/50 hover:shadow-glow-primary transition-all"
      >
        <Command className="h-3.5 w-3.5 text-primary" />
        <span className="text-muted-foreground hidden sm:inline">Press</span>
        <kbd className="px-1.5 py-0.5 rounded bg-muted/60 border border-border text-[10px]">⌘K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-background/70 backdrop-blur-xl flex items-start justify-center pt-[15vh] px-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl glass-strong rounded-2xl border-border/60 overflow-hidden shadow-elegant"
            >
              {/* Animated border gradient */}
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-20 blur-2xl -z-10" />

                <div className="flex items-center gap-3 px-5 py-4 border-b border-border/50">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search commands, sections, links..."
                    className="flex-1 bg-transparent outline-none font-mono text-sm placeholder:text-muted-foreground/60"
                  />
                  <kbd className="px-1.5 py-0.5 rounded bg-muted/60 border border-border text-[10px] font-mono text-muted-foreground">
                    ESC
                  </kbd>
                </div>

                <div className="max-h-[60vh] overflow-y-auto p-2">
                  {filtered.length === 0 && (
                    <div className="p-8 text-center text-sm text-muted-foreground font-mono">
                      No results for "{query}"
                    </div>
                  )}
                  {Object.entries(grouped).map(([group, list]) => (
                    <div key={group} className="mb-2 last:mb-0">
                      <div className="px-3 py-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                        {group}
                      </div>
                      {list.map((item) => {
                        const idx = filtered.indexOf(item);
                        const active = idx === activeIdx;
                        return (
                          <button
                            key={item.id}
                            onClick={item.action}
                            onMouseEnter={() => setActiveIdx(idx)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                              active
                                ? "bg-primary/10 text-foreground"
                                : "text-muted-foreground hover:bg-muted/40"
                            }`}
                          >
                            <item.icon
                              className={`h-4 w-4 ${active ? "text-primary" : ""}`}
                            />
                            <span className="flex-1 text-left">{item.label}</span>
                            <span className="font-mono text-[10px] text-muted-foreground/70">
                              {item.hint}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between px-5 py-3 border-t border-border/50 font-mono text-[10px] text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 rounded bg-muted/60 border border-border">↑↓</kbd>
                      navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 rounded bg-muted/60 border border-border">↵</kbd>
                      select
                    </span>
                  </div>
                  <span>ENK.OS // v1.0.0</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
