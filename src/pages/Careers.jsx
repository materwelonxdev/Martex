import { useState } from "react";
import Reveal from "../components/Reveal";
import Collage from "../components/Collage";
import Founder from "../components/Founder";
import Roles from "../components/Roles";
import HiringBanner from "../components/HiringBanner";
import NewsletterModal from "../components/NewsletterModal";

const HERO_IMG = "/images/img-18.png";

const dots =
  "bg-[radial-gradient(circle,rgba(255,255,255,0.35)_2px,transparent_2.5px)] bg-[length:28px_28px]";

/* ============ 1. Hero ============ */
function Hero() {
  const [bad, setBad] = useState(false);
  return (
    <section className="relative overflow-hidden bg-[#654eb7] pb-24 pt-36 text-white [clip-path:polygon(0_0,100%_0,100%_calc(100%-36px),0_100%)] lg:pt-44">
      <div aria-hidden="true" className={`pointer-events-none absolute left-6 top-24 hidden h-[110px] w-[280px] lg:block ${dots}`} />
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-white/[0.04]" />

      <div className="relative mx-auto grid max-w-[1480px] items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-10">
        <div>
          <span className="inline-block rounded-full bg-white/15 px-6 py-3 text-xl font-semibold uppercase tracking-wide">
            Careers
          </span>
          <h1 className="mt-10 max-w-[820px] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.18]">
            We are looking for creative and fun individuals
          </h1>
          <p className="mt-8 max-w-[780px] text-lg leading-[1.9] sm:text-xl sm:leading-[1.9]">
            Sodales tempor sapien quaerat ipsum congue undo laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna ipsum ligula purus
            cursus
          </p>
        </div>

        {!bad && (
          <img
            src={HERO_IMG}
            alt="Our team"
            onError={() => setBad(true)}
            className="mx-auto w-full max-w-[680px]"
          />
        )}
      </div>
    </section>
  );
}

/* ============ 2. Mission + results ============ */
const p = "text-lg leading-8 text-ink/60";
const h2 = "text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-tight";

function Mission() {
  return (
    <section className="section-y">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 md:grid-cols-2 lg:gap-24">
        <Reveal>
          <h2 className={h2}>Mission and impact</h2>
          <p className={`${p} mt-6`}>
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus an ipsum suscipit
          </p>
          <ul className={`${p} mt-6 list-disc space-y-5 pl-6 marker:text-ink/40`}>
            <li>
              Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
              ultrice ipsum aliquam undo congue dolor cursus
            </li>
            <li>
              Cursus purus suscipit vitae cubilia magnis volute egestas vitae
              sapien turpis ultrice auctor congue magna placerat
            </li>
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <h2 className={h2}>We deliver results</h2>
          <p className={`${p} mt-6`}>
            Nemo ipsam egestas volute turpis egestas ipsum and purus sapien
            ultrice an aliquam quaerat ipsum augue turpis sapien cursus congue
            magna purus quaerat at ligula purus egestas magna cursus undo varius
            purus magnis sapien quaerat
          </p>
          <p className={`${p} mt-6`}>
            Egestas volute nemo ipsam turpis egestas ipsum and purus sapien
            ultrice an aliquam quaerat ipsum augue turpis sapien cursus congue
            magna purus quaerat at ligula purus egestas magna cursus undo varius
            purus quaerat sapien magnis
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 3. Benefits and perks ============ */
const ico = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-12 w-12",
};

const benefits = [
  {
    title: "Healthcare",
    icon: (
      <svg {...ico}>
        <circle cx="24" cy="24" r="10" />
        <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M10 38l4-4M34 14l4-4" />
      </svg>
    ),
  },
  {
    title: "Flexible Schedules",
    icon: (
      <svg {...ico}>
        <path d="M6 10h36v32H6zM6 20h36M16 6v8M32 6v8M17 31l5 5 9-10" />
      </svg>
    ),
  },
  {
    title: "401k Matching",
    icon: (
      <svg {...ico}>
        <path d="M10 22l14-14 14 14M14 20v8h20v-8M6 32h36v6H6zM10 38v4h28v-4" />
      </svg>
    ),
  },
  {
    title: "Hardware & Software",
    icon: (
      <svg {...ico}>
        <path d="M6 20l22-10 4 8-22 10zM26 22l-6 20M26 22l8 20M16 28v6" />
      </svg>
    ),
  },
  {
    title: "In-office Lunch",
    icon: (
      <svg {...ico}>
        <path d="M14 8h14l-2 26H16zM12 14h18M34 20h10l-2 6H34zM32 34h12M32 40h12" />
      </svg>
    ),
  },
  {
    title: "Competitive Salary",
    icon: (
      <svg {...ico}>
        <path d="M10 10h28v6H10zM12 16v20l12 6 12-6V16M24 22a6 6 0 1 0 .1 0" />
      </svg>
    ),
  },
];

function Benefits() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-[1320px] px-5">
        <Reveal className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.15]">Benefits and Perks</h2>
          <p className="mt-5 text-xl text-ink/60">Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Reveal>

        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 100}>
              <div className="flex gap-6">
                <div className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full bg-[#f5427f]/[0.07] text-[#f5427f]">
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-[1.75rem] font-semibold leading-tight">{b.title}</h3>
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

export default function Careers() {
  return (
    <>
      <NewsletterModal />
      <Hero />
      <Mission />
      <div className="pb-6">
        <Collage />
      </div>
      <Benefits />
      <Founder />
      <Roles />
      <HiringBanner label="yourdomain@mail.com" href="mailto:yourdomain@mail.com" />
    </>
  );
}