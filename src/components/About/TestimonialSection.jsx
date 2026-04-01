import { Box, Typography, Avatar } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
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

  /* Track tallest card so the carousel wrapper never collapses */
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
        /* Let height grow with content; min 100vh only if content is short */
        minHeight: "100vh",
        height: "auto",
        width: "100%",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #0a0005 0%, #130008 40%, #1a0010 70%, #0d0003 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 6, md: 8 },  /* breathing room top & bottom */
      }}
    >
      {/* Decorative glows */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        sx={{
          position: "absolute", top: "20%", right: "10%",
          width: "350px", height: "350px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,27,50,0.4) 0%, transparent 70%)",
          filter: "blur(90px)", zIndex: 0, pointerEvents: "none",
        }}
      />
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 0.3 }}
        sx={{
          position: "absolute", bottom: "20%", left: "10%",
          width: "300px", height: "300px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,27,50,0.35) 0%, transparent 70%)",
          filter: "blur(90px)", zIndex: 0, pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <Box
        sx={{
          position: "relative", zIndex: 2,
          maxWidth: "900px", width: "100%",
          mx: "auto", px: { xs: 2, sm: 3 },
          display: "flex", flexDirection: "column", alignItems: "center",
        }}
      >
        {/* ── Header ── */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          sx={{ textAlign: "center", mb: { xs: 4, md: 5 }, width: "100%" }}
        >
          <AnimatedDivider />

          <MotionTypography
            component="h2"
            sx={{
              fontFamily: "'Berkshire Swash', cursive",
              fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
              color: "#FFF5F2",
              fontWeight: 600,
              letterSpacing: "0.03em",
              textShadow: "0 4px 20px rgba(124,27,50,0.5), 0 0 40px rgba(124,27,50,0.3)",
              mb: 1.5,
              mt: 1,
            }}
          >
            Rasa Reflection
          </MotionTypography>

          <Typography
            sx={{
              fontFamily: "'Berkshire Swash', cursive",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              color: "#E94B6E",
              letterSpacing: "0.05em",
              mb: 1.5,
            }}
          >
            Testimonials
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              color: "rgba(255,245,242,0.75)",
              maxWidth: "640px",
              mx: "auto",
              lineHeight: 1.65,
            }}
          >
            Hear from our community of dancers and their families
          </Typography>
        </MotionBox>

        {/* ── Carousel ── */}
        <Box sx={{ position: "relative", width: "100%" }}>
          {/* Fixed-height wrapper derived from tallest card */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: cardHeight === "auto" ? "auto" : `${cardHeight}px`,
              minHeight: "180px",
            }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <MotionBox
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 280, damping: 30 },
                  opacity: { duration: 0.35 },
                }}
                sx={{ position: "absolute", width: "100%", top: 0, left: 0 }}
              >
                <Box
                  ref={cardRef}
                  sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    background: "linear-gradient(135deg, rgba(15,0,3,0.92), rgba(25,0,5,0.88))",
                    border: "1px solid rgba(124,27,50,0.28)",
                    borderRadius: 3,
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 16px 50px rgba(124,27,50,0.18)",
                  }}
                >
                  {/* Stars */}
                  <Box sx={{ display: "flex", gap: 0.5, mb: 2.5, justifyContent: "center" }}>
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={17}
                        fill="#FFD700"
                        stroke="#FFD700"
                        style={{ filter: "drop-shadow(0 0 6px rgba(255,215,0,0.55))" }}
                      />
                    ))}
                  </Box>

                  {/* Comment */}
                  <Typography
                    sx={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: { xs: "0.95rem", sm: "1rem", md: "1.08rem" },
                      color: "rgba(253,232,224,0.88)",
                      lineHeight: 1.8,
                      textAlign: "left",
                      mb: 3,
                      fontStyle: "italic",
                      whiteSpace: "pre-line",
                    }}
                  >
                    "{testimonials[currentIndex].comment}"
                  </Typography>

                  {/* Author */}
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.75 }}>
                    <Avatar
                      sx={{
                        width: 42, height: 42,
                        background: "linear-gradient(135deg, #7C1B32, #A52347)",
                        color: "#FFF", fontWeight: 600, fontSize: "1rem",
                      }}
                    >
                      {testimonials[currentIndex].avatar}
                    </Avatar>
                    <Box>
                      <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#C86080" }}>
                        {testimonials[currentIndex].name}
                      </Typography>
                      <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.8rem", color: "rgba(253,232,224,0.5)" }}>
                        {testimonials[currentIndex].role}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            </AnimatePresence>
          </Box>

          {/* ── Nav controls ── */}
          {/* <Box
            sx={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: 2,
            }}
          >
            <Box
              component="button"
              onClick={prevTestimonial}
              sx={{
                width: 36, height: 36, borderRadius: "50%",
                border: "1px solid rgba(124,27,50,0.45)",
                background: "rgba(124,27,50,0.12)",
                color: "rgba(253,232,224,0.7)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s",
                "&:hover": { background: "rgba(124,27,50,0.3)", borderColor: "rgba(124,27,50,0.7)", color: "#fff" },
              }}
            >
              <ChevronLeft size={16} />
            </Box>

            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {testimonials.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                  sx={{
                    width: i === currentIndex ? 20 : 7,
                    height: 7, borderRadius: "4px",
                    background: i === currentIndex ? "#7C1B32" : "rgba(124,27,50,0.3)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": { background: "rgba(124,27,50,0.6)" },
                  }}
                />
              ))}
            </Box>

            <Box
              component="button"
              onClick={nextTestimonial}
              sx={{
                width: 36, height: 36, borderRadius: "50%",
                border: "1px solid rgba(124,27,50,0.45)",
                background: "rgba(124,27,50,0.12)",
                color: "rgba(253,232,224,0.7)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s",
                "&:hover": { background: "rgba(124,27,50,0.3)", borderColor: "rgba(124,27,50,0.7)", color: "#fff" },
              }}
            >
              <ChevronRight size={16} />
            </Box>
          </Box> */}
        </Box>

      </Box>
    </Box>
  );
}