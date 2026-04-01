import { Helmet } from "react-helmet-async";

import { Box, Typography } from "@mui/material";
import AboutHeroSection from "../components/About/AboutHeroSection";
import MissionVisionSection from "../components/About/MissionVisionSection";
import FounderSection from "../components/About/FounderSection";
import CommunityImpactSection from "../components/About/CommunityImpactSection";
import TestimonialsSection from "../components/About/TestimonialSection";
import { Footer } from "../components/Footer";

export default function About() {
  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          About Sree Narthana Natyalaya | Bharatanatyam School in Texas
        </title>

        <meta
          name="description"
          content="Learn about Sree Narthana Natyalaya, a Bharatanatyam dance school in Texas led by Guru Shree Nandini."
        />

        <meta
          name="keywords"
          content="sree narthana natyalaya texas, bharatanatyam school texas, indian classical dance academy texas"
        />

        <meta property="og:title" content="About Sree Narthana Natyalaya | Bharatanatyam School Texas" />
        <meta property="og:description" content="Discover our mission and journey in Bharatanatyam." />
        <meta property="og:image" content="https://dancewithsnn.com/Logo.png" />
        <meta property="og:url" content="https://dancewithsnn.com/about" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://dancewithsnn.com/about" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "DanceSchool",
              "name": "Sree Narthana Natyalaya",
              "founder": {
                "@type": "Person",
                "name": "Shree Nandini"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Spring",
                "addressRegion": "TX",
                "addressCountry": "US"
              }
            }
          `}
        </script>
      </Helmet>

      {/* UI */}
      <AboutHeroSection />
      <FounderSection />
      <MissionVisionSection />
      {/* <CommunityImpactSection /> */}
      <TestimonialsSection />
      <Footer />
    </>
  );
}
