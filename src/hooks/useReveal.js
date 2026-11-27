import { useEffect, useRef, useState } from "react";

// Fade-in on scroll. Used from Day 2 onward.
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, shown];
}

// usage:
// const [ref, shown] = useReveal();
// <div ref={ref} className={`transition-all duration-700 motion-reduce:transition-none ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>