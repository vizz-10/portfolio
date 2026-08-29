import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { usePointerFine, usePrefersReducedMotion } from "../hooks/useMedia";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function TiltCard({ children, className = "", style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = usePointerFine();
  const reduce = usePrefersReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 180, damping: 20 });
  const px = useTransform(mx, (v) => `${v * 100}%`);
  const py = useTransform(my, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${px} ${py}, rgba(99,102,241,0.14), transparent 42%)`;
  const enabled = fine && !reduce;

  return (
    <motion.div
      ref={ref}
      className={`${className} group`}
      style={
        enabled
          ? {
              ...style,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 1000,
            }
          : style
      }
      onMouseMove={
        enabled
          ? (e) => {
              const rect = ref.current?.getBoundingClientRect();
              if (!rect) return;
              mx.set((e.clientX - rect.left) / rect.width);
              my.set((e.clientY - rect.top) / rect.height);
            }
          : undefined
      }
      onMouseLeave={
        enabled
          ? () => {
              mx.set(0.5);
              my.set(0.5);
            }
          : undefined
      }
    >
      {enabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 group-hover:opacity-50 transition-opacity duration-300"
          style={{ background: spotlight }}
        />
      )}
      {children}
    </motion.div>
  );
}
