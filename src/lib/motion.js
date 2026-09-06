/** Shared framer-motion variants so every section reveals with one rhythm. */

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: {opacity: 0, y: 28},
  show: {opacity: 1, y: 0, transition: {duration: 0.7, ease: EASE}}
};

export const fadeIn = {
  hidden: {opacity: 0},
  show: {opacity: 1, transition: {duration: 0.6, ease: EASE}}
};

export const scaleIn = {
  hidden: {opacity: 0, scale: 0.94, y: 20},
  show: {opacity: 1, scale: 1, y: 0, transition: {duration: 0.6, ease: EASE}}
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {transition: {staggerChildren, delayChildren}}
});

/** Default viewport config: play once, when a quarter of the block is visible. */
export const viewport = {once: true, amount: 0.2};
