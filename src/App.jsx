import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Preloader } from "./components/Preloader";
import { Navigation } from "./components/Navigation";

import Home from "./pages/Home";
const About   = lazy(() => import("./pages/About"));
const Classes = lazy(() => import("./pages/Classes"));
const Events  = lazy(() => import("./pages/Events"));
const Portal  = lazy(() => import("./pages/Portal"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const navRef   = useRef(null);
  const [navH, setNavH] = useState(0);

  /* Measure the real navbar height, re-measure on resize */
  useEffect(() => {
    const measure = () => {
      if (navRef.current) {
        setNavH(navRef.current.getBoundingClientRect().height);
      }
    };
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const block = (e) => e.preventDefault();
    document.addEventListener("contextmenu", block);
    return () => document.removeEventListener("contextmenu", block);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <>
      <Preloader />

      {/* ref wrapper lets us read the navbar's rendered height */}
      <div ref={navRef}>
        <Navigation
          activeSection={location.pathname}
          onNavigate={(path) => navigate(path)}
        />
      </div>

      {/*
        paddingTop = navbar height on every page except Home.
        Home's HeroSection is a full-bleed hero that intentionally
        sits behind/below the navbar — it handles its own offset.
      */}
      <div style={{ paddingTop: isHome ? 0 : navH }}>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/"        element={<Home />}    />
            <Route path="/about"   element={<About />}   />
            <Route path="/classes" element={<Classes />} />
            <Route path="/events"  element={<Events />}  />
            <Route path="/portal"  element={<Portal />}  />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}