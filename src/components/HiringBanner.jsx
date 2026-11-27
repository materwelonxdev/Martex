import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function HiringBanner({ label, to, href, bg = "#654eb7" }) {
  const [bad, setBad] = useState(false);
  const btn =
    "mt-8 inline-block rounded-[4px] bg-[#f5427f] px-9 py-4 text-xl font-semibold text-white transition-colors hover:bg-[#e12d6b]";

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-5">
        <Reveal>
          <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-[24px]" style={{ background: bg }}>
              <span className="absolute -left-10 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-white/[0.04]" />
              <span className="absolute right-[18%] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-black/[0.05]" />
              <span className="absolute bottom-6 left-6 h-24 w-40 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1.5px,transparent_2px)] bg-[length:14px_14px]" />
              <span className="absolute left-6 top-6 h-24 w-40 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1.5px,transparent_2px)] bg-[length:14px_14px]" />
            </div>

            <div className="relative grid items-center gap-8 px-8 py-14 text-white lg:grid-cols-[1.15fr_1fr] lg:px-16">
              <div>
                <h2 className="max-w-[760px] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.15]">
                  We are looking for talented individuals
                </h2>
                <p className="mt-6 max-w-[720px] text-xl leading-9">
                  We&rsquo;re constantly looking for talented people to join our
                  team. Don&rsquo;t hesitate to get in touch with us
                </p>
                {href ? (
                  <a href={href} className={btn}>
                    {label}
                  </a>
                ) : (
                  <Link to={to} className={btn}>
                    {label}
                  </Link>
                )}
              </div>

              {!bad && (
                <img
                  src="/images/img-16.png"
                  alt=""
                  onError={() => setBad(true)}
                  className="mx-auto w-full max-w-[560px] lg:-my-12"
                />
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}