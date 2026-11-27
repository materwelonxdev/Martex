import { useEffect, useState } from "react";

export default function Preloader() {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 1200);
    const t2 = setTimeout(() => setGone(true), 1700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#f8f7fb] transition-opacity duration-500 ${
        hide ? "opacity-0" : "opacity-100"
      }`}
    >
      <svg className="h-14 w-14 animate-spin text-brand/60" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="10" strokeDasharray="22 11" />
      </svg>
    </div>
  );
}