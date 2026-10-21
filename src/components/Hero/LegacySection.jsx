import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedDivider from "../AnimatedDivider";
import { useContent, Rich } from '../../content/ContentContext.jsx';

const MotionBox = motion.create(Box);

export default function LegacySection() {
  const { t, img } = useContent();
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        backgroundColor: "#000000",
        py: { xs: 12, md: 16 },
        px: 2,
        overflow: "hidden",
      }}
    >
      <AnimatedDivider />

      {/* IMAGE LAYER */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Box
          component="img"
          src={img('home.legacy.image').src}
          alt={img('home.legacy.image').alt}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.25,
          }}
        />
      </Box>

      {/* DARK OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `
      linear-gradient(
        135deg,
        rgba(10,0,5,0.95) 0%,
        rgba(19,0,8,0.9) 40%,
        rgba(26,0,16,0.75) 70%,
        rgba(13,0,3,0.95) 100%
      )
    `,
        }}
      />

      {/* MAROON GLOW */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        sx={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124, 27, 50, 0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 1,
        }}
      />

      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.3 }}
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124, 27, 50, 0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          mx: "auto",
          textAlign: "center",
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* TITLE */}
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Berkshire Swash', cursive",
              fontSize: { xs: "2rem", sm: "3.5rem", md: "4rem" },
              color: "#FDE8E0",
              fontWeight: 800,
              letterSpacing: "0.03em",
              textShadow:
                "0 4px 20px rgba(124,27,50,0.5), 0 0 40px rgba(124,27,50,0.3)",
              mb: 1.5,
            }}
          >
            Śoundaryā Nritya Pramparam
          </Typography>

          {/* NEW SUBTITLE */}
          <Typography
            sx={{
              fontFamily: "'Berkshire Swash', cursive",
              fontSize: { xs: "1.2rem", md: "1.4rem" },
              color: "#E94B6E",
              letterSpacing: "0.05em",
              mb: 3,
            }}
          >
            {t('home.legacy.title')}
          </Typography>

          {/* PARAGRAPH */}
          <Typography
            sx={{
              fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.25rem" },
              color: "rgba(253,232,224,0.95)",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.9,
              mb: 5,
              fontFamily: "'Roboto', serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            <Rich k="home.legacy.body" />
          </Typography>

          {/* BUTTON */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component={Link}
              to="/about"
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
              {t('home.legacy.button')}
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
            </Box>
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  );
}