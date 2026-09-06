import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {FiArrowUp} from "react-icons/fi";
import useScrollProgress from "../../hooks/useScrollProgress";
import "./backToTop.css";

const CIRCUMFERENCE = 2 * Math.PI * 20;

/** Floating button with a ring that tracks reading progress. */
export default function BackToTop() {
  const progress = useScrollProgress();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="to-top"
          onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
          aria-label="Back to top"
          initial={{opacity: 0, scale: 0.6, y: 20}}
          animate={{opacity: 1, scale: 1, y: 0}}
          exit={{opacity: 0, scale: 0.6, y: 20}}
          whileHover={{y: -4}}
          transition={{duration: 0.35, ease: [0.22, 1, 0.36, 1]}}
        >
          <svg className="to-top__ring" viewBox="0 0 44 44" aria-hidden="true">
            <circle className="to-top__track" cx="22" cy="22" r="20" />
            <circle
              className="to-top__fill"
              cx="22"
              cy="22"
              r="20"
              style={{
                strokeDasharray: CIRCUMFERENCE,
                strokeDashoffset: CIRCUMFERENCE * (1 - progress)
              }}
            />
          </svg>
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
