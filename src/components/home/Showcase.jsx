import { useEffect, useState } from "react";
import Reveal from "../Reveal";
import VideoModal from "../VideoModal";

const h2 = "text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-tight";

/* ---------- Track the progress towards objectives (video) ---------- */
export function Track() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="how-it-works"
      className="section-y bg-[linear-gradient(to_bottom,#ffffff,#f1eefb_18%,#ece7f9_82%,#ffffff)]"
    >
      <div className="mx-auto max-w-285 px-5">
        <Reveal className="mx-auto max-w-190 text-center">
          <h2 className={h2}>Track the progress towards objectives with key results</h2>
          <p className="mt-4 text-xl text-ink/60">Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Reveal>

        <Reveal delay={100} className="relative mx-auto mt-12 max-w-250">
          <img
            src="/images/dashboard-01.png"
            alt="Dashboard preview"
            className="w-full rounded-xl shadow-[0_20px_60px_rgba(43,39,80,0.15)]"
          />
          <button
            type="button"
            aria-label="Play video"
            onClick={() => setOpen(true)}
            className="absolute left-1/2 top-1/2 flex h-22.5 w-22.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-transform hover:scale-105"
          >
            <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-brand/40" />
            <svg className="relative ml-1 h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4l13 8-13 8z" />
            </svg>
          </button>
        </Reveal>
      </div>

      <VideoModal videoId="7e90gBu4pas" open={open} onClose={() => setOpen(false)} />
    </section>
  );
}

/* ---------- Brand logos: sliding carousel ---------- */
const brands = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/images/brand-${n}.png`);
const MAX_VIEW = 5;
const INTERVAL = 4000; // ms between slides
const SPEED = 1000; // ms slide animation

function usePerView() {
  const get = () =>
    window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 3 : 2;
  const [n, setN] = useState(get);
  useEffect(() => {
    const onResize = () => setN(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return n;
}

export function Brands() {
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState(true);

  // first logos are repeated at the end so the loop looks endless
  const slides = [...brands, ...brands.slice(0, MAX_VIEW)];

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
    <section className="bg-white pb-2 pt-4">
      <div className="mx-auto max-w-322.5 px-5">
        <Reveal>
          <h5 className="text-center text-lg font-semibold text-ink/70">
            Martex is loved and trusted by thousands:
          </h5>

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
                <a
                  key={i}
                  href="#"
                  aria-label="Brand"
                  tabIndex={-1}
                  style={{ flex: `0 0 ${100 / perView}%` }}
                  className="flex items-center justify-center px-4 py-2"
                >
                  <img
                    src={src}
                    alt=""
                    draggable={false}
                    className="h-16 w-auto max-w-full object-contain sm:h-20"
                  />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <hr className="mt-12 border-ink/10 lg:mt-14" />
      </div>
    </section>
  );
}

/* ---------- The Complete Solutions ---------- */
const features = [
  { img: "f_01.png", title: "Intuitive Dashboard", text: "Luctus egestas augue undo ultrice aliquam in lacus congue dapibus" },
  { img: "f_05.png", title: "Effortless Integration", text: "Tempor laoreet augue undo ultrice aliquam in lacusq luctus feugiat" },
  { img: "f_02.png", title: "Engagement Analysis", text: "Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus" },
];

export function Complete() {
  return (
    <section id="best-solutions" className="section-y bg-white">
      <div className="mx-auto max-w-285 px-5">
        <Reveal className="mx-auto max-w-190 text-center">
          <h2 className={h2}>The Complete Solutions</h2>
          <p className="mt-4 text-xl text-ink/60">Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100} className="text-center">
              <img src={`/images/${f.img}`} alt={f.title} className="mx-auto w-full max-w-85" />
              <h5 className="mt-6 text-xl font-semibold">{f.title}</h5>
              <p className="mx-auto mt-3 max-w-75 text-[17px] leading-7 text-ink/60">{f.text}</p>
            </Reveal>
          ))}
        </div>

        <hr className="mt-12 border-ink/10 lg:mt-14" />
      </div>
    </section>
  );
}

/* ---------- Achieve more with better workflows ---------- */
const Check = () => (
  <svg className="mt-1.5 h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="none" stroke="#f5427f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10l4 4 8-9" />
  </svg>
);

export function Achieve() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto grid max-w-285 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <span className="text-sm font-semibold uppercase tracking-wider text-ink/40">
            Productivity Focused
          </span>
          <h2 className="mt-3 text-[clamp(2.25rem,3.6vw,3rem)] font-bold leading-[1.15]">
            Achieve more with better workflows
          </h2>
          <p className="mt-5 text-[17px] leading-7 text-ink/60">
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus an ipsum suscipit
          </p>
          <ul className="mt-6 space-y-3 text-[17px] leading-7 text-ink/60">
            {[
              "Magna dolor luctus at egestas sapien",
              "Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue varius magnis",
              "Volute turpis dolores and sagittis congue",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <Check />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <img src="/images/img-13.png" alt="Better workflows" className="mx-auto w-full max-w-135" />
        </Reveal>
      </div>
    </section>
  );
}