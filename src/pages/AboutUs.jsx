import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import VideoModal from "../components/VideoModal";
import Ratings from "../components/Ratings";
import { Articles, Newsletter } from "../components/Articles";
import useReveal from "../hooks/useReveal";
import useCountUp from "../hooks/useCountUp";

/* ------------------------------------------------------------------
   IMAGE LIST (real file names from the reference About page)
------------------------------------------------------------------- */
const IMG = {
  collage1: "/images/a2-1.jpg", // woman with laptop
  collage2: "/images/a2-2.jpg", // team brainstorming
  collage3: "/images/a2-3.jpg", // couple with tablet
  collage4: "/images/a2-4.jpg", // fist bump
  founder: "/images/img-17.jpg", // Henry Adams (video)
  why: "/images/img-08.png", // With knowledge, skills & hard work
  strategy: "/images/img-07.png", // Right strategies & implementations
  data: "/images/img-14.png", // Data-driven digital marketing
  team: [1, 2, 3, 4, 5, 6, 7, 13].map((n) => `/images/team-${n}.jpg`), // last = "Grow with Us!"
  authors: [1, 2, 5, 8].map((n) => `/images/review-author-${n}.jpg`),
};

const h2 = "text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-tight";
const p = "text-lg leading-8 text-ink/60";
const eyebrow = "text-sm font-semibold uppercase tracking-wider text-ink/50";

/* image with a gray fallback while the real file is missing */
function Img({ src, alt = "", ratio = "4/3", className = "" }) {
  const [bad, setBad] = useState(false);
  if (bad) {
    return <div className={`bg-[#e9e8f2] ${className}`} style={{ aspectRatio: ratio }} />;
  }
  return <img src={src} alt={alt} onError={() => setBad(true)} className={className} />;
}

