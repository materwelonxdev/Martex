import { useEffect, useState } from "react";

const ART = "/images/modal-newsletter-blue.jpg";

export default function NewsletterModal({ delay = 3000 }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [artBad, setArtBad] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setOpen(false), 1600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Newsletter"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-[550px] animate-[modal-in_0.35s_ease-out] overflow-hidden rounded-lg bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md transition-transform hover:scale-105"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="flex h-[200px] items-center justify-center bg-[#d6e6fb]">
          {artBad ? (
            <svg viewBox="0 0 64 64" className="h-28 w-28" fill="none" stroke="#5b52c4" strokeWidth="3" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 22l24 16 24-16v28H8z" fill="#fff" />
              <path d="M8 22L32 8l24 14" />
            </svg>
          ) : (
            <img src={ART} alt="" onError={() => setArtBad(true)} className="h-full w-full object-cover" />
          )}
        </div>

        <div className="px-8 pb-10 pt-8 sm:px-12">
          <h3 className="text-center text-[clamp(1.75rem,3.4vw,2.2rem)] font-bold leading-snug">
            Stay up to date with our news, ideas and updates
          </h3>
          {sent ? (
            <p role="status" className="mt-8 text-center text-xl font-semibold text-[#12b76a]">
              Thanks for subscribing!
            </p>
          ) : (
            <form onSubmit={submit} className="mt-8 space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Your email address"
                className="h-16 w-full rounded-md bg-[#f3f3f6] px-4 text-center text-xl outline-none ring-[#f5427f] focus:ring-2"
              />
              <button
                type="submit"
                className="h-16 w-full rounded-md bg-[#f5427f] text-2xl font-semibold text-white transition-colors hover:bg-[#e12d6b]"
              >
                Subscribe Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}