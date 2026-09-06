import React, {useRef, useState} from "react";
import {motion, useMotionValue, useSpring, useTransform} from "framer-motion";

const SPRING = {stiffness: 200, damping: 22, mass: 0.6};
const MAX_TILT = 9;

/**
 * 3D tilt container with a cursor-tracking sheen. Tilt is skipped on coarse
 * pointers (touch), where it would only fire on tap and feel broken.
 */
export default function TiltCard({children, className = "", ...rest}) {
  const ref = useRef(null);
  const [glare, setGlare] = useState({x: 50, y: 50, on: false});

  const px = useSpring(useMotionValue(0), SPRING);
  const py = useSpring(useMotionValue(0), SPRING);
  const rotateX = useTransform(py, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]);
  const rotateY = useTransform(px, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]);

  const isCoarse =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none), (max-width: 900px)").matches;

  const handleMove = event => {
    if (isCoarse || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width;
    const relY = (event.clientY - rect.top) / rect.height;
    px.set(relX - 0.5);
    py.set(relY - 0.5);
    setGlare({x: relX * 100, y: relY * 100, on: true});
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
    setGlare(g => ({...g, on: false}));
  };

  return (
    <motion.div
      ref={ref}
      className={`tilt ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={
        isCoarse
          ? undefined
          : {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              transformPerspective: 1000
            }
      }
      {...rest}
    >
      {children}
      <span
        className="tilt__glare"
        style={{
          opacity: glare.on ? 1 : 0,
          background: `radial-gradient(320px circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.14), transparent 60%)`
        }}
      />
    </motion.div>
  );
}
