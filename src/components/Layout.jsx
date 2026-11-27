import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function scrollToHash(hash) {
  const el = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Layout() {
  const { pathname, hash, key } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    // no hash: new page starts at the top
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }
    // hash: scroll to the section, then once more after images have settled
    const t1 = setTimeout(() => scrollToHash(hash), 50);
    const t2 = setTimeout(() => scrollToHash(hash), 600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname, hash, key]);

  return (
    // every page except Home uses the blue theme (see index.css)
    <div className={isHome ? "" : "theme-blue"}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}