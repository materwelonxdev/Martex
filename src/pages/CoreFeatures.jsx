import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Img from "../components/Img";
import VideoModal from "../components/VideoModal";
import NewsletterModal from "../components/NewsletterModal";
import Services from "../components/Services";
import IntegrationCards from "../components/IntegrationCards";
import { PlugTools } from "../components/home/Workflow";
import { QA } from "../components/home/Finale";
import { Zapier, Analytics, AmplitudeBlue, HubSpot, MailChimp } from "../components/home/logos";
import useReveal from "../hooks/useReveal";
import useCountUp from "../hooks/useCountUp";

/* ------------------------------------------------------------------
   IMAGE LIST: guessed names for the new images (send me the gallery
   screenshot and I'll give you the exact ones). Missing = gray box.
------------------------------------------------------------------- */
const IMG = {
  hero: "/images/img-06.png",
  automate: "/images/img-05.png",
  grows: "/images/img-03.png",
  tablet: "/images/img-02.png",
  strategy: "/images/tablet-01.png",
  cta: "/images/img-04.png",
  oneplace: ["f_01.png", "f_05.png", "f_02.png"],
};

const h2 = "text-[clamp(2.25rem,4.2vw,3.5rem)] font-bold leading-[1.15]";
const sub = "mt-5 text-xl text-ink/60";
const p = "text-lg leading-8 text-ink/60";
const eyebrow = "text-sm font-semibold uppercase tracking-wider text-ink/50";
const bullets = `${p} mt-5 list-disc space-y-4 pl-6 marker:text-ink/40`;
const h5 = "text-[1.65rem] font-semibold leading-tight";

const Check = () => (
  <svg className="mt-2 h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="none" stroke="#f5427f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10l4 4 8-9" />
  </svg>
);

/* ============ 1. Hero: Achieve more with better workflows ============ */
function Productivity() {
  return (
    <section className="pb-12 pt-32 lg:pt-40">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className={eyebrow}>Productivity Focused</span>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.15]">
            Achieve more with better workflows
          </h1>
          <p className={`${p} mt-6`}>
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus an ipsum suscipit
          </p>
          <ul className={bullets}>
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
          <Img src={IMG.hero} ratio="1/1" className="mx-auto w-full max-w-[620px]" />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 3. Automate your way to success (gray panel) ============ */
function Automate() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-[1320px] px-5">
        <div className="rounded-[24px] bg-[#f6f5fb] px-6 py-12 lg:px-16 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className={eyebrow}>Enhance Engagement</span>
              <h2 className={`${h2} mt-4`}>Automate your way to success</h2>
              <p className={`${p} mt-6`}>
                Sodales tempor sapien quaerat congue eget ipsum laoreet turpis
                neque auctor vitae eros dolor luctus placerat magna ligula
                cursus and purus pretium
              </p>
              <h5 className={`${h5} mt-8`}>The smarter way to work</h5>
              <p className={`${p} mt-4`}>
                Sapien tempor sodales quaerat ipsum undo congue laoreet turpis
                neque auctor turpis vitae dolor luctus placerat magna and ligula
                cursus purus vitae
              </p>
            </Reveal>
            <Reveal delay={100}>
              <Img src={IMG.automate} ratio="1/1" className="mx-auto w-full max-w-[520px]" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 4. Solution that grows with you ============ */
function Grows() {
  return (
    <section className="section-y">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Img src={IMG.grows} ratio="1/1" className="mx-auto w-full max-w-[540px]" />
        </Reveal>
        <Reveal delay={100}>
          <h5 className={h5}>Solution that grows with you</h5>
          <p className={`${p} mt-4`}>
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus an ipsum suscipit
          </p>
          <h5 className={`${h5} mt-8`}>Connect your data sources</h5>
          <p className={`${p} mt-4`}>
            Tempor sapien sodales quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus an ipsum vitae suscipit purus
          </p>
          <ul className={bullets}>
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
      </div>
    </section>
  );
}

/* ============ 5. Smart solutions, real-time results ============ */
const ico = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-11 w-11",
};

