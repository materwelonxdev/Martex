import { Link, useLocation } from "react-router-dom";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about-us" },
      { label: "Our Blog", to: "/blog" },
      { label: "Customers", to: "/testimonials" },
      { label: "Community", to: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Integration", to: "/core-features" },
      { label: "What's New", to: "#" }, // Download page excluded
      { label: "Pricing", to: "/pricing" },
      { label: "Help Center", to: "#" }, // excluded
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Use", to: "#" },
      { label: "Privacy Policy", to: "#" },
      { label: "Cookie Policy", to: "#" },
      { label: "Site Map", to: "#" },
    ],
  },
];

const socials = [
  { name: "Facebook", d: "M13.5 21v-8h2.7l.4-3.2h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.7V13h2.7v8h3.1z" },
  { name: "Twitter", d: "M21 6.5c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.7-2.3.9a3.7 3.7 0 0 0-6.3 3.4C8.8 9.1 6.1 7.6 4.3 5.4c-.9 1.6-.4 3.6 1.1 4.6-.6 0-1.1-.2-1.6-.4 0 1.8 1.3 3.3 3 3.7-.5.1-1 .2-1.6.1.4 1.5 1.8 2.5 3.4 2.5A7.4 7.4 0 0 1 3 17.4 10.4 10.4 0 0 0 8.6 19c6.8 0 10.6-5.7 10.3-10.8.7-.5 1.4-1.2 2.1-1.7z" },
  { name: "Instagram", d: "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.8-7.8a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 3.5c-2.4 0-2.7 0-3.6.1-2.4.1-3.7 1.4-3.8 3.8-.1.9-.1 1.2-.1 3.6s0 2.7.1 3.6c.1 2.4 1.4 3.7 3.8 3.8.9.1 1.2.1 3.6.1s2.7 0 3.6-.1c2.4-.1 3.7-1.4 3.8-3.8.1-.9.1-1.2.1-3.6s0-2.7-.1-3.6c-.1-2.4-1.4-3.7-3.8-3.8-.9-.1-1.2-.1-3.6-.1z" },
  { name: "YouTube", d: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" },
];

export default function Footer() {
  const { pathname } = useLocation();
  // pink logo on Home, blue logo on every other page
  const logo = pathname === "/" ? "/images/logo-pink.png" : "/images/logo-blue.png";

  return (
    <footer className="border-t border-ink/5 bg-white pb-8 pt-16">
      <div className="mx-auto max-w-[1320px] px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.5fr]">
          <div>
            <Link to="/">
              <img src={logo} alt="Martex" className="h-9 w-auto" />
            </Link>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h6 className="mb-4 text-[17px] font-semibold text-ink">{col.title}</h6>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[15px] text-ink/60 transition-colors hover:text-[#f5427f]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h6 className="mb-4 text-[17px] font-semibold text-ink">Follow the Best</h6>
            <form className="flex items-center bg-ink/5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Email Address"
                aria-label="Email address"
                className="w-full bg-transparent px-4 py-3 text-[15px] outline-none placeholder:text-ink/50"
              />
              <button type="submit" aria-label="Subscribe" className="px-4 text-xl text-[#f5427f]">
                →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 sm:flex-row">
          <p className="text-[15px] text-ink/60">© 2025 Martex. All Rights Reserved</p>
          <ul className="flex items-center gap-4">
            {socials.map((s) => (
              <li key={s.name}>
                <a href="#" aria-label={s.name} className="text-ink/50 transition-colors hover:text-[#f5427f]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.d} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}