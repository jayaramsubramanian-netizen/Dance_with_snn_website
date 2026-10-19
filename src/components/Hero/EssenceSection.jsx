import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Heart, Award, Users, Sparkles } from "lucide-react";
import AnimatedDivider from "../AnimatedDivider";
import { useContent, Rich } from '../../content/ContentContext.jsx';

const MotionBox = motion.create(Box);

const THEMES = [
  { color: "#7C1B32", rgb: "124,27,50", stripe: "#FF8FA3" },
  { color: "#F38128", rgb: "243,129,40", stripe: "#FFD0A0" },
  { color: "#5B2D8E", rgb: "91,45,142", stripe: "#C09EFF" },
  { color: "#2E6B4F", rgb: "46,107,79", stripe: "#90D4B0" },
];

export function EssenceSection() {
  const { t, img } = useContent();
  const values = [
    {
      icon: Heart,
      title: t('home.essence.p1.title'),
      description: t('home.essence.p1.text'),
    },
    {
      icon: Award,
      title: t('home.essence.p2.title'),
      description: t('home.essence.p2.text'),
    },
    {
      icon: Users,
      title: t('home.essence.p3.title'),
      description: t('home.essence.p3.text'),
    },
    {
      icon: Sparkles,
      title: t('home.essence.p4.title'),
      description: t('home.essence.p4.text'),
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        pt: { xs: 10, md: 0 },
      }}
    >
      {/* BACKGROUND IMAGE */}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          width: { xs: "100%", md: "55%" },
          height: "100%",
          zIndex: 0,
          opacity: { xs: 0.35, md: 1 },
        }}
      >
        <Box
          component="img"
          src={img('home.essence.image').src}
          alt={img('home.essence.image').alt}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 90%, rgba(0,0,0,1) 100%)",
          }}
        />
      </Box>

      {/* BOTTOM FADE */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 60%, #000 100%)",
          zIndex: 1,
        }}
      />

      {/* MAIN CONTENT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1300px",
          mx: "auto",
          px: { xs: 3, md: 6 },
        }}
      >
        <AnimatedDivider />
        {/* CENTER TEXT */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
            mt: { xs: 6, md: 8 },
            maxWidth: { xs: "520px", md: "600px" }
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Berkshire Swash', cursive",
              fontSize: { xs: "2rem", sm: "3.5rem", md: "4rem" },
              fontWeight: 800,
              color: "#FDE8E0",
              mb: 1,
            }}
          >
            {t('home.essence.eyebrow')}
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Berkshire Swash', cursive",
              fontSize: { xs: "1.1rem", md: "1.4rem" },
              color: "#E94B6E",
              letterSpacing: "0.05em",
              mb: 2,
            }}
          >
            {t('home.essence.title')}
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Roboto', sans-serif",
              color: "rgba(253,232,224,0.85)",
              fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.25rem" },
              lineHeight: 1.7,
            }}
          >
            <Rich k="home.essence.intro" />
          </Typography>
        </Box>

        {/* CARDS — 2 per row */}
        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 2,
          }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            const theme = THEMES[index];

            return (
              <MotionBox
                key={value.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.6,
                  p: 2.6,
                  borderRadius: "16px",

                  background: "#0b0b0b",
                  border: "1px solid rgba(255,255,255,0.06)",

                  overflow: "hidden",

                  transition:
                    "transform .25s ease, box-shadow .25s ease, border-color .25s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: theme.color,
                    boxShadow: `0 16px 45px rgba(${theme.rgb},0.35)`,
                  },

                  /* color gradient glow */
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(
        135deg,
        rgba(${theme.rgb},0.35),
        rgba(${theme.rgb},0.15),
        transparent 65%
      )`,
                    opacity: 0,
                    transition: "opacity .25s ease",
                  },

                  "&:hover::before": {
                    opacity: 1,
                  },

                  /* subtle accent line */
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "3px",
                    background: `linear-gradient(180deg, transparent, ${theme.stripe}, transparent)`,
                    opacity: 0.6,
                  },
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    background: `rgba(${theme.rgb},0.18)`,
                    border: `1px solid rgba(${theme.rgb},0.35)`,

                    color: theme.stripe,   // 👈 icon color always theme color

                    transition: "all .25s ease",

                    ".MuiBox-root:hover &": {
                      background: `rgba(${theme.rgb},0.35)`,
                      borderColor: theme.color,
                      boxShadow: `0 0 18px rgba(${theme.rgb},0.45)`,
                      transform: "scale(1.06)",
                      color: theme.stripe, // 👈 keep same color on hover
                    },
                  }}
                >
                  <Icon size={21} strokeWidth={1.7} />
                </Box>

                {/* TEXT */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Roboto', serif",
                      fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.25rem" },
                      color: "#FDE8E0",
                      mb: 0.4,
                      letterSpacing: "0.04em",
                      fontWeight: 600,
                    }}
                  >
                    {value.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "'Roboto', serif",
                      fontSize: "0.85rem",
                      color: "rgba(253,232,224,0.68)",
                      lineHeight: 1.6,
                    }}
                  >
                    {value.description}
                  </Typography>
                </Box>
              </MotionBox>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}