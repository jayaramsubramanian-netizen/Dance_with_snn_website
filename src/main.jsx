import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

import App from "./App";
import theme from "./theme";

const container = document.getElementById("root");

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// If the server pre-rendered content into #root, hydrate it (preserves SSG HTML
// so React attaches event listeners without re-rendering from scratch).
// Otherwise fall back to a fresh client-side render (local dev).
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}