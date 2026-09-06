import React from "react";
import {motion, useReducedMotion} from "framer-motion";

/** A restrained entrance; content stays visible and reduced motion is respected. */
export default function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  ...rest
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={false}
      whileInView={reduced ? undefined : {opacity: [0.85, 1]}}
      viewport={{once: true}}
      transition={{duration: 0.3, delay}}
      {...rest}
    >
      {children}
    </Tag>
  );
}
