import { Helmet } from "react-helmet-async";

import { Box, Typography } from "@mui/material";
import ContactSection from "../components/Contact/ContactHeroSection";
import { FooterBottom } from "../components/FooterBottom";

export default function Contact() {
  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          Contact Sree Narthana Natyalaya | Bharatanatyam Classes in Spring Texas
        </title>

        <meta
          name="description"
          content="Contact Sree Narthana Natyalaya in Spring, Texas for Bharatanatyam classes under Guru Shree Nandini."
        />

        <meta
          name="keywords"
          content="bharatanatyam classes spring texas, dance classes near me texas, indian classical dance texas"
        />

        <meta property="og:title" content="Contact Sree Narthana Natyalaya" />
        <meta property="og:description" content="Reach out to join Bharatanatyam classes." />
        <meta property="og:image" content="https://dancewithsnn.com/Logo.png" />
        <meta property="og:url" content="https://dancewithsnn.com/contact" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://dancewithsnn.com/contact" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "DanceSchool",
              "name": "Sree Narthana Natyalaya",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "27938 Robinson Park Dr",
                "addressLocality": "Spring",
                "addressRegion": "TX",
                "postalCode": "77386",
                "addressCountry": "US"
              },
              "telephone": "+16307505272"
            }
          `}
        </script>
      </Helmet>

      {/* UI */}
      <ContactSection />
      <FooterBottom />
    </>
  );
}
