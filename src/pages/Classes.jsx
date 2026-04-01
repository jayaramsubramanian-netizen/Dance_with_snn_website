import { Helmet } from "react-helmet-async";

import { Box, Typography } from "@mui/material";
import ClassesHeroSection from "../components/Classes/ClassesHeroSection";
import NatyamSection from "../components/Classes/NatyamSection";
import ClassesGridSection from "../components/Classes/ClassesGridSection";
import ClassScheduleSection from "../components/Classes/ClassScheduleSection";
import { Footer } from "../components/Footer";

export default function Classes() {
  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          Bharatanatyam Classes in Spring Texas | Sree Narthana Natyalaya
        </title>

        <meta
          name="description"
          content="Join Bharatanatyam classes in Spring, Texas at Sree Narthana Natyalaya under Guru Shree Nandini. Training for beginners and advanced students."
        />

        <meta
          name="keywords"
          content="bharatanatyam classes spring texas, indian classical dance texas, dance classes near me texas"
        />

        <meta property="og:title" content="Bharatanatyam Classes in Spring Texas | Sree Narthana Natyalaya" />
        <meta property="og:description" content="Structured Bharatanatyam training in Texas." />
        <meta property="og:image" content="https://dancewithsnn.com/Logo.png" />
        <meta property="og:url" content="https://dancewithsnn.com/classes" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://dancewithsnn.com/classes" />

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
      <ClassesHeroSection />
      <NatyamSection />
      <ClassScheduleSection />
      <ClassesGridSection />
      <Footer />
    </>
  );
}