const smart = [
  {
    title: "Integrated",
    icon: (
      <svg {...ico}>
        <path d="M24 6l18 9-18 9-18-9zM6 24l18 9 18-9M6 33l18 9 18-9" />
      </svg>
    ),
  },
  {
    title: "Flexible",
    icon: (
      <svg {...ico}>
        <path d="M24 6v36M6 24h36M24 6l-5 5M24 6l5 5M24 42l-5-5M24 42l5-5M6 24l5-5M6 24l5 5M42 24l-5-5M42 24l-5 5" />
      </svg>
    ),
  },
  {
    title: "Intuitive",
    icon: (
      <svg {...ico}>
        <path d="M20 22V10a3 3 0 0 1 6 0v12M26 22v-3a3 3 0 0 1 6 0v3M32 22v-1a3 3 0 0 1 6 0v10c0 7-5 12-12 12h-2c-5 0-8-3-11-7l-5-8a3 3 0 0 1 5-3l3 4V22" />
      </svg>
    ),
  },
  {
    title: "Efficient",
    icon: (
      <svg {...ico}>
        <path d="M40 24a16 16 0 1 1-6-12.5M36 6v8h-8M24 14v10l6 4" />
      </svg>
    ),
  },
];

function SmartCards() {
  return (
    <section className="section-y overflow-hidden">
      <div className="mx-auto grid max-w-[1320px] items-start gap-12 px-5 lg:grid-cols-[5fr_6fr] lg:gap-14">
        <Reveal>
          <span className={eyebrow}>One-Stop Solution</span>
          <h2 className={`${h2} mt-4`}>Smart solutions, real-time results</h2>
          <p className={`${p} mt-6`}>
            Sodales tempor sapien quaerat ipsum and congue undo laoreet turpis
            neque auctor turpis vitae dolor luctus placerat magna ligula and
            cursus vitae
          </p>
          <ul className={bullets}>
            <li>
              Tempor sapien quaerat undo ipsum laoreet diam purus sapien a dolor
              ociis ultrice ipsum aliquam congue a dolor cursus congue varius
              magnis
            </li>
            <li>
              Cursus purus suscipit vitae cubilia magnis diam volute egestas
              sapien ultrice auctor
            </li>
          </ul>
        </Reveal>

        <div className="relative">
          <div aria-hidden="true" className="absolute bottom-10 left-10 right-[-100vw] top-10 hidden bg-[#f6f6fb] lg:block" />
          <div className="relative grid gap-6 sm:grid-cols-2">
            {smart.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="h-full rounded-lg bg-white p-7 shadow-[0_6px_24px_rgba(43,39,80,0.08)]">
                  <div className="mb-5 text-[#f5427f]">{s.icon}</div>
                  <h5 className="text-xl font-semibold">{s.title}</h5>
                  <p className="mt-3 text-[17px] leading-7 text-ink/60">
                    Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 6. Everything in One Place ============ */
const oneplace = [
  { title: "Intuitive Dashboard", text: "Luctus egestas augue undo ultrice aliquam in lacus congue dapibus" },
  { title: "Effortless Integration", text: "Tempor laoreet augue undo ultrice aliquam in lacusq luctus feugiat" },
  { title: "Real-time Analytics", text: "Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus" },
];

function Everything() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-[1140px] px-5">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-tight">Everything in One Place</h2>
          <p className="mt-4 text-xl text-ink/60">Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {oneplace.map((f, i) => (
            <Reveal key={f.title} delay={i * 100} className="text-center">
              <Img src={`/images/${IMG.oneplace[i]}`} alt={f.title} ratio="4/3" className="mx-auto w-full max-w-[340px]" />
              <h5 className="mt-6 text-xl font-semibold">{f.title}</h5>
              <p className="mx-auto mt-3 max-w-[300px] text-[17px] leading-7 text-ink/60">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 7. Build a customer-centric marketing strategy (video + stats) ============ */
function Stat({ end, suffix = "", decimals = 0, text }) {
  const [ref, shown] = useReveal(0.4);
  const v = useCountUp(end, shown);
  return (
    <div ref={ref} className="flex items-center gap-5">
      <span className="font-heading text-6xl font-semibold tabular-nums text-ink/80 lg:text-7xl">
        {v.toFixed(decimals)}
        {suffix}
      </span>
      <p className="max-w-[170px] text-[17px] leading-7 text-ink/60">{text}</p>
    </div>
  );
}

function BuildStrategy() {
  const [open, setOpen] = useState(false);
  return (
    <section className="section-y">
      <div className="mx-auto max-w-[1320px] px-5">
        <div className="rounded-[24px] bg-[linear-gradient(to_bottom,#f4f2fc,#ebe8f7)] px-6 py-14 lg:px-16 lg:py-16">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <h2 className={h2}>Build a customer-centric marketing strategy</h2>
            <p className={`${p} mt-5`}>
              Aliquam a augue suscipit luctus neque purus ipsum neque dolor
              primis libero tempus, blandit and cursus varius and magnis sodales
            </p>
          </Reveal>

          <Reveal delay={100} className="relative mx-auto mt-12 max-w-[900px]">
            <Img src={IMG.tablet} ratio="900/560" className="w-full" />
            <button
              type="button"
              aria-label="Play video"
              onClick={() => setOpen(true)}
              className="absolute left-1/2 top-1/2 flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5427f] text-white transition-transform hover:scale-105"
            >
              <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#f5427f]/40" />
              <svg className="relative ml-1 h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 4l13 8-13 8z" />
              </svg>
            </button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          <Stat end={79} suffix="k" text="Porta justo integer and velna vitae auctor" />
          <Stat end={67} suffix="%" text="Ligula magna suscipit vitae and rutrum" />
          <Stat end={4.82} decimals={2} text="Sagittis congue augue egestas an egestas" />
        </div>
      </div>
      <VideoModal videoId="7e90gBu4pas" open={open} onClose={() => setOpen(false)} />
    </section>
  );
}

/* ============ 9. Three steps ============ */
const steps = ["Simple, Secure & Intuitive", "Weekly Email Reports", "No Personal Data Collected"];

function Steps() {
  return (
    <section className="section-y overflow-hidden">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="relative">
          <span aria-hidden="true" className="absolute bottom-6 left-5 top-6 w-px bg-ink/15" />
          <ul className="space-y-10">
            {steps.map((t, i) => (
              <Reveal key={t} delay={i * 100}>
                <li className="relative flex gap-6">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5427f] text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h5 className="text-[1.5rem] font-semibold leading-tight">{t}</h5>
                    <p className="mt-2 text-[17px] leading-7 text-ink/60">
                      Ligula risus auctor tempus feugiat dolor lacinia nemo purus
                      in lipsum purus sapien quaerat a primis viverra tellus
                      vitae luctus dolor ipsum neque ligula quaerat
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={100}>
          <Img src={IMG.tablet} ratio="760/520" className="w-full lg:ml-6 lg:w-[112%] lg:max-w-none" />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 10. Right strategies & implementations ============ */
function Strategies() {
  return (
    <section className="section-y">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-4 -top-6 hidden h-24 w-24 bg-[radial-gradient(circle,#6d4fd6_2px,transparent_2.5px)] bg-[length:14px_14px] lg:block"
          />
          <Img src={IMG.strategy} ratio="1/1" className="relative mx-auto w-full max-w-[560px]" />
        </Reveal>
        <Reveal delay={100}>
          <span className={eyebrow}>Strategies that work</span>
          <h2 className={`${h2} mt-4`}>Right strategies &amp; implementations</h2>
          <p className={`${p} mt-6`}>
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus an ipsum suscipit
          </p>
          <h5 className={`${h5} mt-8`}>Get more done in less time</h5>
          <ul className={`${p} mt-5 space-y-3`}>
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
      </div>
    </section>
  );
}

/* ============ 11. All Necessary Tools ============ */
const Slack = (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <rect x="6" y="16" width="14" height="5" rx="2.5" fill="#36c5f0" />
    <rect x="20" y="19" width="14" height="5" rx="2.5" fill="#2eb67d" />
    <rect x="16" y="6" width="5" height="14" rx="2.5" fill="#ecb22e" />
    <rect x="19" y="20" width="5" height="14" rx="2.5" fill="#e01e5a" />
  </svg>
);
const Dropbox = (
  <svg viewBox="0 0 40 40" className="h-9 w-9" fill="#0061ff">
    <path d="M12 6l8 5-8 5-8-5zM28 6l8 5-8 5-8-5zM12 17l8 5-8 5-8-5zM28 17l8 5-8 5-8-5zM20 24l8 5-8 5-8-5z" />
  </svg>
);
const Trello = (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <rect x="4" y="4" width="32" height="32" rx="5" fill="#0079bf" />
    <rect x="9" y="9" width="9" height="20" rx="2" fill="#fff" />
    <rect x="22" y="9" width="9" height="12" rx="2" fill="#fff" />
  </svg>
);
const Drive = (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <path d="M14 5h12l12 21H26z" fill="#ffba00" />
    <path d="M14 5L2 26l6 10 12-21z" fill="#0066da" />
    <path d="M8 36h26l4-10H12z" fill="#00ac47" />
  </svg>
);

const tools = [
  { name: "Zapier", sub: "Share findings", icon: <Zapier className="h-9 w-9" /> },
  { name: "Google Analytics", sub: "Share findings", icon: <Analytics className="h-9 w-9" /> },
  { name: "Amplitude", sub: "Share findings", icon: <AmplitudeBlue className="h-9 w-9" /> },
  { name: "Hubspot", sub: "Share findings", icon: <HubSpot className="h-9 w-9" /> },
  { name: "MailChimp", sub: "Import data", icon: <MailChimp className="h-9 w-9" /> },
  { name: "Slack", sub: "Share findings", icon: Slack },
  { name: "Dropbox", sub: "Import data", icon: Dropbox },
  { name: "Trello", sub: "Share findings", icon: Trello },
  { name: "Google Drive", sub: "Import data", icon: Drive },
];

function Tools() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-[1140px] px-5">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-tight">All Necessary Tools</h2>
          <p className="mt-4 text-xl text-ink/60">Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 100}>
              <div className="flex items-center gap-4 rounded-lg border border-ink/10 bg-white px-6 py-5 shadow-[0_2px_10px_rgba(43,39,80,0.04)]">
                {t.icon}
                <div>
                  <h6 className="text-xl font-semibold leading-tight">{t.name}</h6>
                  <p className="text-sm text-ink/50">{t.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            to="/#integrations"
            className="inline-block rounded-[4px] border-2 border-ink/70 px-6 py-3 text-lg font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            View all integrations
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 12. Track the progress (two cards) ============ */
function Progress() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-[1140px] px-5">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-tight">
            Track the progress towards objectives with key results
          </h2>
          <p className="mt-4 text-xl text-ink/60">Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Reveal>
        <div className="mt-12">
          <IntegrationCards />
        </div>
      </div>
    </section>
  );
}

/* ============ 14. Final purple card with the code window ============ */
function CodeCta() {
  return (
    <section className="bg-white pb-12 pt-4 lg:pb-16">
      <div className="mx-auto max-w-[1320px] px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-[24px] bg-[#654eb7] text-white">
            <span aria-hidden="true" className="absolute -left-16 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-white/[0.04]" />
            <div className="relative grid items-center gap-8 px-8 py-14 lg:grid-cols-[1fr_1.1fr] lg:px-16">
              <div>
                <h2 className="text-[clamp(2.5rem,4.8vw,4.25rem)] font-bold leading-[1.15]">
                  Getting started with Martex today!
                </h2>
                <p className="mt-5 max-w-[520px] text-xl leading-9">
                  Congue laoreet turpis neque auctor turpis vitae dolor a luctus
                  placerat and magna ligula cursus
                </p>
                <Link
                  to="/signup"
                  className="mt-8 inline-block rounded-[4px] bg-[#f5427f] px-8 py-4 text-xl font-semibold text-white transition-colors hover:bg-[#e12d6b]"
                >
                  Get started - it&rsquo;s free
                </Link>
              </div>
              <Img src={IMG.cta} ratio="4/3" className="mx-auto w-full max-w-[640px] lg:-mr-8" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function CoreFeatures() {
  return (
    <>
      <NewsletterModal delay={1000} />
      <Productivity />
      <Services />
      <Automate />
      <Grows />
      <SmartCards />
      <Everything />
      <BuildStrategy />
      <PlugTools />
      <Steps />
      <Strategies />
      <Tools />
      <Progress />
      <QA />
      <CodeCta />
    </>
  );
}