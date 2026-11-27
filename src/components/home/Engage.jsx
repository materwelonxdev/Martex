import Reveal from "../Reveal";

const bullets =
  "mt-4 list-disc space-y-3 pl-5 text-[17px] leading-7 text-ink/60 marker:text-ink/40";

export default function Engage() {
  return (
    <section id="why-martex" className="section-y bg-white">
      <div className="mx-auto max-w-285 space-y-14 px-5 lg:space-y-16">
        {/* Row 1: image left, text right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src="/images/img-10.png"
              alt="Engagement analytics"
              className="mx-auto w-full max-w-135"
            />
          </Reveal>
          <Reveal delay={100}>
            <span className="text-sm font-semibold uppercase tracking-wider text-ink/40">
              Enhance Engagement
            </span>
            <h2 className="mt-3 text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-tight">
              Engage your most valuable visitors
            </h2>
            <p className="mt-5 text-[17px] leading-7 text-ink/60">
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna and ligula
              cursus purus vitae purus an ipsum suscipit
            </p>
            <h5 className="mt-8 text-xl font-semibold">Digits that define growth</h5>
            <ul className={bullets}>
              <li>
                Sapien quaerat tempor an ipsum laoreet purus and sapien dolor an
                ultrice ipsum aliquam undo congue cursus dolor
              </li>
              <li>
                Purus suscipit cursus vitae cubilia magnis volute egestas vitae
                sapien turpis ultrice auctor congue magna placerat
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Row 2: text left, image right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <h5 className="text-xl font-semibold">Solution that grows with you</h5>
            <p className="mt-4 text-[17px] leading-7 text-ink/60">
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna and ligula
              cursus purus vitae purus an ipsum suscipit
            </p>
            <h5 className="mt-8 text-xl font-semibold">Connect your data sources</h5>
            <p className="mt-4 text-[17px] leading-7 text-ink/60">
              Tempor sapien sodales quaerat ipsum undo congue laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna and ligula
              cursus purus an ipsum vitae suscipit purus
            </p>
            <ul className={bullets}>
              <li>
                Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
                ultrice ipsum aliquam undo congue dolor cursus
              </li>
              <li>
                Cursus purus suscipit vitae cubilia magnis volute egestas vitae
                sapien turpis ultrice auctor congue magna placerat
              </li>
            </ul>
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <img
              src="/images/img-06.png"
              alt="Connected data sources"
              className="mx-auto w-full max-w-135"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}