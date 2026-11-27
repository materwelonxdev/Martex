import Reveal from "../Reveal";
import useReveal from "../../hooks/useReveal";
import useCountUp from "../../hooks/useCountUp";

/* ---------- tiny logo approximations ---------- */
const MailChimp = (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <circle cx="20" cy="20" r="20" fill="#ffe01b" />
    <ellipse cx="15" cy="18" rx="2.2" ry="2.8" fill="#222" />
    <ellipse cx="25" cy="18" rx="2.2" ry="2.8" fill="#222" />
    <path d="M13 26c3 3 11 3 14 0" stroke="#222" strokeWidth="2.4" fill="none" strokeLinecap="round" />
  </svg>
);
const Amplitude = (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <circle cx="20" cy="20" r="20" fill="#e3e5ef" />
    <path d="M12 28L20 11l8 17M15.5 23h9" stroke="#2f6bff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Analytics = (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <rect x="25" y="4" width="10" height="32" rx="5" fill="#f9ab00" />
    <rect x="14.5" y="15" width="10" height="21" rx="5" fill="#e37400" />
    <circle cx="9" cy="31" r="5" fill="#e37400" />
  </svg>
);
const HubSpot = (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <circle cx="22" cy="24" r="8" stroke="#ff7a59" strokeWidth="4" fill="none" />
    <path d="M22 16V8M12 12l7 8" stroke="#ff7a59" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="22" cy="6" r="3" fill="#ff7a59" />
  </svg>
);

/* ---------- integration row ---------- */
function Row({ icon, name, on }) {
  return (
    <div
      className={`relative ml-7 flex items-center gap-3 rounded-lg border border-ink/5 bg-white px-4 py-3 shadow-[0_2px_8px_rgba(43,39,80,0.06)] ${
        on ? "" : "opacity-40"
      }`}
    >
      <span className="absolute -left-7 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-white">
        <svg className="h-3 w-3" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 2v8M2 6h8" />
        </svg>
      </span>
      {icon}
      <span className="text-xl font-semibold text-ink">{name}</span>
      <span className={`relative ml-auto h-5 w-10 rounded-full ${on ? "bg-green-400" : "bg-ink/20"}`}>
        <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${on ? "right-0.5" : "left-0.5"}`} />
      </span>
    </div>
  );
}

/* ---------- stat with count-up ---------- */
function Stat({ end, format, text }) {
  const [ref, shown] = useReveal(0.4);
  const value = useCountUp(end, shown);
  return (
    <div ref={ref} className="flex items-center gap-5">
      <span className="font-heading text-6xl font-semibold tabular-nums text-ink/50 lg:text-7xl">
        {format(value)}
      </span>
      <p className="max-w-[170px] text-[17px] leading-7 text-ink/50">{text}</p>
    </div>
  );
}

const cardCls = "flex flex-col rounded-[20px] bg-[#f6f6fb] px-8 pt-12 sm:px-12";

export default function Reach() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-[1140px] px-5">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-tight">
            Reach your audience through social media marketing
          </h2>
          <p className="mt-4 text-xl text-ink/60">
            Ligula risus auctor tempus magna feugiat lacinia.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Card 1: integrations */}
          <Reveal className={cardCls}>
            <h4 className="text-center text-[1.65rem] font-semibold">Marketing Integrations</h4>
            <p className="mx-auto mt-3 max-w-[360px] text-center text-[17px] leading-7 text-ink/60">
              Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero
            </p>
            <div className="relative mx-auto mt-8 h-[250px] w-full max-w-[360px] space-y-3 overflow-hidden [mask-image:linear-gradient(to_bottom,#000_70%,transparent)]">
              <span aria-hidden="true" className="absolute left-[10px] top-6 h-[85%] w-px bg-ink/15" />
              <Row icon={MailChimp} name="MailChimp" on />
              <Row icon={Amplitude} name="Amplitude" />
              <Row icon={Analytics} name="Google Analytics" on />
              <Row icon={HubSpot} name="HubSpot" />
            </div>
          </Reveal>

          {/* Card 2: video */}
          <Reveal delay={100} className={`${cardCls} pb-12`}>
            <div className="relative mx-auto flex h-[250px] w-full max-w-[420px] items-center justify-center">
              <div aria-hidden="true" className="absolute inset-x-0 top-2 space-y-3 opacity-50">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-12 rounded-lg border border-ink/5 bg-white/70" />
                ))}
              </div>
              <div className="relative w-[78%] rounded-xl bg-white p-3 shadow-[0_10px_30px_rgba(43,39,80,0.12)]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="mt-3 h-[130px] rounded bg-[repeating-linear-gradient(45deg,#f1f1f6,#f1f1f6_6px,#e9e9f0_6px,#e9e9f0_12px)]" />
                <button
                  type="button"
                  aria-label="Play video"
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-[40%] items-center justify-center rounded-full bg-[#6e5a95] text-white transition-transform hover:scale-105"
                >
                  <svg className="ml-1 h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 4l13 8-13 8z" />
                  </svg>
                </button>
              </div>
            </div>
            <h4 className="mt-8 text-center text-[1.65rem] font-semibold">Productivity Focused</h4>
            <p className="mx-auto mt-3 max-w-[360px] text-center text-[17px] leading-7 text-ink/60">
              Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero
            </p>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          <Stat end={89} format={(v) => `${Math.round(v)}k`} text="Porta justo integer and velna vitae auctor" />
          <Stat end={76} format={(v) => `${Math.round(v)}%`} text="Ligula magna suscipit vitae and rutrum" />
          <Stat end={4.93} format={(v) => v.toFixed(2)} text="Sagittis congue augue egestas an egestas" />
        </div>

        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
      </div>
    </section>
  );
}