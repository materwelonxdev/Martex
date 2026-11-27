import { Link, useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { jobs } from "../data/jobs";

const DEFAULT_ROLE = 3; // Engineering Tech Lead (same as the reference)

const body = "text-xl leading-[1.9] text-ink/60 sm:text-[1.35rem] sm:leading-[1.95]";
const h2 = "text-[clamp(1.9rem,3vw,2.75rem)] font-semibold leading-tight";
const ul = `${body} mt-6 list-disc space-y-3 pl-6 marker:text-ink/40`;

const LONG =
  "Sagittis congue augue egestas integer velna purus purus magna nec suscipit and egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque blandit fusce lacinia placerat and nulla justo molestie blandit justo diam aliquet tortor molestie sagittis lacinia undo and mullam molestie diam luctus donec bibendum aliquet massa elementum. Libero quisque lacus and ligula massa lorem fusce cursus fusce nulla vitae massa placerat and mollis, sapien gravida aliquet ipsum ultrices aliquet lorem diam purus undo vitae aliquam auris dapibus libero fusce blandit.";
const LONG_SHORT =
  "Sagittis congue augue egestas integer velna purus purus magna nec suscipit and egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque blandit fusce lacinia placerat and nulla justo molestie blandit justo diam aliquet tortor molestie sagittis lacinia undo and mullam molestie diam luctus donec bibendum aliquet massa elementum. Libero quisque lacus and ligula massa lorem.";
const MID =
  "Congue augue sagittis egestas integer velna purus purus magna nec suscipit and egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque blandit fusce lorem nulla an aliquam lacinia justo molestie blandit justo diam an aliquet tortor sagittis lacinia molestie diam egestas";
const SHORT =
  "Sagittis congue augue egestas integer velna purus purus magna nec suscipit and egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque aliquam fusce blandit";

const responsibilities = [
  "Blandit velna vitae auctor congue magna and tempor sapien a gravida laoreet turpis",
  "Nemo ipsam egestas volute turpis dolores an aliquam quaerat sodales sapien congue and egestas",
  "Quaerat sodales sapien euismod and purus blandit velna a vitae auctor congue magna tempor sapien ipsum gravida laoreet turpis urna augue, viverra a augue eget pulvinar",
  "Vitae auctor blandit velna congue magna and tempor sapien a turpis laoreet gravida",
  "Laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar dictum tempor sagittis",
  "Euismod purus blandit viverra undo augue dictum sapien tempor diam pulvinar",
  "Vitae auctor ipsum congue magna tempor sapien eget gravida laoreet turpis",
];

const lookingFor = [
  "Sodales sapien quaerat euismod and purus blandit velna a vitae auctor congue magna tempor sapien ipsum gravida laoreet turpis urna augue, augue eget a viverra pulvinar laoreet augue luctus donec.",
  "Sodales sapien quaerat euismod and purus blandit velna a vitae auctor congue magna tempor sapien ipsum gravida laoreet turpis urna augue, augue eget a viverra pulvinar",
  "Blandit velna vitae auctor congue magna and tempor sapien a gravida laoreet turpis",
  "Nemo ipsam egestas volute turpis dolores an aliquam quaerat sodales sapien congue and egestas",
  "Quaerat sodales sapien euismod and purus blandit velna a vitae auctor congue magna tempor sapien ipsum gravida laoreet turpis urna augue, viverra a augue eget pulvinar",
];

const perks = [
  { t: "Flexible time off", d: "Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo velna vitae auctor congue magna nihil impedit ligula risus." },
  { t: "Healthcare", d: "Blandit tempor sapien aliqum mullam gravida donec ipsum, at porta justo velna vitae auctor congue mauris and donec magnis sapien" },
  { t: "The latest hardware", d: "Mauris donec mullam blandit at tempor sapien gravida donec ipsum, at porta justo velna vitae auctor congue magna nihil impedit ligula" },
  { t: "Ergonomic equipment", d: "Sapien gravida donec ipsum porta justo velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis sagittis tempor" },
];

const steps = [
  "Curabitur ac dapibus libero eu congue tristique neque",
  "Sagittis congue augue blandit velna vitae auctor egestas volutpat egestas",
  "An aliquam justo suscipit congue augue",
  "Gestas integer congue a lectus porta",
];

const Rule = () => <hr className="my-12 border-ink/10 lg:my-14" />;

export default function CareerDetails() {
  const [params] = useSearchParams();
  const idx = Number(params.get("role"));
  const job = jobs[Number.isInteger(idx) && jobs[idx] ? idx : DEFAULT_ROLE];

  return (
    <article className="pb-20 pt-32 lg:pt-40">
      <div className="mx-auto max-w-[1100px] px-5">
        {/* Title block */}
        <Reveal>
          <p className="text-xl font-medium uppercase text-ink/60">{job.dept}</p>
          <h1 className="mt-6 text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-[1.1]">{job.title}</h1>
          <p className="mt-6 text-[clamp(1.4rem,2.4vw,2rem)] text-ink/60">{job.meta}</p>
        </Reveal>

        <Reveal className="mt-12">
          <p className={body}>{LONG}</p>
          <p className={`${body} mt-8`}>{MID}</p>
        </Reveal>

        <Rule />

        <Reveal>
          <h2 className={h2}>What would you do at Martex?</h2>
          <p className={`${body} mt-6`}>{SHORT}</p>
          <p className={`${body} mt-8`}>{MID}</p>
        </Reveal>

        <Rule />

        <Reveal>
          <h2 className={h2}>Responsibilities</h2>
          <ul className={ul}>
            {responsibilities.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Reveal>

        <Rule />

        <Reveal>
          <h2 className={h2}>Who we&rsquo;re looking for</h2>
          <ul className={ul}>
            {lookingFor.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Reveal>

        <Rule />

        <Reveal>
          <h2 className={h2}>Benefits with you in mind</h2>
          <p className={`${body} mt-6`}>{LONG_SHORT}</p>

          <div className="mt-10 grid gap-x-14 gap-y-10 rounded-2xl bg-[#f6f7f9] p-8 sm:grid-cols-2 sm:p-12">
            {perks.map((p) => (
              <div key={p.t}>
                <h3 className="text-[1.9rem] font-semibold leading-tight">{p.t}</h3>
                <p className="mt-4 text-xl leading-9 text-ink/60">{p.d}</p>
              </div>
            ))}
          </div>

          <p className={`${body} mt-10`}>{SHORT}</p>
        </Reveal>

        <Rule />

        <Reveal>
          <h2 className={h2}>What is our hiring process like?</h2>
          <p className={`${body} mt-6`}>
            Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta
            justo velna vitae auctor congue magna nihil impedit ligula risus.
            Mauris donec ociis et magnis sapien sagittis sapien congue tempor
          </p>
          <ol className={`${body} mt-6 list-decimal space-y-3 pl-8 marker:text-ink/60`}>
            {steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p className={`${body} mt-8`}>
            Integer congue sagittis augue egestas velna purus purus magna nec
            suscipit and egestas magna aliquam ipsum vitae purus justo lacus
            ligula ipsum primis cubilia donec undo augue luctus vitae egestas a
            molestie donec libero sapien dapibus congue tempor undo quisque
            fusce cursus neque diam augue fusce sapien nulla a primis lacinia
            ipsum a molestie blandit and justo an aliquet eget molestie sagittis
            at quaerat sodales
          </p>
        </Reveal>

        <Rule />

        <Reveal>
          <h2 className={h2}>How to apply</h2>
          <p className={`${body} mt-6`}>{LONG_SHORT}</p>
          <p className={`${body} mt-8`}>{SHORT}</p>

          <Link
            to={`/contact?topic=careers&role=${encodeURIComponent(job.title)}`}
            className="mt-12 block rounded-md bg-[#f5427f] py-6 text-center text-2xl font-semibold text-white transition-colors hover:bg-[#e12d6b]"
          >
            Apply to this job!
          </Link>
        </Reveal>
      </div>
    </article>
  );
}