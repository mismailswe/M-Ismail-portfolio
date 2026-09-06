import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {EASE} from "../../lib/motion";

const HOLD_MS = 1500;

/** First-paint curtain: initials draw in, progress fills, curtain lifts. */
export default function Preloader({name = "Muhammad Ismail"}) {
  const [done, setDone] = useState(false);
  const initials = name
    .split(" ")
    .map(part => part[0])
    .join("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setDone(true), HOLD_MS);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          exit={{y: "-100%", transition: {duration: 0.9, ease: EASE}}}
        >
          <motion.div
            className="preloader__inner"
            exit={{opacity: 0, transition: {duration: 0.3}}}
          >
            <motion.span
              className="preloader__mark grad-text"
              initial={{opacity: 0, y: 24, letterSpacing: "0.4em"}}
              animate={{opacity: 1, y: 0, letterSpacing: "0.05em"}}
              transition={{duration: 1, ease: EASE}}
            >
              {initials}
            </motion.span>
            <div className="preloader__track">
              <motion.span
                initial={{scaleX: 0}}
                animate={{scaleX: 1}}
                transition={{duration: HOLD_MS / 1000, ease: "easeInOut"}}
              />
            </div>
            <motion.span
              className="preloader__label"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.3, duration: 0.6}}
            >
              {name}
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
