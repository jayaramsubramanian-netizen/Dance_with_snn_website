import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);
const MotionImg = motion("img");
const MotionButton = motion(Button);
const MotionTypography = motion(Typography);

export default function HeroSection({ onScrollDown }) {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: { xs: "95vh", md: "95vh" },
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#000000",
      }}
    >
      {/* Background Image */}
      <Box sx={{ position: "absolute", inset: 0 }}>
        {/* Gradient Overlay with maroon tint */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(124,27,50,0.25), rgba(0,0,0,0.85))",
            zIndex: 1,
          }}
        />
        <MotionImg
          // src="https://images.unsplash.com/photo-1764014792666-0f9e3c8442a9?auto=format&fit=crop&w=1600&q=80"
          src="https://res.cloudinary.com/dtovj9rds/image/upload/v1774683883/StudentPic4_yi3k2b.webp"
          alt="Bharatanatyam Performance"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top 40%",
            opacity: 0.7,
          }}
        />
      </Box>

      {/* Decorative maroon glow elements ...*/}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
        sx={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, transparent 70%, rgba(124, 27, 50, 0.4) 0%)",
          filter: "blur(500px)",
          zIndex: 1,
        }}
      />

      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 0.7 }}
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "8%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, transparent 70%, rgba(124, 27, 50, 0.35) 0%)",
          filter: "blur(500px)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          pb: { xs: 10, md: 6 },
          px: 3,
          textAlign: "center",
        }}
      >
        {/* Decorative line above heading --outer*/}
        <MotionBox
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          sx={{
            height: "2px",
            background: "radial-gradient(circle, transparent 70%, rgba(124, 27, 50, 0.4) 0%)",
            mb: 4,
          }}
        />

        <MotionTypography
          variant="h2"
          // initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          sx={{
            fontFamily: "'Berkshire Swash', cursive",
            // fontStyle: "italic",
            fontSize: { xs: "2.5rem", sm: "2rem", md: "3rem", lg: "4rem" },
            color: "#FDE8E0",
            // m : "46px 48px 0 48px",
            textAlign: "center",
            fontWeight: 800,
            mb: { xs: 0, md: 2 },
            letterSpacing: "0.02em",
            textShadow:
                "0 4px 20px rgba(124,27,50,0.5), 0 0 40px rgba(124,27,50,0.7)",
          }}
        >
          Nurturing Bharatanatyam Excellence
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
          Where tradition meets artistry and discipline transforms into grace.
          <br />
          Experience the timeless elegance of our classical Indian dance.
        </MotionTypography>

        {/* Buttons */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "center",
            mt: 2,
          }}
        >
          {/* <MotionButton
            component="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfkF11rllSLF2jAGpF_Q8mfBgMvAhZKEEqlaGY52lGvHjLiZg/viewform?usp=sharing&ouid=117175852009957048619"   // ← put your real link here
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(124,27,50,0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            sx={{
              px: { xs: 4, md: 6 },
              py: { xs: 1.75, md: 2 },
              borderRadius: "50px",
              backgroundColor: "#7C1B32",
              color: "#FDE8E0",
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(124,27,50,0.3)",
              transition: "all 0.3s ease",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "radial-gradient(circle, transparent 70%, rgba(124, 27, 50, 0.4) 0%)",
                transition: "left 0.5s ease",
              },
              "&:hover": {
                backgroundColor: "#9a2240",
              },
              "&:hover::before": {
                left: "100%",
              },
            }}
          >
            Enroll Now
          </MotionButton> */}

          <MotionButton
            component={Link}
            to="/contact"
            variant="outlined"
            // whileHover={{
            //   scale: 1.05,
            //   boxShadow: "0 8px 30px rgba(253,232,224,0.2)",
            // }}
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
            Enroll Now
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

        {/* Decorative line below buttons */}
        <MotionBox
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ duration: 0.8, delay: 1.1 }}
          sx={{
            height: "2px",
            background: "linear-gradient(90deg, transparent, #7C1B32, transparent)",
            mt: 5,
          }}
        />
      </MotionBox>

      {/* Scroll Indicator */}
      <MotionBox
        onClick={onScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        sx={{
          position: "absolute",
          bottom: { xs: 24, md: 32 },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          cursor: "pointer",
          color: "#7C1B32",
          transition: "color 0.3s ease",
          "&:hover": {
            color: "#E94B6E",
          },
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={40} strokeWidth={2} />
        </motion.div>
      </MotionBox>
    </Box>
  );
}