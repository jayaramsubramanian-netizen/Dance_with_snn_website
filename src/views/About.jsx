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
              "alternateName": "Dance With SNN",
              "url": "https://dancewithsnn.com/about",
              "founder": {
                "@type": "Person",
                "name": "Shree Nandini",
                "jobTitle": "Bharatanatyam Guru",
                "worksFor": {
                  "@type": "DanceSchool",
                  "name": "Sree Narthana Natyalaya"
                }
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "27938 Robinson Park Dr",
                "addressLocality": "Spring",
                "addressRegion": "TX",
                "postalCode": "77386",
                "addressCountry": "US"
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://dancewithsnn.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://dancewithsnn.com/about"
                }
              ]
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
