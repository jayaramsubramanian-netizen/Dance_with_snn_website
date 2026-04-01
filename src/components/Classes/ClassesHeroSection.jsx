import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function ClassesHeroSection() {
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
      {/* ================= LEFT — IMAGE ================= */}
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
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            // boxShadow: `
            //   0 0 0 1px rgba(124,27,50,0.3),
            //   0 8px 32px rgba(0,0,0,0.8),
            //   0 24px 80px rgba(0,0,0,0.6),
            //   0 0 60px rgba(124,27,50,0.12)
            // `,
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dtovj9rds/image/upload/v1774704095/DSC09538_gsl2xc.jpg"
            alt="Dance training"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              display: "block",
            }}
          />

          {/* Subtle inner vignette */}
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

      {/* ================= RIGHT — TEXT ================= */}
      <MotionBox
        initial={{ opacity: 0, x: 40 }}
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
          px: { xs: 4, md: 8, lg: 10 },
          py: { xs: 8, md: 0 },
        }}
      >
        {/* Decorative line */}
        <MotionBox
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{
            height: "2px",
            background: "linear-gradient(90deg, #7C1B32, #D94567, transparent)",
            mb: 4,
          }}
        />

        {/* Main Heading */}
        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          component="h1"
          sx={{
            fontFamily: "'Berkshire Swash', cursive",
            fontSize: { xs: "3rem", sm: "4rem", md: "3.5rem", lg: "4rem" },
            color: "#FDE8E0",
            fontWeight: 600,
            letterSpacing: "0.03em",
            // textShadow: "0 4px 20px rgba(124,27,50,0.5), 0 0 40px rgba(124,27,50,0.3)",
            mb: 3,
            lineHeight: 1.1,
          }}
        >
          Natyam
        </MotionTypography>

        {/* Subtitle */}
        <MotionTypography
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          sx={{
            fontSize: { xs: "1.1rem", md: "1.2rem", lg: "1.35rem" },
            color: "rgba(253,232,224,0.85)",
            maxWidth: "420px",
            lineHeight: 1.8,
            fontFamily: "'Roboto', sans-serif",
            textShadow: "0 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          Mārga of Bharatanatyam · Path of Dance · Structured programs for every stage of your dance journey
        </MotionTypography>

        {/* Decorative line below */}
        <MotionBox
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ duration: 0.8, delay: 0.7 }}
          sx={{
            height: "2px",
            background: "linear-gradient(90deg, #7C1B32, #D94567, transparent)",
            mt: 4,
          }}
        />
      </MotionBox>
    </Box>
  );
}