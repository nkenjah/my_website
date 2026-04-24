import { motion } from "framer-motion";

/**
 * Aurora-style animated gradient blobs that drift across the background.
 * Sits behind sections with `relative` parent.
 */
export const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/3 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[120px]"
      />
    </div>
  );
};
