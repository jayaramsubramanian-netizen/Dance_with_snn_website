import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Check, Users, Clock } from "lucide-react";
import AnimatedDivider from "../AnimatedDivider";

const MotionBox = motion(Box);
const EASE = [0.4, 0, 0.2, 1];

/* ── One color theme per program level ── */
const THEMES = [
  { color: "#7C1B32", rgb: "124,27,50", stripe: "#FF8FA3" },  /* Beginner    */
  { color: "#F38128", rgb: "243,129,40", stripe: "#FFD0A0" },  /* Intermediate*/
  { color: "#5B2D8E", rgb: "91,45,142", stripe: "#C09EFF" },  /* Advanced    */
];

/* ── Program data ── */
const CLASSES = [
  {
    title: "Pādamārga — Path of the First Steps",
    levelTag: "Level 1",
    level: "Beginner Foundation",
    description:
      "Perfect for those new to Bharatanatyam, this level introduces students to the essential building blocks of the art form. Focus is on posture, coordination, rhythm, and foundational technique.",
    features: [
      "Basic adavus and fundamental movements",
      "Introduction to mudras (hand gestures)",
      "Rhythmic training and tala awareness",
      "Bharatanatyam's cultural & traditional context",
    ],
    age: "6 to 12 years",
    duration: "60 minutes",
    students: "5 to 8 students",
    image: "https://res.cloudinary.com/dtovj9rds/image/upload/v1774683397/DSC_0788_zdhr5c.webp",
    theme: 0,
  },
  {
    title: "Abhyāsa Mārga — Path of Practice and Refinement",
    levelTag: "Level 2",
    level: "Intermediate Development",
    description:
      "Designed for students with a foundational understanding, this level deepens technique and builds expressive clarity through disciplined practice and coordination.",
    features: [
      "Advanced adavus and movement combinations",
      "Introduction to abhinaya",
      "Strengthening rhythm through jatis and tala patterns",
      "Coordination of body and expression",
      "Continued repertoire exploration",
    ],
    age: "10 to 16 years",
    duration: "75 minutes",
    students: "5 to 8 students",
    image: "https://res.cloudinary.com/dtovj9rds/image/upload/v1774703759/level2_pifsup.jpg",
    theme: 1,
  },
  {
    title: "Niṣpatti Mārga — Path of Culmination",
    levelTag: "Level 3",
    level: "Advanced Mastery",
    description:
      "This level focuses on artistic maturity and performance readiness. Students refine technique, deepen expression, and embody the art with confidence, precision, and depth.",
    features: [
      "Mastery of adavus and complex sequences",
      "Advanced abhinaya and storytelling",
      "Rhythmic understanding and improvisation",
      "Full dance presentations",
      "Stage presence and musicality",
    ],
    age: "16+ years",
    duration: "75 to 90 minutes",
    students: "5 to 8 students",
    image: "https://res.cloudinary.com/dtovj9rds/image/upload/v1774683852/StudentPic3_hvowvd.webp",
    theme: 2,
  },
];

