import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedDivider from "../AnimatedDivider";

const MotionBox = motion.create(Box);

/* ── Three theme colors ── */
const ACCENTS = [
  { solid: "#7C1B32", stripe: "#FF8FA3" },   /* maroon       */
  { solid: "#F38128", stripe: "#FFD0A0" },   /* orange       */
  { solid: "#5B2D8E", stripe: "#C09EFF" },   /* purple       */
];
const COLOR_MAP = [0, 1, 2, 1, 0];

const EASE = [0.4, 0.4, 0.4, 0.4];

/* ─── Shared variant sets (parent broadcasts "hovered" to children) ─── */
const imageV = {
  rest:    { opacity: 1, scale: 1,    transition: { duration: 0.45, ease: EASE } },
  hovered: { opacity: 0, scale: 1.07, transition: { duration: 0.45, ease: EASE } },
};
const gradV = {
  rest:    { opacity: 1, transition: { duration: 0.4, ease: EASE } },
  hovered: { opacity: 0, transition: { duration: 0.4, ease: EASE } },
};
const overlayV = {
  rest:    { opacity: 0, transition: { duration: 0.38, ease: EASE } },
  hovered: { opacity: 1, transition: { duration: 0.38, ease: EASE } },
};
const defTextV = {
  rest:    { opacity: 1, y: 0,  transition: { duration: 0.3,  ease: EASE } },
  hovered: { opacity: 0, y: 8,  transition: { duration: 0.25, ease: EASE } },
};
const hoverTitleV = {
  rest:    { opacity: 0, y: 16, transition: { duration: 0.3,  ease: EASE } },
  hovered: { opacity: 1, y: 0,  transition: { duration: 0.35, delay: 0.08, ease: EASE } },
};
const hoverDescV = {
  rest:    { opacity: 0, y: 16, transition: { duration: 0.3,  ease: EASE } },
  hovered: { opacity: 1, y: 0,  transition: { duration: 0.35, delay: 0.16, ease: EASE } },
};
const dotsV = {
  rest:    { opacity: 0, transition: { duration: 0.2 } },
  hovered: { opacity: 1, transition: { duration: 0.25, delay: 0.12 } },
};

/* ══════════════════════════════════════════════
   FEATURE CARD
══════════════════════════════════════════════ */
function FeatureCard({ feature, index, accentIdx, isActive, onClick }) {
  const acc = ACCENTS[accentIdx];

  return (
    <MotionBox
      /* variant system — "rest" / "hovered" propagates to all children */
      initial="rest"
      animate={isActive ? "hovered" : "rest"}
      whileHover="hovered"

      /* entrance animation layered on top via whileInView */
      whileInView={{ opacity: [0, 1], y: [40, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: EASE }}

      onClick={onClick}
      sx={{
        gridColumn: {
          xs: "auto", sm: "auto",
          lg: index < 3 ? "span 2" : index === 3 ? "2 / span 2" : "4 / span 2",
        },
        position: "relative",
        height: { xs: "320px", sm: "360px", md: "400px" },
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        background: "linear-gradient(135deg, #14050A 0%, #0A0308 100%)",
        border: `1.5px solid ${acc.solid}55`,
        outline: "none",
        userSelect: "none",
        willChange: "transform",
        "&:hover": {
          boxShadow: `0 18px 48px ${acc.solid}55, 0 0 0 1.5px ${acc.solid}70`,
        },
        transition: "box-shadow 0.32s ease, border-color 0.32s ease",
      }}
    >
      {/* ── Coloured top stripe ── */}
      <Box sx={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px", zIndex: 4,
        background: `linear-gradient(90deg, ${acc.solid}, ${acc.stripe}bb, ${acc.solid})`,
      }} />

      {/* ── Image ── */}
      <MotionBox
        variants={imageV}
        component="img"
        src={feature.image}
        alt={feature.title}
        sx={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 30%",
          display: "block",
        }}
      />

      {/* ── Default gradient ── */}
      <MotionBox
        variants={gradV}
        sx={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* ── Default bottom title ── */}
      <MotionBox
        variants={defTextV}
        sx={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          p: { xs: "20px 22px", md: "24px 28px" }, zIndex: 2,
        }}
      >
        <Box sx={{
          width: 26, height: "2px", borderRadius: 1, mb: 1,
          background: acc.solid,
          boxShadow: `0 0 8px ${acc.solid}`,
        }} />
        <Typography sx={{
          fontFamily: "'Berkshire Swash', cursive",
          fontSize: { xs: "1.1rem", md: "1.2rem" },
          color: "#fff", lineHeight: 1.25,
          textShadow: "0 2px 10px rgba(0,0,0,0.9)",
        }}>
          {feature.title}
        </Typography>
      </MotionBox>

      {/* ── Solid colour overlay ── */}
      <MotionBox
        variants={overlayV}
        sx={{ position: "absolute", inset: 0, background: acc.solid, zIndex: 3 }}
      />

      {/* ── Centered hover content ── */}
      <Box sx={{
        position: "absolute", inset: 0, zIndex: 5,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        px: { xs: 3, md: 4.5 }, textAlign: "center",
        pointerEvents: "none",
      }}>
        {/* top rule */}
        <MotionBox
          variants={hoverTitleV}
          sx={{ width: 32, height: "1.5px", background: "rgba(255,255,255,0.4)", borderRadius: 2, mb: 2.2 }}
        />

        {/* title */}
        <MotionBox variants={hoverTitleV}>
          <Typography sx={{
            fontFamily: "'Berkshire Swash', cursive",
            fontSize: { xs: "1.35rem", md: "1.5rem" },
            color: "#fff", fontWeight: 400,
            lineHeight: 1.2, letterSpacing: "0.02em",
          }}>
            {feature.title}
          </Typography>
        </MotionBox>

        {/* dot separator */}
        <MotionBox variants={dotsV} sx={{ display: "flex", gap: 0.7, my: 1.6 }}>
          {[0, 1, 2].map(i => (
            <Box key={i} sx={{
              width: i === 1 ? 6 : 4,
              height: i === 1 ? 6 : 4,
              borderRadius: "50%",
              background: i === 1 ? "#fff" : "rgba(255,255,255,0.4)",
            }} />
          ))}
        </MotionBox>

        {/* description */}
        <MotionBox variants={hoverDescV}>
          <Typography sx={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: { xs: "1rem", md: "1.08rem" },
            color: "rgba(255,255,255,0.88)",
            lineHeight: 1.75,
            maxWidth: "260px",
          }}>
            {feature.description}
          </Typography>
        </MotionBox>

        {/* bottom rule */}
        <MotionBox
          variants={hoverDescV}
          sx={{ width: 32, height: "1.5px", background: "rgba(255,255,255,0.3)", borderRadius: 2, mt: 2.2 }}
        />
      </Box>
    </MotionBox>
  );
}

