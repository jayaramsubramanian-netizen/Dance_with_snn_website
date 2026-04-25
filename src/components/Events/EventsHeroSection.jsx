import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export default function EventsHeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0a0005 0%, #130008 40%, #1a0010 70%, #0d0003 100%)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* ── LEFT — TEXT ── */}
      <MotionBox
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        sx={{
          position: "relative",
          zIndex: 2,
          width: { xs: "100%", md: "32%" },
          height: { xs: "auto", md: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
          px: { xs: 4, md: 8, lg: 12 },
          py: { xs: 8, md: 0 },
        }}
      >
        <MotionBox
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.8 }}
          sx={{
            height: "2px",
            background: "linear-gradient(90deg, #8B1538, #D94567, transparent)",
            mb: 4,
          }}
        />

        <MotionTypography
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          component="h1"
          sx={{
            fontFamily: "'Berkshire Swash', cursive",
            fontSize: { xs: "2.8rem", sm: "3.8rem", md: "4rem", lg: "4.8rem" },
            lineHeight: 1.1,
            color: "#FFF5F2",
            fontWeight: 800,
            letterSpacing: "0.02em",
            mb: 3,
            textShadow: `
              0 4px 30px rgba(0,0,0,0.9),
              0 2px 15px rgba(139,21,56,0.5),
              0 0 40px rgba(139,21,56,0.2)
            `,
          }}
        >
          Gallery &{"\n"}Events
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: { xs: "1.1rem", md: "1.2rem", lg: "1.3rem" },
            maxWidth: "380px",
            color: "#F5E6E3",
            fontWeight: 300,
            lineHeight: 1.8,
            letterSpacing: "0.01em",
            opacity: 0.85,
          }}
        >
          Celebrating artistry on stage and in community
        </MotionTypography>

        <MotionBox
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          sx={{
            height: "2px",
            background: "linear-gradient(90deg, #8B1538, #D94567, transparent)",
            mt: 4,
          }}
        />
      </MotionBox>

      {/* ── RIGHT — IMAGE ── */}
      <Box
        sx={{
          width: { xs: "100%", md: "68%" },
          height: { xs: "55%", md: "100%" },
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 3, md: 4 },
          py: { xs: 6, md: 18 },
        }}
      >
        <MotionBox
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: `
              0 0 0 1px rgba(139,21,56,0.3),
              0 8px 32px rgba(0,0,0,0.8),
              0 24px 80px rgba(0,0,0,0.6),
              0 0 60px rgba(139,21,56,0.12)
            `,
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_1400/v1774683282/DSC_0897_uq9geq.webp"
            alt="Dance performance"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 20%",
              display: "block",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.35) 100%)",
              pointerEvents: "none",
            }}
          />
        </MotionBox>
      </Box>
    </Box>
  );
}