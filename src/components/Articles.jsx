import { useState } from "react";
import Reveal from "./Reveal";
import BlogCard from "./BlogCard";
import { posts } from "../data/posts";

/* ============ Articles & Resources ============ */
export function Articles() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-330 px-5">
        <Reveal className="mx-auto max-w-225 text-center">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.15]">
            Articles &amp; Resources
          </h2>
          <p className="mt-5 text-xl text-ink/60">Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 lg:gap-11">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 100}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Newsletter strip ============ */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="pb-12 lg:pb-16">
      <div className="mx-auto max-w-330 px-5">
        <hr className="border-ink/10" />

        <Reveal className="grid items-center gap-8 py-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <h2 className="max-w-160 text-[clamp(2rem,3.8vw,3.5rem)] font-bold leading-[1.2]">
            Stay up to date with our news, ideas and updates
          </h2>

          <div>
            <form onSubmit={submit} className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Your email address"
                className="h-14 w-full rounded-md border border-ink/15 px-5 text-lg outline-none transition-colors focus:border-[#f5427f] sm:w-[320px]"
              />
              <button
                type="submit"
                className="h-14 rounded-md bg-[#f5427f] px-8 text-lg font-semibold text-white transition-colors hover:bg-[#e12d6b]"
              >
                Subscribe Now
              </button>
            </form>
            {sent && (
              <p role="status" className="mt-3 text-base font-semibold text-[#12b76a]">
                Thanks for subscribing!
              </p>
            )}
          </div>
        </Reveal>

        <hr className="border-ink/10" />
      </div>
    </section>
  );
}