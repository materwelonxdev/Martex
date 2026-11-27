import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  aboutLinks,
  pagesColumns,
  featuresLink,
  pricingLink,
  faqsLink,
} from "../data/navLinks";

const SCROLL_THRESHOLD = 60;

function Caret({ open }) {
  return (
    <svg
      className={`ml-1.5 h-2.5 w-2.5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 10 6"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 0h10L5 6z" />
    </svg>
  );
}

function Badge({ children }) {
  return (
    <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f5427f] text-xs font-bold text-white">
      {children}
    </span>
  );
}

export default function Header() {
  const { pathname, hash, key } = useLocation();
  const onHome = pathname === "/";
  // pages with a dark hero use the transparent header at the top
  const isHome = onHome || pathname === "/careers";
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // "about" | "pages" | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus on every navigation (also when clicking a #section link on the same page)
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSub(null);
  }, [pathname, hash, key]);

  // Transparent at the top on dark-hero pages (white text), dark text otherwise.
  const solid = scrolled || mobileOpen || !isHome;
  const textColor = solid ? "text-ink" : "text-white";
  // pink logo on Home, blue logo on every other page
  const solidLogo = onHome ? "/images/logo-pink.png" : "/images/logo-blue.png";
  const logo = solid ? solidLogo : "/images/logo-white.png";

  const panel = (isOpen) =>
    `absolute top-full bg-white text-ink shadow-[0_14px_40px_rgba(30,20,70,0.18)] transition-opacity duration-300 ${
      isOpen ? "visible opacity-100" : "invisible opacity-0"
    }`;

  const linkCls = `px-4 xl:px-5 text-[17px] font-semibold font-heading transition-colors hover:text-[#f5427f] ${textColor}`;
  const dropItem =
    "flex items-center px-4 py-2.5 text-[17px] font-medium text-ink transition-colors hover:text-[#f5427f]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        mobileOpen
          ? "bg-white"
          : scrolled
          ? "bg-white/70 backdrop-blur-md shadow-[0_2px_12px_rgba(43,39,80,0.06)]"
          : isHome
          ? "bg-transparent"
          : "bg-white"
      }`}
    >
      <div
        className={`relative mx-auto flex max-w-[1320px] items-stretch px-5 transition-all duration-300 ${
          scrolled ? "h-[72px]" : "h-[88px]"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Martex home">
          <img src={logo} alt="Martex" className="h-9 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-stretch lg:flex" aria-label="Main">
          <ul className="flex items-stretch">
            {/* About (single-column dropdown) */}
            <li
              className="relative flex items-center"
              onMouseEnter={() => setOpenMenu("about")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                className={`flex items-center ${linkCls}`}
                aria-expanded={openMenu === "about"}
                onClick={() => setOpenMenu(openMenu === "about" ? null : "about")}
              >
                About
                <Caret open={openMenu === "about"} />
              </button>
              <div className={`${panel(openMenu === "about")} left-0 w-[230px] py-3`}>
                {aboutLinks.map((l) => (
                  <Link key={l.to} to={l.to} className={dropItem}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </li>

            <li className="flex items-center">
              <Link to={featuresLink.to} className={linkCls}>
                {featuresLink.label}
              </Link>
            </li>

            {/* Pages (mega menu) */}
            <li
              className="flex items-center"
              onMouseEnter={() => setOpenMenu("pages")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                className={`flex items-center ${linkCls}`}
                aria-expanded={openMenu === "pages"}
                onClick={() => setOpenMenu(openMenu === "pages" ? null : "pages")}
              >
                Pages
                <Caret open={openMenu === "pages"} />
              </button>
              <div
                className={`${panel(openMenu === "pages")} right-5 grid w-[min(960px,calc(100%-2.5rem))] grid-cols-4 px-6 py-6`}
              >
                {pagesColumns.map((col, i) => (
                  <ul key={i}>
                    {col.map((l) => (
                      <li key={l.to}>
                        <Link to={l.to} className={dropItem}>
                          {l.label}
                          {l.badge && <Badge>{l.badge}</Badge>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </li>

            <li className="flex items-center">
              <Link to={pricingLink.to} className={linkCls}>
                {pricingLink.label}
              </Link>
            </li>
            <li className="flex items-center">
              <Link to={faqsLink.to} className={linkCls}>
                {faqsLink.label}
              </Link>
            </li>
          </ul>

          {/* Auth */}
          <div className="ml-6 flex items-center gap-4">
            <Link to="/login" className={linkCls}>
              Sign in
            </Link>
            <Link
              to="/signup"
              className="rounded-[4px] bg-[#f5427f] px-5 py-2.5 text-[17px] font-semibold text-white transition-colors hover:bg-[#e12d6b]"
            >
              Sign up
            </Link>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`ml-auto flex items-center lg:hidden ${textColor}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile / tablet panel */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-ink/10 bg-white lg:hidden">
          <ul className="px-5 py-3 font-heading text-[17px] font-semibold text-ink">
            <li>
              <button
                type="button"
                className="flex w-full items-center justify-between py-3"
                onClick={() => setMobileSub(mobileSub === "about" ? null : "about")}
              >
                About <Caret open={mobileSub === "about"} />
              </button>
              {mobileSub === "about" && (
                <ul className="pb-2 pl-4 font-medium">
                  {aboutLinks.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="block py-2 hover:text-[#f5427f]">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to={featuresLink.to} className="block py-3 hover:text-[#f5427f]">
                {featuresLink.label}
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex w-full items-center justify-between py-3"
                onClick={() => setMobileSub(mobileSub === "pages" ? null : "pages")}
              >
                Pages <Caret open={mobileSub === "pages"} />
              </button>
              {mobileSub === "pages" && (
                <ul className="pb-2 pl-4 font-medium">
                  {pagesColumns.flat().map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="flex items-center py-2 hover:text-[#f5427f]">
                        {l.label}
                        {l.badge && <Badge>{l.badge}</Badge>}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to={pricingLink.to} className="block py-3 hover:text-[#f5427f]">
                {pricingLink.label}
              </Link>
            </li>
            <li>
              <Link to={faqsLink.to} className="block py-3 hover:text-[#f5427f]">
                {faqsLink.label}
              </Link>
            </li>
            <li className="flex items-center gap-4 pb-2 pt-3">
              <Link to="/login" className="py-2 hover:text-[#f5427f]">
                Sign in
              </Link>
              <Link
                to="/signup"
                className="rounded-[4px] bg-[#f5427f] px-5 py-2.5 text-white hover:bg-[#e12d6b]"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}