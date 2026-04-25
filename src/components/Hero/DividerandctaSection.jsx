import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedDivider from "../AnimatedDivider";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

/* ─── shared bg tones ─── */
// Single solid colour used as both the section bg and the image container bg
// so the smudge blends into exactly the same colour underneath.
const BG = "#0f0408";
const IMG_BG = "#0f0408";   /* image container bg — must match BG exactly */
const FADE = "rgba(15,4,8,";  /* rgba version of #0f0408 for gradient stops */

export function DividerAndCTASection() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: BG,
      }}
    >
      {/* ── Static ambient orbs ── */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: "5%", left: "15%", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,27,50,0.13) 0%, transparent 70%)", filter: "blur(90px)" }} />
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 680, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,27,50,0.08) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <Box sx={{ position: "absolute", bottom: "5%", right: "10%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,27,50,0.11) 0%, transparent 70%)", filter: "blur(90px)" }} />
      </Box>

      {/* ── Top divider ── */}
      <Box sx={{ mt: { xs: 6, md: 8 }, display: "flex", justifyContent: "center", position: "relative", zIndex: 1 }}>
        <AnimatedDivider />
      </Box>

      {/* ═══════════════════════════════
          SECTION 1 — image left, text right
      ═══════════════════════════════ */}
      <Box
        component="section"
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: { xs: "auto", md: "70vh" },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1300px",
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* LEFT — Image */}
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            sx={{
              width: { xs: "100%", sm: "400px", md: "550px" },
              height: { xs: "400px", sm: "500px", md: "600px" },
              flexShrink: 0,
              position: "relative",
              backgroundColor: IMG_BG,
            }}
          >
            <Box
              component="img"
              src="https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_800/v1774682332/DSC_1096_go4ujt.webp"
              alt="Classical dance mudra"
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center 30%",
                display: "block",
              }}
            />
            {/* Smudge — rgba so all 4 gradient layers compose correctly */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: `
                  linear-gradient(to right,  ${FADE}1) 0%, ${FADE}0) 30%, ${FADE}0) 70%, ${FADE}1) 100%),
                  linear-gradient(to bottom, ${FADE}1) 0%, ${FADE}0) 22%, ${FADE}0) 70%, ${FADE}1) 100%)
                `,
              }}
            />
          </MotionBox>

          {/* RIGHT — Content */}
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Berkshire Swash', cursive",
                  fontSize: { xs: "2rem", sm: "3.5rem", md: "3.5rem" },
                  fontWeight: 600,
                  color: "#FDE8E0",
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                  mb: 3,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Every Gesture Speaks a Tale
              </Typography>

              <Box
                sx={{
                  width: "100px",
                  height: "3px",
                  background: "linear-gradient(90deg, #7C1B32, #A52347, transparent)",
                  mx: { xs: "auto", md: 0 },
                }}
              />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", md: "1.2rem" },
                  color: "rgba(253,232,224,0.9)",
                  lineHeight: 1.8,
                  fontFamily: "'Roboto', sans-serif",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                In every mudra, every rhythm, and every expression, a story
                unfolds — connecting performer and audience through the universal
                language of movement and emotion.
              </Typography>
            </Box>
          </MotionBox>
        </Box>
      </Box>

      {/* ── Middle divider ── */}
      <Box sx={{ mt: { xs: 6, md: 8 }, display: "flex", justifyContent: "center", position: "relative", zIndex: 1 }}>
        <AnimatedDivider />
      </Box>

      {/* ═══════════════════════════════
          SECTION 2 — text left, image right
      ═══════════════════════════════ */}
      <Box
        component="section"
        sx={{
          position: "relative",
          zIndex: 1,
          pt: { xs: 6, md: 12 },
          pb: { xs: 6, md: 12 },
          minHeight: { xs: "50vh", md: "60vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          px: 3,
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1300px",
            width: "100%",
            mx: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* LEFT — Text */}
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 4,
              ml: { md: "10px" },
            }}
          >
            <Box>
              <MotionTypography
                variant="h2"
                sx={{
                  fontFamily: "'Berkshire Swash', cursive",
                  fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
                  color: "#FDE8E0",
                  fontWeight: 600,
                  mb: 3,
                  lineHeight: 1.2,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Begin Your Journey with Us
              </MotionTypography>

              <Box
                sx={{
                  width: "100px",
                  height: "3px",
                  background: "linear-gradient(90deg, #7C1B32, #A52347, transparent)",
                  mx: { xs: "auto", md: 0 },
                }}
              />
            </Box>

            <MotionTypography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: { xs: "1.05rem", md: "1.15rem" },
                color: "rgba(253,232,224,0.85)",
                lineHeight: 1.8,
                maxWidth: "560px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Step into a world of rhythm, expression, and grace. Join our vibrant
              community and discover the transformative power of Bharatanatyam in
              an environment dedicated to excellence and tradition.
              <br /><br />
              Whether beginning your first steps or refining advanced technique,
              your artistic journey begins here.
            </MotionTypography>

            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
              <Box
                component={Link}
                to="/portal"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  color: "#FDE8E0",
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  background: "linear-gradient(90deg, #7C1B32, #A52347)",
                  borderRadius: "50px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 20px rgba(124,27,50,0.4)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #A52347, #D94567)",
                    boxShadow: "0 6px 30px rgba(124,27,50,0.6)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Register Today
              </Box>
            </Box>
          </MotionBox>

          {/* RIGHT — Image */}
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            sx={{
              width: { xs: "100%", sm: "400px", md: "550px" },
              height: { xs: "400px", sm: "500px", md: "600px" },
              flexShrink: 0,
              position: "relative",
              order: { xs: -1, md: 0 },
              backgroundColor: IMG_BG,
            }}
          >
            <Box
              component="img"
              src="https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_800/v1775381602/StudentPic6_y1rpwz.jpg"
              alt="Classical dance"
              loading="lazy"
              decoding="async"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center 30%",
                display: "block",
              }}
            />
            {/* Smudge — rgba so all 4 gradient layers compose correctly */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: `
                  linear-gradient(to right,  ${FADE}1) 0%, ${FADE}0) 30%, ${FADE}0) 70%, ${FADE}1) 100%),
                  linear-gradient(to bottom, ${FADE}1) 0%, ${FADE}0) 22%, ${FADE}0) 70%, ${FADE}1) 100%)
                `,
              }}
            />
          </MotionBox>
        </Box>
      </Box>

    </Box>
  );
}