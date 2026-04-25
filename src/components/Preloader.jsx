import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export function Preloader() {
  // Start as false so SSR renders nothing — avoids hydration mismatch.
  // Client sets it to true on first paint, then hides it on window load.
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show the preloader only on the client after first paint
    setMounted(true);

    const hide = () => setIsLoading(false);
    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide, { once: true });
      return () => window.removeEventListener('load', hide);
    }
  }, []);

  // Render nothing during SSR (or before first client paint)
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <MotionBox
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            zIndex: 2000,
            backgroundColor: "#010101",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              position: "relative",
              width: "100%",
              maxWidth: "500px",
              px: 3,
              mx: "auto",
            }}
          >
            {/* Logo */}
            <MotionBox
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <MotionTypography
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                sx={{
                  fontFamily: "'Berkshire Swash', cursive",
                  color: "#FDE8E0",
                  mb: 2,
                  fontSize: {
                    xs: "2.3rem",
                    sm: "2.6rem",
                    md: "3rem",
                    lg: "3.75rem",
                  },
                }}
              >
                SreeNarthana
                <br />
                <Box component="span" sx={{ color: "#7C1B32" }}>
                  Natyalaya
                </Box>
              </MotionTypography>
            </MotionBox>

            {/* Loading dots */}
            <MotionBox
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: "center",
                gap: 1.5,
              }}
            >
              {[0, 1, 2].map((i) => (
                <MotionBox
                  key={i}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#7C1B32",
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </MotionBox>

            {/* Tagline */}
            <MotionTypography
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              sx={{
                mt: 3,
                color: "#d4a88c",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Classical Bharatanatyam Excellence
            </MotionTypography>
          </Box>

          {/* Decorative blobs */}
          <Box
            sx={{
              position: "absolute",
              top: "25%",
              left: "20%",
              width: 260,
              height: 260,
              backgroundColor: "rgba(124,27,50,0.1)",
              filter: "blur(120px)",
              borderRadius: "50%",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: "25%",
              right: "20%",
              width: 320,
              height: 320,
              backgroundColor: "rgba(212,168,140,0.05)",
              filter: "blur(140px)",
              borderRadius: "50%",
            }}
          />
        </MotionBox>
      )}
    </AnimatePresence>
  );
}