/* ============ 1. Hero + collage ============ */
function QuoteCard() {
  return (
    <div className="relative h-full overflow-hidden rounded-xl bg-[#323a52] p-8 text-white sm:p-10">
      <span aria-hidden="true" className="absolute -bottom-24 -right-24 h-105 w-105 rounded-full bg-white/4" />
      <span
        aria-hidden="true"
        className="absolute bottom-28 left-2 h-24 w-3 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1.5px,transparent_2px)] bg-size-[10px_10px]"
      />
      <svg className="relative h-14 w-14 text-white/20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 17c0-5 2-8 6-9v2.5c-2 .8-3 2.2-3 4.5H10V19H4v-2zm9 0c0-5 2-8 6-9v2.5c-2 .8-3 2.2-3 4.5H19V19h-6v-2z" />
      </svg>
      <p className="relative mt-4 text-[1.35rem] font-medium leading-[1.75]">
        Nullam tempor pretium a gravida donec congue ipsum porta justo integer
        dolor odio auctor a neque suscipit an ipsum integer congue purus at
        pretium turpis egestas and volute laoreet quaerat
      </p>
      <div className="relative mt-10">
        <h5 className="text-xl font-bold">Charlie Cheever</h5>
        <p className="mt-1 text-lg uppercase tracking-wide">CEO &amp; Co-Founder</p>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section className="pb-12 pt-32 lg:pt-40">
      <div className="mx-auto max-w-330 px-5">
        <Reveal>
          <h1 className="max-w-275 text-[clamp(2.5rem,5.6vw,5rem)] font-bold leading-[1.18]">
            We provide solutions for your creative ideas
          </h1>
          <p className="mt-8 max-w-250 text-lg leading-[1.9] text-ink/60 sm:text-xl sm:leading-[1.9]">
            An enim nullam tempor sapien gravida donec pretium ipsum porta justo
            integer and purus velna vitae auctor integer undo congue diam purus
            pretium and ligula tempor primis libero at tempus, blandit and
            cursus varius magnis at sapien egestas purus vitae purus an ipsum
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-[1560px] px-4">
        <div className="grid gap-6 lg:grid-cols-[7fr_10fr]">
          <div className="flex flex-col gap-6">
            <Reveal className="lg:ml-[21%]">
              <Img src={IMG.collage1} ratio="560/350" className="w-full rounded-xl object-cover" />
            </Reveal>
            <Reveal delay={100}>
              <Img src={IMG.collage2} ratio="708/393" className="w-full object-cover" />
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal>
              <Img src={IMG.collage3} ratio="1011/506" className="w-full rounded-xl object-cover" />
            </Reveal>
            <div className="grid items-start gap-6 md:grid-cols-[9fr_10fr] lg:pr-12">
              <Reveal>
                <QuoteCard />
              </Reveal>
              <Reveal delay={100}>
                <Img src={IMG.collage4} ratio="482/360" className="w-full rounded-xl object-cover" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 2. Mission + results ============ */
function Mission() {
  return (
    <section className="section-y">
      <div className="mx-auto grid max-w-330 gap-12 px-5 md:grid-cols-2 lg:gap-24">
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

/* ============ 3. Stats ============ */
function Stat({ end, suffix, title }) {
  const [ref, shown] = useReveal(0.4);
  const v = useCountUp(end, shown);
  return (
    <div ref={ref}>
      <div className="font-heading text-[clamp(3.5rem,6vw,5.5rem)] font-semibold leading-none tabular-nums">
        {v.toFixed(2)}
        {suffix}
      </div>
      <hr className="mt-6 w-[70%] border-ink/25" />
      <h5 className="mt-6 text-[1.6rem] font-semibold">{title}</h5>
      <p className="mt-3 max-w-90 text-[17px] leading-7 text-ink/60">
        Porta justo integer and velna vitae auctor and magna quaerat ligula
      </p>
    </div>
  );
}

function Stats() {
  return (
    <section className="section-y">
      <div className="mx-auto grid max-w-330 gap-12 px-5 md:grid-cols-3">
        <Stat end={26.62} suffix="k" title="Happy Customers" />
        <Stat end={13.54} suffix="k" title="Positive Ratings" />
        <Stat end={4.87} suffix="/5" title="Rating" />
      </div>
    </section>
  );
}

/* ============ 4. Co-founder (video) ============ */
function Founder() {
  const [open, setOpen] = useState(false);
  return (
    <section className="section-y relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff,#f5f3fc_20%,#f1eefa_80%,#ffffff)]">
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-0 hidden h-27.5 w-42.5 bg-[radial-gradient(circle,rgba(43,39,80,0.12)_1.5px,transparent_2px)] bg-size-[20px_20px] lg:block"
      />
      <div className="relative mx-auto grid max-w-330 items-center gap-12 px-5 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <Reveal>
          <span className={eyebrow}>Co-Founder at Martex</span>
          <h2 className="mt-4 text-[clamp(2.75rem,5.4vw,4.75rem)] font-bold leading-[1.1]">Henry Adams</h2>
          <p className="mt-8 text-xl leading-9 text-ink/60">
            &ldquo;Sodales tempor sapien diam purus ipsum quaerat and volute
            fusce a congue laoreet turpis neque diam auctor turpis vitae dolor
            magna luctus placerat neque ipsum fusce cursus ligula cursus purus
            vitae purus and ipsum suscipit. Nemo ipsam cubilia donec turpis undo
            egestas ipsum a purus sapien ultrice aliquam lacus and quaerat an
            ipsum augue turpis sapien cursus congue augue&rdquo;
          </p>
        </Reveal>

        <Reveal delay={100} className="relative">
          <Img src={IMG.founder} ratio="744/710" className="w-full rounded-2xl object-cover" />
          <button
            type="button"
            aria-label="Play video"
            onClick={() => setOpen(true)}
            className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5427f] text-white transition-transform hover:scale-105 sm:h-27.5 sm:w-27.5"
          >
            <svg className="ml-1.5 h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4l13 8-13 8z" />
            </svg>
          </button>
        </Reveal>
      </div>
      <VideoModal videoId="7e90gBu4pas" open={open} onClose={() => setOpen(false)} />
    </section>
  );
}

/* ============ 5. Services (2 x 3) ============ */
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

function Services() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-330 px-5">
        <Reveal className="mx-auto max-w-225 text-center">
          <h2 className="text-[clamp(2.25rem,4.6vw,4rem)] font-bold leading-[1.15]">
            We make your business gain more revenue at a glance
          </h2>
          <p className="mt-5 text-xl text-ink/60">Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Reveal>

        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 100}>
              <div className="flex gap-6">
                <div className="relative flex h-21 w-21 shrink-0 items-center justify-center rounded-full bg-[#f5427f]/[0.07] text-[#f5427f]">
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

/* ============ 6. Trusted by (6 logos) ============ */
function Trusted() {
  return (
    <section className="bg-white pb-2 pt-4">
      <div className="mx-auto max-w-322.5 px-5">
        <Reveal>
          <h5 className="text-center text-[1.6rem] font-medium">Trusted and used by over 3,400 companies</h5>
          <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <img key={n} src={`/images/brand-${n}.png`} alt="" className="h-14 w-auto object-contain sm:h-16" />
            ))}
          </div>
        </Reveal>
        <hr className="mt-12 border-ink/10 lg:mt-14" />
      </div>
    </section>
  );
}

