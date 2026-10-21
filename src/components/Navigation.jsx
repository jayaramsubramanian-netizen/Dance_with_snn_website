import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useContent } from '../content/ContentContext.jsx';

const MotionBox = motion.create(Box);
const MotionNavItem = motion.create(Box);

export function Navigation() {
  const { img } = useContent();
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/about", label: "About Us" },
    { path: "/classes", label: "Classes" },
    { path: "/events", label: "Gallery" },
    { path: "https://portal.dancewithsnn.com/portal/login", label: "Portal" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <MotionBox
        component="nav"
        aria-label="Main navigation"
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          maxWidth: "100vw",
          zIndex: 1300,
          backgroundColor: isScrolled
            ? "rgba(8,0,4,0.96)"
            : "rgba(0,0,0,0.2)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(6px)",
          transition: "all 0.4s ease",
          boxShadow: isScrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Gradient border */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: isScrolled
              ? "linear-gradient(90deg, transparent 0%, rgba(124,27,50,0.6) 30%, rgba(233,75,110,0.8) 50%, rgba(124,27,50,0.6) 70%, transparent 100%)"
              : "linear-gradient(90deg, transparent 0%, rgba(253,232,224,0.12) 50%, transparent 100%)",
            transition: "all 0.4s ease",
          }}
        />

        <Box
          sx={{
            width: "100%",
            px: { xs: 3, md: 5 },
            height: { xs: 72, md: 76 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ================= LOGO ================= */}
          <MotionBox
            onClick={() => {
              navigate("/");
              setMobileOpen(false);
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25 }}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <Box
              component="img"
              src={img("site.logo").src}
              alt={img("site.logo").alt}
              sx={{
                height: { xs: 60, sm: 50, md: 90 },
                width: "auto",
                maxWidth: { xs: "250px", sm: "180px", md: "none" },
                filter: isScrolled
                  ? "drop-shadow(0 0 10px rgba(124,27,50,0.7)) brightness(1.1)"
                  : "drop-shadow(0 0 6px rgba(124,27,50,0.4))",
                transition: "filter 0.4s ease",
              }}
            />
          </MotionBox>

          {/* ================= DESKTOP NAV ================= */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: { md: 1, lg: 1.5 },
            }}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <MotionNavItem
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  whileHover={{ y: -1 }}
                  sx={{
                    cursor: "pointer",
                    position: "relative",
                    px: { md: 1.5, lg: 2 },
                    py: 0.75,
                    color: isActive ? "#E94B6E" : "rgba(253,232,224,0.85)",
                    fontSize: { md: "0.78rem", lg: "0.82rem" },
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: isActive ? 600 : 400,
                    borderRadius: "6px",
                    transition: "all 0.25s ease",
                    background: isActive
                      ? "rgba(124,27,50,0.15)"
                      : "transparent",
                    "&:hover": {
                      color: "#E94B6E",
                      background: "rgba(124,27,50,0.1)",
                    },
                  }}
                >
                  {item.label}

                  {isActive && (
                    <MotionBox
                      layoutId="nav-underline"
                      sx={{
                        position: "absolute",
                        bottom: 2,
                        left: "20%",
                        right: "20%",
                        height: "1.5px",
                        background:
                          "linear-gradient(90deg, transparent, #E94B6E, transparent)",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </MotionNavItem>
              );
            })}
          </Box>

          {/* ================= HAMBURGER ================= */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              cursor: "pointer",
              flexDirection: "column",
              gap: 0.8,
              p: 1,
              zIndex: 120,
            }}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <Box
              sx={{
                width: 26,
                height: "3px",
                backgroundColor: "#FDE8E0",
                borderRadius: "2px",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transformOrigin: "center",
                transform: mobileOpen
                  ? "translateY(7px) rotate(45deg)"
                  : "none",
              }}
            />

            <Box
              sx={{
                width: 26,
                height: "2.5px",
                backgroundColor: "#FDE8E0",
                borderRadius: "2px",
                transition: "opacity 0.3s ease",
                opacity: mobileOpen ? 0 : 1,
              }}
            />

            <Box
              sx={{
                width: 26,
                height: "2.5px",
                backgroundColor: "#FDE8E0",
                borderRadius: "2px",
                transition: "transform 0.3s ease",
                transformOrigin: "center",
                transform: mobileOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }}
            />
          </Box>
        </Box>
      </MotionBox>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <MotionBox
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            sx={{
              position: "fixed",
              top: 72,
              left: 0,
              right: 0,
              background:
                "linear-gradient(180deg, rgba(10,0,5,0.99) 0%, rgba(18,0,8,0.99) 100%)",
              backdropFilter: "blur(20px)",
              zIndex: 99,
              px: 4,
              py: 3,
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              borderTop: "1px solid rgba(124,27,50,0.4)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            }}
          >
            {navItems.map((item, i) => {
              const isActive = location.pathname === item.path;

              return (
                <MotionBox
                  key={item.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    navigate(item.path);
                    setMobileOpen(false);
                  }}
                  whileTap={{ scale: 0.97 }}
                  sx={{
                    cursor: "pointer",
                    color: isActive ? "#E94B6E" : "rgba(253,232,224,0.85)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: isActive ? 600 : 400,
                    py: 2,
                    px: 1,
                    borderBottom: "1px solid rgba(253,232,224,0.06)",
                    borderLeft: isActive
                      ? "2px solid #E94B6E"
                      : "2px solid transparent",
                    pl: isActive ? 2 : 1,
                    transition: "all 0.2s ease",
                    "&:hover": { color: "#E94B6E", pl: 2 },
                  }}
                >
                  {item.label}
                </MotionBox>
              );
            })}
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
}