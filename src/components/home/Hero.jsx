import { Link } from "react-router-dom";

const dots =
  "bg-[radial-gradient(circle,rgba(255,255,255,0.35)_2px,transparent_2.5px)] bg-[length:28px_28px]";

export default function Hero() {
  return (
    <section
      id="hero-1"
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,var(--color-hero-from),var(--color-hero-to))] pb-16 pt-36 text-white lg:pb-0 lg:pt-0"
    >
      {/* decorations */}
      <div aria-hidden="true" className={`pointer-events-none absolute bottom-16 left-0 hidden h-[240px] w-[300px] lg:block ${dots}`} />
      <div aria-hidden="true" className={`pointer-events-none absolute right-24 top-28 hidden h-[260px] w-[300px] lg:block ${dots}`} />
      <div aria-hidden="true" className="pointer-events-none absolute left-[10%] top-[20%] h-10 w-10 rounded-full bg-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03]" />

      <div className="relative mx-auto grid max-w-[1480px] items-center gap-10 px-6 lg:min-h-screen lg:grid-cols-[1.05fr_1fr] lg:px-10">
        <div className="lg:pt-24">
          <h1 className="max-w-[780px] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.18]">
            Content is the key to building an audience
          </h1>
          <p className="mt-8 max-w-[620px] text-lg leading-[1.9] sm:text-xl sm:leading-[1.9]">
            Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a
            volute ligula and aliquet tortor
          </p>
          <Link
            to="/signup"
             className="mt-10 inline-block rounded-[4px] bg-[#f5427f] px-10 py-4 text-xl font-semibold text-white transition-colors hover:bg-[#e12d6b]"
              >
               Get started for free
          </Link>
          <p className="mt-5 flex items-center gap-2 text-lg">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12l5 5L20 6" />
            </svg>
            No credit card needed, free 14-day trial
          </p>
        </div>

        <div className="flex justify-center lg:justify-end lg:pt-24">
          <img src="/images/hero-1-img.png" alt="Dashboard preview" className="w-full max-w-[720px]" />
        </div>
      </div>
    </section>
  );
}