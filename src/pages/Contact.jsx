import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { Newsletter } from "../components/Articles";

const topics = [
  { value: "sales", label: "Sales and pricing" },
  { value: "support", label: "Product support" },
  { value: "billing", label: "Billing and account" },
  { value: "partnership", label: "Partnerships" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Something else" },
];

const inputBase =
  "mt-5 w-full rounded-md bg-[#f4f5f7] px-6 py-5 text-xl text-ink outline-none transition-shadow placeholder:text-ink/40 focus:ring-2";

function validate(v) {
  const e = {};
  if (!v.topic) e.topic = "Please choose a topic.";
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = "Please enter a valid email address.";
  if (v.message.trim().length < 10) e.message = "Please describe your question (at least 10 characters).";
  return e;
}

function Field({ id, label, hint, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[1.65rem] font-semibold leading-tight">
        {label}
      </label>
      <p className="mt-2 text-xl text-ink/60">{hint}</p>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-base font-semibold text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [params] = useSearchParams();
  const topicParam = params.get("topic");
  const role = params.get("role");

  const [values, setValues] = useState({
    topic: topics.some((t) => t.value === topicParam) ? topicParam : "",
    name: "",
    email: "",
    message: role ? `I'd like to apply for the ${role} role at Martex.` : "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => {
    const next = { ...values, [key]: e.target.value };
    setValues(next);
    if (errors[key]) setErrors({ ...errors, [key]: validate(next)[key] });
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  const reset = () => {
    setValues({ topic: "", name: "", email: "", message: "" });
    setErrors({});
    setSent(false);
  };

  const ring = (key) => (errors[key] ? "ring-2 ring-red-500" : "focus:ring-[#f5427f]");

  return (
    <>
      <section className="pb-16 pt-32 lg:pt-40">
        <div className="mx-auto max-w-[1200px] px-5">
          <Reveal className="text-center">
            <h1 className="text-[clamp(2.5rem,5.6vw,5rem)] font-bold leading-[1.15]">
              Questions? Let&rsquo;s Talk
            </h1>
            <p className="mx-auto mt-8 max-w-[1100px] text-xl leading-10 text-ink/60 sm:text-[1.55rem] sm:leading-[2.6rem]">
              Want to learn more about Martex, get a quote, or speak with an
              expert? Let us know what you are looking for and we&rsquo;ll get
              back to you right away
            </p>
          </Reveal>

          <Reveal delay={100} className="mx-auto mt-16 max-w-[1060px]">
            {sent ? (
              <div role="status" className="rounded-2xl bg-[#f4f5f7] px-8 py-16 text-center">
                <h2 className="text-3xl font-bold">Thank you!</h2>
                <p className="mx-auto mt-4 max-w-[520px] text-xl leading-9 text-ink/60">
                  Your request has been sent. We&rsquo;ll get back to you right away.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-8 rounded-[4px] bg-[#f5427f] px-8 py-4 text-xl font-semibold text-white transition-colors hover:bg-[#e12d6b]"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-10">
                <Field
                  id="topic"
                  label="This question is about:"
                  hint="Choose a topic, so we know who to send your request to:"
                  error={errors.topic}
                >
                  <div className="relative">
                    <select
                      id="topic"
                      value={values.topic}
                      onChange={set("topic")}
                      className={`${inputBase} ${ring("topic")} appearance-none pr-14 ${
                        values.topic ? "" : "text-ink/40"
                      }`}
                    >
                      <option value="" disabled>
                        This question is about...
                      </option>
                      {topics.map((t) => (
                        <option key={t.value} value={t.value} className="text-ink">
                          {t.label}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="pointer-events-none absolute right-6 top-1/2 mt-2.5 h-4 w-4 -translate-y-1/2 text-ink/50"
                      viewBox="0 0 10 6"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M0 0h10L5 6z" />
                    </svg>
                  </div>
                </Field>

                <Field id="name" label="Your Name:" hint="Please enter your real name:" error={errors.name}>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={set("name")}
                    placeholder="Your Name*"
                    className={`${inputBase} ${ring("name")}`}
                  />
                </Field>

                <Field
                  id="email"
                  label="Your Email Address:"
                  hint="Please carefully check your email address for accuracy"
                  error={errors.email}
                >
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={set("email")}
                    placeholder="Email Address*"
                    className={`${inputBase} ${ring("email")}`}
                  />
                </Field>

                <Field
                  id="message"
                  label="Explain your question in details:"
                  hint="Your OS version, Martex version & build, steps you did. Be VERY precise!"
                  error={errors.message}
                >
                  <textarea
                    id="message"
                    rows={7}
                    value={values.message}
                    onChange={set("message")}
                    placeholder="I have a problem with..."
                    className={`${inputBase} ${ring("message")} resize-y`}
                  />
                </Field>

                <div>
                  <button
                    type="submit"
                    className="rounded-[4px] bg-[#f5427f] px-10 py-5 text-[1.65rem] font-semibold text-white transition-colors hover:bg-[#e12d6b]"
                  >
                    Submit Request
                  </button>
                  <p className="mt-10 max-w-[960px] text-lg leading-8 text-ink/80">
                    We are committed to your privacy. Martex uses the
                    information you provide us to contact you about our
                    relevant content, products, and services. You may
                    unsubscribe from these communications at any time. For more
                    information, check out our{" "}
                    <a href="#" className="font-bold underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <Newsletter />
    </>
  );
}