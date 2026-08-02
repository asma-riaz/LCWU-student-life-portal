import { useEffect, useRef, useState } from "react";

// Animates a number from 0 up to target once start becomes true.
// Used for the hero stats, about stats, and anywhere else a number
// should count up instead of just appearing.
export function useCountUp(target, { start = false, duration = 1600 } = {}) {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    let frame;
    let startTime = null;

    function step(timestamp) {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return value;
}