/* ============ 7. Team ============ */
const team = [
  { name: "Jonathan Barnes", role: "Founder and CEO" },
  { name: "Jaime Fletcher", role: "Software Engineer" },
  { name: "Les Bakker", role: "Software Engineer" },
  { name: "Alyssa Garrison", role: "Web Development" },
  { name: "Charlotte Johnson", role: "Content Manager" },
  { name: "Olivia Steiner", role: "Head of Marketing" },
  { name: "Charles Fairless", role: "Operations Manager" },
];

function Team() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-330 px-5">
        <Reveal className="mx-auto max-w-225 text-center">
          <h2 className="text-[clamp(2.25rem,4.6vw,4rem)] font-bold leading-[1.15]">
            All we do is dream and craft amazing products
          </h2>
          <p className="mt-5 text-xl text-ink/60">Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 80}>
              <Img src={IMG.team[i]} alt={m.name} ratio="370/420" className="aspect-370/420 w-full rounded-2xl object-cover" />
              <h4 className="mt-6 text-[1.6rem] font-semibold leading-tight">{m.name}</h4>
              <p className="mt-1 text-lg text-ink/60">{m.role}</p>
            </Reveal>
          ))}

          <Reveal delay={240}>
            <Img src={IMG.team[7]} alt="Grow with us" ratio="370/420" className="aspect-370/420 w-full rounded-2xl object-cover" />
            <h4 className="mt-6 text-[1.6rem] font-semibold leading-tight">Grow with Us!</h4>
            <p className="mt-1 text-lg text-ink/60">hireme@domain.com</p>
          </Reveal>
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            to="/careers"
            className="inline-block rounded-lg border-2 border-ink px-10 py-4 text-xl font-semibold transition-colors hover:bg-ink hover:text-white"
          >
            Join our team
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 8. Why choose us (gray panel) ============ */
function WhyUs() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-330 px-5">
        <div className="relative overflow-hidden rounded-3xl bg-[#f5f4fa] px-6 py-12 lg:px-14 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className={eyebrow}>Why choose us</span>
              <h2 className="mt-4 text-[clamp(2.5rem,4.8vw,4.25rem)] font-bold leading-[1.15]">
                With knowledge, skills &amp; hard work
              </h2>
              <p className={`${p} mt-6`}>
                Sodales tempor sapien quaerat congue eget ipsum laoreet turpis
                neque auctor vitae eros dolor luctus placerat magna ligula
                cursus and purus pretium
              </p>
              <h5 className="mt-8 text-[1.75rem] font-semibold">Your road to success!</h5>
              <p className={`${p} mt-4`}>
                Sapien tempor sodales quaerat ipsum undo congue laoreet turpis
                neque auctor turpis vitae dolor luctus placerat magna and ligula
                cursus purus vitae
              </p>
            </Reveal>
            <Reveal delay={100}>
              <Img src={IMG.why} ratio="1/1" className="mx-auto w-full max-w-155" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 9. Strategies that work ============ */
