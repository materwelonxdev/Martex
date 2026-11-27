import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import { Zapier, Analytics, AmplitudeBlue, HubSpot, MailChimp } from "./logos";

const h2 = "text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-tight";
const sub = "mt-4 text-xl text-ink/60";
const pinkBtn =
  "inline-block rounded-[4px] bg-[#f5427f] px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-[#e12d6b]";

/* =============== Discover insights (chart) =============== */
const months = ["Sep 2022", "Oct 2022", "Nov 2022", "Dec 2022", "Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023", "June 2023"];

export function Insights() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-285 px-5">
        <Reveal className="mx-auto max-w-190 text-center">
          <h2 className={h2}>Discover insights across all your data with Martex</h2>
          <p className={sub}>Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Reveal>

        <Reveal
          delay={100}
          className="mx-auto mt-12 max-w-195 rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(43,39,80,0.12)]"
        >
          <div className="flex items-center justify-between text-ink/60">
            <span className="text-base">Total points</span>
            <span className="text-xs">
              from <b className="font-semibold text-ink/80">Jan 2023</b> &#9662; to{" "}
              <b className="font-semibold text-ink/80">June 2023</b> &#9662;
            </span>
          </div>

          <svg viewBox="0 0 640 240" className="mt-4 w-full" role="img" aria-label="Total points chart">
            {[60, 100, 140, 180].map((y) => (
              <line key={y} x1="30" x2="620" y1={y} y2={y} stroke="#eceaf3" />
            ))}
            <path
              d="M30 160 C70 130 95 120 125 132 S175 170 210 150 S260 112 295 120 S330 108 350 104 S395 138 430 132 S470 118 500 104 S540 88 560 100 S600 130 620 124"
              fill="none"
              stroke="#d9d9e3"
              strokeWidth="2"
            />
            <path
              d="M30 150 C60 118 85 105 110 118 S150 168 180 142 S225 100 255 112 S300 92 350 100 S390 150 430 140 S470 128 495 100 S530 70 555 92 S595 130 620 118"
              fill="none"
              stroke="#6f8cf0"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="350" cy="100" r="6" fill="#fff" stroke="#6f8cf0" strokeWidth="3" />
            <rect x="327" y="58" width="46" height="24" rx="4" fill="#fff" stroke="#e4e2ee" />
            <text x="350" y="74" textAnchor="middle" fontSize="11" fontWeight="600" fill="#2b2750">2345</text>
            {months.map((m, i) => (
              <text key={m} x={40 + i * 62} y="218" textAnchor="middle" fontSize="9" fill="#8b8aa3">
                {m}
              </text>
            ))}
          </svg>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <Link to="/signup" className={pinkBtn}>
            Monitor your activity
          </Link>
          <p className="mt-4 text-[15px] text-ink/50">
            Free 14 days trial &nbsp;|&nbsp; Exclusive Support &nbsp;|&nbsp; No Fees
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* =============== 3 steps =============== */
const steps = [
  { n: 1, t: "Register in 30 seconds" },
  { n: 2, t: "Customizable Dashboards" },
  { n: 3, t: "Improved Productivity" },
];

export function Steps() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto grid max-w-285 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <img src="/images/img-05.png" alt="Getting started" className="mx-auto w-full max-w-125" />
        </Reveal>

        <div className="relative">
          <span aria-hidden="true" className="absolute bottom-4 left-5 top-4 w-px bg-ink/15" />
          <ul className="space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <li className="relative flex gap-6">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                    {s.n}
                  </span>
                  <div>
                    <h5 className="text-[1.4rem] font-semibold">{s.t}</h5>
                    <p className="mt-2 text-[17px] leading-7 text-ink/60">
                      Ligula risus auctor tempus feugiat dolor lacinia nemo purus
                      in lipsum purus sapien quaerat a primis viverra tellus vitae
                      luctus dolor ipsum neque ligula quaerat
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* =============== Testimonials + ratings =============== */
const reviews = [
  { name: "Evelyn Martinez", role: "WordPress Consultant", text: "Augue at vitae purus tempus egestas volutpat augue undo cubilia laoreet magna suscipit luctus dolor blandit at purus tempus feugiat impedit" },
  { name: "Scott Boxer", role: "@scott_boxer", text: "Etiam sapien sagittis congue augue a massa varius egestas ultrice varius magna a tempus aliquet undo cursus suscipit" },
  { name: "Joel Peterson", role: "Internet Surfer", text: "At sagittis congue augue diam egestas magna an ipsum vitae purus ipsum primis and cubilia laoreet augue egestas a luctus donec ligula porta augue magna suscipit lectus gestas" },
  { name: "Mary Foster", role: "Product Designer", text: "Sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae" },
  { name: "Robert Hayes", role: "Startup Founder", text: "Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice ipsum aliquam undo congue dolor cursus purus congue" },
  { name: "Lisa Patterson", role: "Marketing Lead", text: "Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue magna placerat" },
  { name: "Daniel Kim", role: "Growth Manager", text: "Magna dolor luctus at egestas sapien porta semper lacus and cursus feugiat at primis ultrice a ligula auctor" },
  { name: "Carla Reyes", role: "Freelancer", text: "Volute turpis dolores and sagittis congue sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque" },
];