/* ══════════════════════════════════════════════
   SECTION
══════════════════════════════════════════════ */
export default function NatyamSection() {
  const [activeCard, setActiveCard] = useState(null);

  const features = [
    { title: "Passionate Teaching",  description: "Led by Tradition, Inspired by Passion Learn Bharatanatyam under a passionate Guru, trained by renowned masters, blending classical lineage with dedicated mentorship.",    image: "https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_600/v1774683850/StudentPic1_pznlfm.webp" },
    { title: "Small Group Batches",  description: "Carefully curated small batches provide individualized attention, allowing each student to refine technique, expression, and stage presence.",          image: "https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_600/v1774703759/student2_zoe5lr.jpg" },
    { title: "One-on-One Sessions",  description: "Personalized individual sessions to refine performance and expression, supporting mastery in every aspect of dance.",         image: "https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_600/v1774703763/student4_fjnodc.jpg" },
    { title: "Interactive Learning", description: "Fun and engaging teaching methods that make learning enjoyable for young dancers.",         image: "https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_600/v1774703762/student3_fgst4j.jpg" },
    { title: "Periodic Evaluations", description: "Periodic evaluations and examinations that help students track growth, set goals, and celebrate achievements.",         image: "https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_600/v1774704095/student5_b6mlme.jpg" },
  ];

  const handleClick = (i) => setActiveCard(activeCard === i ? null : i);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        backgroundColor: "#060408",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 7, md: 9 },
        px: 2,
        overflow: "hidden",
      }}
    >
      {/* Ambient glows */}
      {[
        { color: "rgba(124,27,50,0.1)",  top: "6%",   right: "6%",  size: 380 },
        { color: "rgba(115,129,40,0.08)",bottom: "8%", left: "6%",   size: 320 },
        { color: "rgba(91,45,142,0.08)", top: "45%",  left: "42%",  size: 280 },
      ].map((g, i) => (
        <MotionBox
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: i * 0.3 }}
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

      <Box sx={{ position: "relative", zIndex: 1, maxWidth: "1350px", width: "100%", mx: "auto", px: 3 }}>

        {/* ── Section header ── */}
        <MotionBox
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}
        >
          <AnimatedDivider />

          <Typography component="h2" sx={{
            fontFamily: "'Berkshire Swash', cursive",
            fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.3rem" },
            color: "#FDE8E0", fontWeight: 800,
            letterSpacing: "0.03em",
            textShadow: "0 4px 24px rgba(124,27,50,0.45)",
            mb: 1.5, lineHeight: 1.15,
          }}>
            The SreeNarthana Distinction
          </Typography>

          <Typography sx={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: { xs: "1rem", md: "1.1rem" },
            color: "rgba(255,255,255,0.5)",
            maxWidth: "560px", mx: "auto", lineHeight: 1.7,
          }}>
            A Guru–Shishya Journey of Tradition, Excellence, and Personal Growth
          </Typography>
        </MotionBox>

        {/* ── Cards grid ── */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(6, 1fr)" },
          gap: { xs: 2.5, md: 3 },
        }}>
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={i}
              accentIdx={COLOR_MAP[i]}
              isActive={activeCard === i}
              onClick={() => handleClick(i)}
            />
          ))}
        </Box>

      </Box>
    </Box>
  );
}
