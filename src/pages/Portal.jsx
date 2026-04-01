import { Helmet } from "react-helmet-async";

import { Box, Typography } from "@mui/material";
import PortalComponent from "../components/Portal/PortalHeroSection";
import ComingSoon from "../components/ComingSoon";
import { FooterBottom } from "../components/FooterBottom";

export default function Portal() {
  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>Student Portal | Sree Narthana Natyalaya (Dance With SNN)</title>

        <meta
          name="description"
          content="Login to the Sree Narthana Natyalaya (Dance With SNN) student portal to access class materials, updates, and resources."
        />

        {/* 🚨 IMPORTANT: prevent indexing */}
        <meta name="robots" content="noindex, nofollow" />

        <meta property="og:title" content="Student Portal | Sree Narthana Natyalaya" />
        <meta property="og:type" content="website" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://dancewithsnn.com/portal"
        />
      </Helmet>

      {/* UI */}
      <PortalComponent />
      <FooterBottom />
      {/* <ComingSoon /> */}
    </>
  );
}
