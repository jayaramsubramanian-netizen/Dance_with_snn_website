import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function CommunityImpactSection() {
  const stats = [
    { number: "27", label: "Students Trained" },
    { number: "20+", label: "Years of Excellence" },
    { number: "50+", label: "Performances" },
    { number: "15+", label: "Awards Won" },
  ];

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
          src="https://images.unsplash.com/photo-1748616850788-c8903b648907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Dance background"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.25,
          }}
        />
      </Box>

      {/* DARK OVERLAY with maroon tint */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(124,27,50,0.3), rgba(0,0,0,0.85))",
          zIndex: 1,
        }}
      />

      {/* Decorative maroon glow elements */}
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
          background: "radial-gradient(circle, rgba(124, 27, 50, 0.5) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(124, 27, 50, 0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
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
          {/* Decorative line above heading */}
          <MotionBox
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              height: "2px",
              background: "linear-gradient(90deg, transparent, #7C1B32, transparent)",
              margin: "0 auto 2.5rem",
            }}
          />

          <Typography
            component="h2"
            sx={{
              fontFamily: "'Berkshire Swash', cursive",
              fontSize: { xs: "2.8rem", sm: "3.5rem", md: "4rem" },
              color: "#FDE8E0",
              fontWeight: 600,
              letterSpacing: "0.03em",
              textShadow: "0 4px 20px rgba(124,27,50,0.5), 0 0 40px rgba(124,27,50,0.3)",
              mb: 3,
            }}
          >
            Our Impact
          </Typography>

          {/* Decorative line below heading */}
          <MotionBox
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            sx={{
              height: "2px",
              background: "linear-gradient(90deg, transparent, #7C1B32, transparent)",
              margin: "0 auto 3rem",
            }}
          />
        </MotionBox>

        {/* Stats Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 3, md: 4 },
            mt: { xs: 6, md: 8 },
          }}
        >
          {stats.map((stat, index) => (
            <MotionBox
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.6 + index * 0.15,
                ease: "easeOut",
              }}
              sx={{
                p: { xs: 4, md: 5 },
                background: "rgba(0, 0, 0, 0.6)",
                border: "2px solid rgba(124, 27, 50, 0.3)",
                borderRadius: "8px",
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(10px)",
                transition: "all 0.4s ease",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(124, 27, 50, 0.2), transparent)",
                  transition: "left 0.6s ease",
                },

                "&:hover": {
                  borderColor: "rgba(124, 27, 50, 0.6)",
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 40px rgba(124, 27, 50, 0.4)",
                },

                "&:hover::before": {
                  left: "100%",
                },

                "&:hover .stat-number": {
                  color: "#E94B6E",
                  textShadow: "0 0 25px rgba(233, 75, 110, 0.6)",
                  transform: "scale(1.1)",
                },

                "&:hover .stat-label": {
                  color: "#FDE8E0",
                },
              }}
            >
              {/* Number */}
              <Typography
                className="stat-number"
                sx={{
                  fontFamily: "'Berkshire Swash', cursive",
                  fontSize: { xs: "3rem", md: "3.5rem" },
                  fontWeight: 600,
                  color: "#7C1B32",
                  mb: 1.5,
                  lineHeight: 1,
                  textShadow: "0 2px 15px rgba(124, 27, 50, 0.4)",
                  transition: "all 0.4s ease",
                }}
              >
                {stat.number}
              </Typography>

              {/* Label */}
              <Typography
                className="stat-label"
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: 500,
                  color: "rgba(253, 232, 224, 0.8)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  transition: "color 0.3s ease",
                }}
              >
                {stat.label}
              </Typography>

              {/* Decorative corner glow */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "60px",
                  height: "60px",
                  background: "radial-gradient(circle at bottom right, rgba(124, 27, 50, 0.3) 0%, transparent 70%)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  ".MuiBox-root:hover &": {
                    opacity: 1,
                  },
                }}
              />
            </MotionBox>
          ))}
        </Box>

        {/* Bottom decorative line */}
        <MotionBox
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          sx={{
            height: "2px",
            background: "linear-gradient(90deg, transparent, #7C1B32, transparent)",
            margin: "3rem auto 0",
          }}
        />
      </Box>
    </Box>
  );
}