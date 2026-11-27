import Reveal from "../Reveal";

const h = "text-[1.75rem] font-semibold leading-snug";
const p = "mt-4 text-[17px] leading-7 text-ink/60";
const ul = "mt-4 list-disc space-y-3 pl-5 text-[17px] leading-7 text-ink/60 marker:text-ink/40";
const eyebrow = "text-sm font-semibold uppercase tracking-wider text-ink/40";
const h2 = "mt-3 text-[clamp(2.25rem,3.6vw,3rem)] font-bold leading-[1.15]";

const ico = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-12 w-12",
};

const solutions = [
  {
    title: "Content Marketing",
    icon: (
      <svg {...ico}>
        <path d="M24 6l18 9-18 9-18-9zM6 24l18 9 18-9M6 33l18 9 18-9" />
      </svg>
    ),
  },
  {
    title: "Pay Per Click (PPC)",
    icon: (
      <svg {...ico}>
        <rect x="8" y="16" width="18" height="26" rx="9" />
        <path d="M17 16v9" />
        <circle cx="34" cy="14" r="8" />
        <path d="M34 9v10M31.5 12c0-1 1-1.6 2.5-1.6s2.5.6 2.5 1.6-1 1.4-2.5 1.6-2.5.6-2.5 1.6 1 1.6 2.5 1.6 2.5-.6 2.5-1.6" />
      </svg>
    ),
  },
  {
    title: "Video Marketing",
    icon: (
      <svg {...ico}>
        <rect x="6" y="8" width="36" height="26" rx="2" />
        <path d="M20 15l10 6-10 6zM24 34v6M16 40h16" />
      </svg>
    ),
  },
  {
    title: "Business Analytics",
    icon: (
      <svg {...ico}>
        <path d="M8 42V30h6v12M18 42V22h6v20M28 42V14h6v28M38 42V8h4M8 24l10-8 8 4 14-12" />
      </svg>
    ),
  },
];

const Check = () => (
  <svg className="mt-1.5 h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="none" stroke="#f5427f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10l4 4 8-9" />
  </svg>
);

/* ---------- The smarter way to work ---------- */
export function SmarterWork() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto grid max-w-285 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <img src="/images/img-03.png" alt="Dashboard widgets" className="mx-auto w-full max-w-130" />
        </Reveal>
        <Reveal delay={100}>
          <h5 className={h}>The smarter way to work</h5>
          <p className={p}>
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus an ipsum suscipit
          </p>
          <h5 className={`${h} mt-8`}>Full access to all features</h5>
          <ul className={ul}>
            <li>
              Cursus purus suscipit vitae cubilia magnis volute egestas vitae
              sapien turpis sodales magna undo aoreet primis
            </li>
            <li>
              Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
              ultrice ipsum aliquam undo congue dolor cursus purus congue and
              ipsum purus sapien a blandit
            </li>
          </ul>
          <a
            href="#smart-solutions"
            className="mt-8 inline-block rounded-sm border-2 border-ink px-6 py-3 text-lg font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            What&rsquo;s possible?
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Smart solutions, real-time results ---------- */
export function SmartSolutions() {
  return (
    <section id="smart-solutions" className="section-y overflow-hidden bg-white">
      <div className="mx-auto grid max-w-285 items-start gap-12 px-5 lg:grid-cols-[5fr_6fr] lg:gap-14">
        {/* Left: text, top-aligned with the first row of cards */}
        <Reveal>
          <span className={eyebrow}>One-Stop Solution</span>
          <h2 className={h2}>Smart solutions, real-time results</h2>
          <p className={p}>
            Sodales tempor sapien quaerat ipsum and congue undo laoreet turpis
            neque auctor turpis vitae dolor luctus placerat magna ligula and
            cursus vitae
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

        {/* Right: cards on a gray panel that bleeds off the right edge */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-10 left-10 right-[-100vw] top-10 hidden bg-[#f6f6fb] lg:block"
          />
          <div className="relative grid gap-6 sm:grid-cols-2">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="h-full rounded-lg bg-white p-7 shadow-[0_6px_24px_rgba(43,39,80,0.08)]">
                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center text-brand">
                    <span aria-hidden="true" className="absolute left-3 top-1 h-10 w-10 rounded-full bg-brand/10 blur-sm" />
                    <span className="relative">{s.icon}</span>
                  </div>
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

/* ---------- Plug your essential tools in few clicks ---------- */
export function PlugTools() {
  return (
    <section id="integrations" className="section-y bg-white">
      <div className="mx-auto grid max-w-285 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <img src="/images/img-02.png" alt="Connected tools" className="mx-auto w-full max-w-130" />
        </Reveal>
        <Reveal delay={100}>
          <span className={eyebrow}>Easy Integration</span>
          <h2 className={h2}>Plug your essential tools in few clicks</h2>
          <ul className={`${ul} mt-6`}>
            <li>
              Cursus purus suscipit vitae cubilia magnis volute egestas vitae
              sapien turpis sodales magna undo aoreet primis
            </li>
            <li>
              Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
              ultrice ipsum aliquam undo congue dolor cursus purus congue and
              ipsum purus sapien a blandit
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}