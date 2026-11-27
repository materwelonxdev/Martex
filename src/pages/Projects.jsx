import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const baseProjects = [
  { title: "Mockup Poster", src: "/images/projects/project-1.jpg", bg: "bg-[#e8a98a]" },
  { title: "Glued Poster", src: "/images/projects/project-2.jpg", bg: "bg-[#5b2d86]" },
  { title: "Double Color", src: "/images/projects/project-3.jpg", bg: "bg-[#c9b79c]" },
  { title: "Reactivity", src: "/images/projects/project-4.jpg", bg: "bg-[#f6cf0f]" },
  { title: "Vintage Poster", src: "/images/projects/project-5.jpg", bg: "bg-[#dcdcdc]" },
  { title: "Paper Portrait", src: "/images/projects/project-6.jpg", bg: "bg-[#a9a9a9]" },
];

const moreTitles = [
  "Retro Flyer",
  "Neon Typography",
  "Brush Stroke Cover",
  "Minimal Layout",
  "Collage Cutout",
  "Bold Grid Poster",
  "Halftone Portrait",
  "Paper Texture",
  "Abstract Shapes",
  "Sunset Gradient",
  "Type Specimen",
  "Gallery Print",
];

// Pages 2 and 3 reuse the first six images until you add your own
const projects = [
  ...baseProjects,
  ...moreTitles.map((title, i) => ({
    title,
    src: baseProjects[i % 6].src,
    bg: baseProjects[i % 6].bg,
  })),
];

const PER_PAGE = 6;

const testimonials = [
  {
    name: "Scott Boxer",
    role: "@scott_boxer",
    avatar: "/images/avatars/avatar-1.jpg",
    text: "Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus egestas sapien vitae",
  },
  {
    name: "Joel Peterson",
    role: "Internet Surfer",
    avatar: "/images/avatars/avatar-2.jpg",
    text: "At sagittis congue augue and magna ipsum vitae a purus ipsum primis diam a cubilia laoreet augue egestas luctus a donec vitae ultrice ligula magna suscipit lectus gestas augue into cubilia",
  },
  {
    name: "Jennifer Harper",
    role: "App Developer",
    avatar: "/images/avatars/avatar-3.jpg",
    text: "An augue cubilia laoreet magna suscipit egestas and ipsum a lectus purus ipsum primis and augue ultrice ligula and egestas a suscipit lectus gestas undo auctor tempus feugiat impedit quaerat",
  },
  {
    name: "Evelyn Martinez",
    role: "WordPress Consultant",
    avatar: "/images/avatars/avatar-4.jpg",
    text: "Augue at vitae purus tempus egestas volutpat augue undo cubilia laoreet magna suscipit luctus dolor blandit at purus tempus feugiat impedit",
  },
];

const ratings = [
  { name: "capterra", score: "4.7/5", stars: 5 },
  { name: "trustpilot", score: "4.95/5", stars: 5 },
  { name: "g2", score: "4.24/5", stars: 4 },
];

function ProjectCard({ project }) {
  const [failed, setFailed] = useState(false);

  return (
    <div>
      <h3 className="text-xl font-semibold text-ink sm:text-2xl">
        {project.title}
      </h3>
      <div
        className={`mt-4 aspect-[7/5] overflow-hidden rounded-md ${project.bg}`}
      >
        {!failed && (
          <img
            src={project.src}
            alt={project.title}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        )}
      </div>
    </div>
  );
}

