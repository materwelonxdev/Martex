import Reveal from "./Reveal";

const ico = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-12 w-12",
};

const services = [
  {
    title: "Market Research",
    icon: (
      <svg {...ico}>
        <path d="M8 10h32v22H8zM24 10V6M14 44l6-12M34 44l-6-12M14 26l8-8 6 4 8-8" />
      </svg>
    ),
  },
  {
    title: "User Experience",
    icon: (
      <svg {...ico}>
        <path d="M24 8a11 11 0 0 0-6 20v6h12v-6a11 11 0 0 0-6-20zM20 40h8M22 44h4M8 12l4 3M40 12l-4 3M6 24h5M37 24h5" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    icon: (
      <svg {...ico}>
        <path d="M8 42V30h8v12M20 42V22h8v20M32 42V16h8v26M33 12l6-8 6 8M39 4v14" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    icon: (
      <svg {...ico}>
        <path d="M6 6h36v36H6zM6 16h36M16 16v26M26 24l12 12M26 36l12-12" />
      </svg>
    ),
  },
  {
    title: "Brand Design Identity",
    icon: (
      <svg {...ico}>
        <path d="M14 6h20v14a10 10 0 0 1-20 0zM14 10H6v4a8 8 0 0 0 8 8M34 10h8v4a8 8 0 0 1-8 8M24 30v8M16 42h16" />
      </svg>
    ),
  },
  {
    title: "SEO & SMM Services",
    icon: (
      <svg {...ico}>
        <path d="M6 8h36v14H6zM6 28h22M6 36h36M6 42h36M34 12a4 4 0 1 0 .1 0M38 16l3 3" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-[1320px] px-5">
        <Reveal className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[clamp(2.25rem,4.6vw,4rem)] font-bold leading-[1.15]">
            We make your business gain more revenue at a glance
          </h2>
          <p className="mt-5 text-xl text-ink/60">Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Reveal>

        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 100}>
              <div className="flex gap-6">
                <div className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full bg-[#f5427f]/[0.07] text-[#f5427f]">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-[1.75rem] font-semibold leading-tight">{s.title}</h3>
                  <p className="mt-3 text-[17px] leading-8 text-ink/60">
                    Porta semper lacus cursus feugiat primis ultrice ligula risus
                    ociis auctor and tempus feugiat impedit felis cursus auctor
                    augue mauris blandit ipsum
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}