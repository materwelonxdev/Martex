import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const INTERVAL = 4000; // ms between slides (same as the home page)
const SPEED = 1000; // ms slide animation

// how many logos are visible: lgView on desktop, 3 on tablet, 2 on mobile
function usePerView(lgView) {
  const get = () =>
    window.innerWidth >= 1024 ? lgView : window.innerWidth >= 640 ? 3 : 2;
  const [n, setN] = useState(get);
  useEffect(() => {
    const onResize = () => setN(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [lgView]);
  return n;
}

export default function BrandCarousel({
  title = "Martex is loved and trusted by thousands:",
  order = [1, 2, 3, 4, 5, 6, 7, 8], // brand-N.png files, in the order shown
  lgView = 5, // logos visible on desktop
  bgClass = "bg-white pb-2 pt-4", // section background / spacing
  titleClass = "text-center text-lg font-semibold text-ink/70",
}) {
  const perView = usePerView(lgView);
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState(true);

  const brands = order.map((n) => `/images/brand-${n}.png`);
  // the first logos are repeated at the end so the loop looks endless
  const slides = [...brands, ...brands.slice(0, lgView)];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setAnim(true);
      setIndex((i) => i + 1);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  const handleEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (index >= brands.length) {
      // jump back to the start without animation (looks identical)
      setAnim(false);
      setIndex(0);
    }
  };

  return (
    <section className={bgClass}>
      <div className="mx-auto max-w-[1290px] px-5">
        <Reveal>
          <h5 className={titleClass}>{title}</h5>

          <div className="mt-8 overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${index * (100 / perView)}%)`,
                transition: anim ? `transform ${SPEED}ms ease-in-out` : "none",
              }}
              onTransitionEnd={handleEnd}
            >
              {slides.map((src, i) => (
                <div
                  key={i}
                  style={{ flex: `0 0 ${100 / perView}%` }}
                  className="flex items-center justify-center px-4 py-2"
                >
                  <img
                    src={src}
                    alt=""
                    draggable={false}
                    className="h-16 w-auto max-w-full object-contain sm:h-20"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}