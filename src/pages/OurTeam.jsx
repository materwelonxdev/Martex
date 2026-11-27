import { useState } from "react";
import Reveal from "../components/Reveal";
import Roles from "../components/Roles";
import HiringBanner from "../components/HiringBanner";

const people = [
  { name: "Jonathan Barnes", role: "Founder and CEO", socials: ["fb", "tw"] },
  { name: "Jaime Fletcher", role: "Senior Software Developer", socials: ["fb", "tw"] },
  { name: "Les Bakker", role: "Software Engineer", socials: ["fb", "tw"] },
  { name: "Alyssa Garrison", role: "Web Development", socials: ["fb", "dr"] },
  { name: "Charlotte Johnson", role: "Content Manager", socials: ["fb", "dr"] },
  { name: "Olivia Steiner", role: "Customers Manager", socials: ["fb", "tw"] },
  { name: "Charles Fairless", role: "Customers Manager", socials: ["fb", "tw"] },
  { name: "Nancy Taylor", role: "Head of Marketing", socials: ["fb", "in"] },
  { name: "Robert Walder", role: "Product Manager", socials: ["fb", "tw"] },
  { name: "Michael Green", role: "Marketing Manager", socials: ["fb", "in"] },
  { name: "Nadine Adams", role: "Marketing Copywriter", socials: ["fb", "pi"] },
  { name: "Andrew Barker", role: "Product Support Manager", socials: ["fb", "in"] },
];

/* ---------- social icons (gray, pink on hover) ---------- */
function Social({ type }) {
  const common = { className: "h-7 w-7", viewBox: "0 0 24 24", "aria-hidden": true };
  const icons = {
    fb: (
      <svg {...common}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
        <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.7V13h2.7v8h3.1z" fill="#fff" />
      </svg>
    ),
    tw: (
      <svg {...common}>
        <path d="M21 6.5c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.7-2.3.9a3.7 3.7 0 0 0-6.3 3.4C8.8 9.1 6.1 7.6 4.3 5.4c-.9 1.6-.4 3.6 1.1 4.6-.6 0-1.1-.2-1.6-.4 0 1.8 1.3 3.3 3 3.7-.5.1-1 .2-1.6.1.4 1.5 1.8 2.5 3.4 2.5A7.4 7.4 0 0 1 3 17.4 10.4 10.4 0 0 0 8.6 19c6.8 0 10.6-5.7 10.3-10.8.7-.5 1.4-1.2 2.1-1.7z" fill="currentColor" />
      </svg>
    ),
    in: (
      <svg {...common}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
        <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    dr: (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path d="M4 9c5 1 10 0 16-3M5 17c4-6 8-8 14-6M9 4c4 4 5 10 4 16" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    pi: (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <text x="12" y="17" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">P</text>
      </svg>
    ),
  };
  return icons[type];
}

/* photo with gray fallback */
function Photo({ src, name }) {
  const [bad, setBad] = useState(false);
  if (bad) return <div className="aspect-[489/559] w-full rounded-2xl bg-[#e9e8f2]" />;
  return (
    <img
      src={src}
      alt={name}
      onError={() => setBad(true)}
      className="aspect-[489/559] w-full rounded-2xl object-cover"
    />
  );
}

/* ============ 1. Intro + team grid ============ */
function Team() {
  return (
    <section className="bg-[linear-gradient(to_bottom,#ffffff,#f7f7fb_10%,#f7f7fb_90%,#ffffff)] pb-16 pt-32 lg:pt-40">
      <div className="mx-auto max-w-[1500px] px-5">
        <Reveal className="mx-auto max-w-[1100px] text-center">
          <h1 className="text-[clamp(2.5rem,5.4vw,5rem)] font-bold leading-[1.2]">
            All we do is dream and craft amazing products
          </h1>
        </Reveal>

        <div className="mt-16 grid gap-x-14 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 100}>
              <Photo src={`/images/team-${i + 1}.jpg`} name={m.name} />
              <div className="mt-6 flex items-start justify-between gap-4 px-2">
                <h4 className="text-[1.75rem] font-semibold leading-tight">{m.name}</h4>
                <div className="flex shrink-0 items-center gap-3 pt-1 text-ink/40">
                  {m.socials.map((s) => (
                    <a key={s} href="#" aria-label={s} className="transition-colors hover:text-[#f5427f]">
                      <Social type={s} />
                    </a>
                  ))}
                </div>
              </div>
              <p className="mt-1 px-2 text-xl text-ink/60">{m.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Contact strip ============ */
function Meet() {
  return (
    <section className="bg-white pb-16 pt-6 lg:pb-24">
      <div className="mx-auto max-w-[1500px] px-5">
        <Reveal className="text-center">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.15]">We can&rsquo;t wait to meet you</h2>
          <a
            href="mailto:hello@yourdomain.com"
            className="mt-8 inline-block rounded-md bg-[#f5427f] px-10 py-5 text-2xl font-semibold text-white transition-colors hover:bg-[#e12d6b]"
          >
            hello@yourdomain.com
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default function OurTeam() {
  return (
    <>
      <Team />
      <HiringBanner label="See open roles" to="/careers" />
      <Roles />
      <Meet />
    </>
  );
}