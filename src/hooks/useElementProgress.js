import {useEffect, useRef, useState} from "react";

/**
 * How far the referenced element has travelled past an anchor line in the
 * viewport, clamped to 0–1. Used to drive the timeline rail fill.
 */
export default function useElementProgress(anchor = 0.55) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let frame = null;

    const compute = () => {
      frame = null;
      const rect = node.getBoundingClientRect();
      const line = window.innerHeight * anchor;
      const travelled = line - rect.top;
      const value = Math.min(Math.max(travelled / rect.height, 0), 1);
      setProgress(value);
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, {passive: true});
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [anchor]);

  return [ref, progress];
}
