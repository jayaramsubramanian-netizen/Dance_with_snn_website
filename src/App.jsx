import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Preloader } from "./components/Preloader";
import { Navigation } from "./components/Navigation";

import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Events from "./pages/Events";
import Portal from "./pages/Portal";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleRightClick);

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);

  return (
    <>
      <Preloader />

      <Navigation
        activeSection={location.pathname}
        onNavigate={(path) => navigate(path)}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/events" element={<Events />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
