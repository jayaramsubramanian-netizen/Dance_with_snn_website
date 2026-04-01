import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#010101", // ⭐ GLOBAL APP BACKGROUND
      paper: "#010101",
    },
    text: {
      primary: "#FDE8E0",
    },
  },

  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});

export default theme;