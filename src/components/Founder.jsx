import { useState } from "react";
import Reveal from "./Reveal";
import Img from "./Img";
import VideoModal from "./VideoModal";

export default function Founder() {
  const [open, setOpen] = useState(false);
  return (
    <section className="section-y relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff,#f5f3fc_20%,#f1eefa_80%,#ffffff)]">
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-0 hidden h-[110px] w-[170px] bg-[radial-gradient(circle,rgba(43,39,80,0.12)_1.5px,transparent_2px)] bg-[length:20px_20px] lg:block"
      />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-5 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wider text-ink/50">Co-Founder at Martex</span>
          <h2 className="mt-4 text-[clamp(2.75rem,5.4vw,4.75rem)] font-bold leading-[1.1]">Henry Adams</h2>
          <p className="mt-8 text-xl leading-9 text-ink/60">
            &ldquo;Sodales tempor sapien diam purus ipsum quaerat and volute
            fusce a congue laoreet turpis neque diam auctor turpis vitae dolor
            magna luctus placerat neque ipsum fusce cursus ligula cursus purus
            vitae purus and ipsum suscipit. Nemo ipsam cubilia donec turpis undo
            egestas ipsum a purus sapien ultrice aliquam lacus and quaerat an
            ipsum augue turpis sapien cursus congue augue&rdquo;
          </p>
        </Reveal>

        <Reveal delay={100} className="relative">
          <Img src="/images/img-17.jpg" ratio="744/710" className="w-full rounded-2xl object-cover" />
          <button
            type="button"
            aria-label="Play video"
            onClick={() => setOpen(true)}
            className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5427f] text-white transition-transform hover:scale-105 sm:h-[110px] sm:w-[110px]"
          >
            <svg className="ml-1.5 h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4l13 8-13 8z" />
            </svg>
          </button>
        </Reveal>
      </div>
      <VideoModal videoId="7e90gBu4pas" open={open} onClose={() => setOpen(false)} />
    </section>
  );
}