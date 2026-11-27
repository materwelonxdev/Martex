import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Careers from "./pages/Careers";
import CareerDetails from "./pages/CareerDetails";
import Contact from "./pages/Contact";
import CoreFeatures from "./pages/CoreFeatures";
import Pricing from "./pages/Pricing";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Testimonials from "./pages/Testimonials";
import Download from "./pages/Download";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// Placeholder until each page is built. Replace one by one.
function Placeholder({ title }) {
  return (
    <section className="flex min-h-[70vh] items-end bg-white px-5 pb-16 pt-40 text-ink">
      <div className="mx-auto w-full max-w-[1320px]">
        <h1 className="text-4xl font-bold md:text-6xl">{title}</h1>
        <p className="mt-4 text-lg text-ink/60">Page coming soon.</p>
      </div>
    </section>
  );
}

// Only pages that are NOT built yet. Remove an entry once its page exists.
const pages = [
  // Header
  ["/faqs", "FAQs"],
  // Pages menu
  ["/blog", "Blog Listing"],
  ["/404", "404 Page"],
];

export default function App() {
  return (
    <>
      <Preloader />
      <Routes>
        {/* Standalone pages: no navbar or footer */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Pages inside the shared layout (navbar + footer) */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/career-details" element={<CareerDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/core-features" element={<CoreFeatures />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-details" element={<ProjectDetails />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/download" element={<Download />} />
          {pages.map(([path, title]) => (
            <Route key={path} path={path} element={<Placeholder title={title} />} />
          ))}
          <Route path="*" element={<Placeholder title="404 Page" />} />
        </Route>
      </Routes>
    </>
  );
}