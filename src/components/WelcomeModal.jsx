import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Appears ~4s after page load (measured from the screen recording).
export default function WelcomeModal({ delay = 4000 }) {
  const [open, setOpen] = useState(false);

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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Get started"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-[700px] animate-[modal-in_0.35s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md transition-transform hover:scale-105"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <Link to="/pricing" onClick={() => setOpen(false)}>
          <img
            src="/images/modal-2-img.jpg"
            alt="Let's get down to project — get started for free"
            className="block w-full"
          />
        </Link>
      </div>
    </div>
  );
}