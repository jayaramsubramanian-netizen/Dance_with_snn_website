import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useContent, Rich } from '../../content/ContentContext.jsx';

const MotionBox = motion.create(Box);
const MotionImg = motion.create("img");
const MotionButton = motion.create(Button);
const MotionTypography = motion.create(Typography);

/*
 * Reads the actual rendered navbar height at runtime so we never
 * hard-code a pixel value. Falls back to 72px if the element isn't found.
 */
function useNavbarHeight() {
  const [height, setHeight] = useState(72);

  useEffect(() => {
    const measure = () => {
      const nav = document.querySelector("nav[aria-label='Main navigation']");
      if (nav) setHeight(nav.getBoundingClientRect().height);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return height;
}

export default function HeroSection({ onScrollDown }) {
  const { t, img } = useContent();
  const navH = useNavbarHeight();

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        /*
         * Fill the viewport BELOW the navbar.
         * 100dvh accounts for mobile browser chrome (avoids the address-bar
         * jump that 100vh causes on iOS/Android).
         */
        height: `calc(100dvh - ${navH}px)`,
        minHeight: "480px",      /* never collapse on tiny screens */
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#000000",
        /*
         * Push the section down by the navbar height so it starts exactly
         * where the navbar ends — no overlap, no gap.
         */
        mt: `${navH}px`,
      }}
    >
      {/* ── Background image + overlays ── */}
      <Box sx={{ position: "absolute", inset: 0 }}>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(124,27,50,0.2) 50%, rgba(0,0,0,0.82) 100%)",
            zIndex: 1,
          }}
        />
        <MotionImg
          src={img('home.hero.image').src}
          alt={img('home.hero.image').alt}
          fetchPriority="high"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            opacity: 0.72,
          }}
        />
      </Box>

      {/* ── Ambient glow blobs ── */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 2, delay: 0.5 }}
        sx={{
          position: "absolute",
          top: "18%", right: "8%",
          width: "35vw", height: "35vw",
          maxWidth: "400px", maxHeight: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,27,50,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 1, pointerEvents: "none",
        }}
      />
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.14 }}
        transition={{ duration: 2, delay: 0.7 }}
        sx={{
          position: "absolute",
          bottom: "18%", left: "6%",
          width: "30vw", height: "30vw",
          maxWidth: "350px", maxHeight: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,27,50,0.45) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 1, pointerEvents: "none",
        }}
      />

      {/* ── Hero copy ── */}
      <MotionBox
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          /*
           * Anchor content to the bottom third of the available
           * (navbar-subtracted) viewport — works at any screen size.
           */
          justifyContent: "flex-end",
          /*
           * Bottom padding: enough to clear the scroll chevron (≈56px) plus
           * a comfortable breathing gap. Using percentage keeps it
           * proportional on tall/short screens.
           */
          pb: "8%",
          px: { xs: "5%", md: "8%" },
          textAlign: "center",
        }}
      >
        {/* Top decorative rule */}
        <MotionBox
          initial={{ width: 0 }}
          animate={{ width: "5vw" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          sx={{
            height: "2px",
            minWidth: "40px", maxWidth: "80px",
            // background: "linear-gradient(90deg, transparent, rgba(124,27,50,0.7), transparent)",
            mb: "3%",
          }}
        />

        <MotionTypography
          variant="h2"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          sx={{
            fontFamily: "'Berkshire Swash', cursive",
            // fontStyle: "italic",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
            color: "#FDE8E0",
            fontWeight: 800,
            letterSpacing: "0.02em",
            textShadow: "0 4px 20px rgba(124,27,50,0.5), 0 0 40px rgba(124,27,50,0.7)",
            mb: "2%",
            lineHeight: 1.15,
          }}
        >
          {t('home.hero.title')}
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          sx={{
            fontFamily: "'Roboto', serif",
            color: "rgba(253,232,224,0.9)",
            maxWidth: "750px",
            mb: 3,
            fontSize: {
              xs: "1.05rem",
              md: "1.15rem",
              lg: "1.3rem",
            },
            lineHeight: 1.7,
            textShadow: "0 2px 10px rgba(0,0,0,0.7)",
          }}
        >
          <Rich k="home.hero.subtitle" />
        </MotionTypography>

        {/* CTA button */}
        <MotionBox
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          sx={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center", mt: "1%" }}
        >
          <MotionButton
            component={Link}
            to="/contact"
            variant="outlined"
            whileTap={{ scale: 0.98 }}
            sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "#FDE8E0",
                textDecoration: "none",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                padding: "12px 28px",
                border: "2px solid #7C1B32",
                borderRadius: "50px",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background: "#7C1B32",
                  transition: "left 0.4s ease",
                  zIndex: -1,
                },
                "&:hover": {
                  color: "#FDE8E0",
                  borderColor: "#A52347",
                  boxShadow: "0 8px 30px rgba(124, 27, 50, 0.4)",
                },
                "&:hover::before": {
                  left: 0,
                },
              }}
          >
            {t('home.hero.button')}
            <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
          </MotionButton>
        </MotionBox>

        {/* Bottom decorative rule */}
        <MotionBox
          initial={{ width: 0 }}
          animate={{ width: "4vw" }}
          transition={{ duration: 0.8, delay: 1.1 }}
          sx={{
            height: "2px",
            minWidth: "36px", maxWidth: "60px",
            background: "linear-gradient(90deg, transparent, #7C1B32, transparent)",
            mt: "3%",
          }}
        />
      </MotionBox>

      {/* ── Scroll chevron ── */}
      <MotionBox
        onClick={onScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        sx={{
          position: "absolute",
          /*
           * 3% from bottom keeps it proportional; min 16px so it never
           * hugs the edge on a landscape phone.
           */
          bottom: "max(3%, 16px)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          cursor: "pointer",
          color: "#7C1B32",
          transition: "color 0.3s ease",
          "&:hover": { color: "#E94B6E" },
        }}
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={36} strokeWidth={2} />
        </motion.div>
      </MotionBox>
    </Box>
  );
}