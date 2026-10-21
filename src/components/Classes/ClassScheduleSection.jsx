import { Box, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import { Clock } from "lucide-react";
import AnimatedDivider from "../AnimatedDivider";
import { useContent, Rich } from '../../content/ContentContext.jsx';

const MotionBox = motion.create(Box);

const THEMES = [
  { color: "#7C1B32", rgb: "124,27,50", stripe: "#FF8FA3" },
  { color: "#F38128", rgb: "243,129,40", stripe: "#FFD0A0" },
  { color: "#5B2D8E", rgb: "91,45,142", stripe: "#C09EFF" },
  { color: "#2E6B4F", rgb: "46,107,79", stripe: "#90D4B0" },
];

const SCHEDULE = [
  { day: "Monday", times: ["5:30 pm – 6:30 pm", "6:45 pm – 7:45 pm"], image: "https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_700/v1774703760/monday_nardeq.jpg", theme: 0 },
  { day: "Wednesday", times: ["5:30 pm – 6:30 pm", "6:45 pm – 7:45 pm"], image: "https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_700/v1774703088/DSC09424_h1l4qx.jpg", theme: 2 },
  { day: "Thursday", times: ["5:30 pm – 6:30 pm"], image: "https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_700/v1774704096/thursday_ehjrrn.jpg", theme: 1 },
  { day: "Friday", times: ["5:30 pm – 6:30 pm"], image: "https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_700/v1777104978/DSC09084_check_puwpk7.webp", theme: 3 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const timeVariants = {
  hidden: { opacity: 0, x: 8 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function ScheduleCard({ item }) {
  const t = THEMES[item.theme];
  const prefersReduced = useReducedMotion();

  return (
    <MotionBox
      variants={cardVariants}
      sx={{
        position: "relative",
        height: { xs: "400px", sm: "450px", md: "500px" },
        borderRadius: "16px",
        overflow: "hidden",
        border: `1px solid ${t.color}40`,
        background: "#08030A",
        cursor: "pointer",

        transition: "transform 0.12s ease-out",

        "&:hover": {
          transform: prefersReduced ? "none" : "translateY(-6px)",
          borderColor: `${t.color}80`,
          boxShadow: "0 14px 26px rgba(0,0,0,0.45)",
        },

        "&:hover img": {
          transform: "scale(1.04)",
        },
      }}
    >
      {/* Top stripe */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          zIndex: 4,
          background: `linear-gradient(90deg, ${t.color}, ${t.stripe}cc, ${t.color})`,
        }}
      />

      {/* Image */}
      <Box
        component="img"
        src={item.image}
        alt={item.alt || item.day}
        loading="lazy"
        decoding="async"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 25%",
          transition: "transform 0.6s ease",
          willChange: "transform",
        }}
      />

      {/* Gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: `linear-gradient(
            to bottom,
            rgba(0,0,0,0.28) 0%,
            transparent 25%,
            rgba(${t.rgb},0.6) 60%,
            rgba(${t.rgb},1) 100%
          )`,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: { xs: "24px 22px", md: "28px 26px" },
          zIndex: 5,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Berkshire Swash', cursive",
            fontSize: { xs: "1.9rem", md: "2.2rem" },
            color: "#FFF",
            lineHeight: 1.1,
            mb: 0.5,
            textShadow: "0 2px 10px rgba(0,0,0,0.4)",
          }}
        >
          {item.day}
        </Typography>

        <Box
          sx={{
            width: 28,
            height: "1.5px",
            mb: 1.8,
            background: "rgba(255,255,255,0.5)",
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {item.times.map((time, i) => (
            <MotionBox
              key={i}
              custom={i}
              variants={timeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              sx={{ display: "flex", alignItems: "center", gap: 1.1 }}
            >
              <Box
                sx={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Clock size={12} color="rgba(255,255,255,0.88)" />
              </Box>

              <Typography
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: { xs: "0.88rem", md: "0.93rem" },
                  color: "rgba(255,255,255,0.88)",
                  fontWeight: 500,
                }}
              >
                {time}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </MotionBox>
  );
}

export default function ClassScheduleSection() {
  const { t, img } = useContent();
  const schedule = [1, 2, 3, 4, 5, 6]
    .map((i) => ({
      day: t(`classes.schedule.d${i}.day`),
      times: t(`classes.schedule.d${i}.times`).split('\n').map((s) => s.trim()).filter(Boolean),
      image: img(`classes.schedule.d${i}.image`).src,
      alt: img(`classes.schedule.d${i}.image`).alt,
      theme: (SCHEDULE[i - 1]?.theme ?? i - 1) % THEMES.length,
    }))
    .filter((d) => d.day.trim());
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        backgroundColor: "#06030A",
        py: { xs: 10, md: 14 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}
        >
          <AnimatedDivider />

          <Typography
            component="h2"
            sx={{
              fontFamily: "'Berkshire Swash', cursive",
              fontSize: { xs: "2.8rem", sm: "3rem", md: "3.6rem" },
              color: "#FDE8E0",
              fontWeight: 800,
              mb: 1.2,
            }}
          >
            {t('classes.schedule.title')}
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: { xs: "1rem", md: "1.12rem" },
              color: "rgba(253,232,224,0.58)",
              maxWidth: "520px",
              mx: "auto",
              lineHeight: 1.75,
            }}
          >
            {t('classes.schedule.subtitle')}
          </Typography>
        </MotionBox>

        {/* Grid */}
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {schedule.map((item) => (
            <ScheduleCard key={item.day} item={item} />
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
}