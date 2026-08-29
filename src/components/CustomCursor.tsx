import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePointerFine, usePrefersReducedMotion } from "../hooks/useMedia";

export default function CustomCursor() {
  const fine = usePointerFine();
  const reduce = usePrefersReducedMotion();
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 38 });
  const springY = useSpring(y, { stiffness: 420, damping: 38 });
  const enabled = fine && !reduce;

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("has-custom-cursor");
      return;
    }
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [role='button'], input, textarea, label, [data-cursor='interactive']");
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[180] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          width: hovering ? 44 : 14,
          height: hovering ? 44 : 14,
          opacity: hovering ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="rounded-full border border-white bg-white/15"
      />
    </motion.div>
  );
}
