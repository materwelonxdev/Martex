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

function Logo() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="font-heading text-2xl font-extrabold tracking-tight text-white">
        MARTEX
      </span>
    );
  }

  return (
    <img
      src="/images/logo-blue-white.png"
      alt="Martex"
      onError={() => setFailed(true)}
      className="h-8 w-auto"
    />
  );
}

function WelcomePanel() {
  const [bgFailed, setBgFailed] = useState(false);

  return (
    <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#150f45] via-[#1d1160] to-[#2b1470] text-white lg:flex lg:flex-col lg:justify-between lg:p-10 xl:p-12">
      {!bgFailed && (
        <img
          src="/images/login/login-bg.jpg"
          alt=""
          onError={() => setBgFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {bgFailed && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-20 h-56 w-56 rounded-full bg-[#6a2fb0]/30 blur-3xl"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 300 300"
            className="pointer-events-none absolute -bottom-16 left-16 w-[220px]"
          >
            <defs>
              <radialGradient id="planet" cx="35%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#f6a15a" />
                <stop offset="100%" stopColor="#c8512a" />
              </radialGradient>
            </defs>
            <circle cx="150" cy="150" r="140" fill="url(#planet)" />
            <ellipse cx="105" cy="90" rx="42" ry="28" fill="#f3e6df" transform="rotate(-20 105 90)" />
            <ellipse cx="205" cy="125" rx="30" ry="22" fill="#f3e6df" transform="rotate(15 205 125)" />
            <ellipse cx="125" cy="180" rx="26" ry="18" fill="#f3e6df" />
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
        <Logo />
        <h1 className="mt-10 text-[clamp(2rem,3.6vw,3.25rem)] font-bold leading-[1.1] xl:mt-14">
          Welcome back to Martex
        </h1>
        <p className="mt-5 max-w-[420px] text-base leading-7 text-white/90 xl:text-lg xl:leading-8">
          Integer congue sagittis and velna augue egestas magna suscipit purus
          aliquam
        </p>
      </div>

      <p className="relative z-10 text-sm text-white/90 xl:text-base">
        © 2025 Martex. All Rights Reserved
      </p>
    </div>
  );
}

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your auth API here
    console.log("Sign in:", { email });
  };

  const inputCls =
    "h-12 w-full rounded-md border border-transparent bg-[#f4f5fa] px-4 text-base text-ink placeholder:text-ink/40 focus:border-[#1677ff] focus:bg-white focus:outline-none";

  return (
    <div className="flex min-h-dvh items-center justify-center bg-white p-4">
      {/* Card height follows the window: never taller than the screen */}
      <div className="grid w-full max-w-[1100px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_50px_rgba(43,39,80,0.12)] lg:h-[min(680px,calc(100dvh-2rem))] lg:grid-cols-2">
        <WelcomePanel />

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
              Sign in with Google
            </button>

            <div className="my-5 flex items-center gap-3 text-sm text-ink/60">
              <span className="h-px flex-1 bg-ink/15" />
              Or, sign in with your email
              <span className="h-px flex-1 bg-ink/15" />
            </div>

            <form onSubmit={onSubmit}>
              <label
                htmlFor="signin-email"
                className="block pl-1 text-base font-semibold text-ink"
              >
                Email address
              </label>
              <input
                id="signin-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
                className={`${inputCls} mt-2`}
              />

              <label
                htmlFor="signin-password"
                className="mt-4 block pl-1 text-base font-semibold text-ink"
              >
                Password
              </label>
              <div className="relative mt-2">
                <input
                  id="signin-password"
                  type={show ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="* * * * * * * * * *"
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

              <Link
                to="/forgot-password"
                className="mt-4 inline-block text-base text-[#1677ff] hover:underline"
              >
                Forgot your password?
              </Link>

              <button
                type="submit"
                className="mt-4 h-12 w-full rounded-md bg-[#1677ff] text-lg font-semibold text-white transition-colors hover:bg-[#0f5fd6]"
              >
                Log In
              </button>
            </form>

            <p className="mt-5 text-center text-base text-ink/60">
              Don&rsquo;t have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-[#1677ff] underline underline-offset-4 hover:text-[#0f5fd6]"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}