import { motion } from "framer-motion";

interface SectionDividerProps {
  label?: string;
}

export const SectionDivider = ({ label }: SectionDividerProps) => {
  return (
    <div className="container py-6">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        {label && (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase"
          >
            {label}
          </motion.span>
        )}
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
};
