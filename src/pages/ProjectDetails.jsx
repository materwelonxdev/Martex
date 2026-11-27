import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const IMG = {
  hero: "/images/project-details/hero.jpg",
  gallery1: "/images/project-details/gallery-1.jpg",
  gallery2: "/images/project-details/gallery-2.jpg",
  gallery3: "/images/project-details/gallery-3.jpg",
  video: "/images/project-details/video-poster.jpg",
};

const VIDEO_URL = "https://www.youtube.com/embed/SZEflIVnhH8";

const meta = [
  { label: "Category", value: "Development" },
  { label: "Start Date", value: "2023-02-28" },
  { label: "Handover", value: "2023-04-30" },
  { label: "Client", value: "elite-themes24" },
];

function P({ children }) {
  return (
    <p className="mt-6 text-lg leading-8 text-ink/60 sm:text-[19px] sm:leading-9">
      {children}
    </p>
  );
}

function Bullets({ items }) {
  return (
    <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-ink/60 marker:text-ink/45 sm:text-[19px] sm:leading-9">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function H2({ children }) {
  return (
    <h2 className="mt-14 text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-tight text-ink">
      {children}
    </h2>
  );
}

function Photo({ src, alt, ratio, bg, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl ${bg} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}

function VideoBlock() {
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-[#2a1a3d]"
      style={{ aspectRatio: "2 / 1" }}
    >
      {playing ? (
        <iframe
          src={`${VIDEO_URL}?autoplay=1&rel=0`}
          title="Project video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <>
          {!failed && (
            <img
              src={IMG.video}
              alt="Project video preview"
              loading="lazy"
              onError={() => setFailed(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <button
            type="button"
            aria-label="Play video"
            onClick={() => setPlaying(true)}
            className="absolute left-1/2 top-1/2 flex w-[28%] max-w-[268px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 transition-transform hover:scale-105 aspect-square sm:w-[20%]"
          >
            <span className="flex h-[68%] w-[68%] items-center justify-center rounded-full bg-[#f9648f]">
              <svg
                viewBox="0 0 24 24"
                className="ml-[6%] h-[42%] w-[42%] text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 4.5v15l13-7.5L7 4.5z" />
              </svg>
            </span>
          </button>
        </>
      )}
    </div>
  );
}

export default function ProjectDetails() {
  return (
    <div className="bg-white text-ink">
      {/* 1. TITLE + DETAILS */}
      <section className="pb-12 pt-32 lg:pb-16 lg:pt-40">
        <div className="mx-auto max-w-[1140px] px-5">
          <Reveal>
            <h1 className="text-[clamp(2.25rem,5vw,4.25rem)] font-bold leading-[1.15]">
              Online shopping concept for mobile app templates
            </h1>

            <div className="mt-10 border-t border-ink/10 pt-10">
              <div className="grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {meta.map((m) => (
                  <p key={m.label} className="text-xl text-ink/60">
                    <span className="font-bold text-ink">{m.label}:</span>{" "}
                    {m.value}
                  </p>
                ))}
                <a
                  href="https://www.website.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-[#1677ff] hover:underline"
                >
                  www.website.com
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Photo
              src={IMG.hero}
              alt="Online shopping concept"
              ratio="5 / 3"
              bg="bg-[#37495a]"
              className="mt-14 max-w-[1070px]"
            />
          </Reveal>
        </div>
      </section>

      {/* 2. INTRO + OVERVIEW & CHALLENGE + GALLERY */}
      <section className="bg-[#fafafc] pb-16 pt-4 lg:pb-24">
        <div className="mx-auto max-w-[1140px] px-5">
          <Reveal>
            <P>
              Integer congue sagittis augue egestas velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque diam augue fusce sapien nulla a primis lacinia
              ipsum a molestie blandit and justo an aliquet eget molestie
              sagittis at quaerat sodales
            </P>
            <Bullets
              items={[
                "Quaerat sodales sapien undo velna purus euismod purus velna blandit vitae auctor and congue magna tempor sapien gravida laoreet turpis urna augue, viverra a augue eget tempor diam",
                "Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien congue and augue egestas",
              ]}
            />

            <H2>Overview &amp; Challenge</H2>
            <P>
              Congue sagittis augue egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque blandit fusce aliquam
            </P>
            <P>
              Congue augue sagittis egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque blandit fusce lorem nulla an aliquam lacinia
              justo molestie blandit justo diam an aliquet tortor sagittis
              lacinia molestie diam egestas
            </P>
            <Bullets
              items={[
                "Quaerat sodales sapien undo velna purus euismod purus velna blandit vitae auctor and congue magna tempor sapien gravida laoreet turpis urna augue, viverra a augue eget tempor diam",
                "Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien congue and augue egestas",
              ]}
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Photo
                src={IMG.gallery1}
                alt="Team working on a laptop"
                ratio="644 / 564"
                bg="bg-[#d8d3cc]"
              />
              <Photo
                src={IMG.gallery2}
                alt="Team reviewing charts"
                ratio="644 / 564"
                bg="bg-[#cfd6de]"
              />
            </div>
            <Photo
              src={IMG.gallery3}
              alt="Team discussing a project"
              ratio="2 / 1"
              bg="bg-[#c9b79c]"
              className="mt-6"
            />
          </Reveal>
        </div>
      </section>

      {/* 3. PROJECT SUMMARY + VIDEO + SOLUTION & RESULTS */}
      <section className="bg-[#fafafc] pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1140px] px-5">
          <Reveal>
            <H2>Project Summary</H2>
            <P>
              Congue augue sagittis egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque blandit fusce lorem nulla an aliquam lacinia
              justo molestie blandit justo diam an aliquet tortor sagittis
              lacinia molestie diam egestas
            </P>
            <Bullets
              items={[
                "Aliquam mullam blandit tempor sapien gravida donec ipsum porta justo. Laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar dictum tempor",
                "Blandit velna vitae auctor and congue magna tempor sapien eget gravida laoreet turpis",
                "Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien congue augue egestas",
              ]}
            />
            <P>
              Sagittis augue congue egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque aliquam fusce blandit
            </P>
          </Reveal>

          <Reveal delay={100} className="mt-12">
            <VideoBlock />
          </Reveal>

          <Reveal>
            <H2>Solution &amp; Results</H2>
            <P>
              Sagittis congue augue egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque blandit fusce lacinia placerat and nulla justo
              molestie blandit justo diam aliquet tortor molestie sagittis
              lacinia undo and mullam molestie diam luctus donec bibendum
              aliquet massa elementum. Libero quisque lacus and ligula massa
              lorem
            </P>
            <Bullets
              items={[
                "Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum and vitae efficitur purus and ipsum primis in cubilia laoreet augue egestas luctus donec.",
                "Aliquam mullam blandit tempor sapien gravida donec ipsum porta justo. Laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar dictum tempor",
              ]}
            />
            <P>
              Sagittis augue congue egestas integer velna purus purus magna nec
              suscipit and egestas magna aliquam ipsum vitae purus justo lacus
              ligula ipsum primis cubilia donec undo augue luctus vitae egestas
              a molestie donec libero sapien dapibus congue tempor undo quisque
              fusce cursus neque aliquam fusce blandit
            </P>
          </Reveal>
        </div>
      </section>

      {/* 4. MORE PROJECTS LINK */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1140px] px-5">
          <Reveal className="flex justify-end">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-ink underline decoration-2 underline-offset-8 transition-colors hover:text-[#1677ff]"
            >
              More Projects
              <svg
                className="h-7 w-7 sm:h-9 sm:w-9"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M7 3l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 5. FULL-WIDTH CTA BAND */}
      <section className="relative overflow-hidden bg-[#5a54c8] px-5 py-20 text-center text-white sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-white/[0.06]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-black/[0.05]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 left-10 hidden h-28 w-44 sm:block"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.35) 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
          }}
        />

        <Reveal className="relative z-10">
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
              <path d="M4 10.5l4 4 8-8.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Free for 14 days, no credit card required.
          </p>
        </Reveal>
      </section>
    </div>
  );
}