function usePerView() {
  const get = () => (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
  const [n, setN] = useState(get);
  useEffect(() => {
    const on = () => setN(get());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return n;
}

function Stars({ value }) {
  return (
    <span className="inline-flex">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative text-[15px] leading-none text-ink/15">
            ★
            <span className="absolute left-0 top-0 overflow-hidden text-amber-400" style={{ width: `${fill * 100}%` }}>
              ★
            </span>
          </span>
        );
      })}
    </span>
  );
}

const platforms = [
  { name: "Capterra", score: 4.7, logo: <span className="text-[19px] font-bold text-[#1f5fa6]">&#9654; Capterra</span> },
  { name: "Trustpilot", score: 4.95, logo: <span className="text-[19px] font-bold text-ink"><span className="text-[#00b67a]">★</span> Trustpilot</span> },
  { name: "G2 Crowd", score: 4.24, logo: <span className="text-[19px] font-bold text-ink"><span className="text-[#ff492c]">G2</span> | CROWD</span> },
];

export function Testimonials() {
  const perView = usePerView();
  const pages = Math.ceil(reviews.length / perView);
  const [page, setPage] = useState(0);
  const current = Math.min(page, pages - 1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setPage((p) => (p + 1) % pages), 5000);
    return () => clearInterval(id);
  }, [pages]);

  // last page is aligned to the end so it never shows empty space
  const first = Math.min(current * perView, reviews.length - perView);

  return (
    <section
      id="testimonials"
      className="section-y bg-[linear-gradient(to_bottom,#ffffff,#f8f8fc_18%,#f8f8fc_82%,#ffffff)]"
    >
      <div className="mx-auto max-w-285 px-5">
        <Reveal className="mx-auto max-w-190 text-center">
          <h2 className={h2}>Here&rsquo;s what our amazing clients are saying</h2>
          <p className={sub}>Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Reveal>

        <div className="mt-12 overflow-hidden py-3">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${first * (100 / perView)}%)` }}
          >
            {reviews.map((r, i) => (
              <div key={r.name} style={{ flex: `0 0 ${100 / perView}%` }} className="px-3">
                <div className="flex h-full flex-col rounded-lg bg-white p-7 shadow-[0_6px_24px_rgba(43,39,80,0.08)]">
                  <svg className="h-10 w-10 text-ink/10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4 17c0-5 2-8 6-9v2.5c-2 .8-3 2.2-3 4.5H10V19H4v-2zm9 0c0-5 2-8 6-9v2.5c-2 .8-3 2.2-3 4.5H19V19h-6v-2z" />
                  </svg>
                  <p className="mt-3 flex-1 text-[17px] leading-7 text-ink/60">{r.text}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src={`/images/review-author-${(i % 8) + 1}.jpg`}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <h6 className="text-base font-semibold leading-tight">{r.name}</h6>
                      <p className="text-sm text-ink/50">{r.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-2 w-2 rounded-full transition-colors ${i === current ? "bg-ink/60" : "bg-ink/20"}`}
            />
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <h5 className="text-lg text-ink/60">Our clients love us as much as we love them</h5>
          <div className="mt-6 flex flex-wrap items-start justify-center gap-x-14 gap-y-8">
            {platforms.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-3">
                {p.logo}
                <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm text-ink/60 shadow-[0_2px_10px_rgba(43,39,80,0.08)]">
                  <Stars value={p.score} />
                  {p.score}/5
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =============== Integrations panel =============== */
const tools = [
  { name: "Zapier", icon: <Zapier className="h-10 w-10" /> },
  { name: "Google Analytics", icon: <Analytics className="h-10 w-10" /> },
  { name: "Amplitude", icon: <AmplitudeBlue className="h-10 w-10" /> },
  { name: "Hubspot", icon: <HubSpot className="h-10 w-10" /> },
  { name: "MailChimp", icon: <MailChimp className="h-10 w-10" /> },
];

export function Integrations() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-285 px-5">
        <div className="relative overflow-hidden rounded-[20px] bg-[#f1effa] px-6 py-14 text-center sm:px-12">
          <span aria-hidden="true" className="absolute left-[18%] top-5 h-3 w-3 rounded-full bg-white/70" />
          <span aria-hidden="true" className="absolute right-[10%] top-10 h-3.5 w-3.5 rounded-full bg-white/70" />
          <span aria-hidden="true" className="absolute bottom-16 left-[48%] h-4 w-4 rounded-full bg-white/70" />

          <Reveal className="relative">
            <h2 className="mx-auto max-w-140 text-[clamp(2rem,3.6vw,3rem)] font-bold leading-[1.15]">
              Automate your workflow with our integrations
            </h2>
            <p className={sub}>Ligula risus auctor tempus magna feugiat lacinia.</p>

            <div className="mx-auto mt-10 grid max-w-190 grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
              {tools.map((t) => (
                <div key={t.name} className="flex flex-col items-center">
                  <div className="flex h-19.5 w-19.5 items-center justify-center rounded-lg bg-white shadow-[0_4px_16px_rgba(43,39,80,0.08)]">
                    {t.icon}
                  </div>
                  <span className="mt-3 text-[15px] font-semibold leading-tight text-ink/80">{t.name}</span>
                </div>
              ))}
            </div>

            <Link
              to="/#integrations"
              className="mt-10 inline-block rounded-sm border-2 border-ink px-6 py-3 text-lg font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              View all integrations
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =============== Questions & Answers =============== */
const qa = [
  { q: "Getting started with Martex", a: ["Etiam amet mauris suscipit in odio integer congue metus and vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus blandit and laoreet"] },
  { q: "What's inside the package?", a: ["An enim nullam tempor sapien gravida donec ipsum and enim porta justo integer at velna vitae auctor integer congue undo magna laoreet augue pretium purus pretium ligula"] },
  { q: "How do I choose a plan?", a: ["Fringilla risus, luctus mauris orci auctor purus euismod pretium purus pretium rutrum tempor sapien", "Nemo ipsam egestas volute turpis dolores aliquam quaerat sodales sapien undo pretium a purus"] },
  { q: "How does Martex handle my privacy?", a: ["Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus dolor luctus", "An enim nullam tempor sapien gravida donec congue metus. Vitae arcu mollis blandit integer nemo volute velna"] },
  { q: "I have an issue with my account", a: ["Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus libero and quisque gravida odio neque blandit justo aliquam molestie nunc sapien justo"] },
  { q: "Can I cancel at anytime?", a: ["An enim nullam tempor gravida donec enim ipsum porta justo integer at odio velna vitae auctor integer congue magna purus pretium ligula"] },
];

export function QA() {
  const col = (items, offset) =>
    items.map((it, i) => (
      <div key={it.q}>
        <h5 className="text-[1.35rem] font-semibold leading-snug text-ink/90">
          {offset + i + 1}. {it.q}
        </h5>
        {it.a.map((t) => (
          <p key={t} className="mt-3 text-[17px] leading-7 text-ink/60">{t}</p>
        ))}
      </div>
    ));

  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-285 px-5">
        <Reveal className="mx-auto max-w-190 text-center">
          <h2 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold leading-tight">Questions &amp; Answers</h2>
          <p className={sub}>Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Reveal>

        <Reveal delay={100} className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          <div className="space-y-10">{col(qa.slice(0, 3), 0)}</div>
          <div className="space-y-10">{col(qa.slice(3), 3)}</div>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <p className="inline-block rounded-full bg-[#f1f1f7] px-7 py-3 text-ink/60">
            Have any questions?{" "}
            <Link to="/contact" className="font-semibold text-brand underline">
              Get in Touch
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* =============== Final CTA card =============== */
export function CtaCard() {
  return (
    <section className="bg-white pb-12 pt-4 lg:pb-16">
      <div className="mx-auto max-w-285 px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#6b36a8,#4b2681)] px-6 py-16 text-center text-white sm:py-20">
            <div
              aria-hidden="true"
              className="absolute bottom-4 left-4 h-24 w-40 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_1.5px,transparent_2px)] bg-size-[14px_14px]"
            />
            <div
              aria-hidden="true"
              className="absolute right-4 top-4 h-24 w-32 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_1.5px,transparent_2px)] bg-size-[14px_14px]"
            />
            <h2 className="relative mx-auto max-w-155 text-[clamp(2.25rem,4.4vw,3.5rem)] font-bold leading-[1.15]">
              Starting with Martex is easy, fast and free
            </h2>
            <p className="relative mt-3 text-xl">It only takes a few clicks to get started</p>
            <Link to="/signup" className={`${pinkBtn} relative mt-8`}>
              Get started - it&rsquo;s free
            </Link>
            <p className="relative mt-5 flex items-center justify-center gap-2 text-[15px]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12l5 5L20 6" />
              </svg>
              Free for 14 days, no credit card required.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}