import { useState } from "react";
import { Link } from "react-router-dom";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.5-4.1 7-10.2 7-17.6z" />
      <path fill="#FBBC05" d="M10.5 28.7c-.5-1.4-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.3 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
    </svg>
  );
}

function EyeIcon({ open }) {
  return open ? (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 3l18 18M10.6 6.2A10 10 0 0 1 12 6c6.4 0 10 6 10 6a17 17 0 0 1-3.2 3.9M6.6 7.6A16.5 16.5 0 0 0 2 12s3.6 6 10 6c1.6 0 3-.4 4.3-1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PromoPanel() {
  const [bgFailed, setBgFailed] = useState(false);

  return (
    <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#150f45] via-[#1d1160] to-[#2b1470] text-white lg:flex lg:flex-col lg:justify-between lg:px-14 lg:pb-10 lg:pt-14 xl:px-16 xl:pt-16">
      {!bgFailed && (
        <img
          src="/images/login/signup-bg.jpg"
          alt=""
          onError={() => setBgFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {bgFailed && (
        <>
          <svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            className="pointer-events-none absolute -bottom-40 -left-16 w-[520px] opacity-80"
          >
            <defs>
              <radialGradient id="bigPlanet" cx="40%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#6c4fc9" />
                <stop offset="100%" stopColor="#2a1a73" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="190" fill="url(#bigPlanet)" />
          </svg>
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="pointer-events-none absolute right-16 top-10 w-16"
          >
            <defs>
              <radialGradient id="smallPlanet" cx="35%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#4a3f9e" />
                <stop offset="100%" stopColor="#1a1148" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="url(#smallPlanet)" />
          </svg>
          {Array.from({ length: 18 }, (_, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="absolute h-1 w-1 rounded-full bg-white/50"
              style={{
                top: `${((i * 37) % 90) + 4}%`,
                left: `${((i * 53) % 92) + 3}%`,
              }}
            />
          ))}
        </>
      )}

      <div className="relative z-10">
        <p className="text-sm font-bold uppercase tracking-wide xl:text-base">
          Start for free
        </p>
        <h1 className="mt-8 text-5xl font-bold leading-[1.2] xl:mt-10 xl:text-[60px]">
          Create
          <br />
          an account
        </h1>
        <p className="mt-6 max-w-[460px] text-lg leading-8 text-white/95 xl:text-[20px] xl:leading-[34px]">
          Integer congue sagittis and velna augue egestas magna suscipit purus
          aliquam
        </p>
      </div>

      <p className="relative z-10 text-right text-sm text-white/95 xl:text-base">
        © 2025 Martex. All Rights Reserved
      </p>
    </div>
  );
}

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your sign-up API here
    console.log("Sign up:", { name, email });
  };

  const inputCls =
    "h-12 w-full rounded-md border border-transparent bg-[#f4f5fa] px-4 text-base text-ink placeholder:text-ink/40 focus:border-[#1677ff] focus:bg-white focus:outline-none";
  const labelCls = "block pl-1 text-base font-semibold text-ink";

  return (
    <div className="flex min-h-dvh items-center justify-center bg-white p-4">
      {/* Card height follows the window: never taller than the screen */}
      <div className="grid w-full max-w-[1040px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_50px_rgba(43,39,80,0.12)] lg:h-[min(720px,calc(100dvh-2rem))] lg:grid-cols-2">
        {/* overflow-y-auto is only a safety net for very short windows */}
        <div className="flex items-center overflow-y-auto px-6 py-8 sm:px-10 lg:px-12">
          <div className="mx-auto w-full max-w-[400px]">
            <Link
              to="/"
              className="mb-6 block text-center text-2xl font-extrabold tracking-tight text-ink lg:hidden"
            >
              MARTEX
            </Link>

            <button
              type="button"
              className="flex h-12 w-full items-center justify-center gap-3 rounded-md border border-ink/15 bg-white text-base font-semibold text-ink transition-colors hover:border-[#1677ff]"
            >
              <GoogleIcon />
              Sign Up with Google
            </button>

            <div className="my-4 flex items-center gap-3 text-sm text-ink/60">
              <span className="h-px flex-1 bg-ink/15" />
              Or, sign Up with your email
              <span className="h-px flex-1 bg-ink/15" />
            </div>

            <form onSubmit={onSubmit}>
              <label htmlFor="signup-name" className={labelCls}>
                Full name
              </label>
              <input
                id="signup-name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className={`${inputCls} mt-2`}
              />

              <label htmlFor="signup-email" className={`${labelCls} mt-3`}>
                Email address
              </label>
              <input
                id="signup-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
                className={`${inputCls} mt-2`}
              />

              <label htmlFor="signup-password" className={`${labelCls} mt-3`}>
                Password
              </label>
              <div className="relative mt-2">
                <input
                  id="signup-password"
                  type={show ? "text" : "password"}
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="min 8 characters"
                  className={`${inputCls} pr-12`}
                />
                <button
                  type="button"
                  aria-label={show ? "Hide password" : "Show password"}
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-ink/55 hover:text-ink"
                >
                  <EyeIcon open={show} />
                </button>
              </div>

              <p className="mt-4 text-sm leading-6 text-ink/60 sm:text-base sm:leading-7">
                By clicking &ldquo;Create Account&rdquo;, you agree to our{" "}
                <Link to="/terms" className="font-medium underline underline-offset-2 hover:text-[#1677ff]">
                  Terms
                </Link>{" "}
                and that you have read our{" "}
                <Link to="/privacy" className="font-medium underline underline-offset-2 hover:text-[#1677ff]">
                  Privacy Policy
                </Link>
              </p>

              <button
                type="submit"
                className="mt-4 h-12 w-full rounded-md bg-[#1677ff] text-lg font-semibold text-white transition-colors hover:bg-[#0f5fd6]"
              >
                Create Account
              </button>
            </form>

            <p className="mt-4 text-center text-base text-ink/60">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#1677ff] underline underline-offset-4 hover:text-[#0f5fd6]"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>

        <PromoPanel />
      </div>
    </div>
  );
}