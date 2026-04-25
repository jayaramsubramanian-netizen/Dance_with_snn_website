import { Box, Typography, TextField, Button } from "@mui/material";
import { Snackbar, Alert } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { Mail, Phone, MapPin, Send, CalendarClock } from "lucide-react";
import { useState, useEffect } from "react";

import emailjs from "emailjs-com";

const MotionBox = motion.create(Box);
const MotionTypo = motion.create(Typography);

/* ── Palette ─────────────────────────────────── */
const C = {
  gold: "#C8A96E",
  goldLight: "#E0C98A",
  goldDim: "rgba(200,169,110,0.12)",
  goldBorder: "rgba(200,169,110,0.30)",
  text: "#F0EAE0",
  textDim: "rgba(240,234,224,0.55)",
  maroon: "#5C1220",          /* solid maroon — panel 1  */
  panel2: "#0D1017",          /* dark slate  — panel 2  */
  border1: "rgba(255,255,255,0.1)",
  border2: "rgba(255,255,255,0.06)",
};

/* Navbar height — adjust if yours differs */
const NAV_H = { xs: "64px", md: "72px" };

const EASE = [0.22, 1, 0.36, 1];

/* ── SVG brand icons ─────────────────────────── */
const IconInstagram = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const IconFacebook = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

/* ── TextField SX ────────────────────────────── */
const fieldSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: "'Roboto', sans-serif",
    background: "rgba(255,255,255,0.03)",
    borderRadius: "10px",
    color: C.text,
    fontSize: "0.9rem",
    transition: "background 0.25s",
    "& fieldset": { borderColor: "rgba(255,255,255,0.07)" },
    "&:hover": { background: "rgba(255,255,255,0.055)" },
    "&:hover fieldset": { borderColor: C.goldBorder },
    "&.Mui-focused": { background: "rgba(255,255,255,0.065)" },
    "&.Mui-focused fieldset": { borderColor: C.gold, borderWidth: "1px" },
  },
  "& .MuiInputBase-input::placeholder": { color: "rgba(240,234,224,0.2)", opacity: 1 },
};

/* ── Animated rule ───────────────────────────── */
const Rule = ({ delay = 0, light = false }) => (
  <MotionBox
    initial={false}
    animate={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 0.55, delay, ease: EASE }}
    sx={{ display: "flex", alignItems: "center", gap: 1.2, transformOrigin: "left", mt: 1.5 }}
  >
    <Box sx={{ width: 44, height: "1px", background: light ? "rgba(255,255,255,0.25)" : "rgba(200,169,110,0.35)" }} />
    <MotionBox
      animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      sx={{ width: 5, height: 5, borderRadius: "50%", background: light ? "rgba(255,255,255,0.6)" : C.gold, flexShrink: 0 }}
    />
    <Box sx={{ width: 20, height: "1px", background: light ? "rgba(255,255,255,0.12)" : "rgba(200,169,110,0.18)" }} />
  </MotionBox>
);

/* ── Field label ─────────────────────────────── */
const FieldLabel = ({ htmlFor, children, delay = 0 }) => (
  <MotionBox
    component="label" htmlFor={htmlFor}
    initial={false}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.38, delay, ease: EASE }}
    sx={{
      display: "block",
      fontFamily: "'Roboto', sans-serif",
      fontSize: "0.65rem", fontWeight: 700,
      letterSpacing: "0.16em", textTransform: "uppercase",
      color: "rgba(200,169,110,0.5)", mb: 0.75, cursor: "default",
    }}
  >
    {children}
  </MotionBox>
);

