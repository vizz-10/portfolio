import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePointerFine, usePrefersReducedMotion } from "../hooks/useMedia";

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function Magnetic({ children, className = "", strength = 12 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = usePointerFine();
  const reduce = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22 });
  const springY = useSpring(y, { stiffness: 280, damping: 22 });
  const enabled = fine && !reduce;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={enabled ? { x: springX, y: springY } : undefined}
      onMouseMove={
        enabled
          ? (e) => {
              const rect = ref.current?.getBoundingClientRect();
              if (!rect) return;
              const dx = e.clientX - (rect.left + rect.width / 2);
              const dy = e.clientY - (rect.top + rect.height / 2);
              x.set((dx / rect.width) * strength);
              y.set((dy / rect.height) * strength);
            }
          : undefined
      }
      onMouseLeave={
        enabled
          ? () => {
              x.set(0);
              y.set(0);
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