function Strategies() {
  return (
    <section className="section-y">
      <div className="mx-auto grid max-w-330 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Img src={IMG.strategy} ratio="4/5" className="mx-auto w-full max-w-155" />
        </Reveal>
        <Reveal delay={100}>
          <span className={eyebrow}>Strategies that work</span>
          <h2 className="mt-4 text-[clamp(2.5rem,4.8vw,4.25rem)] font-bold leading-[1.15]">
            Right strategies &amp; implementations
          </h2>
          <p className={`${p} mt-6`}>
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus an ipsum suscipit
          </p>
          <p className={`${p} mt-6`}>
            Nemo ipsam egestas volute turpis egestas ipsum and purus sapien
            ultrice an aliquam quaerat ipsum augue turpis sapien cursus congue
            magna purus quaerat at ligula purus egestas magna cursus undo varius
            purus magnis sapien quaerat
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 10. Testimonials (2 staggered columns) ============ */
const reviews = [
  { name: "Scott Boxer", role: "@scott_boxer", text: "Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus egestas sapien vitae" },
  { name: "Joel Peterson", role: "Internet Surfer", text: "At sagittis congue augue and magna ipsum vitae a purus ipsum primis diam a cubilia laoreet augue egestas luctus a donec vitae ultrice ligula magna suscipit lectus gestas augue into cubilia" },
  { name: "Jennifer Harper", role: "App Developer", text: "An augue cubilia laoreet magna suscipit egestas and ipsum a lectus purus ipsum primis and augue ultrice ligula and egestas a suscipit lectus gestas undo auctor tempus feugiat impedit quaerat" },
  { name: "Evelyn Martinez", role: "WordPress Consultant", text: "Augue at vitae purus tempus egestas volutpat augue undo cubilia laoreet magna suscipit luctus dolor blandit at purus tempus feugiat impedit" },
];

function Avatar({ src, name }) {
  const [bad, setBad] = useState(false);
  if (bad) {
    return (
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5427f]/15 font-bold text-[#f5427f]">
        {name[0]}
      </span>
    );
  }
  return <img src={src} alt="" onError={() => setBad(true)} className="h-12 w-12 rounded-full object-cover" />;
}

function ReviewCard({ r, i }) {
  return (
    <div className="rounded-lg bg-white p-8 shadow-[0_6px_24px_rgba(43,39,80,0.08)]">
      <svg className="h-12 w-12 text-ink/10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 17c0-5 2-8 6-9v2.5c-2 .8-3 2.2-3 4.5H10V19H4v-2zm9 0c0-5 2-8 6-9v2.5c-2 .8-3 2.2-3 4.5H19V19h-6v-2z" />
      </svg>
      <p className="mt-3 text-lg leading-8 text-ink/60">{r.text}</p>
      <div className="mt-6 flex items-center gap-4">
        <Avatar src={IMG.authors[i]} name={r.name} />
        <div>
          <h6 className="text-xl font-semibold leading-tight">{r.name}</h6>
          <p className="text-base text-ink/50">{r.role}</p>
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <section className="section-y bg-[linear-gradient(to_bottom,#ffffff,#f8f8fc_18%,#f8f8fc_82%,#ffffff)]">
      <div className="mx-auto max-w-330 px-5">
        <Reveal className="mx-auto max-w-225 text-center">
          <h2 className="text-[clamp(2.25rem,4.6vw,4rem)] font-bold leading-[1.15]">
            Here&rsquo;s what our amazing clients are saying
          </h2>
          <p className="mt-5 text-xl text-ink/60">Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="space-y-6 md:pt-6">
            <Reveal><ReviewCard r={reviews[0]} i={0} /></Reveal>
            <Reveal delay={100}><ReviewCard r={reviews[2]} i={2} /></Reveal>
          </div>
          <div className="space-y-6">
            <Reveal delay={100}><ReviewCard r={reviews[1]} i={1} /></Reveal>
            <Reveal delay={200}><ReviewCard r={reviews[3]} i={3} /></Reveal>
          </div>
        </div>

        <Reveal className="mt-14">
          <Ratings />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 11. Data-driven digital marketing ============ */
function DataDriven() {
  return (
    <section className="bg-[#f6f5fb] py-14 lg:py-20">
      <div className="mx-auto grid max-w-330 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="text-[clamp(2.5rem,4.8vw,4.25rem)] font-bold leading-[1.15]">
            Data-driven digital marketing
          </h2>
          <ul className={`${p} mt-8 list-disc space-y-5 pl-6 marker:text-ink/40`}>
            <li>
              Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor
              ociis ultrice ipsum aliquam undo congue dolor cursus congue varius
              magnis
            </li>
            <li>
              Cursus purus suscipit vitae cubilia magnis diam volute egestas
              sapien ultrice auctor
            </li>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <Img src={IMG.data} ratio="7/6" className="mx-auto w-full max-w-170" />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ Page ============ */
export default function AboutUs() {
  return (
    <>
      <Intro />
      <Mission />
      <Stats />
      <Founder />
      <Services />
      <Trusted />
      <Team />
      <WhyUs />
      <Strategies />
      <Reviews />
            <DataDriven />
      <Articles />
      <Newsletter />
    </>
  );
}