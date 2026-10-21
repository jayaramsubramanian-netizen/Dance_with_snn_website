import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        // mt: 6,
        pt: 4,
        pb: 4,
        pl: 4,
        pr: 4,
        borderTop: "1px solid rgba(124,27,50,0.25)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.85rem",
          color: "rgba(253,232,224,0.5)",
        }}
      >
        © {currentYear} SreeNarthana Natyalaya. All rights reserved.
      </Typography>

      <Box sx={{ display: "flex", gap: 3 }}>
        <Typography
          component={Link}
          to="/policies#privacy"
          sx={{
            fontSize: "0.85rem",
            color: "rgba(253,232,224,0.5)",
            textDecoration: "none",
            "&:hover": { color: "#7C1B32" },
          }}
        >
          Privacy Policy
        </Typography>

        <Typography
          component={Link}
          to="/policies#tos"
          sx={{
            fontSize: "0.85rem",
            color: "rgba(253,232,224,0.5)",
            textDecoration: "none",
            "&:hover": { color: "#7C1B32" },
          }}
        >
          Terms of Service
        </Typography>
      </Box>
    </Box>
  );
}