/* ══════════════════════════════════════════════
   CLASS CARD
══════════════════════════════════════════════ */
function ClassCard({ item, index }) {
  const t = THEMES[item.theme];

  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.13, ease: EASE }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: EASE } }}
      sx={{
        position: "relative",
        borderRadius: "18px",
        overflow: "hidden",
        border: `1.5px solid ${t.color}40`,
        background: "#0A0308",
        cursor: "default",
        willChange: "transform",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: { xs: "auto", md: "340px" },
        "&:hover": {
          borderColor: `${t.color}80`,
          boxShadow: `0 24px 60px ${t.color}40, 0 0 0 1px ${t.color}30`,
        },
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* ── Coloured top stripe ── */}
      <Box sx={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3.5px", zIndex: 5,
        background: `linear-gradient(90deg, ${t.color}, ${t.stripe}cc, ${t.color})`,
      }} />

      {/* ── Left: content panel ── */}
      <Box sx={{
        flex: 1,
        p: { xs: "36px 28px 32px", md: "48px 44px 40px" },
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 2,
        // subtle left-side glow on content panel
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 0% 50%, rgba(${t.rgb}, 0.07) 0%, transparent 55%)`,
          pointerEvents: "none",
        },
      }}>
        {/* Level badge */}
        <MotionBox
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.25 + index * 0.13, ease: EASE }}
          sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, gap: 1.5, mb: 1.8 }}
        >
          <Box sx={{
            width: 30, height: "2px", borderRadius: 1,
            background: t.color,
            boxShadow: `0 0 8px ${t.color}`,
            display: { xs: "none", md: "block" },
          }} />
          <Typography sx={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: "0.75rem",
            color: t.stripe,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>
            {item.levelTag}
          </Typography>
        </MotionBox>

        {/* Title */}
        <Typography sx={{
          fontFamily: "'Berkshire Swash', cursive",
          fontSize: { xs: "1.9rem", md: "2.4rem" },
          color: "#FDE8E0",
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: "0.02em",
          mb: 0.6,
          textShadow: "0 2px 12px rgba(0,0,0,0.6)",
          textAlign: { xs: "center", md: "left" },
        }}>
          {item.title}
        </Typography>

        {/* Level subtitle */}
        <Typography sx={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: { xs: "0.95rem", md: "1.02rem" },
          color: `${t.stripe}bb`,
          mb: 2.8,
          fontStyle: "italic",
          lineHeight: 1.5,
          textAlign: { xs: "center", md: "left" },
        }}>
          {item.level}
        </Typography>

        {/* Description */}
        <Typography sx={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: { xs: "1.05rem", md: "1.1rem" },
          color: "rgba(253,232,224,0.72)",
          mb: 3.2,
          lineHeight: 1.8,
        }}>
          {item.description}
        </Typography>

        {/* Features */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          gap: { xs: 1.3, md: 1.5 },
          mb: 3.5,
        }}>
          {item.features.map((feat, fi) => (
            <MotionBox
              key={fi}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.4 + index * 0.1 + fi * 0.06, ease: EASE }}
              sx={{ display: "flex", alignItems: "flex-start", gap: 1.3 }}
            >
              <Box sx={{
                width: 20, height: 20, borderRadius: "50%",
                background: `rgba(${t.rgb}, 0.18)`,
                border: `1px solid ${t.color}55`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, mt: "2px",
              }}>
                <Check size={10} color={t.stripe} strokeWidth={3} />
              </Box>
              <Typography sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: { xs: "0.88rem", md: "0.92rem" },
                color: "rgba(253,232,224,0.68)",
                lineHeight: 1.6,
              }}>
                {feat}
              </Typography>
            </MotionBox>
          ))}
        </Box>

        {/* Info pills */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 1.2,
            mt: "auto",
            width: "100%",
          }}
        >
          {[
            { Icon: Users, label: item.age, caption: "Age Group" },
            { Icon: Clock, label: item.duration, caption: "Duration" },
            { Icon: Users, label: item.students, caption: "Class Size" },
          ].map(({ Icon, label, caption }) => (
            <Box key={caption} sx={{
              display: "flex", alignItems: "center", gap: 1.2,
              px: 2, py: 1.1,
              background: `rgba(${t.rgb}, 0.1)`,
              border: `1px solid ${t.color}35`,
              borderRadius: "12px",
            }}>
              <Box sx={{
                width: 28, height: 28, borderRadius: "50%",
                background: `rgba(${t.rgb}, 0.2)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <Icon size={13} color={t.stripe} />
              </Box>
              <Box>
                <Typography sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.68rem",
                  color: "rgba(253,232,224,0.4)",
                  lineHeight: 1.2,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}>
                  {caption}
                </Typography>
                <Typography sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.88rem",
                  color: "#FDE8E0",
                  fontWeight: 500,
                  lineHeight: 1.35,
                }}>
                  {label}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Right: image panel ── */}
      <Box sx={{
        position: "relative",
        order: { xs: -1, md: 0 },  /* image appears first on mobile */
        width: { xs: "100%", md: "360px" },
        height: { xs: "220px", md: "auto" },
        flexShrink: 0,
        overflow: "hidden",
      }}>
        {/* Image */}
        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center 22%",
            display: "block",
          }}
        />

        {/* Desktop: left fade into content panel */}
        <Box sx={{
          display: { xs: "none", md: "block" },
          position: "absolute", inset: 0,
          background: `linear-gradient(
            to right,
            #0A0308                       0%,
            rgba(10,3,8,0.82)             8%,
            rgba(10,3,8,0.35)             28%,
            transparent                   55%
          )`,
          zIndex: 1,
        }} />

        {/* Mobile: bottom fade into content */}
        <Box sx={{
          display: { xs: "block", md: "none" },
          position: "absolute", inset: 0,
          background: `linear-gradient(
            to top,
            #0A0308                       0%,
            rgba(10,3,8,0.65)             18%,
            transparent                   50%
          )`,
          zIndex: 1,
        }} />

        {/* Mobile: top stripe colour wash */}
        <Box sx={{
          display: { xs: "block", md: "none" },
          position: "absolute", inset: 0,
          background: `linear-gradient(
            to bottom,
            rgba(${t.rgb}, 0.35)   0%,
            transparent            35%
          )`,
          zIndex: 1,
        }} />

        {/* Subtle corner colour bloom */}
        <Box sx={{
          position: "absolute", inset: 0, zIndex: 1,
          background: `radial-gradient(ellipse at 100% 0%, rgba(${t.rgb}, 0.3) 0%, transparent 55%)`,
        }} />
      </Box>
    </MotionBox>
  );
}

