import { Box, Typography, Avatar } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import AnimatedDivider from "../AnimatedDivider";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [cardHeight, setCardHeight] = useState("auto");
  const cardRef = useRef(null);

  const testimonials = [
    {
      name: "Swapna",
      role: "Parent",
      rating: 4,
      comment:
        "Sreenandini is a wonderful teacher who has truly sparked my daughter's (Pradhita's) interest in dance. Thanks to her encouragement and support, Pradhita has transformed from a shy child into a more confident and social individual.",
      avatar: "S",
    },
    {
      name: "Vijayalakshmi",
      role: "Parent",
      rating: 5,
      comment: `Bharatanatyam being a classical art form derives its beauty from precision, discipline, and a unique style. Unlike many commercial dance classes that focus on quickly completing lessons, this institution is deeply committed to teaching proper posture, mudras, and foundational techniques. Students are promoted only after achieving the required level of proficiency, with no compromises in quality.
        Respect for the art form is emphasized, ensuring students understand its cultural significance. 

        The dedication and effort invested in perfecting each recital make every performance exceptional.

        My child has been learning here for four years, and it has been a joy to witness her growth. I am proud to be part of an institution where the true values of Bharatanatyam are preserved.`,
      avatar: "V",
    },
    {
      name: "Eswari N",
      role: "Parent",
      rating: 5,
      comment:
        "We joined Ms. Nandini's Sree Narthana Natyalaya a few years back and are grateful for that decision. She is a disciplined and dedicated teacher and a role model. Both my daughters have gained confidence and learned to dance with grace and dignity. We look forward to the institution's excellence spreading to many more students.",
      avatar: "E",
    },
    {
      name: "Thankam Jose",
      role: "Parent",
      rating: 5,
      comment:
        "My two daughters, aged 8 and 5, attend Bharatanatyam classes here. Ms. Nandini is patient, kind, and makes learning enjoyable. We've seen great improvement in their confidence and interest in dance. Highly recommended.",
      avatar: "T",
    },
    {
      name: "Pavithra",
      role: "Parent",
      rating: 5,
      comment: "Wonderful teaching and a very positive environment.",
      avatar: "P",
    },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (cardRef.current) {
      const h = cardRef.current.getBoundingClientRect().height;
      setCardHeight((prev) => (h > (typeof prev === "number" ? prev : 0) ? h : prev));
    }
  }, [currentIndex]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 600 : -600, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir) => ({ zIndex: 0, x: dir < 0 ? 600 : -600, opacity: 0 }),
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        height: "auto",
        width: "100%",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #0a0005 0%, #130008 40%, #1a0010 70%, #0d0003 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 6, md: 8 },
      }}
    >
      {/* Decorative glows — unchanged */}
      <MotionBox
        initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ duration: 2 }}
        sx={{ position: "absolute", top: "20%", right: "10%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,27,50,0.4) 0%, transparent 70%)", filter: "blur(90px)", zIndex: 0, pointerEvents: "none" }}
      />
      <MotionBox
        initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ duration: 2, delay: 0.3 }}
        sx={{ position: "absolute", bottom: "20%", left: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,27,50,0.35) 0%, transparent 70%)", filter: "blur(90px)", zIndex: 0, pointerEvents: "none" }}
      />

      {/* Main content */}
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "900px", width: "100%", mx: "auto", px: { xs: 2, sm: 3 }, display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Header — unchanged */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          sx={{ textAlign: "center", mb: { xs: 4, md: 5 }, width: "100%" }}
        >
          <AnimatedDivider />
          <MotionTypography component="h2" sx={{ fontFamily: "'Berkshire Swash', cursive", fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" }, color: "#FFF5F2", fontWeight: 600, letterSpacing: "0.03em", textShadow: "0 4px 20px rgba(124,27,50,0.5), 0 0 40px rgba(124,27,50,0.3)", mb: 1.5, mt: 1 }}>
            Rasa Reflection
          </MotionTypography>
          <Typography sx={{ fontFamily: "'Berkshire Swash', cursive", fontSize: { xs: "0.95rem", md: "1.1rem" }, color: "#E94B6E", letterSpacing: "0.05em", mb: 1.5 }}>
            Testimonials
          </Typography>
          <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: { xs: "0.95rem", md: "1.05rem" }, color: "rgba(255,245,242,0.75)", maxWidth: "640px", mx: "auto", lineHeight: 1.65 }}>
            Hear from our community of dancers and their families
          </Typography>
        </MotionBox>

        {/* Carousel */}
        <Box sx={{ position: "relative", width: "100%" }}>
          <Box sx={{ position: "relative", width: "100%", height: cardHeight === "auto" ? "auto" : `${cardHeight}px`, minHeight: "180px" }}>
            <AnimatePresence initial={false} custom={direction}>
              <MotionBox
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 280, damping: 30 }, opacity: { duration: 0.35 } }}
                sx={{ position: "absolute", width: "100%", top: 0, left: 0 }}
              >

                {/* ══════════════ CARD ══════════════ */}
                <Box
                  ref={cardRef}
                  sx={{
                    p: { xs: "32px 24px 28px", sm: "40px 44px 34px", md: "48px 56px 40px" },
                    background: "linear-gradient(145deg, rgba(20,2,8,0.96) 0%, rgba(10,0,3,0.93) 100%)",
                    border: "1px solid rgba(124,27,50,0.2)",
                    borderRadius: "20px",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.035)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Shimmer line across top */}
                  <Box sx={{ position: "absolute", top: 0, left: "8%", right: "8%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(233,75,110,0.4), rgba(200,169,110,0.3), transparent)", pointerEvents: "none" }} />

                  {/* Ghost quote mark — decorative, top-left */}
                  <Box sx={{ position: "absolute", top: { xs: "10px", md: "16px" }, left: { xs: "14px", md: "22px" }, opacity: 0.07, pointerEvents: "none", userSelect: "none", lineHeight: 1 }}>
                    <Quote size={72} strokeWidth={1.2} color="#E94B6E" />
                  </Box>

                  {/* ── Quote text ── */}
                  <Typography
                    sx={{
                      fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                      fontSize: { xs: "1.02rem", sm: "1.1rem", md: "1.2rem" },
                      color: "rgba(253,232,224,0.88)",
                      lineHeight: 1.9,
                      textAlign: "left",
                      fontStyle: "italic",
                      whiteSpace: "pre-line",
                      letterSpacing: "0.012em",
                      /* indent clears the ghost quote icon */
                      pl: { xs: "26px", md: "34px" },
                      mb: 0,
                    }}
                  >
                    {testimonials[currentIndex].comment}
                  </Typography>

                  {/* ── Divider ── */}
                  <Box sx={{ width: "100%", height: "1px", my: { xs: "24px", md: "30px" }, background: "linear-gradient(90deg, rgba(124,27,50,0.5) 0%, rgba(233,75,110,0.2) 60%, transparent 100%)" }} />

                  {/* ── Author + stars row ── */}
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>

                    {/* Avatar + name block */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <Avatar
                        sx={{
                          width: { xs: 46, md: 52 },
                          height: { xs: 46, md: 52 },
                          background: "linear-gradient(135deg, #7C1B32 0%, #B8244A 100%)",
                          color: "#FFF5F2",
                          fontFamily: "'Berkshire Swash', cursive",
                          fontWeight: 400,
                          fontSize: { xs: "1.15rem", md: "1.3rem" },
                          border: "1.5px solid rgba(233,75,110,0.28)",
                          boxShadow: "0 4px 20px rgba(124,27,50,0.45), 0 0 0 4px rgba(124,27,50,0.08)",
                          flexShrink: 0,
                        }}
                      >
                        {testimonials[currentIndex].avatar}
                      </Avatar>

                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "'Berkshire Swash', cursive",
                            fontSize: { xs: "1.05rem", md: "1.15rem" },
                            color: "#F2A0B0",
                            letterSpacing: "0.02em",
                            lineHeight: 1.2,
                            mb: "4px",
                          }}
                        >
                          {testimonials[currentIndex].name}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: "0.68rem",
                            color: "rgba(253,232,224,0.35)",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                          }}
                        >
                          {testimonials[currentIndex].role}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Star rating pill */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        px: "14px",
                        py: "8px",
                        borderRadius: "40px",
                        background: "rgba(255,200,0,0.05)",
                        border: "1px solid rgba(255,200,0,0.14)",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {[...Array(5)].map((_, i) => {
                        const filled = i < testimonials[currentIndex].rating;
                        return (
                          <Star
                            key={i}
                            size={14}
                            fill={filled ? "#FFD700" : "transparent"}
                            stroke={filled ? "#FFD700" : "rgba(255,215,0,0.18)"}
                            style={{
                              filter: filled ? "drop-shadow(0 0 5px rgba(255,215,0,0.7))" : "none",
                              transition: "all 0.2s",
                            }}
                          />
                        );
                      })}
                      <Typography
                        sx={{
                          fontFamily: "'Roboto', sans-serif",
                          fontSize: "0.7rem",
                          color: "rgba(255,215,0,0.55)",
                          ml: "4px",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {testimonials[currentIndex].rating}/5
                      </Typography>
                    </Box>

                  </Box>
                </Box>
                {/* ══════════════ end card ══════════════ */}

              </MotionBox>
            </AnimatePresence>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}