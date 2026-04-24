import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  as?: "a" | "button";
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

export const MagneticButton = ({
  children,
  className = "",
  href,
  onClick,
  strength = 0.35,
  as = "a",
  type,
  disabled,
  ariaLabel,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      {as === "a" ? (
        <a href={href} aria-label={ariaLabel} className={className} onClick={onClick}>
          {children}
        </a>
      ) : (
        <button
          type={type}
          disabled={disabled}
          aria-label={ariaLabel}
          className={className}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </motion.div>
  );

  return inner;
};
