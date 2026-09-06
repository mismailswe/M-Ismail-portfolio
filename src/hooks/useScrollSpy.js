import {useEffect, useState} from "react";

/**
 * Returns the id of the section currently closest to the top of the viewport.
 * Uses scroll position rather than IntersectionObserver so that sections of
 * wildly different heights all get a fair turn at being "active".
 */
export default function useScrollSpy(ids, offset = 140) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    let frame = null;

    const compute = () => {
      frame = null;
      const scrollY = window.scrollY + offset;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }

      // Pin the last section once we hit the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 80
      ) {
        current = ids[ids.length - 1];
      }

      setActiveId(prev => (prev === current ? prev : current));
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
  }, [ids, offset]);

  return activeId;
}
