import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const latest = {
  version: "4.13.019",
  date: "2023-05-31",
  size: "68.91 MB",
  href: "#",
  notes: [
    { b: "OS X", t: " (10.7 or later is required)" },
    { b: "Windows", t: " - also available as a portable version" },
    { b: "Windows 64 bit", t: " - also available as a portable version" },
    { t: 'Fixed Bug: "Euismod purus and blandit"' },
    { t: "Fixed Crash#4680682692" },
  ],
};

const older = [
  {
    version: "4.11.020",
    date: "2023-05-18",
    size: "62.46 MB",
    href: "#",
    notes: [
      "Quaerat sodales sapien undo euismod purus and blandit egestas magna on macOS 10.12.*",
      "Fixed suscipit lectus auctor integer cursus orci vitae auctor integer",
      "Fixed Fringilla risus nec, luctus mauris auctor integer an auctor cursus euismod",
      "Fixed Crash#8341682687",
    ],
  },
  {
    version: "4.08.106",
    date: "2023-04-12",
    size: "58.83 MB",
    href: "#",
    notes: [
      "Quaerat sodales sapien undo euismod magna on 10.12 (Sierra)",
      "Fixed suscipit lectus auctor integer cursus orci vitae auctor integer",
      "Fixed risus nec luctus mauris auctor integer an integera congue magna",
      "Fixed cubilia laoreet magna at auctor integer congue egestas",
      "Fringilla risus nec, luctus mauris auctor integer an auctor cursus euismod purus pretium efficitur ipsum ligula undo cubilia laoreet magna and dolor suscipit",
      "Fixes other minor bugs",
    ],
  },
  {
    version: "4.0.018",
    date: "2023-02-26",
    size: "64.95 MB",
    href: "#",
    notes: [
      "Fixes integer cursus orci bugs on 10.13 (High Sierra)",
      "Fixed auctor integer cursus orci vitae auctor integer",
      "Fixed Crash#8341689840",
      "Fixes other minor bugs",
    ],
  },
  {
    version: "3.76.231",
    date: "2022-12-08",
    size: "57.39 MB",
    href: "#",
    notes: [
      "Quaerat sodales sapien undo euismod magna on 10.12 (Sierra)",
      "Fixed suscipit lectus auctor integer cursus orci vitae auctor integer",
      "Fixes integer cursus orci bugs on 10.13 (High Sierra)",
      "Fixed auctor integer cursus orci vitae auctor integer",
    ],
  },
];

function DownloadIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      aria-hidden="true"
    >
      <path d="M10 3v11M5 9.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17h12" strokeLinecap="round" />
    </svg>
  );
}

function VersionBlock({ release, primary = false }) {
  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
          <span
            className={`font-heading leading-none tracking-tight text-ink ${
              primary
                ? "text-5xl font-medium sm:text-[64px]"
                : "text-4xl font-medium sm:text-[54px]"
            }`}
          >
            {release.version}
          </span>
          <span className="text-xl text-ink/45 sm:text-[26px]">
            {release.date}
          </span>
          <span className="text-xl font-bold text-ink sm:text-[26px]">
            {release.size}
          </span>
        </div>

        <a
          href={release.href}
          className={`inline-flex shrink-0 items-center justify-center gap-3 rounded-md px-8 py-4 text-xl font-semibold transition-colors sm:text-2xl ${
            primary
              ? "bg-[#1677ff] text-white hover:bg-[#0f5fd6]"
              : "border border-ink/20 bg-white text-ink hover:border-[#1677ff] hover:text-[#1677ff]"
          }`}
        >
          <DownloadIcon />
          Download {release.version}
        </a>
      </div>

      <div className="mt-8 border-t border-dashed border-ink/20 pt-8">
        <ul className="list-disc space-y-3 pl-6 text-xl leading-9 text-ink/60 marker:text-ink/45 sm:text-[23px]">
          {release.notes.map((n, i) =>
            typeof n === "string" ? (
              <li key={i}>{n}</li>
            ) : (
              <li key={i}>
                {n.b && <strong className="font-bold text-ink/70">{n.b}</strong>}
                {n.t}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

function FaqIllustration() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <svg
        viewBox="0 0 400 300"
        className="mx-auto w-full max-w-[460px]"
        role="img"
        aria-label="Support illustration"
      >
        <rect x="270" y="20" width="70" height="70" rx="4" fill="#e6e6ee" />
        <rect x="20" y="60" width="150" height="8" fill="#dedee8" />
        <rect x="30" y="20" width="14" height="40" fill="#e6e6ee" />
        <rect x="50" y="28" width="10" height="32" fill="#dedee8" />
        <path d="M110 270c0-80 40-120 90-120s90 40 90 120z" fill="#7a4fc2" />
        <circle cx="200" cy="105" r="42" fill="#fff" stroke="#1a1f3a" strokeWidth="5" />
        <path d="M156 100c0-45 88-45 88 0" fill="#1a1f3a" />
        <rect x="140" y="170" width="120" height="75" rx="8" fill="#e8e8f2" stroke="#1a1f3a" strokeWidth="4" />
        <circle cx="200" cy="208" r="12" fill="#fff" />
        <line x1="50" y1="262" x2="350" y2="262" stroke="#1a1f3a" strokeWidth="4" />
      </svg>
    );
  }

  return (
    <img
      src="/images/download/faq-illustration.png"
      alt="Support illustration"
      loading="lazy"
      onError={() => setFailed(true)}
      className="mx-auto w-full max-w-[560px]"
    />
  );
}

export default function Download() {
  return (
    <div className="bg-white text-ink">
      {/* 1. LATEST + OLDER VERSIONS */}
      <section className="bg-[#f7f7fb] pb-20 pt-32 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-[1140px] px-5">
          <Reveal>
            <h1 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-tight">
              Latest Version
            </h1>
            <div className="mt-10">
              <VersionBlock release={latest} primary />
            </div>
          </Reveal>

          <Reveal className="mt-20 lg:mt-24">
            <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-tight">
              Older Versions
            </h2>
          </Reveal>

          <div className="mt-10 space-y-16 lg:space-y-20">
            {older.map((release, i) => (
              <Reveal key={release.version} delay={i * 60}>
                <VersionBlock release={release} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ANY QUESTIONS */}
      <section className="bg-gradient-to-b from-[#f7f7fb] to-[#f1f1f9] py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1140px] items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-[clamp(2.5rem,5vw,4.25rem)] font-bold leading-[1.1]">
              Any questions?
            </h2>
            <p className="mt-5 max-w-[520px] text-xl leading-9 text-ink/60 sm:text-[26px] sm:leading-[54px]">
              Don't hesitate to contact us about any question you might be
              interested in
            </p>
            <Link
              to="/faqs"
              className="mt-8 inline-block rounded-sm bg-[#1677ff] px-9 py-5 text-xl font-semibold text-white transition-colors hover:bg-[#0f5fd6] sm:text-2xl"
            >
              Read the FAQs
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <FaqIllustration />
          </Reveal>
        </div>
      </section>
    </div>
  );
}