import {useEffect, useRef, useState} from "react";

/** Eased number ticker that fires once the element scrolls into view. */
export default function useCountUp(
  target,
  {duration = 1600, start = false} = {}
) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return undefined;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setValue(target);
      return undefined;
    }

    const startedAt = performance.now();
    const tick = now => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [target, duration, start]);

  return value;
}