/* ══════════════════════════════════════════════ */
export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const btnCtrl = useAnimation();
  const [openPopup, setOpenPopup] = useState(false);

  const contactInfo = [
    { icon: Mail, title: "Email Us", value: "info@dancewithsnn.com", link: "mailto:info@dancewithsnn.com" },
    { icon: Phone, title: "Call Us", value: "+1 (630) 750-5272", link: "tel:+16307505272" },
    { icon: MapPin, title: "Visit Us", value: "27938 Robinson Park Dr, Spring, TX 77386", link: "https://www.google.com/maps/search/?api=1&query=27938+Robinson+Park+Dr,+Spring+Texas+77386" },
    { icon: CalendarClock, title: "Hours", value: "Mon – Fri: 4:00 pm – 8:00 pm", link: "#" },
  ];

  const socials = [
    { Icon: IconInstagram, href: "https://www.instagram.com/sreenarthananatyalaya", target: "_blank", rel: "noopener noreferrer", label: "Instagram" },
    { Icon: IconFacebook, href: "https://www.facebook.com/people/SreeNarthana-Natyalaya/61572820671359/?mibextid=wwXIfr&rdid=K7rebQmrz9TbGyt9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B9ATQf4W3%2F%3Fmibextid%3DwwXIfr%26ref%3D1", target: "_blank", rel: "noopener noreferrer", label: "Facebook" },
  ];

  useEffect(() => {
    btnCtrl.start({
      boxShadow: ["0 0 0px rgba(200,169,110,0)", "0 0 18px rgba(200,169,110,0.32)", "0 0 0px rgba(200,169,110,0)"],
      transition: { duration: 2.5, repeat: Infinity, repeatDelay: 2 },
    });
  }, [btnCtrl]);

  const handleSubmit = (e) => {
  e.preventDefault();

  const templateParams = {
    name: formData.name,
    email: formData.email,
    title: formData.phone,
    message: formData.message,
  };

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,   // 🔴 replace
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // 🔴 replace
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // 🔴 replace
    )
    .then(
      (result) => {
        console.log("SUCCESS:", result.text);

        setSent(true);
        setOpenPopup(true);

        // reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      },
      (error) => {
        console.log("FAILED:", error.text);
        alert("Something went wrong. Please try again.");
      }
    );
};

  const cardVariants = {
    hidden: { opacity: 0, y: 14, scale: 0.97 },
    visible: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.42, delay: 0.5 + i * 0.1, ease: EASE } }),
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.55 + i * 0.09, ease: EASE } }),
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        /*
         * On desktop  : fill remaining viewport below navbar (100dvh - navH)
         * On mobile   : auto-height stacked panels, no overflow clipping
         */
        height: { xs: "auto", md: `calc(100dvh - ${NAV_H.md})` },
        minHeight: { xs: "unset", md: "560px" },
        width: "100%",
        display: "grid",
        mt: { xs: "70px", md: "60px" },
        gridTemplateColumns: { xs: "1fr", md: "5fr 5fr 3.5fr" },
        gridTemplateRows: { xs: "auto auto auto", md: "1fr" },
        overflow: { xs: "visible", md: "hidden" },
        background: "#080C11",
      }}
    >

      {/* ══ PANEL 1 — Contact info ══════════════════ */}
      <MotionBox
        initial={false}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.72, ease: EASE }}
        sx={{
          /*
           * Mobile: appears BELOW the form (order 3) so reading flow is
           * hero → form → contact details
           * Desktop: leftmost column (order 1)
           */
          order: { xs: 3, md: 1 },
          background: C.maroon,
          borderTop: { xs: `1px solid ${C.panelBorder}`, md: "none" },
          borderRight: { md: `1px solid ${C.panelBorder}` },
          p: { xs: "40px 22px 48px", sm: "48px 36px", md: "40px 40px" },
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle radial blushes */}
        <Box sx={{ position: "absolute", top: "-60px", left: "-60px", width: 260, height: 260, background: "radial-gradient(circle, rgba(120,20,40,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", bottom: "-40px", right: "-40px", width: 200, height: 200, background: "radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <Box sx={{ width: "100%", maxWidth: { xs: "100%", sm: "480px", md: "100%" }, display: "flex", flexDirection: "column" }}>

          {/* Eyebrow */}
          <MotionTypo
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25, ease: EASE }}
            sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(200,169,110,0.45)", mb: 0.8, mt: 3, }}
          >
            Reach Out
          </MotionTypo>

          {/* Title */}
          <MotionTypo
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
            sx={{ fontFamily: "'Berkshire Swash', cursive", fontSize: { xs: "1.8rem", md: "2.1rem" }, color: "#FFFFFF", fontWeight: 400, lineHeight: 1.05 }}
          >
            Contact Us
          </MotionTypo>

          <Rule delay={0.45} light />

          {/* Sub-heading */}
          <MotionBox
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
            sx={{ mt: 3, mb: 2.5 }}
          >
            <Typography sx={{ fontFamily: "'Berkshire Swash', cursive", fontSize: { xs: "1.05rem", md: "1.15rem" }, color: "rgba(255,255,255,0.7)", mb: 0.5 }}>
              Get In Touch
            </Typography>
            <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }}>
              We'd love to hear from you. Reach out and we'll get back to you shortly.
            </Typography>
          </MotionBox>

          {/* Contact cards */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <MotionBox
                  key={info.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  component="a"
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, scale: 1.01, transition: { duration: 0.18 } }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.6,
                    textDecoration: "none",
                    p: "11px 15px",
                    borderRadius: "10px",
                    border: `1px solid ${C.border1}`,
                    background: "rgba(255,255,255,0.03)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    backdropFilter: "blur(4px)",
                    "&::before": {
                      content: '""', position: "absolute",
                      left: 0, top: "18%", width: "2px", height: "64%",
                      background: `linear-gradient(to bottom, transparent, ${C.gold}, transparent)`,
                      borderRadius: "0 2px 2px 0",
                      opacity: 0, transform: "scaleY(0)", transformOrigin: "center",
                      transition: "opacity 0.22s, transform 0.22s",
                    },
                    "&:hover": { background: "rgba(200,169,110,0.05)", borderColor: C.goldBorder },
                    "&:hover::before": { opacity: 1, transform: "scaleY(1)" },
                  }}
                >
                  <Box sx={{
                    width: 33, height: 33, borderRadius: "50%",
                    background: "rgba(200,169,110,0.08)",
                    border: `1px solid ${C.goldBorder}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, color: C.gold,
                  }}>
                    <Icon size={13} />
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(200,169,110,0.45)", mb: 0.25 }}>
                      {info.title}
                    </Typography>
                    <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.87rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.45, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: { xs: "normal", md: "nowrap" } }}>
                      {info.value}
                    </Typography>
                  </Box>
                </MotionBox>
              );
            })}
          </Box>

          {/* Socials */}
          <MotionBox
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease: EASE }}
            sx={{ mt: 3, pt: 2.5, borderTop: `1px solid ${C.border1}` }}
          >
            <Typography sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", mb: 1.5 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socials.map(({ Icon, href, label }, i) => (
                <MotionBox
                  key={label}
                  component="a" href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.1 + i * 0.08, ease: EASE }}
                  whileHover={{ y: -3, scale: 1.14, transition: { duration: 0.16 } }}
                  whileTap={{ scale: 0.9 }}
                  sx={{
                    width: 33, height: 33, borderRadius: "50%",
                    border: `1px solid ${C.goldBorder}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(200,169,110,0.45)", textDecoration: "none",
                    background: "rgba(200,169,110,0.05)",
                    transition: "background 0.2s, border-color 0.2s, color 0.2s",
                    "&:hover": { background: "rgba(200,169,110,0.14)", borderColor: C.gold, color: C.gold },
                  }}
                >
                  <Icon />
                </MotionBox>
              ))}
            </Box>
          </MotionBox>
        </Box>
      </MotionBox>

      {/* ══ PANEL 2 — Form ══════════════════════════ */}
      <MotionBox
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.72, delay: 0.15, ease: EASE }}
        sx={{
          order: { xs: 2, md: 2 },
          background: C.panel2,
          borderRight: { md: `1px solid ${C.panelBorder}` },
          borderBottom: { xs: `1px solid ${C.panelBorder}`, md: "none" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: { xs: "visible", md: "auto" },
          p: { xs: "40px 22px 44px", sm: "48px 36px", md: "36px 52px" },
          mt: "-30px",
          position: "relative",
        }}
      >
        {/* Gold corner accent */}
        <Box sx={{ position: "absolute", bottom: 0, right: 0, width: 220, height: 220, background: "radial-gradient(circle at bottom right, rgba(200,169,110,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", top: 0, left: 0, width: 160, height: 160, background: "radial-gradient(circle at top left, rgba(200,169,110,0.025) 0%, transparent 65%)", pointerEvents: "none" }} />

        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: "500px", md: "100%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Heading */}
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
            sx={{ mb: { xs: 3, md: 3.5 } }}
          >
            <Typography sx={{ fontFamily: "'Berkshire Swash', cursive", fontSize: { xs: "1.8rem", md: "2.1rem" }, color: C.text, fontWeight: 400, lineHeight: 1.15, mb: 1 }}>
              Send Us A Message
            </Typography>
            <MotionBox
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.55, delay: 0.5, ease: EASE }}
              sx={{ width: 32, height: "1.5px", background: `linear-gradient(to right, ${C.gold}, transparent)`, borderRadius: 2, transformOrigin: "left" }}
            />
          </MotionBox>

          {/* Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: { xs: 1.9, md: 2.1 } }}
          >
            {/* Name + Email */}
            <MotionBox
              custom={0} variants={fieldVariants} initial="hidden" animate="visible"
              sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: { xs: 1.9, md: 2 } }}
            >
              <Box>
                <FieldLabel htmlFor="name" delay={0.55}>Name</FieldLabel>
                <TextField id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" required fullWidth size="small" sx={fieldSx} />
              </Box>
              <Box>
                <FieldLabel htmlFor="email" delay={0.62}>Email</FieldLabel>
                <TextField id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" required fullWidth size="small" sx={fieldSx} />
              </Box>
            </MotionBox>

            <MotionBox custom={1} variants={fieldVariants} initial="hidden" animate="visible">
              <FieldLabel htmlFor="phone" delay={0.68}>Phone</FieldLabel>
              <TextField id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 (555) 123-4567" fullWidth size="small" sx={fieldSx} />
            </MotionBox>

            <MotionBox custom={2} variants={fieldVariants} initial="hidden" animate="visible">
              <FieldLabel htmlFor="message" delay={0.76}>Message</FieldLabel>
              <TextField
                id="message" value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your interest in dance..."
                required multiline rows={5} fullWidth sx={fieldSx}
              />
            </MotionBox>

            {/* Submit */}
            <MotionBox custom={3} variants={fieldVariants} initial="hidden" animate="visible">
              <MotionBox animate={btnCtrl}>
                <Button
                  type="submit"
                  fullWidth
                  endIcon={
                    <MotionBox
                      animate={sent ? { x: [0, 5, 0] } : { x: 0 }}
                      transition={{ duration: 0.38 }}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Send size={14} />
                    </MotionBox>
                  }
                  component={motion.button}
                  whileHover={{ scale: 1.01, transition: { duration: 0.16 } }}
                  whileTap={{ scale: 0.975 }}
                  sx={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "0.92rem", fontWeight: 700, letterSpacing: "0.1em",
                    py: 1.65,
                    background: sent
                      ? "linear-gradient(90deg, #2D6A4F, #40916C)"
                      : `linear-gradient(90deg, ${C.gold} 0%, ${C.goldLight} 55%, #D4AA70 100%)`,
                    color: "#0a0c10",
                    borderRadius: "10px", textTransform: "none",
                    border: "none", cursor: "pointer",
                    transition: "background 0.45s ease",
                    "&:hover": {
                      background: sent
                        ? "linear-gradient(90deg, #2D6A4F, #40916C)"
                        : `linear-gradient(90deg, ${C.goldLight} 0%, ${C.gold} 100%)`,
                    },
                  }}
                >
                  {sent ? "Message Sent!" : "Send Message"}
                </Button>
              </MotionBox>
            </MotionBox>
          </Box>
        </Box>
      </MotionBox>

      {/* ══ PANEL 3 — Image ═════════════════════════
       *
       *  Mobile  : full-width banner at top (order 1), taller than before,
       *            portrait image centred & properly cropped
       *  Desktop : right column, fills full panel height
       */}
      <MotionBox
        initial={false}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.72, delay: 0.3, ease: EASE }}
        sx={{
          order: { xs: 1, md: 3 },
          position: "relative",
          overflow: "hidden",
          /*
           *  Mobile  : fixed aspect ratio so portrait image shows faces/top
           *  Desktop : stretch to fill grid row
           */
          height: { xs: "300px", sm: "360px", md: "100%" },
          minHeight: { md: "100%" },
        }}
      >
        <MotionBox
          component="img"
          src="https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_900/v1774683394/DSC_0899_jdfoon.webp"
          alt="Narthana Dance School"
          initial={false}
          animate={{ scale: 1 }}
          transition={{ duration: 1.3, delay: 0.3, ease: EASE }}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            /*
             *  Portrait image: centre horizontally, show top third
             *  (where faces / key subject usually sits)
             */
            objectPosition: "center 15%",
            display: "block",
          }}
        />

        {/* ── Overlays ── */}

        {/* Desktop: bleed into form panel on the left */}
        <Box sx={{
          display: { xs: "none", md: "block" },
          position: "absolute", inset: 0,
          background: `linear-gradient(to right, ${C.panel2} 0%, rgba(13,16,23,0.15) 30%, transparent 60%)`,
          pointerEvents: "none",
        }} />

        {/* Mobile: gradient bottom so it fades into the form below */}
        <Box sx={{
          display: { xs: "block", md: "none" },
          position: "absolute", inset: 0,
          background: `linear-gradient(
            to bottom,
            rgba(10,13,18,0.25) 0%,
            transparent 25%,
            transparent 60%,
            rgba(10,13,18,0.85) 100%
          )`,
          pointerEvents: "none",
        }} />

        {/* Both: very subtle top vignette (navbar transition) */}
        <Box sx={{
          position: "absolute", top: 0, left: 0, right: 0, height: "80px",
          background: "linear-gradient(to bottom, rgba(10,13,18,0.55) 0%, transparent 100%)",
          pointerEvents: "none",
        }} />
      </MotionBox>

      {/* ✅ SNACKBAR GOES HERE */}
      <Snackbar
        open={openPopup}
        autoHideDuration={4000}
        onClose={() => setOpenPopup(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenPopup(false)}
          severity="info"
          sx={{
            background: "#0D1017",
            color: "#F0EAE0",
            border: "1px solid rgba(200,169,110,0.3)",
            fontFamily: "'Roboto', sans-serif",
            backdropFilter: "blur(6px)",
          }}
        >
          {/* This feature is under construction. Please use "Email Us" above. */}
          Message sent successfully!
        </Alert>
      </Snackbar>

    </Box>
  );
}