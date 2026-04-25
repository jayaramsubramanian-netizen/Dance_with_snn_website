import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Heart, Award, Target } from "lucide-react";
import AnimatedDivider from "../AnimatedDivider";

const MotionBox = motion.create(Box);

const EASE = [0.22, 1, 0.36, 1];

const CARDS = [
  {
    icon: Heart,
    title: "Our Vision",
    description:
      "To preserve and share the sacred art of Bharatanatyam, inspiring generations through its discipline, grace, and timeless spirit.",
    color: "#7C1B32",
    rgb: "124,27,50",
    stripe: "#FF8FA3",
  },
  {
    icon: Award,
    title: "Our Mission",
    description:
      "To nurture artistry through disciplined, tradition-rooted training that builds expressive and culturally aware dancers.",
    color: "#F38128",
    rgb: "243,129,40",
    stripe: "#FFD0A0",
  },
  {
    icon: Target,
    title: "Our Motto",
    description:
      "Seek knowledge with humility. Nurture growth with discipline. Achieve Nipuna — mastery through devotion and excellence.",
    color: "#5B2D8E",
    rgb: "91,45,142",
    stripe: "#C09EFF",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: EASE },
  }),
};

export default function MissionVisionSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        background: "linear-gradient(180deg,#0a0000 0%,#111 50%,#0a0000 100%)",
        py: { xs: 10, md: 14 },
        overflow: "hidden",
      }}
    >
      <AnimatedDivider />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1300px",
          mx: "auto",
          px: { xs: 3, md: 6 },
          display: "flex",
          alignItems: "center",
          gap: { xs: 0, md: 8 },
          flexDirection: { xs: "column", md: "row" },
          mt: "40px",
        }}
      >
        {/* ── LEFT: heading + cards ── */}
        <Box sx={{ flex: 1 }}>

          <MotionBox
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
            sx={{ mb: { xs: 5, md: 6 } }}
          >
            <Typography
              sx={{
                fontFamily: "'Berkshire Swash', cursive",
                fontSize: { xs: "2.5rem", md: "3.4rem" },
                color: "#FDE8E0",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "0.02em",
                mb: 1,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Our Vision
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: { xs: "0.95rem", md: "1rem" },
                color: "rgba(253,232,224,0.5)",
                lineHeight: 1.7,
                maxWidth: "480px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Seek. Nurture. Nipuna.
            </Typography>
          </MotionBox>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            {CARDS.map((card, index) => {
              const Icon = card.icon;
              return (
                <MotionBox
                  key={card.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  sx={{
                    position: "relative",
                    display: "flex",
                    gap: 3,
                    alignItems: "flex-start",
                    borderRadius: "18px",
                    p: { xs: "22px", md: "24px" },
                    background: "#0b0b0b",
                    border: "1px solid rgba(255,255,255,0.06)",
                    overflow: "hidden",
                    transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: card.color,
                      boxShadow: `0 18px 50px rgba(${card.rgb},0.35)`,
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(135deg, rgba(${card.rgb},0.35), rgba(${card.rgb},0.15), transparent 60%)`,
                      opacity: 0,
                      transition: "opacity .25s ease",
                    },
                    "&:hover::before": { opacity: 1 },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "14px",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `rgba(${card.rgb},0.18)`,
                      border: `1px solid rgba(${card.rgb},0.35)`,
                      color: card.stripe,
                      transition: "all .25s ease",
                      ".MuiBox-root:hover &": {
                        background: `rgba(${card.rgb},0.35)`,
                        borderColor: card.color,
                        boxShadow: `0 0 20px rgba(${card.rgb},0.5)`,
                        transform: "scale(1.05)",
                        color: card.stripe,
                      },
                    }}
                  >
                    <Icon size={24} strokeWidth={1.7} />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: { xs: "1.25rem", md: "1.35rem" },
                        color: "#FDE8E0",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        mb: 0.6,
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: { xs: "1.05rem", md: "1.2rem" },
                        color: "rgba(253,232,224,0.65)",
                        lineHeight: 1.65,
                      }}
                    >
                      {card.description}
                    </Typography>
                  </Box>
                </MotionBox>
              );
            })}
          </Box>
        </Box>

        {/* ── RIGHT: image smudged into section bg ── */}
        <MotionBox
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE }}
          sx={{
            flexShrink: 0,
            width: { xs: "100%", md: "480px" },
            height: { xs: "320px", md: "560px" },
            mt: { xs: 6, md: 0 },
            position: "relative",
            /* No borderRadius, no border, no overflow:hidden —
               the gradient overlay dissolves all 4 edges */
          }}
        >
          <Box
            component="img"
            // src="https://res.cloudinary.com/dtovj9rds/image/upload/v1773579848/Shiva_yxbzeb.jpg"
            src="https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_800/v1774683042/Shiva_v8qrjy.webp"
            alt="Shiva Nataraja"
            loading="lazy"
            decoding="async"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />

          {/*
            The section bg goes:
              top    → #0a0000  (very dark maroon-black)
              middle → #111     (near-black)
              bottom → #0a0000

            We fade each edge into the nearest matching tone.
            Left/right use the mid tone (#111) since the image
            sits in the horizontal centre of the section.
            Top fades into #0a0000, bottom into #0a0000.
          */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: `
                linear-gradient(to right,  #0a0000 0%, transparent 22%, transparent 78%, #0a0000 100%),
                linear-gradient(to bottom, #0a0000 0%, transparent 20%, transparent 62%, #0a0000 100%)
              `,
            }}
          />

          {/* Caption sits above the overlay */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              p: "20px 22px",
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Berkshire Swash', cursive",
                fontSize: "1.05rem",
                color: "rgba(253,232,224,0.7)",
              }}
            >
              Nataraja
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "0.78rem",
                color: "rgba(253,232,224,0.4)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                mt: 0.3,
              }}
            >
              Lord of Dance
            </Typography>
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
}