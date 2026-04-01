import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedDivider from "./AnimatedDivider";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const EASE = [0.22, 1, 0.36, 1];

export default function ComingSoon() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "radial-gradient(ellipse at 30% 40%, rgba(124,27,50,0.35) 0%, transparent 55%), radial-gradient(ellipse at 75% 65%, rgba(91,45,142,0.15) 0%, transparent 50%), #06030A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Soft top vignette */}
      <Box sx={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "35%",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
        pointerEvents: "none",
      }} />

      <Box sx={{
        position: "relative",
        zIndex: 1,
        textAlign: "center",
        px: 3,
      }}>
        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: { xs: "0.8rem", md: "0.85rem" },
            color: "#E94B6E",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            mb: 2.5,
          }}
        >
          Sree Narthana Natyalaya
        </MotionTypography>

        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
        >
          <AnimatedDivider color="#7C1B32" />
        </MotionBox>

        <MotionTypography
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: EASE }}
          sx={{
            fontFamily: "'Berkshire Swash', cursive",
            fontSize: { xs: "3.5rem", sm: "5rem", md: "7rem" },
            color: "#FDE8E0",
            lineHeight: 1,
            letterSpacing: "0.02em",
            textShadow: "0 4px 40px rgba(124,27,50,0.55)",
            mt: 2, mb: 3,
          }}
        >
          Coming Soon
        </MotionTypography>

        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
        >
          <AnimatedDivider color="#7C1B32" />
        </MotionBox>

        <MotionTypography
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55, ease: EASE }}
          sx={{
            fontFamily: "'Crimson Text', serif",
            fontSize: { xs: "1rem", md: "1.15rem" },
            color: "rgba(253,232,224,0.45)",
            letterSpacing: "0.04em",
            mt: 2,
          }}
        >
          Something beautiful is on its way.
        </MotionTypography>
      </Box>
    </Box>
  );
}