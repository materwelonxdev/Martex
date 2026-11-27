import { useEffect, useState } from "react";

// Counts from 0 to `end` once `active` becomes true.
export default function useCountUp(end, active, duration = 1800) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf;
    let startTime;
    const tick = (t) => {
      if (startTime === undefined) startTime = t;
      const p = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(end * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, active, duration]);

  return val;
}