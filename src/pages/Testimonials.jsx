import { useRef, useState } from "react";
import Reveal from "../components/Reveal";

const baseReviews = [
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
  {
    name: "Leslie D.",
    role: "Web Developer",
    avatar: "/images/avatars/avatar-5.jpg",
    text: "Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus egestas sapien vitae",
  },
  {
    name: "Marisol19",
    role: "@marisol19",
    avatar: "/images/avatars/avatar-6.jpg",
    text: "At sagittis congue augue and magna ipsum vitae a purus ipsum primis diam a cubilia laoreet augue egestas luctus a donec vitae ultrice ligula magna suscipit lectus gestas augue into cubilia",
  },
];

// Pages 2 and 3 reuse the same reviews in a different order until you add real ones
const rotate = (arr, n) => [...arr.slice(n), ...arr.slice(0, n)];
const reviews = [
  ...baseReviews,
  ...rotate(baseReviews, 2),
  ...rotate(baseReviews, 4),
];

const PER_PAGE = 6;

function Avatar({ name, src }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  if (failed) {
    return (
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#1677ff]/10 text-lg font-bold text-[#1677ff] sm:h-20 sm:w-20">
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
      className="h-16 w-16 shrink-0 rounded-full object-cover sm:h-20 sm:w-20"
    />
  );
}

function ReviewCard({ review }) {
  return (
    <figure className="rounded-md bg-white p-8 shadow-[0_6px_24px_rgba(43,39,80,0.06)] sm:p-12">
      <span
        aria-hidden="true"
        className="block font-serif text-[110px] font-black leading-[0.55] text-ink/[0.07]"
      >
        &ldquo;
      </span>
      <blockquote className="mt-6 text-xl leading-9 text-ink/60 sm:text-[23px] sm:leading-[48px]">
        {review.text}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-5">
        <Avatar name={review.name} src={review.avatar} />
        <div>
          <p className="text-2xl font-semibold leading-tight text-ink sm:text-[32px]">
            {review.name}
          </p>
          <p className="mt-1 text-lg text-ink/55 sm:text-xl">{review.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function Pagination({ page, pages, onChange }) {
  const btn =
    "flex h-14 w-14 items-center justify-center rounded text-3xl font-semibold transition-colors";

  return (
    <nav
      aria-label="Testimonials pagination"
      className="mt-16 flex items-center justify-center gap-2 sm:gap-4"
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={`${btn} text-ink/70 hover:text-[#1677ff] disabled:opacity-30 disabled:hover:text-ink/70`}
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
              ? "bg-[#1677ff] text-white"
              : "text-ink/65 hover:text-[#1677ff]"
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
        className={`${btn} text-ink/70 hover:text-[#1677ff] disabled:opacity-30 disabled:hover:text-ink/70`}
      >
        &#8250;
      </button>
    </nav>
  );
}

function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5">
        <Reveal>
          <div className="grid items-center gap-10 border-y border-ink/5 py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.2] text-ink">
              Stay up to date with our news, ideas and updates
            </h2>

            {done ? (
              <p className="text-xl font-semibold text-[#1677ff]">
                Thanks for subscribing! Check your inbox soon.
              </p>
            ) : (
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Your email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="h-[70px] w-full flex-1 rounded border border-ink/15 bg-white px-5 text-xl text-ink placeholder:text-ink/40 focus:border-[#1677ff] focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-[70px] shrink-0 rounded bg-[#1677ff] px-9 text-xl font-semibold text-white transition-colors hover:bg-[#0f5fd6]"
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(1);
  const gridRef = useRef(null);

  const pages = Math.ceil(reviews.length / PER_PAGE);
  const visible = reviews.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  // Alternate cards into two columns (1,3,5 left and 2,4,6 right)
  const left = visible.filter((_, i) => i % 2 === 0);
  const right = visible.filter((_, i) => i % 2 === 1);

  const changePage = (n) => {
    setPage(n);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white text-ink">
      {/* 1. HEADING */}
      <section className="pb-14 pt-32 lg:pb-20 lg:pt-44">
        <div className="mx-auto max-w-[1000px] px-5 text-center">
          <Reveal>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold leading-[1.15]">
              Here’s what our amazing clients are saying
            </h1>
            <p className="mt-6 text-xl text-ink/60 sm:text-[28px]">
              Read what customers think about us
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. TESTIMONIALS GRID */}
      <section ref={gridRef} className="scroll-mt-28 bg-[#f7f7fb] pb-16 pt-14 lg:pb-24">
        <div className="mx-auto max-w-[1320px] px-5">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-8 md:mt-6">
              {left.map((r, i) => (
                <ReviewCard key={`${page}-l-${i}`} review={r} />
              ))}
            </div>
            <div className="space-y-8">
              {right.map((r, i) => (
                <ReviewCard key={`${page}-r-${i}`} review={r} />
              ))}
            </div>
          </div>

          <Pagination page={page} pages={pages} onChange={changePage} />
        </div>
      </section>

      {/* 3. NEWSLETTER BAND */}
      <NewsletterBand />
    </div>
  );
}