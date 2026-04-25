import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedDivider from "../AnimatedDivider";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export default function FounderSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 12, md: 16 },
        px: 3,
        background: "linear-gradient(180deg, #0a0000 0%, #111111 50%, #0a0000 100%)",
        overflow: "hidden",
      }}
    >
      <AnimatedDivider />

      {/* Subtle background accent */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,21,56,0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          position: "relative",
          zIndex: 1,
          mt: "40px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: { xs: 6, md: 10 },
            alignItems: "center",
          }}
        >
          {/* Image Column */}
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Box
              sx={{
                position: "relative",
                aspectRatio: "3/4",
                overflow: "hidden",
                borderRadius: 2,
                border: "1px solid rgba(139, 21, 56, 0.3)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                transition: "all 0.5s ease",

                "&:hover": {
                  borderColor: "rgba(139, 21, 56, 0.6)",
                  boxShadow: `
                    0 25px 70px rgba(0,0,0,0.6),
                    0 0 0 1px rgba(139, 21, 56, 0.2)
                  `,
                  transform: "scale(1.02)",
                },
              }}
            >
              <Box
                component="img"
                // src="https://images.unsplash.com/photo-1740456777764-9da56b9f618c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaGFyYXRhbmF0eWFtJTIwY29zdHVtZSUyMGpld2VscnklMjBvcm5hbWVudHN8ZW58MXx8fHwxNzY5OTIwNDQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                src="https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_700/v1774682832/Nandini_1_accq6d.webp"
                alt="Sreenandini Jayaram"
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(1,1,1,0.6) 0%, transparent 50%)",
                }}
              />
            </Box>
          </MotionBox>

          {/* Content Column */}
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Heading */}
            <MotionTypography
              sx={{
                fontFamily: "'Berkshire Swash', cursive",
                fontSize: { xs: "2.5rem", md: "3.25rem" },
                fontWeight: 800,
                color: "#FFF5F2",
                mb: 4,
                lineHeight: 1.2,
                letterSpacing: "0.01em",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              The Heart Behind the Art
            </MotionTypography>

            {/* Bio Paragraphs */}
            <Box sx={{ mb: 5 }}>
              <Typography
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  color: "rgba(253, 232, 224, 0.75)",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Smt. Sreenandini Jayaram, the visionary founder of SreeNarthana Natyalaya, brings decades of experience in
                Bharatanatyam to the dance community of Spring, Texas and surrounding areas.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  color: "rgba(253, 232, 224, 0.75)",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Trained under renowned gurus Smt. Sheela Unnikrishnan and Smt. Sreedevi Priya Sriram in India,
                she is a passionate performer whose dedication to Bharatanatyam is matched by her love for teaching.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  color: "rgba(253, 232, 224, 0.75)",
                  lineHeight: 1.8,
                }}
              >
                Beginning her journey at a young age, Sreenandini Jayaram has evolved into a committed performer, choreographer, and mentor.
                Her teaching philosophy blends traditional rigor with contemporary sensitivity, ensuring that every student grows not only as a dancer
                but also as a custodian of cultural heritage.
              </Typography>
            </Box>

            {/* Quote Box */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              sx={{
                position: "relative",
                p: { xs: 3.5, md: 4.5 },
                borderLeft: "4px solid #8B1538",
                background: "linear-gradient(135deg, rgba(15,0,3,0.6) 0%, rgba(20,0,5,0.4) 100%)",
                borderRadius: "0 8px 8px 0",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "0 8px 8px 0",
                  padding: "1px",
                  background: "linear-gradient(135deg, rgba(139, 21, 56, 0.3), transparent)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  pointerEvents: "none",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Crimson Text', serif",
                  fontSize: { xs: "1.15rem", md: "1.5rem" },
                  fontStyle: "italic",
                  color: "rgba(253, 232, 224, 0.95)",
                  lineHeight: 1.7,
                  mb: 2.5,
                  position: "relative",
                  pl: "10px",

                  "&::before": {
                    content: '"\\201C"',
                    position: "absolute",
                    left: "-20px",
                    top: "-10px",
                    fontSize: "3rem",
                    color: "#D4A574",
                    fontFamily: "Georgia, serif",
                  },
                }}
              >
                Every rhythm, every glance, and every step is an opportunity to awaken the heart and celebrate the art form.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: { xs: "0.95rem", md: "1.25rem" },
                  color: "#D4A574",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                — Sreenandini Jayaram
              </Typography>
            </MotionBox>
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
}