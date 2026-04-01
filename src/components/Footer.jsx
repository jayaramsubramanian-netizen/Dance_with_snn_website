import { Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import { FooterBottom } from "../components/FooterBottom";

export function Footer() {
  const currentYear = new Date().getFullYear();

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
      {/* Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,27,50,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 3, md: 6 },
          py: { xs: 6, md: 7 },
        }}
      >
        {/* MAIN GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "320px 1fr" },
            gap: { xs: 6, md: 10 },
            alignItems: "start",
          }}
        >
          {/* LEFT SIDE */}
          <Box>
            <Box
              component="img"
              src="https://res.cloudinary.com/dtovj9rds/image/upload/v1774683040/SNN_TEXT_p4wyx2.webp"
              alt="SreeNarthana Natyalaya"
              sx={{
                width: { xs: "220px", md: "260px" },
                mb: 2,
                filter: "drop-shadow(0 0 12px rgba(124,27,50,0.5))",
              }}
            />

            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                color: "rgba(253,232,224,0.75)",
                lineHeight: 1.7,
                maxWidth: "320px",
              }}
            >
              Dance with your heart and with every step unfolds a story of
              passion.
            </Typography>
          </Box>

          {/* RIGHT SECTION */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                md: "repeat(3,1fr)",
              },
              gap: { xs: 5, md: 8 },
              pl: { xs: 5, md: 20 },
            }}
          >
            {/* QUICK LINKS */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Berkshire Swash', cursive",
                  fontSize: "1.5rem",
                  color: "#7C1B32",
                  mb: 2.5,
                }}
              >
                Quick Links
              </Typography>

              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  p: 0,
                  m: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/classes", label: "Classes" },
                  { to: "/events", label: "Gallery" },
                  { to: "/contact", label: "Contact" },
                ].map((link) => (
                  <Box component="li" key={link.to}>
                    <Box
                      component={Link}
                      to={link.to}
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.95rem",
                        color: "rgba(253,232,224,0.7)",
                        textDecoration: "none",
                        "&:hover": { color: "#E94B6E" },
                      }}
                    >
                      {link.label}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* CONTACT */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Berkshire Swash', cursive",
                  fontSize: "1.5rem",
                  color: "#7C1B32",
                  mb: 2.5,
                }}
              >
                Contact
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography
                  sx={{ color: "rgba(253,232,224,0.7)", fontSize: "0.9rem" }}
                >
                  27938 Robinson Park Dr,
                  <br />
                  Spring Texas 77386
                </Typography>

                <Typography
                  sx={{ color: "rgba(253,232,224,0.7)", fontSize: "0.9rem" }}
                >
                  +1 (630) 750-5272
                </Typography>

                <Typography
                  sx={{ color: "rgba(253,232,224,0.7)", fontSize: "0.9rem" }}
                >
                  narthanadanceschool@gmail.com
                </Typography>
              </Box>
            </Box>

            {/* FOLLOW */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Berkshire Swash', cursive",
                  fontSize: "1.5rem",
                  color: "#7C1B32",
                  mb: 2.5,
                }}
              >
                Follow Us
              </Typography>

              <Box sx={{ display: "flex", gap: 1.5 }}>
                <IconButton
                  href="https://www.instagram.com/sreenarthananatyalaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    p: 1.2,
                    backgroundColor: "rgba(124,27,50,0.1)",
                    border: "1px solid rgba(124,27,50,0.3)",
                    color: "#7C1B32",
                    "&:hover": {
                      backgroundColor: "rgba(124,27,50,0.2)",
                      color: "#E94B6E",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Instagram size={19} />
                </IconButton>

                <IconButton
                  href="https://www.facebook.com/people/SreeNarthana-Natyalaya/61572820671359/?mibextid=wwXIfr&rdid=K7rebQmrz9TbGyt9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B9ATQf4W3%2F%3Fmibextid%3DwwXIfr%26ref%3D1"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    p: 1.2,
                    backgroundColor: "rgba(124,27,50,0.1)",
                    border: "1px solid rgba(124,27,50,0.3)",
                    color: "#7C1B32",
                    "&:hover": {
                      backgroundColor: "rgba(124,27,50,0.2)",
                      color: "#E94B6E",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Facebook size={19} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* BOTTOM BAR */}
        <FooterBottom />
      </Box>
    </Box>
  );
}