function Avatar({ name, src }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  if (failed) {
    return (
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1677ff]/10 text-sm font-bold text-[#1677ff]">
        {initials}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-12 w-12 shrink-0 rounded-full object-cover"
    />
  );
}

function TestimonialCard({ t }) {
  return (
    <figure className="rounded-xl border border-ink/5 bg-white p-8 shadow-[0_8px_30px_rgba(43,39,80,0.06)]">
      <span
        aria-hidden="true"
        className="block font-serif text-7xl leading-[0.6] text-ink/10"
      >
        &ldquo;
      </span>
      <blockquote className="mt-4 text-[17px] leading-8 text-ink/65">
        {t.text}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <Avatar name={t.name} src={t.avatar} />
        <div>
          <p className="text-lg font-semibold leading-tight text-ink">
            {t.name}
          </p>
          <p className="text-sm text-ink/55">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function Stars({ count }) {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-3.5 w-3.5 ${
            i < count ? "text-[#f5b301]" : "text-ink/20"
          }`}
          fill="currentColor"
        >
          <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

function RatingLogo({ name }) {
  if (name === "capterra") {
    return (
      <span className="flex items-center gap-2">
        <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
          <path d="M2 14L26 2 18 26l-4-9z" fill="#1c9ad6" />
          <path d="M14 17l4 9 8-24z" fill="#ff9d28" opacity="0.9" />
        </svg>
        <span className="text-2xl font-semibold tracking-tight text-[#044d80]">
          Capterra
        </span>
      </span>
    );
  }
  if (name === "trustpilot") {
    return (
      <span className="flex items-center gap-2">
        <svg viewBox="0 0 20 20" className="h-7 w-7 text-[#00b67a]" fill="currentColor" aria-hidden="true">
          <path d="M10 0l2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L10 15.7 3.7 19.5l1.7-7.3L0 7.5l7.1-.6L10 0z" />
        </svg>
        <span className="text-2xl font-semibold tracking-tight text-ink">
          Trustpilot
        </span>
      </span>
    );
  }
  return (
    <span className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-[#ff492c] text-xs font-extrabold text-ink">
        G<sup className="text-[8px]">2</sup>
      </span>
      <span className="text-lg font-bold tracking-wide text-ink">CROWD</span>
    </span>
  );
}

function Pagination({ page, pages, onChange }) {
  const btn =
    "flex h-9 w-9 items-center justify-center rounded text-base transition-colors";

  return (
    <nav
      aria-label="Projects pagination"
      className="mt-14 flex items-center justify-center gap-3"
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={`${btn} text-ink/60 hover:text-[#1677ff] disabled:opacity-30 disabled:hover:text-ink/60`}
      >
        &#8249;
      </button>

      {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          aria-current={n === page ? "page" : undefined}
          onClick={() => onChange(n)}
          className={`${btn} ${
            n === page
              ? "bg-[#1677ff] font-semibold text-white"
              : "text-ink/70 hover:text-[#1677ff]"
          }`}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        aria-label="Next page"
        disabled={page === pages}
        onClick={() => onChange(page + 1)}
        className={`${btn} text-ink/60 hover:text-[#1677ff] disabled:opacity-30 disabled:hover:text-ink/60`}
      >
        &#8250;
      </button>
    </nav>
  );
}

export default function Projects() {
  const [page, setPage] = useState(1);
  const pages = Math.ceil(projects.length / PER_PAGE);
  const visible = projects.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="bg-white text-ink">
      {/* 1. HEADER + PROJECTS GRID */}
      <section className="pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-[1140px] px-5">
          <Reveal className="text-center">
            <h1 className="text-[clamp(2.5rem,5vw,4.25rem)] font-bold leading-[1.12]">
              Our Projects
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {visible.map((project) => (
              <ProjectCard key={`${page}-${project.title}`} project={project} />
            ))}
          </div>

          <Pagination page={page} pages={pages} onChange={setPage} />
        </div>
      </section>

      {/* 2. OUR HAPPY CUSTOMERS */}
      <section className="border-t border-ink/5 py-16 lg:py-24">
        <div className="mx-auto max-w-[1140px] px-5">
          <Reveal className="text-center">
            <h2 className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.15]">
              Our Happy Customers
            </h2>
            <p className="mt-4 text-xl text-ink/60">
              Ligula risus auctor tempus magna feugiat lacinia.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <TestimonialCard t={testimonials[0]} />
                <TestimonialCard t={testimonials[2]} />
              </div>
              <div className="space-y-6 md:mt-10">
                <TestimonialCard t={testimonials[1]} />
                <TestimonialCard t={testimonials[3]} />
              </div>
            </div>
          </Reveal>

          {/* Ratings row */}
          <Reveal delay={150}>
            <p className="mt-16 text-center text-xl text-ink/65">
              Our clients love us as much as we love them
            </p>
            <div className="mt-8 flex flex-wrap items-start justify-center gap-x-16 gap-y-8">
              {ratings.map((r) => (
                <div key={r.name} className="flex flex-col items-center gap-3">
                  <RatingLogo name={r.name} />
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 shadow-[0_4px_16px_rgba(43,39,80,0.08)]">
                    <Stars count={r.stars} />
                    <span className="text-sm font-semibold text-ink/75">
                      {r.score}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. FINAL CTA CARD */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#5a54c8] px-6 py-20 text-center text-white sm:py-24">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-white/[0.06]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-black/[0.05]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-10 left-10 hidden h-24 w-40 sm:block"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.35) 1.5px, transparent 1.5px)",
                  backgroundSize: "14px 14px",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-24 top-12 hidden h-20 w-36 sm:block"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.35) 1.5px, transparent 1.5px)",
                  backgroundSize: "14px 14px",
                }}
              />

              <div className="relative z-10">
                <h2 className="text-[clamp(2.25rem,5vw,4.25rem)] font-bold leading-[1.12]">
                  Give it a try, it’s free!
                </h2>
                <p className="mt-5 text-xl text-white/90 sm:text-2xl">
                  It only takes a few clicks to get started
                </p>

                <Link
                  to="/signup"
                  className="mt-10 inline-block rounded-md bg-[#1677ff] px-10 py-4 text-xl font-semibold text-white transition-colors hover:bg-[#0f5fd6]"
                >
                  Get started - it's free
                </Link>

                <p className="mt-7 inline-flex items-center justify-center gap-2 text-lg text-white/90 sm:text-xl">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10.5l4 4 8-8.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Free for 14 days, no credit card required.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}