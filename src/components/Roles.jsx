import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { jobs } from "../data/jobs";

export default function Roles() {
  return (
    <section className="bg-white pb-16 pt-6 lg:pb-20">
      <div className="mx-auto max-w-[1500px] px-5">
        <Reveal className="mx-auto max-w-[960px] text-center">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.15]">Open Roles at Martex</h2>
          <p className="mt-6 text-xl leading-9 text-ink/60 sm:text-[1.4rem] sm:leading-10">
            We&rsquo;re building a better way to work, fueled by transparency,
            trust, and technology that is a force for positive change for the
            hourly workforce
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {jobs.map((j, i) => (
            <Reveal key={j.title} delay={(i % 2) * 100}>
              <Link
                to={`/career-details?role=${i}`}
                className="block rounded-xl bg-[#f6f7f9] p-8 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(43,39,80,0.10)]"
              >
                <p className="text-lg font-medium uppercase text-ink/60">{j.dept}</p>
                <h4 className="mt-2 text-[1.9rem] font-semibold leading-tight">{j.title}</h4>
                <p className="mt-3 text-xl text-ink/60">{j.meta}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}