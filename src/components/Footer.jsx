import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FooterBottom } from "../components/FooterBottom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/classes", label: "Classes" },
  { to: "/events", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const contactInfo = [
  { icon: MapPin, text: "27938 Robinson Park Dr, Spring TX 77386", isAddress: true },
  { icon: Phone, text: "+1 (630) 750-5272", href: "tel:+16307505272" },
  { icon: Mail, text: "info@dancewithsnn.com", href: "mailto:info@dancewithsnn.com" },
];

// SVG icons inlined to avoid deprecated lucide-react social icon names
function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

const socialLinks = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/sreenarthananatyalaya",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: "https://www.facebook.com/people/SreeNarthana-Natyalaya/61572820671359/",
  },
];

/* ─── shared tokens ─── */
const headingStyle = {
  fontFamily: "'Berkshire Swash', cursive",
  fontSize: "1.1rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#7C1B32",
  mb: 3,
};

const linkStyle = {
  fontFamily: "'Roboto', sans-serif",
  fontSize: "0.9rem",
  color: "rgba(253,232,224,0.65)",
  textDecoration: "none",
  display: "block",
  transition: "color 0.2s ease, padding-left 0.2s ease",
  "&:hover": {
    color: "#E94B6E",
    pl: "6px",
  },
};

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background: "linear-gradient(180deg,#000000 0%,#0a0000 100%)",
        borderTop: "1px solid rgba(124,27,50,0.3)",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,27,50,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "relative",
          maxWidth: "1300px",
          mx: "auto",
          px: { xs: 3, sm: 5, md: 8 },
          pt: { xs: 8, md: 10 },
          pb: 0,
        }}
      >
        {/* ─── 4-column grid ─── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "2fr 1fr 1.4fr 1fr",
            },
            gap: { xs: 6, sm: 8, lg: 6 },
            alignItems: "start",
          }}
        >
          {/* ── COL 1: Brand ── */}
          <Box>
            <Box
              component="img"
              src="https://res.cloudinary.com/dtovj9rds/image/upload/f_auto,q_auto,w_300/v1774683040/SNN_TEXT_p4wyx2.webp"
              alt="Sree Narthana Natyalaya"
              sx={{
                width: { xs: "200px", md: "230px" },
                mb: 2.5,
                filter: "drop-shadow(0 0 10px rgba(124,27,50,0.45))",
              }}
            />

            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(253,232,224,0.6)",
                lineHeight: 1.8,
                maxWidth: "280px",
                mb: 4,
              }}
            >
              Dance with your heart and with every step unfolds a story of
              passion. Classical Bharatanatyam in Spring, Texas.
            </Typography>

            {/* Social icons */}
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Box
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: "1px solid rgba(124,27,50,0.35)",
                    backgroundColor: "rgba(124,27,50,0.08)",
                    color: "#7C1B32",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      backgroundColor: "rgba(124,27,50,0.22)",
                      color: "#E94B6E",
                      transform: "translateY(-3px)",
                      borderColor: "rgba(233,75,110,0.5)",
                    },
                  }}
                >
                  <Icon size={17} />
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── COL 2: Quick Links ── */}
          <Box>
            <Typography sx={headingStyle}>Quick Links</Typography>
            <Box
              component="ul"
              sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 2 }}
            >
              {navLinks.map(({ to, label }) => (
                <Box component="li" key={to}>
                  <Box component={Link} to={to} sx={linkStyle}>
                    {label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── COL 3: Contact ── */}
          <Box>
            <Typography sx={headingStyle}>Contact Us</Typography>
            <Box
              component="ul"
              sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 2.5 }}
            >
              {contactInfo.map(({ icon: Icon, text, href, isAddress }) => (
                <Box
                  key={text}
                  component="li"
                  sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}
                >
                  <Icon
                    size={16}
                    style={{ color: "#7C1B32", marginTop: "3px", flexShrink: 0 }}
                  />
                  {isAddress ? (
                    <Box
                      component="address"
                      sx={{
                        fontStyle: "normal",
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "0.88rem",
                        color: "rgba(253,232,224,0.65)",
                        lineHeight: 1.6,
                      }}
                    >
                      {text}
                    </Box>
                  ) : (
                    <Box
                      component="a"
                      href={href}
                      sx={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "0.88rem",
                        color: "rgba(253,232,224,0.65)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                        "&:hover": { color: "#E94B6E" },
                      }}
                    >
                      {text}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── COL 4: Classes ── */}
          <Box>
            <Typography sx={headingStyle}>Our Classes</Typography>
            <Box
              component="ul"
              sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 2 }}
            >
              {[
                { to: "/classes", label: "Beginner (Age 6–12)" },
                { to: "/classes", label: "Intermediate (Age 10–16)" },
                { to: "/classes", label: "Advanced (Age 16+)" },
                { to: "/contact", label: "Enroll Now" },
              ].map(({ to, label }) => (
                <Box component="li" key={label}>
                  <Box component={Link} to={to} sx={linkStyle}>
                    {label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ─── Bottom bar ─── */}
        <FooterBottom />
      </Box>
    </Box>
  );
}
