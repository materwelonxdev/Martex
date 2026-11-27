import Reveal from "../Reveal";

const svg = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-12 w-12",
};

const items = [
  {
    title: "Market Research",
    icon: (
      <svg {...svg}>
        <rect x="8" y="8" width="32" height="22" rx="2" />
        <path d="M24 30v8M16 42l8-4 8 4M14 24l7-6 5 4 8-8" />
      </svg>
    ),
  },
  {
    title: "User Experience",
    icon: (
      <svg {...svg}>
        <path d="M24 6a12 12 0 0 0-7 21.8V33h14v-5.2A12 12 0 0 0 24 6zM19 38h10M21 42h6" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    icon: (
      <svg {...svg}>
        <path d="M8 40V28h7v12M20 40V20h7v20M32 40V10h7v30" />
      </svg>
    ),
  },
  {
    title: "SEO Services",
    icon: (
      <svg {...svg}>
        <rect x="6" y="8" width="36" height="32" rx="3" />
        <path d="M6 16h36M14 34l6-6 5 4 8-9" />
      </svg>
    ),
  },
];

export default function Strategy() {
  return (
    <section id="features" className="section-y bg-white">
      <div className="mx-auto max-w-285 px-5">
        <Reveal className="mx-auto max-w-190 text-center">
          <h2 className="text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-tight">
            Build a customer-centric marketing strategy
          </h2>
          <p className="mt-4 text-xl text-ink/60">
            Ligula risus auctor tempus magna feugiat lacinia.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100} className="text-center">
              <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center text-brand">
                <span
                  aria-hidden="true"
                  className="absolute left-3 top-3 h-12 w-12 rounded-full bg-brand/10 blur-md"
                />
                <span className="relative">{it.icon}</span>
              </div>
              <h5 className="text-xl font-semibold">{it.title}</h5>
              <p className="mx-auto mt-3 max-w-55 text-[17px] leading-7 text-ink/60">
                Luctus augue egestas undo ultrice and quisque lacus
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <hr className="mx-auto mt-12 max-w-285 border-ink/10 lg:mt-14" />
    </section>
  );
}