/* ══════════════════════════════════════════════
   SECTION
══════════════════════════════════════════════ */
export default function ClassesGridSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        backgroundColor: "#06030A",
        py: { xs: 10, md: 14 },
        px: 2,
        overflow: "hidden",
      }}
    >
      {/* Ambient glows matching card themes */}
      {[
        { color: "rgba(124,27,50,0.1)", top: "8%", left: "5%", size: 340 },
        { color: "rgba(243,129,40,0.08)", top: "8%", right: "5%", size: 300 },
        { color: "rgba(91,45,142,0.08)", bottom: "8%", left: "30%", size: 280 },
      ].map((g, i) => (
        <MotionBox
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: i * 0.25 }}
          sx={{
            position: "absolute",
            top: g.top, right: g.right, bottom: g.bottom, left: g.left,
            width: g.size, height: g.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${g.color} 0%, transparent 70%)`,
            filter: "blur(70px)", zIndex: 0, pointerEvents: "none",
          }}
        />
      ))}

      <Box sx={{ position: "relative", zIndex: 1, maxWidth: "1400px", mx: "auto", px: 3 }}>

        {/* ── Section header ── */}
        <MotionBox
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          sx={{ textAlign: "center", mb: { xs: 7, md: 9 } }}
        >
          {/* Eyebrow rule */}
          <AnimatedDivider />

          <Typography component="h2" sx={{
            fontFamily: "'Berkshire Swash', cursive",
            fontSize: { xs: "2.6rem", sm: "3.2rem", md: "3.8rem" },
            color: "#FDE8E0",
            fontWeight: 400,
            letterSpacing: "0.03em",
            textShadow: "0 4px 24px rgba(124,27,50,0.45)",
            mb: 1.5, lineHeight: 1.1,
          }}>
            Śikshana-Kramāh
          </Typography>

          {/* NEW TYPOGRAPHY */}
          <Typography
            sx={{
              fontFamily: "'Berkshire Swash', cursive",
              fontSize: { xs: "1.2rem", md: "1.4rem" },
              color: "#E94B6E",
              letterSpacing: "0.05em",
              mb: 2,
            }}
          >
            Our Programs
          </Typography>

          <Typography sx={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: { xs: "1.05rem", md: "1.15rem" },
            color: "rgba(253,232,224,0.6)",
            maxWidth: "580px", mx: "auto", lineHeight: 1.75,
          }}>
            Our curriculum offers a holistic journey through Bharatanatyam, combining dance history, theory, technique, fitness, and music. Students
            progress through structured levels covering the full spectrum of dance education—from foundational steps to teaching and performance mastery.
          </Typography>
        </MotionBox>

        {/* ── Cards ── */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 3.5, md: 4 } }}>
          {CLASSES.map((item, i) => (
            <ClassCard key={item.title} item={item} index={i} />
          ))}
        </Box>

        {/* ── Disclaimer note ── */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.45, ease: EASE }}
          sx={{
            textAlign: "center",
            p: { xs: "20px 24px", md: "22px 36px" },
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "14px",
            maxWidth: "680px", mx: "auto",
            mt: { xs: 5, md: 7 },
            backdropFilter: "blur(8px)",
          }}
        >
          <Typography sx={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: { xs: "1rem", md: "1.08rem" },
            color: "rgba(253,232,224,0.6)",
            fontStyle: "italic",
            lineHeight: 1.75,
            mt: "12px",
          }}>
            The outlined levels represent a structured approach to the method of teaching. Progression or Advancement through these
            levels may vary based on each student’s interest, commitment, and individual learning pace.
          </Typography>
        </MotionBox>

      </Box>
    </Box>
  );
}
