import React, {useRef} from "react";
import {motion, useMotionValue, useSpring} from "framer-motion";

const SPRING = {stiffness: 260, damping: 18, mass: 0.6};

/**
 * Button/link that leans toward the cursor while hovered, then springs back.
 * Renders an <a> when `href` is supplied, otherwise a <button>.
 */
export default function MagneticButton({
  children,
  href,
  className = "",
  strength = 0.35,
  newTab = false,
  ...rest
}) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), SPRING);
  const y = useSpring(useMotionValue(0), SPRING);

  const handleMove = event => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const motionProps = {
    ref,
    className,
    style: {x, y},
    onMouseMove: handleMove,
    onMouseLeave: reset,
    whileTap: {scale: 0.96},
    ...rest
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...motionProps}>
      {children}
    </motion.button>
  );
}
